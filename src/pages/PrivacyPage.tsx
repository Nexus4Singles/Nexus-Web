import React from 'react';
import { Navbar, Footer } from '../components/Layout';

export const PrivacyPage = () => {

  const sections = [
    {
      number: '1',
      title: 'WHAT WE COLLECT',
      subsections: [
        {
          subtitle: 'A) Information you provide',
          bullets: [
            'Account details (e.g., email, username) if you create an account',
            'Profile details you choose to share (e.g., photos, bio, preferences)',
            'Support messages, feedback, or survey responses',
            'Any content you submit (text, audio, images) where the feature exists',
          ],
        },
        {
          subtitle: 'B) Information collected automatically',
          bullets: [
            'Device and app information (device type, OS version, app version)',
            'Basic usage analytics (screens viewed, feature usage)',
            'Approximate location inferred from IP (for security/anti-abuse, not precise GPS unless you grant permission)',
          ],
        },
        {
          subtitle: 'C) Sensitive topics and personal reflections',
          bullets: [
            'Nexus may include relationship and wellbeing prompts. We treat this content as private. You control what you submit. Please avoid submitting highly sensitive personal information you are not comfortable storing.',
          ],
        },
      ],
    },
    {
      number: '2',
      title: 'HOW WE USE INFORMATION',
      intro: 'We use information to:',
      bullets: [
        'Provide and operate Nexus features (Programs, personalization, account functions)',
        'Improve and test product experience (analytics, troubleshooting)',
        'Keep the community safe (fraud prevention, abuse detection, enforcement)',
        'Communicate with you (support responses, service announcements)',
        'Process payments/subscriptions (through platform providers, where applicable)',
        'Comply with legal obligations',
      ],
    },
    {
      number: '3',
      title: 'HOW WE SHARE INFORMATION',
      intro: 'We do not sell your personal information.\n\nWe may share information:',
      bullets: [
        'With service providers who help operate Nexus (hosting, analytics, customer support), under contractual protections',
        'With payment processors/platform providers for subscription management',
        'For safety, security, and legal reasons (e.g., to respond to valid legal requests; to protect users from harm; to investigate abuse)',
        'In connection with a business transfer (e.g., merger, acquisition), where permitted by law',
      ],
    },
    {
      number: '4',
      title: 'DATA RETENTION',
      content: 'We keep information as long as needed to operate Nexus and for legitimate business purposes (e.g., security, legal compliance). If you request deletion (when supported), some data may remain in backups for a limited period, or be retained where legally required.',
    },
    {
      number: '5',
      title: 'YOUR CONTROLS AND RIGHTS',
      intro: 'Depending on your location, you may have rights to:',
      bullets: [
        'Access, correct, or delete certain information',
        'Object to or restrict processing in some cases',
        'Withdraw consent (where processing is based on consent)',
      ],
      footer: 'You can also control certain privacy options inside Nexus (where available). For requests, contact:\n\ncontact@nexus4christians.com',
    },
    {
      number: '6',
      title: 'SECURITY',
      content: 'We use reasonable safeguards to protect your information. However, no system is 100% secure. Please use a strong password and keep your device secure.',
    },
    {
      number: '7',
      title: 'CHILDREN',
      content: 'Nexus is not intended for children. Do not use Nexus if you are under the minimum age required in your country.',
    },
    {
      number: '8',
      title: 'THIRD-PARTY LINKS',
      content: 'Nexus may include links to third-party services. Their privacy practices are governed by their own policies.',
    },
    {
      number: '9',
      title: 'CHANGES TO THIS POLICY',
      content: 'We may update this Privacy Policy from time to time. We will update the "Last updated" date. Continued use after updates means you accept the updated policy.',
    },
    {
      number: '10',
      title: 'CONTACT',
      content: 'Questions or requests:\n\ncontact@nexus4christians.com',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 12, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-10">
          <p className="text-lg text-gray-600 leading-relaxed">
            This Privacy Policy explains how Nexus ("we", "us", "our") collects, uses, shares, and protects information
            when you use the Nexus mobile application ("Nexus").
          </p>

          {sections.map((section) => (
            <div key={section.number} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-baseline gap-3 leading-tight">
                <span className="text-nexus text-3xl font-serif leading-none flex-shrink-0">{section.number}.</span>
                <span className="-mt-1">{section.title}</span>
              </h2>

              {section.subsections && (
                <div className="space-y-6 mb-4">
                  {section.subsections.map((subsection, idx) => (
                    <div key={idx}>
                      <h3 className="font-semibold text-gray-900 mb-3">{subsection.subtitle}</h3>
                      <ul className="space-y-2 ml-6">
                        {subsection.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="text-gray-700 flex items-start">
                            <span className="text-nexus font-bold mr-3">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.content && <p className="text-gray-700 whitespace-pre-wrap mb-4">{section.content}</p>}

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

              {section.footer && <p className="text-gray-700 italic bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">{section.footer}</p>}
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
      <Footer />
    </div>
  );
};
