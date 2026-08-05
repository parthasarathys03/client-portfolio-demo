export interface ExperienceItem {
  order: number;
  title: string;
  company?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  duration: string;
}

// Reverse-chronological. Source: CONTENT_INVENTORY.md §3.
// First entry's company field is represented exactly as the source lists it
// ("(current/self-described)") — no start/end dates given in source, only
// duration, so those fields are omitted rather than inferred (no "Present").
export const experienceContent: ExperienceItem[] = [
  {
    order: 1,
    title: "Expert in Platform Engineering & Infrastructure",
    company: "(current/self-described)",
    location: "Redwood City, CA",
    duration: "9 yrs 6 mos",
  },
  {
    order: 2,
    title: "Sr. Software Engineer - DevOps",
    company: "Elementum",
    location: "San Francisco",
    startDate: "Dec 2014",
    endDate: "Nov 2015",
    duration: "1 yr",
  },
  {
    order: 3,
    title: "Senior DevOps Engineer",
    company: "Qualys",
    location: "San Francisco",
    startDate: "Jan 2012",
    endDate: "Dec 2014",
    duration: "3 yrs",
  },
  {
    order: 4,
    title: "Senior Software Developer",
    company: "Qualcomm",
    location: "San Francisco",
    startDate: "Feb 2011",
    endDate: "Jan 2012",
    duration: "1 yr",
  },
  {
    order: 5,
    title: "Software Engineer",
    company: "HP Autonomy",
    location: "India",
    startDate: "Oct 2008",
    endDate: "Feb 2011",
    duration: "2 yrs 5 mos",
  },
];
