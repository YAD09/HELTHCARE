import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState({ email: true, push: true, sms: false, weekly: true });
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('en');
    const [fontSize, setFontSize] = useState('medium');
    const [activeTab, setActiveTab] = useState('profile');

    const Toggle = ({ checked, onChange }) => (
        <div onClick={() => onChange(!checked)} style={{
            width: 44, height: 24, borderRadius: 12, cursor: 'pointer',
            background: checked ? 'var(--accent)' : 'var(--bg-input)',
            border: checked ? 'none' : '2px solid var(--border)',
            padding: 2, transition: 'all 0.3s ease',
        }}>
            <div style={{
                width: 20, height: 20, borderRadius: '50%', background: 'white',
                transform: checked ? 'translateX(20px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
            }}></div>
        </div>
    );

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div><h2>Settings</h2><p>Manage your account and preferences</p></div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_back</span>
                        Back to Dashboard
                    </button>
                </div>
            </div>

            <div className="page-content">
                <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24 }}>
                    {/* Settings Nav */}
                    <div className="card animate-in" style={{ height: 'fit-content' }}>
                        {['profile', 'institution', 'notifications', 'accessibility'].map(tab => (
                            <div key={tab} onClick={() => setActiveTab(tab)} style={{
                                padding: '12px 16px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                background: activeTab === tab ? 'var(--accent-subtle)' : 'transparent',
                                color: activeTab === tab ? 'var(--accent-light)' : 'var(--text-secondary)',
                                fontSize: 14, fontWeight: activeTab === tab ? 600 : 400,
                                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4,
                            }}>
                                <span className="material-icons-round" style={{ fontSize: 18 }}>
                                    {tab === 'profile' ? 'person' : tab === 'institution' ? 'school' : tab === 'notifications' ? 'notifications' : 'accessibility'}
                                </span>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </div>
                        ))}
                    </div>

                    {/* Settings Content */}
                    <div>
                        {activeTab === 'profile' && (
                            <div className="card animate-in">
                                <div className="card-header"><h3>Profile Information</h3></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
                                    <div className="avatar avatar-lg" style={{ background: 'linear-gradient(135deg, var(--accent), var(--purple))' }}>AM</div>
                                    <div>
                                        <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Arjun Mehta</h4>
                                        <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>arjun.mehta@school.edu</p>
                                        <button className="btn btn-ghost btn-sm" style={{ marginTop: 8 }}>
                                            <span className="material-icons-round" style={{ fontSize: 14 }}>photo_camera</span>
                                            Change Photo
                                        </button>
                                    </div>
                                </div>
                                <div className="grid-2" style={{ gap: 16 }}>
                                    <div>
                                        <label className="form-label">Full Name</label>
                                        <input className="form-input" defaultValue="Arjun Mehta" />
                                    </div>
                                    <div>
                                        <label className="form-label">Email</label>
                                        <input className="form-input" defaultValue="arjun.mehta@school.edu" />
                                    </div>
                                    <div>
                                        <label className="form-label">Phone</label>
                                        <input className="form-input" defaultValue="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="form-label">Role</label>
                                        <input className="form-input" defaultValue="Student" disabled />
                                    </div>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: 20 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16 }}>save</span>
                                    Save Changes
                                </button>
                            </div>
                        )}

                        {activeTab === 'institution' && (
                            <div className="card animate-in">
                                <div className="card-header"><h3>Institution Settings</h3></div>
                                <div className="grid-2" style={{ gap: 16 }}>
                                    <div>
                                        <label className="form-label">School Name</label>
                                        <input className="form-input" defaultValue="St. Mary's International Academy" />
                                    </div>
                                    <div>
                                        <label className="form-label">School ID</label>
                                        <input className="form-input" defaultValue="SMIA-2025-8732" disabled />
                                    </div>
                                    <div>
                                        <label className="form-label">Grade</label>
                                        <input className="form-input" defaultValue="Grade 8" />
                                    </div>
                                    <div>
                                        <label className="form-label">Academic Year</label>
                                        <input className="form-input" defaultValue="2025-2026" />
                                    </div>
                                </div>
                                <div className="separator"></div>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Curriculum</h4>
                                <div style={{ display: 'flex', gap: 8 }}>
                                    <span className="tag">NCERT Mathematics</span>
                                    <span className="tag">NCERT Science</span>
                                    <span className="tag">CBSE English</span>
                                    <span className="tag">Social Studies</span>
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: 20 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16 }}>save</span>
                                    Update Institution
                                </button>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="card animate-in">
                                <div className="card-header"><h3>Notification Preferences</h3></div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    {[
                                        { key: 'email', label: 'Email Notifications', desc: 'Receive lesson updates and progress reports via email' },
                                        { key: 'push', label: 'Push Notifications', desc: 'Get real-time alerts about assignments and deadlines' },
                                        { key: 'sms', label: 'SMS Alerts', desc: 'Important updates via text message (carrier charges may apply)' },
                                        { key: 'weekly', label: 'Weekly Digest', desc: 'Receive a weekly summary of your learning progress every Sunday' },
                                    ].map(item => (
                                        <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                                            <div>
                                                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{item.label}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.desc}</div>
                                            </div>
                                            <Toggle checked={notifications[item.key]} onChange={(v) => setNotifications({ ...notifications, [item.key]: v })} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'accessibility' && (
                            <div className="card animate-in">
                                <div className="card-header"><h3>Accessibility & Display</h3></div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div>
                                            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Dark Mode</div>
                                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Use dark theme for comfortable reading</div>
                                        </div>
                                        <Toggle checked={darkMode} onChange={setDarkMode} />
                                    </div>

                                    <div>
                                        <label className="form-label">Language</label>
                                        <select className="form-input" value={language} onChange={(e) => setLanguage(e.target.value)}>
                                            <option value="en">English</option>
                                            <option value="hi">Hindi (हिन्दी)</option>
                                            <option value="sw">Swahili</option>
                                            <option value="fr">French</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="form-label">Font Size</label>
                                        <div style={{ display: 'flex', gap: 8 }}>
                                            {['small', 'medium', 'large'].map(size => (
                                                <button key={size} onClick={() => setFontSize(size)} className={`btn btn-sm ${fontSize === size ? 'btn-primary' : 'btn-secondary'}`}>
                                                    {size.charAt(0).toUpperCase() + size.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="separator"></div>

                                    <div>
                                        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--danger)' }}>Danger Zone</h4>
                                        <button className="btn btn-secondary" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }} onClick={() => navigate('/login')}>
                                            <span className="material-icons-round" style={{ fontSize: 16 }}>logout</span>
                                            Log Out of All Devices
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
