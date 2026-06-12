import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, BookOpen, ClipboardList, Smartphone, Star, Shield, ArrowRight, CheckCircle2, Quote, ChevronDown, Compass, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../logo.png';
import { Navbar, Footer } from '../components/Layout';
import mockupUrl from '../mockup.jpg';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-nexus/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-nexus/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexus/10 text-nexus font-medium text-sm mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Introducing Nexus</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6">
              A Digital Playbook for building healthy<span className="text-nexus italic">relationships</span> & <span className="text-nexus italic">marriages</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              A faith-driven relationship and marriage ecosystem committed to raising Godly families for Christ. Whether you are seeking the right partner, rebuilding, or strengthening your marriage, we guide you to grow with intention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#download" className="bg-nexus hover:bg-nexus-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all shadow-xl shadow-nexus/20 flex items-center justify-center gap-2 text-base sm:text-lg">
                Download the App
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#about" className="bg-white border-2 border-gray-200 hover:border-nexus hover:text-nexus text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 text-base sm:text-lg">
                Learn More
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Join thousands building<br/>kingdom-centered homes.</p>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto lg:mr-0"
          >
            {/* Floating Feature Badges */}
            {/* Left side */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute left-2 -translate-x-full top-12 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Dating</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute left-2 -translate-x-full top-1/2 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <ClipboardList className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Assessments</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-2 -translate-x-full bottom-24 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Guided Journeys</p>
            </motion.div>

            {/* Right side */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute right-2 translate-x-full top-20 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Weekly Stories</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute right-2 translate-x-full bottom-28 bg-white p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 hidden sm:flex"
            >
              <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">Counselling</p>
            </motion.div>

            {/* Phone Frame */}
            <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[650px] w-[320px] shadow-2xl z-10">
              <div className="w-[120px] h-[24px] bg-gray-900 top-0 rounded-b-[1.2rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
              <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-white relative">
                <img 
                  src={mockupUrl} 
                  className="w-full h-full object-cover object-top" 
                  alt="Happy Christian Couple" 
                  referrerPolicy="no-referrer"
                />
                
                {/* App UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <img src={logoUrl} alt="Nexus Logo" className="w-10 h-10 drop-shadow-lg rounded-lg" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-white font-serif text-3xl font-bold mb-1">David & Sarah</h3>
                    <p className="text-white/80 text-sm mb-6 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> Kingdom-centered match
                    </p>
                    
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-4">
                      <p className="text-white text-sm font-medium mb-2">Current Journey</p>
                      <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                        <div className="bg-nexus h-2 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-white/70 text-xs">Foundation of Marriage • Week 3</p>
                    </div>

                    <button className="w-full bg-nexus text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg">
                      <Heart className="w-5 h-5" /> Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-nexus/20 mx-auto mb-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
          Family is the foundation of society, and strong families begin with healthy, <span className="text-nexus italic">kingdom-centered marriages.</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Nexus is more than a dating app. It is an ecosystem designed to help single, divorced, widowed or married individuals nurture their relationship with God and others, in a bid to build a lifelong, fulfilling marriage & family.
        </p>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Dating",
      description: "Connect with intentional, faith-aligned individuals seeking Kingdom-centered marriage.",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Personalized Assessments",
      description: "Discover your strengths and growth areas through personalized assessments that help singles evaluate their readiness for marriage, support divorced or widowed individuals considering remarriage, and help couples assess the health of their marriage.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      ),
      title: "Guided Journeys",
      description: "Faith-based journeys crafted by experts to equip you with practical knowledge and insights on how to navigate dating, marriage, divorce or widowhood.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M4 4h16v16H4z" strokeLinecap="round"/>
          <path d="M8 8h8M8 12h8M8 16h4" strokeLinecap="round"/>
        </svg>
      ),
      title: "Weekly Stories",
      description: "Relationship and Marriage nuggets delivered weekly through beautiful and insightful stories.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h8M8 14h5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Counselling",
      description: "Get expert guidance from professional Marriage Counsellors and Family Therapists.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-nexus tracking-widest uppercase mb-3">The Nexus Ecosystem</h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Everything you need to build a lasting relationship and marriage</h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-nexus/5 transition-all border border-transparent hover:border-gray-100 group col-span-2 ${
                index === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center ${feature.iconColor} shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  const audiences = [
    { emoji: "💫", title: "Never Married", desc: "Start your journey with intention and find a partner aligned with your values." },
    { emoji: "🌅", title: "Divorced", desc: "Find healing, rebuild trust, and prepare your heart for a new chapter." },
    { emoji: "🕊️", title: "Widowed", desc: "Navigate the complex journey of grief while remaining open to God's future plans." },
    { emoji: "💍", title: "Married", desc: "Strengthen your bond, deepen your intimacy, and leave a legacy for your children." }
  ];

  return (
    <section className="py-24 bg-nexus text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              We have something for <span className="italic">everyone.</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl mb-10 max-w-lg">
              No matter what season of life you are in, Nexus provides the tools, community, and guidance you need.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-full bg-nexus-dark/50 absolute -inset-8 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
              alt="Diverse couples" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael",
      role: "Married through Nexus",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=100&q=80",
      text: "Nexus helped me rebuild my relationship with my wife after years of struggles. The guided journeys are transformative.",
      rating: 5,
    },
    {
      name: "James O.",
      role: "User since 2.0 launch",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Finally a dating app that values faith. The assessments really helped me understand what I need.",
      rating: 5,
    },
    {
      name: "Rebecca M.",
      role: "Currently on a journey",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The kingdom-centered approach sets Nexus apart. This is exactly what we were looking for.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-nexus tracking-widest uppercase mb-3">Real Stories</h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900">Loved by thousands worldwide</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-nexus text-nexus" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with Nexus?",
      answer: "Download the app from the App Store or Google Play, create an account with your email, then you can take the assessment, explore journeys, or find a life partner based on faith and compatibility."
    },
    {
      question: "Is Nexus really focused on faith-based relationships?",
      answer: "Absolutely. Nexus is built specifically for Christians seeking meaningful, kingdom-centered relationships. All content is guided by biblical principles."
    },
    {
      question: "Can I use Nexus if I'm divorced or widowed?",
      answer: "Yes! Nexus welcomes people in all life seasons. We have specialized journeys and resources for divorced and widowed individuals."
    },
    {
      question: "What's included in a paid subscription?",
      answer: "Premium dating features include access to unlimited messaging, and unlimited profiles, compatibility data, and contact information."
    },
    {
      question: "How does Nexus protect my privacy?",
      answer: "We take privacy seriously. All your data is encrypted, and we use industry-standard security measures. See our Privacy Policy for complete details."
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-4">Everything you need to know about Nexus</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-nexus flex-shrink-0 transition-transform ${
                    expandedIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 px-6 py-4 border-t border-gray-200"
                  >
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinOurTeam = () => {
  return (
    <section id="counselling" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nexus/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-nexus/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-nexus/10 to-nexus/5 border-2 border-nexus/30 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexus/10 text-nexus font-medium text-sm mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>For Counselors</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Join Our <span className="text-nexus italic">Counselling</span> Team
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                We're seeking experienced marriage counselors and relationship coaches to help couples and families build stronger, faith-centered relationships through the Nexus platform. Join a community of professionals dedicated to transforming lives through Christian values.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-nexus text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Set Your Own Rates</h4>
                    <p className="text-gray-600 text-sm">Choose your hourly rate ($20-$100+) and control your availability</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-nexus text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reach Qualified Clients</h4>
                    <p className="text-gray-600 text-sm">Connect with individuals and couples genuinely seeking professional help</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-nexus text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Faith-Aligned Platform</h4>
                    <p className="text-gray-600 text-sm">Work in an environment dedicated to Christian values and godly relationships</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-nexus/10 to-nexus/5 border-2 border-nexus/30 rounded-2xl p-6 sm:p-8">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  If you're a qualified and licensed relationship, marriage or family therapist, send an email to <a href="mailto:contact@nexus4christians.com" className="text-nexus font-bold hover:underline cursor-pointer">contact@nexus4christians.com</a> to join our counselling team.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-nexus/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="inline-block w-12 h-12 bg-nexus/10 rounded-full flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-nexus" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Make a Real Impact</h4>
                    <p className="text-gray-600 text-sm">Help couples strengthen their marriages and build lasting foundations</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="inline-block w-12 h-12 bg-nexus/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-nexus" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verified & Secure</h4>
                    <p className="text-gray-600 text-sm">All coaches undergo verification to ensure quality and trust</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="inline-block w-12 h-12 bg-nexus/10 rounded-full flex items-center justify-center mb-4">
                      <Star className="w-6 h-6 text-nexus" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Grow Your Practice</h4>
                    <p className="text-gray-600 text-sm">Expand your reach and build a sustainable counseling business</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Download = () => {
  return (
    <section id="download" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-nexus/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-nexus/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexus/20 text-nexus-light font-medium text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Available Now</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Download Nexus Today
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your journey toward a kingdom-centered marriage. Available on iOS and Android 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/nexus-2-0/id6587567583"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-500 leading-none mb-0.5">Download on the</p>
                <p className="text-base font-bold leading-none">App Store</p>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.nexusapptest.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-500 leading-none mb-0.5">Get it on</p>
                <p className="text-base font-bold leading-none">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-nexus/20 selection:text-nexus">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Audience />
        <Testimonials />
        <FAQ />
        <JoinOurTeam />
        <Download />
      </main>
      <Footer />
    </div>
  );
};
