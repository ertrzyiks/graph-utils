(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"8ypT":function(t,e,r){},Bl7J:function(t,e,r){"use strict";var n=r("f98A"),o=r("ERkP"),a=r.n(o),i=r("Wbzz"),c=function(t){var e=t.siteTitle;return a.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};c.defaultProps={siteTitle:""};var u=c;r("8ypT"),e.a=function(t){var e=t.children,r=n.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,e),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},F0GY:function(t,e){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!t(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],i.get(u.value[0])))return!1;return!0}if(o&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],i[s[u]]))return!1;return!0}return e!=e&&i!=i}(t,e)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},Vgyk:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return ht}));var n,o,a,i,c=r("aWzz"),u=r.n(c),s=r("rqe8"),l=r.n(s),f=r("F0GY"),p=r.n(f),d=r("ERkP"),y=r.n(d),h=r("6qGY"),m=r.n(h),b="bodyAttributes",T="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),A="cssText",E="href",O="http-equiv",C="innerHTML",S="itemprop",j="name",k="property",P="rel",x="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",N="encodeSpecialCharacters",D="onChangeClientState",B="titleTemplate",F=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),_=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},K=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},G=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=X(t,v.TITLE),r=X(t,B);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=X(t,M);return e||n||void 0},W=function(t){return X(t,D)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return z({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==t.indexOf(a)&&r[a])return e.concat(r)}return e}),[])},Q=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+q(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,a=Object.keys(t),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===e.indexOf(u)||r===P&&"canonical"===t[r].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||c!==C&&c!==A&&c!==S||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=m()({},n[c],o[c]);n[c]=u}return t}),[]).reverse()},X=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},Z=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){Z(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:t.requestAnimationFrame||Z,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,at=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(v.BODY,n),ut(v.HTML,o),ct(f,p);var d={baseTag:st(v.BASE,r),linkTags:st(v.LINK,a),metaTags:st(v.META,i),noscriptTags:st(v.NOSCRIPT,c),scriptTags:st(v.SCRIPT,s),styleTags:st(v.STYLE,l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(y[t]=r),n.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ut(v.TITLE,e)},ut=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],s=e[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=a.indexOf(u);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},st=function(t,e){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===C)r.innerHTML=e.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(t,e){return i=e,r.isEqualNode(t)}))?o.splice(i,1):a.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[I[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})["data-react-helmet"]=!0,o=ft(r,n),[y.a.createElement(v.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),a=it(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+G(a,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+G(a,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case b:case T:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(t){var r=I[t]||t;if(r===C||r===A){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===C||t===A)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+G(n[e],r)+'"';return t?t+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===_.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(v.BASE,e,n),bodyAttributes:pt(b,r,n),htmlAttributes:pt(T,o,n),link:pt(v.LINK,a,n),meta:pt(v.META,i,n),noscript:pt(v.NOSCRIPT,c,n),script:pt(v.SCRIPT,u,n),style:pt(v.STYLE,s,n),title:pt(v.TITLE,{title:f,titleAttributes:p},n)}},yt=l()((function(t){return{baseTag:$([E,L],t),bodyAttributes:J(b,t),defer:X(t,R),encode:X(t,N),htmlAttributes:J(T,t),linkTags:Q(v.LINK,[P,E],t),metaTags:Q(v.META,[j,w,O,k,S],t),noscriptTags:Q(v.NOSCRIPT,[C],t),onChangeClientState:W(t),scriptTags:Q(v.SCRIPT,[x,C],t),styleTags:Q(v.STYLE,[A],t),title:V(t),titleAttributes:J(g,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){at(t,(function(){ot=null}))})):(at(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,i=a=function(t){function e(){return Y(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return z({},n,((e={})[r.type]=[].concat(n[r.type]||[],[z({},o,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(n.type){case v.TITLE:return z({},o,((e={})[n.type]=i,e.titleAttributes=z({},a),e));case v.BODY:return z({},o,{bodyAttributes:z({},a)});case v.HTML:return z({},o,{htmlAttributes:z({},a)})}return z({},o,((r={})[n.type]=z({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=z({},e);return Object.keys(t).forEach((function(e){var n;r=z({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[F[r]||r]=t[r],e}),e)}(K(o,["children"]));switch(r.warnOnInvalidChildren(t,a),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=K(t,["children"]),n=z({},r);return e&&(n=this.mapChildrenToProps(e,n)),y.a.createElement(o,n)},H(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);ht.renderStatic=ht.rewind}).call(this,r("fRV1"))},f98A:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}')},fRV1:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}t.exports=r},rqe8:function(t,e,r){"use strict";var n,o=r("ERkP"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):r&&(u=r(u))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},vrFN:function(t,e,r){"use strict";var n=r("51K9"),o=r("ERkP"),a=r.n(o),i=r("Vgyk");function c(t){var e=t.description,r=t.lang,o=t.meta,c=t.title,u=n.data.site,s=e||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c}}]);
//# sourceMappingURL=commons-622fc6d14af72339a637.js.map