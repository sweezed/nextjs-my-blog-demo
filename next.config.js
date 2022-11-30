const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return ({
      env: {
        mongodb_username: 'admin',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my_blog'
      }
    })
  }

  return {
    env: {
      mongodb_username: 'admin',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my_blog'
    }
  }
}