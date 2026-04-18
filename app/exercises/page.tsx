import PageContainer from "@/components/layout/page-container";
import { prisma } from "@/lib/prisma";

export default async function ExercisesPage() {
  const exercises = await prisma.exercise.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <PageContainer
      title="Exercises"
      description="View your exercises and their progress."
    >
      {exercises.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-6 text-zinc-400">
          No exercises yet.
        </div>
      ) : (
        <div className="grid gap-4">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
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
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
