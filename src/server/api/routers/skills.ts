import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { skillType } from "@prisma/client";
import { db } from "~/server/db";

export const skillRouter = createTRPCRouter({
  getSkillByType: publicProcedure
    .input(
      z.object({
        skillType: z.nativeEnum(skillType),
      }),
    )
    .query(({ input }) => {
      return db.skill.findMany({
        where: {
          type: input.skillType,
        },
        orderBy: {
          years: "desc",
        },
      });
    }),
});
