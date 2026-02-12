import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sponsorship() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        schoolName: '', district: '', state: '', country: '',
        totalStudents: '', totalTeachers: '', grades: '',
        contactName: '', contactEmail: '', contactPhone: '',
        internetAccess: '', electricityHours: '', existingDevices: '',
        goals: '', additionalInfo: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <div>
                        <h2>School Sponsorship Application</h2>
                        <p>Apply for sponsored access to HELTCARE for your institution</p>
                    </div>
                </div>
                <div className="page-header-right">
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/partnership')}>
                        <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_back</span>
                        Partnerships
                    </button>
                </div>
            </div>

            <div className="page-content">
                {/* Step indicator */}
                <div className="card animate-in mb-24" style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                        {['School Info', 'Infrastructure', 'Contact & Goals'].map((label, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%',
                                    background: step > i + 1 ? 'var(--success)' : step === i + 1 ? 'var(--accent)' : 'var(--bg-input)',
                                    color: step >= i + 1 ? 'white' : 'var(--text-muted)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 13, fontWeight: 700, transition: 'all 0.3s ease'
                                }}>
                                    {step > i + 1 ? <span className="material-icons-round" style={{ fontSize: 18 }}>check</span> : i + 1}
                                </div>
                                <span style={{ fontSize: 13, fontWeight: step === i + 1 ? 600 : 400, color: step === i + 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>{label}</span>
                                {i < 2 && <div style={{ width: 40, height: 2, background: step > i + 1 ? 'var(--success)' : 'var(--border)' }} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card animate-fade" style={{ maxWidth: 700, margin: '0 auto' }}>
                    {step === 1 && (
                        <>
                            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>School Information</h3>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>Tell us about your institution</p>
                            <div className="form-group">
                                <label className="form-label">School / Institution Name</label>
                                <input className="form-input" name="schoolName" value={formData.schoolName} onChange={handleChange} placeholder="e.g. Bright Horizon Academy" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">District</label>
                                    <input className="form-input" name="district" value={formData.district} onChange={handleChange} placeholder="e.g. Pune" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">State / Province</label>
                                    <input className="form-input" name="state" value={formData.state} onChange={handleChange} placeholder="e.g. Maharashtra" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Country</label>
                                <input className="form-input" name="country" value={formData.country} onChange={handleChange} placeholder="e.g. India" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">Total Students</label>
                                    <input className="form-input" name="totalStudents" type="number" value={formData.totalStudents} onChange={handleChange} placeholder="e.g. 500" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Total Teachers</label>
                                    <input className="form-input" name="totalTeachers" type="number" value={formData.totalTeachers} onChange={handleChange} placeholder="e.g. 20" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Grades Covered</label>
                                    <input className="form-input" name="grades" value={formData.grades} onChange={handleChange} placeholder="e.g. 6-12" />
                                </div>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Infrastructure Details</h3>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>Help us understand your technical environment</p>
                            <div className="form-group">
                                <label className="form-label">Internet Access</label>
                                <select className="form-select" name="internetAccess" value={formData.internetAccess} onChange={handleChange}>
                                    <option value="">Select connectivity level</option>
                                    <option value="none">No internet</option>
                                    <option value="2g">2G / Intermittent</option>
                                    <option value="3g">3G / Moderate</option>
                                    <option value="4g">4G / Reliable</option>
                                    <option value="broadband">Broadband / Fiber</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Daily Electricity Hours</label>
                                <select className="form-select" name="electricityHours" value={formData.electricityHours} onChange={handleChange}>
                                    <option value="">Select availability</option>
                                    <option value="0-4">0-4 hours</option>
                                    <option value="4-8">4-8 hours</option>
                                    <option value="8-16">8-16 hours</option>
                                    <option value="16+">16+ hours / Reliable</option>
                                    <option value="solar">Solar powered</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Existing Devices</label>
                                <select className="form-select" name="existingDevices" value={formData.existingDevices} onChange={handleChange}>
                                    <option value="">Select device availability</option>
                                    <option value="none">No devices available</option>
                                    <option value="few">1-10 shared devices</option>
                                    <option value="moderate">11-50 devices</option>
                                    <option value="adequate">1 per classroom</option>
                                    <option value="1to1">1:1 student devices</option>
                                </select>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Contact & Goals</h3>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>How can we reach you and what are your goals?</p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group">
                                    <label className="form-label">Contact Name</label>
                                    <input className="form-input" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Full name" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input className="form-input" name="contactPhone" value={formData.contactPhone} onChange={handleChange} placeholder="+91 9876543210" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input className="form-input" name="contactEmail" type="email" value={formData.contactEmail} onChange={handleChange} placeholder="email@school.edu" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Primary Goals</label>
                                <textarea className="form-textarea" name="goals" value={formData.goals} onChange={handleChange} placeholder="What challenges do you want HELTCARE to solve?" />
                            </div>
                        </>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                        {step > 1 ? (
                            <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_back</span> Back
                            </button>
                        ) : <div />}
                        {step < 3 ? (
                            <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
                                Continue <span className="material-icons-round" style={{ fontSize: 16 }}>arrow_forward</span>
                            </button>
                        ) : (
                            <button className="btn btn-primary" onClick={() => navigate('/grant-review')}>
                                <span className="material-icons-round" style={{ fontSize: 16 }}>send</span> Submit Application
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
