(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,a,n){"use strict";n.d(a,"a",(function(){return l})),n.d(a,"b",(function(){return b}));var r=n(0),t=n.n(r);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=t.a.createContext({}),p=function(e){var a=t.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},l=function(e){var a=p(e.components);return t.a.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},m=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?t.a.createElement(b,i(i({ref:a},u),{},{components:n})):t.a.createElement(b,i({ref:a},u))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.a.createElement.apply(null,c)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return i})),n.d(a,"toc",(function(){return s})),n.d(a,"default",(function(){return p}));var r=n(3),t=n(7),o=(n(0),n(113)),c={id:"parachain-vs-parathread",title:"Parachain frente a Parathread"},i={unversionedId:"tokenomics/parachain-vs-parathread",id:"tokenomics/parachain-vs-parathread",isDocsHomePage:!1,title:"Parachain frente a Parathread",description:"Una cadena desarrollada con Substrate puede a lo largo de su vida adoptar uno de estos tres estados: una cadena independiente con un puente seguro, una parachain o una parathread. (fuente)",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/current/tokenomics/Parachain-vs-parathread.md",slug:"/tokenomics/parachain-vs-parathread",permalink:"/es-ES/docs/tokenomics/parachain-vs-parathread",editUrl:"https://github.com/f3joule/f3joule.github.io/docs/tokenomics/Parachain-vs-parathread.md",version:"current",sidebar:"someSidebar",previous:{title:"Tesorer\xeda",permalink:"/es-ES/docs/tokenomics/treasury"},next:{title:"Recursos",permalink:"/es-ES/docs/tokenomics/resources"}},s=[],u={toc:s};function p(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Una cadena desarrollada con Substrate puede a lo largo de su vida adoptar uno de estos tres estados: una cadena independiente con un puente seguro, una parachain o una parathread. (",Object(o.b)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/ru/learn-parathreads"},"fuente"),")")),Object(o.b)("p",null,"Subsocial est\xe1 planeando ser una parachain de Kusama, en caso de tener \xe9xito entonces consideraremos la posibilidad de lanzar tambi\xe9n una parachain en Polkadot, aunque no garantizamos que esto llegue a suceder."),Object(o.b)("p",null,"Si Subsocial no tiene \xe9xito en el lanzamiento de la parachain, entonces consideraremos la posibilidad del lanzamiento como un parathread. En ese caso, no se generar\xe1n tokens para los usuarios participantes en la PLO (ya que no tuvo \xe9xito la parachain)."),Object(o.b)("p",null,"Como parathread necesitar\xedamos comprar KSM o DOT para pagar la inclusi\xf3n de los bloques. Para cubrir este coste, una opci\xf3n ser\xeda vender nuestro token nativo."))}p.isMDXComponent=!0}}]);