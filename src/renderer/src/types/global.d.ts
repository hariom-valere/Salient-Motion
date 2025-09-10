export {};

declare global {
  interface Window {
    api: {
      auth: {
        login: (credentials: { email: string; password: string }) => Promise<any>;
        resetPassword: (email: string) => Promise<any>;
        forgotPassword: (email: string) => Promise<any>;
        logout: () => Promise<any>;
      };
      device: {
        connect: (deviceId: string) => Promise<any>;
        disconnect: () => Promise<any>;
      };
    };
  }
}
