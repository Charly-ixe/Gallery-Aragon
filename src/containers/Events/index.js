'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

import TopMenuComponent from 'components/Top-menu';
import SidebarComponent from 'components/Sidebar';
import BurgerMenuComponent from 'components/Burger-Menu';
import FooterComponent from 'components/Footer';

import {
  WINDOW_RESIZE
} from 'config/messages';

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
	this.displayContent();

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

	displayContent() {
      const pageTitle = this.$els.title;
	  const pageContent = this.$els.content;
    //   const pageContent = this.$els.content;
      TweenMax.set(pageTitle, {opacity:0});
	  TweenMax.set(pageContent, {opacity:0});
      setTimeout(()=> {
        TweenMax.fromTo(pageTitle, 1, {opacity: 0, y: -20}, {opacity: 1, y: 0, ease: Expo.easeOut});
		TweenMax.fromTo(pageContent, 2, {opacity: 0}, {opacity: 1, ease: Expo.easeOut});
      }, 200);
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
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
    'top-menu-component': TopMenuComponent,
    'sidebar-component': SidebarComponent,
    'burger-menu-component': BurgerMenuComponent,
    'footer-component': FooterComponent
  }
});
