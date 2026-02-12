import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [role, setRole] = useState('student');
    const navigate = useNavigate();

    const roles = [
        { id: 'student', label: 'Student', icon: 'school', desc: 'Access lessons, AI tutor, and track progress', path: '/' },
        { id: 'teacher', label: 'Teacher', icon: 'history_edu', desc: 'Manage classes, view insights, create assignments', path: '/teacher' },
        { id: 'parent', label: 'Parent', icon: 'family_restroom', desc: "Monitor your child's learning journey", path: '/parent' },
    ];

    const handleLogin = () => {
        const selectedRole = roles.find(r => r.id === role);
        navigate(selectedRole?.path || '/');
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Animated background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(19,91,236,0.15), transparent 70%)', top: '-10%', left: '-5%', animation: 'pulse 6s ease-in-out infinite' }}></div>
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', bottom: '-10%', right: '-5%', animation: 'pulse 8s ease-in-out infinite 2s' }}></div>
            </div>

            <div style={{ width: 480, zIndex: 10 }} className="animate-in">
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <div style={{ width: 72, height: 72, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, boxShadow: 'var(--shadow-glow)', animation: 'glow 3s ease-in-out infinite' }}>
                        <span className="material-icons-round" style={{ fontSize: 36, color: 'white' }}>local_hospital</span>
                    </div>
                    <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 4, background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HELTCARE</h1>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>AI-Powered Education Platform</p>
                </div>

                {/* Card */}
                <div className="card card-glass" style={{ padding: 32 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4 }}>Welcome back!</h2>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>Choose your role and sign in to continue</p>

                    {/* Role selection */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                        {roles.map((r) => (
                            <div key={r.id} onClick={() => setRole(r.id)} style={{
                                padding: '14px 16px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                background: role === r.id ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                border: role === r.id ? '2px solid var(--accent)' : '2px solid var(--border)',
                                display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s ease',
                            }}>
                                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius)', background: role === r.id ? 'var(--accent)' : 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-icons-round" style={{ fontSize: 20, color: role === r.id ? 'white' : 'var(--text-muted)' }}>{r.icon}</span>
                                </div>
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 600 }}>{r.label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.desc}</div>
                                </div>
                                {role === r.id && <span className="material-icons-round" style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: 20 }}>check_circle</span>}
                            </div>
                        ))}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email or Student ID</label>
                        <input className="form-input" placeholder="e.g. arjun.sharma@school.edu" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input className="form-input" type="password" placeholder="Enter your password" />
                    </div>

                    <button className="btn btn-primary w-full" onClick={handleLogin} style={{ justifyContent: 'center', padding: '12px 20px', fontSize: 14, marginTop: 8 }}>
                        Sign In
                        <span className="material-icons-round" style={{ fontSize: 18 }}>arrow_forward</span>
                    </button>

                    <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}>
                        Don't have an account? <Link to="/register" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
