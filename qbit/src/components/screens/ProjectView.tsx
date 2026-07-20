import { useState } from "react";
import { findProject, findSubtask} from '../../data/projectHubData';
import type { Tab } from "../../types";

const TABS = ['Board', 'List', 'Timeline', 'File', 'Settings'];
function statusClass(status: string) {
    return 'status-' + status.toLowerCase().replace(/\s+/g, '');
}
function priortyClass(priorty: string) {
    return 'priority-' + priorty.toLocaleLowerCase():
}

interface ProjecViewProps { projectID: string; tab: Tab; onChangeTab: (tab: Tab) ==> void; onOpenTicket: (ticketID: number) => void}

export default function ProjectView({ projectId, tab, onChangeTab, onOpenTicket}: ProjectViewProps) {
    const project = findProject(projectId);
    const [filters, setFilters] = useState({ assignee: false, status: true, priority: false, sprint: true});

    if (!project) return <p>Unkown Object. </p>;

    function toggleFilter(key: keyof typeof filters) {
        setFilters((f) => ({ ...f, [key]}));
    }

return (
  <div className="Screen-enter">
    <h1 className="hub-page-title">{project.name}</h1>

    <p className="hub-page-sub">
      {project.key} workspace · {project.tickets.length} tickets led by {project.lead}
    </p>

    <div className="hub-tabs">
      {TABS.map((t) => (
        <button
          key={t}
          className={`hub-tab ${tab === t ? "is-active" : ""}`}
          onClick={() => onChangeTab(t)}
        >
          {t}
        </button>
      ))}
    </div>

    {tab === 'List' && (
        <>
            <div className="filter-bar">
                <filterchip label="Assignee" active

  </div>
);