import type { APIRoute } from 'astro';

const posts = [
  {
    title: "Adventures in Veo 3.1: Teaching AI to Remember What Characters Look Like",
    date: "2026-01",
    description: "How do you make an AI video generator remember what a cartoon elk looks like across multiple scenes? Reference images, creative workarounds, and one expensive test run.",
    slug: "adventures-in-veo-character-consistency"
  },
  {
    title: "Building Vibecaster: AI Social Media Automation in Public",
    date: "2025-12",
    description: "I built an AI that posts to Twitter and LinkedIn for me. Here's the architecture, the interesting bits, and what I learned.",
    slug: "building-vibecaster-in-public"
  },
  {
    title: "Building AI-Native Session Replay with OpenTelemetry",
    date: "2025-12",
    description: "I built the semantic instrumentation layer. Here's how logs + traces + frustration detection work together.",
    slug: "building-ai-native-session-replay"
  },
  {
    title: "Session Replay is a Band-Aid (And AI Can Do Better)",
    date: "2025-12",
    description: "Session replay tools record everything but understand nothing. Here's an AI-native alternative using semantic events.",
    slug: "session-replay-is-a-band-aid"
  },
  {
    title: "LLMs Keep Hallucinating My URLs (So I Built a Fix)",
    date: "2025-12",
    description: "Claude generated plausible-looking URLs that didn't exist. Here's the architectural problem and a hook-based solution.",
    slug: "llm-url-hallucination"
  },
  {
    title: "Why I Build Things",
    date: "2025-12",
    description: "On strange careers, Quaker meeting houses, and the feeling of making something work.",
    slug: "why-i-build-things"
  }
];

const articles = [
  {
    title: "The hidden costs of tool sprawl: An SRE's guide to observability consolidation",
    date: "2025-04",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/guide-observability-consolidation"
  },
  {
    title: "Realizing the business value of OpenTelemetry-native observability",
    date: "2025-01",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/opentelemetry-native-observability-business-value"
  },
  {
    title: "The evolving role of SREs: Balancing reliability, cost, and innovation",
    date: "2024-12",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/site-reliability-engineer-role-evolution"
  },
  {
    title: "Leveling up your observability practice — Part 2",
    date: "2024-11",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/observability-maturity-lessons-leadership-part2"
  },
  {
    title: "Leveling up your observability practice — Part 1",
    date: "2024-11",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/observability-maturity-lessons-benefits-part1"
  },
  {
    title: "The power of effective log management in software development and operations",
    date: "2023-09",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/log-management-observability-operations"
  },
  {
    title: "A look under the hood at eBPF: A new way to monitor and secure your platforms",
    date: "2022-11",
    publication: "Elastic Blog",
    url: "https://www.elastic.co/blog/ebpf-observability-security-workload-profiling"
  }
];

const talks = [
  {
    title: "Observability in the Open: OTel for Public Sector",
    event: "Elastic Webinar",
    date: "2025-04",
    url: "https://www.elastic.co/virtual-events/opentelemetry-in-public-sector-using-elastic"
  },
  {
    title: "Transform Your Systems with No-Compromise Observability",
    event: "Elastic + Foundry Research Webinar",
    date: "2024",
    url: "https://www.elastic.co/virtual-events/no-compromise-observability"
  },
  {
    title: "The Next Generation of Observability: Leveraging LLMs and Generative AI",
    event: "Elastic + Microsoft Webinar",
    date: "2024-09",
    url: "https://www.elastic.co/virtual-events/microsoft-observability-llm-gai"
  },
  {
    title: "Why SREs Need AI and ML for Observability and IT Resilience",
    event: "Elastic + AWS Webinar",
    date: "2024",
    url: "https://www.elastic.co/virtual-events/aws-observability-ai-ml-resilience"
  },
  {
    title: "Why You Need AIOps as Part of Your Observability Strategy",
    event: "Elastic Webinar",
    date: "2024-01",
    url: "https://www.elastic.co/virtual-events/why-you-need-aiops"
  },
  {
    title: "Using AIOps, GAI, and Observability for Higher Performing Applications",
    event: "Elastic Webinar",
    date: "2023-12",
    url: "https://www.elastic.co/virtual-events/aiops-generative-ai-powered-operations"
  },
  {
    title: "Transcending Observability: A Dive into the Future of Logging with OpenTelemetry",
    event: "DevOpsDays Buffalo",
    date: "2023",
    url: "https://devopsdays.org/events/2023-buffalo/program/david-hope/"
  }
];

export const GET: APIRoute = async () => {
  let markdown = `# Publications

Articles, talks, and webinars on observability, OpenTelemetry, and AIOps.

## Notes

`;

  for (const post of posts) {
    markdown += `### [${post.title}](/writing/${post.slug})\n`;
    markdown += `*${post.date}*\n\n`;
    markdown += `${post.description}\n\n`;
  }

  markdown += `## Articles\n\n`;

  for (const article of articles) {
    markdown += `### [${article.title}](${article.url})\n`;
    markdown += `*${article.date} — ${article.publication}*\n\n`;
  }

  markdown += `More on [Elastic Blog](https://www.elastic.co/blog/author/david-hope) and [Observability Labs](https://www.elastic.co/observability-labs/author/david-hope)\n\n`;

  markdown += `## Talks & Webinars\n\n`;

  for (const talk of talks) {
    markdown += `### [${talk.title}](${talk.url})\n`;
    markdown += `*${talk.date} — ${talk.event}*\n\n`;
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
