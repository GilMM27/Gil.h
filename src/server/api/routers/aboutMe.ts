import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { experienceType } from "@prisma/client";
import { db } from "~/server/db";

export const aboutMeRouter = createTRPCRouter({
  getAboutMe: publicProcedure.input(z.object({})).query(({ input }) => {
    return db.aboutMe.findFirst();
  }),
});
