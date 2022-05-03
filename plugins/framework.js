// Framework
// Filters and mixins that can be used on any website

import Vue from 'vue'

if ( !Vue.__my_framework_mixin__ ) {

  Vue.__my_framework_mixin__ = true

  Vue.mixin({
    methods: {

      navigateBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },

      truncate( str, wordCount ) {
        const ending = '...'
        const atoms = str.split(' ')
        if (atoms.length > wordCount) {
          return atoms.slice(0, wordCount).join(' ') + ending
        } else {
          return str
        }
      },

    },

  })

  Vue.filter( 'nl2br', ( str ) => {
    return ( str + '' ).replace( /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2' )
  })

  Vue.filter( 'autolink', ( str ) => {
    return ( str + '' ).replace( /(\b[a-z0-9\.\-_]+@[a-z0-9\.\-_]+\b)/ig, '<a href="mailto:$1">$1</a>' )
  })

  Vue.filter( 'autohtml', ( str ) => {
    return Vue.options.filters.autolink( Vue.options.filters.nl2br( str ) )
  })

  Vue.filter( 'googleMapsLink', ( query ) => {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent( query )
  })

}

