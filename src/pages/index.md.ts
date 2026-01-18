import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const markdown = `# David George Hope

Director of Product Marketing for Observability at Elastic. Former sales engineer. I build demo generators, instrumentation tools, and side projects that help people understand complex systems.

## Links

- [LinkedIn](https://linkedin.com/in/davidgeorgehope)
- [GitHub](https://github.com/davidgeorgehope)

## What I'm Working On

OpenTelemetry adoption, AI-powered observability, and SRE tooling.
I write about it on the [Elastic blog](https://www.elastic.co/blog/author/david-hope) and build tools on [GitHub](https://github.com/davidgeorgehope).

- [See all projects](/projects)
- [Publications](/writing)
`;

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
