import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const epitaph = "Darling, if this is how you take criticism, your next husband is going to love your lasagna.";

try {
  const count = [...epitaph].length;
  if (count < 1 || count > 150 || !epitaph.trim() || /[\r\n]/u.test(epitaph)) {
    throw new Error('Epitaph must be one nonblank line of 1 to 150 characters.');
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), epitaph, 'utf8');
} catch (error) {
  console.error(`Failed to write epitaph: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}
