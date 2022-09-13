import { defineNuxtPlugin } from 'nuxt/app'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faArrowDownLong, faPaintbrush, faScrewdriverWrench, faPlus, faHand } from '@fortawesome/free-solid-svg-icons'
import { fab, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, faArrowDownLong, faPaintbrush, faScrewdriverWrench, faPlus, faHand, fab, faInstagram, faLinkedin, faGithub)

// Register the component globally
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
