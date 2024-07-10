!function(t){"use strict";let i={duration:200,dist:-100,shift:0,padding:0,numVisible:5,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null};class e extends Component{constructor(i,s){super(e,i,s),this.el.M_Carousel=this,this.options=t.extend({},e.defaults,s),this.hasMultipleSlides=this.$el.find(".carousel-item").length>1,this.showIndicators=this.options.indicators&&this.hasMultipleSlides,this.noWrap=this.options.noWrap||!this.hasMultipleSlides,this.pressed=!1,this.dragged=!1,this.offset=this.target=0,this.images=[],this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.itemHeight=this.$el.find(".carousel-item").first().innerHeight(),this.dim=2*this.itemWidth+this.options.padding||1,this._autoScrollBound=this._autoScroll.bind(this),this._trackBound=this._track.bind(this),this.options.fullWidth&&(this.options.dist=0,this._setCarouselHeight(),this.showIndicators&&this.$el.find(".carousel-fixed-item").addClass("with-indicators")),this.$indicators=t('<ul class="indicators"></ul>'),this.$el.find(".carousel-item").each((i,e)=>{if(this.images.push(i),this.showIndicators){let i=t('<li class="indicator-item"></li>');0===e&&i[0].classList.add("active"),this.$indicators.append(i)}}),this.showIndicators&&this.$el.append(this.$indicators),this.count=this.images.length,this.options.numVisible=Math.min(this.count,this.options.numVisible),this.xform="transform",["webkit","Moz","O","ms"].every(t=>{var i=t+"Transform";return void 0===document.body.style[i]||(this.xform=i,!1)}),this._setupEventHandlers(),this._scroll(this.offset)}static get defaults(){return i}static init(t,i){return super.init(this,t,i)}static getInstance(t){return(t.jquery?t[0]:t).M_Carousel}destroy(){this._removeEventHandlers(),this.el.M_Carousel=void 0}_setupEventHandlers(){this._handleCarouselTapBound=this._handleCarouselTap.bind(this),this._handleCarouselDragBound=this._handleCarouselDrag.bind(this),this._handleCarouselReleaseBound=this._handleCarouselRelease.bind(this),this._handleCarouselClickBound=this._handleCarouselClick.bind(this),void 0!==window.ontouchstart&&(this.el.addEventListener("touchstart",this._handleCarouselTapBound),this.el.addEventListener("touchmove",this._handleCarouselDragBound),this.el.addEventListener("touchend",this._handleCarouselReleaseBound)),this.el.addEventListener("mousedown",this._handleCarouselTapBound),this.el.addEventListener("mousemove",this._handleCarouselDragBound),this.el.addEventListener("mouseup",this._handleCarouselReleaseBound),this.el.addEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.addEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&(this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.$indicators.find(".indicator-item").each((t,i)=>{t.addEventListener("click",this._handleIndicatorClickBound)}));let t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}_removeEventHandlers(){void 0!==window.ontouchstart&&(this.el.removeEventListener("touchstart",this._handleCarouselTapBound),this.el.removeEventListener("touchmove",this._handleCarouselDragBound),this.el.removeEventListener("touchend",this._handleCarouselReleaseBound)),this.el.removeEventListener("mousedown",this._handleCarouselTapBound),this.el.removeEventListener("mousemove",this._handleCarouselDragBound),this.el.removeEventListener("mouseup",this._handleCarouselReleaseBound),this.el.removeEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.removeEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&this.$indicators.find(".indicator-item").each((t,i)=>{t.removeEventListener("click",this._handleIndicatorClickBound)}),window.removeEventListener("resize",this._handleThrottledResizeBound)}_handleCarouselTap(i){"mousedown"===i.type&&t(i.target).is("img")&&i.preventDefault(),this.pressed=!0,this.dragged=!1,this.verticalDragged=!1,this.reference=this._xpos(i),this.referenceY=this._ypos(i),this.velocity=this.amplitude=0,this.frame=this.offset,this.timestamp=Date.now(),clearInterval(this.ticker),this.ticker=setInterval(this._trackBound,100)}_handleCarouselDrag(t){let i,e,s,h;if(this.pressed)if(i=this._xpos(t),e=this._ypos(t),s=this.reference-i,(h=Math.abs(this.referenceY-e))<30&&!this.verticalDragged)(s>2||s<-2)&&(this.dragged=!0,this.reference=i,this._scroll(this.offset+s));else{if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;this.verticalDragged=!0}if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1}_handleCarouselRelease(t){if(this.pressed)return this.pressed=!1,clearInterval(this.ticker),this.target=this.offset,(this.velocity>10||this.velocity<-10)&&(this.amplitude=.9*this.velocity,this.target=this.offset+this.amplitude),this.target=Math.round(this.target/this.dim)*this.dim,this.noWrap&&(this.target>=this.dim*(this.count-1)?this.target=this.dim*(this.count-1):this.target<0&&(this.target=0)),this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound),this.dragged&&(t.preventDefault(),t.stopPropagation()),!1}_handleCarouselClick(i){if(this.dragged)return i.preventDefault(),i.stopPropagation(),!1;if(!this.options.fullWidth){let e=t(i.target).closest(".carousel-item").index();0!==this._wrap(this.center)-e&&(i.preventDefault(),i.stopPropagation()),this._cycleTo(e)}}_handleIndicatorClick(i){i.stopPropagation();let e=t(i.target).closest(".indicator-item");e.length&&this._cycleTo(e.index())}_handleResize(t){this.options.fullWidth?(this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.imageHeight=this.$el.find(".carousel-item.active").height(),this.dim=2*this.itemWidth+this.options.padding,this.offset=2*this.center*this.itemWidth,this.target=this.offset,this._setCarouselHeight(!0)):this._scroll()}_setCarouselHeight(t){let i=this.$el.find(".carousel-item.active").length?this.$el.find(".carousel-item.active").first():this.$el.find(".carousel-item").first(),e=i.find("img").first();if(e.length)if(e[0].complete){let t=e.height();if(t>0)this.$el.css("height",t+"px");else{let t=e[0].naturalWidth,i=e[0].naturalHeight,s=this.$el.width()/t*i;this.$el.css("height",s+"px")}}else e.one("load",(t,i)=>{this.$el.css("height",t.offsetHeight+"px")});else if(!t){let t=i.height();this.$el.css("height",t+"px")}}_xpos(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}_ypos(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}_wrap(t){return t>=this.count?t%this.count:t<0?this._wrap(this.count+t%this.count):t}_track(){let t,i,e,s;i=(t=Date.now())-this.timestamp,this.timestamp=t,e=this.offset-this.frame,this.frame=this.offset,s=1e3*e/(1+i),this.velocity=.8*s+.2*this.velocity}_autoScroll(){let t,i;this.amplitude&&(t=Date.now()-this.timestamp,(i=this.amplitude*Math.exp(-t/this.options.duration))>2||i<-2?(this._scroll(this.target-i),requestAnimationFrame(this._autoScrollBound)):this._scroll(this.target))}_scroll(i){let e,s,h,a,o,n,l,r,d,c;this.$el.hasClass("scrolling")||this.el.classList.add("scrolling"),null!=this.scrollingTimeout&&window.clearTimeout(this.scrollingTimeout),this.scrollingTimeout=window.setTimeout(()=>{this.$el.removeClass("scrolling")},this.options.duration);let u=this.center,p=1/this.options.numVisible;if(this.offset="number"==typeof i?i:this.offset,this.center=Math.floor((this.offset+this.dim/2)/this.dim),o=-(a=(h=this.offset-this.center*this.dim)<0?1:-1)*h*2/this.dim,s=this.count>>1,this.options.fullWidth?(l="translateX(0)",c=1):(l="translateX("+(this.el.clientWidth-this.itemWidth)/2+"px) ",l+="translateY("+(this.el.clientHeight-this.itemHeight)/2+"px)",c=1-p*o),this.showIndicators){let t=this.center%this.count,i=this.$indicators.find(".indicator-item.active");i.index()!==t&&(i.removeClass("active"),this.$indicators.find(".indicator-item").eq(t)[0].classList.add("active"))}if(!this.noWrap||this.center>=0&&this.center<this.count){n=this.images[this._wrap(this.center)],t(n).hasClass("active")||(this.$el.find(".carousel-item").removeClass("active"),n.classList.add("active"));let i=`${l} translateX(${-h/2}px) translateX(${a*this.options.shift*o*e}px) translateZ(${this.options.dist*o}px)`;this._updateItemStyle(n,c,0,i)}for(e=1;e<=s;++e){if(this.options.fullWidth?(r=this.options.dist,d=e===s&&h<0?1-o:1):(r=this.options.dist*(2*e+o*a),d=1-p*(2*e+o*a)),!this.noWrap||this.center+e<this.count){n=this.images[this._wrap(this.center+e)];let t=`${l} translateX(${this.options.shift+(this.dim*e-h)/2}px) translateZ(${r}px)`;this._updateItemStyle(n,d,-e,t)}if(this.options.fullWidth?(r=this.options.dist,d=e===s&&h>0?1-o:1):(r=this.options.dist*(2*e-o*a),d=1-p*(2*e-o*a)),!this.noWrap||this.center-e>=0){n=this.images[this._wrap(this.center-e)];let t=`${l} translateX(${-this.options.shift+(-this.dim*e-h)/2}px) translateZ(${r}px)`;this._updateItemStyle(n,d,-e,t)}}if(!this.noWrap||this.center>=0&&this.center<this.count){n=this.images[this._wrap(this.center)];let t=`${l} translateX(${-h/2}px) translateX(${a*this.options.shift*o}px) translateZ(${this.options.dist*o}px)`;this._updateItemStyle(n,c,0,t)}let m=this.$el.find(".carousel-item").eq(this._wrap(this.center));u!==this.center&&"function"==typeof this.options.onCycleTo&&this.options.onCycleTo.call(this,m[0],this.dragged),"function"==typeof this.oneTimeCallback&&(this.oneTimeCallback.call(this,m[0],this.dragged),this.oneTimeCallback=null)}_updateItemStyle(t,i,e,s){t.style[this.xform]=s,t.style.zIndex=e,t.style.opacity=i,t.style.visibility="visible"}_cycleTo(t,i){let e=this.center%this.count-t;this.noWrap||(e<0?Math.abs(e+this.count)<Math.abs(e)&&(e+=this.count):e>0&&Math.abs(e-this.count)<e&&(e-=this.count)),this.target=this.dim*Math.round(this.offset/this.dim),e<0?this.target+=this.dim*Math.abs(e):e>0&&(this.target-=this.dim*e),"function"==typeof i&&(this.oneTimeCallback=i),this.offset!==this.target&&(this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound))}next(t){(void 0===t||isNaN(t))&&(t=1);let i=this.center+t;if(i>=this.count||i<0){if(this.noWrap)return;i=this._wrap(i)}this._cycleTo(i)}prev(t){(void 0===t||isNaN(t))&&(t=1);let i=this.center-t;if(i>=this.count||i<0){if(this.noWrap)return;i=this._wrap(i)}this._cycleTo(i)}set(t,i){if((void 0===t||isNaN(t))&&(t=0),t>this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t,i)}}M.Carousel=e,M.jQueryLoaded&&M.initializeJqueryWrapper(e,"carousel","M_Carousel")}(cash);