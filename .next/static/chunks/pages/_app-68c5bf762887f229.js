(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{79742:function(p,g){"use strict";g.byteLength=function(p){var g=getLens(p),w=g[0],m=g[1];return(w+m)*3/4-m},g.toByteArray=function(p){var g,w,x=getLens(p),A=x[0],_=x[1],B=new v((A+_)*3/4-_),O=0,T=_>0?A-4:A;for(w=0;w<T;w+=4)g=m[p.charCodeAt(w)]<<18|m[p.charCodeAt(w+1)]<<12|m[p.charCodeAt(w+2)]<<6|m[p.charCodeAt(w+3)],B[O++]=g>>16&255,B[O++]=g>>8&255,B[O++]=255&g;return 2===_&&(g=m[p.charCodeAt(w)]<<2|m[p.charCodeAt(w+1)]>>4,B[O++]=255&g),1===_&&(g=m[p.charCodeAt(w)]<<10|m[p.charCodeAt(w+1)]<<4|m[p.charCodeAt(w+2)]>>2,B[O++]=g>>8&255,B[O++]=255&g),B},g.fromByteArray=function(p){for(var g,m=p.length,v=m%3,x=[],A=0,_=m-v;A<_;A+=16383)x.push(function(p,g,m){for(var v,x=[],A=g;A<m;A+=3)x.push(w[(v=(p[A]<<16&16711680)+(p[A+1]<<8&65280)+(255&p[A+2]))>>18&63]+w[v>>12&63]+w[v>>6&63]+w[63&v]);return x.join("")}(p,A,A+16383>_?_:A+16383));return 1===v?x.push(w[(g=p[m-1])>>2]+w[g<<4&63]+"=="):2===v&&x.push(w[(g=(p[m-2]<<8)+p[m-1])>>10]+w[g>>4&63]+w[g<<2&63]+"="),x.join("")};for(var w=[],m=[],v="undefined"!=typeof Uint8Array?Uint8Array:Array,x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",A=0,_=x.length;A<_;++A)w[A]=x[A],m[x.charCodeAt(A)]=A;function getLens(p){var g=p.length;if(g%4>0)throw Error("Invalid string. Length must be a multiple of 4");var w=p.indexOf("=");-1===w&&(w=g);var m=w===g?0:4-w%4;return[w,m]}m["-".charCodeAt(0)]=62,m["_".charCodeAt(0)]=63},48764:function(p,g,w){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let m=w(79742),v=w(80645),x="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(p){if(p>2147483647)throw RangeError('The value "'+p+'" is invalid for option "size"');let g=new Uint8Array(p);return Object.setPrototypeOf(g,Buffer.prototype),g}function Buffer(p,g,w){if("number"==typeof p){if("string"==typeof g)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(p)}return from(p,g,w)}function from(p,g,w){if("string"==typeof p)return function(p,g){if(("string"!=typeof g||""===g)&&(g="utf8"),!Buffer.isEncoding(g))throw TypeError("Unknown encoding: "+g);let w=0|byteLength(p,g),m=createBuffer(w),v=m.write(p,g);return v!==w&&(m=m.slice(0,v)),m}(p,g);if(ArrayBuffer.isView(p))return function(p){if(isInstance(p,Uint8Array)){let g=new Uint8Array(p);return fromArrayBuffer(g.buffer,g.byteOffset,g.byteLength)}return fromArrayLike(p)}(p);if(null==p)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if(isInstance(p,ArrayBuffer)||p&&isInstance(p.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(p,SharedArrayBuffer)||p&&isInstance(p.buffer,SharedArrayBuffer)))return fromArrayBuffer(p,g,w);if("number"==typeof p)throw TypeError('The "value" argument must not be of type number. Received type number');let m=p.valueOf&&p.valueOf();if(null!=m&&m!==p)return Buffer.from(m,g,w);let v=function(p){var g;if(Buffer.isBuffer(p)){let g=0|checked(p.length),w=createBuffer(g);return 0===w.length||p.copy(w,0,0,g),w}return void 0!==p.length?"number"!=typeof p.length||(g=p.length)!=g?createBuffer(0):fromArrayLike(p):"Buffer"===p.type&&Array.isArray(p.data)?fromArrayLike(p.data):void 0}(p);if(v)return v;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof p[Symbol.toPrimitive])return Buffer.from(p[Symbol.toPrimitive]("string"),g,w);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}function assertSize(p){if("number"!=typeof p)throw TypeError('"size" argument must be of type number');if(p<0)throw RangeError('The value "'+p+'" is invalid for option "size"')}function allocUnsafe(p){return assertSize(p),createBuffer(p<0?0:0|checked(p))}function fromArrayLike(p){let g=p.length<0?0:0|checked(p.length),w=createBuffer(g);for(let m=0;m<g;m+=1)w[m]=255&p[m];return w}function fromArrayBuffer(p,g,w){let m;if(g<0||p.byteLength<g)throw RangeError('"offset" is outside of buffer bounds');if(p.byteLength<g+(w||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(m=void 0===g&&void 0===w?new Uint8Array(p):void 0===w?new Uint8Array(p,g):new Uint8Array(p,g,w),Buffer.prototype),m}function checked(p){if(p>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|p}function byteLength(p,g){if(Buffer.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||isInstance(p,ArrayBuffer))return p.byteLength;if("string"!=typeof p)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);let w=p.length,m=arguments.length>2&&!0===arguments[2];if(!m&&0===w)return 0;let v=!1;for(;;)switch(g){case"ascii":case"latin1":case"binary":return w;case"utf8":case"utf-8":return utf8ToBytes(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*w;case"hex":return w>>>1;case"base64":return base64ToBytes(p).length;default:if(v)return m?-1:utf8ToBytes(p).length;g=(""+g).toLowerCase(),v=!0}}function slowToString(p,g,w){let v=!1;if((void 0===g||g<0)&&(g=0),g>this.length||((void 0===w||w>this.length)&&(w=this.length),w<=0||(w>>>=0)<=(g>>>=0)))return"";for(p||(p="utf8");;)switch(p){case"hex":return function(p,g,w){let m=p.length;(!g||g<0)&&(g=0),(!w||w<0||w>m)&&(w=m);let v="";for(let m=g;m<w;++m)v+=B[p[m]];return v}(this,g,w);case"utf8":case"utf-8":return utf8Slice(this,g,w);case"ascii":return function(p,g,w){let m="";w=Math.min(p.length,w);for(let v=g;v<w;++v)m+=String.fromCharCode(127&p[v]);return m}(this,g,w);case"latin1":case"binary":return function(p,g,w){let m="";w=Math.min(p.length,w);for(let v=g;v<w;++v)m+=String.fromCharCode(p[v]);return m}(this,g,w);case"base64":var x,A;return x=g,A=w,0===x&&A===this.length?m.fromByteArray(this):m.fromByteArray(this.slice(x,A));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(p,g,w){let m=p.slice(g,w),v="";for(let p=0;p<m.length-1;p+=2)v+=String.fromCharCode(m[p]+256*m[p+1]);return v}(this,g,w);default:if(v)throw TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),v=!0}}function swap(p,g,w){let m=p[g];p[g]=p[w],p[w]=m}function bidirectionalIndexOf(p,g,w,m,v){var x;if(0===p.length)return -1;if("string"==typeof w?(m=w,w=0):w>2147483647?w=2147483647:w<-2147483648&&(w=-2147483648),(x=w=+w)!=x&&(w=v?0:p.length-1),w<0&&(w=p.length+w),w>=p.length){if(v)return -1;w=p.length-1}else if(w<0){if(!v)return -1;w=0}if("string"==typeof g&&(g=Buffer.from(g,m)),Buffer.isBuffer(g))return 0===g.length?-1:arrayIndexOf(p,g,w,m,v);if("number"==typeof g)return(g&=255,"function"==typeof Uint8Array.prototype.indexOf)?v?Uint8Array.prototype.indexOf.call(p,g,w):Uint8Array.prototype.lastIndexOf.call(p,g,w):arrayIndexOf(p,[g],w,m,v);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(p,g,w,m,v){let x,A=1,_=p.length,B=g.length;if(void 0!==m&&("ucs2"===(m=String(m).toLowerCase())||"ucs-2"===m||"utf16le"===m||"utf-16le"===m)){if(p.length<2||g.length<2)return -1;A=2,_/=2,B/=2,w/=2}function read(p,g){return 1===A?p[g]:p.readUInt16BE(g*A)}if(v){let m=-1;for(x=w;x<_;x++)if(read(p,x)===read(g,-1===m?0:x-m)){if(-1===m&&(m=x),x-m+1===B)return m*A}else -1!==m&&(x-=x-m),m=-1}else for(w+B>_&&(w=_-B),x=w;x>=0;x--){let w=!0;for(let m=0;m<B;m++)if(read(p,x+m)!==read(g,m)){w=!1;break}if(w)return x}return -1}function utf8Slice(p,g,w){w=Math.min(p.length,w);let m=[],v=g;for(;v<w;){let g=p[v],x=null,A=g>239?4:g>223?3:g>191?2:1;if(v+A<=w){let w,m,_,B;switch(A){case 1:g<128&&(x=g);break;case 2:(192&(w=p[v+1]))==128&&(B=(31&g)<<6|63&w)>127&&(x=B);break;case 3:w=p[v+1],m=p[v+2],(192&w)==128&&(192&m)==128&&(B=(15&g)<<12|(63&w)<<6|63&m)>2047&&(B<55296||B>57343)&&(x=B);break;case 4:w=p[v+1],m=p[v+2],_=p[v+3],(192&w)==128&&(192&m)==128&&(192&_)==128&&(B=(15&g)<<18|(63&w)<<12|(63&m)<<6|63&_)>65535&&B<1114112&&(x=B)}}null===x?(x=65533,A=1):x>65535&&(x-=65536,m.push(x>>>10&1023|55296),x=56320|1023&x),m.push(x),v+=A}return function(p){let g=p.length;if(g<=4096)return String.fromCharCode.apply(String,p);let w="",m=0;for(;m<g;)w+=String.fromCharCode.apply(String,p.slice(m,m+=4096));return w}(m)}function checkOffset(p,g,w){if(p%1!=0||p<0)throw RangeError("offset is not uint");if(p+g>w)throw RangeError("Trying to access beyond buffer length")}function checkInt(p,g,w,m,v,x){if(!Buffer.isBuffer(p))throw TypeError('"buffer" argument must be a Buffer instance');if(g>v||g<x)throw RangeError('"value" argument is out of bounds');if(w+m>p.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(p,g,w,m,v){checkIntBI(g,m,v,p,w,7);let x=Number(g&BigInt(4294967295));p[w++]=x,x>>=8,p[w++]=x,x>>=8,p[w++]=x,x>>=8,p[w++]=x;let A=Number(g>>BigInt(32)&BigInt(4294967295));return p[w++]=A,A>>=8,p[w++]=A,A>>=8,p[w++]=A,A>>=8,p[w++]=A,w}function wrtBigUInt64BE(p,g,w,m,v){checkIntBI(g,m,v,p,w,7);let x=Number(g&BigInt(4294967295));p[w+7]=x,x>>=8,p[w+6]=x,x>>=8,p[w+5]=x,x>>=8,p[w+4]=x;let A=Number(g>>BigInt(32)&BigInt(4294967295));return p[w+3]=A,A>>=8,p[w+2]=A,A>>=8,p[w+1]=A,A>>=8,p[w]=A,w+8}function checkIEEE754(p,g,w,m,v,x){if(w+m>p.length||w<0)throw RangeError("Index out of range")}function writeFloat(p,g,w,m,x){return g=+g,w>>>=0,x||checkIEEE754(p,g,w,4,34028234663852886e22,-34028234663852886e22),v.write(p,g,w,m,23,4),w+4}function writeDouble(p,g,w,m,x){return g=+g,w>>>=0,x||checkIEEE754(p,g,w,8,17976931348623157e292,-17976931348623157e292),v.write(p,g,w,m,52,8),w+8}g.Buffer=Buffer,g.SlowBuffer=function(p){return+p!=p&&(p=0),Buffer.alloc(+p)},g.INSPECT_MAX_BYTES=50,g.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=function(){try{let p=new Uint8Array(1),g={foo:function(){return 42}};return Object.setPrototypeOf(g,Uint8Array.prototype),Object.setPrototypeOf(p,g),42===p.foo()}catch(p){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(p,g,w){return from(p,g,w)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(p,g,w){return(assertSize(p),p<=0)?createBuffer(p):void 0!==g?"string"==typeof w?createBuffer(p).fill(g,w):createBuffer(p).fill(g):createBuffer(p)},Buffer.allocUnsafe=function(p){return allocUnsafe(p)},Buffer.allocUnsafeSlow=function(p){return allocUnsafe(p)},Buffer.isBuffer=function(p){return null!=p&&!0===p._isBuffer&&p!==Buffer.prototype},Buffer.compare=function(p,g){if(isInstance(p,Uint8Array)&&(p=Buffer.from(p,p.offset,p.byteLength)),isInstance(g,Uint8Array)&&(g=Buffer.from(g,g.offset,g.byteLength)),!Buffer.isBuffer(p)||!Buffer.isBuffer(g))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(p===g)return 0;let w=p.length,m=g.length;for(let v=0,x=Math.min(w,m);v<x;++v)if(p[v]!==g[v]){w=p[v],m=g[v];break}return w<m?-1:m<w?1:0},Buffer.isEncoding=function(p){switch(String(p).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(p,g){let w;if(!Array.isArray(p))throw TypeError('"list" argument must be an Array of Buffers');if(0===p.length)return Buffer.alloc(0);if(void 0===g)for(w=0,g=0;w<p.length;++w)g+=p[w].length;let m=Buffer.allocUnsafe(g),v=0;for(w=0;w<p.length;++w){let g=p[w];if(isInstance(g,Uint8Array))v+g.length>m.length?(Buffer.isBuffer(g)||(g=Buffer.from(g)),g.copy(m,v)):Uint8Array.prototype.set.call(m,g,v);else if(Buffer.isBuffer(g))g.copy(m,v);else throw TypeError('"list" argument must be an Array of Buffers');v+=g.length}return m},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let p=this.length;if(p%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let g=0;g<p;g+=2)swap(this,g,g+1);return this},Buffer.prototype.swap32=function(){let p=this.length;if(p%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let g=0;g<p;g+=4)swap(this,g,g+3),swap(this,g+1,g+2);return this},Buffer.prototype.swap64=function(){let p=this.length;if(p%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let g=0;g<p;g+=8)swap(this,g,g+7),swap(this,g+1,g+6),swap(this,g+2,g+5),swap(this,g+3,g+4);return this},Buffer.prototype.toString=function(){let p=this.length;return 0===p?"":0==arguments.length?utf8Slice(this,0,p):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(p){if(!Buffer.isBuffer(p))throw TypeError("Argument must be a Buffer");return this===p||0===Buffer.compare(this,p)},Buffer.prototype.inspect=function(){let p="",w=g.INSPECT_MAX_BYTES;return p=this.toString("hex",0,w).replace(/(.{2})/g,"$1 ").trim(),this.length>w&&(p+=" ... "),"<Buffer "+p+">"},x&&(Buffer.prototype[x]=Buffer.prototype.inspect),Buffer.prototype.compare=function(p,g,w,m,v){if(isInstance(p,Uint8Array)&&(p=Buffer.from(p,p.offset,p.byteLength)),!Buffer.isBuffer(p))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof p);if(void 0===g&&(g=0),void 0===w&&(w=p?p.length:0),void 0===m&&(m=0),void 0===v&&(v=this.length),g<0||w>p.length||m<0||v>this.length)throw RangeError("out of range index");if(m>=v&&g>=w)return 0;if(m>=v)return -1;if(g>=w)return 1;if(g>>>=0,w>>>=0,m>>>=0,v>>>=0,this===p)return 0;let x=v-m,A=w-g,_=Math.min(x,A),B=this.slice(m,v),O=p.slice(g,w);for(let p=0;p<_;++p)if(B[p]!==O[p]){x=B[p],A=O[p];break}return x<A?-1:A<x?1:0},Buffer.prototype.includes=function(p,g,w){return -1!==this.indexOf(p,g,w)},Buffer.prototype.indexOf=function(p,g,w){return bidirectionalIndexOf(this,p,g,w,!0)},Buffer.prototype.lastIndexOf=function(p,g,w){return bidirectionalIndexOf(this,p,g,w,!1)},Buffer.prototype.write=function(p,g,w,m){var v,x,A,_,B,O,T,U;if(void 0===g)m="utf8",w=this.length,g=0;else if(void 0===w&&"string"==typeof g)m=g,w=this.length,g=0;else if(isFinite(g))g>>>=0,isFinite(w)?(w>>>=0,void 0===m&&(m="utf8")):(m=w,w=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let F=this.length-g;if((void 0===w||w>F)&&(w=F),p.length>0&&(w<0||g<0)||g>this.length)throw RangeError("Attempt to write outside buffer bounds");m||(m="utf8");let z=!1;for(;;)switch(m){case"hex":return function(p,g,w,m){let v;w=Number(w)||0;let x=p.length-w;m?(m=Number(m))>x&&(m=x):m=x;let A=g.length;for(m>A/2&&(m=A/2),v=0;v<m;++v){let m=parseInt(g.substr(2*v,2),16);if(m!=m)break;p[w+v]=m}return v}(this,p,g,w);case"utf8":case"utf-8":return v=g,x=w,blitBuffer(utf8ToBytes(p,this.length-v),this,v,x);case"ascii":case"latin1":case"binary":return A=g,_=w,blitBuffer(function(p){let g=[];for(let w=0;w<p.length;++w)g.push(255&p.charCodeAt(w));return g}(p),this,A,_);case"base64":return B=g,O=w,blitBuffer(base64ToBytes(p),this,B,O);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T=g,U=w,blitBuffer(function(p,g){let w,m;let v=[];for(let x=0;x<p.length&&!((g-=2)<0);++x)m=(w=p.charCodeAt(x))>>8,v.push(w%256),v.push(m);return v}(p,this.length-T),this,T,U);default:if(z)throw TypeError("Unknown encoding: "+m);m=(""+m).toLowerCase(),z=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(p,g){let w=this.length;p=~~p,g=void 0===g?w:~~g,p<0?(p+=w)<0&&(p=0):p>w&&(p=w),g<0?(g+=w)<0&&(g=0):g>w&&(g=w),g<p&&(g=p);let m=this.subarray(p,g);return Object.setPrototypeOf(m,Buffer.prototype),m},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(p,g,w){p>>>=0,g>>>=0,w||checkOffset(p,g,this.length);let m=this[p],v=1,x=0;for(;++x<g&&(v*=256);)m+=this[p+x]*v;return m},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(p,g,w){p>>>=0,g>>>=0,w||checkOffset(p,g,this.length);let m=this[p+--g],v=1;for(;g>0&&(v*=256);)m+=this[p+--g]*v;return m},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(p,g){return p>>>=0,g||checkOffset(p,1,this.length),this[p]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(p,g){return p>>>=0,g||checkOffset(p,2,this.length),this[p]|this[p+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(p,g){return p>>>=0,g||checkOffset(p,2,this.length),this[p]<<8|this[p+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),(this[p]|this[p+1]<<8|this[p+2]<<16)+16777216*this[p+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),16777216*this[p]+(this[p+1]<<16|this[p+2]<<8|this[p+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(p){validateNumber(p>>>=0,"offset");let g=this[p],w=this[p+7];(void 0===g||void 0===w)&&boundsError(p,this.length-8);let m=g+256*this[++p]+65536*this[++p]+16777216*this[++p],v=this[++p]+256*this[++p]+65536*this[++p]+16777216*w;return BigInt(m)+(BigInt(v)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(p){validateNumber(p>>>=0,"offset");let g=this[p],w=this[p+7];(void 0===g||void 0===w)&&boundsError(p,this.length-8);let m=16777216*g+65536*this[++p]+256*this[++p]+this[++p],v=16777216*this[++p]+65536*this[++p]+256*this[++p]+w;return(BigInt(m)<<BigInt(32))+BigInt(v)}),Buffer.prototype.readIntLE=function(p,g,w){p>>>=0,g>>>=0,w||checkOffset(p,g,this.length);let m=this[p],v=1,x=0;for(;++x<g&&(v*=256);)m+=this[p+x]*v;return m>=(v*=128)&&(m-=Math.pow(2,8*g)),m},Buffer.prototype.readIntBE=function(p,g,w){p>>>=0,g>>>=0,w||checkOffset(p,g,this.length);let m=g,v=1,x=this[p+--m];for(;m>0&&(v*=256);)x+=this[p+--m]*v;return x>=(v*=128)&&(x-=Math.pow(2,8*g)),x},Buffer.prototype.readInt8=function(p,g){return(p>>>=0,g||checkOffset(p,1,this.length),128&this[p])?-((255-this[p]+1)*1):this[p]},Buffer.prototype.readInt16LE=function(p,g){p>>>=0,g||checkOffset(p,2,this.length);let w=this[p]|this[p+1]<<8;return 32768&w?4294901760|w:w},Buffer.prototype.readInt16BE=function(p,g){p>>>=0,g||checkOffset(p,2,this.length);let w=this[p+1]|this[p]<<8;return 32768&w?4294901760|w:w},Buffer.prototype.readInt32LE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),this[p]|this[p+1]<<8|this[p+2]<<16|this[p+3]<<24},Buffer.prototype.readInt32BE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),this[p]<<24|this[p+1]<<16|this[p+2]<<8|this[p+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(p){validateNumber(p>>>=0,"offset");let g=this[p],w=this[p+7];(void 0===g||void 0===w)&&boundsError(p,this.length-8);let m=this[p+4]+256*this[p+5]+65536*this[p+6]+(w<<24);return(BigInt(m)<<BigInt(32))+BigInt(g+256*this[++p]+65536*this[++p]+16777216*this[++p])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(p){validateNumber(p>>>=0,"offset");let g=this[p],w=this[p+7];(void 0===g||void 0===w)&&boundsError(p,this.length-8);let m=(g<<24)+65536*this[++p]+256*this[++p]+this[++p];return(BigInt(m)<<BigInt(32))+BigInt(16777216*this[++p]+65536*this[++p]+256*this[++p]+w)}),Buffer.prototype.readFloatLE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),v.read(this,p,!0,23,4)},Buffer.prototype.readFloatBE=function(p,g){return p>>>=0,g||checkOffset(p,4,this.length),v.read(this,p,!1,23,4)},Buffer.prototype.readDoubleLE=function(p,g){return p>>>=0,g||checkOffset(p,8,this.length),v.read(this,p,!0,52,8)},Buffer.prototype.readDoubleBE=function(p,g){return p>>>=0,g||checkOffset(p,8,this.length),v.read(this,p,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(p,g,w,m){if(p=+p,g>>>=0,w>>>=0,!m){let m=Math.pow(2,8*w)-1;checkInt(this,p,g,w,m,0)}let v=1,x=0;for(this[g]=255&p;++x<w&&(v*=256);)this[g+x]=p/v&255;return g+w},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(p,g,w,m){if(p=+p,g>>>=0,w>>>=0,!m){let m=Math.pow(2,8*w)-1;checkInt(this,p,g,w,m,0)}let v=w-1,x=1;for(this[g+v]=255&p;--v>=0&&(x*=256);)this[g+v]=p/x&255;return g+w},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,1,255,0),this[g]=255&p,g+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,2,65535,0),this[g]=255&p,this[g+1]=p>>>8,g+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,2,65535,0),this[g]=p>>>8,this[g+1]=255&p,g+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,4,4294967295,0),this[g+3]=p>>>24,this[g+2]=p>>>16,this[g+1]=p>>>8,this[g]=255&p,g+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,4,4294967295,0),this[g]=p>>>24,this[g+1]=p>>>16,this[g+2]=p>>>8,this[g+3]=255&p,g+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(p,g=0){return wrtBigUInt64LE(this,p,g,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(p,g=0){return wrtBigUInt64BE(this,p,g,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(p,g,w,m){if(p=+p,g>>>=0,!m){let m=Math.pow(2,8*w-1);checkInt(this,p,g,w,m-1,-m)}let v=0,x=1,A=0;for(this[g]=255&p;++v<w&&(x*=256);)p<0&&0===A&&0!==this[g+v-1]&&(A=1),this[g+v]=(p/x>>0)-A&255;return g+w},Buffer.prototype.writeIntBE=function(p,g,w,m){if(p=+p,g>>>=0,!m){let m=Math.pow(2,8*w-1);checkInt(this,p,g,w,m-1,-m)}let v=w-1,x=1,A=0;for(this[g+v]=255&p;--v>=0&&(x*=256);)p<0&&0===A&&0!==this[g+v+1]&&(A=1),this[g+v]=(p/x>>0)-A&255;return g+w},Buffer.prototype.writeInt8=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,1,127,-128),p<0&&(p=255+p+1),this[g]=255&p,g+1},Buffer.prototype.writeInt16LE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,2,32767,-32768),this[g]=255&p,this[g+1]=p>>>8,g+2},Buffer.prototype.writeInt16BE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,2,32767,-32768),this[g]=p>>>8,this[g+1]=255&p,g+2},Buffer.prototype.writeInt32LE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,4,2147483647,-2147483648),this[g]=255&p,this[g+1]=p>>>8,this[g+2]=p>>>16,this[g+3]=p>>>24,g+4},Buffer.prototype.writeInt32BE=function(p,g,w){return p=+p,g>>>=0,w||checkInt(this,p,g,4,2147483647,-2147483648),p<0&&(p=4294967295+p+1),this[g]=p>>>24,this[g+1]=p>>>16,this[g+2]=p>>>8,this[g+3]=255&p,g+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(p,g=0){return wrtBigUInt64LE(this,p,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(p,g=0){return wrtBigUInt64BE(this,p,g,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(p,g,w){return writeFloat(this,p,g,!0,w)},Buffer.prototype.writeFloatBE=function(p,g,w){return writeFloat(this,p,g,!1,w)},Buffer.prototype.writeDoubleLE=function(p,g,w){return writeDouble(this,p,g,!0,w)},Buffer.prototype.writeDoubleBE=function(p,g,w){return writeDouble(this,p,g,!1,w)},Buffer.prototype.copy=function(p,g,w,m){if(!Buffer.isBuffer(p))throw TypeError("argument should be a Buffer");if(w||(w=0),m||0===m||(m=this.length),g>=p.length&&(g=p.length),g||(g=0),m>0&&m<w&&(m=w),m===w||0===p.length||0===this.length)return 0;if(g<0)throw RangeError("targetStart out of bounds");if(w<0||w>=this.length)throw RangeError("Index out of range");if(m<0)throw RangeError("sourceEnd out of bounds");m>this.length&&(m=this.length),p.length-g<m-w&&(m=p.length-g+w);let v=m-w;return this===p&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(g,w,m):Uint8Array.prototype.set.call(p,this.subarray(w,m),g),v},Buffer.prototype.fill=function(p,g,w,m){let v;if("string"==typeof p){if("string"==typeof g?(m=g,g=0,w=this.length):"string"==typeof w&&(m=w,w=this.length),void 0!==m&&"string"!=typeof m)throw TypeError("encoding must be a string");if("string"==typeof m&&!Buffer.isEncoding(m))throw TypeError("Unknown encoding: "+m);if(1===p.length){let g=p.charCodeAt(0);("utf8"===m&&g<128||"latin1"===m)&&(p=g)}}else"number"==typeof p?p&=255:"boolean"==typeof p&&(p=Number(p));if(g<0||this.length<g||this.length<w)throw RangeError("Out of range index");if(w<=g)return this;if(g>>>=0,w=void 0===w?this.length:w>>>0,p||(p=0),"number"==typeof p)for(v=g;v<w;++v)this[v]=p;else{let x=Buffer.isBuffer(p)?p:Buffer.from(p,m),A=x.length;if(0===A)throw TypeError('The value "'+p+'" is invalid for argument "value"');for(v=0;v<w-g;++v)this[v+g]=x[v%A]}return this};let A={};function E(p,g,w){A[p]=class extends w{constructor(){super(),Object.defineProperty(this,"message",{value:g.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(p){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:p,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}function addNumericalSeparator(p){let g="",w=p.length,m="-"===p[0]?1:0;for(;w>=m+4;w-=3)g=`_${p.slice(w-3,w)}${g}`;return`${p.slice(0,w)}${g}`}function checkIntBI(p,g,w,m,v,x){if(p>w||p<g){let m;let v="bigint"==typeof g?"n":"";throw m=x>3?0===g||g===BigInt(0)?`>= 0${v} and < 2${v} ** ${(x+1)*8}${v}`:`>= -(2${v} ** ${(x+1)*8-1}${v}) and < 2 ** ${(x+1)*8-1}${v}`:`>= ${g}${v} and <= ${w}${v}`,new A.ERR_OUT_OF_RANGE("value",m,p)}validateNumber(v,"offset"),(void 0===m[v]||void 0===m[v+x])&&boundsError(v,m.length-(x+1))}function validateNumber(p,g){if("number"!=typeof p)throw new A.ERR_INVALID_ARG_TYPE(g,"number",p)}function boundsError(p,g,w){if(Math.floor(p)!==p)throw validateNumber(p,w),new A.ERR_OUT_OF_RANGE(w||"offset","an integer",p);if(g<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(w||"offset",`>= ${w?1:0} and <= ${g}`,p)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(p,g){return`The "${p}" argument must be of type number. Received type ${typeof g}`},TypeError),E("ERR_OUT_OF_RANGE",function(p,g,w){let m=`The value of "${p}" is out of range.`,v=w;return Number.isInteger(w)&&Math.abs(w)>4294967296?v=addNumericalSeparator(String(w)):"bigint"==typeof w&&(v=String(w),(w>BigInt(2)**BigInt(32)||w<-(BigInt(2)**BigInt(32)))&&(v=addNumericalSeparator(v)),v+="n"),m+=` It must be ${g}. Received ${v}`},RangeError);let _=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(p,g){let w;g=g||1/0;let m=p.length,v=null,x=[];for(let A=0;A<m;++A){if((w=p.charCodeAt(A))>55295&&w<57344){if(!v){if(w>56319||A+1===m){(g-=3)>-1&&x.push(239,191,189);continue}v=w;continue}if(w<56320){(g-=3)>-1&&x.push(239,191,189),v=w;continue}w=(v-55296<<10|w-56320)+65536}else v&&(g-=3)>-1&&x.push(239,191,189);if(v=null,w<128){if((g-=1)<0)break;x.push(w)}else if(w<2048){if((g-=2)<0)break;x.push(w>>6|192,63&w|128)}else if(w<65536){if((g-=3)<0)break;x.push(w>>12|224,w>>6&63|128,63&w|128)}else if(w<1114112){if((g-=4)<0)break;x.push(w>>18|240,w>>12&63|128,w>>6&63|128,63&w|128)}else throw Error("Invalid code point")}return x}function base64ToBytes(p){return m.toByteArray(function(p){if((p=(p=p.split("=")[0]).trim().replace(_,"")).length<2)return"";for(;p.length%4!=0;)p+="=";return p}(p))}function blitBuffer(p,g,w,m){let v;for(v=0;v<m&&!(v+w>=g.length)&&!(v>=p.length);++v)g[v+w]=p[v];return v}function isInstance(p,g){return p instanceof g||null!=p&&null!=p.constructor&&null!=p.constructor.name&&p.constructor.name===g.name}let B=function(){let p="0123456789abcdef",g=Array(256);for(let w=0;w<16;++w){let m=16*w;for(let v=0;v<16;++v)g[m+v]=p[w]+p[v]}return g}();function defineBigIntMethod(p){return"undefined"==typeof BigInt?BufferBigIntNotDefined:p}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},27484:function(p){var g,w,m,v,x,A,_,B,O,T,U,F,z,W,q,Q,G,K,Z,Y,J,X;p.exports=(g="millisecond",w="second",m="minute",v="hour",x="week",A="month",_="quarter",B="year",O="date",T="Invalid Date",U=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,F=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z=function(p,g,w){var m=String(p);return!m||m.length>=g?p:""+Array(g+1-m.length).join(w)+p},(q={})[W="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var g=["th","st","nd","rd"],w=p%100;return"["+p+(g[(w-20)%10]||g[w]||"th")+"]"}},Q="$isDayjsObject",G=function(p){return p instanceof J||!(!p||!p[Q])},K=function t(p,g,w){var m;if(!p)return W;if("string"==typeof p){var v=p.toLowerCase();q[v]&&(m=v),g&&(q[v]=g,m=v);var x=p.split("-");if(!m&&x.length>1)return t(x[0])}else{var A=p.name;q[A]=p,m=A}return!w&&m&&(W=m),m||!w&&W},Z=function(p,g){if(G(p))return p.clone();var w="object"==typeof g?g:{};return w.date=p,w.args=arguments,new J(w)},(Y={s:z,z:function(p){var g=-p.utcOffset(),w=Math.abs(g);return(g<=0?"+":"-")+z(Math.floor(w/60),2,"0")+":"+z(w%60,2,"0")},m:function t(p,g){if(p.date()<g.date())return-t(g,p);var w=12*(g.year()-p.year())+(g.month()-p.month()),m=p.clone().add(w,A),v=g-m<0,x=p.clone().add(w+(v?-1:1),A);return+(-(w+(g-m)/(v?m-x:x-m))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return({M:A,y:B,w:x,d:"day",D:O,h:v,m:m,s:w,ms:g,Q:_})[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return void 0===p}}).l=K,Y.i=G,Y.w=function(p,g){return Z(p,{locale:g.$L,utc:g.$u,x:g.$x,$offset:g.$offset})},X=(J=function(){function M(p){this.$L=K(p.locale,null,!0),this.parse(p),this.$x=this.$x||p.x||{},this[Q]=!0}var p=M.prototype;return p.parse=function(p){this.$d=function(p){var g=p.date,w=p.utc;if(null===g)return new Date(NaN);if(Y.u(g))return new Date;if(g instanceof Date)return new Date(g);if("string"==typeof g&&!/Z$/i.test(g)){var m=g.match(U);if(m){var v=m[2]-1||0,x=(m[7]||"0").substring(0,3);return w?new Date(Date.UTC(m[1],v,m[3]||1,m[4]||0,m[5]||0,m[6]||0,x)):new Date(m[1],v,m[3]||1,m[4]||0,m[5]||0,m[6]||0,x)}}return new Date(g)}(p),this.init()},p.init=function(){var p=this.$d;this.$y=p.getFullYear(),this.$M=p.getMonth(),this.$D=p.getDate(),this.$W=p.getDay(),this.$H=p.getHours(),this.$m=p.getMinutes(),this.$s=p.getSeconds(),this.$ms=p.getMilliseconds()},p.$utils=function(){return Y},p.isValid=function(){return this.$d.toString()!==T},p.isSame=function(p,g){var w=Z(p);return this.startOf(g)<=w&&w<=this.endOf(g)},p.isAfter=function(p,g){return Z(p)<this.startOf(g)},p.isBefore=function(p,g){return this.endOf(g)<Z(p)},p.$g=function(p,g,w){return Y.u(p)?this[g]:this.set(w,p)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(p,g){var _=this,T=!!Y.u(g)||g,U=Y.p(p),l=function(p,g){var w=Y.w(_.$u?Date.UTC(_.$y,g,p):new Date(_.$y,g,p),_);return T?w:w.endOf("day")},$=function(p,g){return Y.w(_.toDate()[p].apply(_.toDate("s"),(T?[0,0,0,0]:[23,59,59,999]).slice(g)),_)},F=this.$W,z=this.$M,W=this.$D,q="set"+(this.$u?"UTC":"");switch(U){case B:return T?l(1,0):l(31,11);case A:return T?l(1,z):l(0,z+1);case x:var Q=this.$locale().weekStart||0,G=(F<Q?F+7:F)-Q;return l(T?W-G:W+(6-G),z);case"day":case O:return $(q+"Hours",0);case v:return $(q+"Minutes",1);case m:return $(q+"Seconds",2);case w:return $(q+"Milliseconds",3);default:return this.clone()}},p.endOf=function(p){return this.startOf(p,!1)},p.$set=function(p,x){var _,T=Y.p(p),U="set"+(this.$u?"UTC":""),F=((_={}).day=U+"Date",_[O]=U+"Date",_[A]=U+"Month",_[B]=U+"FullYear",_[v]=U+"Hours",_[m]=U+"Minutes",_[w]=U+"Seconds",_[g]=U+"Milliseconds",_)[T],z="day"===T?this.$D+(x-this.$W):x;if(T===A||T===B){var W=this.clone().set(O,1);W.$d[F](z),W.init(),this.$d=W.set(O,Math.min(this.$D,W.daysInMonth())).$d}else F&&this.$d[F](z);return this.init(),this},p.set=function(p,g){return this.clone().$set(p,g)},p.get=function(p){return this[Y.p(p)]()},p.add=function(p,g){var _,O=this;p=Number(p);var T=Y.p(g),y=function(g){var w=Z(O);return Y.w(w.date(w.date()+Math.round(g*p)),O)};if(T===A)return this.set(A,this.$M+p);if(T===B)return this.set(B,this.$y+p);if("day"===T)return y(1);if(T===x)return y(7);var U=((_={})[m]=6e4,_[v]=36e5,_[w]=1e3,_)[T]||1,F=this.$d.getTime()+p*U;return Y.w(F,this)},p.subtract=function(p,g){return this.add(-1*p,g)},p.format=function(p){var g=this,w=this.$locale();if(!this.isValid())return w.invalidDate||T;var m=p||"YYYY-MM-DDTHH:mm:ssZ",v=Y.z(this),x=this.$H,A=this.$m,_=this.$M,B=w.weekdays,O=w.months,U=w.meridiem,h=function(p,w,v,x){return p&&(p[w]||p(g,m))||v[w].slice(0,x)},d=function(p){return Y.s(x%12||12,p,"0")},z=U||function(p,g,w){var m=p<12?"AM":"PM";return w?m.toLowerCase():m};return m.replace(F,function(p,m){return m||function(p){switch(p){case"YY":return String(g.$y).slice(-2);case"YYYY":return Y.s(g.$y,4,"0");case"M":return _+1;case"MM":return Y.s(_+1,2,"0");case"MMM":return h(w.monthsShort,_,O,3);case"MMMM":return h(O,_);case"D":return g.$D;case"DD":return Y.s(g.$D,2,"0");case"d":return String(g.$W);case"dd":return h(w.weekdaysMin,g.$W,B,2);case"ddd":return h(w.weekdaysShort,g.$W,B,3);case"dddd":return B[g.$W];case"H":return String(x);case"HH":return Y.s(x,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return z(x,A,!0);case"A":return z(x,A,!1);case"m":return String(A);case"mm":return Y.s(A,2,"0");case"s":return String(g.$s);case"ss":return Y.s(g.$s,2,"0");case"SSS":return Y.s(g.$ms,3,"0");case"Z":return v}return null}(p)||v.replace(":","")})},p.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},p.diff=function(p,g,O){var T,U=this,F=Y.p(g),z=Z(p),W=(z.utcOffset()-this.utcOffset())*6e4,q=this-z,D=function(){return Y.m(U,z)};switch(F){case B:T=D()/12;break;case A:T=D();break;case _:T=D()/3;break;case x:T=(q-W)/6048e5;break;case"day":T=(q-W)/864e5;break;case v:T=q/36e5;break;case m:T=q/6e4;break;case w:T=q/1e3;break;default:T=q}return O?T:Y.a(T)},p.daysInMonth=function(){return this.endOf(A).$D},p.$locale=function(){return q[this.$L]},p.locale=function(p,g){if(!p)return this.$L;var w=this.clone(),m=K(p,g,!0);return m&&(w.$L=m),w},p.clone=function(){return Y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},M}()).prototype,Z.prototype=X,[["$ms",g],["$s",w],["$m",m],["$H",v],["$W","day"],["$M",A],["$y",B],["$D",O]].forEach(function(p){X[p[1]]=function(g){return this.$g(g,p[0],p[1])}}),Z.extend=function(p,g){return p.$i||(p(g,J,Z),p.$i=!0),Z},Z.locale=K,Z.isDayjs=G,Z.unix=function(p){return Z(1e3*p)},Z.en=q[W],Z.Ls=q,Z.p={},Z)},84110:function(p){p.exports=function(p,g,w){p=p||{};var m=g.prototype,v={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(p,g,w,v){return m.fromToBase(p,g,w,v)}w.en.relativeTime=v,m.fromToBase=function(g,m,x,A,_){for(var B,O,T,U=x.$locale().relativeTime||v,F=p.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],z=F.length,W=0;W<z;W+=1){var q=F[W];q.d&&(B=A?w(g).diff(x,q.d,!0):x.diff(g,q.d,!0));var Q=(p.rounding||Math.round)(Math.abs(B));if(T=B>0,Q<=q.r||!q.r){Q<=1&&W>0&&(q=F[W-1]);var G=U[q.l];_&&(Q=_(""+Q)),O="string"==typeof G?G.replace("%d",Q):G(Q,m,q.l,T);break}}if(m)return O;var K=T?U.future:U.past;return"function"==typeof K?K(O):K.replace("%s",O)},m.to=function(p,g){return i(p,g,this,!0)},m.from=function(p,g){return i(p,g,this)};var d=function(p){return p.$u?w.utc():w()};m.toNow=function(p){return this.to(d(this),p)},m.fromNow=function(p){return this.from(d(this),p)}}},70660:function(p){p.exports=function(p,g,w){w.updateLocale=function(p,g){var m=w.Ls[p];if(m)return(g?Object.keys(g):[]).forEach(function(p){m[p]=g[p]}),m}}},65987:function(p){"use strict";var g={single_source_shortest_paths:function(p,w,m){var v,x,A,_,B,O,T,U={},F={};F[w]=0;var z=g.PriorityQueue.make();for(z.push(w,0);!z.empty();)for(A in x=(v=z.pop()).value,_=v.cost,B=p[x]||{})B.hasOwnProperty(A)&&(O=_+B[A],T=F[A],(void 0===F[A]||T>O)&&(F[A]=O,z.push(A,O),U[A]=x));if(void 0!==m&&void 0===F[m])throw Error(["Could not find a path from ",w," to ",m,"."].join(""));return U},extract_shortest_path_from_predecessor_list:function(p,g){for(var w=[],m=g;m;)w.push(m),p[m],m=p[m];return w.reverse(),w},find_path:function(p,w,m){var v=g.single_source_shortest_paths(p,w,m);return g.extract_shortest_path_from_predecessor_list(v,m)},PriorityQueue:{make:function(p){var w,m=g.PriorityQueue,v={};for(w in p=p||{},m)m.hasOwnProperty(w)&&(v[w]=m[w]);return v.queue=[],v.sorter=p.sorter||m.default_sorter,v},default_sorter:function(p,g){return p.cost-g.cost},push:function(p,g){this.queue.push({value:p,cost:g}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};p.exports=g},62378:function(p){"use strict";p.exports=function(p){for(var g=[],w=p.length,m=0;m<w;m++){var v=p.charCodeAt(m);if(v>=55296&&v<=56319&&w>m+1){var x=p.charCodeAt(m+1);x>=56320&&x<=57343&&(v=(v-55296)*1024+x-56320+65536,m+=1)}if(v<128){g.push(v);continue}if(v<2048){g.push(v>>6|192),g.push(63&v|128);continue}if(v<55296||v>=57344&&v<65536){g.push(v>>12|224),g.push(v>>6&63|128),g.push(63&v|128);continue}if(v>=65536&&v<=1114111){g.push(v>>18|240),g.push(v>>12&63|128),g.push(v>>6&63|128),g.push(63&v|128);continue}g.push(239,191,189)}return new Uint8Array(g).buffer}},26729:function(p){"use strict";var g=Object.prototype.hasOwnProperty,w="~";function Events(){}function EE(p,g,w){this.fn=p,this.context=g,this.once=w||!1}function addListener(p,g,m,v,x){if("function"!=typeof m)throw TypeError("The listener must be a function");var A=new EE(m,v||p,x),_=w?w+g:g;return p._events[_]?p._events[_].fn?p._events[_]=[p._events[_],A]:p._events[_].push(A):(p._events[_]=A,p._eventsCount++),p}function clearEvent(p,g){0==--p._eventsCount?p._events=new Events:delete p._events[g]}function EventEmitter(){this._events=new Events,this._eventsCount=0}Object.create&&(Events.prototype=Object.create(null),new Events().__proto__||(w=!1)),EventEmitter.prototype.eventNames=function(){var p,m,v=[];if(0===this._eventsCount)return v;for(m in p=this._events)g.call(p,m)&&v.push(w?m.slice(1):m);return Object.getOwnPropertySymbols?v.concat(Object.getOwnPropertySymbols(p)):v},EventEmitter.prototype.listeners=function(p){var g=w?w+p:p,m=this._events[g];if(!m)return[];if(m.fn)return[m.fn];for(var v=0,x=m.length,A=Array(x);v<x;v++)A[v]=m[v].fn;return A},EventEmitter.prototype.listenerCount=function(p){var g=w?w+p:p,m=this._events[g];return m?m.fn?1:m.length:0},EventEmitter.prototype.emit=function(p,g,m,v,x,A){var _=w?w+p:p;if(!this._events[_])return!1;var B,O,T=this._events[_],U=arguments.length;if(T.fn){switch(T.once&&this.removeListener(p,T.fn,void 0,!0),U){case 1:return T.fn.call(T.context),!0;case 2:return T.fn.call(T.context,g),!0;case 3:return T.fn.call(T.context,g,m),!0;case 4:return T.fn.call(T.context,g,m,v),!0;case 5:return T.fn.call(T.context,g,m,v,x),!0;case 6:return T.fn.call(T.context,g,m,v,x,A),!0}for(O=1,B=Array(U-1);O<U;O++)B[O-1]=arguments[O];T.fn.apply(T.context,B)}else{var F,z=T.length;for(O=0;O<z;O++)switch(T[O].once&&this.removeListener(p,T[O].fn,void 0,!0),U){case 1:T[O].fn.call(T[O].context);break;case 2:T[O].fn.call(T[O].context,g);break;case 3:T[O].fn.call(T[O].context,g,m);break;case 4:T[O].fn.call(T[O].context,g,m,v);break;default:if(!B)for(F=1,B=Array(U-1);F<U;F++)B[F-1]=arguments[F];T[O].fn.apply(T[O].context,B)}}return!0},EventEmitter.prototype.on=function(p,g,w){return addListener(this,p,g,w,!1)},EventEmitter.prototype.once=function(p,g,w){return addListener(this,p,g,w,!0)},EventEmitter.prototype.removeListener=function(p,g,m,v){var x=w?w+p:p;if(!this._events[x])return this;if(!g)return clearEvent(this,x),this;var A=this._events[x];if(A.fn)A.fn!==g||v&&!A.once||m&&A.context!==m||clearEvent(this,x);else{for(var _=0,B=[],O=A.length;_<O;_++)(A[_].fn!==g||v&&!A[_].once||m&&A[_].context!==m)&&B.push(A[_]);B.length?this._events[x]=1===B.length?B[0]:B:clearEvent(this,x)}return this},EventEmitter.prototype.removeAllListeners=function(p){var g;return p?(g=w?w+p:p,this._events[g]&&clearEvent(this,g)):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prefixed=w,EventEmitter.EventEmitter=EventEmitter,p.exports=EventEmitter},80645:function(p,g){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */g.read=function(p,g,w,m,v){var x,A,_=8*v-m-1,B=(1<<_)-1,O=B>>1,T=-7,U=w?v-1:0,F=w?-1:1,z=p[g+U];for(U+=F,x=z&(1<<-T)-1,z>>=-T,T+=_;T>0;x=256*x+p[g+U],U+=F,T-=8);for(A=x&(1<<-T)-1,x>>=-T,T+=m;T>0;A=256*A+p[g+U],U+=F,T-=8);if(0===x)x=1-O;else{if(x===B)return A?NaN:(z?-1:1)*(1/0);A+=Math.pow(2,m),x-=O}return(z?-1:1)*A*Math.pow(2,x-m)},g.write=function(p,g,w,m,v,x){var A,_,B,O=8*x-v-1,T=(1<<O)-1,U=T>>1,F=23===v?5960464477539062e-23:0,z=m?0:x-1,W=m?1:-1,q=g<0||0===g&&1/g<0?1:0;for(isNaN(g=Math.abs(g))||g===1/0?(_=isNaN(g)?1:0,A=T):(A=Math.floor(Math.log(g)/Math.LN2),g*(B=Math.pow(2,-A))<1&&(A--,B*=2),A+U>=1?g+=F/B:g+=F*Math.pow(2,1-U),g*B>=2&&(A++,B/=2),A+U>=T?(_=0,A=T):A+U>=1?(_=(g*B-1)*Math.pow(2,v),A+=U):(_=g*Math.pow(2,U-1)*Math.pow(2,v),A=0));v>=8;p[w+z]=255&_,z+=W,_/=256,v-=8);for(A=A<<v|_,O+=v;O>0;p[w+z]=255&A,z+=W,A/=256,O-=8);p[w+z-W]|=128*q}},83454:function(p,g,w){"use strict";var m,v;p.exports=(null==(m=w.g.process)?void 0:m.env)&&"object"==typeof(null==(v=w.g.process)?void 0:v.env)?w.g.process:w(77663)},23837:function(p,g,w){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return w(92257)}])},92257:function(p,g,w){"use strict";w.r(g),w.d(g,{default:function(){return App}});var m=w(85893),v=w(26721),x=w(67294),A=w(69077),_=w(31407);w(2611),w(4742),w(24728),w(82037);var B=w(83454);if(!B.env.NEXT_PUBLIC_PROJECT_ID)throw Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");let O=[_.RJ],T=B.env.NEXT_PUBLIC_PROJECT_ID,U=(0,v.o1)({chains:O,projectId:T,metadata:{name:"Web3Modal",description:"Web3Modal Example",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886"]}});function App(p){let{Component:g,pageProps:w}=p,[v,_]=(0,x.useState)(!1);return(0,x.useEffect)(()=>{_(!0)},[]),(0,m.jsx)(m.Fragment,{children:v?(0,m.jsx)(A.eM,{config:U,children:(0,m.jsx)(g,{...w})}):null})}(0,v.OY)({wagmiConfig:U,projectId:T,chains:O,themeVariables:{"--w3m-accent":"#7073C3"}})},2611:function(){},24728:function(){},82037:function(){},4742:function(){},77663:function(p){!function(){var g={229:function(p){var g,w,m,v=p.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(p){if(g===setTimeout)return setTimeout(p,0);if((g===defaultSetTimout||!g)&&setTimeout)return g=setTimeout,setTimeout(p,0);try{return g(p,0)}catch(w){try{return g.call(null,p,0)}catch(w){return g.call(this,p,0)}}}!function(){try{g="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(p){g=defaultSetTimout}try{w="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(p){w=defaultClearTimeout}}();var x=[],A=!1,_=-1;function cleanUpNextTick(){A&&m&&(A=!1,m.length?x=m.concat(x):_=-1,x.length&&drainQueue())}function drainQueue(){if(!A){var p=runTimeout(cleanUpNextTick);A=!0;for(var g=x.length;g;){for(m=x,x=[];++_<g;)m&&m[_].run();_=-1,g=x.length}m=null,A=!1,function(p){if(w===clearTimeout)return clearTimeout(p);if((w===defaultClearTimeout||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(p);try{w(p)}catch(g){try{return w.call(null,p)}catch(g){return w.call(this,p)}}}(p)}}function Item(p,g){this.fun=p,this.array=g}function noop(){}v.nextTick=function(p){var g=Array(arguments.length-1);if(arguments.length>1)for(var w=1;w<arguments.length;w++)g[w-1]=arguments[w];x.push(new Item(p,g)),1!==x.length||A||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=noop,v.addListener=noop,v.once=noop,v.off=noop,v.removeListener=noop,v.removeAllListeners=noop,v.emit=noop,v.prependListener=noop,v.prependOnceListener=noop,v.listeners=function(p){return[]},v.binding=function(p){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(p){throw Error("process.chdir is not supported")},v.umask=function(){return 0}}},w={};function __nccwpck_require__(p){var m=w[p];if(void 0!==m)return m.exports;var v=w[p]={exports:{}},x=!0;try{g[p](v,v.exports,__nccwpck_require__),x=!1}finally{x&&delete w[p]}return v.exports}__nccwpck_require__.ab="//";var m=__nccwpck_require__(229);p.exports=m}()},72478:function(p,g,w){"use strict";w.d(g,{jc:function(){return h},o5:function(){return y}}),Symbol();let m=Symbol(),v=Object.getPrototypeOf,x=new WeakMap,l=p=>p&&(x.has(p)?x.get(p):v(p)===Object.prototype||v(p)===Array.prototype),y=p=>l(p)&&p[m]||null,h=(p,g=!0)=>{x.set(p,g)}},92592:function(p,g,w){let m=w(47138),v=w(95115),x=w(6907),A=w(93776);function renderCanvas(p,g,w,x,A){let _=[].slice.call(arguments,1),B=_.length,O="function"==typeof _[B-1];if(!O&&!m())throw Error("Callback required as last argument");if(O){if(B<2)throw Error("Too few arguments provided");2===B?(A=w,w=g,g=x=void 0):3===B&&(g.getContext&&void 0===A?(A=x,x=void 0):(A=x,x=w,w=g,g=void 0))}else{if(B<1)throw Error("Too few arguments provided");return 1===B?(w=g,g=x=void 0):2!==B||g.getContext||(x=w,w=g,g=void 0),new Promise(function(m,A){try{let A=v.create(w,x);m(p(A,g,x))}catch(p){A(p)}})}try{let m=v.create(w,x);A(null,p(m,g,x))}catch(p){A(p)}}g.create=v.create,g.toCanvas=renderCanvas.bind(null,x.render),g.toDataURL=renderCanvas.bind(null,x.renderToDataURL),g.toString=renderCanvas.bind(null,function(p,g,w){return A.render(p,w)})},47138:function(p){p.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(p,g,w){let m=w(10242).getSymbolSize;g.getRowColCoords=function(p){if(1===p)return[];let g=Math.floor(p/7)+2,w=m(p),v=145===w?26:2*Math.ceil((w-13)/(2*g-2)),x=[w-7];for(let p=1;p<g-1;p++)x[p]=x[p-1]-v;return x.push(6),x.reverse()},g.getPositions=function(p){let w=[],m=g.getRowColCoords(p),v=m.length;for(let p=0;p<v;p++)for(let g=0;g<v;g++)(0!==p||0!==g)&&(0!==p||g!==v-1)&&(p!==v-1||0!==g)&&w.push([m[p],m[g]]);return w}},8260:function(p,g,w){let m=w(76910),v=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(p){this.mode=m.ALPHANUMERIC,this.data=p}AlphanumericData.getBitsLength=function(p){return 11*Math.floor(p/2)+6*(p%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(p){let g;for(g=0;g+2<=this.data.length;g+=2){let w=45*v.indexOf(this.data[g]);w+=v.indexOf(this.data[g+1]),p.put(w,11)}this.data.length%2&&p.put(v.indexOf(this.data[g]),6)},p.exports=AlphanumericData},97245:function(p){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(p){return(this.buffer[Math.floor(p/8)]>>>7-p%8&1)==1},put:function(p,g){for(let w=0;w<g;w++)this.putBit((p>>>g-w-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(p){let g=Math.floor(this.length/8);this.buffer.length<=g&&this.buffer.push(0),p&&(this.buffer[g]|=128>>>this.length%8),this.length++}},p.exports=BitBuffer},73280:function(p){function BitMatrix(p){if(!p||p<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=p,this.data=new Uint8Array(p*p),this.reservedBit=new Uint8Array(p*p)}BitMatrix.prototype.set=function(p,g,w,m){let v=p*this.size+g;this.data[v]=w,m&&(this.reservedBit[v]=!0)},BitMatrix.prototype.get=function(p,g){return this.data[p*this.size+g]},BitMatrix.prototype.xor=function(p,g,w){this.data[p*this.size+g]^=w},BitMatrix.prototype.isReserved=function(p,g){return this.reservedBit[p*this.size+g]},p.exports=BitMatrix},43424:function(p,g,w){let m=w(62378),v=w(76910);function ByteData(p){this.mode=v.BYTE,"string"==typeof p&&(p=m(p)),this.data=new Uint8Array(p)}ByteData.getBitsLength=function(p){return 8*p},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(p){for(let g=0,w=this.data.length;g<w;g++)p.put(this.data[g],8)},p.exports=ByteData},35393:function(p,g,w){let m=w(64908),v=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],x=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];g.getBlocksCount=function(p,g){switch(g){case m.L:return v[(p-1)*4+0];case m.M:return v[(p-1)*4+1];case m.Q:return v[(p-1)*4+2];case m.H:return v[(p-1)*4+3];default:return}},g.getTotalCodewordsCount=function(p,g){switch(g){case m.L:return x[(p-1)*4+0];case m.M:return x[(p-1)*4+1];case m.Q:return x[(p-1)*4+2];case m.H:return x[(p-1)*4+3];default:return}}},64908:function(p,g){g.L={bit:1},g.M={bit:0},g.Q={bit:3},g.H={bit:2},g.isValid=function(p){return p&&void 0!==p.bit&&p.bit>=0&&p.bit<4},g.from=function(p,w){if(g.isValid(p))return p;try{return function(p){if("string"!=typeof p)throw Error("Param is not a string");let w=p.toLowerCase();switch(w){case"l":case"low":return g.L;case"m":case"medium":return g.M;case"q":case"quartile":return g.Q;case"h":case"high":return g.H;default:throw Error("Unknown EC Level: "+p)}}(p)}catch(p){return w}}},76526:function(p,g,w){let m=w(10242).getSymbolSize;g.getPositions=function(p){let g=m(p);return[[0,0],[g-7,0],[0,g-7]]}},61642:function(p,g,w){let m=w(10242),v=m.getBCHDigit(1335);g.getEncodedBits=function(p,g){let w=p.bit<<3|g,x=w<<10;for(;m.getBCHDigit(x)-v>=0;)x^=1335<<m.getBCHDigit(x)-v;return(w<<10|x)^21522}},69729:function(p,g){let w=new Uint8Array(512),m=new Uint8Array(256);!function(){let p=1;for(let g=0;g<255;g++)w[g]=p,m[p]=g,256&(p<<=1)&&(p^=285);for(let p=255;p<512;p++)w[p]=w[p-255]}(),g.log=function(p){if(p<1)throw Error("log("+p+")");return m[p]},g.exp=function(p){return w[p]},g.mul=function(p,g){return 0===p||0===g?0:w[m[p]+m[g]]}},35442:function(p,g,w){let m=w(76910),v=w(10242);function KanjiData(p){this.mode=m.KANJI,this.data=p}KanjiData.getBitsLength=function(p){return 13*p},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(p){let g;for(g=0;g<this.data.length;g++){let w=v.toSJIS(this.data[g]);if(w>=33088&&w<=40956)w-=33088;else if(w>=57408&&w<=60351)w-=49472;else throw Error("Invalid SJIS character: "+this.data[g]+"\nMake sure your charset is UTF-8");w=(w>>>8&255)*192+(255&w),p.put(w,13)}},p.exports=KanjiData},27126:function(p,g){g.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let w={N1:3,N2:3,N3:40,N4:10};g.isValid=function(p){return null!=p&&""!==p&&!isNaN(p)&&p>=0&&p<=7},g.from=function(p){return g.isValid(p)?parseInt(p,10):void 0},g.getPenaltyN1=function(p){let g=p.size,m=0,v=0,x=0,A=null,_=null;for(let B=0;B<g;B++){v=x=0,A=_=null;for(let O=0;O<g;O++){let g=p.get(B,O);g===A?v++:(v>=5&&(m+=w.N1+(v-5)),A=g,v=1),(g=p.get(O,B))===_?x++:(x>=5&&(m+=w.N1+(x-5)),_=g,x=1)}v>=5&&(m+=w.N1+(v-5)),x>=5&&(m+=w.N1+(x-5))}return m},g.getPenaltyN2=function(p){let g=p.size,m=0;for(let w=0;w<g-1;w++)for(let v=0;v<g-1;v++){let g=p.get(w,v)+p.get(w,v+1)+p.get(w+1,v)+p.get(w+1,v+1);(4===g||0===g)&&m++}return m*w.N2},g.getPenaltyN3=function(p){let g=p.size,m=0,v=0,x=0;for(let w=0;w<g;w++){v=x=0;for(let A=0;A<g;A++)v=v<<1&2047|p.get(w,A),A>=10&&(1488===v||93===v)&&m++,x=x<<1&2047|p.get(A,w),A>=10&&(1488===x||93===x)&&m++}return m*w.N3},g.getPenaltyN4=function(p){let g=0,m=p.data.length;for(let w=0;w<m;w++)g+=p.data[w];let v=Math.abs(Math.ceil(100*g/m/5)-10);return v*w.N4},g.applyMask=function(p,w){let m=w.size;for(let v=0;v<m;v++)for(let x=0;x<m;x++)w.isReserved(x,v)||w.xor(x,v,function(p,w,m){switch(p){case g.Patterns.PATTERN000:return(w+m)%2==0;case g.Patterns.PATTERN001:return w%2==0;case g.Patterns.PATTERN010:return m%3==0;case g.Patterns.PATTERN011:return(w+m)%3==0;case g.Patterns.PATTERN100:return(Math.floor(w/2)+Math.floor(m/3))%2==0;case g.Patterns.PATTERN101:return w*m%2+w*m%3==0;case g.Patterns.PATTERN110:return(w*m%2+w*m%3)%2==0;case g.Patterns.PATTERN111:return(w*m%3+(w+m)%2)%2==0;default:throw Error("bad maskPattern:"+p)}}(p,x,v))},g.getBestMask=function(p,w){let m=Object.keys(g.Patterns).length,v=0,x=1/0;for(let A=0;A<m;A++){w(A),g.applyMask(A,p);let m=g.getPenaltyN1(p)+g.getPenaltyN2(p)+g.getPenaltyN3(p)+g.getPenaltyN4(p);g.applyMask(A,p),m<x&&(x=m,v=A)}return v}},76910:function(p,g,w){let m=w(43114),v=w(7007);g.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},g.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},g.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},g.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},g.MIXED={bit:-1},g.getCharCountIndicator=function(p,g){if(!p.ccBits)throw Error("Invalid mode: "+p);if(!m.isValid(g))throw Error("Invalid version: "+g);return g>=1&&g<10?p.ccBits[0]:g<27?p.ccBits[1]:p.ccBits[2]},g.getBestModeForData=function(p){return v.testNumeric(p)?g.NUMERIC:v.testAlphanumeric(p)?g.ALPHANUMERIC:v.testKanji(p)?g.KANJI:g.BYTE},g.toString=function(p){if(p&&p.id)return p.id;throw Error("Invalid mode")},g.isValid=function(p){return p&&p.bit&&p.ccBits},g.from=function(p,w){if(g.isValid(p))return p;try{return function(p){if("string"!=typeof p)throw Error("Param is not a string");let w=p.toLowerCase();switch(w){case"numeric":return g.NUMERIC;case"alphanumeric":return g.ALPHANUMERIC;case"kanji":return g.KANJI;case"byte":return g.BYTE;default:throw Error("Unknown mode: "+p)}}(p)}catch(p){return w}}},41085:function(p,g,w){let m=w(76910);function NumericData(p){this.mode=m.NUMERIC,this.data=p.toString()}NumericData.getBitsLength=function(p){return 10*Math.floor(p/3)+(p%3?p%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(p){let g,w;for(g=0;g+3<=this.data.length;g+=3)w=parseInt(this.data.substr(g,3),10),p.put(w,10);let m=this.data.length-g;m>0&&(w=parseInt(this.data.substr(g),10),p.put(w,3*m+1))},p.exports=NumericData},26143:function(p,g,w){let m=w(69729);g.mul=function(p,g){let w=new Uint8Array(p.length+g.length-1);for(let v=0;v<p.length;v++)for(let x=0;x<g.length;x++)w[v+x]^=m.mul(p[v],g[x]);return w},g.mod=function(p,g){let w=new Uint8Array(p);for(;w.length-g.length>=0;){let p=w[0];for(let v=0;v<g.length;v++)w[v]^=m.mul(g[v],p);let v=0;for(;v<w.length&&0===w[v];)v++;w=w.slice(v)}return w},g.generateECPolynomial=function(p){let w=new Uint8Array([1]);for(let v=0;v<p;v++)w=g.mul(w,new Uint8Array([1,m.exp(v)]));return w}},95115:function(p,g,w){let m=w(10242),v=w(64908),x=w(97245),A=w(73280),_=w(21845),B=w(76526),O=w(27126),T=w(35393),U=w(52882),F=w(23103),z=w(61642),W=w(76910),q=w(16130);function setupFormatInfo(p,g,w){let m,v;let x=p.size,A=z.getEncodedBits(g,w);for(m=0;m<15;m++)v=(A>>m&1)==1,m<6?p.set(m,8,v,!0):m<8?p.set(m+1,8,v,!0):p.set(x-15+m,8,v,!0),m<8?p.set(8,x-m-1,v,!0):m<9?p.set(8,15-m-1+1,v,!0):p.set(8,15-m-1,v,!0);p.set(x-8,8,1,!0)}g.create=function(p,g){let w,z;if(void 0===p||""===p)throw Error("No input text");let Q=v.M;return void 0!==g&&(Q=v.from(g.errorCorrectionLevel,v.M),w=F.from(g.version),z=O.from(g.maskPattern),g.toSJISFunc&&m.setToSJISFunction(g.toSJISFunc)),function(p,g,w,v){let z;if(Array.isArray(p))z=q.fromArray(p);else if("string"==typeof p){let m=g;if(!m){let g=q.rawSplit(p);m=F.getBestVersionForData(g,w)}z=q.fromString(p,m||40)}else throw Error("Invalid data");let Q=F.getBestVersionForData(z,w);if(!Q)throw Error("The amount of data is too big to be stored in a QR Code");if(g){if(g<Q)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+Q+".\n")}else g=Q;let G=function(p,g,w){let v=new x;w.forEach(function(g){v.put(g.mode.bit,4),v.put(g.getLength(),W.getCharCountIndicator(g.mode,p)),g.write(v)});let A=m.getSymbolTotalCodewords(p),_=T.getTotalCodewordsCount(p,g),B=(A-_)*8;for(v.getLengthInBits()+4<=B&&v.put(0,4);v.getLengthInBits()%8!=0;)v.putBit(0);let O=(B-v.getLengthInBits())/8;for(let p=0;p<O;p++)v.put(p%2?17:236,8);return function(p,g,w){let v,x;let A=m.getSymbolTotalCodewords(g),_=T.getTotalCodewordsCount(g,w),B=A-_,O=T.getBlocksCount(g,w),F=A%O,z=O-F,W=Math.floor(A/O),q=Math.floor(B/O),Q=q+1,G=W-q,K=new U(G),Z=0,Y=Array(O),J=Array(O),X=0,ee=new Uint8Array(p.buffer);for(let p=0;p<O;p++){let g=p<z?q:Q;Y[p]=ee.slice(Z,Z+g),J[p]=K.encode(Y[p]),Z+=g,X=Math.max(X,g)}let et=new Uint8Array(A),er=0;for(v=0;v<X;v++)for(x=0;x<O;x++)v<Y[x].length&&(et[er++]=Y[x][v]);for(v=0;v<G;v++)for(x=0;x<O;x++)et[er++]=J[x][v];return et}(v,p,g)}(g,w,z),K=m.getSymbolSize(g),Z=new A(K);return function(p,g){let w=p.size,m=B.getPositions(g);for(let g=0;g<m.length;g++){let v=m[g][0],x=m[g][1];for(let g=-1;g<=7;g++)if(!(v+g<=-1)&&!(w<=v+g))for(let m=-1;m<=7;m++)x+m<=-1||w<=x+m||(g>=0&&g<=6&&(0===m||6===m)||m>=0&&m<=6&&(0===g||6===g)||g>=2&&g<=4&&m>=2&&m<=4?p.set(v+g,x+m,!0,!0):p.set(v+g,x+m,!1,!0))}}(Z,g),function(p){let g=p.size;for(let w=8;w<g-8;w++){let g=w%2==0;p.set(w,6,g,!0),p.set(6,w,g,!0)}}(Z),function(p,g){let w=_.getPositions(g);for(let g=0;g<w.length;g++){let m=w[g][0],v=w[g][1];for(let g=-2;g<=2;g++)for(let w=-2;w<=2;w++)-2===g||2===g||-2===w||2===w||0===g&&0===w?p.set(m+g,v+w,!0,!0):p.set(m+g,v+w,!1,!0)}}(Z,g),setupFormatInfo(Z,w,0),g>=7&&function(p,g){let w,m,v;let x=p.size,A=F.getEncodedBits(g);for(let g=0;g<18;g++)w=Math.floor(g/3),m=g%3+x-8-3,v=(A>>g&1)==1,p.set(w,m,v,!0),p.set(m,w,v,!0)}(Z,g),function(p,g){let w=p.size,m=-1,v=w-1,x=7,A=0;for(let _=w-1;_>0;_-=2)for(6===_&&_--;;){for(let w=0;w<2;w++)if(!p.isReserved(v,_-w)){let m=!1;A<g.length&&(m=(g[A]>>>x&1)==1),p.set(v,_-w,m),-1==--x&&(A++,x=7)}if((v+=m)<0||w<=v){v-=m,m=-m;break}}}(Z,G),isNaN(v)&&(v=O.getBestMask(Z,setupFormatInfo.bind(null,Z,w))),O.applyMask(v,Z),setupFormatInfo(Z,w,v),{modules:Z,version:g,errorCorrectionLevel:w,maskPattern:v,segments:z}}(p,w,Q,z)}},52882:function(p,g,w){let m=w(26143);function ReedSolomonEncoder(p){this.genPoly=void 0,this.degree=p,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(p){this.degree=p,this.genPoly=m.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(p){if(!this.genPoly)throw Error("Encoder not initialized");let g=new Uint8Array(p.length+this.degree);g.set(p);let w=m.mod(g,this.genPoly),v=this.degree-w.length;if(v>0){let p=new Uint8Array(this.degree);return p.set(w,v),p}return w},p.exports=ReedSolomonEncoder},7007:function(p,g){let w="[0-9]+",m="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";m=m.replace(/u/g,"\\u");let v="(?:(?![A-Z0-9 $%*+\\-./:]|"+m+")(?:.|[\r\n]))+";g.KANJI=RegExp(m,"g"),g.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),g.BYTE=RegExp(v,"g"),g.NUMERIC=RegExp(w,"g"),g.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let x=RegExp("^"+m+"$"),A=RegExp("^"+w+"$"),_=RegExp("^[A-Z0-9 $%*+\\-./:]+$");g.testKanji=function(p){return x.test(p)},g.testNumeric=function(p){return A.test(p)},g.testAlphanumeric=function(p){return _.test(p)}},16130:function(p,g,w){let m=w(76910),v=w(41085),x=w(8260),A=w(43424),_=w(35442),B=w(7007),O=w(10242),T=w(65987);function getStringByteLength(p){return unescape(encodeURIComponent(p)).length}function getSegments(p,g,w){let m;let v=[];for(;null!==(m=p.exec(w));)v.push({data:m[0],index:m.index,mode:g,length:m[0].length});return v}function getSegmentsFromString(p){let g,w;let v=getSegments(B.NUMERIC,m.NUMERIC,p),x=getSegments(B.ALPHANUMERIC,m.ALPHANUMERIC,p);O.isKanjiModeEnabled()?(g=getSegments(B.BYTE,m.BYTE,p),w=getSegments(B.KANJI,m.KANJI,p)):(g=getSegments(B.BYTE_KANJI,m.BYTE,p),w=[]);let A=v.concat(x,g,w);return A.sort(function(p,g){return p.index-g.index}).map(function(p){return{data:p.data,mode:p.mode,length:p.length}})}function getSegmentBitsLength(p,g){switch(g){case m.NUMERIC:return v.getBitsLength(p);case m.ALPHANUMERIC:return x.getBitsLength(p);case m.KANJI:return _.getBitsLength(p);case m.BYTE:return A.getBitsLength(p)}}function buildSingleSegment(p,g){let w;let B=m.getBestModeForData(p);if((w=m.from(g,B))!==m.BYTE&&w.bit<B.bit)throw Error('"'+p+'" cannot be encoded with mode '+m.toString(w)+".\n Suggested mode is: "+m.toString(B));switch(w!==m.KANJI||O.isKanjiModeEnabled()||(w=m.BYTE),w){case m.NUMERIC:return new v(p);case m.ALPHANUMERIC:return new x(p);case m.KANJI:return new _(p);case m.BYTE:return new A(p)}}g.fromArray=function(p){return p.reduce(function(p,g){return"string"==typeof g?p.push(buildSingleSegment(g,null)):g.data&&p.push(buildSingleSegment(g.data,g.mode)),p},[])},g.fromString=function(p,w){let v=getSegmentsFromString(p,O.isKanjiModeEnabled()),x=function(p){let g=[];for(let w=0;w<p.length;w++){let v=p[w];switch(v.mode){case m.NUMERIC:g.push([v,{data:v.data,mode:m.ALPHANUMERIC,length:v.length},{data:v.data,mode:m.BYTE,length:v.length}]);break;case m.ALPHANUMERIC:g.push([v,{data:v.data,mode:m.BYTE,length:v.length}]);break;case m.KANJI:g.push([v,{data:v.data,mode:m.BYTE,length:getStringByteLength(v.data)}]);break;case m.BYTE:g.push([{data:v.data,mode:m.BYTE,length:getStringByteLength(v.data)}])}}return g}(v),A=function(p,g){let w={},v={start:{}},x=["start"];for(let A=0;A<p.length;A++){let _=p[A],B=[];for(let p=0;p<_.length;p++){let O=_[p],T=""+A+p;B.push(T),w[T]={node:O,lastCount:0},v[T]={};for(let p=0;p<x.length;p++){let A=x[p];w[A]&&w[A].node.mode===O.mode?(v[A][T]=getSegmentBitsLength(w[A].lastCount+O.length,O.mode)-getSegmentBitsLength(w[A].lastCount,O.mode),w[A].lastCount+=O.length):(w[A]&&(w[A].lastCount=O.length),v[A][T]=getSegmentBitsLength(O.length,O.mode)+4+m.getCharCountIndicator(O.mode,g))}}x=B}for(let p=0;p<x.length;p++)v[x[p]].end=0;return{map:v,table:w}}(x,w),_=T.find_path(A.map,"start","end"),B=[];for(let p=1;p<_.length-1;p++)B.push(A.table[_[p]].node);return g.fromArray(B.reduce(function(p,g){let w=p.length-1>=0?p[p.length-1]:null;return w&&w.mode===g.mode?p[p.length-1].data+=g.data:p.push(g),p},[]))},g.rawSplit=function(p){return g.fromArray(getSegmentsFromString(p,O.isKanjiModeEnabled()))}},10242:function(p,g){let w;let m=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];g.getSymbolSize=function(p){if(!p)throw Error('"version" cannot be null or undefined');if(p<1||p>40)throw Error('"version" should be in range from 1 to 40');return 4*p+17},g.getSymbolTotalCodewords=function(p){return m[p]},g.getBCHDigit=function(p){let g=0;for(;0!==p;)g++,p>>>=1;return g},g.setToSJISFunction=function(p){if("function"!=typeof p)throw Error('"toSJISFunc" is not a valid function.');w=p},g.isKanjiModeEnabled=function(){return void 0!==w},g.toSJIS=function(p){return w(p)}},43114:function(p,g){g.isValid=function(p){return!isNaN(p)&&p>=1&&p<=40}},23103:function(p,g,w){let m=w(10242),v=w(35393),x=w(64908),A=w(76910),_=w(43114),B=m.getBCHDigit(7973);function getReservedBitsCount(p,g){return A.getCharCountIndicator(p,g)+4}g.from=function(p,g){return _.isValid(p)?parseInt(p,10):g},g.getCapacity=function(p,g,w){if(!_.isValid(p))throw Error("Invalid QR Code version");void 0===w&&(w=A.BYTE);let x=m.getSymbolTotalCodewords(p),B=v.getTotalCodewordsCount(p,g),O=(x-B)*8;if(w===A.MIXED)return O;let T=O-getReservedBitsCount(w,p);switch(w){case A.NUMERIC:return Math.floor(T/10*3);case A.ALPHANUMERIC:return Math.floor(T/11*2);case A.KANJI:return Math.floor(T/13);case A.BYTE:default:return Math.floor(T/8)}},g.getBestVersionForData=function(p,w){let m;let v=x.from(w,x.M);if(Array.isArray(p)){if(p.length>1)return function(p,w){for(let m=1;m<=40;m++){let v=function(p,g){let w=0;return p.forEach(function(p){let m=getReservedBitsCount(p.mode,g);w+=m+p.getBitsLength()}),w}(p,m);if(v<=g.getCapacity(m,w,A.MIXED))return m}}(p,v);if(0===p.length)return 1;m=p[0]}else m=p;return function(p,w,m){for(let v=1;v<=40;v++)if(w<=g.getCapacity(v,m,p))return v}(m.mode,m.getLength(),v)},g.getEncodedBits=function(p){if(!_.isValid(p)||p<7)throw Error("Invalid QR Code version");let g=p<<12;for(;m.getBCHDigit(g)-B>=0;)g^=7973<<m.getBCHDigit(g)-B;return p<<12|g}},6907:function(p,g,w){let m=w(89653);g.render=function(p,g,w){var v;let x=w,A=g;void 0!==x||g&&g.getContext||(x=g,g=void 0),g||(A=function(){try{return document.createElement("canvas")}catch(p){throw Error("You need to specify a canvas element")}}()),x=m.getOptions(x);let _=m.getImageWidth(p.modules.size,x),B=A.getContext("2d"),O=B.createImageData(_,_);return m.qrToImageData(O.data,p,x),v=A,B.clearRect(0,0,v.width,v.height),v.style||(v.style={}),v.height=_,v.width=_,v.style.height=_+"px",v.style.width=_+"px",B.putImageData(O,0,0),A},g.renderToDataURL=function(p,w,m){let v=m;void 0!==v||w&&w.getContext||(v=w,w=void 0),v||(v={});let x=g.render(p,w,v),A=v.type||"image/png",_=v.rendererOpts||{};return x.toDataURL(A,_.quality)}},93776:function(p,g,w){let m=w(89653);function getColorAttrib(p,g){let w=p.a/255,m=g+'="'+p.hex+'"';return w<1?m+" "+g+'-opacity="'+w.toFixed(2).slice(1)+'"':m}function svgCmd(p,g,w){let m=p+g;return void 0!==w&&(m+=" "+w),m}g.render=function(p,g,w){let v=m.getOptions(g),x=p.modules.size,A=p.modules.data,_=x+2*v.margin,B=v.color.light.a?"<path "+getColorAttrib(v.color.light,"fill")+' d="M0 0h'+_+"v"+_+'H0z"/>':"",O="<path "+getColorAttrib(v.color.dark,"stroke")+' d="'+function(p,g,w){let m="",v=0,x=!1,A=0;for(let _=0;_<p.length;_++){let B=Math.floor(_%g),O=Math.floor(_/g);B||x||(x=!0),p[_]?(A++,_>0&&B>0&&p[_-1]||(m+=x?svgCmd("M",B+w,.5+O+w):svgCmd("m",v,0),v=0,x=!1),B+1<g&&p[_+1]||(m+=svgCmd("h",A),A=0)):v++}return m}(A,x,v.margin)+'"/>',T=v.width?'width="'+v.width+'" height="'+v.width+'" ':"",U='<svg xmlns="http://www.w3.org/2000/svg" '+T+('viewBox="0 0 '+_)+" "+_+'" shape-rendering="crispEdges">'+B+O+"</svg>\n";return"function"==typeof w&&w(null,U),U}},89653:function(p,g){function hex2rgba(p){if("number"==typeof p&&(p=p.toString()),"string"!=typeof p)throw Error("Color should be defined as hex string");let g=p.slice().replace("#","").split("");if(g.length<3||5===g.length||g.length>8)throw Error("Invalid hex color: "+p);(3===g.length||4===g.length)&&(g=Array.prototype.concat.apply([],g.map(function(p){return[p,p]}))),6===g.length&&g.push("F","F");let w=parseInt(g.join(""),16);return{r:w>>24&255,g:w>>16&255,b:w>>8&255,a:255&w,hex:"#"+g.slice(0,6).join("")}}g.getOptions=function(p){p||(p={}),p.color||(p.color={});let g=void 0===p.margin||null===p.margin||p.margin<0?4:p.margin,w=p.width&&p.width>=21?p.width:void 0,m=p.scale||4;return{width:w,scale:w?4:m,margin:g,color:{dark:hex2rgba(p.color.dark||"#000000ff"),light:hex2rgba(p.color.light||"#ffffffff")},type:p.type,rendererOpts:p.rendererOpts||{}}},g.getScale=function(p,g){return g.width&&g.width>=p+2*g.margin?g.width/(p+2*g.margin):g.scale},g.getImageWidth=function(p,w){let m=g.getScale(p,w);return Math.floor((p+2*w.margin)*m)},g.qrToImageData=function(p,w,m){let v=w.modules.size,x=w.modules.data,A=g.getScale(v,m),_=Math.floor((v+2*m.margin)*A),B=m.margin*A,O=[m.color.light,m.color.dark];for(let g=0;g<_;g++)for(let w=0;w<_;w++){let T=(g*_+w)*4,U=m.color.light;if(g>=B&&w>=B&&g<_-B&&w<_-B){let p=Math.floor((g-B)/A),m=Math.floor((w-B)/A);U=O[x[p*v+m]?1:0]}p[T++]=U.r,p[T++]=U.g,p[T++]=U.b,p[T]=U.a}}},53250:function(p,g,w){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=w(67294),v="function"==typeof Object.is?Object.is:function(p,g){return p===g&&(0!==p||1/p==1/g)||p!=p&&g!=g},x=m.useState,A=m.useEffect,_=m.useLayoutEffect,B=m.useDebugValue;function r(p){var g=p.getSnapshot;p=p.value;try{var w=g();return!v(p,w)}catch(p){return!0}}var O="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(p,g){return g()}:function(p,g){var w=g(),m=x({inst:{value:w,getSnapshot:g}}),v=m[0].inst,O=m[1];return _(function(){v.value=w,v.getSnapshot=g,r(v)&&O({inst:v})},[p,w,g]),A(function(){return r(v)&&O({inst:v}),p(function(){r(v)&&O({inst:v})})},[p]),B(w),w};g.useSyncExternalStore=void 0!==m.useSyncExternalStore?m.useSyncExternalStore:O},50139:function(p,g,w){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=w(67294),v=w(61688),x="function"==typeof Object.is?Object.is:function(p,g){return p===g&&(0!==p||1/p==1/g)||p!=p&&g!=g},A=v.useSyncExternalStore,_=m.useRef,B=m.useEffect,O=m.useMemo,T=m.useDebugValue;g.useSyncExternalStoreWithSelector=function(p,g,w,m,v){var U=_(null);if(null===U.current){var F={hasValue:!1,value:null};U.current=F}else F=U.current;var z=A(p,(U=O(function(){function a(g){if(!_){if(_=!0,p=g,g=m(g),void 0!==v&&F.hasValue){var w=F.value;if(v(w,g))return A=w}return A=g}if(w=A,x(p,g))return w;var B=m(g);return void 0!==v&&v(w,B)?w:(p=g,A=B)}var p,A,_=!1,B=void 0===w?null:w;return[function(){return a(g())},null===B?void 0:function(){return a(B())}]},[g,w,m,v]))[0],U[1]);return B(function(){F.hasValue=!0,F.value=z},[z]),T(z),z}},61688:function(p,g,w){"use strict";p.exports=w(53250)},52798:function(p,g,w){"use strict";p.exports=w(50139)},31407:function(p,g,w){"use strict";w.d(g,{RJ:function(){return m}});var m={id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}},53516:function(p,g,w){"use strict";function normalizeChainId(p){return"string"==typeof p?Number.parseInt(p,"0x"===p.trim().substring(0,2)?16:10):"bigint"==typeof p?Number(p):p}w.d(g,{J:function(){return normalizeChainId}})},55210:function(p,g,w){"use strict";w.d(g,{_:function(){return F}});var m,v=w(11588),x=w(53516),A=w(14088),_=w(92221),B=w(42455),O=w(67629),T=w(19575),U=w(46872),F=class extends A.wR{constructor({chains:p,options:g}={}){let w={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let p=window.ethereum;return p?.providers?p.providers[0]:p},...g};super({chains:p,options:w}),(0,A.ov)(this,"id","injected"),(0,A.ov)(this,"name"),(0,A.ov)(this,"ready"),(0,A.Ko)(this,m,void 0),(0,A.ov)(this,"shimDisconnectKey",`${this.id}.shimDisconnect`),(0,A.ov)(this,"onAccountsChanged",p=>{0===p.length?this.emit("disconnect"):this.emit("change",{account:(0,_.K)(p[0])})}),(0,A.ov)(this,"onChainChanged",p=>{let g=(0,x.J)(p),w=this.isChainUnsupported(g);this.emit("change",{chain:{id:g,unsupported:w}})}),(0,A.ov)(this,"onDisconnect",async p=>{if(1013===p.code){let p=await this.getProvider();if(p){let p=await this.getAccount();if(p)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)});let v=w.getProvider();if("string"==typeof w.name)this.name=w.name;else if(v){let p=function(p){if(!p)return"Injected";let getName=p=>p.isApexWallet?"Apex Wallet":p.isAvalanche?"Core Wallet":p.isBackpack?"Backpack":p.isBifrost?"Bifrost Wallet":p.isBitKeep?"BitKeep":p.isBitski?"Bitski":p.isBlockWallet?"BlockWallet":p.isBraveWallet?"Brave Wallet":p.isCoinbaseWallet?"Coinbase Wallet":p.isDawn?"Dawn Wallet":p.isDefiant?"Defiant":p.isEnkrypt?"Enkrypt":p.isExodus?"Exodus":p.isFrame?"Frame":p.isFrontier?"Frontier Wallet":p.isGamestop?"GameStop Wallet":p.isHaqqWallet?"HAQQ Wallet":p.isHyperPay?"HyperPay Wallet":p.isImToken?"ImToken":p.isHaloWallet?"Halo Wallet":p.isKuCoinWallet?"KuCoin Wallet":p.isMathWallet?"MathWallet":p.isNovaWallet?"Nova Wallet":p.isOkxWallet||p.isOKExWallet?"OKX Wallet":p.isOneInchIOSWallet||p.isOneInchAndroidWallet?"1inch Wallet":p.isOpera?"Opera":p.isPhantom?"Phantom":p.isPortal?"Ripio Portal":p.isRabby?"Rabby Wallet":p.isRainbow?"Rainbow":p.isStatus?"Status":p.isTalisman?"Talisman":p.isTally?"Taho":p.isTokenPocket?"TokenPocket":p.isTokenary?"Tokenary":p.isTrust||p.isTrustWallet?"Trust Wallet":p.isTTWallet?"TTWallet":p.isXDEFI?"XDEFI Wallet":p.isZerion?"Zerion":p.isMetaMask?"MetaMask":void 0;if(p.providers?.length){let g=new Set,w=1;for(let m of p.providers){let p=getName(m);p||(p=`Unknown Wallet #${w}`,w+=1),g.add(p)}let m=[...g];return m.length?m:m[0]??"Injected"}return getName(p)??"Injected"}(v);w.name?this.name=w.name(p):"string"==typeof p?this.name=p:this.name=p[0]}else this.name="Injected";this.ready=!!v}async connect({chainId:p}={}){try{let g=await this.getProvider();if(!g)throw new v.N;g.on&&(g.on("accountsChanged",this.onAccountsChanged),g.on("chainChanged",this.onChainChanged),g.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let w=await g.request({method:"eth_requestAccounts"}),m=(0,_.K)(w[0]),x=await this.getChainId(),A=this.isChainUnsupported(x);if(p&&x!==p){let g=await this.switchChain(p);x=g.id,A=this.isChainUnsupported(x)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:m,chain:{id:x,unsupported:A}}}catch(p){if(this.isUserRejectedRequestError(p))throw new B.ab(p);if(-32002===p.code)throw new B.pT(p);throw p}}async disconnect(){let p=await this.getProvider();p?.removeListener&&(p.removeListener("accountsChanged",this.onAccountsChanged),p.removeListener("chainChanged",this.onChainChanged),p.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let p=await this.getProvider();if(!p)throw new v.N;let g=await p.request({method:"eth_accounts"});return(0,_.K)(g[0])}async getChainId(){let p=await this.getProvider();if(!p)throw new v.N;return p.request({method:"eth_chainId"}).then(x.J)}async getProvider(){let p=this.options.getProvider();return p&&(0,A.qx)(this,m,p),(0,A.ac)(this,m)}async getWalletClient({chainId:p}={}){let[g,w]=await Promise.all([this.getProvider(),this.getAccount()]),m=this.chains.find(g=>g.id===p);if(!g)throw Error("provider is required.");return(0,O.K)({account:w,chain:m,transport:(0,T.P)(g)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let p=await this.getProvider();if(!p)throw new v.N;let g=await this.getAccount();return!!g}catch{return!1}}async switchChain(p){let g=await this.getProvider();if(!g)throw new v.N;let w=(0,U.eC)(p);try{return await Promise.all([g.request({method:"wallet_switchEthereumChain",params:[{chainId:w}]}),new Promise(g=>this.on("change",({chain:w})=>{w?.id===p&&g()}))]),this.chains.find(g=>g.id===p)??{id:p,name:`Chain ${w}`,network:`${w}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(x){let m=this.chains.find(g=>g.id===p);if(!m)throw new v.B({chainId:p,connectorId:this.id});if(4902===x.code||x?.data?.originalError?.code===4902)try{await g.request({method:"wallet_addEthereumChain",params:[{chainId:w,chainName:m.name,nativeCurrency:m.nativeCurrency,rpcUrls:[m.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(m)}]});let v=await this.getChainId();if(v!==p)throw new B.ab(Error("User rejected switch after adding network."));return m}catch(p){throw new B.ab(p)}if(this.isUserRejectedRequestError(x))throw new B.ab(x);throw new B.x3(x)}}async watchAsset({address:p,decimals:g=18,image:w,symbol:m}){let x=await this.getProvider();if(!x)throw new v.N;return x.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:p,decimals:g,image:w,symbol:m}}})}isUserRejectedRequestError(p){return 4001===p.code}};m=new WeakMap},14088:function(p,g,w){"use strict";w.d(g,{wR:function(){return O},Ko:function(){return __privateAdd},ac:function(){return __privateGet},U9:function(){return __privateMethod},qx:function(){return __privateSet},ov:function(){return __publicField}});var m=w(26729),v=w(61786);w(90169),w(46872),w(86101),w(94216),w(4656),w(23822),w(92960),w(69977),w(21973),w(66054),w(97451),w(9040);var x=(w(26873),w(41327));w(54574);let A=(0,v.ax)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),_=(0,v.ax)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var B=Object.defineProperty,__defNormalProp=(p,g,w)=>g in p?B(p,g,{enumerable:!0,configurable:!0,writable:!0,value:w}):p[g]=w,__publicField=(p,g,w)=>(__defNormalProp(p,"symbol"!=typeof g?g+"":g,w),w),__accessCheck=(p,g,w)=>{if(!g.has(p))throw TypeError("Cannot "+w)},__privateGet=(p,g,w)=>(__accessCheck(p,g,"read from private field"),w?w.call(p):g.get(p)),__privateAdd=(p,g,w)=>{if(g.has(p))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(p):g.set(p,w)},__privateSet=(p,g,w,m)=>(__accessCheck(p,g,"write to private field"),m?m.call(p,w):g.set(p,w),w),__privateMethod=(p,g,w)=>(__accessCheck(p,g,"access private method"),w),O=class extends m{constructor({chains:p=[_,A],options:g}){super(),__publicField(this,"chains"),__publicField(this,"options"),__publicField(this,"storage"),this.chains=p,this.options=g}getBlockExplorerUrls(p){let{default:g,...w}=p.blockExplorers??{};if(g)return[g.url,...Object.values(w).map(p=>p.url)]}isChainUnsupported(p){return!this.chains.some(g=>g.id===p)}setStorage(p){this.storage=p}}},11588:function(p,g,w){"use strict";w.d(g,{B:function(){return v},N:function(){return x}});var m=w(14088),v=class extends Error{constructor({chainId:p,connectorId:g}){super(`Chain "${p}" not configured for connector "${g}".`),(0,m.ov)(this,"name","ChainNotConfiguredForConnectorError")}},x=class extends Error{constructor(){super(...arguments),(0,m.ov)(this,"name","ConnectorNotFoundError"),(0,m.ov)(this,"message","Connector not found")}}},5341:function(p,g,w){"use strict";w.d(g,{QB:function(){return configureChains},$j:function(){return connect},_g:function(){return createConfig},o6:function(){return createStorage},vZ:function(){return function deepEqual(p,g){if(p===g)return!0;if(p&&g&&"object"==typeof p&&"object"==typeof g){let w,m;if(p.constructor!==g.constructor)return!1;if(Array.isArray(p)&&Array.isArray(g)){if((w=p.length)!=g.length)return!1;for(m=w;0!=m--;)if(!deepEqual(p[m],g[m]))return!1;return!0}if(p.valueOf!==Object.prototype.valueOf)return p.valueOf()===g.valueOf();if(p.toString!==Object.prototype.toString)return p.toString()===g.toString();let v=Object.keys(p);if((w=v.length)!==Object.keys(g).length)return!1;for(m=w;0!=m--;)if(!Object.prototype.hasOwnProperty.call(g,v[m]))return!1;for(m=w;0!=m--;){let w=v[m];if(w&&!deepEqual(p[w],g[w]))return!1}return!0}return p!=p&&g!=g}},zP:function(){return disconnect},EG:function(){return fetchBalance},RQ:function(){return fetchBlockNumber},w6:function(){return fetchEnsAvatar},Lk:function(){return fetchEnsName},D0:function(){return getAccount},_X:function(){return getCallParameters},Hy:function(){return getNetwork},uV:function(){return getPublicClient},gY:function(){return getSendTransactionParameters},xz:function(){return getWalletClient},jr:function(){return getWebSocketPublicClient},wp:function(){return tl},$q:function(){return prepareWriteContract},a4:function(){return chunk_LAFZBYO7_readContract},If:function(){return switchNetwork},uH:function(){return watchAccount},QC:function(){return watchNetwork},pC:function(){return watchPublicClient},Tb:function(){return watchWalletClient},fq:function(){return watchWebSocketPublicClient},n9:function(){return writeContract}});var m,v,x,A,_,B=w(55210),__accessCheck=(p,g,w)=>{if(!g.has(p))throw TypeError("Cannot "+w)},__privateGet=(p,g,w)=>(__accessCheck(p,g,"read from private field"),w?w.call(p):g.get(p)),__privateAdd=(p,g,w)=>{if(g.has(p))throw TypeError("Cannot add the same private member more than once");g instanceof WeakSet?g.add(p):g.set(p,w)},__privateSet=(p,g,w,m)=>(__accessCheck(p,g,"write to private field"),m?m.call(p,w):g.set(p,w),w),__privateMethod=(p,g,w)=>(__accessCheck(p,g,"access private method"),w),O=w(48439),T=w(1920),U=w(90722),F=w(31826),z=w(96606),W=w(61786),q=w(26873),Q=w(46872),G=w(9040),K=w(41327),Z=w(90707),Y=w(25493);function encodedLabelToLabelhash(p){if(66!==p.length||0!==p.indexOf("[")||65!==p.indexOf("]"))return null;let g=`0x${p.slice(1,65)}`;return(0,Y.v)(g)?g:null}function namehash(p){let g=new Uint8Array(32).fill(0);if(!p)return(0,Q.ci)(g);let w=p.split(".");for(let p=w.length-1;p>=0;p-=1){let m=encodedLabelToLabelhash(w[p]),v=m?(0,K.O0)(m):(0,Z.w)((0,K.qX)(w[p]),"bytes");g=(0,Z.w)((0,G.zo)([g,v]),"bytes")}return(0,Q.ci)(g)}function packetToBytes(p){let g=p.replace(/^\.|\.$/gm,"");if(0===g.length)return new Uint8Array(1);let w=new Uint8Array((0,K.qX)(g).byteLength+2),m=0,v=g.split(".");for(let p=0;p<v.length;p++){let g=(0,K.qX)(v[p]);if(g.byteLength>255){var x;g=(0,K.qX)((x=function(p){let g=new Uint8Array(32).fill(0);return p?encodedLabelToLabelhash(p)||(0,Z.w)((0,K.qX)(p)):(0,Q.ci)(g)}(v[p]),`[${x.slice(2)}]`))}w[m]=g.length,w.set(g,m+1),m+=g.length+1}return w.byteLength!==m+1?w.slice(0,m+1):w}var J=w(5555),X=w(69977);function getContractError(p,{abi:g,address:w,args:m,docsPath:v,functionName:x,sender:A}){let{code:_,data:B,message:O,shortMessage:T}=p instanceof U.VQ?p:p instanceof X.G?p.walk(p=>"data"in p):{},F=p;return p instanceof J.wb?F=new U.Dk({functionName:x}):3===_&&(B||O||T)&&(F=new U.Lu({abi:g,data:"object"==typeof B?B.data:B,functionName:x,message:T??O})),new U.uq(F,{abi:g,args:m,contractAddress:w,docsPath:v,functionName:x,sender:A})}var ee=w(83161);async function readContract(p,{abi:g,address:w,args:m,functionName:v,...x}){let A=(0,z.R)({abi:g,args:m,functionName:v});try{let{data:_}=await (0,ee.R)(p,{data:A,to:w,...x});return(0,F.k)({abi:g,args:m,functionName:v,data:_||"0x"})}catch(p){throw getContractError(p,{abi:g,address:w,args:m,docsPath:"/docs/contract/readContract",functionName:v})}}async function getEnsAddress(p,{blockNumber:g,blockTag:w,name:m,universalResolverAddress:v}){let x=v;if(!x){if(!p.chain)throw Error("client chain not configured. universalResolverAddress is required.");x=(0,W.LI)({blockNumber:g,chain:p.chain,contract:"ensUniversalResolver"})}try{let v=await readContract(p,{address:x,abi:T.lD,functionName:"resolve",args:[(0,Q.NC)(packetToBytes(m)),(0,z.R)({abi:T.Ei,functionName:"addr",args:[namehash(m)]})],blockNumber:g,blockTag:w});if("0x"===v[0])return null;let A=(0,F.k)({abi:T.Ei,functionName:"addr",data:v[0]});return"0x00"===(0,q.f)(A)?null:A}catch(p){if(p instanceof U.uq){let g=p.cause?.reason;if(g?.includes("Wildcard on non-extended resolvers is not supported"))return null}throw p}}let EnsAvatarInvalidMetadataError=class EnsAvatarInvalidMetadataError extends X.G{constructor({data:p}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(p)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}};let EnsAvatarInvalidNftUriError=class EnsAvatarInvalidNftUriError extends X.G{constructor({reason:p}){super(`ENS NFT avatar URI is invalid. ${p}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}};let EnsAvatarUriResolutionError=class EnsAvatarUriResolutionError extends X.G{constructor({uri:p}){super(`Unable to resolve ENS avatar URI "${p}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}};let EnsAvatarUnsupportedNamespaceError=class EnsAvatarUnsupportedNamespaceError extends X.G{constructor({namespace:p}){super(`ENS NFT avatar namespace "${p}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};let et=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,er=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ei=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,en=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function isImageUri(p){try{let g=await fetch(p,{method:"HEAD"});if(200===g.status){let p=g.headers.get("content-type");return p?.startsWith("image/")}return!1}catch(g){if("object"==typeof g&&void 0!==g.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(g=>{let w=new Image;w.onload=()=>{g(!0)},w.onerror=()=>{g(!1)},w.src=p})}}function getGateway(p,g){return p?p.endsWith("/")?p.slice(0,-1):p:g}function resolveAvatarUri({uri:p,gatewayUrls:g}){let w=ei.test(p);if(w)return{uri:p,isOnChain:!0,isEncoded:w};let m=getGateway(g?.ipfs,"https://ipfs.io"),v=getGateway(g?.arweave,"https://arweave.net"),x=p.match(et),{protocol:A,subpath:_,target:B,subtarget:O=""}=x?.groups||{},T="ipns:/"===A||"ipns/"===_,U="ipfs:/"===A||"ipfs/"===_||er.test(p);if(p.startsWith("http")&&!T&&!U){let w=p;return g?.arweave&&(w=p.replace(/https:\/\/arweave.net/g,g?.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((T||U)&&B)return{uri:`${m}/${T?"ipns":"ipfs"}/${B}${O}`,isOnChain:!1,isEncoded:!1};if("ar:/"===A&&B)return{uri:`${v}/${B}${O||""}`,isOnChain:!1,isEncoded:!1};let F=p.replace(en,"");if(F.startsWith("<svg")&&(F=`data:image/svg+xml;base64,${btoa(F)}`),F.startsWith("data:")||F.startsWith("{"))return{uri:F,isOnChain:!0,isEncoded:!1};throw new EnsAvatarUriResolutionError({uri:p})}function getJsonImage(p){if("object"!=typeof p||!("image"in p)&&!("image_url"in p)&&!("image_data"in p))throw new EnsAvatarInvalidMetadataError({data:p});return p.image||p.image_url||p.image_data}async function getMetadataAvatarUri({gatewayUrls:p,uri:g}){try{let w=await fetch(g).then(p=>p.json()),m=await parseAvatarUri({gatewayUrls:p,uri:getJsonImage(w)});return m}catch{throw new EnsAvatarUriResolutionError({uri:g})}}async function parseAvatarUri({gatewayUrls:p,uri:g}){let{uri:w,isOnChain:m}=resolveAvatarUri({uri:g,gatewayUrls:p});if(m)return w;let v=await isImageUri(w);if(v)return w;throw new EnsAvatarUriResolutionError({uri:g})}async function getNftTokenUri(p,{nft:g}){if("erc721"===g.namespace)return readContract(p,{address:g.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(g.tokenID)]});if("erc1155"===g.namespace)return readContract(p,{address:g.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(g.tokenID)]});throw new EnsAvatarUnsupportedNamespaceError({namespace:g.namespace})}async function parseAvatarRecord(p,{gatewayUrls:g,record:w}){return/eip155:/i.test(w)?parseNftAvatarUri(p,{gatewayUrls:g,record:w}):parseAvatarUri({uri:w,gatewayUrls:g})}async function parseNftAvatarUri(p,{gatewayUrls:g,record:w}){let m=function(p){p.startsWith("did:nft:")&&(p=p.replace("did:nft:","").replace(/_/g,"/"));let[g,w,m]=p.split("/"),[v,x]=g.split(":"),[A,_]=w.split(":");if(!v||"eip155"!==v.toLowerCase())throw new EnsAvatarInvalidNftUriError({reason:"Only EIP-155 supported"});if(!x)throw new EnsAvatarInvalidNftUriError({reason:"Chain ID not found"});if(!_)throw new EnsAvatarInvalidNftUriError({reason:"Contract address not found"});if(!m)throw new EnsAvatarInvalidNftUriError({reason:"Token ID not found"});if(!A)throw new EnsAvatarInvalidNftUriError({reason:"ERC namespace not found"});return{chainID:parseInt(x),namespace:A.toLowerCase(),contractAddress:_,tokenID:m}}(w),v=await getNftTokenUri(p,{nft:m}),{uri:x,isOnChain:A,isEncoded:_}=resolveAvatarUri({uri:v,gatewayUrls:g});if(A&&(x.includes("data:application/json;base64,")||x.startsWith("{"))){let p=_?atob(x.replace("data:application/json;base64,","")):x,w=JSON.parse(p);return parseAvatarUri({uri:getJsonImage(w),gatewayUrls:g})}let B=m.tokenID;return"erc1155"===m.namespace&&(B=B.replace("0x","").padStart(64,"0")),getMetadataAvatarUri({gatewayUrls:g,uri:x.replace(/(?:0x)?{id}/,B)})}async function getEnsText(p,{blockNumber:g,blockTag:w,name:m,key:v,universalResolverAddress:x}){let A=x;if(!A){if(!p.chain)throw Error("client chain not configured. universalResolverAddress is required.");A=(0,W.LI)({blockNumber:g,chain:p.chain,contract:"ensUniversalResolver"})}let _=await readContract(p,{address:A,abi:T.lD,functionName:"resolve",args:[(0,Q.NC)(packetToBytes(m)),(0,z.R)({abi:T.nZ,functionName:"text",args:[namehash(m),v]})],blockNumber:g,blockTag:w});if("0x"===_[0])return null;let B=(0,F.k)({abi:T.nZ,functionName:"text",data:_[0]});return""===B?null:B}async function getEnsAvatar(p,{blockNumber:g,blockTag:w,gatewayUrls:m,name:v,universalResolverAddress:x}){let A=await getEnsText(p,{blockNumber:g,blockTag:w,key:"avatar",name:v,universalResolverAddress:x});if(!A)return null;try{return await parseAvatarRecord(p,{record:A,gatewayUrls:m})}catch{return null}}var eo=w(35554);async function getEnsName(p,{address:g,blockNumber:w,blockTag:m,universalResolverAddress:v}){let x=v;if(!x){if(!p.chain)throw Error("client chain not configured. universalResolverAddress is required.");x=(0,W.LI)({blockNumber:w,chain:p.chain,contract:"ensUniversalResolver"})}let A=`${g.toLowerCase().substring(2)}.addr.reverse`;try{let g=await readContract(p,{address:x,abi:[{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],functionName:"reverse",args:[(0,Q.NC)(packetToBytes(A))],blockNumber:w,blockTag:m});return g[0]}catch(p){if(p instanceof U.uq&&p.cause.reason===eo.$[50])return null;throw p}}async function getEnsResolver(p,{blockNumber:g,blockTag:w,name:m,universalResolverAddress:v}){let x=v;if(!x){if(!p.chain)throw Error("client chain not configured. universalResolverAddress is required.");x=(0,W.LI)({blockNumber:g,chain:p.chain,contract:"ensUniversalResolver"})}let[A]=await readContract(p,{address:x,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,Q.NC)(packetToBytes(m))],blockNumber:g,blockTag:w});return A}function createFilterRequestScope(p,{method:g}){let w={};return"fallback"===p.transport.type&&p.transport.onResponse?.(({method:p,response:m,status:v,transport:x})=>{"success"===v&&g===p&&(w[m]=x.request)}),g=>w[g]||p.request}async function createBlockFilter(p){let g=createFilterRequestScope(p,{method:"eth_newBlockFilter"}),w=await p.request({method:"eth_newBlockFilter"});return{id:w,request:g(w),type:"block"}}let FilterTypeNotSupportedError=class FilterTypeNotSupportedError extends X.G{constructor(p){super(`Filter type "${p}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};var ea=w(56143);let getEventSelector=p=>"string"==typeof p?(0,ea.F)(p):(0,ea.J)(p);var es=w(62546),el=w(21494),ec=w(28604);function encodeEventTopics({abi:p,eventName:g,args:w}){let m=p[0];if(g&&!(m=(0,ec.m)({abi:p,args:w,name:g})))throw new J.mv(g,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==m.type)throw new J.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let v=(0,el.t)(m),x=getEventSelector(v),A=[];if(w&&"inputs"in m){let p=m.inputs?.filter(p=>"indexed"in p&&p.indexed),g=Array.isArray(w)?w:Object.values(w).length>0?p?.map(p=>w[p.name])??[]:[];g.length>0&&(A=p?.map((p,w)=>Array.isArray(g[w])?g[w].map((m,v)=>encodeArg({param:p,value:g[w][v]})):g[w]?encodeArg({param:p,value:g[w]}):null)??[])}return[x,...A]}function encodeArg({param:p,value:g}){if("string"===p.type||"bytes"===p.type)return(0,Z.w)((0,K.O0)(g));if("tuple"===p.type||p.type.match(/^(.*)\[(\d+)?\]$/))throw new FilterTypeNotSupportedError(p.type);return(0,es.E)([p],[g])}async function createContractEventFilter(p,{address:g,abi:w,args:m,eventName:v,fromBlock:x,strict:A,toBlock:_}){let B=createFilterRequestScope(p,{method:"eth_newFilter"}),O=v?encodeEventTopics({abi:w,args:m,eventName:v}):void 0,T=await p.request({method:"eth_newFilter",params:[{address:g,fromBlock:"bigint"==typeof x?(0,Q.eC)(x):x,toBlock:"bigint"==typeof _?(0,Q.eC)(_):_,topics:O}]});return{abi:w,args:m,eventName:v,id:T,request:B(T),strict:A,type:"event"}}async function createEventFilter(p,{address:g,args:w,event:m,fromBlock:v,strict:x,toBlock:A}={}){let _=createFilterRequestScope(p,{method:"eth_newFilter"}),B=[];m&&(B=encodeEventTopics({abi:[m],eventName:m.name,args:w}));let O=await p.request({method:"eth_newFilter",params:[{address:g,fromBlock:"bigint"==typeof v?(0,Q.eC)(v):v,toBlock:"bigint"==typeof A?(0,Q.eC)(A):A,...B.length?{topics:B}:{}}]});return{abi:m?[m]:void 0,args:w,eventName:m?m.name:void 0,id:O,request:_(O),strict:x,type:"event"}}async function createPendingTransactionFilter(p){let g=createFilterRequestScope(p,{method:"eth_newPendingTransactionFilter"}),w=await p.request({method:"eth_newPendingTransactionFilter"});return{id:w,request:g(w),type:"transaction"}}var eu=w(21431),ed=w(14828);async function estimateContractGas(p,{abi:g,address:w,args:m,functionName:v,...x}){let A=(0,z.R)({abi:g,args:m,functionName:v});try{let g=await (0,ed.Q)(p,{data:A,to:w,...x});return g}catch(A){let p=x.account?(0,eu.T)(x.account):void 0;throw getContractError(A,{abi:g,address:w,args:m,docsPath:"/docs/contract/simulateContract",functionName:v,sender:p?.address})}}async function getBalance(p,{address:g,blockNumber:w,blockTag:m="latest"}){let v=w?(0,Q.eC)(w):void 0,x=await p.request({method:"eth_getBalance",params:[g,v||m]});return BigInt(x)}var eh=w(33910);let ef=new Map,ep=new Map;async function withCache(p,{cacheKey:g,maxAge:w=1/0}){let m=function(p){let buildCache=(p,g)=>({clear:()=>g.delete(p),get:()=>g.get(p),set:w=>g.set(p,w)}),g=buildCache(p,ef),w=buildCache(p,ep);return{clear:()=>{g.clear(),w.clear()},promise:g,response:w}}(g),v=m.response.get();if(v&&w>0){let p=new Date().getTime()-v.created.getTime();if(p<w)return v.data}let x=m.promise.get();x||(x=p(),m.promise.set(x));try{let p=await x;return m.response.set({created:new Date,data:p}),p}finally{m.promise.clear()}}let cacheKey=p=>`blockNumber.${p}`;async function getBlockNumber(p,{maxAge:g=p.pollingInterval}={}){let w=await withCache(()=>p.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(p.uid),maxAge:g});return BigInt(w)}var eg=w(90169);async function getBlockTransactionCount(p,{blockHash:g,blockNumber:w,blockTag:m="latest"}={}){let v;let x=void 0!==w?(0,Q.eC)(w):void 0;return v=g?await p.request({method:"eth_getBlockTransactionCountByHash",params:[g]}):await p.request({method:"eth_getBlockTransactionCountByNumber",params:[x||m]}),(0,eg.ly)(v)}async function getBytecode(p,{address:g,blockNumber:w,blockTag:m="latest"}){let v=void 0!==w?(0,Q.eC)(w):void 0,x=await p.request({method:"eth_getCode",params:[g,v||m]});if("0x"!==x)return x}var ew=w(29251);async function getFeeHistory(p,{blockCount:g,blockNumber:w,blockTag:m="latest",rewardPercentiles:v}){let x=w?(0,Q.eC)(w):void 0,A=await p.request({method:"eth_feeHistory",params:[(0,Q.eC)(g),x||m,v]});return{baseFeePerGas:A.baseFeePerGas.map(p=>BigInt(p)),gasUsedRatio:A.gasUsedRatio,oldestBlock:BigInt(A.oldestBlock),reward:A.reward?.map(p=>p.map(p=>BigInt(p)))}}var em=w(70558);let eb="/docs/contract/decodeEventLog";function decodeEventLog({abi:p,data:g,strict:w,topics:m}){let v=w??!0,[x,...A]=m;if(!x)throw new J.FM({docsPath:eb});let _=p.find(p=>"event"===p.type&&x===getEventSelector((0,el.t)(p)));if(!(_&&"name"in _)||"event"!==_.type)throw new J.lC(x,{docsPath:eb});let{name:B,inputs:O}=_,T=O?.some(p=>!("name"in p&&p.name)),U=T?[]:{},F=O.filter(p=>"indexed"in p&&p.indexed);if(A.length>0)for(let p=0;p<F.length;p++){let g=F[p],w=A[p];if(!w)throw new J.Gy({abiItem:_,param:g});U[g.name||p]=function({param:p,value:g}){if("string"===p.type||"bytes"===p.type||"tuple"===p.type||p.type.match(/^(.*)\[(\d+)?\]$/))return g;let w=(0,em.r)([p],g)||[];return w[0]}({param:g,value:w})}let z=O.filter(p=>!("indexed"in p&&p.indexed));if(z.length>0){if(g&&"0x"!==g)try{let p=(0,em.r)(z,g);if(p){if(T)U=[...U,...p];else for(let g=0;g<z.length;g++)U[z[g].name]=p[g]}}catch(p){if(v){if(p instanceof J.xB)throw new J.SM({abiItem:_,data:p.data,params:p.params,size:p.size});throw p}}else if(v)throw new J.SM({abiItem:_,data:"0x",params:z,size:0})}return{eventName:B,args:Object.values(U).length>0?U:void 0}}var ev=w(18829);async function getFilterChanges(p,{filter:g}){let w="strict"in g&&g.strict,m=await g.request({method:"eth_getFilterChanges",params:[g.id]});return m.map(p=>{if("string"==typeof p)return p;try{let{eventName:m,args:v}="abi"in g&&g.abi?decodeEventLog({abi:g.abi,data:p.data,topics:p.topics,strict:w}):{eventName:void 0,args:void 0};return(0,ev.U)(p,{args:v,eventName:m})}catch(v){let w,m;if(v instanceof J.SM||v instanceof J.Gy){if("strict"in g&&g.strict)return;w=v.abiItem.name,m=v.abiItem.inputs?.some(p=>!("name"in p&&p.name))}return(0,ev.U)(p,{args:m?[]:{},eventName:w})}}).filter(Boolean)}async function getFilterLogs(p,{filter:g}){let w=g.strict??!1,m=await g.request({method:"eth_getFilterLogs",params:[g.id]});return m.map(p=>{try{let{eventName:m,args:v}="abi"in g&&g.abi?decodeEventLog({abi:g.abi,data:p.data,topics:p.topics,strict:w}):{eventName:void 0,args:void 0};return(0,ev.U)(p,{args:v,eventName:m})}catch(v){let w,m;if(v instanceof J.SM||v instanceof J.Gy){if("strict"in g&&g.strict)return;w=v.abiItem.name,m=v.abiItem.inputs?.some(p=>!("name"in p&&p.name))}return(0,ev.U)(p,{args:m?[]:{},eventName:w})}}).filter(Boolean)}var ey=w(48671);async function getLogs(p,{address:g,blockHash:w,fromBlock:m,toBlock:v,event:x,args:A,strict:_}={}){let B=_??!1,O=[];return x&&(O=encodeEventTopics({abi:[x],eventName:x.name,args:A})),(w?await p.request({method:"eth_getLogs",params:[{address:g,topics:O,blockHash:w}]}):await p.request({method:"eth_getLogs",params:[{address:g,topics:O,fromBlock:"bigint"==typeof m?(0,Q.eC)(m):m,toBlock:"bigint"==typeof v?(0,Q.eC)(v):v}]})).map(p=>{try{let{eventName:g,args:w}=x?decodeEventLog({abi:[x],data:p.data,topics:p.topics,strict:B}):{eventName:void 0,args:void 0};return(0,ev.U)(p,{args:w,eventName:g})}catch(m){let g,w;if(m instanceof J.SM||m instanceof J.Gy){if(B)return;g=m.abiItem.name,w=m.abiItem.inputs?.some(p=>!("name"in p&&p.name))}return(0,ev.U)(p,{args:w?[]:{},eventName:g})}}).filter(Boolean)}async function getStorageAt(p,{address:g,blockNumber:w,blockTag:m="latest",slot:v}){let x=void 0!==w?(0,Q.eC)(w):void 0,A=await p.request({method:"eth_getStorageAt",params:[g,v,x||m]});return A}var eC=w(54574),ex=w(94216);async function getTransaction(p,{blockHash:g,blockNumber:w,blockTag:m="latest",hash:v,index:x}){let A=void 0!==w?(0,Q.eC)(w):void 0,_=null;if(v?_=await p.request({method:"eth_getTransactionByHash",params:[v]}):g?_=await p.request({method:"eth_getTransactionByBlockHashAndIndex",params:[g,(0,Q.eC)(x)]}):(A||m)&&(_=await p.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[A||m,(0,Q.eC)(x)]})),!_)throw new eC.Bh({blockHash:g,blockNumber:w,blockTag:m,hash:v,index:x});let B=p.chain?.formatters?.transaction?.format||ex.Tr;return B(_)}async function getTransactionConfirmations(p,{hash:g,transactionReceipt:w}){let[m,v]=await Promise.all([getBlockNumber(p),g?getTransaction(p,{hash:g}):void 0]),x=w?.blockNumber||v?.blockNumber;return x?m-x+1n:0n}var eA=w(89784),eE=w(4656);async function getTransactionReceipt(p,{hash:g}){let w=await p.request({method:"eth_getTransactionReceipt",params:[g]});if(!w)throw new eC.Yb({hash:g});let m=p.chain?.formatters?.transactionReceipt?.format||eE.f;return m(w)}async function multicall(p,g){let{allowFailure:w=!0,batchSize:m,blockNumber:v,blockTag:x,contracts:A,multicallAddress:_}=g,B=m??("object"==typeof p.batch?.multicall&&p.batch.multicall.batchSize||1024),O=_;if(!O){if(!p.chain)throw Error("client chain not configured. multicallAddress is required.");O=(0,W.LI)({blockNumber:v,chain:p.chain,contract:"multicall3"})}let q=[[]],Q=0,G=0;for(let p=0;p<A.length;p++){let{abi:g,address:m,args:v,functionName:x}=A[p];try{let p=(0,z.R)({abi:g,args:v,functionName:x});G+=p.length,B>0&&G>B&&(Q++,G=(p.length-2)/2,q[Q]=[]),q[Q]=[...q[Q],{allowFailure:!0,callData:p,target:m}]}catch(A){let p=getContractError(A,{abi:g,address:m,args:v,docsPath:"/docs/contract/multicall",functionName:x});if(!w)throw p;q[Q]=[...q[Q],{allowFailure:!0,callData:"0x",target:m}]}}let K=await Promise.all(q.map(g=>readContract(p,{abi:T.F8,address:O,args:[g],blockNumber:v,blockTag:x,functionName:"aggregate3"})));return K.flat().map(({returnData:p,success:g},m)=>{let v=q.flat(),{callData:x}=v[m],{abi:_,address:B,functionName:O,args:T}=A[m];try{if("0x"===x)throw new J.wb;if(!g)throw new U.VQ({data:p});let m=(0,F.k)({abi:_,args:T,data:p,functionName:O});return w?{result:m,status:"success"}:m}catch(g){let p=getContractError(g,{abi:_,address:B,args:T,docsPath:"/docs/contract/multicall",functionName:O});if(!w)throw p;return{error:p,result:void 0,status:"failure"}}})}async function simulateContract(p,{abi:g,address:w,args:m,dataSuffix:v,functionName:x,...A}){let _=A.account?(0,eu.T)(A.account):void 0,B=(0,z.R)({abi:g,args:m,functionName:x});try{let{data:_}=await (0,ee.R)(p,{batch:!1,data:`${B}${v?v.replace("0x",""):""}`,to:w,...A}),O=(0,F.k)({abi:g,args:m,functionName:x,data:_||"0x"});return{result:O,request:{abi:g,address:w,args:m,functionName:x,...A}}}catch(p){throw getContractError(p,{abi:g,address:w,args:m,docsPath:"/docs/contract/simulateContract",functionName:x,sender:_?.address})}}async function uninstallFilter(p,{filter:g}){return g.request({method:"eth_uninstallFilter",params:[g.id]})}BigInt(0),BigInt(1),BigInt(2),Array.from({length:256},(p,g)=>g.toString(16).padStart(2,"0"));var e_=w(99353);async function verifyHash(p,{address:g,hash:w,signature:m,...v}){let x=(0,Y.v)(m)?m:(0,Q.NC)(m);try{let{data:m}=await (0,ee.R)(p,{data:(0,e_.w)({abi:T.$o,args:[g,w,x],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...v});return function(p,g){let w=(0,Y.v)(p)?(0,K.O0)(p):p,m=(0,Y.v)(g)?(0,K.O0)(g):g;return function(p,g){if(p.length!==g.length)return!1;for(let w=0;w<p.length;w++)if(p[w]!==g[w])return!1;return!0}(w,m)}(m??"0x0","0x1")}catch(p){if(p instanceof U.cg)return!1;throw p}}async function verifyMessage(p,{address:g,message:w,signature:m,...v}){let x=function(p,g){let w="string"==typeof p?(0,K.qX)(p):p.raw instanceof Uint8Array?p.raw:(0,K.O0)(p.raw),m=(0,K.qX)(`\x19Ethereum Signed Message:
${w.length}`);return(0,Z.w)((0,G.zo)([m,w]),void 0)}(w);return verifyHash(p,{address:g,hash:x,signature:m,...v})}var ek=w(61539);function hashStruct({data:p,primaryType:g,types:w}){let m=function encodeData({data:p,primaryType:g,types:w}){let m=[{type:"bytes32"}],v=[function({primaryType:p,types:g}){let w=(0,Q.NC)(function({primaryType:p,types:g}){let w="",m=function findTypeDependencies({primaryType:p,types:g},w=new Set){let m=p.match(/^\w*/u),v=m?.[0];if(w.has(v)||void 0===g[v])return w;for(let p of(w.add(v),g[v]))findTypeDependencies({primaryType:p.type,types:g},w);return w}({primaryType:p,types:g});m.delete(p);let v=[p,...Array.from(m).sort()];for(let p of v)w+=`${p}(${g[p].map(({name:p,type:g})=>`${g} ${p}`).join(",")})`;return w}({primaryType:p,types:g}));return(0,Z.w)(w)}({primaryType:g,types:w})];for(let x of w[g]){let[g,A]=function encodeField({types:p,name:g,type:w,value:m}){if(void 0!==p[w])return[{type:"bytes32"},(0,Z.w)(encodeData({data:m,primaryType:w,types:p}))];if("bytes"===w){let p=m.length%2?"0":"";return m=`0x${p+m.slice(2)}`,[{type:"bytes32"},(0,Z.w)(m)]}if("string"===w)return[{type:"bytes32"},(0,Z.w)((0,Q.NC)(m))];if(w.lastIndexOf("]")===w.length-1){let v=w.slice(0,w.lastIndexOf("[")),x=m.map(w=>encodeField({name:g,type:v,types:p,value:w}));return[{type:"bytes32"},(0,Z.w)((0,es.E)(x.map(([p])=>p),x.map(([,p])=>p)))]}return[{type:w},m]}({types:w,name:x.name,type:x.type,value:p[x.name]});m.push(g),v.push(A)}return(0,es.E)(m,v)}({data:p,primaryType:g,types:w});return(0,Z.w)(m)}async function verifyTypedData(p,{address:g,signature:w,message:m,primaryType:v,types:x,domain:A,..._}){let B=function({domain:p,message:g,primaryType:w,types:m}){let v=void 0===p?{}:p,x={EIP712Domain:["string"==typeof v?.name&&{name:"name",type:"string"},v?.version&&{name:"version",type:"string"},"number"==typeof v?.chainId&&{name:"chainId",type:"uint256"},v?.verifyingContract&&{name:"verifyingContract",type:"address"},v?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean),...m};(0,ek.i)({domain:v,message:g,primaryType:w,types:x});let A=["0x1901"];return v&&A.push(function({domain:p,types:g}){return hashStruct({data:p,primaryType:"EIP712Domain",types:g})}({domain:v,types:x})),"EIP712Domain"!==w&&A.push(hashStruct({data:g,primaryType:w,types:x})),(0,Z.w)((0,G.zo)(A))}({message:m,primaryType:v,types:x,domain:A});return verifyHash(p,{address:g,hash:B,signature:w,..._})}let eP=new Map,eS=new Map,eI=0;function observe(p,g,w){let m=++eI,getListeners=()=>eP.get(p)||[],unsubscribe=()=>{let g=getListeners();eP.set(p,g.filter(p=>p.id!==m))},unwatch=()=>{let g=eS.get(p);1===getListeners().length&&g&&g(),unsubscribe()},v=getListeners();if(eP.set(p,[...v,{id:m,fns:g}]),v&&v.length>0)return unwatch;let x={};for(let p in g)x[p]=(...g)=>{let w=getListeners();0!==w.length&&w.forEach(w=>w.fns[p]?.(...g))};let A=w(x);return"function"==typeof A&&eS.set(p,A),unwatch}var eB=w(11941),eR=w(61344),eO=w(40482);function poll(p,{emitOnBegin:g,initialWaitTime:w,interval:m}){let v=!0,unwatch=()=>v=!1,watch=async()=>{let x;g&&(x=await p({unpoll:unwatch}));let A=await w?.(x)??m;await (0,eO.D)(A);let poll=async()=>{v&&(await p({unpoll:unwatch}),await (0,eO.D)(m),poll())};poll()};return watch(),unwatch}function watchBlockNumber(p,{emitOnBegin:g=!1,emitMissed:w=!1,onBlockNumber:m,onError:v,poll:x,pollingInterval:A=p.pollingInterval}){let _,B,O;let T=void 0!==x?x:"webSocket"!==p.transport.type;return T?(()=>{let x=(0,eR.P)(["watchBlockNumber",p.uid,g,w,A]);return observe(x,{onBlockNumber:m,onError:v},m=>poll(async()=>{try{let g=await getBlockNumber(p,{maxAge:0});if(_){if(g===_)return;if(g-_>1&&w)for(let p=_+1n;p<g;p++)m.onBlockNumber(p,_),_=p}(!_||g>_)&&(m.onBlockNumber(g,_),_=g)}catch(p){m.onError?.(p)}},{emitOnBegin:g,interval:A}))})():(B=!0,O=()=>B=!1,(async()=>{try{let{unsubscribe:g}=await p.transport.subscribe({params:["newHeads"],onData(p){if(!B)return;let g=(0,eg.y_)(p.result?.number);m(g,_),_=g},onError(p){v?.(p)}});O=g,B||O()}catch(p){v?.(p)}})(),O)}async function waitForTransactionReceipt(p,{confirmations:g=1,hash:w,onReplaced:m,pollingInterval:v=p.pollingInterval,timeout:x}){let A,_,B;let O=(0,eR.P)(["waitForTransactionReceipt",p.uid,w]),T=!1;return new Promise((U,F)=>{x&&setTimeout(()=>F(new eC.mc({hash:w})),x);let z=observe(O,{onReplaced:m,resolve:U,reject:F},m=>{let x=watchBlockNumber(p,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:v,async onBlockNumber(v){if(T)return;let O=v,done=p=>{x(),p(),z()};try{if(B){if(O-B.blockNumber+1n<g)return;done(()=>m.resolve(B));return}if(A||(T=!0,await (0,eB.J)(async()=>{(A=await getTransaction(p,{hash:w})).blockNumber&&(O=A.blockNumber)},{delay:({count:p})=>200*~~(1<<p),retryCount:6}),T=!1),B=await getTransactionReceipt(p,{hash:w}),g>0&&O-B.blockNumber+1n<g)return;done(()=>m.resolve(B))}catch(w){if(A&&(w instanceof eC.Bh||w instanceof eC.Yb)){_=A;let w=await (0,eh.Q)(p,{blockNumber:O,includeTransactions:!0}),v=w.transactions.find(({from:p,nonce:g})=>p===_.from&&g===_.nonce);if(!v||(B=await getTransactionReceipt(p,{hash:v.hash}),O-B.blockNumber+1n<g))return;let x="replaced";v.to===_.to&&v.value===_.value?x="repriced":v.from===v.to&&0n===v.value&&(x="cancelled"),done(()=>{m.onReplaced?.({reason:x,replacedTransaction:_,transaction:v,transactionReceipt:B}),m.resolve(B)})}else done(()=>m.reject(w))}}})})})}var eT=w(86101);let publicActions=p=>({call:g=>(0,ee.R)(p,g),createBlockFilter:()=>createBlockFilter(p),createContractEventFilter:g=>createContractEventFilter(p,g),createEventFilter:g=>createEventFilter(p,g),createPendingTransactionFilter:()=>createPendingTransactionFilter(p),estimateContractGas:g=>estimateContractGas(p,g),estimateGas:g=>(0,ed.Q)(p,g),getBalance:g=>getBalance(p,g),getBlock:g=>(0,eh.Q)(p,g),getBlockNumber:g=>getBlockNumber(p,g),getBlockTransactionCount:g=>getBlockTransactionCount(p,g),getBytecode:g=>getBytecode(p,g),getChainId:()=>(0,ew.L)(p),getEnsAddress:g=>getEnsAddress(p,g),getEnsAvatar:g=>getEnsAvatar(p,g),getEnsName:g=>getEnsName(p,g),getEnsResolver:g=>getEnsResolver(p,g),getEnsText:g=>getEnsText(p,g),getFeeHistory:g=>getFeeHistory(p,g),getFilterChanges:g=>getFilterChanges(p,g),getFilterLogs:g=>getFilterLogs(p,g),getGasPrice:()=>(0,ey.o)(p),getLogs:g=>getLogs(p,g),getStorageAt:g=>getStorageAt(p,g),getTransaction:g=>getTransaction(p,g),getTransactionConfirmations:g=>getTransactionConfirmations(p,g),getTransactionCount:g=>(0,eA.K)(p,g),getTransactionReceipt:g=>getTransactionReceipt(p,g),multicall:g=>multicall(p,g),readContract:g=>readContract(p,g),simulateContract:g=>simulateContract(p,g),verifyMessage:g=>verifyMessage(p,g),verifyTypedData:g=>verifyTypedData(p,g),uninstallFilter:g=>uninstallFilter(p,g),waitForTransactionReceipt:g=>waitForTransactionReceipt(p,g),watchBlocks:g=>(function(p,{blockTag:g="latest",emitMissed:w=!1,emitOnBegin:m=!1,onBlock:v,onError:x,includeTransactions:A=!1,poll:_,pollingInterval:B=p.pollingInterval}){let O,T,U;let F=void 0!==_?_:"webSocket"!==p.transport.type;return F?(()=>{let _=(0,eR.P)(["watchBlocks",p.uid,w,m,A,B]);return observe(_,{onBlock:v,onError:x},v=>poll(async()=>{try{let m=await (0,eh.Q)(p,{blockTag:g,includeTransactions:A});if(m.number&&O?.number){if(m.number===O.number)return;if(m.number-O.number>1&&w)for(let g=O?.number+1n;g<m.number;g++){let w=await (0,eh.Q)(p,{blockNumber:g,includeTransactions:A});v.onBlock(w,O),O=w}}(!O?.number||"pending"===g&&!m?.number||m.number&&m.number>O.number)&&(v.onBlock(m,O),O=m)}catch(p){v.onError?.(p)}},{emitOnBegin:m,interval:B}))})():(T=!0,U=()=>T=!1,(async()=>{try{let{unsubscribe:g}=await p.transport.subscribe({params:["newHeads"],onData(g){if(!T)return;let w=p.chain?.formatters?.block?.format||eT.Z,m=w(g.result);v(m,O),O=m},onError(p){x?.(p)}});U=g,T||U()}catch(p){x?.(p)}})(),U)})(p,g),watchBlockNumber:g=>watchBlockNumber(p,g),watchContractEvent:g=>(function(p,{abi:g,address:w,args:m,batch:v=!0,eventName:x,onError:A,onLogs:_,pollingInterval:B=p.pollingInterval,strict:O}){let T=(0,eR.P)(["watchContractEvent",w,m,v,p.uid,x,B]),U=O??!1;return observe(T,{onLogs:_,onError:A},A=>{let _,O;let T=!1,F=poll(async()=>{if(!T){try{O=await createContractEventFilter(p,{abi:g,address:w,args:m,eventName:x,strict:U})}catch{}T=!0;return}try{let B;if(O)B=await getFilterChanges(p,{filter:O});else{let v=await getBlockNumber(p);B=_&&_!==v?await getLogs(p,{address:w,args:m,fromBlock:_+1n,toBlock:v,event:(0,ec.m)({abi:g,name:x})}):[],_=v}if(0===B.length)return;v?A.onLogs(B):B.forEach(p=>A.onLogs([p]))}catch(p){A.onError?.(p)}},{emitOnBegin:!0,interval:B});return async()=>{O&&await uninstallFilter(p,{filter:O}),F()}})})(p,g),watchEvent:g=>(function(p,{address:g,args:w,batch:m=!0,event:v,onError:x,onLogs:A,pollingInterval:_=p.pollingInterval,strict:B}){let O=(0,eR.P)(["watchEvent",g,w,m,p.uid,v,_]),T=B??!1;return observe(O,{onLogs:A,onError:x},x=>{let A,B;let O=!1,U=poll(async()=>{if(!O){try{B=await createEventFilter(p,{address:g,args:w,event:v,strict:T})}catch{}O=!0;return}try{let _;if(B)_=await getFilterChanges(p,{filter:B});else{let m=await getBlockNumber(p);_=A&&A!==m?await getLogs(p,{address:g,args:w,fromBlock:A+1n,toBlock:m,event:v}):[],A=m}if(0===_.length)return;m?x.onLogs(_):_.forEach(p=>x.onLogs([p]))}catch(p){x.onError?.(p)}},{emitOnBegin:!0,interval:_});return async()=>{B&&await uninstallFilter(p,{filter:B}),U()}})})(p,g),watchPendingTransactions:g=>(function(p,{batch:g=!0,onError:w,onTransactions:m,poll:v,pollingInterval:x=p.pollingInterval}){let A,_;let B=void 0!==v?v:"webSocket"!==p.transport.type;return B?(()=>{let v=(0,eR.P)(["watchPendingTransactions",p.uid,g,x]);return observe(v,{onTransactions:m,onError:w},w=>{let m;let v=poll(async()=>{try{if(!m)try{m=await createPendingTransactionFilter(p);return}catch(p){throw v(),p}let x=await getFilterChanges(p,{filter:m});if(0===x.length)return;g?w.onTransactions(x):x.forEach(p=>w.onTransactions([p]))}catch(p){w.onError?.(p)}},{emitOnBegin:!0,interval:x});return async()=>{m&&await uninstallFilter(p,{filter:m}),v()}})})():(A=!0,_=()=>A=!1,(async()=>{try{let{unsubscribe:g}=await p.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!A)return;let g=p.result;m([g])},onError(p){w?.(p)}});_=g,A||_()}catch(p){w?.(p)}})(),_)})(p,g)});function createPublicClient({batch:p,chain:g,key:w="public",name:m="Public Client",transport:v,pollingInterval:x}){return(0,O.e)({batch:p,chain:g,key:w,name:m,pollingInterval:x,transport:v,type:"publicClient"}).extend(publicActions)}var eN=w(62635),eM=w(14160);function fallback(p,g={}){let{key:w="fallback",name:m="Fallback",rank:v=!1,retryCount:x,retryDelay:A}=g;return({chain:g,pollingInterval:_=4e3,timeout:B})=>{let O=p,onResponse=()=>{},T=(0,eM.q)({key:w,name:m,async request({method:p,params:w}){let fetch=async(m=0)=>{let v=O[m]({chain:g,retryCount:0,timeout:B});try{let g=await v.request({method:p,params:w});return onResponse({method:p,params:w,response:g,transport:v,status:"success"}),g}catch(g){if(onResponse({error:g,method:p,params:w,transport:v,status:"error"}),(0,eN.y)(g)||m===O.length-1)throw g;return fetch(m+1)}};return fetch()},retryCount:x,retryDelay:A,type:"fallback"},{onResponse:p=>onResponse=p,transports:O.map(p=>p({chain:g,retryCount:0}))});if(v){let p="object"==typeof v?v:{};!function({chain:p,interval:g=4e3,onTransports:w,sampleCount:m=10,timeout:v=1e3,transports:x,weights:A={}}){let{stability:_=.7,latency:B=.3}=A,O=[],rankTransports_=async()=>{let A=await Promise.all(x.map(async g=>{let w,m;let x=g({chain:p,retryCount:0,timeout:v}),A=Date.now();try{await x.request({method:"net_listening"}),m=1}catch{m=0}finally{w=Date.now()}let _=w-A;return{latency:_,success:m}}));O.push(A),O.length>m&&O.shift();let T=Math.max(...O.map(p=>Math.max(...p.map(({latency:p})=>p)))),U=x.map((p,g)=>{let w=O.map(p=>p[g].latency),m=w.reduce((p,g)=>p+g,0)/w.length,v=O.map(p=>p[g].success),x=v.reduce((p,g)=>p+g,0)/v.length;return 0===x?[0,g]:[B*(1-m/T)+_*x,g]}).sort((p,g)=>g[0]-p[0]);w(U.map(([,p])=>x[p])),await (0,eO.D)(g),rankTransports_()};rankTransports_()}({chain:g,interval:p.interval??_,onTransports:p=>O=p,sampleCount:p.sampleCount,timeout:p.timeout,transports:O,weights:p.weights})}return T}}var e$=w(88822);let UrlRequiredError=class UrlRequiredError extends X.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};var eD=w(68583);function withTimeout(p,{errorInstance:g,timeout:w,signal:m}){return new Promise((v,x)=>{(async()=>{let A;try{let _=new AbortController;w>0&&(A=setTimeout(()=>{m?_.abort():x(g)},w)),v(await p({signal:_?.signal}))}catch(p){"AbortError"===p.name&&x(g),x(p)}finally{clearTimeout(A)}})()})}let ej=0;async function http(p,{body:g,fetchOptions:w={},timeout:m=1e4}){let{headers:v,method:x,signal:A}=w;try{let _;let B=await withTimeout(async({signal:_})=>{let B=await fetch(p,{...w,body:Array.isArray(g)?(0,eR.P)(g.map(p=>({jsonrpc:"2.0",id:ej++,...p}))):(0,eR.P)({jsonrpc:"2.0",id:ej++,...g}),headers:{...v,"Content-Type":"application/json"},method:x||"POST",signal:A||(m>0?_:void 0)});return B},{errorInstance:new e$.W5({body:g,url:p}),timeout:m,signal:!0});if(_=B.headers.get("Content-Type")?.startsWith("application/json")?await B.json():await B.text(),!B.ok)throw new e$.Gg({body:g,details:(0,eR.P)(_.error)||B.statusText,headers:B.headers,status:B.status,url:p});return _}catch(w){if(w instanceof e$.Gg||w instanceof e$.W5)throw w;throw new e$.Gg({body:g,details:w.message,url:p})}}let eL=new Map;async function getSocket(p){let g=new URL(p),m=g.toString(),v=eL.get(m);if(v)return v;let{schedule:x}=(0,eD.S)({id:m,fn:async()=>{let p=await w.e(289).then(w.bind(w,55289));p=p.default?.constructor?p.default:p.WebSocket;let x=new p(g),A=new Map,_=new Map,onMessage=({data:p})=>{let g=JSON.parse(p),w="eth_subscription"===g.method,m=w?g.params.subscription:g.id,v=w?_:A,x=v.get(m);x&&x({data:p}),w||v.delete(m)},onClose=()=>{eL.delete(m),x.removeEventListener("close",onClose),x.removeEventListener("message",onMessage)};return x.addEventListener("close",onClose),x.addEventListener("message",onMessage),x.readyState===p.CONNECTING&&await new Promise((p,g)=>{x&&(x.onopen=p,x.onerror=g)}),v=Object.assign(x,{requests:A,subscriptions:_}),eL.set(m,v),[v]}}),[A,[_]]=await x();return _}async function webSocketAsync(p,{body:g,timeout:w=1e4}){return withTimeout(()=>new Promise(w=>eU.webSocket(p,{body:g,onResponse:w})),{errorInstance:new e$.W5({body:g,url:p.url}),timeout:w})}let eU={http,webSocket:function(p,{body:g,onResponse:w}){if(p.readyState===p.CLOSED||p.readyState===p.CLOSING)throw new e$.c9({body:g,url:p.url,details:"Socket is closed."});let m=ej++,callback=({data:v})=>{let x=JSON.parse(v);("number"!=typeof x.id||m===x.id)&&(w?.(x),"eth_subscribe"===g.method&&"string"==typeof x.result&&p.subscriptions.set(x.result,callback),"eth_unsubscribe"===g.method&&p.subscriptions.delete(g.params?.[0]))};return p.requests.set(m,callback),p.send(JSON.stringify({jsonrpc:"2.0",...g,id:m})),p},webSocketAsync};var eF=w(11588),ez=w(58617);let subscribeWithSelector=p=>(g,w,m)=>{let v=m.subscribe;m.subscribe=(p,g,w)=>{let x=p;if(g){let v=(null==w?void 0:w.equalityFn)||Object.is,A=p(m.getState());x=w=>{let m=p(w);if(!v(A,m)){let p=A;g(A=m,p)}},(null==w?void 0:w.fireImmediately)&&g(A,A)}return v(x)};let x=p(g,w,m);return x},toThenable=p=>g=>{try{let w=p(g);if(w instanceof Promise)return w;return{then:p=>toThenable(p)(w),catch(p){return this}}}catch(p){return{then(p){return this},catch:g=>toThenable(g)(p)}}},oldImpl=(p,g)=>(w,m,v)=>{let x,A,_={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:p=>p,version:0,merge:(p,g)=>({...g,...p}),...g},B=!1,O=new Set,T=new Set;try{x=_.getStorage()}catch(p){}if(!x)return p((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${_.name}', the given storage is currently unavailable.`),w(...p)},m,v);let U=toThenable(_.serialize),setItem=()=>{let p;let g=_.partialize({...m()}),w=U({state:g,version:_.version}).then(p=>x.setItem(_.name,p)).catch(g=>{p=g});if(p)throw p;return w},F=v.setState;v.setState=(p,g)=>{F(p,g),setItem()};let z=p((...p)=>{w(...p),setItem()},m,v),hydrate=()=>{var p;if(!x)return;B=!1,O.forEach(p=>p(m()));let g=(null==(p=_.onRehydrateStorage)?void 0:p.call(_,m()))||void 0;return toThenable(x.getItem.bind(x))(_.name).then(p=>{if(p)return _.deserialize(p)}).then(p=>{if(p){if("number"!=typeof p.version||p.version===_.version)return p.state;if(_.migrate)return _.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(p=>{var g;return w(A=_.merge(p,null!=(g=m())?g:z),!0),setItem()}).then(()=>{null==g||g(A,void 0),B=!0,T.forEach(p=>p(A))}).catch(p=>{null==g||g(void 0,p)})};return v.persist={setOptions:p=>{_={..._,...p},p.getStorage&&(x=p.getStorage())},clearStorage:()=>{null==x||x.removeItem(_.name)},getOptions:()=>_,rehydrate:()=>hydrate(),hasHydrated:()=>B,onHydrate:p=>(O.add(p),()=>{O.delete(p)}),onFinishHydration:p=>(T.add(p),()=>{T.delete(p)})},hydrate(),A||z},newImpl=(p,g)=>(w,m,v)=>{let x,A={storage:function(p,g){let w;try{w=p()}catch(p){return}return{getItem:p=>{var m;let parse=p=>null===p?null:JSON.parse(p,null==g?void 0:g.reviver),v=null!=(m=w.getItem(p))?m:null;return v instanceof Promise?v.then(parse):parse(v)},setItem:(p,m)=>w.setItem(p,JSON.stringify(m,null==g?void 0:g.replacer)),removeItem:p=>w.removeItem(p)}}(()=>localStorage),partialize:p=>p,version:0,merge:(p,g)=>({...g,...p}),...g},_=!1,B=new Set,O=new Set,T=A.storage;if(!T)return p((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${A.name}', the given storage is currently unavailable.`),w(...p)},m,v);let setItem=()=>{let p=A.partialize({...m()});return T.setItem(A.name,{state:p,version:A.version})},U=v.setState;v.setState=(p,g)=>{U(p,g),setItem()};let F=p((...p)=>{w(...p),setItem()},m,v),hydrate=()=>{var p,g;if(!T)return;_=!1,B.forEach(p=>{var g;return p(null!=(g=m())?g:F)});let v=(null==(g=A.onRehydrateStorage)?void 0:g.call(A,null!=(p=m())?p:F))||void 0;return toThenable(T.getItem.bind(T))(A.name).then(p=>{if(p){if("number"!=typeof p.version||p.version===A.version)return p.state;if(A.migrate)return A.migrate(p.state,p.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(p=>{var g;return w(x=A.merge(p,null!=(g=m())?g:F),!0),setItem()}).then(()=>{null==v||v(x,void 0),x=m(),_=!0,O.forEach(p=>p(x))}).catch(p=>{null==v||v(void 0,p)})};return v.persist={setOptions:p=>{A={...A,...p},p.storage&&(T=p.storage)},clearStorage:()=>{null==T||T.removeItem(A.name)},getOptions:()=>A,rehydrate:()=>hydrate(),hasHydrated:()=>_,onHydrate:p=>(B.add(p),()=>{B.delete(p)}),onFinishHydration:p=>(O.add(p),()=>{O.delete(p)})},A.skipHydration||hydrate(),x||F},persist=(p,g)=>"getStorage"in g||"serialize"in g||"deserialize"in g?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),oldImpl(p,g)):newImpl(p,g),createStoreImpl=p=>{let g;let w=new Set,setState=(p,m)=>{let v="function"==typeof p?p(g):p;if(!Object.is(v,g)){let p=g;g=(null!=m?m:"object"!=typeof v)?v:Object.assign({},g,v),w.forEach(w=>w(g,p))}},getState=()=>g,m={setState,getState,subscribe:p=>(w.add(p),()=>w.delete(p)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),w.clear()}};return g=p(setState,getState,m),m},createStore=p=>p?createStoreImpl(p):createStoreImpl;var eW=w(60263);function shallow(p,g){if(Object.is(p,g))return!0;if("object"!=typeof p||null===p||"object"!=typeof g||null===g)return!1;if(p instanceof Map&&g instanceof Map){if(p.size!==g.size)return!1;for(let[w,m]of p)if(!Object.is(m,g.get(w)))return!1;return!0}if(p instanceof Set&&g instanceof Set){if(p.size!==g.size)return!1;for(let w of p)if(!g.has(w))return!1;return!0}let w=Object.keys(p);if(w.length!==Object.keys(g).length)return!1;for(let m=0;m<w.length;m++)if(!Object.prototype.hasOwnProperty.call(g,w[m])||!Object.is(p[w[m]],g[w[m]]))return!1;return!0}function read_compressed_payload(p){var g;let w;return g=function(p){let g=0;function u16(){return p[g++]<<8|p[g++]}let w=u16(),m=1,v=[0,1];for(let p=1;p<w;p++)v.push(m+=u16());let x=u16(),A=g;g+=x;let _=0,B=0;function read_bit(){return 0==_&&(B=B<<8|p[g++],_=8),B>>--_&1}let O=2147483648-1,T=0;for(let p=0;p<31;p++)T=T<<1|read_bit();let U=[],F=0,z=2147483648;for(;;){let p=Math.floor(((T-F+1)*m-1)/z),g=0,x=w;for(;x-g>1;){let w=g+x>>>1;p<v[w]?x=w:g=w}if(0==g)break;U.push(g);let A=F+Math.floor(z*v[g]/m),_=F+Math.floor(z*v[g+1]/m)-1;for(;((A^_)&1073741824)==0;)T=T<<1&O|read_bit(),A=A<<1&O,_=_<<1&O|1;for(;A&~_&536870912;)T=1073741824&T|T<<1&O>>>1|read_bit(),A=A<<1^1073741824,_=(1073741824^_)<<1|1073741825;F=A,z=1+_-A}let W=w-4;return U.map(g=>{switch(g-W){case 3:return W+65792+(p[A++]<<16|p[A++]<<8|p[A++]);case 2:return W+256+(p[A++]<<8|p[A++]);case 1:return W+p[A++];default:return g-1}})}(function(p){let g=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((p,w)=>g[p.charCodeAt(0)]=w);let w=p.length,m=new Uint8Array(6*w>>3);for(let v=0,x=0,A=0,_=0;v<w;v++)_=_<<6|g[p.charCodeAt(v)],(A+=6)>=8&&(m[x++]=_>>(A-=8));return m}(p)),w=0,()=>g[w++]}function read_sorted(p,g=0){let w=[];for(;;){let m=p(),v=p();if(!v)break;g+=m;for(let p=0;p<v;p++)w.push(g+p);g+=v+1}return w}function read_sorted_arrays(p){return read_array_while(()=>{let g=read_sorted(p);if(g.length)return g})}function read_mapped(p){let g=[];for(;;){let w=p();if(0==w)break;g.push(function(p,g){let w=1+g(),m=g(),v=read_array_while(g);return read_transposed(v.length,1+p,g).flatMap((p,g)=>{let[x,...A]=p;return Array(v[g]).fill().map((p,g)=>{let v=g*m;return[x+g*w,A.map(p=>p+v)]})})}(w,p))}for(;;){let w=p()-1;if(w<0)break;g.push(read_transposed(1+p(),1+w,p).map(p=>[p[0],p.slice(1)]))}return g.flat()}function read_array_while(p){let g=[];for(;;){let w=p(g.length);if(!w)break;g.push(w)}return g}function read_transposed(p,g,w){let m=Array(p).fill().map(()=>[]);for(let v=0;v<g;v++)(function(p,g){let w=Array(p);for(let v=0,x=0;v<p;v++){var m;w[v]=x+=1&(m=g())?~m>>1:m>>1}return w})(p,w).forEach((p,g)=>m[g].push(p));return m}var eq=read_compressed_payload("AEgSbwjEDVYByQKaAQsBOQDpATQAngDUAHsAoABoANQAagCNAEQAhABMAHIAOwA9ACsANgAmAGIAHgAvACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGAAeABMAFwAXAA0ADgAWAA8AFAAVBFsF1QEXE0o3xAXUALIArkABaACmAgPGAK6AMDAwMAE/qAYK7P4HQAblMgVYBVkAPSw5Afa3EgfJwgAPA8meNALGCjACjqIChtk/j2+KAsXMAoPzASDgCgDyrgFCAi6OCkCQAOQA4woWABjVuskNDD6eBBx4AP4COhi+D+wKBirqBgSCaA0cBy4ArABqku+mnIAAXAaUJAbqABwAPAyUFvyp/Mo8INAIvCoDshQ8APcubKQAon4ZABgEJtgXAR4AuhnOBPsKIE04CZgJiR8cVlpM5INDABQADQAWAA9sVQAiAA8ASO8W2T30OVnKluYvChEeX05ZPe0AFAANABYAD2wgXUCYAMPsABwAOgzGFryp/AHauQVcBeMC0KACxLEKTR2kZhR0Gm5M9gC8DmgC4gAMLjSKF8qSAoF8ARMcAL4OaALiAAwuAUlQJpJMCwMt/AUpCthqGK4B2EQAciwSeAIyFiIDKCi6OGwAOuIB9iYAyA7MtgEcZIIAsgYABgCK1EoFHNZsGACoKNIBogAAAAAAKy4DnABoAQoaPu43dQQZGACrAcgCIgDgLBJ0OvRQsTOiKDVJBfsoBVoFWbC5BWo7XkITO1hCmHuUZmCh+QwUA8YIJvJ4JASkTAJUVAJ2HKwoAZCkpjZcA0YYBIRiCgDSBqxAMCQHKgI6XgBsAWIgcgCEHhoAlgFKuAAoahgBsMYDOC4iRFQBcFoGZgJmAPJKGAMqAgYASkIArABeAHQALLYGCPTwGo6AAAAKIgAqALQcSAHSAdwIDDKXeYHpAAsAEgA1AD4AOTR3etTBEGAQXQJNCkxtOxUMAq0PpwvmERYM0irM09kANKoH7ANUB+wDVANUB+wH7ANUB+wDVANUA1QDVBwL8BvUwRBgD0kEbgWPBYwE1wiEJkoRggcpCNNUDnQfHEgDRgD9IyZJHTuUMwwlQ0wNTQQH/TZDbKh9OQNIMaxU9pCjA8wyUDltAh5yEqEAKw90HTW2Tn96SHGhCkxPr7WASWNOaAK/Oqk/+QoiCZRvvHdPBj4QGCeiEPQMMAGyATgN6kvVBO4GOATGH3oZFg/KlZkIoi3aDOom4C6egFcj8iqABepL8TzaC0pRZQ9WC2IJ4DpggUsDHgEKIogK2g02CGoQ8ArGaA3iEUIHNgPSSZcAogb+Cw4dMhWyJg1iqQsGOXQG+BrzC4wmrBMmevkF0BoeBkoBJhr8AMwu5IWtWi5cGU9cBgALIiPEFKVQHQ0iQLR4RRoYBxIlpgKOQ21KhFEzHpAh8zw6DWMuEFF5B/I8AhlMC348m0aoRQsRzz6KPUUiRkwpBDJ8LCwniAnMD4IMtnxvAVYJHgmuDG4TLhEUN8IINgcWKpchJxIIHkaSYJcE9JwD8BPOAwgFPAk+BxADshwqEysVJgUKgSHUAvA20i6wAoxWfQEUBcgPIh/cEE1H3Q7mCJgCYgOAJegAKhUeABQimAhAYABcj9VTAi7ICMRqaSNxA2QU5F4RcAeODlQHpBwwFbwc3nDFXgiGBSigrAlYAXIJlgFcBOAIBjVYjJ0gPmdQi1UYmCBeQTxd+QIuDGIVnES6h3UCiA9oEhgBMgFwBzYM/gJ0EeoRaBCSCOiGATWyM/U6IgRMIYAgDgokA0xsywskJvYM9WYBoBJfAwk0OnfrZ6hgsyEX+gcWMsJBXSHuC49PygyZGr4YP1QrGeEHvAPwGvAn50FUBfwDoAAQOkoz6wS6C2YIiAk8AEYOoBQH1BhnCm6MzQEuiAG0lgNUjoACbIwGNAcIAGQIhAV24gAaAqQIoAACAMwDVAA2AqoHmgAWAII+AToDJCwBHuICjAOQCC7IAZIsAfAmBBjADBIA9DRuRwLDrgKAZ2afBdpVAosCRjIBSiIEAktETgOsbt4A2ABIBhDcRAESqEfIF+BAAdxsKADEAPgAAjIHAj4BygHwagC0AVwLLgmfsLIBSuYmAIAAEmgB1AKGANoAMgB87gFQAEoFVvYF0AJMRgEOLhUoVF4BuAMcATABCgB2BsiKosYEHARqB9ACEBgV3gLvKweyAyLcE8pCwgK921IAMhMKNQqkCqNgWF0wAy5vPU0ACx+lPsQ/SwVOO1A7VTtQO1U7UDtVO1A7VTtQO1UDlLzfvN8KaV9CYegMow3RRMU6RhPYYE5gLxPFLbQUvhXLJVMZOhq5JwIl4VUGDwEt0GYtCCk0che5ADwpZYM+Y4MeLQpIHORTjlT1LRgArkufM6wNqRsSRD0FRHXqYicWCwofAmR+AmI/WEqsWDcdAqH0AmiVAmYGAp+BOBgIAmY4AmYjBGsEfAN/EAN+jzkDOXQUOX86ICACbBoCMjM4BwJtxAJtq+yHMGRCKAFkANsA3gBHAgeVDIoA+wi/AAqyAncsAnafPAJ5SEACeLcaWdhFq0bwAnw8AnrFAn0GAnztR/1IemAhACgSSVVKWBIUSskC0P4C0MlLJAOITAOH40TCkS8C8p5dAAMDq0vLTCoiAMxNSU2sAos8AorVvhgEGkBkArQCjjQCjlk9lH4CjtYCjll1UbFTMgdS0VSCApP4ApMJAOYAGVUbVaxVzQMsGCmSgzLeeGNFODYCl5wC769YHqUAViIClowClnmZAKZZqVoGfkoAOAKWsgKWS1xBXM4CmcgCmWFcx10EFgKcmDm/OpoCnBMCn5gCnrWHABoMLicMAp3uAp6PALI6YTFh7AKe0AKgawGmAp6cHAKeS6JjxWQkIigCJ6wCJnsCoPgCoEnUAqYsAqXLAqf8AHoCp+9oeWiuAABGahlqzgKs4AKsqwKtZAKs/wJXGgJV2QKx3tQDH0tslAKyugoCsuUUbN1tYG1FXAMlygK2WTg8bo0DKUICuFsCuUQSArkndHAzcN4CvRYDLa8DMg4CvoVx/wMzbgK+F3Mfc0wCw8gCwwFzf3RIMkJ03QM8pAM8lwM9vALFeQLGRALGDYYCyGZOAshBAslMAskrAmSaAt3PeHZeeKt5IkvNAxigZv8CYfEZ8JUhewhej164DgLPaALPaSxIUM/wEJwAw6oCz3ABJucDTg9+SAIC3CQC24cC0kwDUlkDU1wA/gNViYCGPMgT6l1CcoLLg4oC2sQC2duEDYRGpzkDhqIALANkC4ZuVvYAUgLfYgLetXB0AuIs7REB8y0kAfSYAfLPhALr8ALpbXYC6vYC6uEA9kQBtgLuhgLrmZanlwAC7jwDhd2YdnDdcZ4C8wAAZgOOE5mQAvcQA5FrA5KEAveVAvnWAvhjmhmaqLg0mxsDnYAC/vcBGAA2nxmfsAMFigOmZwOm1gDOwgMGZ6GFogIGAwxGAQwBHAdqBl62ZAIAuARovA6IHrAKABRyNgAgAzASSgOGfAFgJB4AjOwAHgDmoAScjgi0BhygwgCoBRK86h4+PxZ5BWk4P0EsQiJCtV9yEl+9AJbGBTMAkE0am7o7J2AzErrQDjAYxxiKyfcFWAVZBVgFWQVkBVkFWAVZBVgFWQVYBVkFWAVZRxYI2IZoAwMDCmVe6iwEygOyBjC8vAC8BKi8AOhBKhazBUc+aj5xQkBCt192OF/pAFgSM6wAjP/MbMv9puhGez4nJAUsFyg3Nn5u32vB8hnDLGoBbNdvMRgFYAVrycLJuQjQSlwBAQEKfV5+jL8AND+CAAQW0gbmriQGAIzEDAMCDgDlZh4+JSBLQrJCvUI5JF8oYDcoOSQJwj4KRT9EPnk+gj5xPnICikK9SkM8X8xPUGtOCy1sVTBrDG8gX+E0OxwJaJwKYyQsPR4nQqxCvSzMAsv9X8oPIC8KCQoAACN+nt9rOy5LGMmsya0JZsLMzQphQWAP5hCkEgCTjh5GQiYbqm06zjkKND9EPnFCQBwICx5NSG1cLS5a4rwTCn7uHixCQBxeCUsKDzRVREM4BTtEnC0KghwuQkAb9glUIyQZMTIBBo9i8F8KcmTKYAxgLiRvAERgGjoDHB9gtAcDbBFmT2BOEgIAZOhgFmCWYH5gtGBMYJJpFhgGtg/cVqq8WwtDF6wBvCzOwgMgFgEdBB8BegJtMDGWU4EBiwq5SBsA5SR0jwvLDqdN6wGcAoidUAVBYAD4AD4LATUXWHsMpg0lILuwSABQDTUAFhO4NVUC0wxLZhEcANlPBnYECx9bADIAtwKbKAsWcKwzOaAaAVwBhwn9A9ruEAarBksGugAey1aqWwq7YhOKCy1ADrwBvAEjA0hbKSkpIR8gIi0TJwciDY4AVQJvWJFKlgJvIA9ySAHUdRDPUiEaqrFN6wcSBU1gAPgAPgsBewAHJW0LiAymOTEuyLBXDgwAYL0MAGRKaFAiIhzAADIAtwKbKC08D88CkRh8ULxYyXRzjtilnA72mhU+G+0S2hIHDxwByAk7EJQGESwNNwwAPAC0zwEDAKUA4gCbizAAFQBcG8cvbXcrDsIRAzwlRNTiHR8MG34CfATCC6vxbQA4Oi4Opzkuz6IdB7wKABA7Ls8SGgB9rNsdD7wbSBzOoncfAT4qYB0C7KAJBE3z5R9mDL0M+wg9Cj8ABcELPgJMDbwIvQ09CT0KvS7PoisOvAaYAhwPjBriBBwLvBY8AKELPBC8BRihe90AO2wMPQACpwm9BRzR9QYFB2/LBnwAB7wSXBISvQECAOsCAAB1FVwHFswV/HAXvBg8AC68AuyovAAevAJWISuAAAG8AALkFT0VvCvso7zJqDwEAp8nTAACXADn3hm8CaVcD7/FAPUafAiiBQv/cQDfvKe8GNwavKOMeXMG/KmchAASvAcbDAADlABtvAcAC7ynPAIaPLsIopzLDvwHwak8AOF8L7dtvwNJAAPsABW8AAb8AAm8AGmMABq8AA68Axi8jmoV/AABXAAObAAuTB8ABrwAF7wIIgANSwC6vCcAA7wADpwq7ACyWwAcHAAbvAAB7AqiAAXHCxYV3AAHnABCvAEDAGm8AAt8AB28AAi8CaIABcsAbqAZ1gCSCCIABcsAATwAB9wAHZwIIgAGmwAJfAAbLABtHADmvIEACFwACDwAFLwAaPwJIgAGywDjjAAJPAuiDsX7YAAHPABunUBJAEgACrwFAAM8AAmuAzgABxwAGXwAAgym/AAKHAAKPAAJ/KfsBrwACRwAAwwAEDwBABQ8ABFsAA+MAA3sAA28ABkMBxYcABU8AG6cFrQBvAC7ABM8BABpLAsA4UwAAjwABFMAF3wFHAAG0QAYvB8BfClTADpGALAJBw4McwApK3EBpQYIXwJtJA0ACghwTG1gK4oggRVjLjcDogq1AALZABcC/ARvAXdzSFMVIgNQAhY/AS0GBHRHvnxTe0EAKgAyAvwAVAvcAHyRLQEsAHfmDhIzRwJLAFgGAAJRAQiLzQB5PAQhpgBbANcWAJZpOCCMAM5ssgDQ1RcJw3Z0HBlXHgrSAYmRrCNUVE5JEz3DivoAgB04QSos4RKYUABzASosMSlDGhADMVYE+MbvAExm3QBrAnICQBF7Osh4LzXWBhETIAUVCK6v/xPNACYAAQIbAIYAiQCONgDjALQA1QCdPQC7AKsApgChAOcAnwDTAJwA4AEBAPwAwAB6AFsAywDNAPwA1wDrAIkAogEqAOMA2ADVBAIIKzTT09PTtb/bzM/NQjEWAUsBVS5GAVMBYgFhAVQBRUpCRGcMAUwUBgkEMzcMBwAgDSQmKCs3OTk8PDw9Pg0/HVBQUFBSUlFSKFNUVlVVHFxgYF9hYCNlZ29ucXFxcXFxc3Nzc3Nzc3Nzc3N1dXZ1dFsAPesAQgCTAHEAKwBf8QCHAFAAUAAwAm/oAIT+8fEAXQCM6wCYAEgAWwBd+PipAH4AfgBiAE8AqgAdAK8AfAI5AjwA9QDgAPcA9wDhAPgA4gDiAOEA3wAoAnQBSgE5ATcBTQE3ATcBNwEyATEBMQExARUBURAAKgkBAEwYCxcEFhcPAIcAjwCfAEoAYxkCKgBvAGgAkAMOAyArAxpCP0gqAIoCSADAAlACnQC5Ao8CjwKPAo8CjwKPAoQCjwKPAo8CjwKPAo8CjgKOApECmQKQAo8CjwKNAo0CjQKNAosCjgJuAc0CkAKYAo8CjwKOF3oMAPcGA5gCWgIzGAFNETYC2xILLBQBRzgUTpIBdKU9AWJaAP4DOkgA/wCSKh4ZkGsAKmEAagAvAIoDlcyM8K+FWwa7LA/DEgKe1nUrCwQkWwGzAN5/gYB/gX+Cg4N/hIeFf4aJh4GIg4mDin+Lf4x/jYuOf49/kIORf5J/k3+Uf5WElomXg5h/AIMloQCEBDwEOQQ7BD4EPARCBD8EOgRABEIEQQQ9BD8EQgCkA4gAylIA0AINAPdbAPcBGgD3APUA9QD2APXVhSRmvwD3APUA9QD2APUdAIpbAPcAigEaAPcAigLtAPcAitWFJGa/HQD4WwEaAPcA9wD1APUA9gD1APgA9QD1APYA9dWFJGa/HQCKWwEaAPcAigD3AIoC7QD3AIrVhSRmvx0CRAE3AksBOgJMwgOfAu0Dn9WFJGa/HQCKWwEaA58AigOfAIoC7QOfAIrVhSRmvx0EMQCKBDIAigeOMm4hLQCKAT9vBCQA/gDHWwMAVVv/FDMDAIoDPtkASgMAigMAl2dBtv/TrfLzakaPh3aztmIuZQrR3ER2n5Yo+qNR2jK/aP/V04UK1njIJXLgkab9PjOxyJDVbIN3R/FZLoZVl2kYFQIZ7V6LpRqGDt9OdDohnJKp5yX/HLj0voPpLrneDaN11t5W3sSM4ALscgSw8fyWLVkKa/cNcQmjYOgTLZUgOLi2F05g4TR0RfgZ4PBdntxdV3qvdxQt8DeaMMgjJMgwUxYN3tUNpUNx21AvwADDAIa0+raTWaoBXmShAl5AThpMi282o+WzOKMlxjHj7a+DI6AM6VI9w+xyh3Eyg/1XvPmbqjeg2MGXugHt8wW03DQMRTd5iqqOhjLvyOCcKtViGwAHVLyl86KqvxVX7MxSW8HLq6KCrLpB8SspAOHO9IuOwCh9poLoMEha9CHCxlRAXJNDobducWjqhFHqCkzjTM2V9CHslwq4iU19IxqhIFZMve15lDTiMVZIPdADXGxTqzSTv0dDWyk1ht430yvaYCy9qY0MQ3cC5c1uw4mHcTGkMHTAGC99TkNXFAiLQgw9ZWhwKJjGCe+J5FIaMpYhhyUnEgfrF3zEtzn40DdgCIJUJfZ0mo3eXsDwneJ8AYCr7Vx2eHFnt2H6ZEyAHs9JoQ4Lzh5zBoGOGwAz37NOPuqSNmZf51hBEovtpm2T1wI79OBWDyvCFYkONqAKGVYgIL0F+uxTcMLSPtFbiNDbBPFgip8MGDmLLHbSyGXdCMO6f7teiW9EEmorZ+75KzanZwvUySgjoUQBTfHlOIerJs6Y9wLlgDw18AB1ne0tZRNgGjcrqHbtubSUooEpy4hWpDzTSrmvqw0H9AoXQLolMt9eOM+l9RitBB1OBnrdC1XL4yLFyXqZSgZhv7FnnDEXLUeffb4nVDqYTLY6X7gHVaK4ZZlepja2Oe6OhLDI/Ve5SQTCmJdH3HJeb14cw99XsBQAlDy5s5kil2sGezZA3tFok2IsNja7QuFgM30Hff3NGSsSVFYZLOcTBOvlPx8vLhjJrSI7xrNMA/BOzpBIJrdR1+v+zw4RZ7ry6aq4/tFfvPQxQCPDsXlcRvIZYl+E5g3kJ+zLMZon0yElBvEOQTh6SaAdIO6BwdqJqfvgU+e8Y65FQhdiHkZMVt9/39N2jGd26J6cNjq8cQIyp6RonRPgVn2fl89uRDcQ27GacaN0MPrcNyRlbUWelKfDfyrNVVGBG5sjd3jXzTx06ywyzuWn5jbvEfPPCTbpClkgEu9oPLKICxU5HuDe3jA1XnvU85IYYhaEtOU1YVWYhEFsa4/TQj3rHdsU2da2eVbF8YjSI0m619/8bLMZu3xildwqM7zf1cjn4Whx0PSYXcY5bR7wEQfGC7CTOXwZdmsdTO8q3uGm7Rh/RfCWwpzBHCAaVfjxgibL5vUeL0pH6bzDmI9yCXKC/okkmbc28OJvI87L/bjFzpq0DHepw4kT1Od+fL7cyuFaRgfaUWB2++TCFvz11J0leEtrGkpccfX9z2LY39sph4PBHCjNOOkd0ybUm+ZzS8GkFbqMpq8uiX2yHpa0jllTLfGTDBMYR6FT5FWLLDPMkYxt1Q0eyMvxJWztDjy0m6VvZPvamrFXjHmPpU6WxrZqH6WW//I37RwvqPQhPz8I3RPuXAk1C94ZprQWm9iGM/KgiGDO6SV9sjp+Jmk4TBajMNJ5zzWZ1k1jrteQQBp9C2dOvmbIeeEME8y573Q8TgGe+ZCzutM45gYLBzYm2LNvgq2kebAbMpHRDSyh6dQ27GbsAAdCqQVVXWC1C+zpwBM2Lr4eqtobmmu1vJEDlIQR1iN8CUWpztq50z7FFQBn3SKViX6wSqzVQCoYvAjByjeSa+h1PRnYWvBinTDB9cHt4eqDsPS4jcD3FwXJKT0RQsl8EvslI2SFaz2OtmYLFV8FwgvWroZ3fKmh7btewX9tfL2upXsrsqpLJzpzNGyNlnuZyetg7DIOxQTMBR7dqlrTlZ6FWi1g4j1NSjA2j1Yd7fzTH6k9LxCyUCneAKYCU581bnvKih6KJTeTeCX4Zhme/QIz7w2o+AdSgtLAkdrLS9nfweYEqrMLsrGGSWXtgWamAWp6+x6GM/Z8jNw3BqPNQ39hrzYLECn3tPvh/LqKbRSCiDGauDKBBj/kGbpnM1Bb/my8hv4NWStclkwjfl57y4oNDgw1JAG9VOti3QVVoSziMEsSdfEjaCPIDb7SgpLXykQsM+nbqbt97I0mIlzWv0uqFobLMAq8Rd9pszUBKxFhBPwOjf//gVOz2r7URJ2OnpviCXv9iz3a4X/YLBYbXoYwxBv/Kq0a5s4utQHzoTerJ7PmFW/no/ZAsid/hRIV82tD+Qabh5F1ssIM8Ri3chu0PuPD3sSJRMjDoxLAbwUbroiPAz/V52e8s3DIixxlO7OrvhMj3qfzA0kKxzwicr5wJmZwJxTXgrwYsqhRvpgC2Nfdyd+TYYxJSZgk+gk2g9KyHSlwQVAyPtWWgvVGyVBqsU2LpDlLNosSAtolC1uBKt5pQZLhAxTjeGCWIC/HVpagc5rRwkgpCHKEsjA8d+scp8aiMewwQBhp5dYTV5t/Nvl+HbDMu8F3S0psPyZb1bSnqlHPFUnMQeQqSqwDBT23fJO9gO3aVaa1icrXU0PKwlMM5K+iL3ATcVq2fFWKk0irCTF4LDVDG4gUpkyplq6efcZS+WDR1woApjD18x+2JQR9oOXzuA7uy4b+/91WsJd/tSd1QcAH8PVPXApieA37B7YXPhDPH1azP3PKR+HfHmOoDYLeuKsIi/ssSsdYs62qJo14Hw1P2N/6zpr8F3FTWmJ4ysAVcl84Iv/tl///Z8FaAWbBQbyMNDZjrZ2JwdRjtd1jOeNumSodFtr4/Zf45iRJf/8HSW+KIB/+GlKu8Rv1BPLr/4duoL+kFPRqrstEr41gfJupoJRf4hcYDWX93FOcfEBiIivxtjtV8g7mvOReiamYWKE7vfPbv3v2L9Kwq3cIDFGLyhyfOGuf/9vA5muH6Pjg7B4SUj2ydDXra9fSBI+DrsNHA6l51wfHssJb+11TfNk7B8OleUe3Y+ZmHboMFHdv7FFP2cfISFyeAQR0sk/Xv62HBTdW4HmnGSLFk/cqyWVVFJkdIIa+4hos3JRHcqLoRKM5h2Qtk1RZtzISMtlXTfTqIc77YsCCgQD0r61jtxskCctwJOtjE/pL8wC4LBD4AZFjh2wzzFCrT/PNqW0/DeBbkfMfzVm9yy06WiF+1mTdNNEAytVtohBKg3brWd2VQa+aF+cQ0mW5CvbwOlWCT07liX226PjiVLwFCRs/Ax2/u+ZNPjrNFIWIPf5GjHyUKp60OeXe9F01f7IaPf/SDTvyDAf7LSWWejtiZcsqtWZjrdn6A2MqBwnSeKhrZOlUMmgMionmiCIvXqKZfmhGZ1MwD3uMF4n9KJcfWLA3cL5pq48tm5NDYNh3SS/TKUtmFSlQR89MR4+kxcqJgpGbhm9gXneDELkyqAN5nitmIzTscKeJRXqd64RiaOALR2d295NWwbjHRNG2AU5oR9OS2oJg/5CY6BFPc1JvD2Mxdhp2/MZdI8dLePxiP4KRIp8VXmqfg+jqd/RNG7GNuq1U2SiI4735Bdc0MVFx6mH5UOWEa5HuhYykd6t4M1gYLVS8m1B+9bUqi5DziQq7qT8d94cxB6AB4WqMCOF/zPPtRSZUUaMSsvHOWxGASufywTX8ogy6HgUf9p+Z30wUEosl8qgmwm6o2AV6nO9HKQjRHpN6SUegI5pvR61RLnUJ1lqCtmfcsRQutEizVpAaPXN7xMp5UQ5OSZK6tniCK9CpyMd7LjR6+MxfoMEDPpWdf2p2m5N3KO4QMxf+V7vGdYjemQczQ+m2MGIkFNYDMf0Yop2eSx81sP36WHUczqEhKysp2iJSYAvfgJjinKwToPvRKb+HBi+7cJ96S5ngfLOXaHAFRLkulo4TnXTFO51gX0TCCo4ZUHdbpdgkMEwUZAPjh6M+hA8DzycbtxAgH3uD6i0nN1aTiIuQ4BYCE9dEHHwAmINU+4YEWx4EC3OZwFGfYZMPLScVlb+BAAJeARUh+gdWA3/gRqCrf1jecgqeFf1MdzrrP4SVlGm5mMihSP+zYYksAB7O+SBPwNQqSNMiLnkviY/klwgcRmvqtCqeWeA0gjuir4CMZqmw/ntP6M+l0pdN8/P9xI53aP7x/zavJbbKOz8VzO/nXxIr1tjparMnqd6iWdByHKw4lF4p/u57Yv07WeZPDnRl7wgmDVZZ44fQsjdYO/gmXQ+940PRGst8UMQApFC4OOV22e4N+lVOPyFLAOj4t8R3PFw/FjbSWy0ELuAFReNkee8ORcBOT2NPDcs7OfpUmzvn/F9Czk9o9naMyVYy/j8I5qVFmQDFcptBp65J/+sJA3w/j6y/eqUkKxTsf0CZjtNdRSBEmJ2tmfgmJbqpcsSagk+Ul9qdyV+NnqFBIJZFCB1XwPvWGDBOjVUmpWGHsWA5uDuMgLUNKZ4vlq5qfzY1LnRhCc/mh5/EX+hzuGdDy5aYYx4BAdwTTeZHcZpl3X0YyuxZFWNE6wFNppYs3LcFJePOyfKZ8KYb7dmRyvDOcORLPH0sytC6mH1US3JVj6paYM1GEr+CUmyHRnabHPqLlh6Kl0/BWd3ebziDfvpRQpPoR7N+LkUeYWtQ6Rn5v5+NtNeBPs2+DKDlzEVR5aYbTVPrZekJsZ9UC9qtVcP99thVIt1GREnN8zXP8mBfzS+wKYym8fcW6KqrE702Zco+hFQAEIR7qimo7dd7wO8B7R+QZPTuCWm1UAwblDTyURSbd85P4Pz+wBpQyGPeEpsEvxxIZkKsyfSOUcfE3UqzMFwZKYijb7sOkzpou+tC4bPXey5GI1GUAg9c3vLwIwAhcdPHRsYvpAfzkZHWY20vWxxJO0lvKfj6sG2g/pJ1vd/X2EBZkyEjLN4nUZOpOO7MewyHCrxQK8d5aF7rCeQlFX+XksK6l6z971BPuJqwdjj68ULOj9ZTDdOLopMdOLL0PFSS792SXE/EC9EDnIXZGYhr52aQb+9b2zEdBSnpkxAdBUkwJDqGCpZk/HkRidjdp0zKv/Cm52EenmfeKX6HkLUJgMbTTxxIZkIeL/6xuAaAAHbA7mONVduTHNX/UJj1nJEaI7f3HlUyiqKn7VfBE+bdb4HWln1HPJx001Ulq1tOxFf8WZEARvq5Da1+pE7fPVxLntGACz3nkoLsKcPdUqdCwwiyWkmXTd5+bv3j7HaReRt3ESn783Ew3SWsvkEjKtbocNksbrLmV+GVZn1+Uneo35MT1/4r8fngQX5/ptORfgmWfF6KSB/ssJmUSijXxQqUpzkANEkSkYgYj560OOjJr6uqckFuO15TRNgABEwNDjus1V3q2huLPYERMCLXUNmJJpbMrUQsSO7Qnxta55TvPWL6gWmMOvFknqETzqzFVO8SVkovEdYatypLGmDy9VWfgAc0KyIChiOhbd7UlbAeVLPZyEDp4POXKBwN/KP5pT6Cyqs6yaI00vXMn1ubk9OWT9Q/O2t/C25qlnO/zO0xcBzpMBCAB8vsdsh3U8fnPX1XlPEWfaYJxKVaTUgfCESWl4CCkIyjE6iQ5JFcwU6S4/IH0/Agacp8d5Gzq2+GzPnJ7+sqk40mfFQpKrDbAKwLlr3ONEati2k/ycLMSUu7V/7BBkDlNyXoN9tvqXCbbMc4SSQXgC/DBUY9QjtrCtQ+susEomCq8xcNJNNMWCH31GtlTw2BdCXkJBjT+/QNWlBWwQ5SWCh1LdQ99QVii/DyTxjSR6rmdap3l3L3aiplQpPYlrzNm9er88fXd2+ao+YdUNjtqmxiVxmyYPzJxl67OokDcTezEGqldkGgPbRdXA+fGcuZVkembZByo7J1dMnkGNjwwCny+FNcVcWvWYL9mg8oF7jACVWI3bA64EXpdM8bSIEVIAs5JJH+LHXgnCsgcMGPZyAAVBncvbLiexzg9YozcytjPXVlAbQAC7Tc4S0C8QN4LlAGjj4pQAVWrwkaDoUYGxxvkCWKRRHkdzJB5zpREleBDL1oDKEvAqmkDibVC4kTqF89YO6laUjgtJPebBfzr16tg4t10GmN1sJ5vezk2sUOq8blCn5mPZyT3ltaDcddKupQjqusNM9wtFVD0ABzv17fZDn7GPT1nkCtdcgYejcK1qOcTGtPxnCX1rErEjVWCnEJv5HaOAUjgpiKQjUKkQi64D5g2COgwas8FcgIl0Pw95H9dWxE3QG0VbMNffh6BPlAojLDf4es2/5Xfq7hw5NGcON2g8Qsy2UQm94KddKyy3kdJxWgpNaEc15xcylbLC3vnT26u8qS90qc2MU8LdOJc5VPF5KnSpXIhnj1eJJ/jszjZ01oR6JDFJRoeTPO/wh4IPFbdG9KljuSzeuI92p8JF/bpgDE8wG86/W2EBKgPrmzdLijxssQn8mM44ky/KLGOJcrSwXIpZa/Z3v7W6HCRk7ewds99LTsUW1LbeJytw8Q/BFZVZyfO9BUHOCe2suuEkO8DU4fLX0IQSQ2TdOkKXDtPf3sNV9tYhYFueuPRhfQlEEy+aYM/MCz7diDNmFSswYYlZZPmKr2Q5AxLsSVEqqBtn6hVl1BCFOFExnqnIsmyY/NA8jXnDaNzr7Zv3hu+I1Mf/PJjk0gALN2G8ABzdf9FNvWHvZHhv6xIoDCXf964MxG92vGZtx/LYU5PeZqgly8tT5tGeQGeJzMMsJc5p+a5Rn2PtEhiRzo/5Owjy1n0Lzx3ev8GHQmeWb8vagG6O5Qk5nrZuQTiKODI4UqL0LLAusS2Ve7j1Ivdxquu1BR9Rc4QkOiUPwQXJv6du2E8i5pDhVoQpUhyMWGUT2O2YODIhjAfI71gxep5r5zAY7GBUZpy51hAw0pcCCrhOmU8Wp6ujQTdZQsCjtq6SHX8QAMNiPCIIkoxhHEZPgsBcOlP4aErJZPhF7qvx6gHrn8hEwPwYbx8YmT/n7lbcmTip1v8kgsrIjFTAlvLY4Nuil0KDmgz3svYs0ZJ3O3Is/vSx4xpxF1e2VAtZE8dJxGYEIhCSuPvCjP54l/NSNDnwlKvAW8mG+AQkgp7a87Igh26uKMFGD0PoPHTSvoWxiHuk+su8XkQiHIjeYKl/RdcOHpxhQH3zHCNE3aARm83Bl6zGxU/vMltlVPQhubcqhW4RYkl6uXk5JdP/QpzaKFpw2M8zvysv2qj7xaQECuu2akM0Cssj/uB9+wDR7uA6XOnLNaoczalHoMj33eiiu+DRaFsUmlmUZuh9bjDY4INMNSSAivSh03uJvny4Gj+D+neudoa7iJi7c4VFlZ/J5gUR82308zSNAt/ZroBXDWw0fV3eVPAn3aX0mtJabF6RsUZmL+Ehn+wn51/4QipMjD+6y64t7bjL6bjENan2prQ4h7++hBJ9NXvX8CUocJqMC937IasLzm5K0qwXeFMAimMHkEIQIQI2LrQ9sLBfXuyp66zWvlsh74GPv7Xpabj993pRNNDuFud5oIcn/92isbADXdpRPbjmbCNOrwRbxGZx2XmYNGMiV5kjF4IKyxCBvKier9U4uVoheCdmk83rp5G0PihAm2fAtczI4b9BWqX+nrZTrJX5kSwQddi93NQrXG+Cl3eBGNkM77VBsMpEolhXex1MVvMkZN9fG59GGbciH11FEXaY1MxrArovaSjE/lUUqBg2cZBNmiWbvzCHCPJ4RVGFK2dTbObM1m+gJyEX53fa7u3+TZpm74mNEzWbkVL4vjNwfL9uzRCu1cgbrNx5Yv5dDruNrIOgwIk+UZWwJfdbu/WHul6PMmRflVCIzd7B37Pgm/Up/NuCiQW7RXyafevN3AL6ycciCc4ZPlTRzEu+aURGlUBOJbUEsheX7PPyrrhdUt5JAG12EEEZpY/N3Vhbl5uLAfT0CbC2XmpnryFkxZmBTs5prvEeuf0bn73i3O82WTiQtJWEPLsBXnQmdnKhB06NbbhLtlTZYJMxDMJpFeajSNRDB2v61BMUHqXggUwRJ19m6p5zl51v11q34T74lTXdJURuV6+bg2D6qpfGnLy7KGLuLZngobM4pIouz4+n0/UzFKxDgLM4h+fUwKZozQ9UGrHjcif51Ruonz7oIVZ56xWtZS8z7u5zay6J2LD4gCYh2RXoBRLDKsUlZ80R8kmoxlJiL8aZCy2wCAonnucFxCLT1HKoMhbPKt34D97EXPPh0joO93iJVF1Uruew61Qoy3ZUVNX9uIJDt9AQWKLLo+mSzmTibyLHq0D6hhzpvgUgI6ekyVEL3FD+Fi5R3A8MRHPXspN1VyKkfRlC+OGiNgPC4NREZpFETgVmdXrQ2TxChuS3aY+Ndc7CiYv5+CmzfiqeZrWIQJW/C4RvjbGUoJFf1K6ZdR2xL/bG4kVq1+I4jQWX+26YUijpp+lpN7o5c6ZodXJCF56UkFGsqz44sIg8jrdWvbjRCxi2Bk0iyM3a7ecAV93zB6h1Ei38c0s6+8nrbkopArccGP8vntQe1bFeEh2nJIFOHX/k3/UHb5PtKGpnzbkmnRETMX+9X/QduLZWw/feklW/kH/JnzToJe9Kgu9Hct1UGbH5BPCLo4OOtQnZonW0xnyCcdtKyPQ/sbLiSTYJdSx4sJqWLMnfn6fIqPB3WAgk00J+fCOkomPHqtS67pf0mFmKoItYZUlJu6BihSZ8qve8+/X+LX1MhQXF95AshfUleCtmdn6l6QFXzLg2sgLn1oyVFuZecv7fzsIHzoRlAGp0gwYDOn1S4qabWvB5xUaE+Svw4KmjWtxdnuQbI32dw87D4N95u8qQRJTSQg0wLxOLkxSrPMLEn1UIhNKjAa9VLs3WLaXGrtCIt8bKY2AQP/ZdyRU6zT/E8qP2ltyBE2CCZPgWgEYDoJJO4n92y61ylNaSFXKohJhLjkfvYWm592539sIpmBNLlDo1bExFBfmHJJ0lFEiC/fj8v42OoMC9Mo3whIoWvyHfq6Uacqq55mzFf/EGC+NP/gHjhd6urc6R0hES27VXux7UY8CGKPohplWIZtTrFSaPWslCWy78E22Pw8fvReSUZx/txqLtHrFqg1DY/Eus6Iq1heZdrdcqE0/c971Bz1HW/XNXHsXpUIbI4kHdOfCc6T5zHZzvzQJB0ggMFL6IGPAilU9bj/ASdPk6fNvNtZqPuwEDhMBtBnhCexo6D6VAGIOPvJPPV523Y8R8a9vCqZbswSZKzOT1291BsUbmUWehtbb1fdRX9hiJKXvwr1QX6GjnZMgyMvnwOo2Dr24amr7FqEAbVeJAjRNOceM2EQ1Mna9fInqPJ5mh5X8CzT1aDOv08An0blz0fF5Gq4mS2cwq5glwIOlY5nznE8X4j/UdZ3FJsVIXte1JH0A7iibuPfazStM5O/Vo3KXIpXBeGORV0M9XDXFvsYZUHGvFCUubWzTw248EHE0cpQM2zNg6rjavreq3NHCAWsoZ7wvVy7l5gvtKRmIj1MnvfWEm0yFnGcuOq192350a5WefpfKCcX3Sn+AgHU+qnpstNtddbdVebagJU390lq9ko4aI9rqdaWXYG8tv5O/ZQHSqDRYHC6zfH10l5z++opso7aOSaIczlQ13iAzXvLdEu0V7kwNUZ1c8Y8aq7SeIEe5p902FlNkW8DnwHyueHchbK8vVFJfmr9mz7P8nUSccl1ULaoWMRSI1ls32kvlK0h46h3J25Yd9AzfcJbp9qYF/SEt3H5j69mMdcsNxZcAzT/A89ov3tglTX54y/EwjMfuoDoxPwLJDm5I7q6F9Kp469yNy1zSxz0N4HbRRBj9xFFuogvBspv7DXUNIsGxTINEQfmctb42XImWAODgARNo7dfcTqFKq6aTfivmvunLmzP9f8yLsJvXD3JbcPcDGNriMAcjzeDTNr65t8YB5tsnFDFLa0Uwmd2OvUdkLMX9TsAUYUfooSv47sw5J88j7CpahRjjO3/UhOXjTS39W5YZAel2KTbQd1h7INOw9P23GW7GDAe4agIUFHP48MZr7ubq0efFmmtwYMyk7D0r1oeG/CGOODgb9Ur+JMHxkwzPbtCX2ZnENQuI0RN5SyTIZuoY4XS9Rd/tPe3vNAZGSHM/YYwqs9xkkENx0O+eC2YVW1cwOJ3ckE890nbQeHLKlW15L0P0W2VliyYrfNr0nrIYddoRyGaCtj4OYd2MT7ebApqZOAQIaSHJM4mphhfjNjtnjg6YRyx9qM2FT3xOiYIMqXPFWdzhSgFF8ItocqVV09CmIoO8k6U/oJB7++wSX/YksxfPXHyjSgAGZOj1aKEq9fSvXBqtp2wu8/FxEf5AxapAD06pPGuLVUYLdgEzHR8wqRGYEwiUO9MyYbgswstuLYhwYFpSVKOdzAihZ9LuHtD598EGhINU9xc9xhL+QgTLAstmPIvvm2xyRw/WTUPXkP3ZHu6GyPmj5xFH9/QGpkglKXRVUBgVmLOJx8uZO2AstxQYocZH2JhORlxawj66BAXUEs7K/gPxINIRAFyK3WLuyq9oBTF9wEbnmCot82WjIg7CPNwYK3KrZMrKAz5yFszg4wCVLJVnIL8+OYA0xRDH8cHQjQUiQ2i1mr/be32k/3Xej9sdf3iuGvZHyLFSJvPSqz/wltnxumTJYKZsrWXtx/Rmu39jjV9lFaJttfFn57/No2h/unsJmMHbrnZ8csxkp5HQ4xR1s0HH+t3Iz82a3iQWTUDGq/+l2W3TUYLE8zNdL8Y+5oXaIH/Y2UUcX67cXeN4WvENZjz4+8q7vjhowOI3rSjFhGZ6KzwmU7+5nFV+kGWAZ5z2UWvzq0TK0pk1hPwAN4jbw//1CApRvIaIjhSGhioY6TUmsToek9cF9XjJdHvLPcyyCV3lbR5Jiz/ts46ay2F820VjTXvllElwrGzKcNSyvQlWDXdwrUINXmHorAM3fE19ngLZmgeUaCJLsSITf2VcfAOuWwX7mTPdP8Zb/04KqRniufCpwnDUk7sP0RX6cud/sanFMagnzKInSRVey0YzlVSOtA/AjrofmSH6RYbJQ8b4NDeTkIGc6247+Mnbez/qhJ9GAv9fGNFercPnnrf285Qgs+UqThLRgflcAKFuqWhLzZaR4QqvSwa3xe0LPkqj9xJWub195r7NrrR0e78FR+0mRBNMPsraqZctAUVAJfYKehTDV1MGGQSeDsOK9J3sbUuKRIS/WilX/64CBms9jCZocBlsBSZaIAjWm/SUZ8daWL2a/cJFyUOFqE3Epc2RWbtjNyPwOGpWtzu32kUooUqsJud7IV4E8rstUBXM7tGEtBx99x60g1duhyvxeKJSl8s5E34HTMmADT0836aEdg5Dv9rVyCz8i2REOmiz6wtIVFN0HsjAoN37SrY0bV1Ms8CRUILhvZvvRaDzoVCaSI0u8EPuTe4b7OPowgRGODl22UBBmHSTUY8e4DyL+Bc7bngo+2T8HtNvzyATSL5iJZgFPKpmUyZv54vVL90+/RQGATUmNKnrIvcJMYON9fl83naW5sf6hRkbbTC9RUEE6XADwjgA46wWfUQ+QWZl0J4PVTWAln/YfAz/SV3q3J9+yCYDleruoN5uoc/wT2f4YONGTb6zTGq3V+3JqzmCOjwebKln+fExVLN7sqtqfMnsKVXWbb2Ai5m3D/fCTgX7oKYzTZvj+m28XnDqPbXuP4MyWdmPezcesdrh7rCzA7BWdObiuyDEKjjzBbQ0qnuwjliz+b+j7aPMKlkXyIznV3tGzAfYwIbzGGt098oh4eq3ruDjdgHtjxfFCjHrjjRbHajoz/YOY4raojPFQ910GIlBV7hq47UDgpyajBxQUmD8NctiLV1rTSLAEsQDLTeRKcmPBMVMFF0SPBBhZ5oXoxtD3lMhuAQXmA+57OcciczVW9e9zwSIAHS+FJmvfXMJGF1dMBsIUMaPjvgaVqUc3p32qVCMQYFEiRLzlVSOGMCmv/HJIxAHe3mL/XnoZ1IkWLeRZfgyByjnDbbeRK5KL7bYHSVJZ9UFq+yCiNKeRUaYjgbC3hVUvfJAhy/QNl/JqLKVvGMk9ZcfyGidNeo/VTxK9vUpodzfQI9Z2eAre4nmrkzgxKSnT5IJ1D69oHuUS5hp7pK9IAWuNrAOtOH0mAuwCrY8mXAtVXUeaNK3OXr6PRvmWg4VQqFSy+a1GZfFYgdsJELG8N0kvqmzvwZ02Plf5fH9QTy6br0oY/IDsEA+GBf9pEVWCIuBCjsup3LDSDqI+5+0IKSUFr7A96A2f0FbcU9fqljdqvsd8sG55KcKloHIFZem2Wb6pCLXybnVSB0sjCXzdS8IKvE");let eH=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function quote_cp(p){return`{${p.toString(16).toUpperCase().padStart(2,"0")}}`}function str_from_cps(p){let g=p.length;if(g<4096)return String.fromCodePoint(...p);let w=[];for(let m=0;m<g;)w.push(String.fromCodePoint(...p.slice(m,m+=4096)));return w.join("")}var eQ=read_compressed_payload("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");function unpack_cc(p){return p>>24&255}function unpack_cp(p){return 16777215&p}let eG=new Map(read_sorted_arrays(eQ).flatMap((p,g)=>p.map(p=>[p,g+1<<24]))),eK=new Set(read_sorted(eQ)),eV=new Map,eZ=new Map;for(let[p,g]of read_mapped(eQ)){if(!eK.has(p)&&2==g.length){let[w,m]=g,v=eZ.get(w);v||(v=new Map,eZ.set(w,v)),v.set(m,p)}eV.set(p,g.reverse())}function is_hangul(p){return p>=44032&&p<55204}function decomposed(p){let g=[],w=[],m=!1;function add(p){let w=eG.get(p);w&&(m=!0,p|=w),g.push(p)}for(let m of p)for(;;){if(m<128)g.push(m);else if(is_hangul(m)){let p=m-44032,g=p/588|0,w=p%588/28|0,v=p%28;add(4352+g),add(4449+w),v>0&&add(4519+v)}else{let p=eV.get(m);p?w.push(...p):add(m)}if(!w.length)break;m=w.pop()}if(m&&g.length>1){let p=unpack_cc(g[0]);for(let w=1;w<g.length;w++){let m=unpack_cc(g[w]);if(0==m||p<=m){p=m;continue}let v=w-1;for(;;){let w=g[v+1];if(g[v+1]=g[v],g[v]=w,!v||(p=unpack_cc(g[--v]))<=m)break}p=unpack_cc(g[w])}}return g}function nfc(p){return function(p){let g=[],w=[],m=-1,v=0;for(let x of p){let p=unpack_cc(x),A=unpack_cp(x);if(-1==m)0==p?m=A:g.push(A);else if(v>0&&v>=p)0==p?(g.push(m,...w),w.length=0,m=A):w.push(A),v=p;else{let x=function(p,g){if(p>=4352&&p<4371&&g>=4449&&g<4470)return 44032+(p-4352)*588+(g-4449)*28;if(is_hangul(p)&&g>4519&&g<4547&&(p-44032)%28==0)return p+(g-4519);{let w=eZ.get(p);return w&&(w=w.get(g))?w:-1}}(m,A);x>=0?m=x:0==v&&0==p?(g.push(m),m=A):(w.push(A),v=p)}}return m>=0&&g.push(m,...w),g}(decomposed(p))}function read_set(){return new Set(read_sorted(eq))}let eY=new Map(read_mapped(eq)),eJ=read_set(),eX=read_set(),e0=new Set(read_sorted(eq).map(function(p){return this[p]},[...eX])),e1=read_set();read_set();let e2=read_sorted_arrays(eq);function read_chunked(){return new Set([read_sorted(eq).map(p=>e2[p]),read_sorted(eq)].flat(2))}let e5=eq(),e3=read_array_while(p=>{let g=read_array_while(eq).map(p=>p+96);if(g.length){let w=p>=e5;g[0]-=32,g=str_from_cps(g),w&&(g=`Restricted[${g}]`);let m=read_chunked(),v=[...m,...read_chunked()].sort((p,g)=>p-g);return{N:g,P:m,M:!eq(),R:w,V:new Set(v)}}}),e4=read_set(),e6=new Map;for(let{V:p,M:g}of([...e4,...read_set()].sort((p,g)=>p-g).map((p,g,w)=>{let m=eq(),v=w[g]=m?w[g-m]:{V:[],M:new Map};v.V.push(p),e4.has(p)||e6.set(p,v)}),new Set(e6.values()))){let w=[];for(let g of p){let p=e3.filter(p=>p.V.has(g)),m=w.find(({G:g})=>p.some(p=>g.has(p)));m||(m={G:new Set,V:[]},w.push(m)),m.V.push(g),p.forEach(p=>m.G.add(p))}let m=w.flatMap(({G:p})=>[...p]);for(let{G:p,V:v}of w){let w=new Set(m.filter(g=>!p.has(g)));for(let p of v)g.set(p,w)}}let e8=new Set,e9=new Set;for(let p of e3)for(let g of p.V)(e8.has(g)?e9:e8).add(g);for(let p of e8)e6.has(p)||e9.has(p)||e6.set(p,1);let e7=new Set([...e8,...decomposed(e8).map(unpack_cp)]),te=read_sorted(eq),tt=function read_emoji_trie(p){let g=read_array_while(()=>{let p=read_sorted(eq).map(p=>te[p]);if(p.length)return read_emoji_trie(p)}).sort((p,g)=>g.Q.size-p.Q.size),w=eq();return{B:g,V:w%3,F:1&(w=w/3|0),S:1&(w>>=1),C:2&w,Q:new Set(p)}}([]);let Emoji=class Emoji extends Array{get is_emoji(){return!0}};function safe_str_from_cps(p,g=quote_cp){var w;let m=[];w=p[0],eX.has(w)&&m.push("◌");let v=0,x=p.length;for(let w=0;w<x;w++){let x=p[w];e1.has(x)&&(m.push(str_from_cps(p.slice(v,w))),m.push(g(x)),v=w+1)}return m.push(str_from_cps(p.slice(v,x))),m.join("")}function quoted_cp(p){return(e1.has(p)?"":`${bidi_qq(safe_str_from_cps([p]))} `)+quote_cp(p)}function bidi_qq(p){return`"${p}"\u200E`}function check_leading_underscore(p){for(let g=p.lastIndexOf(95);g>0;)if(95!==p[--g])throw Error("underscore allowed only at start")}function error_disallowed(p){return Error(`disallowed character: ${quoted_cp(p)}`)}function error_group_member(p,g){let w=quoted_cp(g),m=e3.find(p=>p.P.has(g));return m&&(w=`${m.N} ${w}`),Error(`illegal mixture: ${p.N} + ${w}`)}function error_placement(p){return Error(`illegal placement: ${p}`)}var tr=w(92221);function configureChains(p,g,{batch:w={multicall:{wait:32}},pollingInterval:m=4e3,rank:v,retryCount:x,retryDelay:A,stallTimeout:_}={}){if(!p.length)throw Error("must have at least one chain");let B=[],O={},T={};for(let w of p){let p=!1;for(let m of g){let g=m(w);g&&(p=!0,B.some(({id:p})=>p===w.id)||(B=[...B,g.chain]),O[w.id]=[...O[w.id]||[],...g.rpcUrls.http],g.rpcUrls.webSocket&&(T[w.id]=[...T[w.id]||[],...g.rpcUrls.webSocket]))}if(!p)throw Error(`Could not find valid provider configuration for chain "${w.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:B,publicClient:({chainId:g})=>{let T=B.find(p=>p.id===g)??p[0],U=O[T.id];if(!U||!U[0])throw Error(`No providers configured for chain "${T.id}"`);let F=createPublicClient({batch:w,chain:T,transport:fallback(U.map(p=>(function(p,g={}){let{batch:w,fetchOptions:m,key:v="http",name:x="HTTP JSON-RPC",retryDelay:A}=g;return({chain:_,retryCount:B,timeout:O})=>{let{batchSize:T=1e3,wait:U=0}="object"==typeof w?w:{},F=g.retryCount??B,z=O??g.timeout??1e4,W=p||_?.rpcUrls.default.http[0];if(!W)throw new UrlRequiredError;return(0,eM.q)({key:v,name:x,async request({method:g,params:v}){let x={method:g,params:v},{schedule:A}=(0,eD.S)({id:`${p}`,wait:U,shouldSplitBatch:p=>p.length>T,fn:p=>eU.http(W,{body:p,fetchOptions:m,timeout:z})}),fn=async p=>w?A(p):[await eU.http(W,{body:p,fetchOptions:m,timeout:z})],[{error:_,result:B}]=await fn(x);if(_)throw new e$.bs({body:x,error:_,url:W});return B},retryCount:F,retryDelay:A,timeout:z,type:"http"},{url:p})}})(p,{timeout:_})),{rank:v,retryCount:x,retryDelay:A}),pollingInterval:m});return Object.assign(F,{chains:B})},webSocketPublicClient:({chainId:g})=>{let O=B.find(p=>p.id===g)??p[0],U=T[O.id];if(!U||!U[0])return;let F=createPublicClient({batch:w,chain:O,transport:fallback(U.map(p=>(function(p,g={}){let{key:w="webSocket",name:m="WebSocket JSON-RPC",retryDelay:v}=g;return({chain:x,retryCount:A,timeout:_})=>{let B=g.retryCount??A,O=_??g.timeout??1e4,T=p||x?.rpcUrls.default.webSocket?.[0];if(!T)throw new UrlRequiredError;return(0,eM.q)({key:w,name:m,async request({method:p,params:g}){let w={method:p,params:g},m=await getSocket(T),{error:v,result:x}=await eU.webSocketAsync(m,{body:w,timeout:O});if(v)throw new e$.bs({body:w,error:v,url:T});return x},retryCount:B,retryDelay:v,timeout:O,type:"webSocket"},{getSocket:()=>getSocket(T),async subscribe({params:p,onData:g,onError:w}){let m=await getSocket(T),{result:v}=await new Promise((v,x)=>eU.webSocket(m,{body:{method:"eth_subscribe",params:p},onResponse(p){if(p.error){x(p.error),w?.(p.error);return}if("number"==typeof p.id){v(p);return}"eth_subscription"===p.method&&g(p.params)}}));return{subscriptionId:v,unsubscribe:async()=>new Promise(p=>eU.webSocket(m,{body:{method:"eth_unsubscribe",params:[v]},onResponse:p}))}}})}})(p,{timeout:_})),{rank:v,retryCount:x,retryDelay:A}),pollingInterval:m});return Object.assign(F,{chains:B})}}}var ti=class extends Error{constructor({activeChain:p,targetChain:g}){super(`Chain mismatch: Expected "${g}", received "${p}".`),this.name="ChainMismatchError"}},tn=class extends Error{constructor({chainId:p,connectorId:g}){super(`Chain "${p}" not configured${g?` for connector "${g}"`:""}.`),this.name="ChainNotConfigured"}},to=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},ta=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},ts=class extends Error{constructor({connector:p}){super(`"${p.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},findAndReplace=(p,{find:g,replace:w})=>p&&g(p)?w(p):"object"!=typeof p?p:Array.isArray(p)?p.map(p=>findAndReplace(p,{find:g,replace:w})):p instanceof Object?Object.entries(p).reduce((p,[m,v])=>({...p,[m]:findAndReplace(v,{find:g,replace:w})}),{}):p;function deserialize(p){let g=JSON.parse(p),w=findAndReplace(g,{find:p=>"string"==typeof p&&p.startsWith("#bigint."),replace:p=>BigInt(p.replace("#bigint.",""))});return w}function getCallParameters(p){return{accessList:p.accessList,account:p.account,blockNumber:p.blockNumber,blockTag:p.blockTag,data:p.data,gas:p.gas,gasPrice:p.gasPrice,maxFeePerGas:p.maxFeePerGas,maxPriorityFeePerGas:p.maxPriorityFeePerGas,nonce:p.nonce,to:p.to,value:p.value}}function getSendTransactionParameters(p){return{accessList:p.accessList,account:p.account,data:p.data,gas:p.gas,gasPrice:p.gasPrice,maxFeePerGas:p.maxFeePerGas,maxPriorityFeePerGas:p.maxPriorityFeePerGas,nonce:p.nonce,to:p.to,value:p.value}}function getUnit(p){return"number"==typeof p?p:"wei"===p?0:Math.abs(ez.Bd[p])}function getReferenceKey(p,g){return p.slice(0,g).join(".")||"."}function getCutoff(p,g){let{length:w}=p;for(let m=0;m<w;++m)if(p[m]===g)return m+1;return 0}function serialize(p,g,w,m){return JSON.stringify(p,function(p,g){let w="function"==typeof p,m="function"==typeof g,v=[],x=[];return function(A,_){if("object"==typeof _){if(v.length){let p=getCutoff(v,this);0===p?v[v.length]=this:(v.splice(p),x.splice(p)),x[x.length]=A;let w=getCutoff(v,_);if(0!==w)return m?g.call(this,A,_,getReferenceKey(x,w)):`[ref=${getReferenceKey(x,w)}]`}else v[0]=_,x[0]=A}return w?p.call(this,A,_):_}}((p,w)=>{let m="bigint"==typeof w?`#bigint.${w.toString()}`:w;return g?.(p,m)||m},m),w??void 0)}var tl={getItem:p=>"",setItem:(p,g)=>null,removeItem:p=>null};function createStorage({deserialize:p=deserialize,key:g="wagmi",serialize:w=serialize,storage:m}){return{...m,getItem:(w,v=null)=>{let x=m.getItem(`${g}.${w}`);try{return x?p(x):v}catch(p){return console.warn(p),v}},setItem:(p,v)=>{if(null===v)m.removeItem(`${g}.${p}`);else try{m.setItem(`${g}.${p}`,w(v))}catch(p){console.error(p)}},removeItem:p=>m.removeItem(`${g}.${p}`)}}var tc="store",tu=class{constructor({autoConnect:p=!1,connectors:g=[new B._],publicClient:w,storage:_=createStorage({storage:"undefined"!=typeof window?window.localStorage:tl}),logger:O={warn:console.warn},webSocketPublicClient:T}){let U;__privateAdd(this,x),this.publicClients=new Map,this.webSocketPublicClients=new Map,__privateAdd(this,m,void 0),__privateAdd(this,v,void 0),this.args={autoConnect:p,connectors:g,logger:O,publicClient:w,storage:_,webSocketPublicClient:T};let F="disconnected";if(p)try{let p=_.getItem(tc),g=p?.state?.data;F=g?.account?"reconnecting":"connecting",U=g?.chain?.id}catch(p){}let z="function"==typeof g?g():g;z.forEach(p=>p.setStorage(_)),this.store=createStore(subscribeWithSelector(persist(()=>({connectors:z,publicClient:this.getPublicClient({chainId:U}),status:F,webSocketPublicClient:this.getWebSocketPublicClient({chainId:U})}),{name:tc,storage:_,partialize:g=>({...p&&{data:{account:g?.data?.account,chain:g?.data?.chain}},chains:g?.chains}),version:2}))),this.storage=_,__privateSet(this,v,_?.getItem("wallet")),__privateMethod(this,x,A).call(this),p&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(p){let g="function"==typeof p?p(this.store.getState()):p;this.store.setState(g,!0)}clearState(){this.setState(p=>({...p,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),__privateSet(this,m,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(__privateGet(this,m))return;__privateSet(this,m,!0),this.setState(p=>({...p,status:p.data?.account?"reconnecting":"connecting"}));let p=__privateGet(this,v)?[...this.connectors].sort(p=>p.id===__privateGet(this,v)?-1:1):this.connectors,g=!1;for(let w of p){if(!w.ready||!w.isAuthorized)continue;let p=await w.isAuthorized();if(!p)continue;let m=await w.connect();this.setState(p=>({...p,connector:w,chains:w?.chains,data:m,status:"connected"})),g=!0;break}return g||this.setState(p=>({...p,data:void 0,status:"disconnected"})),__privateSet(this,m,!1),this.data}setConnectors(p){this.args={...this.args,connectors:p};let g="function"==typeof p?p():p;g.forEach(p=>p.setStorage(this.args.storage)),this.setState(p=>({...p,connectors:g}))}getPublicClient({chainId:p}={}){let g=this.publicClients.get(-1);if(g&&g?.chain.id===p||(g=this.publicClients.get(p??-1)))return g;let{publicClient:w}=this.args;return g="function"==typeof w?w({chainId:p}):w,this.publicClients.set(p??-1,g),g}setPublicClient(p){let g=this.data?.chain?.id;this.args={...this.args,publicClient:p},this.publicClients.clear(),this.setState(p=>({...p,publicClient:this.getPublicClient({chainId:g})}))}getWebSocketPublicClient({chainId:p}={}){let g=this.webSocketPublicClients.get(-1);if(g&&g?.chain.id===p||(g=this.webSocketPublicClients.get(p??-1)))return g;let{webSocketPublicClient:w}=this.args;return(g="function"==typeof w?w({chainId:p}):w)&&this.webSocketPublicClients.set(p??-1,g),g}setWebSocketPublicClient(p){let g=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:p},this.webSocketPublicClients.clear(),this.setState(p=>({...p,webSocketPublicClient:this.getWebSocketPublicClient({chainId:g})}))}setLastUsedConnector(p=null){this.storage?.setItem("wallet",p)}};function createConfig(p){let g=new tu(p);return _=g,g}function getConfig(){if(!_)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return _}async function connect({chainId:p,connector:g}){let w=getConfig(),m=w.connector;if(m&&g.id===m.id)throw new to;try{w.setState(p=>({...p,status:"connecting"}));let m=await g.connect({chainId:p});return w.setLastUsedConnector(g.id),w.setState(p=>({...p,connector:g,chains:g?.chains,data:m,status:"connected"})),w.storage.setItem("connected",!0),{...m,connector:g}}catch(p){throw w.setState(p=>({...p,status:p.connector?"connected":"disconnected"})),p}}async function disconnect(){let p=getConfig();p.connector&&await p.connector.disconnect(),p.clearState(),p.storage.removeItem("connected")}m=new WeakMap,v=new WeakMap,x=new WeakSet,A=function(){let onChange=p=>{this.setState(g=>({...g,data:{...g.data,...p}}))},onDisconnect=()=>{this.clearState()},onError=p=>{this.setState(g=>({...g,error:p}))};this.store.subscribe(({connector:p})=>p,(p,g)=>{g?.off?.("change",onChange),g?.off?.("disconnect",onDisconnect),g?.off?.("error",onError),p&&(p.on?.("change",onChange),p.on?.("disconnect",onDisconnect),p.on?.("error",onError))});let{publicClient:p,webSocketPublicClient:g}=this.args;("function"==typeof p||"function"==typeof g)&&this.store.subscribe(({data:p})=>p?.chain?.id,p=>{this.setState(g=>({...g,publicClient:this.getPublicClient({chainId:p}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:p})}))})};var td=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],th=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function getPublicClient({chainId:p}={}){let g=getConfig();return p&&g.getPublicClient({chainId:p})||g.publicClient}async function getWalletClient({chainId:p}={}){let g=getConfig(),w=await g.connector?.getWalletClient?.({chainId:p})||null;return w}function getWebSocketPublicClient({chainId:p}={}){let g=getConfig();return p&&g.getWebSocketPublicClient({chainId:p})||g.webSocketPublicClient}function watchPublicClient(p,g){let w=getConfig(),handleChange=async()=>g(getPublicClient(p)),m=w.subscribe(({publicClient:p})=>p,handleChange);return m}function watchWalletClient({chainId:p},g){let w=getConfig(),handleChange=async({chainId:w})=>{if(p&&w&&p!==w)return;let m=await getWalletClient({chainId:p});return getConfig().connector?g(m):g(null)},m=w.subscribe(({data:p,connector:g})=>({account:p?.account,chainId:p?.chain?.id,connector:g}),handleChange,{equalityFn:shallow});return m}function watchWebSocketPublicClient(p,g){let w=getConfig(),handleChange=async()=>g(getWebSocketPublicClient(p)),m=w.subscribe(({webSocketPublicClient:p})=>p,handleChange);return m}async function prepareWriteContract({abi:p,address:g,args:w,chainId:m,functionName:v,walletClient:x,...A}){let _=getPublicClient({chainId:m}),B=x??await getWalletClient({chainId:m});if(!B)throw new eF.N;m&&assertActiveChain({chainId:m});let{account:O,accessList:T,blockNumber:U,blockTag:F,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,value:K}=getCallParameters(A),{result:Z,request:Y}=await _.simulateContract({abi:p,address:g,functionName:v,args:w,account:O||B.account,accessList:T,blockNumber:U,blockTag:F,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,value:K}),J=p.filter(p=>"name"in p&&p.name===v);return{mode:"prepared",request:{...Y,abi:J,chainId:m},result:Z}}async function chunk_LAFZBYO7_multicall({chainId:p,contracts:g,blockNumber:w,blockTag:m,...v}){let x=getPublicClient({chainId:p});if(!x.chains)throw new ta;if(p&&x.chain.id!==p)throw new tn({chainId:p});return x.multicall({allowFailure:v.allowFailure??!0,blockNumber:w,blockTag:m,contracts:g})}async function chunk_LAFZBYO7_readContract({address:p,account:g,chainId:w,abi:m,args:v,functionName:x,blockNumber:A,blockTag:_}){let B=getPublicClient({chainId:w});return B.readContract({abi:m,address:p,account:g,functionName:x,args:v,blockNumber:A,blockTag:_})}async function readContracts({contracts:p,blockNumber:g,blockTag:w,...m}){let{allowFailure:v=!0}=m;try{let m=getPublicClient(),x=p.reduce((p,g,w)=>{let v=g.chainId??m.chain.id;return{...p,[v]:[...p[v]||[],{contract:g,index:w}]}},{}),A=(await Promise.all(Object.entries(x).map(([p,m])=>chunk_LAFZBYO7_multicall({allowFailure:v,chainId:parseInt(p),contracts:m.map(({contract:p})=>p),blockNumber:g,blockTag:w})))).flat(),_=Object.values(x).flatMap(p=>p.map(({index:p})=>p));return A.reduce((p,g,w)=>(p&&(p[_[w]]=g),p),[])}catch(m){if(m instanceof U.uq)throw m;let promises=()=>p.map(p=>chunk_LAFZBYO7_readContract({...p,blockNumber:g,blockTag:w}));if(v)return(await Promise.allSettled(promises())).map(p=>"fulfilled"===p.status?{result:p.value,status:"success"}:{error:p.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}async function writeContract(p){let g;let w=await getWalletClient({chainId:p.chainId});if(!w)throw new eF.N;if(p.chainId&&assertActiveChain({chainId:p.chainId}),"prepared"===p.mode)g=p.request;else{let{chainId:w,mode:m,...v}=p,x=await prepareWriteContract(v);g=x.request}let m=await w.writeContract({...g,chain:null});return{hash:m}}async function fetchBalance({address:p,chainId:g,formatUnits:w,token:m}){let v=getConfig(),x=getPublicClient({chainId:g});if(m){let fetchContractBalance=async({abi:v})=>{let x={abi:v,address:m,chainId:g},[A,_,B]=await readContracts({allowFailure:!1,contracts:[{...x,functionName:"balanceOf",args:[p]},{...x,functionName:"decimals"},{...x,functionName:"symbol"}]});return{decimals:_,formatted:(0,eW.b)(A??"0",getUnit(w??_)),symbol:B,value:A}};try{return await fetchContractBalance({abi:td})}catch(p){if(p instanceof U.uq){let{symbol:p,...g}=await fetchContractBalance({abi:th});return{symbol:(0,eg.rR)((0,q.f)(p,{dir:"right"})),...g}}throw p}}let A=[...v.publicClient.chains||[],...v.chains??[]],_=await x.getBalance({address:p}),B=A.find(p=>p.id===x.chain.id);return{decimals:B?.nativeCurrency.decimals??18,formatted:(0,eW.b)(_??"0",getUnit(w??18)),symbol:B?.nativeCurrency.symbol??"ETH",value:_}}function getAccount(){let{data:p,connector:g,status:w}=getConfig();switch(w){case"connected":return{address:p?.account,connector:g,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:w};case"reconnecting":return{address:p?.account,connector:g,isConnected:!!p?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:w};case"connecting":return{address:p?.account,connector:g,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:w};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:w}}}function getNetwork(){let p=getConfig(),g=p.data?.chain?.id,w=p.chains??[],m=[...p.publicClient?.chains||[],...w].find(p=>p.id===g)??{id:g,name:`Chain ${g}`,network:`${g}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:g?{...m,...p.data?.chain,id:g}:void 0,chains:w}}async function switchNetwork({chainId:p}){let{connector:g}=getConfig();if(!g)throw new eF.N;if(!g.switchChain)throw new ts({connector:g});return g.switchChain(p)}function watchAccount(p,{selector:g=p=>p}={}){let w=getConfig(),m=w.subscribe(({data:p,connector:w,status:m})=>g({address:p?.account,connector:w,status:m}),()=>p(getAccount()),{equalityFn:shallow});return m}function watchNetwork(p,{selector:g=p=>p}={}){let w=getConfig(),m=w.subscribe(({data:p,chains:w})=>g({chainId:p?.chain?.id,chains:w}),()=>p(getNetwork()),{equalityFn:shallow});return m}async function fetchEnsAvatar({name:p,chainId:g}){var w;let m;let v=getPublicClient({chainId:g}),x=await v.getEnsAvatar({name:(m=0,w=p.split(".").map(p=>{let g,w=function(p){let g=[];for(let w=0,m=p.length;w<m;){let m=p.codePointAt(w);w+=m<65536?1:2,g.push(m)}return g}(p),v={input:w,offset:m};m+=w.length+1;try{let p,m=v.tokens=function(p,g){let w=[],m=[];for(p=p.slice().reverse();p.length;){let v=function(p,g){let w,m,v=tt,x=[],A=p.length;for(g&&(g.length=0);A;){let _=p[--A];if(!(v=v.B.find(p=>p.Q.has(_))))break;if(v.S)m=_;else if(v.C&&_===m)break;x.push(_),v.F&&(x.push(65039),A>0&&65039==p[A-1]&&A--),v.V&&(w=function(p,g){let w=Emoji.from(p);return 2==g.V&&w.splice(1,1),w}(x,v),g&&g.push(...p.slice(A).reverse()),p.length=A)}return w}(p);if(v)m.length&&(w.push(g(m)),m=[]),w.push(v);else{let g=p.pop();if(e7.has(g))m.push(g);else{let p=eY.get(g);if(p)m.push(...p);else if(!eJ.has(g))throw error_disallowed(g)}}}return m.length&&w.push(g(m)),w}(w,nfc),x=m.length;if(x){let w=m[0],A=x>1||w.is_emoji;if(!A&&w.every(p=>p<128))g=w,check_leading_underscore(g),function(p){if(p.length>=4&&45==p[2]&&45==p[3])throw Error("invalid label extension")}(g),p="ASCII";else if(A&&(v.emoji=!0,w=m.flatMap(p=>p.is_emoji?[]:p)),g=m.flatMap(p=>p.is_emoji?p.filter(p=>65039!=p):p),check_leading_underscore(g),w.length){if(eX.has(g[0]))throw error_placement("leading combining mark");for(let p=1;p<x;p++){let g=m[p];if(!g.is_emoji&&eX.has(g[0]))throw error_placement(`emoji + combining mark: "${str_from_cps(m[p-1])} + ${safe_str_from_cps([g[0]])}"`)}!function(p){let g=p[0],w=eH.get(g);if(w)throw error_placement(`leading ${w}`);let m=p.length,v=-1;for(let x=1;x<m;x++){g=p[x];let m=eH.get(g);if(m){if(v==x)throw error_placement(`${w} + ${m}`);v=x+1,w=m}}if(v==m)throw error_placement(`trailing ${w}`)}(g);let v=[...new Set(w)],[A]=function(p){let g=e3;for(let w of p){let p=g.filter(p=>p.V.has(w));if(!p.length){if(g===e3)throw error_disallowed(w);throw error_group_member(g[0],w)}if(g=p,1==p.length)break}return g}(v);(function(p,g){let{V:w,M:m}=p;for(let m of g)if(!w.has(m))throw error_group_member(p,m);if(m){let p=decomposed(g).map(unpack_cp);for(let g=1,w=p.length;g<w;g++)if(e0.has(p[g])){let m=g+1;for(let v;m<w&&e0.has(v=p[m]);m++)for(let w=g;w<m;w++)if(p[w]==v)throw Error(`non-spacing marks: repeated ${quoted_cp(v)}`);if(m-g>4)throw Error(`non-spacing marks: too many ${bidi_qq(safe_str_from_cps(p.slice(g-1,m)))} (${m-g}/4)`);g=m}}})(A,w),function(p,g){let w;let m=[];for(let p of g){let g=e6.get(p);if(1===g)return;if(g){let m=g.M.get(p);if(!(w=w?w.filter(p=>m.has(p)):[...m]).length)return}else m.push(p)}if(w){for(let g of w)if(m.every(p=>g.V.has(p)))throw Error(`whole-script confusable: ${p.N}/${g.N}`)}}(A,v),p=A.N}else p="Emoji"}else throw Error("empty label");v.type=p}catch(p){v.error=p}return v.output=g,v})).map(({input:p,error:g,output:m})=>{if(g){let m=g.message;throw Error(1==w.length?m:`Invalid label ${bidi_qq(safe_str_from_cps(p))}: ${m}`)}return str_from_cps(m)}).join(".")});return x}async function fetchEnsName({address:p,chainId:g}){let w=getPublicClient({chainId:g});return w.getEnsName({address:(0,tr.K)(p)})}async function fetchBlockNumber({chainId:p}={}){let g=getPublicClient({chainId:p}),w=await g.getBlockNumber();return w}function assertActiveChain({chainId:p}){let{chain:g,chains:w}=getNetwork(),m=g?.id;if(m&&p!==m)throw new ti({activeChain:w.find(p=>p.id===m)?.name??`Chain ${m}`,targetChain:w.find(g=>g.id===p)?.name??`Chain ${p}`})}},88598:function(p,g,w){"use strict";w.d(g,{E:function(){return A}});var m=w(27484),v=w(70660),x=w(84110);m.extend(x),m.extend(v),m.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});let A={getYear:(p=new Date().toISOString())=>m(p).year(),getRelativeDateFromNow:p=>m(p).fromNow(!0)}},90078:function(p,g,w){"use strict";w.r(g),w.d(g,{W3mModal:function(){return O}});var m=w(15537),v=w(25643),x=w(92233),A=w(18569),_=x.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,__decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let B="scroll-lock",O=class extends x.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=m.IN.state.open,this.initializeTheming(),m.ApiController.prefetch(),this.unsubscribe.push(m.IN.subscribeKey("open",p=>p?this.onOpen():this.onClose())),m.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(p=>p()),this.onRemoveKeyboardListener()}render(){return this.open?x.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(p){p.target===p.currentTarget&&m.IN.close()}initializeTheming(){let{themeVariables:p,themeMode:g}=m.ThemeController.state,w=v.UiHelperUtil.getColorTheme(g);(0,v.initializeTheming)(p,w)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,m.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let p=document.createElement("style");p.dataset.w3m=B,p.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(p)}onScrollUnlock(){let p=document.head.querySelector(`style[data-w3m="${B}"]`);p&&p.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let p=this.shadowRoot?.querySelector("wui-card");p?.focus(),window.addEventListener("keydown",g=>{if("Escape"===g.key)m.IN.close();else if("Tab"===g.key){let{tagName:w}=g.target;!w||w.includes("W3M-")||w.includes("WUI-")||p?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};O.styles=_,__decorate([(0,A.SB)()],O.prototype,"open",void 0),O=__decorate([(0,v.customElement)("w3m-modal")],O)},3274:function(p,g,w){"use strict";w.d(g,{fl:function(){return b},iv:function(){return i},Ts:function(){return K},Qu:function(){return f},$m:function(){return r}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=globalThis,v=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol(),A=new WeakMap;let n=class n{constructor(p,g,w){if(this._$cssResult$=!0,w!==x)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=p,this.t=g}get styleSheet(){let p=this.o,g=this.t;if(v&&void 0===p){let w=void 0!==g&&1===g.length;w&&(p=A.get(g)),void 0===p&&((this.o=p=new CSSStyleSheet).replaceSync(this.cssText),w&&A.set(g,p))}return p}toString(){return this.cssText}};let r=p=>new n("string"==typeof p?p:p+"",void 0,x),i=(p,...g)=>{let w=1===p.length?p[0]:g.reduce((g,w,m)=>g+(p=>{if(!0===p._$cssResult$)return p.cssText;if("number"==typeof p)return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(w)+p[m+1],p[0]);return new n(w,p,x)},S=(p,g)=>{if(v)p.adoptedStyleSheets=g.map(p=>p instanceof CSSStyleSheet?p:p.styleSheet);else for(let w of g){let g=document.createElement("style"),v=m.litNonce;void 0!==v&&g.setAttribute("nonce",v),g.textContent=w.cssText,p.appendChild(g)}},_=v?p=>p:p=>p instanceof CSSStyleSheet?(p=>{let g="";for(let w of p.cssRules)g+=w.cssText;return r(g)})(p):p,{is:B,defineProperty:O,getOwnPropertyDescriptor:T,getOwnPropertyNames:U,getOwnPropertySymbols:F,getPrototypeOf:z}=Object,W=globalThis,q=W.trustedTypes,Q=q?q.emptyScript:"",G=W.reactiveElementPolyfillSupport,d=(p,g)=>p,K={toAttribute(p,g){switch(g){case Boolean:p=p?Q:null;break;case Object:case Array:p=null==p?p:JSON.stringify(p)}return p},fromAttribute(p,g){let w=p;switch(g){case Boolean:w=null!==p;break;case Number:w=null===p?null:Number(p);break;case Object:case Array:try{w=JSON.parse(p)}catch(p){w=null}}return w}},f=(p,g)=>!B(p,g),Z={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(p){this._$Ei(),(this.l??=[]).push(p)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(p,g=Z){if(g.state&&(g.attribute=!1),this._$Ei(),this.elementProperties.set(p,g),!g.noAccessor){let w=Symbol(),m=this.getPropertyDescriptor(p,w,g);void 0!==m&&O(this.prototype,p,m)}}static getPropertyDescriptor(p,g,w){let{get:m,set:v}=T(this.prototype,p)??{get(){return this[g]},set(p){this[g]=p}};return{get(){return m?.call(this)},set(g){let x=m?.call(this);v.call(this,g),this.requestUpdate(p,x,w)},configurable:!0,enumerable:!0}}static getPropertyOptions(p){return this.elementProperties.get(p)??Z}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let p=z(this);p.finalize(),void 0!==p.l&&(this.l=[...p.l]),this.elementProperties=new Map(p.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let p=this.properties,g=[...U(p),...F(p)];for(let w of g)this.createProperty(w,p[w])}let p=this[Symbol.metadata];if(null!==p){let g=litPropertyMetadata.get(p);if(void 0!==g)for(let[p,w]of g)this.elementProperties.set(p,w)}for(let[p,g]of(this._$Eh=new Map,this.elementProperties)){let w=this._$Eu(p,g);void 0!==w&&this._$Eh.set(w,p)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(p){let g=[];if(Array.isArray(p)){let w=new Set(p.flat(1/0).reverse());for(let p of w)g.unshift(_(p))}else void 0!==p&&g.push(_(p));return g}static _$Eu(p,g){let w=g.attribute;return!1===w?void 0:"string"==typeof w?w:"string"==typeof p?p.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(p=>this.enableUpdating=p),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(p=>p(this))}addController(p){(this._$E_??=new Set).add(p),void 0!==this.renderRoot&&this.isConnected&&p.hostConnected?.()}removeController(p){this._$E_?.delete(p)}_$ES(){let p=new Map,g=this.constructor.elementProperties;for(let w of g.keys())this.hasOwnProperty(w)&&(p.set(w,this[w]),delete this[w]);p.size>0&&(this._$Ep=p)}createRenderRoot(){let p=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(p,this.constructor.elementStyles),p}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(p=>p.hostConnected?.())}enableUpdating(p){}disconnectedCallback(){this._$E_?.forEach(p=>p.hostDisconnected?.())}attributeChangedCallback(p,g,w){this._$AK(p,w)}_$EO(p,g){let w=this.constructor.elementProperties.get(p),m=this.constructor._$Eu(p,w);if(void 0!==m&&!0===w.reflect){let v=(void 0!==w.converter?.toAttribute?w.converter:K).toAttribute(g,w.type);this._$Em=p,null==v?this.removeAttribute(m):this.setAttribute(m,v),this._$Em=null}}_$AK(p,g){let w=this.constructor,m=w._$Eh.get(p);if(void 0!==m&&this._$Em!==m){let p=w.getPropertyOptions(m),v="function"==typeof p.converter?{fromAttribute:p.converter}:void 0!==p.converter?.fromAttribute?p.converter:K;this._$Em=m,this[m]=v.fromAttribute(g,p.type),this._$Em=null}}requestUpdate(p,g,w,m=!1,v){if(void 0!==p){if(!((w??=this.constructor.getPropertyOptions(p)).hasChanged??f)(m?v:this[p],g))return;this.C(p,g,w)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(p,g,w){this._$AL.has(p)||this._$AL.set(p,g),!0===w.reflect&&this._$Em!==p&&(this._$Ej??=new Set).add(p)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(p){Promise.reject(p)}let p=this.scheduleUpdate();return null!=p&&await p,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[p,g]of this._$Ep)this[p]=g;this._$Ep=void 0}let p=this.constructor.elementProperties;if(p.size>0)for(let[g,w]of p)!0!==w.wrapped||this._$AL.has(g)||void 0===this[g]||this.C(g,this[g],w)}let p=!1,g=this._$AL;try{(p=this.shouldUpdate(g))?(this.willUpdate(g),this._$E_?.forEach(p=>p.hostUpdate?.()),this.update(g)):this._$ET()}catch(g){throw p=!1,this._$ET(),g}p&&this._$AE(g)}willUpdate(p){}_$AE(p){this._$E_?.forEach(p=>p.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(p)),this.updated(p)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(p){return!0}update(p){this._$Ej&&=this._$Ej.forEach(p=>this._$EO(p,this[p])),this._$ET()}updated(p){}firstUpdated(p){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,G?.({ReactiveElement:b}),(W.reactiveElementVersions??=[]).push("2.0.2")},15537:function(p,g,w){"use strict";w.d(g,{AccountController:function(){return T},ApiController:function(){return eo},WM:function(){return Q},fz:function(){return eS},Lr:function(){return em},ConnectionController:function(){return eA},ConnectorController:function(){return K},bq:function(){return _},j1:function(){return B},Xs:function(){return eu},IN:function(){return ep},NetworkController:function(){return X},OptionsController:function(){return et},Ie:function(){return Y},RouterController:function(){return eh},yD:function(){return e_},SnackController:function(){return ev},MO:function(){return W},ThemeController:function(){return eP},sl:function(){return eC}});var m=w(72478);let isObject=p=>"object"==typeof p&&null!==p,v=new WeakMap,x=new WeakSet,buildProxyFunction=(p=Object.is,g=(p,g)=>new Proxy(p,g),w=p=>isObject(p)&&!x.has(p)&&(Array.isArray(p)||!(Symbol.iterator in p))&&!(p instanceof WeakMap)&&!(p instanceof WeakSet)&&!(p instanceof Error)&&!(p instanceof Number)&&!(p instanceof Date)&&!(p instanceof String)&&!(p instanceof RegExp)&&!(p instanceof ArrayBuffer),A=p=>{switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:throw p}},_=new WeakMap,B=(p,g,w=A)=>{let O=_.get(p);if((null==O?void 0:O[0])===g)return O[1];let T=Array.isArray(p)?[]:Object.create(Object.getPrototypeOf(p));return(0,m.jc)(T,!0),_.set(p,[g,T]),Reflect.ownKeys(p).forEach(g=>{if(Object.getOwnPropertyDescriptor(T,g))return;let A=Reflect.get(p,g),_={value:A,enumerable:!0,configurable:!0};if(x.has(A))(0,m.jc)(A,!1);else if(A instanceof Promise)delete _.value,_.get=()=>w(A);else if(v.has(A)){let[p,g]=v.get(A);_.value=B(p,g(),w)}Object.defineProperty(T,g,_)}),Object.preventExtensions(T)},O=new WeakMap,T=[1,1],U=A=>{if(!isObject(A))throw Error("object required");let _=O.get(A);if(_)return _;let F=T[0],z=new Set,notifyUpdate=(p,g=++T[0])=>{F!==g&&(F=g,z.forEach(w=>w(p,g)))},W=T[1],ensureVersion=(p=++T[1])=>(W===p||z.size||(W=p,q.forEach(([g])=>{let w=g[1](p);w>F&&(F=w)})),F),createPropListener=p=>(g,w)=>{let m=[...g];m[1]=[p,...m[1]],notifyUpdate(m,w)},q=new Map,addPropListener=(p,g)=>{if(q.has(p))throw Error("prop listener already exists");if(z.size){let w=g[3](createPropListener(p));q.set(p,[g,w])}else q.set(p,[g])},removePropListener=p=>{var g;let w=q.get(p);w&&(q.delete(p),null==(g=w[1])||g.call(w))},addListener=p=>{z.add(p),1===z.size&&q.forEach(([p,g],w)=>{if(g)throw Error("remove already exists");let m=p[3](createPropListener(w));q.set(w,[p,m])});let removeListener=()=>{z.delete(p),0===z.size&&q.forEach(([p,g],w)=>{g&&(g(),q.set(w,[p]))})};return removeListener},Q=Array.isArray(A)?[]:Object.create(Object.getPrototypeOf(A)),G={deleteProperty(p,g){let w=Reflect.get(p,g);removePropListener(g);let m=Reflect.deleteProperty(p,g);return m&&notifyUpdate(["delete",[g],w]),m},set(g,A,_,B){let T=Reflect.has(g,A),F=Reflect.get(g,A,B);if(T&&(p(F,_)||O.has(_)&&p(F,O.get(_))))return!0;removePropListener(A),isObject(_)&&(_=(0,m.o5)(_)||_);let z=_;if(_ instanceof Promise)_.then(p=>{_.status="fulfilled",_.value=p,notifyUpdate(["resolve",[A],p])}).catch(p=>{_.status="rejected",_.reason=p,notifyUpdate(["reject",[A],p])});else{!v.has(_)&&w(_)&&(z=U(_));let p=!x.has(z)&&v.get(z);p&&addPropListener(A,p)}return Reflect.set(g,A,z,B),notifyUpdate(["set",[A],_,F]),!0}},K=g(Q,G);O.set(A,K);let Z=[Q,ensureVersion,B,addListener];return v.set(K,Z),Reflect.ownKeys(A).forEach(p=>{let g=Object.getOwnPropertyDescriptor(A,p);"value"in g&&(K[p]=A[p],delete g.value,delete g.writable),Object.defineProperty(Q,p,g)}),K})=>[U,v,x,p,g,w,A,_,B,O,T],[A]=buildProxyFunction();function vanilla_proxy(p={}){return A(p)}function vanilla_subscribe(p,g,w){let m;let x=v.get(p);x||console.warn("Please use proxy object");let A=[],_=x[3],B=!1,O=_(p=>{if(A.push(p),w){g(A.splice(0));return}m||(m=Promise.resolve().then(()=>{m=void 0,B&&g(A.splice(0))}))});return B=!0,()=>{B=!1,O()}}function vanilla_ref(p){return x.add(p),p}function subscribeKey(p,g,w,m){let v=p[g];return vanilla_subscribe(p,()=>{let m=p[g];Object.is(v,m)||w(v=m)},m)}Symbol();let _={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},B={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let p=navigator.userAgent.toLowerCase();return B.isMobile()&&p.includes("android")},isIos(){let p=navigator.userAgent.toLowerCase();return B.isMobile()&&(p.includes("iphone")||p.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:p=>!p||p-Date.now()<=_.TEN_SEC_MS,isAllowedRetry:p=>Date.now()-p>=_.ONE_SEC_MS,copyToClopboard(p){navigator.clipboard.writeText(p)},getPairingExpiry:()=>Date.now()+_.FOUR_MINUTES_MS,getPlainAddress:p=>p.split(":")[2],wait:async p=>new Promise(g=>{setTimeout(g,p)}),debounce(p,g=500){let w;return(...m)=>{w&&clearTimeout(w),w=setTimeout(function(){p(...m)},g)}},isHttpUrl:p=>p.startsWith("http://")||p.startsWith("https://"),formatNativeUrl(p,g){if(B.isHttpUrl(p))return this.formatUniversalUrl(p,g);let w=p;w.includes("://")||(w=p.replaceAll("/","").replaceAll(":",""),w=`${w}://`),w.endsWith("/")||(w=`${w}/`);let m=encodeURIComponent(g);return{redirect:`${w}wc?uri=${m}`,href:w}},formatUniversalUrl(p,g){if(!B.isHttpUrl(p))return this.formatNativeUrl(p,g);let w=p;w.endsWith("/")||(w=`${w}/`);let m=encodeURIComponent(g);return{redirect:`${w}wc?uri=${m}`,href:w}},openHref(p,g){window.open(p,g,"noreferrer noopener")},async preloadImage(p){let g=new Promise((g,w)=>{let m=new Image;m.onload=g,m.onerror=w,m.crossOrigin="anonymous",m.src=p});return Promise.race([g,B.wait(2e3)])},formatBalance(p,g){let w;if("0"===p)w="0.000";else if("string"==typeof p){let g=Number(p);g&&(w=g.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return w?`${w} ${g}`:"0.000"},isRestrictedRegion(){try{let{timeZone:p}=new Intl.DateTimeFormat().resolvedOptions(),g=p.toUpperCase();return _.RESTRICTED_TIMEZONES.includes(g)}catch{return!1}},getApiUrl:()=>B.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>B.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>B.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,p=>{let g=16*Math.random()|0;return("x"===p?g:3&g|8).toString(16)})},O=vanilla_proxy({isConnected:!1}),T={state:O,subscribe:p=>vanilla_subscribe(O,()=>p(O)),subscribeKey:(p,g)=>subscribeKey(O,p,g),setIsConnected(p){O.isConnected=p},setCaipAddress(p){O.caipAddress=p,O.address=p?B.getPlainAddress(p):void 0},setBalance(p,g){O.balance=p,O.balanceSymbol=g},setProfileName(p){O.profileName=p},setProfileImage(p){O.profileImage=p},setAddressExplorerUrl(p){O.addressExplorerUrl=p},resetAccount(){O.isConnected=!1,O.caipAddress=void 0,O.address=void 0,O.balance=void 0,O.balanceSymbol=void 0,O.profileName=void 0,O.profileImage=void 0,O.addressExplorerUrl=void 0}};let FetchUtil=class FetchUtil{constructor({baseUrl:p}){this.baseUrl=p}async get({headers:p,...g}){let w=this.createUrl(g),m=await fetch(w,{method:"GET",headers:p});return m.json()}async getBlob({headers:p,...g}){let w=this.createUrl(g),m=await fetch(w,{method:"GET",headers:p});return m.blob()}async post({body:p,headers:g,...w}){let m=this.createUrl(w),v=await fetch(m,{method:"POST",headers:g,body:p?JSON.stringify(p):void 0});return v.json()}async put({body:p,headers:g,...w}){let m=this.createUrl(w),v=await fetch(m,{method:"PUT",headers:g,body:p?JSON.stringify(p):void 0});return v.json()}async delete({body:p,headers:g,...w}){let m=this.createUrl(w),v=await fetch(m,{method:"DELETE",headers:g,body:p?JSON.stringify(p):void 0});return v.json()}createUrl({path:p,params:g}){let w=new URL(p,this.baseUrl);return g&&Object.entries(g).forEach(([p,g])=>{g&&w.searchParams.append(p,g)}),w}};let U="WALLETCONNECT_DEEPLINK_CHOICE",F="@w3m/recent",z="@w3m/connected_wallet_image_url",W={setWalletConnectDeepLink({href:p,name:g}){try{localStorage.setItem(U,JSON.stringify({href:p,name:g}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let p=localStorage.getItem(U);if(p)return JSON.parse(p)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(U)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(p){try{let g=W.getRecentWallets(),w=g.find(g=>g.id===p.id);w||(g.unshift(p),g.length>2&&g.pop(),localStorage.setItem(F,JSON.stringify(g)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let p=localStorage.getItem(F);return p?JSON.parse(p):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(p){try{localStorage.setItem(z,p)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(z)}catch{console.info("Unable to set Connected Wallet Image Url")}}},q=vanilla_proxy({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Q={state:q,subscribeNetworkImages:p=>vanilla_subscribe(q.networkImages,()=>p(q.networkImages)),subscribeKey:(p,g)=>subscribeKey(q,p,g),setWalletImage(p,g){q.walletImages[p]=g},setNetworkImage(p,g){q.networkImages[p]=g},setConnectorImage(p,g){q.connectorImages[p]=g},setTokenImage(p,g){q.tokenImages[p]=g}},G=vanilla_proxy({connectors:[]}),K={state:G,subscribeKey:(p,g)=>subscribeKey(G,p,g),setConnectors(p){G.connectors=p.map(p=>vanilla_ref(p))},addConnector(p){G.connectors.push(vanilla_ref(p))},getConnectors:()=>G.connectors},Z=vanilla_proxy({open:!1,selectedNetworkId:void 0}),Y={state:Z,subscribe:p=>vanilla_subscribe(Z,()=>p(Z)),set(p){Object.assign(Z,{...Z,...p})}},J=vanilla_proxy({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),X={state:J,subscribeKey:(p,g)=>subscribeKey(J,p,g),_getClient(){if(!J._client)throw Error("NetworkController client not set");return J._client},setClient(p){J._client=vanilla_ref(p)},setCaipNetwork(p){J.caipNetwork=p,Y.set({selectedNetworkId:p?.id})},setDefaultCaipNetwork(p){J.caipNetwork=p,Y.set({selectedNetworkId:p?.id}),J.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(p){J.requestedCaipNetworks=p},async getApprovedCaipNetworksData(){let p=await this._getClient().getApprovedCaipNetworksData();J.supportsAllNetworks=p.supportsAllNetworks,J.approvedCaipNetworkIds=p.approvedCaipNetworkIds},async switchActiveNetwork(p){await this._getClient().switchCaipNetwork(p),J.caipNetwork=p},resetNetwork(){J.isDefaultCaipNetwork||(J.caipNetwork=void 0),J.approvedCaipNetworkIds=void 0,J.supportsAllNetworks=!0}},ee=vanilla_proxy({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),et={state:ee,subscribeKey:(p,g)=>subscribeKey(ee,p,g),setProjectId(p){ee.projectId=p},setIncludeWalletIds(p){ee.includeWalletIds=p},setExcludeWalletIds(p){ee.excludeWalletIds=p},setFeaturedWalletIds(p){ee.featuredWalletIds=p},setTokens(p){ee.tokens=p},setTermsConditionsUrl(p){ee.termsConditionsUrl=p},setPrivacyPolicyUrl(p){ee.privacyPolicyUrl=p},setCustomWallets(p){ee.customWallets=p},setEnableAnalytics(p){ee.enableAnalytics=p},setSdkVersion(p){ee.sdkVersion=p},setMetadata(p){ee.metadata=p}},er=B.getApiUrl(),ei=new FetchUtil({baseUrl:er}),en=vanilla_proxy({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),eo={state:en,subscribeKey:(p,g)=>subscribeKey(en,p,g),_getApiHeaders(){let{projectId:p,sdkType:g,sdkVersion:w}=et.state;return{"x-project-id":p,"x-sdk-type":g,"x-sdk-version":w}},async _fetchWalletImage(p){let g=`${ei.baseUrl}/getWalletImage/${p}`,w=await ei.getBlob({path:g,headers:eo._getApiHeaders()});Q.setWalletImage(p,URL.createObjectURL(w))},async _fetchNetworkImage(p){let g=`${ei.baseUrl}/public/getAssetImage/${p}`,w=await ei.getBlob({path:g,headers:eo._getApiHeaders()});Q.setNetworkImage(p,URL.createObjectURL(w))},async _fetchConnectorImage(p){let g=`${ei.baseUrl}/public/getAssetImage/${p}`,w=await ei.getBlob({path:g,headers:eo._getApiHeaders()});Q.setConnectorImage(p,URL.createObjectURL(w))},async fetchNetworkImages(){let{requestedCaipNetworks:p}=X.state,g=p?.map(({imageId:p})=>p).filter(Boolean);g&&await Promise.allSettled(g.map(p=>eo._fetchNetworkImage(p)))},async fetchConnectorImages(){let{connectors:p}=K.state,g=p.map(({imageId:p})=>p).filter(Boolean);await Promise.allSettled(g.map(p=>eo._fetchConnectorImage(p)))},async fetchFeaturedWallets(){let{featuredWalletIds:p}=et.state;if(p?.length){let{data:g}=await ei.get({path:"/getWallets",headers:eo._getApiHeaders(),params:{page:"1",entries:p?.length?String(p.length):"4",include:p?.join(",")}});g.sort((g,w)=>p.indexOf(g.id)-p.indexOf(w.id));let w=g.map(p=>p.image_id).filter(Boolean);await Promise.allSettled(w.map(p=>eo._fetchWalletImage(p))),en.featured=g}},async fetchRecommendedWallets(){let{includeWalletIds:p,excludeWalletIds:g,featuredWalletIds:w}=et.state,m=[...g??[],...w??[]].filter(Boolean),{data:v,count:x}=await ei.get({path:"/getWallets",headers:eo._getApiHeaders(),params:{page:"1",entries:"4",include:p?.join(","),exclude:m?.join(",")}}),A=W.getRecentWallets(),_=v.map(p=>p.image_id).filter(Boolean),B=A.map(p=>p.image_id).filter(Boolean);await Promise.allSettled([..._,...B].map(p=>eo._fetchWalletImage(p))),en.recommended=v,en.count=x??0},async fetchWallets({page:p}){let{includeWalletIds:g,excludeWalletIds:w,featuredWalletIds:m}=et.state,v=[...en.recommended.map(({id:p})=>p),...w??[],...m??[]].filter(Boolean),{data:x,count:A}=await ei.get({path:"/getWallets",headers:eo._getApiHeaders(),params:{page:String(p),entries:"40",include:g?.join(","),exclude:v.join(",")}}),_=x.map(p=>p.image_id).filter(Boolean);await Promise.allSettled([..._.map(p=>eo._fetchWalletImage(p)),B.wait(300)]),en.wallets=[...en.wallets,...x],en.count=A>en.count?A:en.count,en.page=p},async searchWallet({search:p}){let{includeWalletIds:g,excludeWalletIds:w}=et.state;en.search=[];let{data:m}=await ei.get({path:"/getWallets",headers:eo._getApiHeaders(),params:{page:"1",entries:"100",search:p,include:g?.join(","),exclude:w?.join(",")}}),v=m.map(p=>p.image_id).filter(Boolean);await Promise.allSettled([...v.map(p=>eo._fetchWalletImage(p)),B.wait(300)]),en.search=m},prefetch(){en.prefetchPromise=Promise.race([Promise.allSettled([eo.fetchFeaturedWallets(),eo.fetchRecommendedWallets(),eo.fetchNetworkImages(),eo.fetchConnectorImages()]),B.wait(3e3)])}},ea=B.getAnalyticsUrl(),es=new FetchUtil({baseUrl:ea}),el=["MODAL_CREATED"],ec=vanilla_proxy({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),eu={state:ec,subscribe:p=>vanilla_subscribe(ec,()=>p(ec)),_getApiHeaders(){let{projectId:p,sdkType:g,sdkVersion:w}=et.state;return{"x-project-id":p,"x-sdk-type":g,"x-sdk-version":w}},async _sendAnalyticsEvent(p){try{if(el.includes(p.data.event)||"undefined"==typeof window)return;await es.post({path:"/e",headers:eu._getApiHeaders(),body:{eventId:B.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:p.timestamp,props:p.data}})}catch{}},sendEvent(p){ec.timestamp=Date.now(),ec.data=p,et.state.enableAnalytics&&eu._sendAnalyticsEvent(ec)}},ed=vanilla_proxy({view:"Connect",history:["Connect"]}),eh={state:ed,subscribeKey:(p,g)=>subscribeKey(ed,p,g),push(p,g){p!==ed.view&&(ed.view=p,ed.history.push(p),ed.data=g)},reset(p){ed.view=p,ed.history=[p]},replace(p){ed.history.length>1&&ed.history.at(-1)!==p&&(ed.view=p,ed.history[ed.history.length-1]=p)},goBack(){if(ed.history.length>1){ed.history.pop();let[p]=ed.history.slice(-1);p&&(ed.view=p)}}},ef=vanilla_proxy({open:!1}),ep={state:ef,subscribeKey:(p,g)=>subscribeKey(ef,p,g),async open(p){await eo.state.prefetchPromise,p?.view?eh.reset(p.view):T.state.isConnected?eh.reset("Account"):eh.reset("Connect"),ef.open=!0,Y.set({open:!0}),eu.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){ef.open=!1,Y.set({open:!1}),eu.sendEvent({type:"track",event:"MODAL_CLOSE"})}},eg=B.getBlockchainApiUrl(),ew=new FetchUtil({baseUrl:eg}),em={fetchIdentity:({caipChainId:p,address:g})=>ew.get({path:`/v1/identity/${g}`,params:{chainId:p,projectId:et.state.projectId}}),fetchTransactions:({account:p,projectId:g,cursor:w})=>ew.get({path:`/v1/account/${p}/history?projectId=${g}`,params:w?{cursor:w}:{}})},eb=vanilla_proxy({message:"",variant:"success",open:!1}),ev={state:eb,subscribeKey:(p,g)=>subscribeKey(eb,p,g),showSuccess(p){eb.message=p,eb.variant="success",eb.open=!0},showError(p){eb.message=p,eb.variant="error",eb.open=!0},hide(){eb.open=!1}},ey=vanilla_proxy({transactions:[],transactionsByYear:{},loading:!1,empty:!1,next:void 0}),eC={state:ey,subscribe:p=>vanilla_subscribe(ey,()=>p(ey)),async fetchTransactions(p){let{projectId:g}=et.state;if(!g||!p)throw Error("Transactions can't be fetched without a projectId and an accountAddress");ey.loading=!0;try{let w=await em.fetchTransactions({account:p,projectId:g,cursor:ey.next}),m=this.filterSpamTransactions(w.data),v=[...ey.transactions,...m];ey.loading=!1,ey.transactions=v,ey.transactionsByYear=this.groupTransactionsByYear(ey.transactionsByYear,m),ey.empty=0===v.length,ey.next=w.next?w.next:void 0}catch(w){eu.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:p,projectId:g,cursor:ey.next}}),ev.showError("Failed to fetch transactions"),ey.loading=!1,ey.empty=!0}},groupTransactionsByYear:(p={},g=[])=>(g.forEach(g=>{let w=new Date(g.metadata.minedAt).getFullYear();p[w]||(p[w]=[]),p[w]?.push(g)}),p),filterSpamTransactions:p=>p.filter(p=>{let g=p.transfers.every(p=>p.nft_info?.flags.is_spam===!0);return!g}),resetTransactions(){ey.transactions=[],ey.transactionsByYear={},ey.loading=!1,ey.empty=!1,ey.next=void 0}},ex=vanilla_proxy({wcError:!1,buffering:!1}),eA={state:ex,subscribeKey:(p,g)=>subscribeKey(ex,p,g),_getClient(){if(!ex._client)throw Error("ConnectionController client not set");return ex._client},setClient(p){ex._client=vanilla_ref(p)},connectWalletConnect(){ex.wcPromise=this._getClient().connectWalletConnect(p=>{ex.wcUri=p,ex.wcPairingExpiry=B.getPairingExpiry()})},async connectExternal(p){await this._getClient().connectExternal?.(p)},checkInstalled(p){return this._getClient().checkInstalled?.(p)},resetWcConnection(){ex.wcUri=void 0,ex.wcPairingExpiry=void 0,ex.wcPromise=void 0,ex.wcLinking=void 0,ex.recentWallet=void 0,eC.resetTransactions(),W.deleteWalletConnectDeepLink()},setWcLinking(p){ex.wcLinking=p},setWcError(p){ex.wcError=p,ex.buffering=!1},setRecentWallet(p){ex.recentWallet=p},setBuffering(p){ex.buffering=p},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},eE=vanilla_proxy({status:"uninitialized"}),e_={state:eE,subscribeKey:(p,g)=>subscribeKey(eE,p,g),subscribe:p=>vanilla_subscribe(eE,()=>p(eE)),_getClient(){if(!eE._client)throw Error("SIWEController client not set");return eE._client},setSIWEClient(p){eE._client=vanilla_ref(p),eE.status="ready"},setNonce(p){eE.nonce=p},setStatus(p){eE.status=p},setMessage(p){eE.message=p},setSession(p){eE.session=p}},ek=vanilla_proxy({themeMode:"dark",themeVariables:{}}),eP={state:ek,subscribe:p=>vanilla_subscribe(ek,()=>p(ek)),setThemeMode(p){ek.themeMode=p},setThemeVariables(p){ek.themeVariables={...ek.themeVariables,...p}}},eS={getWalletImage:p=>p?.image_url?p?.image_url:p?.image_id?Q.state.walletImages[p.image_id]:void 0,getNetworkImage:p=>p?.imageUrl?p?.imageUrl:p?.imageId?Q.state.networkImages[p.imageId]:void 0,getConnectorImage:p=>p?.imageUrl?p.imageUrl:p?.imageId?Q.state.connectorImages[p.imageId]:void 0}},25643:function(p,g,w){"use strict";let m,v,x;w.r(g),w.d(g,{TransactionUtil:function(){return rM},UiHelperUtil:function(){return tp},WuiAccountButton:function(){return tx},WuiAllWalletsImage:function(){return tk},WuiAvatar:function(){return tb},WuiButton:function(){return tS},WuiCard:function(){return z},WuiCardSelect:function(){return t$},WuiCardSelectLoader:function(){return tR},WuiChip:function(){return tj},WuiConnectButton:function(){return tU},WuiCtaButton:function(){return tz},WuiEmailInput:function(){return tV},WuiFlex:function(){return tw},WuiGrid:function(){return rI},WuiIcon:function(){return eQ},WuiIconBox:function(){return ty},WuiIconLink:function(){return tY},WuiImage:function(){return eK},WuiInputElement:function(){return tX},WuiInputNumeric:function(){return t1},WuiInputText:function(){return tG},WuiLink:function(){return t5},WuiListItem:function(){return t4},WuiListWallet:function(){return ro},WuiLoadingHexagon:function(){return eZ},WuiLoadingSpinner:function(){return eJ},WuiLoadingThumbnail:function(){return e0},WuiLogo:function(){return rs},WuiLogoSelect:function(){return rc},WuiNetworkButton:function(){return rd},WuiNetworkImage:function(){return tN},WuiOtp:function(){return rf},WuiQrCode:function(){return rm},WuiSearchBar:function(){return rv},WuiSeparator:function(){return rR},WuiShimmer:function(){return e2},WuiSnackbar:function(){return rC},WuiTabs:function(){return rA},WuiTag:function(){return ri},WuiText:function(){return e6},WuiTooltip:function(){return r_},WuiTransactionListItem:function(){return t7},WuiTransactionListItemLoader:function(){return rt},WuiTransactionVisual:function(){return t8},WuiVisual:function(){return th},WuiVisualThumbnail:function(){return rP},WuiWalletImage:function(){return tE},customElement:function(){return customElement},initializeTheming:function(){return initializeTheming},setColorTheme:function(){return setColorTheme},setThemeVariables:function(){return setThemeVariables}});var A,_,B=w(92233);function initializeTheming(p,g){m=document.createElement("style"),v=document.createElement("style"),x=document.createElement("style"),m.textContent=createRootStyles(p).core.cssText,v.textContent=createRootStyles(p).dark.cssText,x.textContent=createRootStyles(p).light.cssText,document.head.appendChild(m),document.head.appendChild(v),document.head.appendChild(x),setColorTheme(g)}function setColorTheme(p){v&&x&&("light"===p?(v.removeAttribute("media"),x.media="enabled"):(x.removeAttribute("media"),v.media="enabled"))}function setThemeVariables(p){m&&v&&x&&(m.textContent=createRootStyles(p).core.cssText,v.textContent=createRootStyles(p).dark.cssText,x.textContent=createRootStyles(p).light.cssText)}function createRootStyles(p){return{core:B.iv`
      :root {
        --w3m-color-mix-strength: ${(0,B.$m)(p?.["--w3m-color-mix-strength"]?`${p["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,B.$m)(p?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,B.$m)(p?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,B.$m)(p?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,B.$m)(p?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:B.iv`
      :root {
        --w3m-color-mix: ${(0,B.$m)(p?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,B.$m)(p?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:B.iv`
      :root {
        --w3m-color-mix: ${(0,B.$m)(p?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,B.$m)(p?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let O=B.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,T=B.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,U=B.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function customElement(p){return function(g){return"function"==typeof g?(customElements.get(p)||customElements.define(p,g),g):function(p,g){let{kind:w,elements:m}=g;return{kind:w,elements:m,finisher(g){customElements.get(p)||customElements.define(p,g)}}}(p,g)}}var F=B.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let z=class extends B.oi{render(){return B.dy`<slot></slot>`}};z.styles=[O,F],z=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([customElement("wui-card")],z);var W=w(18569),q=B.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let Q=B.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,G=B.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,K=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Z=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Y=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,J=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,X=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,ee=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,et=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,er=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ei=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,en=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eo=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,ea=B.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,es=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,el=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ec=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,eu=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,ed=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,eh=B.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,ef=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,ep=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eg=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,ew=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,em=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,eb=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ev=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ey=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eC=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ex=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eA=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,eE=B.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,e_=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ek=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,eP=B.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,eS=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,eI=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,eB=B.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,eR=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,eO=B.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,eT=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eN=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,eM=B.YP`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,e$=B.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eD=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ej=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eL=B.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eU=B.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,eF=B.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ez=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,eW=B.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,eq=B.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var wui_icon_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eH={allWallets:Q,appStore:G,chromeStore:ea,apple:K,arrowBottom:Z,arrowLeft:Y,arrowRight:J,arrowTop:X,browser:ee,checkmark:et,chevronBottom:er,chevronLeft:ei,chevronRight:en,chevronTop:eo,clock:es,close:el,compass:eu,coinPlaceholder:ec,copy:ed,cursor:eh,desktop:ef,disconnect:ep,discord:eg,etherscan:ew,extension:em,externalLink:eb,facebook:ev,filters:ey,github:eC,google:ex,helpCircle:eA,infoCircle:eE,mail:e_,mobile:ek,networkPlaceholder:eP,nftPlaceholder:eS,off:eI,playStore:eB,qrCode:eR,refresh:eO,search:eT,swapHorizontal:eN,swapHorizontalBold:eM,swapVertical:e$,telegram:eD,twitch:ej,twitter:eL,twitterIcon:eU,wallet:ez,walletConnect:eW,walletPlaceholder:eF,warningCircle:eq},eQ=class extends B.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,B.dy`${eH[this.name]}`}};eQ.styles=[O,U,q],wui_icon_decorate([(0,W.Cb)()],eQ.prototype,"size",void 0),wui_icon_decorate([(0,W.Cb)()],eQ.prototype,"name",void 0),wui_icon_decorate([(0,W.Cb)()],eQ.prototype,"color",void 0),eQ=wui_icon_decorate([customElement("wui-icon")],eQ);var eG=B.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,wui_image_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eK=class extends B.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return B.dy`<img src=${this.src} alt=${this.alt} />`}};eK.styles=[O,U,eG],wui_image_decorate([(0,W.Cb)()],eK.prototype,"src",void 0),wui_image_decorate([(0,W.Cb)()],eK.prototype,"alt",void 0),eK=wui_image_decorate([customElement("wui-image")],eK);var eV=B.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eZ=class extends B.oi{render(){return B.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eZ.styles=[O,eV],eZ=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([customElement("wui-loading-hexagon")],eZ);var eY=B.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,wui_loading_spinner_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eJ=class extends B.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,B.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eJ.styles=[O,eY],wui_loading_spinner_decorate([(0,W.Cb)()],eJ.prototype,"color",void 0),wui_loading_spinner_decorate([(0,W.Cb)()],eJ.prototype,"size",void 0),eJ=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],eJ);var eX=B.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,wui_loading_thumbnail_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e0=class extends B.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let p=this.radius>50?50:this.radius,g=36-p;return B.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${p}
          stroke-dasharray="${116+g} ${245+g}"
          stroke-dashoffset=${360+1.75*g}
        />
      </svg>
    `}};e0.styles=[O,eX],wui_loading_thumbnail_decorate([(0,W.Cb)({type:Number})],e0.prototype,"radius",void 0),e0=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],e0);var e1=B.iv`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,wui_shimmer_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e2=class extends B.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,B.dy`<slot></slot>`}};e2.styles=[e1],wui_shimmer_decorate([(0,W.Cb)()],e2.prototype,"width",void 0),wui_shimmer_decorate([(0,W.Cb)()],e2.prototype,"height",void 0),wui_shimmer_decorate([(0,W.Cb)()],e2.prototype,"borderRadius",void 0),e2=wui_shimmer_decorate([customElement("wui-shimmer")],e2);var e5=w(88382);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e=p=>(...g)=>({_$litDirective$:p,values:g});let i=class i{constructor(p){}get _$AU(){return this._$AM._$AU}_$AT(p,g,w){this._$Ct=p,this._$AM=g,this._$Ci=w}_$AS(p,g){return this.update(p,g)}update(p,g){return this.render(...g)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let e3=e(class extends i{constructor(p){if(super(p),1!==p.type||"class"!==p.name||p.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(p){return" "+Object.keys(p).filter(g=>p[g]).join(" ")+" "}update(p,[g]){if(void 0===this.it){for(let w in this.it=new Set,void 0!==p.strings&&(this.st=new Set(p.strings.join(" ").split(/\s/).filter(p=>""!==p))),g)g[w]&&!this.st?.has(w)&&this.it.add(w);return this.render(g)}let w=p.element.classList;for(let p of this.it)p in g||(w.remove(p),this.it.delete(p));for(let p in g){let m=!!g[p];m===this.it.has(p)||this.st?.has(p)||(m?(w.add(p),this.it.add(p)):(w.remove(p),this.it.delete(p)))}return e5.Jb}});var e4=B.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,wui_text_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e6=class extends B.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let p={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,B.dy`<slot class=${e3(p)}></slot>`}};e6.styles=[O,e4],wui_text_decorate([(0,W.Cb)()],e6.prototype,"variant",void 0),wui_text_decorate([(0,W.Cb)()],e6.prototype,"color",void 0),wui_text_decorate([(0,W.Cb)()],e6.prototype,"align",void 0),e6=wui_text_decorate([customElement("wui-text")],e6);let e8=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,e9=B.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,e7=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,te=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tt=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tr=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,ti=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tn=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,to=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,ta=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ts=B.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tl=B.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,tc=B.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var tu=B.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,wui_visual_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let td={browser:e8,dao:e9,defi:e7,defiAlt:te,eth:tt,layers:tr,lock:ti,login:tn,network:to,nft:ta,noun:ts,profile:tl,system:tc},th=class extends B.oi{constructor(){super(...arguments),this.name="browser"}render(){return B.dy`${td[this.name]}`}};th.styles=[O,tu],wui_visual_decorate([(0,W.Cb)()],th.prototype,"name",void 0),th=wui_visual_decorate([customElement("wui-visual")],th);var tf=w(67623);let tp={getSpacingStyles:(p,g)=>Array.isArray(p)?p[g]?`var(--wui-spacing-${p[g]})`:void 0:"string"==typeof p?`var(--wui-spacing-${p})`:void 0,getFormattedDate:p=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(p),getHostName(p){let g=new URL(p);return g.hostname},getTruncateString:({string:p,charsStart:g,charsEnd:w,truncate:m})=>p.length<=g+w?p:"end"===m?`${p.substring(0,g)}...`:"start"===m?`...${p.substring(p.length-w)}`:`${p.substring(0,Math.floor(g))}...${p.substring(p.length-Math.floor(w))}`,generateAvatarColors(p){let g=p.toLowerCase().replace(/^0x/iu,""),w=g.substring(0,6),m=this.hexToRgb(w),v=[];for(let p=0;p<5;p+=1){let g=this.tintColor(m,.15*p);v.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${v[0]};
    --local-color-2: ${v[1]};
    --local-color-3: ${v[2]};
    --local-color-4: ${v[3]};
    --local-color-5: ${v[4]};
   `},hexToRgb(p){let g=parseInt(p,16);return[g>>16&255,g>>8&255,255&g]},tintColor(p,g){let[w,m,v]=p;return[Math.round(w+(255-w)*g),Math.round(m+(255-m)*g),Math.round(v+(255-v)*g)]},isNumber:p=>/^[0-9]+$/u.test(p),getColorTheme:p=>p||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var tg=B.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,wui_flex_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tw=class extends B.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tp.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tp.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tp.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tp.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tp.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tp.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tp.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tp.getSpacingStyles(this.margin,3)};
    `,B.dy`<slot></slot>`}};tw.styles=[O,tg],wui_flex_decorate([(0,W.Cb)()],tw.prototype,"flexDirection",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"flexWrap",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"flexBasis",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"flexGrow",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"flexShrink",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"alignItems",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"justifyContent",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"columnGap",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"rowGap",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"gap",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"padding",void 0),wui_flex_decorate([(0,W.Cb)()],tw.prototype,"margin",void 0),tw=wui_flex_decorate([customElement("wui-flex")],tw);var tm=B.iv`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,wui_avatar_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tb=class extends B.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return B.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",B.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let p=tp.generateAvatarColors(this.address);return this.style.cssText=p,null}return this.dataset.variant="default",null}};tb.styles=[O,tm],wui_avatar_decorate([(0,W.Cb)()],tb.prototype,"imageSrc",void 0),wui_avatar_decorate([(0,W.Cb)()],tb.prototype,"alt",void 0),wui_avatar_decorate([(0,W.Cb)()],tb.prototype,"address",void 0),tb=wui_avatar_decorate([customElement("wui-avatar")],tb);var tv=B.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,wui_icon_box_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ty=class extends B.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let p=this.iconSize||this.size,g="lg"===this.size,w="gray"===this.background,m="opaque"===this.background,v="accent-100"===this.backgroundColor&&m||"success-100"===this.backgroundColor&&m||"error-100"===this.backgroundColor&&m||"inverse-100"===this.backgroundColor&&m,x=`var(--wui-color-${this.backgroundColor})`;return v?x=`var(--wui-icon-box-bg-${this.backgroundColor})`:w&&(x=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${x};
       --local-bg-mix: ${v||w?"100%":g?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${g?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,B.dy` <wui-icon color=${this.iconColor} size=${p} name=${this.icon}></wui-icon> `}};ty.styles=[O,T,tv],wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"size",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"backgroundColor",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"iconColor",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"iconSize",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"background",void 0),wui_icon_box_decorate([(0,W.Cb)({type:Boolean})],ty.prototype,"border",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"borderColor",void 0),wui_icon_box_decorate([(0,W.Cb)()],ty.prototype,"icon",void 0),ty=wui_icon_box_decorate([customElement("wui-icon-box")],ty);var tC=B.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,wui_account_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tx=class extends B.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return B.dy`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,tf.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${tp.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let p=this.networkSrc?B.dy`<wui-image src=${this.networkSrc}></wui-image>`:B.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return B.dy`
        ${p}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};tx.styles=[O,T,tC],wui_account_button_decorate([(0,W.Cb)()],tx.prototype,"networkSrc",void 0),wui_account_button_decorate([(0,W.Cb)()],tx.prototype,"avatarSrc",void 0),wui_account_button_decorate([(0,W.Cb)()],tx.prototype,"balance",void 0),wui_account_button_decorate([(0,W.Cb)({type:Boolean})],tx.prototype,"disabled",void 0),wui_account_button_decorate([(0,W.Cb)({type:Boolean})],tx.prototype,"isProfileName",void 0),wui_account_button_decorate([(0,W.Cb)()],tx.prototype,"address",void 0),tx=wui_account_button_decorate([customElement("wui-account-button")],tx);var tA=B.iv`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,wui_wallet_image_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tE=class extends B.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let p="xxs";return p="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${p});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),B.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?B.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:B.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tE.styles=[O,tA],wui_wallet_image_decorate([(0,W.Cb)()],tE.prototype,"size",void 0),wui_wallet_image_decorate([(0,W.Cb)()],tE.prototype,"name",void 0),wui_wallet_image_decorate([(0,W.Cb)()],tE.prototype,"imageSrc",void 0),wui_wallet_image_decorate([(0,W.Cb)()],tE.prototype,"walletIcon",void 0),tE=wui_wallet_image_decorate([customElement("wui-wallet-image")],tE);var t_=B.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,wui_all_wallets_image_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tk=class extends B.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let p=this.walletImages.length<4;return B.dy`${this.walletImages.slice(0,4).map(({src:p,walletName:g})=>B.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${p}
            name=${(0,tf.o)(g)}
          ></wui-wallet-image>
        `)}
    ${p?[...Array(4-this.walletImages.length)].map(()=>B.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};tk.styles=[O,t_],wui_all_wallets_image_decorate([(0,W.Cb)({type:Array})],tk.prototype,"walletImages",void 0),tk=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],tk);var tP=B.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,wui_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tS=class extends B.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let p="md"===this.size?"paragraph-600":"small-600";return B.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${p} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?B.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:B.dy``}};tS.styles=[O,T,tP],wui_button_decorate([(0,W.Cb)()],tS.prototype,"size",void 0),wui_button_decorate([(0,W.Cb)({type:Boolean})],tS.prototype,"disabled",void 0),wui_button_decorate([(0,W.Cb)({type:Boolean})],tS.prototype,"fullWidth",void 0),wui_button_decorate([(0,W.Cb)({type:Boolean})],tS.prototype,"loading",void 0),wui_button_decorate([(0,W.Cb)()],tS.prototype,"variant",void 0),tS=wui_button_decorate([customElement("wui-button")],tS);let tI=B.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tB=B.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,wui_card_select_loader_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tR=class extends B.oi{constructor(){super(...arguments),this.type="wallet"}render(){return B.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?B.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tI}`:B.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tR.styles=[O,T,tB],wui_card_select_loader_decorate([(0,W.Cb)()],tR.prototype,"type",void 0),tR=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],tR);let tO=B.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tT=B.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,wui_network_image_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tN=class extends B.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let p="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${p?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${p?"86px":"48px"};
      --local-height: ${p?"96px":"54px"};
      --local-icon-size: ${p?"42px":"24px"};
    `,B.dy`${this.templateVisual()} ${p?tO:tI}`}templateVisual(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:B.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tN.styles=[O,tT],wui_network_image_decorate([(0,W.Cb)()],tN.prototype,"size",void 0),wui_network_image_decorate([(0,W.Cb)()],tN.prototype,"name",void 0),wui_network_image_decorate([(0,W.Cb)()],tN.prototype,"imageSrc",void 0),wui_network_image_decorate([(0,W.Cb)({type:Boolean})],tN.prototype,"selected",void 0),tN=wui_network_image_decorate([customElement("wui-network-image")],tN);var tM=B.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,wui_card_select_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t$=class extends B.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return B.dy`
      <button data-selected=${(0,tf.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?B.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,tf.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:B.dy`
      <wui-wallet-image size="md" imageSrc=${(0,tf.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};t$.styles=[O,T,tM],wui_card_select_decorate([(0,W.Cb)()],t$.prototype,"name",void 0),wui_card_select_decorate([(0,W.Cb)()],t$.prototype,"type",void 0),wui_card_select_decorate([(0,W.Cb)()],t$.prototype,"imageSrc",void 0),wui_card_select_decorate([(0,W.Cb)({type:Boolean})],t$.prototype,"disabled",void 0),wui_card_select_decorate([(0,W.Cb)({type:Boolean})],t$.prototype,"selected",void 0),t$=wui_card_select_decorate([customElement("wui-card-select")],t$);var tD=B.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_chip_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tj=class extends B.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let p="transparent"===this.variant?"small-600":"paragraph-600";return B.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${p} color="inherit">
          ${tp.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};tj.styles=[O,T,tD],wui_chip_decorate([(0,W.Cb)()],tj.prototype,"variant",void 0),wui_chip_decorate([(0,W.Cb)()],tj.prototype,"imageSrc",void 0),wui_chip_decorate([(0,W.Cb)({type:Boolean})],tj.prototype,"disabled",void 0),wui_chip_decorate([(0,W.Cb)()],tj.prototype,"icon",void 0),wui_chip_decorate([(0,W.Cb)()],tj.prototype,"href",void 0),tj=wui_chip_decorate([customElement("wui-chip")],tj);var tL=B.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,wui_connect_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tU=class extends B.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let p="md"===this.size?"paragraph-600":"small-600";return B.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${p} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?B.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tU.styles=[O,T,tL],wui_connect_button_decorate([(0,W.Cb)()],tU.prototype,"size",void 0),wui_connect_button_decorate([(0,W.Cb)({type:Boolean})],tU.prototype,"loading",void 0),tU=wui_connect_button_decorate([customElement("wui-connect-button")],tU);var tF=B.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_cta_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tz=class extends B.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return B.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tz.styles=[O,T,tF],wui_cta_button_decorate([(0,W.Cb)({type:Boolean})],tz.prototype,"disabled",void 0),wui_cta_button_decorate([(0,W.Cb)()],tz.prototype,"label",void 0),wui_cta_button_decorate([(0,W.Cb)()],tz.prototype,"buttonLabel",void 0),tz=wui_cta_button_decorate([customElement("wui-cta-button")],tz);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:tW}=e5._$LH,directive_helpers_f=p=>void 0===p.strings,async_directive_s=(p,g)=>{let w=p._$AN;if(void 0===w)return!1;for(let p of w)p._$AO?.(g,!1),async_directive_s(p,g);return!0},o=p=>{let g,w;do{if(void 0===(g=p._$AM))break;(w=g._$AN).delete(p),p=g}while(0===w?.size)},async_directive_r=p=>{for(let g;g=p._$AM;p=g){let w=g._$AN;if(void 0===w)g._$AN=w=new Set;else if(w.has(p))break;w.add(p),async_directive_c(g)}};function async_directive_h(p){void 0!==this._$AN?(o(this),this._$AM=p,async_directive_r(this)):this._$AM=p}function async_directive_n(p,g=!1,w=0){let m=this._$AH,v=this._$AN;if(void 0!==v&&0!==v.size){if(g){if(Array.isArray(m))for(let p=w;p<m.length;p++)async_directive_s(m[p],!1),o(m[p]);else null!=m&&(async_directive_s(m,!1),o(m))}else async_directive_s(this,p)}}let async_directive_c=p=>{2==p.type&&(p._$AP??=async_directive_n,p._$AQ??=async_directive_h)};let f=class f extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(p,g,w){super._$AT(p,g,w),async_directive_r(this),this.isConnected=p._$AU}_$AO(p,g=!0){p!==this.isConnected&&(this.isConnected=p,p?this.reconnected?.():this.disconnected?.()),g&&(async_directive_s(this,p),o(this))}setValue(p){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(p,this);else{let g=[...this._$Ct._$AH];g[this._$Ci]=p,this._$Ct._$AI(g,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ref_e=()=>new ref_h;let ref_h=class ref_h{};let tq=new WeakMap,tH=e(class extends f{render(p){return e5.Ld}update(p,[g]){let w=g!==this.G;return w&&void 0!==this.G&&this.ot(void 0),(w||this.rt!==this.lt)&&(this.G=g,this.ct=p.options?.host,this.ot(this.lt=p.element)),e5.Ld}ot(p){if("function"==typeof this.G){let g=this.ct??globalThis,w=tq.get(g);void 0===w&&(w=new WeakMap,tq.set(g,w)),void 0!==w.get(this.G)&&this.G.call(this.ct,void 0),w.set(this.G,p),void 0!==p&&this.G.call(this.ct,p)}else this.G.value=p}get rt(){return"function"==typeof this.G?tq.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var tQ=B.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,wui_input_text_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tG=class extends B.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ref_e()}render(){let p=`wui-size-${this.size}`;return B.dy` ${this.templateIcon()}
      <input
        ${tH(this.inputElementRef)}
        class=${p}
        type=${this.type}
        enterkeyhint=${(0,tf.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?B.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tG.styles=[O,T,tQ],wui_input_text_decorate([(0,W.Cb)()],tG.prototype,"size",void 0),wui_input_text_decorate([(0,W.Cb)()],tG.prototype,"icon",void 0),wui_input_text_decorate([(0,W.Cb)({type:Boolean})],tG.prototype,"disabled",void 0),wui_input_text_decorate([(0,W.Cb)()],tG.prototype,"placeholder",void 0),wui_input_text_decorate([(0,W.Cb)()],tG.prototype,"type",void 0),wui_input_text_decorate([(0,W.Cb)()],tG.prototype,"keyHint",void 0),tG=wui_input_text_decorate([customElement("wui-input-text")],tG);var tK=B.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,wui_email_input_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tV=class extends B.oi{render(){return B.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?B.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};tV.styles=[O,tK],wui_email_input_decorate([(0,W.Cb)()],tV.prototype,"errorMessage",void 0),tV=wui_email_input_decorate([customElement("wui-email-input")],tV);var tZ=B.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,wui_icon_link_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tY=class extends B.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return B.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};tY.styles=[O,T,U,tZ],wui_icon_link_decorate([(0,W.Cb)()],tY.prototype,"size",void 0),wui_icon_link_decorate([(0,W.Cb)({type:Boolean})],tY.prototype,"disabled",void 0),wui_icon_link_decorate([(0,W.Cb)()],tY.prototype,"icon",void 0),wui_icon_link_decorate([(0,W.Cb)()],tY.prototype,"iconColor",void 0),tY=wui_icon_link_decorate([customElement("wui-icon-link")],tY);var tJ=B.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,wui_input_element_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tX=class extends B.oi{constructor(){super(...arguments),this.icon="copy"}render(){return B.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};tX.styles=[O,T,tJ],wui_input_element_decorate([(0,W.Cb)()],tX.prototype,"icon",void 0),tX=wui_input_element_decorate([customElement("wui-input-element")],tX);var t0=B.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_input_numeric_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t1=class extends B.oi{constructor(){super(...arguments),this.disabled=!1}render(){return B.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};t1.styles=[O,T,t0],wui_input_numeric_decorate([(0,W.Cb)({type:Boolean})],t1.prototype,"disabled",void 0),t1=wui_input_numeric_decorate([customElement("wui-input-numeric")],t1);var t2=B.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,wui_link_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t5=class extends B.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return B.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};t5.styles=[O,T,t2],wui_link_decorate([(0,W.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),wui_link_decorate([(0,W.Cb)()],t5.prototype,"color",void 0),t5=wui_link_decorate([customElement("wui-link")],t5);var t3=B.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,wui_list_item_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t4=class extends B.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return B.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,tf.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return B.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return B.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let p=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",g="square-blue"===this.iconVariant?"mdl":"md",w=this.iconSize?this.iconSize:g;return B.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${w}
          background="transparent"
          iconColor=${p}
          backgroundColor=${p}
          size=${g}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?B.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:B.dy``}chevronTemplate(){return this.chevron?B.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};t4.styles=[O,T,t3],wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"icon",void 0),wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"iconSize",void 0),wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"variant",void 0),wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"iconVariant",void 0),wui_list_item_decorate([(0,W.Cb)({type:Boolean})],t4.prototype,"disabled",void 0),wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"imageSrc",void 0),wui_list_item_decorate([(0,W.Cb)()],t4.prototype,"alt",void 0),wui_list_item_decorate([(0,W.Cb)({type:Boolean})],t4.prototype,"chevron",void 0),wui_list_item_decorate([(0,W.Cb)({type:Boolean})],t4.prototype,"loading",void 0),t4=wui_list_item_decorate([customElement("wui-list-item")],t4),(A=_||(_={})).approve="approved",A.bought="bought",A.borrow="borrowed",A.burn="burnt",A.cancel="canceled",A.claim="claimed",A.deploy="deployed",A.deposit="deposited",A.execute="executed",A.mint="minted",A.receive="received",A.repay="repaid",A.send="sent",A.sell="sold",A.stake="staked",A.trade="swapped",A.unstake="unstaked",A.withdraw="withdrawn";var t6=B.iv`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,wui_transaction_visual_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t8=class extends B.oi{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[p,g]=this.images,w=p?.type==="NFT",m=g?.url?"NFT"===g.type:w;return this.style.cssText=`
    --local-left-border-radius: ${w?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${m?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,B.dy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[p,g]=this.images,w=p?.type,m=2===this.images.length;return m&&(p?.url||g?.url)?B.dy`<div class="swap-images-container">
        ${p?.url?B.dy`<wui-image src=${p.url} alt="Transaction image"></wui-image>`:null}
        ${g?.url?B.dy`<wui-image src=${g.url} alt="Transaction image"></wui-image>`:null}
      </div>`:p?.url?B.dy`<wui-image src=${p.url} alt="Transaction image"></wui-image>`:"NFT"===w?B.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:B.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let p,g="accent-100";return(p=this.getIcon(),this.status&&(g=this.getStatusColor()),p)?B.dy`
      <wui-icon-box
        size="xxs"
        iconColor=${g}
        backgroundColor=${g}
        background="opaque"
        icon=${p}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};t8.styles=[t6],wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"type",void 0),wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"status",void 0),wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"direction",void 0),wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"onlyDirectionIcon",void 0),wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"images",void 0),wui_transaction_visual_decorate([(0,W.Cb)()],t8.prototype,"secondImage",void 0),t8=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],t8);var t9=B.iv`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,wui_transaction_list_item_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let t7=class extends B.oi{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return B.dy`
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${_[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let p=this.descriptions?.[0];return p?B.dy`
          <wui-text variant="small-500" color="fg-200">
            <span>${p}</span>
          </wui-text>
        `:null}templateSecondDescription(){let p=this.descriptions?.[1];return p?B.dy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${p}</span>
          </wui-text>
        `:null}};t7.styles=[O,t9],wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"type",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"descriptions",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"date",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"onlyDirectionIcon",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"status",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"direction",void 0),wui_transaction_list_item_decorate([(0,W.Cb)()],t7.prototype,"images",void 0),t7=wui_transaction_list_item_decorate([customElement("wui-transaction-list-item")],t7);var re=B.iv`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let rt=class extends B.oi{render(){return B.dy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};rt.styles=[O,re],rt=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([customElement("wui-transaction-list-item-loader")],rt);var rr=B.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,wui_tag_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ri=class extends B.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,B.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ri.styles=[O,rr],wui_tag_decorate([(0,W.Cb)()],ri.prototype,"variant",void 0),ri=wui_tag_decorate([customElement("wui-tag")],ri);var rn=B.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,wui_list_wallet_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ro=class extends B.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return B.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?B.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?B.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?B.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:B.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?B.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?B.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};ro.styles=[O,T,rn],wui_list_wallet_decorate([(0,W.Cb)({type:Array})],ro.prototype,"walletImages",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"imageSrc",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"name",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"tagLabel",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"tagVariant",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"icon",void 0),wui_list_wallet_decorate([(0,W.Cb)()],ro.prototype,"walletIcon",void 0),wui_list_wallet_decorate([(0,W.Cb)({type:Boolean})],ro.prototype,"disabled",void 0),wui_list_wallet_decorate([(0,W.Cb)({type:Boolean})],ro.prototype,"showAllWallets",void 0),ro=wui_list_wallet_decorate([customElement("wui-list-wallet")],ro);var ra=B.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,wui_logo_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rs=class extends B.oi{constructor(){super(...arguments),this.logo="google"}render(){return B.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rs.styles=[O,ra],wui_logo_decorate([(0,W.Cb)()],rs.prototype,"logo",void 0),rs=wui_logo_decorate([customElement("wui-logo")],rs);var rl=B.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_logo_select_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rc=class extends B.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return B.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};rc.styles=[O,T,rl],wui_logo_select_decorate([(0,W.Cb)()],rc.prototype,"logo",void 0),wui_logo_select_decorate([(0,W.Cb)({type:Boolean})],rc.prototype,"disabled",void 0),rc=wui_logo_select_decorate([customElement("wui-logo-select")],rc);var ru=B.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,wui_network_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rd=class extends B.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return B.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc}></wui-image>`:B.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rd.styles=[O,T,ru],wui_network_button_decorate([(0,W.Cb)()],rd.prototype,"imageSrc",void 0),wui_network_button_decorate([(0,W.Cb)({type:Boolean})],rd.prototype,"disabled",void 0),rd=wui_network_button_decorate([customElement("wui-network-button")],rd);var rh=B.iv`
  :host {
    position: relative;
    display: block;
  }
`,wui_otp_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rf=class extends B.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(p,g)=>{let w=p.target,m=this.getInputElement(w);if(!m)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(p.key)&&p.preventDefault();let v=m.selectionStart;switch(p.key){case"ArrowLeft":v&&m.setSelectionRange(v+1,v+1),this.focusInputField("prev",g);break;case"ArrowRight":case"Shift":this.focusInputField("next",g);break;case"Delete":case"Backspace":""===m.value?this.focusInputField("prev",g):m.value=""}},this.focusInputField=(p,g)=>{if("next"===p){let p=g+1,w=this.numerics[p<this.length?p:g],m=w?this.getInputElement(w):void 0;m&&m.focus()}if("prev"===p){let p=g-1,w=this.numerics[p>-1?p:g],m=w?this.getInputElement(w):void 0;m&&m.focus()}}}firstUpdated(){let p=this.shadowRoot?.querySelectorAll("wui-input-numeric");p&&(this.numerics=Array.from(p))}render(){return B.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((p,g)=>B.dy`
            <wui-input-numeric
              @input=${p=>this.handleInput(p,g)}
              @keydown=${p=>this.handleKeyDown(p,g)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(p,g){let w=p.target,m=this.getInputElement(w);if(m){let w=m.value;if("insertFromPaste"===p.inputType)this.handlePaste(m,w,g);else{let v=tp.isNumber(w);v&&p.data?(m.value=p.data,this.focusInputField("next",g)):m.value=""}}}handlePaste(p,g,w){let m=g[0],v=m&&tp.isNumber(m);if(v){p.value=m;let v=g.substring(1);if(w+1<this.length&&v.length){let p=this.numerics[w+1],g=p?this.getInputElement(p):void 0;g&&this.handlePaste(g,v,w+1)}else this.focusInputField("next",w)}else p.value=""}getInputElement(p){return p.shadowRoot?.querySelector("input")?p.shadowRoot.querySelector("input"):null}};rf.styles=[O,rh],wui_otp_decorate([(0,W.Cb)({type:Number})],rf.prototype,"length",void 0),rf=wui_otp_decorate([customElement("wui-otp")],rf);var rp=w(92592);function isAdjecentDots(p,g,w){return p!==g&&(p-g<0?g-p:p-g)<=w+.1}let rg={generate(p,g,w){let m="#141414",v=[],x=function(p,g){let w=Array.prototype.slice.call(rp.create(p,{errorCorrectionLevel:"Q"}).modules.data,0),m=Math.sqrt(w.length);return w.reduce((p,g,w)=>(w%m==0?p.push([g]):p[p.length-1].push(g))&&p,[])}(p,0),A=g/x.length,_=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];_.forEach(({x:p,y:g})=>{let w=(x.length-7)*A*p,O=(x.length-7)*A*g;for(let p=0;p<_.length;p+=1){let g=A*(7-2*p);v.push(B.YP`
            <rect
              fill=${2===p?m:"transparent"}
              width=${0===p?g-5:g}
              rx= ${0===p?(g-5)*.45:.45*g}
              ry= ${0===p?(g-5)*.45:.45*g}
              stroke=${m}
              stroke-width=${0===p?5:0}
              height=${0===p?g-5:g}
              x= ${0===p?O+A*p+2.5:O+A*p}
              y= ${0===p?w+A*p+2.5:w+A*p}
            />
          `)}});let O=Math.floor((w+25)/A),T=x.length/2-O/2,U=x.length/2+O/2-1,F=[];x.forEach((p,g)=>{p.forEach((p,w)=>{if(x[g][w]&&!(g<7&&w<7||g>x.length-8&&w<7||g<7&&w>x.length-8)&&!(g>T&&g<U&&w>T&&w<U)){let p=g*A+A/2,m=w*A+A/2;F.push([p,m])}})});let z={};return F.forEach(([p,g])=>{z[p]?z[p]?.push(g):z[p]=[g]}),Object.entries(z).map(([p,g])=>{let w=g.filter(p=>g.every(g=>!isAdjecentDots(p,g,A)));return[Number(p),w]}).forEach(([p,g])=>{g.forEach(g=>{v.push(B.YP`<circle cx=${p} cy=${g} fill=${m} r=${A/2.5} />`)})}),Object.entries(z).filter(([p,g])=>g.length>1).map(([p,g])=>{let w=g.filter(p=>g.some(g=>isAdjecentDots(p,g,A)));return[Number(p),w]}).map(([p,g])=>{g.sort((p,g)=>p<g?-1:1);let w=[];for(let p of g){let g=w.find(g=>g.some(g=>isAdjecentDots(p,g,A)));g?g.push(p):w.push([p])}return[p,w.map(p=>[p[0],p[p.length-1]])]}).forEach(([p,g])=>{g.forEach(([g,w])=>{v.push(B.YP`
              <line
                x1=${p}
                x2=${p}
                y1=${g}
                y2=${w}
                stroke=${m}
                stroke-width=${A/1.25}
                stroke-linecap="round"
              />
            `)})}),v}};var rw=B.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,wui_qr_code_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rm=class extends B.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,B.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let p="light"===this.theme?this.size:this.size-32;return B.YP`
      <svg height=${p} width=${p}>
        ${rg.generate(this.uri,p,p/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:B.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rm.styles=[O,rw],wui_qr_code_decorate([(0,W.Cb)()],rm.prototype,"uri",void 0),wui_qr_code_decorate([(0,W.Cb)({type:Number})],rm.prototype,"size",void 0),wui_qr_code_decorate([(0,W.Cb)()],rm.prototype,"theme",void 0),wui_qr_code_decorate([(0,W.Cb)()],rm.prototype,"imageSrc",void 0),wui_qr_code_decorate([(0,W.Cb)()],rm.prototype,"alt",void 0),rm=wui_qr_code_decorate([customElement("wui-qr-code")],rm);var rb=B.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rv=class extends B.oi{constructor(){super(...arguments),this.inputComponentRef=ref_e()}render(){return B.dy`
      <wui-input-text
        ${tH(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let p=this.inputComponentRef.value,g=p?.inputElementRef.value;g&&(g.value="",g.focus(),g.dispatchEvent(new Event("input")))}};rv.styles=[O,rb],rv=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([customElement("wui-search-bar")],rv);var ry=B.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,wui_snackbar_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rC=class extends B.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return B.dy`
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rC.styles=[O,ry],wui_snackbar_decorate([(0,W.Cb)()],rC.prototype,"backgroundColor",void 0),wui_snackbar_decorate([(0,W.Cb)()],rC.prototype,"iconColor",void 0),wui_snackbar_decorate([(0,W.Cb)()],rC.prototype,"icon",void 0),wui_snackbar_decorate([(0,W.Cb)()],rC.prototype,"message",void 0),rC=wui_snackbar_decorate([customElement("wui-snackbar")],rC);var rx=B.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,wui_tabs_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rA=class extends B.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((p,g)=>{let w=g===this.activeTab;return B.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(g)}
          data-active=${w}
        >
          <wui-icon size="sm" color="inherit" name=${p.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${p.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(p){this.buttons&&this.animateTabs(p,!1),this.activeTab=p,this.onTabChange(p)}animateTabs(p,g){let w=this.buttons[this.activeTab],m=this.buttons[p],v=w?.querySelector("wui-text"),x=m?.querySelector("wui-text"),A=m?.getBoundingClientRect(),_=x?.getBoundingClientRect();w&&v&&!g&&p!==this.activeTab&&(v.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),w.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),m&&A&&_&&x&&(p!==this.activeTab||g)&&(this.localTabWidth=`${Math.round(A.width+_.width)+6}px`,m.animate([{width:`${A.width+_.width}px`}],{duration:g?0:500,fill:"forwards",easing:"ease"}),x.animate([{opacity:1}],{duration:g?0:125,delay:g?0:200,fill:"forwards",easing:"ease"}))}};rA.styles=[O,T,rx],wui_tabs_decorate([(0,W.Cb)({type:Array})],rA.prototype,"tabs",void 0),wui_tabs_decorate([(0,W.Cb)()],rA.prototype,"onTabChange",void 0),wui_tabs_decorate([(0,W.Cb)({type:Array})],rA.prototype,"buttons",void 0),wui_tabs_decorate([(0,W.Cb)({type:Boolean})],rA.prototype,"disabled",void 0),wui_tabs_decorate([(0,W.SB)()],rA.prototype,"activeTab",void 0),wui_tabs_decorate([(0,W.SB)()],rA.prototype,"localTabWidth",void 0),wui_tabs_decorate([(0,W.SB)()],rA.prototype,"isDense",void 0),rA=wui_tabs_decorate([customElement("wui-tabs")],rA);var rE=B.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,wui_tooltip_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let r_=class extends B.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return B.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};r_.styles=[O,T,rE],wui_tooltip_decorate([(0,W.Cb)()],r_.prototype,"placement",void 0),wui_tooltip_decorate([(0,W.Cb)()],r_.prototype,"message",void 0),r_=wui_tooltip_decorate([customElement("wui-tooltip")],r_);var rk=B.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,wui_visual_thumbnail_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rP=class extends B.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,B.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?B.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:B.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};rP.styles=[O,rk],wui_visual_thumbnail_decorate([(0,W.Cb)()],rP.prototype,"imageSrc",void 0),wui_visual_thumbnail_decorate([(0,W.Cb)()],rP.prototype,"alt",void 0),wui_visual_thumbnail_decorate([(0,W.Cb)({type:Boolean})],rP.prototype,"borderRadiusFull",void 0),rP=wui_visual_thumbnail_decorate([customElement("wui-visual-thumbnail")],rP);var rS=B.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,wui_grid_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rI=class extends B.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&tp.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&tp.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&tp.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&tp.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&tp.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&tp.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&tp.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&tp.getSpacingStyles(this.margin,3)};
    `,B.dy`<slot></slot>`}};rI.styles=[O,rS],wui_grid_decorate([(0,W.Cb)()],rI.prototype,"gridTemplateRows",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"justifyItems",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"alignItems",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"justifyContent",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"alignContent",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"columnGap",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"rowGap",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"gap",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"padding",void 0),wui_grid_decorate([(0,W.Cb)()],rI.prototype,"margin",void 0),rI=wui_grid_decorate([customElement("wui-grid")],rI);var rB=B.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,wui_separator_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let rR=class extends B.oi{constructor(){super(...arguments),this.text=""}render(){return B.dy`${this.template()}`}template(){return this.text?B.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};rR.styles=[O,rB],wui_separator_decorate([(0,W.Cb)()],rR.prototype,"text",void 0),rR=wui_separator_decorate([customElement("wui-separator")],rR);var rO=w(88598);let rT=["receive","deposit","borrow","claim"],rN=["withdraw","repay","burn"],rM={getTransactionGroupTitle(p){let g=rO.E.getYear();return p===g?"This Year":p},getTransactionImages(p){let[g,w]=p,m=!!g&&p?.every(p=>!!p.nft_info),v=p?.length>1,x=p?.length===2;return x&&!m?[this.getTransactionImage(g),this.getTransactionImage(w)]:v?p.map(p=>this.getTransactionImage(p)):[this.getTransactionImage(g)]},getTransactionImage:p=>({type:rM.getTransactionTransferTokenType(p),url:rM.getTransactionImageURL(p)}),getTransactionImageURL(p){let g=null,w=!!p?.nft_info,m=!!p?.fungible_info;return p&&w?g=p?.nft_info?.content?.preview?.url:p&&m&&(g=p?.fungible_info?.icon?.url),g},getTransactionTransferTokenType:p=>p?.fungible_info?"FUNGIBLE":p?.nft_info?"NFT":null,getTransactionDescriptions(p){let g=p.metadata?.operationType,w=p.transfers,m=p.transfers?.length>0,v=p.transfers?.length>1,x=m&&w?.every(p=>!!p.fungible_info),[A,_]=w,B=this.getTransferDescription(A);if(this.getTransferDescription(_),!m){let w="send"===g||"receive"===g;return w&&x?[B=tp.getTruncateString({string:p.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),tp.getTruncateString({string:p.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[p.metadata.status]}if(v)return w.map(p=>this.getTransferDescription(p));let O="";return rT.includes(g)?O="+":rN.includes(g)&&(O="-"),[B=O.concat(B)]},getTransferDescription(p){let g="";return p&&(p?.nft_info?g=p?.nft_info?.name||"-":p?.fungible_info&&(g=this.getFungibleTransferDescription(p)||"-")),g},getFungibleTransferDescription(p){if(!p)return null;let g=this.getQuantityFixedValue(p?.quantity.numeric),w=[g,p?.fungible_info?.symbol].join(" ").trim();return w},getQuantityFixedValue(p){if(!p)return null;let g=parseFloat(p);return g.toFixed(3)}}},88382:function(p,g,w){"use strict";w.d(g,{Jb:function(){return X},Ld:function(){return ee},YP:function(){return J},_$LH:function(){return ei},dy:function(){return Y},sY:function(){return j}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=globalThis,v=m.trustedTypes,x=v?v.createPolicy("lit-html",{createHTML:p=>p}):void 0,A="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,B="?"+_,O=`<${B}>`,T=document,l=()=>T.createComment(""),c=p=>null===p||"object"!=typeof p&&"function"!=typeof p,U=Array.isArray,u=p=>U(p)||"function"==typeof p?.[Symbol.iterator],F="[ 	\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,q=/>/g,Q=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,K=/"/g,Z=/^(?:script|style|textarea|title)$/i,y=p=>(g,...w)=>({_$litType$:p,strings:g,values:w}),Y=y(1),J=y(2),X=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),et=new WeakMap,er=T.createTreeWalker(T,129);function C(p,g){if(!Array.isArray(p)||!p.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(g):g}let P=(p,g)=>{let w=p.length-1,m=[],v,x=2===g?"<svg>":"",B=z;for(let g=0;g<w;g++){let w=p[g],T,U,F=-1,Y=0;for(;Y<w.length&&(B.lastIndex=Y,null!==(U=B.exec(w)));)Y=B.lastIndex,B===z?"!--"===U[1]?B=W:void 0!==U[1]?B=q:void 0!==U[2]?(Z.test(U[2])&&(v=RegExp("</"+U[2],"g")),B=Q):void 0!==U[3]&&(B=Q):B===Q?">"===U[0]?(B=v??z,F=-1):void 0===U[1]?F=-2:(F=B.lastIndex-U[2].length,T=U[1],B=void 0===U[3]?Q:'"'===U[3]?K:G):B===K||B===G?B=Q:B===W||B===q?B=z:(B=Q,v=void 0);let J=B===Q&&p[g+1].startsWith("/>")?" ":"";x+=B===z?w+O:F>=0?(m.push(T),w.slice(0,F)+A+w.slice(F)+_+J):w+_+(-2===F?g:J)}return[C(p,x+(p[w]||"<?>")+(2===g?"</svg>":"")),m]};let V=class V{constructor({strings:p,_$litType$:g},w){let m;this.parts=[];let x=0,O=0,T=p.length-1,U=this.parts,[F,z]=P(p,g);if(this.el=V.createElement(F,w),er.currentNode=this.el.content,2===g){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;null!==(m=er.nextNode())&&U.length<T;){if(1===m.nodeType){if(m.hasAttributes())for(let p of m.getAttributeNames())if(p.endsWith(A)){let g=z[O++],w=m.getAttribute(p).split(_),v=/([.?@])?(.*)/.exec(g);U.push({type:1,index:x,name:v[2],strings:w,ctor:"."===v[1]?k:"?"===v[1]?H:"@"===v[1]?I:R}),m.removeAttribute(p)}else p.startsWith(_)&&(U.push({type:6,index:x}),m.removeAttribute(p));if(Z.test(m.tagName)){let p=m.textContent.split(_),g=p.length-1;if(g>0){m.textContent=v?v.emptyScript:"";for(let w=0;w<g;w++)m.append(p[w],l()),er.nextNode(),U.push({type:2,index:++x});m.append(p[g],l())}}}else if(8===m.nodeType){if(m.data===B)U.push({type:2,index:x});else{let p=-1;for(;-1!==(p=m.data.indexOf(_,p+1));)U.push({type:7,index:x}),p+=_.length-1}}x++}}static createElement(p,g){let w=T.createElement("template");return w.innerHTML=p,w}};function N(p,g,w=p,m){if(g===X)return g;let v=void 0!==m?w._$Co?.[m]:w._$Cl,x=c(g)?void 0:g._$litDirective$;return v?.constructor!==x&&(v?._$AO?.(!1),void 0===x?v=void 0:(v=new x(p))._$AT(p,w,m),void 0!==m?(w._$Co??=[])[m]=v:w._$Cl=v),void 0!==v&&(g=N(p,v._$AS(p,g.values),v,m)),g}let S=class S{constructor(p,g){this._$AV=[],this._$AN=void 0,this._$AD=p,this._$AM=g}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(p){let{el:{content:g},parts:w}=this._$AD,m=(p?.creationScope??T).importNode(g,!0);er.currentNode=m;let v=er.nextNode(),x=0,A=0,_=w[0];for(;void 0!==_;){if(x===_.index){let g;2===_.type?g=new M(v,v.nextSibling,this,p):1===_.type?g=new _.ctor(v,_.name,_.strings,this,p):6===_.type&&(g=new L(v,this,p)),this._$AV.push(g),_=w[++A]}x!==_?.index&&(v=er.nextNode(),x++)}return er.currentNode=T,m}p(p){let g=0;for(let w of this._$AV)void 0!==w&&(void 0!==w.strings?(w._$AI(p,w,g),g+=w.strings.length-2):w._$AI(p[g])),g++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(p,g,w,m){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=p,this._$AB=g,this._$AM=w,this.options=m,this._$Cv=m?.isConnected??!0}get parentNode(){let p=this._$AA.parentNode,g=this._$AM;return void 0!==g&&11===p?.nodeType&&(p=g.parentNode),p}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(p,g=this){c(p=N(this,p,g))?p===ee||null==p||""===p?(this._$AH!==ee&&this._$AR(),this._$AH=ee):p!==this._$AH&&p!==X&&this._(p):void 0!==p._$litType$?this.g(p):void 0!==p.nodeType?this.$(p):u(p)?this.T(p):this._(p)}k(p){return this._$AA.parentNode.insertBefore(p,this._$AB)}$(p){this._$AH!==p&&(this._$AR(),this._$AH=this.k(p))}_(p){this._$AH!==ee&&c(this._$AH)?this._$AA.nextSibling.data=p:this.$(T.createTextNode(p)),this._$AH=p}g(p){let{values:g,_$litType$:w}=p,m="number"==typeof w?this._$AC(p):(void 0===w.el&&(w.el=V.createElement(C(w.h,w.h[0]),this.options)),w);if(this._$AH?._$AD===m)this._$AH.p(g);else{let p=new S(m,this),w=p.u(this.options);p.p(g),this.$(w),this._$AH=p}}_$AC(p){let g=et.get(p.strings);return void 0===g&&et.set(p.strings,g=new V(p)),g}T(p){U(this._$AH)||(this._$AH=[],this._$AR());let g=this._$AH,w,m=0;for(let v of p)m===g.length?g.push(w=new M(this.k(l()),this.k(l()),this,this.options)):w=g[m],w._$AI(v),m++;m<g.length&&(this._$AR(w&&w._$AB.nextSibling,m),g.length=m)}_$AR(p=this._$AA.nextSibling,g){for(this._$AP?.(!1,!0,g);p&&p!==this._$AB;){let g=p.nextSibling;p.remove(),p=g}}setConnected(p){void 0===this._$AM&&(this._$Cv=p,this._$AP?.(p))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(p,g,w,m,v){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=p,this.name=g,this._$AM=m,this.options=v,w.length>2||""!==w[0]||""!==w[1]?(this._$AH=Array(w.length-1).fill(new String),this.strings=w):this._$AH=ee}_$AI(p,g=this,w,m){let v=this.strings,x=!1;if(void 0===v)(x=!c(p=N(this,p,g,0))||p!==this._$AH&&p!==X)&&(this._$AH=p);else{let m,A;let _=p;for(p=v[0],m=0;m<v.length-1;m++)(A=N(this,_[w+m],g,m))===X&&(A=this._$AH[m]),x||=!c(A)||A!==this._$AH[m],A===ee?p=ee:p!==ee&&(p+=(A??"")+v[m+1]),this._$AH[m]=A}x&&!m&&this.O(p)}O(p){p===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,p??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}O(p){this.element[this.name]=p===ee?void 0:p}};let H=class H extends R{constructor(){super(...arguments),this.type=4}O(p){this.element.toggleAttribute(this.name,!!p&&p!==ee)}};let I=class I extends R{constructor(p,g,w,m,v){super(p,g,w,m,v),this.type=5}_$AI(p,g=this){if((p=N(this,p,g,0)??ee)===X)return;let w=this._$AH,m=p===ee&&w!==ee||p.capture!==w.capture||p.once!==w.once||p.passive!==w.passive,v=p!==ee&&(w===ee||m);m&&this.element.removeEventListener(this.name,this,w),v&&this.element.addEventListener(this.name,this,p),this._$AH=p}handleEvent(p){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,p):this._$AH.handleEvent(p)}};let L=class L{constructor(p,g,w){this.element=p,this.type=6,this._$AN=void 0,this._$AM=g,this.options=w}get _$AU(){return this._$AM._$AU}_$AI(p){N(this,p)}};let ei={j:A,P:_,A:B,C:1,M:P,L:S,R:u,V:N,D:M,I:R,H,N:I,U:k,B:L},en=m.litHtmlPolyfillSupport;en?.(V,M),(m.litHtmlVersions??=[]).push("3.1.0");let j=(p,g,w)=>{let m=w?.renderBefore??g,v=m._$litPart$;if(void 0===v){let p=w?.renderBefore??null;m._$litPart$=v=new M(g.insertBefore(l(),p),p,void 0,w??{})}return v._$AI(p),v}},18569:function(p,g,w){"use strict";w.d(g,{Cb:function(){return n},SB:function(){return state_r}});var m=w(3274);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v={attribute:!0,type:String,converter:m.Ts,reflect:!1,hasChanged:m.Qu},r=(p=v,g,w)=>{let{kind:m,metadata:x}=w,A=globalThis.litPropertyMetadata.get(x);if(void 0===A&&globalThis.litPropertyMetadata.set(x,A=new Map),A.set(w.name,p),"accessor"===m){let{name:m}=w;return{set(w){let v=g.get.call(this);g.set.call(this,w),this.requestUpdate(m,v,p)},init(g){return void 0!==g&&this.C(m,void 0,p),g}}}if("setter"===m){let{name:m}=w;return function(w){let v=this[m];g.call(this,w),this.requestUpdate(m,v,p)}}throw Error("Unsupported decorator location: "+m)};function n(p){return(g,w)=>"object"==typeof w?r(p,g,w):((p,g,w)=>{let m=g.hasOwnProperty(w);return g.constructor.createProperty(w,m?{...p,wrapped:!0}:p),m?Object.getOwnPropertyDescriptor(g,w):void 0})(p,g,w)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(p){return n({...p,state:!0,attribute:!1})}},67623:function(p,g,w){"use strict";w.d(g,{o:function(){return o}});var m=w(88382);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=p=>p??m.Ld},92233:function(p,g,w){"use strict";w.d(g,{oi:function(){return s},iv:function(){return m.iv},dy:function(){return v.dy},YP:function(){return v.YP},$m:function(){return m.$m}});var m=w(3274),v=w(88382);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=class s extends m.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let p=super.createRenderRoot();return this.renderOptions.renderBefore??=p.firstChild,p}update(p){let g=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(p),this._$Do=(0,v.sY)(g,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v.Jb}};s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});let x=globalThis.litElementPolyfillSupport;x?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.2")},26721:function(p,g,w){"use strict";let m,v;function useWeb3Modal(){if(!m)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(p){await m?.open(p)},close:async function(){await m?.close()}}}w.d(g,{OY:function(){return createWeb3Modal},o1:function(){return defaultWagmiConfig},k_:function(){return useWeb3Modal}}),w(67294);var x,A,_,B,O,T,U,F,z,W,q,Q,G,K,Z,Y,J,X,ee,et,er,ei,en,eo,ea=w(5341),es=w(31407),el=w(15537),ec=w(25643),eu=w(92233),ed=w(18569),eh=w(67623),__decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ef=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=el.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=el.AccountController.state.address,this.balanceVal=el.AccountController.state.balance,this.balanceSymbol=el.AccountController.state.balanceSymbol,this.profileName=el.AccountController.state.profileName,this.profileImage=el.AccountController.state.profileImage,this.network=el.NetworkController.state.caipNetwork,this.unsubscribe.push(...[el.AccountController.subscribe(p=>{p.isConnected?(this.address=p.address,this.balanceVal=p.balance,this.profileName=p.profileName,this.profileImage=p.profileImage,this.balanceSymbol=p.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),el.NetworkController.subscribeKey("caipNetwork",p=>this.network=p)])}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){let p=this.networkImages[this.network?.imageId??""],g="show"===this.balance;return eu.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,eh.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,eh.o)(p)}
        avatarSrc=${(0,eh.o)(this.profileImage)}
        balance=${g?el.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){el.IN.open()}};__decorate([(0,ed.Cb)({type:Boolean})],ef.prototype,"disabled",void 0),__decorate([(0,ed.Cb)()],ef.prototype,"balance",void 0),__decorate([(0,ed.SB)()],ef.prototype,"address",void 0),__decorate([(0,ed.SB)()],ef.prototype,"balanceVal",void 0),__decorate([(0,ed.SB)()],ef.prototype,"balanceSymbol",void 0),__decorate([(0,ed.SB)()],ef.prototype,"profileName",void 0),__decorate([(0,ed.SB)()],ef.prototype,"profileImage",void 0),__decorate([(0,ed.SB)()],ef.prototype,"network",void 0),ef=__decorate([(0,ec.customElement)("w3m-account-button")],ef);var w3m_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ep=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=el.AccountController.state.isConnected,this.unsubscribe.push(el.AccountController.subscribeKey("isConnected",p=>{this.isAccount=p}))}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return this.isAccount?eu.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,eh.o)(this.balance)}
          >
          </w3m-account-button>
        `:eu.dy`
          <w3m-connect-button
            size=${(0,eh.o)(this.size)}
            label=${(0,eh.o)(this.label)}
            loadingLabel=${(0,eh.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};w3m_button_decorate([(0,ed.Cb)({type:Boolean})],ep.prototype,"disabled",void 0),w3m_button_decorate([(0,ed.Cb)()],ep.prototype,"balance",void 0),w3m_button_decorate([(0,ed.Cb)()],ep.prototype,"size",void 0),w3m_button_decorate([(0,ed.Cb)()],ep.prototype,"label",void 0),w3m_button_decorate([(0,ed.Cb)()],ep.prototype,"loadingLabel",void 0),w3m_button_decorate([(0,ed.SB)()],ep.prototype,"isAccount",void 0),ep=w3m_button_decorate([(0,ec.customElement)("w3m-button")],ep);var w3m_connect_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eg=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=el.IN.state.open,this.unsubscribe.push(el.IN.subscribeKey("open",p=>this.open=p))}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-connect-button
        size=${(0,eh.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?el.IN.close():el.IN.open()}};w3m_connect_button_decorate([(0,ed.Cb)()],eg.prototype,"size",void 0),w3m_connect_button_decorate([(0,ed.Cb)()],eg.prototype,"label",void 0),w3m_connect_button_decorate([(0,ed.Cb)()],eg.prototype,"loadingLabel",void 0),w3m_connect_button_decorate([(0,ed.SB)()],eg.prototype,"open",void 0),eg=w3m_connect_button_decorate([(0,ec.customElement)("w3m-connect-button")],eg),w(90078);var w3m_network_button_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ew=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=el.NetworkController.state.caipNetwork,this.connected=el.AccountController.state.isConnected,this.unsubscribe.push(...[el.NetworkController.subscribeKey("caipNetwork",p=>this.network=p),el.AccountController.subscribeKey("isConnected",p=>this.connected=p)])}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${(0,eh.o)(el.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){el.IN.open({view:"Networks"})}};w3m_network_button_decorate([(0,ed.Cb)({type:Boolean})],ew.prototype,"disabled",void 0),w3m_network_button_decorate([(0,ed.SB)()],ew.prototype,"network",void 0),w3m_network_button_decorate([(0,ed.SB)()],ew.prototype,"connected",void 0),ew=w3m_network_button_decorate([(0,ec.customElement)("w3m-network-button")],ew);var em=eu.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,w3m_router_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eb=class extends eu.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=el.RouterController.state.view,this.unsubscribe.push(el.RouterController.subscribeKey("view",p=>this.onViewChange(p)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([p])=>{let g=`${p?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:g}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=g}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(p=>p())}render(){return eu.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return eu.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return eu.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return eu.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return eu.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return eu.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return eu.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return eu.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return eu.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return eu.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return eu.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return eu.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return eu.dy`<w3m-downloads-view></w3m-downloads-view>`;case"Transactions":return eu.dy`<w3m-transactions-view></w3m-transactions-view>`}}async onViewChange(p){let{history:g}=el.RouterController.state,w=-10,m=10;g.length<this.prevHistoryLength&&(w=10,m=-10),this.prevHistoryLength=g.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${w}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=p,await this.animate([{opacity:0,transform:`translateX(${m}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};eb.styles=em,w3m_router_decorate([(0,ed.SB)()],eb.prototype,"view",void 0),eb=w3m_router_decorate([(0,ec.customElement)("w3m-router")],eb);var ev=eu.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,w3m_account_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let ey=class extends eu.oi{constructor(){super(),this.usubscribe=[],this.networkImages=el.WM.state.networkImages,this.address=el.AccountController.state.address,this.profileImage=el.AccountController.state.profileImage,this.profileName=el.AccountController.state.profileName,this.balance=el.AccountController.state.balance,this.balanceSymbol=el.AccountController.state.balanceSymbol,this.network=el.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[el.AccountController.subscribe(p=>{p.address?(this.address=p.address,this.profileImage=p.profileImage,this.profileName=p.profileName,this.balance=p.balance,this.balanceSymbol=p.balanceSymbol):el.IN.close()})],el.NetworkController.subscribeKey("caipNetwork",p=>{p?.id&&(this.network=p)}))}disconnectedCallback(){this.usubscribe.forEach(p=>p())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let p=this.networkImages[this.network?.imageId??""];return eu.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,eh.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?ec.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):ec.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${el.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${p?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,eh.o)(p)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:p}=el.AccountController.state;return p?eu.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:p}=el.NetworkController.state,g=!!p&&p.length>1,w=p?.find(({id:p})=>p===this.network?.id);return g||!w}onCopyAddress(){try{this.address&&(el.j1.copyToClopboard(this.address),el.SnackController.showSuccess("Address copied"))}catch{el.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&el.RouterController.push("Networks")}onTransactions(){el.Xs.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),el.RouterController.push("Transactions")}async onDisconnect(){try{this.disconecting=!0,await el.ConnectionController.disconnect(),el.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),el.IN.close()}catch{el.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),el.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:p}=el.AccountController.state;p&&el.j1.openHref(p,"_blank")}};ey.styles=ev,w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"address",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"profileImage",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"profileName",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"balance",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"balanceSymbol",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"network",void 0),w3m_account_view_decorate([(0,ed.SB)()],ey.prototype,"disconecting",void 0),ey=w3m_account_view_decorate([(0,ec.customElement)("w3m-account-view")],ey);var w3m_all_wallets_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eC=class extends eu.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=el.j1.debounce(p=>{this.search=p})}render(){let p=this.search.length>=2;return eu.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${p?eu.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:eu.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(p){this.onDebouncedSearch(p.detail)}qrButtonTemplate(){return el.j1.isMobile()?eu.dy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){el.RouterController.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,ed.SB)()],eC.prototype,"search",void 0),eC=w3m_all_wallets_view_decorate([(0,ec.customElement)("w3m-all-wallets-view")],eC);var ex=eu.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,w3m_connect_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eA=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.connectors=el.ConnectorController.state.connectors,this.unsubscribe.push(el.ConnectorController.subscribeKey("connectors",p=>this.connectors=p))}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(el.j1.isMobile())return null;let p=this.connectors.find(p=>"WALLET_CONNECT"===p.type);return p?eu.dy`
      <wui-list-wallet
        imageSrc=${(0,eh.o)(el.fz.getConnectorImage(p))}
        name=${p.name??"Unknown"}
        @click=${()=>this.onConnector(p)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:p}=el.OptionsController.state;if(!p?.length)return null;let g=this.filterOutDuplicateWallets(p);return g.map(p=>eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          name=${p.name??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:p}=el.ApiController.state;if(!p.length)return null;let g=this.filterOutDuplicateWallets(p);return g.map(p=>eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          name=${p.name??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let p=el.MO.getRecentWallets();return p.map(p=>eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          name=${p.name??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(p=>"ANNOUNCED"!==p.type?null:eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getConnectorImage(p))}
          name=${p.name??"Unknown"}
          @click=${()=>this.onConnector(p)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let p=this.connectors.find(p=>"ANNOUNCED"===p.type);return this.connectors.map(g=>"INJECTED"===g.type&&el.ConnectionController.checkInstalled()?eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getConnectorImage(g))}
          name=${g.name??"Unknown"}
          @click=${()=>this.onConnector(g)}
          tagLabel=${(0,eh.o)(p?void 0:"installed")}
          tagVariant=${(0,eh.o)(p?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(p=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(p.type)?null:eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getConnectorImage(p))}
          name=${p.name??"Unknown"}
          @click=${()=>this.onConnector(p)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let p=10*Math.floor(el.ApiController.state.count/10);return eu.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${p}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:p}=el.ApiController.state,{customWallets:g,featuredWalletIds:w}=el.OptionsController.state,{connectors:m}=el.ConnectorController.state,v=el.MO.getRecentWallets(),x=m.filter(p=>"ANNOUNCED"===p.type);if(w||g||!p.length)return null;let A=x.length+v.length,_=this.filterOutDuplicateWallets(p).slice(0,Math.max(0,2-A));return _.map(p=>eu.dy`
        <wui-list-wallet
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          name=${p?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(p)}
        >
        </wui-list-wallet>
      `)}onConnector(p){"WALLET_CONNECT"===p.type?el.j1.isMobile()?el.RouterController.push("AllWallets"):el.RouterController.push("ConnectingWalletConnect"):el.RouterController.push("ConnectingExternal",{connector:p})}filterOutDuplicateWallets(p){let{connectors:g}=el.ConnectorController.state,w=el.MO.getRecentWallets(),m=w.map(p=>p.id),v=g.map(p=>p.info?.rdns).filter(Boolean),x=p.filter(p=>!m.includes(p.id)&&!v.includes(p.rdns??void 0));return x}onAllWallets(){el.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),el.RouterController.push("AllWallets")}onConnectWallet(p){el.RouterController.push("ConnectingWalletConnect",{wallet:p})}};eA.styles=ex,w3m_connect_view_decorate([(0,ed.SB)()],eA.prototype,"connectors",void 0),eA=w3m_connect_view_decorate([(0,ec.customElement)("w3m-connect-view")],eA);var eE=eu.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,w3m_connecting_widget_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let W3mConnectingWidget=class W3mConnectingWidget extends eu.oi{constructor(){super(),this.wallet=el.RouterController.state.data?.wallet,this.connector=el.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=el.fz.getWalletImage(this.wallet)??el.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=el.ConnectionController.state.wcUri,this.error=el.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[el.ConnectionController.subscribeKey("wcUri",p=>{this.uri=p,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),el.ConnectionController.subscribeKey("wcError",p=>this.error=p),el.ConnectionController.subscribeKey("buffering",p=>this.buffering=p)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(p=>p()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let p=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,g=`Continue in ${this.name}`;return this.buffering&&(g="Connecting..."),this.error&&(g="Connection declined"),eu.dy`
      <wui-flex
        data-error=${(0,eh.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,eh.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${g}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${p}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?eu.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let p=this.shadowRoot?.querySelector("wui-button");p.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(el.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let p=el.ThemeController.state.themeVariables["--w3m-border-radius-master"],g=p?parseInt(p.replace("px",""),10):4;return eu.dy`<wui-loading-thumbnail radius=${9*g}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(el.j1.copyToClopboard(this.uri),el.SnackController.showSuccess("Link copied"))}catch{el.SnackController.showError("Failed to copy")}}};W3mConnectingWidget.styles=eE,w3m_connecting_widget_decorate([(0,ed.SB)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,ed.SB)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,ed.SB)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,ed.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,ed.SB)()],W3mConnectingWidget.prototype,"buffering",void 0),w3m_connecting_widget_decorate([(0,ed.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,ed.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);let e_={INJECTED:"browser",ANNOUNCED:"browser"},ek=class extends W3mConnectingWidget{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:e_[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&el.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await el.ConnectionController.connectExternal(this.connector),el.IN.close(),el.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(p){el.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:p?.message??"Unknown"}}),this.error=!0}}};ek=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-external-view")],ek);let eP=class extends eu.oi{constructor(){super(...arguments),this.dappUrl=el.OptionsController.state.metadata?.url,this.dappName=el.OptionsController.state.metadata?.name}render(){return eu.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?eu.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&el.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){el.RouterController.goBack()}};eP=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-siwe-view")],eP);var w3m_connecting_wc_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eS=class extends eu.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=el.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),el.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),eu.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):eu.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(p=!1){try{let{wcPairingExpiry:g}=el.ConnectionController.state;if(p||el.j1.isPairingExpired(g)){if(el.ConnectionController.connectWalletConnect(),this.wallet){let p=el.fz.getWalletImage(this.wallet);p&&el.MO.setConnectedWalletImageUrl(p)}else{let p=el.ConnectorController.state.connectors,g=p.find(p=>"WALLET_CONNECT"===p.type),w=el.fz.getConnectorImage(g);w&&el.MO.setConnectedWalletImageUrl(w)}await el.ConnectionController.state.wcPromise,this.finalizeConnection(),el.IN.close()}}catch(p){el.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:p?.message??"Unknown"}}),el.ConnectionController.setWcError(!0),el.j1.isAllowedRetry(this.lastRetry)&&(el.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:p,recentWallet:g}=el.ConnectionController.state;p&&el.MO.setWalletConnectDeepLink(p),g&&el.MO.setWeb3ModalRecent(g),el.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:p?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:p,desktop_link:g,webapp_link:w,injected:m,rdns:v}=this.wallet,x=m?.map(({injected_id:p})=>p).filter(Boolean),A=v?[v]:x??[],_=A.length,B=el.ConnectionController.checkInstalled(A),O=_&&B,T=g&&!el.j1.isMobile();O&&this.platforms.push("browser"),p&&this.platforms.push(el.j1.isMobile()?"mobile":"qrcode"),w&&this.platforms.push("web"),T&&this.platforms.push("desktop"),!O&&_&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return eu.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return eu.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return eu.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return eu.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return eu.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return eu.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let p=this.platforms.length>1;return p?eu.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(p){let g=this.shadowRoot?.querySelector("div");g&&(await g.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=p,g.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,ed.SB)()],eS.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,ed.SB)()],eS.prototype,"platforms",void 0),eS=w3m_connecting_wc_view_decorate([(0,ec.customElement)("w3m-connecting-wc-view")],eS);let eI=class extends eu.oi{constructor(){super(...arguments),this.wallet=el.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return eu.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?eu.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?eu.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?eu.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?eu.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&el.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&el.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&el.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&el.j1.openHref(this.wallet.homepage,"_blank")}};eI=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-downloads-view")],eI);let eB=class extends eu.oi{render(){return eu.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{el.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:p,featured:g}=el.ApiController.state,{customWallets:w}=el.OptionsController.state,m=[...g,...w??[],...p].slice(0,4);return m.map(p=>eu.dy`
        <wui-list-wallet
          name=${p.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          @click=${()=>{el.j1.openHref(p.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eB=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-get-wallet-view")],eB);var eR=eu.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,w3m_network_switch_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eO=class extends eu.oi{constructor(){super(),this.network=el.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=el.NetworkController.state.caipNetwork,this.unsubscribe.push(el.NetworkController.subscribeKey("caipNetwork",p=>{p?.id!==this.currentNetwork?.id&&el.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let p=this.error?"Switch declined":"Approve in wallet",g=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return eu.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,eh.o)(el.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:eu.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${p}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${g}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let p=this.shadowRoot?.querySelector("wui-button");p.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await el.NetworkController.switchActiveNetwork(this.network),el.RouterController.goBack())}catch{this.error=!0}}};eO.styles=eR,w3m_network_switch_view_decorate([(0,ed.SB)()],eO.prototype,"showRetry",void 0),w3m_network_switch_view_decorate([(0,ed.SB)()],eO.prototype,"error",void 0),w3m_network_switch_view_decorate([(0,ed.SB)()],eO.prototype,"currentNetwork",void 0),eO=w3m_network_switch_view_decorate([(0,ec.customElement)("w3m-network-switch-view")],eO);var w3m_networks_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eT=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=el.NetworkController.state.caipNetwork,this.unsubscribe.push(el.NetworkController.subscribeKey("caipNetwork",p=>this.caipNetwork=p))}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){el.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),el.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:p,requestedCaipNetworks:g,supportsAllNetworks:w}=el.NetworkController.state;return p?.length&&g?.sort((g,w)=>p.indexOf(w.id)-p.indexOf(g.id)),g?.map(g=>eu.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===g.id}
          imageSrc=${eh.o(el.fz.getNetworkImage(g))}
          type="network"
          name=${g.name??g.id}
          @click=${()=>this.onSwitchNetwork(g)}
          .disabled=${!w&&!p?.includes(g.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(p){let{isConnected:g}=el.AccountController.state,{approvedCaipNetworkIds:w,supportsAllNetworks:m,caipNetwork:v}=el.NetworkController.state;g&&v?.id!==p.id?w?.includes(p.id)?await el.NetworkController.switchActiveNetwork(p):m&&el.RouterController.push("SwitchNetwork",{network:p}):g||(el.NetworkController.setCaipNetwork(p),el.RouterController.push("Connect"))}};w3m_networks_view_decorate([(0,ed.SB)()],eT.prototype,"caipNetwork",void 0),eT=w3m_networks_view_decorate([(0,ec.customElement)("w3m-networks-view")],eT);var eN=w(88598),eM=eu.iv`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,w3m_transactions_view_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e$="last-transaction",eD=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=el.AccountController.state.address,this.transactions=el.sl.state.transactions,this.transactionsByYear=el.sl.state.transactionsByYear,this.loading=el.sl.state.loading,this.empty=el.sl.state.empty,this.next=el.sl.state.next,this.unsubscribe.push(...[el.AccountController.subscribe(p=>{p.isConnected&&this.address!==p.address&&(this.address=p.address,el.sl.resetTransactions(),el.sl.fetchTransactions(p.address))}),el.sl.subscribe(p=>{this.transactions=p.transactions,this.transactionsByYear=p.transactionsByYear,this.loading=p.loading,this.empty=p.empty,this.next=p.next})])}firstUpdated(){0===this.transactions.length&&el.sl.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){let p=Object.keys(this.transactionsByYear).sort().reverse();return p.map((g,w)=>{let m=w===p.length-1,v=parseInt(g,10),x=ec.TransactionUtil.getTransactionGroupTitle(v),A=this.transactionsByYear[v];return A?eu.dy`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${x}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(A,m)}
          </wui-flex>
        </wui-flex>
      `:null})}templateRenderTransaction(p,g){let{date:w,descriptions:m,direction:v,isAllNFT:x,images:A,status:_,transfers:B,type:O}=this.getTransactionListItemProps(p),T=B?.length>1,U=B?.length===2;return U&&!x?eu.dy`
        <wui-transaction-list-item
          date=${w}
          direction=${v}
          id=${g&&this.next?e$:""}
          status=${_}
          type=${O}
          .images=${A}
          .descriptions=${m}
        ></wui-transaction-list-item>
      `:T?B.map((p,m)=>{let v=ec.TransactionUtil.getTransferDescription(p),x=g&&m===B.length-1;return eu.dy` <wui-transaction-list-item
          date=${w}
          direction=${p.direction}
          id=${x&&this.next?e$:""}
          status=${_}
          type=${O}
          onlyDirectionIcon=${!0}
          .images=${[A?.[m]]}
          .descriptions=${[v]}
        ></wui-transaction-list-item>`}):eu.dy`
      <wui-transaction-list-item
        date=${w}
        direction=${v}
        id=${g&&this.next?e$:""}
        status=${_}
        type=${O}
        .images=${A}
        .descriptions=${m}
      ></wui-transaction-list-item>
    `}templateTransactions(p,g){return p.map((w,m)=>{let v=g&&m===p.length-1;return eu.dy`${this.templateRenderTransaction(w,v)}`})}templateEmpty(){return eu.dy`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(eu.dy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(p=>p)}createPaginationObserver(){let{projectId:p}=el.OptionsController.state;this.paginationObserver=new IntersectionObserver(([g])=>{g?.isIntersecting&&!this.loading&&(el.sl.fetchTransactions(this.address),el.Xs.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:p,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let p=this.shadowRoot?.querySelector(`#${e$}`);p&&this.paginationObserver?.observe(p)}getTransactionListItemProps(p){let g=eN.E.getRelativeDateFromNow(p?.metadata?.minedAt),w=ec.TransactionUtil.getTransactionDescriptions(p),m=p?.transfers,v=p?.transfers?.[0],x=!!v&&p?.transfers?.every(p=>!!p.nft_info),A=ec.TransactionUtil.getTransactionImages(m);return{date:g,direction:v?.direction,descriptions:w,isAllNFT:x,images:A,status:p.metadata?.status,transfers:m,type:p.metadata?.operationType}}};eD.styles=eM,w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"address",void 0),w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"transactions",void 0),w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"transactionsByYear",void 0),w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"loading",void 0),w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"empty",void 0),w3m_transactions_view_decorate([(0,ed.SB)()],eD.prototype,"next",void 0),eD=w3m_transactions_view_decorate([(0,ec.customElement)("w3m-transactions-view")],eD);let ej=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eL=class extends eu.oi{render(){return eu.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ej}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{el.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eL=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-what-is-a-network-view")],eL);let eU=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eF=class extends eu.oi{render(){return eu.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eU}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){el.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),el.RouterController.push("GetWallet")}};eF=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-what-is-a-wallet-view")],eF);var ez=eu.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,w3m_all_wallets_list_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eW="local-paginator",eq=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!el.ApiController.state.wallets.length,this.wallets=el.ApiController.state.wallets,this.recommended=el.ApiController.state.recommended,this.featured=el.ApiController.state.featured,this.unsubscribe.push(...[el.ApiController.subscribeKey("wallets",p=>this.wallets=p),el.ApiController.subscribeKey("recommended",p=>this.recommended=p),el.ApiController.subscribeKey("featured",p=>this.featured=p)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(p=>p()),this.paginationObserver?.disconnect()}render(){return eu.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let p=this.shadowRoot?.querySelector("wui-grid");this.initial&&p&&(await el.ApiController.fetchWallets({page:1}),await p.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,p.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(p,g){return[...Array(p)].map(()=>eu.dy`
        <wui-card-select-loader type="wallet" id=${(0,eh.o)(g)}></wui-card-select-loader>
      `)}walletsTemplate(){let p=[...this.featured,...this.recommended,...this.wallets];return p.map(p=>eu.dy`
        <wui-card-select
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
          type="wallet"
          name=${p.name}
          @click=${()=>this.onConnectWallet(p)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:p,recommended:g,featured:w,count:m}=el.ApiController.state,v=window.innerWidth<352?3:4,x=p.length+g.length,A=Math.ceil(x/v)*v-x+v;return(A-=p.length?w.length%v:0,0===m||[...w,...p,...g].length<m)?this.shimmerTemplate(A,eW):null}createPaginationObserver(){let p=this.shadowRoot?.querySelector(`#${eW}`);p&&(this.paginationObserver=new IntersectionObserver(([p])=>{if(p?.isIntersecting&&!this.initial){let{page:p,count:g,wallets:w}=el.ApiController.state;w.length<g&&el.ApiController.fetchWallets({page:p+1})}}),this.paginationObserver.observe(p))}onConnectWallet(p){let{connectors:g}=el.ConnectorController.state,w=g.find(({explorerId:g})=>g===p.id);w?el.RouterController.push("ConnectingExternal",{connector:w}):el.RouterController.push("ConnectingWalletConnect",{wallet:p})}};eq.styles=ez,w3m_all_wallets_list_decorate([(0,ed.SB)()],eq.prototype,"initial",void 0),w3m_all_wallets_list_decorate([(0,ed.SB)()],eq.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,ed.SB)()],eq.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,ed.SB)()],eq.prototype,"featured",void 0),eq=w3m_all_wallets_list_decorate([(0,ec.customElement)("w3m-all-wallets-list")],eq);var eH=eu.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,w3m_all_wallets_search_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eQ=class extends eu.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?eu.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await el.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:p}=el.ApiController.state;return p.length?eu.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${p.map(p=>eu.dy`
            <wui-card-select
              imageSrc=${(0,eh.o)(el.fz.getWalletImage(p))}
              type="wallet"
              name=${p.name}
              @click=${()=>this.onConnectWallet(p)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:eu.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(p){let{connectors:g}=el.ConnectorController.state,w=g.find(({explorerId:g})=>g===p.id);w?el.RouterController.push("ConnectingExternal",{connector:w}):el.RouterController.push("ConnectingWalletConnect",{wallet:p})}};eQ.styles=eH,w3m_all_wallets_search_decorate([(0,ed.SB)()],eQ.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,ed.Cb)()],eQ.prototype,"query",void 0),eQ=w3m_all_wallets_search_decorate([(0,ec.customElement)("w3m-all-wallets-search")],eQ);var w3m_connecting_header_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let eG=class extends eu.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(el.ConnectionController.subscribeKey("buffering",p=>this.buffering=p))}disconnectCallback(){this.unsubscribe.forEach(p=>p())}render(){let p=this.generateTabs();return eu.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${p}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let p=this.platforms.map(p=>"browser"===p?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===p?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===p?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===p?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===p?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=p.map(({platform:p})=>p),p}onTabChange(p){let g=this.platformTabs[p];g&&this.onSelectPlatfrom?.(g)}};w3m_connecting_header_decorate([(0,ed.Cb)({type:Array})],eG.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,ed.Cb)()],eG.prototype,"onSelectPlatfrom",void 0),w3m_connecting_header_decorate([(0,ed.SB)()],eG.prototype,"buffering",void 0),eG=w3m_connecting_header_decorate([(0,ec.customElement)("w3m-connecting-header")],eG);let eK=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:p}=el.ConnectorController.state,g=p.find(p=>"ANNOUNCED"===p.type&&p.info?.rdns===this.wallet?.rdns),w=p.find(p=>"INJECTED"===p.type);g?await el.ConnectionController.connectExternal(g):w&&await el.ConnectionController.connectExternal(w),el.IN.close(),el.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(p){el.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:p?.message??"Unknown"}}),this.error=!0}}};eK=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-browser")],eK);let eV=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:p,name:g}=this.wallet,{redirect:w,href:m}=el.j1.formatNativeUrl(p,this.uri);el.ConnectionController.setWcLinking({name:g,href:m}),el.ConnectionController.setRecentWallet(this.wallet),el.j1.openHref(w,"_self")}catch{this.error=!0}}};eV=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-desktop")],eV);let eZ=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:p,name:g}=this.wallet,{redirect:w,href:m}=el.j1.formatNativeUrl(p,this.uri);el.ConnectionController.setWcLinking({name:g,href:m}),el.ConnectionController.setRecentWallet(this.wallet),el.j1.openHref(w,"_self")}catch{this.error=!0}}onBuffering(){let p=el.j1.isIos();document?.visibilityState==="visible"&&!this.error&&p&&(el.ConnectionController.setBuffering(!0),setTimeout(()=>{el.ConnectionController.setBuffering(!1)},5e3))}};eZ=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-mobile")],eZ);var eY=eu.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let eJ=class extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),eu.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let p=this.getBoundingClientRect().width-40,g=this.wallet?this.wallet.name:void 0;return el.ConnectionController.setWcLinking(void 0),el.ConnectionController.setRecentWallet(this.wallet),eu.dy`<wui-qr-code
      size=${p}
      theme=${el.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,eh.o)(el.fz.getWalletImage(this.wallet))}
      alt=${(0,eh.o)(g)}
    ></wui-qr-code>`}};eJ.styles=eY,eJ=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-qrcode")],eJ);var eX=eu.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let e0=class extends eu.oi{constructor(){super(...arguments),this.dappImageUrl=el.OptionsController.state.metadata?.icons,this.walletImageUrl=el.MO.getConnectedWalletImageUrl()}firstUpdated(){let p=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");p?.[0]&&this.createAnimation(p[0],"translate(18px)"),p?.[1]&&this.createAnimation(p[1],"translate(-18px)")}render(){return eu.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(p,g){p.animate([{transform:"translateX(0px)"},{transform:g}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};e0.styles=eX,e0=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-siwe")],e0);let e1=class extends eu.oi{constructor(){if(super(),this.wallet=el.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return eu.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,eh.o)(el.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};e1=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-unsupported")],e1);let e2=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",el.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:p,name:g}=this.wallet,{redirect:w,href:m}=el.j1.formatUniversalUrl(p,this.uri);el.ConnectionController.setWcLinking({name:g,href:m}),el.ConnectionController.setRecentWallet(this.wallet),el.j1.openHref(w,"_blank")}catch{this.error=!0}}};e2=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-connecting-wc-web")],e2);var e5=eu.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,w3m_header_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};function headings(){let p=el.RouterController.state.data?.connector?.name,g=el.RouterController.state.data?.wallet?.name,w=el.RouterController.state.data?.network?.name,m=g??p;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:m??"Connect Wallet",ConnectingWalletConnect:m??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:w??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:m?`Get ${m}`:"Downloads",Transactions:"Activity"}}let e3=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.heading=headings()[el.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(el.RouterController.subscribeKey("view",p=>{this.onViewChange(p),this.onHistoryChange()}),el.ConnectionController.subscribeKey("buffering",p=>this.buffering=p))}disconnectCallback(){this.unsubscribe.forEach(p=>p())}render(){return eu.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${el.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){el.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),el.RouterController.push("WhatIsAWallet")}titleTemplate(){return eu.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:p}=el.RouterController.state;return this.showBack?eu.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${el.RouterController.goBack}
      ></wui-icon-link>`:eu.dy`<wui-icon-link
      data-hidden=${"Connect"!==p}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?eu.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(p){let g=this.shadowRoot?.querySelector("wui-text");if(g){let w=headings()[p];await g.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=w,g.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:p}=el.RouterController.state,g=this.shadowRoot?.querySelector("#dynamic");p.length>1&&!this.showBack&&g?(await g.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,g.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):p.length<=1&&this.showBack&&g&&(await g.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,g.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};e3.styles=[e5],w3m_header_decorate([(0,ed.SB)()],e3.prototype,"heading",void 0),w3m_header_decorate([(0,ed.SB)()],e3.prototype,"buffering",void 0),w3m_header_decorate([(0,ed.SB)()],e3.prototype,"showBack",void 0),e3=w3m_header_decorate([(0,ec.customElement)("w3m-header")],e3);var w3m_help_widget_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e4=class extends eu.oi{constructor(){super(...arguments),this.data=[]}render(){return eu.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(p=>eu.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${p.images.map(p=>eu.dy`<wui-visual name=${p}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${p.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${p.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,ed.Cb)({type:Array})],e4.prototype,"data",void 0),e4=w3m_help_widget_decorate([(0,ec.customElement)("w3m-help-widget")],e4);var e6=eu.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let e8=class extends eu.oi{render(){let{termsConditionsUrl:p,privacyPolicyUrl:g}=el.OptionsController.state;return p||g?eu.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:p,privacyPolicyUrl:g}=el.OptionsController.state;return p&&g?"and":""}termsTemplate(){let{termsConditionsUrl:p}=el.OptionsController.state;return p?eu.dy`<a href=${p}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:p}=el.OptionsController.state;return p?eu.dy`<a href=${p}>Privacy Policy</a>`:null}};e8.styles=[e6],e8=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A}([(0,ec.customElement)("w3m-legal-footer")],e8);var e9=eu.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,w3m_mobile_download_links_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let e7=class extends eu.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:p,app_store:g,play_store:w,chrome_store:m,homepage:v}=this.wallet,x=el.j1.isMobile(),A=el.j1.isIos(),_=el.j1.isAndroid(),B=[g,w,v,m].filter(Boolean).length>1,O=ec.UiHelperUtil.getTruncateString({string:p,charsStart:12,charsEnd:0,truncate:"end"});return B&&!x?eu.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${()=>el.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!B&&v?eu.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:g&&A?eu.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:w&&_?eu.dy`
        <wui-cta-button
          label=${`Don't have ${O}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&el.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&el.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&el.j1.openHref(this.wallet.homepage,"_blank")}};e7.styles=[e9],w3m_mobile_download_links_decorate([(0,ed.Cb)({type:Object})],e7.prototype,"wallet",void 0),e7=w3m_mobile_download_links_decorate([(0,ec.customElement)("w3m-mobile-download-links")],e7);var te=eu.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,w3m_snackbar_decorate=function(p,g,w,m){var v,x=arguments.length,A=x<3?g:null===m?m=Object.getOwnPropertyDescriptor(g,w):m;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(p,g,w,m);else for(var _=p.length-1;_>=0;_--)(v=p[_])&&(A=(x<3?v(A):x>3?v(g,w,A):v(g,w))||A);return x>3&&A&&Object.defineProperty(g,w,A),A};let tt={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},tr=class extends eu.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=el.SnackController.state.open,this.unsubscribe.push(el.SnackController.subscribeKey("open",p=>{this.open=p,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(p=>p())}render(){let{message:p,variant:g}=el.SnackController.state,w=tt[g];return eu.dy`
      <wui-snackbar
        message=${p}
        backgroundColor=${w.backgroundColor}
        iconColor=${w.iconColor}
        icon=${w.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>el.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};tr.styles=te,w3m_snackbar_decorate([(0,ed.SB)()],tr.prototype,"open",void 0),tr=w3m_snackbar_decorate([(0,ec.customElement)("w3m-snackbar")],tr);let ti=!1;let Web3ModalScaffold=class Web3ModalScaffold{constructor(p){this.initPromise=void 0,this.setIsConnected=p=>{el.AccountController.setIsConnected(p)},this.setCaipAddress=p=>{el.AccountController.setCaipAddress(p)},this.setBalance=(p,g)=>{el.AccountController.setBalance(p,g)},this.setProfileName=p=>{el.AccountController.setProfileName(p)},this.setProfileImage=p=>{el.AccountController.setProfileImage(p)},this.resetAccount=()=>{el.AccountController.resetAccount()},this.setCaipNetwork=p=>{el.NetworkController.setCaipNetwork(p)},this.getCaipNetwork=()=>el.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=p=>{el.NetworkController.setRequestedCaipNetworks(p)},this.getApprovedCaipNetworksData=()=>el.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{el.NetworkController.resetNetwork()},this.setConnectors=p=>{el.ConnectorController.setConnectors(p)},this.addConnector=p=>{el.ConnectorController.addConnector(p)},this.getConnectors=()=>el.ConnectorController.getConnectors(),this.resetWcConnection=()=>{el.ConnectionController.resetWcConnection()},this.fetchIdentity=p=>el.Lr.fetchIdentity(p),this.setAddressExplorerUrl=p=>{el.AccountController.setAddressExplorerUrl(p)},this.setSIWENonce=p=>{el.yD.setNonce(p)},this.setSIWESession=p=>{el.yD.setSession(p)},this.setSIWEStatus=p=>{el.yD.setStatus(p)},this.setSIWEMessage=p=>{el.yD.setMessage(p)},this.getSIWENonce=()=>el.yD.state.nonce,this.getSIWESession=()=>el.yD.state.session,this.getSIWEStatus=()=>el.yD.state.status,this.getSIWEMessage=()=>el.yD.state.message,this.initControllers(p),this.initOrContinue()}async open(p){await this.initOrContinue(),el.IN.open(p)}async close(){await this.initOrContinue(),el.IN.close()}getThemeMode(){return el.ThemeController.state.themeMode}getThemeVariables(){return el.ThemeController.state.themeVariables}setThemeMode(p){el.ThemeController.setThemeMode(p),(0,ec.setColorTheme)(el.ThemeController.state.themeMode)}setThemeVariables(p){el.ThemeController.setThemeVariables(p),(0,ec.setThemeVariables)(el.ThemeController.state.themeVariables)}subscribeTheme(p){return el.ThemeController.subscribe(p)}getState(){return{...el.Ie.state}}subscribeState(p){return el.Ie.subscribe(p)}getEvent(){return{...el.Xs.state}}subscribeEvents(p){return el.Xs.subscribe(p)}subscribeSIWEState(p){return el.yD.subscribe(p)}initControllers(p){el.NetworkController.setClient(p.networkControllerClient),el.NetworkController.setDefaultCaipNetwork(p.defaultChain),el.OptionsController.setProjectId(p.projectId),el.OptionsController.setIncludeWalletIds(p.includeWalletIds),el.OptionsController.setExcludeWalletIds(p.excludeWalletIds),el.OptionsController.setFeaturedWalletIds(p.featuredWalletIds),el.OptionsController.setTokens(p.tokens),el.OptionsController.setTermsConditionsUrl(p.termsConditionsUrl),el.OptionsController.setPrivacyPolicyUrl(p.privacyPolicyUrl),el.OptionsController.setCustomWallets(p.customWallets),el.OptionsController.setEnableAnalytics(p.enableAnalytics),el.OptionsController.setSdkVersion(p._sdkVersion),el.ConnectionController.setClient(p.connectionControllerClient),p.siweControllerClient&&el.yD.setSIWEClient(p.siweControllerClient),p.metadata&&el.OptionsController.setMetadata(p.metadata),p.themeMode&&el.ThemeController.setThemeMode(p.themeMode),p.themeVariables&&el.ThemeController.setThemeVariables(p.themeVariables)}async initOrContinue(){return!this.initPromise&&!ti&&el.j1.isClient()&&(ti=!0,this.initPromise=new Promise(async p=>{await Promise.all([Promise.resolve().then(w.bind(w,25643)),Promise.resolve().then(w.bind(w,90078))]);let g=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",g),p()})),this.initPromise}};let tn={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.4.0"},to={ConnectorExplorerIds:{[tn.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[tn.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[tn.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[tn.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[tn.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[tn.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[tn.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[tn.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[tn.INJECTED_CONNECTOR_ID]:"Browser Wallet",[tn.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[tn.COINBASE_CONNECTOR_ID]:"Coinbase",[tn.LEDGER_CONNECTOR_ID]:"Ledger",[tn.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[tn.INJECTED_CONNECTOR_ID]:"INJECTED",[tn.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[tn.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},ta={caipNetworkIdToNumber:p=>p?Number(p.split(":")[1]):void 0,getCaipTokens(p){if(!p)return;let g={};return Object.entries(p).forEach(([p,w])=>{g[`${tn.EIP155}:${p}`]=w}),g}};let Web3Modal=class Web3Modal extends Web3ModalScaffold{constructor(p){let{wagmiConfig:g,siweConfig:w,chains:m,defaultChain:v,tokens:x,_sdkVersion:A,..._}=p;if(!g)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!_.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!g.connectors.find(p=>p.id===tn.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let B={connectWalletConnect:async p=>{let w=g.connectors.find(p=>p.id===tn.WALLET_CONNECT_CONNECTOR_ID);if(!w)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");w.on("message",g=>{"display_uri"===g.type&&(p(g.data),w.removeAllListeners())});let m=ta.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,ea.$j)({connector:w,chainId:m})},connectExternal:async({id:p,provider:w,info:m})=>{let v=g.connectors.find(g=>g.id===p);if(!v)throw Error("connectionControllerClient:connectExternal - connector is undefined");w&&m&&v.id===tn.EIP6963_CONNECTOR_ID&&v.setEip6963Wallet?.({provider:w,info:m});let x=ta.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,ea.$j)({connector:v,chainId:x})},checkInstalled:p=>{let g=this.getConnectors().filter(p=>"ANNOUNCED"===p.type),w=this.getConnectors().find(p=>"INJECTED"===p.type);if(!p)return!!window.ethereum;if(g.length){let w=p.some(p=>g.some(g=>g.info?.rdns===p));if(w)return!0}return!!w&&!!window?.ethereum&&p.some(p=>!!window.ethereum?.[String(p)])},disconnect:ea.zP};super({networkControllerClient:{switchCaipNetwork:async p=>{let g=ta.caipNetworkIdToNumber(p?.id);g&&await (0,ea.If)({chainId:g})},async getApprovedCaipNetworksData(){let p=localStorage.getItem("wagmi.wallet");if(p?.includes(tn.WALLET_CONNECT_CONNECTOR_ID)){let p=g.connectors.find(p=>p.id===tn.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let w=await p.getProvider(),m=w.signer?.session?.namespaces,v=m?.[tn.EIP155]?.methods,x=m?.[tn.EIP155]?.chains;return{supportsAllNetworks:v?.includes(tn.ADD_CHAIN_METHOD),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:B,siweControllerClient:w,defaultChain:function(p){if(p)return{id:`${tn.EIP155}:${p.id}`,name:p.name,imageId:to.EIP155NetworkImageIds[p.id]}}(v),tokens:ta.getCaipTokens(x),_sdkVersion:A??`html-wagmi-${tn.VERSION}`,..._}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=p,this.syncRequestedNetworks(m),this.syncConnectors(g),this.listenConnectors(g),(0,ea.uH)(()=>this.syncAccount()),(0,ea.QC)(()=>this.syncNetwork())}getState(){let p=super.getState();return{...p,selectedNetworkId:ta.caipNetworkIdToNumber(p.selectedNetworkId)}}subscribeState(p){return super.subscribeState(g=>p({...g,selectedNetworkId:ta.caipNetworkIdToNumber(g.selectedNetworkId)}))}syncRequestedNetworks(p){let g=p?.map(p=>({id:`${tn.EIP155}:${p.id}`,name:p.name,imageId:to.EIP155NetworkImageIds[p.id],imageUrl:this.options?.chainImages?.[p.id]}));this.setRequestedCaipNetworks(g??[])}async syncAccount(){let{address:p,isConnected:g}=(0,ea.D0)(),{chain:w}=(0,ea.Hy)();if(this.resetAccount(),g&&p&&w){let m=`${tn.EIP155}:${w.id}:${p}`;this.setIsConnected(g),this.setCaipAddress(m),await Promise.all([this.syncProfile(p),this.syncBalance(p,w),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!g&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:p,isConnected:g}=(0,ea.D0)(),{chain:w}=(0,ea.Hy)();if(w){let m=String(w.id),v=`${tn.EIP155}:${m}`;if(this.setCaipNetwork({id:v,name:w.name,imageId:to.EIP155NetworkImageIds[w.id],imageUrl:this.options?.chainImages?.[w.id]}),g&&p){let g=`${tn.EIP155}:${w.id}:${p}`;if(this.setCaipAddress(g),w.blockExplorers?.default?.url){let g=`${w.blockExplorers.default.url}/address/${p}`;this.setAddressExplorerUrl(g)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(p,w)}}}async syncProfile(p){try{let{name:g,avatar:w}=await this.fetchIdentity({caipChainId:`${tn.EIP155}:${es.RJ.id}`,address:p});this.setProfileName(g),this.setProfileImage(w)}catch{let g=await (0,ea.Lk)({address:p,chainId:es.RJ.id});if(g){this.setProfileName(g);let p=await (0,ea.w6)({name:g,chainId:es.RJ.id});p&&this.setProfileImage(p)}}}async syncBalance(p,g){let w=await (0,ea.EG)({address:p,chainId:g.id,token:this.options?.tokens?.[g.id]?.address});this.setBalance(w.formatted,w.symbol)}syncConnectors(p){let g=[];p.connectors.forEach(({id:p,name:w})=>{p!==tn.EIP6963_CONNECTOR_ID&&g.push({id:p,explorerId:to.ConnectorExplorerIds[p],imageId:to.ConnectorImageIds[p],imageUrl:this.options?.connectorImages?.[p],name:to.ConnectorNamesMap[p]??w,type:to.ConnectorTypesMap[p]??"EXTERNAL"})}),this.setConnectors(g)}eip6963EventHandler(p,g){if(g.detail){let{info:w,provider:m}=g.detail,v=this.getConnectors(),x=v.find(p=>p.name===w.name);x||(this.addConnector({id:tn.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:w.icon??this.options?.connectorImages?.[tn.EIP6963_CONNECTOR_ID],name:w.name,provider:m,info:w}),p.isAuthorized({info:w,provider:m}))}}listenConnectors(p){let g=p.connectors.find(p=>p.id===tn.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&g){let p=this.eip6963EventHandler.bind(this,g);window.addEventListener(tn.EIP6963_ANNOUNCE_EVENT,p),window.dispatchEvent(new Event(tn.EIP6963_REQUEST_EVENT))}}};var ts=w(55210),__classPrivateFieldSet=function(p,g,w,m,v){if("m"===m)throw TypeError("Private method is not writable");if("a"===m&&!v)throw TypeError("Private accessor was defined without a setter");if("function"==typeof g?p!==g||!v:!g.has(p))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===m?v.call(p,w):v?v.value=w:g.set(p,w),w},__classPrivateFieldGet=function(p,g,w,m){if("a"===w&&!m)throw TypeError("Private accessor was defined without a getter");if("function"==typeof g?p!==g||!m:!g.has(p))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===w?m:"a"===w?m.call(p):m?m.value:g.get(p)};let tl="connectedRdns";let EIP6963Connector=class EIP6963Connector extends ts._{constructor(p){super({chains:p.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",x.set(this,void 0),A.set(this,void 0),__classPrivateFieldSet(this,x,this.options.getProvider(),"f")}async connect(p){let g=await super.connect(p);return __classPrivateFieldGet(this,A,"f")&&this.storage?.setItem(tl,__classPrivateFieldGet(this,A,"f").info.rdns),g}async disconnect(){await super.disconnect(),this.storage?.removeItem(tl),__classPrivateFieldSet(this,A,void 0,"f")}async isAuthorized(p){let g=this.storage?.getItem(tl);if(g){if(!p||g!==p.info.rdns)return!0;__classPrivateFieldSet(this,A,p,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(__classPrivateFieldGet(this,A,"f")?.provider??__classPrivateFieldGet(this,x,"f"))}setEip6963Wallet(p){__classPrivateFieldSet(this,A,p,"f")}};x=new WeakMap,A=new WeakMap;var tc=w(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=tc.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var tu=w(69077),td=w(11588),th=w(53516),tf=w(14088),tp=w(92221),tg=w(42455),tw=w(67629),tm=w(19575),tb=w(46872),tv=class extends tf.wR{constructor({chains:p,options:g}){super({chains:p,options:{reloadOnDisconnect:!1,...g}}),(0,tf.ov)(this,"id","coinbaseWallet"),(0,tf.ov)(this,"name","Coinbase Wallet"),(0,tf.ov)(this,"ready",!0),(0,tf.Ko)(this,_,void 0),(0,tf.Ko)(this,B,void 0),(0,tf.ov)(this,"onAccountsChanged",p=>{0===p.length?this.emit("disconnect"):this.emit("change",{account:(0,tp.K)(p[0])})}),(0,tf.ov)(this,"onChainChanged",p=>{let g=(0,th.J)(p),w=this.isChainUnsupported(g);this.emit("change",{chain:{id:g,unsupported:w}})}),(0,tf.ov)(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect({chainId:p}={}){try{let g=await this.getProvider();g.on("accountsChanged",this.onAccountsChanged),g.on("chainChanged",this.onChainChanged),g.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let w=await g.enable(),m=(0,tp.K)(w[0]),v=await this.getChainId(),x=this.isChainUnsupported(v);if(p&&v!==p){let g=await this.switchChain(p);v=g.id,x=this.isChainUnsupported(v)}return{account:m,chain:{id:v,unsupported:x}}}catch(p){if(/(user closed modal|accounts received is empty)/i.test(p.message))throw new tg.ab(p);throw p}}async disconnect(){if(!(0,tf.ac)(this,B))return;let p=await this.getProvider();p.removeListener("accountsChanged",this.onAccountsChanged),p.removeListener("chainChanged",this.onChainChanged),p.removeListener("disconnect",this.onDisconnect),p.disconnect(),p.close()}async getAccount(){let p=await this.getProvider(),g=await p.request({method:"eth_accounts"});return(0,tp.K)(g[0])}async getChainId(){let p=await this.getProvider(),g=(0,th.J)(p.chainId);return g}async getProvider(){if(!(0,tf.ac)(this,B)){let p=(await Promise.all([w.e(811),w.e(439)]).then(w.t.bind(w,45811,19))).default;"function"!=typeof p&&"function"==typeof p.default&&(p=p.default),(0,tf.qx)(this,_,new p(this.options));let g=tf.ac(this,_).walletExtension?.getChainId(),m=this.chains.find(p=>this.options.chainId?p.id===this.options.chainId:p.id===g)||this.chains[0],v=this.options.chainId||m?.id,x=this.options.jsonRpcUrl||m?.rpcUrls.default.http[0];(0,tf.qx)(this,B,(0,tf.ac)(this,_).makeWeb3Provider(x,v))}return(0,tf.ac)(this,B)}async getWalletClient({chainId:p}={}){let[g,w]=await Promise.all([this.getProvider(),this.getAccount()]),m=this.chains.find(g=>g.id===p);if(!g)throw Error("provider is required.");return(0,tw.K)({account:w,chain:m,transport:(0,tm.P)(g)})}async isAuthorized(){try{let p=await this.getAccount();return!!p}catch{return!1}}async switchChain(p){let g=await this.getProvider(),w=(0,tb.eC)(p);try{return await g.request({method:"wallet_switchEthereumChain",params:[{chainId:w}]}),this.chains.find(g=>g.id===p)??{id:p,name:`Chain ${w}`,network:`${w}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(v){let m=this.chains.find(g=>g.id===p);if(!m)throw new td.B({chainId:p,connectorId:this.id});if(4902===v.code)try{return await g.request({method:"wallet_addEthereumChain",params:[{chainId:w,chainName:m.name,nativeCurrency:m.nativeCurrency,rpcUrls:[m.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(m)}]}),m}catch(p){throw new tg.ab(p)}throw new tg.x3(v)}}async watchAsset({address:p,decimals:g=18,image:w,symbol:m}){let v=await this.getProvider();return v.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:p,decimals:g,image:w,symbol:m}}})}};_=new WeakMap,B=new WeakMap;var ty="eip155",tC="requestedChains",tx="wallet_addEthereumChain",tA=class extends tf.wR{constructor(p){super({...p,options:{isNewChainsStale:!0,...p.options}}),(0,tf.Ko)(this,U),(0,tf.Ko)(this,z),(0,tf.Ko)(this,q),(0,tf.Ko)(this,G),(0,tf.Ko)(this,Z),(0,tf.Ko)(this,J),(0,tf.Ko)(this,ee),(0,tf.Ko)(this,er),(0,tf.Ko)(this,en),(0,tf.ov)(this,"id","walletConnect"),(0,tf.ov)(this,"name","WalletConnect"),(0,tf.ov)(this,"ready",!0),(0,tf.Ko)(this,O,void 0),(0,tf.Ko)(this,T,void 0),(0,tf.ov)(this,"onAccountsChanged",p=>{0===p.length?this.emit("disconnect"):this.emit("change",{account:(0,tp.K)(p[0])})}),(0,tf.ov)(this,"onChainChanged",p=>{let g=Number(p),w=this.isChainUnsupported(g);this.emit("change",{chain:{id:g,unsupported:w}})}),(0,tf.ov)(this,"onDisconnect",()=>{(0,tf.U9)(this,J,X).call(this,[]),this.emit("disconnect")}),(0,tf.ov)(this,"onDisplayUri",p=>{this.emit("message",{type:"display_uri",data:p})}),(0,tf.ov)(this,"onConnect",()=>{this.emit("connect",{})}),(0,tf.U9)(this,U,F).call(this)}async connect({chainId:p,pairingTopic:g}={}){try{let w=p;if(!w){let p=this.storage?.getItem("store"),g=p?.state?.data?.chain?.id;w=g&&!this.isChainUnsupported(g)?g:this.chains[0]?.id}if(!w)throw Error("No chains found on connector.");let m=await this.getProvider();(0,tf.U9)(this,G,K).call(this);let v=(0,tf.U9)(this,q,Q).call(this);if(m.session&&v&&await m.disconnect(),!m.session||v){let p=this.chains.filter(p=>p.id!==w).map(p=>p.id);this.emit("message",{type:"connecting"}),await m.connect({pairingTopic:g,chains:[w],optionalChains:p}),(0,tf.U9)(this,J,X).call(this,this.chains.map(({id:p})=>p))}let x=await m.enable(),A=(0,tp.K)(x[0]),_=await this.getChainId(),B=this.isChainUnsupported(_);return{account:A,chain:{id:_,unsupported:B}}}catch(p){if(/user rejected/i.test(p?.message))throw new tg.ab(p);throw p}}async disconnect(){let p=await this.getProvider();try{await p.disconnect()}catch(p){if(!/No matching key/i.test(p.message))throw p}finally{(0,tf.U9)(this,Z,Y).call(this),(0,tf.U9)(this,J,X).call(this,[])}}async getAccount(){let{accounts:p}=await this.getProvider();return(0,tp.K)(p[0])}async getChainId(){let{chainId:p}=await this.getProvider();return p}async getProvider({chainId:p}={}){return(0,tf.ac)(this,O)||await (0,tf.U9)(this,U,F).call(this),p&&await this.switchChain(p),(0,tf.ac)(this,O)}async getWalletClient({chainId:p}={}){let[g,w]=await Promise.all([this.getProvider({chainId:p}),this.getAccount()]),m=this.chains.find(g=>g.id===p);if(!g)throw Error("provider is required.");return(0,tw.K)({account:w,chain:m,transport:(0,tm.P)(g)})}async isAuthorized(){try{let[p,g]=await Promise.all([this.getAccount(),this.getProvider()]),w=(0,tf.U9)(this,q,Q).call(this);if(!p)return!1;if(w&&g.session){try{await g.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(p){let g=this.chains.find(g=>g.id===p);if(!g)throw new tg.x3(Error("chain not found on connector."));try{let w=await this.getProvider(),m=(0,tf.U9)(this,er,ei).call(this),v=(0,tf.U9)(this,en,eo).call(this),x=m.includes(p);if(!x&&v.includes(tx)){await w.request({method:tx,params:[{chainId:(0,tb.eC)(g.id),blockExplorerUrls:[g.blockExplorers?.default?.url],chainName:g.name,nativeCurrency:g.nativeCurrency,rpcUrls:[...g.rpcUrls.default.http]}]});let m=(0,tf.U9)(this,ee,et).call(this);m.push(p),(0,tf.U9)(this,J,X).call(this,m)}return await w.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tb.eC)(p)}]}),g}catch(g){let p="string"==typeof g?g:g?.message;if(/user rejected request/i.test(p))throw new tg.ab(g);throw new tg.x3(g)}}};O=new WeakMap,T=new WeakMap,U=new WeakSet,F=async function(){return(0,tf.ac)(this,T)||"undefined"==typeof window||(0,tf.qx)(this,T,(0,tf.U9)(this,z,W).call(this)),(0,tf.ac)(this,T)},z=new WeakSet,W=async function(){let{EthereumProvider:p,OPTIONAL_EVENTS:g,OPTIONAL_METHODS:m}=await Promise.all([w.e(327),w.e(883)]).then(w.bind(w,44327)),[v,...x]=this.chains.map(({id:p})=>p);if(v){let{projectId:w,showQrModal:A=!0,qrModalOptions:_,metadata:B,relayUrl:T}=this.options;(0,tf.qx)(this,O,await p.init({showQrModal:A,qrModalOptions:_,projectId:w,optionalMethods:m,optionalEvents:g,chains:[v],optionalChains:x,rpcMap:Object.fromEntries(this.chains.map(p=>[p.id,p.rpcUrls.default.http[0]])),metadata:B,relayUrl:T}))}},q=new WeakSet,Q=function(){let p=(0,tf.U9)(this,en,eo).call(this);if(p.includes(tx)||!this.options.isNewChainsStale)return!1;let g=(0,tf.U9)(this,ee,et).call(this),w=this.chains.map(({id:p})=>p),m=(0,tf.U9)(this,er,ei).call(this);return(!m.length||!!m.some(p=>w.includes(p)))&&!w.every(p=>g.includes(p))},G=new WeakSet,K=function(){(0,tf.ac)(this,O)&&((0,tf.U9)(this,Z,Y).call(this),(0,tf.ac)(this,O).on("accountsChanged",this.onAccountsChanged),(0,tf.ac)(this,O).on("chainChanged",this.onChainChanged),(0,tf.ac)(this,O).on("disconnect",this.onDisconnect),(0,tf.ac)(this,O).on("session_delete",this.onDisconnect),(0,tf.ac)(this,O).on("display_uri",this.onDisplayUri),(0,tf.ac)(this,O).on("connect",this.onConnect))},Z=new WeakSet,Y=function(){(0,tf.ac)(this,O)&&((0,tf.ac)(this,O).removeListener("accountsChanged",this.onAccountsChanged),(0,tf.ac)(this,O).removeListener("chainChanged",this.onChainChanged),(0,tf.ac)(this,O).removeListener("disconnect",this.onDisconnect),(0,tf.ac)(this,O).removeListener("session_delete",this.onDisconnect),(0,tf.ac)(this,O).removeListener("display_uri",this.onDisplayUri),(0,tf.ac)(this,O).removeListener("connect",this.onConnect))},J=new WeakSet,X=function(p){this.storage?.setItem(tC,p)},ee=new WeakSet,et=function(){return this.storage?.getItem(tC)??[]},er=new WeakSet,ei=function(){if(!(0,tf.ac)(this,O))return[];let p=tf.ac(this,O).session?.namespaces[ty]?.chains?.map(p=>parseInt(p.split(":")[1]||""));return p??[]},en=new WeakSet,eo=function(){if(!(0,tf.ac)(this,O))return[];let p=tf.ac(this,O).session?.namespaces[ty]?.methods;return p??[]};let tE=el.j1.getBlockchainApiUrl();function defaultWagmiConfig({projectId:p,chains:g,metadata:w}){let{publicClient:m}=(0,ea.QB)(g,[function({projectId:p}){return function(g){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(g.id))return null;let w=`${tE}/v1/?chainId=${tn.EIP155}:${g.id}&projectId=${p}`;return{chain:{...g,rpcUrls:{...g.rpcUrls,default:{http:[w]}}},rpcUrls:{http:[w]}}}}({projectId:p}),function(p){return p.rpcUrls.public.http[0]?{chain:p,rpcUrls:p.rpcUrls.public}:null}]);return(0,tu._g)({autoConnect:!0,connectors:[new tA({chains:g,options:{projectId:p,showQrModal:!1,metadata:w}}),new EIP6963Connector({chains:g}),new ts._({chains:g,options:{shimDisconnect:!0}}),new tv({chains:g,options:{appName:w?.name??"Unknown"}})],publicClient:m})}function createWeb3Modal(p){return!v&&(m=v=new Web3Modal({...p,_sdkVersion:`react-wagmi-${tn.VERSION}`})),v}},21431:function(p,g,w){"use strict";function parseAccount(p){return"string"==typeof p?{address:p,type:"json-rpc"}:p}w.d(g,{T:function(){return parseAccount}})},83161:function(p,g,w){"use strict";w.d(g,{R:function(){return call}});var m=w(21431),v=w(1920),x=w(69977),A=w(21973),_=w(90722),B=w(31826),O=w(96606),T=w(61786),U=w(46872),F=w(90968),z=w(91019),W=w(23822),q=w(68583),Q=w(13134);async function call(p,g){let{account:v,batch:B=!!p.batch?.multicall,blockNumber:O,blockTag:T="latest",accessList:q,data:G,gas:K,gasPrice:Z,maxFeePerGas:Y,maxPriorityFeePerGas:J,nonce:X,to:ee,value:et,...er}=g,ei=v?(0,m.T)(v):void 0;try{(0,Q.F)(g);let w=O?(0,U.eC)(O):void 0,m=w||T,v=p.chain?.formatters?.transactionRequest?.format||W.t,x=v({...(0,z.K)(er,{format:v}),from:ei?.address,accessList:q,data:G,gas:K,gasPrice:Z,maxFeePerGas:Y,maxPriorityFeePerGas:J,nonce:X,to:ee,value:et});if(B&&function({request:p}){let{data:g,to:w,...m}=p;return!(!g||g.startsWith("0x82ad56cb"))&&!!w&&!(Object.values(m).filter(p=>void 0!==p).length>0)}({request:x}))try{return await scheduleMulticall(p,{...x,blockNumber:O,blockTag:T})}catch(p){if(!(p instanceof A.pZ)&&!(p instanceof A.mm))throw p}let _=await p.request({method:"eth_call",params:m?[x,m]:[x]});if("0x"===_)return{data:void 0};return{data:_}}catch(B){let m=function(p){if(!(p instanceof x.G))return;let g=p.walk();return"object"==typeof g.data?g.data.data:g.data}(B),{offchainLookup:v,offchainLookupSignature:A}=await w.e(646).then(w.bind(w,33646));if(m?.slice(0,10)===A&&ee)return{data:await v(p,{data:m,to:ee})};throw function(p,{docsPath:g,...w}){let m=p;return(0,F.B)(p)&&(m=(0,F.k)(p,w)),new _.cg(m,{docsPath:g,...w})}(B,{...g,account:ei,chain:p.chain})}}async function scheduleMulticall(p,g){let{batchSize:w=1024,wait:m=0}="object"==typeof p.batch?.multicall?p.batch.multicall:{},{blockNumber:x,blockTag:F="latest",data:z,multicallAddress:W,to:Q}=g,G=W;if(!G){if(!p.chain)throw new A.pZ;G=(0,T.LI)({blockNumber:x,chain:p.chain,contract:"multicall3"})}let K=x?(0,U.eC)(x):void 0,Z=K||F,{schedule:Y}=(0,q.S)({id:`${p.uid}.${Z}`,wait:m,shouldSplitBatch(p){let g=p.reduce((p,{data:g})=>p+(g.length-2),0);return g>2*w},fn:async g=>{let w=g.map(p=>({allowFailure:!0,callData:p.data,target:p.to})),m=(0,O.R)({abi:v.F8,args:[w],functionName:"aggregate3"}),x=await p.request({method:"eth_call",params:[{data:m,to:G},Z]});return(0,B.k)({abi:v.F8,args:[w],functionName:"aggregate3",data:x||"0x"})}}),[{returnData:J,success:X}]=await Y({data:z,to:Q});if(!X)throw new _.VQ({data:J});return"0x"===J?{data:void 0}:{data:J}}},14828:function(p,g,w){"use strict";w.d(g,{Q:function(){return estimateGas}});var m=w(21431),v=w(25071),x=w(46872),A=w(6665),_=w(56283),B=w(69977),O=w(54574);let EstimateGasExecutionError=class EstimateGasExecutionError extends B.G{constructor(p,{account:g,docsPath:w,chain:m,data:v,gas:x,gasPrice:B,maxFeePerGas:T,maxPriorityFeePerGas:U,nonce:F,to:z,value:W}){let q=(0,O.xr)({from:g?.address,to:z,value:void 0!==W&&`${(0,A.d)(W)} ${m?.nativeCurrency.symbol||"ETH"}`,data:v,gas:x,gasPrice:void 0!==B&&`${(0,_.o)(B)} gwei`,maxFeePerGas:void 0!==T&&`${(0,_.o)(T)} gwei`,maxPriorityFeePerGas:void 0!==U&&`${(0,_.o)(U)} gwei`,nonce:F});super(p.shortMessage,{cause:p,docsPath:w,metaMessages:[...p.metaMessages?[...p.metaMessages," "]:[],"Estimate Gas Arguments:",q].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=p}};var T=w(90968),U=w(91019),F=w(23822),z=w(13134),W=w(59920);async function estimateGas(p,g){let w=g.account??p.account;if(!w)throw new v.o({docsPath:"/docs/actions/public/estimateGas"});let A=(0,m.T)(w);try{let{accessList:w,blockNumber:m,blockTag:v,data:_,gas:B,gasPrice:O,maxFeePerGas:T,maxPriorityFeePerGas:q,nonce:Q,to:G,value:K,...Z}="local"===A.type?await (0,W.h)(p,g):g,Y=m?(0,x.eC)(m):void 0,J=Y||v;(0,z.F)(g);let X=p.chain?.formatters?.transactionRequest?.format||F.t,ee=X({...(0,U.K)(Z,{format:X}),from:A.address,accessList:w,data:_,gas:B,gasPrice:O,maxFeePerGas:T,maxPriorityFeePerGas:q,nonce:Q,to:G,value:K}),et=await p.request({method:"eth_estimateGas",params:J?[ee,J]:[ee]});return BigInt(et)}catch(w){throw function(p,{docsPath:g,...w}){let m=p;return(0,T.B)(p)&&(m=(0,T.k)(p,w)),new EstimateGasExecutionError(m,{docsPath:g,...w})}(w,{...g,account:A,chain:p.chain})}}},33910:function(p,g,w){"use strict";w.d(g,{Q:function(){return getBlock}});var m=w(69977);let BlockNotFoundError=class BlockNotFoundError extends m.G{constructor({blockHash:p,blockNumber:g}){let w="Block";p&&(w=`Block at hash "${p}"`),g&&(w=`Block at number "${g}"`),super(`${w} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};var v=w(46872),x=w(86101);async function getBlock(p,{blockHash:g,blockNumber:w,blockTag:m="latest",includeTransactions:A=!1}={}){let _=void 0!==w?(0,v.eC)(w):void 0,B=null;if(!(B=g?await p.request({method:"eth_getBlockByHash",params:[g,A]}):await p.request({method:"eth_getBlockByNumber",params:[_||m,A]})))throw new BlockNotFoundError({blockHash:g,blockNumber:w});let O=p.chain?.formatters?.block?.format||x.Z;return O(B)}},29251:function(p,g,w){"use strict";w.d(g,{L:function(){return getChainId}});var m=w(90169);async function getChainId(p){let g=await p.request({method:"eth_chainId"});return(0,m.ly)(g)}},48671:function(p,g,w){"use strict";async function getGasPrice(p){let g=await p.request({method:"eth_gasPrice"});return BigInt(g)}w.d(g,{o:function(){return getGasPrice}})},89784:function(p,g,w){"use strict";w.d(g,{K:function(){return getTransactionCount}});var m=w(90169),v=w(46872);async function getTransactionCount(p,{address:g,blockTag:w="latest",blockNumber:x}){let A=await p.request({method:"eth_getTransactionCount",params:[g,x?(0,v.eC)(x):w]});return(0,m.ly)(A)}},48439:function(p,g,w){"use strict";let m;w.d(g,{e:function(){return createClient}});var v=w(21431);let x=256;function createClient({account:p,batch:g,chain:w,key:A="base",name:_="Base Client",pollingInterval:B=4e3,transport:O,type:T="base"}){let{config:U,request:F,value:z}=O({chain:w,pollingInterval:B}),W={account:p?(0,v.T)(p):void 0,batch:g,chain:w,key:A,name:_,pollingInterval:B,request:F,transport:{...U,...z},type:T,uid:function(p=11){if(!m||x+p>512){m="",x=0;for(let p=0;p<256;p++)m+=(256+256*Math.random()|0).toString(16).substring(1)}return m.substring(x,x+++p)}()};return Object.assign(W,{extend:function extend(p){return g=>{let w=g(p);for(let p in W)delete w[p];let m={...p,...w};return Object.assign(m,{extend:extend(m)})}}(W)})}},67629:function(p,g,w){"use strict";w.d(g,{K:function(){return createWalletClient}});var m=w(48439),v=w(29251),x=w(46872);async function addChain(p,{chain:g}){let{id:w,name:m,nativeCurrency:v,rpcUrls:A,blockExplorers:_}=g;await p.request({method:"wallet_addEthereumChain",params:[{chainId:(0,x.eC)(w),chainName:m,nativeCurrency:v,rpcUrls:A.default.http,blockExplorerUrls:_?Object.values(_).map(({url:p})=>p):void 0}]})}var A=w(99353),_=w(21431),B=w(25071),O=w(61786),T=w(54574),U=w(90968),F=w(91019),z=w(23822),W=w(13134),q=w(59920);async function sendTransaction(p,g){let{account:w=p.account,chain:m=p.chain,accessList:x,data:A,gas:Q,gasPrice:G,maxFeePerGas:K,maxPriorityFeePerGas:Z,nonce:Y,to:J,value:X,...ee}=g;if(!w)throw new B.o({docsPath:"/docs/actions/wallet/sendTransaction"});let et=(0,_.T)(w);try{let w;if((0,W.F)(g),null!==m&&(w=await (0,v.L)(p),(0,O.qg)({currentChainId:w,chain:m})),"local"===et.type){let g=await (0,q.h)(p,{account:et,accessList:x,chain:m,data:A,gas:Q,gasPrice:G,maxFeePerGas:K,maxPriorityFeePerGas:Z,nonce:Y,to:J,value:X,...ee});w||(w=await (0,v.L)(p));let _=m?.serializers?.transaction,B=await et.signTransaction({...g,chainId:w},{serializer:_});return await p.request({method:"eth_sendRawTransaction",params:[B]})}let _=m?.formatters?.transactionRequest?.format||z.t,B=_({...(0,F.K)(ee,{format:_}),accessList:x,data:A,from:et.address,gas:Q,gasPrice:G,maxFeePerGas:K,maxPriorityFeePerGas:Z,nonce:Y,to:J,value:X});return await p.request({method:"eth_sendTransaction",params:[B]})}catch(p){throw function(p,{docsPath:g,...w}){let m=p;return(0,U.B)(p)&&(m=(0,U.k)(p,w)),new T.mk(m,{docsPath:g,...w})}(p,{...g,account:et,chain:g.chain||void 0})}}var Q=w(92221);async function getAddresses(p){let g=await p.request({method:"eth_accounts"});return g.map(p=>(0,Q.x)(p))}async function getPermissions(p){let g=await p.request({method:"wallet_getPermissions"});return g}async function requestAddresses(p){let g=await p.request({method:"eth_requestAccounts"});return g.map(p=>(0,Q.K)(p))}async function requestPermissions(p,g){return p.request({method:"wallet_requestPermissions",params:[g]})}async function signMessage(p,{account:g=p.account,message:w}){if(!g)throw new B.o({docsPath:"/docs/actions/wallet/signMessage"});let m=(0,_.T)(g);if("local"===m.type)return m.signMessage({message:w});let v="string"==typeof w?(0,x.$G)(w):w.raw instanceof Uint8Array?(0,x.NC)(w.raw):w.raw;return p.request({method:"personal_sign",params:[v,m.address]})}var G=w(25493),K=w(61344),Z=w(61539);async function signTypedData(p,{account:g=p.account,domain:w,message:m,primaryType:v,types:x}){if(!g)throw new B.o({docsPath:"/docs/actions/wallet/signTypedData"});let A=(0,_.T)(g),O={EIP712Domain:["string"==typeof w?.name&&{name:"name",type:"string"},w?.version&&{name:"version",type:"string"},"number"==typeof w?.chainId&&{name:"chainId",type:"uint256"},w?.verifyingContract&&{name:"verifyingContract",type:"address"},w?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean),...x};if((0,Z.i)({domain:w,message:m,primaryType:v,types:O}),"local"===A.type)return A.signTypedData({domain:w,primaryType:v,types:O,message:m});let T=(0,K.P)({domain:w??{},primaryType:v,types:O,message:m},(p,g)=>(0,G.v)(g)?g.toLowerCase():g);return p.request({method:"eth_signTypedData_v4",params:[A.address,T]})}async function switchChain(p,{id:g}){await p.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,x.eC)(g)}]})}async function watchAsset(p,g){let w=await p.request({method:"wallet_watchAsset",params:g});return w}var Y=w(96606);async function writeContract(p,{abi:g,address:w,args:m,dataSuffix:v,functionName:x,...A}){let _=(0,Y.R)({abi:g,args:m,functionName:x}),B=await sendTransaction(p,{data:`${_}${v?v.replace("0x",""):""}`,to:w,...A});return B}let walletActions=p=>({addChain:g=>addChain(p,g),deployContract:g=>(function(p,{abi:g,args:w,bytecode:m,...v}){let x=(0,A.w)({abi:g,args:w,bytecode:m});return sendTransaction(p,{...v,data:x})})(p,g),getAddresses:()=>getAddresses(p),getChainId:()=>(0,v.L)(p),getPermissions:()=>getPermissions(p),requestAddresses:()=>requestAddresses(p),requestPermissions:g=>requestPermissions(p,g),sendTransaction:g=>sendTransaction(p,g),signMessage:g=>signMessage(p,g),signTypedData:g=>signTypedData(p,g),switchChain:g=>switchChain(p,g),watchAsset:g=>watchAsset(p,g),writeContract:g=>writeContract(p,g)});function createWalletClient({account:p,chain:g,transport:w,key:v="wallet",name:x="Wallet Client",pollingInterval:A}){return(0,m.e)({account:p,chain:g,key:v,name:x,pollingInterval:A,transport:p=>w({...p,retryCount:0}),type:"walletClient"}).extend(walletActions)}},14160:function(p,g,w){"use strict";w.d(g,{q:function(){return createTransport}});var m=w(62635);function createTransport({key:p,name:g,request:w,retryCount:v=3,retryDelay:x=150,timeout:A,type:_},B){return{config:{key:p,name:g,request:w,retryCount:v,retryDelay:x,timeout:A,type:_},request:(0,m.n)(w,{retryCount:v,retryDelay:x}),value:B}}},19575:function(p,g,w){"use strict";w.d(g,{P:function(){return custom}});var m=w(14160);function custom(p,g={}){let{key:w="custom",name:v="Custom Provider",retryDelay:x}=g;return({retryCount:A})=>(0,m.q)({key:w,name:v,request:p.request.bind(p),retryCount:g.retryCount??A,retryDelay:x,type:"custom"})}},1920:function(p,g,w){"use strict";w.d(g,{$o:function(){return _},Ei:function(){return A},F8:function(){return m},lD:function(){return v},nZ:function(){return x}});let m=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],v=[{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],x=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],A=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]}],_=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},35554:function(p,g,w){"use strict";w.d(g,{$:function(){return m},Up:function(){return v},hZ:function(){return x}});let m={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},v={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},x={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},58617:function(p,g,w){"use strict";w.d(g,{Bd:function(){return x},Zn:function(){return v},ez:function(){return m}});let m={gwei:9,wei:18},v={ether:-9,wei:9},x={ether:-18,gwei:-9}},5555:function(p,g,w){"use strict";w.d(g,{CI:function(){return InvalidAbiDecodingTypeError},FM:function(){return AbiEventSignatureEmptyTopicsError},Gy:function(){return DecodeLogTopicsMismatch},KY:function(){return BytesSizeMismatchError},M4:function(){return AbiEncodingBytesSizeMismatchError},MX:function(){return AbiFunctionOutputsNotFoundError},SM:function(){return DecodeLogDataMismatch},cO:function(){return AbiConstructorParamsNotFoundError},dh:function(){return InvalidAbiEncodingTypeError},fM:function(){return AbiConstructorNotFoundError},fs:function(){return AbiEncodingLengthMismatchError},gr:function(){return AbiEncodingArrayLengthMismatchError},hn:function(){return InvalidArrayError},lC:function(){return AbiEventSignatureNotFoundError},mv:function(){return AbiEventNotFoundError},wM:function(){return InvalidDefinitionTypeError},wb:function(){return AbiDecodingZeroDataError},xB:function(){return AbiDecodingDataSizeTooSmallError},xL:function(){return AbiFunctionNotFoundError},yP:function(){return AbiErrorSignatureNotFoundError}});var m=w(21494),v=w(51756),x=w(69977);let AbiConstructorNotFoundError=class AbiConstructorNotFoundError extends x.G{constructor({docsPath:p}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}};let AbiConstructorParamsNotFoundError=class AbiConstructorParamsNotFoundError extends x.G{constructor({docsPath:p}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}};let AbiDecodingDataSizeTooSmallError=class AbiDecodingDataSizeTooSmallError extends x.G{constructor({data:p,params:g,size:w}){super(`Data size of ${w} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,m.h)(g,{includeName:!0})})`,`Data:   ${p} (${w} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.params=g,this.size=w}};let AbiDecodingZeroDataError=class AbiDecodingZeroDataError extends x.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}};let AbiEncodingArrayLengthMismatchError=class AbiEncodingArrayLengthMismatchError extends x.G{constructor({expectedLength:p,givenLength:g,type:w}){super(`ABI encoding array length mismatch for type ${w}.
Expected length: ${p}
Given length: ${g}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}};let AbiEncodingBytesSizeMismatchError=class AbiEncodingBytesSizeMismatchError extends x.G{constructor({expectedSize:p,value:g}){super(`Size of bytes "${g}" (bytes${(0,v.d)(g)}) does not match expected size (bytes${p}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}};let AbiEncodingLengthMismatchError=class AbiEncodingLengthMismatchError extends x.G{constructor({expectedLength:p,givenLength:g}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${p}
Given length (values): ${g}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}};let AbiErrorSignatureNotFoundError=class AbiErrorSignatureNotFoundError extends x.G{constructor(p,{docsPath:g}){super(`Encoded error signature "${p}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${p}.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"})}};let AbiEventSignatureEmptyTopicsError=class AbiEventSignatureEmptyTopicsError extends x.G{constructor({docsPath:p}){super("Cannot extract event signature from empty topics.",{docsPath:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}};let AbiEventSignatureNotFoundError=class AbiEventSignatureNotFoundError extends x.G{constructor(p,{docsPath:g}){super(`Encoded event signature "${p}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${p}.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}};let AbiEventNotFoundError=class AbiEventNotFoundError extends x.G{constructor(p,{docsPath:g}={}){super(`Event ${p?`"${p}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}};let AbiFunctionNotFoundError=class AbiFunctionNotFoundError extends x.G{constructor(p,{docsPath:g}={}){super(`Function ${p?`"${p}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}};let AbiFunctionOutputsNotFoundError=class AbiFunctionOutputsNotFoundError extends x.G{constructor(p,{docsPath:g}){super(`Function "${p}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}};let BytesSizeMismatchError=class BytesSizeMismatchError extends x.G{constructor({expectedSize:p,givenSize:g}){super(`Expected bytes${p}, got bytes${g}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}};let DecodeLogDataMismatch=class DecodeLogDataMismatch extends x.G{constructor({abiItem:p,data:g,params:w,size:v}){super(`Data size of ${v} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,m.h)(w,{includeName:!0})})`,`Data:   ${g} (${v} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=p,this.data=g,this.params=w,this.size=v}};let DecodeLogTopicsMismatch=class DecodeLogTopicsMismatch extends x.G{constructor({abiItem:p,param:g}){super(`Expected a topic for indexed event parameter${g.name?` "${g.name}"`:""} on event "${(0,m.t)(p,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=p}};let InvalidAbiEncodingTypeError=class InvalidAbiEncodingTypeError extends x.G{constructor(p,{docsPath:g}){super(`Type "${p}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}};let InvalidAbiDecodingTypeError=class InvalidAbiDecodingTypeError extends x.G{constructor(p,{docsPath:g}){super(`Type "${p}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:g}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}};let InvalidArrayError=class InvalidArrayError extends x.G{constructor(p){super(`Value "${p}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}};let InvalidDefinitionTypeError=class InvalidDefinitionTypeError extends x.G{constructor(p){super(`"${p}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},25071:function(p,g,w){"use strict";w.d(g,{o:function(){return AccountNotFoundError}});var m=w(69977);let AccountNotFoundError=class AccountNotFoundError extends m.G{constructor({docsPath:p}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:p,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},92960:function(p,g,w){"use strict";w.d(g,{b:function(){return InvalidAddressError}});var m=w(69977);let InvalidAddressError=class InvalidAddressError extends m.G{constructor({address:p}){super(`Address "${p}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},69977:function(p,g,w){"use strict";w.d(g,{G:function(){return BaseError}});var m=w(20966);let BaseError=class BaseError extends Error{constructor(p,g={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,m.bo)()});let w=g.cause instanceof BaseError?g.cause.details:g.cause?.message?g.cause.message:g.details,v=g.cause instanceof BaseError&&g.cause.docsPath||g.docsPath;this.message=[p||"An error occurred.","",...g.metaMessages?[...g.metaMessages,""]:[],...v?[`Docs: https://viem.sh${v}.html${g.docsSlug?`#${g.docsSlug}`:""}`]:[],...w?[`Details: ${w}`]:[],`Version: ${this.version}`].join("\n"),g.cause&&(this.cause=g.cause),this.details=w,this.docsPath=v,this.metaMessages=g.metaMessages,this.shortMessage=p}walk(p){return function walk(p,g){return g?.(p)?p:p.cause?walk(p.cause,g):p}(this,p)}}},21973:function(p,g,w){"use strict";w.d(g,{Bk:function(){return ChainNotFoundError},Yl:function(){return ChainMismatchError},hJ:function(){return InvalidChainIdError},mm:function(){return ChainDoesNotSupportContract},pZ:function(){return ClientChainNotConfiguredError}});var m=w(69977);let ChainDoesNotSupportContract=class ChainDoesNotSupportContract extends m.G{constructor({blockNumber:p,chain:g,contract:w}){super(`Chain "${g.name}" does not support contract "${w.name}".`,{metaMessages:["This could be due to any of the following:",...p&&w.blockCreated&&w.blockCreated>p?[`- The contract "${w.name}" was not deployed until block ${w.blockCreated} (current block ${p}).`]:[`- The chain does not have the contract "${w.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}};let ChainMismatchError=class ChainMismatchError extends m.G{constructor({chain:p,currentChainId:g}){super(`The current chain of the wallet (id: ${g}) does not match the target chain for the transaction (id: ${p.id} – ${p.name}).`,{metaMessages:[`Current Chain ID:  ${g}`,`Expected Chain ID: ${p.id} – ${p.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};let ChainNotFoundError=class ChainNotFoundError extends m.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}};let ClientChainNotConfiguredError=class ClientChainNotConfiguredError extends m.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}};let InvalidChainIdError=class InvalidChainIdError extends m.G{constructor({chainId:p}){super(`Chain ID "${p}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}},90722:function(p,g,w){"use strict";w.d(g,{cg:function(){return CallExecutionError},uq:function(){return ContractFunctionExecutionError},Lu:function(){return ContractFunctionRevertedError},Dk:function(){return ContractFunctionZeroDataError},VQ:function(){return RawContractError}});var m=w(21431),v=w(35554),x=w(11856),A=w(21494),_=w(61344);function formatAbiItemWithArgs({abiItem:p,args:g,includeFunctionName:w=!0,includeName:m=!1}){if("name"in p&&"inputs"in p&&p.inputs)return`${w?p.name:""}(${p.inputs.map((p,w)=>`${m&&p.name?`${p.name}: `:""}${"object"==typeof g[w]?(0,_.P)(g[w]):g[w]}`).join(", ")})`}var B=w(28604),O=w(6665),T=w(56283),U=w(69977),F=w(54574),z=w(20966);let CallExecutionError=class CallExecutionError extends U.G{constructor(p,{account:g,docsPath:w,chain:v,data:x,gas:A,gasPrice:_,maxFeePerGas:B,maxPriorityFeePerGas:U,nonce:z,to:W,value:q}){let Q=g?(0,m.T)(g):void 0,G=(0,F.xr)({from:Q?.address,to:W,value:void 0!==q&&`${(0,O.d)(q)} ${v?.nativeCurrency.symbol||"ETH"}`,data:x,gas:A,gasPrice:void 0!==_&&`${(0,T.o)(_)} gwei`,maxFeePerGas:void 0!==B&&`${(0,T.o)(B)} gwei`,maxPriorityFeePerGas:void 0!==U&&`${(0,T.o)(U)} gwei`,nonce:z});super(p.shortMessage,{cause:p,docsPath:w,metaMessages:[...p.metaMessages?[...p.metaMessages," "]:[],"Raw Call Arguments:",G].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=p}};let ContractFunctionExecutionError=class ContractFunctionExecutionError extends U.G{constructor(p,{abi:g,args:w,contractAddress:m,docsPath:v,functionName:x,sender:_}){let O=(0,B.m)({abi:g,args:w,name:x}),T=O?formatAbiItemWithArgs({abiItem:O,args:w,includeFunctionName:!1,includeName:!1}):void 0,U=O?(0,A.t)(O,{includeName:!0}):void 0,W=(0,F.xr)({address:m&&(0,z.CR)(m),function:U,args:T&&"()"!==T&&`${[...Array(x?.length??0).keys()].map(()=>" ").join("")}${T}`,sender:_});super(p.shortMessage||`An unknown error occurred while executing the contract function "${x}".`,{cause:p,docsPath:v,metaMessages:[...p.metaMessages?[...p.metaMessages," "]:[],"Contract Call:",W].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=g,this.args=w,this.cause=p,this.contractAddress=m,this.functionName=x,this.sender=_}};let ContractFunctionRevertedError=class ContractFunctionRevertedError extends U.G{constructor({abi:p,data:g,functionName:w,message:m}){let _,B,O;if(g&&"0x"!==g){O=(0,x.p)({abi:p,data:g});let{abiItem:w,errorName:m,args:T}=O;if("Error"===m)B=T[0];else if("Panic"===m){let[p]=T;B=v.$[p]}else{let p=w?(0,A.t)(w,{includeName:!0}):void 0,g=w&&T?formatAbiItemWithArgs({abiItem:w,args:T,includeFunctionName:!1,includeName:!1}):void 0;_=[p?`Error: ${p}`:"",g&&"()"!==g?`       ${[...Array(m?.length??0).keys()].map(()=>" ").join("")}${g}`:""]}}else m&&(B=m);super(B&&"execution reverted"!==B?[`The contract function "${w}" reverted with the following reason:`,B].join("\n"):`The contract function "${w}" reverted.`,{metaMessages:_}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.reason=B,this.data=O}};let ContractFunctionZeroDataError=class ContractFunctionZeroDataError extends U.G{constructor({functionName:p}){super(`The contract function "${p}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${p}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}};let RawContractError=class RawContractError extends U.G{constructor({data:p,message:g}){super(g||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p}}},98309:function(p,g,w){"use strict";w.d(g,{$:function(){return SizeExceedsPaddingSizeError},m:function(){return SliceOffsetOutOfBoundsError}});var m=w(69977);let SliceOffsetOutOfBoundsError=class SliceOffsetOutOfBoundsError extends m.G{constructor({offset:p,position:g,size:w}){super(`Slice ${"start"===g?"starting":"ending"} at offset "${p}" is out-of-bounds (size: ${w}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}};let SizeExceedsPaddingSizeError=class SizeExceedsPaddingSizeError extends m.G{constructor({size:p,targetSize:g,type:w}){super(`${w.charAt(0).toUpperCase()}${w.slice(1).toLowerCase()} size (${p}) exceeds padding size (${g}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},89466:function(p,g,w){"use strict";w.d(g,{Cd:function(){return InvalidHexBooleanError},J5:function(){return IntegerOutOfRangeError},M6:function(){return SizeOverflowError}});var m=w(69977);let IntegerOutOfRangeError=class IntegerOutOfRangeError extends m.G{constructor({max:p,min:g,signed:w,size:m,value:v}){super(`Number "${v}" is not in safe ${m?`${8*m}-bit ${w?"signed":"unsigned"} `:""}integer range ${p?`(${g} to ${p})`:`(above ${g})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}};let InvalidHexBooleanError=class InvalidHexBooleanError extends m.G{constructor(p){super(`Hex value "${p}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}};let SizeOverflowError=class SizeOverflowError extends m.G{constructor({givenSize:p,maxSize:g}){super(`Size cannot exceed ${g} bytes. Given size: ${p} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},66054:function(p,g,w){"use strict";w.d(g,{C_:function(){return InsufficientFundsError},G$:function(){return FeeCapTooLowError},Hh:function(){return FeeCapTooHighError},M_:function(){return ExecutionRevertedError},WF:function(){return IntrinsicGasTooHighError},ZI:function(){return NonceTooHighError},cj:function(){return UnknownNodeError},cs:function(){return TipAboveFeeCapError},dR:function(){return IntrinsicGasTooLowError},pZ:function(){return TransactionTypeNotSupportedError},se:function(){return NonceMaxValueError},vU:function(){return NonceTooLowError}});var m=w(56283),v=w(69977);let ExecutionRevertedError=class ExecutionRevertedError extends v.G{constructor({cause:p,message:g}={}){let w=g?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${w?`with reason: ${w}`:"for an unknown reason"}.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ExecutionRevertedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(ExecutionRevertedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});let FeeCapTooHighError=class FeeCapTooHighError extends v.G{constructor({cause:p,maxFeePerGas:g}={}){super(`The fee cap (\`maxFeePerGas\`${g?` = ${(0,m.o)(g)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(FeeCapTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});let FeeCapTooLowError=class FeeCapTooLowError extends v.G{constructor({cause:p,maxFeePerGas:g}={}){super(`The fee cap (\`maxFeePerGas\`${g?` = ${(0,m.o)(g)}`:""} gwei) cannot be lower than the block base fee.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(FeeCapTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});let NonceTooHighError=class NonceTooHighError extends v.G{constructor({cause:p,nonce:g}={}){super(`Nonce provided for the transaction ${g?`(${g}) `:""}is higher than the next one expected.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(NonceTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});let NonceTooLowError=class NonceTooLowError extends v.G{constructor({cause:p,nonce:g}={}){super(`Nonce provided for the transaction ${g?`(${g}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(NonceTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported/});let NonceMaxValueError=class NonceMaxValueError extends v.G{constructor({cause:p,nonce:g}={}){super(`Nonce provided for the transaction ${g?`(${g}) `:""}exceeds the maximum allowed nonce.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(NonceMaxValueError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});let InsufficientFundsError=class InsufficientFundsError extends v.G{constructor({cause:p}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:p,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(InsufficientFundsError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});let IntrinsicGasTooHighError=class IntrinsicGasTooHighError extends v.G{constructor({cause:p,gas:g}={}){super(`The amount of gas ${g?`(${g}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(IntrinsicGasTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});let IntrinsicGasTooLowError=class IntrinsicGasTooLowError extends v.G{constructor({cause:p,gas:g}={}){super(`The amount of gas ${g?`(${g}) `:""}provided for the transaction is too low.`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(IntrinsicGasTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});let TransactionTypeNotSupportedError=class TransactionTypeNotSupportedError extends v.G{constructor({cause:p}){super("The transaction type is not supported for this chain.",{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(TransactionTypeNotSupportedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});let TipAboveFeeCapError=class TipAboveFeeCapError extends v.G{constructor({cause:p,maxPriorityFeePerGas:g,maxFeePerGas:w}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${g?` = ${(0,m.o)(g)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${w?` = ${(0,m.o)(w)} gwei`:""}).`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(TipAboveFeeCapError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});let UnknownNodeError=class UnknownNodeError extends v.G{constructor({cause:p}){super(`An error occurred while executing: ${p?.message}`,{cause:p}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},88822:function(p,g,w){"use strict";w.d(g,{Gg:function(){return HttpRequestError},W5:function(){return TimeoutError},bs:function(){return RpcRequestError},c9:function(){return WebSocketRequestError}});var m=w(61344),v=w(69977),x=w(20966);let HttpRequestError=class HttpRequestError extends v.G{constructor({body:p,details:g,headers:w,status:v,url:A}){super("HTTP request failed.",{details:g,metaMessages:[v&&`Status: ${v}`,`URL: ${(0,x.Gr)(A)}`,p&&`Request body: ${(0,m.P)(p)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=p,this.headers=w,this.status=v,this.url=A}};let WebSocketRequestError=class WebSocketRequestError extends v.G{constructor({body:p,details:g,url:w}){super("WebSocket request failed.",{details:g,metaMessages:[`URL: ${(0,x.Gr)(w)}`,`Request body: ${(0,m.P)(p)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}};let RpcRequestError=class RpcRequestError extends v.G{constructor({body:p,error:g,url:w}){super("RPC Request failed.",{cause:g,details:g.message,metaMessages:[`URL: ${(0,x.Gr)(w)}`,`Request body: ${(0,m.P)(p)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=g.code}};let TimeoutError=class TimeoutError extends v.G{constructor({body:p,url:g}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,x.Gr)(g)}`,`Request body: ${(0,m.P)(p)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},42455:function(p,g,w){"use strict";w.d(g,{B:function(){return InvalidRequestRpcError},GD:function(){return JsonRpcVersionUnsupportedError},I0:function(){return ChainDisconnectedError},KB:function(){return TransactionRejectedRpcError},LX:function(){return MethodNotFoundRpcError},Og:function(){return ResourceNotFoundRpcError},PE:function(){return UnauthorizedProviderError},Pv:function(){return LimitExceededRpcError},Ts:function(){return UnsupportedProviderMethodError},XS:function(){return InternalRpcError},ab:function(){return UserRejectedRequestError},gS:function(){return MethodNotSupportedRpcError},ir:function(){return UnknownRpcError},nY:function(){return InvalidParamsRpcError},pT:function(){return ResourceUnavailableRpcError},s7:function(){return ParseRpcError},u5:function(){return ProviderDisconnectedError},x3:function(){return SwitchChainError},yR:function(){return InvalidInputRpcError}});var m=w(69977),v=w(88822);let RpcError=class RpcError extends m.G{constructor(p,{code:g,docsPath:w,metaMessages:m,shortMessage:x}){super(x,{cause:p,docsPath:w,metaMessages:m||p?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=p.name,this.code=p instanceof v.bs?p.code:g??-1}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(p,g){super(p,g),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=g.data}};let ParseRpcError=class ParseRpcError extends RpcError{constructor(p){super(p,{code:ParseRpcError.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(ParseRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});let InvalidRequestRpcError=class InvalidRequestRpcError extends RpcError{constructor(p){super(p,{code:InvalidRequestRpcError.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(InvalidRequestRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});let MethodNotFoundRpcError=class MethodNotFoundRpcError extends RpcError{constructor(p){super(p,{code:MethodNotFoundRpcError.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(MethodNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});let InvalidParamsRpcError=class InvalidParamsRpcError extends RpcError{constructor(p){super(p,{code:InvalidParamsRpcError.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(InvalidParamsRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});let InternalRpcError=class InternalRpcError extends RpcError{constructor(p){super(p,{code:InternalRpcError.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(InternalRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});let InvalidInputRpcError=class InvalidInputRpcError extends RpcError{constructor(p){super(p,{code:InvalidInputRpcError.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(InvalidInputRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});let ResourceNotFoundRpcError=class ResourceNotFoundRpcError extends RpcError{constructor(p){super(p,{code:ResourceNotFoundRpcError.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(ResourceNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});let ResourceUnavailableRpcError=class ResourceUnavailableRpcError extends RpcError{constructor(p){super(p,{code:ResourceUnavailableRpcError.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(ResourceUnavailableRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});let TransactionRejectedRpcError=class TransactionRejectedRpcError extends RpcError{constructor(p){super(p,{code:TransactionRejectedRpcError.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(TransactionRejectedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});let MethodNotSupportedRpcError=class MethodNotSupportedRpcError extends RpcError{constructor(p){super(p,{code:MethodNotSupportedRpcError.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(MethodNotSupportedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});let LimitExceededRpcError=class LimitExceededRpcError extends RpcError{constructor(p){super(p,{code:LimitExceededRpcError.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(LimitExceededRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});let JsonRpcVersionUnsupportedError=class JsonRpcVersionUnsupportedError extends RpcError{constructor(p){super(p,{code:JsonRpcVersionUnsupportedError.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(JsonRpcVersionUnsupportedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(p){super(p,{code:UserRejectedRequestError.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(UserRejectedRequestError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});let UnauthorizedProviderError=class UnauthorizedProviderError extends ProviderRpcError{constructor(p){super(p,{code:UnauthorizedProviderError.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(UnauthorizedProviderError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});let UnsupportedProviderMethodError=class UnsupportedProviderMethodError extends ProviderRpcError{constructor(p){super(p,{code:UnsupportedProviderMethodError.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(UnsupportedProviderMethodError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});let ProviderDisconnectedError=class ProviderDisconnectedError extends ProviderRpcError{constructor(p){super(p,{code:ProviderDisconnectedError.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(ProviderDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});let ChainDisconnectedError=class ChainDisconnectedError extends ProviderRpcError{constructor(p){super(p,{code:ChainDisconnectedError.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(ChainDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(p){super(p,{code:SwitchChainError.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(SwitchChainError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});let UnknownRpcError=class UnknownRpcError extends RpcError{constructor(p){super(p,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},54574:function(p,g,w){"use strict";w.d(g,{Bh:function(){return TransactionNotFoundError},JC:function(){return InvalidStorageKeySizeError},Yb:function(){return TransactionReceiptNotFoundError},j3:function(){return InvalidSerializableTransactionError},mc:function(){return WaitForTransactionReceiptTimeoutError},mk:function(){return TransactionExecutionError},vl:function(){return InvalidLegacyVError},xY:function(){return FeeConflictError},xr:function(){return prettyPrint}});var m=w(6665),v=w(56283),x=w(69977);function prettyPrint(p){let g=Object.entries(p).map(([p,g])=>void 0===g||!1===g?null:[p,g]).filter(Boolean),w=g.reduce((p,[g])=>Math.max(p,g.length),0);return g.map(([p,g])=>`  ${`${p}:`.padEnd(w+1)}  ${g}`).join("\n")}let FeeConflictError=class FeeConflictError extends x.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}};let InvalidLegacyVError=class InvalidLegacyVError extends x.G{constructor({v:p}){super(`Invalid \`v\` value "${p}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}};let InvalidSerializableTransactionError=class InvalidSerializableTransactionError extends x.G{constructor({transaction:p}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",prettyPrint(p),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}};let InvalidStorageKeySizeError=class InvalidStorageKeySizeError extends x.G{constructor({storageKey:p}){super(`Size for storage key "${p}" is invalid. Expected 32 bytes. Got ${Math.floor((p.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}};let TransactionExecutionError=class TransactionExecutionError extends x.G{constructor(p,{account:g,docsPath:w,chain:x,data:A,gas:_,gasPrice:B,maxFeePerGas:O,maxPriorityFeePerGas:T,nonce:U,to:F,value:z}){let W=prettyPrint({chain:x&&`${x?.name} (id: ${x?.id})`,from:g?.address,to:F,value:void 0!==z&&`${(0,m.d)(z)} ${x?.nativeCurrency.symbol||"ETH"}`,data:A,gas:_,gasPrice:void 0!==B&&`${(0,v.o)(B)} gwei`,maxFeePerGas:void 0!==O&&`${(0,v.o)(O)} gwei`,maxPriorityFeePerGas:void 0!==T&&`${(0,v.o)(T)} gwei`,nonce:U});super(p.shortMessage,{cause:p,docsPath:w,metaMessages:[...p.metaMessages?[...p.metaMessages," "]:[],"Request Arguments:",W].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=p}};let TransactionNotFoundError=class TransactionNotFoundError extends x.G{constructor({blockHash:p,blockNumber:g,blockTag:w,hash:m,index:v}){let x="Transaction";w&&void 0!==v&&(x=`Transaction at block time "${w}" at index "${v}"`),p&&void 0!==v&&(x=`Transaction at block hash "${p}" at index "${v}"`),g&&void 0!==v&&(x=`Transaction at block number "${g}" at index "${v}"`),m&&(x=`Transaction with hash "${m}"`),super(`${x} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}};let TransactionReceiptNotFoundError=class TransactionReceiptNotFoundError extends x.G{constructor({hash:p}){super(`Transaction receipt with hash "${p}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}};let WaitForTransactionReceiptTimeoutError=class WaitForTransactionReceiptTimeoutError extends x.G{constructor({hash:p}){super(`Timed out while waiting for transaction with hash "${p}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},20966:function(p,g,w){"use strict";w.d(g,{CR:function(){return getContractAddress},Gr:function(){return getUrl},bo:function(){return getVersion}});let getContractAddress=p=>p,getUrl=p=>p,getVersion=()=>"viem@1.2.9"},70558:function(p,g,w){"use strict";w.d(g,{r:function(){return decodeAbiParameters}});var m=w(5555),v=w(92221),x=w(51756),A=w(33283),_=w(26873),B=w(90169),O=w(62546);function decodeAbiParameters(p,g){if("0x"===g&&p.length>0)throw new m.wb;if((0,x.d)(g)&&32>(0,x.d)(g))throw new m.xB({data:g,params:p,size:(0,x.d)(g)});return function({data:p,params:g}){let w=[],T=0;for(let U=0;U<g.length;U++){if(T>=(0,x.d)(p))throw new m.xB({data:p,params:g,size:(0,x.d)(p)});let F=g[U],{consumed:z,value:W}=function decodeParam({data:p,param:g,position:w}){let x=(0,O.S)(g.type);if(x){let[m,v]=x;return function(p,{param:g,length:w,position:m}){if(!w){let w=(0,B.ly)((0,A.tP)(p,m,m+32,{strict:!0})),v=(0,B.ly)((0,A.tP)(p,w,w+32,{strict:!0})),x=0,_=[];for(let m=0;m<v;++m){let m=decodeParam({data:(0,A.tP)(p,w+32),param:g,position:x});x+=m.consumed,_.push(m.value)}return{value:_,consumed:32}}if(hasDynamicChild(g)){let v=(0,O.S)(g.type),x=!v?.[0],_=0,T=[];for(let v=0;v<w;++v){let w=(0,B.ly)((0,A.tP)(p,m,m+32,{strict:!0})),O=decodeParam({data:(0,A.tP)(p,w),param:g,position:x?_:32*v});_+=O.consumed,T.push(O.value)}return{value:T,consumed:32}}let v=0,x=[];for(let A=0;A<w;++A){let w=decodeParam({data:p,param:g,position:m+v});v+=w.consumed,x.push(w.value)}return{value:x,consumed:v}}(p,{length:m,param:{...g,type:v},position:w})}if("tuple"===g.type)return function(p,{param:g,position:w}){let m=0===g.components.length||g.components.some(({name:p})=>!p),v=m?[]:{},x=0;if(hasDynamicChild(g)){let _=(0,B.ly)((0,A.tP)(p,w,w+32,{strict:!0}));for(let w=0;w<g.components.length;++w){let B=g.components[w],O=decodeParam({data:(0,A.tP)(p,_),param:B,position:x});x+=O.consumed,v[m?w:B?.name]=O.value}return{consumed:32,value:v}}for(let A=0;A<g.components.length;++A){let _=g.components[A],B=decodeParam({data:p,param:_,position:w+x});x+=B.consumed,v[m?A:_?.name]=B.value}return{consumed:x,value:v}}(p,{param:g,position:w});if("string"===g.type)return function(p,{position:g}){let w=(0,B.ly)((0,A.tP)(p,g,g+32,{strict:!0})),m=(0,B.ly)((0,A.tP)(p,w,w+32,{strict:!0}));if(0===m)return{consumed:32,value:""};let v=(0,B.rR)((0,_.f)((0,A.tP)(p,w+32,w+32+m,{strict:!0})));return{consumed:32,value:v}}(p,{position:w});if(g.type.startsWith("bytes"))return function(p,{param:g,position:w}){let[m,v]=g.type.split("bytes");if(!v){let g=(0,B.ly)((0,A.tP)(p,w,w+32,{strict:!0})),m=(0,B.ly)((0,A.tP)(p,g,g+32,{strict:!0}));if(0===m)return{consumed:32,value:"0x"};let v=(0,A.tP)(p,g+32,g+32+m,{strict:!0});return{consumed:32,value:v}}let x=(0,A.tP)(p,w,w+parseInt(v),{strict:!0});return{consumed:32,value:x}}(p,{param:g,position:w});let T=(0,A.tP)(p,w,w+32,{strict:!0});if(g.type.startsWith("uint")||g.type.startsWith("int"))return function(p,{param:g}){let w=g.type.startsWith("int"),m=parseInt(g.type.split("int")[1]||"256");return{consumed:32,value:m>48?(0,B.y_)(p,{signed:w}):(0,B.ly)(p,{signed:w})}}(T,{param:g});if("address"===g.type)return{consumed:32,value:(0,v.x)((0,A.tP)(T,-20))};if("bool"===g.type)return{consumed:32,value:(0,B.XA)(T)};throw new m.CI(g.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:p,param:F,position:T});w.push(W),T+=z}return w}({data:g,params:p})}function hasDynamicChild(p){let{type:g}=p;if("string"===g||"bytes"===g||g.endsWith("[]"))return!0;if("tuple"===g)return p.components?.some(hasDynamicChild);let w=(0,O.S)(p.type);return!!(w&&hasDynamicChild({...p,type:w[1]}))}},11856:function(p,g,w){"use strict";w.d(g,{p:function(){return decodeErrorResult}});var m=w(35554),v=w(5555),x=w(33283),A=w(80507),_=w(70558),B=w(21494);function decodeErrorResult({abi:p,data:g}){let w=(0,x.tP)(g,0,4);if("0x"===w)throw new v.wb;let O=[...p||[],m.Up,m.hZ],T=O.find(p=>"error"===p.type&&w===(0,A.o)((0,B.t)(p)));if(!T)throw new v.yP(w,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:T,args:"inputs"in T&&T.inputs&&T.inputs.length>0?(0,_.r)(T.inputs,(0,x.tP)(g,4)):void 0,errorName:T.name}}},31826:function(p,g,w){"use strict";w.d(g,{k:function(){return decodeFunctionResult}});var m=w(5555),v=w(70558),x=w(28604);let A="/docs/contract/decodeFunctionResult";function decodeFunctionResult({abi:p,args:g,functionName:w,data:_}){let B=p[0];if(w&&!(B=(0,x.m)({abi:p,args:g,name:w})))throw new m.xL(w,{docsPath:A});if("function"!==B.type)throw new m.xL(void 0,{docsPath:A});if(!B.outputs)throw new m.MX(B.name,{docsPath:A});let O=(0,v.r)(B.outputs,_);return O&&O.length>1?O:O&&1===O.length?O[0]:void 0}},62546:function(p,g,w){"use strict";w.d(g,{E:function(){return encodeAbiParameters},S:function(){return getArrayComponents}});var m=w(5555),v=w(92960),x=w(97451),A=w(9040),_=w(28795),B=w(51756),O=w(33283),T=w(46872);function encodeAbiParameters(p,g){if(p.length!==g.length)throw new m.fs({expectedLength:p.length,givenLength:g.length});let w=function({params:p,values:g}){let w=[];for(let U=0;U<p.length;U++)w.push(function prepareParam({param:p,value:g}){let w=getArrayComponents(p.type);if(w){let[v,x]=w;return function(p,{length:g,param:w}){let v=null===g;if(!Array.isArray(p))throw new m.hn(p);if(!v&&p.length!==g)throw new m.gr({expectedLength:g,givenLength:p.length,type:`${w.type}[${g}]`});let x=!1,_=[];for(let g=0;g<p.length;g++){let m=prepareParam({param:w,value:p[g]});m.dynamic&&(x=!0),_.push(m)}if(v||x){let p=encodeParams(_);if(v){let g=(0,T.eC)(_.length,{size:32});return{dynamic:!0,encoded:_.length>0?(0,A.zo)([g,p]):g}}if(x)return{dynamic:!0,encoded:p}}return{dynamic:!1,encoded:(0,A.zo)(_.map(({encoded:p})=>p))}}(g,{length:v,param:{...p,type:x}})}if("tuple"===p.type)return function(p,{param:g}){let w=!1,m=[];for(let v=0;v<g.components.length;v++){let x=g.components[v],A=Array.isArray(p)?v:x.name,_=prepareParam({param:x,value:p[A]});m.push(_),_.dynamic&&(w=!0)}return{dynamic:w,encoded:w?encodeParams(m):(0,A.zo)(m.map(({encoded:p})=>p))}}(g,{param:p});if("address"===p.type)return function(p){if(!(0,x.U)(p))throw new v.b({address:p});return{dynamic:!1,encoded:(0,_.gc)(p.toLowerCase())}}(g);if("bool"===p.type)return{dynamic:!1,encoded:(0,_.gc)((0,T.C4)(g))};if(p.type.startsWith("uint")||p.type.startsWith("int")){let w=p.type.startsWith("int");return function(p,{signed:g}){return{dynamic:!1,encoded:(0,T.eC)(p,{size:32,signed:g})}}(g,{signed:w})}if(p.type.startsWith("bytes"))return function(p,{param:g}){let[w,v]=g.type.split("bytes");if(!v){let g=Math.ceil((0,B.d)(p)/32),w=[];for(let m=0;m<g;m++)w.push((0,_.gc)((0,O.tP)(p,32*m,(m+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,A.zo)([(0,_.gc)((0,T.eC)((0,B.d)(p),{size:32})),...w])}}if((0,B.d)(p)!==parseInt(v))throw new m.M4({expectedSize:parseInt(v),value:p});return{dynamic:!1,encoded:(0,_.gc)(p,{dir:"right"})}}(g,{param:p});if("string"===p.type)return function(p){let g=(0,T.$G)(p),w=Math.ceil((0,B.d)(g)/32),m=[];for(let p=0;p<w;p++)m.push((0,_.gc)((0,O.tP)(g,32*p,(p+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,A.zo)([(0,_.gc)((0,T.eC)((0,B.d)(g),{size:32})),...m])}}(g);throw new m.dh(p.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:p[U],value:g[U]}));return w}({params:p,values:g}),U=encodeParams(w);return 0===U.length?"0x":U}function encodeParams(p){let g=0;for(let w=0;w<p.length;w++){let{dynamic:m,encoded:v}=p[w];m?g+=32:g+=(0,B.d)(v)}let w=[],m=[],v=0;for(let x=0;x<p.length;x++){let{dynamic:A,encoded:_}=p[x];A?(w.push((0,T.eC)(g+v,{size:32})),m.push(_),v+=(0,B.d)(_)):w.push(_)}return(0,A.zo)([...w,...m])}function getArrayComponents(p){let g=p.match(/^(.*)\[(\d+)?\]$/);return g?[g[2]?Number(g[2]):null,g[1]]:void 0}},99353:function(p,g,w){"use strict";w.d(g,{w:function(){return encodeDeployData}});var m=w(5555),v=w(9040),x=w(62546);let A="/docs/contract/encodeDeployData";function encodeDeployData({abi:p,args:g,bytecode:w}){if(!g||0===g.length)return w;let _=p.find(p=>"type"in p&&"constructor"===p.type);if(!_)throw new m.fM({docsPath:A});if(!("inputs"in _)||!_.inputs||0===_.inputs.length)throw new m.cO({docsPath:A});let B=(0,x.E)(_.inputs,g);return(0,v.SM)([w,B])}},96606:function(p,g,w){"use strict";w.d(g,{R:function(){return encodeFunctionData}});var m=w(5555),v=w(9040),x=w(80507),A=w(62546),_=w(21494),B=w(28604);function encodeFunctionData({abi:p,args:g,functionName:w}){let O=p[0];if(w&&!(O=(0,B.m)({abi:p,args:g,name:w})))throw new m.xL(w,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==O.type)throw new m.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let T=(0,_.t)(O),U=(0,x.o)(T),F="inputs"in O&&O.inputs?(0,A.E)(O.inputs,g??[]):void 0;return(0,v.SM)([U,F??"0x"])}},21494:function(p,g,w){"use strict";w.d(g,{h:function(){return formatAbiParams},t:function(){return formatAbiItem}});var m=w(5555);function formatAbiItem(p,{includeName:g=!1}={}){if("function"!==p.type&&"event"!==p.type&&"error"!==p.type)throw new m.wM(p.type);return`${p.name}(${formatAbiParams(p.inputs,{includeName:g})})`}function formatAbiParams(p,{includeName:g=!1}={}){return p?p.map(p=>(function(p,{includeName:g}){return p.type.startsWith("tuple")?`(${formatAbiParams(p.components,{includeName:g})})${p.type.slice(5)}`:p.type+(g&&p.name?` ${p.name}`:"")})(p,{includeName:g})).join(g?", ":","):""}},28604:function(p,g,w){"use strict";w.d(g,{m:function(){return getAbiItem}});var m=w(97451);function getAbiItem({abi:p,args:g=[],name:w}){let v=p.filter(p=>"name"in p&&p.name===w);if(0!==v.length){if(1===v.length)return v[0];for(let p of v){if(!("inputs"in p))continue;if(!g||0===g.length){if(!p.inputs||0===p.inputs.length)return p;continue}if(!p.inputs||0===p.inputs.length||p.inputs.length!==g.length)continue;let w=g.every((g,w)=>{let v="inputs"in p&&p.inputs[w];return!!v&&function isArgOfType(p,g){let w=typeof p,v=g.type;switch(v){case"address":return(0,m.U)(p);case"bool":return"boolean"===w;case"function":case"string":return"string"===w;default:if("tuple"===v&&"components"in g)return Object.values(g.components).every((g,w)=>isArgOfType(Object.values(p)[w],g));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(v))return"number"===w||"bigint"===w;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(v))return"string"===w||p instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(v))return Array.isArray(p)&&p.every(p=>isArgOfType(p,{...g,type:v.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(g,v)});if(w)return p}return v[0]}}},92221:function(p,g,w){"use strict";w.d(g,{K:function(){return getAddress},x:function(){return checksumAddress}});var m=w(92960),v=w(41327),x=w(90707),A=w(97451);function checksumAddress(p,g){let w=g?`${g}${p.toLowerCase()}`:p.substring(2).toLowerCase(),m=(0,x.w)((0,v.qX)(w),"bytes"),A=(g?w.substring(`${g}0x`.length):w).split("");for(let p=0;p<40;p+=2)m[p>>1]>>4>=8&&A[p]&&(A[p]=A[p].toUpperCase()),(15&m[p>>1])>=8&&A[p+1]&&(A[p+1]=A[p+1].toUpperCase());return`0x${A.join("")}`}function getAddress(p,g){if(!(0,A.U)(p))throw new m.b({address:p});return checksumAddress(p,g)}},97451:function(p,g,w){"use strict";w.d(g,{U:function(){return isAddress}});let m=/^0x[a-fA-F0-9]{40}$/;function isAddress(p){return m.test(p)}},62635:function(p,g,w){"use strict";w.d(g,{n:function(){return buildRequest},y:function(){return isDeterministicError}});var m=w(69977),v=w(88822),x=w(42455),A=w(11941);let isDeterministicError=p=>"code"in p?-1!==p.code&&-32004!==p.code&&-32005!==p.code&&-32042!==p.code&&-32603!==p.code:p instanceof v.Gg&&!!p.status&&403!==p.status&&408!==p.status&&413!==p.status&&429!==p.status&&500!==p.status&&502!==p.status&&503!==p.status&&504!==p.status;function buildRequest(p,{retryDelay:g=150,retryCount:w=3}={}){return async _=>(0,A.J)(async()=>{try{return await p(_)}catch(p){switch(p.code){case x.s7.code:throw new x.s7(p);case x.B.code:throw new x.B(p);case x.LX.code:throw new x.LX(p);case x.nY.code:throw new x.nY(p);case x.XS.code:throw new x.XS(p);case x.yR.code:throw new x.yR(p);case x.Og.code:throw new x.Og(p);case x.pT.code:throw new x.pT(p);case x.KB.code:throw new x.KB(p);case x.gS.code:throw new x.gS(p);case x.Pv.code:throw new x.Pv(p);case x.GD.code:throw new x.GD(p);case x.ab.code:throw new x.ab(p);case x.PE.code:throw new x.PE(p);case x.Ts.code:throw new x.Ts(p);case x.u5.code:throw new x.u5(p);case x.I0.code:throw new x.I0(p);case x.x3.code:throw new x.x3(p);default:if(p instanceof m.G)throw p;throw new x.ir(p)}}},{delay:({count:p,error:w})=>{if(w&&w instanceof v.Gg){let p=w?.headers?.get("Retry-After");if(p?.match(/\d/))return 1e3*parseInt(p)}return~~(1<<p)*g},retryCount:w,shouldRetry:({error:p})=>!isDeterministicError(p)})}},61786:function(p,g,w){"use strict";w.d(g,{LI:function(){return getChainContractAddress},ax:function(){return defineChain},qg:function(){return assertCurrentChain}});var m=w(21973);function assertCurrentChain({chain:p,currentChainId:g}){if(!p)throw new m.Bk;if(g!==p.id)throw new m.Yl({chain:p,currentChainId:g})}function defineChain(p,g){return{...p,formatters:g?.formatters,serializers:g?.serializers}}function getChainContractAddress({blockNumber:p,chain:g,contract:w}){let v=g?.contracts?.[w];if(!v)throw new m.mm({chain:g,contract:{name:w}});if(p&&v.blockCreated&&v.blockCreated>p)throw new m.mm({blockNumber:p,chain:g,contract:{name:w,blockCreated:v.blockCreated}});return v.address}},9040:function(p,g,w){"use strict";function concat(p){return"string"==typeof p[0]?concatHex(p):function(p){let g=0;for(let w of p)g+=w.length;let w=new Uint8Array(g),m=0;for(let g of p)w.set(g,m),m+=g.length;return w}(p)}function concatHex(p){return`0x${p.reduce((p,g)=>p+g.replace("0x",""),"")}`}w.d(g,{SM:function(){return concatHex},zo:function(){return concat}})},25493:function(p,g,w){"use strict";function isHex(p,{strict:g=!0}={}){return!!p&&"string"==typeof p&&(g?/^0x[0-9a-fA-F]*$/.test(p):p.startsWith("0x"))}w.d(g,{v:function(){return isHex}})},28795:function(p,g,w){"use strict";w.d(g,{gc:function(){return padHex},vk:function(){return pad}});var m=w(98309);function pad(p,{dir:g,size:w=32}={}){return"string"==typeof p?padHex(p,{dir:g,size:w}):function(p,{dir:g,size:w=32}={}){if(null===w)return p;if(p.length>w)throw new m.$({size:p.length,targetSize:w,type:"bytes"});let v=new Uint8Array(w);for(let m=0;m<w;m++){let x="right"===g;v[x?m:w-m-1]=p[x?m:p.length-m-1]}return v}(p,{dir:g,size:w})}function padHex(p,{dir:g,size:w=32}={}){if(null===w)return p;let v=p.replace("0x","");if(v.length>2*w)throw new m.$({size:Math.ceil(v.length/2),targetSize:w,type:"hex"});return`0x${v["right"===g?"padEnd":"padStart"](2*w,"0")}`}},51756:function(p,g,w){"use strict";w.d(g,{d:function(){return size}});var m=w(25493);function size(p){return(0,m.v)(p,{strict:!1})?Math.ceil((p.length-2)/2):p.length}},33283:function(p,g,w){"use strict";w.d(g,{tP:function(){return slice}});var m=w(98309),v=w(25493),x=w(51756);function slice(p,g,w,{strict:m}={}){return(0,v.v)(p,{strict:!1})?function(p,g,w,{strict:m}={}){assertStartOffset(p,g);let v=`0x${p.replace("0x","").slice((g??0)*2,(w??p.length)*2)}`;return m&&assertEndOffset(v,g,w),v}(p,g,w,{strict:m}):function(p,g,w,{strict:m}={}){assertStartOffset(p,g);let v=p.slice(g,w);return m&&assertEndOffset(v,g,w),v}(p,g,w,{strict:m})}function assertStartOffset(p,g){if("number"==typeof g&&g>0&&g>(0,x.d)(p)-1)throw new m.m({offset:g,position:"start",size:(0,x.d)(p)})}function assertEndOffset(p,g,w){if("number"==typeof g&&"number"==typeof w&&(0,x.d)(p)!==w-g)throw new m.m({offset:w,position:"end",size:(0,x.d)(p)})}},26873:function(p,g,w){"use strict";function trim(p,{dir:g="left"}={}){let w="string"==typeof p?p.replace("0x",""):p,m=0;for(let p=0;p<w.length-1&&"0"===w["left"===g?p:w.length-p-1].toString();p++)m++;return(w="left"===g?w.slice(m):w.slice(0,w.length-m),"string"==typeof p)?(1===w.length&&"right"===g&&(w=`${w}0`),`0x${w.length%2==1?`0${w}`:w}`):w}w.d(g,{f:function(){return trim}})},90169:function(p,g,w){"use strict";w.d(g,{XA:function(){return hexToBool},Yf:function(){return assertSize},ly:function(){return hexToNumber},rR:function(){return hexToString},y_:function(){return hexToBigInt}});var m=w(89466),v=w(51756),x=w(26873),A=w(41327);function assertSize(p,{size:g}){if((0,v.d)(p)>g)throw new m.M6({givenSize:(0,v.d)(p),maxSize:g})}function hexToBigInt(p,g={}){let{signed:w}=g;g.size&&assertSize(p,{size:g.size});let m=BigInt(p);if(!w)return m;let v=(p.length-2)/2,x=(1n<<8n*BigInt(v)-1n)-1n;return m<=x?m:m-BigInt(`0x${"f".padStart(2*v,"f")}`)-1n}function hexToBool(p,g={}){let w=p;if(g.size&&(assertSize(w,{size:g.size}),w=(0,x.f)(w)),"0x00"===(0,x.f)(w))return!1;if("0x01"===(0,x.f)(w))return!0;throw new m.Cd(w)}function hexToNumber(p,g={}){return Number(hexToBigInt(p,g))}function hexToString(p,g={}){let w=(0,A.nr)(p);return g.size&&(assertSize(w,{size:g.size}),w=(0,x.f)(w,{dir:"right"})),new TextDecoder().decode(w)}},41327:function(p,g,w){"use strict";w.d(g,{O0:function(){return toBytes},nr:function(){return hexToBytes},qX:function(){return stringToBytes}});var m=w(69977),v=w(25493),x=w(28795),A=w(90169),_=w(46872);let B=new TextEncoder;function toBytes(p,g={}){return"number"==typeof p||"bigint"==typeof p?function(p,g){let w=(0,_.eC)(p,g);return hexToBytes(w)}(p,g):"boolean"==typeof p?function(p,g={}){let w=new Uint8Array(1);return(w[0]=Number(p),"number"==typeof g.size)?((0,A.Yf)(w,{size:g.size}),(0,x.vk)(w,{size:g.size})):w}(p,g):(0,v.v)(p)?hexToBytes(p,g):stringToBytes(p,g)}function hexToBytes(p,g={}){let w=p;g.size&&((0,A.Yf)(w,{size:g.size}),w=(0,x.vk)(w,{dir:"right",size:g.size}));let v=w.slice(2);v.length%2&&(v=`0${v}`);let _=new Uint8Array(v.length/2);for(let p=0;p<_.length;p++){let g=2*p,w=v.slice(g,g+2),x=Number.parseInt(w,16);if(Number.isNaN(x)||x<0)throw new m.G(`Invalid byte sequence ("${w}" in "${v}").`);_[p]=x}return _}function stringToBytes(p,g={}){let w=B.encode(p);return"number"==typeof g.size?((0,A.Yf)(w,{size:g.size}),(0,x.vk)(w,{dir:"right",size:g.size})):w}},46872:function(p,g,w){"use strict";w.d(g,{$G:function(){return stringToHex},C4:function(){return boolToHex},NC:function(){return toHex},ci:function(){return bytesToHex},eC:function(){return numberToHex}});var m=w(89466),v=w(28795),x=w(90169);let A=Array.from({length:256},(p,g)=>g.toString(16).padStart(2,"0"));function toHex(p,g={}){return"number"==typeof p||"bigint"==typeof p?numberToHex(p,g):"string"==typeof p?stringToHex(p,g):"boolean"==typeof p?boolToHex(p,g):bytesToHex(p,g)}function boolToHex(p,g={}){let w=`0x${Number(p)}`;return"number"==typeof g.size?((0,x.Yf)(w,{size:g.size}),(0,v.vk)(w,{size:g.size})):w}function bytesToHex(p,g={}){let w="";for(let g=0;g<p.length;g++)w+=A[p[g]];let m=`0x${w}`;return"number"==typeof g.size?((0,x.Yf)(m,{size:g.size}),(0,v.vk)(m,{dir:"right",size:g.size})):m}function numberToHex(p,g={}){let w;let{signed:x,size:A}=g,_=BigInt(p);A?w=x?(1n<<8n*BigInt(A)-1n)-1n:2n**(8n*BigInt(A))-1n:"number"==typeof p&&(w=BigInt(Number.MAX_SAFE_INTEGER));let B="bigint"==typeof w&&x?-w-1n:0;if(w&&_>w||_<B){let g="bigint"==typeof p?"n":"";throw new m.J5({max:w?`${w}${g}`:void 0,min:`${B}${g}`,signed:x,size:A,value:`${p}${g}`})}let O=`0x${(x&&_<0?(1n<<BigInt(8*A))+BigInt(_):_).toString(16)}`;return A?(0,v.vk)(O,{size:A}):O}let _=new TextEncoder;function stringToHex(p,g={}){let w=_.encode(p);return bytesToHex(w,g)}},90968:function(p,g,w){"use strict";w.d(g,{B:function(){return containsNodeError},k:function(){return getNodeError}});var m=w(66054),v=w(88822),x=w(42455);function containsNodeError(p){return p instanceof x.KB||p instanceof x.yR||p instanceof v.bs&&p.code===m.M_.code}function getNodeError(p,g){let w=p.details.toLowerCase();if(m.Hh.nodeMessage.test(w))return new m.Hh({cause:p,maxFeePerGas:g?.maxFeePerGas});if(m.G$.nodeMessage.test(w))return new m.G$({cause:p,maxFeePerGas:g?.maxFeePerGas});if(m.ZI.nodeMessage.test(w))return new m.ZI({cause:p,nonce:g?.nonce});if(m.vU.nodeMessage.test(w))return new m.vU({cause:p,nonce:g?.nonce});if(m.se.nodeMessage.test(w))return new m.se({cause:p,nonce:g?.nonce});if(m.C_.nodeMessage.test(w))return new m.C_({cause:p});if(m.WF.nodeMessage.test(w))return new m.WF({cause:p,gas:g?.gas});else if(m.dR.nodeMessage.test(w))return new m.dR({cause:p,gas:g?.gas});else if(m.pZ.nodeMessage.test(w))return new m.pZ({cause:p});else if(m.cs.nodeMessage.test(w))return new m.cs({cause:p,maxFeePerGas:g?.maxFeePerGas,maxPriorityFeePerGas:g?.maxPriorityFeePerGas});else if(w.match(m.M_.nodeMessage)||"code"in p.cause&&p.cause?.code===m.M_.code)return new m.M_({cause:p,message:p.cause.details||p.details});return new m.cj({cause:p.cause.cause})}},86101:function(p,g,w){"use strict";w.d(g,{G:function(){return x},Z:function(){return formatBlock}});var m=w(75491),v=w(94216);function formatBlock(p){let g=p.transactions?.map(p=>"string"==typeof p?p:v.Tr(p));return{...p,baseFeePerGas:p.baseFeePerGas?BigInt(p.baseFeePerGas):null,difficulty:p.difficulty?BigInt(p.difficulty):void 0,gasLimit:p.gasLimit?BigInt(p.gasLimit):void 0,gasUsed:p.gasUsed?BigInt(p.gasUsed):void 0,hash:p.hash?p.hash:null,logsBloom:p.logsBloom?p.logsBloom:null,nonce:p.nonce?p.nonce:null,number:p.number?BigInt(p.number):null,size:p.size?BigInt(p.size):void 0,timestamp:p.timestamp?BigInt(p.timestamp):void 0,transactions:g,totalDifficulty:p.totalDifficulty?BigInt(p.totalDifficulty):null}}let x=(0,m.$)("block",formatBlock)},91019:function(p,g,w){"use strict";function extract(p,{format:g}){if(!g)return{};let w=Object.keys(g({}));return w.reduce((g,w)=>(p?.hasOwnProperty(w)&&(g[w]=p[w]),g),{})}w.d(g,{K:function(){return extract}})},75491:function(p,g,w){"use strict";function defineFormatter(p,g){return({exclude:w,format:m})=>({format:p=>{let v=g(p);if(w)for(let p of w)delete v[p];return{...v,...m(p)}},type:p})}w.d(g,{$:function(){return defineFormatter}})},18829:function(p,g,w){"use strict";function formatLog(p,{args:g,eventName:w}={}){return{...p,blockHash:p.blockHash?p.blockHash:null,blockNumber:p.blockNumber?BigInt(p.blockNumber):null,logIndex:p.logIndex?Number(p.logIndex):null,transactionHash:p.transactionHash?p.transactionHash:null,transactionIndex:p.transactionIndex?Number(p.transactionIndex):null,...w?{args:g,eventName:w}:{}}}w.d(g,{U:function(){return formatLog}})},94216:function(p,g,w){"use strict";w.d(g,{Tr:function(){return formatTransaction},c8:function(){return x},y_:function(){return A}});var m=w(90169),v=w(75491);let x={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function formatTransaction(p){let g={...p,blockHash:p.blockHash?p.blockHash:null,blockNumber:p.blockNumber?BigInt(p.blockNumber):null,chainId:p.chainId?(0,m.ly)(p.chainId):void 0,gas:p.gas?BigInt(p.gas):void 0,gasPrice:p.gasPrice?BigInt(p.gasPrice):void 0,maxFeePerGas:p.maxFeePerGas?BigInt(p.maxFeePerGas):void 0,maxPriorityFeePerGas:p.maxPriorityFeePerGas?BigInt(p.maxPriorityFeePerGas):void 0,nonce:p.nonce?(0,m.ly)(p.nonce):void 0,to:p.to?p.to:null,transactionIndex:p.transactionIndex?Number(p.transactionIndex):null,type:p.type?x[p.type]:void 0,typeHex:p.type?p.type:void 0,value:p.value?BigInt(p.value):void 0,v:p.v?BigInt(p.v):void 0};return"legacy"===g.type&&(delete g.accessList,delete g.maxFeePerGas,delete g.maxPriorityFeePerGas),"eip2930"===g.type&&(delete g.maxFeePerGas,delete g.maxPriorityFeePerGas),g}let A=(0,v.$)("transaction",formatTransaction)},4656:function(p,g,w){"use strict";w.d(g,{d:function(){return B},f:function(){return formatTransactionReceipt}});var m=w(90169),v=w(75491),x=w(18829),A=w(94216);let _={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(p){return{...p,blockNumber:p.blockNumber?BigInt(p.blockNumber):null,contractAddress:p.contractAddress?p.contractAddress:null,cumulativeGasUsed:p.cumulativeGasUsed?BigInt(p.cumulativeGasUsed):null,effectiveGasPrice:p.effectiveGasPrice?BigInt(p.effectiveGasPrice):null,gasUsed:p.gasUsed?BigInt(p.gasUsed):null,logs:p.logs?p.logs.map(p=>(0,x.U)(p)):null,to:p.to?p.to:null,transactionIndex:p.transactionIndex?(0,m.ly)(p.transactionIndex):null,status:p.status?_[p.status]:null,type:p.type?A.c8[p.type]||p.type:null}}let B=(0,v.$)("transactionReceipt",formatTransactionReceipt)},23822:function(p,g,w){"use strict";w.d(g,{i:function(){return x},t:function(){return formatTransactionRequest}});var m=w(46872),v=w(75491);function formatTransactionRequest(p){return{...p,gas:void 0!==p.gas?(0,m.eC)(p.gas):void 0,gasPrice:void 0!==p.gasPrice?(0,m.eC)(p.gasPrice):void 0,maxFeePerGas:void 0!==p.maxFeePerGas?(0,m.eC)(p.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==p.maxPriorityFeePerGas?(0,m.eC)(p.maxPriorityFeePerGas):void 0,nonce:void 0!==p.nonce?(0,m.eC)(p.nonce):void 0,value:void 0!==p.value?(0,m.eC)(p.value):void 0}}let x=(0,v.$)("transactionRequest",formatTransactionRequest)},80507:function(p,g,w){"use strict";w.d(g,{o:function(){return getFunctionSelector}});var m=w(33283),v=w(56143);let getFunctionSelector=p=>"string"==typeof p?(0,m.tP)((0,v.F)(p),0,4):(0,m.tP)((0,v.J)(p),0,4)},56143:function(p,g,w){"use strict";w.d(g,{J:function(){return hashAbiItem},F:function(){return hashFunction}});let m=/((function|event)\s)?(.*)(\((.*)\))/;function extractFunctionParts(p){let g=p.match(m),w=g?.[2]||void 0,v=g?.[3],x=g?.[5]||void 0;return{type:w,name:v,params:x}}var v=w(41327),x=w(90707);let hash=p=>(0,x.w)((0,v.O0)(p));function hashFunction(p){let g=extractFunctionParts(p).name,w=function(p){let g=extractFunctionParts(p).params,w=g?.split(",").map(p=>p.trim().split(" "));return w?.map(p=>({type:p[0],name:"indexed"===p[1]?p[2]:p[1],..."indexed"===p[1]?{indexed:!0}:{}}))}(p)||[];return hash(`${g}(${w.map(({type:p})=>p).join(",")})`)}function hashAbiItem(p){return hash(`${p.name}(${p.inputs.map(({type:p})=>p).join(",")})`)}},90707:function(p,g,w){"use strict";function number(p){if(!Number.isSafeInteger(p)||p<0)throw Error(`Wrong positive integer: ${p}`)}function bytes(p,...g){if(!(p instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(g.length>0&&!g.includes(p.length))throw TypeError(`Expected Uint8Array of length ${g}, not of length=${p.length}`)}w.d(g,{w:function(){return keccak256}});var m={number,bool:function(p){if("boolean"!=typeof p)throw Error(`Expected boolean, not ${p}`)},bytes,hash:function(p){if("function"!=typeof p||"function"!=typeof p.create)throw Error("Hash should be wrapped by utils.wrapConstructor");number(p.outputLen),number(p.blockLen)},exists:function(p,g=!0){if(p.destroyed)throw Error("Hash instance has been destroyed");if(g&&p.finished)throw Error("Hash#digest() has already been called")},output:function(p,g){bytes(p);let w=g.outputLen;if(p.length<w)throw Error(`digestInto() expects output buffer of length at least ${w}`)}};let v=BigInt(4294967296-1),x=BigInt(32);function fromBig(p,g=!1){return g?{h:Number(p&v),l:Number(p>>x&v)}:{h:0|Number(p>>x&v),l:0|Number(p&v)}}var A={fromBig,split:function(p,g=!1){let w=new Uint32Array(p.length),m=new Uint32Array(p.length);for(let v=0;v<p.length;v++){let{h:x,l:A}=fromBig(p[v],g);[w[v],m[v]]=[x,A]}return[w,m]},toBig:(p,g)=>BigInt(p>>>0)<<x|BigInt(g>>>0),shrSH:(p,g,w)=>p>>>w,shrSL:(p,g,w)=>p<<32-w|g>>>w,rotrSH:(p,g,w)=>p>>>w|g<<32-w,rotrSL:(p,g,w)=>p<<32-w|g>>>w,rotrBH:(p,g,w)=>p<<64-w|g>>>w-32,rotrBL:(p,g,w)=>p>>>w-32|g<<64-w,rotr32H:(p,g)=>g,rotr32L:(p,g)=>p,rotlSH:(p,g,w)=>p<<w|g>>>32-w,rotlSL:(p,g,w)=>g<<w|p>>>32-w,rotlBH:(p,g,w)=>g<<w-32|p>>>64-w,rotlBL:(p,g,w)=>p<<w-32|g>>>64-w,add:function(p,g,w,m){let v=(g>>>0)+(m>>>0);return{h:p+w+(v/4294967296|0)|0,l:0|v}},add3L:(p,g,w)=>(p>>>0)+(g>>>0)+(w>>>0),add3H:(p,g,w,m)=>g+w+m+(p/4294967296|0)|0,add4L:(p,g,w,m)=>(p>>>0)+(g>>>0)+(w>>>0)+(m>>>0),add4H:(p,g,w,m,v)=>g+w+m+v+(p/4294967296|0)|0,add5H:(p,g,w,m,v,x)=>g+w+m+v+x+(p/4294967296|0)|0,add5L:(p,g,w,m,v)=>(p>>>0)+(g>>>0)+(w>>>0)+(m>>>0)+(v>>>0)};let u32=p=>new Uint32Array(p.buffer,p.byteOffset,Math.floor(p.byteLength/4)),_=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!_)throw Error("Non little-endian hardware is not supported");function toBytes(p){if("string"==typeof p&&(p=function(p){if("string"!=typeof p)throw TypeError(`utf8ToBytes expected string, got ${typeof p}`);return new TextEncoder().encode(p)}(p)),!(p instanceof Uint8Array))throw TypeError(`Expected input type is Uint8Array (got ${typeof p})`);return p}Array.from({length:256},(p,g)=>g.toString(16).padStart(2,"0"));let Hash=class Hash{clone(){return this._cloneInto()}};let[B,O,T]=[[],[],[]],U=BigInt(0),F=BigInt(1),z=BigInt(2),W=BigInt(7),q=BigInt(256),Q=BigInt(113);for(let p=0,g=F,w=1,m=0;p<24;p++){[w,m]=[m,(2*w+3*m)%5],B.push(2*(5*m+w)),O.push((p+1)*(p+2)/2%64);let v=U;for(let p=0;p<7;p++)(g=(g<<F^(g>>W)*Q)%q)&z&&(v^=F<<(F<<BigInt(p))-F);T.push(v)}let[G,K]=A.split(T,!0),rotlH=(p,g,w)=>w>32?A.rotlBH(p,g,w):A.rotlSH(p,g,w),rotlL=(p,g,w)=>w>32?A.rotlBL(p,g,w):A.rotlSL(p,g,w);let Keccak=class Keccak extends Hash{constructor(p,g,w,v=!1,x=24){if(super(),this.blockLen=p,this.suffix=g,this.outputLen=w,this.enableXOF=v,this.rounds=x,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,m.number(w),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=u32(this.state)}keccak(){!function(p,g=24){let w=new Uint32Array(10);for(let m=24-g;m<24;m++){for(let g=0;g<10;g++)w[g]=p[g]^p[g+10]^p[g+20]^p[g+30]^p[g+40];for(let g=0;g<10;g+=2){let m=(g+8)%10,v=(g+2)%10,x=w[v],A=w[v+1],_=rotlH(x,A,1)^w[m],B=rotlL(x,A,1)^w[m+1];for(let w=0;w<50;w+=10)p[g+w]^=_,p[g+w+1]^=B}let g=p[2],v=p[3];for(let w=0;w<24;w++){let m=O[w],x=rotlH(g,v,m),A=rotlL(g,v,m),_=B[w];g=p[_],v=p[_+1],p[_]=x,p[_+1]=A}for(let g=0;g<50;g+=10){for(let m=0;m<10;m++)w[m]=p[g+m];for(let m=0;m<10;m++)p[g+m]^=~w[(m+2)%10]&w[(m+4)%10]}p[0]^=G[m],p[1]^=K[m]}w.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(p){m.exists(this);let{blockLen:g,state:w}=this;p=toBytes(p);let v=p.length;for(let m=0;m<v;){let x=Math.min(g-this.pos,v-m);for(let g=0;g<x;g++)w[this.pos++]^=p[m++];this.pos===g&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:p,suffix:g,pos:w,blockLen:m}=this;p[w]^=g,(128&g)!=0&&w===m-1&&this.keccak(),p[m-1]^=128,this.keccak()}writeInto(p){m.exists(this,!1),m.bytes(p),this.finish();let g=this.state,{blockLen:w}=this;for(let m=0,v=p.length;m<v;){this.posOut>=w&&this.keccak();let x=Math.min(w-this.posOut,v-m);p.set(g.subarray(this.posOut,this.posOut+x),m),this.posOut+=x,m+=x}return p}xofInto(p){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(p)}xof(p){return m.number(p),this.xofInto(new Uint8Array(p))}digestInto(p){if(m.output(p,this),this.finished)throw Error("digest() was already called");return this.writeInto(p),this.destroy(),p}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(p){let{blockLen:g,suffix:w,outputLen:m,rounds:v,enableXOF:x}=this;return p||(p=new Keccak(g,w,m,x,v)),p.state32.set(this.state32),p.pos=this.pos,p.posOut=this.posOut,p.finished=this.finished,p.rounds=v,p.suffix=w,p.outputLen=m,p.enableXOF=x,p.destroyed=this.destroyed,p}};let gen=(p,g,w)=>(function(p){let hashC=g=>p().update(toBytes(g)).digest(),g=p();return hashC.outputLen=g.outputLen,hashC.blockLen=g.blockLen,hashC.create=()=>p(),hashC})(()=>new Keccak(g,p,w));gen(6,144,28),gen(6,136,32),gen(6,104,48),gen(6,72,64),gen(1,144,28);let Z=gen(1,136,32);gen(1,104,48),gen(1,72,64);let genShake=(p,g,w)=>(function(p){let hashC=(g,w)=>p(w).update(toBytes(g)).digest(),g=p({});return hashC.outputLen=g.outputLen,hashC.blockLen=g.blockLen,hashC.create=g=>p(g),hashC})((m={})=>new Keccak(g,p,void 0===m.dkLen?w:m.dkLen,!0));genShake(31,168,16),genShake(31,136,32);var Y=w(25493),J=w(41327),X=w(46872);function keccak256(p,g){let w=Z((0,Y.v)(p,{strict:!1})?(0,J.O0)(p):p);return"bytes"===(g||"hex")?w:(0,X.NC)(w)}},68583:function(p,g,w){"use strict";w.d(g,{S:function(){return createBatchScheduler}});let m=new Map;function createBatchScheduler({fn:p,id:g,shouldSplitBatch:w,wait:v=0}){let exec=async()=>{let g=getScheduler();flush();let w=g.map(({args:p})=>p);0!==w.length&&p(w).then(p=>{g.forEach(({pendingPromise:g},w)=>g.resolve?.([p[w],p]))}).catch(p=>{g.forEach(({pendingPromise:g})=>g.reject?.(p))})},flush=()=>m.delete(g),getBatchedArgs=()=>getScheduler().map(({args:p})=>p),getScheduler=()=>m.get(g)||[],setScheduler=p=>m.set(g,[...getScheduler(),p]);return{flush,async schedule(p){let g={},m=new Promise((p,w)=>{g.resolve=p,g.reject=w}),x=w?.([...getBatchedArgs(),p]);x&&exec();let A=getScheduler().length>0;return A?setScheduler({args:p,pendingPromise:g}):(setScheduler({args:p,pendingPromise:g}),setTimeout(exec,v)),m}}}},11941:function(p,g,w){"use strict";w.d(g,{J:function(){return withRetry}});var m=w(40482);function withRetry(p,{delay:g=100,retryCount:w=2,shouldRetry:v=()=>!0}={}){return new Promise((x,A)=>{let attemptRetry=async({count:_=0}={})=>{let retry=async({error:p})=>{let w="function"==typeof g?g({count:_,error:p}):g;w&&await (0,m.D)(w),attemptRetry({count:_+1})};try{let g=await p();x(g)}catch(p){if(_<w&&await v({count:_,error:p}))return retry({error:p});A(p)}};attemptRetry()})}},61344:function(p,g,w){"use strict";w.d(g,{P:function(){return stringify}});let stringify=(p,g,w)=>JSON.stringify(p,(p,w)=>{let m="bigint"==typeof w?w.toString():w;return"function"==typeof g?g(p,m):m},w)},13134:function(p,g,w){"use strict";w.d(g,{F:function(){return assertRequest}});var m=w(21431),v=w(92960),x=w(66054),A=w(54574),_=w(97451);function assertRequest(p){let{account:g,gasPrice:w,maxFeePerGas:B,maxPriorityFeePerGas:O,to:T}=p,U=g?(0,m.T)(g):void 0;if(U&&!(0,_.U)(U.address))throw new v.b({address:U.address});if(T&&!(0,_.U)(T))throw new v.b({address:T});if(void 0!==w&&(void 0!==B||void 0!==O))throw new A.xY;if(B&&B>2n**256n-1n)throw new x.Hh({maxFeePerGas:B});if(O&&B&&O>B)throw new x.cs({maxFeePerGas:B,maxPriorityFeePerGas:O})}},59920:function(p,g,w){"use strict";w.d(g,{h:function(){return prepareRequest}});var m=w(21431),v=w(14828),x=w(33910),A=w(48671),_=w(89784),B=w(25071),O=w(69977),T=w(13134);async function prepareRequest(p,g){let{account:w,gas:U,gasPrice:F,maxFeePerGas:z,maxPriorityFeePerGas:W,nonce:q}=g;if(!w)throw new B.o;let Q=(0,m.T)(w),G=await (0,x.Q)(p,{blockTag:"latest"}),K={...g,from:Q.address};if(void 0===q&&(K.nonce=await (0,_.K)(p,{address:Q.address,blockTag:"pending"})),G.baseFeePerGas){if(void 0!==F)throw new O.G("Chain does not support legacy `gasPrice`.");if(void 0===z)K.maxPriorityFeePerGas=W??1500000000n,K.maxFeePerGas=120n*G.baseFeePerGas/100n+K.maxPriorityFeePerGas;else{if(void 0===W&&z<1500000000n)throw new O.G("`maxFeePerGas` cannot be less than the default `maxPriorityFeePerGas` (1.5 gwei).");K.maxFeePerGas=z,K.maxPriorityFeePerGas=W??1500000000n}}else{if(void 0!==z||void 0!==W)throw new O.G("Chain does not support EIP-1559 fees.");void 0===F&&(K.gasPrice=await (0,A.o)(p)*120n/100n)}return void 0===U&&(K.gas=await (0,v.Q)(p,{...K,account:{address:Q.address,type:"json-rpc"}})),(0,T.F)(K),K}},61539:function(p,g,w){"use strict";w.d(g,{i:function(){return validateTypedData}});var m=w(5555),v=w(92960),x=w(97451),A=w(51756),_=w(46872);let B=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,O=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function validateTypedData({domain:p,message:g,primaryType:w,types:T}){let validateData=(p,g)=>{for(let w of p){let{name:p,type:U}=w,F=g[p],z=U.match(O);if(z&&("number"==typeof F||"bigint"==typeof F)){let[p,g,w]=z;(0,_.eC)(F,{signed:"int"===g,size:parseInt(w)/8})}if("address"===U&&"string"==typeof F&&!(0,x.U)(F))throw new v.b({address:F});let W=U.match(B);if(W){let[p,g]=W;if(g&&(0,A.d)(F)!==parseInt(g))throw new m.KY({expectedSize:parseInt(g),givenSize:(0,A.d)(F)})}let q=T[U];q&&validateData(q,F)}};if(T.EIP712Domain&&p&&validateData(T.EIP712Domain,p),"EIP712Domain"!==w){let p=T[w];validateData(p,g)}}},6665:function(p,g,w){"use strict";w.d(g,{d:function(){return formatEther}});var m=w(58617),v=w(60263);function formatEther(p,g="wei"){return(0,v.b)(p,m.ez[g])}},56283:function(p,g,w){"use strict";w.d(g,{o:function(){return formatGwei}});var m=w(58617),v=w(60263);function formatGwei(p,g="wei"){return(0,v.b)(p,m.Zn[g])}},60263:function(p,g,w){"use strict";function formatUnits(p,g){let w=p.toString(),m=w.startsWith("-");m&&(w=w.slice(1));let[v,x]=[(w=w.padStart(g,"0")).slice(0,w.length-g),w.slice(w.length-g)];return x=x.replace(/(0+)$/,""),`${m?"-":""}${v||"0"}${x?`.${x}`:""}`}w.d(g,{b:function(){return formatUnits}})},40482:function(p,g,w){"use strict";async function wait(p){return new Promise(g=>setTimeout(g,p))}w.d(g,{D:function(){return wait}})},69077:function(p,g,w){"use strict";let m;function noop(){}w.d(g,{eM:function(){return WagmiConfig},_g:function(){return createConfig},mA:function(){return useAccount},do:function(){return useContractRead},GG:function(){return useContractWrite},PJ:function(){return usePrepareContractWrite}});let v="undefined"==typeof window||"Deno"in window;function utils_noop(){}function isValidTimeout(p){return"number"==typeof p&&p>=0&&p!==1/0}function timeUntilStale(p,g){return Math.max(p+(g||0)-Date.now(),0)}function parseQueryArgs(p,g,w){return isQueryKey(p)?"function"==typeof g?{...w,queryKey:p,queryFn:g}:{...g,queryKey:p}:p}function parseMutationArgs(p,g,w){return isQueryKey(p)?"function"==typeof g?{...w,mutationKey:p,mutationFn:g}:{...g,mutationKey:p}:"function"==typeof p?{...g,mutationFn:p}:{...p}}function parseFilterArgs(p,g,w){return isQueryKey(p)?[{...g,queryKey:p},w]:[p||{},g]}function matchQuery(p,g){let{type:w="all",exact:m,fetchStatus:v,predicate:x,queryKey:A,stale:_}=p;if(isQueryKey(A)){if(m){if(g.queryHash!==hashQueryKeyByOptions(A,g.options))return!1}else{if(!partialDeepEqual(g.queryKey,A))return!1}}if("all"!==w){let p=g.isActive();if("active"===w&&!p||"inactive"===w&&p)return!1}return("boolean"!=typeof _||g.isStale()===_)&&(void 0===v||v===g.state.fetchStatus)&&(!x||!!x(g))}function matchMutation(p,g){let{exact:w,fetching:m,predicate:v,mutationKey:x}=p;if(isQueryKey(x)){if(!g.options.mutationKey)return!1;if(w){if(hashQueryKey(g.options.mutationKey)!==hashQueryKey(x))return!1}else{if(!partialDeepEqual(g.options.mutationKey,x))return!1}}return("boolean"!=typeof m||"loading"===g.state.status===m)&&(!v||!!v(g))}function hashQueryKeyByOptions(p,g){let w=(null==g?void 0:g.queryKeyHashFn)||hashQueryKey;return w(p)}function hashQueryKey(p){return JSON.stringify(p,(p,g)=>isPlainObject(g)?Object.keys(g).sort().reduce((p,w)=>(p[w]=g[w],p),{}):g)}function partialDeepEqual(p,g){return p===g||typeof p==typeof g&&!!p&&!!g&&"object"==typeof p&&"object"==typeof g&&!Object.keys(g).some(w=>!partialDeepEqual(p[w],g[w]))}function utils_replaceEqualDeep(p,g){if(p===g)return p;let w=isPlainArray(p)&&isPlainArray(g);if(w||isPlainObject(p)&&isPlainObject(g)){let m=w?p.length:Object.keys(p).length,v=w?g:Object.keys(g),x=v.length,A=w?[]:{},_=0;for(let m=0;m<x;m++){let x=w?m:v[m];A[x]=utils_replaceEqualDeep(p[x],g[x]),A[x]===p[x]&&_++}return m===x&&_===m?p:A}return g}function shallowEqualObjects(p,g){if(p&&!g||g&&!p)return!1;for(let w in p)if(p[w]!==g[w])return!1;return!0}function isPlainArray(p){return Array.isArray(p)&&p.length===Object.keys(p).length}function isPlainObject(p){if(!hasObjectPrototype(p))return!1;let g=p.constructor;if(void 0===g)return!0;let w=g.prototype;return!!(hasObjectPrototype(w)&&w.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(p){return"[object Object]"===Object.prototype.toString.call(p)}function isQueryKey(p){return Array.isArray(p)}function sleep(p){return new Promise(g=>{setTimeout(g,p)})}function scheduleMicrotask(p){sleep(0).then(p)}function replaceData(p,g,w){return null!=w.isDataEqual&&w.isDataEqual(p,g)?p:"function"==typeof w.structuralSharing?w.structuralSharing(p,g):!1!==w.structuralSharing?utils_replaceEqualDeep(p,g):g}let x=console,A=function(){let p=[],g=0,notifyFn=p=>{p()},batchNotifyFn=p=>{p()},schedule=w=>{g?p.push(w):scheduleMicrotask(()=>{notifyFn(w)})},flush=()=>{let g=p;p=[],g.length&&scheduleMicrotask(()=>{batchNotifyFn(()=>{g.forEach(p=>{notifyFn(p)})})})};return{batch:p=>{let w;g++;try{w=p()}finally{--g||flush()}return w},batchCalls:p=>(...g)=>{schedule(()=>{p(...g)})},schedule,setNotifyFunction:p=>{notifyFn=p},setBatchNotifyFunction:p=>{batchNotifyFn=p}}}();let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(p){let g={listener:p};return this.listeners.add(g),this.onSubscribe(),()=>{this.listeners.delete(g),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};let _=new class extends Subscribable{constructor(){super(),this.setup=p=>{if(!v&&window.addEventListener){let listener=()=>p();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var p;null==(p=this.cleanup)||p.call(this),this.cleanup=void 0}}setEventListener(p){var g;this.setup=p,null==(g=this.cleanup)||g.call(this),this.cleanup=p(p=>{"boolean"==typeof p?this.setFocused(p):this.onFocus()})}setFocused(p){this.focused=p,p&&this.onFocus()}onFocus(){this.listeners.forEach(({listener:p})=>{p()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},B=["online","offline"],O=new class extends Subscribable{constructor(){super(),this.setup=p=>{if(!v&&window.addEventListener){let listener=()=>p();return B.forEach(p=>{window.addEventListener(p,listener,!1)}),()=>{B.forEach(p=>{window.removeEventListener(p,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var p;null==(p=this.cleanup)||p.call(this),this.cleanup=void 0}}setEventListener(p){var g;this.setup=p,null==(g=this.cleanup)||g.call(this),this.cleanup=p(p=>{"boolean"==typeof p?this.setOnline(p):this.onOnline()})}setOnline(p){this.online=p,p&&this.onOnline()}onOnline(){this.listeners.forEach(({listener:p})=>{p()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function defaultRetryDelay(p){return Math.min(1e3*2**p,3e4)}function canFetch(p){return(null!=p?p:"online")!=="online"||O.isOnline()}let CancelledError=class CancelledError{constructor(p){this.revert=null==p?void 0:p.revert,this.silent=null==p?void 0:p.silent}};function isCancelledError(p){return p instanceof CancelledError}function createRetryer(p){let g,w,m,v=!1,x=0,A=!1,B=new Promise((p,g)=>{w=p,m=g}),shouldPause=()=>!_.isFocused()||"always"!==p.networkMode&&!O.isOnline(),resolve=m=>{A||(A=!0,null==p.onSuccess||p.onSuccess(m),null==g||g(),w(m))},reject=w=>{A||(A=!0,null==p.onError||p.onError(w),null==g||g(),m(w))},pause=()=>new Promise(w=>{g=p=>{let g=A||!shouldPause();return g&&w(p),g},null==p.onPause||p.onPause()}).then(()=>{g=void 0,A||null==p.onContinue||p.onContinue()}),run=()=>{let g;if(!A){try{g=p.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(resolve).catch(g=>{var w,m;if(A)return;let _=null!=(w=p.retry)?w:3,B=null!=(m=p.retryDelay)?m:defaultRetryDelay,O="function"==typeof B?B(x,g):B,T=!0===_||"number"==typeof _&&x<_||"function"==typeof _&&_(x,g);if(v||!T){reject(g);return}x++,null==p.onFail||p.onFail(x,g),sleep(O).then(()=>{if(shouldPause())return pause()}).then(()=>{v?reject(g):run()})})}};return canFetch(p.networkMode)?run():pause().then(run),{promise:B,cancel:g=>{A||(reject(new CancelledError(g)),null==p.abort||p.abort())},continue:()=>{let p=null==g?void 0:g();return p?B:Promise.resolve()},cancelRetry:()=>{v=!0},continueRetry:()=>{v=!1}}}let Removable=class Removable{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),isValidTimeout(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(p){this.cacheTime=Math.max(this.cacheTime||0,null!=p?p:v?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}};let Query=class Query extends Removable{constructor(p){super(),this.abortSignalConsumed=!1,this.defaultOptions=p.defaultOptions,this.setOptions(p.options),this.observers=[],this.cache=p.cache,this.logger=p.logger||x,this.queryKey=p.queryKey,this.queryHash=p.queryHash,this.initialState=p.state||function(p){let g="function"==typeof p.initialData?p.initialData():p.initialData,w=void 0!==g,m=w?"function"==typeof p.initialDataUpdatedAt?p.initialDataUpdatedAt():p.initialDataUpdatedAt:0;return{data:g,dataUpdateCount:0,dataUpdatedAt:w?null!=m?m:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:w?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(p){this.options={...this.defaultOptions,...p},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(p,g){let w=replaceData(this.state.data,p,this.options);return this.dispatch({data:w,type:"success",dataUpdatedAt:null==g?void 0:g.updatedAt,manual:null==g?void 0:g.manual}),w}setState(p,g){this.dispatch({type:"setState",state:p,setStateOptions:g})}cancel(p){var g;let w=this.promise;return null==(g=this.retryer)||g.cancel(p),w?w.then(utils_noop).catch(utils_noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(p=>!1!==p.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(p=>p.getCurrentResult().isStale)}isStaleByTime(p=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!timeUntilStale(this.state.dataUpdatedAt,p)}onFocus(){var p;let g=this.observers.find(p=>p.shouldFetchOnWindowFocus());g&&g.refetch({cancelRefetch:!1}),null==(p=this.retryer)||p.continue()}onOnline(){var p;let g=this.observers.find(p=>p.shouldFetchOnReconnect());g&&g.refetch({cancelRefetch:!1}),null==(p=this.retryer)||p.continue()}addObserver(p){this.observers.includes(p)||(this.observers.push(p),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:p}))}removeObserver(p){this.observers.includes(p)&&(this.observers=this.observers.filter(g=>g!==p),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:p}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(p,g){var w,m,v,x;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=g&&g.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(v=this.retryer)||v.continueRetry(),this.promise}if(p&&this.setOptions(p),!this.options.queryFn){let p=this.observers.find(p=>p.options.queryFn);p&&this.setOptions(p.options)}Array.isArray(this.options.queryKey);let A=function(){if("function"==typeof AbortController)return new AbortController}(),_={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},addSignalProperty=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>{if(A)return this.abortSignalConsumed=!0,A.signal}})};addSignalProperty(_);let B={fetchOptions:g,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(_)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};addSignalProperty(B),null==(w=this.options.behavior)||w.onFetch(B),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(m=B.fetchOptions)?void 0:m.meta))&&this.dispatch({type:"fetch",meta:null==(x=B.fetchOptions)?void 0:x.meta});let onError=p=>{if(isCancelledError(p)&&p.silent||this.dispatch({type:"error",error:p}),!isCancelledError(p)){var g,w,m,v;null==(g=(w=this.cache.config).onError)||g.call(w,p,this),null==(m=(v=this.cache.config).onSettled)||m.call(v,this.state.data,p,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=createRetryer({fn:B.fetchFn,abort:null==A?void 0:A.abort.bind(A),onSuccess:p=>{var g,w,m,v;if(void 0===p){onError(Error(this.queryHash+" data is undefined"));return}this.setData(p),null==(g=(w=this.cache.config).onSuccess)||g.call(w,p,this),null==(m=(v=this.cache.config).onSettled)||m.call(v,p,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError,onFail:(p,g)=>{this.dispatch({type:"failed",failureCount:p,error:g})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:B.options.retry,retryDelay:B.options.retryDelay,networkMode:B.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(p){this.state=(g=>{var w,m;switch(p.type){case"failed":return{...g,fetchFailureCount:p.failureCount,fetchFailureReason:p.error};case"pause":return{...g,fetchStatus:"paused"};case"continue":return{...g,fetchStatus:"fetching"};case"fetch":return{...g,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(w=p.meta)?w:null,fetchStatus:canFetch(this.options.networkMode)?"fetching":"paused",...!g.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...g,data:p.data,dataUpdateCount:g.dataUpdateCount+1,dataUpdatedAt:null!=(m=p.dataUpdatedAt)?m:Date.now(),error:null,isInvalidated:!1,status:"success",...!p.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let v=p.error;if(isCancelledError(v)&&v.revert&&this.revertState)return{...this.revertState};return{...g,error:v,errorUpdateCount:g.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:g.fetchFailureCount+1,fetchFailureReason:v,fetchStatus:"idle",status:"error"};case"invalidate":return{...g,isInvalidated:!0};case"setState":return{...g,...p.state}}})(this.state),A.batch(()=>{this.observers.forEach(g=>{g.onQueryUpdate(p)}),this.cache.notify({query:this,type:"updated",action:p})})}};let QueryCache=class QueryCache extends Subscribable{constructor(p){super(),this.config=p||{},this.queries=[],this.queriesMap={}}build(p,g,w){var m;let v=g.queryKey,x=null!=(m=g.queryHash)?m:hashQueryKeyByOptions(v,g),A=this.get(x);return A||(A=new Query({cache:this,logger:p.getLogger(),queryKey:v,queryHash:x,options:p.defaultQueryOptions(g),state:w,defaultOptions:p.getQueryDefaults(v)}),this.add(A)),A}add(p){this.queriesMap[p.queryHash]||(this.queriesMap[p.queryHash]=p,this.queries.push(p),this.notify({type:"added",query:p}))}remove(p){let g=this.queriesMap[p.queryHash];g&&(p.destroy(),this.queries=this.queries.filter(g=>g!==p),g===p&&delete this.queriesMap[p.queryHash],this.notify({type:"removed",query:p}))}clear(){A.batch(()=>{this.queries.forEach(p=>{this.remove(p)})})}get(p){return this.queriesMap[p]}getAll(){return this.queries}find(p,g){let[w]=parseFilterArgs(p,g);return void 0===w.exact&&(w.exact=!0),this.queries.find(p=>matchQuery(w,p))}findAll(p,g){let[w]=parseFilterArgs(p,g);return Object.keys(w).length>0?this.queries.filter(p=>matchQuery(w,p)):this.queries}notify(p){A.batch(()=>{this.listeners.forEach(({listener:g})=>{g(p)})})}onFocus(){A.batch(()=>{this.queries.forEach(p=>{p.onFocus()})})}onOnline(){A.batch(()=>{this.queries.forEach(p=>{p.onOnline()})})}};let Mutation=class Mutation extends Removable{constructor(p){super(),this.defaultOptions=p.defaultOptions,this.mutationId=p.mutationId,this.mutationCache=p.mutationCache,this.logger=p.logger||x,this.observers=[],this.state=p.state||mutation_getDefaultState(),this.setOptions(p.options),this.scheduleGc()}setOptions(p){this.options={...this.defaultOptions,...p},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(p){this.dispatch({type:"setState",state:p})}addObserver(p){this.observers.includes(p)||(this.observers.push(p),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:p}))}removeObserver(p){this.observers=this.observers.filter(g=>g!==p),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:p})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var p,g;return null!=(p=null==(g=this.retryer)?void 0:g.continue())?p:this.execute()}async execute(){var p,g,w,m,v,x,A,_,B,O,T,U,F,z,W,q,Q,G,K,Z;let Y="loading"===this.state.status;try{if(!Y){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(B=(O=this.mutationCache.config).onMutate)?void 0:B.call(O,this.state.variables,this));let p=await (null==(T=(U=this.options).onMutate)?void 0:T.call(U,this.state.variables));p!==this.state.context&&this.dispatch({type:"loading",context:p,variables:this.state.variables})}let F=await (()=>{var p;return this.retryer=createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(p,g)=>{this.dispatch({type:"failed",failureCount:p,error:g})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(p=this.options.retry)?p:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(p=(g=this.mutationCache.config).onSuccess)?void 0:p.call(g,F,this.state.variables,this.state.context,this)),await (null==(w=(m=this.options).onSuccess)?void 0:w.call(m,F,this.state.variables,this.state.context)),await (null==(v=(x=this.mutationCache.config).onSettled)?void 0:v.call(x,F,null,this.state.variables,this.state.context,this)),await (null==(A=(_=this.options).onSettled)?void 0:A.call(_,F,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:F}),F}catch(p){try{throw await (null==(F=(z=this.mutationCache.config).onError)?void 0:F.call(z,p,this.state.variables,this.state.context,this)),await (null==(W=(q=this.options).onError)?void 0:W.call(q,p,this.state.variables,this.state.context)),await (null==(Q=(G=this.mutationCache.config).onSettled)?void 0:Q.call(G,void 0,p,this.state.variables,this.state.context,this)),await (null==(K=(Z=this.options).onSettled)?void 0:K.call(Z,void 0,p,this.state.variables,this.state.context)),p}finally{this.dispatch({type:"error",error:p})}}}dispatch(p){this.state=(g=>{switch(p.type){case"failed":return{...g,failureCount:p.failureCount,failureReason:p.error};case"pause":return{...g,isPaused:!0};case"continue":return{...g,isPaused:!1};case"loading":return{...g,context:p.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"loading",variables:p.variables};case"success":return{...g,data:p.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...g,data:void 0,error:p.error,failureCount:g.failureCount+1,failureReason:p.error,isPaused:!1,status:"error"};case"setState":return{...g,...p.state}}})(this.state),A.batch(()=>{this.observers.forEach(g=>{g.onMutationUpdate(p)}),this.mutationCache.notify({mutation:this,type:"updated",action:p})})}};function mutation_getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}let MutationCache=class MutationCache extends Subscribable{constructor(p){super(),this.config=p||{},this.mutations=[],this.mutationId=0}build(p,g,w){let m=new Mutation({mutationCache:this,logger:p.getLogger(),mutationId:++this.mutationId,options:p.defaultMutationOptions(g),state:w,defaultOptions:g.mutationKey?p.getMutationDefaults(g.mutationKey):void 0});return this.add(m),m}add(p){this.mutations.push(p),this.notify({type:"added",mutation:p})}remove(p){this.mutations=this.mutations.filter(g=>g!==p),this.notify({type:"removed",mutation:p})}clear(){A.batch(()=>{this.mutations.forEach(p=>{this.remove(p)})})}getAll(){return this.mutations}find(p){return void 0===p.exact&&(p.exact=!0),this.mutations.find(g=>matchMutation(p,g))}findAll(p){return this.mutations.filter(g=>matchMutation(p,g))}notify(p){A.batch(()=>{this.listeners.forEach(({listener:g})=>{g(p)})})}resumePausedMutations(){var p;return this.resuming=(null!=(p=this.resuming)?p:Promise.resolve()).then(()=>{let p=this.mutations.filter(p=>p.state.isPaused);return A.batch(()=>p.reduce((p,g)=>p.then(()=>g.continue().catch(utils_noop)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}};function getNextPageParam(p,g){return null==p.getNextPageParam?void 0:p.getNextPageParam(g[g.length-1],g)}let QueryClient=class QueryClient{constructor(p={}){this.queryCache=p.queryCache||new QueryCache,this.mutationCache=p.mutationCache||new MutationCache,this.logger=p.logger||x,this.defaultOptions=p.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=_.subscribe(()=>{_.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=O.subscribe(()=>{O.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var p,g;this.mountCount--,0===this.mountCount&&(null==(p=this.unsubscribeFocus)||p.call(this),this.unsubscribeFocus=void 0,null==(g=this.unsubscribeOnline)||g.call(this),this.unsubscribeOnline=void 0)}isFetching(p,g){let[w]=parseFilterArgs(p,g);return w.fetchStatus="fetching",this.queryCache.findAll(w).length}isMutating(p){return this.mutationCache.findAll({...p,fetching:!0}).length}getQueryData(p,g){var w;return null==(w=this.queryCache.find(p,g))?void 0:w.state.data}ensureQueryData(p,g,w){let m=parseQueryArgs(p,g,w),v=this.getQueryData(m.queryKey);return v?Promise.resolve(v):this.fetchQuery(m)}getQueriesData(p){return this.getQueryCache().findAll(p).map(({queryKey:p,state:g})=>{let w=g.data;return[p,w]})}setQueryData(p,g,w){let m=this.queryCache.find(p),v=null==m?void 0:m.state.data,x="function"==typeof g?g(v):g;if(void 0===x)return;let A=parseQueryArgs(p),_=this.defaultQueryOptions(A);return this.queryCache.build(this,_).setData(x,{...w,manual:!0})}setQueriesData(p,g,w){return A.batch(()=>this.getQueryCache().findAll(p).map(({queryKey:p})=>[p,this.setQueryData(p,g,w)]))}getQueryState(p,g){var w;return null==(w=this.queryCache.find(p,g))?void 0:w.state}removeQueries(p,g){let[w]=parseFilterArgs(p,g),m=this.queryCache;A.batch(()=>{m.findAll(w).forEach(p=>{m.remove(p)})})}resetQueries(p,g,w){let[m,v]=parseFilterArgs(p,g,w),x=this.queryCache,_={type:"active",...m};return A.batch(()=>(x.findAll(m).forEach(p=>{p.reset()}),this.refetchQueries(_,v)))}cancelQueries(p,g,w){let[m,v={}]=parseFilterArgs(p,g,w);void 0===v.revert&&(v.revert=!0);let x=A.batch(()=>this.queryCache.findAll(m).map(p=>p.cancel(v)));return Promise.all(x).then(utils_noop).catch(utils_noop)}invalidateQueries(p,g,w){let[m,v]=parseFilterArgs(p,g,w);return A.batch(()=>{var p,g;if(this.queryCache.findAll(m).forEach(p=>{p.invalidate()}),"none"===m.refetchType)return Promise.resolve();let w={...m,type:null!=(p=null!=(g=m.refetchType)?g:m.type)?p:"active"};return this.refetchQueries(w,v)})}refetchQueries(p,g,w){let[m,v]=parseFilterArgs(p,g,w),x=A.batch(()=>this.queryCache.findAll(m).filter(p=>!p.isDisabled()).map(p=>{var g;return p.fetch(void 0,{...v,cancelRefetch:null==(g=null==v?void 0:v.cancelRefetch)||g,meta:{refetchPage:m.refetchPage}})})),_=Promise.all(x).then(utils_noop);return null!=v&&v.throwOnError||(_=_.catch(utils_noop)),_}fetchQuery(p,g,w){let m=parseQueryArgs(p,g,w),v=this.defaultQueryOptions(m);void 0===v.retry&&(v.retry=!1);let x=this.queryCache.build(this,v);return x.isStaleByTime(v.staleTime)?x.fetch(v):Promise.resolve(x.state.data)}prefetchQuery(p,g,w){return this.fetchQuery(p,g,w).then(utils_noop).catch(utils_noop)}fetchInfiniteQuery(p,g,w){let m=parseQueryArgs(p,g,w);return m.behavior={onFetch:p=>{p.fetchFn=()=>{var g,w,m,v,x,A,_;let B;let O=null==(g=p.fetchOptions)?void 0:null==(w=g.meta)?void 0:w.refetchPage,T=null==(m=p.fetchOptions)?void 0:null==(v=m.meta)?void 0:v.fetchMore,U=null==T?void 0:T.pageParam,F=(null==T?void 0:T.direction)==="forward",z=(null==T?void 0:T.direction)==="backward",W=(null==(x=p.state.data)?void 0:x.pages)||[],q=(null==(A=p.state.data)?void 0:A.pageParams)||[],Q=q,G=!1,addSignalProperty=g=>{Object.defineProperty(g,"signal",{enumerable:!0,get:()=>{var g,w;return null!=(g=p.signal)&&g.aborted?G=!0:null==(w=p.signal)||w.addEventListener("abort",()=>{G=!0}),p.signal}})},K=p.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+p.options.queryHash+"'")),buildNewPages=(p,g,w,m)=>(Q=m?[g,...Q]:[...Q,g],m?[w,...p]:[...p,w]),fetchPage=(g,w,m,v)=>{if(G)return Promise.reject("Cancelled");if(void 0===m&&!w&&g.length)return Promise.resolve(g);let x={queryKey:p.queryKey,pageParam:m,meta:p.options.meta};addSignalProperty(x);let A=K(x),_=Promise.resolve(A).then(p=>buildNewPages(g,m,p,v));return _};if(W.length){if(F){let g=void 0!==U,w=g?U:getNextPageParam(p.options,W);B=fetchPage(W,g,w)}else if(z){let g=void 0!==U,w=g?U:null==(_=p.options).getPreviousPageParam?void 0:_.getPreviousPageParam(W[0],W);B=fetchPage(W,g,w,!0)}else{Q=[];let g=void 0===p.options.getNextPageParam,w=!O||!W[0]||O(W[0],0,W);B=w?fetchPage([],g,q[0]):Promise.resolve(buildNewPages([],q[0],W[0]));for(let w=1;w<W.length;w++)B=B.then(m=>{let v=!O||!W[w]||O(W[w],w,W);if(v){let v=g?q[w]:getNextPageParam(p.options,m);return fetchPage(m,g,v)}return Promise.resolve(buildNewPages(m,q[w],W[w]))})}}else B=fetchPage([]);let Z=B.then(p=>({pages:p,pageParams:Q}));return Z}}},this.fetchQuery(m)}prefetchInfiniteQuery(p,g,w){return this.fetchInfiniteQuery(p,g,w).then(utils_noop).catch(utils_noop)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(p){this.defaultOptions=p}setQueryDefaults(p,g){let w=this.queryDefaults.find(g=>hashQueryKey(p)===hashQueryKey(g.queryKey));w?w.defaultOptions=g:this.queryDefaults.push({queryKey:p,defaultOptions:g})}getQueryDefaults(p){if(!p)return;let g=this.queryDefaults.find(g=>partialDeepEqual(p,g.queryKey));return null==g?void 0:g.defaultOptions}setMutationDefaults(p,g){let w=this.mutationDefaults.find(g=>hashQueryKey(p)===hashQueryKey(g.mutationKey));w?w.defaultOptions=g:this.mutationDefaults.push({mutationKey:p,defaultOptions:g})}getMutationDefaults(p){if(!p)return;let g=this.mutationDefaults.find(g=>partialDeepEqual(p,g.mutationKey));return null==g?void 0:g.defaultOptions}defaultQueryOptions(p){if(null!=p&&p._defaulted)return p;let g={...this.defaultOptions.queries,...this.getQueryDefaults(null==p?void 0:p.queryKey),...p,_defaulted:!0};return!g.queryHash&&g.queryKey&&(g.queryHash=hashQueryKeyByOptions(g.queryKey,g)),void 0===g.refetchOnReconnect&&(g.refetchOnReconnect="always"!==g.networkMode),void 0===g.useErrorBoundary&&(g.useErrorBoundary=!!g.suspense),g}defaultMutationOptions(p){return null!=p&&p._defaulted?p:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==p?void 0:p.mutationKey),...p,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}};function defaultShouldDehydrateMutation(p){return p.state.isPaused}function defaultShouldDehydrateQuery(p){return"success"===p.state.status}let T=["added","removed","updated"];function isCacheableEventType(p){return T.includes(p)}async function persistQueryClientRestore({queryClient:p,persister:g,maxAge:w=864e5,buster:m="",hydrateOptions:v}){try{let x=await g.restoreClient();if(x){if(x.timestamp){let A=Date.now()-x.timestamp>w,_=x.buster!==m;A||_?g.removeClient():function(p,g,w){if("object"!=typeof g||null===g)return;let m=p.getMutationCache(),v=p.getQueryCache(),x=g.mutations||[],A=g.queries||[];x.forEach(g=>{var v;m.build(p,{...null==w?void 0:null==(v=w.defaultOptions)?void 0:v.mutations,mutationKey:g.mutationKey},g.state)}),A.forEach(g=>{var m;let x=v.get(g.queryHash),A={...g.state,fetchStatus:"idle"};if(x){x.state.dataUpdatedAt<A.dataUpdatedAt&&x.setState(A);return}v.build(p,{...null==w?void 0:null==(m=w.defaultOptions)?void 0:m.queries,queryKey:g.queryKey,queryHash:g.queryHash},A)})}(p,x.clientState,v)}else g.removeClient()}}catch(p){g.removeClient()}}async function persistQueryClientSave({queryClient:p,persister:g,buster:w="",dehydrateOptions:m}){let v={buster:w,timestamp:Date.now(),clientState:function(p,g={}){let w=[],m=[];if(!1!==g.dehydrateMutations){let m=g.shouldDehydrateMutation||defaultShouldDehydrateMutation;p.getMutationCache().getAll().forEach(p=>{m(p)&&w.push({mutationKey:p.options.mutationKey,state:p.state})})}if(!1!==g.dehydrateQueries){let w=g.shouldDehydrateQuery||defaultShouldDehydrateQuery;p.getQueryCache().getAll().forEach(p=>{w(p)&&m.push({state:p.state,queryKey:p.queryKey,queryHash:p.queryHash})})}return{mutations:w,queries:m}}(p,m)};await g.persistClient(v)}var U=w(5341),F=w(67294);let z=F.createContext(void 0),W=F.createContext(!1);function getQueryClientContext(p,g){return p||(g&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=z),window.ReactQueryClientContext):z)}let useQueryClient=({context:p}={})=>{let g=F.useContext(getQueryClientContext(p,F.useContext(W)));if(!g)throw Error("No QueryClient set, use QueryClientProvider to set one");return g},QueryClientProvider=({client:p,children:g,context:w,contextSharing:m=!1})=>{F.useEffect(()=>(p.mount(),()=>{p.unmount()}),[p]);let v=getQueryClientContext(w,m);return F.createElement(W.Provider,{value:!w&&m},F.createElement(v.Provider,{value:p},g))},q=F.createContext(!1),useIsRestoring=()=>F.useContext(q);q.Provider;let Q=F.createContext((m=!1,{clearReset:()=>{m=!1},reset:()=>{m=!0},isReset:()=>m})),useQueryErrorResetBoundary=()=>F.useContext(Q);var G=w(61688);let K=G.useSyncExternalStore;let MutationObserver=class MutationObserver extends Subscribable{constructor(p,g){super(),this.client=p,this.setOptions(g),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(p){var g;let w=this.options;this.options=this.client.defaultMutationOptions(p),shallowEqualObjects(w,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(g=this.currentMutation)||g.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var p;null==(p=this.currentMutation)||p.removeObserver(this)}}onMutationUpdate(p){this.updateResult();let g={listeners:!0};"success"===p.type?g.onSuccess=!0:"error"===p.type&&(g.onError=!0),this.notify(g)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(p,g){return this.mutateOptions=g,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==p?p:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let p=this.currentMutation?this.currentMutation.state:mutation_getDefaultState(),g={...p,isLoading:"loading"===p.status,isSuccess:"success"===p.status,isError:"error"===p.status,isIdle:"idle"===p.status,mutate:this.mutate,reset:this.reset};this.currentResult=g}notify(p){A.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var g,w,m,v,x,A,_,B;p.onSuccess?(null==(g=(w=this.mutateOptions).onSuccess)||g.call(w,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(m=(v=this.mutateOptions).onSettled)||m.call(v,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):p.onError&&(null==(x=(A=this.mutateOptions).onError)||x.call(A,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(_=(B=this.mutateOptions).onSettled)||_.call(B,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}p.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}};function useMutation_noop(){}let QueryObserver=class QueryObserver extends Subscribable{constructor(p,g){super(),this.client=p,this.options=g,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(g)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(p,g){let w=this.options,m=this.currentQuery;if(this.options=this.client.defaultQueryOptions(p),shallowEqualObjects(w,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=w.queryKey),this.updateQuery();let v=this.hasListeners();v&&shouldFetchOptionally(this.currentQuery,m,this.options,w)&&this.executeFetch(),this.updateResult(g),v&&(this.currentQuery!==m||this.options.enabled!==w.enabled||this.options.staleTime!==w.staleTime)&&this.updateStaleTimeout();let x=this.computeRefetchInterval();v&&(this.currentQuery!==m||this.options.enabled!==w.enabled||x!==this.currentRefetchInterval)&&this.updateRefetchInterval(x)}getOptimisticResult(p){let g=this.client.getQueryCache().build(this.client,p);return this.createResult(g,p)}getCurrentResult(){return this.currentResult}trackResult(p){let g={};return Object.keys(p).forEach(w=>{Object.defineProperty(g,w,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(w),p[w])})}),g}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:p,...g}={}){return this.fetch({...g,meta:{refetchPage:p}})}fetchOptimistic(p){let g=this.client.defaultQueryOptions(p),w=this.client.getQueryCache().build(this.client,g);return w.isFetchingOptimistic=!0,w.fetch().then(()=>this.createResult(w,g))}fetch(p){var g;return this.executeFetch({...p,cancelRefetch:null==(g=p.cancelRefetch)||g}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(p){this.updateQuery();let g=this.currentQuery.fetch(this.options,p);return null!=p&&p.throwOnError||(g=g.catch(utils_noop)),g}updateStaleTimeout(){if(this.clearStaleTimeout(),v||this.currentResult.isStale||!isValidTimeout(this.options.staleTime))return;let p=timeUntilStale(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},p+1)}computeRefetchInterval(){var p;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(p=this.options.refetchInterval)&&p}updateRefetchInterval(p){this.clearRefetchInterval(),this.currentRefetchInterval=p,!v&&!1!==this.options.enabled&&isValidTimeout(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||_.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(p,g){let w;let m=this.currentQuery,v=this.options,x=this.currentResult,A=this.currentResultState,_=this.currentResultOptions,B=p!==m,O=B?p.state:this.currentQueryInitialState,T=B?this.currentResult:this.previousQueryResult,{state:U}=p,{dataUpdatedAt:F,error:z,errorUpdatedAt:W,fetchStatus:q,status:Q}=U,G=!1,K=!1;if(g._optimisticResults){let w=this.hasListeners(),x=!w&&shouldFetchOnMount(p,g),A=w&&shouldFetchOptionally(p,m,g,v);(x||A)&&(q=canFetch(p.options.networkMode)?"fetching":"paused",F||(Q="loading")),"isRestoring"===g._optimisticResults&&(q="idle")}if(g.keepPreviousData&&!U.dataUpdatedAt&&null!=T&&T.isSuccess&&"error"!==Q)w=T.data,F=T.dataUpdatedAt,Q=T.status,G=!0;else if(g.select&&void 0!==U.data){if(x&&U.data===(null==A?void 0:A.data)&&g.select===this.selectFn)w=this.selectResult;else try{this.selectFn=g.select,w=g.select(U.data),w=replaceData(null==x?void 0:x.data,w,g),this.selectResult=w,this.selectError=null}catch(p){this.selectError=p}}else w=U.data;if(void 0!==g.placeholderData&&void 0===w&&"loading"===Q){let p;if(null!=x&&x.isPlaceholderData&&g.placeholderData===(null==_?void 0:_.placeholderData))p=x.data;else if(p="function"==typeof g.placeholderData?g.placeholderData():g.placeholderData,g.select&&void 0!==p)try{p=g.select(p),this.selectError=null}catch(p){this.selectError=p}void 0!==p&&(Q="success",w=replaceData(null==x?void 0:x.data,p,g),K=!0)}this.selectError&&(z=this.selectError,w=this.selectResult,W=Date.now(),Q="error");let Z="fetching"===q,Y="loading"===Q,J="error"===Q,X={status:Q,fetchStatus:q,isLoading:Y,isSuccess:"success"===Q,isError:J,isInitialLoading:Y&&Z,data:w,dataUpdatedAt:F,error:z,errorUpdatedAt:W,failureCount:U.fetchFailureCount,failureReason:U.fetchFailureReason,errorUpdateCount:U.errorUpdateCount,isFetched:U.dataUpdateCount>0||U.errorUpdateCount>0,isFetchedAfterMount:U.dataUpdateCount>O.dataUpdateCount||U.errorUpdateCount>O.errorUpdateCount,isFetching:Z,isRefetching:Z&&!Y,isLoadingError:J&&0===U.dataUpdatedAt,isPaused:"paused"===q,isPlaceholderData:K,isPreviousData:G,isRefetchError:J&&0!==U.dataUpdatedAt,isStale:isStale(p,g),refetch:this.refetch,remove:this.remove};return X}updateResult(p){let g=this.currentResult,w=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,shallowEqualObjects(w,g))return;this.currentResult=w;let m={cache:!0};(null==p?void 0:p.listeners)!==!1&&(()=>{if(!g)return!0;let{notifyOnChangeProps:p}=this.options;if("all"===p||!p&&!this.trackedProps.size)return!0;let w=new Set(null!=p?p:this.trackedProps);return this.options.useErrorBoundary&&w.add("error"),Object.keys(this.currentResult).some(p=>{let m=this.currentResult[p]!==g[p];return m&&w.has(p)})})()&&(m.listeners=!0),this.notify({...m,...p})}updateQuery(){let p=this.client.getQueryCache().build(this.client,this.options);if(p===this.currentQuery)return;let g=this.currentQuery;this.currentQuery=p,this.currentQueryInitialState=p.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==g||g.removeObserver(this),p.addObserver(this))}onQueryUpdate(p){let g={};"success"===p.type?g.onSuccess=!p.manual:"error"!==p.type||isCancelledError(p.error)||(g.onError=!0),this.updateResult(g),this.hasListeners()&&this.updateTimers()}notify(p){A.batch(()=>{var g,w,m,v,x,A,_,B;p.onSuccess?(null==(g=(w=this.options).onSuccess)||g.call(w,this.currentResult.data),null==(m=(v=this.options).onSettled)||m.call(v,this.currentResult.data,null)):p.onError&&(null==(x=(A=this.options).onError)||x.call(A,this.currentResult.error),null==(_=(B=this.options).onSettled)||_.call(B,void 0,this.currentResult.error)),p.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),p.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}};function shouldFetchOnMount(p,g){return!1!==g.enabled&&!p.state.dataUpdatedAt&&!("error"===p.state.status&&!1===g.retryOnMount)||p.state.dataUpdatedAt>0&&shouldFetchOn(p,g,g.refetchOnMount)}function shouldFetchOn(p,g,w){if(!1!==g.enabled){let m="function"==typeof w?w(p):w;return"always"===m||!1!==m&&isStale(p,g)}return!1}function shouldFetchOptionally(p,g,w,m){return!1!==w.enabled&&(p!==g||!1===m.enabled)&&(!w.suspense||"error"!==p.state.status)&&isStale(p,w)}function isStale(p,g){return p.isStaleByTime(g.staleTime)}var Z=w(52798);function createConfig({queryClient:p=new QueryClient({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:g=(0,U.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:U.wp}),persister:w="undefined"!=typeof window?function({storage:p,key:g="REACT_QUERY_OFFLINE_CACHE",throttleTime:w=1e3,serialize:m=JSON.stringify,deserialize:v=JSON.parse,retry:x}){if(p){let trySave=w=>{try{p.setItem(g,m(w));return}catch(p){return p}};return{persistClient:function(p,g=100){let w,m=null;return function(...v){w=v,null===m&&(m=setTimeout(()=>{p(...w),m=null},g))}}(p=>{let g=p,w=trySave(g),m=0;for(;w&&g;)m++,(g=null==x?void 0:x({persistedClient:g,error:w,errorCount:m}))&&(w=trySave(g))},w),restoreClient:()=>{let w=p.getItem(g);if(w)return v(w)},removeClient:()=>{p.removeItem(g)}}}return{persistClient:noop,restoreClient:()=>void 0,removeClient:noop}}({key:"cache",storage:g,serialize:p=>p,deserialize:p=>p}):void 0,...m}){let v=(0,U._g)({...m,storage:g});return w&&function(p){persistQueryClientRestore(p).then(()=>{(function(p){let g=p.queryClient.getQueryCache().subscribe(g=>{isCacheableEventType(g.type)&&persistQueryClientSave(p)}),w=p.queryClient.getMutationCache().subscribe(g=>{isCacheableEventType(g.type)&&persistQueryClientSave(p)})})(p)})}({queryClient:p,persister:w,dehydrateOptions:{shouldDehydrateQuery:p=>0!==p.cacheTime&&!1!==p.queryKey[0].persist}}),Object.assign(v,{queryClient:p})}var Y=F.createContext(void 0),J=F.createContext(void 0);function WagmiConfig({children:p,config:g}){return F.createElement(Y.Provider,{children:F.createElement(QueryClientProvider,{children:p,client:g.queryClient,context:J}),value:g})}var X=G.useSyncExternalStore;function dist_hasObjectPrototype(p){return"[object Object]"===Object.prototype.toString.call(p)}function queryKeyHashFn(p){return JSON.stringify(p,(p,g)=>!function(p){if(!dist_hasObjectPrototype(p))return!1;let g=p.constructor;if(void 0===g)return!0;let w=g.prototype;return!!(dist_hasObjectPrototype(w)&&w.hasOwnProperty("isPrototypeOf"))}(g)?"bigint"==typeof g?g.toString():g:Object.keys(g).sort().reduce((p,w)=>(p[w]=g[w],p),{}))}function useQuery(p,g,w){let m=Array.isArray(p)?"function"==typeof g?{...w,queryKey:p,queryFn:g}:{...g,queryKey:p}:p,v=function(p,g){var w,m;let v=useQueryClient({context:p.context}),x=useIsRestoring(),_=useQueryErrorResetBoundary(),B=v.defaultQueryOptions({...p,queryKeyHashFn});B._optimisticResults=x?"isRestoring":"optimistic",B.onError&&(B.onError=A.batchCalls(B.onError)),B.onSuccess&&(B.onSuccess=A.batchCalls(B.onSuccess)),B.onSettled&&(B.onSettled=A.batchCalls(B.onSettled)),B.suspense&&"number"!=typeof B.staleTime&&(B.staleTime=1e3),(B.suspense||B.useErrorBoundary)&&!_.isReset()&&(B.retryOnMount=!1);let[O]=F.useState(()=>new g(v,B)),T=O.getOptimisticResult(B);if(X(F.useCallback(p=>x?()=>void 0:O.subscribe(A.batchCalls(p)),[O,x]),()=>O.getCurrentResult(),()=>O.getCurrentResult()),F.useEffect(()=>{_.clearReset()},[_]),F.useEffect(()=>{O.setOptions(B,{listeners:!1})},[B,O]),B.suspense&&T.isLoading&&T.isFetching&&!x)throw O.fetchOptimistic(B).then(({data:p})=>{B.onSuccess?.(p),B.onSettled?.(p,null)}).catch(p=>{_.clearReset(),B.onError?.(p),B.onSettled?.(void 0,p)});if(T.isError&&!_.isReset()&&!T.isFetching&&(w=B.useErrorBoundary,m=[T.error,O.getCurrentQuery()],"function"==typeof w?w(...m):!!w))throw T.error;let U="loading"===T.status&&"idle"===T.fetchStatus?"idle":T.status,z="loading"===U&&"fetching"===T.fetchStatus;return{...T,defaultedOptions:B,isIdle:"idle"===U,isLoading:z,observer:O,status:U}}({context:J,...m},QueryObserver),x={data:v.data,error:v.error,fetchStatus:v.fetchStatus,isError:v.isError,isFetched:v.isFetched,isFetchedAfterMount:v.isFetchedAfterMount,isFetching:v.isFetching,isIdle:v.isIdle,isLoading:v.isLoading,isRefetching:v.isRefetching,isSuccess:v.isSuccess,refetch:v.refetch,status:v.status,internal:{dataUpdatedAt:v.dataUpdatedAt,errorUpdatedAt:v.errorUpdatedAt,failureCount:v.failureCount,isFetchedAfterMount:v.isFetchedAfterMount,isLoadingError:v.isLoadingError,isPaused:v.isPaused,isPlaceholderData:v.isPlaceholderData,isPreviousData:v.isPreviousData,isRefetchError:v.isRefetchError,isStale:v.isStale,remove:v.remove}};return v.defaultedOptions.notifyOnChangeProps?x:function(p,g){let w={};return Object.keys(p).forEach(m=>{Object.defineProperty(w,m,{configurable:!1,enumerable:!0,get:()=>(g.trackedProps.add(m),p[m])})}),w}(x,v.observer)}var useQueryClient2=()=>useQueryClient({context:J});function usePublicClient({chainId:p}={}){return(0,Z.useSyncExternalStoreWithSelector)(g=>(0,U.pC)({chainId:p},g),()=>(0,U.uV)({chainId:p}),()=>(0,U.uV)({chainId:p}),p=>p,(p,g)=>p.uid===g.uid)}function queryKey({chainId:p}){return[{entity:"walletClient",chainId:p,persist:!1}]}function queryFn({queryKey:[{chainId:p}]}){return(0,U.xz)({chainId:p})}function useChainId({chainId:p}={}){let g=usePublicClient({chainId:p});return g.chain.id}function queryKey2({chainId:p,scopeKey:g}){return[{entity:"blockNumber",chainId:p,scopeKey:g}]}function queryFn2({queryKey:[{chainId:p}]}){return(0,U.RQ)({chainId:p})}function useBlockNumber({cacheTime:p=0,chainId:g,enabled:w=!0,scopeKey:m,staleTime:v,suspense:x,watch:A=!1,onBlock:_,onError:B,onSettled:O,onSuccess:T}={}){let z=useChainId({chainId:g}),W=usePublicClient({chainId:z}),q=function({chainId:p}={}){return(0,Z.useSyncExternalStoreWithSelector)(g=>(0,U.fq)({chainId:p},g),()=>(0,U.jr)({chainId:p}),()=>(0,U.jr)({chainId:p}),p=>p,(p,g)=>p?.uid===g?.uid)}({chainId:z}),Q=useQueryClient2();return F.useEffect(()=>{if(!w||!A&&!_)return;let p=q??W,g=p.watchBlockNumber({onBlockNumber:p=>{A&&Q.setQueryData(queryKey2({chainId:z,scopeKey:m}),p),_&&_(p)},emitOnBegin:!0});return g},[z,m,_,W,Q,A,q,w]),useQuery(queryKey2({scopeKey:m,chainId:z}),queryFn2,{cacheTime:p,enabled:w,staleTime:v,suspense:x,onError:B,onSettled:O,onSuccess:T})}var isPlainObject2=p=>"object"==typeof p&&!Array.isArray(p);function useSyncExternalStoreWithTracked(p,g,w=g,m=U.vZ){let v=F.useRef([]),x=(0,Z.useSyncExternalStoreWithSelector)(p,g,w,p=>p,(p,g)=>{if(isPlainObject2(p)&&isPlainObject2(g)&&v.current.length){for(let w of v.current){let v=m(p[w],g[w]);if(!v)return!1}return!0}return m(p,g)});if(isPlainObject2(x)){let p={...x};return Object.defineProperties(p,Object.entries(p).reduce((p,[g,w])=>({...p,[g]:{configurable:!1,enumerable:!0,get:()=>(v.current.includes(g)||v.current.push(g),w)}}),{})),p}return x}function useAccount({onConnect:p,onDisconnect:g}={}){let w=useSyncExternalStoreWithTracked(U.uH,U.D0),m=F.useRef(),v=m.current;return F.useEffect(()=>{v?.status!=="connected"&&"connected"===w.status&&p?.({address:w.address,connector:w.connector,isReconnected:v?.status==="reconnecting"||v?.status===void 0}),v?.status==="connected"&&"disconnected"===w.status&&g?.(),m.current=w},[p,g,v,w]),w}function useContractRead({abi:p,address:g,account:w,args:m,blockNumber:v,blockTag:x,cacheOnBlock:A=!1,cacheTime:_,chainId:B,enabled:O=!0,functionName:T,isDataEqual:z,keepPreviousData:W,onError:q,onSettled:Q,onSuccess:G,scopeKey:K,select:Z,staleTime:Y,structuralSharing:J=(p,g)=>(0,U.vZ)(p,g)?p:utils_replaceEqualDeep(p,g),suspense:X,watch:ee}={}){let et=useChainId({chainId:B}),{data:er}=useBlockNumber({chainId:et,enabled:ee||A,scopeKey:ee||A?void 0:"idle",watch:ee}),ei=v??er,en=F.useMemo(()=>(function({account:p,address:g,args:w,blockNumber:m,blockTag:v,chainId:x,functionName:A,scopeKey:_}){return[{entity:"readContract",account:p,address:g,args:w,blockNumber:m,blockTag:v,chainId:x,functionName:A,scopeKey:_}]})({account:w,address:g,args:m,blockNumber:A?ei:void 0,blockTag:x,chainId:et,functionName:T,scopeKey:K}),[w,g,m,ei,x,A,et,T,K]),eo=F.useMemo(()=>{let w=!!(O&&p&&g&&T);return A&&(w=!!(w&&ei)),w},[p,g,ei,A,O,T]);return!function({chainId:p,enabled:g,queryKey:w}){let m=useQueryClient2(),v=F.useCallback(()=>m.invalidateQueries({queryKey:w},{cancelRefetch:!1}),[m,w]);useBlockNumber({chainId:p,enabled:g,onBlock:g?v:void 0,scopeKey:g?void 0:"idle"})}({chainId:et,enabled:!!(eo&&ee&&!A),queryKey:en}),useQuery(en,function({abi:p}){return async({queryKey:[{account:g,address:w,args:m,blockNumber:v,blockTag:x,chainId:A,functionName:_}]})=>{if(!p)throw Error("abi is required");if(!w)throw Error("address is required");return await (0,U.a4)({account:g,address:w,args:m,blockNumber:v,blockTag:x,chainId:A,abi:p,functionName:_})??null}}({abi:p}),{cacheTime:_,enabled:eo,isDataEqual:z,keepPreviousData:W,select:Z,staleTime:Y,structuralSharing:J,suspense:X,onError:q,onSettled:Q,onSuccess:G})}function mutationFn6(p){if("prepared"===p.mode){if(!p.request)throw Error("request is required");return(0,U.n9)({mode:"prepared",request:p.request})}if(!p.address)throw Error("address is required");if(!p.abi)throw Error("abi is required");if(!p.functionName)throw Error("functionName is required");return(0,U.n9)({address:p.address,args:p.args,chainId:p.chainId,abi:p.abi,functionName:p.functionName,accessList:p.accessList,account:p.account,gas:p.gas,gasPrice:p.gasPrice,maxFeePerGas:p.maxFeePerGas,maxPriorityFeePerGas:p.maxPriorityFeePerGas,nonce:p.nonce,value:p.value})}function useContractWrite(p){let{address:g,abi:w,args:m,chainId:v,functionName:x,mode:_,request:B}=p,{accessList:O,account:T,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,value:Z}=(0,U.gY)(p),{data:Y,error:X,isError:ee,isIdle:et,isLoading:er,isSuccess:ei,mutate:en,mutateAsync:eo,reset:ea,status:es,variables:el}=function(p,g,w){let m=parseMutationArgs(p,g,w);return function(p,g,w){var m,v;let x=parseMutationArgs(p,void 0,void 0),_=useQueryClient({context:x.context}),[B]=F.useState(()=>new MutationObserver(_,x));F.useEffect(()=>{B.setOptions(x)},[B,x]);let O=K(F.useCallback(p=>B.subscribe(A.batchCalls(p)),[B]),()=>B.getCurrentResult(),()=>B.getCurrentResult()),T=F.useCallback((p,g)=>{B.mutate(p,g).catch(useMutation_noop)},[B]);if(O.error&&(m=B.options.useErrorBoundary,v=[O.error],"function"==typeof m?m(...v):!!m))throw O.error;return{...O,mutate:T,mutateAsync:O.mutate}}({context:J,...m})}(function({address:p,abi:g,functionName:w,...m}){let{args:v,accessList:x,account:A,gas:_,gasPrice:B,maxFeePerGas:O,maxPriorityFeePerGas:T,nonce:U,request:F,value:z}=m;return[{entity:"writeContract",address:p,args:v,abi:g,accessList:x,account:A,functionName:w,gas:_,gasPrice:B,maxFeePerGas:O,maxPriorityFeePerGas:T,nonce:U,request:F,value:z}]}({address:g,abi:w,functionName:x,chainId:v,mode:_,args:m,accessList:O,account:T,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,request:B,value:Z}),mutationFn6,{onError:p.onError,onMutate:p.onMutate,onSettled:p.onSettled,onSuccess:p.onSuccess}),ec=F.useMemo(()=>{if("prepared"===p.mode){if(!B)return;return()=>en({mode:"prepared",request:p.request,chainId:p.chainId})}return p=>en({address:g,args:m,abi:w,functionName:x,chainId:v,accessList:O,account:T,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,value:Z,...p})},[O,T,w,g,m,v,p.chainId,p.mode,p.request,x,z,W,q,Q,en,G,B,Z]),eu=F.useMemo(()=>{if("prepared"===p.mode){if(!B)return;return()=>eo({mode:"prepared",request:p.request})}return p=>eo({address:g,args:m,abi:w,chainId:v,functionName:x,accessList:O,account:T,gas:z,gasPrice:W,maxFeePerGas:q,maxPriorityFeePerGas:Q,nonce:G,value:Z,...p})},[O,T,w,g,m,v,p.mode,p.request,x,z,W,q,Q,eo,G,B,Z]);return{data:Y,error:X,isError:ee,isIdle:et,isLoading:er,isSuccess:ei,reset:ea,status:es,variables:el,write:ec,writeAsync:eu}}function usePrepareContractWrite({address:p,abi:g,functionName:w,chainId:m,args:v,cacheTime:x,enabled:A=!0,scopeKey:_,staleTime:B,suspense:O,onError:T,onSettled:z,onSuccess:W,...q}={}){let{chain:Q}=useSyncExternalStoreWithTracked(U.QC,U.Hy),{data:G}=function({chainId:p,suspense:g,onError:w,onSettled:m,onSuccess:v}={}){let{connector:x}=useAccount(),A=useChainId({chainId:p}),_=useQuery(queryKey({chainId:A}),queryFn,{cacheTime:0,enabled:!!x,staleTime:1/0,suspense:g,onError:w,onSettled:m,onSuccess:v}),B=useQueryClient2();return F.useEffect(()=>{let p=(0,U.Tb)({chainId:A},p=>{p?B.invalidateQueries(queryKey({chainId:A})):B.removeQueries(queryKey({chainId:A}))});return p},[B,A]),_}({chainId:m}),{accessList:K,account:Z,blockNumber:Y,blockTag:J,gas:X,gasPrice:ee,maxFeePerGas:et,maxPriorityFeePerGas:er,nonce:ei,value:en}=(0,U._X)(q),eo=useQuery(function({accessList:p,account:g,activeChainId:w,args:m,address:v,blockNumber:x,blockTag:A,chainId:_,functionName:B,gas:O,gasPrice:T,maxFeePerGas:U,maxPriorityFeePerGas:F,nonce:z,scopeKey:W,walletClientAddress:q,value:Q}){return[{entity:"prepareContractTransaction",accessList:p,account:g,activeChainId:w,address:v,args:m,blockNumber:x,blockTag:A,chainId:_,functionName:B,gas:O,gasPrice:T,maxFeePerGas:U,maxPriorityFeePerGas:F,nonce:z,scopeKey:W,walletClientAddress:q,value:Q}]}({accessList:K,account:Z,activeChainId:Q?.id,address:p,args:v,blockNumber:Y,blockTag:J,chainId:m,functionName:w,gas:X,gasPrice:ee,maxFeePerGas:et,maxPriorityFeePerGas:er,nonce:ei,scopeKey:_,walletClientAddress:G?.account.address,value:en}),function({abi:p,walletClient:g}){return({queryKey:[{accessList:w,account:m,args:v,address:x,blockNumber:A,blockTag:_,chainId:B,functionName:O,gas:T,gasPrice:F,maxFeePerGas:z,maxPriorityFeePerGas:W,nonce:q,value:Q}]})=>{if(!p)throw Error("abi is required");if(!x)throw Error("address is required");if(!O)throw Error("functionName is required");return(0,U.$q)({abi:p,accessList:w,account:m,args:v,address:x,blockNumber:A,blockTag:_,chainId:B,functionName:O,gas:T,gasPrice:F,maxFeePerGas:z,maxPriorityFeePerGas:W,nonce:q,walletClient:g,value:Q})}}({abi:g,walletClient:G}),{cacheTime:x,enabled:!!(A&&g&&p&&w&&G),staleTime:B,suspense:O,onError:T,onSettled:z,onSuccess:W});return Object.assign(eo,{config:{chainId:m,mode:"prepared",request:void 0,...eo.data}})}}},function(p){var __webpack_exec__=function(g){return p(p.s=g)};p.O(0,[774,179],function(){return __webpack_exec__(23837),__webpack_exec__(59974)}),_N_E=p.O()}]);