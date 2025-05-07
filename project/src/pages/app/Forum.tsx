import React, { useState } from 'react';
import { Search, MessageSquarePlus } from 'lucide-react';
import Button from '../../components/ui/Button';
import InputField from '../../components/forms/InputField';
import CategoryCard from '../../components/forum/CategoryCard';
import { mockForumCategories } from '../../data/mockData';

const Forum: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [discussions, setDiscussions] = useState([
    {
      title: 'How to optimize irrigation for corn during dry seasons?',
      content: "I'm looking for advice on managing irrigation during particularly dry periods...",
      author: 'John Farmer',
      category: 'Crop Management',
      replies: 8,
      time: '2h ago',
    },
  ]);
  const [form, setForm] = useState({ title: '', content: '' });

  const handleAddDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    setDiscussions([
      {
        title: form.title,
        content: form.content,
        author: 'You',
        category: 'General',
        replies: 0,
        time: 'Just now',
      },
      ...discussions,
    ]);
    setForm({ title: '', content: '' });
    setShowModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Community Forum</h1>
        <p className="text-gray-500 mt-1">
          Connect with other farmers and discuss agricultural topics
        </p>
      </div>
      
      {/* Search and New Discussion */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <InputField
            label="Search"
            placeholder="Search discussions..."
            leftIcon={<Search size={18} />}
            fullWidth
          />
        </div>
        <Button
          leftIcon={<MessageSquarePlus size={18} />}
          className="whitespace-nowrap bg-black text-white hover:bg-gray-900"
          onClick={() => setShowModal(true)}
        >
          New Discussion
        </Button>
      </div>

      {/* Modal for adding discussion */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Discussion</h2>
            <form onSubmit={handleAddDiscussion} className="space-y-4">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Title"
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                required
              />
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Content"
                value={form.content}
                onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-200"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-black text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockForumCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      
      {/* Recent Discussions Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Discussions
          </h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="space-y-4">
          {discussions.map((d, i) => (
            <div 
              key={i}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-900">
                  {d.title}
                </h3>
                <span className="text-sm text-gray-500">{d.time}</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {d.content}
              </p>
              <div className="mt-2 flex items-center text-sm">
                <span className="text-gray-600">{d.author}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-primary-600">{d.category}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-500">{d.replies} replies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;