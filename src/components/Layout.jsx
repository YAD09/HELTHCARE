import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    {
        section: 'Learning', items: [
            { path: '/', icon: 'dashboard', label: 'Student Dashboard' },
            { path: '/ai-homepage', icon: 'auto_awesome', label: 'AI Learning Home' },
            { path: '/ai-tutor', icon: 'psychology', label: 'AI Tutor' },
            { path: '/course-player', icon: 'play_circle', label: 'Course Player' },
            { path: '/micro-player', icon: 'speed', label: 'Micro Player' },
            { path: '/knowledge-gap', icon: 'analytics', label: 'Knowledge Gap' },
        ]
    },
    {
        section: 'Community', items: [
            { path: '/community', icon: 'groups', label: 'Community' },
            { path: '/achievements', icon: 'emoji_events', label: 'Achievements' },
        ]
    },
    {
        section: 'Offline', items: [
            { path: '/offline-manager', icon: 'cloud_download', label: 'Offline Manager' },
            { path: '/quiz', icon: 'quiz', label: 'Quiz & Sync' },
            { path: '/lesson-summary', icon: 'summarize', label: 'Lesson Summary' },
        ]
    },
    {
        section: 'Management', items: [
            { path: '/teacher', icon: 'school', label: 'Teacher Dashboard' },
            { path: '/parent', icon: 'family_restroom', label: 'Parent Portal' },
            { path: '/family-profile', icon: 'switch_account', label: 'Family Profiles' },
            { path: '/settings', icon: 'settings', label: 'Settings' },
        ]
    },
    {
        section: 'Impact & Partners', items: [
            { path: '/impact-map', icon: 'public', label: 'Impact Map' },
            { path: '/ngo-dashboard', icon: 'volunteer_activism', label: 'NGO Dashboard' },
            { path: '/case-studies', icon: 'auto_stories', label: 'Case Studies' },
            { path: '/partnership', icon: 'handshake', label: 'Partnership' },
            { path: '/sponsorship', icon: 'card_giftcard', label: 'Sponsorship' },
            { path: '/grant-review', icon: 'description', label: 'Grant Review' },
        ]
    },
];

export default function Layout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="app-layout">
            <aside className="sidebar">
                <div className="sidebar-brand">
                    <div className="sidebar-brand-icon">
                        <span className="material-icons-round">local_hospital</span>
                    </div>
                    <div>
                        <h1>HELTCARE</h1>
                        <span>AI Learning Platform</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((section) => (
                        <div className="nav-section" key={section.section}>
                            <div className="nav-section-title">{section.section}</div>
                            {section.items.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    end={item.path === '/'}
                                >
                                    <span className="material-icons-round">{item.icon}</span>
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-user">
                        <div className="sidebar-avatar">AS</div>
                        <div className="sidebar-user-info">
                            <h4>Arjun Sharma</h4>
                            <span>Grade 10 • Student</span>
                        </div>
                    </div>
                    <button
                        className="btn btn-ghost"
                        onClick={() => navigate('/home')}
                        style={{ width: '100%', marginTop: 8, justifyContent: 'center', color: 'var(--danger)', gap: 6 }}
                    >
                        <span className="material-icons-round" style={{ fontSize: 18 }}>logout</span>
                        Log Out
                    </button>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}
