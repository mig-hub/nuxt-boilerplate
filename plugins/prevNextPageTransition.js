// Uncomment plugin and scss in nuxt config to use this plugin.

import Vue from 'vue'

if ( !Vue.__my_prevnextpagetransition_mixin__ ) {

  Vue.__my_prevnextpagetransition_mixin__ = true

  const pagesOrder = [
    '/',
  ]

  Vue.mixin({
    transition( to, from ) {
      let name = 'slidenext'
      if ( from ) {
        if ( pagesOrder.indexOf( to.matched[ 0 ].path ) < pagesOrder.indexOf( from.matched[ 0 ].path ) ) {
          name = 'slideprev'
        }
      }
      return { name: name, mode: '' }
    },
  })

}

