if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("IdleCallbackImplementation",["performanceNow","requestAnimationFramePolyfill"],(function(a,b,c,d,e,f,g){var h=[],i=0,j=0,k=-1,l=!1,m=1e3/60,n=2;function o(a){return a}function p(a){return a}function b(b,c){var d=j++;h[d]=b;r();if(c!=null&&c.timeout>0){var e=o(d);a.setTimeout(function(){return x(e)},c.timeout)}return o(d)}function q(a){a=p(a);h[a]=null}function r(){l||(l=!0,c("requestAnimationFramePolyfill")(function(a){l=!1,t(c("performanceNow")()-a)}))}function s(a){var b=m-n;if(a<b)return b-a;a=a%m;if(a>b||a<n)return 0;else return b-a}function t(a){var b=c("performanceNow")();if(b>k){a=s(a);if(a>0){b=b+a;w(b);k=b}}u()&&r()}function u(){return i<h.length}function v(){while(u()){var a=h[i];i++;if(a)return a}return null}function w(a){var b;while(c("performanceNow")()<a&&(b=v()))b(new y(a))}function x(a){var b=p(a);b=h[b];b&&(q(a),b(new y(null)))}var y=function(){function a(a){this.didTimeout=a==null,this.$1=a}var b=a.prototype;b.timeRemaining=function(){var a=this.$1;if(a!=null){var b=c("performanceNow")();if(b<a)return a-b}return 0};return a}();g.requestIdleCallback=b;g.cancelIdleCallback=q}),98);
__d("requestIdleCallbackAcrossTransitions",["IdleCallbackImplementation","TimeSlice"],(function(a,b,c,d,e,f,g){var h=a.requestIdleCallback||d("IdleCallbackImplementation").requestIdleCallback;function b(b,d){b=c("TimeSlice").guard(b,"requestIdleCallback",{propagationType:c("TimeSlice").PropagationType.CONTINUATION,registerCallStack:!0});return h.call(a,b,d)}g["default"]=b}),98);
__d("setInterval",["cr:896461"],(function(a,b,c,d,e,f,g){g["default"]=b("cr:896461")}),98);
__d("setIntervalBlue",["TimerStorage","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=c("setIntervalAcrossTransitions").apply(void 0,[a,b].concat(e));c("TimerStorage").set(c("TimerStorage").INTERVAL,g);return g}g["default"]=a}),98);
__d("React",["cr:1108857","cr:1294158","gkx"],(function(a,b,c,d,e,f){var g=b("cr:1294158").useSyncExternalStore;function a(a,b,c){return g(b,c)}b("gkx")("4166")&&(b("cr:1294158").useMutableSource=a,b("cr:1294158").unstable_useMutableSource=a);e.exports=b("cr:1294158")}),null);