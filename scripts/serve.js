import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, isAbsolute, join, normalize, relative } from 'node:path';

const host = '127.0.0.1';
const port = 4173;
const root = process.cwd();
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml'
};

createServer((request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url, `http://${host}`).pathname);
  const relativePath = normalize(urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, ''));
  const filePath = join(root, relativePath);
  const pathFromRoot = relative(root, filePath);

  if (pathFromRoot.startsWith('..') || isAbsolute(pathFromRoot) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, { 'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream' });
  createReadStream(filePath).pipe(response);
}).listen(port, host, () => {
  process.stdout.write(`Portfolio server: http://${host}:${port}\n`);
});
