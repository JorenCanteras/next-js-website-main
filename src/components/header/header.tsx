'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Avatar } from 'antd';
import { UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo + Hamburger for mobile */}
        <div className="flex items-center space-x-4">
          <Avatar className="bg-blue-500 text-white" size="large">
            L
          </Avatar>
          <Link href="/" className="text-2xl font-bold text-white px-3">
            Logo Name
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseOutlined style={{ fontSize: '24px' }} />
            ) : (
              <MenuOutlined style={{ fontSize: '24px' }} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Email Verifier
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            API
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Integrations
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </nav>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-10 px-6 rounded"
          >
            Verify a List
          </Button>
          <Avatar size="large" icon={<UserOutlined />} />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/" className="block hover:text-gray-300">
                Email Verifier
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-gray-300">
                API
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-gray-300">
                Integrations
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <Button
                type="primary"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Verify a List
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
