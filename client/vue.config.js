module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/CC2_Project/'
      : '/',
      pwa: {
        iconPaths: {
          img: "./public/img/appimages/logo.png"
        }
      },
      experiments: {
        futureDefaults: true,
        topLevelAwait: true 
    },
  }