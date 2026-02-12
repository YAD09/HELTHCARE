import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ImpactMap() {
    const navigate = useNavigate();
    const [selectedRegion, setSelectedRegion] = useState('Northern India');

    const regions = [
        { name: 'Northern India', students: 42500, schools: 156, mastery: 38, connectivity: 'Low (2G)', color: 'var(--warning)' },
        { name: 'Western Africa', students: 68200, schools: 214, mastery: 29, connectivity: 'Moderate (3G)', color: 'var(--accent)' },
        { name: 'Southeast Asia', students: 35800, schools: 98, mastery: 42, connectivity: 'Moderate (3G)', color: 'var(--success)' },
        { name: 'East Africa', students: 91300, schools: 312, mastery: 31, connectivity: 'Low (2G)', color: 'var(--danger)' },
        { name: 'South America', students: 28400, schools: 87, mastery: 45, connectivity: 'High (4G)', color: 'var(--purple)' },
        { name: 'Central Asia', students: 19600, schools: 64, mastery: 35, connectivity: 'Low (2G)', color: 'var(--info)' },
        { name: 'Pacific Islands', students: 8200, schools: 23, mastery: 48, connectivity: 'Very Low', color: 'var(--pink)' },
    ];

    const liveStats = [
        { label: 'Total Students Reached', value: '294,000+', icon: 'people', color: 'var(--accent)' },
        { label: 'Active Schools', value: '954', icon: 'school', color: 'var(--success)' },
        { label: 'Data Saved (GB)', value: '12,450', icon: 'cloud_download', color: 'var(--purple)' },
        { label: 'Avg. Mastery Growth', value: '+34.2%', icon: 'trending_up', color: 'var(--warning)' },
    ];

    const active = regions.find(r => r.name === selectedRegion);

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Global & Regional Impact Map</h2>
                        <p>Live coverage across 7 active regions</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <span className="badge badge-success">
                        <span className="material-icons-round" style={{ fontSize: 14 }}>circle</span>
                        Live Data
                    </span>
                </div>
            </div>

            <div className="page-content">
                <div className="stats-grid animate-in">
                    {liveStats.map((stat, i) => (
                        <div className="stat-card" key={i}>
                            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                                <span className="material-icons-round">{stat.icon}</span>
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid-2 mb-24">
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header">
                            <h3>Region Map</h3>
                            <span className="badge badge-accent">{regions.length} Active Regions</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {regions.map((region, i) => (
                                <div key={i} onClick={() => setSelectedRegion(region.name)} style={{
                                    padding: '12px 16px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                    background: selectedRegion === region.name ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                    border: selectedRegion === region.name ? '1px solid var(--accent)' : '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s ease'
                                }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: region.color }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 13, fontWeight: 500 }}>{region.name}</div>
                                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{region.students.toLocaleString()} students</div>
                                    </div>
                                    <span className="badge badge-accent" style={{ fontSize: 10 }}>{region.connectivity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <h3>{active?.name} Details</h3>
                            <div style={{ width: 12, height: 12, borderRadius: '50%', background: active?.color }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 24, fontWeight: 700 }}>{active?.students.toLocaleString()}</div>
                                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Students</div>
                                </div>
                                <div style={{ padding: 16, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 24, fontWeight: 700 }}>{active?.schools}</div>
                                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Schools</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                                    <span>Mastery Improvement</span>
                                    <span style={{ fontWeight: 600, color: 'var(--success)' }}>+{active?.mastery}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill success" style={{ width: `${active?.mastery}%` }} />
                                </div>
                            </div>
                            <div className="info-block">
                                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--accent)' }}>info</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>Connectivity: {active?.connectivity}</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>AI tutor works flawlessly even with intermittent speeds.</div>
                                </div>
                            </div>
                            <div className="info-block warning">
                                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--warning)' }}>warning</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>Regional Alert</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>4 schools switched to full offline sync yesterday. Mastery sync pending.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
