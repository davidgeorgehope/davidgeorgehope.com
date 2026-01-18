import type { APIRoute } from 'astro';
import projects from '../data/projects.json';

export const GET: APIRoute = async () => {
  const featuredProjects = projects.filter((p: any) => p.featured);
  const otherProjects = projects.filter((p: any) => !p.featured);

  let markdown = `# Projects

Things I've built—from AI-powered SaaS products to observability tools and open source projects.
More on [GitHub](https://github.com/davidgeorgehope).

## Featured Projects

`;

  for (const project of featuredProjects) {
    markdown += `### [${project.title}](${project.url})\n`;
    markdown += `${project.description}\n`;
    markdown += `Tags: ${project.tags.join(', ')}\n\n`;
  }

  markdown += `## Other Projects\n\n`;

  for (const project of otherProjects) {
    markdown += `### [${project.title}](${project.url})\n`;
    markdown += `${project.description}\n`;
    markdown += `Tags: ${project.tags.join(', ')}\n\n`;
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
};
