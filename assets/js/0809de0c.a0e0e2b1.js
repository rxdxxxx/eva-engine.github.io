"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11282],{3905:function(e,r,n){n.d(r,{Zo:function(){return i},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},i=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(g,s(s({ref:r},i),{},{components:n})):t.createElement(g,s({ref:r},i))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59088:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],c={},u="Resource Management",l={unversionedId:"tutorials/resourceManagement",id:"tutorials/resourceManagement",isDocsHomePage:!1,title:"Resource Management",description:"All resources used in the game will be managed by the resource manager. Before using the resource, you need to add the resource to the resource manager, and set a resource name for the resource, and use the resource name directly when needed. The benefits of this:",source:"@site/docs/tutorials/resourceManagement.md",sourceDirName:"tutorials",slug:"/tutorials/resourceManagement",permalink:"/docs/tutorials/resourceManagement",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/resourceManagement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/tutorials/quickstart"},next:{title:"Game",permalink:"/docs/tutorials/game"}},i=[{value:"Add resource",id:"add-resource",children:[],level:2},{value:"Resource preload",id:"resource-preload",children:[],level:2},{value:"Access to resources",id:"access-to-resources",children:[{value:"getResource(resourceName)",id:"getresourceresourcename",children:[],level:3},{value:"loadSingle(resource)",id:"loadsingleresource",children:[],level:3},{value:"Resource processing",id:"resource-processing",children:[],level:3},{value:"Resource destruction",id:"resource-destruction",children:[],level:3},{value:"Load timeout event settings",id:"load-timeout-event-settings",children:[],level:3}],level:2}],d={toc:i};function p(e){var r=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-management"},"Resource Management"),(0,o.kt)("p",null,"All resources used in the game will be managed by the resource manager. Before using the resource, you need to add the resource to the resource manager, and set a resource name for the resource, and use the resource name directly when needed. The benefits of this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unified resource entry management. "),(0,o.kt)("li",{parentName:"ul"},"When Eva.js loads resources, the resource manager can preprocess the resources to reduce the problem of lag in the processing of resources during runtime")),(0,o.kt)("h2",{id:"add-resource"},"Add resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {RESOURCE_TYPE, resource} from '@eva/eva.js'\n")),(0,o.kt)("p",null,"Listed below are the most commonly used resources"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "image",\n  type: RESOURCE_TYPE.IMAGE,\n  src: {\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png"\n    }\n  },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keel Animation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "dragonBone",\n  type: RESOURCE_TYPE.DRAGONBONE,\n  src: {\n    ske: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json",\n    },\n    tex: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.json",\n    },\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"\n    },\n  },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"spine animation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "spineAnimation",\n  type: RESOURCE_TYPE.SPINE,\n  src: {\n    ske: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json",\n    },\n    atlas: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.atlas",\n    },\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"\n    },\n  },\n}\n')),(0,o.kt)("p",null,"In actual projects, you may need to add a lot of resources at one time, which can be achieved through the ",(0,o.kt)("inlineCode",{parentName:"p"},"addResource")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {RESOURCE_TYPE, resource} from '@eva/eva.js'\n\nresource.addResource([\n  {\n    name:'img1',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type:'png',\n        url:'//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    }\n  }\n  // other resources\n])\n")),(0,o.kt)("h2",{id:"resource-preload"},"Resource preload"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"preload()")," method to load the resources whose ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," is true in the resource list. You can obtain the current loading progress by listening to events on the resource, which is suitable for the initial display of the game, loading and requesting resources when switching scenes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.on(LOAD_EVENT.START, () => ()) // start loader\nresource.on(LOAD_EVENT.PROGRESS, () => ()) // Load progress update\nresource.on(LOAD_EVENT.LOADED, () => ()) // A file is successfully loaded\nresource.on(LOAD_EVENT.COMPLETE, () => ()) // Load completed\nresource.on(LOAD_EVENT.ERROR, () => ()) // A file failed to load\nresource.preload()\n")),(0,o.kt)("h2",{id:"access-to-resources"},"Access to resources"),(0,o.kt)("h3",{id:"getresourceresourcename"},"getResource(resourceName)"),(0,o.kt)("p",null,"Use the getResource method to get the resource, which returns a promise. The resource will exist in the data attribute. If the resource is a JSON file, the value of data is a js object; if the resource is an image, the value of data will be an Image instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"resource.getResource('img1').then(res => {\n  const name = res.name // resource name\n  const data = res.data // The corresponding content of the file in the resource json or img, etc.\n  const instance = res.instance // processed instance\n})\n")),(0,o.kt)("h3",{id:"loadsingleresource"},"loadSingle(resource)"),(0,o.kt)("p",null,"Use loadSingle to load a single resource, you don't need to add the resource to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addResource")," method, this method returns a promise."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource\n  .loadSingle({\n    name:'img1',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type:'png',\n        url:'//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: true\n  })\n  .then(res => {})\n")),(0,o.kt)("h3",{id:"resource-processing"},"Resource processing"),(0,o.kt)("p",null,"By registering a method for a certain type of resource, the resource can be processed when the resource request comes back, and the resource instance can be directly obtained when it is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.registerInstance(RESOURCE_TYPE.SPRITE, async ({ name, data }) => {\n  const instance = await instanceSth(data)\n  return instance\n})\n")),(0,o.kt)("h3",{id:"resource-destruction"},"Resource destruction"),(0,o.kt)("p",null,"Resources can be actively destroyed. It should be noted that before destroying resources, make sure that the resources are not used in the game."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.destory('img1')\n")),(0,o.kt)("p",null,"If a destruction method is registered for this type of resource, this method will be called to destroy the resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.registerDestroy(RESOURCE_TYPE.SPRITE, async ({ instance }) => {\n  await instance.destory()\n})\n")),(0,o.kt)("h3",{id:"load-timeout-event-settings"},"Load timeout event settings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.timeout = 30000\n")))}p.isMDXComponent=!0}}]);