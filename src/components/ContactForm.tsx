import React, { useState } from 'react';

type FormState = {
  companyWebsite: string;
  name: string;
  email: string;
};

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState<FormState>({ companyWebsite: '', name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        company_website: form.companyWebsite,
        message: '',
        notes: ''
      };
      const res = await fetch('https://dev-publisher-dashboard-backend.admandala.com/api/v1/auth/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert('Submitted successfully!');
        onSuccess && onSuccess();
      } else {
        const bodyText = await res.text().catch(() => '');
        console.error('Submission error', res.status, bodyText);
        alert(`Submission failed (${res.status})`);
      }
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="cf-row">
        <span className="cf-label">Company Website</span>
        <input
          className="cf-input"
          placeholder="https://example.com"
          value={form.companyWebsite}
          onChange={(e) => setForm({ ...form, companyWebsite: e.target.value })}
        />
      </label>

      <label className="cf-row">
        <span className="cf-label">Name</span>
        <input
          className="cf-input"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="cf-row">
        <span className="cf-label">Email Address</span>
        <input
          className="cf-input"
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <div className="cf-actions">
        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Submit'}</button>
      </div>
    </form>
  );
}
