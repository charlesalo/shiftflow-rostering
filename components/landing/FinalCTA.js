import Button from "@/components/ui/Button";
import { ComplianceCard, StatusCard } from "@/components/landing/Hero";

const GRID_COLS = 7;
const GRID_ROWS = 5;
const CELL_W = 72;
const CELL_H = 26;
const CELL_GAP = 14;
const GRID_VIEW_W = GRID_COLS * CELL_W + (GRID_COLS - 1) * CELL_GAP;
const GRID_VIEW_H = GRID_ROWS * CELL_H + (GRID_ROWS - 1) * CELL_GAP;

// Oversized, near-invisible echo of the roster grid — flat shape blocks, no
// data. Anchored to the bottom-right so its bulk sits away from the copy
// column instead of behind it.
function RosterGridDecoration() {
  const cells = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={c * (CELL_W + CELL_GAP)}
          y={r * (CELL_H + CELL_GAP)}
          width={CELL_W}
          height={CELL_H}
          rx={6}
          fill="#ffffff"
          fillOpacity="0.08"
        />
      );
    }
  }
  return (
    <svg
      viewBox={`0 0 ${GRID_VIEW_W} ${GRID_VIEW_H}`}
      className="pointer-events-none absolute -bottom-10 -right-10 h-[150px] w-[420px] lg:-bottom-12 lg:-right-10 lg:h-[300px] lg:w-[400px]"
      aria-hidden="true"
    >
      {cells}
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-accent scroll-mt-16">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:py-28">
        <RosterGridDecoration />

        {/* Copy */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
            Ready to let the roster<br className="hidden lg:block" /> run itself?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-dark/80">
            Start your free trial today and have next week scheduled — clashes
            flagged, records ready — before your coffee goes cold.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#demo">Start Free Trial</Button>
            <Button href="#demo" variant="secondary">
              Book a Demo
            </Button>
          </div>

          <p className="mt-5 text-sm font-medium text-primary-dark/70">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>

        {/* Card cluster — echoes the hero's floating cards */}
        <div className="relative mx-auto flex w-full max-w-xs flex-col gap-3 lg:mx-0 lg:block lg:h-48 lg:w-72">
          <ComplianceCard className="w-full lg:absolute lg:left-0 lg:top-0 lg:w-40 lg:-rotate-2 motion-safe:animate-float-medium" />
          <StatusCard className="w-full lg:absolute lg:bottom-0 lg:right-0 lg:w-44 lg:rotate-2 motion-safe:animate-float-slow motion-safe:[animation-delay:0.3s]" />
        </div>
      </div>
    </section>
  );
}
