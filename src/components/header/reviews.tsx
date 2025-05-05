'use client';

import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const reviews = [
  {
    text: `“As a digital marketer, I need to make sure that every campaign I run is as effective as possible. That's where MailSentry comes in. Their email verification service is top-notch, ensuring that our email lists are accurate and up-to-date. Since I started using MailSentry, our bounce rates have plummeted, and our engagement rates have soared. It's been an absolute game-changer for us.”`,
    author: 'Peyman',
    role: 'Lead Marketing @ Rewording.io',
    avatar: '/images/peyman-avatar.png', // place your PNG image in /public/images/
  },
  {
    text: `“We've been using MailSentry for months now, and it's been fantastic. The platform is easy to use, and the email verification service is second to none. With their help, we've significantly improved our email deliverability and boosted engagement. Highly recommend!”`,
    author: 'Ethan',
    role: 'Digital Marketing Director @ BrandEdge',
    avatar: '/images/ethan-avatar.png', // place your PNG image in /public/images/
  },
  {
    text: `“I can’t imagine running an email campaign without MailSentry anymore. The real-time verification process helps keep our lists clean, and the improvement in engagement speaks for itself. It’s helped us increase conversions and lower our costs in the long run.”`,
    author: 'Liam',
    role: 'Marketing Specialist @ GrowthHaven',
    avatar: '/images/liam-avatar.png', // place your PNG image in /public/images/
  },
  {
    text: `“MailSentry has really taken the stress out of managing email lists. It’s reliable and accurate. The real value comes from their attention to detail, and it’s made a significant difference in our campaign’s success. The service is a must-have for serious email marketers.”`,
    author: 'Amelia',
    role: 'Marketing Operations Manager @ ClickBoosters',
    avatar: '/images/amelia-avatar.png', // place your PNG image in /public/images/
  },
  {
    text: `“I’ve been in digital marketing for years, and MailSentry is by far the best email verification tool I’ve come across. It integrates seamlessly with our CRM, and the reduction in bounce rates has been dramatic. It's definitely a game-changer for anyone who values their email marketing results.”`,
    author: 'Lucas',
    role: 'Lead Marketing Strategist @ FusionClick',
    avatar: '/images/lucas-avatar.png', // place your PNG image in /public/images/
  },
  {
    text: `“The team at MailSentry has been excellent to work with. Their email verification tool is incredibly accurate and has really helped us optimize our outreach. The best part is that we’re now reaching more of the right people, and our conversion rates have improved.”`,
    author: 'Maya',
    role: 'Content Marketing Manager @ InnovateCo',
    avatar: '/images/maya-avatar.png', // place your PNG image in /public/images/
  }
  // Add more reviews if needed
];

const Reviews = () => {
  return (
    <div className="w-full py-16 bg-[#eaf4ff]">
      <div className="text-center mb-10">
        <div className="text-4xl text-blue-700 mb-2">❝</div>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
          People sharing love all around the world
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <Carousel autoplay dots className="rounded-2xl overflow-hidden">
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="bg-blue-100 p-6 rounded-2xl min-h-[250px] justify-between">
                <p className="italic text-base md:text-lg font-medium text-blue-900">
                  {review.text}
                </p>
                <div className="flex items-center mt-6">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3 text-sm text-gray-700">
                    <p className="font-semibold">{review.author}</p>
                    <p>{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
