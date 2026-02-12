import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
    const navigate = useNavigate();
    const [activeDay, setActiveDay] = useState(4);
    const [aiQuestion, setAiQuestion] = useState('');

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const streakData = [true, true, true, true, true, false, false];

    const subjects = [
        { name: 'Mathematics', units: '8/12', progress: 67, color: 'var(--accent)', icon: 'calculate' },
        { name: 'Science', units: '5/14', progress: 36, color: 'var(--success)', icon: 'science' },
        { name: 'English', units: '10/12', progress: 83, color: 'var(--purple)', icon: 'menu_book' },
        { name: 'History', units: '6/10', progress: 60, color: 'var(--warning)', icon: 'history_edu' },
    ];

    const recentActivity = [
        { title: 'Quadratic Equations: Part 3', chapter: 'Chapter 4: Algebra', time: '12 mins remaining', icon: 'functions', color: 'var(--accent)' },
        { title: 'Cell Division', chapter: 'Chapter 7: Biology', time: 'Completed', icon: 'biotech', color: 'var(--success)' },
        { title: 'Shakespeare Sonnet 18', chapter: 'Chapter 3: Poetry', time: '20 mins remaining', icon: 'auto_stories', color: 'var(--purple)' },
    ];

    const handleAskAI = () => {
        if (aiQuestion.trim()) {
            navigate('/ai-tutor');
        }
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Namaste, Arjun! 🙏</h2>
                        <p>You've completed 72% of your weekly goal. Keep going!</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <div className="search-box">
                        <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--text-muted)' }}>search</span>
                        <input placeholder="Search courses, topics..." />
                    </div>
                    <button className="btn-icon" style={{ position: 'relative' }} onClick={() => navigate('/settings')}>
                        <span className="material-icons-round" style={{ fontSize: 20 }}>notifications</span>
                        <span className="notification-dot"></span>
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Continue Learning */}
                <div className="mb-24 animate-in">
                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Continue Learning</h3>
                    <div className="card card-accent" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                        <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-icons-round" style={{ fontSize: 32, color: 'white' }}>functions</span>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Quadratic Equations: Part 3</h4>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 10 }}>Chapter 4: Algebra • 12 mins remaining</p>
                            <div className="progress-bar" style={{ maxWidth: 300 }}>
                                <div className="progress-fill" style={{ width: '68%' }}></div>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={() => navigate('/course-player')}>
                            <span className="material-icons-round" style={{ fontSize: 18 }}>play_arrow</span>
                            Resume
                        </button>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="stats-grid animate-in" style={{ animationDelay: '0.1s' }}>
                    <div className="stat-card" onClick={() => navigate('/knowledge-gap')} style={{ cursor: 'pointer' }}>
                        <div className="stat-icon" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}>
                            <span className="material-icons-round">trending_up</span>
                        </div>
                        <div className="stat-value">72%</div>
                        <div className="stat-label">Weekly Progress</div>
                        <div className="stat-change positive">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>arrow_upward</span>
                            +8% from last week
                        </div>
                    </div>
                    <div className="stat-card" onClick={() => navigate('/lesson-summary')} style={{ cursor: 'pointer' }}>
                        <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                            <span className="material-icons-round">emoji_events</span>
                        </div>
                        <div className="stat-value">24</div>
                        <div className="stat-label">Lessons Completed</div>
                        <div className="stat-change positive">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>arrow_upward</span>
                            +3 this week
                        </div>
                    </div>
                    <div className="stat-card" onClick={() => navigate('/achievements')} style={{ cursor: 'pointer' }}>
                        <div className="stat-icon" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}>
                            <span className="material-icons-round">local_fire_department</span>
                        </div>
                        <div className="stat-value">12</div>
                        <div className="stat-label">Day Streak</div>
                        <div className="stat-change positive">Personal best!</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>
                            <span className="material-icons-round">schedule</span>
                        </div>
                        <div className="stat-value">4.2h</div>
                        <div className="stat-label">Study Time Today</div>
                        <div className="stat-change positive">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>arrow_upward</span>
                            +45min avg
                        </div>
                    </div>
                </div>

                <div className="grid-2" style={{ animationDelay: '0.2s' }}>
                    {/* Subjects */}
                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <h3>Subject Mastery</h3>
                            <span className="badge badge-accent">4 Active</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {subjects.map((subject, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                                    <div style={{ width: 40, height: 40, borderRadius: 'var(--radius)', background: `${subject.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span className="material-icons-round" style={{ fontSize: 20, color: subject.color }}>{subject.icon}</span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                            <span style={{ fontSize: 13, fontWeight: 500 }}>{subject.name}</span>
                                            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{subject.units} Units</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${subject.progress}%`, background: subject.color }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-ghost btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={() => navigate('/knowledge-gap')}>
                            <span className="material-icons-round" style={{ fontSize: 16 }}>analytics</span>
                            View Detailed Analytics
                        </button>
                    </div>

                    {/* Consistency & Streak */}
                    <div className="card animate-in" style={{ animationDelay: '0.3s' }}>
                        <div className="card-header">
                            <h3>Consistency</h3>
                            <div className="streak-badge">
                                <span className="material-icons-round" style={{ fontSize: 18 }}>local_fire_department</span>
                                12 Days
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                            {weekDays.map((day, i) => (
                                <div key={i} style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setActiveDay(i)}>
                                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>{day}</div>
                                    <div style={{
                                        width: 36, height: 36, borderRadius: '50%',
                                        background: streakData[i] ? 'linear-gradient(135deg, var(--accent), var(--purple))' : 'var(--bg-input)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: i === activeDay ? '2px solid var(--accent-light)' : '2px solid transparent',
                                        fontSize: 14
                                    }}>
                                        {streakData[i] ? '✓' : ''}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="separator"></div>

                        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>
                            <span className="material-icons-round" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6, color: 'var(--accent-light)' }}>psychology</span>
                            Ask Your AI Tutor
                        </h4>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <input
                                className="form-input"
                                placeholder="Ask a question about your studies..."
                                style={{ flex: 1 }}
                                value={aiQuestion}
                                onChange={(e) => setAiQuestion(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                            />
                            <button className="btn btn-primary btn-sm" onClick={() => navigate('/ai-tutor')}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>send</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="card animate-in mt-24" style={{ animationDelay: '0.4s' }}>
                    <div className="card-header">
                        <h3>Recent Activity</h3>
                        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/lesson-summary')}>View All</button>
                    </div>
                    {recentActivity.map((activity, i) => (
                        <div key={i} className="list-item" style={{ borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius)', background: `${activity.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="material-icons-round" style={{ color: activity.color }}>{activity.icon}</span>
                            </div>
                            <div className="list-item-content">
                                <h4>{activity.title}</h4>
                                <p>{activity.chapter}</p>
                            </div>
                            <span className={`badge ${activity.time === 'Completed' ? 'badge-success' : 'badge-accent'}`}>{activity.time}</span>
                        </div>
                    ))}
                </div>

                {/* Offline Library */}
                <div className="card animate-in mt-24" style={{ animationDelay: '0.5s' }}>
                    <div className="card-header">
                        <h3>
                            <span className="material-icons-round" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8 }}>cloud_download</span>
                            Offline Library
                        </h3>
                        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/offline-manager')}>
                            <span className="material-icons-round" style={{ fontSize: 14 }}>settings</span>
                            Manage
                        </button>
                    </div>
                    <div className="grid-3">
                        {['Algebra Basics', 'Cell Biology', 'English Grammar'].map((item, i) => (
                            <div key={i} style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                                <span className="material-icons-round" style={{ fontSize: 32, color: 'var(--accent-light)', marginBottom: 8, display: 'block' }}>download_done</span>
                                <div style={{ fontSize: 13, fontWeight: 500 }}>{item}</div>
                                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Ready offline</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
