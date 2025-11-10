import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['news/*.md']
      }
    }),
    news: defineCollection({
      type: 'page',
      source: 'news/*.md',
      schema: z.object({
        title: z.string().nonempty(),
        subtitle: z.string(),
        image: z.string(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
      })
    }),
  }
})

// TODO: schemas