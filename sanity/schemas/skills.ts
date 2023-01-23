import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: "string"
    }),
    defineField({
      name: "progress",
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0% to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean'
    }),
    defineField({
      name: "technologies",
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: 'skills' } }]
    }),

    defineField({
      name: "points",
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }]
    }),
  ]
})
