'use client';

import { Button } from 'antd';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  cta?: string;
}

const services: ServiceItem[] = [
  {
    title: 'See Results Instantly with MailSentry',
    description:
      'Check if email is correct instantly with MailSentry’s instant verification service, which provides yous rapid results. Our service ensures that every mail sent is effectively tracked, displaying progress and outcomes in real-time, so you can see if an email is valid as soon as you hit send.',
    imageUrl: '/images/reports.png',
    cta: 'Get Started',
  },
  {
    title: 'In-Depth Reports and Insightful Analytics',
    description:
      'Dive into detailed reports with MailSentry to verify if email is valid. Our analytical tools provide the status of each verification request, offering insights into the validation process of each email address on your list.',
    imageUrl: '/images/reports.png',
    cta: 'Get Started',
  },
  {
    title: 'API Integration Made Simple',
    description:
      'Access MailSentry’s verification services with a single API key. Our straightforward one-click API integration allows effortless use of MailSentry’s robust validation service in your own applications.',
    imageUrl: '/images/reports.png',
    cta: 'Get Started',
  },
  {
    title: 'Streamline Your Outreach with Bulk Email Verification',
    description:
      'MailSentry’s effortless service is designed for both single email checks and bulk email verification. Upload your list and our verification engine will ensure each mail is valid, enhancing the precision and reliability of your outreach.',
    imageUrl: '/images/reports.png',
    cta: 'Get Started',
  },
];

export default function MoreServices() {
  return (
    <div className="border-none">
      <div className="w-full bg-[#eaf4ff] py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 rounded-xl ${
                isEven ? 'bg-white' : 'bg-blue-200'
              }`}
            >
              {/* Image on left or right depending on index */}
              {isEven ? (
                <>
                <div className='bg-blue-50 w-full p-12 rounded-xl shadow-md'>
                  <div className="flex justify-center">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                  </div>
                </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    {service.cta && (
                      <Button type="primary" size="large">
                        {service.cta} →
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    {service.cta && (
                      <Button type="primary" size="large">
                        {service.cta} →
                      </Button>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className='bg-white w-full p-12 rounded-xl shadow-md'>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-md w-full h-auto"
                    />
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
    
  );
}
