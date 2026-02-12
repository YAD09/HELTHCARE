import { useNavigate } from 'react-router-dom';

const features = [
    { title: 'Student Dashboard', desc: 'Track your progress, streak, and subject mastery with rich analytics', icon: 'dashboard', path: '/', color: 'var(--accent)', bg: 'var(--accent-subtle)' },
    { title: 'AI Tutor', desc: 'Get instant help from an AI-powered tutor that adapts to your learning style', icon: 'psychology', path: '/ai-tutor', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { title: 'Course Player', desc: 'Watch lessons with interactive notes, bookmarks, and code playgrounds', icon: 'play_circle', path: '/course-player', color: 'var(--success)', bg: 'var(--success-bg)' },
    { title: 'Knowledge Gap', desc: 'Identify weak areas and get personalized improvement recommendations', icon: 'analytics', path: '/knowledge-gap', color: 'var(--warning)', bg: 'var(--warning-bg)' },
    { title: 'Teacher Dashboard', desc: 'Manage classes, create assignments, and track student performance', icon: 'school', path: '/teacher', color: 'var(--info)', bg: 'var(--info-bg)' },
    { title: 'Parent Portal', desc: "Monitor your child's learning journey with detailed reports and alerts", icon: 'family_restroom', path: '/parent', color: 'var(--pink)', bg: 'var(--pink-bg)' },
    { title: 'Community', desc: 'Collaborate with peers, join study groups, and participate in discussions', icon: 'groups', path: '/community', color: 'var(--accent)', bg: 'var(--accent-subtle)' },
    { title: 'Achievements', desc: 'Earn badges, climb leaderboards, and celebrate your milestones', icon: 'emoji_events', path: '/achievements', color: 'var(--warning)', bg: 'var(--warning-bg)' },
    { title: 'Quiz & Sync', desc: 'Take quizzes offline and auto-sync results when you reconnect', icon: 'quiz', path: '/quiz', color: 'var(--success)', bg: 'var(--success-bg)' },
    { title: 'Lesson Summary', desc: 'Review AI-generated summaries, key takeaways, and flashcards', icon: 'summarize', path: '/lesson-summary', color: 'var(--purple)', bg: 'var(--purple-bg)' },
    { title: 'Offline Manager', desc: 'Download courses and learn without internet — perfect for rural areas', icon: 'cloud_download', path: '/offline-manager', color: 'var(--info)', bg: 'var(--info-bg)' },
    { title: 'Settings', desc: 'Customize your profile, notifications, language, and accessibility', icon: 'settings', path: '/settings', color: 'var(--text-secondary)', bg: 'rgba(255,255,255,0.05)' },
];

const stats = [
    { value: '10K+', label: 'Active Students', icon: 'people' },
    { value: '500+', label: 'Video Lessons', icon: 'play_circle' },
    { value: '50+', label: 'AI Tutor Topics', icon: 'psychology' },
    { value: '99%', label: 'Uptime', icon: 'speed' },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', overflow: 'hidden' }}>
            {/* Hero Section */}
            <div className="home-hero">
                {/* Animated background orbs */}
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                    <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(19,91,236,0.12), transparent 70%)', top: '-20%', left: '-10%', animation: 'pulse 8s ease-in-out infinite' }} />
                    <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1), transparent 70%)', top: '10%', right: '-5%', animation: 'pulse 10s ease-in-out infinite 2s' }} />
                    <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08), transparent 70%)', bottom: '-15%', left: '30%', animation: 'pulse 6s ease-in-out infinite 4s' }} />
                </div>

                {/* Navigation bar */}
                <nav className="home-nav animate-fade">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div style={{ width: 42, height: 42, borderRadius: 'var(--radius)', background: 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-glow)' }}>
                            <span className="material-icons-round" style={{ fontSize: 22, color: 'white' }}>local_hospital</span>
                        </div>
                        <span style={{ fontSize: 20, fontWeight: 700, background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HELTCARE</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button className="btn btn-ghost" onClick={() => navigate('/login')} style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                            Sign In
                        </button>
                        <button className="btn btn-primary" onClick={() => navigate('/register')}>
                            <span className="material-icons-round" style={{ fontSize: 16 }}>person_add</span>
                            Create Account
                        </button>
                    </div>
                </nav>

                {/* Hero content */}
                <div className="home-hero-content animate-in">
                    <div className="home-hero-badge">
                        <span className="material-icons-round" style={{ fontSize: 16 }}>auto_awesome</span>
                        AI-Powered Education Platform
                    </div>
                    <h1 className="home-hero-title">
                        Learn Smarter with <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--purple))', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HELTCARE</span>
                    </h1>
                    <p className="home-hero-subtitle">
                        Personalized AI tutoring, offline learning, and smart analytics — built for every student, teacher, and parent.
                    </p>
                    <div className="home-hero-actions">
                        <button className="btn btn-primary" onClick={() => navigate('/register')} style={{ padding: '14px 28px', fontSize: 15 }}>
                            <span className="material-icons-round" style={{ fontSize: 20 }}>rocket_launch</span>
                            Get Started Free
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/login')} style={{ padding: '14px 28px', fontSize: 15 }}>
                            <span className="material-icons-round" style={{ fontSize: 20 }}>login</span>
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Stats row */}
                <div className="home-stats animate-in" style={{ animationDelay: '0.2s' }}>
                    {stats.map((s, i) => (
                        <div key={i} className="home-stat-item">
                            <span className="material-icons-round" style={{ fontSize: 22, color: 'var(--accent-light)', marginBottom: 4 }}>{s.icon}</span>
                            <div style={{ fontSize: 24, fontWeight: 700 }}>{s.value}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="home-features-section">
                <div className="home-features-header animate-in">
                    <div className="home-hero-badge" style={{ margin: '0 auto 16px' }}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>apps</span>
                        Everything You Need
                    </div>
                    <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Explore All Features</h2>
                    <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto' }}>
                        From AI-powered tutoring to offline learning, HELTCARE has everything for a complete education experience.
                    </p>
                </div>

                <div className="home-features-grid">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="home-feature-card animate-in"
                            style={{ animationDelay: `${0.05 * i}s` }}
                            onClick={() => navigate(feature.path)}
                        >
                            <div className="home-feature-icon" style={{ background: feature.bg, color: feature.color }}>
                                <span className="material-icons-round" style={{ fontSize: 24 }}>{feature.icon}</span>
                            </div>
                            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{feature.title}</h3>
                            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{feature.desc}</p>
                            <div className="home-feature-arrow">
                                <span className="material-icons-round" style={{ fontSize: 18 }}>arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="home-cta-section">
                <div className="home-cta-card animate-in">
                    <span className="material-icons-round" style={{ fontSize: 48, color: 'var(--accent-light)', marginBottom: 16 }}>school</span>
                    <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Ready to Start Learning?</h2>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.6 }}>
                        Join thousands of students already using HELTCARE to learn smarter, track their progress, and achieve their goals.
                    </p>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                        <button className="btn btn-primary" onClick={() => navigate('/register')} style={{ padding: '12px 24px', fontSize: 14 }}>
                            <span className="material-icons-round" style={{ fontSize: 18 }}>person_add</span>
                            Create Free Account
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/login')} style={{ padding: '12px 24px', fontSize: 14 }}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="home-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, var(--accent), var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-icons-round" style={{ fontSize: 18, color: 'white' }}>local_hospital</span>
                    </div>
                    <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-secondary)' }}>HELTCARE</span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>© 2026 HELTCARE Education Platform. Making education accessible for everyone.</p>
            </footer>
        </div>
    );
}
