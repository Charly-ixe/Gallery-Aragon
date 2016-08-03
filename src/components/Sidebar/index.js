'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

import {
  MENU_CLICK
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      isOpen : false,
      idRoute : ''
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
      Emitter.on(MENU_CLICK, this.clickMenu);
    },

    clickMenu() {
      if(!this.isOpen) {
        this.showSidebar();
      }
      else {
        this.closeSidebar();
      }
    },

    showSidebar() {
      this.isOpen = true;
    },

    closeSidebar() {
      this.isOpen = false;
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
