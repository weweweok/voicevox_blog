(self.webpackChunkvoicevox_blog=self.webpackChunkvoicevox_blog||[]).push([[691],{6454:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var c=a(3024),l=a(7814),s=a(1883),n=a(8032),r=a(7294),i=a(4954),m=a(1261);var o=r.memo((e=>{let{audioSamples:t,characterName:a,className:c}=e;const l=(0,r.useMemo)((()=>t.map((e=>e.style))),[t]),{selectedStyle:s,setSelectedStyle:n}=(0,m.G)({styles:l}),o=(0,r.useMemo)((()=>t.find((e=>{let{style:t}=e;return t==s})).urls),[t,s]);return r.createElement("div",{className:"audio-sample "+c},r.createElement("hr",{className:"my-3"}),r.createElement("div",{className:"audio-sample-pair"},r.createElement("div",{className:"audio-sample-label"},r.createElement("span",null,"音声サンプル")),r.createElement("div",{className:"audio-sample-content"},o.map(((e,t)=>r.createElement(i.Z,{key:t,url:e,name:a+"の"+s+"スタイルのサンプルボイス"+(t+1),className:"is-small"}))))),l.length>1&&r.createElement("div",{className:"audio-sample-pair"},r.createElement("div",{className:"audio-sample-label"},r.createElement("span",null,"スタイル")),r.createElement("div",{className:"audio-sample-content"},r.createElement(m.Z,{styles:l,selectedStyle:s,setSelectedStyle:n,characterName:a}))),r.createElement("hr",{className:"my-3"}))})),d=a(3963),E=a(8058),h=a(4001),u=a(1614),p=a(3612),N=a(4484),b=a.p+"static/landing-movie-thumb-1b9af402783915bf57ce0d4ff0bdd305.png",v=a(4499),f=a(4848),g=a.n(f),x=a.p+"static/landing-69ef7841f8ed79ae999dc6cfb49e0a77.mp4",O=a(551);const y=r.memo((e=>{let{characterInfo:t,characterKey:a,setShowingLibraryReadmeModalCharacterKey:c}=e;if(!t)throw new Error("characterInfo is undefined. ("+a+")");const l=e=>{let{children:a,className:c,style:l}=e;return r.createElement(s.Link,{to:(0,O._)(t),className:c,style:l},a)};return r.createElement("div",{className:"column is-6-tablet is-4-desktop"},r.createElement("div",{className:"card"},r.createElement(l,{className:"card-image"},r.createElement(n.G,{image:t.bustupImage,alt:t.name})),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},r.createElement(l,{style:{color:"inherit"}},t.name)),r.createElement("p",{className:"subtitle is-5"},t.voiceFeature?t.voiceFeature:"（準備中）"),null!=t.releaseDate&&r.createElement("p",{className:"py-0",style:{marginTop:"-1rem",color:"red"}},"Coming Soon"),t.styleVoiceUrls.length>0&&r.createElement(o,{audioSamples:t.styleVoiceUrls,characterName:t.name}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:()=>c(a),className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,t.name," 利用規約"))))))})),V=r.memo((e=>{let{setShowingHeader:t}=e;const{characterInfos:a}=(0,N.H)(),{characterKeys:n}=(0,r.useContext)(p.K),i=(0,r.useRef)(null);(0,r.useEffect)((()=>{if(!i.current)return;new IntersectionObserver((e=>{e.forEach((e=>{t(!e.isIntersecting)}))})).observe(i.current)}),[i]);const{0:m,1:o}=(0,r.useState)(void 0);return r.createElement(r.Fragment,null,r.createElement(h.Z,{title:"VOICEVOX | 無料のテキスト読み上げソフトウェア",description:"無料で使える中品質なテキスト読み上げソフトウェア。商用・非商用問わず無料で、誰でも簡単にお使いいただけます。イントネーションを詳細に調整することも可能です。",image:v.Z}),r.createElement("div",{className:"landing"},r.createElement("div",{ref:i,className:"first-view"},r.createElement("header",{className:"hero is-primary is-small"},r.createElement("div",{className:"hero-body"},r.createElement("div",{className:"container has-text-centered"},r.createElement("div",{className:"title top-title"},r.createElement(g(),{alt:"VOICEVOX"})),r.createElement("h2",{className:"subtitle has-text-weight-semibold"},"無料で使える中品質なテキスト読み上げソフトウェア")))),r.createElement("section",{className:"section not-header is-flex is-justify-content-center"},r.createElement("div",{className:"container is-max-desktop columns is-desktop is-vcentered"},r.createElement("div",{className:"column has-text-centered"},r.createElement("video",{controls:!0,poster:b},r.createElement("source",{src:x,type:"video/mp4"}))),r.createElement(u.Z,{className:"column is-narrow"})))),r.createElement("main",null,r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"characters",className:"jump-anchor-header-padding title"},r.createElement(s.Link,{to:"#characters",className:"has-text-black"},"キャラクター一覧")),r.createElement("div",{className:"columns is-multiline is-centered"},n.map((e=>r.createElement(y,{key:e,characterInfo:a[e],characterKey:e,setShowingLibraryReadmeModalCharacterKey:o})))))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"nemo",className:"jump-anchor-header-padding title"},r.createElement(s.Link,{to:"#nemo",className:"has-text-black"},"VOICEVOX Nemo")),r.createElement("p",{className:"is-size-5"},"VOICEVOX Nemo はキャラクターのいない音声ライブラリです。"),r.createElement("p",{className:"is-size-5"},"詳しくは ",r.createElement(s.Link,{to:"/nemo/",className:"has-text-weight-bold is-underlined"},"VOICEVOX Nemo")," をご参照ください。"))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"oss",className:"jump-anchor-header-padding title"},r.createElement(s.Link,{to:"#oss",className:"has-text-black"},"オープンソース")),r.createElement("p",{className:"is-size-5"},"VOICEVOX は OSS（オープンソース・ソフトウェア）版 VOICEVOX をもとに構築されています。"),r.createElement("p",{className:"is-size-5"},"製品版と OSS 版の違いやモジュール構成は ",r.createElement("a",{href:"https://github.com/VOICEVOX/voicevox/blob/main/docs/%E5%85%A8%E4%BD%93%E6%A7%8B%E6%88%90.md",target:"_blank",rel:"noreferrer",className:"has-text-weight-bold is-underlined"},"VOICEVOX の全体構成")," をご参照ください。"),r.createElement("p",{className:"is-size-5"},"ソフトウェア部分は Electron + Vue 、音声合成エンジン部分は Python + FastAPI です。"),r.createElement("p",{className:"is-size-5"},"追加したい・改善したい機能があれば、ぜひ開発にご参加ください。"),r.createElement("div",{className:"buttons mt-3"},r.createElement("a",{className:"button is-outlined",href:"https://github.com/VOICEVOX/voicevox",target:"_blank",rel:"noreferrer",type:"button",role:"button"},r.createElement("span",{className:"icon"},r.createElement(l.G,{icon:c.zhw})),r.createElement("span",null,"VOICEVOX エディター")),r.createElement("a",{className:"button is-outlined",href:"https://github.com/VOICEVOX/voicevox_engine",target:"_blank",rel:"noreferrer",type:"button",role:"button"},r.createElement("span",{className:"icon"},r.createElement(l.G,{icon:c.zhw})),r.createElement("span",null,"VOICEVOX エンジン"))))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"core_library",className:"jump-anchor-header-padding title"},r.createElement(s.Link,{to:"#core_library",className:"has-text-black"},"コアライブラリ")),r.createElement("p",{className:"is-size-5"},"VOICEVOXの音声合成をアプリケーションやサービスに組み込める、VOICEVOXのコアライブラリを配布しています。"),r.createElement("p",{className:"is-size-5"},"詳しくは ",r.createElement("a",{href:"https://github.com/VOICEVOX/voicevox_core",className:"has-text-weight-bold is-underlined",target:"_blank",rel:"noreferrer"},"VOICEVOX CORE")," をご参照ください。"))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"link",className:"jump-anchor-header-padding title"},r.createElement(s.Link,{to:"#link",className:"has-text-black"},"リンク")),r.createElement("ul",{className:"is-size-5"},r.createElement("li",null,r.createElement(s.Link,{to:"/term/",className:"has-text-weight-bold is-underlined"},"利用規約")),r.createElement("li",null,r.createElement(s.Link,{to:"/how_to_use/",className:"has-text-weight-bold is-underlined"},"使い方")),r.createElement("li",null,r.createElement(s.Link,{to:"/qa/",className:"has-text-weight-bold is-underlined"},"Q&A")),r.createElement("li",null,r.createElement(s.Link,{to:"/dormitory/",className:"has-text-weight-bold is-underlined"},"ボイボ寮")),r.createElement("li",null,r.createElement(s.Link,{to:"/update_history/",className:"has-text-weight-bold is-underlined"},"変更履歴")),r.createElement("li",null,r.createElement("a",{href:"https://hiho.fanbox.cc/",target:"_blank",rel:"noreferrer",className:"has-text-weight-bold is-underlined"},"pixivFANBOX"))))))),r.createElement(d.Z,Object.assign({hide:()=>o(void 0)},null!=m?{isActive:!0,characterKey:m}:{isActive:!1,characterKey:void 0})))}));var k=r.memo((()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement(E.T,{showingHeader:e,showingHeaderOnTop:!1},r.createElement(V,{setShowingHeader:t}))}))},551:function(e,t,a){"use strict";a.d(t,{C:function(){return l},_:function(){return c}});const c=e=>"/product/"+e.id+"/",l=e=>"/dormitory/"+e.id+"/"},4848:function(e,t,a){var c=a(7294);function l(e){return c.createElement("svg",e,c.createElement("g",null,[c.createElement("title",{key:0},"VOICEVOXのロゴ"),c.createElement("path",{d:"M39.388 83.856 19.516 24.144c-.449-1.279-.288-2.463.48-3.552.768-1.087 1.824-1.632 3.168-1.632h3.456c1.599 0 3.072.497 4.416 1.488 1.344.993 2.208 2.256 2.592 3.792l14.688 51.552c0 .064.032.096.096.096.063 0 .096-.031.096-.096l14.88-51.648c.447-1.536 1.327-2.784 2.64-3.744 1.311-.96 2.768-1.44 4.368-1.44h3.072c1.344 0 2.4.544 3.168 1.632.768 1.089.927 2.273.48 3.552L57.244 83.856a7.47 7.47 0 0 1-2.736 3.743c-1.313.96-2.8 1.44-4.464 1.44h-3.456c-1.601 0-3.057-.48-4.368-1.44a8.016 8.016 0 0 1-2.832-3.743zM135.436 80.496C129.707 86.832 121.915 90 112.06 90c-9.856 0-17.649-3.168-23.376-9.504C82.955 74.16 80.092 65.328 80.092 54s2.863-20.16 8.592-26.496C94.411 21.168 102.203 18 112.06 18c9.855 0 17.647 3.168 23.376 9.504 5.727 6.336 8.592 15.168 8.592 26.496s-2.865 20.16-8.592 26.496zM130.3 54c0-16.64-6.081-24.96-18.24-24.96-12.161 0-18.24 8.32-18.24 24.96 0 16.641 6.079 24.96 18.24 24.96 12.159 0 18.24-8.319 18.24-24.96zM162.267 89.04c-1.473 0-2.752-.543-3.84-1.632-1.089-1.088-1.632-2.367-1.632-3.84V24.432c0-1.472.543-2.751 1.632-3.84 1.087-1.087 2.367-1.632 3.84-1.632h3.84c1.472 0 2.751.544 3.84 1.632 1.088 1.089 1.632 2.369 1.632 3.84v59.136c0 1.473-.544 2.752-1.632 3.84-1.089 1.089-2.368 1.632-3.84 1.632h-3.84zM217.274 90c-10.113 0-18.129-3.12-24.048-9.36-5.92-6.239-8.88-15.119-8.88-26.64 0-11.391 2.863-20.239 8.592-26.544C198.665 21.153 206.681 18 216.986 18c4.736 0 8.703.288 11.904.864 1.536.256 2.815 1.024 3.84 2.304 1.023 1.281 1.536 2.721 1.536 4.32v.768c0 1.344-.561 2.4-1.68 3.168-1.121.768-2.32.993-3.6.672-3.136-.831-6.657-1.248-10.56-1.248-6.336 0-11.313 2.176-14.928 6.528-3.617 4.353-5.424 10.56-5.424 18.624 0 8.001 1.872 14.193 5.616 18.576 3.744 4.385 8.751 6.576 15.024 6.576 4.224 0 7.839-.385 10.848-1.152 1.279-.319 2.479-.096 3.6.672 1.119.769 1.68 1.824 1.68 3.168v.672c0 1.601-.496 3.024-1.488 4.272-.993 1.248-2.289 2.001-3.888 2.256-3.648.639-7.713.96-12.192.96zM255.001 89.04c-1.474 0-2.753-.543-3.84-1.632-1.089-1.088-1.632-2.367-1.632-3.84V24.432c0-1.472.543-2.751 1.632-3.84 1.087-1.087 2.367-1.632 3.84-1.632h32.64c1.472 0 2.751.544 3.84 1.632 1.088 1.089 1.633 2.369 1.633 3.84 0 1.473-.545 2.736-1.633 3.792-1.089 1.056-2.368 1.584-3.84 1.584h-23.808c-.576 0-.864.288-.864.864v15.456c0 .576.288.864.864.864h22.176c1.472 0 2.703.513 3.696 1.536.991 1.025 1.488 2.241 1.488 3.648 0 1.408-.497 2.608-1.488 3.6-.993.993-2.225 1.488-3.696 1.488h-22.176c-.576 0-.864.288-.864.864v19.2c0 .576.288.864.864.864h23.808c1.472 0 2.751.527 3.84 1.584 1.088 1.056 1.633 2.32 1.633 3.792 0 1.473-.545 2.752-1.633 3.84-1.089 1.089-2.368 1.632-3.84 1.632h-32.64zM321.145 83.856l-19.872-59.712c-.448-1.279-.288-2.463.479-3.552.769-1.087 1.824-1.632 3.168-1.632h3.457c1.599 0 3.071.497 4.416 1.488 1.344.993 2.207 2.256 2.592 3.792l14.688 51.552c0 .064.031.096.096.096.063 0 .096-.031.096-.096l14.881-51.648c.447-1.536 1.327-2.784 2.64-3.744 1.312-.96 2.768-1.44 4.368-1.44h3.072c1.344 0 2.4.544 3.168 1.632.768 1.089.927 2.273.48 3.552L339 83.856a7.47 7.47 0 0 1-2.736 3.743c-1.313.96-2.8 1.44-4.463 1.44h-3.457c-1.6 0-3.057-.48-4.367-1.44a8.022 8.022 0 0 1-2.832-3.743zM417.192 80.496C411.464 86.832 403.672 90 393.816 90c-9.856 0-17.648-3.168-23.376-9.504-5.729-6.336-8.592-15.168-8.592-26.496s2.863-20.16 8.592-26.496C376.168 21.168 383.96 18 393.816 18c9.855 0 17.647 3.168 23.376 9.504 5.728 6.336 8.593 15.168 8.593 26.496s-2.865 20.16-8.593 26.496zM412.057 54c0-16.64-6.081-24.96-18.24-24.96-12.16 0-18.24 8.32-18.24 24.96 0 16.641 6.08 24.96 18.24 24.96 12.159 0 18.24-8.319 18.24-24.96zM432.696 89.04c-1.216 0-2.145-.528-2.784-1.584-.641-1.056-.672-2.127-.096-3.216l16.032-29.952c.255-.384.255-.864 0-1.44L430.297 23.76c-.576-1.088-.545-2.16.096-3.216.639-1.056 1.567-1.584 2.784-1.584h4.128c1.663 0 3.199.449 4.607 1.344 1.407.897 2.464 2.081 3.168 3.552l10.08 21.216c0 .064.032.096.097.096.063 0 .096-.031.096-.096l10.08-21.216c.703-1.471 1.76-2.655 3.168-3.552a8.412 8.412 0 0 1 4.608-1.344h3.743c1.28 0 2.224.528 2.832 1.584.607 1.056.624 2.128.048 3.216L464.28 52.848c-.191.448-.191.928 0 1.44l16.032 29.952c.576 1.089.56 2.16-.048 3.216-.609 1.056-1.553 1.584-2.832 1.584h-4.416c-1.665 0-3.216-.447-4.656-1.344-1.439-.896-2.48-2.079-3.12-3.553l-10.271-22.175c0-.063-.033-.096-.097-.096s-.096.033-.096.096l-10.271 22.175c-.641 1.474-1.681 2.657-3.12 3.553-1.44.896-2.993 1.344-4.656 1.344h-4.033z",key:1})]))}l.defaultProps={role:"img","aria-label":"VOICEVOXのロゴ",viewBox:"0 0 500 108",xmlSpace:"preserve"},e.exports=l,l.default=l},4499:function(e,t,a){"use strict";t.Z=a.p+"static/landing-share-thumb-bae003080155cf8cc56d1fd7bf826bff.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f8ac425e1ef6ed455d03.js.map