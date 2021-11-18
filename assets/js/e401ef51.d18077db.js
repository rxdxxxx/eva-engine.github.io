"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,s=y["".concat(u,".").concat(d)]||y[d]||m[d]||i;return n?r.createElement(s,l(l({ref:t},p),{},{components:n})):r.createElement(s,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},21739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return y}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},u=void 0,c={unversionedId:"api/plugin-a11y.a11yactivate",id:"api/plugin-a11y.a11yactivate",isDocsHomePage:!1,title:"plugin-a11y.a11yactivate",description:"Home &gt; @eva/plugin-a11y &gt; A11yActivate",source:"@site/docs/api/plugin-a11y.a11yactivate.md",sourceDirName:"api",slug:"/api/plugin-a11y.a11yactivate",permalink:"/docs/api/plugin-a11y.a11yactivate",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/api/plugin-a11y.a11yactivate.md",tags:[],version:"current",frontMatter:{}},p=[{value:"A11yActivate enum",id:"a11yactivate-enum",children:[],level:2},{value:"Enumeration Members",id:"enumeration-members",children:[],level:2}],m={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/plugin-a11y"},"@eva/plugin-a11y")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/plugin-a11y.a11yactivate"},"A11yActivate")),(0,i.kt)("h2",{id:"a11yactivate-enum"},"A11yActivate enum"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare enum A11yActivate \n")),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Member"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CHECK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"2")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DISABLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"1")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ENABLE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"0")),(0,i.kt)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);