import { ReactNode } from "react";

type PageContainerProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

        {description ? (
          <p className="mt-3 text-zinc-400">{description}</p>
        ) : null}

        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
