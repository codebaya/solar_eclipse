"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{18402:function(e,t,s){s.d(t,{ConfigCtrl:function(){return y},zv:function(){return u},uA:function(){return h},ExplorerCtrl:function(){return M},jb:function(){return D},OptionsCtrl:function(){return b},AV:function(){return c},ThemeCtrl:function(){return R},ToastCtrl:function(){return $}});var r=s(72478);let isObject=e=>"object"==typeof e&&null!==e,o=new WeakMap,n=new WeakSet,buildProxyFunction=(e=Object.is,t=(e,t)=>new Proxy(e,t),s=e=>isObject(e)&&!n.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),i=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=new WeakMap,l=(e,t,s=i)=>{let c=a.get(e);if((null==c?void 0:c[0])===t)return c[1];let u=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,r.jc)(u,!0),a.set(e,[t,u]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(u,t))return;let i=Reflect.get(e,t),a={value:i,enumerable:!0,configurable:!0};if(n.has(i))(0,r.jc)(i,!1);else if(i instanceof Promise)delete a.value,a.get=()=>s(i);else if(o.has(i)){let[e,t]=o.get(i);a.value=l(e,t(),s)}Object.defineProperty(u,t,a)}),u},c=new WeakMap,u=[1,1],p=i=>{if(!isObject(i))throw Error("object required");let a=c.get(i);if(a)return a;let f=u[0],h=new Set,notifyUpdate=(e,t=++u[0])=>{f!==t&&(f=t,h.forEach(s=>s(e,t)))},g=u[1],ensureVersion=(e=++u[1])=>(g===e||h.size||(g=e,b.forEach(([t])=>{let s=t[1](e);s>f&&(f=s)})),f),createPropListener=e=>(t,s)=>{let r=[...t];r[1]=[e,...r[1]],notifyUpdate(r,s)},b=new Map,addPropListener=(e,t)=>{if(b.has(e))throw Error("prop listener already exists");if(h.size){let s=t[3](createPropListener(e));b.set(e,[t,s])}else b.set(e,[t])},removePropListener=e=>{var t;let s=b.get(e);s&&(b.delete(e),null==(t=s[1])||t.call(s))},addListener=e=>{h.add(e),1===h.size&&b.forEach(([e,t],s)=>{if(t)throw Error("remove already exists");let r=e[3](createPropListener(s));b.set(s,[e,r])});let removeListener=()=>{h.delete(e),0===h.size&&b.forEach(([e,t],s)=>{t&&(t(),b.set(s,[e]))})};return removeListener},m=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),y={deleteProperty(e,t){let s=Reflect.get(e,t);removePropListener(t);let r=Reflect.deleteProperty(e,t);return r&&notifyUpdate(["delete",[t],s]),r},set(t,i,a,l){let u=Reflect.has(t,i),f=Reflect.get(t,i,l);if(u&&(e(f,a)||c.has(a)&&e(f,c.get(a))))return!0;removePropListener(i),isObject(a)&&(a=(0,r.o5)(a)||a);let h=a;if(a instanceof Promise)a.then(e=>{a.status="fulfilled",a.value=e,notifyUpdate(["resolve",[i],e])}).catch(e=>{a.status="rejected",a.reason=e,notifyUpdate(["reject",[i],e])});else{!o.has(a)&&s(a)&&(h=p(a));let e=!n.has(h)&&o.get(h);e&&addPropListener(i,e)}return Reflect.set(t,i,h,l),notifyUpdate(["set",[i],a,f]),!0}},w=t(m,y);c.set(i,w);let v=[m,ensureVersion,l,addListener];return o.set(w,v),Reflect.ownKeys(i).forEach(e=>{let t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(w[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(m,e,t)}),w})=>[p,o,n,e,t,s,i,a,l,c,u],[i]=buildProxyFunction();function proxy(e={}){return i(e)}function subscribe(e,t,s){let r;let n=o.get(e);n||console.warn("Please use proxy object");let i=[],a=n[3],l=!1,c=a(e=>{if(i.push(e),s){t(i.splice(0));return}r||(r=Promise.resolve().then(()=>{r=void 0,l&&t(i.splice(0))}))});return l=!0,()=>{l=!1,c()}}var a=s(48764);let l=proxy({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),c={state:l,subscribe:e=>subscribe(l,()=>e(l)),push(e,t){e!==l.view&&(l.view=e,t&&(l.data=t),l.history.push(e))},reset(e){l.view=e,l.history=[e]},replace(e){l.history.length>1&&(l.history[l.history.length-1]=e,l.view=e)},goBack(){if(l.history.length>1){l.history.pop();let[e]=l.history.slice(-1);l.view=e}},setData(e){l.data=e}},u={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"u">typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>u.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){let e=navigator.userAgent.toLowerCase();return u.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(u.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},formatUniversalUrl(e,t,s){if(!u.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);let o=encodeURIComponent(t);return`${r}wc?uri=${o}`},wait:async e=>new Promise(t=>{setTimeout(t,e)}),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{let[t]=e.split("?");localStorage.setItem(u.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"u">typeof localStorage&&localStorage.setItem(u.WCM_VERSION,"2.5.9")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;let t=null==(e=c.state.data)?void 0:e.Wallet;if(!t)throw Error('Missing "Wallet" view data');return t}},p="u">typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),f=proxy({enabled:p,userSessionId:"",events:[],connectedWalletId:void 0}),h={state:f,subscribe:e=>subscribe(f.events,()=>e(function(e,t){let s=o.get(e);s||console.warn("Please use proxy object");let[r,n,i]=s;return i(r,n(),void 0)}(f.events[f.events.length-1]))),initialize(){f.enabled&&"u">typeof(null==crypto?void 0:crypto.randomUUID)&&(f.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){f.connectedWalletId=e},click(e){if(f.enabled){let t={type:"CLICK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},track(e){if(f.enabled){let t={type:"TRACK",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}},view(e){if(f.enabled){let t={type:"VIEW",name:e.name,userSessionId:f.userSessionId,timestamp:Date.now(),data:e};f.events.push(t)}}},g=proxy({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),b={state:g,subscribe:e=>subscribe(g,()=>e(g)),setChains(e){g.chains=e},setWalletConnectUri(e){g.walletConnectUri=e},setIsCustomDesktop(e){g.isCustomDesktop=e},setIsCustomMobile(e){g.isCustomMobile=e},setIsDataLoaded(e){g.isDataLoaded=e},setIsUiLoaded(e){g.isUiLoaded=e},setIsAuth(e){g.isAuth=e}},m=proxy({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),y={state:m,subscribe:e=>subscribe(m,()=>e(m)),setConfig(e){var t,s;h.initialize(),b.setChains(e.chains),b.setIsAuth(!!e.enableAuthMode),b.setIsCustomMobile(!!(null==(t=e.mobileWallets)?void 0:t.length)),b.setIsCustomDesktop(!!(null==(s=e.desktopWallets)?void 0:s.length)),u.setModalVersionInStorage(),Object.assign(m,e)}},w="https://explorer-api.walletconnect.com";async function W(e,t){let s=new URL(e,w);return s.searchParams.append("projectId",y.state.projectId),Object.entries(t).forEach(([e,t])=>{t&&s.searchParams.append(e,String(t))}),(await fetch(s)).json()}let v={getDesktopListings:async e=>W("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>W("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>W("/w3m/v1/getInjectedListings",e),getAllListings:async e=>W("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${w}/w3m/v1/getWalletImage/${e}?projectId=${y.state.projectId}`,getAssetImageUrl:e=>`${w}/w3m/v1/getAssetImage/${e}?projectId=${y.state.projectId}`};var I=Object.defineProperty,C=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,B=(e,t)=>{for(var s in t||(t={}))L.call(t,s)&&U(e,s,t[s]);if(C)for(var s of C(t))E.call(t,s)&&U(e,s,t[s]);return e};let O=u.isMobile(),A=proxy({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),M={state:A,async getRecomendedWallets(){let{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=y.state;if("NONE"===e||"ALL"===t&&!e)return A.recomendedWallets;if(u.isArray(e)){let t={recommendedIds:e.join(",")},{listings:s}=await v.getAllListings(t),r=Object.values(s);r.sort((t,s)=>{let r=e.indexOf(t.id),o=e.indexOf(s.id);return r-o}),A.recomendedWallets=r}else{let{chains:e,isAuth:s}=b.state,r=e?.join(","),o=u.isArray(t),n={page:1,sdks:s?"auth_v1":void 0,entries:u.RECOMMENDED_WALLET_AMOUNT,chains:r,version:2,excludedIds:o?t.join(","):void 0},{listings:i}=O?await v.getMobileListings(n):await v.getDesktopListings(n);A.recomendedWallets=Object.values(i)}return A.recomendedWallets},async getWallets(e){let t=B({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=y.state,{recomendedWallets:o}=A;if("ALL"===r)return A.wallets;o.length?t.excludedIds=o.map(e=>e.id).join(","):u.isArray(s)&&(t.excludedIds=s.join(",")),u.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),b.state.isAuth&&(t.sdks="auth_v1");let{page:n,search:i}=e,{listings:a,total:l}=O?await v.getMobileListings(t):await v.getDesktopListings(t),c=Object.values(a),p=i?"search":"wallets";return A[p]={listings:[...A[p].listings,...c],total:l,page:n??1},{listings:c,total:l}},getWalletImageUrl:e=>v.getWalletImageUrl(e),getAssetImageUrl:e=>v.getAssetImageUrl(e),resetSearch(){A.search={listings:[],total:0,page:1}}},P=proxy({open:!1}),D={state:P,subscribe:e=>subscribe(P,()=>e(P)),open:async e=>new Promise(t=>{let{isUiLoaded:s,isDataLoaded:r}=b.state;if(b.setWalletConnectUri(e?.uri),b.setChains(e?.chains),c.reset("ConnectWallet"),s&&r)P.open=!0,t();else{let e=setInterval(()=>{let s=b.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),P.open=!0,t())},200)}}),close(){P.open=!1}};var k=Object.defineProperty,x=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,j=(e,t,s)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,z=(e,t)=>{for(var s in t||(t={}))N.call(t,s)&&j(e,s,t[s]);if(x)for(var s of x(t))S.call(t,s)&&j(e,s,t[s]);return e};let T=proxy({themeMode:"u">typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),R={state:T,subscribe:e=>subscribe(T,()=>e(T)),setThemeConfig(e){let{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=z({},s))}},_=proxy({open:!1,message:"",variant:"success"}),$={state:_,subscribe:e=>subscribe(_,()=>e(_)),openToast(e,t){_.open=!0,_.message=e,_.variant=t},closeToast(){_.open=!1}};"u">typeof window&&(window.Buffer||(window.Buffer=a.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}),window.global||(window.global=window))},59343:function(e,t,s){s.d(t,{WalletConnectModal:function(){return d}});var r=s(18402);let d=class d{constructor(e){this.openModal=r.jb.open,this.closeModal=r.jb.close,this.subscribeModal=r.jb.subscribe,this.setTheme=r.ThemeCtrl.setThemeConfig,r.ThemeCtrl.setThemeConfig(e),r.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if("u">typeof window){await s.e(391).then(s.bind(s,41391));let e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),r.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);