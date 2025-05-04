'use client';

import { Button, Tooltip } from 'antd';
import Image from 'next/image';

export default function Landing() {
  return (
    <div className='flex justify-center bg-[#eaf4ff]'>
        <section className=" min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12">
      <div className="lg:w-1/2 max-w-xl space-y-6">
        <h1 className="text-6x1 md:text-5xl font-bold text-blue-900 leading-tight">
          Mail<span className="text-blue-700">Sentry</span>,<br />
          Instant Bulk Email Verifier
        </h1>
        <p className="text-lg text-blue-900">
          Verify Emails in Real Time: Fast, Accurate — Reduce Bounce Rates and Improve Campaign Performance
        </p>
        <p className="text-sm text-blue-700">
          Trusted by Leading Brands to Reach More People in an Effective Way!
        </p>

        <div className="flex items-center space-x-4">
          <Button type="primary" size="large" className="bg-blue-700 hover:bg-blue-800">
            Get Free Credits →
          </Button>
          <p className="text-sm text-blue-700">
          or
         </p>
          <Tooltip title="Limited features as a guest">
            <a href="#" className="text-blue-800 underline text-base font-medium">
              Continue as Guest
            </a>
          </Tooltip>
        </div>

        <div className="flex space-x-6 pt-4 text-sm text-blue-800">
          <div className="flex items-center space-x-2">
            <span>✔</span><span>Zero Fee Sign-Up</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✔</span><span>Bulk and Instant</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <Image
          src="/images/logo.png"
          alt="MailSentry Dashboard Screenshot"
          width={600}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
    </div>
    
  );
}