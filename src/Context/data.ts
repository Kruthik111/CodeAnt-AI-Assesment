export interface Project {
  name: string;
  visibility: "Public" | "Private"; // Union type for fixed values
  technology: string;
  size: string;
  lastUpdated: string;
}

const projects: Project[]  = [
  {
    name: "design-system",
    visibility: "Public",
    technology: "React",
    size: "7320 KB",
    lastUpdated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    technology: "JavaScript",
    size: "5871 KB",
    lastUpdated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    technology: "Python",
    size: "4521 KB",
    lastUpdated: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    technology: "Swift",
    size: "3096 KB",
    lastUpdated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    technology: "Java",
    size: "6210 KB",
    lastUpdated: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    technology: "HTML/CSS",
    size: "1876 KB",
    lastUpdated: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    technology: "PHP",
    size: "5432 KB",
    lastUpdated: "7 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    technology: "Python",
    size: "4521 KB",
    lastUpdated: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    technology: "Swift",
    size: "3096 KB",
    lastUpdated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    technology: "Java",
    size: "6210 KB",
    lastUpdated: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    technology: "HTML/CSS",
    size: "1876 KB",
    lastUpdated: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    technology: "PHP",
    size: "5432 KB",
    lastUpdated: "7 days ago",
  },
];

export default projects;
