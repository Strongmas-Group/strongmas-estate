'use client';

import { useState } from 'react';
import { getGeo, isDiaspora } from '@/lib/geo';

export default function LeadModal({ onDone }: { onDone: () => void }) {
  const [email, setEmail] = useState('');

  async function submit() {
    const geo = getGeo();
    const diaspora = isDiaspora(geo?.country);

    await fetch('/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        email,
        geo,
        diaspora,
        source: 'website'
      }),
    });

    onDone();
  }

  return (
    <div className="p-5 border rounded">
      <h3 className="font-semibold">Get Property Updates</h3>

      <input
        type="email"
        required
        placeholder="Enter your email"
        className="border p-2 w-full mt-2"
        onChange={e => setEmail(e.target.value)}
      />

      <button
        onClick={submit}
        className="bg-black text-white w-full mt-3 p-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
