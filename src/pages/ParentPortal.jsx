import { useNavigate } from 'react-router-dom';

export default function ParentPortal() {
    const navigate = useNavigate();

    const achievements = [
        { name: 'Math Master', icon: 'calculate', color: 'var(--accent)', earned: true },
        { name: 'Story Teller', icon: 'auto_stories', color: 'var(--purple)', earned: true },
        { name: 'Daily Streak', icon: 'local_fire_department', color: 'var(--warning)', earned: true },
        { name: 'Science Star', icon: 'science', color: 'var(--success)', earned: false },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Parent Portal</h2>
                        <p>Track your child's learning journey</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'var(--success-bg)', borderRadius: 'var(--radius-full)' }}>
                        <div style={{ width: 8, height: 8, background: 'var(--success)', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: 12, color: 'var(--success)' }}>Mr. Abraham is online</span>
                    </div>
                    <button className="btn-icon" onClick={() => navigate('/community')}>
                        <span className="material-icons-round" style={{ fontSize: 20 }}>chat</span>
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Child Info */}
                <div className="card card-accent animate-in mb-24" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    <div className="avatar avatar-lg" style={{ background: 'linear-gradient(135deg, var(--pink), var(--purple))' }}>AK</div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Amara's Learning Journey</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Grade 4 • St. Jude's Primary</p>
                    </div>
                    <button className="btn btn-secondary" onClick={() => navigate('/settings')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>settings</span>
                        Settings
                    </button>
                    <button className="btn btn-primary" onClick={() => navigate('/knowledge-gap')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>download</span>
                        Download Report
                    </button>
                </div>

                {/* Today Stats */}
                <div className="grid-3 mb-24 animate-in" style={{ animationDelay: '0.1s' }}>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}>
                            <span className="material-icons-round">schedule</span>
                        </div>
                        <div className="stat-value">45 <span style={{ fontSize: 14, fontWeight: 400 }}>Mins</span></div>
                        <div className="stat-label">Time Spent Today</div>
                        <div className="stat-change positive">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>trending_up</span>
                            +10% from yesterday
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>
                            <span className="material-icons-round">menu_book</span>
                        </div>
                        <div className="stat-value">Math & Reading</div>
                        <div className="stat-label">Subjects Covered</div>
                        <div className="stat-change positive">2 modules completed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                            <span className="material-icons-round">flag</span>
                        </div>
                        <div className="stat-value">85%</div>
                        <div className="stat-label">Weekly Goal Progress</div>
                        <div className="progress-bar" style={{ marginTop: 6 }}>
                            <div className="progress-fill success" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="grid-2">
                    {/* Today's Summary */}
                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <h3>Today's Summary (आज की पढ़ाई)</h3>
                            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/lesson-summary')}>View Full</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', borderLeft: '3px solid var(--accent)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--accent-light)' }}>calculate</span>
                                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>Math: Understanding Fractions</h4>
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>गणित: अंश को समझना</p>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic' }}>"Almost there! Just 2 more practice exercises left."</p>
                            </div>
                            <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', borderLeft: '3px solid var(--success)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--success)' }}>auto_stories</span>
                                    <h4 style={{ fontSize: 14, fontWeight: 600 }}>Reading: Story Comprehension</h4>
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>पढ़ना: कहानी समझना</p>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic' }}>"Excellent! Amara read 3 stories today."</p>
                            </div>
                        </div>
                    </div>

                    {/* Support Tips */}
                    <div className="card animate-in" style={{ animationDelay: '0.3s' }}>
                        <div className="card-header">
                            <h3>
                                <span className="material-icons-round" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8, color: 'var(--accent-light)' }}>tips_and_updates</span>
                                Support Your Child
                            </h3>
                        </div>
                        <div className="info-block warning" style={{ marginBottom: 16 }}>
                            <div>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Focus Area: Multiplication</h4>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                    Amara is getting stronger at addition, but could use more practice with the 4x and 5x tables.
                                </p>
                                <button className="btn btn-primary btn-sm" style={{ marginTop: 10 }} onClick={() => navigate('/ai-tutor')}>
                                    <span className="material-icons-round" style={{ fontSize: 14 }}>psychology</span>
                                    Ask AI Tutor for Exercises
                                </button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div style={{ padding: 14, background: 'var(--bg-input)', borderRadius: 'var(--radius)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16, color: 'var(--accent-light)' }}>lightbulb</span>
                                    <span style={{ fontSize: 13, fontWeight: 600 }}>Home Tip</span>
                                </div>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                    "Try counting items in groups of 5 while shopping or cooking together. This helps make multiplication feel real and fun!"
                                </p>
                            </div>
                            <div style={{ padding: 14, background: 'var(--bg-input)', borderRadius: 'var(--radius)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16, color: 'var(--purple)' }}>auto_stories</span>
                                    <span style={{ fontSize: 13, fontWeight: 600 }}>Reading Tip</span>
                                </div>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                    "Ask her to describe the main character's feelings after reading. It builds great empathy and understanding!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="card animate-in mt-24" style={{ animationDelay: '0.4s' }}>
                    <div className="card-header">
                        <h3>Recent Achievements</h3>
                        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/achievements')}>View All</button>
                    </div>
                    <div className="grid-4">
                        {achievements.map((ach, i) => (
                            <div key={i} style={{
                                padding: 20, textAlign: 'center', borderRadius: 'var(--radius)',
                                background: ach.earned ? 'var(--bg-input)' : 'transparent',
                                border: ach.earned ? '1px solid var(--border)' : '1px dashed var(--border)',
                                opacity: ach.earned ? 1 : 0.5, cursor: 'pointer',
                            }} onClick={() => navigate('/achievements')}>
                                <span className="material-icons-round" style={{ fontSize: 36, color: ach.color, marginBottom: 8, display: 'block' }}>{ach.icon}</span>
                                <div style={{ fontSize: 13, fontWeight: 600 }}>{ach.name}</div>
                                {!ach.earned && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>Next goal</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
