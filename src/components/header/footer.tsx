"use client";

import {
  TwitterOutlined,
  FacebookOutlined,
  YoutubeFilled,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";

export default function Footer() {
  return (
    <footer className="bg-[#eaf4ff] text-blue-900">
      {/* Simulated Divider on top */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[3px] bg-[#d0e6f9]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm font-medium">
          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Developer API</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
              <li><a href="#" className="hover:underline">Email Verification</a></li>
              <li className="flex items-center space-x-1 text-red-600">
                <YoutubeFilled className="text-lg" />
                <a href="#" className="hover:underline">What is MailSentry?</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Rapid Email Checker</a></li>
              <li><a href="#" className="hover:underline">Real-Time Email Validation</a></li>
              <li><a href="#" className="hover:underline">Email Verification API</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <img src="/icons/messenger.svg" alt="Messenger" className="w-4 h-4" />
                <span>Messenger</span>
              </li>
              <li className="flex items-center space-x-2">
                <InstagramOutlined className="text-base" />
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailOutlined className="text-base" />
                <span>Email</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Social Media</h4>
            <div className="flex space-x-4 text-xl text-blue-700">
              <TwitterOutlined />
              <FacebookOutlined />
              <YoutubeFilled />
              <InstagramOutlined />
            </div>
          </div>
        </div>

        {/* Divider (bottom line) */}
        <Divider className="my-8 border-blue-100" />

        <div className="text-center text-xs text-gray-500 font-medium">
          © 2025 MailSentry.io
        </div>
      </div>
    </footer>
  );
}
