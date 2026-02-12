import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OfflineManager() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('library');

    const downloads = [
        { name: 'Algebra Foundations', size: '24 MB', status: 'downloaded', icon: 'functions', chapters: 12, color: 'var(--accent)' },
        { name: 'Cell Biology', size: '38 MB', status: 'downloaded', icon: 'biotech', chapters: 8, color: 'var(--success)' },
        { name: 'English Grammar', size: '18 MB', status: 'downloaded', icon: 'menu_book', chapters: 10, color: 'var(--purple)' },
        { name: 'World History', size: '42 MB', status: 'downloading', icon: 'history_edu', chapters: 14, color: 'var(--warning)', progress: 67 },
        { name: 'Physics Mechanics', size: '35 MB', status: 'queued', icon: 'speed', chapters: 9, color: 'var(--info)' },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div><h2>Offline Content Manager</h2><p>Download courses for offline study</p></div>
                </div>
                <div className="page-header-right">
                    <span className="badge badge-success">
                        <span className="material-icons-round" style={{ fontSize: 12 }}>wifi</span> Connected
                    </span>
                    <div style={{ display: 'flex', gap: 4, background: 'var(--bg-card)', borderRadius: 'var(--radius)', padding: 4, border: '1px solid var(--border)' }}>
                        {['library', 'queue', 'storage'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : 'btn-ghost'}`}>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div className="stats-grid mb-24 animate-in">
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}>
                            <span className="material-icons-round">cloud_done</span>
                        </div>
                        <div className="stat-value">3</div>
                        <div className="stat-label">Downloaded</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--warning-bg)', color: 'var(--warning)' }}>
                            <span className="material-icons-round">downloading</span>
                        </div>
                        <div className="stat-value">1</div>
                        <div className="stat-label">In Progress</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>
                            <span className="material-icons-round">storage</span>
                        </div>
                        <div className="stat-value">80 MB</div>
                        <div className="stat-label">Used Storage</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                            <span className="material-icons-round">sd_storage</span>
                        </div>
                        <div className="stat-value">420 MB</div>
                        <div className="stat-label">Available</div>
                    </div>
                </div>

                {activeTab === 'library' && (
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header"><h3>Downloaded Content</h3></div>
                        {downloads.filter(d => d.status === 'downloaded').map((dl, i) => (
                            <div key={i} className="list-item" style={{ borderBottom: '1px solid var(--border)', cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: `${dl.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-icons-round" style={{ fontSize: 24, color: dl.color }}>{dl.icon}</span>
                                </div>
                                <div className="list-item-content">
                                    <h4>{dl.name}</h4>
                                    <p>{dl.chapters} chapters • {dl.size}</p>
                                </div>
                                <span className="badge badge-success">Ready</span>
                                <button className="btn btn-primary btn-sm" onClick={(e) => { e.stopPropagation(); navigate('/course-player'); }}>
                                    <span className="material-icons-round" style={{ fontSize: 14 }}>play_arrow</span> Open
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'queue' && (
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header"><h3>Download Queue</h3></div>
                        {downloads.filter(d => d.status !== 'downloaded').map((dl, i) => (
                            <div key={i} className="list-item" style={{ borderBottom: '1px solid var(--border)' }}>
                                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: `${dl.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-icons-round" style={{ fontSize: 24, color: dl.color }}>{dl.icon}</span>
                                </div>
                                <div className="list-item-content">
                                    <h4>{dl.name}</h4>
                                    <p>{dl.chapters} chapters • {dl.size}</p>
                                    {dl.progress && (
                                        <div className="progress-bar" style={{ marginTop: 6, maxWidth: 200 }}>
                                            <div className="progress-fill" style={{ width: `${dl.progress}%` }}></div>
                                        </div>
                                    )}
                                </div>
                                <span className={`badge ${dl.status === 'downloading' ? 'badge-warning' : 'badge-accent'}`}>
                                    {dl.status === 'downloading' ? `${dl.progress}%` : 'Queued'}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'storage' && (
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header"><h3>Storage Management</h3></div>
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                <span style={{ fontSize: 14, fontWeight: 500 }}>Storage Used</span>
                                <span style={{ fontSize: 14, fontWeight: 600 }}>80 MB / 500 MB</span>
                            </div>
                            <div className="progress-bar" style={{ height: 12, borderRadius: 6 }}>
                                <div className="progress-fill" style={{ width: '16%' }}></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {downloads.filter(d => d.status === 'downloaded').map((dl, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                                    <span className="material-icons-round" style={{ fontSize: 20, color: dl.color }}>{dl.icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 14, fontWeight: 500 }}>{dl.name}</div>
                                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{dl.size}</div>
                                    </div>
                                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--danger)' }}>
                                        <span className="material-icons-round" style={{ fontSize: 14 }}>delete</span> Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-secondary" style={{ marginTop: 20 }} onClick={() => navigate('/settings')}>
                            <span className="material-icons-round" style={{ fontSize: 16 }}>settings</span>
                            Storage Settings
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
