import { useNavigate } from 'react-router-dom';

export default function Achievements() {
    const navigate = useNavigate();

    const badges = [
        { name: 'Math Prodigy', desc: 'Complete 50 math lessons', icon: 'calculate', color: 'var(--accent)', earned: true, date: 'Feb 10, 2026' },
        { name: 'Speed Demon', desc: 'Finish 5 quizzes under 5 min', icon: 'bolt', color: 'var(--warning)', earned: true, date: 'Feb 8, 2026' },
        { name: 'Perfect Score', desc: 'Score 100% on any quiz', icon: 'stars', color: 'var(--success)', earned: true, date: 'Feb 5, 2026' },
        { name: 'Bookworm', desc: 'Read 20 stories', icon: 'auto_stories', color: 'var(--purple)', earned: true, date: 'Jan 28, 2026' },
        { name: 'Social Butterfly', desc: 'Help 10 peers in community', icon: 'diversity_3', color: 'var(--pink)', earned: false, progress: 70 },
        { name: 'Night Owl', desc: 'Study for 7 consecutive nights', icon: 'dark_mode', color: 'var(--info)', earned: false, progress: 43 },
        { name: 'Science Star', desc: 'Master all science units', icon: 'science', color: 'var(--success)', earned: false, progress: 30 },
        { name: 'Polyglot', desc: 'Complete lessons in 3 languages', icon: 'translate', color: 'var(--warning)', earned: false, progress: 10 },
    ];

    const leaderboard = [
        { name: 'Sarah Chen', xp: 4820, rank: 1, avatar: 'SC' },
        { name: 'Arjun Sharma', xp: 4350, rank: 2, avatar: 'AS' },
        { name: 'Kofi Osei', xp: 3900, rank: 3, avatar: 'KO' },
        { name: 'Leila Janson', xp: 3650, rank: 4, avatar: 'LJ' },
        { name: 'Priya Patel', xp: 3200, rank: 5, avatar: 'PP' },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div><h2>Achievements & Rewards</h2><p>Track your milestones and unlock new badges</p></div>
                </div>
                <div className="page-header-right">
                    <div className="streak-badge"><span className="material-icons-round" style={{ fontSize: 16 }}>local_fire_department</span> 12 Day Streak</div>
                    <div style={{ padding: '8px 16px', background: 'var(--purple-bg)', borderRadius: 'var(--radius-full)', color: 'var(--purple)', fontWeight: 600, fontSize: 14 }}>4,350 XP</div>
                    <button className="btn btn-primary btn-sm" onClick={() => navigate('/quiz')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>quiz</span>
                        Earn More XP
                    </button>
                </div>
            </div>
            <div className="page-content">
                <div className="stats-grid mb-24 animate-in">
                    <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/quiz')}>
                        <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}><span className="material-icons-round">emoji_events</span></div>
                        <div className="stat-value">4</div>
                        <div className="stat-label">Badges Earned</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}><span className="material-icons-round">workspace_premium</span></div>
                        <div className="stat-value">4,350</div>
                        <div className="stat-label">Total XP</div>
                    </div>
                    <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/community')}>
                        <div className="stat-icon" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}><span className="material-icons-round">leaderboard</span></div>
                        <div className="stat-value">#2</div>
                        <div className="stat-label">Class Rank</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}><span className="material-icons-round">military_tech</span></div>
                        <div className="stat-value">8</div>
                        <div className="stat-label">Total Badges</div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
                    <div>
                        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Badge Gallery</h3>
                        <div className="grid-2 animate-in" style={{ animationDelay: '0.1s' }}>
                            {badges.map((b, i) => (
                                <div key={i} className="card" style={{ opacity: b.earned ? 1 : 0.7, textAlign: 'center', position: 'relative', cursor: 'pointer' }} onClick={() => !b.earned && navigate('/course-player')}>
                                    {b.earned && <div style={{ position: 'absolute', top: 12, right: 12 }}><span className="badge badge-success">Earned</span></div>}
                                    <span className="material-icons-round" style={{ fontSize: 40, color: b.color, display: 'block', marginBottom: 10 }}>{b.icon}</span>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{b.name}</h4>
                                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>{b.desc}</p>
                                    {b.earned ? (
                                        <span className="text-xs text-muted">Earned {b.date}</span>
                                    ) : (
                                        <div>
                                            <div className="progress-bar" style={{ marginBottom: 4 }}><div className="progress-fill" style={{ width: `${b.progress}%`, background: b.color }}></div></div>
                                            <span className="text-xs text-muted">{b.progress}% complete</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                            <div className="card-header"><h3>Leaderboard</h3><span className="text-sm text-muted">This Week</span></div>
                            {leaderboard.map((p, i) => (
                                <div key={i} className="list-item" style={{ borderBottom: i < leaderboard.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <div style={{ width: 24, textAlign: 'center', fontSize: 14, fontWeight: 700, color: i < 3 ? 'var(--warning)' : 'var(--text-muted)' }}>
                                        {i < 3 ? ['🥇', '🥈', '🥉'][i] : `#${p.rank}`}
                                    </div>
                                    <div className="avatar avatar-sm">{p.avatar}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                                    </div>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--purple)' }}>{p.xp.toLocaleString()} XP</span>
                                </div>
                            ))}
                            <button className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }} onClick={() => navigate('/community')}>
                                <span className="material-icons-round" style={{ fontSize: 14 }}>groups</span>
                                View Community
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
