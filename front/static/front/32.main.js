(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{757:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(95),c=n(24),i=n(166),u=n(165);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){s(a,r,o,c,i,"next",e)}function i(e){s(a,r,o,c,i,"throw",e)}c(void 0)}))}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=new(n(29).a),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=b(n);function n(){var e;y(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return O(h(e=t.call.apply(t,[this].concat(a))),"state",{name:"",file:"",personal_declaration_template:"",safety_quiz_template:"",safety_video_url:""}),O(h(e),"downloadFile",function(){var t=m(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({filename:n.target.value,doc_type:n.target.name},(function(){_.downloadSafetyTemplate(e.state.doc_type).then((function(t){var n=window.URL.createObjectURL(new Blob([t])),r=document.createElement("a");r.href=n;var o=e.state.filename.split("/").pop();r.setAttribute("download",o),document.body.appendChild(r),r.click(),r.parentNode.removeChild(r)})).then((function(){console.log("file downloaded")})).catch((function(e){console.error("File download failed!"),console.error(e)}))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O(h(e),"componentDidMount",(function(){e.props.getProfileFetch().then((function(){return _.getCompanySafetyInfo(e.props.company)})).then((function(t){e.setState(p({},t))}))})),O(h(e),"render",(function(){return e.props.username?o.a.createElement(o.a.Fragment,null,o.a.createElement(u.U,null,o.a.createElement(u.k,null,o.a.createElement(u.e,{className:"mr-3 mb-3",variant:"outline",color:"info",id:e.state.personal_declaration_template,name:"personal_declaration_template",value:e.state.personal_declaration_template,onClick:e.downloadFile},"Personal Declaration Template"),o.a.createElement(u.e,{className:"mr-3 mb-3",variant:"outline",color:"info",id:e.state.safety_quiz_template,name:"safety_quiz_template",value:e.state.safety_quiz_template,onClick:e.downloadFile},"Safety Quiz Template"))),o.a.createElement(u.U,null,o.a.createElement(u.k,null,o.a.createElement(u.t,{ratio:"16by9"},o.a.createElement("iframe",{src:e.state.safety_video_url,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))):o.a.createElement(c.a,{to:""})})),e}return n}(r.Component);t.default=Object(a.b)((function(e){return{username:e.currentUser.username,company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(i.g)())}}}))(g)}}]);
//# sourceMappingURL=32.main.js.map