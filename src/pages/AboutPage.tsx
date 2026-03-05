import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Users, BookOpen, Shield, Zap, Globe } from 'lucide-react';
import logoUrl from '../logo.png';

const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "Faith-Centered",
      description: "We believe Christ is the foundation of every healthy relationship and thriving family."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Together, we're stronger. Our community walks alongside you at every step of your journey."
    },
    {
      icon: BookOpen,
      title: "Knowledge-Based",
      description: "Evidence-backed wisdom from relationship experts and faith leaders guide our content."
    },
    {
      icon: Shield,
      title: "Safety-First",
      description: "Your privacy, security, and spiritual wellbeing are our highest priorities."
    },
    {
      icon: Zap,
      title: "Practical",
      description: "We don't just inspire, we equip you with tools, journeys, and resources you can use today."
    },
    {
      icon: Globe,
      title: "Inclusive",
      description: "From never married to widowed, divorced to already married, there's something for everyone."
    }
  ];

  const team = [
    {
      name: "Vision & Purpose",
      role: "Leadership Team",
      icon: "🎯",
      desc: "Dedicated to creating the most transformative relationship ecosystem for Christians."
    },
    {
      name: "Expert Advisors",
      role: "Counselors & Therapists",
      icon: "👨‍⚕️",
      desc: "Licensed professionals ensure every journey and assessment meets the highest standards."
    },
    {
      name: "Faith Community",
      role: "Church Partners",
      icon: "⛪",
      desc: "Partnering with churches and Christian organizations to serve believers worldwide."
    },
    {
      name: "Tech Innovation",
      role: "Engineering Team",
      icon: "⚙️",
      desc: "Building world-class technology that makes relationships intentional and meaningful."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-nexus/20 selection:text-nexus">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-nexus font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="Nexus Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold">Nexus</span>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pb-24 bg-gradient-to-b from-nexus/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About <span className="text-nexus">Nexus</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              We're building the world's most intentional relationship ecosystem, grounded in faith, guided by experts, and powered by community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900">
                Our <span className="text-nexus">Mission</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                At Nexus, we believe the family is the foundation of a thriving society. Strong families begin with intentional, kingdom-centered relationships, and that's exactly what we build.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're seeking a life partner, healing after loss, strengthening your marriage, or exploring what healthy relationships look like, Nexus equips you with the tools, guidance, and community you need to grow with purpose.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We combine faith-based wisdom, expert-crafted journeys, and cutting-edge technology to help you build relationships that last, and families that impact generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800" 
                alt="Happy couple" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our <span className="text-nexus">Core Values</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we build and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-nexus/10 rounded-xl flex items-center justify-center text-nexus mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Who We <span className="text-nexus">Are</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse team of leaders, experts, and believers united by one mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-nexus font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Join Thousands Building<br/><span className="text-nexus">Kingdom-Centered Relationships</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed">
              Whether you're seeking, healing, or growing, Nexus is here to guide you toward meaningful, faith-filled relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-nexus hover:bg-nexus-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-nexus/20 text-base sm:text-lg flex items-center justify-center gap-3"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Nexus for iOS
              </a>
              <a
                href="#"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg text-base sm:text-lg flex items-center justify-center gap-3"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Nexus for Android
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">© {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <p className="text-gray-500">Designed for Kingdom Impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
