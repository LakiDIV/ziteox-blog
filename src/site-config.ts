export const siteConfig = {
  author: 'Laki',
  cc: 'Ziteox',
  title: 'Ziteox Blog',
  subtitle: 'Tech notes, dev logs, and indie dev thoughts.',
  description: 'The official blog of Ziteox — a solo web development agency sharing insights, updates, and code.',
  image: {
    src: '/hero.jpg', // or the new image you generated
    alt: 'Ziteox Blog Hero Image',
  },
  email: 'ziteox@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/ziteox',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/ziteox',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    // {
    //   text: 'Linkedin',
    //   href: 'https://linkedin.com/in/lakshika',
    //   icon: 'i-simple-icons-linkedin',
    // },
    {
      text: 'Instagram',
      href: 'https://instagram.com/ziteox',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: 'https://youtube.com/@ziteox',
      icon: 'i-simple-icons-youtube',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Ziteox Logo',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'News',
        href: '/blog/news',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'News',
        href: '/blog/news',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Privacy Policy',
        href: '/privacy',
      },
      {
        text: 'Terms',
        href: '/terms',
      },
      {
        text: 'Ziteox Website',
        href: 'https://ziteox.com',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/ziteox',
      },
    ],
  },
}

export default siteConfig
