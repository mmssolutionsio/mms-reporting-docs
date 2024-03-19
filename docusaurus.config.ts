import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ns.wow Dokumentation',
  tagline: 'Get set up in minutes to build and run any projects in hours instead of weeks.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://multivisio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/mms-reporting-docs/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'multivisio', // Usually your GitHub org/user name.
  projectName: 'mms-reporting-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/multivisio/mms-reporting-docs/tree/main/',
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ns.wow',
      logo: {
        alt: 'ns.wow',
        src: 'img/mmslogo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Developer Docs',
        },
        {
          href: 'https://mmssolutions.io/de/nswow',
          label: 'Website',
          position: 'left'
        },
        /*
        {
          type: 'docsVersionDropdown',
          position: 'right'
        },*/
        {
          href: 'https://github.com/mmssolutionsio/mms-reporting-library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'mms solutions AG',
              href: 'https://mmssolutions.io/de/startseite',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mmssolutionsio/mms-reporting-library',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ns.wow`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
