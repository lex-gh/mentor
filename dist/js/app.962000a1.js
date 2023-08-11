(function(){"use strict";var e={8857:function(e,t,n){var i=n(9242),r=n(3396);const l={id:"header",class:"w-full"},o={class:"container py-4 flex justify-between"},s=(0,r._)("h3",{class:"text-2xl text-gray-900 font-light md:block hidden"}," Mentor ",-1),a=(0,r._)("h3",{class:"text-2xl text-gray-900 font-light md:hidden block"},"TM",-1),c=(0,r._)("span",{class:"material-icons add mr-1"},null,-1);function u(e,t){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",l,[(0,r._)("div",o,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[s,a])),_:1}),(0,r.Wm)(n,{to:"/mentor",class:"flex items-center text-gray-900 text-md font-light"},{default:(0,r.w5)((()=>[c,(0,r.Uk)(" Стать ментором")])),_:1})])])}var d=n(89);const p={},m=(0,d.Z)(p,[["render",u]]);var f=m;const v={class:"main-layout container"};var x={__name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(f),(0,r._)("div",v,[(0,r.Wm)(n)])],64)}}};const g=x;var h=g,b=n(2483),_=n(4870),w=n(7139);const y={class:"p-4 bg-white inline-block rounded-xl border-[1px] border-[#171a1f1a] cursor-pointer hover:shadow-md transition-shadow"},k={class:"max-w-60 h-60 overflow-hidden rounded-lg"},j=["src"],O={class:"pt-4 pb-2 text-xl block"},D={class:"star flex item-center gap-2 pb-2"},T=(0,r._)("span",{class:"text-light text-blue-500 hover:underline"},"3 отзыва",-1),q={class:"descr line-clamp-3 font-light text-sm"},M={class:"py-4"},P={class:"flex gap-2"},H={class:"pt-2"},S={class:"flex items-center gap-2 text-slate-800 mb-1 last:mb-0"},z=(0,r._)("i",{class:"material-icons insights text-slate-700"},null,-1),E={class:"flex items-center gap-2 text-slate-800 mb-1 last:mb-0"},C=(0,r._)("i",{class:"material-icons currency_ruble text-slate-700"},null,-1);var L={__name:"vUsersItem",props:{profile:Object},setup(e){return(t,n)=>((0,r.wg)(),(0,r.iD)("article",y,[(0,r._)("div",k,[(0,r._)("img",{class:"w-full h-auto object-cover",src:e.profile.avatar},null,8,j)]),(0,r._)("h5",O,(0,w.zw)(e.profile.name),1),(0,r._)("div",D,[(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Math.floor(5*Math.random()+1),((e,t)=>((0,r.wg)(),(0,r.iD)("i",{class:"material-icons star text-yellow-500 block",key:t})))),128))]),T]),(0,r._)("div",q,(0,w.zw)(e.profile.description),1),(0,r._)("div",M,[(0,r._)("ul",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.profile.skills,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t,class:"px-2 py-1 border-[1px] border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition text-xs font-light"},(0,w.zw)(e),1)))),128))])]),(0,r._)("div",H,[(0,r._)("ul",null,[(0,r._)("li",S,[z,(0,r.Uk)(" "+(0,w.zw)(e.profile.experience)+" лет опыта ",1)]),(0,r._)("li",E,[C,(0,r.Uk)((0,w.zw)(e.profile.price),1)])])])]))}};const U=L;var Y=U,A=JSON.parse('[{"avatar":"https://i.pravatar.cc/300?male","name":"Иван Петров","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur rem sapiente repellendus necessitatibus sequi mollitia excepturi tempore porro totam!","profile":"tutor","skills":["Математика","Физика"],"experience":"2-5","price":"Бесплатно"},{"avatar":"https://i.pravatar.cc/200?male","name":"Сергей Иванов","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur rem sapiente repellendus necessitatibus sequi mollitia excepturi tempore porro totam!","profile":"mentor","skills":["JavaScript","C#"],"experience":"5-10","price":"По договоренности"}]');const W=(0,r.uE)('<div class="head py-4"><div class="search h-10 border-[1px] border-slate-600 flex relative rounded-lg overflow-hidden"><span class="material-icons search absolute top-2 left-2 text-xl text-slate-600"></span><input class="w-full h-full outline-none px-10 text-slate-700" type="text" placeholder="Название предмета, профессия или что угодно через запятую"></div><div class="tags py-4"></div></div>',1),I={class:"mentors"},K={class:"content grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"},N=(0,r._)("div",{class:"flex justify-center"},[(0,r._)("button",{class:"my-8 px-8 py-4 bg-slate-800 text-white text-center rounded-lg max-w-[200px] mt-6"}," Еще менторы ")],-1);var F={__name:"vUsers",props:{isProfile:String},setup(e){const t=e,n=()=>A.filter((e=>e.profile===t.isProfile));return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[W,(0,r._)("div",I,[(0,r._)("div",K,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n(),((e,t)=>((0,r.wg)(),(0,r.j4)(Y,{key:t,profile:e},null,8,["profile"])))),128))]),N])],64))}};const R=F;var V=R;const G={class:"border-b-[1px]"},J=["aria-expanded"],Q={class:"font-normal text-left"},Z={class:"material-icons"},B={class:"accordion-content"},X={class:"px-2"};var $={__name:"vQuestionItem",props:{title:String,description:String},setup(e){const t=(0,_.iH)(!1),n=()=>{t.value=!t.value};return(i,l)=>((0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("button",{onClick:n,"aria-expanded":t.value,class:"w-full flex items-center justify-between py-4 px-2 outline-none transition-colors"},[(0,r._)("span",Q,(0,w.zw)(e.title),1),(0,r._)("i",Z,(0,w.zw)(t.value?"remove":"add"),1)],8,J),(0,r._)("div",B,[(0,r._)("p",X,(0,w.zw)(e.description),1)])]))}};const ee=(0,d.Z)($,[["__scopeId","data-v-484df1de"]]);var te=ee;const ne=(0,r.uE)('<section class="hero w-full md:p-8 lg:p-16 md:rounded-xl my-4 relative overflow-hidden flex flex-col"><div class="bg-[url(&#39;../assets/bg.jpg&#39;)] w-full h-full md:absolute top-0 left-0 bg-[0_80%] bg-[length:150%] min-h-[180px] mb-4 md:mb-0 rounded-lg md:rounded-none"></div><div class="md:w-2/3 md:bg-white md:p-8 rounded-xl z-50 relative"><h1 class="text-2xl lg:text-4xl font-bold text-slate-800"> Найдите идеального репетитора или ментора! </h1><p class="text-md font-bold py-4 text-slate-700"> Развивайте свой потенциал с наставниками по всему миру. </p><p class="text-md font-light text-slate-700"> TalentMentor - поможет вам найти опытного наставника, который поделится своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей карьере или личностном развитии. </p><a href="#mentors" class="px-8 py-4 bg-slate-800 text-white text-center rounded-lg block max-w-[200px] mt-6">Найти ментора</a></div></section>',1),ie={class:"py-4",id:"mentors"},re={class:"py-2 flex justify-center items-center gap-2"},le={class:"border-[1px] border-slate-800 inline-flex rounded-xl p-1"},oe={class:"parent-input py-2 px-4 text-slate-800 text-base md:text-lg font-light rounded-l-xl"},se=(0,r._)("label",{class:"cursor-pointer",for:"1"},"ищу репетитора",-1),ae={class:"parent-input py-2 px-4 text-slate-800 text-base md:text-lg font-light rounded-r-xl"},ce=(0,r._)("label",{class:"cursor-pointer",for:"2"},"Ищу ментора",-1),ue=(0,r.uE)('<section class="py-4"><h3 class="text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"> Как это работает </h3><div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons switch_account"></i> Выбери ментора </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons drive_file_rename_outline"></i> Напиши ему </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons forum"></i>Обсудите условия </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div></div></section>',1),de={class:"py-4"},pe=(0,r._)("h3",{class:"text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"}," FAQ ",-1),me={class:"lg:w-3/4 mx-auto"};var fe={__name:"HomeView",setup(e){const t=(0,_.iH)("tutor"),n=[{title:"Что такое TalentMentor?",description:"TalentMentor - это онлайн-платформа, которая поможет вам найти опытного наставника, который поделится своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей карьере или личностном развитии"},{title:"Как я могу стать ментором на TalentMentor?",description:"Очень просто. Достаточно оставить заявку, и мы обязательно вас добавим."}];return(e,l)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[ne,(0,r._)("section",ie,[(0,r._)("div",re,[(0,r._)("div",le,[(0,r._)("div",oe,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),class:"hidden",type:"radio",name:"radio-group",id:"1",value:"tutor",checked:""},null,512),[[i.G2,t.value]]),se]),(0,r._)("div",ae,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e),class:"hidden",type:"radio",name:"radio-group",id:"2",value:"mentor"},null,512),[[i.G2,t.value]]),ce])])]),(0,r.Wm)(V,{isProfile:t.value},null,8,["isProfile"])]),ue,(0,r._)("section",de,[pe,(0,r._)("div",me,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)(n,((e,t)=>(0,r.Wm)(te,{key:t,title:e.title,description:e.description},null,8,["title","description"]))),64))])])],64))}};const ve=fe;var xe=ve;const ge=[{path:"/",name:"home",component:xe},{path:"/mentor",name:"mentor",component:()=>n.e(443).then(n.bind(n,6298))}],he=(0,b.p7)({history:(0,b.PO)("/mentor/"),routes:ge});var be=he;const _e=(0,i.ri)(h);_e.use(be).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,l){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],l=e[u][2];for(var s=!0,a=0;a<i.length;a++)(!1&l||o>=l)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(s=!1,l<o&&(o=l));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[i,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.0f5eb349.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mentor:";n.l=function(i,r,l,o){if(e[i])e[i].push(r);else{var s,a;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+l){s=d;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+l),s.src=i),e[i]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/mentor/"}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var l=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=l);var o=n.p+n.u(t),s=new Error,a=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var l=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+l+": "+o+")",s.name="ChunkLoadError",s.type=l,s.request=o,r[1](s)}};n.l(o,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,l,o=i[0],s=i[1],a=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(a)var u=a(n)}for(t&&t(i);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},i=self["webpackChunkmentor"]=self["webpackChunkmentor"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8857)}));i=n.O(i)})();
//# sourceMappingURL=app.962000a1.js.map