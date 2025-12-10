import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  client?: string;
  industry?: string;
  tags?: string[];
  thumbnail?: string; // Path to thumbnail image
  metrics?: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  challenge?: string;
  solution?: string;
  results?: string;
  content: string;
  contentHtml?: string;
}

export function getSortedCaseStudiesData(): CaseStudy[] {
  // Get file names under /content/case-studies
  const fileNames = fs.existsSync(caseStudiesDirectory) 
    ? fs.readdirSync(caseStudiesDirectory)
    : [];
  
  const allCaseStudiesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || 'Untitled',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        client: matterResult.data.client || '',
        industry: matterResult.data.industry || '',
        tags: matterResult.data.tags || [],
        thumbnail: matterResult.data.thumbnail || '',
        metrics: matterResult.data.metrics || [],
        challenge: matterResult.data.challenge || '',
        solution: matterResult.data.solution || '',
        results: matterResult.data.results || '',
        content: matterResult.content,
      };
    });

  // Sort case studies by date
  return allCaseStudiesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getCaseStudyData(slug: string): Promise<CaseStudy | null> {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
    
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
      client: matterResult.data.client || '',
      industry: matterResult.data.industry || '',
      tags: matterResult.data.tags || [],
      thumbnail: matterResult.data.thumbnail || '',
      metrics: matterResult.data.metrics || [],
      challenge: matterResult.data.challenge || '',
      solution: matterResult.data.solution || '',
      results: matterResult.data.results || '',
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}






