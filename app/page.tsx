import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WorkGrid from "@/components/WorkGrid";
import { site } from "@/lib/site";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            {site.available && (
              <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for new projects
              </p>
            )}
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-4 text-lg text-muted">
              Hi, I&apos;m {site.name} — {site.role}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {site.headline}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg text-muted">{site.intro}</p>
          </Reveal>
          <Reveal delay={320} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-ink transition-transform hover:scale-105"
            >
              View my work <Arrow />
            </Link>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-20 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-8">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Skills marquee */}
      <div className="overflow-hidden border-y border-line py-6" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-2xl font-medium text-muted sm:text-3xl">
          {[...site.skills, ...site.skills].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              {s}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I'm proud of"
            body="A selection of product, web and mobile design work. Open any project for the full case study."
          />
          <WorkGrid />
          <Reveal className="mt-16 text-center">
            <a
              href={site.socials.find((s) => s.label === "Behance")?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-medium transition-colors hover:border-white/40"
            >
              See more on Behance <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-panel">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[60%_30%]"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-line bg-ink/70 p-4 backdrop-blur">
                <p className="font-medium">{site.name}</p>
                <p className="text-sm text-muted">
                  {site.role} · {site.location}
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="About me" title="Design that starts with people" />
            <Reveal className="space-y-5 text-lg text-muted">
              {site.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="mt-12">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Tools I use</h3>
              <ul className="flex flex-wrap gap-2">
                {site.tools.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-panel px-4 py-2 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="mt-12">
              <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">Experience</h3>
              <ol className="divide-y divide-line border-y border-line">
                {site.experience.map((e) => (
                  <li key={e.period} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr]">
                    <span className="font-mono text-sm text-muted">{e.period}</span>
                    <div>
                      <p className="font-medium">
                        {e.title} <span className="text-muted">· {e.org}</span>
                      </p>
                      <p className="mt-1 text-sm text-muted">{e.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Services" title="How I can help" body="End-to-end design, or the piece you need most." />
          <div className="grid gap-4 sm:grid-cols-2">
            {site.services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 2) * 100}
                className="group rounded-3xl border border-line bg-panel p-8 transition-colors hover:border-accent/50"
              >
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Process" title="From idea to shipped product" />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
            {site.process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 100} className="border-t border-line pt-6">
                <span className="font-mono text-sm text-accent">{p.step}</span>
                <h3 className="mt-4 text-xl font-medium">{p.title}</h3>
                <p className="mt-2 text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 px-6 pb-24 sm:pb-32">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 text-ink sm:px-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em]">Contact</p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Building something? Let&apos;s make it great.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink/75">
            Need a designer who gets both the strategy and the pixels? I&apos;d love to hear about your project.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-white transition-transform hover:scale-105"
          >
            {site.email} <Arrow />
          </a>
          <a
            href={site.phoneHref}
            className="mt-4 ml-0 inline-flex items-center gap-3 rounded-full border border-ink/25 px-7 py-4 font-medium transition-colors hover:bg-ink/10 sm:ml-3"
          >
            {site.phone}
          </a>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-medium">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
