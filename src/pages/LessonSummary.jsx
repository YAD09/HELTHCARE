import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LessonSummary() {
    const navigate = useNavigate();

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Lesson Summary</h2>
                        <p>Great work! Here's how you did.</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>home</span>
                        Back to Dashboard
                    </button>
                </div>
            </div>
            <div className="page-content">
                {/* Success Banner */}
                <div className="card card-accent animate-in mb-24" style={{ textAlign: 'center', padding: 40 }}>
                    <span className="material-icons-round" style={{ fontSize: 64, color: 'var(--success)', display: 'block', marginBottom: 16 }}>celebration</span>
                    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Lesson Complete! 🎉</h2>
                    <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 20 }}>Adding Fractions • Mathematics</p>
                    <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
                        <div><div style={{ fontSize: 32, fontWeight: 700, color: 'var(--success)' }}>85%</div><div className="text-sm text-muted">Score</div></div>
                        <div style={{ width: 1, background: 'var(--border)' }}></div>
                        <div><div style={{ fontSize: 32, fontWeight: 700, color: 'var(--accent-light)' }}>12</div><div className="text-sm text-muted">Questions</div></div>
                        <div style={{ width: 1, background: 'var(--border)' }}></div>
                        <div><div style={{ fontSize: 32, fontWeight: 700, color: 'var(--warning)' }}>8:30</div><div className="text-sm text-muted">Time Taken</div></div>
                        <div style={{ width: 1, background: 'var(--border)' }}></div>
                        <div><div style={{ fontSize: 32, fontWeight: 700, color: 'var(--purple)' }}>+50</div><div className="text-sm text-muted">XP Earned</div></div>
                    </div>
                </div>

                <div className="grid-2">
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header"><h3>Performance Breakdown</h3></div>
                        {[
                            { label: 'Correct Answers', value: '10/12', pct: 83, color: 'var(--success)' },
                            { label: 'Time Efficiency', value: 'Good', pct: 70, color: 'var(--accent)' },
                            { label: 'Concept Understanding', value: 'Strong', pct: 90, color: 'var(--purple)' },
                            { label: 'Problem Solving', value: 'Developing', pct: 60, color: 'var(--warning)' },
                        ].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                        <span style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</span>
                                        <span style={{ fontSize: 13, color: item.color, fontWeight: 600 }}>{item.value}</span>
                                    </div>
                                    <div className="progress-bar"><div className="progress-fill" style={{ width: `${item.pct}%`, background: item.color }}></div></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header"><h3><span className="material-icons-round" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8, color: 'var(--accent-light)' }}>auto_awesome</span>AI Recommendations</h3></div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <div className="info-block success">
                                <div>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Strengths</h4>
                                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Excellent grasp of finding common denominators. Your method of cross-multiplication is efficient and accurate.</p>
                                </div>
                            </div>
                            <div className="info-block warning">
                                <div>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Areas to Improve</h4>
                                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Practice simplifying fractions after operations. Remember to always check if the numerator and denominator share a common factor.</p>
                                    <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }} onClick={() => navigate('/knowledge-gap')}>
                                        <span className="material-icons-round" style={{ fontSize: 14 }}>analytics</span>
                                        View Gap Analysis
                                    </button>
                                </div>
                            </div>
                            <div className="info-block">
                                <div>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Next Steps</h4>
                                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Try "Subtracting Fractions" to build on this skill. You're ready for the next challenge!</p>
                                    <button className="btn btn-ghost btn-sm" style={{ marginTop: 8 }} onClick={() => navigate('/ai-tutor')}>
                                        <span className="material-icons-round" style={{ fontSize: 14 }}>psychology</span>
                                        Ask AI Tutor
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
                    <button className="btn btn-secondary" onClick={() => navigate('/quiz')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>replay</span> Retry Quiz
                    </button>
                    <button className="btn btn-primary" onClick={() => navigate('/course-player')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_forward</span> Next Lesson
                    </button>
                </div>
            </div>
        </>
    );
}
