import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function KnowledgeGap() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('quiz');
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const heatmapData = [
        { topic: 'Algebra', weeks: [85, 72, 90, 88, 92] },
        { topic: 'Geometry', weeks: [45, 52, 48, 55, 60] },
        { topic: 'Statistics', weeks: [70, 75, 80, 78, 85] },
        { topic: 'Calculus', weeks: [30, 35, 40, 42, 50] },
        { topic: 'Trigonometry', weeks: [60, 55, 65, 70, 72] },
    ];

    const gaps = [
        { topic: 'Angles & Geometry', mastery: 42, trend: 'improving', sessions: 8 },
        { topic: 'Negative Coefficients', mastery: 35, trend: 'declining', sessions: 3 },
        { topic: 'Word Problems', mastery: 55, trend: 'stable', sessions: 12 },
        { topic: 'Graph Interpretation', mastery: 48, trend: 'improving', sessions: 6 },
    ];

    const remedialPaths = [
        { title: 'Geometry Foundations', lessons: 6, duration: '45 min', icon: 'architecture', color: 'var(--accent)' },
        { title: 'Coefficient Mastery', lessons: 4, duration: '30 min', icon: 'functions', color: 'var(--purple)' },
        { title: 'Word Problem Strategies', lessons: 8, duration: '60 min', icon: 'description', color: 'var(--success)' },
    ];

    const getHeatColor = (val) => {
        if (val >= 80) return 'var(--success)';
        if (val >= 60) return 'var(--accent)';
        if (val >= 40) return 'var(--warning)';
        return 'var(--danger)';
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Knowledge Gap & Evaluation Center</h2>
                        <p>Identify strengths, bridge gaps, and track improvement</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <div style={{ display: 'flex', gap: 4, background: 'var(--bg-card)', borderRadius: 'var(--radius)', padding: 4, border: '1px solid var(--border)' }}>
                        {['quiz', 'insights'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-ghost'}`}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>{tab === 'quiz' ? 'quiz' : 'analytics'}</span>
                                {tab === 'quiz' ? 'Evaluation' : 'Insights'}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-content">
                {activeTab === 'quiz' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
                        <div>
                            {/* Quiz */}
                            <div className="card animate-in">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                                    <span className="badge badge-accent">Question 5 of 12</span>
                                    <span style={{ fontSize: 14, fontWeight: 600 }}>
                                        <span className="material-icons-round" style={{ fontSize: 16, verticalAlign: 'middle', color: 'var(--warning)' }}>timer</span> 03:45
                                    </span>
                                </div>
                                <div style={{ padding: 24, background: 'var(--bg-input)', borderRadius: 'var(--radius-lg)', marginBottom: 20 }}>
                                    <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.6 }}>
                                        If the gradient of a line is 3 and the y-intercept is −2, what is the value of y when x = 1?
                                    </p>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    {['y = −1', 'y = 1', 'y = 5', 'y = −5'].map((opt, i) => (
                                        <div key={i} onClick={() => setSelectedAnswer(i)} style={{
                                            padding: '14px 18px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                            background: selectedAnswer === i ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                            border: selectedAnswer === i ? '2px solid var(--accent)' : '2px solid var(--border)',
                                            display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s ease',
                                        }}>
                                            <div style={{ width: 28, height: 28, borderRadius: '50%', background: selectedAnswer === i ? 'var(--accent)' : 'transparent', border: selectedAnswer === i ? 'none' : '2px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: selectedAnswer === i ? 'white' : 'var(--text-muted)' }}>
                                                {String.fromCharCode(65 + i)}
                                            </div>
                                            <span style={{ fontSize: 14, fontWeight: 500 }}>{opt}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                    <button className="btn btn-secondary">
                                        <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_back</span> Previous
                                    </button>
                                    <button className="btn btn-primary" onClick={() => navigate('/lesson-summary')}>
                                        Next <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card animate-in mb-20" style={{ animationDelay: '0.1s' }}>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Quiz Progress</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <div key={i} style={{
                                            width: 32, height: 32, borderRadius: 'var(--radius)',
                                            background: i < 4 ? 'var(--success)' : i === 4 ? 'var(--accent)' : 'var(--bg-input)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: 12, fontWeight: 600, color: i <= 4 ? 'white' : 'var(--text-muted)',
                                        }}>{i + 1}</div>
                                    ))}
                                </div>
                                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>4/12 answered • 8 remaining</div>
                            </div>
                            <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 6, color: 'var(--accent-light)' }}>lightbulb</span>
                                    AI Hint
                                </h4>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    For a linear equation y = mx + c, substitute the given values: m (gradient) = 3, c (y-intercept) = −2, and x = 1.
                                </p>
                                <button className="btn btn-ghost btn-sm" style={{ marginTop: 8 }} onClick={() => navigate('/ai-tutor')}>
                                    <span className="material-icons-round" style={{ fontSize: 14 }}>psychology</span>
                                    Need more help? Ask AI
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'insights' && (
                    <>
                        <div className="grid-2 animate-in">
                            {/* Heatmap */}
                            <div className="card">
                                <div className="card-header"><h3>Mastery Heatmap</h3><span className="text-sm text-muted">Last 5 weeks</span></div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <div style={{ display: 'flex', gap: 8, paddingLeft: 120 }}>
                                        {['W1', 'W2', 'W3', 'W4', 'W5'].map(w => (
                                            <div key={w} style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'var(--text-muted)' }}>{w}</div>
                                        ))}
                                    </div>
                                    {heatmapData.map((row, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <div style={{ width: 112, fontSize: 13, fontWeight: 500, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{row.topic}</div>
                                            {row.weeks.map((val, j) => (
                                                <div key={j} style={{
                                                    flex: 1, height: 32, borderRadius: 'var(--radius-sm)',
                                                    background: `${getHeatColor(val)}30`,
                                                    border: `1px solid ${getHeatColor(val)}50`,
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: 11, fontWeight: 600, color: getHeatColor(val),
                                                }}>{val}%</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gap Analysis */}
                            <div className="card">
                                <div className="card-header"><h3>Gap Analysis</h3></div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    {gaps.map((gap, i) => (
                                        <div key={i} style={{ cursor: 'pointer' }} onClick={() => navigate('/ai-tutor')}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                                <span style={{ fontSize: 13, fontWeight: 500 }}>{gap.topic}</span>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                                    <span className="material-icons-round" style={{
                                                        fontSize: 14,
                                                        color: gap.trend === 'improving' ? 'var(--success)' : gap.trend === 'declining' ? 'var(--danger)' : 'var(--warning)',
                                                    }}>
                                                        {gap.trend === 'improving' ? 'trending_up' : gap.trend === 'declining' ? 'trending_down' : 'trending_flat'}
                                                    </span>
                                                    <span style={{ fontSize: 13, fontWeight: 600, color: gap.mastery < 50 ? 'var(--danger)' : 'var(--warning)' }}>{gap.mastery}%</span>
                                                </div>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: `${gap.mastery}%`, background: gap.mastery < 50 ? 'var(--danger)' : 'var(--warning)' }}></div>
                                            </div>
                                            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>{gap.sessions} practice sessions</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Remedial Paths */}
                        <div className="card animate-in mt-24" style={{ animationDelay: '0.2s' }}>
                            <div className="card-header">
                                <h3>
                                    <span className="material-icons-round" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8, color: 'var(--accent-light)' }}>route</span>
                                    Recommended Learning Paths
                                </h3>
                            </div>
                            <div className="grid-3">
                                {remedialPaths.map((path, i) => (
                                    <div key={i} style={{ padding: 20, background: 'var(--bg-input)', borderRadius: 'var(--radius)', cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                                        <span className="material-icons-round" style={{ fontSize: 32, color: path.color, marginBottom: 12, display: 'block' }}>{path.icon}</span>
                                        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{path.title}</h4>
                                        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>{path.lessons} lessons • {path.duration}</p>
                                        <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); navigate('/course-player'); }}>
                                            <span className="material-icons-round" style={{ fontSize: 14 }}>play_arrow</span>
                                            Start Path
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
