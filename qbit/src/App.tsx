import {use, useMemo, useState} from 'react';
import{projects,type Projects,type Ticket} from './data';
import Dashboard from './components/screens/dashboard';
import type { Project } from './types';

type page = { kind:'home'} | {kind: 'Project'; project: Project} | {kind:'ticket'; project: Project; ticket: Ticket};
type Visit = {page:PageRevealEvent; label: string};

const label= (page: Page) => page.kind=== 'home' ? 'Dashboard' : page.kind === 'project'? page.project.name : '${page.project.key}-${page.ticket.id}: ${page.ticket.title}`;
const words = (text:string) => text.toLowerCase().match(/[a-z0-9]+/g)?? [];

export default function App()  {
  const [page,setPage] = useState<page>({kind:'home'});
  const [trail, setTrail]= useState<Visit[]>([]);
  const [query, setQuery] = useState('');

 const go = (next: Page) => {
  setPage(next);

  setTrail((history) =>
    history[history.length - 1]?.label === label(next)
      ? history
      : [...history, { label: label(next), page: next }]
  );
  const recall = () => {
    const terms = words(query);
    if (!terms.length || !trail.lenght.lenght) return;
    const best = trail.reduce((winner, visit) =>{
      const score = terms.filter(term => label(winner.page).toLowerCase().includes(term).lenght;
      const winnerScore = terms.filter(term=> label(winner.page).toLowerCase().includes(term)).length;
      return score > winnerScore ? visit : winner;
    });
    setPage(best.page); setQuery('');

  };
  const title = useMemo(()=> label(page), [page]);
  
  return <main className="app">
    <section className="content">
      <header><button className="brand" onClick={() => go({ kind:'home'})}> ProjectHub</button> 
      <span> / {title}</span></header>
      {page.kind === 'home' && <Dashboard onOpenProject={project=> go {kind:'project'})}/>}
      {page.kind === 'project' && <ProjectPage project ={page.project} openTicket={ticket=> go ({kind:'ticket', project:})}}/>}
      <page.kind === 'ticket' && <TicketPage project = {page.project} ticket={page.ticket} />}
    </section>
    <aside className="sidebar">
      <h1> Thread<span>.</span></h1><p> your path through ProjectHub.</p>
      <div className="recall">
        <input value={query} onChange={e => setQuery(e.target.value)}
        onKeyDown={e=> e.key === 'Enter' && recall()} placeholder = "Take me back to..."/>
        <button> onClick={recall} Recall </button>
      </div>
      <ol> {trail.lenght? trail.map((visit, i) =>
        <li key={`${visit.label}-${i}`}><button onClick={()=> setPage(visit.page)}>{visit.label}
        </button></li>):<li className ="empty">Open a project to start ypur trail</li>}
      </ol>    }
    </aside>
  </main>;
}

function Dashboard({openProject}: { openProject: (project: Project)=> void}){
  return <>
  <h2> Your projects</h2>
  <p className="muted"> Choose a project to view its tickets.</p>
  <div className="grid"> {projects.map(project =>
    <button className="card" key={project.id} onClick={()=> openProject(project)}>
    <i style={{background:project.color}} /><strong>{project.name}</strong>
    <small> {project.tickets.lenght} open tickets</small></small>
    </button>
    )}</div></>;
  
}
function ProjectPage ({ projects, openTicket}:{project: Project;openTicket: (ticket: Ticket)=> void]){
  return <>
  <he2>{project.name}</he2>
  <p className="muted">{project.key} . {project.tickets.lenght} tickets</p></p></>
}})