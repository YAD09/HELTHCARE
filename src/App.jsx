import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ParentPortal from './pages/ParentPortal';
import AITutor from './pages/AITutor';
import KnowledgeGap from './pages/KnowledgeGap';
import Settings from './pages/Settings';
import OfflineManager from './pages/OfflineManager';
import CoursePlayer from './pages/CoursePlayer';
import LessonSummary from './pages/LessonSummary';
import Quiz from './pages/Quiz';
import Community from './pages/Community';
import Achievements from './pages/Achievements';
import ImpactMap from './pages/ImpactMap';
import NGODashboard from './pages/NGODashboard';
import CaseStudies from './pages/CaseStudies';
import Partnership from './pages/Partnership';
import Sponsorship from './pages/Sponsorship';
import GrantReview from './pages/GrantReview';
import FamilyProfile from './pages/FamilyProfile';
import OTPVerification from './pages/OTPVerification';
import MicroPlayer from './pages/MicroPlayer';
import AIHomepage from './pages/AIHomepage';

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/parent" element={<ParentPortal />} />
        <Route path="/ai-tutor" element={<AITutor />} />
        <Route path="/knowledge-gap" element={<KnowledgeGap />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/offline-manager" element={<OfflineManager />} />
        <Route path="/course-player" element={<CoursePlayer />} />
        <Route path="/lesson-summary" element={<LessonSummary />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/community" element={<Community />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/impact-map" element={<ImpactMap />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/grant-review" element={<GrantReview />} />
        <Route path="/family-profile" element={<FamilyProfile />} />
        <Route path="/micro-player" element={<MicroPlayer />} />
        <Route path="/ai-homepage" element={<AIHomepage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
