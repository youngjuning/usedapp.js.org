(self.webpackChunkusedapp_js_org=self.webpackChunkusedapp_js_org||[]).push([[257],{71100:function(B,U,y){"use strict";var w=y(14570),x=y(67294),j=y(84112);function P(c,n){return T(c)||S(c,n)||A(c,n)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(c,n){if(c){if(typeof c=="string")return E(c,n);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E(c,n)}}function E(c,n){(n==null||n>c.length)&&(n=c.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=c[e];return i}function S(c,n){var e=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var i=[],l=!0,s=!1,f,d;try{for(e=e.call(c);!(l=(f=e.next()).done)&&(i.push(f.value),!(n&&i.length===n));l=!0);}catch(_){s=!0,d=_}finally{try{!l&&e.return!=null&&e.return()}finally{if(s)throw d}}return i}}function T(c){if(Array.isArray(c))return c}var C={toString:function(n){return typeof n.type=="string"&&n.type in this?"enum"in n?this.enum(n):this[n.type](n):n.type?this.getValidClassName(n)||n.type:"const"in n?"".concat(n.const):"oneOf"in n?this.oneOf(n):"unknown"},string:function(n){return n.type},number:function(n){return n.type},boolean:function(n){return n.type},any:function(n){return n.type},object:function(n){var e=this,i=[];return Object.entries(n.properties||{}).forEach(function(l){var s,f=P(l,2),d=f[0],_=f[1];i.push("".concat(d).concat((s=n.required)!==null&&s!==void 0&&s.includes(d)?"":"?",": ").concat(_.type==="object"?"object":e.toString(_)))}),i.length?"{ ".concat(i.join("; ")," }"):"{}"},array:function(n){if(n.items){var e=this.getValidClassName(n.items);return e?"".concat(e,"[]"):"".concat(this.toString(n.items),"[]")}return"any[]"},element:function(n){return"<".concat(n.componentName," />")},function:function(n){var e=this,i=n.signature,l="oneOf"in i?i.oneOf:[i];return l.map(function(s){return"".concat(s.isAsync?"async ":"","(").concat(s.arguments.map(function(f){return"".concat(f.key,": ").concat(e.toString(f))}).join(", "),") => ").concat(e.toString(s.returnType))}).join(" | ")},dom:function(n){return n.className||"DOM"},enum:function(n){return n.enum.map(function(e){return JSON.stringify(e)}).join(" | ")},oneOf:function(n){var e=this;return n.oneOf.map(function(i){return e.getValidClassName(i)||e.toString(i)}).join(" | ")},getValidClassName:function(n){return"className"in n&&typeof n.className=="string"&&n.className!=="__type"?n.className:null}},M=function(n){var e=useState(function(){return C.toString(n)}),i=P(e,2),l=i[0],s=i[1];return useEffect(function(){s(C.toString(n))},[n]),React.createElement("code",null,l)},N=function(n){var e,i=useRouteMeta(),l=i.frontmatter,s=useAtomAssets(),f=s.components,d=n.id||l.atomId,_=useIntl();if(!d)throw new Error("`id` properties if required for API component!");var u=f==null?void 0:f[d];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,_.formatMessage({id:"api.component.name"})),React.createElement("th",null,_.formatMessage({id:"api.component.description"})),React.createElement("th",null,_.formatMessage({id:"api.component.type"})),React.createElement("th",null,_.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,u&&(e=u.propsConfig)!==null&&e!==void 0&&e.properties?Object.entries(u.propsConfig.properties).map(function(m){var p,b=P(m,2),t=b[0],a=b[1];return React.createElement("tr",{key:t},React.createElement("td",null,t),React.createElement("td",null,a.description||"--"),React.createElement("td",null,React.createElement(M,a)),React.createElement("td",null,React.createElement("code",null,(p=u.propsConfig.required)!==null&&p!==void 0&&p.includes(t)?_.formatMessage({id:"api.component.required"}):JSON.stringify(a.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},_.formatMessage({id:"api.component.".concat(f?"not.found":"unavailable")},{id:d}))))))},D=null},91898:function(B,U,y){"use strict";var w=y(67294),x=y(81901);function j(){return j=Object.assign?Object.assign.bind():function(A){for(var E=1;E<arguments.length;E++){var S=arguments[E];for(var T in S)Object.prototype.hasOwnProperty.call(S,T)&&(A[T]=S[T])}return A},j.apply(this,arguments)}var P=function(E){return React.createElement("span",j({className:"dumi-default-badge"},E))},I=null},84112:function(B,U,y){"use strict";var w=y(93096),x=y.n(w),j=y(67294),P=y(28033),I=null;function A(e,i){return M(e)||C(e,i)||S(e,i)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(e,i){if(e){if(typeof e=="string")return T(e,i);var l=Object.prototype.toString.call(e).slice(8,-1);if(l==="Object"&&e.constructor&&(l=e.constructor.name),l==="Map"||l==="Set")return Array.from(e);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T(e,i)}}function T(e,i){(i==null||i>e.length)&&(i=e.length);for(var l=0,s=new Array(i);l<i;l++)s[l]=e[l];return s}function C(e,i){var l=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(l!=null){var s=[],f=!0,d=!1,_,u;try{for(l=l.call(e);!(f=(_=l.next()).done)&&(s.push(_.value),!(i&&s.length===i));f=!0);}catch(m){d=!0,u=m}finally{try{!f&&l.return!=null&&l.return()}finally{if(d)throw u}}return s}}function M(e){if(Array.isArray(e))return e}function N(e,i){if(e==null)return{};var l=D(e,i),s,f;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(f=0;f<d.length;f++)s=d[f],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}function D(e,i){if(e==null)return{};var l={},s=Object.keys(e),f,d;for(d=0;d<s.length;d++)f=s[d],!(i.indexOf(f)>=0)&&(l[f]=e[f]);return l}var c=function(i){var l=i.children,s=N(i,I),f=useRef(null),d=useState(!1),_=A(d,2),u=_[0],m=_[1],p=useState(!1),b=A(p,2),t=b[0],a=b[1];return useEffect(function(){var r=f.current;if(r){var o=throttle(function(){m(r.scrollLeft>0),a(r.scrollLeft<r.scrollWidth-r.offsetWidth)},100);return o(),r.addEventListener("scroll",o),window.addEventListener("resize",o),function(){r.removeEventListener("scroll",o),window.removeEventListener("resize",o)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:f,"data-left-folded":u||void 0,"data-right-folded":t||void 0},React.createElement("table",s,l)))},n=null},40841:function(B,U,y){"use strict";var w=y(70593),x=y(67294),j=y(7043);function P(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter(function(h){return Object.getOwnPropertyDescriptor(t,h).enumerable})),r.push.apply(r,o)}return r}function I(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?P(Object(r),!0).forEach(function(o){A(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function A(t,a,r){return a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function E(t,a){return C(t)||T(t,a)||D(t,a)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,a){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o=[],h=!0,v=!1,R,O;try{for(r=r.call(t);!(h=(R=r.next()).done)&&(o.push(R.value),!(a&&o.length===a));h=!0);}catch(k){v=!0,O=k}finally{try{!h&&r.return!=null&&r.return()}finally{if(v)throw O}}return o}}function C(t){if(Array.isArray(t))return t}function M(t){return n(t)||c(t)||D(t)||N()}function N(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(t,a){if(t){if(typeof t=="string")return e(t,a);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,a)}}function c(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n(t){if(Array.isArray(t))return e(t)}function e(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,o=new Array(a);r<a;r++)o[r]=t[r];return o}function i(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=[];return[].concat(t).forEach(function(o,h){var v="".concat(a?"".concat(a,"-"):"").concat(h);switch(o==null?void 0:o.type){case"ul":{var R,O=((R=r[r.length-1])===null||R===void 0?void 0:R.children)||r,k=i(o.props.children||[],v);O.push.apply(O,M(k));break}case"li":{var W=i(o.props.children,v);r.push({title:[].concat(o.props.children).filter(function(F){return F.type!=="ul"}),key:v,children:W,isLeaf:!W.length});break}default:}}),r}var l=function(a){var r=useState(i(a)),o=E(r,2),h=o[0],v=o[1];return useEffect(function(){v(i(a))},[a]),h},s=function(a){var r=a.isLeaf,o=a.expanded;return r?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FileOutlined,{fill:"currentColor"})):o?React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOpenOutlined,{fill:"currentColor"})):React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(FolderOutlined,{fill:"currentColor"}))},f=function(a){var r=a.isLeaf,o=a.expanded;return r?React.createElement("span",{className:"tree-switcher-leaf-line"}):o?React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(MinusSquareOutlined,{fill:"currentColor"}))):React.createElement("span",{className:"tree-switcher-line-icon"},React.createElement("span",{className:"dumi-default-tree-icon"},React.createElement(PlusSquareOutlined,{fill:"currentColor"})))},d=function(){return{height:0,opacity:0}},_=function(a){var r=a.scrollHeight;return{height:r,opacity:1}},u=function(a){return{height:a?a.offsetHeight:0}},m=function(a,r){return(r==null?void 0:r.deadline)===!0||r.propertyName==="height"},p={motionName:"ant-motion-collapse",onAppearStart:d,onEnterStart:d,onAppearActive:_,onEnterActive:_,onLeaveStart:u,onLeaveActive:d,onAppearEnd:m,onEnterEnd:m,onLeaveEnd:m,motionDeadline:500},b=function(t){var a=l(t.children),r=createRef(),o=function(v,R){var O=R.isLeaf;O||v.shiftKey||v.metaKey||v.ctrlKey||r.current.onNodeExpand(v,R)};return React.createElement(Tree,{className:"dumi-default-tree",icon:s,ref:r,itemHeight:20,showLine:!0,selectable:!1,virtual:!1,motion:I(I({},p),{},{motionAppear:!1}),onClick:o,treeData:[{key:"0",title:t.title||"<root>",children:a}],defaultExpandAll:!0,switcherIcon:f})}},93096:function(B,U,y){var w="Expected a function",x=NaN,j="[object Symbol]",P=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,E=/^0o[0-7]+$/i,S=parseInt,T=typeof y.g=="object"&&y.g&&y.g.Object===Object&&y.g,C=typeof self=="object"&&self&&self.Object===Object&&self,M=T||C||Function("return this")(),N=Object.prototype,D=N.toString,c=Math.max,n=Math.min,e=function(){return M.Date.now()};function i(u,m,p){var b,t,a,r,o,h,v=0,R=!1,O=!1,k=!0;if(typeof u!="function")throw new TypeError(w);m=_(m)||0,s(p)&&(R=!!p.leading,O="maxWait"in p,a=O?c(_(p.maxWait)||0,m):a,k="trailing"in p?!!p.trailing:k);function W(g){var L=b,K=t;return b=t=void 0,v=g,r=u.apply(K,L),r}function F(g){return v=g,o=setTimeout(H,m),R?W(g):r}function J(g){var L=g-h,K=g-v,z=m-L;return O?n(z,a-K):z}function V(g){var L=g-h,K=g-v;return h===void 0||L>=m||L<0||O&&K>=a}function H(){var g=e();if(V(g))return X(g);o=setTimeout(H,J(g))}function X(g){return o=void 0,k&&b?W(g):(b=t=void 0,r)}function G(){o!==void 0&&clearTimeout(o),v=0,b=h=t=o=void 0}function Q(){return o===void 0?r:X(e())}function $(){var g=e(),L=V(g);if(b=arguments,t=this,h=g,L){if(o===void 0)return F(h);if(O)return o=setTimeout(H,m),W(h)}return o===void 0&&(o=setTimeout(H,m)),r}return $.cancel=G,$.flush=Q,$}function l(u,m,p){var b=!0,t=!0;if(typeof u!="function")throw new TypeError(w);return s(p)&&(b="leading"in p?!!p.leading:b,t="trailing"in p?!!p.trailing:t),i(u,m,{leading:b,maxWait:m,trailing:t})}function s(u){var m=typeof u;return!!u&&(m=="object"||m=="function")}function f(u){return!!u&&typeof u=="object"}function d(u){return typeof u=="symbol"||f(u)&&D.call(u)==j}function _(u){if(typeof u=="number")return u;if(d(u))return x;if(s(u)){var m=typeof u.valueOf=="function"?u.valueOf():u;u=s(m)?m+"":m}if(typeof u!="string")return u===0?u:+u;u=u.replace(P,"");var p=A.test(u);return p||E.test(u)?S(u.slice(2),p?2:8):I.test(u)?x:+u}B.exports=l}}]);