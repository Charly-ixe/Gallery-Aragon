'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

import contentData from 'data/content';

import NavigationComponent from 'components/Navigation';

import {
  PAINTING_CLICK,
  PREV_PAINTING_CLICK,
  NEXT_PAINTING_CLICK
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null,
      currentPainting: {}
    };
  },

  created() {
    this.bind();
    this.currentId = 0;
    this.nbPaintings = 61;
    this.contentDictionary = [];

    for (let painting in contentData) {
      this.contentDictionary.push(painting);
    }
  },

  ready() {

    this.addEventListeners();
    this.details = this.$els.paintingdetails.getElementsByClassName('details');
    this.createTransitionsTl();
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
      Emitter.on(PAINTING_CLICK, this.onClickPainting);
      Emitter.on(PREV_PAINTING_CLICK, this.onclickPrev);
      Emitter.on(NEXT_PAINTING_CLICK, this.onclickNext);
    },

    onClickPainting(object) {
      this.currentPainting = object;
      this.currentId = object.id;
    },

    closePaintingInfo() {
      Emitter.emit('CLOSE_PAINTING_CLICK');
    },

    createTransitionsTl() {


	},

    onclickPrev() {
      this.fadeOutTl = new TimelineMax();
      this.fadeOutTl
        .fromTo(this.$els.paintingimage, 0.5, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Expo.easeOut}, 0.1)
  		.staggerFromTo(this.details, 0.3, {opacity: 1, x: 0}, {opacity: 0, x: 20, ease: Expo.easeOut}, 0.1);

	  setTimeout(()=> {
		this.currentId = (this.currentId > 0 ) ? this.currentId - 1 : this.nbPaintings - 1;
        this.currentPainting = contentData.paintings[this.currentId];
		this.fadeInTl = new TimelineMax();
  	    this.fadeInTl
  		  .fromTo(this.$els.paintingimage, 0.5, {opacity: 0, y: 10}, {opacity: 1, y:0, ease: Expo.easeOut}, 0.3)
  		  .staggerFromTo(this.details, 0.5, {opacity: 0, x: -20}, {opacity: 1, x:0, ease: Expo.easeOut}, 0.1);
	  }, 1000);

    },

    onclickNext() {

	  this.fadeOutTl = new TimelineMax();
      this.fadeOutTl
    	.fromTo(this.$els.paintingimage, 0.5, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Expo.easeOut}, 0.1)
    	.staggerFromTo(this.details, 0.3, {opacity: 1, x: 0}, {opacity: 0, x: 20, ease: Expo.easeOut}, 0.1);

  	  setTimeout(()=> {
		this.currentId = (this.currentId < this.nbPaintings - 1) ? this.currentId + 1 : 0;
        this.currentPainting = contentData.paintings[this.currentId];
  		this.fadeInTl = new TimelineMax();
    	this.fadeInTl
    	  .fromTo(this.$els.paintingimage, 0.5, {opacity: 0, y: 10}, {opacity: 1, y:0, ease: Expo.easeOut}, 0.3)
    	  .staggerFromTo(this.details, 0.5, {opacity: 0, x: -20}, {opacity: 1, x:0, ease: Expo.easeOut}, 0.1);
  	  }, 1000);

    },

    removeEventListeners() {
    }

  },

  transitions: {},

  components: {
    'navigation-component': NavigationComponent
  }
});
