'use strict';

import './styles.scss';

import 'gsap';

import Emitter from 'core/Emitter';
import Router from 'core/Router';

import {
  WINDOW_RESIZE
} from 'config/messages';

import LogoComponent from 'components/Logo';

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
    this.createAnimationTimeline();

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
      Emitter.on(WINDOW_RESIZE, this.onWindowResize);
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
    },

    createAnimationTimeline() {
      this.leaveTl = new TimelineMax({paused: true, onComplete: this.goToGalleryPage});

      this.leaveTl
        .to(this.$els.enterbutton, 1, {opacity: 0, ease: Expo.easeOut}, 0)
		.to(this.$els.logo, 1, {opacity: 0, ease: Expo.easeOut}, 0.5)
		.to(this.$els.homepagewrapper, 1, {opacity: 0, ease: Expo.easeOut}, 0);
    },

    clickEnter() {
      this.leaveTl.play();
    },

    goToGalleryPage() {
      Router.go({name: 'gallery'});
    },

    onWindowResize({width, height}) {
      /*eslint-disable */
      console.log(`Window resize from application with debounce -> width: ${width}px || height: ${height}`);
      /*eslint-enable */
    }

  },

  transitions: {

  },

  components: {
    'logo-component': LogoComponent
  }
});
