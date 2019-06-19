export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0a0f42ca4eeb75db5661c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio',
                  apiId: '7621d8e5-7043-4969-82df-0bf10a5b3ed9'
                },
                {
                  buildHookId: '5d0a0f42e1e64c1991ac8a1c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web',
                  apiId: 'af4c0762-3840-46b0-bccb-4f922ee9159c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhaidarh/sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
