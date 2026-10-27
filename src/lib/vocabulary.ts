// src/lib/vocabulary.ts

export type CategoryId = "tech" | "cars" | "ai" | "random";

export const VOCABULARY: Record<CategoryId, string[]> = {
  tech: [
    "distributed systems",
    "event-driven architecture",
    "serverless edge workers",
    "reactive micro-frontends",
    "zero-runtime styling",
    "immutable state trees",
    "low-latency streaming protocols",
    "declarative pipeline orchestration",
    "type-safe schema hydration",
    "asynchronous event sourcing",
    "containerized clusters",
  ],
  cars: [
    "twin-turbocharged V8 powertrains",
    "aerodynamic downforce telemetry",
    "adaptive carbon-ceramic braking",
    "dual-clutch transmission shifts",
    "regenerative kinetic energy recovery",
    "torque-vectoring all-wheel dynamics",
    "lightweight carbon-monocoque chassis",
    "track-focused suspension geometries",
    "variable valve timing maps",
    "active rear-wing aero balancing",
  ],
  ai: [
    "transformer attention mechanisms",
    "context-window token retrieval",
    "reinforcement learning from human feedback",
    "latent-space embeddings",
    "mixture-of-experts routing",
    "low-rank adaptation fine-tuning",
    "vector similarity search indexes",
    "quantized edge neural inference",
    "diffusion model cross-attentions",
    "autonomous multi-agent reasoning chains",
  ],
  random: [
    "consectetur adipiscing elit",
    "tempor incididunt labore dolore",
    "nostrud exercitation ullamco",
    "laboris nisi aliquip commodo",
    "duis aute irure reprehenderit",
    "voluptate velit esse cillum",
    "fugiat nulla pariatur excepteur",
    "cupidatat non proident sunt",
    "deserunt mollit anim laborum",
    "perspiciatis unde omnis iste",
  ],
};

export function generateHeadingText(category: CategoryId, seed: number): string {
  const words = VOCABULARY[category];
  const w1 = words[(seed * 3) % words.length];
  const w2 = words[(seed * 7 + 1) % words.length];

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return `${capitalize(w1)}: The Next Paradigm Shift in ${capitalize(w2)}`;
}

export function generateParagraphsList(
  category: CategoryId,
  dialCount: number,
  seed: number
): string[] {
  const words = VOCABULARY[category];
  const paragraphs: string[] = [];
  const targetWordsPerPara = Math.floor(500 / Math.max(1, dialCount));

  for (let p = 0; p < dialCount; p++) {
    const sentences: string[] = [];
    let currentWords = 0;
    const cycle = p + seed;

    while (currentWords < targetWordsPerPara) {
      const lead = words[(cycle * 2 + sentences.length) % words.length];
      const mid = words[(cycle * 3 + sentences.length + 1) % words.length];
      const tail = words[(cycle * 5 + sentences.length + 2) % words.length];

      const sentence = `${lead.charAt(0).toUpperCase() + lead.slice(1)} works directly with ${mid}, establishing reliable execution patterns across modern ${tail}.`;
      sentences.push(sentence);
      currentWords += sentence.split(" ").length;
    }
    paragraphs.push(sentences.join(" "));
  }

  return paragraphs;
}