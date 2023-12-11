"use strict";(self.webpackChunkvoicevox_blog=self.webpackChunkvoicevox_blog||[]).push([[14],{7814:function(e,t,a){a.d(t,{G:function(){return h}});var n=a(3636),r=a(5697),o=a.n(r),i=a(7294);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function A(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var v=["style"];var E=!1;try{E=!0}catch(C){}function p(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?m({},e,t):{}}var h=i.forwardRef((function(e,t){var a=e.icon,r=e.mask,o=e.symbol,i=e.className,l=e.title,c=e.titleId,d=e.maskId,u=p(a),f=b("classes",[].concat(A(function(e){var t,a=e.beat,n=e.fade,r=e.beatFade,o=e.bounce,i=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,d=e.spinReverse,A=e.pulse,u=e.fixedWidth,f=e.inverse,v=e.border,E=e.listItem,p=e.flip,b=e.size,h=e.rotation,g=e.pull,C=(m(t={"fa-beat":a,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":A,"fa-fw":u,"fa-inverse":f,"fa-border":v,"fa-li":E,"fa-flip":!0===p,"fa-flip-horizontal":"horizontal"===p||"both"===p,"fa-flip-vertical":"vertical"===p||"both"===p},"fa-".concat(b),null!=b),m(t,"fa-rotate-".concat(h),null!=h&&0!==h),m(t,"fa-pull-".concat(g),null!=g),m(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map((function(e){return C[e]?e:null})).filter((function(e){return e}))}(e)),A(i.split(" ")))),v=b("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),C=b("mask",p(r)),w=(0,n.qv)(u,s(s(s(s({},f),v),C),{},{symbol:o,title:l,titleId:c,maskId:d}));if(!w)return function(){var e;!E&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var y=w.abstract,O={ref:t};return Object.keys(e).forEach((function(t){h.defaultProps.hasOwnProperty(t)||(O[t]=e[t])})),g(y[0],O)}));h.displayName="FontAwesomeIcon",h.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},h.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=f(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[f(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=d(n,v);return o.attrs.style=s(s({},o.attrs.style),l),t.apply(void 0,[a.tag,s(s({},o.attrs),c)].concat(A(r)))}.bind(null,i.createElement)},3479:function(e,t,a){var n=a(7294);t.Z=e=>((0,n.useEffect)((()=>{e.isActive?document.body.classList.add("is-clipped"):document.body.classList.remove("is-clipped")}),[e.isActive]),n.createElement("div",{className:e.className+" modal"+(e.isActive?" is-active":"")},n.createElement("div",{className:"modal-background",onClick:e.hide}),n.createElement("div",{className:"modal-card"},n.createElement("header",{className:"modal-card-head has-text-centered"},n.createElement("p",{className:"modal-card-title"},e.title),n.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),n.createElement("section",{className:"modal-card-body"},n.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e.html}})),n.createElement("footer",{className:"modal-card-foot is-justify-content-flex-end"}))))},8058:function(e,t,a){a.d(t,{T:function(){return C}});var n=a(9417),r=a(7814),o=a(1883),i=a(7294),l=a(3479),s=e=>{const t=(0,o.useStaticQuery)("3903598066").markdownRemark.html;return i.createElement(l.Z,{title:"プライバシーポリシー",html:t,isActive:e.isActive,hide:e.hide})},c=a(3612),m=a(1702),d=a(3706),A=e=>{let{label:t,selected:a,setSelected:n,candidates:r}=e;return(0,i.useEffect)((()=>{r.find((e=>e==a))||n(r[0])}),[r]),i.createElement("div",{className:"columns is-tablet is-centered is-vcentered py-0 my-2"},i.createElement("div",{className:"column is-3 py-0 my-1"},i.createElement("p",{className:"has-text-centered is-size-5 has-text-weight-bold"},t)),i.createElement("div",{className:"column is-6 py-0 my-1"},i.createElement("div",{className:"buttons is-centered"},r.map(((e,t)=>i.createElement("button",{key:t,className:"button is-rounded "+(e==a?"is-success has-text-weight-semibold":""),onClick:()=>n(e),type:"button"},i.createElement("span",null,e)))))))};const u={Windows:["GPU / CPU","CPU"],Mac:["CPU"],Linux:["GPU / CPU","CPU"]},f={Windows:{"GPU / CPU":["インストーラー","Zip"],CPU:["インストーラー","Zip"]},Mac:{"GPU / CPU":["インストーラー","Zip"],CPU:["インストーラー","Zip"]},Linux:{"GPU / CPU":["インストーラー"],CPU:["インストーラー","tar.gz"]}},v=e=>{var t,a,n,r;const l=(0,o.useStaticQuery)("4236442321").allFile.nodes,s={Windows:{"GPU / CPU":{"インストーラー":{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/VOICEVOX.Web.Setup."+d.Ji+".exe",name:"VOICEVOX.Setup."+d.Ji+".Windows.exe"},Zip:{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/voicevox-windows-directml-"+d.Ji+".zip",name:"VOICEVOX."+d.Ji+".Windows.zip"}},CPU:{"インストーラー":{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/VOICEVOX-CPU.Web.Setup."+d.Ji+".exe",name:"VOICEVOX-CPU.Setup."+d.Ji+".Windows.exe"},Zip:{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/voicevox-windows-cpu-"+d.Ji+".zip",name:"VOICEVOX-CPU."+d.Ji+".Windows.zip"}}},Mac:{CPU:{"インストーラー":{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/VOICEVOX."+d.Ji+".dmg",name:"VOICEVOX-CPU."+d.Ji+".Mac.dmg"},Zip:{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/voicevox-macos-cpu-"+d.Ji+".zip",name:"VOICEVOX-CPU."+d.Ji+".Mac.zip"}}},Linux:{"GPU / CPU":{"インストーラー":{url:l.find((e=>"linuxInstallNvidia"==e.name)).publicURL,name:"VOICEVOX.Installer."+d.Ji+".Linux.sh"}},CPU:{"インストーラー":{url:l.find((e=>"linuxInstallCpu"==e.name)).publicURL,name:"VOICEVOX-CPU.Installer."+d.Ji+".Linux.sh"},"tar.gz":{url:"https://github.com/VOICEVOX/voicevox/releases/download/"+d.Ji+"/voicevox-linux-cpu-"+d.Ji+".tar.gz",name:"VOICEVOX-CPU."+d.Ji+".Linux.tar.gz"}}}},{0:c,1:m}=(0,i.useState)("Windows"),{0:v,1:E}=(0,i.useState)("GPU / CPU"),{0:p,1:b}=(0,i.useState)("インストーラー");return(0,i.useEffect)((()=>{u[c].find((e=>e==v))||E(u[c][0]),f[c][v].find((e=>e==p))||b(f[c][v][0])}),[c,v,p]),i.createElement("div",{className:"modal-download modal"+(e.isActive?" is-active":"")},i.createElement("div",{className:"modal-background",onClick:e.hide,role:"presentation"}),i.createElement("div",{className:"modal-card"},i.createElement("header",{className:"modal-card-head has-text-centered"},i.createElement("p",{className:"modal-card-title"},"VOICEVOX ダウンロード"),i.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),i.createElement("section",{className:"modal-card-body"},i.createElement(A,{label:"OS",selected:c,setSelected:m,candidates:["Windows","Mac","Linux"]}),i.createElement("hr",{className:"my-3"}),i.createElement(A,{label:"対応モード",selected:v,setSelected:E,candidates:u[c]}),i.createElement("p",{className:"has-text-centered is-size-7"},"※ GPUモードの方が快適ですが、利用するためには",i.createElement(o.Link,{to:"/qa"},"対応するGPU"),"が必要です"),i.createElement("hr",{className:"my-3"}),i.createElement(A,{label:"パッケージ",selected:p,setSelected:b,candidates:f[c][v]}),i.createElement("p",{className:"has-text-centered is-size-7"},"※ 推奨パッケージはインストーラー版です")),i.createElement("footer",{className:"modal-card-foot is-justify-content-flex-end"},i.createElement("a",{href:null===(t=s[c][v])||void 0===t||null===(a=t[p])||void 0===a?void 0:a.url,download:null===(n=s[c][v])||void 0===n||null===(r=n[p])||void 0===r?void 0:r.name,target:"_blank",rel:"noreferrer",className:"button is-primary",type:"button",role:"button"},i.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード")))))},E={Windows:["GPU / CPU","CPU"],Mac:["CPU"],Linux:["GPU / CPU","CPU"]},p=e=>{var t,a;const n={Windows:{"GPU / CPU":{url:"https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/"+d.Js+"/voicevox_engine-windows-directml-"+d.Js+".vvpp",name:"VOICEVOX.Nemo."+d.Js+".Windows.vvpp"},CPU:{url:"https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/"+d.Js+"/voicevox_engine-windows-cpu-"+d.Js+".vvpp",name:"VOICEVOX-CPU.Nemo."+d.Js+".Windows.vvpp"}},Mac:{CPU:{url:"https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/"+d.Js+"/voicevox_engine-macos-x64-"+d.Js+".vvpp",name:"VOICEVOX-CPU.Nemo."+d.Js+".Mac.vvpp"}},Linux:{"GPU / CPU":{url:"https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/"+d.Js+"/voicevox_engine-linux-nvidia-"+d.Js+".vvpp",name:"VOICEVOX.Nemo."+d.Js+".Linux.vvpp"},CPU:{url:"https://github.com/VOICEVOX/voicevox_nemo_engine/releases/download/"+d.Js+"/voicevox_engine-linux-cpu-"+d.Js+".vvpp",name:"VOICEVOX-CPU.Nemo."+d.Js+".Linux.vvpp"}}},{0:r,1:l}=(0,i.useState)("Windows"),{0:s,1:c}=(0,i.useState)("GPU / CPU");return(0,i.useEffect)((()=>{E[r].find((e=>e==s))||c(E[r][0])}),[r,s]),i.createElement("div",{className:"modal-download modal"+(e.isActive?" is-active":"")},i.createElement("div",{className:"modal-background",onClick:e.hide,role:"presentation"}),i.createElement("div",{className:"modal-card"},i.createElement("header",{className:"modal-card-head has-text-centered"},i.createElement("p",{className:"modal-card-title"},"Nemo エンジン ダウンロード"),i.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),i.createElement("section",{className:"modal-card-body"},i.createElement(A,{label:"OS",selected:r,setSelected:l,candidates:["Windows","Mac","Linux"]}),i.createElement("hr",{className:"my-3"}),i.createElement(A,{label:"対応モード",selected:s,setSelected:c,candidates:E[r]}),i.createElement("p",{className:"has-text-centered is-size-7"},"※ GPUモードの方が快適ですが、利用するためには",i.createElement(o.Link,{to:"/qa"},"対応するGPU"),"が必要です"),i.createElement("hr",{className:"my-3"}),i.createElement("p",{className:"has-text-centered"},"VOICEVOX 内の「マルチエンジン機能」を ON にしたあと、",i.createElement("br",null),"ダウンロードした .vvpp ファイルをダブルクリックするか",i.createElement("br",null),"「エンジン」→「エンジンの管理」で Nemo 音声を追加できます。")),i.createElement("footer",{className:"modal-card-foot is-justify-content-flex-end"},i.createElement("a",{href:null===(t=n[r][s])||void 0===t?void 0:t.url,download:null===(a=n[r][s])||void 0===a?void 0:a.name,target:"_blank",rel:"noreferrer",className:"button is-primary",type:"button",role:"button"},i.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード")))))},b=e=>{const t=(0,i.useContext)(c.k),{showing:a,show:o,hide:l}=(0,m._)();return i.createElement(i.Fragment,null,i.createElement("div",{className:"modal-nemo-guidance modal"+(e.isActive?" is-active":"")},i.createElement("div",{className:"modal-background",onClick:e.hide,role:"presentation"}),i.createElement("div",{className:"modal-card"},i.createElement("header",{className:"modal-card-head has-text-centered"},i.createElement("p",{className:"modal-card-title"},"VOICEVOX Nemo ご利用案内"),i.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),i.createElement("section",{className:"modal-card-body"},i.createElement("div",{className:"step-by-step"},i.createElement("h3",null,"- Step 1 -"),i.createElement("p",null,"VOICEVOX ソフトウェアをインストール"),i.createElement("a",{className:"button is-align-self-center is-primary is-rounded is-medium",onClick:()=>{t.downloadModal.show(),t.sendEvent("download","software")},target:"_blank",rel:"noreferrer",tabIndex:0},i.createElement("span",{className:"icon"},i.createElement(r.G,{icon:n.q7m})),i.createElement("span",{className:"has-text-weight-semibold"},"VOICEVOX ダウンロード"))),i.createElement("hr",null),i.createElement("div",{className:"step-by-step"},i.createElement("h3",null,"- Step 2 -"),i.createElement("p",null,"VOICEVOX ソフトウェアを起動して",i.createElement("br",null),"設定→オプション→高度な設定→",i.createElement("b",null,"マルチエンジン機能"),"をON")),i.createElement("hr",null),i.createElement("div",{className:"step-by-step"},i.createElement("h3",null,"- Step 3 -"),i.createElement("p",null,"Nemo エンジンを追加"),i.createElement("a",{className:"button is-align-self-center is-primary is-rounded is-medium",onClick:o,target:"_blank",rel:"noreferrer",tabIndex:0},i.createElement("span",{className:"icon"},i.createElement(r.G,{icon:n.q7m})),i.createElement("span",{className:"has-text-weight-semibold"},"Nemo エンジン ダウンロード"))),i.createElement("hr",null),i.createElement("p",{className:"policy-note"},"※ VOICEVOX ソフトウェアにはキャラクターの音声も含まれます。",i.createElement("br",null),"キャラクターの音声と Nemo の音声は利用規約が異なるので",i.createElement("br",null),"ご利用の際は各音声の利用規約をご確認ください。")),i.createElement("footer",{className:"modal-card-foot"}))),i.createElement(p,{isActive:a,hide:l}))};var h=a(3024);const g=e=>{let{privacyPolicyShower:t,isNemo:a}=e;return i.createElement(i.Fragment,null,i.createElement("div",{className:"container is-flex is-justify-content-center"},i.createElement("a",{className:"button ml-1 mr-1 "+(a?"is-dark":"is-outlined"),href:"https://github.com/VOICEVOX/voicevox",target:"_blank",rel:"noreferrer",type:"button",role:"button"},i.createElement("span",{className:"icon"},i.createElement(r.G,{icon:h.zhw})),i.createElement("span",null,"GitHub")),i.createElement("a",{className:"button is-info ml-1 mr-1 "+(a?"is-dark":"is-outlined"),href:"https://twitter.com/voicevox_pj",target:"_blank",rel:"noreferrer",type:"button",role:"button"},i.createElement("span",{className:"icon"},i.createElement(r.G,{icon:h.mdU})),i.createElement("span",null,"Twitter"))),i.createElement("div",{className:"container is-flex is-justify-content-center mt-2"},i.createElement("a",{className:"is-size-7 ml-1 mr-1 "+(a?"has-text-primary":""),onClick:t},"プライバシーポリシー"),i.createElement("p",{className:"is-size-7\tml-1 mr-1 "+(a?"has-text-white-bis":"")},"© Hiroshiba Kazuyuki")))},C=e=>{let{showingHeader:t=!0,showingHeaderOnTop:a=!0,children:l,isNemo:d=!1}=e;const{0:A,1:u}=(0,i.useState)(!1);(0,i.useEffect)((()=>(d?document.body.classList.add("has-background-black"):document.body.classList.add("has-background-white"),()=>{document.body.classList.remove("has-background-black"),document.body.classList.remove("has-background-white")})),[d]);const f=(0,i.useContext)(c.k);f.downloadModal=(0,m._)(),f.nemoGuidanceModal=(0,m._)();const{showing:E,show:p,hide:h}=(0,m._)();return i.createElement(i.Fragment,null,i.createElement("nav",{className:"navbar is-fixed-top has-shadow "+(t?"":"is-hidden")+" "+(a?"":"navbar-with-animation")+" "+(d?"is-black":""),role:"navigation","aria-label":"main navigation"},i.createElement("div",{className:"navbar-brand"},i.createElement(o.Link,{to:"/",className:"navbar-item"},i.createElement("img",{src:"data:image/png;base64,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",alt:"VOICEVOXのロゴ"}),i.createElement("span",{className:"has-text-weight-bold is-size-5 pl-2"},"VOICEVOX")),i.createElement("a",{role:"button",className:"navbar-burger "+(A?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbar",onClick:()=>u(!A)},i.createElement("span",{"aria-hidden":"true"}),i.createElement("span",{"aria-hidden":"true"}),i.createElement("span",{"aria-hidden":"true"}))),i.createElement("div",{id:"navbar",className:"navbar-menu "+(A?"is-active":"")},i.createElement("div",{className:"navbar-end"},i.createElement(o.Link,{to:"/term/",className:"navbar-item"},"利用規約"),i.createElement(o.Link,{to:"/how_to_use/",className:"navbar-item"},"使い方"),i.createElement(o.Link,{to:"/qa/",className:"navbar-item"},"Q&A"),i.createElement(o.Link,{to:"/dormitory/",className:"navbar-item"},"ボイボ寮"),i.createElement(o.Link,{to:"/nemo/",className:"navbar-item"},"Nemo"),i.createElement(o.Link,{to:"/update_history/",className:"navbar-item"},"変更履歴"),i.createElement("a",{href:"https://hiho.fanbox.cc/",target:"_blank",rel:"noreferrer",className:"navbar-item"},"pixivFANBOX"),i.createElement("div",{className:"navbar-item py-0"},i.createElement("a",{className:"button is-primary is-rounded",onClick:()=>{d?(f.nemoGuidanceModal.show(),f.sendEvent("download","nemo")):(f.downloadModal.show(),f.sendEvent("download","software"))},target:"_blank",rel:"noreferrer",tabIndex:0},i.createElement("span",{className:"icon"},i.createElement(r.G,{icon:n.q7m})),i.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード")))))),i.createElement("div",{className:"navbar height-holder "+(t&&a?"":"is-hidden")}),i.createElement(c.k.Provider,{value:f},l),i.createElement(b,{isActive:f.nemoGuidanceModal.showing,hide:f.nemoGuidanceModal.hide}),i.createElement(v,{isActive:f.downloadModal.showing,hide:f.downloadModal.hide}),i.createElement(s,{isActive:E,hide:h}),i.createElement("footer",{className:"footer appearance "+(d?"has-background-black":"")},i.createElement(g,{privacyPolicyShower:p,isNemo:d})),i.createElement("div",{className:"footer height-holder"},i.createElement(g,{privacyPolicyShower:()=>{},isNemo:d})))}},3706:function(e,t,a){a.d(t,{C9:function(){return i},Ji:function(){return n},Js:function(){return r},qT:function(){return o}});const n="0.14.10",r="0.14.0",o=["四国めたん","ずんだもん","春日部つむぎ","雨晴はう","波音リツ","玄野武宏","白上虎太郎","青山龍星","冥鳴ひまり","九州そら","モチノキョウコ","剣崎雌雄","WhiteCUL","後鬼","No7","ちび式じい","櫻歌ミコ","小夜_SAYO","ナースロボ＿タイプＴ","聖騎士紅桜","雀松朱司","麒ヶ島宗麟","春歌ナナ","猫使アル","猫使ビィ","中国うさぎ","栗田まろん","藍田ノエル","満別花丸","琴詠ニア"],i={"四国めたん":{name:"四国めたん",id:"shikoku_metan"},"ずんだもん":{name:"ずんだもん",id:"zundamon"},"春日部つむぎ":{name:"春日部つむぎ",id:"kasukabe_tsumugi"},"雨晴はう":{name:"雨晴はう",id:"amehare_hau"},"波音リツ":{name:"波音リツ",id:"namine_ritsu"},"玄野武宏":{name:"玄野武宏",id:"kurono_takehiro"},"白上虎太郎":{name:"白上虎太郎",id:"shirakami_kotarou"},"青山龍星":{name:"青山龍星",id:"aoyama_ryusei"},"冥鳴ひまり":{name:"冥鳴ひまり",id:"meimei_himari"},"九州そら":{name:"九州そら",id:"kyushu_sora"},"モチノキョウコ":{name:"もち子さん",id:"mochikosan"},"剣崎雌雄":{name:"剣崎雌雄",id:"kenzaki_mesuo"},WhiteCUL:{name:"WhiteCUL",id:"white_cul"},"後鬼":{name:"後鬼",id:"goki"},No7:{name:"No.7",id:"number_seven"},"ちび式じい":{name:"ちび式じい",id:"chibishikiji"},"櫻歌ミコ":{name:"櫻歌ミコ",id:"ouka_miko"},"小夜_SAYO":{name:"小夜/SAYO",id:"sayo"},"ナースロボ＿タイプＴ":{name:"ナースロボ＿タイプＴ",id:"nurserobo_typet"},"聖騎士紅桜":{name:"†聖騎士 紅桜†",id:"horinaito_benizakura"},"雀松朱司":{name:"雀松朱司",id:"wakamatsu_akashi"},"麒ヶ島宗麟":{name:"麒ヶ島宗麟",id:"kigashima_sourin"},"春歌ナナ":{name:"春歌ナナ",id:"haruka_nana"},"猫使アル":{name:"猫使アル",id:"nekotsuka_aru"},"猫使ビィ":{name:"猫使ビィ",id:"nekotsuka_bi"},"中国うさぎ":{name:"中国うさぎ",id:"chugoku_usagi"},"栗田まろん":{name:"栗田まろん",id:"kurita_maron"},"藍田ノエル":{name:"あいえるたん",id:"aierutan"},"満別花丸":{name:"満別花丸",id:"manbetsu_hanamaru"},"琴詠ニア":{name:"琴詠ニア",id:"kotoyomi_nia"}}},3612:function(e,t,a){a.d(t,{K:function(){return i},k:function(){return o}});var n=a(7294),r=a(3706);const o=n.createContext({sendEvent:(e,t)=>{"undefined"!=typeof window&&window.gtag&&window.gtag("event",e,{event_category:t})},downloadModal:{showing:!1,show:()=>{throw new Error("Method not implemented.")},hide:()=>{throw new Error("Method not implemented.")}},nemoGuidanceModal:{showing:!1,show:()=>{throw new Error("Method not implemented.")},hide:()=>{throw new Error("Method not implemented.")}},experiments:!1}),i=n.createContext({characterKeys:r.qT,characterInfos:r.C9})},1702:function(e,t,a){a.d(t,{_:function(){return r}});var n=a(7294);const r=()=>{const{0:e,1:t}=(0,n.useState)(!1);return{showing:e,show:()=>{t(!0)},hide:()=>{t(!1)}}}}}]);
//# sourceMappingURL=44387886148252853e2ed15b332ee7947b718943-35d02dac9bc8afeb724e.js.map