import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
    const [role, setRole] = useState('student');
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '', email: '', password: '', confirmPassword: '',
        grade: '', subject: '', childId: ''
    });
    const navigate = useNavigate();

    const roles = [
        { id: 'student', label: 'Student', icon: 'school', desc: 'Join courses, learn with AI, and track your progress', path: '/', color: 'var(--accent)' },
        { id: 'teacher', label: 'Teacher', icon: 'history_edu', desc: 'Create assignments, manage classes, view analytics', path: '/teacher', color: 'var(--success)' },
        { id: 'parent', label: 'Parent', icon: 'family_restroom', desc: "Monitor your child's learning journey and progress", path: '/parent', color: 'var(--purple)' },
    ];

    const grades = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
    const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Computer Science', 'Hindi', 'Physics', 'Chemistry', 'Biology'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = () => {
        const selectedRole = roles.find(r => r.id === role);
        navigate(selectedRole?.path || '/');
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Animated background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(19,91,236,0.12), transparent 70%)', top: '-15%', right: '-10%', animation: 'pulse 8s ease-in-out infinite' }}></div>
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', bottom: '-10%', left: '-8%', animation: 'pulse 6s ease-in-out infinite 1s' }}></div>
                <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)', top: '40%', left: '50%', animation: 'pulse 10s ease-in-out infinite 3s' }}></div>
            </div>

            <div style={{ width: 520, zIndex: 10, padding: '40px 0' }} className="animate-in">
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: 'var(--shadow-glow)', animation: 'glow 3s ease-in-out infinite' }}>
                        <span className="material-icons-round" style={{ fontSize: 32, color: 'white' }}>local_hospital</span>
                    </div>
                    <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4, background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Create Your Account</h1>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Join HELTCARE and start your learning journey</p>
                </div>

                <div className="card card-glass" style={{ padding: 32 }}>
                    {/* Step indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 28 }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: 'var(--accent)', color: 'white',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 13, fontWeight: 700
                        }}>1</div>
                        <div style={{ width: 40, height: 2, background: step >= 2 ? 'var(--accent)' : 'var(--border)', transition: 'all 0.3s ease' }}></div>
                        <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: step >= 2 ? 'var(--accent)' : 'var(--bg-input)',
                            color: step >= 2 ? 'white' : 'var(--text-muted)',
                            border: step >= 2 ? 'none' : '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 13, fontWeight: 700, transition: 'all 0.3s ease'
                        }}>2</div>
                    </div>

                    {step === 1 && (
                        <div className="animate-fade">
                            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Choose your role</h2>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20 }}>Select how you'll use HELTCARE</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                                {roles.map((r) => (
                                    <div key={r.id} onClick={() => setRole(r.id)} style={{
                                        padding: '16px 18px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                        background: role === r.id ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                        border: role === r.id ? `2px solid ${r.color}` : '2px solid var(--border)',
                                        display: 'flex', alignItems: 'center', gap: 14, transition: 'all 0.2s ease',
                                        transform: role === r.id ? 'scale(1.01)' : 'scale(1)',
                                    }}>
                                        <div style={{
                                            width: 44, height: 44, borderRadius: 'var(--radius)',
                                            background: role === r.id ? r.color : 'var(--bg-card)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            transition: 'all 0.2s ease'
                                        }}>
                                            <span className="material-icons-round" style={{ fontSize: 22, color: role === r.id ? 'white' : 'var(--text-muted)' }}>{r.icon}</span>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: 15, fontWeight: 600 }}>{r.label}</div>
                                            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{r.desc}</div>
                                        </div>
                                        {role === r.id && <span className="material-icons-round" style={{ color: r.color, fontSize: 22 }}>check_circle</span>}
                                    </div>
                                ))}
                            </div>

                            <button className="btn btn-primary w-full" onClick={() => setStep(2)} style={{ justifyContent: 'center', padding: '12px 20px', fontSize: 14 }}>
                                Continue
                                <span className="material-icons-round" style={{ fontSize: 18 }}>arrow_forward</span>
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fade">
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                                <button className="btn-icon" onClick={() => setStep(1)} style={{ width: 32, height: 32, background: 'var(--bg-input)', border: '1px solid var(--border)' }}>
                                    <span className="material-icons-round" style={{ fontSize: 18 }}>arrow_back</span>
                                </button>
                                <div>
                                    <h2 style={{ fontSize: 18, fontWeight: 600 }}>Your Details</h2>
                                    <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Signing up as <span style={{ color: roles.find(r => r.id === role)?.color, fontWeight: 600 }}>{roles.find(r => r.id === role)?.label}</span></p>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Full Name</label>
                                <input className="form-input" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Arjun Sharma" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input className="form-input" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="e.g. arjun.sharma@school.edu" />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <input className="form-input" name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Min 8 characters" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <input className="form-input" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter password" />
                                </div>
                            </div>

                            {/* Role-specific field */}
                            {role === 'student' && (
                                <div className="form-group">
                                    <label className="form-label">Grade / Class</label>
                                    <select className="form-select" name="grade" value={formData.grade} onChange={handleChange}>
                                        <option value="">Select your grade</option>
                                        {grades.map(g => <option key={g} value={g}>{g}</option>)}
                                    </select>
                                </div>
                            )}
                            {role === 'teacher' && (
                                <div className="form-group">
                                    <label className="form-label">Primary Subject</label>
                                    <select className="form-select" name="subject" value={formData.subject} onChange={handleChange}>
                                        <option value="">Select your subject</option>
                                        {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            )}
                            {role === 'parent' && (
                                <div className="form-group">
                                    <label className="form-label">Child's Student ID</label>
                                    <input className="form-input" name="childId" value={formData.childId} onChange={handleChange} placeholder="e.g. STU-2024-0451" />
                                </div>
                            )}

                            {/* Terms */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20, padding: '12px 14px', background: 'var(--bg-input)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                                <span className="material-icons-round" style={{ fontSize: 18, color: 'var(--accent-light)', marginTop: 1 }}>info</span>
                                <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                    By creating an account, you agree to our Terms of Service and Privacy Policy. Your data is encrypted and secure.
                                </p>
                            </div>

                            <button className="btn btn-primary w-full" onClick={handleRegister} style={{ justifyContent: 'center', padding: '12px 20px', fontSize: 14 }}>
                                <span className="material-icons-round" style={{ fontSize: 18 }}>how_to_reg</span>
                                Create Account
                            </button>
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-muted)' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 500 }}>Sign in</Link>
                    </div>
                </div>

                {/* Trust badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 24 }}>
                    {[
                        { icon: 'lock', text: 'Encrypted' },
                        { icon: 'verified_user', text: 'Secure' },
                        { icon: 'support_agent', text: '24/7 Support' }
                    ].map((badge, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
                            <span className="material-icons-round" style={{ fontSize: 16, color: 'var(--accent-light)' }}>{badge.icon}</span>
                            {badge.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
