"use client";
import React, { useState } from "react";

const TIPS = [
  { id: 1, author: "Sarah M.", title: "Perfecting Hand Shapes", content: "Keep your hands relaxed but defined. Practice in front of a mirror to build muscle memory.", likes: 42 },
  { id: 2, author: "John L.", title: "Facial Expressions Matter", content: "Your face should mirror your hand movements. Don't forget about eyebrows and eye direction!", likes: 38 },
  { id: 3, author: "Emma R.", title: "Speed vs. Clarity", content: "Always prioritize clarity over speed. Your audience should understand before you worry about tempo.", likes: 55 },
];

const DISCUSSIONS = [
  { id: 1, title: "Best resources for beginners?", replies: 12, views: 234 },
  { id: 2, title: "How long to master basic alphabet?", replies: 18, views: 456 },
  { id: 3, title: "Tips for practice with friends", replies: 8, views: 145 },
];

export default function CommunityPage() {
  const [liked, setLiked] = useState<number[]>([]);
  const [newTip, setNewTip] = useState("");
  const [submittedTips, setSubmittedTips] = useState<typeof TIPS>([]);

  function toggleLike(id: number) {
    if (liked.includes(id)) {
      setLiked(liked.filter((l) => l !== id));
    } else {
      setLiked([...liked, id]);
    }
  }

  function submitTip() {
    if (newTip.trim()) {
      setSubmittedTips([
        ...submittedTips,
        {
          id: Date.now(),
          author: "You",
          title: "Community Tip",
          content: newTip,
          likes: 0,
        },
      ]);
      setNewTip("");
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white">Community Hub</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tips Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Community Tips</h2>

            {/* Submit Tip */}
            <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Share a Tip</h3>
              <textarea
                value={newTip}
                onChange={(e) => setNewTip(e.target.value)}
                placeholder="Share your gesture learning tip with the community..."
                className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white mb-3"
                rows={3}
              />
              <button
                onClick={submitTip}
                className="px-6 py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-500 transition"
              >
                Submit Tip
              </button>
            </div>

            {/* Tips List */}
            <div className="space-y-4">
              {[...TIPS, ...submittedTips].map((tip) => (
                <div key={tip.id} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tip.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">by {tip.author}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{tip.content}</p>
                  <button
                    onClick={() => toggleLike(tip.id)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      liked.includes(tip.id)
                        ? "bg-red-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                    }`}
                  >
                    ❤️ {tip.likes + (liked.includes(tip.id) ? 1 : 0)} Helpful
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discussions Sidebar */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Discussions</h2>
            <div className="space-y-3">
              {DISCUSSIONS.map((d) => (
                <div
                  key={d.id}
                  className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg cursor-pointer hover:shadow-md transition border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">{d.title}</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    <div>💬 {d.replies} replies</div>
                    <div>👁️ {d.views} views</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 p-4 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <h3 className="font-semibold mb-3 text-slate-900 dark:text-white">Community Stats</h3>
              <div className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
                <div>👥 2,450+ Members</div>
                <div>💬 5,820 Discussions</div>
                <div>⭐ 1,240+ Tips Shared</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
