import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-accent scroll-mt-16">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 lg:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
          Ready to let the roster run itself?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-dark/80">
          Start your free trial today and have next week scheduled — clashes
          flagged, records ready — before your coffee goes cold.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button href="#demo">Start Free Trial</Button>
          <Button href="#demo" variant="secondary">
            Book a Demo
          </Button>
        </div>

        <p className="mt-5 text-sm font-medium text-primary-dark/70">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>

      {/* Echo of the hero's compliance card — peeks in from the corner */}
      <Card className="absolute -right-4 bottom-8 hidden w-40 rotate-6 rounded-2xl p-4 lg:block">
        <p className="text-xs font-medium text-text-muted">Audit-ready</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-text">98%</p>
        <Badge tone="success" size="xs" dot className="mt-2">
          On track
        </Badge>
      </Card>
    </section>
  );
}
