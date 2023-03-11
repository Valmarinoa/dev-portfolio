import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the Project',
      type: "string"
    }),
    defineField({
      name: "image",
      title: 'Image DSK',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "imageMob",
      title: 'Image MOB',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "sumary",
      title: 'Sumary',
      type: 'text'
    }),
    defineField({
      name: "technologies",
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: 'skills' } }]
    }),

    defineField({
      name: "linkToBuild",
      title: 'LinkToBuild',
      type: 'url'
    }),
  ]
})
