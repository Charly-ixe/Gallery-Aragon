'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

import contentData from 'data/content';

import TopMenuComponent from 'components/Top-menu';
import SidebarComponent from 'components/Sidebar';
import BurgerMenuComponent from 'components/Burger-Menu';
import InfoPaintingComponent from 'components/Info-painting';
import FooterComponent from 'components/Footer';

import {
  CLOSE_PAINTING_CLICK,
  WINDOW_RESIZE
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      paintings: contentData.paintings,
      infosOpen: false
    };
  },

  created() {
    this.bind();
  },

  ready() {

    this.addEventListeners();
    this.displayPaintings();
    this.currentPainting = null;
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
      Emitter.on(CLOSE_PAINTING_CLICK, this.closeInfo);
      Emitter.on(WINDOW_RESIZE, this.onWindowResize);
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
    },

    displayPaintings() {
      const galleryElt = this.$els.paintinglist.getElementsByClassName('gallery-painting');
      TweenMax.set(galleryElt, {opacity: 0});
      setTimeout(()=> {
        TweenMax.staggerFromTo(galleryElt, 1, {opacity: 0, y: -20}, {opacity: 1, y: 0, ease: Expo.easeOut}, 0.1);
      }, 200);
    },

    paintingClick(paintingIndex) {
      this.infosOpen = true;
      this.currentPainting = this.paintings[paintingIndex];
      Emitter.emit('PAINTING_CLICK', this.currentPainting);
    },

    closeInfo() {
      this.infosOpen = false;
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
    'info-painting-component': InfoPaintingComponent,
    'burger-menu-component': BurgerMenuComponent,
    'footer-component': FooterComponent
  }
});
