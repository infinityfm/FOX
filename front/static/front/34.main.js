(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{766:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(24),u=r(95),i=r(165),c=r(632),l=r.n(c),f=r(26),s=r(166);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function u(e){d(o,n,a,u,i,"next",e)}function i(e){d(o,n,a,u,i,"throw",e)}u(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var a=E(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=new f.a,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(r,e);var t=_(r);function r(){var e;b(this,r);for(var n=arguments.length,u=new Array(n),c=0;c<n;c++)u[c]=arguments[c];return S(w(e=t.call.apply(t,[this].concat(u))),"state",{personal_declaration_template:"",safety_quiz_template:"",safety_video_url:"",error:!1}),S(w(e),"handleChange",(function(t){e.setState(S({},t.target.name,t.target.value))})),S(w(e),"handleFileUpload",(function(t){e.setState(S({},t.target.name,t.target.files[0]))})),S(w(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),e.requestData=e.state,delete e.requestData.error,e.formData=new FormData,Object.entries(e.requestData).forEach((function(t){var r=m(t,2),n=r[0],a=r[1];e.formData.append(n,a)})),t.next=7,O.patchCompanySafetyInfo(e.props.company,e.formData).then((function(){e.props.history.push("/safety/video")}),(function(t){console.error(t),e.setState({error:"Safety info upload failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S(w(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch();case 2:case"end":return t.stop()}}),t)})))),S(w(e),"render",(function(){return"CliAdm"===e.props.role?a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.B,{onSubmit:e.handleSubmit},a.a.createElement(l.a,null),a.a.createElement(i.C,null,a.a.createElement(i.Q,{htmlFor:"safety_video_url"},"Url to document"),a.a.createElement(i.J,{type:"url",id:"safety_video_url",name:"safety_video_url",placeholder:"https://example.com",pattern:"https://.*",value:e.state.safety_video_url,onChange:e.handleChange,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.Q,{htmlFor:"safety_quiz_template"},"Safety Quiz Template"),a.a.createElement(i.L,{id:"safety_quiz_template",name:"safety_quiz_template",onChange:e.handleFileUpload,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.Q,{htmlFor:"personal_declaration_template"},"Personal Declaration Template:"),a.a.createElement(i.L,{id:"personal_declaration_template",name:"personal_declaration_template",onChange:e.handleFileUpload,required:!0})),a.a.createElement(i.C,null,a.a.createElement(i.e,{type:"submit",color:"dark",variant:"outline",block:!0},"Submit safety info")),e.state.error?a.a.createElement("p",null,e.state.error):null),a.a.createElement(i.R,{to:"/safety/video"},"Inspect preview"))):a.a.createElement(o.a,{to:"/safety/video"})})),e}return r}(n.Component);t.default=Object(u.b)((function(e){return{role:e.currentUser.role,company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(s.h)())}}}))(Object(o.h)(j))}}]);
//# sourceMappingURL=34.main.js.map