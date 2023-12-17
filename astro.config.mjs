import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'StarDoc',
      social: {
        github:
          'https://www.fiverr.com/creativitas/design-modern-documentation-website-astro-js-stalight',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', link: '/guides/install/' },
            { label: 'Design UI', link: '/guides/design/' },
            { label: 'Content', link: '/guides/content/' },
            { label: 'Grouping', link: '/guides/grouping/' },
            { label: 'Setting', link: '/guides/setting/' },
          ],
        },
        {
          label: 'Source Code',
          autogenerate: { directory: 'sourcecode' },
        },
      ],
    }),
  ],
});
