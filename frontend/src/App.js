import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setReply('');
    try {
      const res = await axios.post('http://localhost:8000/chat', {
        mood,
        message,
      });
      setReply(res.data.reply);
    } catch (err) {
      setReply('Sorry, something went wrong.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, borderRadius: 12, boxShadow: '0 2px 12px #eee' }}>
      <h2>Mood Lifter</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Mood: </label>
          <input
            type="text"
            value={mood}
            onChange={e => setMood(e.target.value)}
            placeholder="How are you feeling?"
            required
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Message: </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            required
            rows={4}
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ padding: '8px 24px', borderRadius: 6, background: '#6c63ff', color: '#fff', border: 'none' }}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {reply && (
        <div style={{ marginTop: 24, background: '#f9f9ff', padding: 16, borderRadius: 8 }}>
          <strong>AI Reply:</strong>
          <div style={{ marginTop: 8 }}>{reply}</div>
        </div>
      )}
    </div>
  );
}

export default App; 