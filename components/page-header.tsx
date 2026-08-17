export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-40%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-32 md:pt-40">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
