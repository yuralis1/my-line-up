namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    TWITCH_CLIENT_ID: string;
    TWITCH_CLIENT_SECRET: string;
    POSTGRES_DATABASE: string;
    POSTGRES_HOST: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_PRISMA_URL: string;
    POSTGRES_URL: string;
    POSTGRES_URL_NON_POOLING: string;
    POSTGRES_USER: string;
  }
}
