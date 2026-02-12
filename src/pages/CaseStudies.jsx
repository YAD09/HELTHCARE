import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CaseStudies() {
    const navigate = useNavigate();
    const [expandedCase, setExpandedCase] = useState(0);

    const caseStudies = [
        {
            title: 'Bright Horizon Academy',
            location: 'Rural Maharashtra, India',
            image: 'school',
            students: 2400,
            improvement: 40,
            challenge: 'Students in 8 villages had no internet access. Dropout rates exceeded 35% due to lack of engaging content.',
            outcome: 'After 6 months, math scores improved by 40% via offline AI modules. Dropout rate fell to 12%.',
            metrics: [
                { label: 'Math Score Increase', value: '+40%', color: 'var(--success)' },
                { label: 'Dropout Reduction', value: '-23%', color: 'var(--accent)' },
                { label: 'Students Reached', value: '2,400', color: 'var(--purple)' },
                { label: 'Villages Connected', value: '8', color: 'var(--warning)' },
            ],
            quote: '"The AI tutor works flawlessly even with intermittent 2G speeds. Our students are finally excited about learning."',
            quotePerson: 'Priya Sharma, School Principal',
        },
        {
            title: 'Lagos Learning Hub',
            location: 'Lagos State, Nigeria',
            image: 'groups',
            students: 5200,
            improvement: 35,
            challenge: 'Overcrowded classrooms with 80+ students per teacher. Limited resources for personalized attention.',
            outcome: 'AI tutor provided personalized paths for each student. Teacher workload reduced by 60%.',
            metrics: [
                { label: 'Science Improvement', value: '+35%', color: 'var(--success)' },
                { label: 'Teacher Workload', value: '-60%', color: 'var(--accent)' },
                { label: 'Students Reached', value: '5,200', color: 'var(--purple)' },
                { label: 'Teachers Supported', value: '42', color: 'var(--warning)' },
            ],
            quote: '"Every child now has a personal tutor. The gap between privileged and underprivileged students is closing."',
            quotePerson: 'Adebayo Ogundimu, Regional Director',
        },
        {
            title: 'Mountain View Schools',
            location: 'Kathmandu Valley, Nepal',
            image: 'terrain',
            students: 1800,
            improvement: 52,
            challenge: 'Remote mountain schools with no electricity for 6+ hours daily. Students walked 2 hours to reach school.',
            outcome: 'Solar-powered tablets with offline content. Students now learn at home, attendance up 45%.',
            metrics: [
                { label: 'English Improvement', value: '+52%', color: 'var(--success)' },
                { label: 'Attendance Increase', value: '+45%', color: 'var(--accent)' },
                { label: 'Students Reached', value: '1,800', color: 'var(--purple)' },
                { label: 'Solar Tablets', value: '320', color: 'var(--warning)' },
            ],
            quote: '"My daughter now studies after sunset using the tablet. She dreams of becoming a doctor."',
            quotePerson: 'Anita Tamang, Parent',
        },
    ];

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Transforming Futures: Case Studies</h2>
                        <p>Real stories of impact from our global education initiative</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/ngo-dashboard')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>dashboard</span>
                        Dashboard
                    </button>
                </div>
            </div>

            <div className="page-content">
                {caseStudies.map((cs, i) => (
                    <div key={i} className="card animate-in mb-24" style={{ animationDelay: `${0.1 * i}s` }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                            <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: `linear-gradient(135deg, ${cs.metrics[0].color}, ${cs.metrics[1].color})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <span className="material-icons-round" style={{ fontSize: 32, color: 'white' }}>{cs.image}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{cs.title}</h3>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                    <span className="material-icons-round" style={{ fontSize: 14, verticalAlign: 'middle', marginRight: 4 }}>location_on</span>
                                    {cs.location}
                                </p>
                            </div>
                            <span className="badge badge-success">
                                <span className="material-icons-round" style={{ fontSize: 14 }}>trending_up</span>
                                +{cs.improvement}% Mastery
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 20 }}>
                            {cs.metrics.map((m, j) => (
                                <div key={j} style={{ padding: 14, background: 'var(--bg-input)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                                    <div style={{ fontSize: 22, fontWeight: 700, color: m.color }}>{m.value}</div>
                                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{m.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid-2" style={{ gap: 16, marginBottom: 20 }}>
                            <div className="info-block warning">
                                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--warning)' }}>report_problem</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>The Challenge</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cs.challenge}</div>
                                </div>
                            </div>
                            <div className="info-block success">
                                <span className="material-icons-round" style={{ fontSize: 20, color: 'var(--success)' }}>check_circle</span>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>The Outcome</div>
                                    <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cs.outcome}</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: 16, background: 'var(--accent-subtle)', borderRadius: 'var(--radius)', borderLeft: '3px solid var(--accent)' }}>
                            <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.5 }}>{cs.quote}</p>
                            <p style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>— {cs.quotePerson}</p>
                        </div>
                    </div>
                ))}

                <div className="card card-accent animate-in" style={{ textAlign: 'center', padding: 40 }}>
                    <span className="material-icons-round" style={{ fontSize: 48, color: 'var(--accent-light)', marginBottom: 16 }}>volunteer_activism</span>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Ready to Change Lives?</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 20px', lineHeight: 1.6 }}>
                        Partner with us to bring AI-powered education to underserved communities worldwide.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => navigate('/partnership')}>
                            <span className="material-icons-round" style={{ fontSize: 16 }}>handshake</span>
                            Partner With Us
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/ngo-dashboard')}>View Full Dashboard</button>
                    </div>
                </div>
            </div>
        </>
    );
}
