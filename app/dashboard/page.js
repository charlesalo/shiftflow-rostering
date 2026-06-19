import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="rounded-full bg-accent/15 px-4 py-1 text-sm font-medium text-warning">
        Weekly Roster
      </span>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-text sm:text-5xl">
        Dashboard
      </h1>
      <p className="max-w-xl text-lg text-text-muted">
        Dashboard placeholder — Challenge 2 goes here.
      </p>
      <Link
        href="/"
        className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary transition-colors hover:bg-primary/5"
      >
        Back to landing
      </Link>
    </main>
  );
}
