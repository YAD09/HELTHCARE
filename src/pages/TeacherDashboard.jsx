import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TeacherDashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');

    const students = [
        { name: 'Arjun Mehta', id: 'STU-8921', mastery: 82, status: 'On Track', avatar: 'AM' },
        { name: 'Sarah Chen', id: 'STU-8945', mastery: 91, status: 'Excelling', avatar: 'SC' },
        { name: 'Kofi Osei', id: 'STU-8912', mastery: 45, status: 'Needs Help', avatar: 'KO' },
        { name: 'Leila Janson', id: 'STU-8990', mastery: 67, status: 'On Track', avatar: 'LJ' },
        { name: 'Priya Patel', id: 'STU-8934', mastery: 78, status: 'On Track', avatar: 'PP' },
        { name: 'Tomás Garcia', id: 'STU-8967', mastery: 38, status: 'At Risk', avatar: 'TG' },
    ];

    const knowledgeGaps = [
        { topic: 'Angles & Geometry', students: 12, severity: 'high' },
        { topic: 'Linear Equations', students: 8, severity: 'medium' },
        { topic: 'Fractions & Decimals', students: 5, severity: 'low' },
        { topic: 'Data Interpretation', students: 9, severity: 'medium' },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Teacher Dashboard</h2>
                        <p>Grade 8 - Mathematics • St. Mary's Academy • Academic Year 2025-26</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <div className="search-box">
                        <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--text-muted)' }}>search</span>
                        <input placeholder="Search students..." />
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={() => navigate('/course-player')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>add</span>
                        New Assignment
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Stats */}
                <div className="stats-grid animate-in">
                    <div className="stat-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/knowledge-gap')}>
                        <div className="stat-icon" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}>
                            <span className="material-icons-round">insights</span>
                        </div>
                        <div className="stat-value">68.4%</div>
                        <div className="stat-label">Avg. Mastery</div>
                        <div className="stat-change positive">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>arrow_upward</span>
                            +4.2% this month
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--success-bg)', color: 'var(--success)' }}>
                            <span className="material-icons-round">groups</span>
                        </div>
                        <div className="stat-value">94.2%</div>
                        <div className="stat-label">Attendance</div>
                        <div className="stat-change positive">Excellent</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple)' }}>
                            <span className="material-icons-round">person</span>
                        </div>
                        <div className="stat-value">32/40</div>
                        <div className="stat-label">Active Learners</div>
                        <div className="stat-change negative">
                            <span className="material-icons-round" style={{ fontSize: 14 }}>arrow_downward</span>
                            8 inactive
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon" style={{ background: 'var(--danger-bg)', color: 'var(--danger)' }}>
                            <span className="material-icons-round">warning</span>
                        </div>
                        <div className="stat-value">5</div>
                        <div className="stat-label">Alerts</div>
                        <div className="stat-change negative">Requires attention</div>
                    </div>
                </div>

                <div className="grid-2">
                    {/* Knowledge Gaps */}
                    <div className="card animate-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-header">
                            <h3>Top Knowledge Gaps</h3>
                            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/knowledge-gap')}>
                                <span className="material-icons-round" style={{ fontSize: 14 }}>open_in_new</span>
                                Details
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {knowledgeGaps.map((gap, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < knowledgeGaps.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer' }} onClick={() => navigate('/knowledge-gap')}>
                                    <div style={{
                                        width: 10, height: 10, borderRadius: '50%',
                                        background: gap.severity === 'high' ? 'var(--danger)' : gap.severity === 'medium' ? 'var(--warning)' : 'var(--success)'
                                    }}></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 14, fontWeight: 500 }}>{gap.topic}</div>
                                        <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{gap.students} students struggling</div>
                                    </div>
                                    <span className={`badge ${gap.severity === 'high' ? 'badge-danger' : gap.severity === 'medium' ? 'badge-warning' : 'badge-success'}`}>
                                        {gap.severity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Recommendations */}
                    <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-header">
                            <h3>
                                <span className="material-icons-round" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8, color: 'var(--accent-light)' }}>auto_awesome</span>
                                AI Recommendations
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div className="info-block warning">
                                <div>
                                    <span className="badge badge-warning" style={{ marginBottom: 8 }}>Priority</span>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Remedial Lesson: 2D Geometry Basics</h4>
                                    <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Targeting 12 students failing 'Angles'</p>
                                    <button className="btn btn-primary btn-sm" style={{ marginTop: 10 }} onClick={() => navigate('/ai-tutor')}>
                                        <span className="material-icons-round" style={{ fontSize: 14 }}>send</span>
                                        Deploy Lesson
                                    </button>
                                </div>
                            </div>
                            <div className="info-block">
                                <div>
                                    <span className="badge badge-accent" style={{ marginBottom: 8 }}>Action</span>
                                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Broadcast "Morning Challenge"</h4>
                                    <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Boost consistency for inactive students</p>
                                    <button className="btn btn-secondary btn-sm" style={{ marginTop: 10 }} onClick={() => navigate('/community')}>
                                        <span className="material-icons-round" style={{ fontSize: 14 }}>campaign</span>
                                        Broadcast
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Roster */}
                <div className="card animate-in mt-24" style={{ animationDelay: '0.3s' }}>
                    <div className="card-header">
                        <h3>Student Roster</h3>
                        <span className="text-sm text-muted">Live tracking for 40 students</span>
                    </div>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>ID</th>
                                <th>Mastery</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, i) => (
                                <tr key={i}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <div className="avatar avatar-sm" style={{
                                                background: student.status === 'Excelling' ? 'linear-gradient(135deg, var(--success), #34d399)' :
                                                    student.status === 'Needs Help' || student.status === 'At Risk' ? 'linear-gradient(135deg, var(--danger), var(--warning))' :
                                                        'linear-gradient(135deg, var(--accent), var(--purple))'
                                            }}>{student.avatar}</div>
                                            <span style={{ fontWeight: 500 }}>{student.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ color: 'var(--text-muted)' }}>{student.id}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <div className="progress-bar" style={{ width: 80 }}>
                                                <div className={`progress-fill ${student.mastery >= 70 ? 'success' : student.mastery >= 50 ? 'warning' : ''}`}
                                                    style={{ width: `${student.mastery}%`, background: student.mastery < 50 ? 'var(--danger)' : undefined }}></div>
                                            </div>
                                            <span style={{ fontSize: 13 }}>{student.mastery}%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`badge ${student.status === 'Excelling' ? 'badge-success' :
                                            student.status === 'At Risk' || student.status === 'Needs Help' ? 'badge-danger' :
                                                'badge-accent'
                                            }`}>{student.status}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/knowledge-gap')}>
                                            <span className="material-icons-round" style={{ fontSize: 16 }}>visibility</span>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 16 }}>
                        <span className="text-sm text-muted">Page 1 of 7 • 40 Students Total</span>
                    </div>
                </div>
            </div>
        </>
    );
}
