import Link from "next/link";
import PageContainer from "@/components/layout/page-container";
import { prisma } from "@/lib/prisma";
import { createExercise } from "./actions";

export default async function ExercisesPage() {
  const exercises = await prisma.exercise.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <PageContainer
      title="Exercises"
      description="Create and manage your exercises."
    >
      <form
        action={createExercise}
        className="mb-8 grid gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
      >
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Exercise name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Bench Press"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div>
          <label
            htmlFor="muscleGroup"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Muscle group
          </label>
          <input
            id="muscleGroup"
            name="muscleGroup"
            type="text"
            required
            placeholder="Chest"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div>
          <label
            htmlFor="notes"
            className="mb-2 block text-sm font-medium text-zinc-200"
          >
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            placeholder="Optional notes..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <button
          type="submit"
          className="w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Add exercise
        </button>
      </form>

      {exercises.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-6 text-zinc-400">
          No exercises yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {exercises.map((exercise) => (
            <Link
              key={exercise.id}
              href={`/exercises/${exercise.id}`}
              className="block rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-zinc-700 hover:bg-zinc-900"
            >
              <h2 className="text-lg font-semibold text-white">
                {exercise.name}
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                {exercise.muscleGroup}
              </p>

              {exercise.notes ? (
                <p className="mt-3 text-sm text-zinc-300">{exercise.notes}</p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
