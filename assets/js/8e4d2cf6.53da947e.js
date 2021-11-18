"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21730],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31386:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},s="Transform",l={unversionedId:"tutorials/transformComponent",id:"tutorials/transformComponent",isDocsHomePage:!1,title:"Transform",description:"Transform is a default component. Each GameObject creates a Transform component instance by default, which is used to control the size, position, scaling, bevel, rotation and other properties of the game object.",source:"@site/docs/tutorials/transformComponent.md",sourceDirName:"tutorials",slug:"/tutorials/transformComponent",permalink:"/docs/tutorials/transformComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/transformComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GameObject",permalink:"/docs/tutorials/gameObject"},next:{title:"compressedTexture",permalink:"/docs/tutorials/compressedTexture"}},p=[{value:"Usage",id:"usage",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"Transform"),(0,a.kt)("p",null,"Transform is a default component. Each GameObject creates a Transform component instance by default, which is used to control the size, position, scaling, bevel, rotation and other properties of the game object."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// The second parameter is the parameter of the Transform component\nconst gameObject = new GameObject('empty', {\n  size: {width: 100, height: 100 }, // size\n  position: {x: 0, y: 0 }, // displacement\n  origin: {x: 0, y: 0 }, // the origin of the object (a point inside the object)\n  anchor: {x: 0, y: 0 }, // anchor point, a point relative to the ratio of the parent's width to height, the origin of the object will be displaced relative to this point\n  scale: {x: 1, y: 1 }, // zoom ratio\n  skew: {x: 0, y: 0 }, // skew radians\n  rotation: 0 // Rotate in radians\n})\n")),(0,a.kt)("p",null,"Because the transform object is very commonly used, we can get the component through ",(0,a.kt)("inlineCode",{parentName:"p"},"gameObject.transform"),", for example, modify the width and height of the game object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"gameObject.transform.size.width = 200\ngameObject.transform.size.height = 200\n")),(0,a.kt)("p",null,"Origin and anchor can help us solve common positioning problems, such as game operation keys, which are a certain percentage of the distance from the lower right corner under various screen sizes. You can take a look at this ",(0,a.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/anchor"},"Demo"),", the green dots are the anchor points of origin and anchor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const outter = new GameObject('out', {\n  size: {\n    width: 750,\n    height: 1000\n  }\n})\n\nconst inner = new GameObject('inner', {\n  size: {\n    width: 100,\n    height: 100\n  },\n  anchor: {\n    // Set the anchor point to the position of 0.8 of the width and height of the parent element\n    x: 0.8,\n    y: 0.8\n  },\n  origin: {\n    // Set the origin to the lower right corner, so that the lower right corner of the object will be aligned with the position of the parent element (0.8, 0.8)\n    x: 1,\n    y: 1\n  }\n})\n")))}m.isMDXComponent=!0}}]);