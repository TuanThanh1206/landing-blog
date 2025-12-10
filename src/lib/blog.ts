import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
  thumbnail?: string; // Path to thumbnail image
  content: string;
  contentHtml?: string;
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.existsSync(postsDirectory) 
    ? fs.readdirSync(postsDirectory)
    : [];
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
        thumbnail: matterResult.data.thumbnail || '',
        content: matterResult.content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(matterResult.content);
    
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
      slug,
      contentHtml,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || '',
      tags: matterResult.data.tags || [],
      thumbnail: matterResult.data.thumbnail || '',
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get related posts based on tags (excluding current post)
export function getRelatedPosts(currentSlug: string, currentTags: string[] = [], limit: number = 3): BlogPost[] {
  const allPosts = getSortedPostsData();
  
  // Filter out current post
  const otherPosts = allPosts.filter(post => post.slug !== currentSlug);
  
  if (otherPosts.length === 0) return [];
  
  // Score posts based on tag matches
  const scoredPosts = otherPosts.map(post => {
    let score = 0;
    if (post.tags && currentTags.length > 0) {
      const matchingTags = post.tags.filter(tag => currentTags.includes(tag));
      score = matchingTags.length;
    }
    return { post, score };
  });
  
  // Sort by score (descending), then by date (descending)
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });
  
  // Get top posts, fallback to recent posts if no tag matches
  const related = scoredPosts
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.post);
  
  // If not enough related posts, fill with recent posts
  if (related.length < limit) {
    const recent = otherPosts
      .filter(post => !related.find(r => r.slug === post.slug))
      .slice(0, limit - related.length);
    return [...related, ...recent];
  }
  
  return related;
}

// Get recent posts (excluding current post)
export function getRecentPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const allPosts = getSortedPostsData();
  return allPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

// Calculate reading time in minutes
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

