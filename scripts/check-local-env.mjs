import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const localEnvPath = resolve(root, '.env.local');
const exampleEnvPath = resolve(root, '.env.example');

function valueFromFile(path, name) {
  if (!existsSync(path)) {
    return undefined;
  }

  const line = readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .find((candidate) => candidate.trim().startsWith(`${name}=`));

  if (!line) {
    return undefined;
  }

  const value = line
    .slice(name.length + 1)
    .trim()
    .replace(/^['"]|['"]$/g, '');
  return value || undefined;
}

const apiKey = process.env.OPENAI_API_KEY ?? valueFromFile(localEnvPath, 'OPENAI_API_KEY');
const problems = [];

if (!existsSync(localEnvPath)) {
  problems.push('missing .env.local (run: make prepare-local-env)');
}

if (!apiKey) {
  problems.push('missing OPENAI_API_KEY in the environment or .env.local');
}

if (problems.length > 0) {
  console.error('local env: not ready');
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exitCode = 1;
} else {
  console.log(`local env: ready (template: ${exampleEnvPath})`);
}
