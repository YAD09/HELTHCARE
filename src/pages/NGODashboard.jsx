import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NGODashboard() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState('overview');

    const stats = [
        { label: 'Total Students Sponsored', value: '428,940', icon: 'people', color: 'var(--accent)', change: '+12,400 this month' },
        { label: 'Avg. Mastery Improvement', value: '34.2%', icon: 'trending_up', color: 'var(--success)', change: '+2.8% from last quarter' },
        { label: 'Data Saved (GB)', value: '12,450', icon: 'cloud_download', color: 'var(--purple)', change: 'Offline-first model' },
        { label: 'Active Schools', value: '842', icon: 'school', color: 'var(--warning)', change: '+45 new this quarter' },
    ];

    const regions = [
        { name: 'Sub-Saharan West', students: 124500, mastery: 31, schools: 218, status: 'Active' },
        { name: 'Sub-Saharan East', students: 98200, mastery: 36, schools: 187, status: 'Active' },
        { name: 'Northern India', students: 68400, mastery: 42, schools: 156, status: 'Active' },
        { name: 'Southeast Asia', students: 52300, mastery: 38, schools: 112, status: 'Active' },
        { name: 'Central America', students: 41200, mastery: 29, schools: 89, status: 'Expanding' },
        { name: 'Pacific Islands', students: 22800, mastery: 45, schools: 48, status: 'Pilot' },
        { name: 'North Hub', students: 21540, mastery: 24, schools: 32, status: 'Low Connectivity' },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Partner Impact Dashboard</h2>
                        <p>Global Education Initiative • Sub-Saharan Africa Regions</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/impact-map')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>map</span>
                        Impact Map
                    </button>
                    <button className="btn btn-primary btn-sm">
                        <span className="material-icons-round" style={{ fontSize: 16 }}>download</span>
                        Export Report
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
                            <div className="stat-change positive">{stat.change}</div>
                        </div>
                    ))}
                </div>

                <div className="card animate-in mb-24" style={{ animationDelay: '0.1s' }}>
                    <div className="card-header">
                        <h3>Region Performance Detail</h3>
                        <span className="badge badge-accent">{regions.length} Regions</span>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Region</th>
                                <th>Students</th>
                                <th>Schools</th>
                                <th>Mastery Improvement</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {regions.map((region, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 500 }}>{region.name}</td>
                                    <td>{region.students.toLocaleString()}</td>
                                    <td>{region.schools}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <div className="progress-bar" style={{ maxWidth: 100 }}>
                                                <div className="progress-fill success" style={{ width: `${region.mastery}%` }} />
                                            </div>
                                            <span style={{ fontSize: 12, color: 'var(--success)' }}>+{region.mastery}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${region.status === 'Active' ? 'badge-success' : region.status === 'Low Connectivity' ? 'badge-danger' : 'badge-warning'}`}>
                                            {region.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="info-block warning animate-in" style={{ animationDelay: '0.2s' }}>
                    <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--warning)' }}>warning</span>
                    <div>
                        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Regional Alert: Low Connectivity (North Hub)</div>
                        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>4 schools switched to full offline sync yesterday. Mastery sync pending.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
