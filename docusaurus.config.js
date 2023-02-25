// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReadLayer docs',
  tagline: 'ReadLayer official documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.readlayer.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'readlayer',
  projectName: 'docs-dist',
  deploymentBranch: 'main',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/readlayer/docs/edit/main/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Project's social card
      image: 'img/logo_square_1_ReadLayer_2_glasses_nobg.png',
      navbar: {
        title: 'ReadLayer docs',
        logo: {
          alt: 'Read faster',
          src: 'img/logo.svg',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Main site',
                href: 'https://readlayer.com',
              },
              {
                label: 'Add to Chrome, it\'s free',
                href: 'https://chrome.google.com/webstore/detail/readlayer/lbgbannheedhlpkkemmimeilbobnkcca',
              },
              {
                label: 'Blog',
                href: 'https://readlayer.medium.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/readlayer',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/readlayer',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 2023 ReadLayer.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
        [require.resolve('docusaurus-lunr-search'),
            {
              indexBaseUrl: true
            }
        ]
    ],
};

module.exports = config;
