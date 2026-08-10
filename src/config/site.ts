import type { Locale } from './i18n';

export const siteConfig = {
  name: 'Jairo Baquero',
  shortName: 'JB',
  description: 'Portafolio de Jairo Esteban Baquero, Ingeniero de Software y Desarrollador Full-Stack.',
  author: {
    name: 'Jairo Esteban Baquero',
    title: {
      en: 'Software Engineer | Full-Stack Developer',
      es: 'Ingeniero de Software | Desarrollador Full-Stack',
      'zh-cn': '软件工程师 | 全栈开发者'
    },
    description: {
      en: 'Transforming ideas into elegant code. Here you’ll find my projects, posts, and journey as a developer.',
      es: 'Transformando ideas en código elegante. Aquí encontrarás mis proyectos, publicaciones y mi camino como desarrollador.',
      'zh-cn': '将想法转化为优雅的代码。这里有我的项目、文章和开发旅程。'
    },
    avatar: '/avatar.jpeg',
    social: [
      { name: 'GitHub', url: 'https://github.com/baquerojairo', icon: 'simple-icons:github' },
      { name: 'Email', url: 'mailto:baquerojairo@gmail.com', icon: 'lucide:mail' }
    ]
  },
  contentWidth: '56rem',
  ui: {
    navbar: {
      sticky: true
    },
    dock: {
      enabled: true
    }
  },
  nav: ['posts', 'series', 'projects', 'archives'],
  footerNav: ['archives'],
  comments: {
    enabled: false,
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme'
    }
  },
  analytics: {
    enabled: false,
    provider: 'umami',
    umami: {
      src: '',
      websiteId: '',
      domains: ''
    }
  },
  gallery: {
    enabled: true,
    defaultLayout: 'justified',
    gap: 10,
    targetRowHeight: 220,
    lastRowBehavior: 'center',
    columnWidth: 220,
    columns: 'auto'
  },
  lightbox: {
    enabled: true
  },
  post: {
    relatedCount: 3,
    license: {
      enabled: true,
      name: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      description: 'This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.'
    }
  }
} satisfies {
  name: string;
  shortName: string;
  description: string;
  author: {
    name: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    avatar: string;
    social: Array<{ name: string; url: string; icon: string }>;
  };
  contentWidth: `${number}rem`;
  ui: {
    navbar: {
      sticky: boolean;
    };
    dock: {
      enabled: boolean;
    };
  };
  nav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>;
  footerNav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>;
  comments: Record<string, any>;
  analytics: Record<string, any>;
  gallery: Record<string, any>;
  lightbox: Record<string, any>;
  post: Record<string, any>;
};
