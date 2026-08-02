import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const sourcePath = resolve(root, '.env.example');
const destinationPath = resolve(root, '.env.local');

if (existsSync(destinationPath)) {
  console.log('.env.local already exists; leaving it unchanged.');
} else {
  copyFileSync(sourcePath, destinationPath);
  console.log(
    'Created .env.local from .env.example. Add local credentials before running the CLI.',
  );
}
