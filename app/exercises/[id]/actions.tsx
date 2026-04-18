"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function updateExercise(id: string, formData: FormData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const muscleGroup = formData.get("muscleGroup")?.toString().trim() ?? "";
  const notes = formData.get("notes")?.toString().trim() ?? "";

  if (!name || !muscleGroup) {
    return;
  }

  await prisma.exercise.update({
    where: { id },
    data: {
      name,
      muscleGroup,
      notes: notes || null,
    },
  });

  revalidatePath("/exercises");
  revalidatePath(`/exercises/${id}`);
  redirect(`/exercises/${id}`);
}

export async function deleteExercise(id: string) {
  await prisma.exercise.delete({
    where: {
      id,
    },
  });

  revalidatePath("/exercises");
  redirect("/exercises");
}
