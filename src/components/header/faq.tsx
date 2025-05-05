'use client';

import React, { useState } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const faqData = [
  {
    question: 'What is MailSentry.io?',
    answer:
      'MailSentry.io is a bulk and instant email verifier checker. It ensures the authentication of email addresses, including popular ones like hotmail.com and yahoo.com.',
  },
  {
    question: 'How does MailSentry.io verify email addresses?',
    answer:
      'MailSentry.io uses multiple verification layers, including syntax checks, domain/MX record validation, SMTP checks, and more to ensure high accuracy.',
  },
  {
    question: 'Can I check the validity of an email domain using MailSentry.io?',
    answer:
      'Yes, MailSentry.io allows you to verify the validity of email domains by checking DNS records, mail server responsiveness, and domain status.',
  },
  // Add more FAQs here...
  {
    question: 'How often should I verify my email list?',
    answer:
      'It’s recommended to verify your email list at least once a month, especially if you collect new addresses regularly.',
  },
  {
    question: 'Does MailSentry.io support bulk upload?',
    answer:
      'Yes, you can upload a CSV file with multiple email addresses for bulk verification.',
  },
  {
    question: 'Is my data secure with MailSentry.io?',
    answer:
      'Absolutely. We use industry-standard encryption and do not store your verified emails beyond the session.',
  },
];

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 3 if not expanded, otherwise show all
  const displayedFaqs = showAll ? faqData : faqData.slice(0, 3);

  return (
    <section className="bg-[#eaf4ff]">
      {/* Top CTA Section */}
      <div className="pt-20 px-4 text-center relative overflow-hidden">
        <div className="bg-blue-100 md:p-10 rounded-lg min-h-[200px] max-w-5xl mx-auto flex flex-col justify-between shadow-sm border border-blue-200">
          <section className="relative flex w-full flex-col items-center justify-center">
            <h2 className="text-xl text-blue-700 md:text-2xl font-semibold mb-10 text-center">
              Kick start Your Email Validation Process Today
            </h2>
            <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-blue-50 transition ease-in-out duration-200">
              Get started →
            </button>
          </section>
        </div>

        <div className="absolute top-0 left-0 w-12 h-12 bg-white rounded-full opacity-30 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Collapse accordion expandIconPosition="end" className="bg-white shadow-sm">
            {displayedFaqs.map((faq, index) => (
              <Panel
                header={
                  <span className="font-semibold text-blue-800">{faq.question}</span>
                }
                key={index}
                className="text-gray-800 text-base leading-relaxed"
              >
                <p>{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>

          {/* Read More / Read Less Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-4 px-5 py-2 bg-white text-blue-600 font-medium border border-blue-600 rounded-full shadow-md hover:bg-blue-50 transition"
            >
              {showAll ? 'Show Less FAQs' : 'Read More FAQs'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
