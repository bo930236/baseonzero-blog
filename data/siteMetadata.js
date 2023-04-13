const siteMetadata = {
  title: 'Blog | BaseonZero',
  author: 'Bobo Tsai',
  headerTitle: 'Base on Zero',
  description: 'My personal blog where I share my thoughts.',
  snippets: 'Reuseable code snippets collected by Bobo',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://baseonzero.vercel.app/',
  siteRepo: 'https://github.com/bo930236/boz-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avator.jpeg',
  socialBanner: '/static/images/twitter1-card.png',
  email: 'bo930236@gmail.com',
  github: 'https://github.com/bo930236',
  twitter: 'https://twitter.com/BoZ_baseonzero',
  linkedin: 'https://www.linkedin.com/in/bobo-tsai-b82848171/',
  website: 'https://baseonzero.vercel.app/',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-MB6NWDGBDE', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailoctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'meaty_pirate',
  },
}

module.exports = siteMetadata
