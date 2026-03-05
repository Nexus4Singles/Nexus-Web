import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const TermsPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      number: '1',
      title: 'WHO NEXUS IS FOR',
      content: 'Nexus is a personal and marital growth ecosystem that seeks to help single, married, divorced, or widowed christians build Kingdom marriages and families, the way God intended.',
    },
    {
      number: '2',
      title: 'ACCOUNT AND ACCESS',
      intro: 'You may use Nexus as a guest (where available) or by creating an account. You are responsible for:',
      bullets: [
        'Providing accurate information (where required)',
        'Keeping your login credentials confidential',
        'All activity under your account',
      ],
      footer: 'We may suspend or terminate access if we believe your account is being used in a way that violates these Terms or harms the community.',
    },
    {
      number: '3',
      title: 'COMMUNITY STANDARDS AND SAFETY',
      intro: 'You agree not to:',
      bullets: [
        'Harass, threaten, shame, stalk, or intimidate others',
        'Share hateful, discriminatory, sexually exploitative, or violent content',
        'Share private information (yours or others\') without consent',
        'Impersonate others or misrepresent your identity',
        'Use Nexus to solicit money, scams, or illegal activity',
      ],
      footer: 'We may remove content or restrict accounts to protect users and the community.',
    },
    {
      number: '4',
      title: 'CONTENT IS NOT PROFESSIONAL ADVICE',
      content: 'Nexus may provide educational content related to relationships, communication, marriage, faith, and emotional wellbeing. Nexus does NOT provide medical, mental health, psychiatric, legal, or financial advice. If you need professional support, please consult a qualified professional or local emergency services.',
    },
    {
      number: '5',
      title: 'ASSESSMENTS AND JOURNEYS',
      content: 'Assessment Results and Recommended Journeys are informational tools designed to help guide your experience. They may not be accurate for every person and should not be treated as definitive diagnosis, judgment, or label. You are responsible for your choices and actions.',
    },
    {
      number: '6',
      title: 'SUBSCRIPTIONS, FEES, AND PAYMENTS',
      intro: 'Some features may require payment (e.g., subscriptions or paid Programs). Pricing and features may change over time. If you purchase a subscription:',
      bullets: [
        'Payments are handled by the platform provider (e.g., Apple/Google) unless otherwise stated',
        'Subscriptions renew automatically unless canceled through your device\'s subscription settings',
        'Refunds follow the platform provider\'s refund policies, unless required by local law',
      ],
    },
    {
      number: '7',
      title: 'USER CONTENT AND LICENSE',
      content: 'If you submit content (text, images, audio, profile data, feedback) ("User Content"), you own your User Content. You grant Nexus a limited license to host, store, display, and process your User Content to operate and improve Nexus, provide features, keep the community safe, and comply with legal obligations.\n\nYou are responsible for ensuring you have rights to submit any User Content you upload.',
    },
    {
      number: '8',
      title: 'INTELLECTUAL PROPERTY',
      content: 'Nexus and our Programs, designs, graphics, branding, and original content are owned by us or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or reverse engineer Nexus except where legally permitted.',
    },
    {
      number: '9',
      title: 'PROHIBITED USES',
      intro: 'You may not:',
      bullets: [
        'Attempt to bypass security or access restricted parts of the app',
        'Scrape or harvest user data',
        'Use bots or automated tools to interact with Nexus',
        'Interfere with service availability or performance',
      ],
    },
    {
      number: '10',
      title: 'TERMINATION',
      intro: 'You may stop using Nexus at any time. We may suspend or terminate your access if:',
      bullets: [
        'You violate these Terms',
        'We must do so to comply with law',
        'Your use risks harm to Nexus or other users',
      ],
    },
    {
      number: '11',
      title: 'DISCLAIMERS',
      content: 'Nexus is provided "as is" and "as available." We do not guarantee uninterrupted service, error-free operation, or that content will meet your expectations.',
    },
    {
      number: '12',
      title: 'LIMITATION OF LIABILITY',
      content: 'To the maximum extent allowed by law, Nexus is not liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, revenue, or goodwill. Our total liability for claims related to Nexus is limited to the amount you paid to Nexus in the 12 months before the claim (or zero if you used Nexus without paying), to the extent permitted by law.',
    },
    {
      number: '13',
      title: 'CHANGES TO THESE TERMS',
      content: 'We may update these Terms occasionally. We will update the "Last updated" date. Continued use after an update means you accept the updated Terms.',
    },
    {
      number: '14',
      title: 'CONTACT',
      content: 'If you have questions about these Terms, contact us at:\n\ncontact@nexus4christians.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-nexus transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: January 12, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            These Terms of Service ("Terms") govern your use of the Nexus mobile application and related services
            (collectively, "Nexus", "we", "us", or "our"). By accessing or using Nexus, you agree to these Terms. If
            you do not agree, do not use Nexus.
          </p>

          {sections.map((section) => (
            <div key={section.number} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-baseline gap-3 leading-tight">
                <span className="text-nexus text-3xl font-serif leading-none flex-shrink-0">{section.number}.</span>
                <span className="-mt-1">{section.title}</span>
              </h2>

              {section.content && (
                <p className="text-gray-700 whitespace-pre-wrap mb-4">{section.content}</p>
              )}

              {section.intro && <p className="text-gray-700 font-medium mb-4">{section.intro}</p>}

              {section.bullets && (
                <ul className="space-y-3 mb-4 ml-6">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-nexus font-bold mr-3">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && <p className="text-gray-700 italic bg-gray-50 p-4 rounded-lg">{section.footer}</p>}
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Questions? Contact us at{' '}
            <a href="mailto:contact@nexus4christians.com" className="text-nexus font-semibold hover:underline">
              contact@nexus4christians.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
