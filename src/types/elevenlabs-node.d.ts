declare module 'elevenlabs-node' {
  export class ElevenLabs {
    constructor(config: { apiKey: string; voiceId: string });
    textToSpeech(text: string): Promise<Buffer>;
  }
} 