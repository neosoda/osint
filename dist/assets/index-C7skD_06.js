(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function c(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(p){if(p.ep)return;p.ep=!0;const m=c(p);fetch(p.href,m)}})();function iv(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fo={exports:{}},Xa={};var Sm;function av(){if(Sm)return Xa;Sm=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(o,p,m){var g=null;if(m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),"key"in p){m={};for(var y in p)y!=="key"&&(m[y]=p[y])}else m=p;return p=m.ref,{$$typeof:l,type:o,key:g,ref:p!==void 0?p:null,props:m}}return Xa.Fragment=u,Xa.jsx=c,Xa.jsxs=c,Xa}var qm;function sv(){return qm||(qm=1,Fo.exports=av()),Fo.exports}var S=sv(),Jo={exports:{}},le={};var Tm;function lv(){if(Tm)return le;Tm=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),I=Symbol.iterator;function G(x){return x===null||typeof x!="object"?null:(x=I&&x[I]||x["@@iterator"],typeof x=="function"?x:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,M={};function X(x,w,B){this.props=x,this.context=w,this.refs=M,this.updater=B||_}X.prototype.isReactComponent={},X.prototype.setState=function(x,w){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,w,"setState")},X.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ie(){}ie.prototype=X.prototype;function J(x,w,B){this.props=x,this.context=w,this.refs=M,this.updater=B||_}var ae=J.prototype=new ie;ae.constructor=J,j(ae,X.prototype),ae.isPureReactComponent=!0;var se=Array.isArray;function he(){}var ee={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function qe(x,w,B){var V=B.ref;return{$$typeof:l,type:x,key:w,ref:V!==void 0?V:null,props:B}}function dt(x,w){return qe(x.type,w,x.props)}function nt(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function je(x){var w={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(B){return w[B]})}var pt=/\/+/g;function et(x,w){return typeof x=="object"&&x!==null&&x.key!=null?je(""+x.key):w.toString(36)}function Ne(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(he,he):(x.status="pending",x.then(function(w){x.status==="pending"&&(x.status="fulfilled",x.value=w)},function(w){x.status==="pending"&&(x.status="rejected",x.reason=w)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function L(x,w,B,V,K){var $=typeof x;($==="undefined"||$==="boolean")&&(x=null);var ge=!1;if(x===null)ge=!0;else switch($){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(x.$$typeof){case l:case u:ge=!0;break;case C:return ge=x._init,L(ge(x._payload),w,B,V,K)}}if(ge)return K=K(x),ge=V===""?"."+et(x,0):V,se(K)?(B="",ge!=null&&(B=ge.replace(pt,"$&/")+"/"),L(K,w,B,"",function(hn){return hn})):K!=null&&(nt(K)&&(K=dt(K,B+(K.key==null||x&&x.key===K.key?"":(""+K.key).replace(pt,"$&/")+"/")+ge)),w.push(K)),1;ge=0;var Xe=V===""?".":V+":";if(se(x))for(var ue=0;ue<x.length;ue++)V=x[ue],$=Xe+et(V,ue),ge+=L(V,w,B,$,K);else if(ue=G(x),typeof ue=="function")for(x=ue.call(x),ue=0;!(V=x.next()).done;)V=V.value,$=Xe+et(V,ue++),ge+=L(V,w,B,$,K);else if($==="object"){if(typeof x.then=="function")return L(Ne(x),w,B,V,K);throw w=String(x),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return ge}function U(x,w,B){if(x==null)return x;var V=[],K=0;return L(x,V,"","",function($){return w.call(B,$,K++)}),V}function te(x){if(x._status===-1){var w=x._result;w=w(),w.then(function(B){(x._status===0||x._status===-1)&&(x._status=1,x._result=B)},function(B){(x._status===0||x._status===-1)&&(x._status=2,x._result=B)}),x._status===-1&&(x._status=0,x._result=w)}if(x._status===1)return x._result.default;throw x._result}var be=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},H={map:U,forEach:function(x,w,B){U(x,function(){w.apply(this,arguments)},B)},count:function(x){var w=0;return U(x,function(){w++}),w},toArray:function(x){return U(x,function(w){return w})||[]},only:function(x){if(!nt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return le.Activity=q,le.Children=H,le.Component=X,le.Fragment=c,le.Profiler=p,le.PureComponent=J,le.StrictMode=o,le.Suspense=h,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,le.__COMPILER_RUNTIME={__proto__:null,c:function(x){return ee.H.useMemoCache(x)}},le.cache=function(x){return function(){return x.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(x,w,B){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var V=j({},x.props),K=x.key;if(w!=null)for($ in w.key!==void 0&&(K=""+w.key),w)!P.call(w,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&w.ref===void 0||(V[$]=w[$]);var $=arguments.length-2;if($===1)V.children=B;else if(1<$){for(var ge=Array($),Xe=0;Xe<$;Xe++)ge[Xe]=arguments[Xe+2];V.children=ge}return qe(x.type,K,V)},le.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:m,_context:x},x},le.createElement=function(x,w,B){var V,K={},$=null;if(w!=null)for(V in w.key!==void 0&&($=""+w.key),w)P.call(w,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(K[V]=w[V]);var ge=arguments.length-2;if(ge===1)K.children=B;else if(1<ge){for(var Xe=Array(ge),ue=0;ue<ge;ue++)Xe[ue]=arguments[ue+2];K.children=Xe}if(x&&x.defaultProps)for(V in ge=x.defaultProps,ge)K[V]===void 0&&(K[V]=ge[V]);return qe(x,$,K)},le.createRef=function(){return{current:null}},le.forwardRef=function(x){return{$$typeof:y,render:x}},le.isValidElement=nt,le.lazy=function(x){return{$$typeof:C,_payload:{_status:-1,_result:x},_init:te}},le.memo=function(x,w){return{$$typeof:f,type:x,compare:w===void 0?null:w}},le.startTransition=function(x){var w=ee.T,B={};ee.T=B;try{var V=x(),K=ee.S;K!==null&&K(B,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(he,be)}catch($){be($)}finally{w!==null&&B.types!==null&&(w.types=B.types),ee.T=w}},le.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},le.use=function(x){return ee.H.use(x)},le.useActionState=function(x,w,B){return ee.H.useActionState(x,w,B)},le.useCallback=function(x,w){return ee.H.useCallback(x,w)},le.useContext=function(x){return ee.H.useContext(x)},le.useDebugValue=function(){},le.useDeferredValue=function(x,w){return ee.H.useDeferredValue(x,w)},le.useEffect=function(x,w){return ee.H.useEffect(x,w)},le.useEffectEvent=function(x){return ee.H.useEffectEvent(x)},le.useId=function(){return ee.H.useId()},le.useImperativeHandle=function(x,w,B){return ee.H.useImperativeHandle(x,w,B)},le.useInsertionEffect=function(x,w){return ee.H.useInsertionEffect(x,w)},le.useLayoutEffect=function(x,w){return ee.H.useLayoutEffect(x,w)},le.useMemo=function(x,w){return ee.H.useMemo(x,w)},le.useOptimistic=function(x,w){return ee.H.useOptimistic(x,w)},le.useReducer=function(x,w,B){return ee.H.useReducer(x,w,B)},le.useRef=function(x){return ee.H.useRef(x)},le.useState=function(x){return ee.H.useState(x)},le.useSyncExternalStore=function(x,w,B){return ee.H.useSyncExternalStore(x,w,B)},le.useTransition=function(){return ee.H.useTransition()},le.version="19.2.4",le}var Cm;function du(){return Cm||(Cm=1,Jo.exports=lv()),Jo.exports}var D=du();const bl=iv(D);var Ko={exports:{}},Ya={},Wo={exports:{}},$o={};var Am;function rv(){return Am||(Am=1,(function(l){function u(L,U){var te=L.length;L.push(U);e:for(;0<te;){var be=te-1>>>1,H=L[be];if(0<p(H,U))L[be]=U,L[te]=H,te=be;else break e}}function c(L){return L.length===0?null:L[0]}function o(L){if(L.length===0)return null;var U=L[0],te=L.pop();if(te!==U){L[0]=te;e:for(var be=0,H=L.length,x=H>>>1;be<x;){var w=2*(be+1)-1,B=L[w],V=w+1,K=L[V];if(0>p(B,te))V<H&&0>p(K,B)?(L[be]=K,L[V]=te,be=V):(L[be]=B,L[w]=te,be=w);else if(V<H&&0>p(K,te))L[be]=K,L[V]=te,be=V;else break e}}return U}function p(L,U){var te=L.sortIndex-U.sortIndex;return te!==0?te:L.id-U.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var g=Date,y=g.now();l.unstable_now=function(){return g.now()-y}}var h=[],f=[],C=1,q=null,I=3,G=!1,_=!1,j=!1,M=!1,X=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ae(L){for(var U=c(f);U!==null;){if(U.callback===null)o(f);else if(U.startTime<=L)o(f),U.sortIndex=U.expirationTime,u(h,U);else break;U=c(f)}}function se(L){if(j=!1,ae(L),!_)if(c(h)!==null)_=!0,he||(he=!0,je());else{var U=c(f);U!==null&&Ne(se,U.startTime-L)}}var he=!1,ee=-1,P=5,qe=-1;function dt(){return M?!0:!(l.unstable_now()-qe<P)}function nt(){if(M=!1,he){var L=l.unstable_now();qe=L;var U=!0;try{e:{_=!1,j&&(j=!1,ie(ee),ee=-1),G=!0;var te=I;try{t:{for(ae(L),q=c(h);q!==null&&!(q.expirationTime>L&&dt());){var be=q.callback;if(typeof be=="function"){q.callback=null,I=q.priorityLevel;var H=be(q.expirationTime<=L);if(L=l.unstable_now(),typeof H=="function"){q.callback=H,ae(L),U=!0;break t}q===c(h)&&o(h),ae(L)}else o(h);q=c(h)}if(q!==null)U=!0;else{var x=c(f);x!==null&&Ne(se,x.startTime-L),U=!1}}break e}finally{q=null,I=te,G=!1}U=void 0}}finally{U?je():he=!1}}}var je;if(typeof J=="function")je=function(){J(nt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,et=pt.port2;pt.port1.onmessage=nt,je=function(){et.postMessage(null)}}else je=function(){X(nt,0)};function Ne(L,U){ee=X(function(){L(l.unstable_now())},U)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(L){L.callback=null},l.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<L?Math.floor(1e3/L):5},l.unstable_getCurrentPriorityLevel=function(){return I},l.unstable_next=function(L){switch(I){case 1:case 2:case 3:var U=3;break;default:U=I}var te=I;I=U;try{return L()}finally{I=te}},l.unstable_requestPaint=function(){M=!0},l.unstable_runWithPriority=function(L,U){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var te=I;I=L;try{return U()}finally{I=te}},l.unstable_scheduleCallback=function(L,U,te){var be=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?be+te:be):te=be,L){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=te+H,L={id:C++,callback:U,priorityLevel:L,startTime:te,expirationTime:H,sortIndex:-1},te>be?(L.sortIndex=te,u(f,L),c(h)===null&&L===c(f)&&(j?(ie(ee),ee=-1):j=!0,Ne(se,te-be))):(L.sortIndex=H,u(h,L),_||G||(_=!0,he||(he=!0,je()))),L},l.unstable_shouldYield=dt,l.unstable_wrapCallback=function(L){var U=I;return function(){var te=I;I=U;try{return L.apply(this,arguments)}finally{I=te}}}})($o)),$o}var Em;function ov(){return Em||(Em=1,Wo.exports=rv()),Wo.exports}var eu={exports:{}},tt={};var Om;function uv(){if(Om)return tt;Om=1;var l=du();function u(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)f+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(h,f,C){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:q==null?null:""+q,children:h,containerInfo:f,implementation:C}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,tt.createPortal=function(h,f){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(u(299));return m(h,f,null,C)},tt.flushSync=function(h){var f=g.T,C=o.p;try{if(g.T=null,o.p=2,h)return h()}finally{g.T=f,o.p=C,o.d.f()}},tt.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,o.d.C(h,f))},tt.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},tt.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var C=f.as,q=y(C,f.crossOrigin),I=typeof f.integrity=="string"?f.integrity:void 0,G=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;C==="style"?o.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:q,integrity:I,fetchPriority:G}):C==="script"&&o.d.X(h,{crossOrigin:q,integrity:I,fetchPriority:G,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},tt.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var C=y(f.as,f.crossOrigin);o.d.M(h,{crossOrigin:C,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&o.d.M(h)},tt.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var C=f.as,q=y(C,f.crossOrigin);o.d.L(h,C,{crossOrigin:q,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},tt.preloadModule=function(h,f){if(typeof h=="string")if(f){var C=y(f.as,f.crossOrigin);o.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:C,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else o.d.m(h)},tt.requestFormReset=function(h){o.d.r(h)},tt.unstable_batchedUpdates=function(h,f){return h(f)},tt.useFormState=function(h,f,C){return g.H.useFormState(h,f,C)},tt.useFormStatus=function(){return g.H.useHostTransitionStatus()},tt.version="19.2.4",tt}var Dm;function cv(){if(Dm)return eu.exports;Dm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),eu.exports=uv(),eu.exports}var Nm;function dv(){if(Nm)return Ya;Nm=1;var l=ov(),u=du(),c=cv();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(m(e)!==e)throw Error(o(188))}function f(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return h(a),e;if(s===i)return h(a),t;s=s.sibling}throw Error(o(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,d=a.child;d;){if(d===n){r=!0,n=a,i=s;break}if(d===i){r=!0,i=a,n=s;break}d=d.sibling}if(!r){for(d=s.child;d;){if(d===n){r=!0,n=s,i=a;break}if(d===i){r=!0,i=s,n=a;break}d=d.sibling}if(!r)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,I=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ie=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),qe=Symbol.for("react.activity"),dt=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function je(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case X:return"Profiler";case M:return"StrictMode";case se:return"Suspense";case he:return"SuspenseList";case qe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case J:return e.displayName||"Context";case ie:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:et(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return et(e(t))}catch{}}return null}var Ne=Array.isArray,L=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},be=[],H=-1;function x(e){return{current:e}}function w(e){0>H||(e.current=be[H],be[H]=null,H--)}function B(e,t){H++,be[H]=e.current,e.current=t}var V=x(null),K=x(null),$=x(null),ge=x(null);function Xe(e,t){switch(B($,t),B(K,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vp(t),e=Qp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}w(V),B(V,e)}function ue(){w(V),w(K),w($)}function hn(e){e.memoizedState!==null&&B(ge,e);var t=V.current,n=Qp(t,e.type);t!==n&&(B(K,e),B(V,n))}function Xt(e){K.current===e&&(w(V),w(K)),ge.current===e&&(w(ge),Ga._currentValue=te)}var gn,di;function At(e){if(gn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gn=t&&t[1]||"",di=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gn+e+di}var Rl=!1;function Ml(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(N){var O=N}Reflect.construct(e,[],k)}else{try{k.call()}catch(N){O=N}e.call(k.prototype)}}else{try{throw Error()}catch(N){O=N}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(N){if(N&&O&&typeof N.stack=="string")return[N.stack,O.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],d=s[1];if(r&&d){var v=r.split(`
`),E=d.split(`
`);for(a=i=0;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;for(;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;if(i===v.length||a===E.length)for(i=v.length-1,a=E.length-1;1<=i&&0<=a&&v[i]!==E[a];)a--;for(;1<=i&&0<=a;i--,a--)if(v[i]!==E[a]){if(i!==1||a!==1)do if(i--,a--,0>a||v[i]!==E[a]){var R=`
`+v[i].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=i&&0<=a);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?At(n):""}function kf(e,t){switch(e.tag){case 26:case 27:case 5:return At(e.type);case 16:return At("Lazy");case 13:return e.child!==t&&t!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return Ml(e.type,!1);case 11:return Ml(e.type.render,!1);case 1:return Ml(e.type,!0);case 31:return At("Activity");default:return""}}function Su(e){try{var t="",n=null;do t+=kf(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var zl=Object.prototype.hasOwnProperty,kl=l.unstable_scheduleCallback,wl=l.unstable_cancelCallback,wf=l.unstable_shouldYield,If=l.unstable_requestPaint,mt=l.unstable_now,jf=l.unstable_getCurrentPriorityLevel,qu=l.unstable_ImmediatePriority,Tu=l.unstable_UserBlockingPriority,ts=l.unstable_NormalPriority,Uf=l.unstable_LowPriority,Cu=l.unstable_IdlePriority,_f=l.log,Hf=l.unstable_setDisableYieldValue,ea=null,ft=null;function vn(e){if(typeof _f=="function"&&Hf(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(ea,e)}catch{}}var ht=Math.clz32?Math.clz32:Pf,Bf=Math.log,Gf=Math.LN2;function Pf(e){return e>>>=0,e===0?32:31-(Bf(e)/Gf|0)|0}var ns=256,is=262144,as=4194304;function Qn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ss(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var d=i&134217727;return d!==0?(i=d&~s,i!==0?a=Qn(i):(r&=d,r!==0?a=Qn(r):n||(n=d&~e,n!==0&&(a=Qn(n))))):(d=i&~s,d!==0?a=Qn(d):r!==0?a=Qn(r):n||(n=i&~e,n!==0&&(a=Qn(n)))),a===0?0:t!==0&&t!==a&&(t&s)===0&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Au(){var e=as;return as<<=1,(as&62914560)===0&&(as=4194304),e}function Il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qf(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,v=e.expirationTimes,E=e.hiddenUpdates;for(n=r&~n;0<n;){var R=31-ht(n),k=1<<R;d[R]=0,v[R]=-1;var O=E[R];if(O!==null)for(E[R]=null,R=0;R<O.length;R++){var N=O[R];N!==null&&(N.lane&=-536870913)}n&=~k}i!==0&&Eu(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Eu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ht(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Du(e,t){var n=t&-t;return n=(n&42)!==0?1:jl(n),(n&(e.suspendedLanes|t))!==0?0:n}function jl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ul(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nu(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:fm(e.type))}function Lu(e,t){var n=U.p;try{return U.p=e,t()}finally{U.p=n}}var bn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+bn,at="__reactProps$"+bn,pi="__reactContainer$"+bn,_l="__reactEvents$"+bn,Xf="__reactListeners$"+bn,Yf="__reactHandles$"+bn,Ru="__reactResources$"+bn,ia="__reactMarker$"+bn;function Hl(e){delete e[Fe],delete e[at],delete e[_l],delete e[Xf],delete e[Yf]}function mi(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wp(e);e!==null;){if(n=e[Fe])return n;e=Wp(e)}return t}e=n,n=e.parentNode}return null}function fi(e){if(e=e[Fe]||e[pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function hi(e){var t=e[Ru];return t||(t=e[Ru]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[ia]=!0}var Mu=new Set,zu={};function Xn(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(zu[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var Zf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ku={},wu={};function Ff(e){return zl.call(wu,e)?!0:zl.call(ku,e)?!1:Zf.test(e)?wu[e]=!0:(ku[e]=!0,!1)}function ls(e,t,n){if(Ff(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function rs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yt(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jf(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){if(!e._valueTracker){var t=Iu(e)?"checked":"value";e._valueTracker=Jf(e,t,""+e[t])}}function ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Iu(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function os(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kf=/[\n"\\]/g;function Ot(e){return e.replace(Kf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gl(e,t,n,i,a,s,r,d){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,r,Et(t)):n!=null?Pl(e,r,Et(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Et(d):e.removeAttribute("name")}function Uu(e,t,n,i,a,s,r,d){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Bl(e);return}n=n!=null?""+Et(n):"",t=t!=null?""+Et(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=d?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Bl(e)}function Pl(e,t,n){t==="number"&&os(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vi(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _u(e,t,n){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Et(n):""}function Hu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(Ne(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Et(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Bl(e)}function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Wf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Gu(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Bu(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Bu(e,s,t[s])}function Vl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(e){return eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zt(){}var Ql=null;function Xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yi=null,xi=null;function Pu(e){var t=fi(e);if(t&&(e=t.stateNode)){var n=e[at]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[at]||null;if(!a)throw Error(o(90));Gl(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&ju(i)}break e;case"textarea":_u(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&vi(e,!!n.multiple,t,!1)}}}var Yl=!1;function Vu(e,t,n){if(Yl)return e(t,n);Yl=!0;try{var i=e(t);return i}finally{if(Yl=!1,(yi!==null||xi!==null)&&(Js(),yi&&(t=yi,e=xi,xi=yi=null,Pu(t),e)))for(t=0;t<e.length;t++)Pu(e[t])}}function sa(e,t){var n=e.stateNode;if(n===null)return null;var i=n[at]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=!1;if(Ft)try{var la={};Object.defineProperty(la,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Zl=!1}var yn=null,Fl=null,cs=null;function Qu(){if(cs)return cs;var e,t=Fl,n=t.length,i,a="value"in yn?yn.value:yn.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return cs=a.slice(e,1<i?1-i:void 0)}function ds(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Xu(){return!1}function st(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(s):s[d]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ps:Xu,this.isPropagationStopped=Xu,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=st(Yn),ra=q({},Yn,{view:0,detail:0}),th=st(ra),Jl,Kl,oa,fs=q({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(Jl=e.screenX-oa.screenX,Kl=e.screenY-oa.screenY):Kl=Jl=0,oa=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),Yu=st(fs),nh=q({},fs,{dataTransfer:0}),ih=st(nh),ah=q({},ra,{relatedTarget:0}),Wl=st(ah),sh=q({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=st(sh),rh=q({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oh=st(rh),uh=q({},Yn,{data:0}),Zu=st(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ph[e])?!!t[e]:!1}function $l(){return mh}var fh=q({},ra,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=st(fh),gh=q({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=st(gh),vh=q({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),bh=st(vh),yh=q({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=st(yh),Sh=q({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qh=st(Sh),Th=q({},Yn,{newState:0,oldState:0}),Ch=st(Th),Ah=[9,13,27,32],er=Ft&&"CompositionEvent"in window,ua=null;Ft&&"documentMode"in document&&(ua=document.documentMode);var Eh=Ft&&"TextEvent"in window&&!ua,Ju=Ft&&(!er||ua&&8<ua&&11>=ua),Ku=" ",Wu=!1;function $u(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Si=!1;function Oh(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(Wu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Wu?null:e;default:return null}}function Dh(e,t){if(Si)return e==="compositionend"||!er&&$u(e,t)?(e=Qu(),cs=Fl=yn=null,Si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Nh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nh[e.type]:t==="textarea"}function nc(e,t,n,i){yi?xi?xi.push(i):xi=[i]:yi=i,t=il(t,"onChange"),0<t.length&&(n=new ms("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ca=null,da=null;function Lh(e){Up(e,0)}function hs(e){var t=aa(e);if(ju(t))return e}function ic(e,t){if(e==="change")return t}var ac=!1;if(Ft){var tr;if(Ft){var nr="oninput"in document;if(!nr){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),nr=typeof sc.oninput=="function"}tr=nr}else tr=!1;ac=tr&&(!document.documentMode||9<document.documentMode)}function lc(){ca&&(ca.detachEvent("onpropertychange",rc),da=ca=null)}function rc(e){if(e.propertyName==="value"&&hs(da)){var t=[];nc(t,da,e,Xl(e)),Vu(Lh,t)}}function Rh(e,t,n){e==="focusin"?(lc(),ca=t,da=n,ca.attachEvent("onpropertychange",rc)):e==="focusout"&&lc()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(da)}function zh(e,t){if(e==="click")return hs(t)}function kh(e,t){if(e==="input"||e==="change")return hs(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:wh;function pa(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!zl.call(t,a)||!gt(e[a],t[a]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uc(e,t){var n=oc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oc(n)}}function cc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=os(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=os(e.document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ih=Ft&&"documentMode"in document&&11>=document.documentMode,qi=null,ar=null,ma=null,sr=!1;function pc(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sr||qi==null||qi!==os(i)||(i=qi,"selectionStart"in i&&ir(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&pa(ma,i)||(ma=i,i=il(ar,"onSelect"),0<i.length&&(t=new ms("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qi)))}function Zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ti={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},lr={},mc={};Ft&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Fn(e){if(lr[e])return lr[e];if(!Ti[e])return e;var t=Ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return lr[e]=t[n];return e}var fc=Fn("animationend"),hc=Fn("animationiteration"),gc=Fn("animationstart"),jh=Fn("transitionrun"),Uh=Fn("transitionstart"),_h=Fn("transitioncancel"),vc=Fn("transitionend"),bc=new Map,rr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rr.push("scrollEnd");function jt(e,t){bc.set(e,t),Xn(t,[e])}var gs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dt=[],Ci=0,or=0;function vs(){for(var e=Ci,t=or=Ci=0;t<e;){var n=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var s=Dt[t];if(Dt[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&yc(n,a,s)}}function bs(e,t,n,i){Dt[Ci++]=e,Dt[Ci++]=t,Dt[Ci++]=n,Dt[Ci++]=i,or|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ur(e,t,n,i){return bs(e,t,n,i),ys(e)}function Jn(e,t){return bs(e,null,null,t),ys(e)}function yc(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-ht(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function ys(e){if(50<wa)throw wa=0,yo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ai={};function Hh(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,i){return new Hh(e,t,n,i)}function cr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xs(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")cr(e)&&(r=1);else if(typeof e=="string")r=Qg(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qe:return e=vt(31,n,t,a),e.elementType=qe,e.lanes=s,e;case j:return Kn(n.children,a,s,t);case M:r=8,a|=24;break;case X:return e=vt(12,n,t,a|2),e.elementType=X,e.lanes=s,e;case se:return e=vt(13,n,t,a),e.elementType=se,e.lanes=s,e;case he:return e=vt(19,n,t,a),e.elementType=he,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:r=10;break e;case ie:r=9;break e;case ae:r=11;break e;case ee:r=14;break e;case P:r=16,i=null;break e}r=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=vt(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Kn(e,t,n,i){return e=vt(7,e,i,t),e.lanes=n,e}function dr(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Sc(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function pr(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qc=new WeakMap;function Nt(e,t){if(typeof e=="object"&&e!==null){var n=qc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Su(t)},qc.set(e,t),t)}return{value:e,source:t,stack:Su(t)}}var Ei=[],Oi=0,Ss=null,fa=0,Lt=[],Rt=0,xn=null,Bt=1,Gt="";function Kt(e,t){Ei[Oi++]=fa,Ei[Oi++]=Ss,Ss=e,fa=t}function Tc(e,t,n){Lt[Rt++]=Bt,Lt[Rt++]=Gt,Lt[Rt++]=xn,xn=e;var i=Bt;e=Gt;var a=32-ht(i)-1;i&=~(1<<a),n+=1;var s=32-ht(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Bt=1<<32-ht(t)+a|n<<a|i,Gt=s+e}else Bt=1<<s|n<<a|i,Gt=e}function mr(e){e.return!==null&&(Kt(e,1),Tc(e,1,0))}function fr(e){for(;e===Ss;)Ss=Ei[--Oi],Ei[Oi]=null,fa=Ei[--Oi],Ei[Oi]=null;for(;e===xn;)xn=Lt[--Rt],Lt[Rt]=null,Gt=Lt[--Rt],Lt[Rt]=null,Bt=Lt[--Rt],Lt[Rt]=null}function Cc(e,t){Lt[Rt++]=Bt,Lt[Rt++]=Gt,Lt[Rt++]=xn,Bt=t.id,Gt=t.overflow,xn=e}var Je=null,Re=null,ve=!1,Sn=null,Mt=!1,hr=Error(o(519));function qn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ha(Nt(t,e)),hr}function Ac(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Fe]=e,t[at]=i,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<ja.length;n++)pe(ja[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Uu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),Hu(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Gp(t.textContent,n)?(i.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),i.onScroll!=null&&pe("scroll",t),i.onScrollEnd!=null&&pe("scrollend",t),i.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||qn(e,!0)}function Ec(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Mt=!1;return;case 27:case 3:Mt=!0;return;default:Je=Je.return}}function Di(e){if(e!==Je)return!1;if(!ve)return Ec(e),ve=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ko(e.type,e.memoizedProps)),n=!n),n&&Re&&qn(e),Ec(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Kp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Re=Kp(e)}else t===27?(t=Re,In(e.type)?(e=_o,_o=null,Re=e):Re=t):Re=Je?kt(e.stateNode.nextSibling):null;return!0}function Wn(){Re=Je=null,ve=!1}function gr(){var e=Sn;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),Sn=null),e}function ha(e){Sn===null?Sn=[e]:Sn.push(e)}var vr=x(null),$n=null,Wt=null;function Tn(e,t,n){B(vr,t._currentValue),t._currentValue=n}function $t(e){e._currentValue=vr.current,w(vr)}function br(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function yr(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var d=s;s=a;for(var v=0;v<t.length;v++)if(d.context===t[v]){s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),br(s.return,n,e),i||(r=null);break e}s=d.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(o(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),br(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Ni(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if((a.flags&524288)!==0)s=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(o(387));if(r=r.memoizedProps,r!==null){var d=a.type;gt(a.pendingProps.value,r.value)||(e!==null?e.push(d):e=[d])}}else if(a===ge.current){if(r=a.alternate,r===null)throw Error(o(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ga):e=[Ga])}a=a.return}e!==null&&yr(t,e,n,i),t.flags|=262144}function qs(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ei(e){$n=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ke(e){return Oc($n,e)}function Ts(e,t){return $n===null&&ei(e),Oc(e,t)}function Oc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wt===null){if(e===null)throw Error(o(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return n}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gh=l.unstable_scheduleCallback,Ph=l.unstable_NormalPriority,He={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xr(){return{controller:new Bh,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&Gh(Ph,function(){e.controller.abort()})}var va=null,Sr=0,Li=0,Ri=null;function Vh(e,t){if(va===null){var n=va=[];Sr=0,Li=Ao(),Ri={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sr++,t.then(Dc,Dc),t}function Dc(){if(--Sr===0&&va!==null){Ri!==null&&(Ri.status="fulfilled");var e=va;va=null,Li=0,Ri=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qh(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Nc=L.S;L.S=function(e,t){pp=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Vh(e,t),Nc!==null&&Nc(e,t)};var ti=x(null);function qr(){var e=ti.current;return e!==null?e:Le.pooledCache}function Cs(e,t){t===null?B(ti,ti.current):B(ti,t.pool)}function Lc(){var e=qr();return e===null?null:{parent:He._currentValue,pool:e}}var Mi=Error(o(460)),Tr=Error(o(474)),As=Error(o(542)),Es={then:function(){}};function Rc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e;default:if(typeof t.status=="string")t.then(Zt,Zt);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,kc(e),e}throw ii=t,Mi}}function ni(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ii=n,Mi):n}}var ii=null;function zc(){if(ii===null)throw Error(o(459));var e=ii;return ii=null,e}function kc(e){if(e===Mi||e===As)throw Error(o(483))}var zi=null,ba=0;function Os(e){var t=ba;return ba+=1,zi===null&&(zi=[]),Mc(zi,e,t)}function ya(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ds(e,t){throw t.$$typeof===I?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wc(e){function t(T,b){if(e){var A=T.deletions;A===null?(T.deletions=[b],T.flags|=16):A.push(b)}}function n(T,b){if(!e)return null;for(;b!==null;)t(T,b),b=b.sibling;return null}function i(T){for(var b=new Map;T!==null;)T.key!==null?b.set(T.key,T):b.set(T.index,T),T=T.sibling;return b}function a(T,b){return T=Jt(T,b),T.index=0,T.sibling=null,T}function s(T,b,A){return T.index=A,e?(A=T.alternate,A!==null?(A=A.index,A<b?(T.flags|=67108866,b):A):(T.flags|=67108866,b)):(T.flags|=1048576,b)}function r(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function d(T,b,A,z){return b===null||b.tag!==6?(b=dr(A,T.mode,z),b.return=T,b):(b=a(b,A),b.return=T,b)}function v(T,b,A,z){var W=A.type;return W===j?R(T,b,A.props.children,z,A.key):b!==null&&(b.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===P&&ni(W)===b.type)?(b=a(b,A.props),ya(b,A),b.return=T,b):(b=xs(A.type,A.key,A.props,null,T.mode,z),ya(b,A),b.return=T,b)}function E(T,b,A,z){return b===null||b.tag!==4||b.stateNode.containerInfo!==A.containerInfo||b.stateNode.implementation!==A.implementation?(b=pr(A,T.mode,z),b.return=T,b):(b=a(b,A.children||[]),b.return=T,b)}function R(T,b,A,z,W){return b===null||b.tag!==7?(b=Kn(A,T.mode,z,W),b.return=T,b):(b=a(b,A),b.return=T,b)}function k(T,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=dr(""+b,T.mode,A),b.return=T,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case G:return A=xs(b.type,b.key,b.props,null,T.mode,A),ya(A,b),A.return=T,A;case _:return b=pr(b,T.mode,A),b.return=T,b;case P:return b=ni(b),k(T,b,A)}if(Ne(b)||je(b))return b=Kn(b,T.mode,A,null),b.return=T,b;if(typeof b.then=="function")return k(T,Os(b),A);if(b.$$typeof===J)return k(T,Ts(T,b),A);Ds(T,b)}return null}function O(T,b,A,z){var W=b!==null?b.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return W!==null?null:d(T,b,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case G:return A.key===W?v(T,b,A,z):null;case _:return A.key===W?E(T,b,A,z):null;case P:return A=ni(A),O(T,b,A,z)}if(Ne(A)||je(A))return W!==null?null:R(T,b,A,z,null);if(typeof A.then=="function")return O(T,b,Os(A),z);if(A.$$typeof===J)return O(T,b,Ts(T,A),z);Ds(T,A)}return null}function N(T,b,A,z,W){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return T=T.get(A)||null,d(b,T,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case G:return T=T.get(z.key===null?A:z.key)||null,v(b,T,z,W);case _:return T=T.get(z.key===null?A:z.key)||null,E(b,T,z,W);case P:return z=ni(z),N(T,b,A,z,W)}if(Ne(z)||je(z))return T=T.get(A)||null,R(b,T,z,W,null);if(typeof z.then=="function")return N(T,b,A,Os(z),W);if(z.$$typeof===J)return N(T,b,A,Ts(b,z),W);Ds(b,z)}return null}function Q(T,b,A,z){for(var W=null,ye=null,F=b,oe=b=0,fe=null;F!==null&&oe<A.length;oe++){F.index>oe?(fe=F,F=null):fe=F.sibling;var xe=O(T,F,A[oe],z);if(xe===null){F===null&&(F=fe);break}e&&F&&xe.alternate===null&&t(T,F),b=s(xe,b,oe),ye===null?W=xe:ye.sibling=xe,ye=xe,F=fe}if(oe===A.length)return n(T,F),ve&&Kt(T,oe),W;if(F===null){for(;oe<A.length;oe++)F=k(T,A[oe],z),F!==null&&(b=s(F,b,oe),ye===null?W=F:ye.sibling=F,ye=F);return ve&&Kt(T,oe),W}for(F=i(F);oe<A.length;oe++)fe=N(F,T,oe,A[oe],z),fe!==null&&(e&&fe.alternate!==null&&F.delete(fe.key===null?oe:fe.key),b=s(fe,b,oe),ye===null?W=fe:ye.sibling=fe,ye=fe);return e&&F.forEach(function(Bn){return t(T,Bn)}),ve&&Kt(T,oe),W}function ne(T,b,A,z){if(A==null)throw Error(o(151));for(var W=null,ye=null,F=b,oe=b=0,fe=null,xe=A.next();F!==null&&!xe.done;oe++,xe=A.next()){F.index>oe?(fe=F,F=null):fe=F.sibling;var Bn=O(T,F,xe.value,z);if(Bn===null){F===null&&(F=fe);break}e&&F&&Bn.alternate===null&&t(T,F),b=s(Bn,b,oe),ye===null?W=Bn:ye.sibling=Bn,ye=Bn,F=fe}if(xe.done)return n(T,F),ve&&Kt(T,oe),W;if(F===null){for(;!xe.done;oe++,xe=A.next())xe=k(T,xe.value,z),xe!==null&&(b=s(xe,b,oe),ye===null?W=xe:ye.sibling=xe,ye=xe);return ve&&Kt(T,oe),W}for(F=i(F);!xe.done;oe++,xe=A.next())xe=N(F,T,oe,xe.value,z),xe!==null&&(e&&xe.alternate!==null&&F.delete(xe.key===null?oe:xe.key),b=s(xe,b,oe),ye===null?W=xe:ye.sibling=xe,ye=xe);return e&&F.forEach(function(nv){return t(T,nv)}),ve&&Kt(T,oe),W}function Oe(T,b,A,z){if(typeof A=="object"&&A!==null&&A.type===j&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case G:e:{for(var W=A.key;b!==null;){if(b.key===W){if(W=A.type,W===j){if(b.tag===7){n(T,b.sibling),z=a(b,A.props.children),z.return=T,T=z;break e}}else if(b.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===P&&ni(W)===b.type){n(T,b.sibling),z=a(b,A.props),ya(z,A),z.return=T,T=z;break e}n(T,b);break}else t(T,b);b=b.sibling}A.type===j?(z=Kn(A.props.children,T.mode,z,A.key),z.return=T,T=z):(z=xs(A.type,A.key,A.props,null,T.mode,z),ya(z,A),z.return=T,T=z)}return r(T);case _:e:{for(W=A.key;b!==null;){if(b.key===W)if(b.tag===4&&b.stateNode.containerInfo===A.containerInfo&&b.stateNode.implementation===A.implementation){n(T,b.sibling),z=a(b,A.children||[]),z.return=T,T=z;break e}else{n(T,b);break}else t(T,b);b=b.sibling}z=pr(A,T.mode,z),z.return=T,T=z}return r(T);case P:return A=ni(A),Oe(T,b,A,z)}if(Ne(A))return Q(T,b,A,z);if(je(A)){if(W=je(A),typeof W!="function")throw Error(o(150));return A=W.call(A),ne(T,b,A,z)}if(typeof A.then=="function")return Oe(T,b,Os(A),z);if(A.$$typeof===J)return Oe(T,b,Ts(T,A),z);Ds(T,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,b!==null&&b.tag===6?(n(T,b.sibling),z=a(b,A),z.return=T,T=z):(n(T,b),z=dr(A,T.mode,z),z.return=T,T=z),r(T)):n(T,b)}return function(T,b,A,z){try{ba=0;var W=Oe(T,b,A,z);return zi=null,W}catch(F){if(F===Mi||F===As)throw F;var ye=vt(29,F,null,T.mode);return ye.lanes=z,ye.return=T,ye}}}var ai=wc(!0),Ic=wc(!1),Cn=!1;function Cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ar(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function An(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Se&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=ys(e),yc(e,null,n),t}return bs(e,i,t,n),ys(e)}function xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ou(e,n)}}function Er(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Or=!1;function Sa(){if(Or){var e=Ri;if(e!==null)throw e}}function qa(e,t,n,i){Or=!1;var a=e.updateQueue;Cn=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,d=a.shared.pending;if(d!==null){a.shared.pending=null;var v=d,E=v.next;v.next=null,r===null?s=E:r.next=E,r=v;var R=e.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==r&&(d===null?R.firstBaseUpdate=E:d.next=E,R.lastBaseUpdate=v))}if(s!==null){var k=a.baseState;r=0,R=E=v=null,d=s;do{var O=d.lane&-536870913,N=O!==d.lane;if(N?(me&O)===O:(i&O)===O){O!==0&&O===Li&&(Or=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var Q=e,ne=d;O=t;var Oe=n;switch(ne.tag){case 1:if(Q=ne.payload,typeof Q=="function"){k=Q.call(Oe,k,O);break e}k=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=ne.payload,O=typeof Q=="function"?Q.call(Oe,k,O):Q,O==null)break e;k=q({},k,O);break e;case 2:Cn=!0}}O=d.callback,O!==null&&(e.flags|=64,N&&(e.flags|=8192),N=a.callbacks,N===null?a.callbacks=[O]:N.push(O))}else N={lane:O,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(E=R=N,v=k):R=R.next=N,r|=O;if(d=d.next,d===null){if(d=a.shared.pending,d===null)break;N=d,d=N.next,N.next=null,a.lastBaseUpdate=N,a.shared.pending=null}}while(!0);R===null&&(v=k),a.baseState=v,a.firstBaseUpdate=E,a.lastBaseUpdate=R,s===null&&(a.shared.lanes=0),Rn|=r,e.lanes=r,e.memoizedState=k}}function jc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Uc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jc(n[e],t)}var ki=x(null),Ns=x(0);function _c(e,t){e=un,B(Ns,e),B(ki,t),un=e|t.baseLanes}function Dr(){B(Ns,un),B(ki,ki.current)}function Nr(){un=Ns.current,w(ki),w(Ns)}var bt=x(null),zt=null;function On(e){var t=e.alternate;B(Ue,Ue.current&1),B(bt,e),zt===null&&(t===null||ki.current!==null||t.memoizedState!==null)&&(zt=e)}function Lr(e){B(Ue,Ue.current),B(bt,e),zt===null&&(zt=e)}function Hc(e){e.tag===22?(B(Ue,Ue.current),B(bt,e),zt===null&&(zt=e)):Dn()}function Dn(){B(Ue,Ue.current),B(bt,bt.current)}function yt(e){w(bt),zt===e&&(zt=null),w(Ue)}var Ue=x(0);function Ls(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||jo(n)||Uo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var en=0,re=null,Ae=null,Be=null,Rs=!1,wi=!1,si=!1,Ms=0,Ta=0,Ii=null,Xh=0;function we(){throw Error(o(321))}function Rr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Mr(e,t,n,i,a,s){return en=s,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Td:Yr,si=!1,s=n(i,a),si=!1,wi&&(s=Gc(t,n,i,a)),Bc(e),s}function Bc(e){L.H=Ea;var t=Ae!==null&&Ae.next!==null;if(en=0,Be=Ae=re=null,Rs=!1,Ta=0,Ii=null,t)throw Error(o(300));e===null||Ge||(e=e.dependencies,e!==null&&qs(e)&&(Ge=!0))}function Gc(e,t,n,i){re=e;var a=0;do{if(wi&&(Ii=null),Ta=0,wi=!1,25<=a)throw Error(o(301));if(a+=1,Be=Ae=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}L.H=Cd,s=t(n,i)}while(wi);return s}function Yh(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Ca(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(re.flags|=1024),t}function zr(){var e=Ms!==0;return Ms=0,e}function kr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function wr(e){if(Rs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Rs=!1}en=0,Be=Ae=re=null,wi=!1,Ta=Ms=0,Ii=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?re.memoizedState=Be=e:Be=Be.next=e,Be}function _e(){if(Ae===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Be===null?re.memoizedState:Be.next;if(t!==null)Be=t,Ae=e;else{if(e===null)throw re.alternate===null?Error(o(467)):Error(o(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Be===null?re.memoizedState=Be=e:Be=Be.next=e}return Be}function zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ca(e){var t=Ta;return Ta+=1,Ii===null&&(Ii=[]),e=Mc(Ii,e,t),t=re,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Td:Yr),e}function ks(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ca(e);if(e.$$typeof===J)return Ke(e)}throw Error(o(438,String(e)))}function Ir(e){var t=null,n=re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=re.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zs(),re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=dt;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function ws(e){var t=_e();return jr(t,Ae,e)}function jr(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var d=r=null,v=null,E=t,R=!1;do{var k=E.lane&-536870913;if(k!==E.lane?(me&k)===k:(en&k)===k){var O=E.revertLane;if(O===0)v!==null&&(v=v.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),k===Li&&(R=!0);else if((en&O)===O){E=E.next,O===Li&&(R=!0);continue}else k={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(d=v=k,r=s):v=v.next=k,re.lanes|=O,Rn|=O;k=E.action,si&&n(s,k),s=E.hasEagerState?E.eagerState:n(s,k)}else O={lane:k,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},v===null?(d=v=O,r=s):v=v.next=O,re.lanes|=k,Rn|=k;E=E.next}while(E!==null&&E!==t);if(v===null?r=s:v.next=d,!gt(s,e.memoizedState)&&(Ge=!0,R&&(n=Ri,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=v,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ur(e){var t=_e(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);gt(s,t.memoizedState)||(Ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Pc(e,t,n){var i=re,a=_e(),s=ve;if(s){if(n===void 0)throw Error(o(407));n=n()}else n=t();var r=!gt((Ae||a).memoizedState,n);if(r&&(a.memoizedState=n,Ge=!0),a=a.queue,Br(Xc.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Be!==null&&Be.memoizedState.tag&1){if(i.flags|=2048,ji(9,{destroy:void 0},Qc.bind(null,i,a,n,t),null),Le===null)throw Error(o(349));s||(en&127)!==0||Vc(i,t,n)}return n}function Vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t=zs(),re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qc(e,t,n,i){t.value=n,t.getSnapshot=i,Yc(t)&&Zc(e)}function Xc(e,t,n){return n(function(){Yc(t)&&Zc(e)})}function Yc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function Zc(e){var t=Jn(e,2);t!==null&&ct(t,e,2)}function _r(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),si){vn(!0);try{n()}finally{vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function Fc(e,t,n,i){return e.baseState=n,jr(e,Ae,typeof i=="function"?i:tn)}function Zh(e,t,n,i,a){if(Us(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};L.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Jc(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Jc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=L.T,r={};L.T=r;try{var d=n(a,i),v=L.S;v!==null&&v(r,d),Kc(e,t,d)}catch(E){Hr(e,t,E)}finally{s!==null&&r.types!==null&&(s.types=r.types),L.T=s}}else try{s=n(a,i),Kc(e,t,s)}catch(E){Hr(e,t,E)}}function Kc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wc(e,t,i)},function(i){return Hr(e,t,i)}):Wc(e,t,n)}function Wc(e,t,n){t.status="fulfilled",t.value=n,$c(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Jc(e,n)))}function Hr(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,$c(t),t=t.next;while(t!==i)}e.action=null}function $c(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ed(e,t){return t}function td(e,t){if(ve){var n=Le.formState;if(n!==null){e:{var i=re;if(ve){if(Re){t:{for(var a=Re,s=Mt;a.nodeType!==8;){if(!s){a=null;break t}if(a=kt(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Re=kt(a.nextSibling),i=a.data==="F!";break e}}qn(i)}i=!1}i&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ed,lastRenderedState:t},n.queue=i,n=xd.bind(null,re,i),i.dispatch=n,i=_r(!1),s=Xr.bind(null,re,!1,i.queue),i=it(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Zh.bind(null,re,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function nd(e){var t=_e();return id(t,Ae,e)}function id(e,t,n){if(t=jr(e,t,ed)[0],e=ws(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ca(t)}catch(r){throw r===Mi?As:r}else i=t;t=_e();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(re.flags|=2048,ji(9,{destroy:void 0},Fh.bind(null,a,n),null)),[i,s,e]}function Fh(e,t){e.action=t}function ad(e){var t=_e(),n=Ae;if(n!==null)return id(t,n,e);_e(),t=t.memoizedState,n=_e();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ji(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=re.updateQueue,t===null&&(t=zs(),re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function sd(){return _e().memoizedState}function Is(e,t,n,i){var a=it();re.flags|=e,a.memoizedState=ji(1|t,{destroy:void 0},n,i===void 0?null:i)}function js(e,t,n,i){var a=_e();i=i===void 0?null:i;var s=a.memoizedState.inst;Ae!==null&&i!==null&&Rr(i,Ae.memoizedState.deps)?a.memoizedState=ji(t,s,n,i):(re.flags|=e,a.memoizedState=ji(1|t,s,n,i))}function ld(e,t){Is(8390656,8,e,t)}function Br(e,t){js(2048,8,e,t)}function Jh(e){re.flags|=4;var t=re.updateQueue;if(t===null)t=zs(),re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rd(e){var t=_e().memoizedState;return Jh({ref:t,nextImpl:e}),function(){if((Se&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function od(e,t){return js(4,2,e,t)}function ud(e,t){return js(4,4,e,t)}function cd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,n){n=n!=null?n.concat([e]):null,js(4,4,cd.bind(null,t,e),n)}function Gr(){}function pd(e,t){var n=_e();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Rr(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function md(e,t){var n=_e();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Rr(t,i[1]))return i[0];if(i=e(),si){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[i,t],i}function Pr(e,t,n){return n===void 0||(en&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=fp(),re.lanes|=e,Rn|=e,n)}function fd(e,t,n,i){return gt(n,t)?n:ki.current!==null?(e=Pr(e,n,i),gt(e,t)||(Ge=!0),e):(en&42)===0||(en&1073741824)!==0&&(me&261930)===0?(Ge=!0,e.memoizedState=n):(e=fp(),re.lanes|=e,Rn|=e,t)}function hd(e,t,n,i,a){var s=U.p;U.p=s!==0&&8>s?s:8;var r=L.T,d={};L.T=d,Xr(e,!1,t,n);try{var v=a(),E=L.S;if(E!==null&&E(d,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var R=Qh(v,i);Aa(e,t,R,qt(e))}else Aa(e,t,i,qt(e))}catch(k){Aa(e,t,{then:function(){},status:"rejected",reason:k},qt())}finally{U.p=s,r!==null&&d.types!==null&&(r.types=d.types),L.T=r}}function Kh(){}function Vr(e,t,n,i){if(e.tag!==5)throw Error(o(476));var a=gd(e).queue;hd(e,a,t,te,n===null?Kh:function(){return vd(e),n(i)})}function gd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vd(e){var t=gd(e);t.next===null&&(t=e.alternate.memoizedState),Aa(e,t.next.queue,{},qt())}function Qr(){return Ke(Ga)}function bd(){return _e().memoizedState}function yd(){return _e().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=qt();e=An(n);var i=En(t,e,n);i!==null&&(ct(i,t,n),xa(i,t,n)),t={cache:xr()},e.payload=t;return}t=t.return}}function $h(e,t,n){var i=qt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Us(e)?Sd(t,n):(n=ur(e,t,n,i),n!==null&&(ct(n,e,i),qd(n,t,i)))}function xd(e,t,n){var i=qt();Aa(e,t,n,i)}function Aa(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Us(e))Sd(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,d=s(r,n);if(a.hasEagerState=!0,a.eagerState=d,gt(d,r))return bs(e,t,a,0),Le===null&&vs(),!1}catch{}if(n=ur(e,t,a,i),n!==null)return ct(n,e,i),qd(n,t,i),!0}return!1}function Xr(e,t,n,i){if(i={lane:2,revertLane:Ao(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Us(e)){if(t)throw Error(o(479))}else t=ur(e,n,i,2),t!==null&&ct(t,e,2)}function Us(e){var t=e.alternate;return e===re||t!==null&&t===re}function Sd(e,t){wi=Rs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qd(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Ou(e,n)}}var Ea={readContext:Ke,use:ks,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Ea.useEffectEvent=we;var Td={readContext:Ke,use:ks,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:ld,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Is(4194308,4,cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){Is(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var i=e();if(si){vn(!0);try{e()}finally{vn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=it();if(n!==void 0){var a=n(t);if(si){vn(!0);try{n(t)}finally{vn(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=$h.bind(null,re,e),[i.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=_r(e);var t=e.queue,n=xd.bind(null,re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gr,useDeferredValue:function(e,t){var n=it();return Pr(n,e,t)},useTransition:function(){var e=_r(!1);return e=hd.bind(null,re,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=re,a=it();if(ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Le===null)throw Error(o(349));(me&127)!==0||Vc(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,ld(Xc.bind(null,i,s,e),[e]),i.flags|=2048,ji(9,{destroy:void 0},Qc.bind(null,i,s,n,t),null),n},useId:function(){var e=it(),t=Le.identifierPrefix;if(ve){var n=Gt,i=Bt;n=(i&~(1<<32-ht(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ms++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Xh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Qr,useFormState:td,useActionState:td,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xr.bind(null,re,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ir,useCacheRefresh:function(){return it().memoizedState=Wh.bind(null,re)},useEffectEvent:function(e){var t=it(),n={impl:e};return t.memoizedState=n,function(){if((Se&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Yr={readContext:Ke,use:ks,useCallback:pd,useContext:Ke,useEffect:Br,useImperativeHandle:dd,useInsertionEffect:od,useLayoutEffect:ud,useMemo:md,useReducer:ws,useRef:sd,useState:function(){return ws(tn)},useDebugValue:Gr,useDeferredValue:function(e,t){var n=_e();return fd(n,Ae.memoizedState,e,t)},useTransition:function(){var e=ws(tn)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Ca(e),t]},useSyncExternalStore:Pc,useId:bd,useHostTransitionStatus:Qr,useFormState:nd,useActionState:nd,useOptimistic:function(e,t){var n=_e();return Fc(n,Ae,e,t)},useMemoCache:Ir,useCacheRefresh:yd};Yr.useEffectEvent=rd;var Cd={readContext:Ke,use:ks,useCallback:pd,useContext:Ke,useEffect:Br,useImperativeHandle:dd,useInsertionEffect:od,useLayoutEffect:ud,useMemo:md,useReducer:Ur,useRef:sd,useState:function(){return Ur(tn)},useDebugValue:Gr,useDeferredValue:function(e,t){var n=_e();return Ae===null?Pr(n,e,t):fd(n,Ae.memoizedState,e,t)},useTransition:function(){var e=Ur(tn)[0],t=_e().memoizedState;return[typeof e=="boolean"?e:Ca(e),t]},useSyncExternalStore:Pc,useId:bd,useHostTransitionStatus:Qr,useFormState:ad,useActionState:ad,useOptimistic:function(e,t){var n=_e();return Ae!==null?Fc(n,Ae,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ir,useCacheRefresh:yd};Cd.useEffectEvent=rd;function Zr(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fr={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=qt(),a=An(i);a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(ct(t,e,i),xa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=qt(),a=An(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=En(e,a,i),t!==null&&(ct(t,e,i),xa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qt(),i=An(n);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,n),t!==null&&(ct(t,e,n),xa(t,e,n))}};function Ad(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!pa(n,i)||!pa(a,s):!0}function Ed(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Fr.enqueueReplaceState(t,t.state,null)}function li(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=q({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Od(e){gs(e)}function Dd(e){console.error(e)}function Nd(e){gs(e)}function _s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Ld(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Jr(e,t,n){return n=An(n),n.tag=3,n.payload={element:null},n.callback=function(){_s(e,t)},n}function Rd(e){return e=An(e),e.tag=3,e}function Md(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){Ld(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ld(t,n,i),typeof a!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var d=i.stack;this.componentDidCatch(i.value,{componentStack:d!==null?d:""})})}function eg(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ni(t,n,a,!0),n=bt.current,n!==null){switch(n.tag){case 31:case 13:return zt===null?Ks():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Es?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qo(e,i,a)),!1;case 22:return n.flags|=65536,i===Es?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qo(e,i,a)),!1}throw Error(o(435,n.tag))}return qo(e,i,a),Ks(),!1}if(ve)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==hr&&(e=Error(o(422),{cause:i}),ha(Nt(e,n)))):(i!==hr&&(t=Error(o(423),{cause:i}),ha(Nt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Nt(i,n),a=Jr(e.stateNode,i,a),Er(e,a),Ie!==4&&(Ie=2)),!1;var s=Error(o(520),{cause:i});if(s=Nt(s,n),ka===null?ka=[s]:ka.push(s),Ie!==4&&(Ie=2),t===null)return!0;i=Nt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Jr(n.stateNode,i,e),Er(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Mn===null||!Mn.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Rd(a),Md(a,e,n,i),Er(n,a),!1}n=n.return}while(n!==null);return!1}var Kr=Error(o(461)),Ge=!1;function We(e,t,n,i){t.child=e===null?Ic(t,null,n,i):ai(t,e.child,n,i)}function zd(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var d in i)d!=="ref"&&(r[d]=i[d])}else r=i;return ei(t),i=Mr(e,t,n,r,s,a),d=zr(),e!==null&&!Ge?(kr(e,t,a),nn(e,t,a)):(ve&&d&&mr(t),t.flags|=1,We(e,t,i,a),t.child)}function kd(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!cr(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,wd(e,t,s,i,a)):(e=xs(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!so(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(r,i)&&e.ref===t.ref)return nn(e,t,a)}return t.flags|=1,e=Jt(s,i),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(pa(s,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=s,so(e,a))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,nn(e,t,a)}return Wr(e,t,n,i,a)}function Id(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return jd(e,t,s,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cs(t,s!==null?s.cachePool:null),s!==null?_c(t,s):Dr(),Hc(t);else return i=t.lanes=536870912,jd(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Cs(t,s.cachePool),_c(t,s),Dn(),t.memoizedState=null):(e!==null&&Cs(t,null),Dr(),Dn());return We(e,t,a,n),t.child}function Oa(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jd(e,t,n,i,a){var s=qr();return s=s===null?null:{parent:He._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Cs(t,null),Dr(),Hc(t),e!==null&&Ni(e,t,i,!0),t.childLanes=a,null}function Hs(e,t){return t=Gs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ud(e,t,n){return ai(t,e.child,null,n),e=Hs(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function tg(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ve){if(i.mode==="hidden")return e=Hs(t,i),t.lanes=536870912,Oa(null,e);if(Lr(t),(e=Re)?(e=Jp(e,Mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Bt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Sc(e),n.return=t,t.child=n,Je=t,Re=null)):e=null,e===null)throw qn(t);return t.lanes=536870912,null}return Hs(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(Lr(t),a)if(t.flags&256)t.flags&=-257,t=Ud(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ge||Ni(e,t,n,!1),a=(n&e.childLanes)!==0,Ge||a){if(i=Le,i!==null&&(r=Du(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Jn(e,r),ct(i,e,r),Kr;Ks(),t=Ud(e,t,n)}else e=s.treeContext,Re=kt(r.nextSibling),Je=t,ve=!0,Sn=null,Mt=!1,e!==null&&Cc(t,e),t=Hs(t,i),t.flags|=4096;return t}return e=Jt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wr(e,t,n,i,a){return ei(t),n=Mr(e,t,n,i,void 0,a),i=zr(),e!==null&&!Ge?(kr(e,t,a),nn(e,t,a)):(ve&&i&&mr(t),t.flags|=1,We(e,t,n,a),t.child)}function _d(e,t,n,i,a,s){return ei(t),t.updateQueue=null,n=Gc(t,i,n,a),Bc(e),i=zr(),e!==null&&!Ge?(kr(e,t,s),nn(e,t,s)):(ve&&i&&mr(t),t.flags|=1,We(e,t,n,s),t.child)}function Hd(e,t,n,i,a){if(ei(t),t.stateNode===null){var s=Ai,r=n.contextType;typeof r=="object"&&r!==null&&(s=Ke(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fr,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Cr(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Ke(r):Ai,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Zr(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Fr.enqueueReplaceState(s,s.state,null),qa(t,i,s,a),Sa(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var d=t.memoizedProps,v=li(n,d);s.props=v;var E=s.context,R=n.contextType;r=Ai,typeof R=="object"&&R!==null&&(r=Ke(R));var k=n.getDerivedStateFromProps;R=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,R||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d||E!==r)&&Ed(t,s,i,r),Cn=!1;var O=t.memoizedState;s.state=O,qa(t,i,s,a),Sa(),E=t.memoizedState,d||O!==E||Cn?(typeof k=="function"&&(Zr(t,n,k,i),E=t.memoizedState),(v=Cn||Ad(t,n,v,i,O,E,r))?(R||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),s.props=i,s.state=E,s.context=r,i=v):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Ar(e,t),r=t.memoizedProps,R=li(n,r),s.props=R,k=t.pendingProps,O=s.context,E=n.contextType,v=Ai,typeof E=="object"&&E!==null&&(v=Ke(E)),d=n.getDerivedStateFromProps,(E=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==k||O!==v)&&Ed(t,s,i,v),Cn=!1,O=t.memoizedState,s.state=O,qa(t,i,s,a),Sa();var N=t.memoizedState;r!==k||O!==N||Cn||e!==null&&e.dependencies!==null&&qs(e.dependencies)?(typeof d=="function"&&(Zr(t,n,d,i),N=t.memoizedState),(R=Cn||Ad(t,n,R,i,O,N,v)||e!==null&&e.dependencies!==null&&qs(e.dependencies))?(E||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,N,v),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,N,v)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),s.props=i,s.state=N,s.context=v,i=R):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Bs(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ai(t,e.child,null,a),t.child=ai(t,null,n,a)):We(e,t,n,a),t.memoizedState=s.state,e=t.child):e=nn(e,t,a),e}function Bd(e,t,n,i){return Wn(),t.flags|=256,We(e,t,n,i),t.child}var $r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eo(e){return{baseLanes:e,cachePool:Lc()}}function to(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=St),e}function Gd(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(a?On(t):Dn(),(e=Re)?(e=Jp(e,Mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:xn!==null?{id:Bt,overflow:Gt}:null,retryLane:536870912,hydrationErrors:null},n=Sc(e),n.return=t,t.child=n,Je=t,Re=null)):e=null,e===null)throw qn(t);return Uo(e)?t.lanes=32:t.lanes=536870912,null}var d=i.children;return i=i.fallback,a?(Dn(),a=t.mode,d=Gs({mode:"hidden",children:d},a),i=Kn(i,a,n,null),d.return=t,i.return=t,d.sibling=i,t.child=d,i=t.child,i.memoizedState=eo(n),i.childLanes=to(e,r,n),t.memoizedState=$r,Oa(null,i)):(On(t),no(t,d))}var v=e.memoizedState;if(v!==null&&(d=v.dehydrated,d!==null)){if(s)t.flags&256?(On(t),t.flags&=-257,t=io(e,t,n)):t.memoizedState!==null?(Dn(),t.child=e.child,t.flags|=128,t=null):(Dn(),d=i.fallback,a=t.mode,i=Gs({mode:"visible",children:i.children},a),d=Kn(d,a,n,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,ai(t,e.child,null,n),i=t.child,i.memoizedState=eo(n),i.childLanes=to(e,r,n),t.memoizedState=$r,t=Oa(null,i));else if(On(t),Uo(d)){if(r=d.nextSibling&&d.nextSibling.dataset,r)var E=r.dgst;r=E,i=Error(o(419)),i.stack="",i.digest=r,ha({value:i,source:null,stack:null}),t=io(e,t,n)}else if(Ge||Ni(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=Le,r!==null&&(i=Du(r,n),i!==0&&i!==v.retryLane))throw v.retryLane=i,Jn(e,i),ct(r,e,i),Kr;jo(d)||Ks(),t=io(e,t,n)}else jo(d)?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Re=kt(d.nextSibling),Je=t,ve=!0,Sn=null,Mt=!1,e!==null&&Cc(t,e),t=no(t,i.children),t.flags|=4096);return t}return a?(Dn(),d=i.fallback,a=t.mode,v=e.child,E=v.sibling,i=Jt(v,{mode:"hidden",children:i.children}),i.subtreeFlags=v.subtreeFlags&65011712,E!==null?d=Jt(E,d):(d=Kn(d,a,n,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,Oa(null,i),i=t.child,d=e.child.memoizedState,d===null?d=eo(n):(a=d.cachePool,a!==null?(v=He._currentValue,a=a.parent!==v?{parent:v,pool:v}:a):a=Lc(),d={baseLanes:d.baseLanes|n,cachePool:a}),i.memoizedState=d,i.childLanes=to(e,r,n),t.memoizedState=$r,Oa(e.child,i)):(On(t),n=e.child,e=n.sibling,n=Jt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function no(e,t){return t=Gs({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gs(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function io(e,t,n){return ai(t,e.child,null,n),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),br(e.return,t,n)}function ao(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Vd(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ue.current,d=(r&2)!==0;if(d?(r=r&1|2,t.flags|=128):r&=1,B(Ue,r),We(e,t,i,n),i=ve?fa:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Ls(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ao(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ls(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ao(t,!0,n,null,s,i);break;case"together":ao(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ni(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function so(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&qs(e)))}function ng(e,t,n){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),Tn(t,He,e.memoizedState.cache),Wn();break;case 27:case 5:hn(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:Tn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lr(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Gd(e,t,n):(On(t),e=nn(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ni(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Vd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),B(Ue,Ue.current),i)break;return null;case 22:return t.lanes=0,Id(e,t,n,t.pendingProps);case 24:Tn(t,He,e.memoizedState.cache)}return nn(e,t,n)}function Qd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!so(e,n)&&(t.flags&128)===0)return Ge=!1,ng(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ve&&(t.flags&1048576)!==0&&Tc(t,fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ni(t.elementType),t.type=e,typeof e=="function")cr(e)?(i=li(e,i),t.tag=1,t=Hd(null,t,e,i,n)):(t.tag=0,t=Wr(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===ae){t.tag=11,t=zd(null,t,e,i,n);break e}else if(a===ee){t.tag=14,t=kd(null,t,e,i,n);break e}}throw t=et(e)||e,Error(o(306,t,""))}}return t;case 0:return Wr(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=li(i,t.pendingProps),Hd(e,t,i,a,n);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Ar(e,t),qa(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Tn(t,He,i),i!==s.cache&&yr(t,[He],n,!0),Sa(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Bd(e,t,i,n);break e}else if(i!==a){a=Nt(Error(o(424)),t),ha(a),t=Bd(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Re=kt(e.firstChild),Je=t,ve=!0,Sn=null,Mt=!0,n=Ic(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),i===a){t=nn(e,t,n);break e}We(e,t,i,n)}t=t.child}return t;case 26:return Bs(e,t),e===null?(n=nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ve||(n=t.type,e=t.pendingProps,i=al($.current).createElement(n),i[Fe]=t,i[at]=e,$e(i,n,e),Ye(i),t.stateNode=i):t.memoizedState=nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return hn(t),e===null&&ve&&(i=t.stateNode=$p(t.type,t.pendingProps,$.current),Je=t,Mt=!0,a=Re,In(t.type)?(_o=a,Re=kt(i.firstChild)):Re=a),We(e,t,t.pendingProps.children,n),Bs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((a=i=Re)&&(i=Mg(i,t.type,t.pendingProps,Mt),i!==null?(t.stateNode=i,Je=t,Re=kt(i.firstChild),Mt=!1,a=!0):a=!1),a||qn(t)),hn(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,ko(a,s)?i=null:r!==null&&ko(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Mr(e,t,Yh,null,null,n),Ga._currentValue=a),Bs(e,t),We(e,t,i,n),t.child;case 6:return e===null&&ve&&((e=n=Re)&&(n=zg(n,t.pendingProps,Mt),n!==null?(t.stateNode=n,Je=t,Re=null,e=!0):e=!1),e||qn(t)),null;case 13:return Gd(e,t,n);case 4:return Xe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ai(t,null,i,n):We(e,t,i,n),t.child;case 11:return zd(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Tn(t,t.type,i.value),We(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ei(t),a=Ke(a),i=i(a),t.flags|=1,We(e,t,i,n),t.child;case 14:return kd(e,t,t.type,t.pendingProps,n);case 15:return wd(e,t,t.type,t.pendingProps,n);case 19:return Vd(e,t,n);case 31:return tg(e,t,n);case 22:return Id(e,t,n,t.pendingProps);case 24:return ei(t),i=Ke(He),e===null?(a=qr(),a===null&&(a=Le,s=xr(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Cr(t),Tn(t,He,a)):((e.lanes&n)!==0&&(Ar(e,t),qa(t,null,null,n),Sa()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Tn(t,He,i)):(i=s.cache,Tn(t,He,i),i!==a.cache&&yr(t,[He],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function an(e){e.flags|=4}function lo(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(bp())e.flags|=8192;else throw ii=Es,Tr}else e.flags&=-16777217}function Xd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(bp())e.flags|=8192;else throw ii=Es,Tr}function Ps(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Au():536870912,e.lanes|=t,Bi|=t)}function Da(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ig(e,t,n){var i=t.pendingProps;switch(fr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Me(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),$t(He),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Di(t)?an(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gr())),Me(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(an(t),s!==null?(Me(t),Xd(t,s)):(Me(t),lo(t,a,null,i,n))):s?s!==e.memoizedState?(an(t),Me(t),Xd(t,s)):(Me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&an(t),Me(t),lo(t,a,e,i,n)),null;case 27:if(Xt(t),n=$.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&an(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Me(t),null}e=V.current,Di(t)?Ac(t):(e=$p(a,i,n),t.stateNode=e,an(t))}return Me(t),null;case 5:if(Xt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&an(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Me(t),null}if(s=V.current,Di(t))Ac(t);else{var r=al($.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[Fe]=t,s[at]=i;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;e:switch($e(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&an(t)}}return Me(t),lo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&an(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=$.current,Di(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Je,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Gp(e.nodeValue,n)),e||qn(t,!0)}else e=al(e).createTextNode(i),e[Fe]=t,t.stateNode=e}return Me(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Di(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Fe]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),e=!1}else n=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Me(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Di(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[Fe]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else a=gr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ps(t,t.updateQueue),Me(t),null);case 4:return ue(),e===null&&No(t.stateNode.containerInfo),Me(t),null;case 10:return $t(t.type),Me(t),null;case 19:if(w(Ue),i=t.memoizedState,i===null)return Me(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Da(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Ls(e),s!==null){for(t.flags|=128,Da(i,!1),e=s.updateQueue,t.updateQueue=e,Ps(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xc(n,e),n=n.sibling;return B(Ue,Ue.current&1|2),ve&&Kt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&mt()>Zs&&(t.flags|=128,a=!0,Da(i,!1),t.lanes=4194304)}else{if(!a)if(e=Ls(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ps(t,e),Da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ve)return Me(t),null}else 2*mt()-i.renderingStartTime>Zs&&n!==536870912&&(t.flags|=128,a=!0,Da(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=mt(),e.sibling=null,n=Ue.current,B(Ue,a?n&1|2:n&1),ve&&Kt(t,i.treeForkCount),e):(Me(t),null);case 22:case 23:return yt(t),Nr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),n=t.updateQueue,n!==null&&Ps(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&w(ti),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$t(He),Me(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function ag(e,t){switch(fr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(He),ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xt(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(o(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return w(Ue),null;case 4:return ue(),null;case 10:return $t(t.type),null;case 22:case 23:return yt(t),Nr(),e!==null&&w(ti),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(He),null;case 25:return null;default:return null}}function Yd(e,t){switch(fr(t),t.tag){case 3:$t(He),ue();break;case 26:case 27:case 5:Xt(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:w(Ue);break;case 10:$t(t.type);break;case 22:case 23:yt(t),Nr(),e!==null&&w(ti);break;case 24:$t(He)}}function Na(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(d){Ce(t,t.return,d)}}function Nn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,d=r.destroy;if(d!==void 0){r.destroy=void 0,a=t;var v=n,E=d;try{E()}catch(R){Ce(a,v,R)}}}i=i.next}while(i!==s)}}catch(R){Ce(t,t.return,R)}}function Zd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Uc(t,n)}catch(i){Ce(e,e.return,i)}}}function Fd(e,t,n){n.props=li(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ce(e,t,i)}}function La(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){Ce(e,t,a)}}function Pt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ce(e,t,a)}else n.current=null}function Jd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ce(e,e.return,a)}}function ro(e,t,n){try{var i=e.stateNode;Eg(i,e.type,n,t),i[at]=t}catch(a){Ce(e,e.return,a)}}function Kd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&In(e.type)||e.tag===4}function oo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&In(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(i!==4&&(i===27&&In(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function Vs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&In(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}function Wd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$e(t,i,n),t[Fe]=e,t[at]=n}catch(s){Ce(e,e.return,s)}}var sn=!1,Pe=!1,co=!1,$d=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function sg(e,t){if(e=e.containerInfo,Mo=dl,e=dc(e),ir(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,d=-1,v=-1,E=0,R=0,k=e,O=null;t:for(;;){for(var N;k!==n||a!==0&&k.nodeType!==3||(d=r+a),k!==s||i!==0&&k.nodeType!==3||(v=r+i),k.nodeType===3&&(r+=k.nodeValue.length),(N=k.firstChild)!==null;)O=k,k=N;for(;;){if(k===e)break t;if(O===n&&++E===a&&(d=r),O===s&&++R===i&&(v=r),(N=k.nextSibling)!==null)break;k=O,O=k.parentNode}k=N}n=d===-1||v===-1?null:{start:d,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(zo={focusedElem:e,selectionRange:n},dl=!1,Ze=t;Ze!==null;)if(t=Ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ze=e;else for(;Ze!==null;){switch(t=Ze,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var Q=li(n.type,a);e=i.getSnapshotBeforeUpdate(Q,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ce(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Io(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Io(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ze=e;break}Ze=t.return}}function ep(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:rn(e,n),i&4&&Na(5,n);break;case 1:if(rn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Ce(n,n.return,r)}else{var a=li(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Ce(n,n.return,r)}}i&64&&Zd(n),i&512&&La(n,n.return);break;case 3:if(rn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Uc(e,t)}catch(r){Ce(n,n.return,r)}}break;case 27:t===null&&i&4&&Wd(n);case 26:case 5:rn(e,n),t===null&&i&4&&Jd(n),i&512&&La(n,n.return);break;case 12:rn(e,n);break;case 31:rn(e,n),i&4&&ip(e,n);break;case 13:rn(e,n),i&4&&ap(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fg.bind(null,n),kg(e,n))));break;case 22:if(i=n.memoizedState!==null||sn,!i){t=t!==null&&t.memoizedState!==null||Pe,a=sn;var s=Pe;sn=i,(Pe=t)&&!s?on(e,n,(n.subtreeFlags&8772)!==0):rn(e,n),sn=a,Pe=s}break;case 30:break;default:rn(e,n)}}function tp(e){var t=e.alternate;t!==null&&(e.alternate=null,tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,lt=!1;function ln(e,t,n){for(n=n.child;n!==null;)np(e,t,n),n=n.sibling}function np(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 26:Pe||Pt(n,t),ln(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pe||Pt(n,t);var i=ze,a=lt;In(n.type)&&(ze=n.stateNode,lt=!1),ln(e,t,n),_a(n.stateNode),ze=i,lt=a;break;case 5:Pe||Pt(n,t);case 6:if(i=ze,a=lt,ze=null,ln(e,t,n),ze=i,lt=a,ze!==null)if(lt)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(n.stateNode)}catch(s){Ce(n,t,s)}else try{ze.removeChild(n.stateNode)}catch(s){Ce(n,t,s)}break;case 18:ze!==null&&(lt?(e=ze,Zp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fi(e)):Zp(ze,n.stateNode));break;case 4:i=ze,a=lt,ze=n.stateNode.containerInfo,lt=!0,ln(e,t,n),ze=i,lt=a;break;case 0:case 11:case 14:case 15:Nn(2,n,t),Pe||Nn(4,n,t),ln(e,t,n);break;case 1:Pe||(Pt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Fd(n,t,i)),ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:Pe=(i=Pe)||n.memoizedState!==null,ln(e,t,n),Pe=i;break;default:ln(e,t,n)}}function ip(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fi(e)}catch(n){Ce(t,t.return,n)}}}function ap(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fi(e)}catch(n){Ce(t,t.return,n)}}function lg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $d),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $d),t;default:throw Error(o(435,e.tag))}}function Qs(e,t){var n=lg(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=hg.bind(null,e,i);i.then(a,a)}})}function rt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,d=r;e:for(;d!==null;){switch(d.tag){case 27:if(In(d.type)){ze=d.stateNode,lt=!1;break e}break;case 5:ze=d.stateNode,lt=!1;break e;case 3:case 4:ze=d.stateNode.containerInfo,lt=!0;break e}d=d.return}if(ze===null)throw Error(o(160));np(s,r,a),ze=null,lt=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)sp(t,e),t=t.sibling}var Ut=null;function sp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rt(t,e),ot(e),i&4&&(Nn(3,e,e.return),Na(3,e),Nn(5,e,e.return));break;case 1:rt(t,e),ot(e),i&512&&(Pe||n===null||Pt(n,n.return)),i&64&&sn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Ut;if(rt(t,e),ot(e),i&512&&(Pe||n===null||Pt(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[ia]||s[Fe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),$e(s,i,n),s[Fe]=e,Ye(s),i=s;break e;case"link":var r=sm("link","href",a).get(i+(n.href||""));if(r){for(var d=0;d<r.length;d++)if(s=r[d],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(d,1);break t}}s=a.createElement(i),$e(s,i,n),a.head.appendChild(s);break;case"meta":if(r=sm("meta","content",a).get(i+(n.content||""))){for(d=0;d<r.length;d++)if(s=r[d],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(d,1);break t}}s=a.createElement(i),$e(s,i,n),a.head.appendChild(s);break;default:throw Error(o(468,i))}s[Fe]=e,Ye(s),i=s}e.stateNode=i}else lm(a,e.type,e.stateNode);else e.stateNode=am(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?lm(a,e.type,e.stateNode):am(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ro(e,e.memoizedProps,n.memoizedProps)}break;case 27:rt(t,e),ot(e),i&512&&(Pe||n===null||Pt(n,n.return)),n!==null&&i&4&&ro(e,e.memoizedProps,n.memoizedProps);break;case 5:if(rt(t,e),ot(e),i&512&&(Pe||n===null||Pt(n,n.return)),e.flags&32){a=e.stateNode;try{bi(a,"")}catch(Q){Ce(e,e.return,Q)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,ro(e,a,n!==null?n.memoizedProps:a)),i&1024&&(co=!0);break;case 6:if(rt(t,e),ot(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Q){Ce(e,e.return,Q)}}break;case 3:if(rl=null,a=Ut,Ut=sl(t.containerInfo),rt(t,e),Ut=a,ot(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(Q){Ce(e,e.return,Q)}co&&(co=!1,lp(e));break;case 4:i=Ut,Ut=sl(e.stateNode.containerInfo),rt(t,e),ot(e),Ut=i;break;case 12:rt(t,e),ot(e);break;case 31:rt(t,e),ot(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Qs(e,i)));break;case 13:rt(t,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ys=mt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Qs(e,i)));break;case 22:a=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,E=sn,R=Pe;if(sn=E||a,Pe=R||v,rt(t,e),Pe=R,sn=E,ot(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||v||sn||Pe||ri(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(s=v.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{d=v.stateNode;var k=v.memoizedProps.style,O=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(Q){Ce(v,v.return,Q)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(Q){Ce(v,v.return,Q)}}}else if(t.tag===18){if(n===null){v=t;try{var N=v.stateNode;a?Fp(N,!0):Fp(v.stateNode,!1)}catch(Q){Ce(v,v.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Qs(e,n))));break;case 19:rt(t,e),ot(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Qs(e,i)));break;case 30:break;case 21:break;default:rt(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Kd(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode,s=oo(e);Vs(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(bi(r,""),n.flags&=-33);var d=oo(e);Vs(e,d,r);break;case 3:case 4:var v=n.stateNode.containerInfo,E=oo(e);uo(e,E,v);break;default:throw Error(o(161))}}catch(R){Ce(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ep(e,t.alternate,t),t=t.sibling}function ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nn(4,t,t.return),ri(t);break;case 1:Pt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Fd(t,t.return,n),ri(t);break;case 27:_a(t.stateNode);case 26:case 5:Pt(t,t.return),ri(t);break;case 22:t.memoizedState===null&&ri(t);break;case 30:ri(t);break;default:ri(t)}e=e.sibling}}function on(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:on(a,s,n),Na(4,s);break;case 1:if(on(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(E){Ce(i,i.return,E)}if(i=s,a=i.updateQueue,a!==null){var d=i.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)jc(v[a],d)}catch(E){Ce(i,i.return,E)}}n&&r&64&&Zd(s),La(s,s.return);break;case 27:Wd(s);case 26:case 5:on(a,s,n),n&&i===null&&r&4&&Jd(s),La(s,s.return);break;case 12:on(a,s,n);break;case 31:on(a,s,n),n&&r&4&&ip(a,s);break;case 13:on(a,s,n),n&&r&4&&ap(a,s);break;case 22:s.memoizedState===null&&on(a,s,n),La(s,s.return);break;case 30:break;default:on(a,s,n)}t=t.sibling}}function po(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function mo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function _t(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rp(e,t,n,i),t=t.sibling}function rp(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,n,i),a&2048&&Na(9,t);break;case 1:_t(e,t,n,i);break;case 3:_t(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(a&2048){_t(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,d=s.onPostCommit;typeof d=="function"&&d(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(t,t.return,v)}}else _t(e,t,n,i);break;case 31:_t(e,t,n,i);break;case 13:_t(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?_t(e,t,n,i):Ra(e,t):s._visibility&2?_t(e,t,n,i):(s._visibility|=2,Ui(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&po(r,t);break;case 24:_t(e,t,n,i),a&2048&&mo(t.alternate,t);break;default:_t(e,t,n,i)}}function Ui(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,d=n,v=i,E=r.flags;switch(r.tag){case 0:case 11:case 15:Ui(s,r,d,v,a),Na(8,r);break;case 23:break;case 22:var R=r.stateNode;r.memoizedState!==null?R._visibility&2?Ui(s,r,d,v,a):Ra(s,r):(R._visibility|=2,Ui(s,r,d,v,a)),a&&E&2048&&po(r.alternate,r);break;case 24:Ui(s,r,d,v,a),a&&E&2048&&mo(r.alternate,r);break;default:Ui(s,r,d,v,a)}t=t.sibling}}function Ra(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ra(n,i),a&2048&&po(i.alternate,i);break;case 24:Ra(n,i),a&2048&&mo(i.alternate,i);break;default:Ra(n,i)}t=t.sibling}}var Ma=8192;function _i(e,t,n){if(e.subtreeFlags&Ma)for(e=e.child;e!==null;)op(e,t,n),e=e.sibling}function op(e,t,n){switch(e.tag){case 26:_i(e,t,n),e.flags&Ma&&e.memoizedState!==null&&Xg(n,Ut,e.memoizedState,e.memoizedProps);break;case 5:_i(e,t,n);break;case 3:case 4:var i=Ut;Ut=sl(e.stateNode.containerInfo),_i(e,t,n),Ut=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ma,Ma=16777216,_i(e,t,n),Ma=i):_i(e,t,n));break;default:_i(e,t,n)}}function up(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function za(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,dp(i,e)}up(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cp(e),e=e.sibling}function cp(e){switch(e.tag){case 0:case 11:case 15:za(e),e.flags&2048&&Nn(9,e,e.return);break;case 3:za(e);break;case 12:za(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xs(e)):za(e);break;default:za(e)}}function Xs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ze=i,dp(i,e)}up(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nn(8,t,t.return),Xs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xs(t));break;default:Xs(t)}e=e.sibling}}function dp(e,t){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Nn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ga(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ze=i;else e:for(n=e;Ze!==null;){i=Ze;var a=i.sibling,s=i.return;if(tp(i),i===n){Ze=null;break e}if(a!==null){a.return=s,Ze=a;break e}Ze=s}}}var rg={getCacheForType:function(e){var t=Ke(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ke(He).controller.signal}},og=typeof WeakMap=="function"?WeakMap:Map,Se=0,Le=null,de=null,me=0,Te=0,xt=null,Ln=!1,Hi=!1,fo=!1,un=0,Ie=0,Rn=0,oi=0,ho=0,St=0,Bi=0,ka=null,ut=null,go=!1,Ys=0,pp=0,Zs=1/0,Fs=null,Mn=null,Ve=0,zn=null,Gi=null,cn=0,vo=0,bo=null,mp=null,wa=0,yo=null;function qt(){return(Se&2)!==0&&me!==0?me&-me:L.T!==null?Ao():Nu()}function fp(){if(St===0)if((me&536870912)===0||ve){var e=is;is<<=1,(is&3932160)===0&&(is=262144),St=e}else St=536870912;return e=bt.current,e!==null&&(e.flags|=32),St}function ct(e,t,n){(e===Le&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Pi(e,0),kn(e,me,St,!1)),na(e,n),((Se&2)===0||e!==Le)&&(e===Le&&((Se&2)===0&&(oi|=n),Ie===4&&kn(e,me,St,!1)),Vt(e))}function hp(e,t,n){if((Se&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ta(e,t),a=i?dg(e,t):So(e,t,!0),s=i;do{if(a===0){Hi&&!i&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!ug(n)){a=So(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var d=e;a=ka;var v=d.current.memoizedState.isDehydrated;if(v&&(Pi(d,r).flags|=256),r=So(d,r,!1),r!==2){if(fo&&!v){d.errorRecoveryDisabledLanes|=s,oi|=s,a=4;break e}s=ut,ut=a,s!==null&&(ut===null?ut=s:ut.push.apply(ut,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Pi(e,0),kn(e,t,0,!0);break}e:{switch(i=e,s=a,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:kn(i,t,St,!Ln);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(a=Ys+300-mt(),10<a)){if(kn(i,t,St,!Ln),ss(i,0,!0)!==0)break e;cn=t,i.timeoutHandle=Xp(gp.bind(null,i,n,ut,Fs,go,t,St,oi,Bi,Ln,s,"Throttled",-0,0),a);break e}gp(i,n,ut,Fs,go,t,St,oi,Bi,Ln,s,null,-0,0)}}break}while(!0);Vt(e)}function gp(e,t,n,i,a,s,r,d,v,E,R,k,O,N){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},op(t,s,k);var Q=(s&62914560)===s?Ys-mt():(s&4194048)===s?pp-mt():0;if(Q=Yg(k,Q),Q!==null){cn=s,e.cancelPendingCommit=Q(Cp.bind(null,e,t,s,n,i,a,r,d,v,R,k,null,O,N)),kn(e,s,r,!E);return}}Cp(e,t,s,n,i,a,r,d,v)}function ug(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!gt(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,i){t&=~ho,t&=~oi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-ht(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Eu(e,n,t)}function Js(){return(Se&6)===0?(Ia(0),!1):!0}function xo(){if(de!==null){if(Te===0)var e=de.return;else e=de,Wt=$n=null,wr(e),zi=null,ba=0,e=de;for(;e!==null;)Yd(e.alternate,e),e=e.return;de=null}}function Pi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ng(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),cn=0,xo(),Le=e,de=n=Jt(e.current,null),me=t,Te=0,xt=null,Ln=!1,Hi=ta(e,t),fo=!1,Bi=St=ho=oi=Rn=Ie=0,ut=ka=null,go=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-ht(i),s=1<<a;t|=e[a],i&=~s}return un=t,vs(),n}function vp(e,t){re=null,L.H=Ea,t===Mi||t===As?(t=zc(),Te=3):t===Tr?(t=zc(),Te=4):Te=t===Kr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,de===null&&(Ie=1,_s(e,Nt(t,e.current)))}function bp(){var e=bt.current;return e===null?!0:(me&4194048)===me?zt===null:(me&62914560)===me||(me&536870912)!==0?e===zt:!1}function yp(){var e=L.H;return L.H=Ea,e===null?Ea:e}function xp(){var e=L.A;return L.A=rg,e}function Ks(){Ie=4,Ln||(me&4194048)!==me&&bt.current!==null||(Hi=!0),(Rn&134217727)===0&&(oi&134217727)===0||Le===null||kn(Le,me,St,!1)}function So(e,t,n){var i=Se;Se|=2;var a=yp(),s=xp();(Le!==e||me!==t)&&(Fs=null,Pi(e,t)),t=!1;var r=Ie;e:do try{if(Te!==0&&de!==null){var d=de,v=xt;switch(Te){case 8:xo(),r=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var E=Te;if(Te=0,xt=null,Vi(e,d,v,E),n&&Hi){r=0;break e}break;default:E=Te,Te=0,xt=null,Vi(e,d,v,E)}}cg(),r=Ie;break}catch(R){vp(e,R)}while(!0);return t&&e.shellSuspendCounter++,Wt=$n=null,Se=i,L.H=a,L.A=s,de===null&&(Le=null,me=0,vs()),r}function cg(){for(;de!==null;)Sp(de)}function dg(e,t){var n=Se;Se|=2;var i=yp(),a=xp();Le!==e||me!==t?(Fs=null,Zs=mt()+500,Pi(e,t)):Hi=ta(e,t);e:do try{if(Te!==0&&de!==null){t=de;var s=xt;t:switch(Te){case 1:Te=0,xt=null,Vi(e,t,s,1);break;case 2:case 9:if(Rc(s)){Te=0,xt=null,qp(t);break}t=function(){Te!==2&&Te!==9||Le!==e||(Te=7),Vt(e)},s.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Rc(s)?(Te=0,xt=null,qp(t)):(Te=0,xt=null,Vi(e,t,s,7));break;case 5:var r=null;switch(de.tag){case 26:r=de.memoizedState;case 5:case 27:var d=de;if(r?rm(r):d.stateNode.complete){Te=0,xt=null;var v=d.sibling;if(v!==null)de=v;else{var E=d.return;E!==null?(de=E,Ws(E)):de=null}break t}}Te=0,xt=null,Vi(e,t,s,5);break;case 6:Te=0,xt=null,Vi(e,t,s,6);break;case 8:xo(),Ie=6;break e;default:throw Error(o(462))}}pg();break}catch(R){vp(e,R)}while(!0);return Wt=$n=null,L.H=i,L.A=a,Se=n,de!==null?0:(Le=null,me=0,vs(),Ie)}function pg(){for(;de!==null&&!wf();)Sp(de)}function Sp(e){var t=Qd(e.alternate,e,un);e.memoizedProps=e.pendingProps,t===null?Ws(e):de=t}function qp(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_d(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=_d(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:wr(t);default:Yd(n,t),t=de=xc(t,un),t=Qd(n,t,un)}e.memoizedProps=e.pendingProps,t===null?Ws(e):de=t}function Vi(e,t,n,i){Wt=$n=null,wr(t),zi=null,ba=0;var a=t.return;try{if(eg(e,a,t,n,me)){Ie=1,_s(e,Nt(n,e.current)),de=null;return}}catch(s){if(a!==null)throw de=a,s;Ie=1,_s(e,Nt(n,e.current)),de=null;return}t.flags&32768?(ve||i===1?e=!0:Hi||(me&536870912)!==0?e=!1:(Ln=e=!0,(i===2||i===9||i===3||i===6)&&(i=bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Tp(t,e)):Ws(t)}function Ws(e){var t=e;do{if((t.flags&32768)!==0){Tp(t,Ln);return}e=t.return;var n=ig(t.alternate,t,un);if(n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Ie===0&&(Ie=5)}function Tp(e,t){do{var n=ag(e.alternate,e);if(n!==null){n.flags&=32767,de=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=n}while(e!==null);Ie=6,de=null}function Cp(e,t,n,i,a,s,r,d,v){e.cancelPendingCommit=null;do $s();while(Ve!==0);if((Se&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(s=t.lanes|t.childLanes,s|=or,Qf(e,n,s,r,d,v),e===Le&&(de=Le=null,me=0),Gi=t,zn=e,cn=n,vo=s,bo=a,mp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gg(ts,function(){return Np(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=L.T,L.T=null,a=U.p,U.p=2,r=Se,Se|=4;try{sg(e,t,n)}finally{Se=r,U.p=a,L.T=i}}Ve=1,Ap(),Ep(),Op()}}function Ap(){if(Ve===1){Ve=0;var e=zn,t=Gi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var i=U.p;U.p=2;var a=Se;Se|=4;try{sp(t,e);var s=zo,r=dc(e.containerInfo),d=s.focusedElem,v=s.selectionRange;if(r!==d&&d&&d.ownerDocument&&cc(d.ownerDocument.documentElement,d)){if(v!==null&&ir(d)){var E=v.start,R=v.end;if(R===void 0&&(R=E),"selectionStart"in d)d.selectionStart=E,d.selectionEnd=Math.min(R,d.value.length);else{var k=d.ownerDocument||document,O=k&&k.defaultView||window;if(O.getSelection){var N=O.getSelection(),Q=d.textContent.length,ne=Math.min(v.start,Q),Oe=v.end===void 0?ne:Math.min(v.end,Q);!N.extend&&ne>Oe&&(r=Oe,Oe=ne,ne=r);var T=uc(d,ne),b=uc(d,Oe);if(T&&b&&(N.rangeCount!==1||N.anchorNode!==T.node||N.anchorOffset!==T.offset||N.focusNode!==b.node||N.focusOffset!==b.offset)){var A=k.createRange();A.setStart(T.node,T.offset),N.removeAllRanges(),ne>Oe?(N.addRange(A),N.extend(b.node,b.offset)):(A.setEnd(b.node,b.offset),N.addRange(A))}}}}for(k=[],N=d;N=N.parentNode;)N.nodeType===1&&k.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var z=k[d];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}dl=!!Mo,zo=Mo=null}finally{Se=a,U.p=i,L.T=n}}e.current=t,Ve=2}}function Ep(){if(Ve===2){Ve=0;var e=zn,t=Gi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var i=U.p;U.p=2;var a=Se;Se|=4;try{ep(e,t.alternate,t)}finally{Se=a,U.p=i,L.T=n}}Ve=3}}function Op(){if(Ve===4||Ve===3){Ve=0,If();var e=zn,t=Gi,n=cn,i=mp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Gi=zn=null,Dp(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Mn=null),Ul(n),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ea,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=L.T,a=U.p,U.p=2,L.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var d=i[r];s(d.value,{componentStack:d.stack})}}finally{L.T=t,U.p=a}}(cn&3)!==0&&$s(),Vt(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===yo?wa++:(wa=0,yo=e):wa=0,Ia(0)}}function Dp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function $s(){return Ap(),Ep(),Op(),Np()}function Np(){if(Ve!==5)return!1;var e=zn,t=vo;vo=0;var n=Ul(cn),i=L.T,a=U.p;try{U.p=32>n?32:n,L.T=null,n=bo,bo=null;var s=zn,r=cn;if(Ve=0,Gi=zn=null,cn=0,(Se&6)!==0)throw Error(o(331));var d=Se;if(Se|=4,cp(s.current),rp(s,s.current,r,n),Se=d,Ia(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ea,s)}catch{}return!0}finally{U.p=a,L.T=i,Dp(e,t)}}function Lp(e,t,n){t=Nt(n,t),t=Jr(e.stateNode,t,2),e=En(e,t,2),e!==null&&(na(e,2),Vt(e))}function Ce(e,t,n){if(e.tag===3)Lp(e,e,n);else for(;t!==null;){if(t.tag===3){Lp(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mn===null||!Mn.has(i))){e=Nt(n,e),n=Rd(2),i=En(t,n,2),i!==null&&(Md(n,i,t,e),na(i,2),Vt(i));break}}t=t.return}}function qo(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new og;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(fo=!0,a.add(n),e=mg.bind(null,e,t,n),t.then(e,e))}function mg(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(me&n)===n&&(Ie===4||Ie===3&&(me&62914560)===me&&300>mt()-Ys?(Se&2)===0&&Pi(e,0):ho|=n,Bi===me&&(Bi=0)),Vt(e)}function Rp(e,t){t===0&&(t=Au()),e=Jn(e,t),e!==null&&(na(e,t),Vt(e))}function fg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function hg(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Rp(e,n)}function gg(e,t){return kl(e,t)}var el=null,Qi=null,To=!1,tl=!1,Co=!1,wn=0;function Vt(e){e!==Qi&&e.next===null&&(Qi===null?el=Qi=e:Qi=Qi.next=e),tl=!0,To||(To=!0,bg())}function Ia(e,t){if(!Co&&tl){Co=!0;do for(var n=!1,i=el;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,d=i.pingedLanes;s=(1<<31-ht(42|e)+1)-1,s&=a&~(r&~d),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,wp(i,s))}else s=me,s=ss(i,i===Le?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||ta(i,s)||(n=!0,wp(i,s));i=i.next}while(n);Co=!1}}function vg(){Mp()}function Mp(){tl=To=!1;var e=0;wn!==0&&Dg()&&(e=wn);for(var t=mt(),n=null,i=el;i!==null;){var a=i.next,s=zp(i,t);s===0?(i.next=null,n===null?el=a:n.next=a,a===null&&(Qi=n)):(n=i,(e!==0||(s&3)!==0)&&(tl=!0)),i=a}Ve!==0&&Ve!==5||Ia(e),wn!==0&&(wn=0)}function zp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-ht(s),d=1<<r,v=a[r];v===-1?((d&n)===0||(d&i)!==0)&&(a[r]=Vf(d,t)):v<=t&&(e.expiredLanes|=d),s&=~d}if(t=Le,n=me,n=ss(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&wl(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ta(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&wl(i),Ul(n)){case 2:case 8:n=Tu;break;case 32:n=ts;break;case 268435456:n=Cu;break;default:n=ts}return i=kp.bind(null,e),n=kl(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&wl(i),e.callbackPriority=2,e.callbackNode=null,2}function kp(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($s()&&e.callbackNode!==n)return null;var i=me;return i=ss(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hp(e,i,t),zp(e,mt()),e.callbackNode!=null&&e.callbackNode===n?kp.bind(null,e):null)}function wp(e,t){if($s())return null;hp(e,t,!0)}function bg(){Lg(function(){(Se&6)!==0?kl(qu,vg):Mp()})}function Ao(){if(wn===0){var e=Li;e===0&&(e=ns,ns<<=1,(ns&261888)===0&&(ns=256)),wn=e}return wn}function Ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:us(""+e)}function jp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yg(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Ip((a[at]||null).action),r=i.submitter;r&&(t=(t=r[at]||null)?Ip(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var d=new ms("action","action",null,i,a);e.push({event:d,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wn!==0){var v=r?jp(a,r):new FormData(a);Vr(n,{pending:!0,data:v,method:a.method,action:s},null,v)}}else typeof s=="function"&&(d.preventDefault(),v=r?jp(a,r):new FormData(a),Vr(n,{pending:!0,data:v,method:a.method,action:s},s,v))},currentTarget:a}]})}}for(var Eo=0;Eo<rr.length;Eo++){var Oo=rr[Eo],xg=Oo.toLowerCase(),Sg=Oo[0].toUpperCase()+Oo.slice(1);jt(xg,"on"+Sg)}jt(fc,"onAnimationEnd"),jt(hc,"onAnimationIteration"),jt(gc,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(jh,"onTransitionRun"),jt(Uh,"onTransitionStart"),jt(_h,"onTransitionCancel"),jt(vc,"onTransitionEnd"),gi("onMouseEnter",["mouseout","mouseover"]),gi("onMouseLeave",["mouseout","mouseover"]),gi("onPointerEnter",["pointerout","pointerover"]),gi("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ja));function Up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var d=i[r],v=d.instance,E=d.currentTarget;if(d=d.listener,v!==s&&a.isPropagationStopped())break e;s=d,a.currentTarget=E;try{s(a)}catch(R){gs(R)}a.currentTarget=null,s=v}else for(r=0;r<i.length;r++){if(d=i[r],v=d.instance,E=d.currentTarget,d=d.listener,v!==s&&a.isPropagationStopped())break e;s=d,a.currentTarget=E;try{s(a)}catch(R){gs(R)}a.currentTarget=null,s=v}}}}function pe(e,t){var n=t[_l];n===void 0&&(n=t[_l]=new Set);var i=e+"__bubble";n.has(i)||(_p(t,e,2,!1),n.add(i))}function Do(e,t,n){var i=0;t&&(i|=4),_p(n,e,i,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function No(e){if(!e[nl]){e[nl]=!0,Mu.forEach(function(n){n!=="selectionchange"&&(qg.has(n)||Do(n,!1,e),Do(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Do("selectionchange",!1,t))}}function _p(e,t,n,i){switch(fm(t)){case 2:var a=Jg;break;case 8:a=Kg;break;default:a=Vo}n=a.bind(null,t,n,e),a=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Lo(e,t,n,i,a){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var d=i.stateNode.containerInfo;if(d===a)break;if(r===4)for(r=i.return;r!==null;){var v=r.tag;if((v===3||v===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;d!==null;){if(r=mi(d),r===null)return;if(v=r.tag,v===5||v===6||v===26||v===27){i=s=r;continue e}d=d.parentNode}}i=i.return}Vu(function(){var E=s,R=Xl(n),k=[];e:{var O=bc.get(e);if(O!==void 0){var N=ms,Q=e;switch(e){case"keypress":if(ds(n)===0)break e;case"keydown":case"keyup":N=hh;break;case"focusin":Q="focus",N=Wl;break;case"focusout":Q="blur",N=Wl;break;case"beforeblur":case"afterblur":N=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=bh;break;case fc:case hc:case gc:N=lh;break;case vc:N=xh;break;case"scroll":case"scrollend":N=th;break;case"wheel":N=qh;break;case"copy":case"cut":case"paste":N=oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Fu;break;case"toggle":case"beforetoggle":N=Ch}var ne=(t&4)!==0,Oe=!ne&&(e==="scroll"||e==="scrollend"),T=ne?O!==null?O+"Capture":null:O;ne=[];for(var b=E,A;b!==null;){var z=b;if(A=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||A===null||T===null||(z=sa(b,T),z!=null&&ne.push(Ua(b,z,A))),Oe)break;b=b.return}0<ne.length&&(O=new N(O,Q,null,n,R),k.push({event:O,listeners:ne}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",O&&n!==Ql&&(Q=n.relatedTarget||n.fromElement)&&(mi(Q)||Q[pi]))break e;if((N||O)&&(O=R.window===R?R:(O=R.ownerDocument)?O.defaultView||O.parentWindow:window,N?(Q=n.relatedTarget||n.toElement,N=E,Q=Q?mi(Q):null,Q!==null&&(Oe=m(Q),ne=Q.tag,Q!==Oe||ne!==5&&ne!==27&&ne!==6)&&(Q=null)):(N=null,Q=E),N!==Q)){if(ne=Yu,z="onMouseLeave",T="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Fu,z="onPointerLeave",T="onPointerEnter",b="pointer"),Oe=N==null?O:aa(N),A=Q==null?O:aa(Q),O=new ne(z,b+"leave",N,n,R),O.target=Oe,O.relatedTarget=A,z=null,mi(R)===E&&(ne=new ne(T,b+"enter",Q,n,R),ne.target=A,ne.relatedTarget=Oe,z=ne),Oe=z,N&&Q)t:{for(ne=Tg,T=N,b=Q,A=0,z=T;z;z=ne(z))A++;z=0;for(var W=b;W;W=ne(W))z++;for(;0<A-z;)T=ne(T),A--;for(;0<z-A;)b=ne(b),z--;for(;A--;){if(T===b||b!==null&&T===b.alternate){ne=T;break t}T=ne(T),b=ne(b)}ne=null}else ne=null;N!==null&&Hp(k,O,N,ne,!1),Q!==null&&Oe!==null&&Hp(k,Oe,Q,ne,!0)}}e:{if(O=E?aa(E):window,N=O.nodeName&&O.nodeName.toLowerCase(),N==="select"||N==="input"&&O.type==="file")var ye=ic;else if(tc(O))if(ac)ye=kh;else{ye=Mh;var F=Rh}else N=O.nodeName,!N||N.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?E&&Vl(E.elementType)&&(ye=ic):ye=zh;if(ye&&(ye=ye(e,E))){nc(k,ye,n,R);break e}F&&F(e,O,E),e==="focusout"&&E&&O.type==="number"&&E.memoizedProps.value!=null&&Pl(O,"number",O.value)}switch(F=E?aa(E):window,e){case"focusin":(tc(F)||F.contentEditable==="true")&&(qi=F,ar=E,ma=null);break;case"focusout":ma=ar=qi=null;break;case"mousedown":sr=!0;break;case"contextmenu":case"mouseup":case"dragend":sr=!1,pc(k,n,R);break;case"selectionchange":if(Ih)break;case"keydown":case"keyup":pc(k,n,R)}var oe;if(er)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else Si?$u(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Ju&&n.locale!=="ko"&&(Si||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&Si&&(oe=Qu()):(yn=R,Fl="value"in yn?yn.value:yn.textContent,Si=!0)),F=il(E,fe),0<F.length&&(fe=new Zu(fe,e,null,n,R),k.push({event:fe,listeners:F}),oe?fe.data=oe:(oe=ec(n),oe!==null&&(fe.data=oe)))),(oe=Eh?Oh(e,n):Dh(e,n))&&(fe=il(E,"onBeforeInput"),0<fe.length&&(F=new Zu("onBeforeInput","beforeinput",null,n,R),k.push({event:F,listeners:fe}),F.data=oe)),yg(k,e,E,n,R)}Up(k,t)})}function Ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=sa(e,n),a!=null&&i.unshift(Ua(e,a,s)),a=sa(e,t),a!=null&&i.push(Ua(e,a,s))),e.tag===3)return i;e=e.return}return[]}function Tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hp(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var d=n,v=d.alternate,E=d.stateNode;if(d=d.tag,v!==null&&v===i)break;d!==5&&d!==26&&d!==27||E===null||(v=E,a?(E=sa(n,s),E!=null&&r.unshift(Ua(n,E,v))):a||(E=sa(n,s),E!=null&&r.push(Ua(n,E,v)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Cg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(Cg,`
`).replace(Ag,"")}function Gp(e,t){return t=Bp(t),Bp(e)===t}function Ee(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||bi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&bi(e,""+i);break;case"className":rs(e,"class",i);break;case"tabIndex":rs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":rs(e,n,i);break;case"style":Gu(e,i,s);break;case"data":if(t!=="object"){rs(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=us(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ee(e,t,"name",a.name,a,null),Ee(e,t,"formEncType",a.formEncType,a,null),Ee(e,t,"formMethod",a.formMethod,a,null),Ee(e,t,"formTarget",a.formTarget,a,null)):(Ee(e,t,"encType",a.encType,a,null),Ee(e,t,"method",a.method,a,null),Ee(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=us(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=us(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":pe("beforetoggle",e),pe("toggle",e),ls(e,"popover",i);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ls(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=$f.get(n)||n,ls(e,n,i))}}function Ro(e,t,n,i,a,s){switch(n){case"style":Gu(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?bi(e,i):(typeof i=="number"||typeof i=="bigint")&&bi(e,""+i);break;case"onScroll":i!=null&&pe("scroll",e);break;case"onScrollEnd":i!=null&&pe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[at]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ls(e,n,i)}}}function $e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,s,r,n,null)}}a&&Ee(e,t,"srcSet",n.srcSet,n,null),i&&Ee(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var d=s=r=a=null,v=null,E=null;for(i in n)if(n.hasOwnProperty(i)){var R=n[i];if(R!=null)switch(i){case"name":a=R;break;case"type":r=R;break;case"checked":v=R;break;case"defaultChecked":E=R;break;case"value":s=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:Ee(e,t,i,R,n,null)}}Uu(e,s,d,v,E,r,a,!1);return;case"select":pe("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(d=n[a],d!=null))switch(a){case"value":s=d;break;case"defaultValue":r=d;break;case"multiple":i=d;default:Ee(e,t,a,d,n,null)}t=s,n=r,e.multiple=!!i,t!=null?vi(e,!!i,t,!1):n!=null&&vi(e,!!i,n,!0);return;case"textarea":pe("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(d=n[r],d!=null))switch(r){case"value":i=d;break;case"defaultValue":a=d;break;case"children":s=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:Ee(e,t,r,d,n,null)}Hu(e,i,a,s);return;case"option":for(v in n)n.hasOwnProperty(v)&&(i=n[v],i!=null)&&(v==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ee(e,t,v,i,n,null));return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(i=0;i<ja.length;i++)pe(ja[i],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in n)if(n.hasOwnProperty(E)&&(i=n[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ee(e,t,E,i,n,null)}return;default:if(Vl(t)){for(R in n)n.hasOwnProperty(R)&&(i=n[R],i!==void 0&&Ro(e,t,R,i,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!=null&&Ee(e,t,d,i,n,null))}function Eg(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,d=null,v=null,E=null,R=null;for(N in n){var k=n[N];if(n.hasOwnProperty(N)&&k!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=k;default:i.hasOwnProperty(N)||Ee(e,t,N,null,i,k)}}for(var O in i){var N=i[O];if(k=n[O],i.hasOwnProperty(O)&&(N!=null||k!=null))switch(O){case"type":s=N;break;case"name":a=N;break;case"checked":E=N;break;case"defaultChecked":R=N;break;case"value":r=N;break;case"defaultValue":d=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:N!==k&&Ee(e,t,O,N,i,k)}}Gl(e,r,d,v,E,R,s,a);return;case"select":N=r=d=O=null;for(s in n)if(v=n[s],n.hasOwnProperty(s)&&v!=null)switch(s){case"value":break;case"multiple":N=v;default:i.hasOwnProperty(s)||Ee(e,t,s,null,i,v)}for(a in i)if(s=i[a],v=n[a],i.hasOwnProperty(a)&&(s!=null||v!=null))switch(a){case"value":O=s;break;case"defaultValue":d=s;break;case"multiple":r=s;default:s!==v&&Ee(e,t,a,s,i,v)}t=d,n=r,i=N,O!=null?vi(e,!!n,O,!1):!!i!=!!n&&(t!=null?vi(e,!!n,t,!0):vi(e,!!n,n?[]:"",!1));return;case"textarea":N=O=null;for(d in n)if(a=n[d],n.hasOwnProperty(d)&&a!=null&&!i.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ee(e,t,d,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":O=a;break;case"defaultValue":N=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(o(91));break;default:a!==s&&Ee(e,t,r,a,i,s)}_u(e,O,N);return;case"option":for(var Q in n)O=n[Q],n.hasOwnProperty(Q)&&O!=null&&!i.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:Ee(e,t,Q,null,i,O));for(v in i)O=i[v],N=n[v],i.hasOwnProperty(v)&&O!==N&&(O!=null||N!=null)&&(v==="selected"?e.selected=O&&typeof O!="function"&&typeof O!="symbol":Ee(e,t,v,O,i,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)O=n[ne],n.hasOwnProperty(ne)&&O!=null&&!i.hasOwnProperty(ne)&&Ee(e,t,ne,null,i,O);for(E in i)if(O=i[E],N=n[E],i.hasOwnProperty(E)&&O!==N&&(O!=null||N!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Ee(e,t,E,O,i,N)}return;default:if(Vl(t)){for(var Oe in n)O=n[Oe],n.hasOwnProperty(Oe)&&O!==void 0&&!i.hasOwnProperty(Oe)&&Ro(e,t,Oe,void 0,i,O);for(R in i)O=i[R],N=n[R],!i.hasOwnProperty(R)||O===N||O===void 0&&N===void 0||Ro(e,t,R,O,i,N);return}}for(var T in n)O=n[T],n.hasOwnProperty(T)&&O!=null&&!i.hasOwnProperty(T)&&Ee(e,t,T,null,i,O);for(k in i)O=i[k],N=n[k],!i.hasOwnProperty(k)||O===N||O==null&&N==null||Ee(e,t,k,O,i,N)}function Pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Og(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,d=a.duration;if(s&&d&&Pp(r)){for(r=0,d=a.responseEnd,i+=1;i<n.length;i++){var v=n[i],E=v.startTime;if(E>d)break;var R=v.transferSize,k=v.initiatorType;R&&Pp(k)&&(v=v.responseEnd,r+=R*(v<d?1:(d-E)/(v-E)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Mo=null,zo=null;function al(e){return e.nodeType===9?e:e.ownerDocument}function Vp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=null;function Dg(){var e=window.event;return e&&e.type==="popstate"?e===wo?!1:(wo=e,!0):(wo=null,!1)}var Xp=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,Lg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(e){return Yp.resolve(null).then(e).catch(Rg)}:Xp;function Rg(e){setTimeout(function(){throw e})}function In(e){return e==="head"}function Zp(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Fi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")_a(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_a(n);for(var s=n.firstChild;s;){var r=s.nextSibling,d=s.nodeName;s[ia]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&_a(e.ownerDocument.body);n=a}while(n);Fi(t)}function Fp(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Io(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Io(n),Hl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Mg(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function zg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kt(e.nextSibling),e===null))return null;return e}function Jp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=kt(e.nextSibling),e===null))return null;return e}function jo(e){return e.data==="$?"||e.data==="$~"}function Uo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var _o=null;function Kp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function $p(e,t,n){switch(t=al(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function _a(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hl(e)}var wt=new Map,em=new Set;function sl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dn=U.d;U.d={f:wg,r:Ig,D:jg,C:Ug,L:_g,m:Hg,X:Gg,S:Bg,M:Pg};function wg(){var e=dn.f(),t=Js();return e||t}function Ig(e){var t=fi(e);t!==null&&t.tag===5&&t.type==="form"?vd(t):dn.r(e)}var Xi=typeof document>"u"?null:document;function tm(e,t,n){var i=Xi;if(i&&typeof t=="string"&&t){var a=Ot(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),em.has(a)||(em.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),$e(t,"link",e),Ye(t),i.head.appendChild(t)))}}function jg(e){dn.D(e),tm("dns-prefetch",e,null)}function Ug(e,t){dn.C(e,t),tm("preconnect",e,t)}function _g(e,t,n){dn.L(e,t,n);var i=Xi;if(i&&e&&t){var a='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ot(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ot(n.imageSizes)+'"]')):a+='[href="'+Ot(e)+'"]';var s=a;switch(t){case"style":s=Yi(e);break;case"script":s=Zi(e)}wt.has(s)||(e=q({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wt.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ha(s))||t==="script"&&i.querySelector(Ba(s))||(t=i.createElement("link"),$e(t,"link",e),Ye(t),i.head.appendChild(t)))}}function Hg(e,t){dn.m(e,t);var n=Xi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ot(i)+'"][href="'+Ot(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zi(e)}if(!wt.has(s)&&(e=q({rel:"modulepreload",href:e},t),wt.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ba(s)))return}i=n.createElement("link"),$e(i,"link",e),Ye(i),n.head.appendChild(i)}}}function Bg(e,t,n){dn.S(e,t,n);var i=Xi;if(i&&e){var a=hi(i).hoistableStyles,s=Yi(e);t=t||"default";var r=a.get(s);if(!r){var d={loading:0,preload:null};if(r=i.querySelector(Ha(s)))d.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wt.get(s))&&Ho(e,n);var v=r=i.createElement("link");Ye(v),$e(v,"link",e),v._p=new Promise(function(E,R){v.onload=E,v.onerror=R}),v.addEventListener("load",function(){d.loading|=1}),v.addEventListener("error",function(){d.loading|=2}),d.loading|=4,ll(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:d},a.set(s,r)}}}function Gg(e,t){dn.X(e,t);var n=Xi;if(n&&e){var i=hi(n).hoistableScripts,a=Zi(e),s=i.get(a);s||(s=n.querySelector(Ba(a)),s||(e=q({src:e,async:!0},t),(t=wt.get(a))&&Bo(e,t),s=n.createElement("script"),Ye(s),$e(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Pg(e,t){dn.M(e,t);var n=Xi;if(n&&e){var i=hi(n).hoistableScripts,a=Zi(e),s=i.get(a);s||(s=n.querySelector(Ba(a)),s||(e=q({src:e,async:!0,type:"module"},t),(t=wt.get(a))&&Bo(e,t),s=n.createElement("script"),Ye(s),$e(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function nm(e,t,n,i){var a=(a=$.current)?sl(a):null;if(!a)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Yi(n.href),n=hi(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Yi(n.href);var s=hi(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Ha(e)))&&!s._p&&(r.instance=s,r.state.loading=5),wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wt.set(e,n),s||Vg(a,e,n,r.state))),t&&i===null)throw Error(o(528,""));return r}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zi(n),n=hi(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Yi(e){return'href="'+Ot(e)+'"'}function Ha(e){return'link[rel="stylesheet"]['+e+"]"}function im(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function Vg(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),$e(t,"link",n),Ye(t),e.head.appendChild(t))}function Zi(e){return'[src="'+Ot(e)+'"]'}function Ba(e){return"script[async]"+e}function am(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ot(n.href)+'"]');if(i)return t.instance=i,Ye(i),i;var a=q({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ye(i),$e(i,"style",a),ll(i,n.precedence,e),t.instance=i;case"stylesheet":a=Yi(n.href);var s=e.querySelector(Ha(a));if(s)return t.state.loading|=4,t.instance=s,Ye(s),s;i=im(n),(a=wt.get(a))&&Ho(i,a),s=(e.ownerDocument||e).createElement("link"),Ye(s);var r=s;return r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),$e(s,"link",i),t.state.loading|=4,ll(s,n.precedence,e),t.instance=s;case"script":return s=Zi(n.src),(a=e.querySelector(Ba(s)))?(t.instance=a,Ye(a),a):(i=n,(a=wt.get(s))&&(i=q({},n),Bo(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ye(a),$e(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ll(i,n.precedence,e));return t.instance}function ll(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var d=i[r];if(d.dataset.precedence===t)s=d;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ho(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var rl=null;function sm(e,t,n){if(rl===null){var i=new Map,a=rl=new Map;a.set(n,i)}else a=rl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[ia]||s[Fe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var d=i.get(r);d?d.push(s):i.set(r,[s])}}return i}function lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Qg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xg(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Yi(i.href),s=t.querySelector(Ha(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ol.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,Ye(s);return}s=t.ownerDocument||t,i=im(i),(a=wt.get(a))&&Ho(i,a),s=s.createElement("link"),Ye(s);var r=s;r._p=new Promise(function(d,v){r.onload=d,r.onerror=v}),$e(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ol.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Go=0;function Yg(e,t){return e.stylesheets&&e.count===0&&cl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&cl(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Go===0&&(Go=62500*Og());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cl(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Go?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ul=null;function cl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ul=new Map,t.forEach(Zg,e),ul=null,ol.call(e))}function Zg(e,t){if(!(t.state.loading&4)){var n=ul.get(e);if(n)var i=n.get(null);else{n=new Map,ul.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=ol.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ga={$$typeof:J,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Fg(e,t,n,i,a,s,r,d,v){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Il(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.hiddenUpdates=Il(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function om(e,t,n,i,a,s,r,d,v,E,R,k){return e=new Fg(e,t,n,r,v,E,R,k,d),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=xr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Cr(s),e}function um(e){return e?(e=Ai,e):Ai}function cm(e,t,n,i,a,s){a=um(a),i.context===null?i.context=a:i.pendingContext=a,i=An(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=En(e,i,t),n!==null&&(ct(n,e,t),xa(n,e,t))}function dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Po(e,t){dm(e,t),(e=e.alternate)&&dm(e,t)}function pm(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&ct(t,e,67108864),Po(e,67108864)}}function mm(e){if(e.tag===13||e.tag===31){var t=qt();t=jl(t);var n=Jn(e,t);n!==null&&ct(n,e,t),Po(e,t)}}var dl=!0;function Jg(e,t,n,i){var a=L.T;L.T=null;var s=U.p;try{U.p=2,Vo(e,t,n,i)}finally{U.p=s,L.T=a}}function Kg(e,t,n,i){var a=L.T;L.T=null;var s=U.p;try{U.p=8,Vo(e,t,n,i)}finally{U.p=s,L.T=a}}function Vo(e,t,n,i){if(dl){var a=Qo(i);if(a===null)Lo(e,t,i,pl,n),hm(e,i);else if($g(a,e,t,n,i))i.stopPropagation();else if(hm(e,i),t&4&&-1<Wg.indexOf(e)){for(;a!==null;){var s=fi(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Qn(s.pendingLanes);if(r!==0){var d=s;for(d.pendingLanes|=2,d.entangledLanes|=2;r;){var v=1<<31-ht(r);d.entanglements[1]|=v,r&=~v}Vt(s),(Se&6)===0&&(Zs=mt()+500,Ia(0))}}break;case 31:case 13:d=Jn(s,2),d!==null&&ct(d,s,2),Js(),Po(s,2)}if(s=Qo(i),s===null&&Lo(e,t,i,pl,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Lo(e,t,i,null,n)}}function Qo(e){return e=Xl(e),Xo(e)}var pl=null;function Xo(e){if(pl=null,e=mi(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pl=e,null}function fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jf()){case qu:return 2;case Tu:return 8;case ts:case Uf:return 32;case Cu:return 268435456;default:return 32}default:return 32}}var Yo=!1,jn=null,Un=null,_n=null,Pa=new Map,Va=new Map,Hn=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hm(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(t.pointerId)}}function Qa(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=fi(t),t!==null&&pm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $g(e,t,n,i,a){switch(t){case"focusin":return jn=Qa(jn,e,t,n,i,a),!0;case"dragenter":return Un=Qa(Un,e,t,n,i,a),!0;case"mouseover":return _n=Qa(_n,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Pa.set(s,Qa(Pa.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Va.set(s,Qa(Va.get(s)||null,e,t,n,i,a)),!0}return!1}function gm(e){var t=mi(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Lu(e.priority,function(){mm(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Lu(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qo(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ql=i,n.target.dispatchEvent(i),Ql=null}else return t=fi(n),t!==null&&pm(t),e.blockedOn=n,!1;t.shift()}return!0}function vm(e,t,n){ml(e)&&n.delete(t)}function ev(){Yo=!1,jn!==null&&ml(jn)&&(jn=null),Un!==null&&ml(Un)&&(Un=null),_n!==null&&ml(_n)&&(_n=null),Pa.forEach(vm),Va.forEach(vm)}function fl(e,t){e.blockedOn===t&&(e.blockedOn=null,Yo||(Yo=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ev)))}var hl=null;function bm(e){hl!==e&&(hl=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){hl===e&&(hl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Xo(i||n)===null)continue;break}var s=fi(n);s!==null&&(e.splice(t,3),t-=3,Vr(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Fi(e){function t(v){return fl(v,e)}jn!==null&&fl(jn,e),Un!==null&&fl(Un,e),_n!==null&&fl(_n,e),Pa.forEach(t),Va.forEach(t);for(var n=0;n<Hn.length;n++){var i=Hn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&Hn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[at]||null;if(typeof s=="function")r||bm(n);else if(r){var d=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[at]||null)d=r.formAction;else if(Xo(a)!==null)continue}else d=r.action;typeof d=="function"?n[i+1]=d:(n.splice(i,3),i-=3),bm(n)}}}function ym(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Zo(e){this._internalRoot=e}gl.prototype.render=Zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=qt();cm(n,i,e,t,null,null)},gl.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cm(e.current,2,null,e,null,null),Js(),t[pi]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&gm(e)}};var xm=u.version;if(xm!=="19.2.4")throw Error(o(527,xm,"19.2.4"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=f(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var tv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{ea=vl.inject(tv),ft=vl}catch{}}return Ya.createRoot=function(e,t){if(!p(e))throw Error(o(299));var n=!1,i="",a=Od,s=Dd,r=Nd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=om(e,1,!1,null,null,n,i,null,a,s,r,ym),e[pi]=t.current,No(e),new Zo(t)},Ya.hydrateRoot=function(e,t,n){if(!p(e))throw Error(o(299));var i=!1,a="",s=Od,r=Dd,d=Nd,v=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(v=n.formState)),t=om(e,1,!0,t,n??null,i,a,v,s,r,d,ym),t.context=um(null),n=t.current,i=qt(),i=jl(i),a=An(i),a.callback=null,En(n,a,i),n=i,t.current.lanes=n,na(t,n),Vt(t),e[pi]=t.current,No(e),new gl(t)},Ya.version="19.2.4",Ya}var Lm;function pv(){if(Lm)return Ko.exports;Lm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Ko.exports=dv(),Ko.exports}var mv=pv();var Rm="popstate";function Mm(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function fv(l={}){function u(o,p){let m=p.state?.masked,{pathname:g,search:y,hash:h}=m||o.location;return lu("",{pathname:g,search:y,hash:h},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function c(o,p){return typeof p=="string"?p:Ka(p)}return gv(u,c,null,l)}function ke(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Ht(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function hv(){return Math.random().toString(36).substring(2,10)}function zm(l,u){return{usr:l.state,key:l.key,idx:u,masked:l.unstable_mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function lu(l,u,c=null,o,p){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?Ki(u):u,state:c,key:u&&u.key||o||hv(),unstable_mask:p}}function Ka({pathname:l="/",search:u="",hash:c=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Ki(l){let u={};if(l){let c=l.indexOf("#");c>=0&&(u.hash=l.substring(c),l=l.substring(0,c));let o=l.indexOf("?");o>=0&&(u.search=l.substring(o),l=l.substring(0,o)),l&&(u.pathname=l)}return u}function gv(l,u,c,o={}){let{window:p=document.defaultView,v5Compat:m=!1}=o,g=p.history,y="POP",h=null,f=C();f==null&&(f=0,g.replaceState({...g.state,idx:f},""));function C(){return(g.state||{idx:null}).idx}function q(){y="POP";let M=C(),X=M==null?null:M-f;f=M,h&&h({action:y,location:j.location,delta:X})}function I(M,X){y="PUSH";let ie=Mm(M)?M:lu(j.location,M,X);f=C()+1;let J=zm(ie,f),ae=j.createHref(ie.unstable_mask||ie);try{g.pushState(J,"",ae)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;p.location.assign(ae)}m&&h&&h({action:y,location:j.location,delta:1})}function G(M,X){y="REPLACE";let ie=Mm(M)?M:lu(j.location,M,X);f=C();let J=zm(ie,f),ae=j.createHref(ie.unstable_mask||ie);g.replaceState(J,"",ae),m&&h&&h({action:y,location:j.location,delta:0})}function _(M){return vv(M)}let j={get action(){return y},get location(){return l(p,g)},listen(M){if(h)throw new Error("A history only accepts one active listener");return p.addEventListener(Rm,q),h=M,()=>{p.removeEventListener(Rm,q),h=null}},createHref(M){return u(p,M)},createURL:_,encodeLocation(M){let X=_(M);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:I,replace:G,go(M){return g.go(M)}};return j}function vv(l,u=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),ke(c,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:Ka(l);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function Fm(l,u,c="/"){return bv(l,u,c,!1)}function bv(l,u,c,o){let p=typeof u=="string"?Ki(u):u,m=mn(p.pathname||"/",c);if(m==null)return null;let g=Jm(l);yv(g);let y=null;for(let h=0;y==null&&h<g.length;++h){let f=Lv(m);y=Dv(g[h],f,o)}return y}function Jm(l,u=[],c=[],o="",p=!1){let m=(g,y,h=p,f)=>{let C={relativePath:f===void 0?g.path||"":f,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(o)&&h)return;ke(C.relativePath.startsWith(o),`Absolute route path "${C.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(o.length)}let q=Qt([o,C.relativePath]),I=c.concat(C);g.children&&g.children.length>0&&(ke(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${q}".`),Jm(g.children,u,I,q,h)),!(g.path==null&&!g.index)&&u.push({path:q,score:Ev(q,g.index),routesMeta:I})};return l.forEach((g,y)=>{if(g.path===""||!g.path?.includes("?"))m(g,y);else for(let h of Km(g.path))m(g,y,!0,h)}),u}function Km(l){let u=l.split("/");if(u.length===0)return[];let[c,...o]=u,p=c.endsWith("?"),m=c.replace(/\?$/,"");if(o.length===0)return p?[m,""]:[m];let g=Km(o.join("/")),y=[];return y.push(...g.map(h=>h===""?m:[m,h].join("/"))),p&&y.push(...g),y.map(h=>l.startsWith("/")&&h===""?"/":h)}function yv(l){l.sort((u,c)=>u.score!==c.score?c.score-u.score:Ov(u.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var xv=/^:[\w-]+$/,Sv=3,qv=2,Tv=1,Cv=10,Av=-2,km=l=>l==="*";function Ev(l,u){let c=l.split("/"),o=c.length;return c.some(km)&&(o+=Av),u&&(o+=qv),c.filter(p=>!km(p)).reduce((p,m)=>p+(xv.test(m)?Sv:m===""?Tv:Cv),o)}function Ov(l,u){return l.length===u.length&&l.slice(0,-1).every((o,p)=>o===u[p])?l[l.length-1]-u[u.length-1]:0}function Dv(l,u,c=!1){let{routesMeta:o}=l,p={},m="/",g=[];for(let y=0;y<o.length;++y){let h=o[y],f=y===o.length-1,C=m==="/"?u:u.slice(m.length)||"/",q=Cl({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},C),I=h.route;if(!q&&f&&c&&!o[o.length-1].route.index&&(q=Cl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},C)),!q)return null;Object.assign(p,q.params),g.push({params:p,pathname:Qt([m,q.pathname]),pathnameBase:kv(Qt([m,q.pathnameBase])),route:I}),q.pathnameBase!=="/"&&(m=Qt([m,q.pathnameBase]))}return g}function Cl(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,o]=Nv(l.path,l.caseSensitive,l.end),p=u.match(c);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:o.reduce((f,{paramName:C,isOptional:q},I)=>{if(C==="*"){let _=y[I]||"";g=m.slice(0,m.length-_.length).replace(/(.)\/+$/,"$1")}const G=y[I];return q&&!G?f[C]=void 0:f[C]=(G||"").replace(/%2F/g,"/"),f},{}),pathname:m,pathnameBase:g,pattern:l}}function Nv(l,u=!1,c=!0){Ht(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],p="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,h,f,C)=>{if(o.push({paramName:y,isOptional:h!=null}),h){let q=C.charAt(f+g.length);return q&&q!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),p+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?p+="\\/*$":l!==""&&l!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),o]}function Lv(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ht(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function mn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,o=l.charAt(c);return o&&o!=="/"?null:l.slice(c)||"/"}var Rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mv(l,u="/"){let{pathname:c,search:o="",hash:p=""}=typeof l=="string"?Ki(l):l,m;return c?(c=c.replace(/\/\/+/g,"/"),c.startsWith("/")?m=wm(c.substring(1),"/"):m=wm(c,u)):m=u,{pathname:m,search:wv(o),hash:Iv(p)}}function wm(l,u){let c=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(p=>{p===".."?c.length>1&&c.pop():p!=="."&&c.push(p)}),c.length>1?c.join("/"):"/"}function tu(l,u,c,o){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zv(l){return l.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function pu(l){let u=zv(l);return u.map((c,o)=>o===u.length-1?c.pathname:c.pathnameBase)}function Ol(l,u,c,o=!1){let p;typeof l=="string"?p=Ki(l):(p={...l},ke(!p.pathname||!p.pathname.includes("?"),tu("?","pathname","search",p)),ke(!p.pathname||!p.pathname.includes("#"),tu("#","pathname","hash",p)),ke(!p.search||!p.search.includes("#"),tu("#","search","hash",p)));let m=l===""||p.pathname==="",g=m?"/":p.pathname,y;if(g==null)y=c;else{let q=u.length-1;if(!o&&g.startsWith("..")){let I=g.split("/");for(;I[0]==="..";)I.shift(),q-=1;p.pathname=I.join("/")}y=q>=0?u[q]:"/"}let h=Mv(p,y),f=g&&g!=="/"&&g.endsWith("/"),C=(m||g===".")&&c.endsWith("/");return!h.pathname.endsWith("/")&&(f||C)&&(h.pathname+="/"),h}var Qt=l=>l.join("/").replace(/\/\/+/g,"/"),kv=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),wv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Iv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,jv=class{constructor(l,u,c,o=!1){this.status=l,this.statusText=u||"",this.internal=o,c instanceof Error?(this.data=c.toString(),this.error=c):this.data=c}};function Uv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function _v(l){return l.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $m(l,u){let c=l;if(typeof c!="string"||!Rv.test(c))return{absoluteURL:void 0,isExternal:!1,to:c};let o=c,p=!1;if(Wm)try{let m=new URL(window.location.href),g=c.startsWith("//")?new URL(m.protocol+c):new URL(c),y=mn(g.pathname,u);g.origin===m.origin&&y!=null?c=y+g.search+g.hash:p=!0}catch{Ht(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ef=["POST","PUT","PATCH","DELETE"];new Set(ef);var Hv=["GET",...ef];new Set(Hv);var Wi=D.createContext(null);Wi.displayName="DataRouter";var Dl=D.createContext(null);Dl.displayName="DataRouterState";var Bv=D.createContext(!1),tf=D.createContext({isTransitioning:!1});tf.displayName="ViewTransition";var Gv=D.createContext(new Map);Gv.displayName="Fetchers";var Pv=D.createContext(null);Pv.displayName="Await";var Ct=D.createContext(null);Ct.displayName="Navigation";var $a=D.createContext(null);$a.displayName="Location";var It=D.createContext({outlet:null,matches:[],isDataRoute:!1});It.displayName="Route";var mu=D.createContext(null);mu.displayName="RouteError";var nf="REACT_ROUTER_ERROR",Vv="REDIRECT",Qv="ROUTE_ERROR_RESPONSE";function Xv(l){if(l.startsWith(`${nf}:${Vv}:{`))try{let u=JSON.parse(l.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Yv(l){if(l.startsWith(`${nf}:${Qv}:{`))try{let u=JSON.parse(l.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new jv(u.status,u.statusText,u.data)}catch{}}function Zv(l,{relative:u}={}){ke($i(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=D.useContext(Ct),{hash:p,pathname:m,search:g}=es(l,{relative:u}),y=m;return c!=="/"&&(y=m==="/"?c:Qt([c,m])),o.createHref({pathname:y,search:g,hash:p})}function $i(){return D.useContext($a)!=null}function fn(){return ke($i(),"useLocation() may be used only in the context of a <Router> component."),D.useContext($a).location}var af="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sf(l){D.useContext(Ct).static||D.useLayoutEffect(l)}function fu(){let{isDataRoute:l}=D.useContext(It);return l?cb():Fv()}function Fv(){ke($i(),"useNavigate() may be used only in the context of a <Router> component.");let l=D.useContext(Wi),{basename:u,navigator:c}=D.useContext(Ct),{matches:o}=D.useContext(It),{pathname:p}=fn(),m=JSON.stringify(pu(o)),g=D.useRef(!1);return sf(()=>{g.current=!0}),D.useCallback((h,f={})=>{if(Ht(g.current,af),!g.current)return;if(typeof h=="number"){c.go(h);return}let C=Ol(h,JSON.parse(m),p,f.relative==="path");l==null&&u!=="/"&&(C.pathname=C.pathname==="/"?u:Qt([u,C.pathname])),(f.replace?c.replace:c.push)(C,f.state,f)},[u,c,m,p,l])}var Jv=D.createContext(null);function Kv(l){let u=D.useContext(It).outlet;return D.useMemo(()=>u&&D.createElement(Jv.Provider,{value:l},u),[u,l])}function Wv(){let{matches:l}=D.useContext(It),u=l[l.length-1];return u?u.params:{}}function es(l,{relative:u}={}){let{matches:c}=D.useContext(It),{pathname:o}=fn(),p=JSON.stringify(pu(c));return D.useMemo(()=>Ol(l,JSON.parse(p),o,u==="path"),[l,p,o,u])}function $v(l,u){return lf(l,u)}function lf(l,u,c){ke($i(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=D.useContext(Ct),{matches:p}=D.useContext(It),m=p[p.length-1],g=m?m.params:{},y=m?m.pathname:"/",h=m?m.pathnameBase:"/",f=m&&m.route;{let M=f&&f.path||"";of(y,!f||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let C=fn(),q;if(u){let M=typeof u=="string"?Ki(u):u;ke(h==="/"||M.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${M.pathname}" was given in the \`location\` prop.`),q=M}else q=C;let I=q.pathname||"/",G=I;if(h!=="/"){let M=h.replace(/^\//,"").split("/");G="/"+I.replace(/^\//,"").split("/").slice(M.length).join("/")}let _=Fm(l,{pathname:G});Ht(f||_!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Ht(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=ab(_&&_.map(M=>Object.assign({},M,{params:Object.assign({},g,M.params),pathname:Qt([h,o.encodeLocation?o.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?h:Qt([h,o.encodeLocation?o.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),p,c);return u&&j?D.createElement($a.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...q},navigationType:"POP"}},j):j}function eb(){let l=ub(),u=Uv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},m={padding:"2px 4px",backgroundColor:o},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:m},"ErrorBoundary")," or"," ",D.createElement("code",{style:m},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},u),c?D.createElement("pre",{style:p},c):null,g)}var tb=D.createElement(eb,null),rf=class extends D.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){this.props.onError?this.props.onError(l,u):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const c=Yv(l.digest);c&&(l=c)}let u=l!==void 0?D.createElement(It.Provider,{value:this.props.routeContext},D.createElement(mu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?D.createElement(nb,{error:l},u):u}};rf.contextType=Bv;var nu=new WeakMap;function nb({children:l,error:u}){let{basename:c}=D.useContext(Ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=Xv(u.digest);if(o){let p=nu.get(u);if(p)throw p;let m=$m(o.location,c);if(Wm&&!nu.get(u))if(m.isExternal||o.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:o.replace}));throw nu.set(u,g),g}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return l}function ib({routeContext:l,match:u,children:c}){let o=D.useContext(Wi);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),D.createElement(It.Provider,{value:l},c)}function ab(l,u=[],c){let o=c?.state;if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let p=l,m=o?.errors;if(m!=null){let C=p.findIndex(q=>q.route.id&&m?.[q.route.id]!==void 0);ke(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,C+1))}let g=!1,y=-1;if(c&&o){g=o.renderFallback;for(let C=0;C<p.length;C++){let q=p[C];if((q.route.HydrateFallback||q.route.hydrateFallbackElement)&&(y=C),q.route.id){let{loaderData:I,errors:G}=o,_=q.route.loader&&!I.hasOwnProperty(q.route.id)&&(!G||G[q.route.id]===void 0);if(q.route.lazy||_){c.isStatic&&(g=!0),y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}}let h=c?.onError,f=o&&h?(C,q)=>{h(C,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:_v(o.matches),errorInfo:q})}:void 0;return p.reduceRight((C,q,I)=>{let G,_=!1,j=null,M=null;o&&(G=m&&q.route.id?m[q.route.id]:void 0,j=q.route.errorElement||tb,g&&(y<0&&I===0?(of("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):y===I&&(_=!0,M=q.route.hydrateFallbackElement||null)));let X=u.concat(p.slice(0,I+1)),ie=()=>{let J;return G?J=j:_?J=M:q.route.Component?J=D.createElement(q.route.Component,null):q.route.element?J=q.route.element:J=C,D.createElement(ib,{match:q,routeContext:{outlet:C,matches:X,isDataRoute:o!=null},children:J})};return o&&(q.route.ErrorBoundary||q.route.errorElement||I===0)?D.createElement(rf,{location:o.location,revalidation:o.revalidation,component:j,error:G,children:ie(),routeContext:{outlet:null,matches:X,isDataRoute:!0},onError:f}):ie()},null)}function hu(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sb(l){let u=D.useContext(Wi);return ke(u,hu(l)),u}function lb(l){let u=D.useContext(Dl);return ke(u,hu(l)),u}function rb(l){let u=D.useContext(It);return ke(u,hu(l)),u}function gu(l){let u=rb(l),c=u.matches[u.matches.length-1];return ke(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function ob(){return gu("useRouteId")}function ub(){let l=D.useContext(mu),u=lb("useRouteError"),c=gu("useRouteError");return l!==void 0?l:u.errors?.[c]}function cb(){let{router:l}=sb("useNavigate"),u=gu("useNavigate"),c=D.useRef(!1);return sf(()=>{c.current=!0}),D.useCallback(async(p,m={})=>{Ht(c.current,af),c.current&&(typeof p=="number"?await l.navigate(p):await l.navigate(p,{fromRouteId:u,...m}))},[l,u])}var Im={};function of(l,u,c){!u&&!Im[l]&&(Im[l]=!0,Ht(!1,c))}D.memo(db);function db({routes:l,future:u,state:c,isStatic:o,onError:p}){return lf(l,void 0,{state:c,isStatic:o,onError:p})}function jm({to:l,replace:u,state:c,relative:o}){ke($i(),"<Navigate> may be used only in the context of a <Router> component.");let{static:p}=D.useContext(Ct);Ht(!p,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=D.useContext(It),{pathname:g}=fn(),y=fu(),h=Ol(l,pu(m),g,o==="path"),f=JSON.stringify(h);return D.useEffect(()=>{y(JSON.parse(f),{replace:u,state:c,relative:o})},[y,f,o,u,c]),null}function pb(l){return Kv(l.context)}function Ji(l){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mb({basename:l="/",children:u=null,location:c,navigationType:o="POP",navigator:p,static:m=!1,unstable_useTransitions:g}){ke(!$i(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),h=D.useMemo(()=>({basename:y,navigator:p,static:m,unstable_useTransitions:g,future:{}}),[y,p,m,g]);typeof c=="string"&&(c=Ki(c));let{pathname:f="/",search:C="",hash:q="",state:I=null,key:G="default",unstable_mask:_}=c,j=D.useMemo(()=>{let M=mn(f,y);return M==null?null:{location:{pathname:M,search:C,hash:q,state:I,key:G,unstable_mask:_},navigationType:o}},[y,f,C,q,I,G,o,_]);return Ht(j!=null,`<Router basename="${y}"> is not able to match the URL "${f}${C}${q}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:D.createElement(Ct.Provider,{value:h},D.createElement($a.Provider,{children:u,value:j}))}function fb({children:l,location:u}){return $v(ru(l),u)}function ru(l,u=[]){let c=[];return D.Children.forEach(l,(o,p)=>{if(!D.isValidElement(o))return;let m=[...u,p];if(o.type===D.Fragment){c.push.apply(c,ru(o.props.children,m));return}ke(o.type===Ji,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let g={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(g.children=ru(o.props.children,m)),c.push(g)}),c}var ql="get",Tl="application/x-www-form-urlencoded";function Nl(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function hb(l){return Nl(l)&&l.tagName.toLowerCase()==="button"}function gb(l){return Nl(l)&&l.tagName.toLowerCase()==="form"}function vb(l){return Nl(l)&&l.tagName.toLowerCase()==="input"}function bb(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function yb(l,u){return l.button===0&&(!u||u==="_self")&&!bb(l)}var yl=null;function xb(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var Sb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function iu(l){return l!=null&&!Sb.has(l)?(Ht(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tl}"`),null):l}function qb(l,u){let c,o,p,m,g;if(gb(l)){let y=l.getAttribute("action");o=y?mn(y,u):null,c=l.getAttribute("method")||ql,p=iu(l.getAttribute("enctype"))||Tl,m=new FormData(l)}else if(hb(l)||vb(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=l.getAttribute("formaction")||y.getAttribute("action");if(o=h?mn(h,u):null,c=l.getAttribute("formmethod")||y.getAttribute("method")||ql,p=iu(l.getAttribute("formenctype"))||iu(y.getAttribute("enctype"))||Tl,m=new FormData(y,l),!xb()){let{name:f,type:C,value:q}=l;if(C==="image"){let I=f?`${f}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else f&&m.append(f,q)}}else{if(Nl(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=ql,o=null,p=Tl,g=l}return m&&p==="text/plain"&&(g=m,m=void 0),{action:o,method:c.toLowerCase(),encType:p,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vu(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function Tb(l,u,c,o){let p=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return c?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:u&&mn(p.pathname,u)==="/"?p.pathname=`${u.replace(/\/$/,"")}/_root.${o}`:p.pathname=`${p.pathname.replace(/\/$/,"")}.${o}`,p}async function Cb(l,u){if(l.id in u)return u[l.id];try{let c=await import(l.module);return u[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ab(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Eb(l,u,c){let o=await Promise.all(l.map(async p=>{let m=u.routes[p.route.id];if(m){let g=await Cb(m,c);return g.links?g.links():[]}return[]}));return Lb(o.flat(1).filter(Ab).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Um(l,u,c,o,p,m){let g=(h,f)=>c[f]?h.route.id!==c[f].route.id:!0,y=(h,f)=>c[f].pathname!==h.pathname||c[f].route.path?.endsWith("*")&&c[f].params["*"]!==h.params["*"];return m==="assets"?u.filter((h,f)=>g(h,f)||y(h,f)):m==="data"?u.filter((h,f)=>{let C=o.routes[h.route.id];if(!C||!C.hasLoader)return!1;if(g(h,f)||y(h,f))return!0;if(h.route.shouldRevalidate){let q=h.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof q=="boolean")return q}return!0}):[]}function Ob(l,u,{includeHydrateFallback:c}={}){return Db(l.map(o=>{let p=u.routes[o.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),c&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function Db(l){return[...new Set(l)]}function Nb(l){let u={},c=Object.keys(l).sort();for(let o of c)u[o]=l[o];return u}function Lb(l,u){let c=new Set;return new Set(u),l.reduce((o,p)=>{let m=JSON.stringify(Nb(p));return c.has(m)||(c.add(m),o.push({key:m,link:p})),o},[])}function uf(){let l=D.useContext(Wi);return vu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Rb(){let l=D.useContext(Dl);return vu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var bu=D.createContext(void 0);bu.displayName="FrameworkContext";function cf(){let l=D.useContext(bu);return vu(l,"You must render this element inside a <HydratedRouter> element"),l}function Mb(l,u){let c=D.useContext(bu),[o,p]=D.useState(!1),[m,g]=D.useState(!1),{onFocus:y,onBlur:h,onMouseEnter:f,onMouseLeave:C,onTouchStart:q}=u,I=D.useRef(null);D.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let j=X=>{X.forEach(ie=>{g(ie.isIntersecting)})},M=new IntersectionObserver(j,{threshold:.5});return I.current&&M.observe(I.current),()=>{M.disconnect()}}},[l]),D.useEffect(()=>{if(o){let j=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(j)}}},[o]);let G=()=>{p(!0)},_=()=>{p(!1),g(!1)};return c?l!=="intent"?[m,I,{}]:[m,I,{onFocus:Za(y,G),onBlur:Za(h,_),onMouseEnter:Za(f,G),onMouseLeave:Za(C,_),onTouchStart:Za(q,G)}]:[!1,I,{}]}function Za(l,u){return c=>{l&&l(c),c.defaultPrevented||u(c)}}function zb({page:l,...u}){let{router:c}=uf(),o=D.useMemo(()=>Fm(c.routes,l,c.basename),[c.routes,l,c.basename]);return o?D.createElement(wb,{page:l,matches:o,...u}):null}function kb(l){let{manifest:u,routeModules:c}=cf(),[o,p]=D.useState([]);return D.useEffect(()=>{let m=!1;return Eb(l,u,c).then(g=>{m||p(g)}),()=>{m=!0}},[l,u,c]),o}function wb({page:l,matches:u,...c}){let o=fn(),{future:p,manifest:m,routeModules:g}=cf(),{basename:y}=uf(),{loaderData:h,matches:f}=Rb(),C=D.useMemo(()=>Um(l,u,f,m,o,"data"),[l,u,f,m,o]),q=D.useMemo(()=>Um(l,u,f,m,o,"assets"),[l,u,f,m,o]),I=D.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let j=new Set,M=!1;if(u.forEach(ie=>{let J=m.routes[ie.route.id];!J||!J.hasLoader||(!C.some(ae=>ae.route.id===ie.route.id)&&ie.route.id in h&&g[ie.route.id]?.shouldRevalidate||J.hasClientLoader?M=!0:j.add(ie.route.id))}),j.size===0)return[];let X=Tb(l,y,p.unstable_trailingSlashAwareDataRequests,"data");return M&&j.size>0&&X.searchParams.set("_routes",u.filter(ie=>j.has(ie.route.id)).map(ie=>ie.route.id).join(",")),[X.pathname+X.search]},[y,p.unstable_trailingSlashAwareDataRequests,h,o,m,C,u,l,g]),G=D.useMemo(()=>Ob(q,m),[q,m]),_=kb(q);return D.createElement(D.Fragment,null,I.map(j=>D.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...c})),G.map(j=>D.createElement("link",{key:j,rel:"modulepreload",href:j,...c})),_.map(({key:j,link:M})=>D.createElement("link",{key:j,nonce:c.nonce,...M,crossOrigin:M.crossOrigin??c.crossOrigin})))}function Ib(...l){return u=>{l.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var jb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jb&&(window.__reactRouterVersion="7.13.1")}catch{}function Ub({basename:l,children:u,unstable_useTransitions:c,window:o}){let p=D.useRef();p.current==null&&(p.current=fv({window:o,v5Compat:!0}));let m=p.current,[g,y]=D.useState({action:m.action,location:m.location}),h=D.useCallback(f=>{c===!1?y(f):D.startTransition(()=>y(f))},[c]);return D.useLayoutEffect(()=>m.listen(h),[m,h]),D.createElement(mb,{basename:l,children:u,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:c})}var df=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pf=D.forwardRef(function({onClick:u,discover:c="render",prefetch:o="none",relative:p,reloadDocument:m,replace:g,unstable_mask:y,state:h,target:f,to:C,preventScrollReset:q,viewTransition:I,unstable_defaultShouldRevalidate:G,..._},j){let{basename:M,navigator:X,unstable_useTransitions:ie}=D.useContext(Ct),J=typeof C=="string"&&df.test(C),ae=$m(C,M);C=ae.to;let se=Zv(C,{relative:p}),he=fn(),ee=null;if(y){let Ne=Ol(y,[],he.unstable_mask?he.unstable_mask.pathname:"/",!0);M!=="/"&&(Ne.pathname=Ne.pathname==="/"?M:Qt([M,Ne.pathname])),ee=X.createHref(Ne)}let[P,qe,dt]=Mb(o,_),nt=Bb(C,{replace:g,unstable_mask:y,state:h,target:f,preventScrollReset:q,relative:p,viewTransition:I,unstable_defaultShouldRevalidate:G,unstable_useTransitions:ie});function je(Ne){u&&u(Ne),Ne.defaultPrevented||nt(Ne)}let pt=!(ae.isExternal||m),et=D.createElement("a",{..._,...dt,href:(pt?ee:void 0)||ae.absoluteURL||se,onClick:pt?je:u,ref:Ib(j,qe),target:f,"data-discover":!J&&c==="render"?"true":void 0});return P&&!J?D.createElement(D.Fragment,null,et,D.createElement(zb,{page:se})):et});pf.displayName="Link";var ou=D.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:o="",end:p=!1,style:m,to:g,viewTransition:y,children:h,...f},C){let q=es(g,{relative:f.relative}),I=fn(),G=D.useContext(Dl),{navigator:_,basename:j}=D.useContext(Ct),M=G!=null&&Xb(q)&&y===!0,X=_.encodeLocation?_.encodeLocation(q).pathname:q.pathname,ie=I.pathname,J=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;c||(ie=ie.toLowerCase(),J=J?J.toLowerCase():null,X=X.toLowerCase()),J&&j&&(J=mn(J,j)||J);const ae=X!=="/"&&X.endsWith("/")?X.length-1:X.length;let se=ie===X||!p&&ie.startsWith(X)&&ie.charAt(ae)==="/",he=J!=null&&(J===X||!p&&J.startsWith(X)&&J.charAt(X.length)==="/"),ee={isActive:se,isPending:he,isTransitioning:M},P=se?u:void 0,qe;typeof o=="function"?qe=o(ee):qe=[o,se?"active":null,he?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let dt=typeof m=="function"?m(ee):m;return D.createElement(pf,{...f,"aria-current":P,className:qe,ref:C,style:dt,to:g,viewTransition:y},typeof h=="function"?h(ee):h)});ou.displayName="NavLink";var _b=D.forwardRef(({discover:l="render",fetcherKey:u,navigate:c,reloadDocument:o,replace:p,state:m,method:g=ql,action:y,onSubmit:h,relative:f,preventScrollReset:C,viewTransition:q,unstable_defaultShouldRevalidate:I,...G},_)=>{let{unstable_useTransitions:j}=D.useContext(Ct),M=Vb(),X=Qb(y,{relative:f}),ie=g.toLowerCase()==="get"?"get":"post",J=typeof y=="string"&&df.test(y),ae=se=>{if(h&&h(se),se.defaultPrevented)return;se.preventDefault();let he=se.nativeEvent.submitter,ee=he?.getAttribute("formmethod")||g,P=()=>M(he||se.currentTarget,{fetcherKey:u,method:ee,navigate:c,replace:p,state:m,relative:f,preventScrollReset:C,viewTransition:q,unstable_defaultShouldRevalidate:I});j&&c!==!1?D.startTransition(()=>P()):P()};return D.createElement("form",{ref:_,method:ie,action:X,onSubmit:o?h:ae,...G,"data-discover":!J&&l==="render"?"true":void 0})});_b.displayName="Form";function Hb(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mf(l){let u=D.useContext(Wi);return ke(u,Hb(l)),u}function Bb(l,{target:u,replace:c,unstable_mask:o,state:p,preventScrollReset:m,relative:g,viewTransition:y,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let C=fu(),q=fn(),I=es(l,{relative:g});return D.useCallback(G=>{if(yb(G,u)){G.preventDefault();let _=c!==void 0?c:Ka(q)===Ka(I),j=()=>C(l,{replace:_,unstable_mask:o,state:p,preventScrollReset:m,relative:g,viewTransition:y,unstable_defaultShouldRevalidate:h});f?D.startTransition(()=>j()):j()}},[q,C,I,c,o,p,u,l,m,g,y,h,f])}var Gb=0,Pb=()=>`__${String(++Gb)}__`;function Vb(){let{router:l}=mf("useSubmit"),{basename:u}=D.useContext(Ct),c=ob(),o=l.fetch,p=l.navigate;return D.useCallback(async(m,g={})=>{let{action:y,method:h,encType:f,formData:C,body:q}=qb(m,u);if(g.navigate===!1){let I=g.fetcherKey||Pb();await o(I,c,g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:q,formMethod:g.method||h,formEncType:g.encType||f,flushSync:g.flushSync})}else await p(g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:C,body:q,formMethod:g.method||h,formEncType:g.encType||f,replace:g.replace,state:g.state,fromRouteId:c,flushSync:g.flushSync,viewTransition:g.viewTransition})},[o,p,u,c])}function Qb(l,{relative:u}={}){let{basename:c}=D.useContext(Ct),o=D.useContext(It);ke(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),m={...es(l||".",{relative:u})},g=fn();if(l==null){m.search=g.search;let y=new URLSearchParams(m.search),h=y.getAll("index");if(h.some(C=>C==="")){y.delete("index"),h.filter(q=>q).forEach(q=>y.append("index",q));let C=y.toString();m.search=C?`?${C}`:""}}return(!l||l===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:Qt([c,m.pathname])),Ka(m)}function Xb(l,{relative:u}={}){let c=D.useContext(tf);ke(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=mf("useViewTransitionState"),p=es(l,{relative:u});if(!c.isTransitioning)return!1;let m=mn(c.currentLocation.pathname,o)||c.currentLocation.pathname,g=mn(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Cl(p.pathname,g)!=null||Cl(p.pathname,m)!=null}const ff=(...l)=>l.filter((u,c,o)=>!!u&&u.trim()!==""&&o.indexOf(u)===c).join(" ").trim();const Yb=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Zb=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,c,o)=>o?o.toUpperCase():c.toLowerCase());const _m=l=>{const u=Zb(l);return u.charAt(0).toUpperCase()+u.slice(1)};var Fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Jb=l=>{for(const u in l)if(u.startsWith("aria-")||u==="role"||u==="title")return!0;return!1};const Kb=D.forwardRef(({color:l="currentColor",size:u=24,strokeWidth:c=2,absoluteStrokeWidth:o,className:p="",children:m,iconNode:g,...y},h)=>D.createElement("svg",{ref:h,...Fb,width:u,height:u,stroke:l,strokeWidth:o?Number(c)*24/Number(u):c,className:ff("lucide",p),...!m&&!Jb(y)&&{"aria-hidden":"true"},...y},[...g.map(([f,C])=>D.createElement(f,C)),...Array.isArray(m)?m:[m]]));const De=(l,u)=>{const c=D.forwardRef(({className:o,...p},m)=>D.createElement(Kb,{ref:m,iconNode:u,className:ff(`lucide-${Yb(_m(l))}`,`lucide-${l}`,o),...p}));return c.displayName=_m(l),c};const Wb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],$b=De("arrow-left",Wb);const ey=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ty=De("arrow-right",ey);const ny=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],iy=De("book-open",ny);const ay=[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"m10.852 9.228-.383-.923",key:"1fjppe"}],["path",{d:"m13.148 14.772.382.924",key:"je3va1"}],["path",{d:"m13.531 8.305-.383.923",key:"18epck"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",key:"jcbbz1"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771",key:"1kkn7e"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706",key:"18bmuc"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",key:"uozx0d"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18",key:"whdemb"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375",key:"1kqy2g"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hf=De("brain-cog",ay);const sy=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],ly=De("building-2",sy);const ry=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],oy=De("chevron-down",ry);const uy=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],gf=De("circle-check-big",uy);const cy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dy=De("circle-check",cy);const py=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],my=De("circle-question-mark",py);const fy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],hy=De("circle-x",fy);const gy=[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]],vy=De("drama",gy);const by=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yy=De("external-link",by);const xy=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Sy=De("flask-conical",xy);const qy=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ty=De("graduation-cap",qy);const Cy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ay=De("menu",Cy);const Ey=[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],Oy=De("monitor-play",Ey);const Dy=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ny=De("moon",Dy);const Ly=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ry=De("rotate-ccw",Ly);const My=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],vf=De("search",My);const zy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ky=De("shield-alert",zy);const wy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Al=De("shield",wy);const Iy=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],jy=De("square-terminal",Iy);const Uy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],_y=De("sun",Uy);const Hy=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],By=De("telescope",Hy);const Gy=[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]],Py=De("user-search",Gy);const Vy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Qy=De("users",Vy);const Xy=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bf=De("wrench",Xy);const Yy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zy=De("zap",Yy),Fy={id:"m0",title:"Phase 0 — Mentalité, Éthique & Cadre Légal",icon:"Gavel",lessons:[{id:"l0-1",title:"Ce qu'est réellement l'OSINT",content:`
<div class="alert-box alert-info mb-6"><div><h3 class="font-bold text-base mb-2">🎯 Objectif du chapitre</h3><p class="text-sm">Définir précisément ce qu'est l'OSINT, dissiper les mythes, et comprendre pourquoi c'est une discipline de renseignement à part entière — pas un hobby de curieux.</p></div></div>

<h2>Définition Opérationnelle</h2>
<p><strong>OSINT (Open-Source Intelligence)</strong> désigne le renseignement produit à partir de sources accessibles au public. Le mot clé n'est pas "ouvert" — c'est <strong>"intelligence"</strong>. L'OSINT n'est pas la collecte brute de données. C'est le <em>processus analytique</em> qui transforme une masse d'informations publiques en connaissance exploitable pour la prise de décision.</p>

<p>L'OTAN définit l'OSINT comme :</p>
<blockquote>"Le renseignement dérivé d'informations publiquement disponibles, collecté, exploité et diffusé en temps utile à un public approprié, dans le but de répondre à un besoin spécifique en renseignement."</blockquote>

<h3>Ce que l'OSINT est</h3>
<ul>
<li><strong>Une discipline du cycle du renseignement :</strong> Elle s'inscrit dans un processus structuré : planification → collecte → traitement → analyse → diffusion. Sans ce cycle, vous faites de la recherche, pas du renseignement.</li>
<li><strong>Un outil de réduction d'incertitude :</strong> L'objectif n'est jamais de tout savoir, mais de réduire suffisamment l'incertitude pour permettre une décision éclairée.</li>
<li><strong>Un processus reproductible :</strong> Toute conclusion doit pouvoir être vérifiée par un pair en suivant la même méthodologie, avec les mêmes sources.</li>
<li><strong>Un travail d'hypothèse et de falsification :</strong> On ne cherche pas à confirmer ce qu'on croit. On cherche à réfuter ce qu'on suppose.</li>
</ul>

<h3>Ce que l'OSINT n'est PAS</h3>
<ul>
<li><strong>Du stalking :</strong> Traquer une personne sans finalité légitime n'est pas de l'OSINT, c'est du harcèlement. L'intention et le cadre légal font toute la différence.</li>
<li><strong>Du hacking :</strong> L'OSINT ne franchit jamais la barrière de l'accès non autorisé. Si vous devez contourner une authentification, vous n'êtes plus dans l'OSINT.</li>
<li><strong>Une collection d'outils :</strong> Connaître 300 sites web ne fait pas de vous un analyste. Un expert avec un navigateur et un cerveau battra toujours un débutant avec 50 scripts automatisés.</li>
<li><strong>Du copier-coller de résultats :</strong> Restituer le dump d'un outil sans analyse critique produit du bruit, pas de l'intelligence.</li>
</ul>

<h3>Les 5 disciplines du renseignement en sources ouvertes</h3>
<p>L'OSINT se décline en plusieurs sous-disciplines selon le type de source :</p>
<table>
<thead><tr><th>Discipline</th><th>Source</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>OSINT classique</strong></td><td>Web, documents publics</td><td>Registre du commerce, WHOIS, brevets</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Réseaux sociaux</td><td>LinkedIn, X/Twitter, Telegram</td></tr>
<tr><td><strong>GEOINT</strong></td><td>Imagerie géospatiale</td><td>Google Earth, Sentinel Hub, photos géolocalisées</td></tr>
<tr><td><strong>SIGINT-adjacent</strong></td><td>Signaux radio/Wi-Fi publics</td><td>Wigle.net, ADS-B (FlightRadar24)</td></tr>
<tr><td><strong>FININT</strong></td><td>Données financières</td><td>SEC filings, blockchain explorers, Panama Papers</td></tr>
</tbody>
</table>

<h3>L'état d'esprit de l'analyste OSINT</h3>
<p>Un bon analyste cultive trois qualités fondamentales :</p>
<ol>
<li><strong>La curiosité structurée :</strong> Être curieux de tout, mais savoir quand arrêter de creuser un fil qui ne mène nulle part. Chaque minute passée sur une piste stérile est une minute volée à l'investigation réelle.</li>
<li><strong>L'humilité intellectuelle :</strong> Accepter qu'on puisse se tromper. Le biais de confirmation est l'ennemi numéro un de l'analyste. Si toutes vos découvertes confirment votre hypothèse initiale, c'est probablement que vous cherchez mal.</li>
<li><strong>La rigueur documentaire :</strong> Tout ce qui n'est pas documenté n'existe pas. Un résultat sans source, sans timestamp, sans contexte, est inutilisable dans un rapport professionnel.</li>
</ol>

<div class="alert-box alert-error mt-6"><div><h3 class="font-bold text-sm mb-1">💡 Pensée clé</h3><p class="text-sm">"La plupart des gens veulent des outils. Les experts veulent une méthode. Un bon OSINT n'est pas celui qui connaît 200 sites — c'est celui qui sait poser la bonne hypothèse et éliminer 90% du bruit."</p></div></div>
      `,quiz:[{id:"q0-1-1",question:"Quelle est la meilleure définition de l'OSINT ?",options:["Un ensemble d'outils de recherche en ligne","Le renseignement produit à partir de sources publiques via un processus analytique structuré","Une technique de hacking éthique basée sur les moteurs de recherche","La collecte massive de données personnelles sur Internet"],correct:1,explanation:"L'OSINT est défini par son processus analytique (cycle du renseignement), pas par les outils utilisés. C'est la transformation d'information publique en intelligence exploitable."},{id:"q0-1-2",question:"Parmi ces actions, laquelle ne relève PAS de l'OSINT ?",options:["Consulter le registre du commerce pour identifier les dirigeants d'une entreprise","Analyser les métadonnées EXIF d'une photo publiée sur un réseau social","Se connecter à un compte email en utilisant un mot de passe trouvé dans une fuite de données","Utiliser les Google Dorks pour trouver des documents indexés par erreur"],correct:2,explanation:"Se connecter à un compte tiers constitue un accès non autorisé, ce qui sort du périmètre OSINT (sources ouvertes uniquement) et constitue une infraction pénale."},{id:"q0-1-3",question:"Que signifie l'acronyme SOCMINT ?",options:["Social Computing Intelligence","Social Media Intelligence","Society Monitoring Intelligence","Source of Community Information Technology"],correct:1,explanation:"SOCMINT (Social Media Intelligence) est la discipline OSINT spécialisée dans l'analyse des réseaux sociaux comme source de renseignement."}]},{id:"l0-2",title:"Intelligence vs Information",content:`
<h2>La différence qui sépare l'amateur de l'expert</h2>
<p>C'est ici que se joue 80% de la valeur ajoutée d'un analyste. La confusion entre <strong>information</strong> et <strong>intelligence</strong> est l'erreur la plus courante et la plus coûteuse dans le domaine du renseignement en sources ouvertes.</p>

<h3>Définitions opérationnelles</h3>
<table>
<thead><tr><th>Concept</th><th>Définition</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td><strong>Donnée (Data)</strong></td><td>Un fait brut, sans contexte</td><td>L'adresse IP 185.199.108.153</td></tr>
<tr><td><strong>Information</strong></td><td>Une donnée mise en contexte</td><td>Cette IP appartient à GitHub Pages et héberge le site example.com</td></tr>
<tr><td><strong>Intelligence</strong></td><td>Une information analysée, en réponse à un besoin</td><td>L'entreprise cible utilise GitHub Pages, ce qui révèle un shadow IT non géré par la DSI — vecteur d'attaque potentiel pour du phishing via un sous-domaine similaire</td></tr>
</tbody>
</table>

<h3>La Pyramide DIKW</h3>
<p>Le modèle <strong>Data → Information → Knowledge → Wisdom</strong> (DIKW) illustre cette progression :</p>
<ul>
<li><strong>Data :</strong> "Jean Dupont, 42 ans, Paris"</li>
<li><strong>Information :</strong> "Jean Dupont est DSI de l'entreprise AcmeCorp depuis 2019 et publie activement sur LinkedIn"</li>
<li><strong>Knowledge :</strong> "Dupont dévoile régulièrement des détails sur l'infrastructure d'AcmeCorp dans ses posts LinkedIn, permettant d'identifier qu'ils utilisent Microsoft 365 E5 et un firewall Palo Alto PA-400"</li>
<li><strong>Wisdom :</strong> "Recommandation : AcmeCorp devrait mettre en place une politique de communication externe plus stricte. Le DSI constitue involontairement le maillon faible de leur OPSEC. Un attaquant pourrait utiliser ces informations pour construire un pretexting ciblé."</li>
</ul>

<h3>Le piège du "Data Dump"</h3>
<p>Le syndrome du data dump est la pathologie la plus fréquente chez les analystes débutants. Il consiste à livrer au commanditaire un rapport de 200 pages contenant tout ce qu'on a trouvé, sans hiérarchisation ni analyse.</p>
<p>Un rapport OSINT professionnel ne livre pas des données. Il répond à une question précise, formulée en amont : le <strong>PIR (Priority Intelligence Requirement)</strong>.</p>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">Exemple de PIR</h3><p class="text-sm"><strong>Mauvais PIR :</strong> "Trouvez tout ce que vous pouvez sur l'entreprise XYZ."<br/><strong>Bon PIR :</strong> "Identifiez les vecteurs d'exposition de l'entreprise XYZ qui pourraient être exploités lors d'une campagne de phishing ciblant le département financier."</p></div></div>

<h3>Les 4 critères de qualité de l'intelligence</h3>
<ol>
<li><strong>Pertinence :</strong> L'information répond-elle directement au PIR ? Si non, c'est du bruit.</li>
<li><strong>Fiabilité :</strong> La source est-elle crédible ? Vérifiable ? Peut-on croiser avec une source indépendante ?</li>
<li><strong>Temporalité :</strong> L'information est-elle encore valide ? Une adresse email de 2018 peut être obsolète.</li>
<li><strong>Actionnabilité :</strong> Le destinataire peut-il prendre une décision ou une action concrète grâce à cette information ?</li>
</ol>

<h3>Le système de notation Admiralty (NATO)</h3>
<p>Utilisé par les services de renseignement occidentaux, ce système évalue séparément la <strong>fiabilité de la source</strong> (A à F) et la <strong>crédibilité de l'information</strong> (1 à 6) :</p>
<table>
<thead><tr><th>Source (A-F)</th><th>Information (1-6)</th></tr></thead>
<tbody>
<tr><td>A — Totalement fiable</td><td>1 — Confirmée par d'autres sources</td></tr>
<tr><td>B — Habituellement fiable</td><td>2 — Probablement vraie</td></tr>
<tr><td>C — Assez fiable</td><td>3 — Possiblement vraie</td></tr>
<tr><td>D — Pas habituellement fiable</td><td>4 — Douteuse</td></tr>
<tr><td>E — Source non fiable</td><td>5 — Improbable</td></tr>
<tr><td>F — Fiabilité non évaluable</td><td>6 — Véracité non évaluable</td></tr>
</tbody>
</table>
<p>Exemple : Une information notée <strong>B2</strong> provient d'une source habituellement fiable et est probablement vraie. Une notation <strong>F6</strong> indique qu'on ne peut rien évaluer — c'est un signal à traiter avec la plus grande prudence.</p>
      `,quiz:[{id:"q0-2-1",question:"Quelle est la différence fondamentale entre 'information' et 'intelligence' ?",options:["L'intelligence est plus récente que l'information","L'intelligence est une information analysée en réponse à un besoin spécifique de décision","L'intelligence utilise des outils automatisés, l'information est manuelle","Il n'y a pas de différence, ce sont des synonymes"],correct:1,explanation:"L'intelligence (renseignement) est le produit d'un processus analytique qui transforme l'information brute en connaissance exploitable répondant à un PIR (Priority Intelligence Requirement)."},{id:"q0-2-2",question:"Dans le système de notation Admiralty (OTAN), que signifie la notation 'B3' ?",options:["Source non fiable, information confirmée","Source habituellement fiable, information possiblement vraie","Source totalement fiable, information douteuse","Source assez fiable, information probablement vraie"],correct:1,explanation:"B = Source habituellement fiable, 3 = Information possiblement vraie. Ce système permet d'évaluer séparément la crédibilité de la source et celle de l'information elle-même."}]},{id:"l0-3",title:"Cadre Légal Complet",content:`
<div class="alert-box alert-error mb-6"><div><h3 class="font-bold text-base mb-2">⚖️ AVERTISSEMENT JURIDIQUE</h3><p class="text-sm">Ce chapitre présente le cadre légal à titre informatif et pédagogique dans un contexte de formation Red Team / Cyber-Défense. Il ne constitue pas un conseil juridique. Consultez toujours un avocat spécialisé avant toute opération sensible.</p></div></div>

<h2>Le Cadre Pénal Français</h2>
<p>La France possède l'un des arsenaux juridiques les plus stricts d'Europe en matière de cybercriminalité. L'OSINT opère dans une zone grise qu'il faut comprendre avec précision.</p>

<h3>Articles clés du Code Pénal</h3>

<h4>Articles 323-1 à 323-7 : Atteintes aux STAD</h4>
<ul>
<li><strong>Art. 323-1 :</strong> Accès ou maintien frauduleux dans un STAD — <strong>3 ans d'emprisonnement et 100 000 € d'amende</strong> (aggravé par la LOPMI 2023). Les peines sont portées à 5 ans et 150 000 € si l'accès entraîne une modification ou suppression de données.</li>
<li><strong>Art. 323-3 :</strong> Introduction frauduleuse de données, extraction, reproduction ou transmission — <strong>5 ans et 150 000 €</strong>.</li>
<li><strong>Art. 323-3-1 :</strong> Détention ou mise à disposition d'outils d'attaque informatique — <strong>5 ans et 150 000 €</strong>. Attention : cet article peut potentiellement s'appliquer à certains outils OSINT offensifs.</li>
</ul>

<h4>Usurpation d'identité (Art. 226-4-1)</h4>
<p>L'usurpation d'identité numérique est punie d'<strong>1 an d'emprisonnement et 15 000 € d'amende</strong>. Cela inclut la création de faux profils sociaux (sock puppets) à des fins malveillantes. <em>Dans un cadre de Red Team contractuel, la création de personas est encadrée par les RoE (Rules of Engagement).</em></p>

<h4>Atteintes à la vie privée (Art. 226-1 à 226-7)</h4>
<p>Capter, enregistrer ou transmettre des paroles ou images d'une personne sans son consentement : <strong>1 an et 45 000 €</strong>. La collecte systématique de données personnelles depuis des profils publics peut constituer une atteinte si elle est disproportionnée.</p>

<h3>Le RGPD (Règlement Général sur la Protection des Données)</h3>
<p>Le RGPD s'applique dès qu'on traite des données personnelles de résidents européens, même si ces données sont publiquement accessibles.</p>

<h4>Principes fondamentaux applicables à l'OSINT</h4>
<ul>
<li><strong>Licéité :</strong> Vous devez avoir une base légale pour traiter les données (intérêt légitime, consentement, obligation légale).</li>
<li><strong>Minimisation :</strong> Ne collecter que les données strictement nécessaires à l'objectif défini.</li>
<li><strong>Limitation de conservation :</strong> Les données ne doivent pas être conservées au-delà de la durée nécessaire.</li>
<li><strong>Transparence :</strong> En théorie, les personnes concernées doivent être informées du traitement.</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">📌 Exception pour la sécurité</h3><p class="text-sm">L'article 6(1)(f) du RGPD autorise le traitement basé sur l'<strong>intérêt légitime</strong>, ce qui peut couvrir les audits de sécurité contractualisés. Cependant, cet intérêt doit être documenté et proportionné dans un registre de traitements.</p></div></div>

<h3>Cadre contractuel obligatoire (Red Team)</h3>
<p>Avant toute opération impliquant de l'OSINT actif ou de l'ingénierie sociale :</p>
<ol>
<li><strong>Lettre de mission / Convention d'audit :</strong> Document signé par le donneur d'ordre définissant le périmètre exact (RoE).</li>
<li><strong>Scope technique :</strong> Liste blanche des domaines, IPs, et personnes pouvant être ciblées.</li>
<li><strong>Clause d'exonération :</strong> Protection juridique de l'auditeur dans le cadre de la mission.</li>
<li><strong>Point de contact d'urgence :</strong> Numéro direct d'un responsable habilité en cas de découverte critique.</li>
<li><strong>Clause de destruction :</strong> Engagement de destruction des données collectées après livraison du rapport.</li>
</ol>

<h3>Cas pratiques de jurisprudence</h3>
<ul>
<li><strong>Affaire Bluetouff (2015) :</strong> Condamné pour maintien frauduleux dans un STAD après avoir téléchargé des documents d'une agence publique accessibles sans mot de passe mais non destinés au public. <em>Leçon : "Accessible" ne signifie pas "autorisé".</em></li>
<li><strong>Scraping LinkedIn :</strong> Bien que le scraping de données publiques ait été jugé légal aux USA (hiQ Labs v. LinkedIn), la situation reste plus restrictive en Europe sous le prisme du RGPD.</li>
</ul>
      `,quiz:[{id:"q0-3-1",question:"Selon la LOPMI (2023), quelle est la peine maximale pour un accès frauduleux simple à un STAD ?",options:["1 an et 15 000 €","2 ans et 60 000 €","3 ans et 100 000 €","5 ans et 150 000 €"],correct:2,explanation:"La LOPMI a durci les peines : l'article 323-1 prévoit désormais 3 ans d'emprisonnement et 100 000 € d'amende pour l'accès ou le maintien frauduleux dans un STAD."},{id:"q0-3-2",question:"Dans le cadre du RGPD, les données personnelles publiquement accessibles sur un réseau social :",options:["Peuvent être collectées librement car elles sont publiques","Restent protégées par le RGPD et nécessitent une base légale de traitement","Sont exclues du champ d'application du RGPD","Ne peuvent être collectées que par les forces de l'ordre"],correct:1,explanation:"Le RGPD protège toutes les données personnelles des résidents européens, y compris celles publiées volontairement sur les réseaux sociaux. Une base légale (intérêt légitime, consentement, etc.) reste nécessaire."}]},{id:"l0-4",title:"Éthique, Responsabilité & Biais Cognitifs",content:`
<h2>L'Éthique comme compétence opérationnelle</h2>
<p>L'éthique en OSINT n'est pas un supplément d'âme — c'est une <strong>compétence opérationnelle</strong>. Un analyste sans éthique produit du renseignement biaisé, illégal ou dangereux. Un analyste éthique produit du renseignement fiable, défendable et actionnable.</p>

<h3>Les 10 Principes de l'Analyste Responsable</h3>
<ol>
<li><strong>Nécessité :</strong> Ne collecter que ce qui est strictement nécessaire au PIR.</li>
<li><strong>Proportionnalité :</strong> Les moyens employés doivent être proportionnels à l'objectif.</li>
<li><strong>Légalité :</strong> Chaque action doit être conforme au cadre juridique applicable.</li>
<li><strong>Traçabilité :</strong> Chaque recherche doit être documentable et reproductible.</li>
<li><strong>Minimisation :</strong> Réduire au minimum la collecte de données collatérales.</li>
<li><strong>Confidentialité :</strong> Les résultats ne sont partagés qu'avec les personnes habilitées.</li>
<li><strong>Intégrité :</strong> Ne jamais altérer, fabriquer ou omettre intentionnellement des données.</li>
<li><strong>Réversibilité :</strong> Pouvoir annuler ou détruire les données collectées.</li>
<li><strong>Transparence :</strong> Être clair sur les limites de ses conclusions.</li>
<li><strong>Responsabilité :</strong> Assumer les conséquences de ses découvertes et de leur diffusion.</li>
</ol>

<h3>Les Biais Cognitifs : l'ennemi intérieur</h3>
<p>Le plus grand obstacle à un renseignement de qualité n'est pas technique — il est <strong>psychologique</strong>. Les biais cognitifs sont des raccourcis mentaux qui déforment notre jugement. En OSINT, ils peuvent transformer une analyse rigoureuse en château de cartes.</p>

<h4>Les 8 biais les plus dangereux pour l'analyste</h4>
<table>
<thead><tr><th>Biais</th><th>Description</th><th>Piège OSINT</th></tr></thead>
<tbody>
<tr><td><strong>Confirmation</strong></td><td>Chercher uniquement les informations qui confirment notre hypothèse</td><td>Ignorer un résultat Sherlock négatif parce qu'on "sait" que le pseudo existe</td></tr>
<tr><td><strong>Ancrage</strong></td><td>S'accrocher à la première information trouvée</td><td>Baser toute l'enquête sur un profil LinkedIn qui pourrait être faux</td></tr>
<tr><td><strong>Disponibilité</strong></td><td>Surévaluer l'importance des infos facilement accessibles</td><td>Ne vérifier que les réseaux sociaux grand public en ignorant les forums spécialisés</td></tr>
<tr><td><strong>Dunning-Kruger</strong></td><td>Surestimer ses compétences quand on est débutant</td><td>Rédiger des conclusions fermes sans vérification croisée</td></tr>
<tr><td><strong>Miroir</strong></td><td>Projeter ses propres valeurs/comportements sur la cible</td><td>Supposer que la cible utilise les mêmes réseaux que soi</td></tr>
<tr><td><strong>Narratif</strong></td><td>Construire une histoire cohérente à partir de données fragmentaires</td><td>Relier des comptes qui appartiennent en réalité à des homonymes</td></tr>
<tr><td><strong>Survivant</strong></td><td>Se concentrer sur les succès en oubliant les échecs</td><td>Ne rapporter que les corrélations réussies dans le rapport</td></tr>
<tr><td><strong>Cadrage</strong></td><td>Juger selon la façon dont l'info est présentée</td><td>Interpréter différemment une même donnée selon la source (site pro vs forum)</td></tr>
</tbody>
</table>

<h3>Techniques de débiaisage</h3>
<ul>
<li><strong>Analysis of Competing Hypotheses (ACH) :</strong> Formuler délibérément des hypothèses alternatives et tester chacune contre les preuves disponibles.</li>
<li><strong>Red Team / Devil's Advocate :</strong> Demander à un collègue de chercher activement à réfuter vos conclusions.</li>
<li><strong>Structured Analytic Techniques (SATs) :</strong> Utiliser des matrices formelles (comme la matrice ACH) pour objectiver l'évaluation.</li>
<li><strong>Pre-Mortem :</strong> Avant de livrer vos conclusions, imaginez qu'elles sont fausses. Comment auraient-elles pu l'être ? Quelles preuves avez-vous peut-être ignorées ?</li>
</ul>
      `,quiz:[{id:"q0-4-1",question:"Quel biais cognitif pousse un analyste à ne chercher que les informations qui confirment son hypothèse initiale ?",options:["Biais d'ancrage","Biais de confirmation","Biais de disponibilité","Biais du narratif"],correct:1,explanation:"Le biais de confirmation est le plus dangereux en OSINT : il pousse à sélectionner inconsciemment les données qui confirment ce qu'on croit déjà, en ignorant les preuves contraires."},{id:"q0-4-2",question:"Qu'est-ce que la méthode ACH (Analysis of Competing Hypotheses) ?",options:["Une technique de hacking avancé","Un outil de scan réseau automatisé","Une méthode structurée qui teste plusieurs hypothèses rivales contre les preuves disponibles","Un algorithme de clustering de données OSINT"],correct:2,explanation:"L'ACH est une technique analytique structurée qui consiste à formuler plusieurs hypothèses concurrentes et à évaluer systématiquement chacune contre les preuves collectées, réduisant ainsi l'impact des biais cognitifs."}]},{id:"l0-5",title:"OPSEC Personnelle",content:`
<div class="alert-box alert-error mb-6"><div><h3 class="font-bold text-base mb-2">🛡️ Règle d'Or OPSEC</h3><p class="text-sm">Ne jamais devenir sa propre cible. Si vous pouvez retrouver quelqu'un en 30 minutes, quelqu'un peut vous retrouver en 30 minutes. L'OPSEC n'est pas une option — c'est un prérequis.</p></div></div>

<h2>Pourquoi l'OPSEC est vitale</h2>
<p><strong>OPSEC (Operations Security)</strong> est le processus de protection de vos propres informations sensibles pendant une investigation. C'est l'art de ne laisser aucune trace qui pourrait relier votre activité de recherche à votre identité réelle.</p>

<h3>Les 5 couches de l'OPSEC de l'analyste</h3>

<h4>Couche 1 : Séparation des identités</h4>
<ul>
<li>Ne <strong>jamais</strong> utiliser vos comptes personnels pour une investigation.</li>
<li>Créer des <strong>sock puppets</strong> (identités fictives) dédiés avec des historiques crédibles.</li>
<li>Utiliser des emails jetables (ProtonMail, Tutanota) pour chaque persona.</li>
<li>Chaque persona a son propre navigateur, ses propres cookies, son propre fingerprint.</li>
</ul>

<h4>Couche 2 : Isolation technique</h4>
<ul>
<li><strong>VM dédiée :</strong> Toute investigation se fait dans une VM snapshottée et jetable.</li>
<li><strong>VPN :</strong> Mullvad ou ProtonVPN (paiement anonyme, politique no-log auditée).</li>
<li><strong>Tor :</strong> Pour les recherches à haut risque, combiner VPN + Tor (VPN → Tor, pas l'inverse).</li>
<li><strong>Navigateur durci :</strong> Firefox avec uBlock Origin, NoScript, et Multi-Account Containers.</li>
</ul>

<h4>Couche 3 : Hygiène de navigation</h4>
<ul>
<li>Désactiver JavaScript par défaut (NoScript).</li>
<li>Purger cookies, cache et historique après chaque session.</li>
<li>Utiliser un profil navigateur dédié par investigation.</li>
<li>Vérifier régulièrement votre empreinte via <code>amiunique.org</code> et <code>browserleaks.com</code>.</li>
</ul>

<h4>Couche 4 : Discipline comportementale</h4>
<ul>
<li>Ne jamais cliquer sur un lien suspect directement — utiliser <strong>SquareX</strong> (RBI) ou <code>urlscan.io</code>.</li>
<li>Ne jamais télécharger un fichier suspect sur votre machine hôte.</li>
<li>Ne pas consulter vos emails/réseaux personnels pendant une investigation.</li>
<li>Stopper immédiatement si vous sentez que vous avez été détecté (IP flaggée, CAPTCHA récurrents).</li>
</ul>

<h4>Couche 5 : Chiffrement et stockage</h4>
<ul>
<li>Stocker les résultats d'investigation dans un volume <strong>VeraCrypt</strong> chiffré.</li>
<li>Sauvegardes chiffrées sur support externe déconnecté.</li>
<li>Ne <strong>jamais</strong> synchroniser des données d'enquête sur un cloud (iCloud, Google Drive, OneDrive).</li>
<li>Utiliser <strong>Hunchly</strong> pour l'archivage horodaté et prouvable de chaque page visitée.</li>
</ul>

<h3>Checklist OPSEC avant investigation</h3>
<pre><code class="language-text">□ VM dédiée démarrée (snapshot propre)
□ VPN activé et vérifié (vérifier IP via whatismyipaddress.com)
□ Navigateur durci configuré (uBlock + NoScript)
□ Aucun compte personnel connecté (Gmail, LinkedIn, etc.)
□ Sock puppet identité prête (email, nom, photo AI)
□ Outil de capture d'écran/archivage prêt (Hunchly ou Flameshot)
□ Volume chiffré monté pour le stockage des résultats
□ Timer de session activé (limiter les sessions longues)
□ Buddy system : un collègue sait que vous êtes en investigation</code></pre>

<div class="alert-box alert-info mt-6"><div><h3 class="font-bold text-sm mb-1">🎭 Création d'un Sock Puppet crédible</h3><p class="text-sm">Un bon sock puppet n'est pas un profil vide créé la veille. Il doit avoir 3 à 6 mois d'historique, des interactions régulières avec du contenu neutre, une photo générée par IA (thispersondoesnotexist.com), et un comportement de navigation cohérent avec la couverture choisie.</p></div></div>
      `,quiz:[{id:"q0-5-1",question:"Quel est l'ordre correct pour combiner VPN et Tor dans une investigation à haut risque ?",options:["Tor → VPN (se connecter à Tor puis activer le VPN)","VPN → Tor (activer le VPN puis se connecter à Tor)","Les deux se valent, l'ordre n'importe pas","Il ne faut jamais combiner VPN et Tor"],correct:1,explanation:"L'ordre VPN → Tor signifie que votre FAI voit uniquement la connexion VPN (pas Tor), et le noeud d'entrée Tor voit l'IP du VPN (pas la vôtre). C'est la configuration la plus protectrice pour la plupart des scénarios."},{id:"q0-5-2",question:"Pourquoi ne faut-il JAMAIS synchroniser les données d'une investigation sur un cloud ?",options:["Les services cloud sont trop lents pour les fichiers volumineux","Les fournisseurs cloud peuvent accéder aux données, les transmettre aux autorités, ou subir une fuite","Les fichiers sont automatiquement compressés et perdent en qualité","Le cloud ne supporte pas les fichiers chiffrés"],correct:1,explanation:"Les fournisseurs cloud (Google, Apple, Microsoft) peuvent accéder à vos données, répondre à des réquisitions judiciaires, ou être la cible de fuites. Les données d'investigation doivent rester sur des supports chiffrés contrôlés localement."}]}]},Jy={id:"m1",title:"Phase 1 — Fondamentaux de la Recherche",icon:"Search",lessons:[{id:"l1-1",title:"Anatomie d'Internet",content:`
<h2>Les trois couches d'Internet</h2>
<p>Internet n'est pas un monolithe. C'est un empilement de couches, chacune avec ses règles d'accès, ses risques, et ses trésors informationnels pour l'analyste OSINT.</p>

<h3>Surface Web (Web de surface)</h3>
<p>C'est l'Internet que vous utilisez quotidiennement. Les pages indexées par Google, Bing, Yandex. Environ <strong>5 à 10%</strong> du contenu total d'Internet.</p>
<ul>
<li>Pages web publiques, articles de presse, réseaux sociaux ouverts</li>
<li>Registres publics (societe.com, Infogreffe, SEC EDGAR)</li>
<li>Moteurs de recherche spécialisés (Google Scholar, Shodan, Censys)</li>
</ul>

<h3>Deep Web (Web profond)</h3>
<p>Tout ce qui n'est <strong>pas indexé</strong> par les moteurs de recherche mais reste légalement accessible. Représente <strong>~90%</strong> du contenu.</p>
<ul>
<li>Bases de données académiques derrière un formulaire de recherche</li>
<li>Intranets d'entreprises, webmail, portails bancaires</li>
<li>Contenu dynamique généré à la demande (résultats de recherche)</li>
<li>Pages protégées par robots.txt (N.B. : robots.txt est une suggestion, pas une barrière technique — mais le respecter est une question d'éthique et parfois de légalité)</li>
</ul>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">⚡ Astuce OSINT</h3><p class="text-sm">Le fichier <code>robots.txt</code> d'un site est en lui-même une source OSINT précieuse. Il révèle souvent des répertoires que l'administrateur souhaite cacher : <code>/admin/</code>, <code>/backup/</code>, <code>/staging/</code>. Consultez <code>site.com/robots.txt</code> systématiquement.</p></div></div>

<h3>Dark Web (Web sombre)</h3>
<p>Réseau superposé nécessitant un logiciel spécifique (navigateur Tor pour les sites <code>.onion</code>, ou I2P pour les <code>.i2p</code>). Ce n'est <strong>pas</strong> intrinsèquement criminel.</p>
<ul>
<li><strong>Usages légitimes :</strong> Communication pour journalistes (SecureDrop), dissidents politiques, protection de la vie privée</li>
<li><strong>Usages criminels :</strong> Marketplaces (drogues, armes), forums de cybercriminalité, vente de données volées</li>
<li><strong>Intérêt OSINT :</strong> Fuites de données, forums de hackers (pour du CTI — Cyber Threat Intelligence), communications de groupes APT</li>
</ul>

<h3>L'architecture technique en bref</h3>
<pre><code class="language-text">┌──────────────────────────────────────┐
│         SURFACE WEB (~5-10%)         │
│  Google-indexé, publiquement visible │
├──────────────────────────────────────┤
│          DEEP WEB (~90%)             │
│  Non-indexé mais légalement          │
│  accessible (BDD, intranets, etc.)   │
├──────────────────────────────────────┤
│          DARK WEB (<1%)              │
│  Réseaux overlay (.onion, .i2p)      │
│  Nécessite logiciel spécifique       │
└──────────────────────────────────────┘</code></pre>

<h3>Protocoles fondamentaux à comprendre</h3>
<table>
<thead><tr><th>Protocole</th><th>Rôle</th><th>Intérêt OSINT</th></tr></thead>
<tbody>
<tr><td><strong>DNS</strong></td><td>Traduit les noms de domaine en IP</td><td>Cartographie d'infrastructure, historique DNS</td></tr>
<tr><td><strong>HTTP/HTTPS</strong></td><td>Transfert de pages web</td><td>Headers HTTP révèlent le serveur, le framework</td></tr>
<tr><td><strong>SMTP</strong></td><td>Envoi d'emails</td><td>Enregistrements MX, SPF, DKIM, DMARC</td></tr>
<tr><td><strong>BGP</strong></td><td>Routage inter-AS (opérateurs)</td><td>Attribution d'IP, ASN, localisation infra</td></tr>
<tr><td><strong>TLS/SSL</strong></td><td>Chiffrement des connexions</td><td>Certificate Transparency logs (crt.sh)</td></tr>
</tbody>
</table>
      `,quiz:[{id:"q1-1-1",question:"Quelle proportion approximative d'Internet représente le 'Surface Web' indexé par les moteurs de recherche ?",options:["~50%","~30%","~5-10%","~80%"],correct:2,explanation:"Le Surface Web ne représente qu'environ 5 à 10% du contenu total d'Internet. La majorité est du Deep Web (contenu non indexé mais accessible)."},{id:"q1-1-2",question:"Pourquoi le fichier robots.txt est-il une source OSINT précieuse ?",options:["Il contient les mots de passe administrateur","Il révèle les répertoires que l'admin souhaite cacher de l'indexation","Il liste tous les utilisateurs du site","Il permet d'accéder au Dark Web"],correct:1,explanation:"Le robots.txt est une suggestion aux crawlers de ne pas indexer certains répertoires. Ces répertoires (/admin/, /backup/, /staging/) révèlent souvent la structure interne du site."}]},{id:"l1-2",title:"Moteurs de Recherche & Indexation",content:`
<h2>Comment fonctionne un moteur de recherche</h2>
<p>Pour maîtriser les Google Dorks et la recherche avancée, il faut d'abord comprendre <strong>comment</strong> Google trouve et classe l'information. Sans cette compréhension, on utilise les outils en aveugle.</p>

<h3>Les trois piliers d'un moteur de recherche</h3>

<h4>1. Le Crawling (Exploration)</h4>
<p>Des robots (Googlebot, Bingbot) parcourent le web en suivant les liens hypertextes de page en page. Ils respectent (généralement) les directives de <code>robots.txt</code> et les balises <code>meta robots</code>.</p>

<h4>2. L'Indexation</h4>
<p>Les pages crawlées sont analysées, leur contenu est extrait, et elles sont stockées dans un index géant. C'est cet index que vous interrogez quand vous faites une recherche. Une page non indexée est invisible pour le moteur.</p>

<h4>3. Le Ranking (Classement)</h4>
<p>Quand vous lancez une requête, le moteur classe les résultats par pertinence selon des centaines de signaux (mots-clés, autorité du domaine, fraîcheur, liens entrants, etc.).</p>

<h3>Moteurs alternatifs pour l'OSINT</h3>
<table>
<thead><tr><th>Moteur</th><th>Spécialité</th><th>Intérêt</th></tr></thead>
<tbody>
<tr><td><strong>Google</strong></td><td>Index le plus large</td><td>Dorks avancés, cache, opérateurs booléens</td></tr>
<tr><td><strong>Bing</strong></td><td>Bon sur les IPs et domaines</td><td>Opérateur <code>ip:</code> pour trouver tous les sites sur une IP</td></tr>
<tr><td><strong>Yandex</strong></td><td>Meilleur pour l'espace russophone</td><td>Reverse image search supérieur à Google Images</td></tr>
<tr><td><strong>DuckDuckGo</strong></td><td>Agrégateur sans tracking</td><td>Bangs (!g, !s) pour pivoter entre moteurs</td></tr>
<tr><td><strong>Shodan</strong></td><td>Moteur IoT / services exposés</td><td>Bannières de services, webcams, SCADA</td></tr>
<tr><td><strong>Censys</strong></td><td>Certificats TLS et services</td><td>Pivots IP↔certificat↔domaine</td></tr>
<tr><td><strong>Wigle.net</strong></td><td>Points d'accès Wi-Fi géolocalisés</td><td>Corrélation adresse physique / réseau</td></tr>
</tbody>
</table>

<h3>Les opérateurs de recherche essentiels</h3>
<pre><code class="language-text">Opérateur          Fonction                          Exemple
─────────────────────────────────────────────────────────────────
"mot exact"        Recherche exacte                  "John Smith" LinkedIn
site:              Limiter à un domaine              site:linkedin.com CFO
filetype:          Chercher un type de fichier       filetype:pdf confidentiel
intitle:           Mot dans le titre                 intitle:"index of" backup
inurl:             Mot dans l'URL                    inurl:admin login
intext:            Mot dans le corps de page         intext:"mot de passe"
cache:             Version en cache Google           cache:example.com
-                  Exclure un terme                  jaguar -voiture
*                  Wildcard (joker)                  "directeur * de AcmeCorp"
OR (|)             Opérateur OU                      CEO OR PDG site:linkedin.com
AROUND(X)          Proximité de X mots               OSINT AROUND(3) formation
before: / after:   Filtrer par date                  site:pastebin.com after:2024-01-01</code></pre>
      `,quiz:[{id:"q1-2-1",question:"Quel moteur de recherche est considéré comme supérieur à Google pour la recherche d'images inversée ?",options:["Bing","DuckDuckGo","Yandex","Shodan"],correct:2,explanation:"Yandex dispose d'un algorithme de recherche d'images inversée particulièrement puissant, souvent capable de trouver des résultats que Google Images manque, surtout dans l'espace européen et russophone."},{id:"q1-2-2",question:"Que fait l'opérateur Google AROUND(X) ?",options:["Recherche les sites autour d'une position GPS","Trouve les pages contenant deux termes séparés par X mots maximum","Limite les résultats aux X premiers","Cherche dans un rayon de X km"],correct:1,explanation:"AROUND(X) est un opérateur de proximité : il retourne les pages où deux termes apparaissent à maximum X mots l'un de l'autre, ce qui est très utile pour affiner les résultats."}]},{id:"l1-3",title:"Google Dorks Avancés",content:`
<h2>L'art du Google Dorking</h2>
<p>Les Google Dorks sont des requêtes de recherche avancées qui exploitent les opérateurs de Google pour découvrir des informations que les administrateurs n'avaient pas l'intention de rendre publiques. C'est l'une des techniques OSINT les plus puissantes et les plus sous-estimées.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚠️ Cadre légal</h3><p class="text-sm">Les Google Dorks exploitent uniquement des données <em>indexées publiquement</em>. Cependant, accéder à un fichier sensible trouvé via un Dork peut constituer un "maintien frauduleux" si le contenu n'était clairement pas destiné au public (cf. Affaire Bluetouff). Restez dans le cadre contractuel.</p></div></div>

<h3>Dorks de reconnaissance d'infrastructure</h3>
<pre><code class="language-text"># Trouver les sous-domaines indexés d'une cible
site:*.example.com -www

# Pages d'administration exposées
site:example.com inurl:admin OR inurl:login OR inurl:dashboard

# Répertoires ouverts (directory listing)
intitle:"index of" site:example.com

# Fichiers de configuration exposés
site:example.com filetype:env OR filetype:ini OR filetype:conf

# Fichiers de backup
site:example.com filetype:bak OR filetype:old OR filetype:sql</code></pre>

<h3>Dorks de fuite d'informations</h3>
<pre><code class="language-text"># Documents internes indexés par erreur
site:example.com filetype:pdf "confidentiel" OR "internal" OR "ne pas diffuser"

# Feuilles de calcul avec des données sensibles
site:example.com filetype:xlsx OR filetype:csv "password" OR "mot de passe"

# Clés API et tokens exposés dans du code
site:github.com "example.com" "API_KEY" OR "SECRET" OR "token"

# Documents Google Docs/Sheets partagés publiquement
site:docs.google.com "example.com"

# Fichiers robots.txt révélateurs
site:example.com filetype:txt "disallow" "admin"</code></pre>

<h3>Dorks SOCMINT (Réseaux sociaux)</h3>
<pre><code class="language-text"># Profils LinkedIn d'une entreprise cible
site:linkedin.com/in "example company" "directeur" OR "CEO" OR "DSI"

# Posts Twitter/X mentionnant une infrastructure
site:twitter.com "example.com" "serveur" OR "panne" OR "maintenance"

# Présentations partagées publiquement
site:slideshare.net OR site:speakerdeck.com "example company"

# Offres d'emploi révélant la stack technique
site:indeed.fr OR site:welcometothejungle.com "example company" "kubernetes" OR "AWS"</code></pre>

<h3>GHDB — Google Hacking Database</h3>
<p>La <strong>Google Hacking Database</strong> (exploit-db.com/google-hacking-database) est un référentiel communautaire de milliers de Dorks classés par catégorie. C'est votre bibliothèque de référence.</p>

<h3>Méthodologie : le Dorking systématique</h3>
<ol>
<li><strong>Définir le périmètre :</strong> Quels domaines, quelles filiales, quels mots-clés métier ?</li>
<li><strong>Commencer large :</strong> <code>site:example.com</code> pour évaluer l'empreinte indexée.</li>
<li><strong>Affiner par type :</strong> Documents (<code>filetype:</code>), pages admin (<code>inurl:</code>), contenu sensible (<code>intext:</code>).</li>
<li><strong>Pivoter vers les satellites :</strong> GitHub, Pastebin, Google Docs, SlideShare.</li>
<li><strong>Documenter chaque trouvaille :</strong> URL, timestamp, capture d'écran, notation Admiralty.</li>
</ol>
      `,quiz:[{id:"q1-3-1",question:"Quel Google Dork permet de trouver des répertoires de fichiers ouverts (directory listing) sur un domaine ?",options:["site:example.com filetype:dir",'intitle:"index of" site:example.com',"inurl:directory site:example.com","site:example.com type:folder"],correct:1,explanation:`Le Dork intitle:"index of" cible les pages dont le titre contient 'index of', ce qui est la signature typique d'un serveur web avec le directory listing activé.`},{id:"q1-3-2",question:"Pourquoi est-il pertinent de chercher les offres d'emploi d'une entreprise cible via Dorks ?",options:["Pour postuler et infiltrer l'entreprise","Car les offres révèlent souvent la stack technique utilisée (technologies, outils, infrastructure)","Pour savoir si l'entreprise recrute des analystes OSINT","Les offres d'emploi contiennent les mots de passe des systèmes internes"],correct:1,explanation:"Les offres d'emploi techniques sont une mine d'or OSINT : elles révèlent les technologies utilisées (AWS, Kubernetes, Palo Alto), les outils internes, et parfois même la structure organisationnelle de la DSI."}],lab:`
<h3>🔬 Lab : Dorking d'un domaine fictif</h3>
<p>Dans ce lab, vous allez pratiquer le Google Dorking de manière systématique sur un périmètre autorisé.</p>

<p><strong>Cible :</strong> Utilisez le domaine <code>example.com</code> (domaine réservé par l'IANA pour les tests) ou un domaine que vous possédez.</p>

<p>1. Évaluez l'empreinte indexée :</p>
<pre><code class="language-text">site:example.com</code></pre>

<p>2. Cherchez des fichiers sensibles :</p>
<pre><code class="language-text">site:example.com filetype:pdf OR filetype:xlsx OR filetype:docx</code></pre>

<p>3. Identifiez les pages d'administration :</p>
<pre><code class="language-text">site:example.com inurl:admin OR inurl:login OR inurl:cpanel</code></pre>

<p>4. Cherchez des fuites dans les satellites :</p>
<pre><code class="language-text">site:github.com "example.com"
site:pastebin.com "example.com"</code></pre>

<p>5. Documentez vos trouvailles dans un tableau (URL, type, gravité, timestamp).</p>
      `},{id:"l1-4",title:"Métadonnées : ce que les fichiers révèlent",content:`
<h2>Les métadonnées : l'invisible qui parle</h2>
<p>Chaque fichier numérique transporte des métadonnées — des informations <em>sur</em> l'information. Un document PDF innocent peut révéler le nom de son auteur, le logiciel utilisé, la date de création, et parfois même le chemin complet du fichier sur le disque dur du créateur.</p>

<h3>Types de métadonnées par format</h3>

<h4>Images (EXIF)</h4>
<p>Le format EXIF (Exchangeable Image File Format) embarque dans chaque photo :</p>
<ul>
<li><strong>Coordonnées GPS</strong> (latitude, longitude, altitude) — si la géolocalisation n'a pas été désactivée</li>
<li><strong>Date et heure</strong> de la prise de vue (avec fuseau horaire)</li>
<li><strong>Modèle de l'appareil</strong> (marque, modèle, numéro de série parfois)</li>
<li><strong>Paramètres de prise de vue</strong> (focale, ouverture, ISO, flash)</li>
<li><strong>Logiciel de retouche</strong> utilisé (Photoshop, Lightroom, GIMP)</li>
<li><strong>Thumbnail embarquée</strong> (parfois la version originale non recadrée !)</li>
</ul>

<h4>Documents Office / PDF</h4>
<ul>
<li><strong>Auteur :</strong> Nom complet de l'utilisateur (souvent prénom.nom de la session Windows)</li>
<li><strong>Organisation :</strong> Nom de l'entreprise enregistré dans la licence Office</li>
<li><strong>Chemin du fichier :</strong> <code>C:\\Users\\jdupont\\Desktop\\Projet_Confidentiel\\rapport_final.docx</code></li>
<li><strong>Historique des révisions :</strong> Noms des contributeurs successifs</li>
<li><strong>Commentaires et annotations</strong> oubliés dans le document</li>
<li><strong>Imprimante :</strong> Nom de l'imprimante réseau utilisée</li>
</ul>

<h3>Outils d'extraction de métadonnées</h3>

<h4>ExifTool (CLI — outil de référence)</h4>
<pre><code class="language-bash"># Extraire toutes les métadonnées d'un fichier
exiftool document.pdf

# Extraire les coordonnées GPS d'une photo
exiftool -GPSLatitude -GPSLongitude photo.jpg

# Extraction récursive sur un dossier entier
exiftool -r -csv -ext pdf -ext docx ./documents/ > metadata.csv

# Supprimer toutes les métadonnées (sanitisation)
exiftool -all= document.pdf</code></pre>

<h4>FOCA (Framework for Organization Content Aggregation)</h4>
<p>FOCA automatise le téléchargement et l'analyse de tous les documents publics d'un domaine :</p>
<ol>
<li>Crawle le domaine cible et identifie tous les documents indexés</li>
<li>Télécharge et extrait les métadonnées de chaque fichier</li>
<li>Cartographie les noms d'utilisateurs, logiciels, serveurs, imprimantes</li>
<li>Produit un rapport d'exposition organisationnelle</li>
</ol>

<h3>Scénario d'investigation réel</h3>
<p>Un rapport PDF anodin publié sur le site d'une entreprise peut révéler :</p>
<pre><code class="language-text">Auteur    : jean.dupont
Créateur  : Microsoft Word 2019
Société   : AcmeCorp SARL
Chemin    : \\\\serveur-fichiers\\DRH\\Recrutement\\2024\\rapport_audit.pdf
Imprimante: HP LaserJet MFP M227 (192.168.1.45)
Créé le   : 2024-03-15 14:32:07+01:00
Modifié   : 2024-03-18 09:15:22+01:00</code></pre>
<p>En 5 secondes, un analyste sait : le nom d'un employé, la structure réseau interne (serveur de fichiers nommé, IP d'imprimante), le département d'où provient le document, et les horaires de travail.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🛡️ Recommandation défensive</h3><p class="text-sm">Avant toute publication en ligne, passez systématiquement vos documents dans un outil de nettoyage de métadonnées. <code>exiftool -all= fichier.pdf</code> est votre meilleur ami. Les entreprises devraient intégrer cette étape dans leur workflow de publication.</p></div></div>
      `,quiz:[{id:"q1-4-1",question:"Quelle commande ExifTool permet d'extraire les coordonnées GPS d'une photo ?",options:["exiftool -gps photo.jpg","exiftool -GPSLatitude -GPSLongitude photo.jpg","exiftool --extract-location photo.jpg","exiftool -all photo.jpg"],correct:1,explanation:"Les tags EXIF pour la géolocalisation sont GPSLatitude et GPSLongitude. La commande exiftool -GPSLatitude -GPSLongitude retourne spécifiquement ces champs."},{id:"q1-4-2",question:"Pourquoi le champ 'Auteur' d'un document PDF est-il important en OSINT ?",options:["Il contient toujours un mot de passe","Il révèle souvent le nom réel de l'employé qui a créé le document, parfois son login réseau","Il indique si le document est classifié","Il n'a aucune utilité en OSINT"],correct:1,explanation:"Le champ Auteur d'un document Office/PDF est souvent rempli automatiquement avec le nom d'utilisateur de la session Windows (ex: jean.dupont), révélant une identité et potentiellement un format de login à l'entreprise."}]},{id:"l1-5",title:"Archives Web & Récupération d'Historique",content:`
<h2>Le Web n'oublie jamais (si on sait où chercher)</h2>
<p>L'un des principes les plus puissants de l'OSINT : <strong>même supprimé, un contenu a probablement été capturé quelque part</strong>. Les services d'archivage et de cache sont les "mémoires" d'Internet.</p>

<h3>Wayback Machine (web.archive.org)</h3>
<p>Le plus grand service d'archivage au monde. Depuis 1996, l'Internet Archive capture régulièrement des snapshots de millions de sites web.</p>
<ul>
<li><strong>Recherche directe :</strong> <code>web.archive.org/web/*/example.com</code></li>
<li><strong>Version spécifique :</strong> <code>web.archive.org/web/20230615/example.com</code></li>
<li><strong>Recherche de pages supprimées :</strong> Comparer les snapshots avant/après une suppression</li>
<li><strong>100% passif :</strong> Aucune interaction avec le site cible actuel</li>
</ul>

<h4>Cas d'usage concrets</h4>
<ul>
<li>Récupérer une page "À propos" supprimée révélant l'ancienne équipe dirigeante</li>
<li>Retrouver un article de blog compromettant effacé</li>
<li>Identifier les évolutions d'un site (technologies utilisées, contenus supprimés)</li>
<li>Vérifier les claims d'une personne ("J'ai toujours été dans ce secteur")</li>
</ul>

<h3>Google Cache</h3>
<pre><code class="language-text"># Voir la version en cache d'une page
cache:example.com/page-supprimée

# Via URL directe
webcache.googleusercontent.com/search?q=cache:example.com</code></pre>
<p>Le cache Google est souvent plus récent que la Wayback Machine mais ne conserve qu'un seul snapshot à la fois (le plus récent crawl). Si Google n'a pas re-crawlé la page depuis sa suppression, le cache contient encore l'ancienne version.</p>

<h3>Autres sources d'archivage</h3>
<table>
<thead><tr><th>Service</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>archive.today</strong></td><td>Archivage à la demande — vous pouvez soumettre une URL et obtenir un snapshot permanent</td></tr>
<tr><td><strong>CachedView</strong></td><td>Agrégateur de caches (Google, Bing, Wayback)</td></tr>
<tr><td><strong>CommonCrawl</strong></td><td>Dataset ouvert de crawls web mensuels (pétaoctets de données brutes)</td></tr>
<tr><td><strong>Bing Cache</strong></td><td>Similaire au cache Google, accessible via Bing</td></tr>
</tbody>
</table>

<h3>Technique avancée : reconstruction de site supprimé</h3>
<p>En combinant Wayback Machine + Google Cache + archive.today, il est souvent possible de reconstruire une version quasi-complète d'un site entièrement supprimé :</p>
<ol>
<li>Identifier toutes les URLs archivées via <code>web.archive.org/cdx/search/cdx?url=example.com/*&output=text</code></li>
<li>Pour chaque URL, récupérer le snapshot le plus récent</li>
<li>Reconstituer l'arborescence et les liens internes</li>
<li>Extraire les métadonnées des documents archivés</li>
</ol>
      `,quiz:[{id:"q1-5-1",question:"Quel service d'archivage web stocke des snapshots depuis 1996 et est 100% passif (aucune interaction avec la cible) ?",options:["Google Cache","archive.today","Wayback Machine","CommonCrawl"],correct:2,explanation:"La Wayback Machine (web.archive.org) de l'Internet Archive capture des snapshots du web depuis 1996. Consulter ses archives est totalement passif — aucune requête n'atteint le site cible actuel."}]},{id:"l1-6",title:"Formats de données critiques : WHOIS, DNS, ASN, SSL",content:`
<h2>Les fondations techniques d'Internet</h2>
<p>Avant de cartographier une infrastructure, il faut comprendre les briques élémentaires qui la composent. Ces formats de données sont le pain quotidien de l'analyste OSINT.</p>

<h3>WHOIS — L'annuaire des domaines</h3>
<p>WHOIS est un protocole qui permet d'interroger la base d'enregistrement d'un domaine. Il révèle (quand non masqué par un service de protection de la vie privée) :</p>
<ul>
<li>Le nom du registrant (propriétaire)</li>
<li>L'adresse email et postale de contact</li>
<li>Les dates de création, mise à jour et expiration du domaine</li>
<li>Les serveurs de noms (nameservers) — révèlent l'hébergeur DNS</li>
<li>Le registrar (bureau d'enregistrement)</li>
</ul>
<pre><code class="language-bash"># Requête WHOIS en ligne de commande
whois example.com

# Alternatives web : whois.domaintools.com, who.is
</code></pre>

<h3>DNS — Le système nerveux d'Internet</h3>
<p>Le DNS (Domain Name System) traduit les noms de domaine en adresses IP. Les enregistrements DNS sont une mine d'or pour la cartographie d'infrastructure :</p>
<table>
<thead><tr><th>Type</th><th>Rôle</th><th>Intérêt OSINT</th></tr></thead>
<tbody>
<tr><td><strong>A / AAAA</strong></td><td>Associe domaine → IP (v4/v6)</td><td>Identifier le serveur d'hébergement</td></tr>
<tr><td><strong>MX</strong></td><td>Serveurs de messagerie</td><td>Identifier le provider email (Google Workspace, Exchange)</td></tr>
<tr><td><strong>NS</strong></td><td>Serveurs de noms</td><td>Identifier l'hébergeur DNS</td></tr>
<tr><td><strong>TXT</strong></td><td>Texte libre (SPF, DKIM, vérifications)</td><td>Révèle les services tiers (Google, Salesforce, etc.)</td></tr>
<tr><td><strong>CNAME</strong></td><td>Alias vers un autre domaine</td><td>Identifier les sous-domaines et les services</td></tr>
<tr><td><strong>SOA</strong></td><td>Autorité de la zone</td><td>Email de l'admin, serial pour détecter les changements</td></tr>
</tbody>
</table>
<pre><code class="language-bash"># Interroger les enregistrements DNS
dig example.com ANY
nslookup -type=any example.com

# Enregistrements MX (serveurs mail)
dig example.com MX

# Enregistrements TXT (SPF, DKIM, etc.)
dig example.com TXT</code></pre>

<h3>ASN — Autonomous System Number</h3>
<p>Chaque réseau d'opérateur ou d'entreprise connecté à Internet possède un numéro d'AS (ASN). Identifier l'ASN d'une cible permet de cartographier l'ensemble de ses plages IP.</p>
<pre><code class="language-bash"># Trouver l'ASN d'une IP
whois -h whois.radb.net -- '-i origin 185.199.108.153'

# Explorer un ASN complet
# bgp.he.net — Interface web de Hurricane Electric</code></pre>

<h3>SSL/TLS & Certificate Transparency</h3>
<p>Depuis 2018, tous les certificats SSL/TLS émis doivent être enregistrés dans des logs publics de transparence (Certificate Transparency). Ces logs sont une source OSINT formidable :</p>
<ul>
<li><strong>crt.sh :</strong> Moteur de recherche dans les CT logs. Permet de découvrir TOUS les sous-domaines pour lesquels un certificat a été émis.</li>
<li><strong>Pivots possibles :</strong> Organisation dans le certificat, email de contact, dates d'émission</li>
</ul>
<pre><code class="language-bash"># Rechercher les certificats d'un domaine
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq '.[].name_value' | sort -u

# Résultat typique : liste de sous-domaines
# mail.example.com
# vpn.example.com 
# staging.example.com  ← intéressant !
# jenkins.example.com  ← très intéressant !</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Technique de pivot</h3><p class="text-sm">Les sous-domaines découverts via crt.sh révèlent souvent des services non documentés : <code>staging</code>, <code>dev</code>, <code>jenkins</code>, <code>gitlab</code>, <code>vpn</code>. Ce sont les premières cibles d'un audit de surface d'attaque.</p></div></div>
      `,quiz:[{id:"q1-6-1",question:"Quel enregistrement DNS révèle le fournisseur de messagerie d'une organisation ?",options:["A","CNAME","MX","NS"],correct:2,explanation:"Les enregistrements MX (Mail eXchange) pointent vers les serveurs de messagerie du domaine, révélant si l'organisation utilise Google Workspace, Microsoft 365, un serveur mail interne, etc."},{id:"q1-6-2",question:"Pourquoi les logs Certificate Transparency (CT) sont-ils précieux en OSINT ?",options:["Ils contiennent les clés privées des certificats","Ils révèlent tous les sous-domaines pour lesquels un certificat a été émis","Ils permettent de déchiffrer le trafic HTTPS","Ils listent les vulnérabilités des serveurs"],correct:1,explanation:"Les CT logs publics enregistrent chaque certificat SSL émis. En cherchant sur crt.sh, on peut découvrir tous les sous-domaines d'une organisation, y compris ceux non destinés à être publics (staging, dev, vpn, jenkins...)."}]}]},Ky={id:"m2",title:"Phase 2 — OSINT Humain",icon:"UserSearch",lessons:[{id:"l2-1",title:"Identité numérique : empreinte & persistance",content:`
<h2>L'empreinte numérique : vous êtes la somme de vos traces</h2>
<p>Chaque interaction avec le monde numérique laisse une trace — volontaire ou non. L'OSINT humain consiste à reconstituer un profil cohérent à partir de ces fragments dispersés.</p>

<h3>Empreinte active vs passive</h3>
<table>
<thead><tr><th>Type</th><th>Définition</th><th>Exemples</th></tr></thead>
<tbody>
<tr><td><strong>Active</strong></td><td>Données publiées volontairement</td><td>Posts LinkedIn, tweets, photos Instagram, commentaires, CV en ligne</td></tr>
<tr><td><strong>Passive</strong></td><td>Données générées automatiquement</td><td>Logs de connexion, métadonnées EXIF, cookies, empreinte navigateur</td></tr>
<tr><td><strong>Héritée</strong></td><td>Données publiées par des tiers</td><td>Mention dans un article, tag sur une photo, listing dans un annuaire</td></tr>
</tbody>
</table>

<h3>La persistance des données</h3>
<p>L'adage "Internet n'oublie jamais" n'est pas une métaphore — c'est une réalité technique :</p>
<ul>
<li><strong>Wayback Machine :</strong> Archive des snapshots depuis 1996</li>
<li><strong>Google Cache :</strong> Conserve la dernière version crawlée</li>
<li><strong>Fuites de données :</strong> Un mot de passe compromis en 2015 circule encore en 2026</li>
<li><strong>Réseaux sociaux :</strong> Même "supprimé", un post peut avoir été screenshoté, archivé, ou indexé</li>
<li><strong>Forums / Usenet :</strong> Des posts des années 2000 sont encore accessibles via Google Groups</li>
</ul>

<h3>Les pivots d'identification</h3>
<p>Un <strong>pivot</strong> est un point de données qui permet de passer d'un monde d'information à un autre :</p>
<pre><code class="language-text">Email → Pseudo (via Holehe, HIBP)
      → Nom réel (via LinkedIn, registres)
      → Autres comptes (via Sherlock, Maigret)
      → Localisation (via posts géolocalisés)
      → Employeur (via LinkedIn, societe.com)
      → Infrastructure (via WHOIS, DNS)

Pseudo → Email (via data breaches)
       → Autres plateformes (via Sherlock)
       → Comportement (via analyse de posts)
       → Horaires d'activité (via timestamps)
       → Cercle social (via interactions)</code></pre>

<h3>Graphe identitaire</h3>
<p>L'objectif final est de construire un <strong>graphe identitaire</strong> complet reliant toutes les traces à une entité unique. Maltego excelle dans cette visualisation. Chaque noeud (email, pseudo, IP, numéro de téléphone) connecté par des arêtes (utilise, possède, publie sur) forme un réseau exploitable.</p>
      `,quiz:[{id:"q2-1-1",question:"Qu'est-ce qu'un 'pivot' en OSINT ?",options:["Un mouvement de rotation de la caméra de surveillance","Un point de données permettant de passer d'un domaine d'information à un autre","Un outil de hacking réseau","La rotation des clés API"],correct:1,explanation:"En OSINT, un pivot est un élément d'information (email, pseudo, IP) qui sert de pont pour découvrir de nouvelles informations dans un domaine différent."}]},{id:"l2-2",title:"Recherche d'emails, pseudos & corrélations",content:`
<h2>La traque méthodique des identifiants</h2>
<p>L'email et le pseudo sont les deux identifiants les plus utilisés pour relier une personne à ses activités en ligne. La plupart des gens réutilisent les mêmes — c'est leur plus grande vulnérabilité.</p>

<h3>Outils de recherche d'email</h3>

<h4>Holehe — Vérification d'inscription email</h4>
<p>Holehe vérifie si une adresse email est enregistrée sur 120+ services en exploitant les flux "mot de passe oublié". Totalement passif, la cible ne reçoit aucune notification.</p>
<pre><code class="language-bash"># Installation
pip3 install holehe

# Recherche sur une adresse
holehe cible@example.com

# Résultat typique :
# [+] instagram.com : Email utilisé
# [+] spotify.com : Email utilisé
# [+] twitter.com : Email utilisé
# [-] facebook.com : Email non trouvé</code></pre>

<h4>Hunter.io — Structure email d'entreprise</h4>
<p>Hunter identifie le pattern email d'une organisation (prenom.nom@, p.nom@, etc.) et liste les emails indexés publiquement.</p>

<h4>Epieos — OSINT Google passif</h4>
<p>Epieos explore les services Google associés à un email : photo de profil, avis Google Maps, calendrier public. Zéro alerte côté cible.</p>

<h3>Recherche de pseudonymes</h3>

<h4>Sherlock</h4>
<pre><code class="language-bash"># Recherche sur 400+ plateformes
python3 sherlock user123 --print-all

# Avec proxy Tor
python3 sherlock user123 --tor</code></pre>

<h4>Maigret</h4>
<pre><code class="language-bash"># Rapport HTML détaillé
maigret user123 --html

# Avec Tor
maigret user123 --tor</code></pre>
<p>Maigret va plus loin que Sherlock : il tente d'extraire des informations de chaque profil trouvé et génère un rapport enrichi avec liens entre comptes.</p>

<h3>Technique de corrélation croisée</h3>
<p>La puissance de l'OSINT humain réside dans la <strong>triangulation</strong> :</p>
<ol>
<li><strong>Point de départ :</strong> Un email (jean.dupont@gmail.com)</li>
<li><strong>Holehe :</strong> Révèle que l'email est inscrit sur Twitter, Instagram, Spotify</li>
<li><strong>HIBP :</strong> L'email apparaît dans 3 fuites → on récupère un pseudo associé (jdupont42)</li>
<li><strong>Sherlock :</strong> Le pseudo jdupont42 existe sur GitHub, Reddit, Steam</li>
<li><strong>GitHub :</strong> Le profil contient un repo avec un fichier de config révélant une adresse IP perso</li>
<li><strong>Reddit :</strong> L'historique de posts révèle la ville de résidence et des centres d'intérêt</li>
</ol>
<p>En 6 étapes, à partir d'un seul email, on a reconstitué : identité, présence multi-plateforme, localisation approximative, centres d'intérêt, et potentiellement des données techniques.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚠️ Faux positifs</h3><p class="text-sm">Attention aux homonymes. Le pseudo "jdupont42" peut appartenir à plusieurs personnes. Toute corrélation doit être <strong>vérifiée par au moins deux sources indépendantes</strong> avant d'être validée.</p></div></div>
      `,quiz:[{id:"q2-2-1",question:"Comment fonctionne l'outil Holehe pour vérifier les inscriptions d'un email ?",options:["Il contacte directement les serveurs des plateformes avec des identifiants volés","Il exploite les flux 'mot de passe oublié' des services pour vérifier si l'email est enregistré","Il analyse les fuites de données pour trouver l'email","Il envoie un email de test à l'adresse pour voir les réponses automatiques"],correct:1,explanation:"Holehe utilise les formulaires de récupération de mot de passe des services web. Si le service répond 'Un email de réinitialisation a été envoyé', c'est que l'adresse est enregistrée."},{id:"q2-2-2",question:"Combien de sources indépendantes minimum faut-il pour valider une corrélation d'identité ?",options:["1 suffit si elle est fiable","2 sources indépendantes minimum","5 sources minimum","La corrélation est toujours fiable si l'outil est bon"],correct:1,explanation:"La règle d'or en OSINT analytique : toute corrélation doit être confirmée par au moins 2 sources indépendantes pour éliminer les faux positifs (homonymes, usurpation...)."}]},{id:"l2-3",title:"Fuites de données & Breach Analysis",content:`
<h2>L'océan des données compromises</h2>
<p>Les fuites de données (data breaches) sont l'une des sources les plus puissantes et les plus sensibles de l'OSINT. En 2025, plus de <strong>16 milliards d'identifiants</strong> ont été exposés. Ces bases circulent sur les forums spécialisés et constituent un risque majeur pour les organisations.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Cadre légal strict</h3><p class="text-sm">La consultation de bases de données volées est une zone grise juridique. Dans un cadre Red Team contractuel, l'accès aux données de breach est autorisé par les RoE. Hors cadre contractuel, la détention et l'exploitation de données volées peut constituer un recel (Art. 321-1 du Code Pénal).</p></div></div>

<h3>Sources légitimes de vérification</h3>

<h4>Have I Been Pwned (HIBP)</h4>
<p>Service de référence créé par Troy Hunt. Utilise la technique de <strong>k-anonymity</strong> pour vérifier si un email/mot de passe a été compromis sans révéler l'entrée complète.</p>
<pre><code class="language-bash"># Vérifier un email via l'API
curl "https://haveibeenpwned.com/api/v3/breachedaccount/test@example.com" \\
  -H "hibp-api-key: VOTRE_CLE_API"

# Vérifier un password hash via k-anonymity (les 5 premiers chars du SHA-1)
# Exemple pour "password123" : SHA1 = CBFDAC6008F9CAB4083784CBD1874F76618D2A97
curl "https://api.pwnedpasswords.com/range/CBFDA"</code></pre>

<h4>DeHashed</h4>
<p>Moteur de recherche multi-champs sur données compromises (email, username, hash, IP, nom, téléphone). Utile pédagogiquement pour illustrer les requêtes ciblées. Accès commercial avec journaux d'audit.</p>

<h4>Intelligence X</h4>
<p>Recherche dans les archives, dark web (Tor, I2P) et sites désactivés. Inclut tokens OAuth et secrets CI/CD exposés dans les fuites récentes.</p>

<h3>Analyse d'une fuite de données : méthodologie</h3>
<ol>
<li><strong>Identification :</strong> Quelles données sont présentes ? (emails, mots de passe en clair/hashés, numéros de téléphone, adresses)</li>
<li><strong>Scope :</strong> La fuite concerne-t-elle notre périmètre d'audit ? Combien d'employés sont touchés ?</li>
<li><strong>Criticité :</strong> Les mots de passe sont-ils en clair ou hashés ? Quel algorithme ? (MD5 est trivial à casser, bcrypt résiste)</li>
<li><strong>Réutilisation :</strong> Les identifiants compromis sont-ils encore valides ? (credential stuffing)</li>
<li><strong>Corrélation :</strong> Les mêmes identifiants apparaissent-ils dans d'autres fuites ?</li>
</ol>

<h3>Password hash cracking (contexte défensif)</h3>
<p>Dans un audit, identifier les mots de passe faibles permet de recommander des politiques de sécurité :</p>
<pre><code class="language-bash"># Hashcat — GPU-accelerated password recovery
# Attaque par dictionnaire
hashcat -m 0 hashes.txt rockyou.txt

# Attaque par règles (mutation de mots de passe)
hashcat -m 0 hashes.txt rockyou.txt -r rules/best64.rule

# Types de hash courants :
# -m 0    : MD5
# -m 100  : SHA1
# -m 1000 : NTLM
# -m 3200 : bcrypt</code></pre>
      `,quiz:[{id:"q2-3-1",question:"Qu'est-ce que la technique de k-anonymity utilisée par Have I Been Pwned ?",options:["Un chiffrement des résultats de recherche","Une méthode qui permet de vérifier si un mot de passe a fuité sans envoyer le mot de passe complet au serveur","Un proxy anonymisant les requêtes API","Un algorithme de suppression des données personnelles"],correct:1,explanation:"La k-anonymity de HIBP fonctionne ainsi : on envoie seulement les 5 premiers caractères du hash SHA-1 du mot de passe. Le serveur retourne tous les hashes correspondants, et la vérification se fait localement. Le mot de passe complet n'est jamais transmis."}]},{id:"l2-4",title:"Corrélation multi-plateformes",content:`
<h2>L'art de relier les points</h2>
<p>La corrélation multi-plateformes est le coeur de l'OSINT humain. C'est la capacité à relier des fragments d'identité dispersés sur différents services pour construire un profil complet.</p>

<h3>Indicateurs de corrélation</h3>
<table>
<thead><tr><th>Indicateur</th><th>Force</th><th>Exemple</th></tr></thead>
<tbody>
<tr><td>Même email</td><td>🟢 Fort</td><td>Même adresse Gmail sur LinkedIn et GitHub</td></tr>
<tr><td>Même pseudo</td><td>🟠 Moyen</td><td>Pseudo identique sur Twitter et Reddit (mais homonymes possibles)</td></tr>
<tr><td>Même photo</td><td>🟢 Fort</td><td>Même avatar sur Discord et Telegram (vérifiable par reverse image search)</td></tr>
<tr><td>Même style d'écriture</td><td>🟠 Moyen</td><td>Tics de langage, fautes récurrentes, expressions favorites</td></tr>
<tr><td>Mêmes horaires</td><td>🟡 Faible</td><td>Activité sur Reddit et Twitter aux mêmes heures</td></tr>
<tr><td>Mêmes centres d'intérêt</td><td>🟡 Faible</td><td>Subreddit + hashtags Twitter cohérents</td></tr>
<tr><td>Même IP (dans breach)</td><td>🟢 Fort</td><td>Même IP de connexion dans deux fuites différentes</td></tr>
</tbody>
</table>

<h3>Reverse Image Search — la photo qui trahit</h3>
<p>La recherche d'image inversée permet de retrouver toutes les occurrences d'une photo sur le web :</p>
<ul>
<li><strong>Google Images :</strong> Upload ou URL de la photo → résultats similaires</li>
<li><strong>Yandex Images :</strong> Souvent supérieur à Google pour les visages</li>
<li><strong>TinEye :</strong> Spécialisé dans le suivi de propagation d'images</li>
<li><strong>PimEyes :</strong> Reconnaissance faciale (usage très encadré légalement en UE)</li>
</ul>

<h3>Méthodologie de corrélation en 5 étapes</h3>
<ol>
<li><strong>Collecte :</strong> Rassembler tous les identifiants connus (emails, pseudos, numéros, photos)</li>
<li><strong>Expansion :</strong> Pour chaque identifiant, chercher les comptes associés (Holehe, Sherlock, Maigret)</li>
<li><strong>Croisement :</strong> Identifier les points de recoupement entre les comptes trouvés</li>
<li><strong>Validation :</strong> Confirmer chaque corrélation par au minimum 2 indicateurs indépendants</li>
<li><strong>Cartographie :</strong> Visualiser les liens dans un graphe (Maltego, Obsidian, ou simple tableau)</li>
</ol>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🧠 Pensée critique requise</h3><p class="text-sm">La corrélation n'est pas la causalité. Deux profils avec le même pseudo peuvent appartenir à deux personnes différentes. Documentez le <strong>niveau de confiance</strong> de chaque lien : confirmé, probable, possible, non vérifié.</p></div></div>
      `,quiz:[{id:"q2-4-1",question:"Quel indicateur de corrélation a la force probante la plus élevée ?",options:["Mêmes horaires de connexion","Mêmes centres d'intérêt","Même adresse email utilisée sur deux plateformes","Même pseudo"],correct:2,explanation:"L'email est un identifiant quasi-unique. Si la même adresse email est utilisée sur LinkedIn et GitHub, c'est presque certainement la même personne (sauf si le compte a été compromis)."}]},{id:"l2-5",title:"Analyse comportementale à partir de traces",content:`
<h2>Lire entre les lignes numériques</h2>
<p>Au-delà de l'identification, l'OSINT humain permet de comprendre le <strong>comportement</strong>, les <strong>habitudes</strong> et la <strong>psychologie</strong> d'une personne à travers ses traces numériques. C'est la dimension analytique qui transforme des données en intelligence.</p>

<h3>Analyse temporelle — les horaires qui parlent</h3>
<p>Les timestamps des publications révèlent :</p>
<ul>
<li><strong>Fuseau horaire :</strong> Si quelqu'un tweete régulièrement entre 9h et 18h UTC+1, il est probablement en Europe occidentale</li>
<li><strong>Routine :</strong> Publications le matin = routine professionnelle. Publications à 3h du matin = insomnie, quart de nuit, ou fuseau différent</li>
<li><strong>Période d'inactivité :</strong> Absence pendant les heures de bureau → emploi sans accès au téléphone. Absence le week-end → professionnel strict</li>
</ul>

<h3>Analyse linguistique</h3>
<ul>
<li><strong>Langue et dialecte :</strong> Expressions régionales, argot, anglicismes</li>
<li><strong>Niveau d'éducation :</strong> Vocabulaire, structure syntaxique, orthographe</li>
<li><strong>Domaine d'expertise :</strong> Jargon technique récurrent</li>
<li><strong>Émotions récurrentes :</strong> Tonalité des posts (colère, enthousiasme, cynisme)</li>
<li><strong>Tics d'écriture :</strong> Utilisation de "...", majuscules excessives, émojis récurrents</li>
</ul>

<h3>Analyse des interactions sociales</h3>
<ul>
<li><strong>Qui répond à qui ?</strong> Les interactions fréquentes révèlent le cercle proche</li>
<li><strong>Qui retweet/partage quoi ?</strong> Affinités idéologiques et politiques</li>
<li><strong>Groupes et communautés :</strong> Appartenance à des groupes Facebook, subreddits, serveurs Discord</li>
<li><strong>Ton des échanges :</strong> Formel (relations professionnelles) vs informel (amis, famille)</li>
</ul>

<h3>Construction du profil psychologique</h3>
<p>Le modèle OCEAN (Big Five) peut être approximé à partir des traces numériques :</p>
<table>
<thead><tr><th>Trait</th><th>Indicateurs numériques</th></tr></thead>
<tbody>
<tr><td><strong>Ouverture</strong></td><td>Variété des sujets abordés, curiosité intellectuelle visible dans les posts</td></tr>
<tr><td><strong>Conscienciosité</strong></td><td>Régularité des publications, soin dans la rédaction, profil complet vs bâclé</td></tr>
<tr><td><strong>Extraversion</strong></td><td>Volume d'interactions, nombre d'amis/followers, fréquence de publication</td></tr>
<tr><td><strong>Agréabilité</strong></td><td>Ton des commentaires, gestion des désaccords, empathie manifestée</td></tr>
<tr><td><strong>Neuroticisme</strong></td><td>Posts émotionnels, réactivité aux critiques, variations d'humeur dans le temps</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚠️ Limites de l'analyse</h3><p class="text-sm">Un profil en ligne est une <strong>performance sociale</strong>, pas un miroir fidèle de la personnalité. Les gens présentent une version curatée d'eux-mêmes. L'analyste doit toujours garder en tête que le persona numérique ≠ la personne réelle. Notez ces analyses comme <strong>"évaluation préliminaire"</strong>, jamais comme des certitudes.</p></div></div>
      `,quiz:[{id:"q2-5-1",question:"Pourquoi l'analyse temporelle des publications est-elle utile en OSINT ?",options:["Pour savoir si la personne est en vacances","Pour déterminer le fuseau horaire, la routine quotidienne et les habitudes professionnelles de la cible","Pour calculer la vitesse de frappe de la personne","Pour identifier les algorithmes de recommandation des réseaux sociaux"],correct:1,explanation:"Les timestamps des publications sont un indicateur puissant : ils révèlent le fuseau horaire probable, les horaires de travail, les routines quotidiennes, et peuvent aider à localiser géographiquement la cible."}]},{id:"l2-6",title:"Géolocalisation à partir d'images (GEOINT)",content:`
<h2>Chaque photo raconte un lieu</h2>
<p>La géolocalisation d'images (GEOINT basique) est l'une des capacités les plus impressionnantes de l'OSINT. À partir d'une simple photo, un analyste entraîné peut identifier le lieu exact avec une précision de quelques mètres.</p>

<h3>Étape 1 : Métadonnées EXIF</h3>
<p>Premier réflexe : vérifier si la photo contient des données GPS embarquées.</p>
<pre><code class="language-bash">exiftool -GPSLatitude -GPSLongitude photo.jpg

# Si les coordonnées sont présentes, les coller dans Google Maps
# pour identifier le lieu exact</code></pre>
<p><strong>Attention :</strong> La plupart des réseaux sociaux (Twitter, Facebook, Instagram) <em>suppriment</em> les données EXIF lors de l'upload. Mais les services de messagerie (WhatsApp, Telegram) ne le font pas toujours.</p>

<h3>Étape 2 : Analyse visuelle</h3>
<p>Si pas de métadonnées, on passe à l'analyse visuelle :</p>

<h4>Indices textuels</h4>
<ul>
<li>Panneaux de signalisation (langue, format, code couleur)</li>
<li>Enseignes commerciales (chaînes locales, noms propres)</li>
<li>Plaques d'immatriculation (format national)</li>
<li>Numéros de téléphone affichés (indicatif régional)</li>
</ul>

<h4>Indices architecturaux</h4>
<ul>
<li>Style architectural (colonial, haussmannien, soviétique)</li>
<li>Matériaux de construction (brique rouge = UK/Belgique, etc.)</li>
<li>Sens de circulation (droite vs gauche)</li>
<li>Lignes électriques (aériennes vs souterraines)</li>
</ul>

<h4>Indices naturels</h4>
<ul>
<li>Végétation (tropicale, tempérée, aride)</li>
<li>Position du soleil (hémisphère nord vs sud, heure approximative)</li>
<li>Ombres (longueur → latitude approximative, direction → heure)</li>
<li>Terrain (relief, type de sol, cours d'eau)</li>
</ul>

<h3>Étape 3 : Outils de vérification</h3>
<ul>
<li><strong>Google Maps / Street View :</strong> Vérifier visuellement un lieu candidat</li>
<li><strong>Google Lens :</strong> Identifier des enseignes, monuments, ou objets dans l'image</li>
<li><strong>SunCalc :</strong> Calculer la position du soleil à une date/heure/lieu donnés pour confirmer la cohérence temporelle</li>
<li><strong>Sentinel Hub :</strong> Imagerie satellite pour vérifier le terrain et la végétation</li>
</ul>

<h3>Exemple concret de workflow</h3>
<pre><code class="language-text">1. Photo reçue : paysage urbain avec une enseigne floue
2. EXIF : pas de GPS (supprimé par la plateforme)
3. Analyse visuelle :
   - Panneau en alphabet cyrillique → Europe de l'Est ou Russie
   - Plaque jaune → potentiellement Pays-Bas ? Non, format différent
   - Enseigne "Аптека" (pharmacie) → confirme zone russophone
   - Architecture soviétique → ex-URSS
   - Tram visible → ville disposant d'un réseau de tramway
4. Hypothèse : ville moyenne russophone avec tram
5. Recherche Google Maps des villes avec tramway en Russie/Ukraine
6. Comparaison Street View avec les bâtiments visibles
7. Confirmation : Iekaterinbourg, angle rue X et avenue Y</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎮 Entraînement</h3><p class="text-sm">Le jeu <strong>GeoGuessr</strong> (geoguessr.com) est le meilleur outil d'entraînement à la géolocalisation. Il vous place aléatoirement sur Google Street View et vous devez identifier votre position. Les joueurs experts atteignent une précision de quelques kilomètres en moins de 30 secondes.</p></div></div>
      `,quiz:[{id:"q2-6-1",question:"Quel réseau social conserve généralement les données EXIF/GPS des photos uploadées ?",options:["Facebook","Instagram","Twitter/X","Aucun des trois — ils les suppriment tous"],correct:3,explanation:"Les grandes plateformes sociales (Facebook, Instagram, Twitter) suppriment systématiquement les métadonnées EXIF lors de l'upload pour protéger la vie privée. En revanche, les messageries (email, certaines configurations WhatsApp/Telegram) peuvent les conserver."},{id:"q2-6-2",question:"Comment les ombres dans une photo peuvent-elles aider à la géolocalisation ?",options:["Elles n'ont aucune utilité en GEOINT","Leur longueur indique la latitude approximative, et leur direction indique l'heure de la prise de vue","Elles permettent d'identifier le modèle d'appareil photo","Elles indiquent la vitesse du vent"],correct:1,explanation:"La longueur des ombres est liée à l'angle du soleil (et donc à la latitude et la saison). La direction des ombres indique la position du soleil et donc l'heure approximative. Combinées avec SunCalc, ces données peuvent confirmer ou invalider un lieu et une date."}]}]},Wy={id:"m3",title:"Phase 3 — OSINT Organisationnel & Technique",icon:"Building2",lessons:[{id:"l3-1",title:"Cartographie d'un domaine",content:`
<h2>Dessiner la carte d'un domaine cible</h2>
<p>La première étape de tout audit de surface d'attaque est la cartographie du domaine : identifier tous les sous-domaines, serveurs, et services exposés. C'est le socle sur lequel repose toute l'investigation organisationnelle.</p>

<h3>Énumération de sous-domaines</h3>

<h4>Technique 1 : Certificate Transparency (passif)</h4>
<pre><code class="language-bash"># crt.sh — Requête JSON tous les certificats émis pour un domaine
curl -s "https://crt.sh/?q=%25.example.com&output=json" \\
  | jq -r '.[].name_value' | sort -u

# Résultat typique :
# mail.example.com
# vpn.example.com
# staging.example.com
# jenkins.example.com
# api-dev.example.com</code></pre>

<h4>Technique 2 : subfinder (passif)</h4>
<pre><code class="language-bash"># Énumération passive multi-sources
subfinder -d example.com -silent | sort -u

# Avec fichier de sortie
subfinder -d example.com -o subdomains.txt</code></pre>

<h4>Technique 3 : OWASP Amass (passif + actif)</h4>
<pre><code class="language-bash"># Mode passif uniquement (recommandé en contexte OSINT)
amass enum -passive -d example.com -o amass_results.txt

# Mode actif (nécessite autorisation contractuelle !)
amass enum -active -d example.com -brute</code></pre>

<h3>Analyse DNS approfondie</h3>
<pre><code class="language-bash"># Tous les enregistrements DNS
dig example.com ANY +noall +answer

# Zone transfer (souvent bloqué, mais à tenter)
dig @ns1.example.com example.com AXFR

# Enregistrements TXT (SPF, DKIM, services tiers)
dig example.com TXT
# "v=spf1 include:_spf.google.com ~all" → Google Workspace
# "MS=ms12345678" → Microsoft 365 vérifié</code></pre>

<h3>WHOIS et historique</h3>
<ul>
<li><strong>whois.domaintools.com :</strong> Historique des changements de registrant</li>
<li><strong>Reverse WHOIS :</strong> Trouver tous les domaines enregistrés par le même propriétaire</li>
<li><strong>Dates d'expiration :</strong> Un domaine expirant bientôt est vulnérable au domain hijacking</li>
</ul>

<h3>Cartographie visuelle</h3>
<p>L'outil <strong>DNSDumpster</strong> (dnsdumpster.com) génère automatiquement une carte graphique de l'infrastructure DNS, incluant les liens entre sous-domaines, serveurs mail, et nameservers. C'est un excellent point de départ pour toute investigation.</p>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Sous-domaines critiques à chercher</h3><p class="text-sm">Les sous-domaines les plus intéressants pour un auditeur : <code>admin</code>, <code>staging</code>, <code>dev</code>, <code>test</code>, <code>jenkins</code>, <code>gitlab</code>, <code>vpn</code>, <code>api</code>, <code>internal</code>, <code>legacy</code>. Ils sont souvent mal protégés et exposent des services internes.</p></div></div>
      `,quiz:[{id:"q3-1-1",question:"Quelle technique d'énumération de sous-domaines est 100% passive et ne contacte jamais la cible ?",options:["OWASP Amass en mode actif","Recherche dans les Certificate Transparency logs (crt.sh)","Zone transfer DNS","Brute-force DNS"],correct:1,explanation:"Les CT logs sont des registres publics tenus par les autorités de certification. Les consulter (via crt.sh par exemple) ne génère aucune requête vers le domaine cible — c'est totalement passif."}]},{id:"l3-2",title:"Infrastructure exposée : Shodan & Censys",content:`
<h2>Voir ce que l'administrateur ne voit plus</h2>
<p>Shodan et Censys sont les "yeux" de l'OSINT infrastructure. Ils scannent en permanence l'intégralité d'Internet et indexent les services exposés. Si un serveur est connecté à Internet, il est probablement dans Shodan.</p>

<h3>Shodan — Le Google de l'IoT</h3>
<p>Shodan indexe les <strong>bannières de services</strong> : la réponse qu'un serveur envoie lorsqu'on se connecte à un port ouvert. Ces bannières révèlent le type de service, sa version, et parfois des informations de configuration.</p>

<pre><code class="language-text"># Recherches Shodan essentielles

# Tous les serveurs d'une organisation
org:"AcmeCorp"

# Tous les services sur une plage IP
net:192.168.0.0/16

# Serveurs Apache vulnérables (version spécifique)
apache 2.4.49

# Webcams accessibles
has_screenshot:true port:554

# Bases de données exposées sans auth
port:27017 "MongoDB" -authentication

# Serveurs RDP exposés (vecteur de ransomware)
port:3389 "Remote Desktop"

# Systèmes SCADA industriels
port:502 "Modbus"</code></pre>

<h3>Censys — Expert en certificats</h3>
<p>Censys excelle dans la corrélation <strong>IP ↔ Certificat ↔ Domaine ↔ Service</strong>. Son point fort : identifier le <strong>Shadow IT cloud</strong> (services déployés hors du contrôle de la DSI).</p>
<pre><code class="language-text"># Trouver tous les services avec un certificat émis pour une organisation
parsed.subject.organization:"AcmeCorp"

# Services avec un certificat auto-signé (souvent du Shadow IT)
parsed.issuer.organization:"AcmeCorp" AND tags.raw:"self-signed"</code></pre>

<h3>Interprétation des résultats</h3>
<p>L'analyste OSINT ne se contente pas de lister les ports ouverts. Il interprète :</p>
<table>
<thead><tr><th>Découverte</th><th>Risque</th><th>Recommandation</th></tr></thead>
<tbody>
<tr><td>RDP (3389) exposé</td><td>🔴 Critique</td><td>Vecteur de ransomware n°1. Isoler derrière VPN immédiatement.</td></tr>
<tr><td>MongoDB sans auth</td><td>🔴 Critique</td><td>Base de données en accès libre. Données potentiellement exposées.</td></tr>
<tr><td>Jenkins (8080) public</td><td>🟠 Élevé</td><td>Pipeline CI/CD exposé. Accès potentiel au code source et aux secrets.</td></tr>
<tr><td>Apache 2.4.49</td><td>🟠 Élevé</td><td>CVE-2021-41773 (Path Traversal). Mettre à jour immédiatement.</td></tr>
<tr><td>Certificat auto-signé</td><td>🟡 Moyen</td><td>Potentiellement du Shadow IT non géré par la DSI.</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ Rappel critique</h3><p class="text-sm">Shodan et Censys sont des outils <strong>passifs</strong> — vous interrogez leur base de données, pas les serveurs cibles directement. Cependant, veillez à ne jamais tenter de vous connecter aux services exposés trouvés (RDP, MongoDB, etc.) sans autorisation contractuelle écrite.</p></div></div>
      `,quiz:[{id:"q3-2-1",question:"Pourquoi un port RDP (3389) exposé sur Internet est considéré comme critique ?",options:["Parce que RDP est un protocole obsolète","Parce que c'est le vecteur d'attaque numéro 1 pour les ransomwares et il permet un accès distant au poste","Parce qu'il consomme trop de bande passante","Parce que RDP n'est pas chiffré"],correct:1,explanation:"RDP exposé sur Internet est le vecteur n°1 des attaques par ransomware. Les attaquants utilisent du brute-force ou des credentials volés pour se connecter, puis déploient leur payload. Il doit toujours être derrière un VPN."}]},{id:"l3-3",title:"OSINT sur entreprises",content:`
<h2>Comprendre comment une organisation respire</h2>
<p>L'OSINT organisationnel va au-delà de la technique. Il s'agit de comprendre la structure, les dirigeants, les partenariats, et les vulnérabilités humaines d'une organisation.</p>

<h3>Sources de données légales</h3>
<table>
<thead><tr><th>Source</th><th>Données disponibles</th><th>URL</th></tr></thead>
<tbody>
<tr><td><strong>Infogreffe</strong></td><td>KBIS, statuts, comptes annuels (FR)</td><td>infogreffe.fr</td></tr>
<tr><td><strong>societe.com</strong></td><td>Dirigeants, bilans, liens capitalistiques</td><td>societe.com</td></tr>
<tr><td><strong>Pappers</strong></td><td>Données INSEE, BODACC, actes</td><td>pappers.fr</td></tr>
<tr><td><strong>OpenCorporates</strong></td><td>Registre mondial d'entreprises</td><td>opencorporates.com</td></tr>
<tr><td><strong>SEC EDGAR</strong></td><td>Rapports financiers des sociétés US cotées</td><td>sec.gov/edgar</td></tr>
<tr><td><strong>BODACC</strong></td><td>Annonces légales (créations, fusions, liquidations)</td><td>bodacc.fr</td></tr>
</tbody>
</table>

<h3>Cartographie des dirigeants</h3>
<p>Les dirigeants sont souvent le maillon OSINT le plus riche :</p>
<ul>
<li><strong>LinkedIn :</strong> Parcours professionnel, connexions, publications</li>
<li><strong>Registre du commerce :</strong> Mandats sociaux actuels et passés</li>
<li><strong>Presse :</strong> Interviews, citations, apparitions publiques</li>
<li><strong>Brevets :</strong> Dépôts de brevets révélant les axes R&D</li>
<li><strong>Conférences :</strong> Slides partagés (SlideShare, SpeakerDeck) → stack technique, projets</li>
</ul>

<h3>Liens capitalistiques et partenariats</h3>
<p>Comprendre qui possède quoi et qui travaille avec qui :</p>
<ul>
<li><strong>Organigramme capitalistique :</strong> Filiales, sociétés mères, participations croisées</li>
<li><strong>Sous-traitants :</strong> Appels d'offres publics (BOAMP, TED) révèlent les prestataires</li>
<li><strong>Partenaires technologiques :</strong> Les logos "Powered by" ou "Partner" sur les sites web</li>
<li><strong>Fournisseurs DNS/Cloud :</strong> Les enregistrements NS et les certificats révèlent l'hébergeur</li>
</ul>

<h3>Indicateurs de santé financière</h3>
<ul>
<li>Chiffre d'affaires et résultat net (comptes annuels obligatoires)</li>
<li>Évolution des effectifs (hausse = croissance, baisse = restructuration)</li>
<li>Annonces BODACC (liquidation, sauvegarde, fusion)</li>
<li>Litiges en cours (décisions de justice publiques)</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🧩 Exercice mental</h3><p class="text-sm">Pour chaque entreprise cible, posez-vous ces 5 questions :<br/>1. Qui la dirige ? 2. Qui la finance ? 3. Qui sont ses clients/fournisseurs ? 4. Quelle stack technique utilise-t-elle ? 5. Quelles données expose-t-elle involontairement ?</p></div></div>
      `,quiz:[{id:"q3-3-1",question:"Quel registre français permet d'accéder gratuitement aux comptes annuels, dirigeants et statuts d'une entreprise ?",options:["LinkedIn","Infogreffe / Pappers","Google Finance","Bloomberg Terminal"],correct:1,explanation:"Infogreffe et Pappers donnent accès aux données publiques du Registre du Commerce et des Sociétés (RCS) : KBIS, comptes annuels, noms des dirigeants, statuts constitutifs."}]},{id:"l3-4",title:"Exposition technologique",content:`
<h2>Lire la stack technique d'une entreprise</h2>
<p>Chaque site web, chaque application, laisse des traces de son architecture technique. Identifier la stack technologique d'une cible est essentiel pour évaluer sa surface d'attaque.</p>

<h3>Outils de fingerprinting technologique</h3>

<h4>Wappalyzer</h4>
<p>Extension navigateur qui identifie en un clic : CMS (WordPress, Drupal), frameworks JS (React, Angular), serveurs (Nginx, Apache), CDN (Cloudflare), analytics (Google Analytics, Matomo), et libraries.</p>

<h4>BuiltWith</h4>
<p>Service web qui donne un historique complet de l'évolution technologique d'un site. Permet de voir quand une technologie a été ajoutée ou retirée.</p>

<h4>Headers HTTP</h4>
<pre><code class="language-bash"># Examiner les headers HTTP d'un site
curl -I https://example.com

# Headers révélateurs typiques :
# Server: nginx/1.19.0        → Version du serveur web
# X-Powered-By: PHP/7.4.3     → Langage backend et version
# X-Generator: WordPress 6.4  → CMS utilisé
# Set-Cookie: JSESSIONID=...  → Application Java (Tomcat)
# X-AspNet-Version: 4.0.30319 → .NET Framework</code></pre>

<h4>Offres d'emploi comme source OSINT</h4>
<pre><code class="language-text"># Google Dorks pour les offres d'emploi
site:indeed.fr "AcmeCorp" "Kubernetes" OR "Docker" OR "AWS"
site:welcometothejungle.com "AcmeCorp"
site:linkedin.com/jobs "AcmeCorp" "DevOps" OR "SRE"

# Éléments révélés par les offres :
# - Stack technique : AWS, Kubernetes, Terraform, PostgreSQL
# - Outils internes : Jira, Confluence, GitLab
# - Niveaux de sécurité : "Habilitation Secret" = secteur défense
# - Taille de l'équipe : "Rejoignez une équipe de 5 DevOps"</code></pre>

<h3>Que faire de ces informations ?</h3>
<p>L'exposition technologique permet de :</p>
<ul>
<li>Identifier les CVE applicables aux versions détectées</li>
<li>Comprendre la maturité technique de l'organisation</li>
<li>Préparer des scénarios de pretexting crédibles ("Je suis du support Salesforce...")</li>
<li>Anticiper les défenses en place (WAF, CDN, SIEM)</li>
</ul>
      `,quiz:[{id:"q3-4-1",question:"Quel header HTTP est le plus révélateur de la technologie backend d'un site ?",options:["Content-Type","X-Powered-By","Content-Length","Accept-Language"],correct:1,explanation:"Le header X-Powered-By révèle souvent le langage et la version du backend (PHP/7.4, Express, ASP.NET). C'est une information sensible que les administrateurs avertis désactivent."}]},{id:"l3-5",title:"Shadow IT & Surface d'attaque visible",content:`
<h2>L'iceberg organisationnel</h2>
<p>Le <strong>Shadow IT</strong> désigne tous les systèmes, services et applications utilisés par les employés sans autorisation ni supervision de la DSI. C'est souvent la partie la plus vulnérable de l'infrastructure d'une organisation.</p>

<h3>Exemples courants de Shadow IT</h3>
<ul>
<li>Un développeur qui déploie un serveur de test sur AWS avec son compte personnel</li>
<li>Un service marketing qui utilise un outil SaaS non approuvé (Canva, Notion, Airtable)</li>
<li>Un sous-domaine <code>staging.example.com</code> oublié avec une vieille version de l'application</li>
<li>Un bucket S3 public créé pour un projet ponctuel et jamais supprimé</li>
<li>Un serveur Jenkins accessible sans authentification</li>
</ul>

<h3>Détection du Shadow IT via OSINT</h3>

<h4>Certificate Transparency</h4>
<p>Les certificats émis pour des sous-domaines non documentés révèlent du Shadow IT :</p>
<pre><code class="language-bash"># Chercher des certificats non standard
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq -r '.[].name_value' \\
  | sort -u | grep -v "www\\|mail\\|autodiscover"

# Résultats suspects :
# test-api.example.com
# demo-2023.example.com
# jira-old.example.com</code></pre>

<h4>Censys — Services non documentés</h4>
<pre><code class="language-text"># Certificats auto-signés émis par l'organisation
parsed.issuer.organization:"AcmeCorp" AND tags.raw:"self-signed"

# Services sur des ports non standard
ip:203.0.113.0/24 AND NOT (port:80 OR port:443)</code></pre>

<h4>GitHub — Secrets exposés</h4>
<pre><code class="language-text"># Dorks GitHub pour trouver des secrets
org:acmecorp "password" OR "api_key" OR "secret" OR "token"
"acmecorp.com" filename:.env
"acmecorp" filename:credentials</code></pre>

<h3>Surface d'attaque : le modèle ASM</h3>
<p>L'<strong>Attack Surface Management (ASM)</strong> consiste à cartographier en continu tous les points d'exposition d'une organisation :</p>
<ol>
<li><strong>Inventaire :</strong> Lister tous les domaines, IPs, services, applications</li>
<li><strong>Enrichissement :</strong> Identifier les technologies, versions, configurations</li>
<li><strong>Vulnérabilités :</strong> Corréler avec les bases de CVE</li>
<li><strong>Priorisation :</strong> Classer par criticité et exploitabilité</li>
<li><strong>Monitoring :</strong> Surveillance continue des changements</li>
</ol>
      `,quiz:[{id:"q3-5-1",question:"Qu'est-ce que le 'Shadow IT' ?",options:["Un type de malware qui se cache dans le système","Des systèmes et services utilisés sans autorisation de la DSI","Un réseau local non documenté","Le Dark Web utilisé par les employés"],correct:1,explanation:"Le Shadow IT désigne tout système, service ou application utilisé par les employés en dehors du contrôle de la DSI — instances cloud personnelles, outils SaaS non approuvés, serveurs de test oubliés."}]},{id:"l3-6",title:"Analyse des documents publics",content:`
<h2>Les documents publics : une mine d'or négligée</h2>
<p>Les organisations publient une quantité considérable de documents accessibles au public. Chacun de ces documents est une source potentielle de renseignement.</p>

<h3>Types de documents exploitables</h3>
<table>
<thead><tr><th>Type</th><th>Source</th><th>Intelligence extractible</th></tr></thead>
<tbody>
<tr><td>Rapports annuels</td><td>Site corporate, AMF</td><td>Stratégie, chiffres clés, risques identifiés</td></tr>
<tr><td>Appels d'offres</td><td>BOAMP, TED, marchés publics</td><td>Budget, besoins techniques, sous-traitants</td></tr>
<tr><td>Brevets</td><td>INPI, Google Patents</td><td>Axes R&D, inventeurs, technologies propriétaires</td></tr>
<tr><td>Présentations</td><td>SlideShare, SpeakerDeck</td><td>Architecture technique, projets internes, organigrammes</td></tr>
<tr><td>CVs de employés</td><td>LinkedIn, Cadremploi</td><td>Technologies maîtrisées, projets passés, certifications</td></tr>
<tr><td>Articles de blog</td><td>Blog technique de l'entreprise</td><td>Stack technique, challenges rencontrés, culture interne</td></tr>
</tbody>
</table>

<h3>Extraction automatisée avec Google Dorks</h3>
<pre><code class="language-text"># Tous les PDF publics d'un domaine
site:example.com filetype:pdf

# Documents marqués comme confidentiels (mais publiés)
site:example.com filetype:pdf "confidentiel" OR "usage interne" OR "ne pas diffuser"

# Présentations PowerPoint exposées
site:example.com filetype:pptx OR filetype:ppt

# Tableurs contenant potentiellement des données sensibles
site:example.com filetype:xlsx "budget" OR "salaires" OR "effectifs"</code></pre>

<h3>Extraction de métadonnées en masse</h3>
<pre><code class="language-bash"># Télécharger tous les PDF d'un domaine
wget -r -l 1 -A pdf https://example.com/

# Extraire les métadonnées de tous les fichiers téléchargés
exiftool -r -csv -ext pdf -ext docx -ext xlsx ./downloaded/ > metadata_report.csv

# Identifier les auteurs uniques
exiftool -r -Author ./downloaded/ | sort -u</code></pre>

<h3>Ce que révèle l'analyse massive de documents</h3>
<ul>
<li><strong>Noms d'employés :</strong> Le champ "Auteur" des métadonnées</li>
<li><strong>Structure réseau :</strong> Chemins de fichiers dans les métadonnées (<code>\\\\serveur\\partage\\...</code>)</li>
<li><strong>Logiciels et versions :</strong> "Créateur : Microsoft Word 2019"</li>
<li><strong>Imprimantes réseau :</strong> Noms et IPs des imprimantes</li>
<li><strong>Structure organisationnelle :</strong> Qui produit quel type de document</li>
<li><strong>Informations supprimées... mais pas vraiment :</strong> PDF avec des zones caviardées parfois récupérables par copier-coller</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🔥 Cas réel célèbre</h3><p class="text-sm">En 2005, un rapport du gouvernement italien sur l'affaire Calipari contenait des passages "noircis" qui étaient en réalité de simples rectangles noirs superposés sur le texte. Un simple copier-coller a révélé l'intégralité du contenu censuré. Morale : la sanitisation de documents PDF est un art que beaucoup ne maîtrisent pas.</p></div></div>
      `,quiz:[{id:"q3-6-1",question:"Pourquoi les appels d'offres publics sont-ils une source OSINT précieuse ?",options:["Ils contiennent les mots de passe des systèmes de l'entreprise","Ils révèlent les budgets, besoins techniques et sous-traitants de l'organisation","Ils sont toujours classifiés et donc contiennent des données secrètes","Ils ne sont jamais utiles en OSINT"],correct:1,explanation:"Les appels d'offres publics révèlent les besoins techniques détaillés d'une organisation, ses budgets, ses délais, et souvent les technologies ciblées — autant d'informations précieuses pour un analyste."}]}]},$y={id:"m4",title:"Phase 4 — SOCMINT",icon:"Users",lessons:[{id:"l4-1",title:"Architecture des réseaux sociaux",content:`
<h2>Comprendre les plateformes pour mieux les exploiter</h2>
<p>Chaque réseau social est une architecture de données avec ses propres règles de visibilité, ses APIs, et ses failles informationnelles. L'analyste SOCMINT doit comprendre ces mécanismes avant de chercher quoi que ce soit.</p>

<h3>Modèles de visibilité par plateforme</h3>
<table>
<thead><tr><th>Plateforme</th><th>Modèle par défaut</th><th>Données accessibles sans compte</th></tr></thead>
<tbody>
<tr><td><strong>LinkedIn</strong></td><td>Semi-public</td><td>Nom, titre, entreprise, résumé (profils publics)</td></tr>
<tr><td><strong>X / Twitter</strong></td><td>Public</td><td>Tweets, bio, followers, suivis, likes (si compte public)</td></tr>
<tr><td><strong>Instagram</strong></td><td>Semi-public</td><td>Bio, nombre de posts/followers (profils publics)</td></tr>
<tr><td><strong>Facebook</strong></td><td>Semi-privé</td><td>Nom, photo de profil, parfois amis publics</td></tr>
<tr><td><strong>Telegram</strong></td><td>Semi-public</td><td>Canaux publics entièrement accessibles</td></tr>
<tr><td><strong>Reddit</strong></td><td>Pseudo-anonyme</td><td>Historique complet des posts et commentaires</td></tr>
<tr><td><strong>Discord</strong></td><td>Serveurs privés</td><td>Très peu sans invitation ; serveurs publics listés</td></tr>
<tr><td><strong>TikTok</strong></td><td>Public</td><td>Vidéos, bio, followers (si compte public)</td></tr>
</tbody>
</table>

<h3>APIs et quotas</h3>
<p>Les APIs officielles sont la voie légale et stable pour la collecte de données SOCMINT :</p>
<ul>
<li><strong>X API v2 :</strong> Accès aux tweets, users, tendances. Quotas stricts, plans payants.</li>
<li><strong>LinkedIn API :</strong> Très restreinte. Uniquement via partenariats approuvés.</li>
<li><strong>Telegram API (MTProto) :</strong> Accès programmatique complet via Telethon.</li>
<li><strong>Reddit API :</strong> Relativement ouverte. Historique complet accessible.</li>
</ul>

<h3>Le problème du scraping</h3>
<p>Le scraping (collecte automatisée sans API) est juridiquement risqué en Europe :</p>
<ul>
<li>Violation potentielle des Conditions d'Utilisation (ToS)</li>
<li>Risque de blocage de compte / IP</li>
<li>Implications RGPD si les données concernent des personnes identifiables</li>
<li>En revanche, toujours acceptable pour la consultation manuelle de profils publics</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">💡 Règle d'or SOCMINT</h3><p class="text-sm">Privilégiez toujours l'API officielle quand elle existe. Si l'API est trop restrictive, la consultation manuelle avec archivage (Hunchly) reste 100% légale pour les contenus publics. Le scraping automatisé est le dernier recours, uniquement dans un cadre contractuel.</p></div></div>
      `,quiz:[{id:"q4-1-1",question:"Quel réseau social offre l'accès le plus complet à l'historique d'un utilisateur sans authentification ?",options:["Facebook","LinkedIn","Reddit","Instagram"],correct:2,explanation:"Reddit est pseudo-anonyme mais très transparent : l'historique complet des posts et commentaires d'un utilisateur est accessible publiquement, révélant centres d'intérêt, opinions, localisation, et horaires d'activité."}]},{id:"l4-2",title:"LinkedIn : organigrammes & hiérarchies",content:`
<h2>LinkedIn : la plus grande base RH du monde</h2>
<p>Pour un analyste OSINT, LinkedIn est une mine d'or inépuisable. C'est un annuaire mondial de professionnels où les gens publient <em>volontairement</em> leur parcours, leurs compétences, et leur réseau.</p>

<h3>Intelligence extractible de LinkedIn</h3>
<ul>
<li><strong>Organigramme :</strong> Identifier la hiérarchie (CEO → VP → Directors → Managers)</li>
<li><strong>Stack technique :</strong> Les compétences listées par les développeurs révèlent les technologies</li>
<li><strong>Cibles de spear-phishing :</strong> Identifier les personnes clés (RH, finance, IT)</li>
<li><strong>Historique de carrière :</strong> Mouvements de personnel (arrivées, départs, restructurations)</li>
<li><strong>Veille concurrentielle :</strong> Qui recrute dans quel domaine ?</li>
</ul>

<h3>Google Dorks pour LinkedIn</h3>
<pre><code class="language-text"># Tous les profils d'une entreprise
site:linkedin.com/in "AcmeCorp"

# Identifier le DSI / CISO
site:linkedin.com/in "AcmeCorp" ("CISO" OR "DSI" OR "Chief Information")

# Personnel IT (pour identifier la stack)
site:linkedin.com/in "AcmeCorp" ("DevOps" OR "SRE" OR "Administrateur Système")

# Anciens employés (peuvent parler plus librement)
site:linkedin.com/in "ex-AcmeCorp" OR "ancien" "AcmeCorp"</code></pre>

<h3>linkedin2username</h3>
<p>Outil qui génère des listes de noms d'utilisateurs à partir des profils LinkedIn d'une entreprise :</p>
<pre><code class="language-bash"># Génère des formats d'email probables
# prenom.nom@acmecorp.com
# p.nom@acmecorp.com
# pnom@acmecorp.com
python3 linkedin2username.py -c "AcmeCorp" -d acmecorp.com</code></pre>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ LinkedIn et la légalité</h3><p class="text-sm">Le scraping massif de LinkedIn viole leurs ToS et peut entraîner des poursuites. En Europe, le RGPD s'applique même aux données publiques LinkedIn. Utilisez-le de manière proportionnée dans un cadre Red Team contractuel, avec un compte sandbox dédié. Ne jamais utiliser votre compte personnel.</p></div></div>
      `,quiz:[{id:"q4-2-1",question:"Pourquoi les compétences listées par les employés sur LinkedIn sont-elles utiles en OSINT technique ?",options:["Elles donnent le mot de passe des systèmes","Elles révèlent la stack technique de l'entreprise (langages, outils, frameworks)","Elles indiquent le salaire de l'employé","Elles n'ont aucune utilité en OSINT"],correct:1,explanation:"Si 15 développeurs d'AcmeCorp listent 'Kubernetes', 'AWS', et 'PostgreSQL' dans leurs compétences, on peut déduire la stack technique de l'entreprise avec un haut degré de confiance."}]},{id:"l4-3",title:"Instagram & Facebook : analyse visuelle",content:`
<h2>Les images parlent plus que les mots</h2>
<p>Instagram et Facebook sont des plateformes visuelles où les utilisateurs partagent leur quotidien en images. Pour l'analyste OSINT, ces images sont des sources d'intelligence extraordinaires.</p>

<h3>Intelligence extractible d'Instagram</h3>
<ul>
<li><strong>Localisation :</strong> Posts géotaggés, stories avec lieu, géolocalisation visuelle</li>
<li><strong>Cercle social :</strong> Photos taguées, commentaires, followers mutuels</li>
<li><strong>Mode de vie :</strong> Voyages, restaurants, véhicules, animaux</li>
<li><strong>Routine :</strong> Horaires de publication, lieux récurrents</li>
<li><strong>Employeur :</strong> Photos de bureau, badge, uniforme, logo visible</li>
</ul>

<h3>Outils d'extraction Instagram</h3>

<h4>Instaloader</h4>
<pre><code class="language-bash"># Télécharger tous les posts publics d'un profil
instaloader profile target_username

# Télécharger avec métadonnées
instaloader --metadata-json profile target_username

# Télécharger les stories (nécessite un login)
instaloader --login=sock_puppet_account --stories target_username</code></pre>

<h4>Analyse visuelle systématique</h4>
<p>Pour chaque image, l'analyste doit se poser les questions suivantes :</p>
<ol>
<li><strong>OÙ ?</strong> Indices de localisation (panneaux, paysage, architecture)</li>
<li><strong>QUAND ?</strong> Ombres, lumière, végétation saisonnière, timestamp</li>
<li><strong>QUI ?</strong> Personnes présentes, tags, mentions</li>
<li><strong>QUOI ?</strong> Objets révélateurs (badge, uniforme, document visible)</li>
<li><strong>POURQUOI ?</strong> Contexte de la publication (événement, vacances, travail)</li>
</ol>

<h3>Facebook — la mémoire sociale</h3>
<ul>
<li><strong>Graph Search (limité mais utile) :</strong> Recherche d'amis, de likes, de groupes</li>
<li><strong>Pages d'entreprise :</strong> Événements, avis, photos taguées</li>
<li><strong>Marketplace :</strong> Localisation approximative du vendeur</li>
<li><strong>Groupes :</strong> Appartenance à des communautés révélatrices</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🔍 Focus : le badge d'entreprise</h3><p class="text-sm">Une selfie avec un badge d'entreprise visible peut révéler : le format du badge (code-barres, QR, puce RFID), le logo, le format du nom d'employé, et parfois le numéro de matricule. Toutes ces informations sont exploitables pour du pretexting ou de la création de faux badges.</p></div></div>
      `,quiz:[{id:"q4-3-1",question:"Quels sont les 5 axes d'analyse systématique d'une image en SOCMINT ?",options:["Résolution, Taille, Format, Couleur, Compression","Où, Quand, Qui, Quoi, Pourquoi","Auteur, Source, Date, Licence, Plateforme","Luminosité, Contraste, Saturation, Netteté, Bruit"],correct:1,explanation:"Les 5W (Where, When, Who, What, Why) sont le cadre d'analyse standard pour extraire le maximum d'intelligence d'une image : localisation, temporalité, identités, objets, et contexte."}]},{id:"l4-4",title:"X / Twitter : cartographie de communautés",content:`
<h2>X/Twitter : le graphe social en temps réel</h2>
<p>X (anciennement Twitter) est unique en OSINT grâce à son modèle majoritairement public et sa dimension conversationnelle en temps réel.</p>

<h3>Données OSINT exploitables sur X</h3>
<ul>
<li><strong>Bio :</strong> Lieu déclaré, liens, description, employeur</li>
<li><strong>Tweets :</strong> Opinions, centres d'intérêt, connexions, habitudes</li>
<li><strong>Followers/Suivis :</strong> Cartographie du réseau d'influence</li>
<li><strong>Likes :</strong> Affinités invisibles (les likes étaient publics jusqu'en 2024)</li>
<li><strong>Listes :</strong> Appartenance à des listes thématiques</li>
<li><strong>Réponses et mentions :</strong> Interactions révèlent le cercle proche</li>
</ul>

<h3>Opérateurs de recherche avancée X</h3>
<pre><code class="language-text"># Tweets d'un utilisateur contenant un mot spécifique
from:target_user "confidentiel"

# Tweets mentionnant un utilisateur
to:target_user OR @target_user

# Tweets géolocalisés dans un rayon
geocode:48.8566,2.3522,10km

# Tweets avec médias (photos/vidéos)
from:target_user filter:media

# Tweets contenant des liens
from:target_user filter:links

# Tweets dans une période
from:target_user since:2024-01-01 until:2024-06-30

# Combinaison puissante
(from:target_user) ("mot de passe" OR "credential" OR "oops") since:2024-01-01</code></pre>

<h3>Analyse de communautés</h3>
<p>La cartographie de communautés consiste à identifier les clusters d'utilisateurs qui interagissent entre eux. Cela révèle :</p>
<ul>
<li>Les <strong>influenceurs</strong> d'un domaine (qui est le plus retweeté ?)</li>
<li>Les <strong>chambres d'écho</strong> (groupes qui ne dialoguent qu'entre eux)</li>
<li>Les <strong>ponts</strong> entre communautés (utilisateurs qui relient deux mondes)</li>
<li>Les <strong>comptes de propagande</strong> (comportement anormal, création récente, activité intense)</li>
</ul>
      `,quiz:[{id:"q4-4-1",question:"Quel opérateur de recherche X permet de trouver les tweets géolocalisés dans un rayon autour d'un point ?",options:["location:lat,long,radius","geocode:lat,long,radius","near:city within:10km","geo:lat,long,radius"],correct:1,explanation:"L'opérateur geocode: de X/Twitter accepte le format geocode:latitude,longitude,rayon (ex: geocode:48.8566,2.3522,10km pour Paris) et retourne les tweets géolocalisés dans cette zone."}]},{id:"l4-5",title:"Telegram & communautés fermées",content:`
<h2>Telegram : le réseau des communautés alternatives</h2>
<p>Telegram est devenu un acteur central de l'écosystème OSINT en raison de son modèle hybride : des canaux publics accessibles à tous, et des groupes privés nécessitant une invitation. C'est un lieu de choix pour la CTI (Cyber Threat Intelligence).</p>

<h3>Structure de Telegram</h3>
<ul>
<li><strong>Canaux publics :</strong> Diffusion one-to-many. Tout le monde peut lire. Indexables.</li>
<li><strong>Groupes publics :</strong> Conversations ouvertes. Jusqu'à 200 000 membres.</li>
<li><strong>Groupes privés :</strong> Accessibles uniquement sur invitation. Non indexés.</li>
<li><strong>Bots :</strong> Programmes automatisés interactifs (recherche, notifications, etc.).</li>
</ul>

<h3>Outils OSINT pour Telegram</h3>

<h4>Telethon (Python MTProto)</h4>
<pre><code class="language-python"># Exemple de collecte de messages d'un canal public
from telethon import TelegramClient

api_id = 'VOTRE_API_ID'
api_hash = 'VOTRE_API_HASH'

client = TelegramClient('session', api_id, api_hash)

async def main():
    await client.start()
    channel = await client.get_entity('nom_du_canal')
    async for message in client.iter_messages(channel, limit=100):
        print(f"{message.date}: {message.text}")

import asyncio
asyncio.run(main())</code></pre>

<h4>Telerecon</h4>
<p>Framework complet de surveillance et cartographie des relations entre utilisateurs Telegram. Peut synchroniser les contacts via un sock puppet pour démasquer des numéros de téléphone.</p>

<h3>Intérêt CTI de Telegram</h3>
<ul>
<li><strong>Canaux de groupes APT :</strong> Certains groupes hacktivistes communiquent publiquement sur Telegram</li>
<li><strong>Marketplaces :</strong> Vente de données volées, accès compromis, exploit kits</li>
<li><strong>Propagande :</strong> Canaux de désinformation géopolitique</li>
<li><strong>Veille :</strong> Alertes en temps réel sur des incidents de sécurité</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🛡️ OPSEC critique Telegram</h3><p class="text-sm">Votre numéro de téléphone est votre identifiant Telegram. Ne jamais utiliser votre numéro personnel. Utilisez un numéro jetable (SIM prépayée) dédié à l'investigation, sur un appareil séparé ou une VM.</p></div></div>
      `,quiz:[{id:"q4-5-1",question:"Pourquoi est-il critique de ne pas utiliser son numéro personnel sur Telegram lors d'une investigation ?",options:["Telegram est trop lent avec un numéro personnel","Le numéro de téléphone est l'identifiant principal sur Telegram et peut être exposé aux cibles","Telegram ne fonctionne qu'avec des numéros professionnels","Il n'y a aucun risque à utiliser son numéro personnel"],correct:1,explanation:"Sur Telegram, le numéro de téléphone est l'identifiant de base. Si vous rejoignez un groupe surveillé, d'autres membres pourraient potentiellement voir votre numéro ou l'obtenir via des techniques de synchronisation de contacts."}]},{id:"l4-6",title:"Graphes sociaux & analyse d'interactions",content:`
<h2>Visualiser les réseaux invisibles</h2>
<p>L'analyse de graphes sociaux transforme des listes de connexions en visualisations exploitables. C'est la différence entre "connaître les amis de quelqu'un" et "comprendre la structure de pouvoir d'un groupe".</p>

<h3>Concepts fondamentaux des graphes</h3>
<ul>
<li><strong>Noeud :</strong> Une entité (personne, compte, page, groupe)</li>
<li><strong>Arête :</strong> Une relation (suit, aime, mentionne, répond à)</li>
<li><strong>Degré :</strong> Nombre de connexions d'un noeud (influence brute)</li>
<li><strong>Centralité d'intermédiarité (betweenness) :</strong> Mesure à quel point un noeud sert de "pont" entre des groupes — les noeuds à haute betweenness sont des cibles de choix pour l'ingénierie sociale</li>
<li><strong>Cluster :</strong> Groupe de noeuds fortement interconnectés</li>
</ul>

<h3>Maltego — l'outil de graphe OSINT</h3>
<p>Maltego Community Edition permet de :</p>
<ul>
<li>Créer des graphes de relations à partir de données OSINT</li>
<li>Exécuter des "transforms" automatisées (email → domaine → IP → ASN)</li>
<li>Pivoter entre différents types d'entités (personnes, domaines, IPs, emails)</li>
<li>Visualiser les clusters et identifier les noeuds centraux</li>
</ul>

<h3>Types d'analyse de graphe</h3>
<table>
<thead><tr><th>Analyse</th><th>Question</th><th>Application</th></tr></thead>
<tbody>
<tr><td><strong>Centralité</strong></td><td>Qui est le plus connecté/influent ?</td><td>Identifier le leader d'un groupe militant</td></tr>
<tr><td><strong>Clusters</strong></td><td>Quels sous-groupes existent ?</td><td>Cartographier les factions d'une communauté</td></tr>
<tr><td><strong>Ponts</strong></td><td>Qui relie deux groupes séparés ?</td><td>Identifier les informateurs ou agents doubles</td></tr>
<tr><td><strong>Périphérie</strong></td><td>Qui est isolé ?</td><td>Identifier les comptes fantômes ou bots</td></tr>
<tr><td><strong>Temporelle</strong></td><td>Comment le réseau évolue ?</td><td>Détecter des campagnes coordonnées</td></tr>
</tbody>
</table>

<h3>Détection de comportement inauthentique</h3>
<p>Les réseaux de bots et les opérations d'influence présentent des patterns reconnaissables :</p>
<ul>
<li><strong>Création simultanée :</strong> Centaines de comptes créés le même jour</li>
<li><strong>Activité coordonnée :</strong> Mêmes contenus partagés à quelques secondes d'intervalle</li>
<li><strong>Ratio followers/following anormal</strong></li>
<li><strong>Noms aléatoires ou patterns générés</strong></li>
<li><strong>Absence d'interactions organiques</strong></li>
</ul>
      `,quiz:[{id:"q4-6-1",question:"En analyse de graphe social, qu'identifie la 'centralité d'intermédiarité' (betweenness centrality) ?",options:["Les comptes les plus anciens du réseau","Les noeuds qui servent de pont entre des groupes distincts","Les comptes avec le plus de followers","Les messages les plus partagés"],correct:1,explanation:"La betweenness centrality mesure la fréquence à laquelle un noeud se trouve sur le plus court chemin entre deux autres noeuds. Les noeuds à haute betweenness sont des 'ponts' critiques — les supprimer fragmente le réseau."}]}]},e0={id:"m5",title:"Phase 5 — Méthodologie d'Enquête",icon:"BrainCog",lessons:[{id:"l5-1",title:"Cycle du renseignement",content:`
<h2>La structure qui sépare l'amateur de l'analyste</h2>
<p>Le <strong>cycle du renseignement</strong> est le cadre méthodologique universel utilisé par les services de renseignement, les forces armées, et les cabinets de conseil en intelligence économique. Sans ce cycle, vous ne faites pas de l'OSINT — vous surfez sur Internet.</p>

<h3>Les 5 phases du cycle</h3>

<h4>1. Direction (Planification)</h4>
<p>Définir <strong>ce qu'on cherche</strong> et <strong>pourquoi</strong>. C'est la phase la plus critique et la plus souvent bâclée.</p>
<ul>
<li><strong>PIR (Priority Intelligence Requirements) :</strong> Les questions auxquelles le renseignement doit répondre</li>
<li><strong>SIR (Specific Intelligence Requirements) :</strong> Les sous-questions opérationnelles</li>
<li><strong>Périmètre :</strong> Limites géographiques, temporelles, techniques</li>
<li><strong>Contraintes :</strong> Temps, budget, légalité, OPSEC</li>
</ul>

<h4>2. Collecte</h4>
<p>Rassembler les données brutes depuis les sources identifiées. Passif d'abord, semi-actif ensuite si autorisé.</p>
<ul>
<li>Sources ouvertes (web, réseaux sociaux, registres)</li>
<li>Sources techniques (DNS, Shodan, CT logs)</li>
<li>Sources humaines (HUMINT — dans un cadre Red Team uniquement)</li>
</ul>

<h4>3. Traitement</h4>
<p>Organiser, nettoyer et structurer les données collectées :</p>
<ul>
<li>Éliminer les doublons et les faux positifs</li>
<li>Normaliser les formats (dates, noms, identifiants)</li>
<li>Classer par pertinence et fiabilité (notation Admiralty)</li>
<li>Stocker dans une base structurée (tableur, Maltego, Obsidian)</li>
</ul>

<h4>4. Analyse</h4>
<p>Transformer les données en intelligence. C'est ici que la valeur ajoutée de l'analyste humain est irremplaçable :</p>
<ul>
<li>Identifier les patterns et les anomalies</li>
<li>Formuler et tester des hypothèses (ACH)</li>
<li>Évaluer les lacunes (que ne sait-on PAS ?)</li>
<li>Produire des jugements analytiques (assess, estimate, evaluate)</li>
</ul>

<h4>5. Diffusion</h4>
<p>Livrer l'intelligence au bon format, au bon destinataire, au bon moment :</p>
<ul>
<li>Rapport technique (pour l'équipe sécurité)</li>
<li>Rapport exécutif (pour la direction)</li>
<li>Briefing oral (pour les décideurs pressés)</li>
<li>Alerte en temps réel (pour les menaces imminentes)</li>
</ul>

<pre><code class="language-text">Direction → Collecte → Traitement → Analyse → Diffusion
    ↑                                              │
    └──────────── Feedback/Réévaluation ←──────────┘</code></pre>
<p>Le cycle est <strong>itératif</strong> : le feedback du destinataire déclenche un nouveau cycle.</p>
      `,quiz:[{id:"q5-1-1",question:"Quelle est la phase la plus critique du cycle du renseignement ?",options:["La collecte, car il faut rassembler un maximum de données","La diffusion, car elle détermine l'impact","La direction (planification), car elle définit ce qu'on cherche et pourquoi","L'analyse, car elle transforme les données en intelligence"],correct:2,explanation:"La direction est la phase la plus critique : elle définit les PIR (Priority Intelligence Requirements). Sans une question bien formulée, toute la collecte et l'analyse qui suivent seront du bruit. Un bon PIR = un bon renseignement."}]},{id:"l5-2",title:"Hypothèses & falsification",content:`
<h2>Penser comme un scientifique, pas comme un détective de fiction</h2>
<p>La méthode scientifique est le meilleur antidote contre les biais cognitifs en OSINT. Un analyste ne cherche pas à <em>prouver</em> qu'il a raison — il cherche à <em>falsifier</em> ses hypothèses.</p>

<h3>Formulation d'hypothèses</h3>
<p>Une hypothèse OSINT doit être :</p>
<ul>
<li><strong>Spécifique :</strong> "Le compte @jd42 sur X appartient à Jean Dupont, DSI d'AcmeCorp" (pas "quelqu'un de chez AcmeCorp")</li>
<li><strong>Falsifiable :</strong> Il doit exister un test qui pourrait la réfuter</li>
<li><strong>Basée sur des observables :</strong> Elle découle de données, pas d'intuitions</li>
</ul>

<h3>ACH — Analysis of Competing Hypotheses</h3>
<p>Développée par Richards Heuer (CIA), l'ACH est la technique analytique structurée la plus utilisée dans le renseignement :</p>
<ol>
<li>Formuler toutes les hypothèses plausibles (H1, H2, H3...)</li>
<li>Lister toutes les preuves collectées (E1, E2, E3...)</li>
<li>Construire une matrice hypothèses × preuves</li>
<li>Pour chaque case : la preuve est-elle <strong>cohérente (C)</strong>, <strong>incohérente (I)</strong>, ou <strong>neutre (N)</strong> avec l'hypothèse ?</li>
<li>L'hypothèse avec le <strong>moins d'incohérences</strong> est la plus probable</li>
</ol>

<h4>Exemple de matrice ACH</h4>
<pre><code class="language-text">                    H1: @jd42 = Dupont   H2: Homonyme   H3: Faux profil
E1: Même entreprise       C                   N              I
E2: Même ville            C                   C              N
E3: Même photo            C                   I              C
E4: Style différent       I                   C              C
E5: Email lié             C                   I              N
───────────────────────────────────────────────────────────
Incohérences:             1                   2              1</code></pre>

<h3>Le piège de la confirmation circulaire</h3>
<p>Danger fréquent : utiliser la même source pour formuler ET confirmer une hypothèse. Si le profil X de @jd42 mentionne "AcmeCorp" et que votre seule preuve que @jd42 = Dupont est "il travaille chez AcmeCorp", vous avez une boucle — pas une preuve.</p>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🧠 Règle fondamentale</h3><p class="text-sm">Ne tombez jamais amoureux de votre hypothèse. Le rôle de l'analyste n'est pas d'avoir raison — c'est de réduire l'incertitude. Si les preuves contredisent votre hypothèse préférée, abandonnez-la sans regret.</p></div></div>
      `,quiz:[{id:"q5-2-1",question:"Dans la méthode ACH, comment identifie-t-on l'hypothèse la plus probable ?",options:["C'est celle qui a le plus de preuves cohérentes","C'est celle qui a le moins d'incohérences avec les preuves disponibles","C'est celle qui semble la plus logique intuitivement","C'est toujours la première formulée"],correct:1,explanation:"La logique de l'ACH repose sur la falsification : on ne cherche pas l'hypothèse la mieux confirmée, mais celle la moins contredite. C'est un renversement de logique fondamental emprunté à la méthode scientifique."}]},{id:"l5-3",title:"Corrélation vs causalité",content:`
<h2>Le piège logique le plus dangereux</h2>
<p>La confusion entre corrélation et causalité est la source d'erreurs analytiques les plus graves en OSINT. Deux événements peuvent être liés sans que l'un ne cause l'autre.</p>

<h3>Définitions</h3>
<ul>
<li><strong>Corrélation :</strong> Deux variables évoluent ensemble (A et B se produisent ensemble)</li>
<li><strong>Causalité :</strong> A provoque directement B</li>
<li><strong>Coïncidence :</strong> A et B se produisent ensemble par hasard</li>
<li><strong>Variable confondante :</strong> C provoque à la fois A et B, créant une fausse impression de lien A→B</li>
</ul>

<h3>Exemples en OSINT</h3>
<table>
<thead><tr><th>Observation</th><th>Conclusion hâtive</th><th>Réalité possible</th></tr></thead>
<tbody>
<tr><td>Deux comptes publient aux mêmes heures</td><td>"C'est la même personne"</td><td>Ils sont dans le même fuseau horaire et travaillent de nuit</td></tr>
<tr><td>Un employé consulte des forums de hacking</td><td>"Il prépare une attaque interne"</td><td>Il fait de la veille sécuritaire dans le cadre de son travail</td></tr>
<tr><td>Un suspect a voyagé dans le même pays qu'une cyberattaque</td><td>"Il est impliqué"</td><td>Des millions de personnes voyagent chaque jour dans ce pays</td></tr>
</tbody>
</table>

<h3>Tests de causalité</h3>
<p>Avant de conclure à un lien causal, vérifiez :</p>
<ol>
<li><strong>Temporalité :</strong> A se produit-il AVANT B ? (nécessaire mais pas suffisant)</li>
<li><strong>Mécanisme :</strong> Existe-t-il un mécanisme plausible reliant A à B ?</li>
<li><strong>Exclusion :</strong> A-t-on éliminé les variables confondantes ?</li>
<li><strong>Reproducibilité :</strong> Le lien se vérifie-t-il dans d'autres contextes ?</li>
<li><strong>Dose-réponse :</strong> Plus de A entraîne-t-il plus de B ?</li>
</ol>

<h3>Formulation dans les rapports</h3>
<p>Le langage analytique doit refléter le niveau de certitude :</p>
<pre><code class="language-text">Certitude élevée  : "Nous évaluons que..." / "Les preuves indiquent..."
Certitude moyenne : "Il est probable que..." / "Les indices suggèrent..."
Certitude faible  : "Il est possible que..." / "On ne peut pas exclure..."
Inconnu           : "Les données sont insuffisantes pour conclure"</code></pre>
      `,quiz:[{id:"q5-3-1",question:"Deux comptes Twitter publient systématiquement aux mêmes heures. Peut-on conclure qu'il s'agit de la même personne ?",options:["Oui, c'est une preuve solide","Non, c'est une corrélation qui peut s'expliquer par un fuseau horaire commun ou une simple coïncidence","Oui, si les contenus sont similaires","Seulement si les comptes ont moins de 100 followers"],correct:1,explanation:"Des horaires similaires sont une corrélation, pas une preuve de causalité. Des milliers de personnes dans un même fuseau horaire peuvent avoir des patterns d'activité similaires. Il faut des preuves supplémentaires (email commun, même IP, même style d'écriture)."}]},{id:"l5-4",title:"Détection de désinformation",content:`
<h2>Séparer le signal du bruit dans un monde de fake news</h2>
<p>L'analyste OSINT doit être capable de détecter la désinformation, la mésinformation et la manipulation — tant dans les sources qu'il utilise que dans les phénomènes qu'il observe.</p>

<h3>Taxonomie</h3>
<ul>
<li><strong>Mésinformation :</strong> Information fausse diffusée sans intention de nuire (erreur, rumeur)</li>
<li><strong>Désinformation :</strong> Information fausse diffusée intentionnellement pour tromper</li>
<li><strong>Malinformation :</strong> Information vraie diffusée pour nuire (fuite de vie privée, chantage)</li>
</ul>

<h3>Le framework SIFT</h3>
<p>Développé par Mike Caulfield, le framework <strong>SIFT</strong> est une méthode rapide de vérification :</p>
<ol>
<li><strong>S — Stop :</strong> Arrêtez-vous avant de partager ou de croire. Résistez à la réaction émotionnelle.</li>
<li><strong>I — Investigate the source :</strong> Qui publie ? Quelle expertise ? Quel agenda ?</li>
<li><strong>F — Find better coverage :</strong> D'autres sources crédibles rapportent-elles la même chose ?</li>
<li><strong>T — Trace claims :</strong> Remontez à la source originale. L'information a-t-elle été déformée en chaîne ?</li>
</ol>

<h3>Techniques de vérification d'images</h3>
<ul>
<li><strong>Reverse image search :</strong> L'image apparaît-elle dans un autre contexte, à une autre date ?</li>
<li><strong>Analyse EXIF :</strong> Les métadonnées sont-elles cohérentes avec le contexte revendiqué ?</li>
<li><strong>FotoForensics :</strong> Détection de manipulation (clonage, suppression) via Error Level Analysis (ELA)</li>
<li><strong>InVID/WeVerify :</strong> Plugin de fact-checking pour vérifier les vidéos et images</li>
</ul>

<h3>Indicateurs de comptes de propagande</h3>
<ul>
<li>Compte créé récemment avec activité immédiate et intense</li>
<li>Publication 24h/24 (suggère l'automatisation)</li>
<li>Contenu exclusivement partisan, sans nuance</li>
<li>Amplification mutuelle entre comptes similaires</li>
<li>Photos de profil générées par IA (vérification via AI-generated face detectors)</li>
<li>Bio vague ou contradictoire</li>
</ul>
      `,quiz:[{id:"q5-4-1",question:"Quelle est la première étape du framework SIFT pour vérifier une information ?",options:["Investigate — chercher la source","Stop — résister à la réaction émotionnelle avant d'agir","Find — trouver d'autres sources","Trace — remonter à l'origine"],correct:1,explanation:"Le 'S' de SIFT signifie Stop : la première chose à faire face à une information est de résister à la réaction émotionnelle immédiate. Les fake news sont conçues pour provoquer des réactions viscérales qui court-circuitent l'esprit critique."}]},{id:"l5-5",title:"Rédaction d'un rapport d'intelligence",content:`
<h2>L'art de transformer l'analyse en action</h2>
<p>Un rapport d'intelligence qui ne déclenche aucune action est un échec. La rédaction du rapport est une compétence à part entière — aussi importante que l'analyse elle-même.</p>

<h3>Structure standard d'un rapport OSINT</h3>

<h4>1. Résumé exécutif (Executive Summary)</h4>
<p>1 page maximum. Destiné aux décideurs pressés. Contient : le contexte en 2 phrases, les conclusions majeures, et les recommandations prioritaires. Si le lecteur ne lit que cette page, il doit comprendre l'essentiel.</p>

<h4>2. Contexte et périmètre</h4>
<ul>
<li>PIR d'origine / question posée par le commanditaire</li>
<li>Périmètre défini (domaines, personnes, période)</li>
<li>Méthodologie employée (outils, sources)</li>
<li>Limitations et réserves</li>
</ul>

<h4>3. Analyse détaillée</h4>
<p>Le corps du rapport. Organisé par thème ou par question :</p>
<ul>
<li>Présentation des faits (preuves sourcées, captures d'écran, URLs)</li>
<li>Analyse et interprétation (jugements analytiques avec niveau de confiance)</li>
<li>Hypothèses alternatives considérées</li>
<li>Lacunes identifiées (ce qu'on ne sait pas)</li>
</ul>

<h4>4. Conclusions et recommandations</h4>
<ul>
<li>Conclusions factuelles (ce qu'on a établi)</li>
<li>Évaluation des risques (matrice impact × probabilité)</li>
<li>Recommandations actionnables et priorisées</li>
</ul>

<h4>5. Annexes</h4>
<ul>
<li>Preuves brutes (captures d'écran horodatées)</li>
<li>Graphes et visualisations</li>
<li>IOCs (Indicators of Compromise) le cas échéant</li>
<li>Méthodologie détaillée et outils utilisés</li>
</ul>

<h3>Les 5 règles d'or de la rédaction</h3>
<ol>
<li><strong>Séparer faits et opinions :</strong> "Le compte a été créé le 15 mars" (fait) vs "Il est probable que ce compte soit un sock puppet" (jugement)</li>
<li><strong>Sourcer systématiquement :</strong> Chaque affirmation est liée à une preuve en annexe</li>
<li><strong>Utiliser le vocabulaire analytique :</strong> Évaluer, estimer, juger — jamais "je pense que"</li>
<li><strong>Être concis :</strong> Un rapport de 15 pages bien structuré vaut mieux qu'un dump de 200 pages</li>
<li><strong>Anticiper les questions :</strong> Si le lecteur va se demander "mais pourquoi ?", la réponse doit être dans le rapport</li>
</ol>
      `,quiz:[{id:"q5-5-1",question:"Quelle section d'un rapport OSINT est la plus importante pour un décideur pressé ?",options:["Les annexes techniques","L'analyse détaillée","Le résumé exécutif (Executive Summary)","La méthodologie"],correct:2,explanation:"Le résumé exécutif est conçu pour les décideurs qui n'ont pas le temps de lire le rapport complet. Il doit contenir l'essentiel en une page : contexte, conclusions majeures, et recommandations prioritaires."}]},{id:"l5-6",title:"Présentation décisionnelle",content:`
<h2>Le briefing : l'OSINT au service de la décision</h2>
<p>Savoir analyser ne suffit pas si vous ne savez pas <strong>communiquer efficacement</strong>. Le briefing oral est souvent le moment décisif où votre travail influence (ou non) une décision.</p>

<h3>Format BLUF (Bottom Line Up Front)</h3>
<p>Inspiré du format militaire, le BLUF consiste à commencer par la conclusion avant les détails :</p>
<pre><code class="language-text">❌ Mauvais : "Nous avons analysé 47 sources, croisé 12 bases de données,
   et après 3 semaines d'investigation, nous avons identifié que..."

✅ Bon (BLUF) : "L'entreprise AcmeCorp expose 4 services critiques
   non patchés sur Internet, dont un RDP accessible sans MFA.
   Risque d'intrusion élevé. Voici les détails et nos recommandations."</code></pre>

<h3>La règle du 10-20-30 (Kawasaki)</h3>
<ul>
<li><strong>10 slides maximum</strong></li>
<li><strong>20 minutes de présentation</strong></li>
<li><strong>30 points minimum pour le texte</strong></li>
</ul>

<h3>Adapter le message à l'audience</h3>
<table>
<thead><tr><th>Audience</th><th>Attentes</th><th>Format</th></tr></thead>
<tbody>
<tr><td><strong>COMEX / Direction</strong></td><td>Impact business, risques, coûts</td><td>Executive Summary, métriques, recommandations priorisées</td></tr>
<tr><td><strong>RSSI / SOC</strong></td><td>Détails techniques, IOCs, actions</td><td>Rapport technique complet, feeds, playbooks</td></tr>
<tr><td><strong>Juridique</strong></td><td>Conformité, preuves, chaîne de custody</td><td>Rapport sourcé, annexes certifiées, timeline</td></tr>
<tr><td><strong>RH</strong></td><td>Impact humain, sensibilisation</td><td>Scénarios concrets, recommandations formation</td></tr>
</tbody>
</table>

<h3>Gestion des questions difficiles</h3>
<ul>
<li><strong>"Êtes-vous sûr à 100% ?"</strong> → "Nos conclusions sont basées sur X sources indépendantes. Le niveau de confiance est [élevé/moyen/faible] pour les raisons suivantes..."</li>
<li><strong>"Pouvez-vous garantir que nous ne sommes pas compromis ?"</strong> → "L'OSINT identifie l'exposition visible. Pour une garantie d'absence de compromission, un audit intrusif (pentest) est nécessaire."</li>
<li><strong>"Combien ça coûte de corriger ?"</strong> → Préparez toujours une estimation grossière des coûts et relayez vers les équipes opérationnelles pour le chiffrage précis.</li>
</ul>
      `,quiz:[{id:"q5-6-1",question:"Que signifie le format BLUF (Bottom Line Up Front) ?",options:["Mettre les graphiques en bas de page","Commencer par la conclusion avant les détails","Utiliser uniquement des bullet points","Présenter les résultats dans l'ordre chronologique"],correct:1,explanation:"BLUF (Bottom Line Up Front) est un format de communication issu du monde militaire : on commence par la conclusion/recommandation, puis on développe les détails. L'audience sait immédiatement l'essentiel."}]}]},t0={id:"m6",title:"Phase 6 — Ingénierie Sociale",icon:"Drama",lessons:[{id:"l6-1",title:"Psychologie de l'influence (Cialdini)",content:`
<h2>Les leviers de la manipulation humaine</h2>
<p>L'ingénierie sociale exploite les automatismes psychologiques humains. Comprendre ces mécanismes est la première étape — que vous soyez en attaque (Red Team) ou en défense (sensibilisation).</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Contexte pédagogique</h3><p class="text-sm">Ce chapitre aborde les techniques de manipulation dans un cadre strict de Red Teaming, de sensibilisation à la sécurité, et de cyber-défense. L'objectif est de <strong>comprendre pour prévenir</strong>.</p></div></div>

<h3>Les 7 principes de Cialdini</h3>

<h4>1. Réciprocité</h4>
<p>Un service rendu crée une obligation de retour. L'humain déteste être "en dette".</p>
<p><strong>Exploitation SE :</strong> "Je vous ai aidé la semaine dernière avec votre problème d'imprimante. Pourriez-vous juste me donner accès temporairement à...?"</p>

<h4>2. Engagement et cohérence</h4>
<p>Une fois engagée dans une direction, une personne tend à rester cohérente avec ses choix précédents.</p>
<p><strong>Exploitation SE :</strong> "Vous avez dit que la sécurité est votre priorité. C'est exactement pourquoi j'ai besoin de vérifier vos identifiants — c'est la procédure de sécurité."</p>

<h4>3. Preuve sociale</h4>
<p>Les gens imitent le comportement du groupe, surtout en situation d'incertitude.</p>
<p><strong>Exploitation SE :</strong> "Tous vos collègues du département ont déjà mis à jour leurs mots de passe. Il ne reste plus que vous."</p>

<h4>4. Autorité</h4>
<p>On obéit aux figures d'autorité — même perçues artificiellement (titre, uniforme, assurance).</p>
<p><strong>Exploitation SE :</strong> "Bonjour, c'est M. Laurent du cabinet d'audit mandaté par votre direction. Nous procédons à une vérification urgente..."</p>

<h4>5. Sympathie</h4>
<p>On dit oui plus facilement aux personnes qu'on apprécie ou qui nous ressemblent.</p>
<p><strong>Exploitation SE :</strong> Construire un rapport (points communs, humour, compliments) avant de formuler la demande.</p>

<h4>6. Rareté</h4>
<p>Ce qui est rare ou limité dans le temps est perçu comme plus précieux.</p>
<p><strong>Exploitation SE :</strong> "Cette offre de mise à jour gratuite expire dans 2 heures. Cliquez ici pour ne pas perdre votre accès."</p>

<h4>7. Unité</h4>
<p>L'appartenance à un groupe commun (famille, entreprise, communauté) augmente la confiance.</p>
<p><strong>Exploitation SE :</strong> "En tant que collègue du même service, je me permets de vous demander..."</p>

<h3>Biais cognitifs exploités en SE</h3>
<table>
<thead><tr><th>Biais</th><th>Mécanisme</th><th>Exemple d'exploitation</th></tr></thead>
<tbody>
<tr><td><strong>Urgence</strong></td><td>Pression temporelle réduit l'esprit critique</td><td>"Votre compte sera supprimé dans 1h" → clic impulsif</td></tr>
<tr><td><strong>Normalité</strong></td><td>Situation présentée comme routinière</td><td>"C'est juste une vérification de routine" → baisse de garde</td></tr>
<tr><td><strong>Curiosité</strong></td><td>Désir irrésistible de savoir</td><td>"Regardez qui a consulté votre profil" → clic sur lien piégé</td></tr>
<tr><td><strong>Peur</strong></td><td>Réaction émotionnelle court-circuite la logique</td><td>"Activité suspecte sur votre compte" → panique et obéissance</td></tr>
</tbody>
</table>
      `,quiz:[{id:"q6-1-1",question:"Quel principe de Cialdini est exploité quand un phishing affirme 'Tous vos collègues ont déjà mis à jour leurs mots de passe' ?",options:["Réciprocité","Autorité","Preuve sociale","Rareté"],correct:2,explanation:"La preuve sociale pousse les gens à imiter le comportement du groupe. En affirmant que 'tout le monde l'a déjà fait', l'attaquant normalise l'action et réduit les résistances."},{id:"q6-1-2",question:"Pourquoi l'urgence est-elle un levier si puissant en ingénierie sociale ?",options:["Parce que les gens sont naturellement pressés","Parce que la pression temporelle court-circuite la réflexion critique et pousse à l'action impulsive","Parce que les emails urgents sont mieux référencés","Parce que les systèmes de sécurité ne détectent pas les emails urgents"],correct:1,explanation:"L'urgence active le système 1 (pensée rapide et émotionnelle) au détriment du système 2 (pensée lente et analytique), réduisant drastiquement la capacité de la victime à évaluer la légitimité de la demande."}]},{id:"l6-2",title:"Pretexting : construire un scénario",content:`
<h2>L'art de la couverture crédible</h2>
<p>Le <strong>pretexting</strong> consiste à créer un scénario fictif mais crédible pour justifier une interaction avec la cible. C'est la fondation de toute attaque d'ingénierie sociale sophistiquée.</p>

<h3>Anatomie d'un bon prétexte</h3>
<p>Un prétexte efficace repose sur 5 piliers :</p>
<ol>
<li><strong>Plausibilité :</strong> Le scénario doit être réaliste dans le contexte de la cible</li>
<li><strong>Cohérence :</strong> Chaque détail du scénario doit s'imbriquer logiquement</li>
<li><strong>Urgence contrôlée :</strong> Assez d'urgence pour réduire la réflexion, pas assez pour éveiller les soupçons</li>
<li><strong>Connaissance du contexte :</strong> Utiliser des détails réels collectés en OSINT (noms, projets, jargon)</li>
<li><strong>Voie de sortie :</strong> Pouvoir se retirer proprement si le prétexte est questionné</li>
</ol>

<h3>Construction OSINT-driven d'un prétexte</h3>
<pre><code class="language-text">Phase 1 : OSINT (collecte d'informations)
├── LinkedIn → Organigramme, noms, projets en cours
├── Site web → Fournisseurs, partenaires mentionnés
├── Offres d'emploi → Technologies utilisées, challenges
├── Réseaux sociaux → Événements récents, voyages
└── Presse → Actualités de l'entreprise

Phase 2 : Construction du persona
├── Identité : Nom, titre, entreprise (fournisseur réel)
├── Email : Domaine semblable (acme-support.com vs acmecorp.com)
├── Background : LinkedIn du sock puppet cohérent
└── Détails : Numéro de ticket, référence de projet réelle

Phase 3 : Scénario
├── Hook : "Suite à votre migration Microsoft 365..."
├── Contexte : Détails réels qui établissent la crédibilité
├── Demande : Action spécifique et proportionnée
└── Sortie : "Je vous envoie un email de confirmation"</code></pre>

<h3>Prétextes classiques en Red Team</h3>
<table>
<thead><tr><th>Prétexte</th><th>Cible</th><th>Objectif</th></tr></thead>
<tbody>
<tr><td>Support IT interne</td><td>Employés non-tech</td><td>Obtenir des credentials ou installer un outil</td></tr>
<tr><td>Auditeur externe</td><td>Direction, comptabilité</td><td>Obtenir des documents ou accès</td></tr>
<tr><td>Fournisseur / Prestataire</td><td>Service achats, IT</td><td>Installer un équipement piégé</td></tr>
<tr><td>Nouveau collègue</td><td>Accueil, RH</td><td>Obtenir un badge, un poste de travail</td></tr>
<tr><td>Livreur / Coursier</td><td>Accueil physique</td><td>Accès physique au bâtiment</td></tr>
</tbody>
</table>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">⚖️ Encadrement strict</h3><p class="text-sm">Tout exercice de pretexting doit être <strong>explicitement autorisé</strong> dans les RoE (Rules of Engagement) de la mission. Les noms des employés ciblés, les scénarios autorisés, et les limites (jamais d'intimidation, de menace, ou d'exploitation de vulnérabilités personnelles) doivent être définis contractuellement.</p></div></div>
      `,quiz:[{id:"q6-2-1",question:"Quel est le rôle de l'OSINT dans la construction d'un prétexte ?",options:["L'OSINT sert à trouver des vulnérabilités techniques","L'OSINT fournit les détails réels (noms, projets, jargon) qui rendent le prétexte crédible","L'OSINT n'a aucun lien avec le pretexting","L'OSINT sert uniquement à trouver l'email de la cible"],correct:1,explanation:"L'OSINT est la fondation du pretexting : les informations collectées (organigramme, fournisseurs, projets en cours, jargon métier) permettent de construire un scénario ultra-réaliste que la cible ne questionnera pas."}]},{id:"l6-3",title:"Phishing pédagogique",content:`
<h2>Anatomie d'une campagne de phishing contrôlée</h2>
<p>Le phishing reste le vecteur d'attaque n°1 dans le monde. Simuler des campagnes de phishing contrôlées est essentiel pour mesurer et améliorer la résilience d'une organisation.</p>

<h3>GoPhish — Plateforme de simulation</h3>
<p>GoPhish est un framework open-source de campagne de phishing pédagogique :</p>
<pre><code class="language-bash"># Installation
go install github.com/gophish/gophish@latest

# Ou via Docker
docker run -d --name gophish -p 3333:3333 -p 8080:8080 gophish/gophish</code></pre>

<h4>Workflow d'une campagne</h4>
<ol>
<li><strong>Création du template :</strong> Email de phishing réaliste (clone d'un email légitime)</li>
<li><strong>Landing page :</strong> Page de login factice capturant les credentials (données non stockées en production)</li>
<li><strong>Liste de cibles :</strong> Employés autorisés par les RoE</li>
<li><strong>Envoi :</strong> Distribution contrôlée avec tracking (ouvertures, clics, soumissions)</li>
<li><strong>Rapport :</strong> Statistiques détaillées pour le RSSI</li>
</ol>

<h3>Anatomie d'un email de phishing efficace</h3>
<pre><code class="language-text">De: support-it@acme-corp.net (domaine similaire au vrai)
Objet: [ACTION REQUISE] Mise à jour de sécurité — Expiration dans 24h

Bonjour [Prénom],

Suite à la dernière politique de sécurité validée par M. [Nom du RSSI réel],
tous les collaborateurs doivent renouveler leur authentification Microsoft 365.

→ Cliquez ici pour mettre à jour vos accès : [lien piégé]

Cette action est obligatoire avant le [date J+1].
En cas de non-conformité, votre accès sera temporairement suspendu.

Cordialement,
L'équipe IT
AcmeCorp | Service Support Informatique</code></pre>

<h3>Indicateurs de succès d'une campagne</h3>
<table>
<thead><tr><th>Métrique</th><th>Bon résultat</th><th>Alerte</th></tr></thead>
<tbody>
<tr><td>Taux d'ouverture</td><td>< 30%</td><td>> 60%</td></tr>
<tr><td>Taux de clic</td><td>< 10%</td><td>> 30%</td></tr>
<tr><td>Taux de soumission credentials</td><td>< 5%</td><td>> 15%</td></tr>
<tr><td>Taux de signalement (report)</td><td>> 50%</td><td>< 10%</td></tr>
</tbody>
</table>

<h3>Evilginx — Phishing AitM (Niveau Expert)</h3>
<p>Evilginx est un framework de phishing avancé fonctionnant en mode <strong>Adversary-in-the-Middle</strong>. Il intercepte les tokens de session, contournant ainsi le MFA :</p>
<ul>
<li>La victime interagit avec le vrai site via le proxy Evilginx</li>
<li>Le MFA fonctionne normalement (la victime entre son code)</li>
<li>Evilginx capture le cookie de session final</li>
<li>L'attaquant utilise le cookie pour accéder au compte sans MFA</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🔴 OPSEC & destruction</h3><p class="text-sm">Evilginx est extrêmement puissant et sensible. Les RoE doivent spécifier son usage explicitement. L'infrastructure VPS doit être détruite immédiatement après l'exercice. Les données capturées sont chiffrées et remises uniquement au commanditaire.</p></div></div>
      `,quiz:[{id:"q6-3-1",question:"Quel est l'indicateur le plus important de la maturité sécuritaire d'une organisation lors d'une campagne de phishing simulée ?",options:["Le taux d'ouverture des emails","Le taux de clic sur les liens","Le taux de signalement (report) des emails suspects par les employés","Le nombre d'emails envoyés"],correct:2,explanation:"Le taux de signalement est l'indicateur le plus révélateur : il mesure la capacité des employés à détecter ET à réagir correctement face à une tentative de phishing. Un taux > 50% indique une bonne culture de sécurité."}]},{id:"l6-4",title:"Vishing & Smishing",content:`
<h2>L'ingénierie sociale par la voix et le SMS</h2>
<p>Le <strong>vishing</strong> (voice phishing) et le <strong>smishing</strong> (SMS phishing) exploitent des canaux de communication où les défenses techniques sont quasi inexistantes — pas de filtrage anti-phishing, pas de détection comportementale.</p>

<h3>Vishing — l'art de la persuasion orale</h3>

<h4>Pourquoi le vishing est si efficace</h4>
<ul>
<li><strong>Pression en temps réel :</strong> La victime n'a pas le temps de vérifier ou demander conseil</li>
<li><strong>Communication émotionnelle :</strong> La voix transmet urgence, autorité, empathie</li>
<li><strong>Absence de traces :</strong> Pas de lien cliquable à analyser, pas d'email à signaler</li>
<li><strong>Difficulté de vérification :</strong> Vérifier l'identité d'un appelant est presque impossible sur le moment</li>
</ul>

<h4>Scénarios de vishing courants en Red Team</h4>
<ul>
<li><strong>Support technique :</strong> "Bonjour, service IT. Nous voyons une activité anormale sur votre poste. Avez-vous 5 minutes pour un diagnostic ?"</li>
<li><strong>Banque :</strong> "Un virement suspect de 2 500€ est en cours. Pour le bloquer, j'ai besoin de votre code d'authentification."</li>
<li><strong>Direction :</strong> "C'est le bureau de M. le Directeur Général. Il a besoin d'un virement immédiat pour une acquisition confidentielle."</li>
</ul>

<h3>Smishing — SMS de phishing</h3>
<p>Le SMS bénéficie d'un taux d'ouverture de <strong>98%</strong> (vs 20% pour l'email), ce qui en fait un vecteur redoutable :</p>
<pre><code class="language-text">Exemples de smishing :

"[AcmeCorp] Votre session VPN expire dans 30min.
Renouvelez ici : https://acme-vpn.support/renew"

"[Colis] Votre livraison est en attente. Frais de
douane : 2.99€. Payez ici : https://..."

"[Impots] Remboursement de 487€ en attente.
Confirmez vos coordonnées : https://..."</code></pre>

<h3>Défenses contre vishing et smishing</h3>
<ul>
<li><strong>Formation récurrente :</strong> Sensibiliser les employés aux scénarios courants</li>
<li><strong>Procédure de vérification :</strong> Jamais partager d'information sensible par téléphone sans rappeler via le numéro officiel</li>
<li><strong>Mot d'authentification interne :</strong> Phrase secrète pour confirmer l'identité des vrais employés IT</li>
<li><strong>Signalement :</strong> Créer un canal de signalement simple et accessible</li>
</ul>
      `,quiz:[{id:"q6-4-1",question:"Quel est le taux d'ouverture moyen des SMS par rapport aux emails ?",options:["SMS : 30%, Email : 20%","SMS : 98%, Email : 20%","SMS : 50%, Email : 80%","SMS et Email ont le même taux"],correct:1,explanation:"Les SMS ont un taux d'ouverture de ~98% contre ~20% pour les emails, ce qui rend le smishing extrêmement efficace. La quasi-totalité des SMS reçus sont lus dans les minutes qui suivent."}]},{id:"l6-5",title:"Exploitation de la confiance organisationnelle",content:`
<h2>Les failles systémiques de la confiance</h2>
<p>Au-delà des individus, les <strong>organisations elles-mêmes</strong> créent des structures de confiance exploitables. Ce chapitre analyse comment les processus, la culture et la hiérarchie deviennent des vecteurs d'attaque.</p>

<h3>La confiance implicite dans les organisations</h3>
<ul>
<li><strong>Confiance hiérarchique :</strong> "Le DG a demandé" → obéissance sans vérification</li>
<li><strong>Confiance au badge :</strong> Un badge ou un uniforme suffit à accéder aux zones restreintes</li>
<li><strong>Confiance au fournisseur :</strong> "Je suis le technicien Cisco" → accès au datacenter</li>
<li><strong>Confiance au processus :</strong> "C'est la procédure standard" → action automatique</li>
<li><strong>Confiance numérique :</strong> Un email depuis un domaine similaire = légitime</li>
</ul>

<h3>Attaques exploitant la confiance organisationnelle</h3>

<h4>Business Email Compromise (BEC)</h4>
<p>L'arnaque au président / fraude au virement : un attaquant usurpe l'identité du PDG par email et ordonne un virement urgent au département comptabilité.</p>
<ul>
<li>Pertes mondiales : <strong>$26 milliards</strong> entre 2016 et 2023 (FBI)</li>
<li>L'OSINT fournit : nom du PDG, email format, prestataire bancaire, contexte (voyage, acquisition)</li>
<li>Le levier principal : autorité hiérarchique + urgence</li>
</ul>

<h4>Supply Chain Attack (ingénierie sociale)</h4>
<p>Compromettre un fournisseur de confiance pour atteindre la cible :</p>
<ul>
<li>L'attaquant se fait passer pour un sous-traitant existant</li>
<li>Il utilise des informations OSINT (contrats publics, appels d'offres) pour crédibiliser son approche</li>
<li>La cible accorde sa confiance car le "fournisseur" connaît les détails du projet</li>
</ul>

<h4>Tailgating / Piggybacking</h4>
<p>Suivre un employé légitime à travers une porte sécurisée sans badge :</p>
<ul>
<li>Exploitation de la politesse ("tenez la porte, je charge des cartons")</li>
<li>Exploitation du badge visible (faux badge imprimé à partir d'une photo Instagram)</li>
<li>Exploitation de la routine (aux heures d'affluence, personne ne vérifie)</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 Contre-mesures systémiques</h3><p class="text-sm">La meilleure défense n'est pas technique — c'est <strong>culturelle</strong>. Créer une culture où il est normal de vérifier, de poser des questions, et de refuser poliment même les demandes des supérieurs. Les entreprises les plus résilientes sont celles où un employé junior peut dire "Non, je vérifie d'abord" à un directeur.</p></div></div>
      `,quiz:[{id:"q6-5-1",question:"Quel montant total de pertes les arnaques BEC (Business Email Compromise) ont-elles causé entre 2016 et 2023 selon le FBI ?",options:["$1 milliard","$5 milliards","$26 milliards","$100 milliards"],correct:2,explanation:"Le FBI estime que les BEC ont causé plus de $26 milliards de pertes entre 2016 et 2023, en faisant l'une des cybermenaces les plus coûteuses au monde — bien devant les ransomwares en pertes financières directes."}]},{id:"l6-6",title:"Défense & Sensibilisation",content:`
<h2>Construire la résilience humaine</h2>
<p>Toutes les connaissances offensives de ce module ont un objectif final : <strong>protéger les organisations et les individus</strong>. La sensibilisation est le dernier maillon de la chaîne de défense — et le plus négligé.</p>

<h3>Principes d'un programme de sensibilisation efficace</h3>
<ol>
<li><strong>Continu, pas ponctuel :</strong> Une formation annuelle de 2h ne suffit pas. Micro-formations régulières (5-10 min/semaine)</li>
<li><strong>Basé sur des scénarios réels :</strong> Pas de théorie abstraite. Des exemples concrets du secteur d'activité</li>
<li><strong>Gamifié :</strong> CTF d'ingénierie sociale, leaderboards, récompenses</li>
<li><strong>Non punitif :</strong> Les employés qui tombent dans un phishing simulé doivent être formés, pas sanctionnés</li>
<li><strong>Mesuré :</strong> KPIs clairs (taux de signalement, taux de clic, temps de réaction)</li>
</ol>

<h3>Checklist de défense personnelle</h3>
<pre><code class="language-text">□ Vérifier l'expéditeur réel (pas seulement le nom affiché)
□ Survoler les liens avant de cliquer (vérifier le domaine)
□ Ne jamais partager credentials par email/téléphone
□ Appeler le vrai numéro pour vérifier les demandes urgentes
□ Signaler tout email/appel/SMS suspect au SOC
□ Utiliser un gestionnaire de mots de passe
□ Activer le MFA sur TOUS les comptes
□ Ne JAMAIS réutiliser un mot de passe
□ Mettre à jour régulièrement ses logiciels
□ Vérifier ses propres fuites sur haveibeenpwned.com</code></pre>

<h3>Métriques de maturité</h3>
<table>
<thead><tr><th>Niveau</th><th>Description</th><th>Indicateurs</th></tr></thead>
<tbody>
<tr><td>1 - Inconscient</td><td>Aucune sensibilisation</td><td>Taux de clic phishing > 50%, aucun signalement</td></tr>
<tr><td>2 - Conscient</td><td>Formation initiale faite</td><td>Taux de clic 20-50%, signalements rares</td></tr>
<tr><td>3 - Engagé</td><td>Formations régulières + exercices</td><td>Taux de clic 10-20%, signalements fréquents</td></tr>
<tr><td>4 - Résilient</td><td>Culture de sécurité intégrée</td><td>Taux de clic < 10%, signalement > 50%</td></tr>
<tr><td>5 - Champion</td><td>Agents multiplicateurs internes</td><td>Taux de clic < 3%, peer training actif</td></tr>
</tbody>
</table>
      `,quiz:[{id:"q6-6-1",question:"Quelle approche est la plus efficace pour un programme de sensibilisation à l'ingénierie sociale ?",options:["Une grande formation annuelle de 8 heures","Des micro-formations continues et non punitives basées sur des scénarios réels","Sanctionner les employés qui échouent aux tests de phishing","Interdire l'usage de l'email dans l'entreprise"],correct:1,explanation:"Les micro-formations continues (5-10 min/semaine), basées sur des scénarios réels du secteur et non punitives sont bien plus efficaces qu'une formation annuelle. La clé est la répétition, la pertinence, et l'absence de peur de signaler."}]}]},n0={id:"m7",title:"Phase 7 — OSINT Avancé",icon:"Telescope",lessons:[{id:"l7-1",title:"GEOINT avancé",content:`
<h2>Géolocalisation de précision</h2>
<p>Le GEOINT avancé va au-delà de la lecture de panneaux. Il utilise les ombres, la météo, l'astronomie et l'imagerie satellite pour localiser et dater une image ou vidéo avec une précision chirurgicale.</p>

<h3>Analyse des ombres</h3>
<ul>
<li><strong>Longueur :</strong> L'angle du soleil détermine la longueur des ombres → latitude + saison</li>
<li><strong>Direction :</strong> Le soleil se déplace d'Est en Ouest → l'ombre indique l'heure</li>
<li><strong>SunCalc.org :</strong> Simulateur de position solaire pour vérifier la cohérence date/heure/lieu</li>
</ul>
<pre><code class="language-text">Workflow de datation par ombre :
1. Mesurer l'angle de l'ombre (rapport taille objet / longueur ombre)
2. Estimer la direction de l'ombre par rapport au Nord
3. Sur SunCalc : tester différentes dates/heures pour un lieu candidat
4. La combinaison qui correspond = date/heure probable</code></pre>

<h3>Analyse météorologique rétroactive</h3>
<p>Les conditions météo visibles dans une image (ciel couvert, neige, feuillage) peuvent être croisées avec les données historiques :</p>
<ul>
<li><strong>Weather Underground :</strong> Historique météo mondial par jour et par ville</li>
<li><strong>Sentinel Hub :</strong> Imagerie satellite Copernicus (couverture nuageuse, végétation)</li>
<li>Si une photo montre de la neige → vérifier les dates de neige dans le lieu candidat</li>
</ul>

<h3>Imagerie satellite avancée</h3>
<table>
<thead><tr><th>Source</th><th>Résolution</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><strong>Google Earth Pro</strong></td><td>15-30cm</td><td>Imagerie historique, timeline, mesures</td></tr>
<tr><td><strong>Sentinel Hub</strong></td><td>10m (optique)</td><td>Changements de végétation, construction, inondations</td></tr>
<tr><td><strong>Planet</strong></td><td>3m quotidien</td><td>Monitoring haute fréquence (commercial)</td></tr>
<tr><td><strong>Maxar</strong></td><td>30cm</td><td>Détails très fins (commercial)</td></tr>
</tbody>
</table>

<h3>Exercice de chronolocation</h3>
<p>La <strong>chronolocation</strong> consiste à déterminer quand une photo a été prise, même sans métadonnées. Indices exploitables : ombres, saison (végétation, neige), événements visibles (affiche, chantier), vêtements des personnes, luminosité.</p>
      `,quiz:[{id:"q7-1-1",question:"Quel outil gratuit permet de simuler la position du soleil à une date, heure et lieu donnés ?",options:["Google Maps","SunCalc.org","Stellarium","Weather Underground"],correct:1,explanation:"SunCalc.org affiche la position exacte du soleil (azimut, élévation) pour n'importe quelle date, heure et coordonnées GPS. Il permet de vérifier si les ombres d'une photo sont cohérentes avec un lieu et une date revendiqués."}]},{id:"l7-2",title:"Analyse de photos & vidéos (deepfakes)",content:`
<h2>L'ère des médias synthétiques</h2>
<p>Les deepfakes et manipulations visuelles sont une menace croissante pour l'OSINT. Un analyste doit savoir détecter les altérations et évaluer l'authenticité d'un média.</p>

<h3>Types de manipulation</h3>
<table>
<thead><tr><th>Type</th><th>Description</th><th>Difficulté de détection</th></tr></thead>
<tbody>
<tr><td><strong>Recadrage</strong></td><td>Découper l'image pour changer le contexte</td><td>Facile (reverse image search)</td></tr>
<tr><td><strong>Clonage</strong></td><td>Dupliquer des éléments pour cacher ou ajouter</td><td>Moyen (ELA, détection de patterns)</td></tr>
<tr><td><strong>Face swap</strong></td><td>Remplacer un visage par un autre</td><td>Moyen (artefacts, cohérence de lumière)</td></tr>
<tr><td><strong>Deepfake vidéo</strong></td><td>Synthèse complète d'une vidéo avec IA</td><td>Difficile (en constante amélioration)</td></tr>
<tr><td><strong>Audio deepfake</strong></td><td>Synthèse vocale imitant une personne</td><td>Très difficile</td></tr>
<tr><td><strong>GANs (images)</strong></td><td>Photos de personnes inexistantes</td><td>Moyen (yeux, oreilles, arrière-plan)</td></tr>
</tbody>
</table>

<h3>Outils de détection</h3>
<ul>
<li><strong>FotoForensics :</strong> Error Level Analysis (ELA) — les zones modifiées ont un taux de compression différent</li>
<li><strong>InVID/WeVerify :</strong> Plugin navigateur pour décomposer les vidéos en keyframes et vérifier chacune</li>
<li><strong>This Person Does Not Exist (TPDNE) :</strong> Pour comprendre les artefacts des GANs (oreilles asymétriques, arrière-plan incohérent, reflets aberrants dans les yeux)</li>
<li><strong>Deepware Scanner :</strong> Détection automatisée de deepfake vidéo</li>
</ul>

<h3>Indices de deepfake vidéo</h3>
<ul>
<li>Clignement des yeux anormal (trop ou pas assez)</li>
<li>Contour du visage flou ou instable</li>
<li>Incohérence d'éclairage entre le visage et le fond</li>
<li>Artefacts aux transitions (lorsque la tête bouge vite)</li>
<li>Texture de peau trop lisse ou trop uniforme</li>
<li>Bijoux/lunettes qui scintillent de manière non naturelle</li>
</ul>
      `,quiz:[{id:"q7-2-1",question:"Qu'est-ce que l'Error Level Analysis (ELA) permet de détecter ?",options:["Les virus dans les fichiers image","Les zones modifiées d'une image qui ont un taux de compression différent du reste","La résolution originale d'une photo","Le modèle d'appareil photo utilisé"],correct:1,explanation:"L'ELA (Error Level Analysis) compare les niveaux de compression JPEG à travers l'image. Les zones modifiées (ajoutées, clonées, effacées) ont souvent un taux de compression différent du reste de l'image, ce qui les rend détectables."}]},{id:"l7-3",title:"Analyse financière & flux économiques",content:`
<h2>Suivre l'argent</h2>
<p>"Follow the money" est un adage du renseignement financier (FININT). Les flux financiers laissent des traces même quand on essaie de les cacher — et ces traces sont souvent publiques.</p>

<h3>Sources de données financières ouvertes</h3>
<table>
<thead><tr><th>Source</th><th>Données</th><th>Usage OSINT</th></tr></thead>
<tbody>
<tr><td><strong>Infogreffe / Pappers</strong></td><td>Bilans, comptes de résultat (FR)</td><td>Santé financière, taille réelle, dettes</td></tr>
<tr><td><strong>SEC EDGAR</strong></td><td>10-K, 10-Q, proxy statements (US)</td><td>Rémunération dirigeants, risques, litiges</td></tr>
<tr><td><strong>OpenCorporates</strong></td><td>Registre mondial d'entreprises</td><td>Liens capitalistiques, filiales offshore</td></tr>
<tr><td><strong>ICIJ Offshore Leaks</strong></td><td>Panama Papers, Paradise Papers</td><td>Sociétés écrans, bénéficiaires effectifs</td></tr>
<tr><td><strong>Blockchain explorers</strong></td><td>Transactions Bitcoin, Ethereum</td><td>Traçage de flux crypto</td></tr>
</tbody>
</table>

<h3>Analyse blockchain</h3>
<p>Contrairement à la croyance populaire, les blockchains publiques (Bitcoin, Ethereum) ne sont PAS anonymes — elles sont <strong>pseudonymes</strong>. Chaque transaction est enregistrée publiquement et définitivement.</p>
<pre><code class="language-text"># Outils de traçage blockchain
- blockchain.com/explorer : Explorateur Bitcoin simple
- etherscan.io : Explorateur Ethereum
- Chainalysis : Traçage professionnel (forensics)
- OXT.me : Visualisation graphique des flux Bitcoin</code></pre>

<h3>Schémas de blanchiment à détecter</h3>
<ul>
<li><strong>Layering :</strong> Multiplication de transactions pour obscurcir l'origine</li>
<li><strong>Mixing/Tumbling :</strong> Services qui mélangent les crypto de multiples utilisateurs</li>
<li><strong>Chain-hopping :</strong> Conversion entre différentes cryptomonnaies</li>
<li><strong>Sociétés écrans :</strong> Entités juridiques sans activité réelle dans des juridictions opaques</li>
</ul>
      `,quiz:[{id:"q7-3-1",question:"Les transactions Bitcoin sont-elles réellement anonymes ?",options:["Oui, totalement anonymes et intraçables","Non, elles sont pseudonymes — chaque transaction est publiquement enregistrée sur la blockchain","Oui, si on utilise un VPN","Seulement quand on utilise des mixers"],correct:1,explanation:"Les transactions Bitcoin sont pseudonymes, pas anonymes. Elles sont toutes enregistrées publiquement et définitivement sur la blockchain. Des outils de traçage comme Chainalysis peuvent relier des adresses Bitcoin à des identités réelles via des échanges KYC."}]},{id:"l7-4",title:"Recherche sur le Dark Web",content:`
<h2>Naviguer dans les profondeurs</h2>
<p>Le dark web est un espace essentiel pour le Cyber Threat Intelligence (CTI). Les groupes APT, les marchands de données volées, et les forums de cybercriminalité s'y retrouvent.</p>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚠️ OPSEC maximale requise</h3><p class="text-sm">Toute navigation sur le dark web doit se faire avec une OPSEC renforcée : VM dédiée (Whonix ou Tails), VPN → Tor, aucune donnée personnelle accessible, aucun téléchargement de fichier suspect. Le risque de compromission est réel.</p></div></div>

<h3>Accès et navigation</h3>
<ul>
<li><strong>Tor Browser :</strong> Navigateur dédié pour les sites .onion</li>
<li><strong>Tails OS :</strong> Système live amnésique routant tout le trafic via Tor</li>
<li><strong>Whonix :</strong> VM Gateway + Workstation pour isolation complète</li>
<li><strong>Ne JAMAIS :</strong> Se connecter à un compte personnel, activer JavaScript, télécharger des fichiers</li>
</ul>

<h3>Sources utiles pour la CTI</h3>
<ul>
<li><strong>Forums de hackers :</strong> Discussions sur des vulnérabilités, PoC, outils d'attaque</li>
<li><strong>Paste sites (.onion) :</strong> Fuites de données publiées par les attaquants</li>
<li><strong>Marketplaces :</strong> Vente de credentials volés, accès VPN compromis, bases de données</li>
<li><strong>Canaux de communication APT :</strong> Revendications d'attaques, négociations de rançon</li>
</ul>

<h3>Moteurs de recherche dark web</h3>
<table>
<thead><tr><th>Moteur</th><th>Description</th></tr></thead>
<tbody>
<tr><td><strong>Ahmia</strong></td><td>Moteur de recherche pour les services .onion (filtre le contenu illégal évident)</td></tr>
<tr><td><strong>Torch</strong></td><td>Un des plus anciens moteurs de recherche Tor</td></tr>
<tr><td><strong>DarkSearch</strong></td><td>Moteur avec API pour l'automatisation CTI</td></tr>
<tr><td><strong>Intelligence X</strong></td><td>Recherche dans le dark web et les fuites de données (surface + dark)</td></tr>
</tbody>
</table>

<h3>Ce qu'il faut chercher (et ne PAS chercher)</h3>
<ul>
<li>✅ Mentions de votre organisation dans des forums de vente de données</li>
<li>✅ Accès VPN ou RDP de votre entreprise en vente</li>
<li>✅ Discussions sur des vulnérabilités affectant votre stack technique</li>
<li>✅ Revendications d'attaques par des groupes APT dans votre secteur</li>
<li>❌ Contenu illégal (CSAM, armes) — crime de consultation dans de nombreuses juridictions</li>
</ul>
      `,quiz:[{id:"q7-4-1",question:"Quel système d'exploitation est recommandé pour une navigation sécurisée sur le dark web ?",options:["Windows 11 avec antivirus","macOS avec Safari","Tails OS (système live amnésique)","Ubuntu standard"],correct:2,explanation:"Tails OS est un système d'exploitation live qui route tout le trafic via Tor et ne laisse aucune trace sur la machine hôte. Il est conçu spécifiquement pour l'anonymat et s'efface complètement de la RAM à l'extinction."}]},{id:"l7-5",title:"Automatisation OSINT",content:`
<h2>De l'artisan à l'industriel</h2>
<p>L'automatisation est ce qui permet de passer de l'investigation ponctuelle à la veille continue et au traitement de masse.</p>

<h3>Python pour l'OSINT — les fondamentaux</h3>
<pre><code class="language-python"># Script de base : résolution DNS d'une liste de domaines
import dns.resolver

domains = ["example.com", "test.com", "target.org"]

for domain in domains:
    try:
        answers = dns.resolver.resolve(domain, 'A')
        for rdata in answers:
            print(f"{domain} -> {rdata.address}")
    except Exception as e:
        print(f"{domain} -> ERREUR: {e}")</code></pre>

<h3>APIs OSINT essentielles</h3>
<pre><code class="language-python"># Shodan API — Scanner une cible
import shodan

api = shodan.Shodan('VOTRE_CLE_API')
results = api.host('185.199.108.153')
print(f"IP: {results['ip_str']}")
print(f"Org: {results.get('org', 'N/A')}")
for item in results['data']:
    print(f"Port {item['port']}: {item.get('product', 'unknown')}")</code></pre>

<pre><code class="language-python"># crt.sh — Énumération de sous-domaines
import requests

def get_subdomains(domain):
    url = f"https://crt.sh/?q=%25.{domain}&output=json"
    response = requests.get(url)
    if response.ok:
        data = response.json()
        subdomains = set()
        for cert in data:
            for name in cert['name_value'].split('\\n'):
                subdomains.add(name.strip())
        return sorted(subdomains)
    return []

for sub in get_subdomains("example.com"):
    print(sub)</code></pre>

<h3>Frameworks d'automatisation OSINT</h3>
<table>
<thead><tr><th>Outil</th><th>Spécialité</th></tr></thead>
<tbody>
<tr><td><strong>SpiderFoot</strong></td><td>Reconnaissance automatisée multi-sources (200+ modules)</td></tr>
<tr><td><strong>Recon-ng</strong></td><td>Framework modulaire inspiré de Metasploit, pour la reconnaissance</td></tr>
<tr><td><strong>theHarvester</strong></td><td>Collecte d'emails, sous-domaines, IPs, noms</td></tr>
<tr><td><strong>Photon</strong></td><td>Crawler intelligent de sites web</td></tr>
</tbody>
</table>

<h3>Bonnes pratiques d'automatisation</h3>
<ul>
<li>Toujours respecter les rate limits des APIs</li>
<li>Logger chaque requête (timestamp, source, résultat) pour la traçabilité</li>
<li>Stocker les résultats de manière structurée (JSON, SQLite)</li>
<li>Ne JAMAIS automatiser du scraping agressif sur des cibles sans autorisation</li>
<li>Utiliser des proxies et rotations pour les opérations longues</li>
</ul>
      `,quiz:[{id:"q7-5-1",question:"Quel framework d'automatisation OSINT possède plus de 200 modules de reconnaissance ?",options:["Recon-ng","SpiderFoot","theHarvester","Photon"],correct:1,explanation:"SpiderFoot est un framework d'automatisation OSINT avec plus de 200 modules couvrant la reconnaissance de domaines, emails, IPs, réseaux sociaux, dark web, et plus encore."}]},{id:"l7-6",title:"OSINT & Intelligence Artificielle",content:`
<h2>L'analyste augmenté</h2>
<p>L'IA transforme l'OSINT en permettant de traiter des volumes de données impossibles pour un humain seul. Mais elle ne remplace jamais le jugement analytique.</p>

<h3>Applications de l'IA en OSINT</h3>
<table>
<thead><tr><th>Domaine</th><th>Application IA</th><th>Outil</th></tr></thead>
<tbody>
<tr><td><strong>NLP</strong></td><td>Analyse de sentiment, extraction d'entités, résumé de textes</td><td>spaCy, GPT-4, BERT</td></tr>
<tr><td><strong>Vision</strong></td><td>Analyse d'image, OCR, détection d'objets</td><td>YOLO, Tesseract, Google Vision</td></tr>
<tr><td><strong>Clustering</strong></td><td>Regroupement de comptes similaires, détection de bots</td><td>scikit-learn, DBSCAN</td></tr>
<tr><td><strong>Graphes</strong></td><td>Détection de communautés, prédiction de liens</td><td>Neo4j, NetworkX, Gephi</td></tr>
<tr><td><strong>LLMs</strong></td><td>Synthèse de rapports, génération d'hypothèses, analyse de code</td><td>GPT-4, Claude, Mistral</td></tr>
</tbody>
</table>

<h3>LLMs comme assistants d'analyse</h3>
<p>Les grands modèles de langage (LLMs) excellent pour :</p>
<ul>
<li><strong>Résumer des volumes :</strong> Synthétiser 500 posts Reddit en 5 points clés</li>
<li><strong>Pivoter :</strong> "À partir de cet email, quelles hypothèses de recherche proposes-tu ?"</li>
<li><strong>Rédiger :</strong> Générer un premier draft de rapport structuré</li>
<li><strong>Analyser du code :</strong> Comprendre un script trouvé dans un repo GitHub</li>
</ul>

<h3>Limites critiques de l'IA en OSINT</h3>
<ul>
<li><strong>Hallucinations :</strong> Les LLMs inventent des faits. Tout OUTPUT doit être vérifié.</li>
<li><strong>Biais :</strong> Les modèles reproduisent les biais de leurs données d'entraînement</li>
<li><strong>OPSEC :</strong> Ne JAMAIS soumettre des données sensibles d'investigation à un LLM cloud</li>
<li><strong>Jugement :</strong> L'IA ne peut pas évaluer la crédibilité d'une source avec le contexte humain</li>
<li><strong>Éthique :</strong> L'automatisation amplifie les erreurs — une corrélation fausse propagée automatiquement peut ruiner une réputation</li>
</ul>

<div class="alert-box alert-error"><div><h3 class="font-bold text-sm mb-1">🧠 L'IA est un outil, pas un analyste</h3><p class="text-sm">L'IA amplifie vos capacités mais ne remplace pas votre jugement. C'est un multiplicateur de force pour un bon analyste — et un multiplicateur d'erreurs pour un mauvais. La responsabilité de l'analyse reste <strong>toujours</strong> humaine.</p></div></div>
      `,quiz:[{id:"q7-6-1",question:"Pourquoi ne faut-il JAMAIS soumettre des données d'investigation sensibles à un LLM cloud (ChatGPT, Claude, etc.) ?",options:["Les LLMs ne peuvent pas analyser des données structurées","Les données soumises peuvent être stockées, utilisées pour l'entraînement, ou exposées à des tiers","Les LLMs sont trop lents pour l'analyse OSINT","Les LLMs ne comprennent pas le français"],correct:1,explanation:"Les données soumises aux LLMs cloud peuvent être stockées par le fournisseur, utilisées pour l'entraînement futur, et potentiellement accessibles à des employés ou via des failles. Des données d'investigation sensibles (noms, IP, fuites) ne doivent jamais quitter un environnement contrôlé."}]}]},i0={id:"m8",title:"Phase 8 — Labs & Mise en Situation",icon:"FlaskConical",lessons:[{id:"l8-1",title:"Étude de cas progressive (Débutant)",content:`
<h2>🔬 Mission : Identifier le propriétaire d'un domaine suspect</h2>
<p>Ce lab guide pas à pas un débutant à travers une investigation OSINT complète sur un domaine fictif.</p>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Contexte de la mission</h3><p class="text-sm">Votre entreprise a reçu un email de phishing provenant du domaine <code>acme-support-it.com</code>. Le RSSI vous demande d'identifier qui se cache derrière ce domaine et de cartographier l'infrastructure.</p></div></div>

<h3>Étape 1 : WHOIS</h3>
<pre><code class="language-bash"># Identifier le registrant du domaine
whois acme-support-it.com

# Informations à extraire :
# - Nom du registrant (si non masqué)
# - Date de création (récent = suspect)
# - Registrar utilisé
# - Nameservers</code></pre>

<h3>Étape 2 : DNS</h3>
<pre><code class="language-bash"># Enregistrements DNS complets
dig acme-support-it.com ANY

# Serveurs mail (le phishing passe-t-il par ce domaine ?)
dig acme-support-it.com MX

# Enregistrements TXT (SPF, DKIM — correctement configurés ?)
dig acme-support-it.com TXT</code></pre>

<h3>Étape 3 : Certificate Transparency</h3>
<pre><code class="language-bash"># Sous-domaines via crt.sh
curl -s "https://crt.sh/?q=%25.acme-support-it.com&output=json" | jq '.[].name_value' | sort -u</code></pre>

<h3>Étape 4 : Wayback Machine</h3>
<p>Vérifier si le domaine a eu une vie antérieure : <code>web.archive.org/web/*/acme-support-it.com</code></p>

<h3>Étape 5 : Headers de l'email</h3>
<pre><code class="language-text">Analyser les headers complets de l'email de phishing :
- Received: IP d'origine → Shodan
- Return-Path: adresse de rebond
- X-Mailer: outil d'envoi utilisé
- Message-ID: domaine dans le Message-ID</code></pre>

<h3>Étape 6 : Rapport</h3>
<p>Rédiger un rapport court au format BLUF :</p>
<pre><code class="language-text">RÉSUMÉ : Le domaine acme-support-it.com a été créé il y a [X] jours
via [registrar], utilisant les nameservers [Y]. L'infra pointe vers
[IP], hébergée chez [provider], dans [pays]. Le certificat SSL a été
émis il y a [Z] heures. Évaluation : domaine créé spécifiquement
pour cette campagne de phishing ciblant notre organisation.

RECOMMANDATION : Bloquer le domaine dans le proxy/firewall.
Signaler à l'hébergeur et au registrar pour abus.</code></pre>
      `,quiz:[{id:"q8-1-1",question:"Quel est le premier indicateur de suspicion quand on analyse le WHOIS d'un domaine de phishing ?",options:["Le nom de domaine contient des tirets","La date de création est très récente (quelques jours/semaines)","Le domaine est enregistré chez un registrar connu","Le domaine utilise des nameservers Cloudflare"],correct:1,explanation:"Un domaine créé très récemment (quelques jours avant l'attaque) est un indicateur fort de phishing. Les domaines légitimes ont généralement plusieurs mois ou années d'ancienneté."}]},{id:"l8-2",title:"Enquête sur persona fictive",content:`
<h2>🔬 Mission : Reconstituer le profil de "Marc Lefebvre"</h2>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Briefing</h3><p class="text-sm">Vous êtes mandaté pour un audit Red Team. La cible est un cadre de l'entreprise fictive TechVault SARL. Votre PIR : Identifier les vecteurs d'ingénierie sociale exploitables à partir de l'empreinte numérique de "Marc Lefebvre", Directeur Technique.</p></div></div>

<h3>Phase 1 : Collecte initiale</h3>
<p>À partir du nom et de l'entreprise, rechercher sur :</p>
<ul>
<li><strong>LinkedIn :</strong> <code>site:linkedin.com/in "Marc Lefebvre" "TechVault"</code></li>
<li><strong>Google :</strong> <code>"Marc Lefebvre" "TechVault"</code></li>
<li><strong>Registre du commerce :</strong> Pappers.fr → TechVault SARL → dirigeants</li>
</ul>

<h3>Phase 2 : Expansion des identifiants</h3>
<p>Depuis le profil LinkedIn, on extrait :</p>
<ul>
<li>Format email probable : <code>m.lefebvre@techvault.fr</code>, <code>marc.lefebvre@techvault.fr</code></li>
<li>Email perso probable : <code>marc.lefebvre@gmail.com</code> (à vérifier via Holehe)</li>
<li>Technologies mentionnées : AWS, Docker, Python</li>
</ul>

<h3>Phase 3 : Vérification croisée</h3>
<pre><code class="language-bash"># Holehe — vérifier les inscriptions de l'email
holehe marc.lefebvre@gmail.com

# Sherlock — chercher le pseudo "mlefebvre" ou "marclef"
python3 sherlock mlefebvre --print-all

# HIBP — vérifier les fuites
# haveibeenpwned.com → marc.lefebvre@gmail.com</code></pre>

<h3>Phase 4 : Analyse comportementale</h3>
<p>Si un compte X/Twitter est trouvé :</p>
<ul>
<li>Analyser les horaires de publication → fuseau horaire</li>
<li>Centres d'intérêt → prétextes exploitables</li>
<li>Interactions → cercle professionnel</li>
<li>Géolocalisation → ville, quartier</li>
</ul>

<h3>Phase 5 : Synthèse et recommandation</h3>
<p>Construire un profil structuré :</p>
<pre><code class="language-text">PROFIL CIBLE : Marc Lefebvre
─────────────────────────────
Poste     : CTO, TechVault SARL
Email pro : marc.lefebvre@techvault.fr (format confirmé par Hunter.io)
Email perso: marc.lefebvre@gmail.com (Holehe: inscrit sur Twitter, GitHub, Spotify)
Pseudo    : mlefebvre (GitHub, Reddit)
Fuites    : 2 breach (LinkedIn 2012, Adobe 2013)
Ville     : Lyon (déduit des posts et géolocalisation)
Stack     : AWS, Docker, Python, PostgreSQL
Intérêts  : Trail running, photographie, vins du Rhône
─────────────────────────────
VECTEURS D'ATTAQUE POSSIBLES :
1. Phishing ciblé via thème AWS (email pro)
2. Pretexting "photographe" via intérêts perso
3. Credentials stuffing depuis les fuites (mdp probablement réutilisé)</code></pre>
      `,quiz:[{id:"q8-2-1",question:"Pourquoi les anciennes fuites de données (ex: LinkedIn 2012) sont-elles toujours pertinentes en 2026 ?",options:["Les données sont automatiquement supprimées après 5 ans","Parce que beaucoup de personnes réutilisent le même mot de passe ou des variations prévisibles","Les anciennes fuites ne sont plus disponibles en ligne","Les mots de passe de 2012 sont trop courts pour être utiles"],correct:1,explanation:"La réutilisation de mots de passe est le talon d'Achille de la sécurité personnelle. Un mot de passe compromis en 2012 a de fortes chances d'être encore utilisé (ou d'en être une variation proche) sur d'autres comptes en 2026."}]},{id:"l8-3",title:"Cartographie complète d'une PME fictive",content:`
<h2>🔬 Mission : Audit de surface d'attaque de "NovaTech Solutions"</h2>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Périmètre contractuel</h3><p class="text-sm">Client : NovaTech Solutions SARL. Domaine principal : novatech-solutions.fr. Effectif déclaré : 85 employés. Secteur : ESN / Conseil IT. PIR : Cartographier la surface d'attaque visible et identifier les 5 risques les plus critiques.</p></div></div>

<h3>Étape 1 : Reconnaissance du domaine</h3>
<pre><code class="language-text">1. WHOIS → registrant, dates, nameservers
2. DNS (dig ANY) → IP, MX, TXT (SPF/DKIM), NS
3. crt.sh → tous les sous-domaines certifiés
4. subfinder → sous-domaines passifs
5. DNSDumpster → carte visuelle de l'infrastructure</code></pre>

<h3>Étape 2 : Analyse d'infrastructure</h3>
<pre><code class="language-text">6. Shodan → services exposés sur les IPs identifiées
7. Censys → certificats et Shadow IT cloud
8. Wappalyzer → stack technique du site principal
9. Headers HTTP → versions de serveur, frameworks</code></pre>

<h3>Étape 3 : OSINT organisationnel</h3>
<pre><code class="language-text">10. Pappers/Infogreffe → dirigeants, bilans, statuts
11. LinkedIn → organigramme, 15+ profils d'employés
12. Offres d'emploi → stack technique détaillée, projets en cours
13. Google Dorks → documents PDF/XLSX exposés
14. GitHub → repos d'employés mentionnant novatech</code></pre>

<h3>Étape 4 : Analyse des données</h3>
<pre><code class="language-text">15. Extraction de métadonnées (ExifTool sur les documents)
16. HIBP → emails corporate dans des fuites
17. Corrélation LinkedIn → emails → pseudos → fuites
18. Mapping stack technique consolidé</code></pre>

<h3>Étape 5 : Rapport de surface d'attaque</h3>
<pre><code class="language-text">TOP 5 RISQUES IDENTIFIÉS :
1. 🔴 Jenkins (8080) exposé sans auth → accès au code source
2. 🔴 3 emails corporate dans des fuites avec passwords MD5
3. 🟠 Sous-domaine staging avec version obsolète de l'app
4. 🟠 12 documents PDF avec métadonnées révélatrices
5. 🟡 DSI publie la stack technique sur LinkedIn et SlideShare</code></pre>
      `,quiz:[{id:"q8-3-1",question:"Dans un audit de surface d'attaque, quel risque est généralement considéré comme le plus critique ?",options:["Des documents PDF avec métadonnées","Un Jenkins exposé sans authentification sur Internet","Un DSI qui publie sur LinkedIn","Un sous-domaine staging obsolète"],correct:1,explanation:"Un Jenkins sans authentification accessible sur Internet est critique : il peut donner accès au code source, aux pipelines CI/CD, aux secrets (clés API, mots de passe), et potentiellement permettre l'exécution de code sur les serveurs de build."}]},{id:"l8-4",title:"Simulation d'attaque SE (contrôlée)",content:`
<h2>🔬 Mission : Campagne de phishing contrôlée pour NovaTech</h2>

<div class="alert-box alert-error mb-4"><div><h3 class="font-bold text-sm mb-1">⚖️ Cadre légal strict</h3><p class="text-sm">Cette simulation ne peut être exécutée QUE dans le cadre d'une convention d'audit signée (RoE), avec l'accord écrit de la direction et du DPO. Les données collectées sont chiffrées et remises uniquement au commanditaire.</p></div></div>

<h3>Préparation OSINT-driven</h3>
<p>À partir de l'audit de surface (lab précédent), on sait :</p>
<ul>
<li>L'entreprise utilise Microsoft 365 (enregistrements MX)</li>
<li>Le CTO s'appelle Marc Lefebvre et est fan de trail running</li>
<li>3 employés ont des mots de passe dans des fuites</li>
<li>L'entreprise travaille avec le cabinet Arthur & Brown (appels d'offres publics)</li>
</ul>

<h3>Construction du prétexte</h3>
<pre><code class="language-text">Scénario choisi : Mise à jour Microsoft 365

De: support-microsoft365@novatech-it-support.com
Objet: [NovaTech] Mise à jour obligatoire M365 — Action requise

Bonjour [Prénom],

Suite à la récente mise à jour de sécurité Microsoft 365 validée
par M. Lefebvre (Direction Technique), tous les collaborateurs
doivent renouveler leur authentification avant le [J+2].

→ Accéder au portail de mise à jour : [lien GoPhish]

Important : En cas de non-action, votre accès sera suspendu
temporairement conformément à la politique de sécurité.

Cordialement,
Support IT - NovaTech Solutions</code></pre>

<h3>Analyse des résultats</h3>
<pre><code class="language-text">Résultats de la campagne (fictifs) :
──────────────────────────────────
Emails envoyés    : 85
Emails ouverts    : 62 (73%) — Élevé
Liens cliqués     : 28 (33%) — Alerte
Credentials saisis: 12 (14%) — Critique
Signalements      : 4  (5%)  — Très faible

ANALYSE :
- Le nom du CTO dans l'email a augmenté la crédibilité (autorité)
- L'urgence du délai a réduit l'esprit critique
- Le faible taux de signalement indique un déficit de culture sécuritaire
- Les 12 employés ayant soumis leurs credentials nécessitent une formation ciblée

RECOMMANDATIONS :
1. Formation immédiate pour les 12 employés ayant soumis leurs credentials
2. Programme de micro-formation anti-phishing mensuel
3. Création d'un bouton "Signaler phishing" dans Outlook
4. Seconde campagne de test dans 3 mois pour mesurer l'amélioration</code></pre>
      `,quiz:[{id:"q8-4-1",question:"Quel élément du prétexte de phishing exploite le principe d'autorité de Cialdini ?",options:["Le lien vers le portail de mise à jour","La mention du nom du CTO (M. Lefebvre) comme ayant validé la procédure","L'adresse email de l'expéditeur","La mention de Microsoft 365"],correct:1,explanation:"Mentionner le nom réel du CTO exploite directement le principe d'autorité : les employés sont conditionnés à obéir aux directives validées par leur hiérarchie technique. Ce détail OSINT rend le prétexte beaucoup plus crédible."}]},{id:"l8-5",title:"Rédaction d'un rapport exécutif",content:`
<h2>🔬 Lab : Rédiger un rapport OSINT professionnel</h2>
<p>Ce lab vous guide dans la rédaction d'un rapport complet à partir des résultats des labs précédents.</p>

<h3>Template de rapport exécutif</h3>
<pre><code class="language-text">═══════════════════════════════════════════
RAPPORT D'AUDIT DE SURFACE D'ATTAQUE
Client : NovaTech Solutions SARL
Réf    : OSINT-2026-042
Date   : [DATE]
Classification : CONFIDENTIEL
═══════════════════════════════════════════

1. RÉSUMÉ EXÉCUTIF
L'audit OSINT de NovaTech Solutions a identifié [X] vulnérabilités
dont [Y] critiques. La surface d'attaque est jugée [ÉLEVÉE].
Les recommandations prioritaires incluent la sécurisation du
Jenkins exposé et un programme de sensibilisation au phishing.

2. PÉRIMÈTRE ET MÉTHODOLOGIE
- Domaines : novatech-solutions.fr, *.novatech-solutions.fr
- Période : [dates]
- Méthodologie : Reconnaissance 100% passive (OSINT)
- Outils : crt.sh, Shodan, ExifTool, Holehe, HIBP
- Limitations : Aucun test intrusif. Données publiques uniquement.

3. RÉSULTATS DÉTAILLÉS
[Voir sections détaillées par catégorie de risque]

4. MATRICE DES RISQUES
  Impact ↑
  Critique │ Jenkins   │ Breach emails
  Élevé    │ Staging   │ Métadonnées docs
  Moyen    │           │ LinkedIn exposure
  Faible   │           │
           └───────────┴──────────────────
             Probable    Possible   → Probabilité

5. RECOMMANDATIONS (par priorité)
P1 (immédiat) : Fermer l'accès Jenkins public
P1 (immédiat) : Reset des 3 comptes dans les fuites
P2 (1 mois)   : Nettoyer les métadonnées des documents publics
P2 (1 mois)   : Lancer un programme de sensibilisation phishing
P3 (3 mois)   : Politique de publication LinkedIn/réseaux sociaux

6. ANNEXES
- Captures d'écran horodatées
- Graphe d'infrastructure (DNSDumpster)
- Liste complète des sous-domaines identifiés
- Détail des fuites de données par employé</code></pre>

<h3>Checklist de qualité du rapport</h3>
<pre><code class="language-text">□ Résumé exécutif lisible en 2 minutes
□ Chaque trouvaille sourcée (URL, timestamp, capture)
□ Faits séparés des jugements analytiques
□ Niveau de confiance indiqué pour chaque conclusion
□ Recommandations actionnables et priorisées
□ Matrice de risques claire
□ Annexes complètes mais organisées
□ Classification du document indiquée
□ Numéro de référence unique
□ Mentions légales et clause de destruction</code></pre>
      `,quiz:[{id:"q8-5-1",question:"Pourquoi est-il essentiel de séparer les faits des jugements analytiques dans un rapport OSINT ?",options:["Pour augmenter le nombre de pages du rapport","Pour que le lecteur puisse évaluer la solidité de chaque conclusion et former son propre jugement","Parce que c'est une obligation légale du RGPD","Pour faciliter le copier-coller"],correct:1,explanation:"Séparer faits et jugements permet au lecteur d'évaluer la qualité des preuves et la solidité de l'analyse. Un rapport qui mélange les deux est invérifiable et perd sa crédibilité professionnelle."}]},{id:"l8-6",title:"Soutenance orale type briefing",content:`
<h2>🔬 Lab : Préparer et délivrer un briefing décisionnel</h2>
<p>La dernière compétence : transformer votre rapport en une présentation orale percutante de 15 minutes.</p>

<h3>Structure du briefing (15 minutes)</h3>
<pre><code class="language-text">0-2 min   : BLUF — "Voici ce qu'on a trouvé et ce que ça implique"
2-5 min   : Les 3 trouvailles les plus critiques (avec visuels)
5-8 min   : Démonstration live ou replay d'une attaque simulée
8-12 min  : Recommandations concrètes avec estimation de coût/effort
12-15 min : Questions / Discussion</code></pre>

<h3>Les 5 slides essentielles</h3>
<ol>
<li><strong>Slide BLUF :</strong> 3 bullets max. La conclusion, pas l'introduction.</li>
<li><strong>Slide Surface d'attaque :</strong> Graphe visuel de l'infrastructure exposée</li>
<li><strong>Slide Top 3 Risques :</strong> Criticité, preuve visuelle, impact</li>
<li><strong>Slide Phishing :</strong> Résultats de la campagne (taux de clic, signalement)</li>
<li><strong>Slide Recommandations :</strong> Actions priorisées avec timeline</li>
</ol>

<h3>Règles de présentation</h3>
<ul>
<li><strong>Pas de jargon non expliqué :</strong> Votre audience COMEX ne sait pas ce qu'est "crt.sh"</li>
<li><strong>Visuels > texte :</strong> Un graphe vaut mieux que 10 paragraphes</li>
<li><strong>Raconter une histoire :</strong> "Voici comment un attaquant pourrait vous compromettre en 4 étapes..."</li>
<li><strong>Anticiper le 'So what?' :</strong> Pour chaque trouvaille, expliquer l'impact business concret</li>
<li><strong>Rester factuel :</strong> Ne pas dramatiser, ne pas minimiser. Les faits suffisent.</li>
</ul>

<h3>Gestion de la posture</h3>
<ul>
<li>Connaître son sujet à fond (le brief ne représente que 10% de vos connaissances)</li>
<li>Préparer les réponses aux questions probables</li>
<li>Avoir un slide "Annexe" pour les questions techniques pointues</li>
<li>Terminer par une action : "Voici ce que nous recommandons de faire dès demain"</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🎯 L'objectif final</h3><p class="text-sm">Votre briefing a réussi si, 24 heures après, le décideur a lancé au moins une action corrective. Si le rapport finit dans un tiroir, c'est un échec de communication — pas d'analyse.</p></div></div>
      `,quiz:[{id:"q8-6-1",question:"Quel est le critère de succès réel d'un briefing OSINT ?",options:["Les diapositives sont esthétiquement réussies","Le public pose beaucoup de questions","Le décideur lance au moins une action corrective dans les 24-48h suivantes","La présentation dure exactement 15 minutes"],correct:2,explanation:"Un briefing réussi déclenche une action. Si le rapport finit dans un tiroir sans conséquence, la communication a échoué — même si l'analyse était excellente. L'objectif est de catalyser la décision."}]}]},a0={id:"m9",title:"Phase 9 — Spécialisation & Certification",icon:"GraduationCap",lessons:[{id:"l9-1",title:"Parcours de spécialisation OSINT",content:`
<h2>Choisir sa voie</h2>
<p>L'OSINT est un domaine vaste. Après avoir maîtrisé les fondamentaux, chaque analyste se spécialise dans un ou plusieurs domaines selon ses affinités et les besoins de son organisation.</p>

<h3>Spécialisations principales</h3>
<table>
<thead><tr><th>Spécialisation</th><th>Focus</th><th>Débouchés</th></tr></thead>
<tbody>
<tr><td><strong>CTI (Cyber Threat Intelligence)</strong></td><td>Suivi des groupes APT, analyse de malware, IOCs, dark web monitoring</td><td>SOC, CERT, éditeurs de sécurité</td></tr>
<tr><td><strong>GEOINT</strong></td><td>Imagerie satellite, géolocalisation, cartographie de conflits</td><td>Défense, journalisme d'investigation, ONG</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Réseaux sociaux, analyse de communautés, détection de propagande</td><td>Fact-checking, forces de l'ordre, renseignement</td></tr>
<tr><td><strong>FININT</strong></td><td>Flux financiers, blanchiment, crypto-traçage</td><td>Compliance, anti-fraude, régulateurs</td></tr>
<tr><td><strong>Red Team / SE</strong></td><td>Ingénierie sociale, pentest physique, phishing</td><td>Cabinets de cybersécurité, Red Teams internes</td></tr>
<tr><td><strong>Intelligence économique</strong></td><td>Veille concurrentielle, due diligence, M&A intelligence</td><td>Cabinets de conseil, direction stratégie</td></tr>
</tbody>
</table>

<h3>Certifications OSINT & adjacentes</h3>
<ul>
<li><strong>SEC497 / GOSI :</strong> SANS OSINT certification (la référence)</li>
<li><strong>OSCP :</strong> Offensive Security Certified Professional (pentest)</li>
<li><strong>GCTI :</strong> GIAC Cyber Threat Intelligence</li>
<li><strong>TCM OSINT :</strong> TCM Security OSINT course (niveau intermédiaire)</li>
<li><strong>Bellingcat workshops :</strong> Formation pratique par les experts du terrain</li>
</ul>

<h3>Communautés et ressources continues</h3>
<ul>
<li><strong>OSINT Framework :</strong> osintframework.com — annuaire d'outils catégorisé</li>
<li><strong>OSINT Curious :</strong> Podcast communautaire avec des praticiens</li>
<li><strong>Trace Labs :</strong> CTF OSINT humanitaire (recherche de personnes disparues)</li>
<li><strong>r/OSINT :</strong> Subreddit dédié à la communauté OSINT</li>
<li><strong>Bellingcat :</strong> Méthodologies d'investigation publiées en open source</li>
<li><strong>IntelTechniques (Michael Bazzell) :</strong> Ressource de référence sur l'OPSEC et l'OSINT</li>
</ul>
      `,quiz:[{id:"q9-1-1",question:"Quelle organisation propose des CTF OSINT humanitaires pour aider à retrouver des personnes disparues ?",options:["SANS Institute","Trace Labs","Bellingcat","Offensive Security"],correct:1,explanation:"Trace Labs organise des CTF (Capture The Flag) OSINT humanitaires où les participants utilisent leurs compétences pour aider les forces de l'ordre à retrouver des personnes disparues. C'est une excellente façon de pratiquer l'OSINT en ayant un impact réel."}]},{id:"l9-2",title:"Constitution d'un laboratoire OSINT",content:`
<h2>Construire votre station de travail d'analyste</h2>
<p>Un analyste OSINT professionnel a besoin d'un environnement de travail configuré pour la sécurité, l'efficacité, et la reproductibilité.</p>

<h3>Architecture recommandée</h3>
<pre><code class="language-text">┌─────────────────────────────────────────┐
│              Machine Hôte               │
│  OS : Windows / macOS / Linux           │
│  VPN toujours actif (CyberGhost, Mullvad)│
├─────────────────────────────────────────┤
│         VM OSINT (VirtualBox/VMware)    │
│  OS : Kali Linux ou Trace Labs VM       │
│  Navigateurs : Firefox + Tor Browser    │
│  Outils : Maltego, SpiderFoot, Holehe   │
│  Scripts : Python, Go, Bash             │
│  Comptes : Sock puppets dédiés          │
├─────────────────────────────────────────┤
│         VM Analyse (isolée)             │
│  OS : REMnux ou Flare-VM               │
│  Usage : Analyse de fichiers suspects   │
│  Réseau : NAT ou Host-only              │
├─────────────────────────────────────────┤
│         Tails / Whonix (USB)            │
│  Usage : Dark Web, navigation anonyme   │
│  Réseau : Tor uniquement                │
└─────────────────────────────────────────┘</code></pre>

<h3>Outils essentiels par catégorie</h3>
<table>
<thead><tr><th>Catégorie</th><th>Outils</th></tr></thead>
<tbody>
<tr><td><strong>Browser</strong></td><td>Firefox (compartimenté), Tor Browser, Brave</td></tr>
<tr><td><strong>Extensions</strong></td><td>Wappalyzer, Hunchly, uBlock Origin, NoScript</td></tr>
<tr><td><strong>Reconnaissance</strong></td><td>subfinder, amass, theHarvester, Maltego CE</td></tr>
<tr><td><strong>SOCMINT</strong></td><td>Sherlock, Maigret, Holehe, Instaloader, Twint</td></tr>
<tr><td><strong>Métadonnées</strong></td><td>ExifTool, FOCA, metagoofil</td></tr>
<tr><td><strong>Infra</strong></td><td>Shodan CLI, Censys, nmap (si autorisé), dig/nslookup</td></tr>
<tr><td><strong>Notes</strong></td><td>Obsidian (graphe de liens), CherryTree, Hunchly</td></tr>
<tr><td><strong>Capture</strong></td><td>Flameshot, OBS, archive.today</td></tr>
<tr><td><strong>Automatisation</strong></td><td>Python 3, SpiderFoot, n8n, théorie de pipeline</td></tr>
</tbody>
</table>

<h3>Gestion des comptes sock puppet</h3>
<ul>
<li>Créer des personas crédibles avec un historique (~2 semaines d'activité minimum)</li>
<li>Numéro de téléphone dédié (SIM prépayée ou VoIP comme MySudo)</li>
<li>Email dédié (ProtonMail ou service similaire)</li>
<li>VPN/Tor lors de la création et de l'utilisation</li>
<li>Ne JAMAIS croiser les comptes sock puppet avec vos comptes personnels</li>
<li>Documenter chaque sock puppet dans un registre sécurisé</li>
</ul>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">💰 Budget minimum</h3><p class="text-sm">Un lab OSINT fonctionnel peut être monté pour moins de 100€/an : VirtualBox (gratuit), Kali/Tails (gratuit), VPN (~60€/an), SIM prépayée (~10€), clé USB (Tails). Les outils premium (Maltego, Shodan membership) sont des plus, pas des prérequis.</p></div></div>
      `,quiz:[{id:"q9-2-1",question:"Pourquoi est-il critique de ne jamais croiser les comptes sock puppet avec vos comptes personnels ?",options:["Cela ferait consommer plus de données mobiles","Les algorithmes des plateformes pourraient relier vos comptes réels et d'investigation, compromettant votre OPSEC et votre identité","Cela prendrait trop de temps de gérer les deux","Les sock puppets coûtent cher à maintenir"],correct:1,explanation:"Les plateformes (Facebook, LinkedIn, Google) utilisent des signaux multiples (IP, navigateur, cookies, contacts) pour relier des comptes. Un croisement involontaire pourrait exposer votre identité réelle et compromettre l'investigation."}]},{id:"l9-3",title:"Veille continue & monitoring",content:`
<h2>L'OSINT ne s'arrête jamais</h2>
<p>La valeur de l'OSINT décuple quand elle passe du ponctuel au continu. La veille permanente permet de détecter les changements, les menaces émergentes, et les nouvelles expositions.</p>

<h3>Architecture de veille OSINT</h3>
<pre><code class="language-text">Sources → Collecte automatisée → Filtrage/Tri → Alerte → Analyse
              (APIs, RSS, scripts)    (règles)    (email/Slack)  (humain)</code></pre>

<h3>Outils de veille</h3>
<table>
<thead><tr><th>Outil</th><th>Usage</th></tr></thead>
<tbody>
<tr><td><strong>Google Alerts</strong></td><td>Surveillance de mentions (nom d'entreprise, dirigeants)</td></tr>
<tr><td><strong>Mention / Talkwalker</strong></td><td>Surveillance multi-plateforme avec analyse de sentiment</td></tr>
<tr><td><strong>SpiderFoot HX</strong></td><td>Scans OSINT automatisés récurrents</td></tr>
<tr><td><strong>Shodan Monitor</strong></td><td>Alertes sur changements d'infrastructure</td></tr>
<tr><td><strong>URLScan.io</strong></td><td>Surveillance de nouveaux domaines similaires (typosquatting)</td></tr>
<tr><td><strong>PhishTank</strong></td><td>Base communautaire de URLs de phishing</td></tr>
<tr><td><strong>Have I Been Pwned API</strong></td><td>Alertes en cas de nouvelle fuite touchant votre domaine</td></tr>
</tbody>
</table>

<h3>Veille par catégorie</h3>
<ul>
<li><strong>Veille de marque :</strong> Mentions de l'entreprise, domaines typosquattés, faux profils sociaux</li>
<li><strong>Veille technique :</strong> Nouveaux sous-domaines, changements de configuration, nouvelles CVE sur la stack</li>
<li><strong>Veille de fuite :</strong> Emails corporate dans de nouvelles breaches, documents confidentiels publiés</li>
<li><strong>Veille dark web :</strong> Mentions sur les forums, vente d'accès ou de données</li>
<li><strong>Veille concurrentielle :</strong> Recrutements, brevets, partenariats des concurrents</li>
</ul>
      `,quiz:[{id:"q9-3-1",question:"Quel outil permet de surveiller les changements d'infrastructure (nouveaux ports, services) sur vos IPs ?",options:["Google Alerts","Shodan Monitor","PhishTank","Have I Been Pwned"],correct:1,explanation:"Shodan Monitor permet de surveiller en continu les IPs et domaines de votre organisation et d'envoyer des alertes quand de nouveaux services apparaissent, des ports s'ouvrent, ou des configurations changent."}]},{id:"l9-4",title:"Éthique avancée & dilemmes",content:`
<h2>Les zones grises de l'OSINT</h2>
<p>Au-delà du cadre légal noir et blanc, l'analyste OSINT fait face à des dilemmes éthiques complexes où le "droit" et le "juste" ne coïncident pas toujours.</p>

<h3>Dilemme 1 : La donnée publique mais intime</h3>
<p>Un profil Facebook public révèle qu'un dirigeant souffre d'une maladie grave. L'information est techniquement publique et pourrait être pertinente pour une due diligence.</p>
<ul>
<li><strong>Pour :</strong> Pertinent pour évaluer le risque de leadership d'une entreprise</li>
<li><strong>Contre :</strong> Donnée de santé protégée par le RGPD (catégorie spéciale). Exploitation éthiquement discutable.</li>
<li><strong>Décision recommandée :</strong> Ne pas inclure dans le rapport. Signaler le risque de protection des données au client sans détailler.</li>
</ul>

<h3>Dilemme 2 : L'informateur involontaire</h3>
<p>Un employé publie involontairement des données techniques confidentielles sur un forum public. Vous les trouvez lors de votre audit.</p>
<ul>
<li><strong>Pour :</strong> Démontrer le risque d'exposition involontaire</li>
<li><strong>Contre :</strong> L'employé pourrait être sanctionné si vous le nommez</li>
<li><strong>Décision recommandée :</strong> Documenter la fuite sans identifier nommément l'employé. Recommander une formation de sensibilisation générale.</li>
</ul>

<h3>Dilemme 3 : La zone grise transfrontalière</h3>
<p>Une investigation légitime en France nécessite de collecter des données sur un individu basé dans un pays sans protection des données.</p>
<ul>
<li><strong>Règle :</strong> Appliquer toujours le standard le plus protecteur (RGPD) quelle que soit la localisation de la cible</li>
</ul>

<h3>Framework de décision éthique</h3>
<pre><code class="language-text">Pour chaque donnée sensible trouvée, poser ces 5 questions :

1. LÉGALITÉ : Ai-je le droit de collecter cette donnée ?
2. PROPORTIONNALITÉ : Cette donnée est-elle nécessaire pour répondre au PIR ?
3. MINIMISATION : Puis-je atteindre le même objectif avec moins de données ?
4. IMPACT : Quel tort potentiel si cette donnée est mal utilisée ?
5. TEST DU JOURNAL : Serais-je à l'aise si cette analyse était publiée dans la presse ?

Si la réponse à la question 5 est "non", reconsidérez votre approche.</code></pre>
      `,quiz:[{id:"q9-4-1",question:"Lors d'un audit, vous trouvez une publication Facebook publique révélant la maladie d'un dirigeant. Quelle est la bonne pratique ?",options:["L'inclure dans le rapport car l'info est publique","Ne pas l'inclure — les données de santé sont une catégorie spéciale RGPD, et l'exploitation est éthiquement discutable","La vendre comme renseignement compétitif","Contacter le dirigeant pour le prévenir"],correct:1,explanation:"Les données de santé sont une catégorie spéciale sous le RGPD (Article 9), nécessitant un consentement explicite pour leur traitement. Même si l'information est publiquement accessible, l'inclure dans un rapport d'audit pourrait violer le RGPD et constitue une exploitation éthiquement contestable."}]},{id:"l9-5",title:"Examen final théorique",content:`
<h2>📝 Évaluation finale — Partie théorique</h2>
<p>Cette évaluation couvre l'ensemble des 9 phases du cours. Chaque question teste votre compréhension et votre capacité d'analyse, pas simplement votre mémoire.</p>

<div class="alert-box alert-info mb-4"><div><h3 class="font-bold text-sm mb-1">📋 Consignes</h3><p class="text-sm">Répondez à toutes les questions. En cas de doute, relisez les chapitres correspondants. Le score de passage est de <strong>80%</strong>.</p></div></div>

<h3>Domaines évalués</h3>
<table>
<thead><tr><th>Domaine</th><th>Poids</th></tr></thead>
<tbody>
<tr><td>Cadre légal & éthique</td><td>15%</td></tr>
<tr><td>Méthodologie (cycle du renseignement)</td><td>20%</td></tr>
<tr><td>Techniques de collecte OSINT</td><td>25%</td></tr>
<tr><td>Analyse & corrélation</td><td>20%</td></tr>
<tr><td>Ingénierie sociale</td><td>10%</td></tr>
<tr><td>Rédaction & communication</td><td>10%</td></tr>
</tbody>
</table>

<h3>Conseils de révision</h3>
<ul>
<li>Relisez les études de cas de la Phase 8 pour ancrer la théorie dans la pratique</li>
<li>Maîtrisez le vocabulaire analytique (évaluer, estimer, juger vs je pense)</li>
<li>Connaissez les limites légales par coeur (RGPD, Godfrain, Bluetouff)</li>
<li>Comprenez les outils non pas dans leur utilisation technique mais dans leur pertinence analytique</li>
<li>Soyez capable d'expliquer la différence entre corrélation et causalité avec des exemples</li>
</ul>
      `,quiz:[{id:"q9-5-1",question:"Un analyste OSINT découvre un document estampillé 'Confidentiel' indexé par Google sur le site web public de la cible. Quelle est la meilleure conduite à tenir ?",options:["Le télécharger et l'analyser en détail car il est publiquement accessible","Le documenter objectivement dans le rapport en recommandant sa suppression, mais ne pas exploiter le contenu au-delà de ce qui est nécessaire","L'ignorer car il est marqué confidentiel","Le publier sur les réseaux sociaux pour alerter"],correct:1,explanation:"Le document est publiquement accessible (indexé par Google), donc sa consultation n'est pas illicite. Cependant, son exploitation doit rester proportionnée au PIR de la mission. Il faut le documenter comme trouvaille (preuve d'exposition involontaire) et recommander sa suppression, sans exploiter le contenu sensible au-delà du nécessaire."},{id:"q9-5-2",question:"Quel est l'ordre correct des phases du cycle du renseignement ?",options:["Collecte → Direction → Analyse → Traitement → Diffusion","Direction → Collecte → Traitement → Analyse → Diffusion","Analyse → Collecte → Direction → Diffusion → Traitement","Diffusion → Direction → Collecte → Analyse → Traitement"],correct:1,explanation:"Le cycle du renseignement suit l'ordre : Direction (planification) → Collecte (données brutes) → Traitement (nettoyage, structuration) → Analyse (transformation en intelligence) → Diffusion (livraison au décideur). Le cycle est itératif."},{id:"q9-5-3",question:"Vous avez identifié 3 sous-domaines via crt.sh : staging.target.com, dev.target.com, et jenkins.target.com. Quel est le plus critique à signaler prioritairement ?",options:["staging.target.com","dev.target.com","jenkins.target.com","Les trois ont la même criticité"],correct:2,explanation:"Jenkins est un serveur d'intégration continue qui, s'il est exposé sans authentification, peut donner accès au code source, aux pipelines de build, aux secrets (clés API, mots de passe), et potentiellement permettre l'exécution de code arbitraire."},{id:"q9-5-4",question:"Quel principe de Cialdini est le plus exploité dans les fraudes au président (BEC) ?",options:["Réciprocité","Preuve sociale","Autorité","Rareté"],correct:2,explanation:"Les BEC exploitent principalement le principe d'autorité : l'attaquant usurpe l'identité du PDG ou d'un dirigeant pour ordonner un virement urgent. L'employé obéit car la demande vient d'une figure d'autorité hiérarchique."},{id:"q9-5-5",question:"En ACH, comment identifie-t-on l'hypothèse la plus probable ?",options:["C'est celle qui a le plus de preuves 'cohérentes'","C'est celle qui a le MOINS d'incohérences avec les preuves","C'est la première formulée","C'est celle soutenue par le plus d'analystes"],correct:1,explanation:"L'ACH (Analysis of Competing Hypotheses) fonctionne par falsification, pas par confirmation. L'hypothèse retenue est celle qui résiste le mieux aux preuves — c'est-à-dire celle qui a le moins d'incohérences/contradictions avec l'ensemble des données disponibles."}]},{id:"l9-6",title:"Projet final & synthèse",content:`
<h2>🎓 Projet de certification finale</h2>
<p>Félicitations — vous avez terminé les 9 phases du parcours OSINT & Ingénierie Sociale. Ce dernier chapitre synthétise les compétences acquises et propose un projet final intégrateur.</p>

<h3>Projet final : Audit OSINT complet</h3>
<p>Réalisez un audit OSINT complet sur un domaine que vous possédez ou un domaine de test autorisé. Le livrable attendu est un <strong>rapport professionnel</strong> couvrant :</p>
<ol>
<li><strong>Cartographie du domaine :</strong> Sous-domaines, DNS, infrastructure (crt.sh, subfinder, dig)</li>
<li><strong>Analyse d'infrastructure :</strong> Services exposés, versions, Shadow IT (Shodan, Censys)</li>
<li><strong>OSINT organisationnel :</strong> Organigramme, stack technique, documents exposés (LinkedIn, Google Dorks)</li>
<li><strong>Analyse des fuites :</strong> Emails dans les breaches, credentials exposés (HIBP)</li>
<li><strong>Métadonnées :</strong> Extraction et analyse des documents publics (ExifTool)</li>
<li><strong>Campagne de phishing simulée :</strong> Scénario basé sur l'OSINT (prétexte uniquement, pas d'exécution réelle)</li>
<li><strong>Rapport exécutif :</strong> Format professionnel avec résumé, matrice de risques, et recommandations priorisées</li>
</ol>

<h3>Grille d'évaluation</h3>
<table>
<thead><tr><th>Critère</th><th>Pondération</th></tr></thead>
<tbody>
<tr><td>Complétude de la collecte</td><td>20%</td></tr>
<tr><td>Qualité de l'analyse (hypothèses, corrélations)</td><td>25%</td></tr>
<tr><td>Pertinence des recommandations</td><td>15%</td></tr>
<tr><td>Qualité rédactionnelle du rapport</td><td>20%</td></tr>
<tr><td>Respect du cadre légal et éthique</td><td>10%</td></tr>
<tr><td>Originalité de l'approche et créativité</td><td>10%</td></tr>
</tbody>
</table>

<h3>Synthèse du parcours</h3>
<pre><code class="language-text">Phase 0 : Mentalité & cadre éthique/légal
Phase 1 : Fondamentaux de la recherche
Phase 2 : OSINT humain (personnes)
Phase 3 : OSINT organisationnel & technique
Phase 4 : SOCMINT (réseaux sociaux)
Phase 5 : Méthodologie d'enquête
Phase 6 : Ingénierie sociale
Phase 7 : OSINT avancé (GEOINT, IA, automation)
Phase 8 : Labs & mise en situation
Phase 9 : Spécialisation & certification</code></pre>

<div class="alert-box alert-info"><div><h3 class="font-bold text-sm mb-1">🌟 Message final</h3><p class="text-sm">L'OSINT est un superpouvoir. Comme tout superpouvoir, il vient avec une responsabilité. Utilisez vos compétences pour protéger, pour informer, pour défendre. L'éthique n'est pas une contrainte — c'est ce qui fait de vous un professionnel respectable. Bonne continuation, analyste.</p></div></div>
      `,quiz:[{id:"q9-6-1",question:"Quel est le critère le plus important dans l'évaluation d'un rapport OSINT professionnel ?",options:["La longueur du rapport","La qualité de l'analyse (hypothèses bien formulées, corrélations vérifiées, niveau de confiance explicite)","Le nombre d'outils utilisés","La vitesse de réalisation"],correct:1,explanation:"La qualité de l'analyse est le critère le plus important : des hypothèses bien formulées, des corrélations vérifiées par au moins 2 sources indépendantes, et un niveau de confiance explicite pour chaque conclusion. C'est ce qui différencie un analyste d'un simple collecteur de données."}]}]},Wa=[Fy,Jy,Ky,Wy,$y,e0,t0,n0,i0,a0],Ja=Wa.flatMap(l=>l.lessons),Hm=l=>{let u;const c=new Set,o=(f,C)=>{const q=typeof f=="function"?f(u):f;if(!Object.is(q,u)){const I=u;u=C??(typeof q!="object"||q===null)?q:Object.assign({},u,q),c.forEach(G=>G(u,I))}},p=()=>u,y={setState:o,getState:p,getInitialState:()=>h,subscribe:f=>(c.add(f),()=>c.delete(f))},h=u=l(o,p,y);return y},s0=(l=>l?Hm(l):Hm),l0=l=>l;function r0(l,u=l0){const c=bl.useSyncExternalStore(l.subscribe,bl.useCallback(()=>u(l.getState()),[l,u]),bl.useCallback(()=>u(l.getInitialState()),[l,u]));return bl.useDebugValue(c),c}const Bm=l=>{const u=s0(l),c=o=>r0(u,o);return Object.assign(c,u),c},o0=(l=>l?Bm(l):Bm);function u0(l,u){let c;try{c=l()}catch{return}return{getItem:p=>{var m;const g=h=>h===null?null:JSON.parse(h,void 0),y=(m=c.getItem(p))!=null?m:null;return y instanceof Promise?y.then(g):g(y)},setItem:(p,m)=>c.setItem(p,JSON.stringify(m,void 0)),removeItem:p=>c.removeItem(p)}}const uu=l=>u=>{try{const c=l(u);return c instanceof Promise?c:{then(o){return uu(o)(c)},catch(o){return this}}}catch(c){return{then(o){return this},catch(o){return uu(o)(c)}}}},c0=(l,u)=>(c,o,p)=>{let m={storage:u0(()=>window.localStorage),partialize:M=>M,version:0,merge:(M,X)=>({...X,...M}),...u},g=!1,y=0;const h=new Set,f=new Set;let C=m.storage;if(!C)return l((...M)=>{console.warn(`[zustand persist middleware] Unable to update item '${m.name}', the given storage is currently unavailable.`),c(...M)},o,p);const q=()=>{const M=m.partialize({...o()});return C.setItem(m.name,{state:M,version:m.version})},I=p.setState;p.setState=(M,X)=>(I(M,X),q());const G=l((...M)=>(c(...M),q()),o,p);p.getInitialState=()=>G;let _;const j=()=>{var M,X;if(!C)return;const ie=++y;g=!1,h.forEach(ae=>{var se;return ae((se=o())!=null?se:G)});const J=((X=m.onRehydrateStorage)==null?void 0:X.call(m,(M=o())!=null?M:G))||void 0;return uu(C.getItem.bind(C))(m.name).then(ae=>{if(ae)if(typeof ae.version=="number"&&ae.version!==m.version){if(m.migrate){const se=m.migrate(ae.state,ae.version);return se instanceof Promise?se.then(he=>[!0,he]):[!0,se]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,ae.state];return[!1,void 0]}).then(ae=>{var se;if(ie!==y)return;const[he,ee]=ae;if(_=m.merge(ee,(se=o())!=null?se:G),c(_,!0),he)return q()}).then(()=>{ie===y&&(J?.(_,void 0),_=o(),g=!0,f.forEach(ae=>ae(_)))}).catch(ae=>{ie===y&&J?.(void 0,ae)})};return p.persist={setOptions:M=>{m={...m,...M},M.storage&&(C=M.storage)},clearStorage:()=>{C?.removeItem(m.name)},getOptions:()=>m,rehydrate:()=>j(),hasHydrated:()=>g,onHydrate:M=>(h.add(M),()=>{h.delete(M)}),onFinishHydration:M=>(f.add(M),()=>{f.delete(M)})},m.skipHydration||j(),_||G},d0=c0,Ll=o0(d0((l,u)=>({completedLessons:[],theme:"light",toggleLessonCompletion:c=>{l(o=>o.completedLessons.includes(c)?{completedLessons:o.completedLessons.filter(m=>m!==c)}:{completedLessons:[...o.completedLessons,c]})},toggleTheme:()=>{l(c=>{const o=c.theme==="light"?"dark":"light";return o==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),{theme:o}})},setTheme:c=>{c==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),l({theme:c})},resetProgress:()=>l({completedLessons:[]})}),{name:"osint-course-storage",partialize:l=>({completedLessons:l.completedLessons,theme:l.theme})}));function yf(l){var u,c,o="";if(typeof l=="string"||typeof l=="number")o+=l;else if(typeof l=="object")if(Array.isArray(l)){var p=l.length;for(u=0;u<p;u++)l[u]&&(c=yf(l[u]))&&(o&&(o+=" "),o+=c)}else for(c in l)l[c]&&(o&&(o+=" "),o+=c);return o}function p0(){for(var l,u,c=0,o="",p=arguments.length;c<p;c++)(l=arguments[c])&&(u=yf(l))&&(o&&(o+=" "),o+=u);return o}const m0=(l,u)=>{const c=new Array(l.length+u.length);for(let o=0;o<l.length;o++)c[o]=l[o];for(let o=0;o<u.length;o++)c[l.length+o]=u[o];return c},f0=(l,u)=>({classGroupId:l,validator:u}),xf=(l=new Map,u=null,c)=>({nextPart:l,validators:u,classGroupId:c}),El="-",Gm=[],h0="arbitrary..",g0=l=>{const u=b0(l),{conflictingClassGroups:c,conflictingClassGroupModifiers:o}=l;return{getClassGroupId:g=>{if(g.startsWith("[")&&g.endsWith("]"))return v0(g);const y=g.split(El),h=y[0]===""&&y.length>1?1:0;return Sf(y,h,u)},getConflictingClassGroupIds:(g,y)=>{if(y){const h=o[g],f=c[g];return h?f?m0(f,h):h:f||Gm}return c[g]||Gm}}},Sf=(l,u,c)=>{if(l.length-u===0)return c.classGroupId;const p=l[u],m=c.nextPart.get(p);if(m){const f=Sf(l,u+1,m);if(f)return f}const g=c.validators;if(g===null)return;const y=u===0?l.join(El):l.slice(u).join(El),h=g.length;for(let f=0;f<h;f++){const C=g[f];if(C.validator(y))return C.classGroupId}},v0=l=>l.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const u=l.slice(1,-1),c=u.indexOf(":"),o=u.slice(0,c);return o?h0+o:void 0})(),b0=l=>{const{theme:u,classGroups:c}=l;return y0(c,u)},y0=(l,u)=>{const c=xf();for(const o in l){const p=l[o];yu(p,c,o,u)}return c},yu=(l,u,c,o)=>{const p=l.length;for(let m=0;m<p;m++){const g=l[m];x0(g,u,c,o)}},x0=(l,u,c,o)=>{if(typeof l=="string"){S0(l,u,c);return}if(typeof l=="function"){q0(l,u,c,o);return}T0(l,u,c,o)},S0=(l,u,c)=>{const o=l===""?u:qf(u,l);o.classGroupId=c},q0=(l,u,c,o)=>{if(C0(l)){yu(l(o),u,c,o);return}u.validators===null&&(u.validators=[]),u.validators.push(f0(c,l))},T0=(l,u,c,o)=>{const p=Object.entries(l),m=p.length;for(let g=0;g<m;g++){const[y,h]=p[g];yu(h,qf(u,y),c,o)}},qf=(l,u)=>{let c=l;const o=u.split(El),p=o.length;for(let m=0;m<p;m++){const g=o[m];let y=c.nextPart.get(g);y||(y=xf(),c.nextPart.set(g,y)),c=y}return c},C0=l=>"isThemeGetter"in l&&l.isThemeGetter===!0,A0=l=>{if(l<1)return{get:()=>{},set:()=>{}};let u=0,c=Object.create(null),o=Object.create(null);const p=(m,g)=>{c[m]=g,u++,u>l&&(u=0,o=c,c=Object.create(null))};return{get(m){let g=c[m];if(g!==void 0)return g;if((g=o[m])!==void 0)return p(m,g),g},set(m,g){m in c?c[m]=g:p(m,g)}}},cu="!",Pm=":",E0=[],Vm=(l,u,c,o,p)=>({modifiers:l,hasImportantModifier:u,baseClassName:c,maybePostfixModifierPosition:o,isExternal:p}),O0=l=>{const{prefix:u,experimentalParseClassName:c}=l;let o=p=>{const m=[];let g=0,y=0,h=0,f;const C=p.length;for(let j=0;j<C;j++){const M=p[j];if(g===0&&y===0){if(M===Pm){m.push(p.slice(h,j)),h=j+1;continue}if(M==="/"){f=j;continue}}M==="["?g++:M==="]"?g--:M==="("?y++:M===")"&&y--}const q=m.length===0?p:p.slice(h);let I=q,G=!1;q.endsWith(cu)?(I=q.slice(0,-1),G=!0):q.startsWith(cu)&&(I=q.slice(1),G=!0);const _=f&&f>h?f-h:void 0;return Vm(m,G,I,_)};if(u){const p=u+Pm,m=o;o=g=>g.startsWith(p)?m(g.slice(p.length)):Vm(E0,!1,g,void 0,!0)}if(c){const p=o;o=m=>c({className:m,parseClassName:p})}return o},D0=l=>{const u=new Map;return l.orderSensitiveModifiers.forEach((c,o)=>{u.set(c,1e6+o)}),c=>{const o=[];let p=[];for(let m=0;m<c.length;m++){const g=c[m],y=g[0]==="[",h=u.has(g);y||h?(p.length>0&&(p.sort(),o.push(...p),p=[]),o.push(g)):p.push(g)}return p.length>0&&(p.sort(),o.push(...p)),o}},N0=l=>({cache:A0(l.cacheSize),parseClassName:O0(l),sortModifiers:D0(l),...g0(l)}),L0=/\s+/,R0=(l,u)=>{const{parseClassName:c,getClassGroupId:o,getConflictingClassGroupIds:p,sortModifiers:m}=u,g=[],y=l.trim().split(L0);let h="";for(let f=y.length-1;f>=0;f-=1){const C=y[f],{isExternal:q,modifiers:I,hasImportantModifier:G,baseClassName:_,maybePostfixModifierPosition:j}=c(C);if(q){h=C+(h.length>0?" "+h:h);continue}let M=!!j,X=o(M?_.substring(0,j):_);if(!X){if(!M){h=C+(h.length>0?" "+h:h);continue}if(X=o(_),!X){h=C+(h.length>0?" "+h:h);continue}M=!1}const ie=I.length===0?"":I.length===1?I[0]:m(I).join(":"),J=G?ie+cu:ie,ae=J+X;if(g.indexOf(ae)>-1)continue;g.push(ae);const se=p(X,M);for(let he=0;he<se.length;++he){const ee=se[he];g.push(J+ee)}h=C+(h.length>0?" "+h:h)}return h},M0=(...l)=>{let u=0,c,o,p="";for(;u<l.length;)(c=l[u++])&&(o=Tf(c))&&(p&&(p+=" "),p+=o);return p},Tf=l=>{if(typeof l=="string")return l;let u,c="";for(let o=0;o<l.length;o++)l[o]&&(u=Tf(l[o]))&&(c&&(c+=" "),c+=u);return c},z0=(l,...u)=>{let c,o,p,m;const g=h=>{const f=u.reduce((C,q)=>q(C),l());return c=N0(f),o=c.cache.get,p=c.cache.set,m=y,y(h)},y=h=>{const f=o(h);if(f)return f;const C=R0(h,c);return p(h,C),C};return m=g,(...h)=>m(M0(...h))},k0=[],Qe=l=>{const u=c=>c[l]||k0;return u.isThemeGetter=!0,u},Cf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Af=/^\((?:(\w[\w-]*):)?(.+)\)$/i,w0=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,I0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,U0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,_0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,H0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Gn=l=>w0.test(l),ce=l=>!!l&&!Number.isNaN(Number(l)),Pn=l=>!!l&&Number.isInteger(Number(l)),au=l=>l.endsWith("%")&&ce(l.slice(0,-1)),pn=l=>I0.test(l),Ef=()=>!0,B0=l=>j0.test(l)&&!U0.test(l),xu=()=>!1,G0=l=>_0.test(l),P0=l=>H0.test(l),V0=l=>!Y(l)&&!Z(l),Q0=l=>Vn(l,Nf,xu),Y=l=>Cf.test(l),ui=l=>Vn(l,Lf,B0),Qm=l=>Vn(l,$0,ce),X0=l=>Vn(l,Mf,Ef),Y0=l=>Vn(l,Rf,xu),Xm=l=>Vn(l,Of,xu),Z0=l=>Vn(l,Df,P0),xl=l=>Vn(l,zf,G0),Z=l=>Af.test(l),Fa=l=>ci(l,Lf),F0=l=>ci(l,Rf),Ym=l=>ci(l,Of),J0=l=>ci(l,Nf),K0=l=>ci(l,Df),Sl=l=>ci(l,zf,!0),W0=l=>ci(l,Mf,!0),Vn=(l,u,c)=>{const o=Cf.exec(l);return o?o[1]?u(o[1]):c(o[2]):!1},ci=(l,u,c=!1)=>{const o=Af.exec(l);return o?o[1]?u(o[1]):c:!1},Of=l=>l==="position"||l==="percentage",Df=l=>l==="image"||l==="url",Nf=l=>l==="length"||l==="size"||l==="bg-size",Lf=l=>l==="length",$0=l=>l==="number",Rf=l=>l==="family-name",Mf=l=>l==="number"||l==="weight",zf=l=>l==="shadow",ex=()=>{const l=Qe("color"),u=Qe("font"),c=Qe("text"),o=Qe("font-weight"),p=Qe("tracking"),m=Qe("leading"),g=Qe("breakpoint"),y=Qe("container"),h=Qe("spacing"),f=Qe("radius"),C=Qe("shadow"),q=Qe("inset-shadow"),I=Qe("text-shadow"),G=Qe("drop-shadow"),_=Qe("blur"),j=Qe("perspective"),M=Qe("aspect"),X=Qe("ease"),ie=Qe("animate"),J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ae=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],se=()=>[...ae(),Z,Y],he=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto","contain","none"],P=()=>[Z,Y,h],qe=()=>[Gn,"full","auto",...P()],dt=()=>[Pn,"none","subgrid",Z,Y],nt=()=>["auto",{span:["full",Pn,Z,Y]},Pn,Z,Y],je=()=>[Pn,"auto",Z,Y],pt=()=>["auto","min","max","fr",Z,Y],et=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ne=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...P()],U=()=>[Gn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],te=()=>[Gn,"screen","full","dvw","lvw","svw","min","max","fit",...P()],be=()=>[Gn,"screen","full","lh","dvh","lvh","svh","min","max","fit",...P()],H=()=>[l,Z,Y],x=()=>[...ae(),Ym,Xm,{position:[Z,Y]}],w=()=>["no-repeat",{repeat:["","x","y","space","round"]}],B=()=>["auto","cover","contain",J0,Q0,{size:[Z,Y]}],V=()=>[au,Fa,ui],K=()=>["","none","full",f,Z,Y],$=()=>["",ce,Fa,ui],ge=()=>["solid","dashed","dotted","double"],Xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>[ce,au,Ym,Xm],hn=()=>["","none",_,Z,Y],Xt=()=>["none",ce,Z,Y],gn=()=>["none",ce,Z,Y],di=()=>[ce,Z,Y],At=()=>[Gn,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[pn],breakpoint:[pn],color:[Ef],container:[pn],"drop-shadow":[pn],ease:["in","out","in-out"],font:[V0],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[pn],shadow:[pn],spacing:["px",ce],text:[pn],"text-shadow":[pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Gn,Y,Z,M]}],container:["container"],columns:[{columns:[ce,Y,Z,y]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:se()}],overflow:[{overflow:he()}],"overflow-x":[{"overflow-x":he()}],"overflow-y":[{"overflow-y":he()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:qe()}],"inset-x":[{"inset-x":qe()}],"inset-y":[{"inset-y":qe()}],start:[{"inset-s":qe(),start:qe()}],end:[{"inset-e":qe(),end:qe()}],"inset-bs":[{"inset-bs":qe()}],"inset-be":[{"inset-be":qe()}],top:[{top:qe()}],right:[{right:qe()}],bottom:[{bottom:qe()}],left:[{left:qe()}],visibility:["visible","invisible","collapse"],z:[{z:[Pn,"auto",Z,Y]}],basis:[{basis:[Gn,"full","auto",y,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ce,Gn,"auto","initial","none",Y]}],grow:[{grow:["",ce,Z,Y]}],shrink:[{shrink:["",ce,Z,Y]}],order:[{order:[Pn,"first","last","none",Z,Y]}],"grid-cols":[{"grid-cols":dt()}],"col-start-end":[{col:nt()}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":dt()}],"row-start-end":[{row:nt()}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...et(),"normal"]}],"justify-items":[{"justify-items":[...Ne(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ne()]}],"align-content":[{content:["normal",...et()]}],"align-items":[{items:[...Ne(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ne(),{baseline:["","last"]}]}],"place-content":[{"place-content":et()}],"place-items":[{"place-items":[...Ne(),"baseline"]}],"place-self":[{"place-self":["auto",...Ne()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pbs:[{pbs:P()}],pbe:[{pbe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mbs:[{mbs:L()}],mbe:[{mbe:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:U()}],"inline-size":[{inline:["auto",...te()]}],"min-inline-size":[{"min-inline":["auto",...te()]}],"max-inline-size":[{"max-inline":["none",...te()]}],"block-size":[{block:["auto",...be()]}],"min-block-size":[{"min-block":["auto",...be()]}],"max-block-size":[{"max-block":["none",...be()]}],w:[{w:[y,"screen",...U()]}],"min-w":[{"min-w":[y,"screen","none",...U()]}],"max-w":[{"max-w":[y,"screen","none","prose",{screen:[g]},...U()]}],h:[{h:["screen","lh",...U()]}],"min-h":[{"min-h":["screen","lh","none",...U()]}],"max-h":[{"max-h":["screen","lh",...U()]}],"font-size":[{text:["base",c,Fa,ui]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,W0,X0]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",au,Y]}],"font-family":[{font:[F0,Y0,u]}],"font-features":[{"font-features":[Y]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[p,Z,Y]}],"line-clamp":[{"line-clamp":[ce,"none",Z,Qm]}],leading:[{leading:[m,...P()]}],"list-image":[{"list-image":["none",Z,Y]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,Y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ge(),"wavy"]}],"text-decoration-thickness":[{decoration:[ce,"from-font","auto",Z,ui]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[ce,"auto",Z,Y]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:x()}],"bg-repeat":[{bg:w()}],"bg-size":[{bg:B()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Pn,Z,Y],radial:["",Z,Y],conic:[Pn,Z,Y]},K0,Z0]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:K()}],"rounded-s":[{"rounded-s":K()}],"rounded-e":[{"rounded-e":K()}],"rounded-t":[{"rounded-t":K()}],"rounded-r":[{"rounded-r":K()}],"rounded-b":[{"rounded-b":K()}],"rounded-l":[{"rounded-l":K()}],"rounded-ss":[{"rounded-ss":K()}],"rounded-se":[{"rounded-se":K()}],"rounded-ee":[{"rounded-ee":K()}],"rounded-es":[{"rounded-es":K()}],"rounded-tl":[{"rounded-tl":K()}],"rounded-tr":[{"rounded-tr":K()}],"rounded-br":[{"rounded-br":K()}],"rounded-bl":[{"rounded-bl":K()}],"border-w":[{border:$()}],"border-w-x":[{"border-x":$()}],"border-w-y":[{"border-y":$()}],"border-w-s":[{"border-s":$()}],"border-w-e":[{"border-e":$()}],"border-w-bs":[{"border-bs":$()}],"border-w-be":[{"border-be":$()}],"border-w-t":[{"border-t":$()}],"border-w-r":[{"border-r":$()}],"border-w-b":[{"border-b":$()}],"border-w-l":[{"border-l":$()}],"divide-x":[{"divide-x":$()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":$()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ge(),"hidden","none"]}],"divide-style":[{divide:[...ge(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-bs":[{"border-bs":H()}],"border-color-be":[{"border-be":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...ge(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ce,Z,Y]}],"outline-w":[{outline:["",ce,Fa,ui]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",C,Sl,xl]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",q,Sl,xl]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[ce,ui]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":$()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",I,Sl,xl]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[ce,Z,Y]}],"mix-blend":[{"mix-blend":[...Xe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Xe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":ue()}],"mask-image-linear-to-pos":[{"mask-linear-to":ue()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":ue()}],"mask-image-t-to-pos":[{"mask-t-to":ue()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":ue()}],"mask-image-r-to-pos":[{"mask-r-to":ue()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":ue()}],"mask-image-b-to-pos":[{"mask-b-to":ue()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":ue()}],"mask-image-l-to-pos":[{"mask-l-to":ue()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":ue()}],"mask-image-x-to-pos":[{"mask-x-to":ue()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":ue()}],"mask-image-y-to-pos":[{"mask-y-to":ue()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[Z,Y]}],"mask-image-radial-from-pos":[{"mask-radial-from":ue()}],"mask-image-radial-to-pos":[{"mask-radial-to":ue()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ae()}],"mask-image-conic-pos":[{"mask-conic":[ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":ue()}],"mask-image-conic-to-pos":[{"mask-conic-to":ue()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:x()}],"mask-repeat":[{mask:w()}],"mask-size":[{mask:B()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Z,Y]}],filter:[{filter:["","none",Z,Y]}],blur:[{blur:hn()}],brightness:[{brightness:[ce,Z,Y]}],contrast:[{contrast:[ce,Z,Y]}],"drop-shadow":[{"drop-shadow":["","none",G,Sl,xl]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",ce,Z,Y]}],"hue-rotate":[{"hue-rotate":[ce,Z,Y]}],invert:[{invert:["",ce,Z,Y]}],saturate:[{saturate:[ce,Z,Y]}],sepia:[{sepia:["",ce,Z,Y]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,Y]}],"backdrop-blur":[{"backdrop-blur":hn()}],"backdrop-brightness":[{"backdrop-brightness":[ce,Z,Y]}],"backdrop-contrast":[{"backdrop-contrast":[ce,Z,Y]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ce,Z,Y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ce,Z,Y]}],"backdrop-invert":[{"backdrop-invert":["",ce,Z,Y]}],"backdrop-opacity":[{"backdrop-opacity":[ce,Z,Y]}],"backdrop-saturate":[{"backdrop-saturate":[ce,Z,Y]}],"backdrop-sepia":[{"backdrop-sepia":["",ce,Z,Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,Y]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ce,"initial",Z,Y]}],ease:[{ease:["linear","initial",X,Z,Y]}],delay:[{delay:[ce,Z,Y]}],animate:[{animate:["none",ie,Z,Y]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[j,Z,Y]}],"perspective-origin":[{"perspective-origin":se()}],rotate:[{rotate:Xt()}],"rotate-x":[{"rotate-x":Xt()}],"rotate-y":[{"rotate-y":Xt()}],"rotate-z":[{"rotate-z":Xt()}],scale:[{scale:gn()}],"scale-x":[{"scale-x":gn()}],"scale-y":[{"scale-y":gn()}],"scale-z":[{"scale-z":gn()}],"scale-3d":["scale-3d"],skew:[{skew:di()}],"skew-x":[{"skew-x":di()}],"skew-y":[{"skew-y":di()}],transform:[{transform:[Z,Y,"","none","gpu","cpu"]}],"transform-origin":[{origin:se()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:At()}],"translate-x":[{"translate-x":At()}],"translate-y":[{"translate-y":At()}],"translate-z":[{"translate-z":At()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,Y]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mbs":[{"scroll-mbs":P()}],"scroll-mbe":[{"scroll-mbe":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pbs":[{"scroll-pbs":P()}],"scroll-pbe":[{"scroll-pbe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,Y]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[ce,Fa,ui,Qm]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},tx=z0(ex);function Tt(...l){return tx(p0(l))}const nx={Gavel:S.jsx(Al,{className:"w-4 h-4"}),Shield:S.jsx(Al,{className:"w-4 h-4"}),Server:S.jsx(Oy,{className:"w-4 h-4"}),Search:S.jsx(vf,{className:"w-4 h-4"}),UserSearch:S.jsx(Py,{className:"w-4 h-4"}),Building2:S.jsx(ly,{className:"w-4 h-4"}),Users:S.jsx(Qy,{className:"w-4 h-4"}),BrainCog:S.jsx(hf,{className:"w-4 h-4"}),Drama:S.jsx(vy,{className:"w-4 h-4"}),Telescope:S.jsx(By,{className:"w-4 h-4"}),FlaskConical:S.jsx(Sy,{className:"w-4 h-4"}),GraduationCap:S.jsx(Ty,{className:"w-4 h-4"})};function ix({isOpen:l,onClose:u}){const{completedLessons:c,resetProgress:o}=Ll(),[p,m]=D.useState(()=>Wa.map(h=>h.id)),g=h=>{m(f=>f.includes(h)?f.filter(C=>C!==h):[...f,h])},y=Math.round(c.length/Ja.length*100)||0;return S.jsxs(S.Fragment,{children:[l&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden",onClick:u}),S.jsxs("aside",{className:Tt("fixed inset-y-0 left-0 z-50 w-72 sidebar-bg border-r border-color transform transition-transform duration-300 ease-in-out flex flex-col",l?"translate-x-0":"-translate-x-full lg:translate-x-0"),children:[S.jsx("div",{className:"h-20 flex items-center px-6 border-b border-color shrink-0",children:S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyber-500 flex items-center justify-center shadow-lg shadow-cyber-500/20",children:S.jsx(Al,{className:"w-5 h-5 text-white"})}),S.jsxs("div",{children:[S.jsx("h1",{className:"font-bold text-sm tracking-tight text-slate-900 dark:text-white",children:"OSINT & SOCENG"}),S.jsx("p",{className:"text-[10px] uppercase tracking-wider text-cyber-600 dark:text-cyber-400 font-bold mt-0.5",children:"Cohorte 2026"})]})]})}),S.jsxs("div",{className:"px-6 py-5 border-b border-color shrink-0",children:[S.jsxs("div",{className:"flex justify-between items-end mb-2",children:[S.jsx("span",{className:"text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider",children:"PROGRESSION GLOBALE"}),S.jsxs("span",{className:"text-sm font-bold text-cyber-600 dark:text-cyber-400",children:[y,"%"]})]}),S.jsx("div",{className:"h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",children:S.jsx("div",{className:"h-full bg-cyber-500 transition-all duration-500 ease-out",style:{width:`${y}%`}})})]}),S.jsxs("div",{className:"flex-1 overflow-y-auto py-6 px-4 space-y-6",children:[Wa.map(h=>S.jsxs("div",{className:"accordion-group",children:[S.jsxs("button",{onClick:()=>g(h.id),className:"w-full flex items-center justify-between py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors group",children:[S.jsxs("div",{className:"flex items-center gap-2 text-slate-700 dark:text-slate-300 group-hover:text-cyber-600 dark:group-hover:text-cyber-400 transition-colors",children:[nx[h.icon],S.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider",children:h.title})]}),S.jsx(oy,{className:Tt("w-4 h-4 text-slate-400 transition-transform duration-200",p.includes(h.id)?"rotate-180":"")})]}),S.jsx("div",{className:Tt("mt-2 space-y-1 overflow-hidden transition-all",p.includes(h.id)?"block":"hidden"),children:h.lessons.map((f,C)=>{const q=c.includes(f.id);return S.jsx(ou,{to:`/module/${h.id}/lesson/${f.id}`,onClick:()=>window.innerWidth<1024&&u(),className:({isActive:I})=>Tt("w-full text-left p-3 rounded-xl flex items-start gap-3 transition-all group",I?"bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm":"border border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40"),children:({isActive:I})=>S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"mt-0.5 shrink-0",children:q?S.jsx(dy,{className:"w-4 h-4 text-green-500"}):S.jsx("div",{className:Tt("w-4 h-4 rounded-full border-2",I?"border-cyber-500":"border-slate-300 dark:border-slate-600 group-hover:border-slate-400")})}),S.jsxs("div",{children:[S.jsxs("p",{className:Tt("text-sm font-medium",I?"text-cyber-700 dark:text-cyber-400":q?"text-slate-600 dark:text-slate-400":"text-slate-700 dark:text-slate-300"),children:[C+1,". ",f.title]}),S.jsxs("div",{className:"flex gap-2 mt-1",children:[f.quiz&&S.jsx("span",{className:"text-[9px] uppercase font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded",children:"Quiz"}),f.lab&&S.jsx("span",{className:"text-[9px] uppercase font-bold text-orange-500 bg-orange-50 dark:bg-orange-500/10 px-1.5 py-0.5 rounded",children:"Lab"})]})]})]})},f.id)})})]},h.id)),S.jsx("div",{className:"pt-4 mt-4 border-t border-slate-200 dark:border-slate-800/50",children:S.jsxs(ou,{to:"/toolkit",onClick:()=>window.innerWidth<1024&&u(),className:({isActive:h})=>Tt("w-full flex items-center justify-between py-3 px-3 rounded-xl transition-all group",h?"bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-bold":"border border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-indigo-600 dark:hover:text-indigo-400"),children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx(bf,{className:"w-4 h-4"}),S.jsx("span",{className:"text-sm",children:"Boîte à Outils OSINT"})]}),S.jsx("div",{className:"px-2 py-0.5 bg-indigo-100 dark:bg-indigo-500/20 text-[10px] font-bold tracking-wider rounded-md text-indigo-600 dark:text-indigo-400 uppercase",children:"+50 Outils"})]})})]}),S.jsx("div",{className:"p-4 border-t border-color shrink-0",children:S.jsxs("button",{onClick:o,className:"w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-500 hover:text-red-500 transition-colors",children:[S.jsx(Ry,{className:"w-3.5 h-3.5"}),"Réinitialiser la progression"]})})]})]})}function ax({onMenuClick:l}){const{theme:u,toggleTheme:c}=Ll();return S.jsxs("header",{className:"h-16 border-b border-color bg-main sticky top-0 z-30 flex items-center justify-between px-4 lg:px-8 transition-colors duration-300",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("button",{onClick:l,className:"lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",children:S.jsx(Ay,{className:"w-5 h-5"})}),S.jsxs("div",{className:"flex items-center gap-3 lg:hidden",children:[S.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyber-500/10 flex items-center justify-center",children:S.jsx(Al,{className:"w-5 h-5 text-cyber-600 dark:text-cyber-400"})}),S.jsx("div",{children:S.jsx("h1",{className:"font-bold text-sm tracking-tight text-slate-900 dark:text-white",children:"OSINT & SOCENG"})})]})]}),S.jsx("div",{className:"flex items-center gap-2",children:S.jsx("button",{onClick:c,className:"p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",title:"Basculer le thème",children:u==="dark"?S.jsx(_y,{className:"w-5 h-5"}):S.jsx(Ny,{className:"w-5 h-5"})})})]})}function sx(){const[l,u]=D.useState(!1);return S.jsxs("div",{className:"flex bg-main min-h-screen",children:[S.jsx(ix,{isOpen:l,onClose:()=>u(!1)}),S.jsxs("div",{className:"flex-1 lg:pl-72 flex flex-col min-h-screen",children:[S.jsx(ax,{onMenuClick:()=>u(!0)}),S.jsx("main",{className:"flex-1 relative",children:S.jsx(pb,{})})]})]})}function lx({activeTab:l,setActiveTab:u,hasQuiz:c,hasLab:o}){const p=[{id:"cours",label:"Cours",icon:iy,show:!0},{id:"quiz",label:"Quiz",icon:my,show:c},{id:"lab",label:"Lab",icon:jy,show:o}];return S.jsx("div",{className:"flex px-4 lg:px-8 border-b border-color",children:p.filter(m=>m.show).map(m=>{const g=m.icon;return S.jsxs("button",{onClick:()=>u(m.id),className:Tt("tab-btn",l===m.id?"tab-active":""),children:[S.jsx(g,{className:"w-4 h-4 ml-1"}),m.label]},m.id)})})}function rx({quizzes:l}){const[u,c]=D.useState({}),[o,p]=D.useState({}),m=(y,h)=>{o[y]||c(f=>({...f,[y]:h}))},g=(y,h)=>{if(u[y]===void 0){alert("Veuillez sélectionner une réponse.");return}const f=u[y]===h;p(C=>({...C,[y]:{isCorrect:f,selectedIndex:u[y]}}))};return S.jsxs("div",{className:"space-y-8 animate-fade-in py-6",children:[S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500 mb-4",children:S.jsx(hf,{className:"w-8 h-8"})}),S.jsx("h3",{className:"text-2xl font-bold text-slate-900 dark:text-white mb-2",children:"Vérification des connaissances"}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400",children:"Testez ce que vous venez d'apprendre dans cette leçon."})]}),l.map((y,h)=>{const f=o[y.id],C=o[y.id]||{};return S.jsxs("div",{className:Tt("glass p-6 rounded-2xl transition-colors duration-300",f&&C.isCorrect?"border-green-500 dark:border-green-500/50":"",f&&!C.isCorrect?"border-red-500 dark:border-red-500/50":""),children:[S.jsxs("h4",{className:"font-bold text-slate-900 dark:text-white mb-4",children:[S.jsxs("span",{className:"text-indigo-500 mr-2",children:["Q",h+1,"."]}),y.question]}),S.jsx("div",{className:"space-y-3",children:y.options.map((q,I)=>{const G=u[y.id]===I;let _="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer";return f?(_="opacity-50 cursor-not-allowed",I===y.correct?_="bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600 ring-1 ring-green-400 opacity-100":G&&!C.isCorrect&&(_="bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600 opacity-100")):G&&(_="border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-400"),S.jsxs("label",{className:Tt("flex items-start gap-3 p-3 rounded-xl border transition-colors",_),children:[S.jsx("input",{type:"radio",name:`quiz-${y.id}`,value:I,checked:G,onChange:()=>m(y.id,I),disabled:f,className:"mt-1 text-indigo-500 focus:ring-indigo-500 h-4 w-4 bg-transparent border-slate-300 dark:border-slate-600"}),S.jsx("span",{className:"text-sm font-medium text-slate-700 dark:text-slate-300",children:q})]},I)})}),f?S.jsx("div",{className:Tt("mt-4 p-4 rounded-xl text-sm animate-fade-in",C.isCorrect?"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300":"bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"),children:S.jsxs("div",{className:"flex gap-2 items-start",children:[C.isCorrect?S.jsx(gf,{className:"w-5 h-5 shrink-0"}):S.jsx(hy,{className:"w-5 h-5 shrink-0"}),S.jsxs("div",{children:[S.jsx("strong",{children:C.isCorrect?"Correct !":"Incorrect."}),S.jsx("p",{className:"mt-1",children:y.explanation})]})]})}):S.jsx("div",{className:"mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end",children:S.jsx("button",{onClick:()=>g(y.id,y.correct),className:"px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition shadow-sm",children:"Valider la réponse"})})]},y.id)})]})}function Zm({htmlContent:l}){const u=D.useRef(null);return D.useEffect(()=>{if(!u.current)return;u.current.querySelectorAll(".copy-btn").forEach(p=>p.remove()),u.current.querySelectorAll("pre").forEach(p=>{p.classList.add("group");const m=document.createElement("button");m.className="copy-btn absolute top-2 right-2 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 opacity-0 group-hover:opacity-100 flex items-center justify-center",m.title="Copier le code",m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',m.onclick=async()=>{const g=p.querySelector("code"),y=g?g.innerText:p.innerText;try{await navigator.clipboard.writeText(y),m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-green-400"><path d="M20 6 9 17l-5-5"/></svg>',setTimeout(()=>{m.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'},2e3)}catch(h){console.error("Failed to copy text: ",h)}},p.appendChild(m)})},[l]),S.jsx("div",{ref:u,className:"prose dark:prose-invert max-w-none animate-fade-in py-4",dangerouslySetInnerHTML:{__html:l}})}function ox(){const{moduleId:l,lessonId:u}=Wv(),c=fu(),{completedLessons:o,toggleLessonCompletion:p}=Ll(),[m,g]=D.useState("cours"),y=Wa.find(j=>j.id===l),h=y?.lessons.find(j=>j.id===u),f=Ja.findIndex(j=>j.id===u),C=f>0?Ja[f-1]:null,q=f<Ja.length-1?Ja[f+1]:null,I=o.includes(u);if(D.useEffect(()=>{window.scrollTo(0,0)},[u]),!y||!h)return S.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:S.jsxs("div",{className:"text-center",children:[S.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2",children:"Leçon introuvable"}),S.jsx("p",{className:"text-slate-500",children:"Veuillez sélectionner une leçon dans le menu."})]})});const G=()=>{I||p(u),q&&c(`/module/${q.moduleId}/lesson/${q.id}`)},_=()=>{C&&c(`/module/${C.moduleId}/lesson/${C.id}`)};return S.jsxs("div",{className:"flex flex-col min-h-full",children:[S.jsxs("div",{className:"px-4 lg:px-8 py-6 border-b border-color flex flex-col md:flex-row md:items-start justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("div",{className:"flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2",children:S.jsx("span",{children:y.title})}),S.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight",children:h.title})]}),S.jsxs("button",{onClick:()=>p(u),className:Tt("flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all shadow-sm shrink-0",I?"bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50 hover:bg-green-100 dark:hover:bg-green-900/40":"bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80"),children:[S.jsx(gf,{className:"w-4 h-4"}),I?"Terminé":"Marquer terminé"]})]}),S.jsx(lx,{activeTab:m,setActiveTab:g,hasQuiz:!!h.quiz,hasLab:!!h.lab}),S.jsx("div",{className:"flex-1 p-4 lg:p-8",children:S.jsxs("div",{className:"max-w-4xl mx-auto",children:[m==="cours"&&S.jsx(Zm,{htmlContent:h.content}),m==="quiz"&&h.quiz&&S.jsx(rx,{quizzes:h.quiz},h.id),m==="lab"&&h.lab&&S.jsx(Zm,{htmlContent:h.lab})]})}),S.jsxs("div",{className:"mt-auto px-4 lg:px-8 pl-10 border-t border-color bg-slate-50/50 dark:bg-slate-900/50 py-4 flex items-center justify-between sticky bottom-0 z-20 backdrop-blur-md",children:[S.jsx("div",{className:"flex gap-4",children:S.jsxs("button",{onClick:_,disabled:!C,className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",children:[S.jsx($b,{className:"w-4 h-4"}),"Précédent"]})}),S.jsx("div",{className:"flex gap-4",children:S.jsxs("button",{onClick:G,disabled:!q,className:"flex items-center gap-2 px-6 py-2 bg-accent-blue hover:bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:["Suivant",S.jsx(ty,{className:"w-4 h-4"})]})})]})]})}const su=[{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"VirtualBox / VMware Workstation",Description:"Hyperviseur hôte standard pour isoler toutes les activités en VM. Cross-platform, facile à distribuer et réinitialiser. Images 'golden' figées pour les ateliers.",Difficulté:"Facile",OPSEC:"Réseau VM en NAT/host-only selon scénario ; snapshots avant atelier ; jamais de secrets durables dans l'image.",Lien:"https://www.virtualbox.org",Type:"Hyperviseur lab",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Proxmox VE 8.1",Description:"Gestion centralisée de VMs : ISO, snapshots, permissions utilisateurs. Facilite le déploiement de labs éphémères par étudiant ou par scénario.",Difficulté:"Intermédiaire",OPSEC:"Déployer des labs isolés par étudiant ; purger les snapshots après chaque session.",Lien:"https://www.proxmox.com",Type:"Hyperviseur lab",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Qubes OS 4.2",Description:"OS 'workstation' avec compartimentation native via hyperviseur Xen. Domaines isolés codés par couleur (travail, perso, non fiable). Compromis d'une VM n'implique pas les autres.",Difficulté:"Avancé",OPSEC:"Installer sur matériel de confiance (pas de nested virt) ; Disposable VMs pour chaque session de recherche ; séparer qubes recherche/admin/mail.",Lien:"https://www.qubes-os.org",Type:"OS / Isolation",Niveau:"Avancé",Source:"Doc.2+3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Kali Linux 2026",Description:"OS pentest complet, pré-installé avec des centaines d'outils. Standard de la formation en sécurité offensive.",Difficulté:"Facile",OPSEC:"Jamais en dual-boot sur machine perso ; toujours en VM chiffrée ; mettre à jour avant chaque atelier.",Lien:"https://www.kali.org",Type:"OS / Pentest",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Tails OS",Description:"OS amnésique live system routant tout via Tor. Zéro trace sur disque. Idéal pour démos publiques et ateliers BYOD.",Difficulté:"Intermédiaire",OPSEC:"Ne pas stocker de données sensibles sans persistance chiffrée ; anonymat ≠ permission ; respecter RGPD.",Lien:"https://tails.boum.org",Type:"OS / Anonymat",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Whonix",Description:"OS en deux VMs : Gateway Tor + Workstation isolée. Fuite d'IP physiquement impossible. Alternative à Tails pour investigations longues nécessitant persistance.",Difficulté:"Avancé",OPSEC:"Utiliser sur matériel dédié ; combiner avec Proxmox pour labs multi-étudiants.",Lien:"https://www.whonix.org",Type:"OS / Anonymat",Niveau:"Avancé",Source:"Doc.2"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Docker / Dockerfile",Description:"Conteneurisation et standardisation des outils OSINT. Persistance via BIND mount. Facilite le déploiement reproductible en formation.",Difficulté:"Facile",OPSEC:"Images sans privilèges root ; ne pas exposer les ports hôte inutilement ; nettoyer les volumes après usage.",Lien:"https://www.docker.com",Type:"Conteneurisation",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"SquareX",Description:"Isolation de navigateur à distance (RBI) : liens suspects ouverts dans onglets jetables cloud. Protège l'IP et les ressources locales.",Difficulté:"Facile",OPSEC:"Utiliser pour chaque lien externe non vérifié ; idéal pour ouvrir des fichiers suspects en démo.",Lien:"https://sqrx.com",Type:"Isolation navigateur",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Tor Browser",Description:"Navigateur anti-tracking/anti-fingerprinting via réseau Tor. Enseigne concrètement l'acheminement onion et les risques de désanonymisation.",Difficulté:"Facile",OPSEC:"Ne jamais mélanger identités ; ne pas se loguer avec comptes réels de l'organisation ; isoler de tout compte réel.",Lien:"https://www.torproject.org",Type:"Navigateur anonymat",Niveau:"Débutant",Source:"Doc.3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Firefox Multi-Account Containers",Description:"Cloisonne cookies et sessions par conteneur (persona OSINT, démo, comptes de test) sans multiplier les profils Firefox.",Difficulté:"Facile",OPSEC:"Conteneurs dédiés par usage ; nettoyage post-séance ; ne pas mélanger recherches 'sales' et services sensibles.",Lien:"https://addons.mozilla.org/firefox/addon/multi-account-containers/",Type:"Extension navigateur",Niveau:"Débutant",Source:"Doc.3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"uBlock Origin",Description:"Filtrage agressif des publicités et trackers pendant les ateliers OSINT. Réduit le bruit et protège l'empreinte navigateur.",Difficulté:"Facile",OPSEC:"Rester en configuration simple par défaut ; éviter d'empiler des bloqueurs (conflits) ; désactiver filtrage cosmétique pour éviter détection bots.",Lien:"https://github.com/gorhill/uBlock",Type:"Extension navigateur",Niveau:"Débutant",Source:"Doc.1+3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"NoScript",Description:"Blocage préventif de JavaScript : démontre l'impact du JS sur tracking, XSS, fingerprinting. Composant clé de Tor Browser.",Difficulté:"Intermédiaire",OPSEC:"Whitelists minimales ; documenter clairement que ça casse des sites (c'est le but pédagogique).",Lien:"https://noscript.net",Type:"Extension navigateur",Niveau:"Intermédiaire",Source:"Doc.3"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"LayerX",Description:"Gouvernance des données entre navigateur et SaaS. Virtualisation du moteur JS bloquant les payloads retardés (extensions Sleeper).",Difficulté:"Intermédiaire",OPSEC:"Surveiller les flux de données sortants en temps réel ; efficace contre les extensions malveillantes à déclenchement différé.",Lien:"https://layerxsecurity.com",Type:"Extension navigateur",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Wappalyzer",Description:"Fingerprinting technologique d'un site en 1 clic : CMS, frameworks JS, CDN, analytics. Résultat immédiat sans interaction avec la cible.",Difficulté:"Facile",OPSEC:"Passif — résultat basé sur analyse du code source public.",Lien:"https://www.wappalyzer.com",Type:"Extension navigateur",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🖥️  Infrastructure & Navigateur",Outil:"Mitaka",Description:"Extension d'accélération OSINT inline depuis le navigateur : enrichit automatiquement IPs, domaines, hashes sélectionnés.",Difficulté:"Facile",OPSEC:"Limiter les recherches automatiques pour éviter le rate limiting des APIs.",Lien:"https://github.com/ninoseki/mitaka",Type:"Extension navigateur",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"SpiderFoot",Description:"Point d'entrée débutant→intermédiaire : collecte/corrélation automatisée depuis domaine, IP, ASN, email ou nom. 200+ sources, interface web + export JSON/CSV.",Difficulté:"Facile → Intermédiaire",OPSEC:"VM dédiée pour les requêtes ; clés API 'lab' séparées des clés perso ; journaliser ce qui est interrogé ; minimiser la collecte.",Lien:"https://www.spiderfoot.net",Type:"Automatisation OSINT",Niveau:"Débutant",Source:"Doc.3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Recon-ng",Description:"Framework modulaire et scriptable (inspiré Metasploit) pour OSINT web. Workspaces reproductibles, resource files, interface recon-web pour le reporting.",Difficulté:"Intermédiaire",OPSEC:"Surveiller les modules qui 'cassent' (sources web volatiles) ; documenter quelles sources sont requêtées ; ne pas exécuter depuis des postes perso.",Lien:"https://github.com/lanmaster53/recon-ng",Type:"Framework recon",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"theHarvester",Description:"Reconnaissance domain-centric : noms, emails, IPs, sous-domaines en interrogeant Bing, DuckDuckGo, Shodan, HIBP, Censys, crt.sh…",Difficulté:"Facile → Intermédiaire",OPSEC:"Cloisonner les clés API ; éviter de requêter des identifiants réels d'employés en atelier ; préférer des domaines lab.",Lien:"https://github.com/laramies/theHarvester",Type:"Énumération domaine",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Sherlock",Description:"Recherche d'un pseudo sur 400+ plateformes simultanément. Très 'straight to the point', packaging simple, idéal comme première démonstration.",Difficulté:"Facile",OPSEC:"Passer par un proxy/Tor ; ne pas industrialiser ; accepter et enseigner les faux positifs.",Lien:"https://github.com/sherlock-project/sherlock",Type:"Recherche pseudonymes",Niveau:"Débutant",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Maigret",Description:"Successeur de Sherlock : rapport détaillé avec liens entre comptes et enrichissement automatique. Export HTML/PDF utile comme livrable pédagogique.",Difficulté:"Intermédiaire",OPSEC:"Utiliser l'option --tor ; limiter le débit pour éviter les bans ; valider manuellement les résultats (faux positifs).",Lien:"https://github.com/soxoj/maigret",Type:"Recherche pseudonymes",Niveau:"Débutant",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Holehe",Description:"Vérifie si une adresse email est enregistrée sur 120+ services via les flux 'mot de passe oublié'. Très parlant en formation.",Difficulté:"Facile",OPSEC:"Utiliser uniquement sur adresses de test ou dans cadre contractuel ; éviter IP sensibles ; archiver les résultats comme PII.",Lien:"https://github.com/megadose/holehe",Type:"Vérification email",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Hunter.io",Description:"Identification des structures d'emails professionnels d'une organisation (format, domaine, employés).",Difficulté:"Facile",OPSEC:"Respecter les limites de requêtes pour éviter le blocage ; ne pas spammer les adresses découvertes.",Lien:"https://hunter.io",Type:"Énumération email",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Epieos",Description:"Recherche passive sur les comptes Google à partir d'un email : photo profil, avis Google Maps, informations d'agenda. Zéro notification côté cible.",Difficulté:"Facile",OPSEC:"Technique totalement passive — aucune alerte générée ; traiter les résultats comme PII.",Lien:"https://epieos.com",Type:"Google OSINT",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Have I Been Pwned (HIBP)",Description:"Référence pour le breach-checking (emails, mots de passe via k-anonymity). API documentée, règles d'usage explicites, connue des apprenants.",Difficulté:"Facile → Intermédiaire",OPSEC:"Ne jamais faire de bulk lookups avec emails réels en classe ; anonymiser/agréger ; respecter rate limiting et clés API.",Lien:"https://haveibeenpwned.com",Type:"Fuites de données",Niveau:"Débutant",Source:"Doc.1+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"DeHashed",Description:"Moteur de recherche multi-champs sur données compromises (email, username, hash, IP). Utile pédagogiquement pour illustrer les requêtes ciblées vs le bruit.",Difficulté:"Intermédiaire",OPSEC:"Accès restreint avec comptes nominaux ; journaux d'audit obligatoires ; chiffrement au repos ; usage hors cadre contractuel = illégal.",Lien:"https://dehashed.com",Type:"Fuites de données",Niveau:"Intermédiaire",Source:"Doc.2+3"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Intelligence X",Description:"Recherche dans les archives, dark web (Tor, I2P) et sites désactivés. Inclut tokens OAuth et secrets CI/CD exposés.",Difficulté:"Intermédiaire",OPSEC:"L'accès à certaines données peut être restreint légalement ; traiter comme données hautement sensibles.",Lien:"https://intelx.io",Type:"Dark Web / Archives",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🔍  OSINT Web & Personnes",Outil:"Wayback Machine",Description:"Récupération de pages supprimées, d'anciennes configurations ou d'informations effacées. Source totalement passive.",Difficulté:"Facile",OPSEC:"Totalement passif — aucune interaction avec le site cible. Croiser avec d'autres sources pour valider.",Lien:"https://web.archive.org",Type:"Archives web",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Instaloader",Description:"Collecte de médias/metadata publics Instagram (followers, hashtags, photos taguées, stories). CLI ou module Python pour pipelines.",Difficulté:"Intermédiaire",OPSEC:"Éviter toute auth avec comptes réels ; limiter au contenu public autorisé ; documenter l'impact ToS et le risque de blocage de compte.",Lien:"https://github.com/instaloader/instaloader",Type:"Instagram",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Osintgram",Description:"Extraction programmatique de métadonnées Instagram : followers, hashtags, photos taguées, commentaires. Interface CLI interactive.",Difficulté:"Intermédiaire",OPSEC:"Compte sock puppet âgé et crédible obligatoire ; ne jamais utiliser son compte réel.",Lien:"https://github.com/Datalux/Osintgram",Type:"Instagram",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"WhatsMyName.app",Description:"Recherche cross-plateformes de pseudonyme avec tableau de bord visuel. Complète Sherlock/Maigret avec une interface web accessible.",Difficulté:"Facile",OPSEC:"Passif — interroge les plateformes sans authentification. Source de validation croisée.",Lien:"https://whatsmyname.app",Type:"Multi-plateformes",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Linkedin2Username / LinkedIn API",Description:"Génère des listes d'employés d'une entreprise pour simulations Red Team. L'API officielle est la seule voie légale pour des intégrations déclarées.",Difficulté:"Avancé",OPSEC:"Compte sandbox approuvé ; minimisation stricte des données ; jamais de compte réel pour le scraping.",Lien:"https://github.com/initstring/linkedin2username",Type:"LinkedIn",Niveau:"Avancé",Source:"Doc.1+2+3"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Telethon",Description:"Lib Python MTProto pour Telegram : extraction de messages/metadata de canaux publics autorisés, construction de timelines et cartographie de relations.",Difficulté:"Avancé",OPSEC:"Comptes de test uniquement ; isoler sessions/jetons ; ne jamais manipuler d'identifiants personnels en clair dans des notebooks.",Lien:"https://github.com/LonamiWebs/Telethon",Type:"Telegram / API",Niveau:"Avancé",Source:"Doc.3"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Telerecon",Description:"Framework complet Telegram : mapping de relations entre utilisateurs, surveillance de canaux. Synchronisation contacts via sock puppet pour démasquer des numéros.",Difficulté:"Avancé",OPSEC:"Toujours passer par un VPN durci ou Tor ; compte sock puppet Telegram obligatoire.",Lien:"https://github.com/xngsta/telerecon",Type:"Telegram",Niveau:"Avancé",Source:"Doc.2"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"X API v2 (officielle)",Description:"Collecte structurée X/Twitter (posts, users, tendances) via API officielle avec quotas et conformité. Plus stable qu'un scraping non contractuel.",Difficulté:"Intermédiaire → Avancé",OPSEC:"Clés dédiées au lab, rotation et révocation, stockage chiffré ; enseigner la différence API contractuelle vs scraping fragile.",Lien:"https://developer.x.com",Type:"Twitter/X API",Niveau:"Intermédiaire",Source:"Doc.3"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"Twint-docker",Description:"Scraping historique de tweets sans API — instance dockerisée isolée pour contourner les restrictions du paywall X.",Difficulté:"Intermédiaire",OPSEC:"Instances isolées et proxies rotatifs pour éviter le bannissement d'IP ; résultats à traiter comme PII.",Lien:"https://github.com/twintproject/twint",Type:"Twitter/X",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"SMAT",Description:"Analyse de tendances et visualisation de propagation de contenus sur plateformes alternatives (Reddit, Telegram, Gab…).",Difficulté:"Facile",OPSEC:"Service web — passif. Idéal pour étudier la propagation désinformation sans créer de compte.",Lien:"https://www.smat-app.com",Type:"Multi-plateformes",Niveau:"Intermédiaire",Source:"Doc.1"},{Catégorie:"📱  SOCMINT — Réseaux Sociaux",Outil:"SnapIntel",Description:"Recherche d'informations sur les utilisateurs Snapchat (profils, liens, métadonnées publiques).",Difficulté:"Intermédiaire",OPSEC:"Attention aux notifications de capture d'écran sur Snapchat ; compte sock puppet dédié.",Lien:"—",Type:"Snapchat",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🌐  Infrastructure Technique",Outil:"Shodan",Description:"Moteur de recherche pour l'infrastructure internet : périphériques exposés, services, bannières, caméras, systèmes industriels. Fonction Shodan Monitor pour alertes continues.",Difficulté:"Facile → Intermédiaire",OPSEC:"Privilégier l'interprétation (risques, remédiations) plutôt que l'énumération de cibles ; ne pas 'pointer' des systèmes tiers en live devant une classe.",Lien:"https://www.shodan.io",Type:"Scanner Internet",Niveau:"Débutant",Source:"Doc.1+2+3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"Censys",Description:"Alternative à Shodan spécialisée dans les certificats TLS/SSL et services exposés. Pivots IP↔domain↔cert↔service, vues historiques, détection Shadow IT cloud.",Difficulté:"Intermédiaire",OPSEC:"Entièrement passif ; comptes/clefs lab séparés ; démontrer sur périmètre appartenant à l'organisation.",Lien:"https://search.censys.io",Type:"Scanner Internet",Niveau:"Intermédiaire",Source:"Doc.1+2+3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"OWASP Amass",Description:"Énumération avancée de sous-domaines (OWASP) : combine 50+ sources passives et techniques actives de brute-force DNS. Standard de la cartographie de surface d'attaque.",Difficulté:"Avancé",OPSEC:"En démo, mode passif uniquement (amass enum -passive) ; exécuter uniquement sur périmètres autorisés ; nombreuses clés API nécessaires.",Lien:"https://github.com/owasp-amass/amass",Type:"DNS / Sous-domaines",Niveau:"Avancé",Source:"Doc.1+2+3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"subfinder",Description:"Énumération passive rapide de sous-domaines 'passive-first' : CT, APIs publiques, sans jamais contacter directement la cible. Intègre bien avec Amass et reNgine-ng.",Difficulté:"Intermédiaire",OPSEC:"Clés API 'lab' dédiées (pas celles de prod) ; filtrage et validation systématiques avant toute action sur les résultats.",Lien:"https://github.com/projectdiscovery/subfinder",Type:"DNS / Sous-domaines",Niveau:"Intermédiaire",Source:"Doc.3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"crt.sh / Certificate Transparency",Description:"Découverte de sous-domaines via logs CT publics. 'Vos certifs racontent votre infra' sans requêter la cible. Source externe 100% passive.",Difficulté:"Facile",OPSEC:"Recouper avec d'autres sources (wildcards, certs anciens peuvent induire en erreur). Outil de confirmation, pas de preuve unique.",Lien:"https://crt.sh",Type:"Certificate Transparency",Niveau:"Intermédiaire",Source:"Doc.3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"DNSDumpster",Description:"Visualisation graphique des enregistrements DNS et cartographie des sous-domaines. Interface web accessible, aucune installation requise.",Difficulté:"Facile",OPSEC:"Totalement passif — aucun risque de détection par la cible. Bon outil de première exploration pédagogique.",Lien:"https://dnsdumpster.com",Type:"DNS / Cartographie",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🌐  Infrastructure Technique",Outil:"dnstwist",Description:"Génère des variantes de domaine (typosquatting, homographes, permutations) pour détecter les domaines d'usurpation de marque et de phishing.",Difficulté:"Intermédiaire",OPSEC:"Usage défensif uniquement (monitoring de sa propre marque/organisation) ; prudence sur résolutions massives (charge DNS).",Lien:"https://github.com/elceef/dnstwist",Type:"Brand monitoring / Typosquatting",Niveau:"Intermédiaire",Source:"Doc.3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"Web-Check",Description:"Analyse complète d'un domaine en une vue : DNS, WHOIS, certificats, headers HTTP, redirections, technologies. Aucune installation.",Difficulté:"Facile",OPSEC:"100% passif — interroge uniquement les DNS publics et données ouvertes.",Lien:"https://web-check.xyz",Type:"Analyse domaine",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🌐  Infrastructure Technique",Outil:"BuiltWith",Description:"Identification du stack technologique d'un site (CMS, frameworks JS, CDN, analytics, hébergeur). Données historiques disponibles.",Difficulté:"Facile",OPSEC:"Service web tiers — l'opérateur n'interagit pas avec la cible. Passif.",Lien:"https://builtwith.com",Type:"Fingerprinting tech",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🌐  Infrastructure Technique",Outil:"WHOIS / DomainTools",Description:"Historique d'enregistrement de domaines, pivot sur registrants, informations de contact (souvent masquées mais pivotables).",Difficulté:"Facile",OPSEC:"Passif ; certains registrars peuvent logger les requêtes WHOIS massives. Combiner avec Censys pour l'attribution infra.",Lien:"https://whois.domaintools.com",Type:"WHOIS / Registrant",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"🌐  Infrastructure Technique",Outil:"Nmap",Description:"Scanning de ports, empreinte d'OS et détection de services. Standard de facto pour l'audit réseau. Exclusivement sur lab interne contrôlé.",Difficulté:"Intermédiaire",OPSEC:"ATTENTION : Scan actif = action intrusive. Séparer strictement les démos dans un range isolé (JAMAIS sur Internet/tiers sans autorisation écrite).",Lien:"https://nmap.org",Type:"Scanner réseau",Niveau:"Intermédiaire",Source:"Doc.2+3"},{Catégorie:"🌐  Infrastructure Technique",Outil:"reNgine-ng",Description:"Pipeline web-recon avec moteurs configurables, corrélation des résultats, monitoring continu de surface d'attaque applicative et UI web.",Difficulté:"Avancé",OPSEC:"Exécuter uniquement sur cibles internes autorisées ; documenter les limites des scanners et les faux positifs.",Lien:"https://github.com/yogeshojha/rengine",Type:"Recon web / Pipeline",Niveau:"Avancé",Source:"Doc.3"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"GoPhish",Description:"Framework open-source de simulation de phishing avec dashboard complet : templates HTML, campagnes, suivi (ouverture, clic, credential submission).",Difficulté:"Intermédiaire → Avancé",OPSEC:"Infra dédiée totalement isolée ; domaines et boîtes mail de test ; désactiver toute collecte de secrets réels ; landing pages pédagogiques avec message d'avertissement.",Lien:"https://getgophish.com",Type:"Phishing simulation",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"Microsoft Defender — Attack Simulation Training",Description:"Campagnes de simulation réalistes mais inoffensives (phishing, QR code, vishing) intégrées au portail Defender avec reporting et modules de formation.",Difficulté:"Facile → Intermédiaire",OPSEC:"Réduire les permissions au strict nécessaire (moindre privilège) ; groupes pilotes ; métriques traitées comme données RH sensibles (accès limité).",Lien:"https://security.microsoft.com",Type:"Phishing simulation SaaS",Niveau:"Débutant",Source:"Doc.3"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"SET — Social-Engineer Toolkit",Description:"Suite complète TrustedSec : spear-phishing, clonage de site web, vecteurs USB, harvesting de credentials. Framework de référence en pentest SE.",Difficulté:"Avancé",OPSEC:"Toujours dans un réseau lab isolé ; les payloads générés sont détectés par les AV — idéal pour démontrer pourquoi l'AV est nécessaire.",Lien:"https://github.com/trustedsec/social-engineer-toolkit",Type:"Framework SE",Niveau:"Avancé",Source:"Doc.1"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"Evilginx (Pro 4.x)",Description:"Reverse proxy MitM qui capture sessions authentifiées et contourne MFA/2FA en temps réel. Démonstration critique pour sensibiliser aux limites du MFA par SMS.",Difficulté:"Avancé",OPSEC:"Infrastructure dédiée obligatoire ; domaine sous identité de test ; contrat signé impératif ; jamais hors contexte contractuel.",Lien:"https://github.com/kgretzky/evilginx2",Type:"MFA Bypass / AiTM",Niveau:"Avancé",Source:"Doc.1+2"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"ElevenLabs",Description:"Clonage vocal par IA pour créer des démos de vishing. Illustre concrètement les attaques deepfake audio sur les employés (faux dirigeant ordonnant un virement).",Difficulté:"Facile",OPSEC:"Obtenir le consentement de la personne dont la voix est clonée ; usage démo uniquement ; présenter systématiquement les contre-mesures.",Lien:"https://elevenlabs.io",Type:"Deepfake vocal",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"USB Rubber Ducky (Hak5)",Description:"Clé USB HID simulant un clavier — injection de commandes à vitesse surhumaine. Démontre le risque des vecteurs physiques.",Difficulté:"Facile",OPSEC:"Utiliser uniquement des scripts affichant des messages inoffensifs (calculatrice, alerte) pour prouver la vulnérabilité sans causer de dommages.",Lien:"https://hak5.org",Type:"Vecteur physique HID",Niveau:"Intermédiaire",Source:"Doc.2"},{Catégorie:"🎭  Ingénierie Sociale",Outil:"EvilGoPhish",Description:"Combine GoPhish (tracking) + Evilginx3 (MiTM MFA bypass) pour une campagne complète avec statistiques détaillées.",Difficulté:"Avancé",OPSEC:"Niveau Red Team senior uniquement ; périmètre contractuel obligatoire ; infra dédiée.",Lien:"https://www.evilgophish.com",Type:"Campagne Red Team",Niveau:"Avancé",Source:"Doc.1"},{Catégorie:"⚙️  Automatisation & Visualisation",Outil:"Maltego CE",Description:"Visualisation graphique de relations entre entités (personnes, domaines, IPs, emails) via transforms automatisées. Suggestions pilotées par IA en 2026.",Difficulté:"Intermédiaire",OPSEC:"Importer uniquement des données minimisées ; censurer/masquer avant projection ; séparer les clés API data providers du lab. Attention aux appels API qui peuvent trahir les recherches.",Lien:"https://www.maltego.com",Type:"Visualisation / Graphe",Niveau:"Débutant",Source:"Doc.1+2+3"},{Catégorie:"⚙️  Automatisation & Visualisation",Outil:"Hunchly",Description:"Extension Chrome qui archive et horodate automatiquement chaque page visitée pendant une investigation. Essentiel pour la chaîne de preuves légale.",Difficulté:"Facile",OPSEC:"Stocker les archives sur volume chiffré (VeraCrypt) ; ne jamais synchroniser sur le cloud en contexte sensible.",Lien:"https://www.hunch.ly",Type:"Documentation / Preuves",Niveau:"Intermédiaire",Source:"Doc.1+3"},{Catégorie:"⚙️  Automatisation & Visualisation",Outil:"Obsidian + plugin OSINT",Description:"Prise de notes liée en graphe (Zettelkasten) pour documenter les pivots d'une investigation. Vault 100% local.",Difficulté:"Facile",OPSEC:"Vault 100% local ; aucune synchronisation cloud en contexte sensible. Exporter uniquement des datasets anonymisés pour les supports.",Lien:"https://obsidian.md",Type:"Documentation",Niveau:"Intermédiaire",Source:"Doc.1"},{Catégorie:"⚙️  Automatisation & Visualisation",Outil:"OSINT Framework",Description:"Répertoire interactif de centaines d'outils classés par type de donnée. Boussole méthodologique indispensable pour structurer une investigation.",Difficulté:"Facile",OPSEC:"Outil de référencement uniquement — aucune collecte directe. Point de départ idéal pour les apprenants.",Lien:"https://osintframework.com",Type:"Référentiel",Niveau:"Débutant",Source:"Doc.1"},{Catégorie:"⚙️  Automatisation & Visualisation",Outil:"SL Crimewall",Description:"Plateforme collaborative tout-en-un pour gestion d'enquêtes complexes en équipe SOC. Graphes, timeline, gestion des sources.",Difficulté:"Avancé",OPSEC:"Solution pour centres opérationnels ; attention aux données sensibles partagées en cloud ; RBAC strict.",Lien:"https://sociallinks.io",Type:"Plateforme SOC",Niveau:"Avancé",Source:"Doc.2"},{Catégorie:"🛡️  CTI & Threat Intelligence",Outil:"OpenCTI",Description:"Plateforme CTI/STIX2 : centralise observables, sources, 'first/last seen'. Produit des dossiers pédagogiques structurés. API GraphQL + connecteurs MISP/ATT&CK.",Difficulté:"Avancé",OPSEC:"Gouvernance RBAC, chiffrement, backups ; triage strict des données importées — jamais de dumps PII bruts dans la plateforme.",Lien:"https://www.opencti.io",Type:"Threat Intelligence / CTI",Niveau:"Avancé",Source:"Doc.3"},{Catégorie:"🛡️  CTI & Threat Intelligence",Outil:"MISP",Description:"Plateforme mature de partage d'IOCs : ingestion, corrélation, export STIX. Ateliers CERT/SOC autour du cycle du signal au partage.",Difficulté:"Avancé",OPSEC:"Séparer environnements lab vs prod ; contrôler taxonomies et diffusion ; registre des sources obligatoire ; politique de partage documentée.",Lien:"https://www.misp-project.org",Type:"Threat Intelligence / IOC",Niveau:"Avancé",Source:"Doc.3"},{Catégorie:"🔒  OPSEC & Anonymisation",Outil:"Mullvad VPN",Description:"VPN audité à politique de non-journalisation, paiement anonyme accepté (crypto, cash). Première couche de défense pour les ateliers.",Difficulté:"Facile",OPSEC:"Ne pas utiliser sur machine personnelle non isolée ; combiner avec Tor pour les recherches à haut risque.",Lien:"https://mullvad.net",Type:"VPN",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🔒  OPSEC & Anonymisation",Outil:"ProtonVPN",Description:"VPN open-source audité, basé en Suisse, politique zéro-log vérifiée. Bon équilibre facilité d'usage et niveau de confiance.",Difficulté:"Facile",OPSEC:"Combiner avec Tor pour les recherches sensibles (VPN over Tor). Clés et comptes dédiés au lab.",Lien:"https://protonvpn.com",Type:"VPN",Niveau:"Débutant",Source:"Doc.2"},{Catégorie:"🔒  OPSEC & Anonymisation",Outil:"Sock Puppet Framework",Description:"Création de faux personas cohérents : historique crédible, photo neutre (StyleGAN pour éviter le reverse image searching), activité numérique régulière, IP locale à la cible.",Difficulté:"Intermédiaire",OPSEC:"Ne jamais utiliser son compte réel même pour consulter des profils ; navigateur + IP dédiés par persona ; historique à construire avant utilisation.",Lien:"—",Type:"Gestion d'identité",Niveau:"Intermédiaire",Source:"Doc.1+2"}];function ux(){const[l,u]=D.useState(""),[c,o]=D.useState("All"),[p,m]=D.useState("All"),g=D.useMemo(()=>{const f=new Set(su.map(C=>C.Catégorie).filter(Boolean));return["All",...Array.from(f)].sort()},[]),y=D.useMemo(()=>{const f=new Set(su.map(C=>C.Difficulté).filter(Boolean));return["All",...Array.from(f)].sort()},[]),h=D.useMemo(()=>su.filter(f=>{const C=f.Outil?.toLowerCase().includes(l.toLowerCase())||f.Description?.toLowerCase().includes(l.toLowerCase()),q=c==="All"||f.Catégorie===c,I=p==="All"||f.Difficulté===p;return C&&q&&I}),[l,c,p]);return S.jsx("div",{className:"flex-1 overflow-y-auto px-4 sm:px-8 py-8 md:py-12 bg-slate-50 dark:bg-[#0b1120]",children:S.jsxs("div",{className:"max-w-6xl mx-auto space-y-8 animate-fade-in",children:[S.jsx("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800",children:S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[S.jsx("div",{className:"p-2.5 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-xl",children:S.jsx(bf,{className:"w-6 h-6 text-indigo-600 dark:text-indigo-400"})}),S.jsx("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white",children:"Boîte à Outils OSINT"})]}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400 mt-2 max-w-2xl",children:"Référentiel complet des outils d'investigation, d'anonymisation et de Red Team, répertoriés selon notre méthodologie stricte."})]})}),S.jsxs("div",{className:"bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800/50 shadow-sm flex flex-col md:flex-row gap-4 items-center",children:[S.jsxs("div",{className:"relative flex-1 w-full",children:[S.jsx(vf,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),S.jsx("input",{type:"text",placeholder:"Rechercher un outil, une stack (ex: DNS, Shodan)...",value:l,onChange:f=>u(f.target.value),className:"w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-shadow outline-none text-sm placeholder:text-slate-500"})]}),S.jsxs("div",{className:"flex gap-4 w-full md:w-auto",children:[S.jsx("select",{value:c,onChange:f=>o(f.target.value),className:"px-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-700 dark:text-slate-200 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none flex-1 md:flex-none cursor-pointer",children:g.map(f=>S.jsx("option",{value:f,children:f==="All"?"Toutes les catégories":f},f))}),S.jsx("select",{value:p,onChange:f=>m(f.target.value),className:"px-4 py-2.5 bg-slate-100 dark:bg-slate-800/50 border-none rounded-xl text-slate-700 dark:text-slate-200 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none flex-1 md:flex-none cursor-pointer",children:y.map(f=>S.jsx("option",{value:f,children:f==="All"?"Toutes les difficultés":f},f))})]})]}),S.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2",children:S.jsxs("div",{className:"px-2.5 py-1 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-lg",children:[h.length," ",h.length>1?"outils trouvés":"outil trouvé"]})}),S.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:h.map((f,C)=>{const q=f.Difficulté?.toLowerCase()||"";let I="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";return q.includes("facile")||q.includes("débutant")?I="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400":q.includes("intermédiaire")?I="bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400":q.includes("avancé")&&(I="bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400"),S.jsxs("div",{className:"bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full",children:[S.jsxs("div",{className:"flex justify-between items-start gap-4 mb-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[S.jsx("span",{className:"text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500",children:f.Type||"Outil"}),f.Catégorie&&S.jsx("span",{className:"px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-semibold text-slate-600 dark:text-slate-300",children:cx(f.Catégorie)})]}),S.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:f.Outil})]}),S.jsx("span",{className:Tt("px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap",I),children:f.Difficulté||"N/A"})]}),S.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-sm flex-1 leading-relaxed",children:f.Description}),f.OPSEC&&S.jsx("div",{className:"mt-5 p-3.5 bg-amber-50 dark:bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl",children:S.jsxs("div",{className:"flex items-start gap-2.5",children:[S.jsx(ky,{className:"w-4 h-4 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5"}),S.jsxs("div",{children:[S.jsx("span",{className:"text-xs font-bold text-amber-800 dark:text-amber-500 uppercase tracking-widest block mb-0.5",children:"Règle OPSEC"}),S.jsx("p",{className:"text-sm font-medium text-amber-900 dark:text-amber-200/80 leading-snug",children:f.OPSEC})]})]})}),f.Lien&&f.Lien!=="—"&&S.jsx("div",{className:"mt-5 pt-4 border-t border-slate-100 dark:border-slate-800",children:S.jsxs("a",{href:f.Lien,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",children:["Dépôt / Site officiel ",S.jsx(yy,{className:"w-3.5 h-3.5"})]})})]},C)})}),h.length===0&&S.jsxs("div",{className:"text-center py-20 px-4",children:[S.jsx(Zy,{className:"w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4"}),S.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white mb-2",children:"Aucun outil trouvé"}),S.jsxs("p",{className:"text-slate-500 dark:text-slate-400 max-w-sm mx-auto",children:[`Nous n'avons pas trouvé d'outil correspondant à "`,l,'" avec ces filtres.']})]})]})})}function cx(l){return l.replace(/^[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,"").trim()}function dx(){const{theme:l,setTheme:u}=Ll();D.useEffect(()=>{!localStorage.getItem("osint-course-storage")&&window.matchMedia("(prefers-color-scheme: dark)").matches?u("dark"):l==="dark"&&document.documentElement.classList.add("dark")},[l,u]);const c=Wa[0],o=c.lessons[0],p=`/module/${c.id}/lesson/${o.id}`;return S.jsx(fb,{children:S.jsxs(Ji,{path:"/",element:S.jsx(sx,{}),children:[S.jsx(Ji,{index:!0,element:S.jsx(jm,{to:p,replace:!0})}),S.jsx(Ji,{path:"module/:moduleId/lesson/:lessonId",element:S.jsx(ox,{})}),S.jsx(Ji,{path:"toolkit",element:S.jsx(ux,{})}),S.jsx(Ji,{path:"*",element:S.jsx(jm,{to:"/",replace:!0})})]})})}mv.createRoot(document.getElementById("root")).render(S.jsx(D.StrictMode,{children:S.jsx(Ub,{children:S.jsx(dx,{})})}));
