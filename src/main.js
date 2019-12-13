// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import store from "./store";
import '~/assets/styles.scss'

export default function (Vue, { router, head, isClient, appOptions } ) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex);

  appOptions.store = store;

  head.meta.push({
    name: 'keywords',
    content:'Andrew Smith,Andrew Smith Developer,Web Developer,Web Developer Nottingham,Web Developer,Cross Platform Developer,Mobile App Developer,award winning'
  })

  head.meta.push({
    name: 'description',
    content: 'Andrew Smith is a web developer, mobile application developer and double award winning BSc (Hons) Computer Science graduate based in Nottingham'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#ffffff'
  })
  

  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#da532c'
  })
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  })
  head.meta.push({
    name: 'manifest',
    content: '/site.webmanifest'
  })
  head.meta.push({
    name: 'charset',
    content: 'utf-8"'
  })

  head.link.push({
    rel: 'canonical',
    href: 'https://andrewsmithdeveloper.com/'
  })

  head.link.push({
    rel: 'author',
    href: 'https://www.linkedin.com/in/andrewsmithdeveloper/'
  })

  head.link.push({
    rel: 'apple-touch-icon',
    href: '~/assets/images/favicons/apple-touch-icon.png'
  })

  head.link.push({
    rel: 'icon',
    href: '~/assets/images/favicons/favicon-32x32.png'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500|Open+Sans:600'
  })
}
