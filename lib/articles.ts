import glob from 'fast-glob'

interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // Custom order: top, bottom, and specific placements
  return articles.sort((a, z) => {
    const topOrder = [
      'CSS Grid Payment Card Readers',
      'Car Auction Platform',
      'MongoDB E-Commerce Dashboard',
    ];
    const bottomOrder = [
      'Nest Angular Cryptocurrency API',
      'Next-Cloudinary',
      'Sentiment Analysis Application',
      'SAC Cloud Agent API Utility',
    ];

    const aTop = topOrder.indexOf(a.title);
    const zTop = topOrder.indexOf(z.title);
    if (aTop !== -1 && zTop !== -1) return aTop - zTop;
    if (aTop !== -1) return -1;
    if (zTop !== -1) return 1;

    const aBottom = bottomOrder.indexOf(a.title);
    const zBottom = bottomOrder.indexOf(z.title);
    if (aBottom !== -1 && zBottom !== -1) return aBottom - zBottom;
    if (aBottom !== -1) return 1;
    if (zBottom !== -1) return -1;

    // All others by date
    return +new Date(z.date) - +new Date(a.date);
  })
}
