(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,y=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return r?a.a.createElement(y,c(c({ref:t},u),{},{components:r})):a.a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(113)),o={id:"scalability",title:"Scalability"},c={unversionedId:"lightpaper/architecture/scalability",id:"lightpaper/architecture/scalability",isDocsHomePage:!1,title:"Scalability",description:"Subsocial allows communities to create their own space on top of the Subsocial chain, such that",source:"@site/docs/lightpaper/architecture/Scalability.md",slug:"/lightpaper/architecture/scalability",permalink:"/docs/lightpaper/architecture/scalability",editUrl:"https://github.com/f3joule/f3joule.github.io/docs/lightpaper/architecture/Scalability.md",version:"current",sidebar:"someSidebar",previous:{title:"Spaces as DAOs",permalink:"/docs/lightpaper/architecture/spaces-as-DAOs"},next:{title:"Upgradability",permalink:"/docs/lightpaper/architecture/upgradability"}},l=[],u={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Subsocial allows communities to create their own space on top of the Subsocial chain, such that\nall communities share the same underlying blockchain. This provides shared network effects:\nusers will be able to seamlessly join any community on any alternative clients for Subsocial. In\naddition, anyone with a Polkadot or Kusama address can easily join a Subsocial community."))}s.isMDXComponent=!0}}]);