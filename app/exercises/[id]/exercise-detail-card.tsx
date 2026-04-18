"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { deleteExercise, updateExercise } from "./actions";

type ExerciseDetailCardProps = {
  exercise: {
    id: string;
    name: string;
    muscleGroup: string;
    notes: string | null;
  };
};

function SaveButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={disabled || pending}
      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Saving..." : "Save changes"}
    </button>
  );
}

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full border border-red-500 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Deleting..." : "Delete exercise"}
    </button>
  );
}

export default function ExerciseDetailCard({
  exercise,
}: ExerciseDetailCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(exercise.name);
  const [muscleGroup, setMuscleGroup] = useState(exercise.muscleGroup);
  const [notes, setNotes] = useState(exercise.notes ?? "");

  const originalNotes = exercise.notes ?? "";

  const isDirty =
    name.trim() !== exercise.name ||
    muscleGroup.trim() !== exercise.muscleGroup ||
    notes.trim() !== originalNotes;

  const updateExerciseWithId = updateExercise.bind(null, exercise.id);
  const deleteExerciseWithId = deleteExercise.bind(null, exercise.id);

  function handleCancel() {
    setName(exercise.name);
    setMuscleGroup(exercise.muscleGroup);
    setNotes(exercise.notes ?? "");
    setIsEditing(false);
  }

  return (
    <div className="grid gap-4">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Exercise details
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              View the current info or switch to edit mode when needed.
            </p>
          </div>

          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-950"
            >
              Edit
            </button>
          ) : null}
        </div>

        {!isEditing ? (
          <div className="mt-6 grid gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-400">Name</p>
              <p className="mt-1 text-zinc-100">{exercise.name}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-400">Muscle group</p>
              <p className="mt-1 text-zinc-100">{exercise.muscleGroup}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-400">Notes</p>
              <p className="mt-1 text-zinc-100">
                {exercise.notes || "No notes yet."}
              </p>
            </div>
          </div>
        ) : (
          <form action={updateExerciseWithId} className="mt-6 grid gap-4">
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
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none"
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
                value={muscleGroup}
                onChange={(event) => setMuscleGroup(event.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none"
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
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <SaveButton disabled={!isDirty} />

              <button
                type="button"
                onClick={handleCancel}
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-950"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-700 p-5 text-zinc-400">
        Workout history and progressive overload stats will go here later.
      </div>

      <form action={deleteExerciseWithId}>
        <DeleteButton />
      </form>
    </div>
  );
}

