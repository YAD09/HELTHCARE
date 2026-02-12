import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CoursePlayer() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeChapter, setActiveChapter] = useState(2);
    const [notes, setNotes] = useState('Key concept: The vertex form of a quadratic is y = a(x − h)² + k where (h, k) is the vertex.');
    const [showAISummary, setShowAISummary] = useState(false);

    const chapters = [
        { title: 'Introduction to Quadratics', duration: '4:30', completed: true },
        { title: 'Standard Form: ax² + bx + c', duration: '8:15', completed: true },
        { title: 'Finding the Vertex', duration: '12:40', completed: false, current: true },
        { title: 'Graphing Parabolas', duration: '10:20', completed: false },
        { title: 'Real-world Applications', duration: '6:50', completed: false },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <button className="btn btn-ghost btn-sm" onClick={() => navigate('/')}>
                        <span className="material-icons-round" style={{ fontSize: 18 }}>arrow_back</span>
                        Back
                    </button>
                    <div>
                        <h2>Quadratic Functions</h2>
                        <p>Chapter 3: Finding the Vertex • Low-Bandwidth Mode</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <span className="badge badge-success">
                        <span className="material-icons-round" style={{ fontSize: 12 }}>signal_cellular_alt</span>
                        Adaptive Quality
                    </span>
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/offline-manager')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>cloud_download</span>
                        Download
                    </button>
                </div>
            </div>

            <div className="page-content">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
                    {/* Video Player */}
                    <div>
                        <div className="card animate-in" style={{ padding: 0, overflow: 'hidden' }}>
                            {/* Video Area */}
                            <div style={{
                                aspectRatio: '16/9', background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                position: 'relative', cursor: 'pointer',
                            }} onClick={() => setIsPlaying(!isPlaying)}>
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'radial-gradient(circle at 30% 40%, rgba(19,91,236,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.1) 0%, transparent 50%)',
                                }}></div>
                                {/* Math visualization */}
                                <div style={{ textAlign: 'center', zIndex: 1 }}>
                                    <div style={{ fontSize: 48, fontWeight: 700, color: 'white', marginBottom: 8, fontFamily: 'serif' }}>y = a(x − h)² + k</div>
                                    <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>Finding the Vertex of a Parabola</p>
                                </div>
                                {!isPlaying && (
                                    <div style={{
                                        position: 'absolute', width: 72, height: 72, borderRadius: '50%',
                                        background: 'rgba(19,91,236,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 20px rgba(19,91,236,0.4)',
                                    }}>
                                        <span className="material-icons-round" style={{ fontSize: 36, color: 'white' }}>play_arrow</span>
                                    </div>
                                )}
                                {/* Progress bar */}
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'rgba(255,255,255,0.1)' }}>
                                    <div style={{ width: '42%', height: '100%', background: 'var(--accent)', borderRadius: 2 }}></div>
                                </div>
                            </div>

                            {/* Controls */}
                            <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12, background: 'var(--bg-card)' }}>
                                <button className="btn-icon" onClick={() => setIsPlaying(!isPlaying)}>
                                    <span className="material-icons-round">{isPlaying ? 'pause' : 'play_arrow'}</span>
                                </button>
                                <button className="btn-icon"><span className="material-icons-round">skip_previous</span></button>
                                <button className="btn-icon"><span className="material-icons-round">skip_next</span></button>
                                <span style={{ fontSize: 13, color: 'var(--text-muted)', flex: 1 }}>5:18 / 12:40</span>
                                <button className="btn-icon"><span className="material-icons-round">speed</span></button>
                                <button className="btn-icon"><span className="material-icons-round">subtitles</span></button>
                                <button className="btn-icon"><span className="material-icons-round">fullscreen</span></button>
                            </div>
                        </div>

                        {/* Notes & AI Summary */}
                        <div className="grid-2" style={{ marginTop: 16 }}>
                            <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                                <div className="card-header">
                                    <h3>
                                        <span className="material-icons-round" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>edit_note</span>
                                        My Notes
                                    </h3>
                                </div>
                                <textarea
                                    className="form-input"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    style={{ minHeight: 120, resize: 'vertical', fontSize: 13, lineHeight: 1.6 }}
                                    placeholder="Take notes while watching..."
                                />
                                <button className="btn btn-secondary btn-sm" style={{ marginTop: 8 }}>
                                    <span className="material-icons-round" style={{ fontSize: 14 }}>save</span>
                                    Save Notes
                                </button>
                            </div>

                            <div className="card animate-in" style={{ animationDelay: '0.3s' }}>
                                <div className="card-header">
                                    <h3>
                                        <span className="material-icons-round" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6, color: 'var(--accent-light)' }}>auto_awesome</span>
                                        AI Summary
                                    </h3>
                                    <button className="btn btn-ghost btn-sm" onClick={() => setShowAISummary(!showAISummary)}>
                                        {showAISummary ? 'Hide' : 'Generate'}
                                    </button>
                                </div>
                                {showAISummary ? (
                                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                        <p><strong>Key Concepts:</strong></p>
                                        <ul style={{ paddingLeft: 16, marginTop: 8 }}>
                                            <li>The vertex is the highest or lowest point on a parabola</li>
                                            <li>Vertex form: y = a(x − h)² + k, where (h, k) is the vertex</li>
                                            <li>If a {'>'} 0, parabola opens upward (vertex is minimum)</li>
                                            <li>If a {'<'} 0, parabola opens downward (vertex is maximum)</li>
                                        </ul>
                                        <button className="btn btn-primary btn-sm" style={{ marginTop: 12 }} onClick={() => navigate('/ai-tutor')}>
                                            <span className="material-icons-round" style={{ fontSize: 14 }}>psychology</span>
                                            Discuss with AI Tutor
                                        </button>
                                    </div>
                                ) : (
                                    <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Click "Generate" to create an AI summary of this lesson.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                            <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Chapters</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {chapters.map((ch, i) => (
                                    <div key={i} onClick={() => setActiveChapter(i)} style={{
                                        padding: '12px 14px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                        background: i === activeChapter ? 'var(--accent-subtle)' : 'transparent',
                                        border: i === activeChapter ? '1px solid rgba(19,91,236,0.3)' : '1px solid transparent',
                                        display: 'flex', alignItems: 'center', gap: 10,
                                    }}>
                                        <span className="material-icons-round" style={{
                                            fontSize: 18,
                                            color: ch.completed ? 'var(--success)' : i === activeChapter ? 'var(--accent-light)' : 'var(--text-muted)'
                                        }}>
                                            {ch.completed ? 'check_circle' : i === activeChapter ? 'play_circle' : 'radio_button_unchecked'}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: 13, fontWeight: 500 }}>{ch.title}</div>
                                            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{ch.duration}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/quiz')}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>quiz</span>
                                Take Chapter Quiz
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/knowledge-gap')}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>analytics</span>
                                View My Progress
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
