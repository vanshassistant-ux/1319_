// DEPRECATED. Superseded by scripts/editorial-accept-topic.mjs, which validates a topic
// against the full editorial gate before merging. This wrapper remains so that
// `bun run phase1:promote <topic-id>` keeps working; it resolves the review file from the
// topic record rather than the single hard-coded path it used to assume.
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const topicId = process.argv[2];
if (!topicId) throw new Error('Usage: promote-reviewed-topic.mjs <topic-id>');
const phase = Number(process.argv[3] ?? 1);

const progress = JSON.parse(await readFile(`content/phase-${phase}/content-progress.json`, 'utf8'));
if (!progress.topics.some(topic => topic.id === topicId)) throw new Error(`Topic not found in phase ${phase}: ${topicId}`);

console.warn('promote-reviewed-topic is deprecated; delegating to editorial-accept-topic.');
const result = spawnSync('bun', ['scripts/editorial-accept-topic.mjs', String(phase), topicId], { stdio: 'inherit' });
process.exit(result.status ?? 1);
