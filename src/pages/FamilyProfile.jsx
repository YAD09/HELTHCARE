import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FamilyProfile() {
    const navigate = useNavigate();
    const [activeProfile, setActiveProfile] = useState(0);

    const profiles = [
        { name: 'Arjun', role: 'Student', grade: 'Grade 10', avatar: 'AS', color: 'var(--accent)', streak: 12, completion: 72, subjects: ['Mathematics', 'Science', 'English', 'History'] },
        { name: 'Priya', role: 'Student', grade: 'Grade 7', avatar: 'PS', color: 'var(--purple)', streak: 8, completion: 58, subjects: ['Mathematics', 'Hindi', 'Science', 'Geography'] },
        { name: 'Ravi Sharma', role: 'Parent', grade: '', avatar: 'RS', color: 'var(--success)', streak: null, completion: null, subjects: [] },
    ];

    const active = profiles[activeProfile];

    const recentActivity = [
        { title: 'Completed Quadratic Equations Quiz', time: '2 hours ago', icon: 'quiz', score: '85%' },
        { title: 'Watched Cell Division Lesson', time: '4 hours ago', icon: 'play_circle', score: null },
        { title: 'Asked AI Tutor about Photosynthesis', time: 'Yesterday', icon: 'psychology', score: null },
        { title: 'Earned Speed Demon Badge', time: 'Yesterday', icon: 'emoji_events', score: null },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Family Profile Switcher</h2>
                        <p>Switch between family member accounts</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm">
                        <span className="material-icons-round" style={{ fontSize: 16 }}>person_add</span>
                        Add Member
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Profile cards */}
                <div className="grid-3 mb-24 animate-in">
                    {profiles.map((p, i) => (
                        <div key={i} onClick={() => setActiveProfile(i)} style={{
                            padding: 20, borderRadius: 'var(--radius-lg)', cursor: 'pointer',
                            background: activeProfile === i ? 'var(--accent-subtle)' : 'var(--bg-card)',
                            border: activeProfile === i ? '2px solid var(--accent)' : '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s ease',
                            transform: activeProfile === i ? 'scale(1.02)' : 'scale(1)'
                        }}>
                            <div style={{ width: 52, height: 52, borderRadius: 'var(--radius)', background: `linear-gradient(135deg, ${p.color}, var(--purple))`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16, color: 'white' }}>
                                {p.avatar}
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.role} {p.grade && `• ${p.grade}`}</div>
                            </div>
                            {activeProfile === i && <span className="material-icons-round" style={{ color: 'var(--accent)', fontSize: 22 }}>check_circle</span>}
                        </div>
                    ))}
                </div>

                {/* Active profile details */}
                <div className="grid-2">
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header">
                            <h3>{active.name}'s Overview</h3>
                            <span className="badge badge-accent">{active.role}</span>
                        </div>
                        {active.role === 'Student' ? (
                            <>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                                    <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                        <div style={{ fontSize: 28, fontWeight: 700 }}>{active.completion}%</div>
                                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Weekly Progress</div>
                                    </div>
                                    <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                        <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--warning)' }}>🔥 {active.streak}</div>
                                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Day Streak</div>
                                    </div>
                                </div>
                                <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, color: 'var(--text-secondary)' }}>Active Subjects</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                    {active.subjects.map((s, i) => (
                                        <span key={i} className="tag">{s}</span>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="info-block">
                                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent)' }}>info</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500 }}>Parent Account</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Monitor your children's learning activity, set study goals, and receive weekly reports.</div>
                                </div>
                            </div>
                        )}
                        <button className="btn btn-primary btn-sm w-full" style={{ justifyContent: 'center', marginTop: 20 }} onClick={() => navigate(active.role === 'Parent' ? '/parent' : '/')}>
                            <span className="material-icons-round" style={{ fontSize: 16 }}>login</span>
                            Switch to {active.name}
                        </button>
                    </div>

                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <h3>Recent Activity</h3>
                            <button className="btn btn-ghost btn-sm">View All</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {recentActivity.map((a, i) => (
                                <div key={i} className="list-item" style={{ borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 'var(--radius)', background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--accent-light)' }}>{a.icon}</span>
                                    </div>
                                    <div className="list-item-content">
                                        <h4>{a.title}</h4>
                                        <p>{a.time}</p>
                                    </div>
                                    {a.score && <span className="badge badge-success">{a.score}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
