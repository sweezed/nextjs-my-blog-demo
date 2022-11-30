const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return ({
      env: {
        mongodb_username: 'admin',
        // mongodb_password:  * password will be provided by env local file *
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my_blog'
      }
    })
  }

  // could add other phases below here
}