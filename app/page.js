const GAMES = [
  {
    id: "migration",
    title: "MIGRATION",
    tag: "Open-World Survival",
    price: "₹1,499",
    cut: "20%",
    coords: "01°N, 36°E",
    image:
      "https://images.pexels.com/photos/12339600/pexels-photo-12339600.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "apex",
    title: "APEX: FOOD CHAIN",
    tag: "Predator vs. Prey",
    price: "₹999",
    cut: null,
    coords: "24°S, 21°E",
    image:
      "https://images.pexels.com/photos/10399169/pexels-photo-10399169.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "coral",
    title: "CORAL: DEEP REEF",
    tag: "Underwater Exploration",
    price: "₹1,199",
    cut: "35%",
    coords: "16°S, 145°E",
    image:
      "https://images.pexels.com/photos/4618226/pexels-photo-4618226.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "permafrost",
    title: "PERMAFROST",
    tag: "Arctic Roguelike",
    price: "₹1,299",
    cut: null,
    coords: "78°N, 16°E",
    image:
      "https://images.pexels.com/photos/18991876/pexels-photo-18991876.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "canopy",
    title: "CANOPY",
    tag: "Vertical Platformer",
    price: "₹799",
    cut: "10%",
    coords: "03°S, 60°W",
    image:
      "https://images.pexels.com/photos/4530523/pexels-photo-4530523.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "monsoon",
    title: "MONSOON",
    tag: "Narrative Adventure",
    price: "₹899",
    cut: null,
    coords: "22°N, 88°E",
    image:
      "https://images.pexels.com/photos/8903157/pexels-photo-8903157.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const SCREENSHOTS = [
  {
    label: "Serengeti",
    image:
      "https://images.pexels.com/photos/12339600/pexels-photo-12339600.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    label: "River Crossing",
    image:
      "https://images.pexels.com/photos/30629757/pexels-photo-30629757.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    label: "Predator AI",
    image:
      "https://images.pexels.com/photos/10399169/pexels-photo-10399169.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    label: "Night Camp",
    image:
      "https://images.pexels.com/photos/15815060/pexels-photo-15815060.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const HERO_IMAGE =
  "https://images.pexels.com/photos/15815060/pexels-photo-15815060.jpeg?auto=compress&cs=tinysrgb&w=1000";

const FEATURES = [
  {
    label: "01",
    title: "Real coordinates, real footage",
    body: "Every biome is built from actual NatGeo field archives: 4K terrain scans, verified wildlife behavior, and real migration data driving the AI.",
  },
  {
    label: "02",
    title: "Scientifically reviewed ecosystems",
    body: "Our staff biologists sign off on every food web. If a jaguar shouldn't be there, it isn't there.",
  },
  {
    label: "03",
    title: "Play all seven continents",
    body: "One account, one library, every expedition from the Serengeti to the Ross Ice Shelf.",
  },
  {
    label: "04",
    title: "Field Photography Mode",
    body: "Pause any expedition to shoot, frame, and submit your own cover-worthy shot. Top entries get printed.",
  },
];

const REPORTS = [
  {
    name: "R. Adaeze",
    role: "Field Verified Purchase",
    quote:
      "I have watched every migration documentary twice. Playing MIGRATION and actually routing the herd myself is a different kind of understanding entirely.",
    stamp: "APPROVED",
  },
  {
    name: "T. Okafor",
    role: "412 hrs on record",
    quote:
      "CORAL: Deep Reef is the first game that made me plan a dive trip afterward. The bleaching mechanic alone should be taught in schools.",
    stamp: "VERIFIED",
  },
  {
    name: "M. Iyer",
    role: "Expedition Leader, Tier 3",
    quote:
      "PERMAFROST punishes you the way the Arctic actually would. No fast travel, no mercy, no notes. Exactly what I wanted.",
    stamp: "LOGGED",
  },
];

function GameCard({ game }) {
  return (
    <div className="field-frame crop-marks relative shrink-0 w-[260px] sm:w-[280px] h-[360px] flex flex-col overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={game.image}
        alt={game.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-expedition-night via-expedition-night/55 to-expedition-night/10" />

      <div className="relative flex items-start justify-between p-4 font-mono text-[11px] text-ng-cream/70">
        <span className="bg-expedition-night/70 px-1.5 py-0.5">{game.coords}</span>
        {game.cut && (
          <span className="bg-ng-yellow text-expedition-night px-1.5 py-0.5 font-semibold">
            -{game.cut}
          </span>
        )}
      </div>

      <div className="relative mt-auto p-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ng-ice mb-1">
          {game.tag}
        </p>
        <h3 className="font-display text-xl text-ng-cream leading-tight mb-3">
          {game.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-ng-yellow">{game.price}</span>
          <button className="font-mono text-[11px] uppercase tracking-wide border border-ng-yellow text-ng-yellow px-2.5 py-1.5 hover:bg-ng-yellow hover:text-expedition-night transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-expedition-night text-ng-cream min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-expedition-line bg-expedition-night/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="border-2 border-ng-yellow px-1.5 py-0.5 font-display font-semibold text-ng-yellow text-sm">
              NG
            </span>
            <span className="font-display text-lg tracking-wide">
              NatGeo <span className="text-ng-yellow">Play</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-ng-cream/70">
            <a href="#store" className="hover:text-ng-yellow transition-colors">Store</a>
            <a href="#why" className="hover:text-ng-yellow transition-colors">Why NatGeo</a>
            <a href="#flagship" className="hover:text-ng-yellow transition-colors">Migration</a>
            <a href="#reports" className="hover:text-ng-yellow transition-colors">Field Reports</a>
          </nav>
          <a
            href="#flagship"
            className="font-mono text-xs uppercase tracking-widest bg-ng-yellow text-expedition-night px-4 py-2 font-semibold hover:bg-ng-yellow-deep transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-expedition-line">
        <div className="absolute inset-0 topo-lines bg-topo" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ng-ice mb-4">
              Field Dispatch · New Expedition Live
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-6">
              Play the
              <br />
              <span className="italic text-ng-yellow">planet,</span>
              <br />
              not the plot.
            </h1>
            <p className="max-w-lg text-ng-cream/75 text-base sm:text-lg mb-8 leading-relaxed">
              NatGeo Play is the expedition-grade game store; every world built from
              the same field archives behind 130 years of yellow-bordered magazines.
              No cutscenes. Coordinates.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#flagship"
                className="font-mono text-sm uppercase tracking-widest bg-ng-yellow text-expedition-night px-6 py-3.5 font-semibold hover:bg-ng-yellow-deep transition-colors"
              >
                Add Migration to Cart — ₹1,499
              </a>
              <a
                href="#store"
                className="font-mono text-sm uppercase tracking-widest border border-ng-cream/30 px-6 py-3.5 hover:border-ng-yellow hover:text-ng-yellow transition-colors"
              >
                Browse Store
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 font-mono text-[11px] text-ng-cream/50 uppercase tracking-widest">
              <span>18,204 explorers online</span>
              <span className="w-1 h-1 rounded-full bg-ng-cream/30" />
              <span>Overwhelmingly Positive</span>
            </div>
          </div>

          <div className="field-frame crop-marks relative aspect-[4/5] flex flex-col justify-between overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Migration — open-world wildlife survival"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-expedition-night via-expedition-night/45 to-expedition-night/10" />

            <div className="relative flex items-center justify-between p-6 font-mono text-[11px] text-ng-cream/70">
              <span className="bg-expedition-night/70 px-1.5 py-0.5">SPECIMEN 01 / MIGRATION</span>
              <span className="stamp bg-expedition-night/70 px-2 py-0.5 text-[10px] font-mono">FEATURED</span>
            </div>
            <div className="relative p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ng-ice mb-1">
                Open-World Survival
              </p>
              <h2 className="font-display text-3xl mb-2">MIGRATION</h2>
              <p className="text-sm text-ng-cream/80 leading-relaxed">
                Lead a herd of 40,000 wildebeest across 900km of procedurally
                accurate Serengeti. One route. One season. No respawns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-b border-expedition-line bg-expedition-panel py-3 overflow-hidden">
        <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-ng-cream/50 whitespace-nowrap flex gap-10 px-6 sm:px-10 max-w-7xl mx-auto">
          <span>Now Trending — Permafrost 78°N</span>
          <span>·</span>
          <span>New Patch — Coral 1.4 Bleaching Update</span>
          <span>·</span>
          <span>Weekend Deal — Canopy -10%</span>
          <span>·</span>
          <span>Field Report — 4.8 / 5 average across 12,900 reviews</span>
        </div>
      </div>

      {/* TRENDING STORE */}
      <section id="store" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ng-ice mb-4">
              The Store
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Trending Expeditions</h2>
          </div>
          <span className="hidden sm:block font-mono text-xs text-ng-cream/40">
            Scroll for more →
          </span>
        </div>
        <div className="carousel flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* WHY NATGEO PLAY */}
      <section id="why" className="border-y border-expedition-line bg-expedition-panel">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ng-ice mb-4">
            Field Notes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-12 max-w-xl">
            Built by the people who mapped the planet first.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-expedition-line">
            {FEATURES.map((f) => (
              <div key={f.label} className="bg-expedition-night p-6 sm:p-7 h-full">
                <span className="font-mono text-ng-yellow text-sm">{f.label}</span>
                <h3 className="font-display text-xl mt-4 mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-ng-cream/65 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP DEEP DIVE / BUY BOX */}
      <section id="flagship" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ng-ice mb-4">
              Flagship Expedition
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">MIGRATION</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {SCREENSHOTS.map((shot) => (
                <div
                  key={shot.label}
                  className="field-frame relative aspect-[4/3] overflow-hidden flex items-end p-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.image}
                    alt={shot.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-expedition-night/90 via-transparent to-transparent" />
                  <span className="relative font-mono text-[10px] uppercase tracking-wide text-ng-cream/90">
                    {shot.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-ng-cream/75 leading-relaxed max-w-2xl mb-6">
              You don&apos;t control a hero. You control a herd - sourced from real
              tracking-collar data collected across three migration seasons. Read the
              land wrong and the river takes a third of your numbers. Read it right
              and you make the cover.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-ng-cream/60">
              {["Survival", "Simulation", "Single-Player", "Photo Mode", "PC/Mac"].map(
                (t) => (
                  <span key={t} className="border border-expedition-line px-2.5 py-1">
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <aside className="field-frame crop-marks p-6 lg:sticky lg:top-24">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ng-cream/50 mb-2">
              Field Kit — Standard Edition
            </p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-mono text-xs text-ng-cream/40 line-through">
                ₹1,899
              </span>
              <span className="font-mono text-2xl text-ng-yellow">₹1,499</span>
            </div>
            <p className="font-mono text-[11px] text-ng-cream/50 mb-6">
              20% off · Field Dispatch offer
            </p>
            <button className="w-full font-mono text-sm uppercase tracking-widest bg-ng-yellow text-expedition-night py-3.5 font-semibold hover:bg-ng-yellow-deep transition-colors mb-3">
              Add to Cart
            </button>
            <button className="w-full font-mono text-sm uppercase tracking-widest border border-ng-cream/30 py-3.5 hover:border-ng-yellow hover:text-ng-yellow transition-colors mb-6">
              Add to Wishlist
            </button>
            <dl className="space-y-3 font-mono text-[11px] text-ng-cream/55 border-t border-expedition-line pt-5">
              <div className="flex justify-between">
                <dt>Terrain scale</dt>
                <dd className="text-ng-cream/80">900 km²</dd>
              </div>
              <div className="flex justify-between">
                <dt>Herd size</dt>
                <dd className="text-ng-cream/80">Up to 40,000</dd>
              </div>
              <div className="flex justify-between">
                <dt>Save system</dt>
                <dd className="text-ng-cream/80">One per season</dd>
              </div>
              <div className="flex justify-between">
                <dt>Reviewed by</dt>
                <dd className="text-ng-cream/80">Staff biologists</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* FIELD REPORTS / REVIEWS */}
      <section id="reports" className="border-t border-expedition-line bg-expedition-panel">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ng-ice mb-4">
            Field Reports
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-12 max-w-xl">
            Logged by explorers, not marketing.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {REPORTS.map((r) => (
              <div key={r.name} className="field-frame p-6 relative flex flex-col h-full">
                <span className="stamp absolute top-5 right-5 px-2 py-0.5 text-[10px] font-mono">
                  {r.stamp}
                </span>
                <p className="text-ng-cream/80 leading-relaxed mb-6 pr-14">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="font-mono text-[11px] text-ng-cream/50 mt-auto">
                  <p className="text-ng-cream/80">{r.name}</p>
                  <p>{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-expedition-line">
        <div className="absolute inset-0 topo-lines bg-topo" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28 text-center">
          <h2 className="font-display text-4xl sm:text-5xl mb-5">
            Your next expedition starts
            <span className="italic text-ng-yellow"> at checkout.</span>
          </h2>
          <p className="text-ng-cream/70 max-w-lg mx-auto mb-9">
            Join 18,204 explorers already logging field time. First expedition report
            due whenever you&apos;re ready.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#flagship"
              className="font-mono text-sm uppercase tracking-widest bg-ng-yellow text-expedition-night px-7 py-3.5 font-semibold hover:bg-ng-yellow-deep transition-colors"
            >
              Get NatGeo Play — Free
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-expedition-line">
        <div className="h-1.5 bg-ng-yellow" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="border-2 border-ng-yellow px-1.5 py-0.5 font-display font-semibold text-ng-yellow text-sm">
              NG
            </span>
            <span className="font-display text-base">
              NatGeo <span className="text-ng-yellow">Play</span>
            </span>
          </div>
          <p className="font-mono text-[11px] text-ng-cream/40 text-center">
            Fan concept project — not affiliated with National Geographic Partners, LLC.
            Photography via Pexels.
          </p>
          <div className="flex gap-5 font-mono text-[11px] uppercase tracking-widest text-ng-cream/50">
            <a href="#store" className="hover:text-ng-yellow transition-colors">Store</a>
            <a href="#reports" className="hover:text-ng-yellow transition-colors">Reports</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
