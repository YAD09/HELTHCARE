import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        { q: 'What is 2/3 + 1/4?', options: ['3/7', '11/12', '8/12', '5/7'], correct: 1 },
        { q: 'Simplify 6/8 to its lowest terms.', options: ['2/3', '3/4', '1/2', '6/8'], correct: 1 },
        { q: 'What is 5/6 − 1/3?', options: ['4/3', '1/2', '2/6', '5/3'], correct: 1 },
        { q: 'Convert 0.75 to a fraction.', options: ['7/5', '3/4', '75/10', '7/10'], correct: 1 },
        { q: 'What is 3/5 × 2/3?', options: ['6/15', '2/5', '5/8', '1/3'], correct: 1 },
    ];

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => navigate('/lesson-summary'), 1500);
    };

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>Offline Quiz</h2>
                        <p>Fractions Practice • Auto-syncs when online</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <span className="badge badge-warning"><span className="material-icons-round" style={{ fontSize: 12 }}>cloud_off</span> Offline Mode</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/offline-manager')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>cloud_download</span>
                        Manage Offline
                    </button>
                </div>
            </div>
            <div className="page-content">
                {submitted ? (
                    <div className="card animate-in" style={{ textAlign: 'center', padding: 60 }}>
                        <span className="material-icons-round" style={{ fontSize: 64, color: 'var(--success)', display: 'block', marginBottom: 16 }}>check_circle</span>
                        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Quiz Submitted!</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Redirecting to your results...</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }}>
                        <div className="card animate-in">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <span className="badge badge-accent">Question {current + 1} of {questions.length}</span>
                                <span style={{ fontSize: 14, fontWeight: 600 }}><span className="material-icons-round" style={{ fontSize: 16, verticalAlign: 'middle', color: 'var(--warning)' }}>timer</span> 04:32</span>
                            </div>
                            <div style={{ padding: 24, background: 'var(--bg-input)', borderRadius: 'var(--radius-lg)', marginBottom: 24 }}>
                                <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.6 }}>{questions[current].q}</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {questions[current].options.map((opt, i) => (
                                    <div key={i} onClick={() => setAnswers({ ...answers, [current]: i })} style={{
                                        padding: '14px 18px', borderRadius: 'var(--radius)', cursor: 'pointer',
                                        background: answers[current] === i ? 'var(--accent-subtle)' : 'var(--bg-input)',
                                        border: answers[current] === i ? '2px solid var(--accent)' : '2px solid var(--border)',
                                        display: 'flex', alignItems: 'center', gap: 12, transition: 'all 0.2s ease',
                                    }}>
                                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: answers[current] === i ? 'var(--accent)' : 'transparent', border: answers[current] === i ? 'none' : '2px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: answers[current] === i ? 'white' : 'var(--text-muted)' }}>
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                        <span style={{ fontSize: 14, fontWeight: 500 }}>{opt}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                                <button className="btn btn-secondary" disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>
                                    <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_back</span> Previous
                                </button>
                                {current === questions.length - 1 ? (
                                    <button className="btn btn-primary" onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length}>
                                        Submit Quiz <span className="material-icons-round" style={{ fontSize: 16 }}>check</span>
                                    </button>
                                ) : (
                                    <button className="btn btn-primary" onClick={() => setCurrent(c => c + 1)}>
                                        Next <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_forward</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="card animate-in mb-20" style={{ animationDelay: '0.1s' }}>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Progress</h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {questions.map((_, i) => (
                                        <div key={i} onClick={() => setCurrent(i)} style={{
                                            width: 36, height: 36, borderRadius: 'var(--radius)', cursor: 'pointer',
                                            background: answers[i] !== undefined ? 'var(--success)' : i === current ? 'var(--accent)' : 'var(--bg-input)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: 13, fontWeight: 600, color: (answers[i] !== undefined || i === current) ? 'white' : 'var(--text-muted)',
                                        }}>{i + 1}</div>
                                    ))}
                                </div>
                                <div className="separator"></div>
                                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                                    {Object.keys(answers).length}/{questions.length} answered
                                </div>
                            </div>
                            <div className="card animate-in" style={{ animationDelay: '0.2s' }}>
                                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
                                    <span className="material-icons-round" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 6, color: 'var(--accent-light)' }}>lightbulb</span>
                                    AI Hint
                                </h4>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                    Remember: to add fractions with different denominators, first find the Least Common Multiple (LCM) of both denominators.
                                </p>
                                <button className="btn btn-ghost btn-sm" style={{ marginTop: 8 }} onClick={() => navigate('/ai-tutor')}>
                                    <span className="material-icons-round" style={{ fontSize: 14 }}>psychology</span>
                                    Ask AI Tutor
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
