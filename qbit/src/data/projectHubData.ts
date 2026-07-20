import type {project, subtask, Ticket } from './types';
export const PROJECTS: Project[] = [
    {
        id: 'saumya',
        name: 'Saumya Platform',
        key: 'ST',
        lead: 'Saumya',
        color: '#007bff',
        tickets: [
            {
                id: 143,
                title: 'Login page throws 500 on SSO redirect',
                status: 'In Progress',
                assignee:'Pm modi',
                sprint: 'Sprint 1',
                Labels: ['auth','bug','sso'],
                description: 'When a I try to login using SSO, the login page throws a 500 error on redirect. This needs to be fixed.',
                subtasks: [
                    {
                        id: 'AJ-182-1',
                        title: 'Reproduce SSO redrect loop in staging environment',
                        status: 'Done',
                        assignee: 'jonny'
                    },
                    {
                        id:'AJ-182-2',
                        title: 'Fix SSO redirect loop in staging environment',
                        status: 'In Progress',
                        assignee: 'Saumya'  
                    }
                    {
                        id:'AJ-182-3',
                        title: 'Test SSO redirect loop fix in staging environment',
                        status: 'To Do',
                        assignee: 'jonny'
                    },
                ],
                comments: [
                    {author: 'Saumya', time: '2023-06-01T10:00:00Z', text: 'I have reproduced the SSO redirect loop in the staging environment. Working on a fix.'},
                    {author: 'Sumya', time: '2025-06-01T10:00:00Z', text: 'I have reproduced the SSO redirect loop in the staging environment. Working on a fix.'},
                    {author: 'Sauma', time: '2027-06-01T10:00:00Z', text: 'I have reproduced the SSO redirect loop in the staging environment. Working on a fix.'},
                    {author: 'Samya', time: '2023-06-01T10:00:00Z', text: 'I have reproduced the SSO redirect loop in the staging environment. Working on a fix.'},
                ], 
            },
            {
                id: 'saumya',
                name: 'Saumya Platform',
                key: 'ST',
                lead: 'Saumya',
                color: '#007bff',
                tickets: [
                    {
                        id: 143,
                        title: 'Login page throws 500 on SSO redirect',
                        status: 'In Progress',
                        assignee:'Pm modi',
                        sprint: 'Sprint 1',
                        Labels: ['auth','bug','sso'],
                        description: 'When a I try to login using SSO, the login page throws a 500 error on redirect. This needs to be fixed.',
                        subtasks: [
                            {id: 'AJ-182-1', title: 'Reproduce SSO redrect loop in staging environment', status: 'Done', assignee: 'jonny'},
                        ],
                        comments: [
                            {author: 'p.Nkomo', time: '5d ago', text: 'Grid component owns this, not the inddividual widgets.'},
                            

            } 

        ]
    }
]
