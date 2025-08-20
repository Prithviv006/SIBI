import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Dashboard.css';
// import '/src/App.css';
// import '/src/background.jsx';


const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showFullQuiz, setShowFullQuiz] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    const fetchData = async () => {
      try {
        const username = localStorage.getItem('username');
        if (!username) {
          navigate('/login');
          return;
        }

        // Simulated API calls
        const userData = {
          current_topic: "Advanced Calculus",
          study_plan: "",
        };

        const quizData = {
          quiz:  `Week 1: Differentiation
          - Basic differentiation rules
          - Chain rule practice
          - Implicit differentiation
          
          Week 2: Integration
          - Indefinite integrals
          - Definite integrals
          - Integration techniques
          
          Week 3: Series
          - Sequences and series
          - Convergence tests
          - Power series
          
          Week 4: Applications
          - Area between curves
          - Volume of revolution
          - Real-world applications`,
        };

        setUserData({
          username,
          currentTopic: userData.current_topic,
          studyPlan: userData.study_plan,
          recentQuiz: quizData.quiz
        });

      } catch (error) {
        console.error('Dashboard error:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    fetchData();
  }, [navigate]);

  // Read last quiz result from localStorage
  const lastQuizResult = JSON.parse(localStorage.getItem('lastQuizResult'));
  const recentActivities = JSON.parse(localStorage.getItem('recentActivities')) || [];

  const formatQuizContent = (content) => {
    if (!content || content === 'No recent quiz') return content;
    
    const lines = content.split('\n');
    const previewLines = lines.slice(0, 4);
    const fullLines = lines;

    return (
      <div className="quiz-content ">
        {(showFullQuiz ? fullLines : previewLines).map((line, index) => (
          <div key={index} className={`quiz-line ${line.startsWith('Q') ? 'question' : 'option'}`}>
            {line}
          </div>
        ))}
        {lines.length > 4 && (
          <button 
            className="quiz-toggle hover-scale"
            onClick={() => setShowFullQuiz(!showFullQuiz)}
          >
            {showFullQuiz ? '▲ Show Less' : '▼ Show More'}
          </button>
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      // <div className="w-3 text-orange-60">
      
<div className="  w-8 h-8  " style={{marginLeft:"34%", color:"#4f46e5",marginTop:"10%"}}>
{/* <h2 >Loading Dashboard...</h2> */}
  <svg width="400" height="400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <style>{`.spinner_SoJz{transform-origin:center;animation:spinner_YGAN 1.5s linear infinite}@keyframes spinner_YGAN{100%{transform:rotate(360deg)}}`}</style>
  <path className="spinner_SoJz" d="M20.27,4.74a4.93,4.93,0,0,1,1.52,4.61,5.32,5.32,0,0,1-4.1,4.51,5.12,5.12,0,0,1-5.2-1.5,5.53,5.53,0,0,0,6.13-1.48A5.66,5.66,0,0,0,20.27,4.74ZM12.32,11.53a5.49,5.49,0,0,0-1.47-6.2A5.57,5.57,0,0,0,4.71,3.72,5.17,5.17,0,0,1,9.53,2.2,5.52,5.52,0,0,1,13.9,6.45,5.28,5.28,0,0,1,12.32,11.53ZM19.2,20.29a4.92,4.92,0,0,1-4.72,1.49,5.32,5.32,0,0,1-4.34-4.05A5.2,5.2,0,0,1,11.6,12.5a5.6,5.6,0,0,0,1.51,6.13A5.63,5.63,0,0,0,19.2,20.29ZM3.79,19.38A5.18,5.18,0,0,1,2.32,14a5.3,5.3,0,0,1,4.59-4,5,5,0,0,1,4.58,1.61,5.55,5.55,0,0,0-6.32,1.69A5.46,5.46,0,0,0,3.79,19.38ZM12.23,12a5.11,5.11,0,0,0,3.66-5,5.75,5.75,0,0,0-3.18-6,5,5,0,0,1,4.42,2.3,5.21,5.21,0,0,1,.24,5.92A5.4,5.4,0,0,1,12.23,12ZM11.76,12a5.18,5.18,0,0,0-3.68,5.09,5.58,5.58,0,0,0,3.19,5.79c-1,.35-2.9-.46-4-1.68A5.51,5.51,0,0,1,11.76,12ZM23,12.63a5.07,5.07,0,0,1-2.35,4.52,5.23,5.23,0,0,1-5.91.2,5.24,5.24,0,0,1-2.67-4.77,5.51,5.51,0,0,0,5.45,3.33A5.52,5.52,0,0,0,23,12.63ZM1,11.23a5,5,0,0,1,2.49-4.5,5.23,5.23,0,0,1,5.81-.06,5.3,5.3,0,0,1,2.61,4.74A5.56,5.56,0,0,0,6.56,8.06,5.71,5.71,0,0,0,1,11.23Z"/></svg></div>
      // </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Animated Sidebar */}
      <div className="sidebar" data-aos="fade-right">
        <h2 className="logo-glow">SIBI</h2>
        <ul>
          <li data-aos="fade-right" data-aos-delay="150">
            <a href="/dashboard" className="active">
              <i className="fas fa-home"></i> Dashboard
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <a href="/studyplan">
              <i className="fas fa-book"></i> Study Plan
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="250">
            <a href="/AITutor">
              <i className="fas fa-robot"></i> AI Tutor
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="300">
            <a href="/AIquiz">
              <i className="fas fa-question-circle"></i> AI Quiz
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="350">
            <a href="/Answer">
              <i className="fas fa-chart-line"></i>Answer Analysis
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="350">
            <a href="/3dmodel">
              <i className="fas fa-chart-line"></i>Model Visualization
            </a>
          </li>
          <li data-aos="fade-right" data-aos-delay="400">
            <a href="/" onClick={() => localStorage.clear()}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 data-aos="fade-up" data-aos-delay="100">📊 Welcome back, {userData.username}!</h1>
        
        <div className="dashboard-grid">
          {/* Study Plan Card */}
          <div className="dashboard-card" data-aos="zoom-in" data-aos-delay="200">
            <h2>📚 Current Study Plan</h2>
            <div className="study-plan-preview">
              <h3>{userData.currentTopic}</h3>
              <pre>{userData.studyPlan?.split('\n').slice(0, 5).join('\n')}</pre>
            </div>
            <button 
              onClick={() => navigate('/studyPlan')} 
              className="dashboard-button hover-scale"
            >
              View Full Plan →
            </button>
          </div>

          {/* Quick Actions Card */}
          <div className="dashboard-card" data-aos="zoom-in" data-aos-delay="250">
            <h2>⚡ Quick Actions</h2>
            <div className="quick-actions">
              <button 
                onClick={() => navigate('/AIquiz')} 
                className="action-btn hover-scale"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="fas fa-question-circle"></i>
                Generate Quiz
              </button>
              <button 
                onClick={() => navigate('/Answer')} 
                className="action-btn hover-scale"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <i className="fas fa-file-upload"></i>
                Analyze Answers
              </button>
              <button 
                onClick={() => navigate('/chatbot')} 
                className="action-btn hover-scale"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="fas fa-comments"></i>
                Ask SIBI
              </button>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="dashboard-card" data-aos="zoom-in" data-aos-delay="300">
            <h2>📅 Recent Activity</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm whitespace-pre-wrap">
              {userData.recentQuiz}
            </pre>
            <div className="activity-item">
              <h3>Last Quiz Result</h3>
              {lastQuizResult ? (
                <div>
                  <p>Total Questions: {lastQuizResult.totalQuestions}</p>
                  <p>Correct Answers: {lastQuizResult.correctAnswers}</p>
                </div>
              ) : (
                <p>No quiz taken yet.</p>
              )}
            </div>
            <div className="activity-item">
              <h3>Recent Quiz Activities</h3>
              {recentActivities.length === 0 ? (
                <p>No recent activities.</p>
              ) : (
                <ul>
                  {recentActivities.map((activity, idx) => (
                    <li key={idx}>
                      <strong>{activity.topic}</strong> — {activity.correctAnswers}/{activity.totalQuestions} correct<br />
                      <small>{activity.date}</small>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="activity-item">
              <h3>Study Progress</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
              <span>65% Completed</span>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="dashboard-card stats-card" data-aos="zoom-in" data-aos-delay="350">
            <h2>📈 Statistics</h2>
            <div className="stats-grid">
              <div className="stat-item hover-scale">
                <i className="fas fa-book-open"></i>
                <span>5 Topics</span>
                <small>Completed</small>
              </div>
              <div className="stat-item hover-scale">
                <i className="fas fa-check-circle"></i>
                <span>23 Quizzes</span>
                <small>Attempted</small>
              </div>
              <div className="stat-item hover-scale">
                <i className="fas fa-clock"></i>
                <span>15h 30m</span>
                <small>Study Time</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;