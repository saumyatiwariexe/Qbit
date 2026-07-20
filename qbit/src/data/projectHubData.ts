export type Status = 'backlog' | 'To Do' | 'In Progress' | 'In review' | 'Done';
export interface Ticket {
  id: number;
  title: string;
  status :Status;
  priority: string;
  assignee: string;
  labels: string[];
  description: string;
  comments: string[];
}
export interface Project {
  id: string;
  name: string;
  key: string; 
  color: string;
  tickets: Ticket[];
}

export const projects:
  {
    id: "saumya",
    name: "Saumya Platform",
    key: "ST",
    lead: "Saumya",
    color: "#007bff",

    tickets: [
      {
        id: 143,
        title: "Login page throws 500 on SSO redirect",
        status: "In Progress",
        assignee: "Pm Modi",
        sprint: "Sprint 1",
        labels: ["auth", "bug", "sso"],
        description:
          "When I try to login using SSO, the login page throws a 500 error on redirect. This needs to be fixed.",

        subtasks: [
          {
            id: "AJ-182-1",
            title: "Reproduce SSO redirect loop in staging environment",
            status: "Done",
            assignee: "Jonny",
          },
          {
            id: "AJ-182-2",
            title: "Fix SSO redirect loop in staging environment",
            status: "In Progress",
            assignee: "Saumya",
          },
          {
            id: "AJ-182-3",
            title: "Test SSO redirect loop fix in staging environment",
            status: "To Do",
            assignee: "Jonny",
          },
        ],

        comments: [
          {
            author: "Saumya",
            time: "2023-06-01T10:00:00Z",
            text: "I have reproduced the issue and I'm working on a fix.",
          },
          {
            author: "Sumya",
            time: "2025-06-01T10:00:00Z",
            text: "Verified on staging.",
          },
          {
            author: "Sauma",
            time: "2027-06-01T10:00:00Z",
            text: "Regression testing completed.",
          },
          {
            author: "Samya",
            time: "2023-06-02T09:00:00Z",
            text: "Ready for review.",
          },
        ],
      },

      {
        id: 144,
        title: "Dashboard widgets overlap on resize",
        status: "To Do",
        assignee: "P. Nkomo",
        sprint: "Sprint 1",
        labels: ["ui", "dashboard"],
        description: "Dashboard grid breaks when resizing the browser window.",

        subtasks: [
          {
            id: "AJ-183-1",
            title: "Investigate CSS grid issue",
            status: "Done",
            assignee: "P. Nkomo",
          },
        ],

        comments: [
          {
            author: "P. Nkomo",
            time: "5d ago",
            text: "Grid component owns this, not the individual widgets.",
          },
        ],
      },

      {
        id: 145,
        title: "Search bar is slow",
        status: "In Progress",
        assignee: "S. Meow",
        sprint: "Sprint 2",
        labels: ["performance", "search"],
        description: "Search results take several seconds to appear.",

        subtasks: [
          {
            id: "AJ-184-1",
            title: "Profile search API",
            status: "Done",
            assignee: "S. Meow",
          },
        ],

        comments: [
          {
            author: "S. Meow",
            time: "5d ago",
            text: "Looks like a backend bottleneck.",
          },
        ],
      },

      {
        id: 146,
        title: "Update onboarding flow",
        status: "To Do",
        assignee: "T. Man",
        sprint: "Sprint 2",
        labels: ["feature", "onboarding"],
        description: "Implement the redesigned onboarding experience.",

        subtasks: [],
        comments: [],
      },
    ],
  },
];

export function findProject(projectId: string): Project | undefined {
  return PROJECTS.find((p) => p.id === projectId);
}
export function findTicket(projectId: string, ticketId: number | string): Ticket | null {
  const project = findProject(projectId);
  if (!project) return null;
  return project.tickets.find((t) => t.id === ticketId) || null;
}

export function findSubtask(projectId: string, ticketId: number | string, subtaskId: string): Subtask | null {
  const ticket = findTicket(projectId, ticketId);
  if (!ticket) return null;
  return ticket.subtasks.find((s) => s.id === subtaskId) || null;
}