import { useNavigate } from 'react-router-dom';

export default function Partnership() {
    const navigate = useNavigate();

    const pillars = [
        { title: 'Infrastructure-Ready', icon: 'dns', desc: 'Works offline with automatic sync. Solar-compatible. Designed for 2G to 5G networks.', metrics: ['< 100KB per lesson', 'Offline-first', 'Solar compatible'] },
        { title: 'Proven Impact', icon: 'analytics', desc: 'Measurable improvements across 842 schools in 7 regions with transparent impact reporting.', metrics: ['34.2% mastery gain', '428K+ students', 'Real-time dashboards'] },
        { title: 'Localized Content', icon: 'translate', desc: 'AI-powered content adaptation for local languages, curricula, and cultural context.', metrics: ['12 languages', 'Custom curricula', 'Cultural adaptation'] },
    ];

    const tiers = [
        { name: 'Pilot Program', icon: 'rocket_launch', desc: '3-month trial for up to 5 schools', features: ['Up to 500 students', 'Basic analytics', 'Email support', 'Offline content pack'], color: 'var(--accent)', recommended: false },
        { name: 'Regional Scale', icon: 'hub', desc: 'Full deployment for districts or regions', features: ['Unlimited students', 'Advanced analytics', 'Dedicated manager', 'Custom content', 'Impact reporting'], color: 'var(--success)', recommended: true },
        { name: 'National Initiative', icon: 'public', desc: 'Country-wide implementation', features: ['Government integration', 'Custom branding', 'API access', 'Research partnerships', 'Annual summit access'], color: 'var(--purple)', recommended: false },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Institutional Partnership</h2>
                        <p>Transforming Education Through Scalable AI Partnerships</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/case-studies')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>auto_stories</span>
                        Case Studies
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Hero */}
                <div className="card card-accent animate-in" style={{ textAlign: 'center', padding: '48px 32px', marginBottom: 24 }}>
                    <span className="material-icons-round" style={{ fontSize: 56, color: 'var(--accent-light)', marginBottom: 16, display: 'block' }}>handshake</span>
                    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Transforming Education Through Scalable AI Partnerships</h2>
                    <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
                        Bring world-class AI-powered education to your region. Our platform is built for scale, designed for low-resource environments, and proven across 7 countries.
                    </p>
                </div>

                {/* Pillars */}
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Core Implementation Pillars</h3>
                <div className="grid-3 mb-24">
                    {pillars.map((p, i) => (
                        <div key={i} className="card animate-in" style={{ animationDelay: `${0.1 * i}s` }}>
                            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: 'var(--accent-subtle)', color: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                                <span className="material-icons-round" style={{ fontSize: 24 }}>{p.icon}</span>
                            </div>
                            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>{p.title}</h4>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.5 }}>{p.desc}</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {p.metrics.map((m, j) => (
                                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-secondary)' }}>
                                        <span className="material-icons-round" style={{ fontSize: 14, color: 'var(--success)' }}>check_circle</span>
                                        {m}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tiers */}
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Structured for Institutional Success</h3>
                <div className="grid-3 mb-24">
                    {tiers.map((t, i) => (
                        <div key={i} className="card animate-in" style={{
                            animationDelay: `${0.15 * i}s`,
                            border: t.recommended ? `2px solid ${t.color}` : undefined,
                            position: 'relative'
                        }}>
                            {t.recommended && (
                                <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: t.color, color: 'white', padding: '2px 14px', borderRadius: '0 0 8px 8px', fontSize: 11, fontWeight: 600 }}>Recommended</div>
                            )}
                            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius)', background: `${t.color}20`, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, marginTop: t.recommended ? 8 : 0 }}>
                                <span className="material-icons-round" style={{ fontSize: 24 }}>{t.icon}</span>
                            </div>
                            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{t.name}</h4>
                            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>{t.desc}</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {t.features.map((f, j) => (
                                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-secondary)' }}>
                                        <span className="material-icons-round" style={{ fontSize: 14, color: t.color }}>check</span>
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <button className={`btn ${t.recommended ? 'btn-primary' : 'btn-secondary'} btn-sm w-full`} style={{ justifyContent: 'center', marginTop: 20 }}>
                                Contact Sales
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="card card-accent animate-in" style={{ textAlign: 'center', padding: 40 }}>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Begin Your Institutional Partnership</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 20px' }}>Schedule a demo with our partnerships team to learn how HELTCARE can transform education in your region.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/sponsorship')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>calendar_today</span>
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </>
    );
}
