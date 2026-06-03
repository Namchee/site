import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetFile = path.join(__dirname, 'node_modules/astro-tweet/src/utils.ts');

try {
  if (!fs.existsSync(targetFile)) {
    console.log(`[patch-astro-tweet] Target file not found at ${targetFile}. Skipping patch.`);
    process.exit(0);
  }

  let content = fs.readFileSync(targetFile, 'utf8');

  // The exact block of code you want to replace
  const originalSegment = `  addEntities(result, "hashtag", tweet.entities.hashtags);
  addEntities(result, "mention", tweet.entities.user_mentions);
  addEntities(result, "url", tweet.entities.urls);
  addEntities(result, "symbol", tweet.entities.symbols);
  if (tweet.entities.media) {
    addEntities(result, "media", tweet.entities.media);
  }`;

  // Your new updated logic
  const updatedSegment = `  addEntities(result, "hashtag", tweet.entities.hashtags ?? []);
  addEntities(result, "mention", tweet.entities.user_mentions ?? []);
  addEntities(result, "url", tweet.entities.urls ?? []);
  addEntities(result, "symbol", tweet.entities.symbols ?? []);
  addEntities(result, "media", tweet.entities.media ?? []);`;

  // Check if the file has already been patched to avoid duplicate tracking
  if (content.includes(updatedSegment)) {
    console.log('[patch-astro-tweet] File is already patched.');
    process.exit(0);
  }

  // Swap the code blocks if the original segment is found
  if (content.includes(originalSegment)) {
    content = content.replace(originalSegment, updatedSegment);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('✅ [patch-astro-tweet] Successfully patched astro-tweet/src/utils.ts');
  } else {
    // Robust fallback: Check using a more flexible RegExp in case indentation differs slightly
    const flexibleRegex = /addEntities\(result,\s*"hashtag",\s*tweet\.entities\.hashtags\);[\S\s]*?if\s*\(tweet\.entities\.media\)\s*{\s*addEntities\(result,\s*"media",\s*tweet\.entities\.media\);\s*}/;

    if (flexibleRegex.test(content)) {
      content = content.replace(flexibleRegex, updatedSegment);
      fs.writeFileSync(targetFile, content, 'utf8');
      console.log('✅ [patch-astro-tweet] Successfully patched astro-tweet/src/utils.ts (via regex matching)');
    } else {
      console.error('❌ [patch-astro-tweet] Patch failed: Target code lines not found in utils.ts.');
      process.exit(1);
    }
  }
} catch (error) {
  console.error('❌ [patch-astro-tweet] Failed to execute postinstall patch:', error.message);
  process.exit(1);
}
