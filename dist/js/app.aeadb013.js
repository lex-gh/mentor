(function(){"use strict";var e={3322:function(e,t,r){r.d(t,{O:function(){return i}});var n=r(1107);const i=(0,n.eI)("https://damcraxycrvztagnqymh.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbWNyYXh5Y3J2enRhZ25xeW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMTcxOTksImV4cCI6MjAwNzY5MzE5OX0.IYv-zOgTCSMFBAiOv-_Pc0gIfSmkqTc2M-5TQsHQfA4")},8362:function(e,t,r){var n=r(3322),i=r(1134);class a{async getMentors(){try{let{data:e}=await n.O.from("mentors").select();return e}catch(e){console.log(e)}}async createProfile(e){try{console.log(e);const{data:t,error:r}=await n.O.from("mentors").insert([{fullname:e.fullName,nickname:e.nickname,avatar:"",about:e.about,experience:e.experience,price:e.price,tags:e.tags.split(",")}]).select();if(r)throw new Error(r);const a=await i.Z.setAvatar(t[0].id,e.avatar);return await n.O.from("mentors").update({avatar:a}).eq("id",t[0].id).select(),{status:200,id:t[0].id}}catch(t){return t}}async getOneMentors(e){try{const{data:t,error:r}=await n.O.from("mentors").select().eq("id",e);return t}catch(t){console.log(t)}}}t.Z=new a},1134:function(e,t,r){var n=r(3322);class i{async setAvatar(e,t){try{if(!t)throw new Error("Avatar is not defined");const r=t.name.split(".").pop(),i=`${e}.${r}`,{data:a,error:o}=await n.O.storage.from("mentors").upload(i,t);if(o)throw new Error(o);return a.path}catch(r){return r}}getAvatar(e){try{const{data:t,error:r}=n.O.storage.from("mentors").getPublicUrl(e);if(r)throw new Error(r);return t.publicUrl}catch(t){return t}}}t.Z=new i},7141:function(e,t,r){var n=r(9242),i=r(3396);const a={id:"header",class:"w-full"},o={class:"container py-4 flex justify-between"},l=(0,i._)("h3",{class:"text-2xl text-gray-900 font-light md:block hidden"}," Mentor ",-1),s=(0,i._)("h3",{class:"text-2xl text-gray-900 font-light md:hidden block"},"TM",-1),c=(0,i._)("span",{class:"material-icons add mr-1"},null,-1);function u(e,t){const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",a,[(0,i._)("div",o,[(0,i.Wm)(r,{to:"/"},{default:(0,i.w5)((()=>[l,s])),_:1}),(0,i.Wm)(r,{to:"/create-profile",class:"flex items-center text-gray-900 text-md font-light"},{default:(0,i.w5)((()=>[c,(0,i.Uk)(" Стать ментором")])),_:1})])])}var d=r(89);const p={},f=(0,d.Z)(p,[["render",u]]);var m=f;const v={class:"main-layout container"};var g={__name:"App",setup(e){return(e,t)=>{const r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m),(0,i._)("div",v,[(0,i.Wm)(r)])],64)}}};const h=g;var x=h,b=r(8198);const y=(0,n.ri)(x);y.use(b["default"]).mount("#app")},8198:function(e,t,r){r.d(t,{default:function(){return me}});var n=r(2483),i=r(3396),a=r(4870);r(4528),r(1569);var o=r(9242);var l=r(7126);const s={class:"head py-4"},c={class:"search h-10 border-[1px] border-slate-600 flex relative rounded-lg overflow-hidden"},u=(0,i._)("span",{class:"material-icons search absolute top-2 left-2 text-xl text-slate-600"},null,-1),d=(0,i._)("div",{class:"tags py-4"},null,-1);var p={__name:"Filter",setup(e){const t=(0,a.iH)("");return(e,r)=>((0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",c,[u,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),onInput:r[1]||(r[1]=t=>e.$emit("update:modelValue",t.target.value)),class:"w-full h-full outline-none px-10 text-slate-700",type:"text",placeholder:"Название предмета, профессия или что угодно через запятую"},null,544),[[o.nr,t.value]])]),d]))}};const f=p;var m=f,v=r(7139);const g={class:"p-4 bg-white inline-block rounded-xl border-[1px] border-[#171a1f1a] cursor-pointer hover:shadow-md transition-shadow"},h={class:"max-w-60 h-60 overflow-hidden rounded-lg"},x=["src"],b={class:"pt-4 pb-2 text-xl block"},y={class:"star flex item-center gap-2 pb-2"},w=(0,i._)("span",{class:"text-light text-blue-500 hover:underline"},"3 отзыва",-1),_={class:"descr line-clamp-3 font-light text-sm flex-1"},k={class:"py-4"},O={class:"flex gap-2 flex-wrap"},j={class:"pt-2"},I={class:"flex items-center gap-2 text-slate-800 mb-1 last:mb-0"},M=(0,i._)("i",{class:"material-icons insights text-slate-700"},null,-1),D={class:"flex items-center gap-2 text-slate-800 mb-1 last:mb-0"},E=(0,i._)("i",{class:"material-icons currency_ruble text-slate-700"},null,-1);var C={__name:"MentorsItem",props:{profile:Object},setup(e){const t=e,r=(0,a.iH)(null),n=(0,i.Fl)((()=>"https://damcraxycrvztagnqymh.supabase.co/storage/v1/object/public/mentors/"+t.profile.avatar)),o=e=>{const t=[...e],r=t.length-3;return t.length>3&&t.splice(3,r,`+${r} навыка`),t};return(t,a)=>{const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("article",g,[(0,i.Wm)(l,{to:{name:"profile",params:{id:e.profile.id}},class:"h-full flex flex-col"},{default:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i._)("img",{class:"w-full h-auto object-cover",src:n.value},null,8,x)]),(0,i._)("h5",b,(0,v.zw)(e.profile.name),1),(0,i._)("div",y,[(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Math.floor(5*Math.random()+1),((e,t)=>((0,i.wg)(),(0,i.iD)("i",{class:"material-icons star text-yellow-500 block",key:t})))),128))]),w]),(0,i._)("div",_,(0,v.zw)(e.profile.about),1),(0,i._)("div",k,[(0,i._)("ul",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o(e.profile.tags),((e,t)=>((0,i.wg)(),(0,i.iD)("li",{key:t,class:"px-2 py-1 border-[1px] border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition text-xs font-light",ref_for:!0,ref_key:"tag",ref:r},(0,v.zw)(e),1)))),128))])]),(0,i._)("div",j,[(0,i._)("ul",null,[(0,i._)("li",I,[M,(0,i.Uk)(" "+(0,v.zw)(e.profile.experience)+" лет опыта ",1)]),(0,i._)("li",D,[E,(0,i.Uk)((0,v.zw)(e.profile.price),1)])])])])),_:1},8,["to"])])}}};const S=C;var T=S;JSON.parse('[{"avatar":"https://i.pravatar.cc/300?male","name":"Иван Петров","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur rem sapiente repellendus necessitatibus sequi mollitia excepturi tempore porro totam!","profile":"tutor","skills":["Математика","Физика"],"experience":"2-5","price":"Бесплатно"},{"avatar":"https://i.pravatar.cc/200?male","name":"Сергей Иванов","description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur rem sapiente repellendus necessitatibus sequi mollitia excepturi tempore porro totam!","profile":"mentor","skills":["JavaScript","C#"],"experience":"5-10","price":"По договоренности"}]');const A={class:"mentors"},q={key:0,class:"grid-auto-fill"},z={key:1,class:"grid-auto-fill"},H={key:2,class:"flex justify-center"},N=(0,i._)("button",{class:"my-8 px-8 py-4 bg-slate-800 text-white text-center rounded-lg max-w-[200px] mt-6"}," Еще менторы ",-1),P=[N];var Y={__name:"Mentors",props:{isProfile:String,mentors:Array},setup(e){const t=(0,a.iH)("");return(r,n)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,["modelValue"]),(0,i._)("div",A,[e.mentors?((0,i.wg)(),(0,i.iD)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.mentors,((e,t)=>((0,i.wg)(),(0,i.j4)(T,{key:t,profile:e},null,8,["profile"])))),128))])):((0,i.wg)(),(0,i.iD)("div",q,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(5,((e,t)=>(0,i.Wm)(l.Z,{key:t}))),64))])),e.mentors>10?((0,i.wg)(),(0,i.iD)("div",H,P)):(0,i.kq)("",!0)])],64))}};const W=Y;var Z=W;const L={class:"border-b-[1px]"},F=["aria-expanded"],J={class:"font-normal text-left"},U={class:"material-icons"},V={class:"accordion-content"},B={class:"px-2"};var K={__name:"QuestionItem",props:{title:String,description:String},setup(e){const t=(0,a.iH)(!1),r=()=>{t.value=!t.value};return(n,a)=>((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("button",{onClick:r,"aria-expanded":t.value,class:"w-full flex items-center justify-between py-4 px-2 outline-none transition-colors"},[(0,i._)("span",J,(0,v.zw)(e.title),1),(0,i._)("i",U,(0,v.zw)(t.value?"remove":"add"),1)],8,F),(0,i._)("div",V,[(0,i._)("p",B,(0,v.zw)(e.description),1)])]))}},Q=r(89);const R=(0,Q.Z)(K,[["__scopeId","data-v-457328f1"]]);var X=R;const $={class:"lg:w-3/4 mx-auto"};var G={__name:"Question",setup(e){const t=[{title:"Что такое TalentMentor?",description:"TalentMentor - это онлайн-платформа, которая поможет вам найти опытного наставника, который поделится своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей карьере или личностном развитии"},{title:"Как я могу стать ментором на TalentMentor?",description:"Очень просто. Достаточно оставить заявку, и мы обязательно вас добавим."}];return(e,r)=>((0,i.wg)(),(0,i.iD)("div",$,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(t,((e,t)=>(0,i.Wm)(X,{key:t,title:e.title,description:e.description},null,8,["title","description"]))),64))]))}};const ee=G;var te=ee,re=r(8362);const ne=(0,i.uE)('<section class="hero w-full md:p-8 lg:p-16 md:rounded-xl my-4 relative overflow-hidden flex flex-col"><div class="bg-[url(&#39;../assets/bg.jpg&#39;)] w-full h-full md:absolute top-0 left-0 bg-[0_80%] bg-[length:150%] min-h-[180px] mb-4 md:mb-0 rounded-lg md:rounded-none"></div><div class="md:w-2/3 md:bg-white md:p-8 rounded-xl z-50 relative"><h1 class="text-2xl lg:text-4xl font-bold text-slate-800"> Найдите идеального репетитора или ментора! </h1><p class="text-md font-bold py-4 text-slate-700"> Развивайте свой потенциал с наставниками по всему миру. </p><p class="text-md font-light text-slate-700"> TalentMentor - поможет вам найти опытного наставника, который поделится своим знанием и опытом, чтобы помочь вам достичь новых высот в вашей карьере или личностном развитии. </p><a href="#mentors" class="px-8 py-4 bg-slate-800 text-white text-center rounded-lg block max-w-[200px] mt-6">Найти ментора</a></div></section>',1),ie={class:"py-4",id:"mentors"},ae=(0,i._)("div",{class:"py-2"},[(0,i._)("h3",{class:"text-slate-800 text-xl md:text-4xl font-medium py-2"}," Наши менторы ")],-1),oe=(0,i.uE)('<section class="py-4"><h3 class="text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"> Как это работает </h3><div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons switch_account"></i> Выбери ментора </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons drive_file_rename_outline"></i> Напиши ему </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div><div><p class="flex items-center gap-2 mb-2 text-lg"><i class="material-icons forum"></i>Обсудите условия </p><span class="text-md font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos quis fugiat doloremque voluptates corporis pariatur enim hic natus ullam.</span></div></div></section>',1),le={class:"py-4"},se=(0,i._)("h3",{class:"text-slate-800 text-2xl md:text-4xl font-medium mb-8 text-center"}," FAQ ",-1);var ce={__name:"HomeView",setup(e){const t=(0,a.iH)(null);return(0,i.bv)((async()=>{t.value=await re.Z.getMentors()})),(e,r)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[ne,(0,i._)("section",ie,[ae,(0,i.Wm)(Z,{mentors:t.value},null,8,["mentors"])]),oe,(0,i._)("section",le,[se,(0,i.Wm)(te)])],64))}};const ue=ce;var de=ue;const pe=[{path:"/",name:"home",component:de},{path:"/profile/:id",name:"profile",component:()=>r.e(29).then(r.bind(r,6029))},{path:"/create-profile",name:"create",component:()=>r.e(326).then(r.bind(r,3326))}],fe=(0,n.p7)({history:(0,n.PO)("/"),routes:pe});var me=fe},7126:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(3396);const i={class:"flex lg:flex-row flex-col animate-pulse h-full p-4 border-[1px] bg-white rounded-xl gap-2"},a=(0,n.uE)('<div class="w-full lg:w-2/5 bg-gray-300 h-60 rounded-xl"></div><div class="lg:flex-1"><div class="w-80 bg-gray-300 h-8 rounded-md hidden lg:block"></div><div class="flex-1 py-2"><div class="w-full bg-gray-300 h-2 rounded-md my-2"></div><div class="w-full bg-gray-300 h-2 rounded-md my-2"></div><div class="w-full bg-gray-300 h-2 rounded-md my-2"></div><div class="w-full bg-gray-300 h-2 rounded-md my-2"></div></div><div class="flex flex-wrap gap-2 py-2"><div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div><div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div><div class="w-24 h-2 bg-gray-300 rounded-md py-2"></div></div><div class="py-2"><div class="w-40 h-6 bg-gray-300 rounded-md py-2 mb-2"></div><div class="w-40 h-6 bg-gray-300 rounded-md py-2"></div></div></div>',2),o=[a];var l={__name:"Skeleton",props:{horizontal:{type:Boolean}},setup(e){return(e,t)=>((0,n.wg)(),(0,n.iD)("div",i,o))}};const s=l;var c=s}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],a=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,i,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},r.d(a,o),a}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{29:"fe6e4955",326:"0e6036ce"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".11919c3a.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mentor:";r.l=function(n,i,a,o){if(e[n])e[n].push(i);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[i];var p=function(t,r){l.onerror=l.onload=null,clearTimeout(f);var i=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=o,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=r[n],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){i=o[n],a=i.getAttribute("data-href");if(a===e||a===t)return i}},n=function(n){return new Promise((function(i,a){var o=r.miniCssF(n),l=r.p+o;if(t(o,l))return i();e(n,l,null,i,a)}))},i={143:0};r.f.miniCss=function(e,t){var r={326:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=n(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(r,n){i=e[t]=[r,n]}));n.push(i[2]=a);var o=r.p+r.u(t),l=new Error,s=function(n){if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,i[1](l)}};r.l(o,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],l=n[1],s=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var u=s(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self["webpackChunkmentor"]=self["webpackChunkmentor"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7141)}));n=r.O(n)})();
//# sourceMappingURL=app.aeadb013.js.map