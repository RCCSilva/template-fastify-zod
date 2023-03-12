import { App } from "~/app";
import { postCreateUserV1 } from "./handlers/create";

export const userRoutesV1 = (fastify: App, opts: object, done: (err?: Error) => void) => {
  postCreateUserV1(fastify);

  done();
};
