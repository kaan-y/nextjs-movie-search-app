const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')

    return config
  },
}
