const contentful = require('contentful');

const config = {
  space: process.env.CTF_SPACE,
  accessToken: process.env.CTF_TOKEN,
};

const contentfulClient = contentful.createClient(config)

export default contentfulClient

