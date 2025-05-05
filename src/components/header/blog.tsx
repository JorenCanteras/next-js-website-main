'use client';

import { Card, Avatar } from 'antd';
import { RightOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

const blogPosts = [
  {
    title: 'How to Safeguard Your Business from Email Threats',
    description:
      'Protect your business from email threats with essential strategies like MFA and advanced filtering. Discover how to strengthen your defenses and keep your data secure.',
    author: 'Kayla Becker',
    date: '8/1/2024',
    time: '2min',
  },
  {
    title: 'Top Strategies for Protecting Your Business from Email Threats',
    description:
      'Uncover top strategies to protect your business from email threats! Learn about robust security measures, employee training, and real-time monitoring to keep your data safe.',
    author: 'Kayla Becker',
    date: '8/1/2024',
    time: '2min',
  },
  {
    title: 'Tools for Marketing Automation',
    description:
      'Exploring the Best Marketing Automation Tools and Their Applications. This article aims to explore the top marketing automation tools, their functionalities, and applications.',
    author: 'Mailsentry',
    date: '7/28/2024',
    time: '3min',
  },
  {
    title: 'The Importance of a Strong Web Analytics Plan for Your Business',
    description:
      'Unleashing the Power of Web Analytics for Business Growth. Many businesses find it difficult to effectively utilize the vast amount of data they collect.',
    author: 'Mailsentry',
    date: '7/28/2024',
    time: '3min',
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-4 bg-[#eaf4ff]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Latest on our Blog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="shadow-md rounded-lg hover:shadow-lg transition duration-200"
            bordered={false}
          >
            <Meta
              title={
                <h3 className="text-blue-700 font-semibold text-lg leading-snug">
                  {post.title}
                </h3>
              }
              description={
                <p className="text-gray-700 mt-2 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              }
            />
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Avatar size={32} icon={<img src="/avatar-placeholder.png" alt="avatar" />} />
                <span>{post.author}</span>
                <span>|</span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <ClockCircleOutlined />
                  {post.time}
                </span>
              </div>
              <button className="bg-blue-100 text-blue-600 font-medium text-sm px-4 py-1 rounded-full flex items-center gap-1 hover:bg-blue-200 transition">
                Read <RightOutlined />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
