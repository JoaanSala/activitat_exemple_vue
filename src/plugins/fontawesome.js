import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrophy} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
library.add(faTrophy)

Vue.component('icons', FontAwesomeIcon)
