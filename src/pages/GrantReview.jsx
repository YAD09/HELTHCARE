import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GrantReview() {
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState('all');

    const applications = [
        { school: 'Bright Horizon Academy', location: 'Maharashtra, India', students: 500, status: 'Approved', date: '2026-02-10', score: 92, tier: 'Regional Scale' },
        { school: 'Lagos Learning Hub', location: 'Lagos State, Nigeria', students: 1200, status: 'Under Review', date: '2026-02-08', score: 85, tier: 'Pilot Program' },
        { school: 'Mountain View Schools', location: 'Kathmandu Valley, Nepal', students: 350, status: 'Approved', date: '2026-02-05', score: 88, tier: 'Pilot Program' },
        { school: 'Sahel Academy Network', location: 'Dakar, Senegal', students: 2100, status: 'Pending', date: '2026-02-12', score: null, tier: 'National Initiative' },
        { school: 'Pacific Islands Collective', location: 'Fiji & Samoa', students: 800, status: 'Under Review', date: '2026-02-11', score: 78, tier: 'Regional Scale' },
        { school: 'Andean Education Trust', location: 'Cusco, Peru', students: 640, status: 'Rejected', date: '2026-01-28', score: 45, tier: 'Pilot Program' },
    ];

    const stats = [
        { label: 'Total Applications', value: '156', icon: 'description', color: 'var(--accent)' },
        { label: 'Approved', value: '89', icon: 'check_circle', color: 'var(--success)' },
        { label: 'Under Review', value: '34', icon: 'pending', color: 'var(--warning)' },
        { label: 'Total Funded', value: '$2.4M', icon: 'payments', color: 'var(--purple)' },
    ];

    const filtered = selectedFilter === 'all' ? applications : applications.filter(a => a.status.toLowerCase().replace(' ', '-') === selectedFilter);

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Grant Application Review Center</h2>
                        <p>Manage and review school sponsorship applications</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/sponsorship')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>add</span>
                        New Application
                    </button>
                </div>
            </div>

            <div className="page-content">
                <div className="stats-grid animate-in">
                    {stats.map((stat, i) => (
                        <div className="stat-card" key={i}>
                            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                                <span className="material-icons-round">{stat.icon}</span>
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                    <div className="card-header">
                        <h3>Applications</h3>
                        <div className="tabs" style={{ marginBottom: 0 }}>
                            {['all', 'approved', 'under-review', 'pending', 'rejected'].map(f => (
                                <button key={f} className={`tab ${selectedFilter === f ? 'active' : ''}`} onClick={() => setSelectedFilter(f)}>
                                    {f === 'all' ? 'All' : f === 'under-review' ? 'Under Review' : f.charAt(0).toUpperCase() + f.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>School</th>
                                <th>Location</th>
                                <th>Students</th>
                                <th>Tier</th>
                                <th>Score</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((app, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 500 }}>{app.school}</td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{app.location}</td>
                                    <td>{app.students.toLocaleString()}</td>
                                    <td><span className="badge badge-accent">{app.tier}</span></td>
                                    <td style={{ fontWeight: 600, color: app.score >= 80 ? 'var(--success)' : app.score >= 60 ? 'var(--warning)' : app.score ? 'var(--danger)' : 'var(--text-muted)' }}>
                                        {app.score ?? '—'}
                                    </td>
                                    <td>
                                        <span className={`badge ${app.status === 'Approved' ? 'badge-success' : app.status === 'Rejected' ? 'badge-danger' : app.status === 'Pending' ? 'badge-purple' : 'badge-warning'}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{app.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
