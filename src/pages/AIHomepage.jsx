import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIHomepage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const quickActions = [
        { title: 'Ask a Question', icon: 'help_center', desc: 'Get instant AI-powered answers', action: '/ai-tutor', color: 'var(--accent)' },
        { title: 'Practice Quiz', icon: 'quiz', desc: 'Test your knowledge', action: '/assessment', color: 'var(--success)' },
        { title: 'Study Plan', icon: 'calendar_month', desc: 'AI-generated study schedule', action: '/', color: 'var(--purple)' },
        { title: 'Explain Concept', icon: 'lightbulb', desc: 'Deep dive into any topic', action: '/ai-tutor', color: 'var(--warning)' },
    ];

    const recentTopics = [
        { title: 'Photosynthesis', subject: 'Biology', progress: 85, icon: 'eco' },
        { title: 'Quadratic Equations', subject: 'Mathematics', progress: 72, icon: 'calculate' },
        { title: 'World War II', subject: 'History', progress: 60, icon: 'public' },
        { title: 'Chemical Bonding', subject: 'Chemistry', progress: 45, icon: 'science' },
    ];

    const suggestions = [
        'What is photosynthesis?',
        'Help me with quadratic equations',
        'Explain Newton\'s laws of motion',
        'Generate a quiz on World War II',
        'Create a study plan for my exams',
        'Summarize the French Revolution',
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>AI Learning Assistant</h2>
                        <p>Your personal AI-powered learning companion</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/ai-tutor')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>smart_toy</span>
                        Open Tutor
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Hero search */}
                <div className="card card-accent animate-in" style={{ textAlign: 'center', padding: '48px 32px', marginBottom: 24 }}>
                    <span className="material-icons-round" style={{ fontSize: 56, color: 'var(--accent-light)', marginBottom: 12, display: 'block' }}>psychology</span>
                    <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>What would you like to learn today?</h2>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 24px' }}>
                        Ask any question, generate quizzes, or get personalized study help
                    </p>
                    <div style={{ maxWidth: 560, margin: '0 auto', position: 'relative' }}>
                        <input
                            className="form-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Ask me anything about your subjects..."
                            style={{ paddingRight: 48, fontSize: 14, padding: '14px 48px 14px 16px' }}
                            onKeyPress={(e) => e.key === 'Enter' && navigate('/ai-tutor')}
                        />
                        <button onClick={() => navigate('/ai-tutor')} style={{
                            position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                            background: 'var(--accent)', border: 'none', borderRadius: 'var(--radius)',
                            width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                        }}>
                            <span className="material-icons-round" style={{ fontSize: 18, color: 'white' }}>send</span>
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 16 }}>
                        {suggestions.slice(0, 4).map((s, i) => (
                            <button key={i} onClick={() => { setQuery(s); navigate('/ai-tutor'); }} style={{
                                background: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: 20,
                                padding: '6px 14px', fontSize: 12, color: 'var(--text-secondary)', cursor: 'pointer',
                                fontFamily: 'Lexend, sans-serif', transition: 'all 0.2s ease'
                            }}>
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Quick Actions</h3>
                <div className="grid-4 mb-24">
                    {quickActions.map((a, i) => (
                        <div key={i} className="card card-hover animate-in" style={{ animationDelay: `${0.05 * i}s`, cursor: 'pointer', padding: 20 }} onClick={() => navigate(a.action)}>
                            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius)', background: `${a.color}20`, color: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                                <span className="material-icons-round" style={{ fontSize: 22 }}>{a.icon}</span>
                            </div>
                            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{a.title}</h4>
                            <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{a.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Continue Learning */}
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Continue Learning</h3>
                <div className="grid-2 mb-24">
                    {recentTopics.map((topic, i) => (
                        <div key={i} className="card card-hover animate-in" style={{ animationDelay: `${0.1 * i}s`, cursor: 'pointer', padding: 16 }} onClick={() => navigate('/ai-tutor')}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius)', background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span className="material-icons-round" style={{ fontSize: 22, color: 'var(--accent-light)' }}>{topic.icon}</span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{topic.title}</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{topic.subject}</div>
                                </div>
                                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent-light)' }}>{topic.progress}%</span>
                            </div>
                            <div className="progress-bar" style={{ marginTop: 10 }}>
                                <div className="progress-fill" style={{ width: `${topic.progress}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
