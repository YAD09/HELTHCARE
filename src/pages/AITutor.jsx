import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AITutor() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Welcome back, Amara! Today we're diving into Quadratic Functions. Before we start, would you like to review the concept of \"x-intercepts\" from yesterday?" },
        { role: 'user', text: "Yes, please. I'm still a bit confused about why we call them \"roots\"." },
        { role: 'ai', text: "Think of a plant. The \"roots\" are where the plant meets the ground. In math, the \"roots\" are where the function's graph meets the x-axis (the ground level where y = 0).", isExplanation: true },
    ]);

    const modules = [
        { name: 'Quadratic Functions', status: 'completed', icon: 'check_circle' },
        { name: 'Graphing Parabolas', status: 'available', icon: 'download_done' },
        { name: 'Vertex Form', status: 'locked', icon: 'lock' },
        { name: 'Completing the Square', status: 'locked', icon: 'lock' },
    ];

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const userMsg = inputValue.trim();
        setMessages(prev => [
            ...prev,
            { role: 'user', text: userMsg },
            { role: 'ai', text: `Great question about "${userMsg}"! Let me break it down for you. In the context of quadratic equations, this relates to how we find solutions by factoring or using the quadratic formula. Would you like me to show you a worked example?`, isExplanation: true },
        ]);
        setInputValue('');
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>AI Tutor & Mentor</h2>
                        <p>Personalized Learning Assistant</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 16px', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                        <div className="avatar avatar-sm" style={{ background: 'linear-gradient(135deg, var(--pink), var(--purple))' }}>AK</div>
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 600 }}>Amara K.</div>
                            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Level 4 Learner</div>
                        </div>
                    </div>
                    <div className="streak-badge">
                        <span className="material-icons-round" style={{ fontSize: 16 }}>local_fire_department</span>
                        12 Days
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 24 }}>
                    {/* Left Sidebar */}
                    <div>
                        <div className="card animate-in mb-20">
                            <h4 style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Current Course</h4>
                            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Advanced Algebraic Structures</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                <span style={{ fontSize: 13, fontWeight: 600 }}>65%</span>
                                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Course Completed</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '65%' }}></div>
                            </div>
                            <button className="btn btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }} onClick={() => navigate('/course-player')}>
                                <span className="material-icons-round" style={{ fontSize: 14 }}>play_arrow</span>
                                Continue in Player
                            </button>
                        </div>

                        <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Lesson Modules</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {modules.map((mod, i) => (
                                    <div key={i} className="list-item" style={{
                                        opacity: mod.status === 'locked' ? 0.5 : 1,
                                        padding: '10px 12px',
                                        background: mod.status === 'completed' ? 'var(--success-bg)' : 'transparent',
                                        borderRadius: 'var(--radius)',
                                        cursor: mod.status !== 'locked' ? 'pointer' : 'default',
                                    }} onClick={() => mod.status !== 'locked' && navigate('/course-player')}>
                                        <span className="material-icons-round" style={{
                                            fontSize: 18,
                                            color: mod.status === 'completed' ? 'var(--success)' : mod.status === 'available' ? 'var(--accent-light)' : 'var(--text-muted)'
                                        }}>{mod.icon}</span>
                                        <span style={{ fontSize: 13, fontWeight: 500 }}>{mod.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card animate-in mt-20" style={{ animationDelay: '0.2s' }}>
                            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Upcoming Milestones</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => navigate('/achievements')}>
                                    <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--warning)' }}>emoji_events</span>
                                    <span style={{ fontSize: 13 }}>Algebra Master</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => navigate('/achievements')}>
                                    <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--purple)' }}>rocket_launch</span>
                                    <span style={{ fontSize: 13 }}>Calculus Pioneer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="card animate-in" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column' }}>
                        {/* Knowledge Gap Alert */}
                        <div className="info-block warning" style={{ marginBottom: 20, cursor: 'pointer' }} onClick={() => navigate('/knowledge-gap')}>
                            <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--warning)' }}>warning</span>
                            <div>
                                <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>Knowledge Gap Alert</h4>
                                <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>I noticed you're struggling with "Negative Coefficients". Click to review.</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20, minHeight: 300, maxHeight: 500, overflowY: 'auto' }}>
                            {messages.map((msg, i) => (
                                <div key={i} className={`chat-message ${msg.role}`}>
                                    {msg.role === 'ai' && (
                                        <div className="avatar avatar-sm" style={{ background: 'linear-gradient(135deg, var(--accent), var(--purple))' }}>
                                            <span className="material-icons-round" style={{ fontSize: 16 }}>psychology</span>
                                        </div>
                                    )}
                                    <div className={`chat-bubble ${msg.role}`}>
                                        {msg.isExplanation && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, fontSize: 11, color: 'var(--accent-light)', fontWeight: 600 }}>
                                                <span className="material-icons-round" style={{ fontSize: 14 }}>auto_awesome</span>
                                                AI Explanation Engine
                                            </div>
                                        )}
                                        {msg.text}
                                    </div>
                                    {msg.role === 'user' && (
                                        <div className="avatar avatar-sm" style={{ background: 'linear-gradient(135deg, var(--pink), var(--purple))' }}>AK</div>
                                    )}
                                </div>
                            ))}

                            {/* Real-time insight */}
                            <div style={{ padding: 14, background: 'var(--accent-subtle)', borderRadius: 'var(--radius)', border: '1px solid rgba(19,91,236,0.2)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--accent-light)' }}>lightbulb</span>
                                <div>
                                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent-light)', marginBottom: 4 }}>Real-time Insight</div>
                                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                        I've noticed you pause when solving for 'y'. Would you like a 2-minute refresher on Order of Operations?
                                    </p>
                                    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                        <button className="btn btn-primary btn-sm" onClick={() => navigate('/quiz')}>Yes, take a quiz</button>
                                        <button className="btn btn-secondary btn-sm" onClick={() => navigate('/course-player')}>Watch video instead</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div style={{ display: 'flex', gap: 8, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                            <input
                                className="form-input"
                                placeholder="Type your question or answer..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                style={{ flex: 1 }}
                            />
                            <button className="btn btn-primary" onClick={handleSend}>
                                <span className="material-icons-round" style={{ fontSize: 18 }}>send</span>
                            </button>
                            <button className="btn btn-secondary">
                                <span className="material-icons-round" style={{ fontSize: 18 }}>mic</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
