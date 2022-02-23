// Uncomment if using contentful plugin.
// Then uncomment and modify the specific lines in actions.
// import contentfulClient from '~/plugins/contentful.js'
//
export const state = () => ({
  contentLoaded: false
})

export const getters = {
}

export const mutations = {

  setContentLoaded(state, bool) {
    state.contentLoaded = (typeof bool != 'boolean') ? true : bool
  },

  // Try to use this generic one only when the key is dynamic.
  // For example when looping through contentful pages.
  // Otherwise it is better to use a specific mutator instead.
  setKeyValue(state, { key, value }) {
    state[key] = value
  }

}

export const actions = {

  async initState({ commit }) {

    // Uncomment for contentful.
    // Also uncomment the plugin load in config and the import at the top of this file.

    // let content = await contentfulClient.getEntries({
    //   'sys.contentType.sys.id[in]': 'homePage',
    //   include: 10,
    //   limit: 10
    // })
    // content.items.forEach(function(item) {
    //   commit('setKeyValue', {
    //     key: item.sys.contentType.sys.id,
    //     value: item
    //   })
    // })

    //

    commit('setContentLoaded')
  }

}

