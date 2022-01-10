import Vue from "vue"
const contentful = require('contentful')

const config = {
  space: process.env.CTF_SPACE,
  accessToken: process.env.CTF_TOKEN,
};

const contentfulClient = contentful.createClient(config)

if (!Vue.__my_contentful_mixin__) {

  Vue.__my_contentful_mixin__ = true

  Vue.mixin({
    methods: {
      mediaWidth (media) {
        return media.fields.image.fields.file.details.image.width;
      },
      mediaHeight (media) {
        return media.fields.image.fields.file.details.image.height;
      }
    }
  })

  Vue.filter('mediaUri', function(media) {
    return media.fields.file.url;
  });

}

export default contentfulClient

