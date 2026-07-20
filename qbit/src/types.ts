export type Tab = 'Board' | 'List' | 'Timeline' | 'Files' | 'Settings';

export interface Comment { author: string; time: string; text: string }
export interface Subtask { id: string; title: string; status: string; assignee: string }
export interface ticket {
    id: number; title: string; status: string; priority: string; assignee: string; 
    sprint: string; lables: string[]; description: string; subtasks: Subtask[]; comments: Comment[];
}
export interface Project { id: string; name: string; key: string; lead: string; color: string; tickets: ticket[] }
export type screen
    | {view: 'Dashboard'}
    | {view: 'Project'; projectId: string; tab: Tab}
    | {view: 'Ticket-detail'; projectId: string; ticketId: number}
    | {view: 'subtask-detail'; projectId: string; ticketId: number; subtaskId: string}
    | {view: 'comment-thread'; projectId: string; ticketId: number};
export interface trailNode {id:string; label: string; searchText: string; screenState: screen; timestamp: number; revisit: boolean}
export interface Breadcrumb {label: string; onClick: () => void}