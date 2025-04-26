import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPost } from '../utils/blogUtils';
import type { BlogPost } from '../types/blog';
import { useContext } from 'react';
import { DarkModeContext } from '../components/layout/DarkModeContext';

const BlogPostPage: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const blogPost = await getBlogPost(slug);
        setPost(blogPost);
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className={`h-8 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded w-3/4`}></div>
            <div className={`h-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded w-1/4`}></div>
            <div className="space-y-4">
              <div className={`h-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded`}></div>
              <div className={`h-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded`}></div>
              <div className={`h-4 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} rounded w-5/6`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Blog post not found</h1>
          <Link to="/blog" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-24`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              {post.title}
            </h1>
            <div className={`flex items-center gap-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                {post.author}
              </div>
            </div>
          </header>

          {post.image && (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          )}

          <div className={`prose ${darkMode ? 'prose-invert' : ''} prose-emerald max-w-none`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={`prose ${darkMode ? 'prose-invert text-white' : 'text-gray-900'}`}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;