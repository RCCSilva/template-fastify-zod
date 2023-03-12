import { z } from "zod";
import { App } from "~/app";
import { requireAuth } from "~/utils/require-auth";

const CreateUserSchemaV1 = z.object({
  username: z.string().max(32).describe("Some description for username"),
  password: z.string().max(32),
});

export const postCreateUserV1 = (app: App) => {
  app.post(
    "/api/v1/user",
    {
      onRequest: requireAuth(app),
      schema: {
        body: CreateUserSchemaV1,
        response: {
          201: z.object({
            username: z.string()
          })
        }
      },
    },
    async (request, reply) => {
      const { username } = request.body;

      return reply
        .status(201)
        .send({ username });
    }
  );
};
