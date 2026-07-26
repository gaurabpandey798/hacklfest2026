export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* 
        This is where we compose our sections:
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Judges />
        <Sponsors />
        <FAQ />
      */}
      <section className="w-full min-h-[80vh] flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground tracking-tight">
            MBMC HackFest 2026
          </h1>
          <p className="text-xl text-muted-foreground">
            Phase 1 Foundation Complete. Ready for component integration.
          </p>
        </div>
      </section>
    </main>
  );
}
