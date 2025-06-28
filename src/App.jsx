import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  FileText, 
  Trophy, 
  Video, 
  ShoppingBag, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Search, 
  Users,
  ChevronRight,
  Star,
  Activity,
  Settings,
  Share2,
  Award,
  Calendar,
  MapPin,
  Globe,
  UserPlus,
  Target,
  Smartphone,
  ChevronLeft
} from 'lucide-react';

const App = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSport, setCurrentSport] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const sports = [
    {
      name: 'Cricket',
      icon: '🏏',
      description: 'Complete cricket management with ball-by-ball scoring, player statistics, tournament brackets, and live streaming for matches from local club games to international tournaments.'
    },
    {
      name: 'Badminton',
      icon: '🏸',
      description: 'Professional badminton scoring system with point-by-point tracking, tournament management, court booking, and player performance analytics for singles and doubles matches.'
    },
    {
      name: 'Swimming',
      icon: '🏊‍♀️',
      description: 'Advanced swimming competition management with precise timing, stroke analysis, race results, pool booking, and comprehensive performance tracking for all swimming disciplines.'
    }
  ];

  const comingSoonSports = [
     {
      name: 'Football',
      icon: '⚽'
    },
    { name: 'Basketball', icon: '🏀' },
    { name: 'Tennis', icon: '🎾' },
    { name: 'Volleyball', icon: '🏐' },
    { name: 'Hockey', icon: '🏑' }
  ];

  const features = [
    {
      id: 1,
      icon: <Play className="w-8 h-8" />,
      title: "Live Scoring",
      description: "Get instant real-time updates for Cricket matches, Badminton games, Swimming competitions, and Football matches. Track every point, set, lap time, goal, and stroke with millisecond precision.",
      details: "Real-time ball-by-ball updates • Live race timing • Point-by-point tracking • Goal tracking & assists • Multi-sport compatibility • Auto-sync across devices • Instant push notifications",
      color: "from-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-emerald-900/20 to-teal-900/20",
      category: "Core Features"
    },
    {
      id: 2,
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Scorecard",
      description: "Comprehensive scorecards for all sports - from cricket innings to badminton sets, swimming race results to football match statistics. Professional-grade statistics and performance metrics.",
      details: "Detailed player statistics • Match summaries • Performance analytics • Time splits • Stroke analysis • Football heat maps • Export capabilities • PDF generation",
      color: "from-blue-500 to-cyan-600",
      bgPattern: "bg-gradient-to-br from-blue-900/20 to-cyan-900/20",
      category: "Analytics"
    },
    {
      id: 3,
      icon: <Trophy className="w-8 h-8" />,
      title: "Tournament Organization",
      description: "Seamlessly organize tournaments across Cricket, Badminton, Swimming, and Football. From local leagues to international championships with automated scheduling and bracket management.",
      details: "Tournament brackets • Multi-sport events • Team management • Automated scheduling • Bracket generation • Prize distribution • Registration management • League tables",
      color: "from-yellow-500 to-orange-600",
      bgPattern: "bg-gradient-to-br from-yellow-900/20 to-orange-900/20",
      category: "Management"
    },
    {
      id: 4,
      icon: <Video className="w-8 h-8" />,
      title: "Live Streaming",
      description: "High-definition live streaming for all sports with multi-camera support, commentary integration, and real-time viewer engagement features.",
      details: "4K HD streaming • Multi-camera angles • Live commentary • Real-time chat • Social sharing • Stream scheduling • Replay functionality",
      color: "from-purple-500 to-pink-600",
      bgPattern: "bg-gradient-to-br from-purple-900/20 to-pink-900/20",
      category: "Broadcasting"
    },
    {
      id: 5,
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Sports Equipment Store",
      description: "Complete e-commerce platform for Cricket, Badminton, Swimming, and Football equipment. From professional gear to custom team merchandise and personally branded football boots.",
      details: "Cricket equipment • Badminton rackets & shuttles • Swimming gear • Football boots & balls • Custom jerseys • Team merchandise • Bulk orders • Equipment reviews",
      color: "from-red-500 to-rose-600",
      bgPattern: "bg-gradient-to-br from-red-900/20 to-rose-900/20",
      category: "E-commerce"
    },
    {
      id: 6,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Global Leaderboards",
      description: "Track and compare performance across all sports with global rankings, regional leaderboards, and personalized achievement tracking.",
      details: "Global rankings • Regional boards • Age group categories • Skill-based matching • Achievement badges • Progress tracking • Performance trends",
      color: "from-indigo-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20",
      category: "Rankings"
    },
    {
      id: 7,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Player Analysis",
      description: "Advanced AI-powered analysis identifying best players across sports with performance predictions, weakness identification, and improvement suggestions.",
      details: "Performance analytics • Player comparisons • Weakness identification • Improvement suggestions • Talent scouting • Prediction algorithms • Coaching insights",
      color: "from-green-500 to-emerald-600",
      bgPattern: "bg-gradient-to-br from-green-900/20 to-emerald-900/20",
      category: "AI & Analytics"
    },
    {
      id: 8,
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Generated Highlights",
      description: "Revolutionary AI technology creates instant highlights for Cricket, Badminton, Swimming, and Football events. Automatically detect goals, saves, wickets, and key moments - no manual editing required!",
      details: "Automated editing • Key moment detection • Goal & save detection • Sport-specific algorithms • Instant sharing • Custom branding • Multiple formats • Social optimization",
      color: "from-cyan-500 to-blue-600",
      bgPattern: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20",
      category: "AI & Media"
    },
    {
      id: 9,
      icon: <Search className="w-8 h-8" />,
      title: "Player Discovery",
      description: "Find players, coaches, teams, and officials across all sports. Advanced matching algorithms connect you with the right people for your needs.",
      details: "Player discovery • Skill matching • Team formation • Coach finding • Official booking • Local connections • Availability tracking",
      color: "from-teal-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-teal-900/20 to-green-900/20",
      category: "Networking"
    },
    {
      id: 10,
      icon: <Users className="w-8 h-8" />,
      title: "Sports Community",
      description: "Join the ultimate multi-sport community. Connect with athletes, share experiences, and build lasting relationships across Cricket, Badminton, Swimming, and Football.",
      details: "Social networking • Discussion forums • Event sharing • Global connections • Sport-specific groups • Mentorship programs • Community challenges • Football fan clubs",
      color: "from-orange-500 to-red-600",
      bgPattern: "bg-gradient-to-br from-orange-900/20 to-red-900/20",
      category: "Social"
    },
    {
      id: 11,
      icon: <Settings className="w-8 h-8" />,
      title: "App Customization",
      description: "Personalize your experience with advancedI customization options. Tailor the interface, notifications, and features to match your sporting preferences.",
      details: "Custom themes • Personalized dashboard • Notification settings • Sport preferences • Widget customization • Layout options • Accessibility features",
      color: "from-violet-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-violet-900/20 to-purple-900/20",
      category: "Personalization"
    },
    {
      id: 12,
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Integration",
      description: "Seamlessly share achievements, highlights, and updates across all major social platforms with optimized content for maximum engagement.",
      details: "Multi-platform sharing • Auto-generated content • Achievement posts • Live updates • Story integration • Hashtag optimization • Viral content tools",
      color: "from-pink-500 to-rose-600",
      bgPattern: "bg-gradient-to-br from-pink-900/20 to-rose-900/20",
      category: "Social Media"
    },
    {
      id: 13,
      icon: <Award className="w-8 h-8" />,
      title: "Digital Awards System",
      description: "Comprehensive digital awards and recognition system for achievements across all sports with NFT certificates and blockchain verification.",
      details: "Digital certificates • NFT awards • Blockchain verification • Achievement tracking • Milestone rewards • Custom trophies • Recognition boards",
      color: "from-amber-500 to-yellow-600",
      bgPattern: "bg-gradient-to-br from-amber-900/20 to-yellow-900/20",
      category: "Recognition"
    },
    {
      id: 14,
      icon: <Target className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Individual player performance tracking with detailed analytics, progress monitoring, and personalized training recommendations for optimal improvement.",
      details: "Performance metrics • Progress tracking • Training analytics • Goal setting • Improvement plans • Comparative analysis • Personal records",
      color: "from-emerald-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-emerald-900/20 to-green-900/20",
      category: "Performance"
    },
    {
      id: 15,
      icon: <Calendar className="w-8 h-8" />,
      title: "Ground Booking",
      description: "Effortless booking system for Cricket grounds, Badminton courts, Swimming pools, and Football pitches with real-time availability and automated scheduling.",
      details: "Real-time availability • Online booking • Payment integration • Facility management • Recurring bookings • Cancellation handling • Equipment rental • Pitch conditions",
      color: "from-blue-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-blue-900/20 to-indigo-900/20",
      category: "Booking"
    },
    {
      id: 16,
      icon: <Globe className="w-8 h-8" />,
      title: "Website Integration",
      description: "Seamless website pairing and integration allowing clubs and organizations to embed our platform features directly into their existing websites.",
      details: "API integration • Widget embedding • Custom branding • White-label solutions • Data synchronization • Multi-site management • Analytics integration",
      color: "from-cyan-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-cyan-900/20 to-teal-900/20",
      category: "Integration"
    },
    {
      id: 17,
      icon: <UserPlus className="w-8 h-8" />,
      title: "Team Creation & Management",
      description: "Comprehensive team creation and management tools for all sports with role assignments, communication tools, and performance tracking.",
      details: "Team formation • Role management • Communication tools • Strategy planning • Performance tracking • Training schedules • Team analytics",
      color: "from-purple-500 to-violet-600",
      bgPattern: "bg-gradient-to-br from-purple-900/20 to-violet-900/20",
      category: "Team Management"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Auto-rotate features (only on desktop and if features exist)
    let interval;
    if (features.length > 0) {
      interval = setInterval(() => {
        if (window.innerWidth >= 1024) {
          setCurrentFeature((prev) => (prev + 1) % features.length);
        }
      }, 10000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [features.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile || features.length === 0) return;
    
    const threshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;
    
    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        // Swipe left - next feature
        setCurrentFeature((prev) => (prev + 1) % features.length);
      } else {
        // Swipe right - previous feature
        setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
      }
    }
  };

  const nextFeature = () => {
    if (features.length > 0) {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }
  };

  const prevFeature = () => {
    if (features.length > 0) {
      setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
    }
  };

  // Safeguard for rendering feature content
  const renderFeatureContent = () => {
    if (!features[currentFeature]) {
      return (
        <div className="text-gray-400 text-center">
          No feature available
        </div>
      );
    }

    return (
      <div key={features[currentFeature].id} className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-xl bg-gradient-to-r ${features[currentFeature].color} shadow-2xl`}>
            {features[currentFeature].icon}
          </div>
          <div>
            <div className="text-sm text-gray-400 font-medium">
              {String(features[currentFeature].id).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
            </div>
            <h2 className="text-4xl font-bold text-white">
              {features[currentFeature].title}
            </h2>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 leading-relaxed">
          {features[currentFeature].description}
        </p>
        
        <div className="space-y-3">
          {features[currentFeature].details.split(' • ').map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
        
        <button className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${features[currentFeature].color} rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl`}>
          Explore Feature
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Pure Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Floating Elements */}
      <a href="https://www.youtube.com/watch?v=example" target="_blank" rel="noopener noreferrer">Watch Demo</a>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/10 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className={`text-center py-16 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Company Logo Placeholder */}
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="Company Logo" width={200} height={200} />
          </div>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
            <Smartphone className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">PROJECT PROPOSAL - Multi-Sport Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            SportsPro
          </h1>
          
          <div className="text-xl text-yellow-400 font-semibold mb-6">
            CONCEPT PRESENTATION 🚀
          </div>
          
          {/* Scrollable Sports Section */}
          <div className="relative mb-8">
          
            
    
            {/* Scrollable Sports Container */}
            <div 
              id="sports-container"
              className="flex gap-6 overflow-x-auto scrollbar-hide px-16 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sports.map((sport, index) => (
                <div 
                  key={sport.name}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer transform hover:scale-105 whitespace-nowrap flex-shrink-0 ${
                    currentSport === index 
                      ? 'bg-blue-500/30 border border-blue-400 shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-800/50 hover:bg-gray-700/50 border border-transparent'
                  }`}
                  onClick={() => setCurrentSport(index)}
                >
                  <span className="text-2xl">{sport.icon}</span>
                  <span className="font-medium">{sport.name}</span>
                </div>
              ))}
            </div>
            
            {/* Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {sports.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSport(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSport 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sport Description Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">{sports[currentSport].icon}</span>
                <h3 className="text-2xl font-bold text-white">{sports[currentSport].name} Platform</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed animate-fade-in">
                {sports[currentSport].description}
              </p>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx Policy: You are about to navigate away from this site. Would you like to continue?
mx-auto leading-relaxed">
            <strong className="text-white">PROPOSED DEVELOPMENT:</strong> The ultimate platform for Cricket, Badminton, Swimming, and Football. 
            From live scoring to AI analysis, tournament management to community building - everything needed in one revolutionary application.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-gray-300">Proposed Target:</span>
            <span className="text-blue-400 font-semibold">1,000,000+ athletes worldwide</span>
          </div>
        </header>

        {/* Features Showcase */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className={`grid gap-12 items-center ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
            {/* Feature Display */}
            <div 
              className="space-y-8 relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-sm text-blue-400 font-semibold tracking-wider uppercase">
                  {features[currentFeature]?.category || 'N/A'}
                </div>
                <div className="h-px bg-gradient-to-r from-blue-400 to-transparent flex-1"></div>
              </div>
              
              {/* Mobile Navigation Arrows */}
              {isMobile && (
                <div className="flex justify-between items-center mb-4">
                  <button 
                    onClick={prevFeature}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    disabled={features.length === 0}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="text-sm text-gray-400">
                    Swipe to explore features
                  </div>
                  <button 
                    onClick={nextFeature}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    disabled={features.length === 0}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
              
              {renderFeatureContent()}

              {/* Mobile Feature Indicators */}
              {isMobile && features.length > 0 && (
                <div className="flex justify-center gap-2 mt-8">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentFeature 
                          ? 'bg-blue-400 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Feature Grid - Only on Desktop */}
            {!isMobile && (
              <div className="grid grid-cols-2 gap-4 max-h-[800px] overflow-y-auto scrollbar-hide">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer hover:scale-105 ${
                      index === currentFeature
                        ? `${feature.bgPattern} border-white/20 shadow-2xl`
                        : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} w-fit mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{feature.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="text-xs text-blue-400 font-medium">
                        {String(feature.id).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        {feature.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border-y border-white/10 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-center text-2xl font-bold text-white mb-8">PROJECTED IMPACT & TARGETS</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1M+", label: "Target Users ( Yearly )", icon: <Users className="w-8 h-8" /> },
                { number: "500K+", label: "Expected Matches/Month", icon: <Trophy className="w-8 h-8" /> },
                { number: "4", label: "Sports Covered", icon: <Activity className="w-8 h-8" /> },
                { number: "24/7", label: "Planned Support", icon: <Star className="w-8 h-8" /> }
              ].map((stat, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-center text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 px-6">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Next Steps for Development
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            This concept presentation outlines our proposed multi-sport platform. 
            Let's discuss timeline, resources, and development strategy for bringing SportsPro to life.
          </p>
        </div>

        {/* Coming Soon Sports Section */}
        <div className="bg-gradient-to-r mb-20 from-gray-900/50 to-black/50 backdrop-blur-sm border-y border-white/10 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-center text-2xl font-bold text-white mb-8">Add-ons SPORTS</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {comingSoonSports.map((sport, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <span className="text-4xl">{sport.icon}</span>
                  </div>
                  <div className="text-xl font-semibold text-white">{sport.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Custom scrollbar for sports container */
        #sports-container::-webkit-scrollbar {
          display: none;
        }
        
        #sports-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </div>
  );
};

export default App;