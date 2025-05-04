'use client'; // Required for client-side interactivity

import React from 'react';
import { Button, Input, Card } from 'antd';
import { CheckCircleTwoTone, CopyOutlined, LinkOutlined } from '@ant-design/icons';

const OutreachPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf4ff] px-4">
      {/* Container Grid: Two columns - text on left, image simulation on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        
        {/* Left Column - Text and CTA */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-3">
            Email Finder for Accurate Outreach
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Locate and verify email addresses with ease using MailSentry Email Finder.
            Enter a full name, and let our advanced algorithms provide you with accurate,
            ready-to-use contact information.
          </p>

          {/* Coming Soon Button */}
          <Button
            type="primary"
            className="bg-green-500 hover:bg-green-600 border-none w-40 text-white font-medium py-2 rounded-full"
          >
            Coming Soon
          </Button>
        </div>

        {/* Right Column - Simulated Email UI Card */}
        <div className="flex justify-center items-center">
          <Card className="w-full shadow-lg rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <Input placeholder="First Name" defaultValue="MailSentry" className="w-1/3" />
              <span className="text-xl">@</span>
              <Input placeholder="Domain" defaultValue="MailSentry.io" className="w-1/3" />
              <Button type="primary" className="bg-blue-600 border-none">Find</Button>
            </div>

            <Card
              className="border border-blue-300 bg-blue-50"
              bodyStyle={{ padding: '12px' }}
            >
              <div className="flex items-center justify-between">
                {/* Avatar Circle */}
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-800">
                  SS
                </div>

                {/* Email Display */}
                <div className="flex-1 ml-4">
                  <p className="text-blue-700 font-semibold">MailSentry@gmail.com</p>
                  <p className="text-xs text-gray-500">This email address is safe.</p>
                </div>

                {/* Badge + Icons */}
                <div className="flex items-center gap-2">
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  <span className="text-green-700 text-sm font-medium">99%</span>
                  <CopyOutlined className="text-blue-500 cursor-pointer" />
                  <LinkOutlined className="text-blue-500 cursor-pointer" />
                </div>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OutreachPage;
