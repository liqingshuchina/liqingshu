// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
    // Enable strict mode
    "use strict";

    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
    document.createElement( "picture" );

    var warn, eminpx, alwaysCheckWDescriptor, evalId;
    // local object for method references and testing exposure
    var pf = {};
    var isSupportTestReady = false;
    var noop = function() {};
    var image = document.createElement( "img" );
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {
        //resource selection:
        algorithm: ""
    };
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set";
    // ua sniffing is done for undetectable img loading features,
    // to do some non crucial perf optimizations
    var ua = navigator.userAgent;
    var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    /**
     * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
     */
    // baseStyle also used by getEmValue (i.e.: width: 1em is important)
    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;

    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
        px: 1,
        "in": 96
    };
    var anchor = document.createElement( "a" );
    /**
     * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
     * @type {boolean}
     */
    var alreadyRun = false;

    // Reusable, non-"g" Regexes

    // (Don't use \s, to avoid matching non-breaking space.)
    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
        regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
        regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
        regexTrailingCommas = /[,]+$/,
        regexNonNegativeInteger = /^\d+$/,

        // ( Positive or negative or unsigned integers or decimals, without or without exponents.
        // Must include at least one digit.
        // According to spec tests any decimal point must be followed by a digit.
        // No leading plus sign is allowed.)
        // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
        regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

    var on = function(obj, evt, fn, capture) {
        if ( obj.addEventListener ) {
            obj.addEventListener(evt, fn, capture || false);
        } else if ( obj.attachEvent ) {
            obj.attachEvent( "on" + evt, fn);
        }
    };

    /**
     * simple memoize function:
     */

    var memoize = function(fn) {
        var cache = {};
        return function(input) {
            if ( !(input in cache) ) {
                cache[ input ] = fn(input);
            }
            return cache[ input ];
        };
    };

    // UTILITY FUNCTIONS

    // Manual is faster than RegEx
    // http://jsperf.com/whitespace-character/5
    function isSpace(c) {
        return (c === "\u0020" || // space
                c === "\u0009" || // horizontal tab
                c === "\u000A" || // new line
                c === "\u000C" || // form feed
                c === "\u000D");  // carriage return
    }

    /**
     * gets a mediaquery and returns a boolean or gets a css length and returns a number
     * @param css mediaqueries or css length
     * @returns {boolean|number}
     *
     * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
     */
    var evalCSS = (function() {

        var regLength = /^([\d\.]+)(em|vw|px)$/;
        var replace = function() {
            var args = arguments, index = 0, string = args[0];
            while (++index in args) {
                string = string.replace(args[index], args[++index]);
            }
            return string;
        };

        var buildStr = memoize(function(css) {

            return "return " + replace((css || "").toLowerCase(),
                // interpret `and`
                /\band\b/g, "&&",

                // interpret `,`
                /,/g, "||",

                // interpret `min-` as >=
                /min-([a-z-\s]+):/g, "e.$1>=",

                // interpret `max-` as <=
                /max-([a-z-\s]+):/g, "e.$1<=",

                //calc value
                /calc([^)]+)/g, "($1)",

                // interpret css values
                /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
                //make eval less evil
                /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
            ) + ";";
        });

        return function(css, length) {
            var parsedLength;
            if (!(css in cssCache)) {
                cssCache[css] = false;
                if (length && (parsedLength = css.match( regLength ))) {
                    cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
                } else {
                    /*jshint evil:true */
                    try{
                        cssCache[css] = new Function("e", buildStr(css))(units);
                    } catch(e) {}
                    /*jshint evil:false */
                }
            }
            return cssCache[css];
        };
    })();

    var setResolution = function( candidate, sizesattr ) {
        if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
            candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
            candidate.res = candidate.w / candidate.cWidth ;
        } else {
            candidate.res = candidate.d;
        }
        return candidate;
    };

    /**
     *
     * @param opt
     */
    var picturefill = function( opt ) {

        if (!isSupportTestReady) {return;}

        var elements, i, plen;

        var options = opt || {};

        if ( options.elements && options.elements.nodeType === 1 ) {
            if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
                options.elements =  [ options.elements ];
            } else {
                options.context = options.elements;
                options.elements =  null;
            }
        }

        elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

        if ( (plen = elements.length) ) {

            pf.setupRun( options );
            alreadyRun = true;

            // Loop through all elements
            for ( i = 0; i < plen; i++ ) {
                pf.fillImg(elements[ i ], options);
            }

            pf.teardownRun( options );
        }
    };

    /**
     * outputs a warning for the developer
     * @param {message}
     * @type {Function}
     */
    warn = ( window.console && console.warn ) ?
        function( message ) {
            console.warn( message );
        } :
        noop
    ;

    if ( !(curSrcProp in image) ) {
        curSrcProp = "src";
    }

    // Add support for standard mime types.
    types[ "image/jpeg" ] = true;
    types[ "image/gif" ] = true;
    types[ "image/png" ] = true;

    function detectTypeSupport( type, typeUri ) {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var image = new window.Image();
        image.onerror = function() {
            types[ type ] = false;
            picturefill();
        };
        image.onload = function() {
            types[ type ] = image.width === 1;
            picturefill();
        };
        image.src = typeUri;
        return "pending";
    }

    // test svg support
    types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

    /**
     * updates the internal vW property with the current viewport width in px
     */
    function updateMetrics() {

        isVwDirty = false;
        DPR = window.devicePixelRatio;
        cssCache = {};
        sizeLengthCache = {};

        pf.DPR = DPR || 1;

        units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
        units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

        units.vw = units.width / 100;
        units.vh = units.height / 100;

        evalId = [ units.height, units.width, DPR ].join("-");

        units.em = pf.getEmValue();
        units.rem = units.em;
    }

    function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
        var bonusFactor, tooMuch, bonus, meanDensity;

        //experimental
        if (cfg.algorithm === "saveData" ){
            if ( lowerValue > 2.7 ) {
                meanDensity = dprValue + 1;
            } else {
                tooMuch = higherValue - dprValue;
                bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

                bonus = tooMuch * bonusFactor;

                if (isCached) {
                    bonus += 0.1 * bonusFactor;
                }

                meanDensity = lowerValue + bonus;
            }
        } else {
            meanDensity = (dprValue > 1) ?
                Math.sqrt(lowerValue * higherValue) :
                lowerValue;
        }

        return meanDensity > dprValue;
    }

    function applyBestCandidate( img ) {
        var srcSetCandidates;
        var matchingSet = pf.getSet( img );
        var evaluated = false;
        if ( matchingSet !== "pending" ) {
            evaluated = evalId;
            if ( matchingSet ) {
                srcSetCandidates = pf.setRes( matchingSet );
                pf.applySetCandidate( srcSetCandidates, img );
            }
        }
        img[ pf.ns ].evaled = evaluated;
    }

    function ascendingSort( a, b ) {
        return a.res - b.res;
    }

    function setSrcToCur( img, src, set ) {
        var candidate;
        if ( !set && src ) {
            set = img[ pf.ns ].sets;
            set = set && set[set.length - 1];
        }

        candidate = getCandidateForSrc(src, set);

        if ( candidate ) {
            src = pf.makeUrl(src);
            img[ pf.ns ].curSrc = src;
            img[ pf.ns ].curCan = candidate;

            if ( !candidate.res ) {
                setResolution( candidate, candidate.set.sizes );
            }
        }
        return candidate;
    }

    function getCandidateForSrc( src, set ) {
        var i, candidate, candidates;
        if ( src && set ) {
            candidates = pf.parseSet( set );
            src = pf.makeUrl(src);
            for ( i = 0; i < candidates.length; i++ ) {
                if ( src === pf.makeUrl(candidates[ i ].url) ) {
                    candidate = candidates[ i ];
                    break;
                }
            }
        }
        return candidate;
    }

    function getAllSourceElements( picture, candidates ) {
        var i, len, source, srcset;

        // SPEC mismatch intended for size and perf:
        // actually only source elements preceding the img should be used
        // also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
        var sources = picture.getElementsByTagName( "source" );

        for ( i = 0, len = sources.length; i < len; i++ ) {
            source = sources[ i ];
            source[ pf.ns ] = true;
            srcset = source.getAttribute( "srcset" );

            // if source does not have a srcset attribute, skip
            if ( srcset ) {
                candidates.push( {
                    srcset: srcset,
                    media: source.getAttribute( "media" ),
                    type: source.getAttribute( "type" ),
                    sizes: source.getAttribute( "sizes" )
                } );
            }
        }
    }

    /**
     * Srcset Parser
     * By Alex Bell |  MIT License
     *
     * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
     *
     * Based super duper closely on the reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
     */

    // 1. Let input be the value passed to this algorithm.
    // (TO-DO : Explain what "set" argument is here. Maybe choose a more
    // descriptive & more searchable name.  Since passing the "set" in really has
    // nothing to do with parsing proper, I would prefer this assignment eventually
    // go in an external fn.)
    function parseSrcset(input, set) {

        function collectCharacters(regEx) {
            var chars,
                match = regEx.exec(input.substring(pos));
            if (match) {
                chars = match[ 0 ];
                pos += chars.length;
                return chars;
            }
        }

        var inputLength = input.length,
            url,
            descriptors,
            currentDescriptor,
            state,
            c,

            // 2. Let position be a pointer into input, initially pointing at the start
            //    of the string.
            pos = 0,

            // 3. Let candidates be an initially empty source set.
            candidates = [];

        /**
        * Adds descriptor properties to a candidate, pushes to the candidates array
        * @return undefined
        */
        // (Declared outside of the while loop so that it's only created once.
        // (This fn is defined before it is used, in order to pass JSHINT.
        // Unfortunately this breaks the sequencing of the spec comments. :/ )
        function parseDescriptors() {

            // 9. Descriptor parser: Let error be no.
            var pError = false,

            // 10. Let width be absent.
            // 11. Let density be absent.
            // 12. Let future-compat-h be absent. (We're implementing it now as h)
                w, d, h, i,
                candidate = {},
                desc, lastChar, value, intVal, floatVal;

            // 13. For each descriptor in descriptors, run the appropriate set of steps
            // from the following list:
            for (i = 0 ; i < descriptors.length; i++) {
                desc = descriptors[ i ];

                lastChar = desc[ desc.length - 1 ];
                value = desc.substring(0, desc.length - 1);
                intVal = parseInt(value, 10);
                floatVal = parseFloat(value);

                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0077 LATIN SMALL LETTER W character
                if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

                    // If width and density are not both absent, then let error be yes.
                    if (w || d) {pError = true;}

                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes.
                    // Otherwise, let width be the result.
                    if (intVal === 0) {pError = true;} else {w = intVal;}

                // If the descriptor consists of a valid floating-point number followed by
                // a U+0078 LATIN SMALL LETTER X character
                } else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

                    // If width, density and future-compat-h are not all absent, then let error
                    // be yes.
                    if (w || d || h) {pError = true;}

                    // Apply the rules for parsing floating-point number values to the descriptor.
                    // If the result is less than zero, let error be yes. Otherwise, let density
                    // be the result.
                    if (floatVal < 0) {pError = true;} else {d = floatVal;}

                // If the descriptor consists of a valid non-negative integer followed by
                // a U+0068 LATIN SMALL LETTER H character
                } else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

                    // If height and density are not both absent, then let error be yes.
                    if (h || d) {pError = true;}

                    // Apply the rules for parsing non-negative integers to the descriptor.
                    // If the result is zero, let error be yes. Otherwise, let future-compat-h
                    // be the result.
                    if (intVal === 0) {pError = true;} else {h = intVal;}

                // Anything else, Let error be yes.
                } else {pError = true;}
            } // (close step 13 for loop)

            // 15. If error is still no, then append a new image source to candidates whose
            // URL is url, associated with a width width if not absent and a pixel
            // density density if not absent. Otherwise, there is a parse error.
            if (!pError) {
                candidate.url = url;

                if (w) { candidate.w = w;}
                if (d) { candidate.d = d;}
                if (h) { candidate.h = h;}
                if (!h && !d && !w) {candidate.d = 1;}
                if (candidate.d === 1) {set.has1x = true;}
                candidate.set = set;

                candidates.push(candidate);
            }
        } // (close parseDescriptors fn)

        /**
        * Tokenizes descriptor properties prior to parsing
        * Returns undefined.
        * (Again, this fn is defined before it is used, in order to pass JSHINT.
        * Unfortunately this breaks the logical sequencing of the spec comments. :/ )
        */
        function tokenize() {

            // 8.1. Descriptor tokeniser: Skip whitespace
            collectCharacters(regexLeadingSpaces);

            // 8.2. Let current descriptor be the empty string.
            currentDescriptor = "";

            // 8.3. Let state be in descriptor.
            state = "in descriptor";

            while (true) {

                // 8.4. Let c be the character at position.
                c = input.charAt(pos);

                //  Do the following depending on the value of state.
                //  For the purpose of this step, "EOF" is a special character representing
                //  that position is past the end of input.

                // In descriptor
                if (state === "in descriptor") {
                    // Do the following, depending on the value of c:

                  // Space character
                  // If current descriptor is not empty, append current descriptor to
                  // descriptors and let current descriptor be the empty string.
                  // Set state to after descriptor.
                    if (isSpace(c)) {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                            currentDescriptor = "";
                            state = "after descriptor";
                        }

                    // U+002C COMMA (,)
                    // Advance position to the next character in input. If current descriptor
                    // is not empty, append current descriptor to descriptors. Jump to the step
                    // labeled descriptor parser.
                    } else if (c === ",") {
                        pos += 1;
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;

                    // U+0028 LEFT PARENTHESIS (()
                    // Append c to current descriptor. Set state to in parens.
                    } else if (c === "\u0028") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in parens";

                    // EOF
                    // If current descriptor is not empty, append current descriptor to
                    // descriptors. Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        if (currentDescriptor) {
                            descriptors.push(currentDescriptor);
                        }
                        parseDescriptors();
                        return;

                    // Anything else
                    // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }
                // (end "in descriptor"

                // In parens
                } else if (state === "in parens") {

                    // U+0029 RIGHT PARENTHESIS ())
                    // Append c to current descriptor. Set state to in descriptor.
                    if (c === ")") {
                        currentDescriptor = currentDescriptor + c;
                        state = "in descriptor";

                    // EOF
                    // Append current descriptor to descriptors. Jump to the step labeled
                    // descriptor parser.
                    } else if (c === "") {
                        descriptors.push(currentDescriptor);
                        parseDescriptors();
                        return;

                    // Anything else
                    // Append c to current descriptor.
                    } else {
                        currentDescriptor = currentDescriptor + c;
                    }

                // After descriptor
                } else if (state === "after descriptor") {

                    // Do the following, depending on the value of c:
                    // Space character: Stay in this state.
                    if (isSpace(c)) {

                    // EOF: Jump to the step labeled descriptor parser.
                    } else if (c === "") {
                        parseDescriptors();
                        return;

                    // Anything else
                    // Set state to in descriptor. Set position to the previous character in input.
                    } else {
                        state = "in descriptor";
                        pos -= 1;

                    }
                }

                // Advance position to the next character in input.
                pos += 1;

            // Repeat this step.
            } // (close while true loop)
        }

        // 4. Splitting loop: Collect a sequence of characters that are space
        //    characters or U+002C COMMA characters. If any U+002C COMMA characters
        //    were collected, that is a parse error.
        while (true) {
            collectCharacters(regexLeadingCommasOrSpaces);

            // 5. If position is past the end of input, return candidates and abort these steps.
            if (pos >= inputLength) {
                return candidates; // (we're done, this is the sole return path)
            }

            // 6. Collect a sequence of characters that are not space characters,
            //    and let that be url.
            url = collectCharacters(regexLeadingNotSpaces);

            // 7. Let descriptors be a new empty list.
            descriptors = [];

            // 8. If url ends with a U+002C COMMA character (,), follow these substeps:
            //      (1). Remove all trailing U+002C COMMA characters from url. If this removed
            //         more than one character, that is a parse error.
            if (url.slice(-1) === ",") {
                url = url.replace(regexTrailingCommas, "");
                // (Jump ahead to step 9 to skip tokenization and just push the candidate).
                parseDescriptors();

            //  Otherwise, follow these substeps:
            } else {
                tokenize();
            } // (close else of step 8)

        // 16. Return to the step labeled splitting loop.
        } // (Close of big while loop.)
    }

    /*
     * Sizes Parser
     *
     * By Alex Bell |  MIT License
     *
     * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
     *
     * Reference algorithm at:
     * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
     *
     * Most comments are copied in directly from the spec
     * (except for comments in parens).
     *
     * Grammar is:
     * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
     * <source-size> = <media-condition> <source-size-value>
     * <source-size-value> = <length>
     * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
     *
     * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
     * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
     *
     * Returns the first valid <css-length> with a media condition that evaluates to true,
     * or "100vw" if all valid media conditions evaluate to false.
     *
     */

    function parseSizes(strValue) {

        // (Percentage CSS lengths are not allowed in this case, to avoid confusion:
        // https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
        // CSS allows a single optional plus or minus sign:
        // http://www.w3.org/TR/CSS2/syndata.html#numbers
        // CSS is ASCII case-insensitive:
        // http://www.w3.org/TR/CSS2/syndata.html#characters )
        // Spec allows exponential notation for <number> type:
        // http://dev.w3.org/csswg/css-values/#numbers
        var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

        // (This is a quick and lenient test. Because of optional unlimited-depth internal
        // grouping parens and strict spacing rules, this could get very complicated.)
        var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        var i;
        var unparsedSizesList;
        var unparsedSizesListLength;
        var unparsedSize;
        var lastComponentValue;
        var size;

        // UTILITY FUNCTIONS

        //  (Toy CSS parser. The goals here are:
        //  1) expansive test coverage without the weight of a full CSS parser.
        //  2) Avoiding regex wherever convenient.
        //  Quick tests: http://jsfiddle.net/gtntL4gr/3/
        //  Returns an array of arrays.)
        function parseComponentValues(str) {
            var chrctr;
            var component = "";
            var componentArray = [];
            var listArray = [];
            var parenDepth = 0;
            var pos = 0;
            var inComment = false;

            function pushComponent() {
                if (component) {
                    componentArray.push(component);
                    component = "";
                }
            }

            function pushComponentArray() {
                if (componentArray[0]) {
                    listArray.push(componentArray);
                    componentArray = [];
                }
            }

            // (Loop forwards from the beginning of the string.)
            while (true) {
                chrctr = str.charAt(pos);

                if (chrctr === "") { // ( End of string reached.)
                    pushComponent();
                    pushComponentArray();
                    return listArray;
                } else if (inComment) {
                    if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
                        inComment = false;
                        pos += 2;
                        pushComponent();
                        continue;
                    } else {
                        pos += 1; // (Skip all characters inside comments.)
                        continue;
                    }
                } else if (isSpace(chrctr)) {
                    // (If previous character in loop was also a space, or if
                    // at the beginning of the string, do not add space char to
                    // component.)
                    if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
                        pos += 1;
                        continue;
                    } else if (parenDepth === 0) {
                        pushComponent();
                        pos +=1;
                        continue;
                    } else {
                        // (Replace any space character with a plain space for legibility.)
                        chrctr = " ";
                    }
                } else if (chrctr === "(") {
                    parenDepth += 1;
                } else if (chrctr === ")") {
                    parenDepth -= 1;
                } else if (chrctr === ",") {
                    pushComponent();
                    pushComponentArray();
                    pos += 1;
                    continue;
                } else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
                    inComment = true;
                    pos += 2;
                    continue;
                }

                component = component + chrctr;
                pos += 1;
            }
        }

        function isValidNonNegativeSourceSizeValue(s) {
            if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
            if (regexCssCalc.test(s)) {return true;}
            // ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
            // "-0 is equivalent to 0 and is not a negative number." which means that
            // unitless zero and unitless negative zero must be accepted as special cases.)
            if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
            return false;
        }

        // When asked to parse a sizes attribute from an element, parse a
        // comma-separated list of component values from the value of the element's
        // sizes attribute (or the empty string, if the attribute is absent), and let
        // unparsed sizes list be the result.
        // http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

        unparsedSizesList = parseComponentValues(strValue);
        unparsedSizesListLength = unparsedSizesList.length;

        // For each unparsed size in unparsed sizes list:
        for (i = 0; i < unparsedSizesListLength; i++) {
            unparsedSize = unparsedSizesList[i];

            // 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
            // ( parseComponentValues() already omits spaces outside of parens. )

            // If unparsed size is now empty, that is a parse error; continue to the next
            // iteration of this algorithm.
            // ( parseComponentValues() won't push an empty array. )

            // 2. If the last component value in unparsed size is a valid non-negative
            // <source-size-value>, let size be its value and remove the component value
            // from unparsed size. Any CSS function other than the calc() function is
            // invalid. Otherwise, there is a parse error; continue to the next iteration
            // of this algorithm.
            // http://dev.w3.org/csswg/css-syntax/#parse-component-value
            lastComponentValue = unparsedSize[unparsedSize.length - 1];

            if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
                size = lastComponentValue;
                unparsedSize.pop();
            } else {
                continue;
            }

            // 3. Remove all consecutive <whitespace-token>s from the end of unparsed
            // size. If unparsed size is now empty, return size and exit this algorithm.
            // If this was not the last item in unparsed sizes list, that is a parse error.
            if (unparsedSize.length === 0) {
                return size;
            }

            // 4. Parse the remaining component values in unparsed size as a
            // <media-condition>. If it does not parse correctly, or it does parse
            // correctly but the <media-condition> evaluates to false, continue to the
            // next iteration of this algorithm.
            // (Parsing all possible compound media conditions in JS is heavy, complicated,
            // and the payoff is unclear. Is there ever an situation where the
            // media condition parses incorrectly but still somehow evaluates to true?
            // Can we just rely on the browser/polyfill to do it?)
            unparsedSize = unparsedSize.join(" ");
            if (!(pf.matchesMedia( unparsedSize ) ) ) {
                continue;
            }

            // 5. Return size and exit this algorithm.
            return size;
        }

        // If the above algorithm exhausts unparsed sizes list without returning a
        // size value, return 100vw.
        return "100vw";
    }

    // namespace
    pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

    // srcset support test
    pf.supSrcset = "srcset" in image;
    pf.supSizes = "sizes" in image;
    pf.supPicture = !!window.HTMLPictureElement;

    // UC browser does claim to support srcset and picture, but not sizes,
    // this extended test reveals the browser does support nothing
    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
        (function(image2) {
            image.srcset = "data:,a";
            image2.src = "data:,a";
            pf.supSrcset = image.complete === image2.complete;
            pf.supPicture = pf.supSrcset && pf.supPicture;
        })(document.createElement("img"));
    }

    // Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
    if (pf.supSrcset && !pf.supSizes) {

        (function() {
            var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
            var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            var img = document.createElement("img");
            var test = function() {
                var width = img.width;

                if (width === 2) {
                    pf.supSizes = true;
                }

                alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

                isSupportTestReady = true;
                // force async
                setTimeout(picturefill);
            };

            img.onload = test;
            img.onerror = test;
            img.setAttribute("sizes", "9px");

            img.srcset = width1 + " 1w," + width2 + " 9w";
            img.src = width1;
        })();

    } else {
        isSupportTestReady = true;
    }

    // using pf.qsa instead of dom traversing does scale much better,
    // especially on sites mixing responsive and non-responsive images
    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;

    /**
     * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
     */
    pf.DPR = (DPR  || 1 );
    pf.u = units;

    // container of supported mime types that one might need to qualify before using
    pf.types =  types;

    pf.setSize = noop;

    /**
     * Gets a string and returns the absolute URL
     * @param src
     * @returns {String} absolute URL
     */

    pf.makeUrl = memoize(function(src) {
        anchor.href = src;
        return anchor.href;
    });

    /**
     * Gets a DOM element or document and a selctor and returns the found matches
     * Can be extended with jQuery/Sizzle for IE7 support
     * @param context
     * @param sel
     * @returns {NodeList|Array}
     */
    pf.qsa = function(context, sel) {
        return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
    };

    /**
     * Shortcut method for matchMedia ( for easy overriding in tests )
     * wether native or pf.mMQ is used will be decided lazy on first call
     * @returns {boolean}
     */
    pf.matchesMedia = function() {
        if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
            pf.matchesMedia = function( media ) {
                return !media || ( matchMedia( media ).matches );
            };
        } else {
            pf.matchesMedia = pf.mMQ;
        }

        return pf.matchesMedia.apply( this, arguments );
    };

    /**
     * A simplified matchMedia implementation for IE8 and IE9
     * handles only min-width/max-width with px or em values
     * @param media
     * @returns {boolean}
     */
    pf.mMQ = function( media ) {
        return media ? evalCSS(media) : true;
    };

    /**
     * Returns the calculated length in css pixel from the given sourceSizeValue
     * http://dev.w3.org/csswg/css-values-3/#length-value
     * intended Spec mismatches:
     * * Does not check for invalid use of CSS functions
     * * Does handle a computed length of 0 the same as a negative and therefore invalid value
     * @param sourceSizeValue
     * @returns {Number}
     */
    pf.calcLength = function( sourceSizeValue ) {

        var value = evalCSS(sourceSizeValue, true) || false;
        if (value < 0) {
            value = false;
        }

        return value;
    };

    /**
     * Takes a type string and checks if its supported
     */

    pf.supportsType = function( type ) {
        return ( type ) ? types[ type ] : true;
    };

    /**
     * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
     * @param sourceSizeStr
     * @returns {*}
     */
    pf.parseSize = memoize(function( sourceSizeStr ) {
        var match = ( sourceSizeStr || "" ).match(regSize);
        return {
            media: match && match[1],
            length: match && match[2]
        };
    });

    pf.parseSet = function( set ) {
        if ( !set.cands ) {
            set.cands = parseSrcset(set.srcset, set);
        }
        return set.cands;
    };

    /**
     * returns 1em in css px for html/body default size
     * function taken from respondjs
     * @returns {*|number}
     */
    pf.getEmValue = function() {
        var body;
        if ( !eminpx && (body = document.body) ) {
            var div = document.createElement( "div" ),
                originalHTMLCSS = docElem.style.cssText,
                originalBodyCSS = body.style.cssText;

            div.style.cssText = baseStyle;

            // 1em in a media query is the value of the default font size of the browser
            // reset docElem and body to ensure the correct value is returned
            docElem.style.cssText = fsCss;
            body.style.cssText = fsCss;

            body.appendChild( div );
            eminpx = div.offsetWidth;
            body.removeChild( div );

            //also update eminpx before returning
            eminpx = parseFloat( eminpx, 10 );

            // restore the original values
            docElem.style.cssText = originalHTMLCSS;
            body.style.cssText = originalBodyCSS;

        }
        return eminpx || 16;
    };

    /**
     * Takes a string of sizes and returns the width in pixels as a number
     */
    pf.calcListLength = function( sourceSizeListStr ) {
        // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
        //
        //                           or (min-width:30em) calc(30% - 15px)
        if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
            var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

            sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
        }

        return sizeLengthCache[ sourceSizeListStr ];
    };

    /**
     * Takes a candidate object with a srcset property in the form of url/
     * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
     *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
     *     "images/pic-small.png"
     * Get an array of image candidates in the form of
     *      {url: "/foo/bar.png", resolution: 1}
     * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
     * If sizes is specified, res is calculated
     */
    pf.setRes = function( set ) {
        var candidates;
        if ( set ) {

            candidates = pf.parseSet( set );

            for ( var i = 0, len = candidates.length; i < len; i++ ) {
                setResolution( candidates[ i ], set.sizes );
            }
        }
        return candidates;
    };

    pf.setRes.res = setResolution;

    pf.applySetCandidate = function( candidates, img ) {
        if ( !candidates.length ) {return;}
        var candidate,
            i,
            j,
            length,
            bestCandidate,
            curSrc,
            curCan,
            candidateSrc,
            abortCurSrc;

        var imageData = img[ pf.ns ];
        var dpr = pf.DPR;

        curSrc = imageData.curSrc || img[curSrcProp];

        curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

        // if we have a current source, we might either become lazy or give this source some advantage
        if ( curCan && curCan.set === candidates[ 0 ].set ) {

            // if browser can abort image request and the image has a higher pixel density than needed
            // and this image isn't downloaded yet, we skip next part and try to save bandwidth
            abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

            if ( !abortCurSrc ) {
                curCan.cached = true;

                // if current candidate is "best", "better" or "okay",
                // set it to bestCandidate
                if ( curCan.res >= dpr ) {
                    bestCandidate = curCan;
                }
            }
        }

        if ( !bestCandidate ) {

            candidates.sort( ascendingSort );

            length = candidates.length;
            bestCandidate = candidates[ length - 1 ];

            for ( i = 0; i < length; i++ ) {
                candidate = candidates[ i ];
                if ( candidate.res >= dpr ) {
                    j = i - 1;

                    // we have found the perfect candidate,
                    // but let's improve this a little bit with some assumptions ;-)
                    if (candidates[ j ] &&
                        (abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
                        chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

                        bestCandidate = candidates[ j ];

                    } else {
                        bestCandidate = candidate;
                    }
                    break;
                }
            }
        }

        if ( bestCandidate ) {

            candidateSrc = pf.makeUrl( bestCandidate.url );

            imageData.curSrc = candidateSrc;
            imageData.curCan = bestCandidate;

            if ( candidateSrc !== curSrc ) {
                pf.setSrc( img, bestCandidate );
            }
            pf.setSize( img );
        }
    };

    pf.setSrc = function( img, bestCandidate ) {
        var origWidth;
        img.src = bestCandidate.url;

        // although this is a specific Safari issue, we don't want to take too much different code paths
        if ( bestCandidate.set.type === "image/svg+xml" ) {
            origWidth = img.style.width;
            img.style.width = (img.offsetWidth + 1) + "px";

            // next line only should trigger a repaint
            // if... is only done to trick dead code removal
            if ( img.offsetWidth + 1 ) {
                img.style.width = origWidth;
            }
        }
    };

    pf.getSet = function( img ) {
        var i, set, supportsType;
        var match = false;
        var sets = img [ pf.ns ].sets;

        for ( i = 0; i < sets.length && !match; i++ ) {
            set = sets[i];

            if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
                continue;
            }

            if ( supportsType === "pending" ) {
                set = supportsType;
            }

            match = set;
            break;
        }

        return match;
    };

    pf.parseSets = function( element, parent, options ) {
        var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

        var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
        var imageData = element[ pf.ns ];

        if ( imageData.src === undefined || options.src ) {
            imageData.src = getImgAttr.call( element, "src" );
            if ( imageData.src ) {
                setImgAttr.call( element, srcAttr, imageData.src );
            } else {
                removeImgAttr.call( element, srcAttr );
            }
        }

        if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
            srcsetAttribute = getImgAttr.call( element, "srcset" );
            imageData.srcset = srcsetAttribute;
            srcsetParsed = true;
        }

        imageData.sets = [];

        if ( hasPicture ) {
            imageData.pic = true;
            getAllSourceElements( parent, imageData.sets );
        }

        if ( imageData.srcset ) {
            imageSet = {
                srcset: imageData.srcset,
                sizes: getImgAttr.call( element, "sizes" )
            };

            imageData.sets.push( imageSet );

            isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

            // add normal src as candidate, if source has no w descriptor
            if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
                imageSet.srcset += ", " + imageData.src;
                imageSet.cands.push({
                    url: imageData.src,
                    d: 1,
                    set: imageSet
                });
            }

        } else if ( imageData.src ) {
            imageData.sets.push( {
                srcset: imageData.src,
                sizes: null
            } );
        }

        imageData.curCan = null;
        imageData.curSrc = undefined;

        // if img has picture or the srcset was removed or has a srcset and does not support srcset at all
        // or has a w descriptor (and does not support sizes) set support to false to evaluate
        imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

        if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
            if ( srcsetAttribute ) {
                setImgAttr.call( element, srcsetAttr, srcsetAttribute );
                element.srcset = "";
            } else {
                removeImgAttr.call( element, srcsetAttr );
            }
        }

        if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
            if (imageData.src === null) {
                element.removeAttribute("src");
            } else {
                element.src = imageData.src;
            }
        }

        imageData.parsed = true;
    };

    pf.fillImg = function(element, options) {
        var imageData;
        var extreme = options.reselect || options.reevaluate;

        // expando for caching data on the img
        if ( !element[ pf.ns ] ) {
            element[ pf.ns ] = {};
        }

        imageData = element[ pf.ns ];

        // if the element has already been evaluated, skip it
        // unless `options.reevaluate` is set to true ( this, for example,
        // is set to true when running `picturefill` on `resize` ).
        if ( !extreme && imageData.evaled === evalId ) {
            return;
        }

        if ( !imageData.parsed || options.reevaluate ) {
            pf.parseSets( element, element.parentNode, options );
        }

        if ( !imageData.supported ) {
            applyBestCandidate( element );
        } else {
            imageData.evaled = evalId;
        }
    };

    pf.setupRun = function() {
        if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
            updateMetrics();
        }
    };

    // If picture is supported, well, that's awesome.
    if ( pf.supPicture ) {
        picturefill = noop;
        pf.fillImg = noop;
    } else {

         // Set up picture polyfill by polling the document
        (function() {
            var isDomReady;
            var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

            var run = function() {
                var readyState = document.readyState || "";

                timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
                if ( document.body ) {
                    pf.fillImgs();
                    isDomReady = isDomReady || regReady.test(readyState);
                    if ( isDomReady ) {
                        clearTimeout( timerId );
                    }

                }
            };

            var timerId = setTimeout(run, document.body ? 9 : 99);

            // Also attach picturefill on resize and readystatechange
            // http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
            var debounce = function(func, wait) {
                var timeout, timestamp;
                var later = function() {
                    var last = (new Date()) - timestamp;

                    if (last < wait) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        func();
                    }
                };

                return function() {
                    timestamp = new Date();

                    if (!timeout) {
                        timeout = setTimeout(later, wait);
                    }
                };
            };
            var lastClientWidth = docElem.clientHeight;
            var onResize = function() {
                isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
                lastClientWidth = docElem.clientHeight;
                if ( isVwDirty ) {
                    pf.fillImgs();
                }
            };

            on( window, "resize", debounce(onResize, 99 ) );
            on( document, "readystatechange", run );
        })();
    }

    pf.picturefill = picturefill;
    //use this internally for easy monkey patching/performance testing
    pf.fillImgs = picturefill;
    pf.teardownRun = noop;

    /* expose methods for testing */
    picturefill._ = pf;

    window.picturefillCFG = {
        pf: pf,
        push: function(args) {
            var name = args.shift();
            if (typeof pf[name] === "function") {
                pf[name].apply(pf, args);
            } else {
                cfg[name] = args[0];
                if (alreadyRun) {
                    pf.fillImgs( { reselect: true } );
                }
            }
        }
    };

    while (setOptions && setOptions.length) {
        window.picturefillCFG.push(setOptions.shift());
    }

    /* expose picturefill */
    window.picturefill = picturefill;

    /* expose picturefill */
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // CommonJS, just export
        module.exports = picturefill;
    } else if ( typeof define === "function" && define.amd ) {
        // AMD support
        define( "picturefill", function() { return picturefill; } );
    }

    // IE8 evals this sync, so it must be the last thing we do
    if ( !pf.supPicture ) {
        types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
    }

} )( window, document );
