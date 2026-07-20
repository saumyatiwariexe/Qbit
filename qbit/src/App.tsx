import {use, useMemo, useState} from 'react';
import{projects,type Projects,type Ticket} from './data';

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
    setTrail(history => history[history.length - 1] ?.label === label(next) ?history:[...history,{}]
  }
}