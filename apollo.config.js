module.exports = {
  client: {
    addTypename: false,
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-transformer-sharp/src/fragments.js'
    ],
    service: {
      name: 'gatsby-schema',
      localSchemaFile: './schema.json'
    },
    tagName: 'graphql'
  }
}
