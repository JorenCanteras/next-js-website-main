// newsletter.tsx
"use client";

import { useState } from "react";
import { Input, Button, Checkbox, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = () => {
    if (!email || !agreed) return alert("Please enter email and agree to marketing.");
    alert(`Subscribed with ${email}`);
  };

  return (
    <div className="flex justify-center items-center p-30 bg-[#eaf4ff]">
      <Card className="rounded-2xl shadow-lg p-10 w-full max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
          Subscribe to our email verifier newsletter!
        </h2>
        <p className="text-gray-700 mb-6">
          Know more about our secure email checker, real time email validation and email verification API tips and tricks!
        </p>

        <div className="flex justify-center gap-2 mb-3">
          <Input
            size="large"
            type="email"
            placeholder="Your Email"
            prefix={<MailOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-lg"
          />
          <Button type="primary" size="large" onClick={handleSubmit}>
            Subscribe
          </Button>
        </div>

        <div className="flex justify-center">
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="text-xs text-gray-600"
          >
            I agree to receive marketing emails from MailSentry
          </Checkbox>
        </div>
      </Card>
    </div>
  );
}
