'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null
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

    clickPrev() {
      Emitter.emit('PREV_PAINTING_CLICK');
    },

    clickNext() {
      Emitter.emit('NEXT_PAINTING_CLICK');
    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
