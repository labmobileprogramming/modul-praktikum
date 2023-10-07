// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modul Online LAB Mobile Programming',

  url: 'https://labmobileprogramming.github.io',
  baseUrl: '/labmobileprogramming',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'labmobileprogramming', // Usually your GitHub org/user name.
  projectName: 'modul_online2023', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/labmobileprogramming/modul-praktikum/blob/main',
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Modul Online LAB Mobile Programming',
        logo: {
          alt: 'Lab Mobile',
          src: 'img/logo-lab-mobile-programming.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mobileProgramming',
            position: 'left',
            label: 'Praktikum Mobile Programming 2023',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sistemEmbedded',
            position: 'left',
            label: 'Praktikum Sistem Embedded 2023',
          },
          {
            href: 'https://github.com/labmobileprogramming',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LAB Mobile Programming`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
