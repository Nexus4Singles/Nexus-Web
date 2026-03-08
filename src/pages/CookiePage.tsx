import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CookiePage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      number: '1',
      title: 'WHAT ARE COOKIES?',
      content:
        'Cookies are small text files placed on your device when you visit a website or use an app. They help the service remember information about you and your preferences to improve your experience.',
    },
    {
      number: '2',
      title: 'HOW NEXUS USES COOKIES & SIMILAR TECHNOLOGIES',
      intro: 'Nexus and our third-party partners may use cookies, pixel tags, local storage, and similar technologies for the following purposes:',
      bullets: [
        'Essential / Functional: To operate the app and keep you signed in securely.',
        'Analytics: To understand how users interact with Nexus, which features are used, and how we can improve the experience. We use aggregated, anonymized data only.',
        'Security: To detect and prevent fraud, abuse, and other harmful activity.',
        'Preferences: To remember your settings and personalisation choices.',
      ],
    },
    {
      number: '3',
      title: 'THIRD-PARTY TECHNOLOGIES',
      content:
        'We may use third-party analytics and infrastructure providers (such as Firebase or similar services) that set their own cookies or use equivalent technologies. These providers are contractually required to handle data in accordance with applicable privacy laws.',
    },
    {
      number: '4',
      title: 'WE DO NOT USE ADVERTISING COOKIES',
      content:
        'Nexus does not use cookies or similar technologies for advertising, ad tracking, or selling your data to advertisers.',
    },
    {
      number: '5',
      title: 'YOUR CHOICES',
      intro: 'You have choices about how cookies are used:',
      bullets: [
        'Device settings: You can adjust cookie and tracking settings through your mobile device or browser settings.',
        'Opt-out of analytics: Where available, you may opt out of analytics tracking through the in-app settings.',
        'Note: Disabling essential cookies may affect the functionality of the app (e.g., staying logged in).',
      ],
    },
    {
      number: '6',
      title: 'CHANGES TO THIS POLICY',
      content:
        'We may update this Cookie Policy from time to time. We will update the "Last updated" date below. Continued use of Nexus after changes means you accept the updated policy.',
    },
    {
      number: '7',
      title: 'CONTACT',
      content: 'Questions about our use of cookies?\n\ncontact@nexus4christians.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-nexus transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600">Last updated: March 8, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            This Cookie Policy explains how Nexus ("we", "us", "our") uses cookies and similar technologies when you
            use the Nexus mobile application and website.
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

              {section.intro && (
                <p className="text-gray-700 font-medium mb-4">{section.intro}</p>
              )}

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
