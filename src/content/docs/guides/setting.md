---
title: Setting
description: stardoc starlight template documentation sidebar setting
tableOfContents: false
---

You can change and update the sidebar documentation, open the `astro.config.mjs` file with a code editor, and then update according to your needs.

Customises the sidebar

```
sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Doc 1', link: '/guides/doc1/' },
            { label: 'Doc2', link: '/guides/doc2/' },
          ],
        },
```

Generate Documentation Folder

```
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
```

Example to generate your src/content/docs/reference folder
