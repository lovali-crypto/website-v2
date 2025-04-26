import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

import { useContext } from 'react';
import { DarkModeContext } from '../layout/DarkModeContext';

interface BlogCardProps {
  post: BlogPost;
  darkMode: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={`${darkMode ? 'bg-gray-900/50 border-gray-800/50 hover:border-emerald-800/50 hover:shadow-emerald-900/10' : 'bg-white/90 border-gray-200/80 hover:border-emerald-500/50 hover:shadow-emerald-500/10'} backdrop-blur-sm border rounded-xl overflow-hidden transition-all hover:shadow-lg`}>
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <Link to={`/blog/${post.slug}`} className="hover:text-emerald-400 transition-colors">
            {post.title}
          </Link>
        </h3>
        <div className={`flex items-center gap-4 text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {post.author}
          </div>
        </div>
        <p className={`mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {post.description}
        </p>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium inline-flex items-center"
        >
          Read More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
