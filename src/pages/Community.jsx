import { useNavigate } from 'react-router-dom';

export default function Community() {
    const navigate = useNavigate();

    const circles = [
        { name: 'Math Wizards', members: 128, topic: 'Mathematics', icon: 'calculate', color: 'var(--accent)', active: true },
        { name: 'Science Explorers', members: 95, topic: 'Science', icon: 'science', color: 'var(--success)', active: false },
        { name: 'Literature Club', members: 64, topic: 'English', icon: 'auto_stories', color: 'var(--purple)', active: true },
        { name: 'History Buffs', members: 42, topic: 'History', icon: 'history_edu', color: 'var(--warning)', active: false },
        { name: 'Code Ninjas', members: 156, topic: 'Computer Science', icon: 'code', color: 'var(--info)', active: true },
        { name: 'Art & Design', members: 73, topic: 'Creative Arts', icon: 'palette', color: 'var(--pink)', active: false },
    ];

    const discussions = [
        { title: 'How to solve quadratic inequalities?', author: 'Priya P.', replies: 12, time: '2h ago', circle: 'Math Wizards' },
        { title: 'Best resources for organic chemistry', author: 'Kofi O.', replies: 8, time: '4h ago', circle: 'Science Explorers' },
        { title: 'Shakespeare interpretation tips', author: 'Sarah C.', replies: 5, time: '6h ago', circle: 'Literature Club' },
        { title: 'Python project ideas for beginners', author: 'Arjun M.', replies: 23, time: '1d ago', circle: 'Code Ninjas' },
        { title: 'Tips for remembering historical dates', author: 'Leila J.', replies: 7, time: '2d ago', circle: 'History Buffs' },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div><h2>Student Community</h2><p>Connect, learn, and grow together</p></div>
                </div>
                <div className="page-header-right">
                    <div className="search-box">
                        <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--text-muted)' }}>search</span>
                        <input placeholder="Search discussions..." />
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => navigate('/ai-tutor')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>add</span> New Post
                    </button>
                </div>
            </div>
            <div className="page-content">
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Your Circles</h3>
                <div className="grid-3 mb-24 animate-in">
                    {circles.map((circle, i) => (
                        <div key={i} className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/ai-tutor')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius)', background: `${circle.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-icons-round" style={{ fontSize: 22, color: circle.color }}>{circle.icon}</span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>{circle.name}</h4>
                                    <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{circle.members} members</p>
                                </div>
                                {circle.active && <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)' }}></div>}
                            </div>
                            <span className="tag">{circle.topic}</span>
                        </div>
                    ))}
                </div>

                <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                    <div className="card-header"><h3>Recent Discussions</h3><button className="btn btn-ghost btn-sm" onClick={() => navigate('/knowledge-gap')}>View All</button></div>
                    {discussions.map((d, i) => (
                        <div key={i} className="list-item" style={{ borderBottom: i < discussions.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }} onClick={() => navigate('/ai-tutor')}>
                            <div className="avatar avatar-sm">{d.author.split(' ').map(n => n[0]).join('')}</div>
                            <div className="list-item-content">
                                <h4>{d.title}</h4>
                                <p>{d.author} • {d.circle} • {d.time}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-muted)', fontSize: 13 }}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>chat_bubble_outline</span> {d.replies}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
