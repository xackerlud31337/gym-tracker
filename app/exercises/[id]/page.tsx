import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/page-container";
import { prisma } from "@/lib/prisma";
import ExerciseDetailCard from "./exercise-detail-card";

type ExercisePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExerciseDetailPage({
  params,
}: ExercisePageProps) {
  const { id } = await params;

  const exercise = await prisma.exercise.findUnique({
    where: { id },
  });

  if (!exercise) {
    notFound();
  }

  return (
    <PageContainer
      title={exercise.name}
      description="Exercise details and future progression history."
    >
      <ExerciseDetailCard exercise={exercise} />
    </PageContainer>
  );
}
