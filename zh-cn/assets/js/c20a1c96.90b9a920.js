"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62465],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(i,".").concat(d)]||u[d]||o[d]||s;return n?a.createElement(y,l(l({ref:e},c),{},{components:n})):a.createElement(y,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var m=2;m<s;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19800:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],p={},i=void 0,m={unversionedId:"api/plugin-matterjs.physicssystem",id:"api/plugin-matterjs.physicssystem",isDocsHomePage:!1,title:"plugin-matterjs.physicssystem",description:"Home &gt; @eva/plugin-matterjs &gt; PhysicsSystem",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/plugin-matterjs.physicssystem.md",sourceDirName:"api",slug:"/api/plugin-matterjs.physicssystem",permalink:"/zh-cn/docs/api/plugin-matterjs.physicssystem",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/api/plugin-matterjs.physicssystem.md",tags:[],version:"current",frontMatter:{}},c=[{value:"PhysicsSystem class",id:"physicssystem-class",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],o={toc:c};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,s.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/index"},"Home")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/plugin-matterjs"},"@eva/plugin-matterjs")," ",">"," ",(0,s.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem"},"PhysicsSystem")),(0,s.kt)("h2",{id:"physicssystem-class"},"PhysicsSystem class"),(0,s.kt)("b",null,"Signature:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class PhysicsSystem extends System<PhysicsSystemParams> \n")),(0,s.kt)("b",null,"Extends:")," System<[PhysicsSystemParams](/zh-cn/docs/api/plugin-matterjs.physicssystemparams)>",(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Property"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.systemname"},"systemName")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("code",null,"static")),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method"),(0,s.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.awake"},"awake()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.componentchanged"},"componentChanged(changed)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.init"},"init(param)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.lateupdate"},"lateUpdate()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.ondestroy"},"onDestroy()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.onpause"},"onPause()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.onresume"},"onResume()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.start"},"start()")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/plugin-matterjs.physicssystem.update"},"update(e)")),(0,s.kt)("td",{parentName:"tr",align:null}),(0,s.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);