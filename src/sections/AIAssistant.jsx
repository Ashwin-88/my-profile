// src/App.jsx
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askResume = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await axios.post("http://127.0.0.1:5000/ask", { question });
      const data = res.data;
      const text = typeof data === "string" ? data : data.answer || JSON.stringify(data);
      setAnswer(text);
    } catch (err) {
      setAnswer("⚠️ Something went wrong. Please check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-assistant-container">
      {/* Wrapper to center all content */}
      <div className="ai-card">
    
        {/* Q&A Card */}
        <div className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/30 w-full">
          <h2 className="text-2xl font-semibold text-white mb-6">💬 Ask Me Anything</h2>

          <div className="flex gap-3">
           <textarea
            className="question-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something about Ashwin..."
            rows={4} // You can adjust the number of visible lines
            />
            </div>
            <div>
            <button
              onClick={askResume}
              disabled={loading}
              className="ai-button ai-button:hover ai-button:disabled">
              {loading ? "Thinking..." : "Ask"}
            </button>
          </div>

          {/* Answer Display */}
          {answer && (
            <div className="ai-answer">
            <div className="bg-white/90 rounded-2xl px-5 py-4 shadow-md max-w-xl text-gray-800">
              <p className="question-input block text-center font-medium text-purple-700 text-lg">
                {answer}
              </p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
