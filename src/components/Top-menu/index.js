'use strict';

import './styles.scss';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      isOpen: false
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

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {}
});
