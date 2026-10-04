import { copyFileSync, cpSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const htmlSource = existsSync(join(dist, 'dev.html'))
  ? join(dist, 'dev.html')
  : join(dist, 'index.html');

// 1. Ensure dist/index.html exists
if (existsSync(htmlSource)) {
  copyFileSync(htmlSource, join(dist, 'index.html'));
  copyFileSync(htmlSource, join(root, 'index.html'));
  console.log('✓ Synced compiled HTML to root index.html & dist/index.html');
}

// 2. Copy dist/assets to root assets
if (existsSync(join(dist, 'assets'))) {
  cpSync(join(dist, 'assets'), join(root, 'assets'), { recursive: true });
  console.log('✓ Synced dist/assets -> root assets/');
}

// 3. Copy dist to docs/ folder (supports GitHub Pages /docs source)
const docs = join(root, 'docs');
cpSync(dist, docs, { recursive: true });
if (existsSync(join(root, 'CNAME'))) {
  copyFileSync(join(root, 'CNAME'), join(docs, 'CNAME'));
  copyFileSync(join(root, 'CNAME'), join(dist, 'CNAME'));
}
writeFileSync(join(docs, '.nojekyll'), '');
console.log('✓ Synced dist -> docs/ (with CNAME & .nojekyll)');

// 4. Create .nojekyll at root
writeFileSync(join(root, '.nojekyll'), '');
console.log('✓ Created .nojekyll at root');
