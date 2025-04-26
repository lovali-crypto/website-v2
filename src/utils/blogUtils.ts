import matter from 'gray-matter';
import { format } from 'date-fns';
import { load } from 'js-yaml';
import type { BlogPost } from '../types/blog';

export async function getBlogPosts(): Promise<BlogPost[]> {
  
  const modules = import.meta.glob('../blog/*.md', { as: 'raw' });
  console.log(modules);
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const content = await modules[path]();
    console.log(content);
    const { data, content: markdownContent } = matter(content, {
      engines: {
        yaml: load,
      },
      language: 'yaml',
      delimiters: '---'
    });
    
    const slug = path.replace('../blog/', '').replace('.md', '');
    
    posts.push({
      slug,
      title: data.title,
      date: format(new Date(data.date), 'MMMM dd, yyyy'),
      author: data.author,
      image: data.image,
      description: data.description,
      content: markdownContent,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const modules = import.meta.glob('../blog/*.md', { as: 'raw' });
    const path = `../blog/${slug}.md`;
    
    if (!(path in modules)) {
      throw new Error(`Blog post not found: ${slug}`);
    }
    
    const content = await modules[path]();
    const { data, content: markdownContent } = matter(content, {
      engines: {
        yaml: load,
      },
      language: 'yaml',
      delimiters: '---'
    });
    
    return {
      slug,
      title: data.title,
      date: format(new Date(data.date), 'MMMM dd, yyyy'),
      author: data.author,
      image: data.image,
      description: data.description,
      content: markdownContent,
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}
