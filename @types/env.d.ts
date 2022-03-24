declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONVERT_KIT_API_URL: string;
      CONVERT_KIT_API_KEY: string;
      CONVERT_KIT_API_FORM_ID: number;
    }
  }

  interface Window {
    ENV: {
      CONVERT_KIT_API_URL: string;
      CONVERT_KIT_API_KEY: string;
      CONVERT_KIT_API_FORM_ID: number;
    };
  }
}

export {};
