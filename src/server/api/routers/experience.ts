import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { experienceType } from "@prisma/client";
import { db } from "~/server/db";

export const experienceRouter = createTRPCRouter({
  getExperiencesByType: publicProcedure
    .input(
      z.object({
        experienceType: z.nativeEnum(experienceType),
        isPrimary: z.optional(z.boolean()),
      }),
    )
    .query(({ input }) => {
      const isPrimary =
        input.experienceType === "workExperience" && input.isPrimary;
      const limitAmount =
        input.experienceType === "competition" && input.isPrimary
          ? 10
          : undefined;
      return db.experience.findMany({
        where: {
          type: input.experienceType,
          isPrimary: isPrimary,
        },
        orderBy: {
          startDate: "desc",
        },
        take: limitAmount,
      });
    }),
});
