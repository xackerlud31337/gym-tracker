import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Gym Tracker
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Track workouts and progressive overload with less friction.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Log exercises, sets, reps, and weight. Review your history over
            time and see whether you are actually getting stronger.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Create account
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Log in
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h2 className="text-lg font-semibold">Log workouts</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Create workout sessions and quickly enter sets, reps, and weight.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h2 className="text-lg font-semibold">Track progress</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Compare current performance with previous sessions and personal
              bests.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
            <h2 className="text-lg font-semibold">Stay consistent</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Review your training history and keep progressive overload
              visible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
