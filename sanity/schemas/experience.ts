import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: "string"
    }),
    defineField({
      name: "companyImage",
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "company",
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: "nature",
      title: 'Nature',
      type: 'string'
    }),
    defineField({
      name: "role",
      title: 'Role',
      type: 'text'
    }),
    defineField({
      name: "dateStarted",
      title: 'DateStarted',
      type: 'date'
    }),
    defineField({
      name: "dateEnded",
      title: 'DateEnded',
      type: 'date'
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
  ],
  orderings: [
    {
      title: 'Job date',
      name: 'jobDate',
      by: [
        { field: 'dateStarted', direction: 'desc' }
      ]
    }
  ]
})
