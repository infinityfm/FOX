(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{636:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return j}));var r=n(634),o=n(1),a=n.n(o),c=n(95),i=n(165),u=n(60),l=n(633),s=n(26),f=n(635);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){b(a,r,o,c,i,"next",e)}function i(e){b(a,r,o,c,i,"throw",e)}c(void 0)}))}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=new s.a,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,e);var t=g(n);function n(){var e;d(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return E(w(e=t.call.apply(t,[this].concat(o))),"state",{delete_id:"",error:"",modal:!1}),E(w(e),"getEntityFromTableName",(function(){e.props.tableName.toLowercase()})),E(w(e),"callDeleteModal",(function(t){e.setState({delete_id:t},e.setModalVisibility)})),E(w(e),"setModalVisibility",(function(){e.setState({modal:!e.state.modal})})),E(w(e),"confirmDelete",function(){var t=m(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.props.tableName.toLowerCase().replace(" ","_"),t.next=3,P.deleteEntityOf(r,n).then((function(){e.props.updateList(e.props.role),e.setModalVisibility()})).catch((function(t){console.error(t),e.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E(w(e),"alertOnClick",(function(t,n){e.props.history.push("".concat(e.props.match.url,"/").concat(t))})),E(w(e),"render",(function(){var t,n=e.props.fields?e.props.fields[0]:"username",r=e.state,o=r.delete_id,c=r.modal;return a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,e.props.tableName),"Projects"===e.props.tableName&&"Contr"===e.props.role?null:a.a.createElement(i.R,{className:"btn btn-pill btn-outline-success",to:"".concat(e.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:e.props.tableData?e.props.tableData:[],fields:e.props.fields,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(t={},E(t,n,(function(t){return a.a.createElement("td",null,a.a.createElement(i.R,{to:"".concat(e.props.match.url,"/").concat(t.id)},t[n]))})),E(t,"application_status",(function(t){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:e.props.getBadge(t.application_status)},t.application_status))})),E(t,"work_status",(function(t){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:e.props.getBadge(t.work_status)},t.work_status),a.a.createElement(l.a,y({key:t.id,item:t},e.props)))})),E(t,"delete_item",(function(t,n){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return e.callDeleteModal(t.id)},block:!0},a.a.createElement(u.a,{name:"cilTrash"})))})),t)}))),a.a.createElement(f.a,{setModalVisibility:e.setModalVisibility,danger:c,entity:"entity",confirmDelete:function(){return e.confirmDelete(o)}})))})),e}return n}(o.Component),j=Object(c.b)((function(e){return{role:e.currentUser.role}}),null)(_)},747:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(636),c=n(166),i=n(95);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){s(a,r,o,c,i,"next",e)}function i(e){s(a,r,o,c,i,"throw",e)}c(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=b(n);function n(){var e;p(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return g(d(e=t.call.apply(t,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return e.props.getClientManagerList(e.props.role)}));case 2:case"end":return t.stop()}}),t)})))),g(d(e),"render",(function(){return"CliAdm"==e.props.role?o.a.createElement(a.b,l({},e.props,{tableName:"Managers",fields:e.props.clientManagerTable.fields,getBadge:v,tableData:e.props.clientManagerTable.tableData,updateList:e.props.getClientManagerList})):o.a.createElement(a.a,l({},e.props,{updateList:e.props.getClientManagerList,tableName:"Managers",fields:e.props.clientManagerTable.fields,getBadge:v,tableData:e.props.clientManagerTable.tableData}))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{clientManagerTable:e.entityListTable,role:e.currentUser.role}}),(function(e){return{getProfileFetch:function(){return e(Object(c.h)())},getClientManagerList:function(t){return e(Object(c.c)(t))}}}))(w)}}]);
//# sourceMappingURL=16.main.js.map