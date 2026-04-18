"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createExercise(formData: FormData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const muscleGroup = formData.get("muscleGroup")?.toString().trim() ?? "";
  const notes = formData.get("notes")?.toString().trim() ?? "";

  if (!name || !muscleGroup) {
    return;
  }

  await prisma.exercise.create({
    data: {
      name,
      muscleGroup,
      notes: notes || null,
      userId: "demo-user",
    },
  });

  revalidatePath("/exercises");
}
