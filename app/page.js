import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        ShiftFlow
      </span>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text sm:text-5xl">
        Rostering that runs itself.
      </h1>
      <p className="max-w-xl text-lg text-text-muted">
        Landing page placeholder — Challenge 1 goes here.
      </p>
      <Link
        href="/dashboard"
        className="rounded-lg bg-primary px-5 py-2.5 font-medium text-surface transition-colors hover:bg-primary-dark"
      >
        View the dashboard
      </Link>
    </main>
  );
}
