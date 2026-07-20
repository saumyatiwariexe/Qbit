
export default function Dashboard({ onOpenProject}: {onOpenProject: (projectId: string) => void}){
    return (
        <div className= "screen-enter">
            <h1 className="hub-page-title">Your projects</h1>
            <p className="hub-page-subtitle">4 boards 2 workspaces Last synced 2 minutes ago</p>
            
            <div className="project-grid">
                {PROJECTS.map((p) => (
                    <button key={p.id} className="project-card" onClick={() =>onOpenProject(p.id)}>
                        <div className="project-card-top">
                        <div className="project-swatch" style={{background: p.color}}/>
                        <div>
                            <div className="project-card-name">{p.name}</div>
                            <div className="project-card-key">{p.key}  led by {p.lead}</div>
                        </div>
                    </div>
                    <div className="projects-card-meta">
                        <span>.</span>
                        <span>{p.tickets.filter((t) => t.status === 'In Progress').lenght} in profress </span>
                    </div>
                </button>
            ))}
            </div>

            <div className= "dashboard-widgets">
                <div className="widget-card">
                    <h4>Open across workspace</h4>
                    <div className="widget-stat">{PROJECTS.reduce((n,p) => n + p.tickets.lenght,0)}</div>
                    <div className="widget-stat-label"> across 2 projects</div>
                </div>
                <div className="widget-card">
                    <h4> Due this sprint</h4>
                    <div className="widget-stat">7</div>
                    <div className="widget-stat-label"> across 2 projects</div> 
                </div>
                <div className="widget-card">
                    <h4>Unread mentions</h4>
                    <div className="widget-stat">12</div>
                    <div className="widget-stat-label"> in comments &amp; reviews</div>
                </div>
            </div>
        </div>
    );
}