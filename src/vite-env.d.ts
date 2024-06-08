/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SPEECH_KEY: string;
  readonly VITE_SPEECH_REGION: string;
  readonly VITE_ISSUE_TOKEN_ENDPOINT: string;
  readonly VITE_SPEECH_REGION_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
