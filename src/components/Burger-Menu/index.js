'use strict';

import './styles.scss';
import Emitter from 'core/Emitter';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      menuOpen: false
    };
  },

  created() {
    this.bind();
  },

  ready() {

    this.addEventListeners();
  },

  beforeDestroy() {

    this.removeEventListeners();
  },

  methods: {

    /*
     * Binding & Events
     */

    bind() {
    },

    addEventListeners() {
    },

    menuClicked() {
      Emitter.emit('MENU_CLICK');
      if(!this.menuOpen) {
        this.menuOpen = true;
      }
      else {
        this.menuOpen = false;
      }
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
