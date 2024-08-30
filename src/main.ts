import { parseStream } from 'music-metadata';
import { createReadStream } from 'node:fs';

async function main() {
  try {
    // Create a readable stream from a file
    const audioStream = createReadStream('src/assets/EinsZweiDrei.wav');

    // Parse the metadata from the stream
    const metadata = await parseStream(audioStream, { mimeType: 'audio/wav' });

    // Log the parsed metadata
    console.log(metadata);
  } catch (error) {
    console.error('Error parsing metadata:', error.message);
  }
}

main();
