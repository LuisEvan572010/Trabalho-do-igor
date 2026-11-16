const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const publicDir = __dirname;
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };

const server = http.createServer((request, response) => {
  const method = request.method || 'GET';
  if (method !== 'GET' && method !== 'HEAD') {
    response.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', 'Allow': 'GET, HEAD' });
    response.end('Método não permitido');
    return;
  }
  let pathname;
  try {
    pathname = new URL(request.url, 'http://localhost').pathname;
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Endereço inválido');
    return;
  }
  let requestedPath;
  try {
    requestedPath = pathname === '/' ? '/index.html' : decodeURIComponent(pathname);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Endereço inválido');
    return;
  }
  const resolved = path.resolve(publicDir, `.${requestedPath}`);
  if (!resolved.startsWith(`${publicDir}${path.sep}`) && resolved !== publicDir) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Acesso negado');
    return;
  }
  const sendFile = filePath => fs.readFile(filePath, (error, data) => {
    if (error) {
      if ((error.code === 'ENOENT' || error.code === 'EISDIR') && !path.extname(requestedPath) && filePath !== path.join(publicDir, 'index.html')) {
        sendFile(path.join(publicDir, 'index.html'));
        return;
      }
      response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(error.code === 'ENOENT' ? 'Não encontrado' : 'Erro interno');
      return;
    }
    response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
    response.end(method === 'HEAD' ? undefined : data);
  });
  sendFile(resolved);
});

const port = Number(process.env.PORT || 3000);
server.listen(port, '0.0.0.0', () => console.log(`Caderno de Dados disponível na porta ${port}`));
