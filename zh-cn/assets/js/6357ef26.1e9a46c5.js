"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61038],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,g=d["".concat(m,".").concat(u)]||d[u]||c[u]||l;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57113:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={},m="\u906e\u7f69 Mask",p={unversionedId:"tutorials/maskComponent",id:"tutorials/maskComponent",isDocsHomePage:!1,title:"\u906e\u7f69 Mask",description:"Mask \u7ec4\u4ef6\u53ef\u4ee5\u5c06 GameObject \u7684\u5c55\u793a\u8303\u56f4\u8fdb\u884c\u88c1\u526a\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/maskComponent.md",sourceDirName:"tutorials",slug:"/tutorials/maskComponent",permalink:"/zh-cn/docs/tutorials/maskComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/maskComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7cbe\u7075\u56fe Sprite",permalink:"/zh-cn/docs/tutorials/spriteComponent"},next:{title:"\u4e5d\u5bab\u683c NinePatch",permalink:"/zh-cn/docs/tutorials/ninePatchComponent"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"type: <code>MARK_TYPE</code>\xa0",id:"type-mark_type",children:[],level:3},{value:"style: <code>object</code>\xa0",id:"style-object",children:[],level:3}],level:2}],c={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u906e\u7f69-mask"},"\u906e\u7f69 Mask"),(0,l.kt)("p",null,"Mask \u7ec4\u4ef6\u53ef\u4ee5\u5c06 GameObject \u7684\u5c55\u793a\u8303\u56f4\u8fdb\u884c\u88c1\u526a\uff0c\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/mask"},"Demo")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-mask\n")),(0,l.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-mask@1.1.x/dist/EVA.plugin.renderer.mask.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Img, ImgSystem } from '@eva/plugin-renderer-img'\nimport { Mask, MaskSystem, MASK_TYPE } from '@eva/plugin-renderer-mask'\n\nresource.addResource([\n  {\n    name: 'heart',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: '//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: false\n  },\n  {\n    name: 'tag',\n    type: RESOURCE_TYPE.SPRITE,\n    src: {\n      image: {\n        type: 'png',\n        url: '//gw.alicdn.com/mt/TB1KcVte4n1gK0jSZKPXXXvUXXa-150-50.png'\n      },\n      json: {\n        type: 'json',\n        url: '//gw.alicdn.com/mt/TB1d4lse4D1gK0jSZFsXXbldVXa.json'\n      }\n    },\n    preload: true\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new ImgSystem(),\n    new MaskSystem()\n  ]\n})\n\ngame.scene.transform.size = {\n  width: 750,\n  height: 1000\n}\n\nconst image = new GameObject('image', {\n  size: { width: 200, height: 200 }\n})\nimage.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\ngame.scene.addChild(image)\nimage.addComponent(\n  new Mask({\n    type: MASK_TYPE.Circle,\n    style: {\n      x: 100,\n      y: 100,\n      radius: 70\n    }\n  })\n)\n\nconst image1 = new GameObject('image', {\n  size: { width: 200, height: 200 },\n  position: { x: 400, y: 300 }\n})\nimage1.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\n\nimage1.addComponent(\n  new Mask({\n    type: MASK_TYPE.Img,\n    style: {\n      width: 100,\n      height: 100,\n      x: 20,\n      y: 20\n    },\n    resource: 'heart'\n  })\n)\ngame.scene.addChild(image1)\n\nconst image2 = new GameObject('image', {\n  size: { width: 200, height: 200 },\n  position: { x: 100, y: 400 }\n})\nimage2.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\n\nimage2.addComponent(\n  new Mask({\n    type: MASK_TYPE.Sprite,\n    style: {\n      width: 100,\n      height: 100,\n      x: 20,\n      y: 20\n    },\n    resource: 'tag',\n    spriteName: 'task.png'\n  })\n)\ngame.scene.addChild(image2)\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"type-mark_type"},"type: ",(0,l.kt)("inlineCode",{parentName:"h3"},"MARK_TYPE"),"\xa0"),(0,l.kt)("h3",{id:"style-object"},"style: ",(0,l.kt)("inlineCode",{parentName:"h3"},"object"),"\xa0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5c5e\u6027")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5706\u5f62"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Circle"),(0,l.kt)("td",{parentName:"tr",align:null},"{style: {x,y,radius}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u692d\u5706"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Ellipse"),(0,l.kt)("td",{parentName:"tr",align:null},"{style:{x,y,width,height}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u77e9\u5f62"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Rect"),(0,l.kt)("td",{parentName:"tr",align:null},"{style:{x,y,width,height}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5706\u89d2\u77e9\u5f62"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.RoundedRect"),(0,l.kt)("td",{parentName:"tr",align:null},"{style:{x,y,width,height,radius}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u591a\u8fb9\u5f62"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Polygon"),(0,l.kt)("td",{parentName:"tr",align:null},"{style: {paths: ","[x,y,x,y,x,y]","}} \u6216\u8005 {style: {paths: ","[{x,y},{x,y},{x,y}]","}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Img"),(0,l.kt)("td",{parentName:"tr",align:null},"{resource,style:{x,y,width,height}}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7cbe\u7075\u56fe"),(0,l.kt)("td",{parentName:"tr",align:null},"MASK_TYPE.Sprite"),(0,l.kt)("td",{parentName:"tr",align:null},"{resource,spriteName,style:{x,y,width,height}}")))))}d.isMDXComponent=!0}}]);