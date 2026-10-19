import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page wandered off.</h1>
      <Link href="/" className="mt-8 rounded-full bg-accent px-6 py-3 font-medium text-ink">
        Back home
      </Link>
    </section>
  );
}
