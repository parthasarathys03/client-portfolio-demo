export interface Project {
  title: string;
  role?: string;
  organization?: string;
  technologies?: string[];
  duration?: string;
  description?: string;
  outcome?: string;
}

// CONTENT_INVENTORY.md §5: no individually named/described projects exist
// on the current site — only four generic "Portfolio Highlights" bullets
// (Managed core teams, Handled enterprise clients, Handled global teams,
// Implemented cost-saving measures), with no titles, tech stacks, dates,
// or outcomes attached. That doesn't fit the verified project schema above,
// so this stays empty rather than inventing project entries. The section
// renders a "coming soon" placeholder until real project data is supplied.
export const projectsContent: Project[] = [];
