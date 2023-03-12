import { App } from "../app";

export const requireAuth = (app: App) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (app as any).authenticate;
};
