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

export const projects: Project[] = [
  { id: 'atlas', name: 'Atlas platform', key: 'AT', color: '#ff5733', tickets: [
    { id:182, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'D. Okafor', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
    { id:176, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'P. Nkomo', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
    { id:201, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'A. Smith', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
  ] },
  { id: 'nimbus', name: 'Nimbus mobile', key: 'NIM', color: '#ff5733', tickets: [
    { id:94, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'S. acheber', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
    { id:16, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'M. Nkomo', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
    { id:23, 
      title: 'Fix login redirect loop',
      status: 'In Progress',
      priority: 'High', 
      assignee: 'N. Smith', 
      labels: ['auth', 'bug'], 
      description: 'Users are experiencing a redirect loop when logging in.', 
      comments: ['Investigating the issue.', 'Found a potential fix.']
    },
  ] },
