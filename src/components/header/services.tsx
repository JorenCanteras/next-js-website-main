'use client';

import { Button, Typography, Row, Col } from 'antd';
import Image from 'next/image';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Services() {
  return (
    <div className='flex justify-center bg-[#eaf4ff]'>
        <section
      style={{
        padding: '64px 24px',
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      {/* Decorative Blob */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 200,
          height: 200,
          backgroundColor: '#cce6ff',
          opacity: 0.3,
          filter: 'blur(60px)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <div style={{ textAlign: 'center' }}>
        <Title level={2} style={{ color: '#0047ab', marginBottom: 8, marginTop: 140 }}>Our Services</Title>
        <Paragraph style={{ marginBottom: 100 }}>
          Ensure Email Accuracy with Our Verification Services
        </Paragraph>
      </div>

      <Row
        justify="center"
        align="middle"
        gutter={[32, 32]}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Left: Image */}
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
        <Image
            src="https://mailsentry.io/features/email-verifier.avif"
            alt="Email Upload Feature"
            width={600}
            height={400}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 16,
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}
          />  
        </Col>

        {/* Right: Text */}
        <Col xs={24} md={12}>
          <div style={{ textAlign: 'left' }}>
            <Title level={4} style={{ color: '#003399' }}>
              Single/Multiple Uploads Made Easy
            </Title>
            <Paragraph style={{ color: '#595959' }}>
              Simplify your email verification with MailSentry’s seamless single or multiple email upload feature.
              Our platform streamlines the process, saving you time and increasing accuracy.
            </Paragraph>
            <Button type="primary" size="large" icon={<ArrowRightOutlined />} style={{ marginTop: 16 }}>
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
    </section>
    </div>
  );
}
