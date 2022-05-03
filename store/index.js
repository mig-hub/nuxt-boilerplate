// Uncomment if using contentful plugin.
// Then uncomment and modify the specific lines in actions.
// import contentfulClient from '~/plugins/contentful.js'
//
export const state = () => ({
  contentLoaded: false, // Set to true when landing content was loaded
  scrollTop: 0,
  scrollDirection: 0, // 0: stable, 1: down, -1: up
  orientation: 1, // 0: square, 1: landscape, -1: portrait
  tabletBreakpoint: 1, // 0: equal, 1: above, -1: below
  mobileBreakpoint: 1, // 0: equal, 1: above, -1: below
})

export const getters = {

  scrollingDown( state ) {
    return state.scrollDirection > 0
  },
  scrollingUp( state ) {
    return state.scrollDirection < 0
  },
  scrollingStable( state ) {
    return state.scrollDirection === 0
  },

  isLandscape( state ) {
    return state.orientation > 0
  },
  isPortrait( state ) {
    return state.orientation < 0
  },
  isSquare( state ) {
    return state.orientation === 0
  },

  aboveMobile( state ) {
    return state.mobileBreakpoint > 0
  },
  belowMobile( state ) {
    return state.mobileBreakpoint < 0
  },
  justMobile( state ) {
    return state.mobileBreakpoint === 0
  },

  aboveTablet( state ) {
    return state.tabletBreakpoint > 0
  },
  belowTablet( state ) {
    return state.tabletBreakpoint < 0
  },
  justTablet( state ) {
    return state.tabletBreakpoint === 0
  },

  isMobilePortrait( state, getters ) {
    return getters.isPortrait && !getters.aboveMobile
  },

  isTabletPortrait( state, getters ) {
    return getters.isPortrait && getters.aboveMobile && !getters.aboveTablet
  },

  notTabletPortrait( state, getters ) {
    return !getters.isTabletPortrait
  },

  notMobilePortrait( state, getters ) {
    return !getters.isMobilePortrait
  },

  isDesktop( state, getters ) {
    return getters.notMobilePortrait && getters.notTabletPortrait
  },

}

export const mutations = {

  setContentLoaded( state, bool ) {
    state.contentLoaded = ( typeof bool != 'boolean' ) ? true : bool
  },

  setScrollTop( state, val ) {
    state.scrollTop = val
  },

  setScrollDirection( state, val ) {
    state.scrollDirection = val
  },

  setOrientation( state, val ) {
    state.orientation = val
  },

  setTabletBreakpoint( state, val ) {
    state.tabletBreakpoint = val
  },

  setMobileBreakpoint( state, val ) {
    state.mobileBreakpoint = val
  },

  // Try to use this generic one only when the key is dynamic.
  // For example when looping through contentful pages.
  // Otherwise it is better to use a specific mutator instead.
  setKeyValue( state, { key, value } ) {
    state[ key ] = value
  },

}

export const actions = {

  async initState({ commit }) {

    // Uncomment for contentful.
    // Also uncomment the plugin load in config and the import at the top of this file.

    // let content = await contentfulClient.getEntries({
    //   'sys.contentType.sys.id[in]': 'homePage',
    //   include: 10,
    //   limit: 10,
    // })
    // content.items.forEach( ( item ) => {
    //   commit( 'setKeyValue', {
    //     key: item.sys.contentType.sys.id,
    //     value: item,
    //   } )
    // } )

    //

    commit( 'setContentLoaded' )
  },

}

