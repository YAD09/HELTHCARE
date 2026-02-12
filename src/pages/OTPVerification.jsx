import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTPVerification() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [method, setMethod] = useState('sms');
    const [verified, setVerified] = useState(false);

    const handleOtpChange = (index, value) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
            const next = document.getElementById(`otp-${index + 1}`);
            if (next) next.focus();
        }
    };

    const handleVerify = () => {
        setVerified(true);
        setTimeout(() => navigate('/'), 2000);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Animated background */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(19,91,236,0.12), transparent 70%)', top: '-10%', right: '-5%', animation: 'pulse 8s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)', bottom: '-10%', left: '-5%', animation: 'pulse 6s ease-in-out infinite 2s' }} />
            </div>

            <div style={{ width: 440, zIndex: 10 }} className="animate-in">
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: verified ? 'var(--success)' : 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: 'var(--shadow-glow)', transition: 'all 0.5s ease' }}>
                        <span className="material-icons-round" style={{ fontSize: 32, color: 'white' }}>{verified ? 'verified' : 'security'}</span>
                    </div>
                    <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{verified ? 'Verified!' : 'Identity Verification'}</h1>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                        {verified ? 'Your identity has been confirmed. Redirecting...' : 'Verify your identity with a one-time password'}
                    </p>
                </div>

                {!verified ? (
                    <div className="card card-glass" style={{ padding: 32 }}>
                        {/* Method selection */}
                        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                            {[
                                { id: 'sms', label: 'SMS', icon: 'sms' },
                                { id: 'email', label: 'Email', icon: 'email' },
                                { id: 'whatsapp', label: 'WhatsApp', icon: 'chat' },
                            ].map(m => (
                                <button key={m.id} onClick={() => setMethod(m.id)} style={{
                                    flex: 1, padding: '10px 8px', borderRadius: 'var(--radius)',
                                    background: method === m.id ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                    border: method === m.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                                    color: method === m.id ? 'var(--accent-light)' : 'var(--text-secondary)',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                                    fontSize: 12, fontWeight: 500, fontFamily: 'Lexend, sans-serif', transition: 'all 0.2s ease'
                                }}>
                                    <span className="material-icons-round" style={{ fontSize: 16 }}>{m.icon}</span>
                                    {m.label}
                                </button>
                            ))}
                        </div>

                        <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
                            Enter the 6-digit code sent to {method === 'sms' ? '+91 ••••••7890' : method === 'email' ? 'a•••n@school.edu' : '+91 ••••••7890'}
                        </p>

                        {/* OTP Input */}
                        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    id={`otp-${i}`}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(i, e.target.value)}
                                    maxLength={1}
                                    style={{
                                        width: 48, height: 56, textAlign: 'center', fontSize: 22, fontWeight: 700,
                                        background: 'var(--bg-input)', border: `2px solid ${digit ? 'var(--accent)' : 'var(--border)'}`,
                                        borderRadius: 'var(--radius)', color: 'var(--text-primary)',
                                        fontFamily: 'Lexend, sans-serif', outline: 'none', transition: 'border-color 0.2s ease'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                    onBlur={(e) => e.target.style.borderColor = digit ? 'var(--accent)' : 'var(--border)'}
                                />
                            ))}
                        </div>

                        <button className="btn btn-primary w-full" onClick={handleVerify} style={{ justifyContent: 'center', padding: '12px 20px', fontSize: 14 }}>
                            <span className="material-icons-round" style={{ fontSize: 18 }}>verified_user</span>
                            Verify Identity
                        </button>

                        <div style={{ textAlign: 'center', marginTop: 16 }}>
                            <button style={{ background: 'none', border: 'none', color: 'var(--accent-light)', cursor: 'pointer', fontSize: 13, fontFamily: 'Lexend, sans-serif' }}>
                                Didn't receive code? Resend
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="card card-glass animate-fade" style={{ padding: 32, textAlign: 'center' }}>
                        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--success-bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                            <span className="material-icons-round" style={{ fontSize: 36, color: 'var(--success)' }}>check_circle</span>
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Identity Confirmed</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Redirecting to your dashboard...</p>
                        <div className="progress-bar" style={{ maxWidth: 200, margin: '16px auto 0' }}>
                            <div className="progress-fill success" style={{ width: '100%', animation: 'shimmer 1.5s infinite' }} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
