import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Runs in Node.js – no browser APIs here

const config: Config = {
  //doesnt matter i am using tranlated custom text not this
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A comprehensive textbook on embodied intelligence, control, and humanoid systems',
  //doesnt matter i am using tranlated custom text not this

  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://physical-ai-textbook.example.com',
  baseUrl: '/',

  organizationName: 'physical-ai-lab', // GitHub org / username
  projectName: 'physical-ai-humanoid-textbook', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
      },
      ur: {
        label: 'اردو',
        direction: 'rtl',
      },
    },
  },


  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // textbook opens at root
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AnasAAhmed/ai-text-book-assignments',
        },
        blog: false, // textbooks usually don’t need a blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          to: '/intro',
          label: 'Introduction',
          position: 'left',
        },
        {
          href: 'https://github.com/AnasAAhmed/ai-text-book-assignments',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },

      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Robotic Nervous Systems', to: '/module1-ros2/1-1-introduction' },
            { label: 'The Digital Twin', to: '/module2-digital-twin/2-1-introduction-to-digital-twins' },
            { label: 'The AI-Robot Brain', to: '/module3-ai-robot-brain/3-1-introduction-to-isaac-platform' },
            { label: 'Vision-Language-Action', to: '/module4-vla/4-1-introduction-to-vla-systems' },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/AnasAAhmed/ai-text-book-assignments',
            },
            {
              label: 'Datasets',
              href: 'https://paperswithcode.com',
            },
            {
              label: 'Research Papers',
              href: 'https://arxiv.org',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/physical-ai-lab/physical-ai-humanoid-textbook/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/physical-ai-lab/physical-ai-humanoid-textbook/issues',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // additionalLanguages: ['python', 'cpp', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
