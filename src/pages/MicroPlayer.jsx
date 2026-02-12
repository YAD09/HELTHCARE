import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MicroPlayer() {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [downloadProgress, setDownloadProgress] = useState({});

    const lessons = [
        { title: 'Introduction to Solar Energy', duration: '3:45', size: '85 KB', status: 'completed', score: 92 },
        { title: 'Photovoltaic Cell Basics', duration: '5:12', size: '98 KB', status: 'current', score: null },
        { title: 'Solar Panel Installation', duration: '4:30', size: '92 KB', status: 'locked', score: null },
        { title: 'Energy Storage Systems', duration: '6:15', size: '105 KB', status: 'locked', score: null },
        { title: 'Grid Integration', duration: '4:02', size: '88 KB', status: 'locked', score: null },
    ];

    const handleDownload = (index) => {
        setDownloadProgress(prev => ({ ...prev, [index]: 0 }));
        const interval = setInterval(() => {
            setDownloadProgress(prev => {
                const current = (prev[index] || 0) + 20;
                if (current >= 100) {
                    clearInterval(interval);
                    return { ...prev, [index]: 100 };
                }
                return { ...prev, [index]: current };
            });
        }, 300);
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Low-Bandwidth Micro-Course Player</h2>
                        <p>Optimized for slow connections • Each lesson under 100KB</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <span className="badge badge-success">
                        <span className="material-icons-round" style={{ fontSize: 14 }}>wifi</span>
                        2G Compatible
                    </span>
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/offline')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>download_for_offline</span>
                        Offline Library
                    </button>
                </div>
            </div>

            <div className="page-content">
                <div className="grid-2">
                    {/* Player */}
                    <div className="card animate-in">
                        <div style={{ background: 'linear-gradient(135deg, #0a1628, #1a2d50)', borderRadius: 'var(--radius-lg)', padding: 32, textAlign: 'center', marginBottom: 20 }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: isPlaying ? 'var(--accent)' : 'var(--bg-input)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: isPlaying ? 'var(--shadow-glow)' : 'none' }} onClick={() => setIsPlaying(!isPlaying)}>
                                <span className="material-icons-round" style={{ fontSize: 38, color: 'white' }}>{isPlaying ? 'pause' : 'play_arrow'}</span>
                            </div>
                            <h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 16, color: 'white' }}>{lessons[currentLesson].title}</h3>
                            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{lessons[currentLesson].duration} • {lessons[currentLesson].size}</p>

                            {/* Seek bar */}
                            <div style={{ marginTop: 24 }}>
                                <div className="progress-bar" style={{ height: 6 }}>
                                    <div className="progress-fill" style={{ width: isPlaying ? '45%' : '0%', transition: 'width 0.5s ease' }} />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
                                    <span>{isPlaying ? '1:42' : '0:00'}</span>
                                    <span>{lessons[currentLesson].duration}</span>
                                </div>
                            </div>

                            {/* Controls */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 16 }}>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}>
                                    <span className="material-icons-round" style={{ fontSize: 28 }}>skip_previous</span>
                                </button>
                                <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => setIsPlaying(!isPlaying)}>
                                    <span className="material-icons-round" style={{ fontSize: 42 }}>{isPlaying ? 'pause_circle_filled' : 'play_circle_filled'}</span>
                                </button>
                                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}>
                                    <span className="material-icons-round" style={{ fontSize: 28 }}>skip_next</span>
                                </button>
                            </div>
                        </div>

                        {/* Data savings */}
                        <div className="info-block success">
                            <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--success)' }}>eco</span>
                            <div>
                                <div style={{ fontSize: 13, fontWeight: 500 }}>Data-Efficient Streaming</div>
                                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>This lesson uses only 98 KB — works on 2G networks</div>
                            </div>
                        </div>
                    </div>

                    {/* Playlist */}
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header">
                            <h3>Course Playlist</h3>
                            <span className="badge badge-accent">{lessons.length} Lessons</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {lessons.map((lesson, i) => (
                                <div key={i} onClick={() => lesson.status !== 'locked' && setCurrentLesson(i)} style={{
                                    padding: '12px 14px', borderRadius: 'var(--radius)', cursor: lesson.status === 'locked' ? 'not-allowed' : 'pointer',
                                    background: currentLesson === i ? 'var(--accent-subtle)' : 'transparent',
                                    border: currentLesson === i ? '1px solid var(--accent)' : '1px solid transparent',
                                    display: 'flex', alignItems: 'center', gap: 12, opacity: lesson.status === 'locked' ? 0.5 : 1,
                                    transition: 'all 0.2s ease'
                                }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 'var(--radius)', background: lesson.status === 'completed' ? 'var(--success-bg)' : currentLesson === i ? 'var(--accent)' : 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <span className="material-icons-round" style={{ fontSize: 18, color: lesson.status === 'completed' ? 'var(--success)' : currentLesson === i ? 'white' : 'var(--text-muted)' }}>
                                            {lesson.status === 'completed' ? 'check' : lesson.status === 'locked' ? 'lock' : currentLesson === i ? 'play_arrow' : 'play_circle'}
                                        </span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 13, fontWeight: currentLesson === i ? 600 : 400 }}>{lesson.title}</div>
                                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{lesson.duration} • {lesson.size}</div>
                                    </div>
                                    {lesson.score && <span className="badge badge-success" style={{ fontSize: 11 }}>{lesson.score}%</span>}
                                    {lesson.status !== 'completed' && lesson.status !== 'locked' && (
                                        <button onClick={(e) => { e.stopPropagation(); handleDownload(i); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-light)', padding: 4 }}>
                                            {downloadProgress[i] !== undefined && downloadProgress[i] < 100 ? (
                                                <span style={{ fontSize: 11, fontWeight: 600 }}>{downloadProgress[i]}%</span>
                                            ) : downloadProgress[i] === 100 ? (
                                                <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--success)' }}>download_done</span>
                                            ) : (
                                                <span className="material-icons-round" style={{ fontSize: 18 }}>download</span>
                                            )}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
