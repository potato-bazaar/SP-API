(()=>{var Ep=0,Mu=1,Ap=2;var ir=1,Rp=2,to=3,Un=0,Ye=1,Pe=2,sr=0,xs=1,On=2,Su=3,bu=4,Cp=5;var rr=100,Pp=101,Ip=102,Lp=103,Np=104,Dp=200,Fp=201,Up=202,Op=203,Tu=204,wu=205,Bp=206,kp=207,zp=208,Hp=209,Vp=210,Gp=211,Wp=212,Xp=213,qp=214,bc=0,Tc=1,wc=2,Br=3,Ec=4,Ac=5,Rc=6,Cc=7,Zc=0,Yp=1,Kp=2,_i=0,Eu=1,Au=2,Ru=3,Cu=4,Pu=5,Iu=6,Lu=7,fu="attached",Zp="detached",Nu=300,or=301,eo=302,$c=303,Jc=304,Zn=1e3,Yn=1001,kr=1002,Be=1003,Qc=1004;var ar=1005;var Se=1006,no=1007;var tn=1008;var en=1009,Du=1010,Fu=1011,io=1012,jc=1013,oi=1014,Bn=1015,ai=1016,tl=1017,el=1018,cr=1020,Uu=35902,Ou=35899,Bu=1021,ku=1022,$n=1023,ki=1026,$i=1027,so=1028,nl=1029,_s=1030,il=1031;var sl=1033,pa=33776,ma=33777,ga=33778,xa=33779,rl=35840,ol=35841,al=35842,cl=35843,ll=36196,hl=37492,ul=37496,fl=37488,dl=37489,_a=37490,pl=37491,ml=37808,gl=37809,xl=37810,_l=37811,yl=37812,vl=37813,Ml=37814,Sl=37815,bl=37816,Tl=37817,wl=37818,El=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,Nl=36284,ya=36285,Dl=36286,$p=2200,Jp=2201,Qp=2202,Gs=2300,Ws=2301,Mc=2302,du=2303,zs=2400,Hs=2401,Xo=2402,Fl=2500,jp=2501,zu=0,va=1,ro=2,tm=3200;var Ma=0,em=1,kn="",Ae="srgb",Sn="srgb-linear",qo="linear",he="srgb";var Sc=7680;var nm=519,im=512,sm=513,rm=514,Hu=515,om=516,am=517,Vu=518,Gu=519,Wu=35044,ys=35048;var Xu="300 es",Kn=2e3,zr=2001;function _g(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cm(){let r=Hr("canvas");return r.style.display="block",r}var kd={},Vr=null;function Yo(...r){let t="THREE."+r.shift();Vr?Vr("log",t,...r):console.log(t,...r)}function lm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Rt(...r){r=lm(r);let t="THREE."+r.shift();if(Vr)Vr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ut(...r){r=lm(r);let t="THREE."+r.shift();if(Vr)Vr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Vs(...r){let t=r.join(" ");t in kd||(kd[t]=!0,Rt(...r))}function hm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var um={[bc]:bc,[wc]:Rc,[Ec]:Ec,[Br]:Ac,[Tc]:Tc,[Rc]:wc,[Cc]:Cc,[Ac]:Br},ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=1234567,Go=Math.PI/180,Xs=180/Math.PI;function yi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Gt(r,t,e){return Math.max(t,Math.min(e,r))}function qu(r,t){return(r%t+t)%t}function vg(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Mg(r,t,e){return r!==t?(e-r)/(t-r):0}function Wo(r,t,e){return(1-e)*r+e*t}function Sg(r,t,e,n){return Wo(r,t,1-Math.exp(-e*n))}function bg(r,t=1){return t-Math.abs(qu(r,t*2)-t)}function Tg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function wg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Eg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ag(r,t){return r+Math.random()*(t-r)}function Rg(r){return r*(.5-Math.random())}function Cg(r){r!==void 0&&(zd=r);let t=zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pg(r){return r*Go}function Ig(r){return r*Xs}function Lg(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Ng(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Yu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dg(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*f,a*l);break;case"YZY":r.set(c*f,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*f,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*d,a*l);break;case"YXY":r.set(c*d,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*d,a*h,a*l);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ul(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ku(r,t){if(t.constructor===Float32Array)return r;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function Zu(r,t){if(t.constructor===Float32Array)return r;let e=Ul(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Ji={DEG2RAD:Go,RAD2DEG:Xs,generateUUID:yi,clamp:Gt,euclideanModulo:qu,mapLinear:vg,inverseLerp:Mg,lerp:Wo,damp:Sg,pingpong:bg,smoothstep:Tg,smootherstep:wg,randInt:Eg,randFloat:Ag,randFloatSpread:Rg,seededRandom:Cg,degToRad:Pg,radToDeg:Ig,isPowerOfTwo:Lg,ceilPowerOfTwo:Ng,floorPowerOfTwo:Yu,setQuaternionFromProperEuler:Dg,normalize:Zu,denormalize:Ku},tf=class tf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tf.prototype.isVector2=!0;var Nt=tf,De=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(u!==x||c!==f||l!==d||h!==g){let p=c*f+l*d+h*g+u*x;p<0&&(f=-f,d=-d,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,a=Math.sin(a*_)/M,c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+x*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+g*a,u=u*m+x*a;let _=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=_,l*=_,h*=_,u*=_}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),d=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ef=class ef{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hh.copy(this).projectOnVector(t),this.sub(Hh)}reflect(t){return this.sub(Hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;var L=ef,Hh=new L,Hd=new De,nf=class nf{constructor(t,e,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],_=i[1],M=i[4],v=i[7],S=i[2],T=i[5],y=i[8];return s[0]=o*x+a*_+c*S,s[3]=o*p+a*M+c*T,s[6]=o*m+a*v+c*y,s[1]=l*x+h*_+u*S,s[4]=l*p+h*M+u*T,s[7]=l*m+h*v+u*y,s[2]=f*x+d*_+g*S,s[5]=f*p+d*M+g*T,s[8]=f*m+d*v+g*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(t,e)),this}rotate(t){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-t)),this}translate(t,e){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nf.prototype.isMatrix3=!0;var Bt=nf,Vh=new Bt,Vd=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fg(){let r={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===he&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(i.r=Or(i.r),i.g=Or(i.g),i.b=Or(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Sn]:{primaries:t,whitePoint:n,transfer:qo,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),r}var Yt=Fg();function Bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Mr,Pc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mr===void 0&&(Mr=Hr("canvas")),Mr.width=t.width,Mr.height=t.height;let i=Mr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Mr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ug=0,Gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Gh(i[o].image)):s.push(Gh(i[o]))}else s=Gh(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Pc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var Og=0,Wh=new L,ke=class r extends ii{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yn,i=Yn,s=Se,o=tn,a=$n,c=en,l=r.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=yi(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zn:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zn:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Nu;ke.DEFAULT_ANISOTROPY=1;var sf=class sf{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,v=(d+1)/2,S=(m+1)/2,T=(h+f)/4,y=(u+x)/4,b=(g+p)/4;return M>v&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=y/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=b/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=y/s,i=b/s),this.set(n,i,s,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sf.prototype.isVector4=!0;var re=sf,Ic=class extends ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new ke({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Ic{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Lc=class extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Kc=class Kc{constructor(t,e,n,i,s,o,a,c,l,h,u,f,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,f,d,g,x,p)}set(t,e,n,i,s,o,a,c,l,h,u,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Sr.setFromMatrixColumn(t,0).length(),s=1/Sr.setFromMatrixColumn(t,1).length(),o=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bg,t,kg)}lookAt(t,e,n){let i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),as.crossVectors(n,Dn),as.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),as.crossVectors(n,Dn)),as.normalize(),Za.crossVectors(Dn,as),i[0]=as.x,i[4]=Za.x,i[8]=Dn.x,i[1]=as.y,i[5]=Za.y,i[9]=Dn.y,i[2]=as.z,i[6]=Za.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],M=n[7],v=n[11],S=n[15],T=i[0],y=i[4],b=i[8],E=i[12],R=i[1],P=i[5],C=i[9],D=i[13],I=i[2],U=i[6],k=i[10],V=i[14],tt=i[3],W=i[7],j=i[11],et=i[15];return s[0]=o*T+a*R+c*I+l*tt,s[4]=o*y+a*P+c*U+l*W,s[8]=o*b+a*C+c*k+l*j,s[12]=o*E+a*D+c*V+l*et,s[1]=h*T+u*R+f*I+d*tt,s[5]=h*y+u*P+f*U+d*W,s[9]=h*b+u*C+f*k+d*j,s[13]=h*E+u*D+f*V+d*et,s[2]=g*T+x*R+p*I+m*tt,s[6]=g*y+x*P+p*U+m*W,s[10]=g*b+x*C+p*k+m*j,s[14]=g*E+x*D+p*V+m*et,s[3]=_*T+M*R+v*I+S*tt,s[7]=_*y+M*P+v*U+S*W,s[11]=_*b+M*C+v*k+S*j,s[15]=_*E+M*D+v*V+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=c*d-l*f,M=a*d-l*u,v=a*f-c*u,S=o*d-l*h,T=o*f-c*h,y=o*u-a*h;return e*(x*_-p*M+m*v)-n*(g*_-p*S+m*T)+i*(g*M-x*S+m*y)-s*(g*v-x*T+p*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(s*h-a*c)+i*(s*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*a-n*o,M=e*c-i*o,v=e*l-s*o,S=n*c-i*a,T=n*l-s*a,y=i*l-s*c,b=h*x-u*g,E=h*p-f*g,R=h*m-d*g,P=u*p-f*x,C=u*m-d*x,D=f*m-d*p,I=_*D-M*C+v*P+S*R-T*E+y*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*D-c*C+l*P)*U,t[1]=(i*C-n*D-s*P)*U,t[2]=(x*y-p*T+m*S)*U,t[3]=(f*T-u*y-d*S)*U,t[4]=(c*R-o*D-l*E)*U,t[5]=(e*D-i*R+s*E)*U,t[6]=(p*v-g*y-m*M)*U,t[7]=(h*y-f*v+d*M)*U,t[8]=(o*C-a*R+l*b)*U,t[9]=(n*R-e*C-s*b)*U,t[10]=(g*T-x*v+m*_)*U,t[11]=(u*v-h*T-d*_)*U,t[12]=(a*E-o*P-c*b)*U,t[13]=(e*P-n*E+i*b)*U,t[14]=(x*M-g*S-p*_)*U,t[15]=(h*S-u*M+f*_)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,g=s*u,x=o*h,p=o*u,m=a*u,_=c*l,M=c*h,v=c*u,S=n.x,T=n.y,y=n.z;return i[0]=(1-(x+m))*S,i[1]=(d+v)*S,i[2]=(g-M)*S,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+m))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(g+M)*y,i[9]=(p-_)*y,i[10]=(1-(f+x))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Sr.set(i[0],i[1],i[2]).length(),a=Sr.set(i[4],i[5],i[6]).length(),c=Sr.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ti.copy(this);let l=1/o,h=1/a,u=1/c;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,e.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=Kn,c=!1){let l=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Kn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===zr)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Kn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Kn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===zr)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Kc.prototype.isMatrix4=!0;var yt=Kc,Sr=new L,ti=new yt,Bg=new L(0,0,0),kg=new L(1,1,1),as=new L,Za=new L,Dn=new L,Wd=new yt,Xd=new De,mi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zg=0,qd=new L,br=new De,Li=new yt,$a=new L,Do=new L,Hg=new L,Vg=new De,Yd=new L(1,0,0),Kd=new L(0,1,0),Zd=new L(0,0,1),$d={type:"added"},Gg={type:"removed"},Tr={type:"childadded",child:null},Xh={type:"childremoved",child:null},Ce=class r extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new mi,n=new De,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Bt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.multiply(br),this}rotateOnWorldAxis(t,e){return br.setFromAxisAngle(t,e),this.quaternion.premultiply(br),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(Kd,t)}rotateZ(t){return this.rotateOnAxis(Zd,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(Kd,t)}translateZ(t){return this.translateOnAxis(Zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Do,$a,this.up):Li.lookAt($a,Do,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),br.setFromRotationMatrix(Li),this.quaternion.premultiply(br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($d),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gg),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($d),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Vg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new L(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wg={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function qh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=qu(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=qh(o,s,t+1/3),this.g=qh(o,s,t),this.b=qh(o,s,t-1/3)}return Yt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=fm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Yt.workingToColorSpace(dn.copy(this),t),Math.round(Gt(dn.r*255,0,255))*65536+Math.round(Gt(dn.g*255,0,255))*256+Math.round(Gt(dn.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(dn.copy(this),e);let n=dn.r,i=dn.g,s=dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Ae){Yt.workingToColorSpace(dn.copy(this),t);let e=dn.r,n=dn.g,i=dn.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+e,cs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cs),t.getHSL(Ja);let n=Wo(cs.h,Ja.h,e),i=Wo(cs.s,Ja.s,e),s=Wo(cs.l,Ja.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new At;At.NAMES=fm;var Zo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ys=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new L,Ni=new L,Yh=new L,Di=new L,wr=new L,Er=new L,Jd=new L,Kh=new L,Zh=new L,$h=new L,Jh=new re,Qh=new re,jh=new re,pn=class r{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ei.subVectors(i,e),Ni.subVectors(n,e),Yh.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Ni),c=ei.dot(Yh),l=Ni.dot(Ni),h=Ni.dot(Yh),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(o,Di.y),c.addScaledVector(a,Di.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Jh.setScalar(0),Qh.setScalar(0),jh.setScalar(0),Jh.fromBufferAttribute(t,e),Qh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Jh,s.x),o.addScaledVector(Qh,s.y),o.addScaledVector(jh,s.z),o}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Ni.subVectors(t,e),ei.cross(Ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ei.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;wr.subVectors(i,n),Er.subVectors(s,n),Kh.subVectors(t,n);let c=wr.dot(Kh),l=Er.dot(Kh);if(c<=0&&l<=0)return e.copy(n);Zh.subVectors(t,i);let h=wr.dot(Zh),u=Er.dot(Zh);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),e.copy(n).addScaledVector(wr,o);$h.subVectors(t,s);let d=wr.dot($h),g=Er.dot($h);if(g>=0&&d<=g)return e.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Er,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Jd.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Jd,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(wr,o).addScaledVector(Er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oe=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(t.matrixWorld),this.union(Qa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),ja.subVectors(this.max,Fo),Ar.subVectors(t.a,Fo),Rr.subVectors(t.b,Fo),Cr.subVectors(t.c,Fo),ls.subVectors(Rr,Ar),hs.subVectors(Cr,Rr),Us.subVectors(Ar,Cr);let e=[0,-ls.z,ls.y,0,-hs.z,hs.y,0,-Us.z,Us.y,ls.z,0,-ls.x,hs.z,0,-hs.x,Us.z,0,-Us.x,-ls.y,ls.x,0,-hs.y,hs.x,0,-Us.y,Us.x,0];return!tu(e,Ar,Rr,Cr,ja)||(e=[1,0,0,0,1,0,0,0,1],!tu(e,Ar,Rr,Cr,ja))?!1:(tc.crossVectors(ls,hs),e=[tc.x,tc.y,tc.z],tu(e,Ar,Rr,Cr,ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new L,new L,new L,new L,new L,new L,new L,new L],ni=new L,Qa=new oe,Ar=new L,Rr=new L,Cr=new L,ls=new L,hs=new L,Us=new L,Fo=new L,ja=new L,tc=new L,Os=new L;function tu(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Os.fromArray(r,s);let a=i.x*Math.abs(Os.x)+i.y*Math.abs(Os.y)+i.z*Math.abs(Os.z),c=t.dot(Os),l=e.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var We=new L,ec=new Nt,Xg=0,Ft=class extends ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=t!==void 0?Ul(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ec.fromBufferAttribute(this,e),ec.applyMatrix3(t),this.setXY(e,ec.x,ec.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ku(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Zu(t,this.array)}};var $o=class extends Ft{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jo=class extends Ft{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Re=class extends Ft{constructor(t,e,n){super(new Float32Array(t),e,n)}},qg=new oe,Uo=new L,eu=new L,Cn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);let e=Uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Uo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(eu)),this.expandByPoint(Uo.copy(t.center).sub(eu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yg=0,qn=new yt,nu=new Ce,Pr=new L,Fn=new oe,Oo=new oe,je=new L,ue=class r extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_g(t)?Jo:$o)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return nu.lookAt(t),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Fn.min,Oo.min),Fn.expandByPoint(je),je.addVectors(Fn.max,Oo.max),Fn.expandByPoint(je)):(Fn.expandByPoint(Oo.min),Fn.expandByPoint(Oo.max))}Fn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)je.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(t,l),je.add(Pr)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let E=0;E<n.count;E++)a[E]=new L,c[E]=new L;let h=new L,u=new L,f=new L,d=new Nt,g=new Nt,x=new Nt,p=new L,m=new L;function _(E,R,P){l[E]=l[R]=l[P]=1,h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,P),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,R),x.fromBufferAttribute(s,P),u.sub(h),f.sub(h),g.sub(d),x.sub(d);let C=1/(g.x*x.y-x.x*g.y);isFinite(C)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(C),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(C),a[E].add(p),a[R].add(p),a[P].add(p),c[E].add(m),c[R].add(m),c[P].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,R=M.length;E<R;++E){let P=M[E],C=P.start,D=P.count;for(let I=C,U=C+D;I<U;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new L,S=new L,T=new L,y=new L;function b(E){T.fromBufferAttribute(i,E),y.copy(T);let R=a[E];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(y,R);let C=S.dot(c[E])<0?-1:1;o.setXYZW(E,v.x,v.y,v.z,C)}for(let E=0,R=n.count;E<R;++E)l[E]&&b(E);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ft(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new Ft(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Qd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Qd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Qd(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=yi()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var vn=new L,qr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ul(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyMatrix4(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.applyNormalMatrix(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)vn.fromBufferAttribute(this,e),vn.transformDirection(t),this.setXYZ(e,vn.x,vn.y,vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ft(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ku(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Zu(t,this.data.array)}},iu=new L,Kg=new L,Zg=new Bt,Mn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=iu.subVectors(n,e).cross(Kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(iu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zg.getNormalMatrix(t),i=this.coplanarPoint(iu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$g=0,Tn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=xs,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=wu,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sc,this.stencilZFail=Sc,this.stencilZPass=Sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ui=new L,su=new L,nc=new L,ic=new L,si=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){su.copy(t).add(e).multiplyScalar(.5),nc.copy(e).sub(t).normalize(),ic.copy(this.origin).sub(su);let s=t.distanceTo(e)*.5,o=-this.direction.dot(nc),a=ic.dot(this.direction),c=-ic.dot(nc),l=ic.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(su).addScaledVector(nc,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,_=n.y-o.y,M=n.z-o.z,v=Math.abs(c),S=Math.abs(l),T=Math.abs(h),y,b,E,R,P,C,D,I,U,k,V,tt;if(v>=S&&v>=T?(E=c,C=u,U=g,tt=m,c>=0?(y=l,b=h,R=f,P=d,D=x,I=p,k=_,V=M):(y=h,b=l,R=d,P=f,D=p,I=x,k=M,V=_)):S>=T?(E=l,C=f,U=x,tt=_,l>=0?(y=h,b=c,R=d,P=u,D=p,I=g,k=M,V=m):(y=c,b=h,R=u,P=d,D=g,I=p,k=m,V=M)):(E=h,C=d,U=p,tt=M,h>=0?(y=c,b=l,R=u,P=f,D=g,I=x,k=m,V=_):(y=l,b=c,R=f,P=u,D=x,I=g,k=_,V=m)),E===0)return null;let W=y/E,j=b/E,et=1/E,xt=R-W*C,It=P-j*C,K=D-W*U,at=I-j*U,vt=k-W*tt,Ct=V-j*tt,pt=vt*at-Ct*K,Ot=xt*Ct-It*vt,Ee=K*It-at*xt;if(i){if(pt<0||Ot<0||Ee<0)return null}else if((pt<0||Ot<0||Ee<0)&&(pt>0||Ot>0||Ee>0))return null;let Et=pt+Ot+Ee;if(Et===0)return null;let Xt=et*(pt*C+Ot*U+Ee*tt);return(Et>0?Xt<0:Xt>0)?null:this.at(Xt/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jd=new yt,Bs=new si,sc=new Cn,tp=new L,rc=new L,oc=new L,ac=new L,ru=new L,cc=new L,ep=new L,lc=new L,fe=class extends Ce{constructor(t=new ue,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(ru.fromBufferAttribute(u,t),o?cc.addScaledVector(ru,h):cc.addScaledVector(ru.sub(e),h))}e.add(cc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(s),Bs.copy(t.ray).recast(t.near),!(sc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(sc,tp)===null||Bs.origin.distanceToSquared(tp)>(t.far-t.near)**2))&&(jd.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(jd),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=M;v<S;v+=3){let T=a.getX(v),y=a.getX(v+1),b=a.getX(v+2);i=hc(this,m,t,n,l,h,u,T,y,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=hc(this,o,t,n,l,h,u,_,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=M;v<S;v+=3){let T=v,y=v+1,b=v+2;i=hc(this,m,t,n,l,h,u,T,y,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=p,M=p+1,v=p+2;i=hc(this,o,t,n,l,h,u,_,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function Jg(r,t,e,n,i,s,o,a){let c;if(t.side===Ye?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Un,a),c===null)return null;lc.copy(a),lc.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(lc);return l<e.near||l>e.far?null:{distance:l,point:lc.clone(),object:r}}function hc(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,rc),r.getVertexPosition(c,oc),r.getVertexPosition(l,ac);let h=Jg(r,t,e,n,rc,oc,ac,ep);if(h){let u=new L;pn.getBarycoord(ep,rc,oc,ac,u),i&&(h.uv=pn.getInterpolatedAttribute(i,a,c,l,u,new Nt)),s&&(h.uv1=pn.getInterpolatedAttribute(s,a,c,l,u,new Nt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};pn.getNormal(rc,oc,ac,f.normal),h.face=f,h.barycoord=u}return h}var Bo=new re,np=new re,ip=new re,Qg=new re,sp=new yt,uc=new L,ou=new Cn,rp=new yt,au=new si,Ks=class extends fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new oe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uc),this.boundingSphere.expandByPoint(uc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(i),t.ray.intersectsSphere(ou)!==!1&&(rp.copy(i).invert(),au.copy(t.ray).applyMatrix4(rp),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,au)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new re,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;np.fromBufferAttribute(i.attributes.skinIndex,t),ip.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Bo.copy(e),e.set(0,0,0,0)):(Bo.set(e.x,e.y,e.z,1),e.set(0,0,0)),Bo.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=ip.getComponent(s);if(o!==0){let a=np.getComponent(s);sp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Qg.copy(Bo).applyMatrix4(sp),o)}}return e.isVector4&&(e.w=Bo.w),e.applyMatrix4(this.bindMatrixInverse)}},Yr=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},Kr=class extends ke{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Be,h=Be,u,f){super(null,o,a,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},op=new yt,jg=new yt,Qo=class r{constructor(t=[],e=[]){this.uuid=yi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:jg;op.multiplyMatrices(a,e[s]),op.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Kr(e,t,t,$n,Bn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],o=e[s];o===void 0&&(Rt("Skeleton: No bone found with UUID:",s),o=new Yr),this.bones.push(o),this.boneInverses.push(new yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},zi=class extends Ft{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ir=new yt,ap=new yt,fc=[],cp=new oe,tx=new yt,ko=new fe,zo=new Cn,Zs=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),cp.copy(t.boundingBox).applyMatrix4(Ir),this.boundingBox.union(cp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ir),zo.copy(t.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(zo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(n),t.ray.intersectsSphere(zo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ir),ap.multiplyMatrices(n,Ir),ko.matrixWorld=ap,ko.raycast(t,fc);for(let o=0,a=fc.length;o<a;o++){let c=fc[o];c.instanceId=s,c.object=this,e.push(c)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kr(new Float32Array(i*this.count),i,this.count,so,Bn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ks=new Cn,ex=new Nt(.5,.5),dc=new L,ds=class{constructor(t=new Mn,e=new Mn,n=new Mn,i=new Mn,s=new Mn,o=new Mn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],p=s[10],m=s[11],_=s[12],M=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-o,d-h,m-g,S-_).normalize(),i[1].setComponents(l+o,d+h,m+g,S+_).normalize(),i[2].setComponents(l+a,d+u,m+x,S+M).normalize(),i[3].setComponents(l-a,d-u,m-x,S-M).normalize(),n)i[4].setComponents(c,f,p,v).normalize(),i[5].setComponents(l-c,d-f,m-p,S-v).normalize();else if(i[4].setComponents(l-c,d-f,m-p,S-v).normalize(),e===Kn)i[5].setComponents(l+c,d+f,m+p,S+v).normalize();else if(e===zr)i[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(t){ks.center.set(0,0,0);let e=ex.distanceTo(t.center);return ks.radius=.7071067811865476+e,ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(dc.x=i.normal.x>0?t.max.x:t.min.x,dc.y=i.normal.y>0?t.max.y:t.min.y,dc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lp=new yt,Nc=class r{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];lp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ds),n[i].setFromProjectionMatrix(lp,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ds),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Zr=class extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Dc=new L,Fc=new L,hp=new yt,Ho=new si,pc=new Cn,cu=new L,up=new L,$s=class extends Ce{constructor(t=new ue,e=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Dc.fromBufferAttribute(e,i-1),Fc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Dc.distanceTo(Fc);t.setAttribute("lineDistance",new Re(n,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=s,t.ray.intersectsSphere(pc)===!1)return;hp.copy(i).invert(),Ho.copy(t.ray).applyMatrix4(hp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=l){let m=h.getX(x),_=h.getX(x+1),M=mc(this,t,Ho,c,m,_,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=mc(this,t,Ho,c,x,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=l){let m=mc(this,t,Ho,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=mc(this,t,Ho,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function mc(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(Dc.fromBufferAttribute(a,i),Fc.fromBufferAttribute(a,s),e.distanceSqToSegment(Dc,Fc,cu,up)>n)return;cu.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(cu);if(!(l<t.near||l>t.far))return{distance:l,point:up.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var fp=new L,dp=new L,Js=class extends $s{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)fp.fromBufferAttribute(e,i),dp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fp.distanceTo(dp);t.setAttribute("lineDistance",new Re(n,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jo=class extends $s{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},$r=class extends Tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pp=new yt,pu=new si,gc=new Cn,xc=new L,ps=class extends Ce{constructor(t=new ue,e=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=s,t.ray.intersectsSphere(gc)===!1)return;pp.copy(i).invert(),pu.copy(t.ray).applyMatrix4(pp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=l.getX(g);xc.fromBufferAttribute(u,p),mp(xc,p,c,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)xc.fromBufferAttribute(u,g),mp(xc,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function mp(r,t,e,n,i,s,o){let a=pu.distanceSqToPoint(r);if(a<e){let c=new L;pu.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ta=class extends ke{constructor(t=[],e=or,n,i,s,o,a,c,l,h){super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qs=class extends ke{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends ke{constructor(t,e,n=oi,i,s,o,a=Be,c=Be,l,h=ki,u=1){if(h!==ki&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ea=class extends Hi{constructor(t,e=oi,n=or,i,s,o=Be,a=Be,c,l=ki){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},na=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ms=class r extends ue{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function g(x,p,m,_,M,v,S,T,y,b,E){let R=v/y,P=S/b,C=v/2,D=S/2,I=T/2,U=y+1,k=b+1,V=0,tt=0,W=new L;for(let j=0;j<k;j++){let et=j*P-D;for(let xt=0;xt<U;xt++){let It=xt*R-C;W[x]=It*_,W[p]=et*M,W[m]=I,l.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=T>0?1:-1,h.push(W.x,W.y,W.z),u.push(xt/y),u.push(1-j/b),V+=1}}for(let j=0;j<b;j++)for(let et=0;et<y;et++){let xt=f+et+U*j,It=f+et+U*(j+1),K=f+(et+1)+U*(j+1),at=f+(et+1)+U*j;c.push(xt,It,at),c.push(It,K,at),tt+=6}a.addGroup(d,tt,E),d+=tt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ia=class r extends ue{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function _(){let v=new L,S=new L,T=0,y=(e-t)/n;for(let b=0;b<=s;b++){let E=[],R=b/s,P=R*(e-t)+t;for(let C=0;C<=i;C++){let D=C/i,I=D*c+a,U=Math.sin(I),k=Math.cos(I);S.x=P*U,S.y=-R*n+p,S.z=P*k,u.push(S.x,S.y,S.z),v.set(U,y,k).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-R),E.push(g++)}x.push(E)}for(let b=0;b<i;b++)for(let E=0;E<s;E++){let R=x[E][b],P=x[E+1][b],C=x[E+1][b+1],D=x[E][b+1];(t>0||E!==0)&&(h.push(R,P,D),T+=3),(e>0||E!==s-1)&&(h.push(P,C,D),T+=3)}l.addGroup(m,T,0),m+=T}function M(v){let S=g,T=new Nt,y=new L,b=0,E=v===!0?t:e,R=v===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,p*R,0),f.push(0,R,0),d.push(.5,.5),g++;let P=g;for(let C=0;C<=i;C++){let I=C/i*c+a,U=Math.cos(I),k=Math.sin(I);y.x=E*k,y.y=p*R,y.z=E*U,u.push(y.x,y.y,y.z),f.push(0,R,0),T.x=U*.5+.5,T.y=k*.5*R+.5,d.push(T.x,T.y),g++}for(let C=0;C<i;C++){let D=S+C,I=P+C;v===!0?h.push(I,I+1,D):h.push(I+1,I,D),b+=3}l.addGroup(m,b,v===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vi=class r extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let _=m*f-o;for(let M=0;M<l;M++){let v=M*u-s;g.push(v,-_,0),x.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let _=0;_<a;_++){let M=_+l*m,v=_+l*(m+1),S=_+1+l*(m+1),T=_+1+l*m;d.push(M,v,T),d.push(v,S,T)}this.setIndex(d),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var sa=class r extends ue{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let _=[],M=m/n,v=o+M*a,S=t*Math.cos(v),T=Math.sqrt(t*t-S*S),y=0;m===0&&o===0?y=.5/e:m===n&&c===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let E=b/e,R=i+E*s;u.x=-T*Math.cos(R),u.y=S,u.z=T*Math.sin(R),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+y,1-M),_.push(l++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){let M=h[m][_+1],v=h[m][_],S=h[m+1][_],T=h[m+1][_+1];(m!==0||o>0)&&d.push(M,v,T),(m!==n-1||c<Math.PI)&&d.push(v,S,T)}this.setIndex(d),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ra=class r extends ue{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new L,d=new L,g=new L;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=i;m++){let _=m/i*s;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){let m=(i+1)*x+p-1,_=(i+1)*(x-1)+p-1,M=(i+1)*(x-1)+p,v=(i+1)*x+p;c.push(m,_,v),c.push(_,M,v)}this.setIndex(c),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function lr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(gp(i))i.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(gp(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function mn(r){let t={};for(let e=0;e<r.length;e++){let n=lr(r[e]);for(let i in n)t[i]=n[i]}return t}function gp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function nx(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $u(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var dm={clone:lr,merge:mn},ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ix,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=nx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new At().setHex(i.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new re().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uc=class extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},js=class extends Tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wn=class extends js{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Vs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Vs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ri=class extends Tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oc=class extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bc=class extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Vo(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function rx(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function xp(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function ox(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}var gi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends gi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zs,endingEnd:zs}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hs:s=t,a=2*e-n;break;case Xo:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hs:o=t,c=2*n-e;break;case Xo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,_=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let S=0;S!==a;++S)s[S]=m*o[h+S]+_*o[l+S]+M*o[c+S]+v*o[u+S];return s}},oa=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},zc=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Hc=class extends gi{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(i-e),x=1-g;for(let p=0;p!==a;++p)s[p]=o[l+p]*x+o[c+p]*g;return s}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=d*f+g*2,_=u[m],M=u[m+1],v=t*f+g*2,S=h[v],T=h[v+1],y=cx(n,e,_,S,i);s[g]=pm(y,x,M,T,p)}return s}};function pm(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function ax(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function cx(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=pm(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let c=ax(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var Pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Vo(t.settings)&&(n.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case Ws:e=this.InterpolantFactoryMethodLinear;break;case Mc:e=this.InterpolantFactoryMethodSmooth;break;case du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Mc;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Vo(this.settings)&&(_p(this.settings.inTangents,t),_p(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Vo(this.settings)&&(yp(this.settings.inTangents,t),yp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ut("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ut("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&yg(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mc,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Vo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function _p(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function yp(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ws;var Gi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Gs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};aa.prototype.ValueTypeName="color";var Wi=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};Wi.prototype.ValueTypeName="number";var Vc=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)De.slerpFlat(s,0,o,l-a,o,l,c);return s}},Xi=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Pn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Gs;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Pn{constructor(t,e,n,i){super(t,e,n,i)}};gs.prototype.ValueTypeName="vector";var tr=class{constructor(t="",e=-1,n=[],i=Fl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(hx(n[o]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(Pn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let h=rx(c);c=xp(c,1,h),l=xp(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Wi(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){let l=t[a],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function lx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return aa;case"quaternion":return Xi;case"bool":case"boolean":return Gi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=lx(r.type);if(r.times===void 0){let n=[],i=[];ox(r.keys,n,i,"value"),r.times=n,r.values=i}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Vo(r.settings)&&(e.settings={inTangents:fs(r.settings.inTangents,Float32Array),outTangents:fs(r.settings.outTangents,Float32Array)}),e}var pi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(vp(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!vp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function vp(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Gc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mm=new Gc,xi=class{constructor(t){this.manager=t!==void 0?t:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},mu=class extends Error{constructor(t,e){super(t),this.response=e}},Jr=class extends xi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=pi.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:n,onError:i});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Oi[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,p=new ReadableStream({start(m){_();function _(){u.read().then(({done:M,value:v})=>{if(M)m.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let T=0,y=h.length;T<y;T++){let b=h[T];b.onProgress&&b.onProgress(S)}m.enqueue(v),_()}},M=>{m.error(M)})}}});return new Response(p)}else throw new mu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{pi.add(`file:${t}`,l);let h=Oi[t];delete Oi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=Oi[t];if(h===void 0)throw this.manager.itemError(t),l;delete Oi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lr=new WeakMap,Wc=class extends xi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=pi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Lr.get(o);u===void 0&&(u=[],Lr.set(o,u)),u.push({onLoad:e,onError:i})}return o}let a=Hr("img");function c(){h(),e&&e(this);let u=Lr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Lr.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),pi.remove(`image:${t}`);let f=Lr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Lr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pi.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var ca=class extends xi{constructor(t){super(t)}load(t,e,n,i){let s=new ke,o=new Wc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},er=class extends Ce{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},nr=class extends er{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},lu=new yt,Mp=new L,Sp=new L,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Mp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mp),Sp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===zr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(lu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_c=new L,yc=new De,di=new L,la=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_c,yc,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_c,yc,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new L,bp=new Nt,Tp=new Nt,Xe=class extends la{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,bp,Tp),e.subVectors(Tp,bp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Go*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gu=class extends Qr{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ha=class extends er{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},xu=class extends Qr{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}},ua=class extends er{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yi=class extends la{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_u=class extends Qr{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new _u}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Zi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var hu=new WeakMap,fa=class extends xi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=pi.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{hu.has(o)===!0?(i&&i(hu.get(o)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(l),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return pi.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),hu.set(c,l),pi.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});pi.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Nr=-90,Dr=1,jr=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xe(Nr,Dr,t,e);i.layers=this.layers,this.add(i);let s=new Xe(Nr,Dr,t,e);s.layers=this.layers,this.add(s);let o=new Xe(Nr,Dr,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Nr,Dr,t,e);a.layers=this.layers,this.add(a);let c=new Xe(Nr,Dr,t,e);c.layers=this.layers,this.add(c);let l=new Xe(Nr,Dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xc=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var qc=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){De.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let o=this._workIndex*s;De.multiplyQuaternionsFlat(t,o,t,e,t,n),De.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},Ju="\\[\\]\\.:\\/",ux=new RegExp("["+Ju+"]","g"),Qu="[^"+Ju+"]",fx="[^"+Ju.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",Qu),px=/(WCOD+)?/.source.replace("WCOD",fx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),xx=new RegExp("^"+dx+px+mx+gx+"$"),_x=["material","materials","bones","map"],yu=class{constructor(t,e,n){let i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ux,"")}static parseTrackName(t){let e=xx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=yu;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yc=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,o=s.length,a=new Array(o),c={endingStart:zs,endingEnd:zs};for(let l=0;l!==o;++l){let h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Jp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Fl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,o=n===Qp;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===$p){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){let l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(t?i.endingStart=this.zeroSlopeAtStart?Hs:zs:i.endingStart=Xo,e?i.endingEnd=this.zeroSlopeAtEnd?Hs:zs:i.endingEnd=Xo)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}},yx=new Float32Array(1),da=class extends ii{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;g=new qc(me.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new oa(new Float32Array(2),new Float32Array(2),1,yx),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,o=typeof t=="string"?tr.findByName(i,t):t,a=o!==null?o.uuid:t,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fl),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Yc(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?tr.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var rf=class rf{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};rf.prototype.isMatrix2=!0;var vu=rf;var wp=new L,vc=new L,Fr=new L,Ur=new L,uu=new L,vx=new L,Mx=new L,on=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){wp.subVectors(t,this.start),vc.subVectors(this.end,this.start);let n=vc.dot(vc);if(n===0)return 0;let s=vc.dot(wp)/n;return e&&(s=Gt(s,0,1)),s}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=vx,n=Mx){let i=10000000000000001e-32,s,o,a=this.start,c=t.start,l=this.end,h=t.end;Fr.subVectors(l,a),Ur.subVectors(h,c),uu.subVectors(a,c);let u=Fr.dot(Fr),f=Ur.dot(Ur),d=Ur.dot(uu);if(u<=i&&f<=i)return e.copy(a),n.copy(c),e.distanceToSquared(n);if(u<=i)s=0,o=d/f,o=Gt(o,0,1);else{let g=Fr.dot(uu);if(f<=i)o=0,s=Gt(-g/u,0,1);else{let x=Fr.dot(Ur),p=u*f-x*x;p!==0?s=Gt((x*d-g*f)/p,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=Gt(-g/u,0,1)):o>1&&(o=1,s=Gt((x-g)/u,0,1))}}return e.copy(a).addScaledVector(Fr,s),n.copy(c).addScaledVector(Ur,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function ju(r,t,e,n){let i=Sx(n);switch(e){case Bu:return r*t;case so:return r*t/i.components*i.byteLength;case nl:return r*t/i.components*i.byteLength;case _s:return r*t*2/i.components*i.byteLength;case il:return r*t*2/i.components*i.byteLength;case ku:return r*t*3/i.components*i.byteLength;case $n:return r*t*4/i.components*i.byteLength;case sl:return r*t*4/i.components*i.byteLength;case pa:case ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ga:case xa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ol:case cl:return Math.max(r,16)*Math.max(t,8)/4;case rl:case al:return Math.max(r,8)*Math.max(t,8)/2;case ll:case hl:case fl:case dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ul:case _a:case pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ll:case Nl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ya:case Dl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sx(r){switch(r){case en:case Du:return{byteLength:1,components:1};case io:case Fu:case ai:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case oi:case jc:case Bn:return{byteLength:4,components:1};case Uu:case Ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Om(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function bx(r){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];r.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,m_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,__=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ty=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Py=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Tx,alphahash_pars_fragment:wx,alphamap_fragment:Ex,alphamap_pars_fragment:Ax,alphatest_fragment:Rx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Ix,batching_pars_vertex:Lx,batching_vertex:Nx,begin_vertex:Dx,beginnormal_vertex:Fx,bsdfs:Ux,iridescence_fragment:Ox,bumpmap_pars_fragment:Bx,clipping_planes_fragment:kx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Gx,color_pars_fragment:Wx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Zx,displacementmap_vertex:$x,emissivemap_fragment:Jx,emissivemap_pars_fragment:Qx,colorspace_fragment:jx,colorspace_pars_fragment:t_,envmap_fragment:e_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:m_,envmap_vertex:r_,fog_vertex:o_,fog_pars_vertex:a_,fog_fragment:c_,fog_pars_fragment:l_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:u_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:d_,lights_pars_begin:p_,lights_toon_fragment:g_,lights_toon_pars_fragment:x_,lights_phong_fragment:__,lights_phong_pars_fragment:y_,lights_physical_fragment:v_,lights_physical_pars_fragment:M_,lights_fragment_begin:S_,lights_fragment_maps:b_,lights_fragment_end:T_,lightprobes_pars_fragment:w_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:A_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:C_,map_fragment:P_,map_pars_fragment:I_,map_particle_fragment:L_,map_particle_pars_fragment:N_,metalnessmap_fragment:D_,metalnessmap_pars_fragment:F_,morphinstance_vertex:U_,morphcolor_vertex:O_,morphnormal_vertex:B_,morphtarget_pars_vertex:k_,morphtarget_vertex:z_,normal_fragment_begin:H_,normal_fragment_maps:V_,normal_pars_fragment:G_,normal_pars_vertex:W_,normal_vertex:X_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:Y_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:Z_,iridescence_pars_fragment:$_,opaque_fragment:J_,packing:Q_,premultiplied_alpha_fragment:j_,project_vertex:ty,dithering_fragment:ey,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:oy,shadowmap_vertex:ay,shadowmask_pars_fragment:cy,skinbase_vertex:ly,skinning_pars_vertex:hy,skinning_vertex:uy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:xy,transmission_pars_fragment:_y,uv_pars_fragment:yy,uv_pars_vertex:vy,uv_vertex:My,worldpos_vertex:Sy,background_vert:by,background_frag:Ty,backgroundCube_vert:wy,backgroundCube_frag:Ey,cube_vert:Ay,cube_frag:Ry,depth_vert:Cy,depth_frag:Py,distance_vert:Iy,distance_frag:Ly,equirect_vert:Ny,equirect_frag:Dy,linedashed_vert:Fy,linedashed_frag:Uy,meshbasic_vert:Oy,meshbasic_frag:By,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:Hy,meshmatcap_frag:Vy,meshnormal_vert:Gy,meshnormal_frag:Wy,meshphong_vert:Xy,meshphong_frag:qy,meshphysical_vert:Yy,meshphysical_frag:Ky,meshtoon_vert:Zy,meshtoon_frag:$y,points_vert:Jy,points_frag:Qy,shadow_vert:jy,shadow_frag:tv,sprite_vert:ev,sprite_frag:nv},gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Mi={basic:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:mn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:mn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:mn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:mn([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:mn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:mn([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:mn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:mn([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:mn([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:mn([gt.lights,gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mi.physical={uniforms:mn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ol={r:0,b:0,g:0},iv=new yt,Bm=new Bt;Bm.set(-1,0,0,0,1,0,0,0,1);function sv(r,t,e,n,i,s){let o=new At(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function g(_){let M=!1,v=d(_);v===null?p(o,a):v&&v.isColor&&(p(v,1),M=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,M){let v=d(M);v&&v.isCubeTexture?(l===void 0&&(l=new fe(new ms(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:lr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iv.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bm),l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==he,(h!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new fe(new Vi(2,2),new He({name:"BackgroundMaterial",uniforms:lr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(Ol,$u(r)),e.buffers.color.setClear(Ol.r,Ol.g,Ol.b,M,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function rv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(P,C,D,I,U){let k=!1,V=u(P,I,D,C);s!==V&&(s=V,l(s.object)),k=d(P,I,D,U),k&&g(P,I,D,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(P,C,D,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function u(P,C,D,I){let U=I.wireframe===!0,k=n[C.id];k===void 0&&(k={},n[C.id]=k);let V=P.isInstancedMesh===!0?P.id:0,tt=k[V];tt===void 0&&(tt={},k[V]=tt);let W=tt[D.id];W===void 0&&(W={},tt[D.id]=W);let j=W[U];return j===void 0&&(j=f(c()),W[U]=j),j}function f(P){let C=[],D=[],I=[];for(let U=0;U<e;U++)C[U]=0,D[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:I,object:P,attributes:{},index:null}}function d(P,C,D,I){let U=s.attributes,k=C.attributes,V=0,tt=D.getAttributes();for(let W in tt)if(tt[W].location>=0){let et=U[W],xt=k[W];if(xt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),et===void 0||et.attribute!==xt||xt&&et.data!==xt.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function g(P,C,D,I){let U={},k=C.attributes,V=0,tt=D.getAttributes();for(let W in tt)if(tt[W].location>=0){let et=k[W];et===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let xt={};xt.attribute=et,et&&et.data&&(xt.data=et.data),U[W]=xt,V++}s.attributes=U,s.attributesNum=V,s.index=I}function x(){let P=s.newAttributes;for(let C=0,D=P.length;C<D;C++)P[C]=0}function p(P){m(P,0)}function m(P,C){let D=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;D[P]=1,I[P]===0&&(r.enableVertexAttribArray(P),I[P]=1),U[P]!==C&&(r.vertexAttribDivisor(P,C),U[P]=C)}function _(){let P=s.newAttributes,C=s.enabledAttributes;for(let D=0,I=C.length;D<I;D++)C[D]!==P[D]&&(r.disableVertexAttribArray(D),C[D]=0)}function M(P,C,D,I,U,k,V){V===!0?r.vertexAttribIPointer(P,C,D,U,k):r.vertexAttribPointer(P,C,D,I,U,k)}function v(P,C,D,I){x();let U=I.attributes,k=D.getAttributes(),V=C.defaultAttributeValues;for(let tt in k){let W=k[tt];if(W.location>=0){let j=U[tt];if(j===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let et=j.normalized,xt=j.itemSize,It=t.get(j);if(It===void 0)continue;let K=It.buffer,at=It.type,vt=It.bytesPerElement,Ct=at===r.INT||at===r.UNSIGNED_INT||j.gpuType===jc;if(j.isInterleavedBufferAttribute){let pt=j.data,Ot=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Ee=j.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)m(W.location+Et,pt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Et=0;Et<W.locationSize;Et++)p(W.location+Et);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Et=0;Et<W.locationSize;Et++)M(W.location+Et,xt/W.locationSize,at,et,Ot*vt,(Ee+xt/W.locationSize*Et)*vt,Ct)}else{if(j.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt,j.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let pt=0;pt<W.locationSize;pt++)M(W.location+pt,xt/W.locationSize,at,et,xt*vt,xt/W.locationSize*pt*vt,Ct)}}else if(V!==void 0){let et=V[tt];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(W.location,et);break;case 3:r.vertexAttrib3fv(W.location,et);break;case 4:r.vertexAttrib4fv(W.location,et);break;default:r.vertexAttrib1fv(W.location,et)}}}}_()}function S(){E();for(let P in n){let C=n[P];for(let D in C){let I=C[D];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let C=n[P.id];for(let D in C){let I=C[D];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}}delete n[P.id]}function y(P){for(let C in n){let D=n[C];for(let I in D){let U=D[I];if(U[P.id]===void 0)continue;let k=U[P.id];for(let V in k)h(k[V].object),delete k[V];delete U[P.id]}}}function b(P){for(let C in n){let D=n[C],I=P.isInstancedMesh===!0?P.id:0,U=D[I];if(U!==void 0){for(let k in U){let V=U[k];for(let tt in V)h(V[tt].object),delete V[tt];delete U[k]}delete D[I],Object.keys(D).length===0&&delete n[C]}}}function E(){R(),o=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function ov(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function av(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==$n&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==en&&y!==Bn&&!b&&n.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:T}}function cv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Mn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{let _=s?0:n,M=_*4,v=m.clippingState||null;c.value=v,v=h(g,f,M,d);for(let S=0;S!==M;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Ta=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ta(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ms(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:sr});s.uniforms.tEquirect.value=e;let o=new fe(i,s),a=e.minFilter;return e.minFilter===tn&&(e.minFilter=Se),new jr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},gm=256,lv=3,hv=20,km=256,zm=16,uv=3,fv=new L,dv=new At,kl=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jr(1,10,null),this._boxMesh=new fe(new ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=fv}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(dv));let p=new jr(n,i,h);return p.position.copy(a),p.update(c,t),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gm,Yu(t))}_fromTexture(t,e){t.mapping===or||t.mapping===eo?this._setSize(t.image.length===0?gm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xm(t,!1,!1),n=Math.log2(t)-lv;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===or||t.mapping===eo?(this._cubemapMaterial===null&&(this._cubemapMaterial=ym()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_m()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=pv(),this._integrationMaterial=mv());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/zm);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-uv)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(km*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=gv());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function xm(r,t,e){return new Ta(r,{minFilter:tn,generateMipmaps:t,type:ai,colorSpace:Sn,depthBuffer:e})}function wa(r,t,e){return new He({name:r,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Ye,blending:sr,depthTest:!1,depthWrite:!1})}function pv(){return wa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${km}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mv(){return wa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gv(){return wa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _m(){return wa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ym(){return wa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xv(r){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===$c||d===Jc)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new Ta(g.height);return x.fromEquirectangularTexture(r,f),t.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===$c||d===Jc,x=d===or||d===eo;if(g||x){let p=e.get(f),m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new kl(r)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let _=f.image;return g&&_&&_.height>0||x&&_&&c(_)?(n===null&&(n=new kl(r)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===$c?f.mapping=or:d===Jc&&(f.mapping=eo),f}function c(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function _v(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Vs("WebGLRenderer: "+n+" extension not supported."),i}}}function yv(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let x=s.get(g);x&&(t.remove(x),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],r.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let _=x!==null?x.array.length:p.array.length/3-1,M=p.count>=65535?Jo:$o,v=new M(Math.ceil(_/3)*6,1),S=v.array;if(x!==null){let y=x.array;m=x.version;for(let b=0,E=0;b<_;b+=3){let R=y[b+0],P=y[b+1],C=y[b+2];S[E++]=R,S[E++]=P,S[E++]=P,S[E++]=C,S[E++]=C,S[E++]=R}}else{m=p.version;for(let y=0,b=0;y<_;y+=3){let E=y+0,R=y+1,P=y+2;S[b++]=E,S[b++]=R,S[b++]=R,S[b++]=P,S[b++]=P,S[b++]=E}}v.version=m;let T=s.get(g);T&&t.remove(T),s.set(g,v)}function f(g){let x=s.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return s.get(g)}function d(){for(let g in i){let x=i[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:f,dispose:d}}function vv(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function l(u,f,d){d!==0&&(r.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Mv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Sv(r,t,e){let n=new WeakMap,i=new re;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*S*4*u),y=new qs(T,v,S,u);y.type=Bn,y.needsUpdate=!0;let b=M*4;for(let R=0;R<u;R++){let P=p[R],C=m[R],D=_[R],I=v*S*4*R;for(let U=0;U<P.count;U++){let k=U*b;d===!0&&(i.fromBufferAttribute(P,U),T[I+k+0]=i.x,T[I+k+1]=i.y,T[I+k+2]=i.z,T[I+k+3]=0),g===!0&&(i.fromBufferAttribute(C,U),T[I+k+4]=i.x,T[I+k+5]=i.y,T[I+k+6]=i.z,T[I+k+7]=0),x===!0&&(i.fromBufferAttribute(D,U),T[I+k+8]=i.x,T[I+k+9]=i.y,T[I+k+10]=i.z,T[I+k+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:y,size:new Nt(v,S)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function bv(r,t,e,n,i){let s=new WeakMap;function o(l){let h=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Tv={[Eu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Lu]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function wv(r,t,e,n,i,s){let o=new bn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new ue;h.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Re([0,2,0,0,2,0],2));let u=new Uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fe(h,u),d=new Yi(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,_=null,M=[],v=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),c!==null&&c.setSize(S,T);for(let y=0;y<M.length;y++){let b=M[y];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){M=S,v=M.length>0&&M[0].isRenderPass===!0;let T=o.width,y=o.height;M.length>0&&a===null&&(a=new bn(T,y,{type:ai,depthBuffer:!1,stencilBuffer:!1}),c=new bn(T,y,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&M.some(E=>E.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Hi(T,y),s===!0&&(l.format=$i,l.type=cr)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(T,y),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(S,T){if(p||S.toneMapping===_i&&M.length===0)return!1;if(_=T,T!==null){let y=T.width,b=T.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return v===!1&&S.setRenderTarget(o),m=S.toneMapping,S.toneMapping=_i,!0},this.hasRenderPass=function(){return v},this.end=function(S,T){S.toneMapping=m,p=!0;let y=o,b=a;for(let E=0;E<M.length;E++){let R=M[E];R.enabled!==!1&&(R.render(S,b,y,T),R.needsSwap!==!1&&(y=b,b=b===a?c:a))}if(g!==S.outputColorSpace||x!==S.toneMapping){g=S.outputColorSpace,x=S.toneMapping,u.defines={},Yt.getTransfer(g)===he&&(u.defines.SRGB_TRANSFER="");let E=Tv[x];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(f,d),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Hm=new ke,Vm=new Hi(1,1),Gm=new ea(1),Wm=new qs,Xm=new Lc,qm=new ta,vm=[],Mm=[],Sm=new Float32Array(16),bm=new Float32Array(9),Tm=new Float32Array(4);function ao(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=vm[i];if(s===void 0&&(s=new Float32Array(i),vm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ke(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Vl(r,t){let e=Mm[t];e===void 0&&(e=new Int32Array(t),Mm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ev(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Av(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function Rv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function Cv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function Pv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Tm.set(n),r.uniformMatrix2fv(this.addr,!1,Tm),Ze(e,n)}}function Iv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;bm.set(n),r.uniformMatrix3fv(this.addr,!1,bm),Ze(e,n)}}function Lv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,n))return;Sm.set(n),r.uniformMatrix4fv(this.addr,!1,Sm),Ze(e,n)}}function Nv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Dv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function Fv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function Uv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function Ov(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function zv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function Gl(r){return r.version===0&&(r.compareFunction=Gu,r.needsUpdate=!0),r}function Hv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Gl(Vm):s=Hm,e.setTexture2D(t||s,i)}function Vv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xm,i)}function Gv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Gl(Gm):s=qm,e.setTextureCube(t||s,i)}function Wv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wm,i)}function Xv(r){switch(r){case 5126:return Ev;case 35664:return Av;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Iv;case 35676:return Lv;case 5124:case 35670:return Nv;case 35667:case 35671:return Dv;case 35668:case 35672:return Fv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return Bv;case 36295:return kv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}function qv(r,t){r.uniform1fv(this.addr,t)}function Yv(r,t){let e=ao(t,this.size,2);r.uniform2fv(this.addr,e)}function Kv(r,t){let e=ao(t,this.size,3);r.uniform3fv(this.addr,e)}function Zv(r,t){let e=ao(t,this.size,4);r.uniform4fv(this.addr,e)}function $v(r,t){let e=ao(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Jv(r,t){let e=ao(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qv(r,t){let e=ao(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function jv(r,t){r.uniform1iv(this.addr,t)}function tM(r,t){r.uniform2iv(this.addr,t)}function eM(r,t){r.uniform3iv(this.addr,t)}function nM(r,t){r.uniform4iv(this.addr,t)}function iM(r,t){r.uniform1uiv(this.addr,t)}function sM(r,t){r.uniform2uiv(this.addr,t)}function rM(r,t){r.uniform3uiv(this.addr,t)}function oM(r,t){r.uniform4uiv(this.addr,t)}function aM(r,t,e){let n=this.cache,i=t.length,s=Vl(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Gl(Vm):o=Hm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function cM(r,t,e){let n=this.cache,i=t.length,s=Vl(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xm,s[o])}function lM(r,t,e){let n=this.cache,i=t.length,s=Vl(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=Gl(Gm):o=qm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function hM(r,t,e){let n=this.cache,i=t.length,s=Vl(e,i);Ke(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wm,s[o])}function uM(r){switch(r){case 5126:return qv;case 35664:return Yv;case 35665:return Kv;case 35666:return Zv;case 35674:return $v;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return jv;case 35667:case 35671:return tM;case 35668:case 35672:return eM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return sM;case 36295:return rM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return hM}}var cf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xv(e.type)}},lf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uM(e.type)}},hf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},of=/(\w+)(\])?(\[|\.)?/g;function wm(r,t){r.seq.push(t),r.map[t.id]=t}function fM(r,t,e){let n=r.name,i=n.length;for(of.lastIndex=0;;){let s=of.exec(n),o=of.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wm(e,l===void 0?new cf(a,r,t):new lf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new hf(a),wm(e,u)),e=u}}}var oo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);fM(a,c,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Em(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var dM=37297,pM=0;function mM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Am=new Bt;function gM(r){Yt._getMatrix(Am,Yt.workingColorSpace,r);let t=`mat3( ${Am.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case qo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rm(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+mM(r.getShaderSource(t),a)}else return s}function xM(r,t){let e=gM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var _M={[Eu]:"Linear",[Au]:"Reinhard",[Ru]:"Cineon",[Cu]:"ACESFilmic",[Iu]:"AgX",[Lu]:"Neutral",[Pu]:"Custom"};function yM(r,t){let e=_M[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bl=new L;function vM(){Yt.getLuminanceCoefficients(Bl);let r=Bl.x.toFixed(4),t=Bl.y.toFixed(4),e=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function SM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ba(r){return r!==""}function Cm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(r){return r.replace(TM,wM)}function wM(r,t){let e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return uf(e)}var EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(r){return r.replace(EM,AM)}function AM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Lm(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var RM={[ir]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function CM(r){return RM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var PM={[eo]:"ENVMAP_MODE_REFRACTION"};function IM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var LM={[Zc]:"ENVMAP_BLENDING_MULTIPLY",[Yp]:"ENVMAP_BLENDING_MIX",[Kp]:"ENVMAP_BLENDING_ADD"};function NM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LM[r.combine]||"ENVMAP_BLENDING_NONE"}function DM(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=CM(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=IM(e),u=NM(e),f=MM(e),d=SM(s),g=i.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ba).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(x=[Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_i?"#define TONE_MAPPING":"",e.toneMapping!==_i?Ht.tonemapping_pars_fragment:"",e.toneMapping!==_i?yM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,xM("linearToOutputTexel",e.outputColorSpace),vM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ba).join(`
`)),o=uf(o),o=Cm(o,e),o=Pm(o,e),a=uf(a),a=Cm(a,e),a=Pm(a,e),o=Im(o),a=Im(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=m+x+o,M=m+p+a,v=Em(i,i.VERTEX_SHADER,_),S=Em(i,i.FRAGMENT_SHADER,M);i.attachShader(g,v),i.attachShader(g,S),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(R){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(g)||"",C=i.getShaderInfoLog(v)||"",D=i.getShaderInfoLog(S)||"",I=P.trim(),U=C.trim(),k=D.trim(),V=!0,tt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,v,S);else{let W=Rm(i,v,"vertex"),j=Rm(i,S,"fragment");Ut("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+j)}else I!==""?Rt("WebGLProgram: Program Info Log:",I):(U===""||k==="")&&(tt=!1);tt&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:U,prefix:x},fragmentShader:{log:k,prefix:p}})}i.deleteShader(v),i.deleteShader(S),y=new oo(i,g),b=bM(i,g)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,dM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=S,this}var FM=0,ff=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new df(t),e.set(t,n)),n}},df=class{constructor(t){this.id=FM++,this.code=t,this.usedTimes=0}};function UM(r){return r===_s||r===_a||r===ya}function OM(r,t,e,n,i,s){let o=new Ko,a=new ff,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,b,E,R,P,C){let D=R.fog,I=P.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||U,k),tt=f[y.type],W=n.precision;y.precision!==null&&(W=n.getMaxPrecision(y.precision),W!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=j!==void 0?j.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let It,K,at,vt;if(tt){let mt=Mi[tt];It=mt.vertexShader,K=mt.fragmentShader}else{It=y.vertexShader,K=y.fragmentShader;let mt=a.getVertexShaderStage(y),pe=a.getFragmentShaderStage(y);a.update(y,mt,pe),at=mt.id,vt=pe.id}let Ct=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Ot=P.isInstancedMesh===!0,Ee=P.isBatchedMesh===!0,Et=!!y.map,Xt=!!y.matcap,$t=!!V,zt=$t&&V.isPMREMTexture===!0,Ie=!!y.aoMap,Le=!!y.lightMap,qe=!!y.bumpMap&&y.wireframe===!1,ee=!!y.normalMap,ln=!!y.displacementMap,be=!!y.emissiveMap,Ue=!!y.metalnessMap,Rn=!!y.roughnessMap,_n=y.anisotropy>0,B=y.clearcoat>0,Nn=y.diffuseRoughness>0,xe=y.dispersion>0,rt=y.retroreflectivity>0,Q=y.iridescence>0,Zt=y.sheen>0,St=y.transmission>0,Dt=_n&&!!y.anisotropyMap,N=B&&!!y.clearcoatMap,w=B&&!!y.clearcoatNormalMap,z=B&&!!y.clearcoatRoughnessMap,nt=Nn&&!!y.diffuseRoughnessMap,J=Q&&!!y.iridescenceMap,st=Q&&!!y.iridescenceThicknessMap,ct=Zt&&!!y.sheenColorMap,q=Zt&&!!y.sheenRoughnessMap,Z=!!y.specularMap,lt=!!y.specularColorMap,F=!!y.specularIntensityMap,$=St&&!!y.transmissionMap,Y=St&&!!y.thicknessMap,ut=!!y.gradientMap,ot=!!y.alphaMap,ht=y.alphaTest>0,Pt=!!y.alphaHash,qt=!!y.extensions,it=_i;y.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(it=r.toneMapping);let Lt=zt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Wt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:It,fragmentShader:K,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:Ee,batchingColor:Ee&&P._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&P.instanceColor!==null,instancingMorph:Ot&&P.morphTexture!==null,outputColorSpace:Ct===null?r.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:Xt,envMap:$t,envMapMode:$t&&V.mapping,envMapPMREM:zt,envMapMaxLod:zt?Lt.length-1:null,envMapSize:zt?Lt[0].width:null,aoMap:Ie,lightMap:Le,bumpMap:qe,normalMap:ee,displacementMap:ln,emissiveMap:be,normalMapObjectSpace:ee&&y.normalMapType===em,normalMapTangentSpace:ee&&y.normalMapType===Ma,packedNormalMap:ee&&y.normalMapType===Ma&&UM(y.normalMap.format),metalnessMap:Ue,roughnessMap:Rn,anisotropy:_n,anisotropyMap:Dt,clearcoat:B,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:z,diffuseRoughness:Nn,diffuseRoughnessMap:nt,dispersion:xe,retroreflection:rt,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:st,sheen:Zt,sheenColorMap:ct,sheenRoughnessMap:q,specularMap:Z,specularColorMap:lt,specularIntensityMap:F,transmission:St,transmissionMap:$,thicknessMap:Y,gradientMap:ut,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Pt,combine:y.combine,mapUv:Et&&d(y.map.channel),aoMapUv:Ie&&d(y.aoMap.channel),lightMapUv:Le&&d(y.lightMap.channel),bumpMapUv:qe&&d(y.bumpMap.channel),normalMapUv:ee&&d(y.normalMap.channel),displacementMapUv:ln&&d(y.displacementMap.channel),emissiveMapUv:be&&d(y.emissiveMap.channel),metalnessMapUv:Ue&&d(y.metalnessMap.channel),roughnessMapUv:Rn&&d(y.roughnessMap.channel),anisotropyMapUv:Dt&&d(y.anisotropyMap.channel),clearcoatMapUv:N&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:w&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:J&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(y.sheenRoughnessMap.channel),specularMapUv:Z&&d(y.specularMap.channel),specularColorMapUv:lt&&d(y.specularColorMap.channel),specularIntensityMapUv:F&&d(y.specularIntensityMap.channel),transmissionMapUv:$&&d(y.transmissionMap.channel),thicknessMapUv:Y&&d(y.thicknessMap.channel),alphaMapUv:ot&&d(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ee||_n),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Et||ot),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&ee===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(mt=>mt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pe,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||Ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let E in y.defines)b.push(E),b.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(p(b,y),m(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function m(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let b=f[y.type],E;if(b){let R=Mi[b];E=dm.clone(R.uniforms)}else E=y.uniforms;return E}function M(y,b){let E=h.get(b);return E!==void 0?++E.usedTimes:(E=new DM(r,b,y,i),l.push(E),h.set(b,E)),E}function v(y){if(--y.usedTimes===0){let b=l.indexOf(y);l[b]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:T}}function BM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function kM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Nm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Dm(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,p,m){let _=r[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},r[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=g,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=p,_.group=m),t++,_}function c(f,d,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);let M=a(f,d,g,x,p,m);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):e.push(M)}function l(f,d,g,x,p,m){let _=a(f,d,g,x,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||kM),n.length>1&&n.sort(d||Nm),i.length>1&&i.sort(d||Nm)}function u(){for(let f=t,d=r.length;f<d;f++){let g=r[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function zM(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Dm,r.set(n,[o])):i>=s.length?(o=new Dm,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function HM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function VM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var GM=0;function WM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function XM(r){let t=new HM,e=VM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,s=new yt,o=new yt;function a(l){let h=0,u=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,_=0,M=0,v=0,S=0,T=0,y=0,b=0,E=0,R=0;l.sort(WM);for(let C=0,D=l.length;C<D;C++){let I=l[C],U=I.color,k=I.intensity,V=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_s?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*k,u+=U.g*k,f+=U.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],k);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,et=e.get(I);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=tt;let xt=j.getViewportCount();for(let It=0;It<xt;It++)n.sunShadowMatrix[x+It]=j.getMatrix(It),n.sunShadowCascade[x+It]=j._cascadeData[It];x+=xt,g++}n.sun[d]=W,d++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,et=e.get(I);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;let j=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=tt,y++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[M]=W,M++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let j=I.shadow,et=e.get(I);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[v]=W,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==T||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=M,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=T,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=R,n.version=GM++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let _=0,M=l.length;_<M;_++){let v=l[_];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Fm(r){let t=new XM(r),e=[],n=[],i=[];function s(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function c(){t.setup(e),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function qM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Fm(r),t.set(i,[a])):s>=o.length?(a=new Fm(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],$M=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Um=new yt,Sa=new L,af=new L;function JM(r,t,e){let n=new ds,i=new Nt,s=new Nt,o=new re,a=new Oc,c=new Bc,l={},h=e.maxTextureSize,u={[Un]:Ye,[Ye]:Un,[Pe]:Pe},f=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:YM,fragmentShader:KM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ue;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new fe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(T,y,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Rp&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let E=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),C=r.state;C.setBlending(sr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let D=m!==this.type;D&&y.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=T.length;I<U;I++){let k=T[I],V=k.shadow;if(V===void 0){Rt("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let tt=V.getFrameExtents();i.multiply(tt),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/tt.x),i.x=s.x*tt.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/tt.y),i.y=s.y*tt.y,V.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===to){if(k.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bn(i.x,i.y,{format:_s,type:ai,minFilter:Se,magFilter:Se,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new Hi(i.x,i.y,Bn),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=ki,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be}else k.isPointLight?(V.map=new Ta(i.x),V.map.depthTexture=new ea(i.x,oi)):(V.map=new bn(i.x,i.y),V.map.depthTexture=new Hi(i.x,i.y,oi)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=ki,this.type===ir?(V.map.depthTexture.compareFunction=W?Vu:Hu,V.map.depthTexture.minFilter=Se,V.map.depthTexture.magFilter=Se):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,b);let et=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let xt=0;xt<j;xt++){let It=V.getCamera(xt);if(k.isPointLight){let K=V.camera,at=V.matrix,vt=k.distance||K.far;vt!==K.far&&(K.far=vt,K.updateProjectionMatrix()),Sa.setFromMatrixPosition(k.matrixWorld),K.position.copy(Sa),af.copy(K.position),af.add(ZM[xt]),K.up.copy($M[xt]),K.lookAt(af),K.updateMatrixWorld(),at.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Um.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Um,K.coordinateSystem,K.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(V.map),r.clear());let K=V.getViewport(xt);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),C.viewport(o)}n=V.getFrustum(xt),v(y,b,It,k,et,this.type)}V.isPointLightShadow!==!0&&this.type===to&&_(V,b),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(E,R,P)};function _(T,y){let b=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(i.x,i.y,{format:_s,type:ai}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(y,null,b,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(y,null,b,d,x,null)}function M(T,y,b,E){let R=null,P=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=b.isPointLight===!0?c:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let C=R.uuid,D=y.uuid,I=l[C];I===void 0&&(I={},l[C]=I);let U=I[D];U===void 0&&(U=R.clone(),I[D]=U,y.addEventListener("dispose",S)),R=U}if(R.visible=y.visible,R.wireframe=y.wireframe,E===to?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:u[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=r.properties.get(R);C.light=b}return R}function v(T,y,b,E,R,P){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===to)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),U=T.material;if(Array.isArray(U)){let k=I.groups;for(let V=0,tt=k.length;V<tt;V++){let W=k[V],j=U[W.materialIndex];if(j&&j.visible){let et=M(T,j,E,P);T.onBeforeShadow(r,T,y,b,I,et,W),r.renderBufferDirect(b,null,I,et,T,W),T.onAfterShadow(r,T,y,b,I,et,W)}}}else if(U.visible){let k=M(T,U,E,P);T.onBeforeShadow(r,T,y,b,I,k,null),r.renderBufferDirect(b,null,I,k,T,null),T.onAfterShadow(r,T,y,b,I,k,null)}}let D=T.children;for(let I=0,U=D.length;I<U;I++)v(D[I],y,b,E,R,P)}function S(T){T.target.removeEventListener("dispose",S);for(let b in l){let E=l[b],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function QM(r,t){function e(){let F=!1,$=new re,Y=null,ut=new re(0,0,0,0);return{setMask:function(ot){Y!==ot&&!F&&(r.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){F=ot},setClear:function(ot,ht,Pt,qt,it){it===!0&&(ot*=qt,ht*=qt,Pt*=qt),$.set(ot,ht,Pt,qt),ut.equals($)===!1&&(r.clearColor(ot,ht,Pt,qt),ut.copy($))},reset:function(){F=!1,Y=null,ut.set(-1,0,0,0)}}}function n(){let F=!1,$=!1,Y=null,ut=null,ot=null;return{setReversed:function(ht){if($!==ht){let Pt=t.get("EXT_clip_control");ht?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),$=ht;let qt=ot;ot=null,this.setClear(qt)}},getReversed:function(){return $},setTest:function(ht){ht?pt(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!F&&(r.depthMask(ht),Y=ht)},setFunc:function(ht){if($&&(ht=um[ht]),ut!==ht){switch(ht){case bc:r.depthFunc(r.NEVER);break;case Tc:r.depthFunc(r.ALWAYS);break;case wc:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case Ec:r.depthFunc(r.EQUAL);break;case Ac:r.depthFunc(r.GEQUAL);break;case Rc:r.depthFunc(r.GREATER);break;case Cc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=ht}},setLocked:function(ht){F=ht},setClear:function(ht){ot!==ht&&(ot=ht,$&&(ht=1-ht),r.clearDepth(ht))},reset:function(){F=!1,Y=null,ut=null,ot=null,$=!1}}}function i(){let F=!1,$=null,Y=null,ut=null,ot=null,ht=null,Pt=null,qt=null,it=null;return{setTest:function(Lt){F||(Lt?pt(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(Lt){$!==Lt&&!F&&(r.stencilMask(Lt),$=Lt)},setFunc:function(Lt,Wt,mt){(Y!==Lt||ut!==Wt||ot!==mt)&&(r.stencilFunc(Lt,Wt,mt),Y=Lt,ut=Wt,ot=mt)},setOp:function(Lt,Wt,mt){(ht!==Lt||Pt!==Wt||qt!==mt)&&(r.stencilOp(Lt,Wt,mt),ht=Lt,Pt=Wt,qt=mt)},setLocked:function(Lt){F=Lt},setClear:function(Lt){it!==Lt&&(r.clearStencil(Lt),it=Lt)},reset:function(){F=!1,$=null,Y=null,ut=null,ot=null,ht=null,Pt=null,qt=null,it=null}}}let s=new e,o=new n,a=new i,c={},l=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,v=null,S=null,T=null,y=null,b=new At(0,0,0),E=0,R=!1,P=null,C=null,D=null,I=null,U=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=tt>=2);let j=null,et={},xt=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),K=new re().fromArray(xt),at=new re().fromArray(It);function vt(F,$,Y,ut){let ot=new Uint8Array(4),ht=r.createTexture();r.bindTexture(F,ht),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<Y;Pt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D($,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D($+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return ht}let Ct={};Ct[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),Ct[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ct[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(r.DEPTH_TEST),o.setFunc(Br),qe(!1),ee(Mu),pt(r.CULL_FACE),Ie(sr);function pt(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Ot(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ee(F,$){return f[F]!==$?(r.bindFramebuffer(F,$),f[F]=$,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=$),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=$),!0):!1}function Et(F,$){let Y=g,ut=!1;if(F){Y=d.get($),Y===void 0&&(Y=[],d.set($,Y));let ot=F.textures;if(Y.length!==ot.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Pt=ot.length;ht<Pt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=ot.length,ut=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ut=!0);ut&&r.drawBuffers(Y)}function Xt(F){return x!==F?(r.useProgram(F),x=F,!0):!1}let $t={[rr]:r.FUNC_ADD,[Pp]:r.FUNC_SUBTRACT,[Ip]:r.FUNC_REVERSE_SUBTRACT};$t[Lp]=r.MIN,$t[Np]=r.MAX;let zt={[Dp]:r.ZERO,[Fp]:r.ONE,[Up]:r.SRC_COLOR,[Tu]:r.SRC_ALPHA,[Vp]:r.SRC_ALPHA_SATURATE,[zp]:r.DST_COLOR,[Bp]:r.DST_ALPHA,[Op]:r.ONE_MINUS_SRC_COLOR,[wu]:r.ONE_MINUS_SRC_ALPHA,[Hp]:r.ONE_MINUS_DST_COLOR,[kp]:r.ONE_MINUS_DST_ALPHA,[Gp]:r.CONSTANT_COLOR,[Wp]:r.ONE_MINUS_CONSTANT_COLOR,[Xp]:r.CONSTANT_ALPHA,[qp]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(F,$,Y,ut,ot,ht,Pt,qt,it,Lt){if(F===sr){p===!0&&(Ot(r.BLEND),p=!1);return}if(p===!1&&(pt(r.BLEND),p=!0),F!==Cp){if(F!==m||Lt!==R){if((_!==rr||S!==rr)&&(r.blendEquation(r.FUNC_ADD),_=rr,S=rr),Lt)switch(F){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case On:r.blendFunc(r.ONE,r.ONE);break;case Su:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",F);break}else switch(F){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case On:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Su:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",F);break}M=null,v=null,T=null,y=null,b.set(0,0,0),E=0,m=F,R=Lt}return}ot=ot||$,ht=ht||Y,Pt=Pt||ut,($!==_||ot!==S)&&(r.blendEquationSeparate($t[$],$t[ot]),_=$,S=ot),(Y!==M||ut!==v||ht!==T||Pt!==y)&&(r.blendFuncSeparate(zt[Y],zt[ut],zt[ht],zt[Pt]),M=Y,v=ut,T=ht,y=Pt),(qt.equals(b)===!1||it!==E)&&(r.blendColor(qt.r,qt.g,qt.b,it),b.copy(qt),E=it),m=F,R=!1}function Le(F,$){F.side===Pe?Ot(r.CULL_FACE):pt(r.CULL_FACE);let Y=F.side===Ye;$&&(Y=!Y),qe(Y),F.blending===xs&&F.transparent===!1?Ie(sr):Ie(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ut=F.stencilWrite;a.setTest(ut),ut&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){P!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),P=F)}function ee(F){F!==Ep?(pt(r.CULL_FACE),F!==C&&(F===Mu?r.cullFace(r.BACK):F===Ap?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),C=F}function ln(F){F!==D&&(V&&r.lineWidth(F),D=F)}function be(F,$,Y){F?(pt(r.POLYGON_OFFSET_FILL),(I!==$||U!==Y)&&(I=$,U=Y,o.getReversed()&&($=-$,Y=-Y),r.polygonOffset($,Y))):Ot(r.POLYGON_OFFSET_FILL)}function Ue(F){F?pt(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function Rn(F){F===void 0&&(F=r.TEXTURE0+k-1),j!==F&&(r.activeTexture(F),j=F)}function _n(F,$,Y){Y===void 0&&(j===null?Y=r.TEXTURE0+k-1:Y=j);let ut=et[Y];ut===void 0&&(ut={type:void 0,texture:void 0},et[Y]=ut),(ut.type!==F||ut.texture!==$)&&(j!==Y&&(r.activeTexture(Y),j=Y),r.bindTexture(F,$||Ct[F]),ut.type=F,ut.texture=$)}function B(){let F=et[j];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Nn(){try{r.compressedTexImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function xe(){try{r.compressedTexImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function rt(){try{r.texSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Q(){try{r.texSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Zt(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function St(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Dt(){try{r.texStorage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function N(){try{r.texStorage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function w(){try{r.texImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function z(){try{r.texImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function nt(F){return u[F]!==void 0?u[F]:r.getParameter(F)}function J(F,$){u[F]!==$&&(r.pixelStorei(F,$),u[F]=$)}function st(F){K.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function ct(F){at.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),at.copy(F))}function q(F,$){let Y=l.get($);Y===void 0&&(Y=new WeakMap,l.set($,Y));let ut=Y.get(F);ut===void 0&&(ut=r.getUniformBlockIndex($,F.name),r.uniformBlockBinding($,ut,ut),Y.set(F,ut))}function Z(F,$,Y){let ot=l.get($).get(F);c[ot]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,ot,Y),c[ot]=Y)}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,et={},f={},c={},d=new WeakMap,g=[],x=null,p=!1,m=null,_=null,M=null,v=null,S=null,T=null,y=null,b=new At(0,0,0),E=0,R=!1,P=null,C=null,D=null,I=null,U=null,K.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:Ot,bindFramebuffer:Ee,drawBuffers:Et,useProgram:Xt,setBlending:Ie,setMaterial:Le,setFlipSided:qe,setCullFace:ee,setLineWidth:ln,setPolygonOffset:be,setScissorTest:Ue,activeTexture:Rn,bindTexture:_n,unbindTexture:B,compressedTexImage2D:Nn,compressedTexImage3D:xe,texImage2D:w,texImage3D:z,pixelStorei:J,getParameter:nt,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:Dt,texStorage3D:N,texSubImage2D:rt,texSubImage3D:Q,compressedTexSubImage2D:Zt,compressedTexSubImage3D:St,scissor:st,viewport:ct,reset:lt}}function jM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,x=new FinalizationRegistry(N=>g.delete(N)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,w){return p?new OffscreenCanvas(N,w):Hr("canvas")}function _(N,w,z){let nt=1,J=Dt(N);if((J.width>z||J.height>z)&&(nt=z/Math.max(J.width,J.height)),nt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let st=Math.floor(nt*J.width),ct=Math.floor(nt*J.height);f===void 0&&(f=m(st,ct));let q=w?m(st,ct):f;return q.width=st,q.height=ct,q.getContext("2d").drawImage(N,0,0,st,ct),Rt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+ct+")."),q}else return"data"in N&&Rt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(N,w,z,nt,J,st=!1){if(N!==null){if(r[N]!==void 0)return r[N];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct;nt&&(ct=t.get("EXT_texture_norm16"),ct||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=w;if(w===r.RED&&(z===r.FLOAT&&(q=r.R32F),z===r.HALF_FLOAT&&(q=r.R16F),z===r.UNSIGNED_BYTE&&(q=r.R8),z===r.UNSIGNED_SHORT&&ct&&(q=ct.R16_EXT),z===r.SHORT&&ct&&(q=ct.R16_SNORM_EXT)),w===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.R8UI),z===r.UNSIGNED_SHORT&&(q=r.R16UI),z===r.UNSIGNED_INT&&(q=r.R32UI),z===r.BYTE&&(q=r.R8I),z===r.SHORT&&(q=r.R16I),z===r.INT&&(q=r.R32I)),w===r.RG&&(z===r.FLOAT&&(q=r.RG32F),z===r.HALF_FLOAT&&(q=r.RG16F),z===r.UNSIGNED_BYTE&&(q=r.RG8),z===r.UNSIGNED_SHORT&&ct&&(q=ct.RG16_EXT),z===r.SHORT&&ct&&(q=ct.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RG8UI),z===r.UNSIGNED_SHORT&&(q=r.RG16UI),z===r.UNSIGNED_INT&&(q=r.RG32UI),z===r.BYTE&&(q=r.RG8I),z===r.SHORT&&(q=r.RG16I),z===r.INT&&(q=r.RG32I)),w===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(q=r.RGB16UI),z===r.UNSIGNED_INT&&(q=r.RGB32UI),z===r.BYTE&&(q=r.RGB8I),z===r.SHORT&&(q=r.RGB16I),z===r.INT&&(q=r.RGB32I)),w===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),z===r.UNSIGNED_INT&&(q=r.RGBA32UI),z===r.BYTE&&(q=r.RGBA8I),z===r.SHORT&&(q=r.RGBA16I),z===r.INT&&(q=r.RGBA32I)),w===r.RGB&&(z===r.UNSIGNED_SHORT&&ct&&(q=ct.RGB16_EXT),z===r.SHORT&&ct&&(q=ct.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),w===r.RGBA){let Z=st?qo:Yt.getTransfer(J);z===r.FLOAT&&(q=r.RGBA32F),z===r.HALF_FLOAT&&(q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(q=Z===he?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ct&&(q=ct.RGBA16_EXT),z===r.SHORT&&ct&&(q=ct.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(N,w){let z;return N?w===null||w===oi||w===cr?z=r.DEPTH24_STENCIL8:w===Bn?z=r.DEPTH32F_STENCIL8:w===io&&(z=r.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===oi||w===cr?z=r.DEPTH_COMPONENT24:w===Bn?z=r.DEPTH_COMPONENT32F:w===io&&(z=r.DEPTH_COMPONENT16),z}function b(N,w){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Be&&N.minFilter!==Se?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function E(N){let w=new WeakRef(N);n.get(N).__ref=w,g.add(w),x.register(N,w,w)}function R(N){let w=n.get(N).__ref;w!==void 0&&(g.delete(w),x.unregister(w))}function P(N){D(N.target)}function C(N){I(N.target)}function D(N){N.removeEventListener("dispose",P),R(N),k(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function I(N){N.removeEventListener("dispose",C),R(N),tt(N)}function U(){for(let N of g){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):D(w))}g.clear(),u.clear()}function k(N){let w=n.get(N);if(w.__webglInit===void 0)return;let z=N.source,nt=d.get(z);if(nt){let J=nt[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(N),Object.keys(nt).length===0&&d.delete(z)}n.remove(N)}function V(N){let w=n.get(N);r.deleteTexture(w.__webglTexture);let z=N.source,nt=d.get(z);delete nt[w.__cacheKey],o.memory.textures--}function tt(N){let w=n.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let z=N.depthTexture;if(z&&z.renderTarget===N&&D(z),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let st=0;st<w.__webglFramebuffer[J].length;st++)r.deleteFramebuffer(w.__webglFramebuffer[J][st]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let nt=N.textures;for(let J=0,st=nt.length;J<st;J++){let ct=n.get(nt[J]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(nt[J])}n.remove(N)}let W=0;function j(){W=0}function et(){return W}function xt(N){W=N}function It(){let N=W;return N>=i.maxTextures&&Rt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,N}function K(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function at(N,w){let z=n.get(N);if(N.isVideoTexture&&Zt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&z.__version!==N.version){let nt=N.image;if(nt===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(z,N,w);return}}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+w)}function vt(N,w){let z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){Le(z,N,w);return}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+w)}function Ct(N,w){let z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){Le(z,N,w);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+w)}function pt(N,w){let z=n.get(N);if(N.version>0&&z.__version!==N.version){qe(z,N,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+w)}let Ot={[Zn]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[kr]:r.MIRRORED_REPEAT},Ee={[Be]:r.NEAREST,[Qc]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[Se]:r.LINEAR,[no]:r.LINEAR_MIPMAP_NEAREST,[tn]:r.LINEAR_MIPMAP_LINEAR},Et={[im]:r.NEVER,[Gu]:r.ALWAYS,[sm]:r.LESS,[Hu]:r.LEQUAL,[rm]:r.EQUAL,[Vu]:r.GEQUAL,[om]:r.GREATER,[am]:r.NOTEQUAL};function Xt(N,w){if(w.type===Bn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Se||w.magFilter===no||w.magFilter===ar||w.magFilter===tn||w.minFilter===Se||w.minFilter===no||w.minFilter===ar||w.minFilter===tn)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Ot[w.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Ot[w.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Ot[w.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ee[w.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ee[w.minFilter]),w.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Be||w.minFilter!==ar&&w.minFilter!==tn||w.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $t(N,w){let z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",P),E(w));let nt=w.source,J=d.get(nt);J===void 0&&(J={},d.set(nt,J));let st=K(w);if(st!==N.__cacheKey){J[st]===void 0&&(J[st]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[st].usedTimes++;let ct=J[N.__cacheKey];ct!==void 0&&(J[N.__cacheKey].usedTimes--,ct.usedTimes===0&&V(w)),N.__cacheKey=st,N.__webglTexture=J[st].texture}return z}function zt(N,w,z){return Math.floor(Math.floor(N/z)/w)}function Ie(N,w,z,nt){let st=N.updateRanges;if(st.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,z,nt,w.data);else{st.sort((F,$)=>F.start-$.start);let ct=0;for(let F=1;F<st.length;F++){let $=st[ct],Y=st[F],ut=$.start+$.count,ot=zt(Y.start,w.width,4),ht=zt($.start,w.width,4);Y.start<=ut+1&&ot===ht&&zt(Y.start+Y.count-1,w.width,4)===ot?$.count=Math.max($.count,Y.start+Y.count-$.start):(++ct,st[ct]=Y)}st.length=ct+1;let q=e.getParameter(r.UNPACK_ROW_LENGTH),Z=e.getParameter(r.UNPACK_SKIP_PIXELS),lt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let F=0,$=st.length;F<$;F++){let Y=st[F],ut=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),ht=ut%w.width,Pt=Math.floor(ut/w.width),qt=ot,it=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(r.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(r.TEXTURE_2D,0,ht,Pt,qt,it,z,nt,w.data)}N.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(r.UNPACK_SKIP_ROWS,lt)}}function Le(N,w,z){let nt=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(nt=r.TEXTURE_3D);let J=$t(N,w),st=w.source;e.bindTexture(nt,N.__webglTexture,r.TEXTURE0+z);let ct=n.get(st);if(st.version!==ct.__version||J===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let it=Yt.getPrimaries(Yt.workingColorSpace),Lt=w.colorSpace===kn?null:Yt.getPrimaries(w.colorSpace),Wt=w.colorSpace===kn||it===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let Z=_(w.image,!1,i.maxTextureSize);Z=St(w,Z);let lt=s.convert(w.format,w.colorSpace),F=s.convert(w.type),$=T(w.internalFormat,lt,F,w.normalized,w.colorSpace,w.isVideoTexture);Xt(nt,w);let Y,ut=w.mipmaps,ot=w.isVideoTexture!==!0,ht=ct.__version===void 0||J===!0,Pt=st.dataReady,qt=b(w,Z);if(w.isDepthTexture)$=y(w.format===$i,w.type),ht&&(ot?e.texStorage2D(r.TEXTURE_2D,1,$,Z.width,Z.height):e.texImage2D(r.TEXTURE_2D,0,$,Z.width,Z.height,0,lt,F,null));else if(w.isDataTexture)if(ut.length>0){ot&&ht&&e.texStorage2D(r.TEXTURE_2D,qt,$,ut[0].width,ut[0].height);for(let it=0,Lt=ut.length;it<Lt;it++)Y=ut[it],ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Y.width,Y.height,lt,F,Y.data):e.texImage2D(r.TEXTURE_2D,it,$,Y.width,Y.height,0,lt,F,Y.data);w.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(r.TEXTURE_2D,qt,$,Z.width,Z.height),Pt&&Ie(w,Z,lt,F)):e.texImage2D(r.TEXTURE_2D,0,$,Z.width,Z.height,0,lt,F,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,$,ut[0].width,ut[0].height,Z.depth);for(let it=0,Lt=ut.length;it<Lt;it++)if(Y=ut[it],w.format!==$n)if(lt!==null)if(ot){if(Pt)if(w.layerUpdates.size>0){let Wt=ju(Y.width,Y.height,w.format,w.type);for(let mt of w.layerUpdates){let pe=Y.data.subarray(mt*Wt/Y.data.BYTES_PER_ELEMENT,(mt+1)*Wt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,mt,Y.width,Y.height,1,lt,pe)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,Z.depth,lt,Y.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,$,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Pt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,Y.width,Y.height,Z.depth,lt,F,Y.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,$,Y.width,Y.height,Z.depth,0,lt,F,Y.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(r.TEXTURE_2D,qt,$,ut[0].width,ut[0].height);for(let it=0,Lt=ut.length;it<Lt;it++)Y=ut[it],w.format!==$n?lt!==null?ot?Pt&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,Y.width,Y.height,lt,Y.data):e.compressedTexImage2D(r.TEXTURE_2D,it,$,Y.width,Y.height,0,Y.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Y.width,Y.height,lt,F,Y.data):e.texImage2D(r.TEXTURE_2D,it,$,Y.width,Y.height,0,lt,F,Y.data)}else if(w.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,$,Z.width,Z.height,Z.depth),Pt)if(w.layerUpdates.size>0){let it=ju(Z.width,Z.height,w.format,w.type);for(let Lt of w.layerUpdates){let Wt=Z.data.subarray(Lt*it/Z.data.BYTES_PER_ELEMENT,(Lt+1)*it/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Lt,Z.width,Z.height,1,lt,F,Wt)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,F,Z.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,lt,F,Z.data);else if(w.isData3DTexture)ot?(ht&&e.texStorage3D(r.TEXTURE_3D,qt,$,Z.width,Z.height,Z.depth),Pt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,F,Z.data)):e.texImage3D(r.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,lt,F,Z.data);else if(w.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(r.TEXTURE_2D,qt,$,Z.width,Z.height);else{let it=Z.width,Lt=Z.height;for(let Wt=0;Wt<qt;Wt++)e.texImage2D(r.TEXTURE_2D,Wt,$,it,Lt,0,lt,F,null),it>>=1,Lt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let it=r.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Z.parentNode!==it){it.appendChild(Z),u.add(w),it.onpaint=Lt=>{let Wt=Lt.changedElements;for(let mt of u)Wt.includes(mt.image)&&(mt.needsUpdate=!0)},it.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,Z);else{let Wt=r.RGBA,mt=r.RGBA,pe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Wt,mt,pe,Z)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ot&&ht){let it=Dt(ut[0]);e.texStorage2D(r.TEXTURE_2D,qt,$,it.width,it.height)}for(let it=0,Lt=ut.length;it<Lt;it++)Y=ut[it],ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,lt,F,Y):e.texImage2D(r.TEXTURE_2D,it,$,lt,F,Y);w.generateMipmaps=!1}else if(ot){if(ht){let it=Dt(Z);e.texStorage2D(r.TEXTURE_2D,qt,$,it.width,it.height)}Pt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,F,Z)}else e.texImage2D(r.TEXTURE_2D,0,$,lt,F,Z);M(w)&&w.mipmapsAutoUpdate===!0&&v(nt),ct.__version=st.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function qe(N,w,z){if(w.image.length!==6)return;let nt=$t(N,w),J=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+z);let st=n.get(J);if(J.version!==st.__version||nt===!0){e.activeTexture(r.TEXTURE0+z);let ct=Yt.getPrimaries(Yt.workingColorSpace),q=w.colorSpace===kn?null:Yt.getPrimaries(w.colorSpace),Z=w.colorSpace===kn||ct===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let lt=w.isCompressedTexture||w.image[0].isCompressedTexture,F=w.image[0]&&w.image[0].isDataTexture,$=[];for(let mt=0;mt<6;mt++)!lt&&!F?$[mt]=_(w.image[mt],!0,i.maxCubemapSize):$[mt]=F?w.image[mt].image:w.image[mt],$[mt]=St(w,$[mt]);let Y=$[0],ut=s.convert(w.format,w.colorSpace),ot=s.convert(w.type),ht=T(w.internalFormat,ut,ot,w.normalized,w.colorSpace),Pt=w.isVideoTexture!==!0,qt=st.__version===void 0||nt===!0,it=J.dataReady,Lt=b(w,Y);Xt(r.TEXTURE_CUBE_MAP,w);let Wt;if(w.isDepthTexture){if(ht=y(w.format===$i,w.type),qt)if(Pt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ht,Y.width,Y.height);else for(let mt=0;mt<6;mt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,Y.width,Y.height,0,ut,ot,null)}else if(lt){Pt&&qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ht,Y.width,Y.height);for(let mt=0;mt<6;mt++){Wt=$[mt].mipmaps;for(let pe=0;pe<Wt.length;pe++){let Je=Wt[pe];w.format!==$n?ut!==null?Pt?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,0,0,Je.width,Je.height,ut,Je.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,ht,Je.width,Je.height,0,Je.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,0,0,Je.width,Je.height,ut,ot,Je.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe,ht,Je.width,Je.height,0,ut,ot,Je.data)}}}else{if(Wt=w.mipmaps,Pt&&qt){Wt.length>0&&Lt++;let mt=Dt($[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ht,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(F){Pt?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,$[mt].width,$[mt].height,ut,ot,$[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,$[mt].width,$[mt].height,0,ut,ot,$[mt].data);for(let pe=0;pe<Wt.length;pe++){let rs=Wt[pe].image[mt].image;Pt?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,0,0,rs.width,rs.height,ut,ot,rs.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,ht,rs.width,rs.height,0,ut,ot,rs.data)}}else{Pt?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ut,ot,$[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,ut,ot,$[mt]);for(let pe=0;pe<Wt.length;pe++){let Je=Wt[pe];Pt?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,0,0,ut,ot,Je.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,pe+1,ht,ut,ot,Je.image[mt])}}}M(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),st.__version=J.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ee(N,w,z,nt,J,st){let ct=s.convert(z.format,z.colorSpace),q=s.convert(z.type),Z=T(z.internalFormat,ct,q,z.normalized,z.colorSpace),lt=n.get(w),F=n.get(z);if(F.__renderTarget=w,!lt.__hasExternalTextures){let $=Math.max(1,w.width>>st),Y=Math.max(1,w.height>>st);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,st,Z,$,Y,w.depth,0,ct,q,null):e.texImage2D(J,st,Z,$,Y,0,ct,q,null)}e.bindFramebuffer(r.FRAMEBUFFER,N),Q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,F.__webglTexture,0,rt(w)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,F.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ln(N,w,z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),w.depthBuffer){let nt=w.depthTexture,J=nt&&nt.isDepthTexture?nt.type:null,st=y(w.stencilBuffer,J),ct=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Q(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(w),st,w.width,w.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(w),st,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,st,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,N)}else{let nt=w.textures;for(let J=0;J<nt.length;J++){let st=nt[J],ct=s.convert(st.format,st.colorSpace),q=s.convert(st.type),Z=T(st.internalFormat,ct,q,st.normalized,st.colorSpace);Q(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(w),Z,w.width,w.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(w),Z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Z,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(N,w,z){let nt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(w.depthTexture);J.__renderTarget=w;let st=nt?w.depthTexture.image[0]:w.depthTexture.image;(!J.__webglTexture||st.width!==w.width||st.height!==w.height)&&(st.width=w.width,st.height=w.height,w.depthTexture.needsUpdate=!0),nt?pt(w.depthTexture,0):at(w.depthTexture,0);let ct=J.__webglTexture,q=rt(w),Z=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,lt=w.depthTexture.format===$i?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===ki)Q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Z,ct,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Z,ct,0);else if(w.depthTexture.format===$i)Q(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,Z,ct,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,lt,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(N){let w=n.get(N),z=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let nt=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),nt){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,nt.removeEventListener("dispose",J)};nt.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=nt}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)be(w.__webglFramebuffer[nt],N,nt);else N.texture.mipmaps.length>0?be(w.__webglFramebuffer[0],N,0):be(w.__webglFramebuffer,N,0);else if(z){w.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[nt]),w.__webglDepthbuffer[nt]===void 0)w.__webglDepthbuffer[nt]=r.createRenderbuffer(),ln(w.__webglDepthbuffer[nt],N,!1);else{let J=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,st)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),ln(w.__webglDepthbuffer,N,!1);else{let J=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rn(N,w,z){let nt=n.get(N);w!==void 0&&ee(nt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ue(N)}function _n(N){let w=N.texture,z=n.get(N),nt=n.get(w);N.addEventListener("dispose",C),E(N);let J=N.textures,st=N.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=w.version,o.memory.textures++),st){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(w.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let Z=0;Z<w.mipmaps.length;Z++)z.__webglFramebuffer[q][Z]=r.createFramebuffer()}else z.__webglFramebuffer[q]=r.createFramebuffer()}else{if(w.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<w.mipmaps.length;q++)z.__webglFramebuffer[q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ct)for(let q=0,Z=J.length;q<Z;q++){let lt=n.get(J[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&Q(N)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){let Z=J[q];z.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[q]);let lt=s.convert(Z.format,Z.colorSpace),F=s.convert(Z.type),$=T(Z.internalFormat,lt,F,Z.normalized,Z.colorSpace,N.isXRRenderTarget===!0),Y=rt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,$,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,z.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ln(z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,w);for(let q=0;q<6;q++)if(w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)ee(z.__webglFramebuffer[q][Z],N,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else ee(z.__webglFramebuffer[q],N,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(ct){for(let q=0,Z=J.length;q<Z;q++){let lt=J[q],F=n.get(lt),$=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&($=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture($,F.__webglTexture),Xt($,lt),ee(z.__webglFramebuffer,N,lt,r.COLOR_ATTACHMENT0+q,$,0),M(lt)&&v($)}e.unbindTexture()}else{let q=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(q=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(q,nt.__webglTexture),Xt(q,w),w.mipmaps.length>0)for(let Z=0;Z<w.mipmaps.length;Z++)ee(z.__webglFramebuffer[Z],N,w,r.COLOR_ATTACHMENT0,q,Z);else ee(z.__webglFramebuffer,N,w,r.COLOR_ATTACHMENT0,q,0);M(w)?v(q):w.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Ue(N)}function B(N){let w=N.textures;for(let z=0,nt=w.length;z<nt;z++){let J=w[z];if(M(J)&&J.mipmapsAutoUpdate===!0){let st=S(N),ct=n.get(J).__webglTexture;e.bindTexture(st,ct),v(st),e.unbindTexture()}}}let Nn=[];function xe(N){if(N.samples>0){if(Q(N)===!1){let w=N.textures,z=N.width,nt=N.height,J=r.COLOR_BUFFER_BIT,st=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(N),q=w.length>1;if(q)for(let lt=0;lt<w.length;lt++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let lt=0;lt<w.length;lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let F=n.get(w[lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,F,0)}r.blitFramebuffer(0,0,z,nt,0,0,z,nt,J,r.NEAREST),c===!0&&(Nn.length=0,Nn.push(r.COLOR_ATTACHMENT0+lt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Nn.push(st),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Nn))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<w.length;lt++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let F=n.get(w[lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,F,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let w=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function rt(N){return Math.min(i.maxSamples,N.samples)}function Q(N){let w=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Zt(N){let w=o.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function St(N,w){let z=N.colorSpace,nt=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||z!==Sn&&z!==kn&&(Yt.getTransfer(z)===he?(nt!==$n||J!==en)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",z)),w}function Dt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=It,this.resetTextureUnits=j,this.getTextureUnits=et,this.setTextureUnits=xt,this.setTexture2D=at,this.setTexture2DArray=vt,this.setTexture3D=Ct,this.setTextureCube=pt,this.rebindTextures=Rn,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Q,this.dispose=U}function tS(r,t){function e(n,i=kn){let s,o=Yt.getTransfer(i);if(n===en)return r.UNSIGNED_BYTE;if(n===tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===el)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return r.BYTE;if(n===Fu)return r.SHORT;if(n===io)return r.UNSIGNED_SHORT;if(n===jc)return r.INT;if(n===oi)return r.UNSIGNED_INT;if(n===Bn)return r.FLOAT;if(n===ai)return r.HALF_FLOAT;if(n===Bu)return r.ALPHA;if(n===ku)return r.RGB;if(n===$n)return r.RGBA;if(n===ki)return r.DEPTH_COMPONENT;if(n===$i)return r.DEPTH_STENCIL;if(n===so)return r.RED;if(n===nl)return r.RED_INTEGER;if(n===_s)return r.RG;if(n===il)return r.RG_INTEGER;if(n===sl)return r.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===xa)if(o===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===ol||n===al||n===cl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===hl||n===ul||n===fl||n===dl||n===_a||n===pl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===hl)return o===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return s.COMPRESSED_R11_EAC;if(n===dl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return s.COMPRESSED_RG11_EAC;if(n===pl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===Tl||n===wl||n===El||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Pl||n===Il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Cl)return o===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Nl||n===ya||n===Dl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new na(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:eS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends ii{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new pf,m={},_=e.getContextAttributes(),M=null,v=null,S=[],T=[],y=new Nt,b=null,E=null,R=new Xe;R.viewport=new re;let P=new Xe;P.viewport=new re;let C=[R,P],D=new Xc,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=S[K];return at===void 0&&(at=new Wr,S[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=S[K];return at===void 0&&(at=new Wr,S[K]=at),at.getGripSpace()},this.getHand=function(K){let at=S[K];return at===void 0&&(at=new Wr,S[K]=at),at.getHandSpace()};function k(K){let at=T.indexOf(K.inputSource);if(at===-1)return;let vt=S[at];vt!==void 0&&(vt.update(K.inputSource,K.frame,l||o),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",tt);for(let K=0;K<S.length;K++){let at=T[K];at!==null&&(T[K]=null,S[K].disconnect(at))}I=null,U=null,p.reset();for(let K in m)delete m[K];if(t.setRenderTarget(M),d=null,f=null,u=null,i=null,v=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ct=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?$i:ki,Ct=_.stencil?cr:oi);let Ot={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ot),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new bn(f.textureWidth,f.textureHeight,{format:$n,type:en,depthTexture:new Hi(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new bn(d.framebufferWidth,d.framebufferHeight,{format:$n,type:en,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),It.setContext(i),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(K){for(let at=0;at<K.removed.length;at++){let vt=K.removed[at],Ct=T.indexOf(vt);Ct>=0&&(T[Ct]=null,S[Ct].disconnect(vt))}for(let at=0;at<K.added.length;at++){let vt=K.added[at],Ct=T.indexOf(vt);if(Ct===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=T.length){T.push(vt),Ct=Ot;break}else if(T[Ot]===null){T[Ot]=vt,Ct=Ot;break}if(Ct===-1)break}let pt=S[Ct];pt&&pt.connect(vt)}}function W(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let at=K.near,vt=K.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),D.near=P.near=R.near=at,D.far=P.far=R.far=vt,(I!==D.near||U!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,U=D.far),D.layers.mask=K.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ct=K.parent,pt=D.cameras;W(D,Ct);for(let Ot=0;Ot<pt.length;Ot++)W(pt[Ot],Ct);D.projectionMatrix.copy(R.projectionMatrix),D.projectionMatrixInverse.copy(R.projectionMatrixInverse),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),j(K,D,Ct)};function j(K,at,vt){vt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return m[K]};let et=null;function xt(K,at){if(h=at.getViewerPose(l||o),g=at,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;vt.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let Et=0;Et<vt.length;Et++){let Xt=vt[Et],$t=null;if(d!==null)$t=d.getViewport(Xt);else{let Ie=u.getViewSubImage(f,Xt);$t=Ie.viewport,Et===0&&(t.setRenderTargetTextures(v,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(v))}let zt=C[Et];zt===void 0&&(zt=new Xe,zt.layers.enable(Et),zt.viewport=new re,C[Et]=zt),zt.matrix.fromArray(Xt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Xt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set($t.x,$t.y,$t.width,$t.height),Et===0&&(D.matrix.copy(zt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(zt)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Et=u.getDepthInformation(vt[0]);Et&&Et.isValid&&Et.texture&&p.init(Et,i.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Et=0;Et<vt.length;Et++){let Xt=vt[Et].camera;if(Xt){let $t=m[Xt];$t||($t=new na,m[Xt]=$t);let zt=u.getCameraImage(Xt);$t.sourceTexture=zt}}}}for(let vt=0;vt<S.length;vt++){let Ct=T[vt],pt=S[vt];Ct!==null&&pt!==void 0&&pt.update(Ct,at,l||o)}et&&et(K,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let It=new Om;It.setAnimationLoop(xt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},iS=new yt,Ym=new Bt;Ym.set(-1,0,0,0,1,0,0,0,1);function sS(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,$u(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ye&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ye&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),M=_.envMap,v=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ym),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ye&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rS(r,t,e,n){let i={},s={};function o(_,M){let v=M.program;n.uniformBlockBinding(_,v,i[_.id])}function a(_,M){let v=i[_.id];v===void 0&&(g(_),v=c(_),i[_.id]=v,_.addEventListener("dispose",p));let S=M.program;n.updateUBOMapping(_,S);let T=t.render.frame;s[_.id]!==T&&(l(_),s[_.id]=T)}function c(_){let M=r.createBuffer(),v=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,S),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function l(_){let M=i[_.id],v=_.uniforms,S=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,y=v.length;T<y;T++){let b=v[T];if(Array.isArray(b))for(let E=0,R=b.length;E<R;E++)h(b[E],T,E,S);else h(b,T,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(_,M,v,S){if(f(_,M,v,S)===!0){let T=_.__offset,y=_.value;if(Array.isArray(y)){let b=0;for(let E=0;E<y.length;E++){let R=y[E],P=x(R,!0);u(R,_.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function f(_,M,v,S){let T=_.value,y=M+"_"+v;if(Array.isArray(T)){S[y]===void 0&&(S[y]=[]);let b=S[y],E=!1;for(let R=0;R<T.length;R++)d(T[R],b,R)===!0&&(E=!0);return E}return d(T,S,y)}function d(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let S=M[v];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function g(_){let M=_.uniforms,v=0,S=16;for(let y=0,b=M.length;y<b;y++){let E=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,P=E.length;R<P;R++){let C=E[R],D=Array.isArray(C.value)?C.value:[C.value],I=Array.isArray(M[y])||Array.isArray(C.value),U=v;for(let V=0,tt=D.length;V<tt;V++){let W=D[V],j=x(W,I),et=v%S,xt=et%j.boundary,It=et+xt;v+=xt,It!==0&&S-It<j.storage&&(v+=S-It),V===0&&(U=v),v+=j.storage}let k=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new k((v-U)/Float32Array.BYTES_PER_ELEMENT),C.__offset=U}}let T=v%S;return T>0&&(v+=S-T),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function p(_){let M=_.target;M.removeEventListener("dispose",p),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(let _ in i)r.deleteBuffer(i[_]);i={},s={}}return{bind:o,update:a,dispose:m}}var oS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function aS(){return vi===null&&(vi=new Kr(oS,16,16,_s,ai),vi.name="DFG_LUT",vi.minFilter=Se,vi.magFilter=Se,vi.wrapS=Yn,vi.wrapT=Yn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var zl=class{constructor(t={}){let{canvas:e=cm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=en}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,p=new Set([sl,il,nl]),m=new Set([en,oi,io,cr,tl,el]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,T=null,y=[],b=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,C=null,D=null,I=null,U=null;this._outputColorSpace=Ae;let k=0,V=0,tt=null,W=-1,j=null,et=new re,xt=new re,It=null,K=new At(0),at=0,vt=e.width,Ct=e.height,pt=1,Ot=null,Ee=null,Et=new re(0,0,vt,Ct),Xt=new re(0,0,vt,Ct),$t=!1,zt=new ds,Ie=new Nc,Le=!1,qe=!1,ee=new yt,ln=new L,be=new re,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rn=!1;function _n(){return tt===null?pt:1}let B=n;function Nn(A,O){return e.getContext(A,O)}let xe,rt,Q,Zt,St,Dt,N,w,z,nt,J,st,ct,q,Z,lt,F,$,Y,ut,ot,ht,Pt;try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){let O="webgl2";if(B=Nn(O,A),B===null)throw Nn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(A){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ut("WebGLRenderer: "+A.message),A}function qt(){xe=new _v(B),xe.init(),ot=new tS(B,xe),rt=new av(B,xe,t,ot),Q=new QM(B,xe),rt.reversedDepthBuffer&&f&&Q.buffers.depth.setReversed(!0),D=B.createFramebuffer(),I=B.createFramebuffer(),U=B.createFramebuffer(),Zt=new Mv(B),St=new BM,Dt=new jM(B,xe,Q,St,rt,ot,Zt),N=new xv(R),w=new bx(B),ht=new rv(B,w),z=new yv(B,w,Zt,ht),nt=new bv(B,z,w,ht,Zt),$=new Sv(B,rt,Dt),Z=new cv(St),J=new OM(R,N,xe,rt,ht,Z),st=new sS(R,St),ct=new zM,q=new qM(xe),F=new sv(R,N,Q,nt,g,c),lt=new JM(R,nt,rt),Pt=new rS(B,Zt,rt,Q),Y=new ov(B,xe,Zt),ut=new vv(B,xe,Zt),Zt.programs=J.programs,R.capabilities=rt,R.extensions=xe,R.properties=St,R.renderLists=ct,R.shadowMap=lt,R.state=Q,R.info=Zt}x!==en&&(E=new wv(x,e.width,e.height,a,i,s));let it=new mf(R,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(A){A!==void 0&&(pt=A,this.setSize(vt,Ct,!1))},this.getSize=function(A){return A.set(vt,Ct)},this.setSize=function(A,O,X=!0){if(it.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=A,Ct=O,e.width=Math.floor(A*pt),e.height=Math.floor(O*pt),X===!0&&(e.style.width=A+"px",e.style.height=O+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(vt*pt,Ct*pt).floor()},this.setDrawingBufferSize=function(A,O,X){vt=A,Ct=O,pt=X,e.width=Math.floor(A*X),e.height=Math.floor(O*X),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===en){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,O,X,H){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,O,X,H),Q.viewport(et.copy(Et).multiplyScalar(_n()).round())},this.getScissor=function(A){return A.copy(Xt)},this.setScissor=function(A,O,X,H){A.isVector4?Xt.set(A.x,A.y,A.z,A.w):Xt.set(A,O,X,H),Q.scissor(xt.copy(Xt).multiplyScalar(_n()).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){Q.setScissorTest($t=A)},this.setOpaqueSort=function(A){Ot=A},this.setTransparentSort=function(A){Ee=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,X=!0){let H=0;if(A){let G=!1;if(tt!==null){let dt=tt.texture.format;G=p.has(dt)}if(G){let dt=tt.texture.type,Mt=m.has(dt),ft=F.getClearColor(),_t=F.getClearAlpha(),wt=ft.r,Vt=ft.g,Qt=ft.b;Mt?(_[0]=wt,_[1]=Vt,_[2]=Qt,_[3]=_t,B.clearBufferuiv(B.COLOR,0,_)):(M[0]=wt,M[1]=Vt,M[2]=Qt,M[3]=_t,B.clearBufferiv(B.COLOR,0,M))}else H|=B.COLOR_BUFFER_BIT}O&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),C=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),F.dispose(),ct.dispose(),q.dispose(),Dt.dispose(),St.dispose(),N.dispose(),nt.dispose(),z.dispose(),ht.dispose(),Pt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",Cd),it.removeEventListener("sessionend",Pd),Ns.stop()};function Lt(A){A.preventDefault(),Yo("WebGLRenderer: Context Lost."),P=!0}function Wt(){Yo("WebGLRenderer: Context Restored."),P=!1;let A=Zt.autoReset,O=lt.enabled,X=lt.autoUpdate,H=lt.needsUpdate,G=lt.type;qt(),Zt.autoReset=A,lt.enabled=O,lt.autoUpdate=X,lt.needsUpdate=H,lt.type=G}function mt(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){let O=A.target;O.removeEventListener("dispose",pe),Je(O)}function Je(A){rs(A),St.remove(A)}function rs(A){let O=St.get(A).programs;O!==void 0&&(O.forEach(function(X){J.releaseProgram(X)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,X,H,G,dt){O===null&&(O=Ue);let Mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=mg(A,O,X,H,G);Q.setMaterial(H,Mt);let _t=X.index,wt=1;if(H.wireframe===!0){if(_t=z.getWireframeAttribute(X),_t===void 0)return;wt=2}let Vt=X.drawRange,Qt=X.attributes.position,bt=Vt.start*wt,jt=(Vt.start+Vt.count)*wt;dt!==null&&(bt=Math.max(bt,dt.start*wt),jt=Math.min(jt,(dt.start+dt.count)*wt)),_t!==null?(bt=Math.max(bt,0),jt=Math.min(jt,_t.count)):Qt!=null&&(bt=Math.max(bt,0),jt=Math.min(jt,Qt.count));let Ge=jt-bt;if(Ge<0||Ge===1/0)return;ht.setup(G,H,ft,X,_t);let Me,_e=Y;if(_t!==null&&(Me=w.get(_t),_e=ut,_e.setIndex(Me)),G.isMesh)H.wireframe===!0?(Q.setLineWidth(H.wireframeLinewidth*_n()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(G.isLine){let hn=H.linewidth;hn===void 0&&(hn=1),Q.setLineWidth(hn*_n()),G.isLineSegments?_e.setMode(B.LINES):G.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else G.isPoints?_e.setMode(B.POINTS):G.isSprite&&_e.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let hn=G._multiDrawStarts,Tt=G._multiDrawCounts,yn=G._multiDrawCount,ae=_t?w.get(_t).bytesPerElement:1,Ds=St.get(H).currentProgram.getUniforms();for(let un=0;un<yn;un++)Ds.setValue(B,"_gl_DrawID",un),_e.render(hn[un]/ae,Tt[un])}else if(G.isInstancedMesh)_e.renderInstances(bt,Ge,G.count);else if(X.isInstancedBufferGeometry){let hn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,hn);_e.renderInstances(bt,Ge,Tt)}else _e.render(bt,Ge)};function Rd(A,O,X,H){C!==null&&A.isNodeMaterial&&C.setObject(H,A),Le===!0&&Z.setState(A,X,!1),A.transparent===!0&&A.side===Pe&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,No(A,O,H),A.side=Un,A.needsUpdate=!0,No(A,O,H),A.side=Pe):No(A,O,H)}this.compile=function(A,O,X=null){X===null&&(X=A),C!==null&&C.renderStart(A,O,X),T=q.get(X),T.init(O),b.push(T),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),A!==X&&A.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),qe=this.localClippingEnabled,Le=Z.init(this.clippingPlanes,qe),Le===!0&&Z.setGlobalState(this.clippingPlanes,O),C!==null&&lt.render(T.state.shadowsArray,X,O);let H=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let ft=dt[Mt];Rd(ft,X,O,G),H.add(ft)}else Rd(dt,X,O,G),H.add(dt)}),T=b.pop(),C!==null&&C.renderEnd(),H},this.compileAsync=function(A,O,X=null){let H=this.compile(A,O,X);return new Promise(G=>{function dt(){if(H.forEach(function(Mt){let _t=St.get(Mt).currentProgram;(_t===void 0||_t.isReady())&&H.delete(Mt)}),H.size===0){G(A);return}setTimeout(dt,10)}xe.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let kh=null;function dg(A){kh&&kh(A)}function Cd(){Ns.stop()}function Pd(){Ns.start()}let Ns=new Om;Ns.setAnimationLoop(dg),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(A){kh=A,it.setAnimationLoop(A),A===null?Ns.stop():Ns.start()},it.addEventListener("sessionstart",Cd),it.addEventListener("sessionend",Pd),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(A,O);let X=it.enabled===!0&&it.isPresenting===!0,H=E!==null&&(tt===null||X)&&E.begin(R,tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(O),O=it.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,O,tt),T=q.get(A,b.length),T.init(O),T.state.textureUnits=Dt.getTextureUnits(),b.push(T),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ie.setFromArrayCamera(O):zt.setFromProjectionMatrix(ee,Kn,O.reversedDepth),qe=this.localClippingEnabled,Le=Z.init(this.clippingPlanes,qe),S=ct.get(A,y.length),S.init(),y.push(S),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Mt=R.xr.getDepthSensingMesh();Mt!==null&&zh(Mt,O,-1/0,R.sortObjects)}zh(A,O,0,R.sortObjects),S.finish(),C!==null&&C.updateLights(T.state.lightsArray),R.sortObjects===!0&&S.sort(Ot,Ee),Rn=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Rn&&F.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),Le===!0&&Z.beginShadows();let G=T.state.shadowsArray;if(lt.render(G,A,O),Le===!0&&Z.endShadows(),(H&&E.hasRenderPass())===!1){let Mt=S.opaque,ft=S.transmissive;if(T.setupLights(),O.isArrayCamera){let _t=O.cameras;if(ft.length>0)for(let wt=0,Vt=_t.length;wt<Vt;wt++){let Qt=_t[wt];Ld(Mt,ft,A,Qt)}Rn&&F.render(A);for(let wt=0,Vt=_t.length;wt<Vt;wt++){let Qt=_t[wt];Id(S,A,Qt,Qt.viewport)}}else ft.length>0&&Ld(Mt,ft,A,O),Rn&&F.render(A),Id(S,A,O)}tt!==null&&V===0&&(Dt.updateMultisampleRenderTarget(tt),Dt.updateRenderTargetMipmap(tt)),H&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,O),ht.resetDefaultState(),W=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],Dt.setTextureUnits(T.state.textureUnits),Le===!0&&Z.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,C!==null&&C.renderEnd()};function zh(A,O,X,H){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let Mt=O.isArrayCamera?Ie:zt;if(!A.frustumCulled||A.intersectsFrustum(Mt)){H&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ee);let ft=nt.update(A),_t=A.material;_t.visible&&S.push(A,ft,_t,X,be.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){let Mt=O.isArrayCamera?Ie:zt;if(!A.frustumCulled||A.intersectsFrustum(Mt)){let ft=nt.update(A),_t=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),be.copy(ft.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ee)),Array.isArray(_t)){let wt=ft.groups;for(let Vt=0,Qt=wt.length;Vt<Qt;Vt++){let bt=wt[Vt],jt=_t[bt.materialIndex];jt&&jt.visible&&S.push(A,ft,jt,X,be.z,bt,O)}}else _t.visible&&S.push(A,ft,_t,X,be.z,null,O)}}}let dt=A.children;for(let Mt=0,ft=dt.length;Mt<ft;Mt++)zh(dt[Mt],O,X,H)}function Id(A,O,X,H){let{opaque:G,transmissive:dt,transparent:Mt}=A;T.setupLightsView(X),Le===!0&&Z.setGlobalState(R.clippingPlanes,X),H&&Q.viewport(et.copy(H)),G.length>0&&Ya(G,O,X),dt.length>0&&Ya(dt,O,X),Mt.length>0&&Ya(Mt,O,X),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Ld(A,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let bt=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new bn(1,1,{generateMipmaps:!0,type:bt?ai:en,minFilter:tn,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[H.id],Mt=H.viewport||et;dt.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),_t=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor(K),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),Rn&&F.render(X);let Vt=R.toneMapping;R.toneMapping=_i;let Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Le===!0&&Z.setGlobalState(R.clippingPlanes,H),Ya(A,X,H),Dt.updateMultisampleRenderTarget(dt),Dt.updateRenderTargetMipmap(dt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let jt=0,Ge=O.length;jt<Ge;jt++){let Me=O[jt],{object:_e,geometry:hn,material:Tt,group:yn}=Me;if(Tt.side===Pe&&_e.layers.test(H.layers)){let ae=Tt.side;Tt.side=Ye,Tt.needsUpdate=!0,Nd(_e,X,H,hn,Tt,yn),Tt.side=ae,Tt.needsUpdate=!0,bt=!0}}bt===!0&&(Dt.updateMultisampleRenderTarget(dt),Dt.updateRenderTargetMipmap(dt))}R.setRenderTarget(ft,_t,wt),R.setClearColor(K,at),Qt!==void 0&&(H.viewport=Qt),R.toneMapping=Vt}function Ya(A,O,X){let H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,dt=A.length;G<dt;G++){let Mt=A[G],{object:ft,geometry:_t,group:wt}=Mt,Vt=Mt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),ft.layers.test(X.layers)&&Nd(ft,O,X,_t,Vt,wt)}}function Nd(A,O,X,H,G,dt){C!==null&&G.isNodeMaterial&&C.setObject(A,G),A.onBeforeRender(R,O,X,H,G,dt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(R,O,X,H,A,dt),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=Ye,G.needsUpdate=!0,R.renderBufferDirect(X,O,H,G,A,dt),G.side=Un,G.needsUpdate=!0,R.renderBufferDirect(X,O,H,G,A,dt),G.side=Pe):R.renderBufferDirect(X,O,H,G,A,dt),A.onAfterRender(R,O,X,H,G,dt)}function Dd(A){let O=0;for(let X of A)X.texture!==null&&O++;return O}function No(A,O,X){O.isScene!==!0&&(O=Ue);let H=St.get(A),G=T.state.lights,dt=T.state.shadowsArray,Mt=G.state.version,ft=J.getParameters(A,G.state,dt,O,X,T.state.lightProbeGridArray),_t=J.getProgramCacheKey(ft),wt=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Vt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=N.get(A.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,wt===void 0&&(A.addEventListener("dispose",pe),wt=new Map,H.programs=wt,H.programVariants=new Map);let Qt=wt.get(_t);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===Mt)return Ud(A,ft),Qt}else ft.uniforms=J.getUniforms(A),C!==null&&A.isNodeMaterial&&C.build(A,X,ft),A.onBeforeCompile(ft,R),Qt=J.acquireProgram(ft,_t),wt.set(_t,Qt),H.uniforms=ft.uniforms;let bt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(bt.clippingPlanes=Z.uniform),Ud(A,ft),H.needsLights=xg(A),H.lightsStateVersion=Mt,H.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=Dd(T.state.lightProbeGridArray),H.currentProgram=Qt,H.uniformsList=null,Qt}function pg(A,O,X,H,G){let dt=St.get(A),Mt=dt.currentProgram.id+","+H+","+G,ft=dt.programVariants.get(Mt);return ft===void 0?(ft=No(A,O,X),dt.programVariants.set(Mt,ft)):(dt.currentProgram=ft,dt.uniformsList=null,dt.outputColorSpace=H,dt.toneMapping=G),ft}function Fd(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ud(A,O){let X=St.get(A);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function mg(A,O,X,H,G){O.isScene!==!0&&(O=Ue),Dt.resetTextureUnits();let dt=O.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ft=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Yt.workingColorSpace,_t=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=N.get(H.envMap||Mt,_t),Vt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,Ge=!!X.morphAttributes.color,Me=_i;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Me=R.toneMapping);let _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,hn=_e!==void 0?_e.length:0,Tt=St.get(H),yn=T.state.lights;if(Le===!0&&(qe===!0||A!==j)){let Ne=A===j&&H.id===W;Z.setState(H,A,Ne)}let ae=!1,Ds=!1;H.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==yn.state.version||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==wt||H.fog===!0&&Tt.fog!==dt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Z.numPlanes||Tt.numIntersection!==Z.numIntersection)||Tt.vertexAlphas!==Vt||Tt.vertexTangents!==Qt||Tt.morphTargets!==bt||Tt.morphNormals!==jt||Tt.morphColors!==Ge||Tt.morphTargetsCount!==hn||Tt.numLightProbeGrids!==Dd(T.state.lightProbeGridArray)?ae=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==Me)&&(Ds=!0):(ae=!0,Tt.__version=H.version);let un=Tt.currentProgram;(ae===!0||Ds===!0)&&(un=Ds===!0?pg(H,O,G,ft,Me):No(H,O,G),C&&H.isNodeMaterial&&C.onUpdateProgram(H,un,Tt));let Ka=!1,os=!1,Fs=!1,se=un.getUniforms(),rn=Tt.uniforms;if(Q.useProgram(un.program)&&(Ka=!0,os=!0,Fs=!0),H.id!==W&&(W=H.id,os=!0),Ka||j!==A){Q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),se.setValue(B,"projectionMatrix",A.projectionMatrix),se.setValue(B,"viewMatrix",A.matrixWorldInverse);let Qe=se.map.cameraPosition;Qe!==void 0&&Qe.setValue(B,ln.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&se.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,os=!0,Fs=!0)}if(Tt.needsLights&&(yn.state.sunShadowMap.length>0&&se.setValue(B,"sunShadowMap",yn.state.sunShadowMap,Dt),yn.state.directionalShadowMap.length>0&&se.setValue(B,"directionalShadowMap",yn.state.directionalShadowMap,Dt),yn.state.spotShadowMap.length>0&&se.setValue(B,"spotShadowMap",yn.state.spotShadowMap,Dt),yn.state.pointShadowMap.length>0&&se.setValue(B,"pointShadowMap",yn.state.pointShadowMap,Dt)),G.isSkinnedMesh){se.setOptional(B,G,"bindMatrix"),se.setOptional(B,G,"bindMatrixInverse");let Ne=G.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),se.setValue(B,"boneTexture",Ne.boneTexture,Dt))}G.isBatchedMesh&&(se.setOptional(B,G,"batchingTexture"),se.setValue(B,"batchingTexture",G._matricesTexture,Dt),se.setOptional(B,G,"batchingIdTexture"),se.setValue(B,"batchingIdTexture",G._indirectTexture,Dt),se.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&se.setValue(B,"batchingColorTexture",G._colorsTexture,Dt));let jn=X.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&$.update(G,X,un),(os||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,se.setValue(B,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=aS()),os){if(se.setValue(B,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&gg(rn,Fs),dt&&H.fog===!0&&st.refreshFogUniforms(rn,dt),st.refreshMaterialUniforms(rn,H,pt,Ct,T.state.transmissionRenderTarget[A.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let Ne=v,Qe=0;for(let Ii of T.state.lightProbeGridArray)Ii.texture!==null&&(Ne.textures[Qe]=Ii.texture,Ne.min[Qe]=Ii.boundingBox.min,Ne.max[Qe]=Ii.boundingBox.max,Ne.resolution[Qe]=Ii.resolution,Qe++);for(let Ii in Ne)Ne[Ii].length=Qe;rn.probesSH.value=Ne.textures,rn.probesMin.value=Ne.min,rn.probesMax.value=Ne.max,rn.probesResolution.value=Ne.resolution}oo.upload(B,Fd(Tt),rn,Dt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oo.upload(B,Fd(Tt),rn,Dt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(B,"center",G.center),se.setValue(B,"modelViewMatrix",G.modelViewMatrix),se.setValue(B,"normalMatrix",G.normalMatrix),se.setValue(B,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Ne=H.uniformsGroups;for(let Qe=0,Ii=Ne.length;Qe<Ii;Qe++){let Bd=Ne[Qe];Pt.update(Bd,un),Pt.bind(Bd,un)}}return un}function gg(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function xg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(A,O,X){let H=St.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),St.get(A.texture).__webglTexture=O,St.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){let X=St.get(A);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,X=0){tt=A,k=O,V=X;let H=null,G=!1,dt=!1;if(A){let ft=St.get(A);if(ft.__useDefaultFramebuffer!==void 0){Q.bindFramebuffer(B.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(A.viewport),xt.copy(A.scissor),It=A.scissorTest,Q.viewport(et),Q.scissor(xt),Q.setScissorTest(It),W=-1;return}else if(ft.__webglFramebuffer===void 0)Dt.setupRenderTarget(A);else if(ft.__hasExternalTextures)Dt.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Vt=A.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&St.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(A)}}let _t=A.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);let wt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(wt[O])?H=wt[O][X]:H=wt[O],G=!0):A.samples>0&&Dt.useMultisampledRTT(A)===!1?H=St.get(A).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[X]:H=wt,et.copy(A.viewport),xt.copy(A.scissor),It=A.scissorTest}else et.copy(Et).multiplyScalar(pt).floor(),xt.copy(Xt).multiplyScalar(pt).floor(),It=$t;if(X!==0&&(H=D),Q.bindFramebuffer(B.FRAMEBUFFER,H)&&Q.drawBuffers(A,H),Q.viewport(et),Q.scissor(xt),Q.setScissorTest(It),G){let ft=St.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,X)}else if(dt){let ft=O;for(let _t=0;_t<A.textures.length;_t++){let wt=St.get(A.textures[_t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+_t,wt.__webglTexture,X,ft)}}else if(A!==null&&X!==0){let ft=St.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ft.__webglTexture,X)}W=-1};function Od(A){let O=St.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=rt.textureFormatReadable(A.format),O.__typeReadable=rt.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,X,H,G,dt,Mt,ft=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t){Q.bindFramebuffer(B.FRAMEBUFFER,_t);try{let wt=A.textures[ft],Vt=wt.format,Qt=wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let bt=Od(wt);if(bt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-H&&X>=0&&X<=A.height-G&&B.readPixels(O,X,H,G,ot.convert(Vt),ot.convert(Qt),dt)}finally{let wt=tt!==null?St.get(tt).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(A,O,X,H,G,dt,Mt,ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t)if(O>=0&&O<=A.width-H&&X>=0&&X<=A.height-G){Q.bindFramebuffer(B.FRAMEBUFFER,_t);let wt=A.textures[ft],Vt=wt.format,Qt=wt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let bt=Od(wt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),B.readPixels(O,X,H,G,ot.convert(Vt),ot.convert(Qt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ge=tt!==null?St.get(tt).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,Ge);let Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hm(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(jt),B.deleteSync(Me),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,X=0){let H=Math.pow(2,-X),G=Math.floor(A.image.width*H),dt=Math.floor(A.image.height*H),Mt=O!==null?O.x:0,ft=O!==null?O.y:0;Dt.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Mt,ft,G,dt),Q.unbindTexture()},this.copyTextureToTexture=function(A,O,X=null,H=null,G=0,dt=0){let Mt,ft,_t,wt,Vt,Qt,bt,jt,Ge,Me=A.isCompressedTexture?A.mipmaps[dt]:A.image;if(X!==null)Mt=X.max.x-X.min.x,ft=X.max.y-X.min.y,_t=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,Vt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let se=Math.pow(2,-G);Mt=Math.floor(Me.width*se),ft=Math.floor(Me.height*se),A.isDataArrayTexture?_t=Me.depth:A.isData3DTexture?_t=Math.floor(Me.depth*se):_t=1,wt=0,Vt=0,Qt=0}H!==null?(bt=H.x,jt=H.y,Ge=H.z):(bt=0,jt=0,Ge=0);let _e=ot.convert(O.format),hn=ot.convert(O.type),Tt;O.isData3DTexture?(Dt.setTexture3D(O,0),Tt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Dt.setTexture2DArray(O,0),Tt=B.TEXTURE_2D_ARRAY):(Dt.setTexture2D(O,0),Tt=B.TEXTURE_2D),Q.activeTexture(B.TEXTURE0),Q.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),Q.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Q.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let yn=Q.getParameter(B.UNPACK_ROW_LENGTH),ae=Q.getParameter(B.UNPACK_IMAGE_HEIGHT),Ds=Q.getParameter(B.UNPACK_SKIP_PIXELS),un=Q.getParameter(B.UNPACK_SKIP_ROWS),Ka=Q.getParameter(B.UNPACK_SKIP_IMAGES);Q.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),Q.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);let os=A.isDataArrayTexture||A.isData3DTexture,Fs=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){let se=St.get(A),rn=St.get(O),jn=St.get(se.__renderTarget),Ne=St.get(rn.__renderTarget);Q.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Qe=0;Qe<_t;Qe++)os&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.get(A).__webglTexture,G,Qt+Qe),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.get(O).__webglTexture,dt,Ge+Qe)),B.blitFramebuffer(wt,Vt,wt+Mt,Vt+ft,bt,jt,bt+Mt,jt+ft,B.DEPTH_BUFFER_BIT,B.NEAREST);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||St.has(A)){let se=St.get(A),rn=St.get(O);Q.bindFramebuffer(B.READ_FRAMEBUFFER,I),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let jn=0;jn<_t;jn++)os?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,se.__webglTexture,G,Qt+jn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,se.__webglTexture,G),Fs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rn.__webglTexture,dt,Ge+jn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rn.__webglTexture,dt),G!==0?B.blitFramebuffer(wt,Vt,wt+Mt,Vt+ft,bt,jt,bt+Mt,jt+ft,B.COLOR_BUFFER_BIT,B.NEAREST):Fs?B.copyTexSubImage3D(Tt,dt,bt,jt,Ge+jn,wt,Vt,Mt,ft):B.copyTexSubImage2D(Tt,dt,bt,jt,wt,Vt,Mt,ft);Q.bindFramebuffer(B.READ_FRAMEBUFFER,null),Q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fs?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Tt,dt,bt,jt,Ge,Mt,ft,_t,_e,hn,Me.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Tt,dt,bt,jt,Ge,Mt,ft,_t,_e,Me.data):B.texSubImage3D(Tt,dt,bt,jt,Ge,Mt,ft,_t,_e,hn,Me):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,dt,bt,jt,Mt,ft,_e,hn,Me.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,dt,bt,jt,Me.width,Me.height,_e,Me.data):B.texSubImage2D(B.TEXTURE_2D,dt,bt,jt,Mt,ft,_e,hn,Me);Q.pixelStorei(B.UNPACK_ROW_LENGTH,yn),Q.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ae),Q.pixelStorei(B.UNPACK_SKIP_PIXELS,Ds),Q.pixelStorei(B.UNPACK_SKIP_ROWS,un),Q.pixelStorei(B.UNPACK_SKIP_IMAGES,Ka),dt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Tt),Q.unbindTexture()},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&Dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Dt.setTextureCube(A,0):A.isData3DTexture?Dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Dt.setTexture2DArray(A,0):Dt.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){k=0,V=0,tt=null,Q.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var vs=new At("#B51224"),sw=new At("#5e0a13"),gf=r=>new At(r),ne={uTime:{value:0},uFogLow:{value:gf("#8a8c8f")},uFogHigh:{value:gf("#2a2b2d")},uFogDeep:{value:gf("#141516")},uFogParams:{value:new re(.17,6,4.6,.0042)},uZone:{value:new re(0,0,0,0)},uPulse:{value:new re(0,60,0,0)},uRedCol:{value:vs.clone()},uReveal:{value:0},uScope:{value:0}},hr=`
uniform vec3 uFogLow; uniform vec3 uFogHigh; uniform vec3 uFogDeep; uniform vec4 uFogParams;
float scFogAmount(vec3 cam, vec3 dir, float dist) {
  float k = uFogParams.x, y0 = uFogParams.y, H = uFogParams.z;
  float dy = dir.y; float base = k * exp(-(cam.y - y0) / H);
  float a = dy * dist / H; float integ = abs(a) < 0.0005 ? dist : dist * (1.0 - exp(-a)) / a;
  float od = base * integ + uFogParams.w * dist;
  return 1.0 - exp(-od);
}
vec3 scFogColor(vec3 dir, float y) {
  // pale toward the horizon, dark overhead, and darker again looking down into the streets
  float t = clamp(dir.y * 2.4 + 0.22, 0.0, 1.0);
  vec3 c = mix(uFogLow, uFogHigh, t * t * (3.0 - 2.0 * t));
  float d = clamp(-dir.y * 1.9 - 0.12, 0.0, 1.0);
  return mix(c, uFogDeep, d * d * (3.0 - 2.0 * d));
}
`,Km=!1;function Zm(){Km||(Km=!0,Ht.fog_pars_vertex=`
#ifdef USE_FOG
  varying vec3 vWp;
#endif`,Ht.fog_vertex=`
#ifdef USE_FOG
  vWp = transpose(mat3(viewMatrix)) * mvPosition.xyz + cameraPosition;
#endif`,Ht.fog_pars_fragment=`
#ifdef USE_FOG
  varying vec3 vWp;
  uniform vec3 fogColor; uniform float fogNear; uniform float fogFar;
  uniform float uTime; uniform vec4 uZone; uniform vec4 uPulse; uniform vec3 uRedCol;
  ${hr}
#endif`,Ht.fog_fragment=`
#ifdef USE_FOG
  {
    vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4);
    #ifndef SC_NO_WORLDFX
    if (uZone.w > 0.5) {
      float zd = length(vWp.xz - uZone.xy) - uZone.z;
      float w = max(0.07, dist * 0.0032);
      float line = 1.0 - smoothstep(0.0, w, abs(zd));
      float outside = smoothstep(0.0, 0.6, zd);
      float hatch = step(0.5, fract((vWp.x + vWp.z + vWp.y * 1.7) * 0.45 - uTime * 0.25));
      vec3 dead = gl_FragColor.rgb * mix(vec3(0.34), vec3(0.62, 0.20, 0.20), 0.45) + uRedCol * (0.035 + 0.05 * hatch);
      gl_FragColor.rgb = mix(gl_FragColor.rgb, dead, outside * 0.85);
      gl_FragColor.rgb += uRedCol * line * 2.4;
      // faint second ring: one metre inside, like a halo's inner edge
      gl_FragColor.rgb += uRedCol * (1.0 - smoothstep(0.0, w * 0.6, abs(zd + 0.9))) * 0.5;
    }
    if (uPulse.w > 0.001) {
      float pd = length(vWp - vec3(uZone.x, uPulse.y, uZone.y)) - uPulse.z;
      float band = (1.0 - smoothstep(0.0, 1.1, abs(pd)));
      float trail = smoothstep(-26.0, 0.0, pd) * step(pd, 0.0);
      float grid = step(0.93, fract(vWp.y * 0.8)) + step(0.96, fract((vWp.x + vWp.z) * 0.35));
      gl_FragColor.rgb += (vec3(0.9) * band + vec3(0.16) * trail * trail * grid) * uPulse.w;
    }
    #endif
    float fa = scFogAmount(cameraPosition, dir, dist);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, scFogColor(dir, vWp.y), fa);
  }
#endif`)}function ci(r,t){let e=r.onBeforeCompile;if(r.onBeforeCompile=(n,i)=>{for(let s in ne)n.uniforms[s]=ne[s];t&&t(n),e&&e.call(r,n,i)},t){let n=t.toString().length+":"+(t.key||t.name||"x");r.customProgramCacheKey=()=>n}return r}var cS=`
precision highp float;
uniform sampler2D tScene; uniform vec2 uRes; uniform float uTime;
uniform float uGrain, uVignette, uDamage, uLowHP, uGlitch, uFlash, uInk, uScoped, uFade, uZoneOut, uKick, uExposure;
uniform vec3 uRedCol;
varying vec2 vUv;
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 uv = vUv;
  // zone glitch: horizontal tearing bands
  if (uGlitch > 0.001) {
    float band = floor(uv.y * 42.0 + uTime * 9.0); float n = hash(vec2(band, floor(uTime * 14.0)));
    uv.x += (n - 0.5) * 0.045 * uGlitch * step(0.72, n);
  }
  vec2 c = uv - 0.5;
  // recoil / hit kick: tiny radial smear
  uv += c * uKick * 0.03;
  vec3 col = texture2D(tScene, uv).rgb;
  // red ghost on damage (the red channel slides sideways)
  float ghost = uDamage * 0.012 + uGlitch * 0.004;
  if (ghost > 0.0001) { vec3 g1 = texture2D(tScene, uv + vec2(ghost, 0.0)).rgb; col.r = max(col.r, g1.r); }
  // split into luminance + red excess: the only two things this world is made of
  float red = max(col.r - max(col.g, col.b), 0.0);
  float lum = dot(col - vec3(red, 0.0, 0.0), vec3(0.2126, 0.7152, 0.0722));
  // filmic curve + contrast
  float x = lum * uExposure; lum = x / (1.0 + x) * 1.72;
  lum = mix(lum, smoothstep(0.0, 1.0, lum), 0.62);
  // ink: bleeding out collapses mid-tones
  if (uInk > 0.001) { float q = floor(lum * 3.0 + 0.5 + (hash(uv * uRes * 0.5) - 0.5) * 0.9) / 3.0; lum = mix(lum, q, uInk); }
  float g = hash(uv * uRes + fract(uTime) * 61.0) - 0.5;
  lum += g * uGrain * (0.35 + 0.65 * smoothstep(0.0, 0.5, lum) * (1.0 - lum));
  float r2 = dot(c, c);
  float vig = 1.0 - smoothstep(0.16, 0.86, r2 * (1.0 + uVignette));
  lum *= mix(1.0, vig, 0.82);
  // red replaces grey rather than adding to it, so it can never drift to pink or brighter than the accent
  float ra = clamp(red * 3.0, 0.0, 1.0);
  vec3 outc = mix(vec3(max(lum, 0.0)), uRedCol * (0.82 + 0.3 * ra), ra);
  // pulse of blood at the frame edge: damage + low health heartbeat + outside the halo
  float beat = pow(0.5 + 0.5 * sin(uTime * 7.4), 6.0);
  float edge = smoothstep(0.10, 0.62, r2);
  float bleed = clamp(uDamage * 1.1 + uLowHP * (0.26 + 0.34 * beat) + uZoneOut * (0.20 + 0.10 * sin(uTime * 13.0)), 0.0, 1.0);
  outc = mix(outc, uRedCol * (0.55 + 0.45 * lum), edge * bleed);
  outc += vec3(uFlash);
  outc *= uFade;
  gl_FragColor = vec4(outc, 1.0);
  #include <colorspace_fragment>
}`,Wl=class{constructor(t){this.canvas=t;let e=this.renderer=new zl({canvas:t,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1,depth:!1});e.outputColorSpace=Ae,e.shadowMap.enabled=!0,e.shadowMap.type=ir,e.shadowMap.autoUpdate=!1,e.info.autoReset=!1,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent),this.scale=1,this.maxDpr=this.isMobile?1.5:1.75,this.samples=this.isMobile?2:4,this.scene=new Ys,this.scene.fog=new Zo(8421504,1,1e3),this.camera=new Xe(72,1,.08,900),this.fpScene=new Ys,this.fpCamera=new Xe(52,1,.02,20),this.post={tScene:{value:null},uRes:{value:new Nt(1,1)},uTime:ne.uTime,uRedCol:{value:vs.clone()},uGrain:{value:.07},uExposure:{value:1.25},uVignette:{value:0},uDamage:{value:0},uLowHP:{value:0},uGlitch:{value:0},uFlash:{value:0},uInk:{value:0},uScoped:{value:0},uFade:{value:1},uZoneOut:{value:0},uKick:{value:0}};let n=new ue;n.setAttribute("position",new Ft(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),n.setAttribute("uv",new Ft(new Float32Array([0,0,2,0,0,2]),2)),this.postMat=new He({uniforms:this.post,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:cS,depthTest:!1,depthWrite:!1}),this.postMesh=new fe(n,this.postMat),this.postMesh.frustumCulled=!1,this.postScene=new Ys,this.postScene.add(this.postMesh),this.postCam=new Yi(-1,1,1,-1,0,1),this.rt=null,this.resize()}resize(){let t=Math.max(2,this.canvas.clientWidth|0),e=Math.max(2,this.canvas.clientHeight|0),n=Math.min(window.devicePixelRatio||1,this.maxDpr)*this.scale,i=Math.max(2,Math.round(t*n)),s=Math.max(2,Math.round(e*n));this.pw===i&&this.ph===s||(this.pw=i,this.ph=s,this.w=t,this.h=e,this.renderer.setPixelRatio(1),this.renderer.setSize(i,s,!1),this.rt&&this.rt.dispose(),this.rt=new bn(i,s,{samples:this.samples,depthBuffer:!0,stencilBuffer:!1,type:en,colorSpace:Ae}),this.rt.texture.minFilter=Se,this.rt.texture.magFilter=Se,this.rt.texture.generateMipmaps=!1,this.post.tScene.value=this.rt.texture,this.post.uRes.value.set(i,s),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.fpCamera.aspect=t/e,this.fpCamera.updateProjectionMatrix())}render(t=!0){let e=this.renderer;e.info.reset(),e.setRenderTarget(this.rt),e.autoClear=!0,e.render(this.scene,this.camera),t&&this.fpScene.children.length&&(e.autoClear=!1,e.clearDepth(),e.render(this.fpScene,this.fpCamera),e.autoClear=!0),e.setRenderTarget(null),e.render(this.postScene,this.postCam)}};function $m(r){let t=new Uint8Array(r);if(String.fromCharCode(t[0],t[1],t[2],t[3])!=="SCKT")throw new Error("bad kit file");let i=new DataView(r).getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(t.subarray(8,8+i))),o=8+i,a={};for(let[c,l]of Object.entries(s.types))a[c]={...l,i16:new Int16Array(r,o+l.vOff,l.nv*8),u8:new Uint8Array(r,o+l.vOff,l.nv*16),i8:new Int8Array(r,o+l.vOff,l.nv*16),idx:l.i32?new Uint32Array(r,o+l.iOff,l.nt*3):new Uint16Array(r,o+l.iOff,l.nt*3)};return{header:s,types:a,layers:s.layers}}var Ea={city:"city.txt",tex:"tex.txt",arena:"arena.json",models:"models.txt"},Qm={"city.txt":481e4,"tex.txt":252e4,"arena.json":12e4,"models.txt":388e4},Si=new Uint8Array(256);for(let r=0;r<64;r++)Si["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(r)]=r;function lS(r){let t=r.length;for(;t>0&&(r[t-1]===61||r[t-1]===10||r[t-1]===13||r[t-1]===32);)t--;let e=new Uint8Array(Math.floor(t*3/4)),n=0,i=0;for(;i+4<=t;i+=4){let s=Si[r[i]]<<18|Si[r[i+1]]<<12|Si[r[i+2]]<<6|Si[r[i+3]];e[n++]=s>>16,e[n++]=s>>8&255,e[n++]=s&255}if(t-i===2)e[n++]=(Si[r[i]]<<18|Si[r[i+1]]<<12)>>16;else if(t-i===3){let s=Si[r[i]]<<18|Si[r[i+1]]<<12|Si[r[i+2]]<<6;e[n++]=s>>16,e[n++]=s>>8&255}return e.buffer}async function hS(r,t){let e=await fetch(r);if(!e.ok)throw new Error(`Could not load ${r} (${e.status})`);let n=+e.headers.get("Content-Length")||Qm[r]||1e6,i=/\.txt$/.test(r),s=u=>i?lS(new Uint8Array(u)):u;if(!e.body||!e.body.getReader){let u=await e.arrayBuffer();return t&&t(u.byteLength,u.byteLength),s(u)}let o=e.body.getReader(),a=[],c=0;for(;;){let{done:u,value:f}=await o.read();if(u)break;a.push(f),c+=f.length,t&&t(c,Math.max(n,c))}let l=new Uint8Array(c),h=0;for(let u of a)l.set(u,h),h+=u.length;return s(l.buffer)}function uS(r){let t=new Uint8Array(r),e=new DataView(r);if(String.fromCharCode(t[0],t[1],t[2],t[3])!=="SCTX")throw new Error("bad texture pack");let n=e.getUint32(4,!0),i=JSON.parse(new TextDecoder().decode(t.subarray(8,8+n))),s=8+n,o=new Map;for(let a of i.items)o.set(a.name,{...a,blob:new Blob([t.subarray(s+a.off,s+a.off+a.len)],{type:"image/webp"})});return o}async function xf(r){if(typeof createImageBitmap=="function")try{return await createImageBitmap(r)}catch{}return await new Promise((t,e)=>{let n=URL.createObjectURL(r),i=new Image;i.onload=()=>{URL.revokeObjectURL(n),t(i)},i.onerror=()=>{URL.revokeObjectURL(n),e(new Error("image decode failed"))},i.src=n})}var ur=null,Jm=null;function fS(r,t){return ur||(ur=document.createElement("canvas"),Jm=ur.getContext("2d",{willReadFrequently:!0})),(ur.width!==r||ur.height!==t)&&(ur.width=r,ur.height=t),Jm}function Xl(r,t,e,n,i=0){let s=fS(t,e);s.globalCompositeOperation="copy",s.drawImage(r,0,0,t,e);let o=s.getImageData(0,0,t,e).data;for(let a=0,c=t*e;a<c;a++)n[i+a]=o[a*4];return n}async function co(r,t,{srgb:e=!0,repeat:n=!1,flipY:i=!1}={}){let s=r.get(t);if(!s)return null;let o=await xf(s.blob),a=new ke(o);return a.flipY=i,a.colorSpace=e?Ae:kn,a.generateMipmaps=!0,a.minFilter=tn,a.magFilter=Se,a.anisotropy=4,n&&(a.wrapS=a.wrapT=Zn),a.needsUpdate=!0,a}async function jm(r){let t=Object.values(Ea),e={},n={};t.forEach(h=>{e[h]=0,n[h]=Qm[h]||1e6});let i=()=>{let h=0,u=0;for(let f of t)h+=e[f],u+=n[f];r&&r(Math.min(1,h/u))},s=h=>hS(h,(u,f)=>{e[h]=u,n[h]=f,i()}),[o,a,c,l]=await Promise.all([s(Ea.city),s(Ea.tex),s(Ea.arena),s(Ea.models).catch(()=>null)]);return{kit:$m(o),pack:uS(a),arena:JSON.parse(new TextDecoder().decode(c)),models:l}}var lo=Math.pow(2,-24),Aa=Symbol("SKIP_GENERATION"),ql={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Aa]:!1};function ye(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function Ra(r){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=r[n+3]-r[n];i>e&&(e=i,t=n)}return t}function _f(r,t,e){for(let n=0;n<3;n++){let i=t[r+2*n],s=t[r+2*n+1],o=i-s,a=i+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Yl(r){let t=r[3]-r[0],e=r[4]-r[1],n=r[5]-r[2];return 2*(t*e+e*n+n*t)}function ie(r,t){return t[r+15]===65535}function de(r,t){return t[r+6]}function ge(r,t){return t[r+14]}function ce(r){return r+8}function le(r,t){let e=t[r+6];return r+e*8}function ho(r,t){return t[r+7]}function Kl(r,t,e,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0,u=1/0,f=1/0,d=1/0,g=-1/0,x=-1/0,p=-1/0,m=r.offset||0;for(let _=(t-m)*6,M=(t+e-m)*6;_<M;_+=6){let v=r[_+0],S=r[_+1],T=v-S,y=v+S;T<s&&(s=T),y>c&&(c=y),v<u&&(u=v),v>g&&(g=v);let b=r[_+2],E=r[_+3],R=b-E,P=b+E;R<o&&(o=R),P>l&&(l=P),b<f&&(f=b),b>x&&(x=b);let C=r[_+4],D=r[_+5],I=C-D,U=C+D;I<a&&(a=I),U>h&&(h=U),C<d&&(d=C),C>p&&(p=C)}n[0]=s,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=h,i[0]=u,i[1]=f,i[2]=d,i[3]=g,i[4]=x,i[5]=p}var Ti=8,vf=8,yf=new Int32Array(Ti),bi=new Float32Array(Ti*6),uo=new Float32Array(Ti*6),li=new Float32Array(6),Zl=new Float32Array(6),Ms=new Int32Array(vf),e0=new Float32Array(vf*6);function mS(r,t,e,n){for(let i=0;i<3;i++){let s=t[r+2*i],o=t[r+2*i+1],a=s-o,c=s+o;a<e[n+i]&&(e[n+i]=a),c>e[n+i+3]&&(e[n+i+3]=c)}}function n0(r,t){let e=r[t+3]-r[t],n=r[t+4]-r[t+1],i=r[t+5]-r[t+2];return 2*(e*n+n*i+i*e)}function i0(r,t,e,n,i,s){let o=-1,a=0;if(s===0)o=Ra(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=Ra(r),o!==-1&&(a=gS(e,n,i,o));else if(s===2){let c=Yl(r),l=1.25*i,h=e.offset||0,u=(n-h)*6,f=(n+i-h)*6;for(let d=0;d<3;d++){let g=t[d],m=(t[d+3]-g)/Ti;if(i<vf){for(let _=0;_<i;_++){let M=u+_*6,v=e[M+2*d],S=_;for(;S>0&&e[Ms[S-1]+2*d]>v;)Ms[S]=Ms[S-1],S--;Ms[S]=M}for(let _=0;_<3;_++)li[_]=1/0,li[_+3]=-1/0,Zl[_]=1/0,Zl[_+3]=-1/0;for(let _=i-1;_>=0;_--)_f(Ms[_],e,Zl),e0.set(Zl,_*6);for(let _=0;_<i-1;_++){_f(Ms[_],e,li);let M=e[Ms[_+1]+2*d];if(e[Ms[_]+2*d]===M)continue;let v=_+1,S=i-v,T=Yl(li)/c,y=n0(e0,v*6)/c,b=1+1.25*(T*v+y*S);b<l&&(o=d,l=b,a=M)}}else{for(let v=0;v<Ti;v++){yf[v]=0;for(let S=0;S<3;S++)bi[v*6+S]=1/0,bi[v*6+S+3]=-1/0}for(let v=u;v<f;v+=6){let y=~~((e[v+2*d]-g)/m);y>=Ti&&(y=Ti-1),yf[y]++,mS(v,e,bi,y*6)}let _=(Ti-1)*6;for(let v=0;v<6;v++)uo[_+v]=bi[_+v];for(let v=Ti-2;v>=0;v--){let S=v*6,T=S+6;for(let y=0;y<3;y++)uo[S+y]=Math.min(bi[S+y],uo[T+y]),uo[S+y+3]=Math.max(bi[S+y+3],uo[T+y+3])}let M=0;for(let v=0;v<Ti-1;v++){let S=v*6,T=yf[v];if(T!==0)for(let P=0;P<3;P++)M===0?(li[P]=bi[S+P],li[P+3]=bi[S+P+3]):(li[P]=Math.min(li[P],bi[S+P]),li[P+3]=Math.max(li[P+3],bi[S+P+3]));M+=T;let y=0,b=0;M!==0&&(y=Yl(li)/c);let E=i-M;E!==0&&(b=n0(uo,S+6)/c);let R=1+1.25*(y*M+b*E);R<l&&(o=d,l=R,a=g+m+v*m)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function gS(r,t,e,n){let i=0,s=r.offset;for(let o=t,a=t+e;o<a;o++)i+=r[(o-s)*6+n*2];return i/e}function s0(r,t,e,n,i,s){let o=n,a=n+i-1,c=s.pos,l=s.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+l]<c;)o++;for(;o<=a&&e[(a-h)*6+l]>=c;)a--;if(o<a){for(let u=0;u<t;u++){let f=r[o*t+u];r[o*t+u]=r[a*t+u],r[a*t+u]=f}for(let u=0;u<6;u++){let f=o-h,d=a-h,g=e[f*6+u];e[f*6+u]=e[d*6+u],e[d*6+u]=g}o++,a--}else return o}}var xS=Math.pow(2,32),fo=new Float32Array(6),$l=new Float32Array(6);function _S(r,t,e,n,i,s){let{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:f=!1}=i,d=r.primitiveBuffer,g=r.primitiveBufferStride,x=f?SharedArrayBuffer:ArrayBuffer,p=new x(32*Math.max(1,2*Math.ceil(n)-1)),m=new Float32Array(p),_=new Uint32Array(p),M=new Uint16Array(p),v=0,S=!1;return Kl(t,e,n,fo,$l),b(e,n,0),p.slice(0,v*32);function T(E){u&&u((E-s.offset)/s.count)}function y(E,R,P){let C=E*2;_[E+6]=R,M[C+14]=P,M[C+15]=65535,T(R+P)}function b(E,R,P){let C=v++,D=C*8;m.set(fo,D),!S&&P>=o&&(S=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let I=R>l;if(R<=c&&!I||P>=o){y(D,E,R);return}let U=i0(fo,$l,t,E,R,h),k=U.axis===-1?-1:s0(d,g,t,E,R,U);if(U.axis===-1||k===E||k===E+R){if(!I){y(D,E,R);return}U.axis=Math.max(0,Ra(fo)),k=E+Math.max(1,Math.floor(R/2))}_[D+7]=U.axis;let V=k-E;Kl(t,E,V,fo,$l),b(E,V,P+1);let tt=v-C;if(tt>xS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");_[D+6]=tt;let W=R-V;Kl(t,k,W,fo,$l),b(k,W,P+1)}}function r0(r,t){let e=r.getRootRanges(t.range),n=e[0],i=e[e.length-1],s={offset:n.offset,count:i.offset+i.count-n.offset},o=new Float32Array(6*s.count);o.offset=s.offset,r.computePrimitiveBounds(s.offset,s.count,o),r._roots=e.map(a=>_S(r,o,a.offset,a.count,t,s))}var Ss=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Mf=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Jt=new Mf;var bs,mo,po=[],Jl=new Ss(()=>new oe);function o0(r,t,e,n,i,s){bs=Jl.getPrimitive(),mo=Jl.getPrimitive(),po.push(bs,mo),Jt.setBuffer(r._roots[t]);let o=Sf(0,r.geometry,e,n,i,s);Jt.clearBuffer(),Jl.releasePrimitive(bs),Jl.releasePrimitive(mo),po.pop(),po.pop();let a=po.length;return a>0&&(mo=po[a-1],bs=po[a-2]),o}function Sf(r,t,e,n,i=null,s=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=Jt,h=r*2;if(ie(h,c)){let f=de(r,l),d=ge(h,c);return ye(r,a,bs),n(f,d,!1,o,s+r/8,bs)}else{let R=function(C){let{uint16Array:D,uint32Array:I}=Jt,U=C*2;for(;!ie(U,D);)C=ce(C),U=C*2;return de(C,I)},P=function(C){let{uint16Array:D,uint32Array:I}=Jt,U=C*2;for(;!ie(U,D);)C=le(C,I),U=C*2;return de(C,I)+ge(U,D)},f=ce(r),d=le(r,l),g=f,x=d,p,m,_,M;if(i&&(_=bs,M=mo,ye(g,a,_),ye(x,a,M),p=i(_),m=i(M),m<p)){g=d,x=f;let C=p;p=m,m=C,_=M}_||(_=bs,ye(g,a,_));let v=ie(g*2,c),S=e(_,v,p,o+1,s+g/8),T;if(S===2){let C=R(g),I=P(g)-C;T=n(C,I,!0,o+1,s+g/8,_)}else T=S&&Sf(g,t,e,n,i,s,o+1);if(T)return!0;M=mo,ye(x,a,M);let y=ie(x*2,c),b=e(M,y,m,o+1,s+x/8),E;if(b===2){let C=R(x),I=P(x)-C;E=n(C,I,!0,o+1,s+x/8,M)}else E=b&&Sf(x,t,e,n,i,s,o+1);return!!E}}var Ca=new Jt.constructor,Ql=new Jt.constructor,Ts=new Ss(()=>new oe),go=new oe,xo=new oe,Tf=new oe,wf=new oe,Ef=!1;function a0(r,t,e,n){if(Ef)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ef=!0;let i=r._roots,s=t._roots,o,a=0,c=0,l=new yt().copy(e).invert();for(let h=0,u=i.length;h<u;h++){Ca.setBuffer(i[h]),c=0;let f=Ts.getPrimitive();ye(0,Ca.float32Array,f),f.applyMatrix4(l);for(let d=0,g=s.length;d<g&&(Ql.setBuffer(s[d]),o=hi(0,0,e,l,n,a,c,0,0,f),Ql.clearBuffer(),c+=s[d].byteLength/32,!o);d++);if(Ts.releasePrimitive(f),Ca.clearBuffer(),a+=i[h].byteLength/32,o)break}return Ef=!1,o}function hi(r,t,e,n,i,s=0,o=0,a=0,c=0,l=null,h=!1){let u,f;h?(u=Ql,f=Ca):(u=Ca,f=Ql);let d=u.float32Array,g=u.uint32Array,x=u.uint16Array,p=f.float32Array,m=f.uint32Array,_=f.uint16Array,M=r*2,v=t*2,S=ie(M,x),T=ie(v,_),y=!1;if(T&&S)h?y=i(de(t,m),ge(t*2,_),de(r,g),ge(r*2,x),c,o+t/8,a,s+r/8):y=i(de(r,g),ge(r*2,x),de(t,m),ge(t*2,_),a,s+r/8,c,o+t/8);else if(T){let b=Ts.getPrimitive();ye(t,p,b),b.applyMatrix4(e);let E=ce(r),R=le(r,g);ye(E,d,go),ye(R,d,xo);let P=b.intersectsBox(go),C=b.intersectsBox(xo);y=P&&hi(t,E,n,e,i,o,s,c,a+1,b,!h)||C&&hi(t,R,n,e,i,o,s,c,a+1,b,!h),Ts.releasePrimitive(b)}else{let b=ce(t),E=le(t,m);ye(b,p,Tf),ye(E,p,wf);let R=l.intersectsBox(Tf),P=l.intersectsBox(wf);if(R&&P)y=hi(r,b,e,n,i,s,o,a,c+1,l,h)||hi(r,E,e,n,i,s,o,a,c+1,l,h);else if(R)if(S)y=hi(r,b,e,n,i,s,o,a,c+1,l,h);else{let C=Ts.getPrimitive();C.copy(Tf).applyMatrix4(e);let D=ce(r),I=le(r,g);ye(D,d,go),ye(I,d,xo);let U=C.intersectsBox(go),k=C.intersectsBox(xo);y=U&&hi(b,D,n,e,i,o,s,c,a+1,C,!h)||k&&hi(b,I,n,e,i,o,s,c,a+1,C,!h),Ts.releasePrimitive(C)}else if(P)if(S)y=hi(r,E,e,n,i,s,o,a,c+1,l,h);else{let C=Ts.getPrimitive();C.copy(wf).applyMatrix4(e);let D=ce(r),I=le(r,g);ye(D,d,go),ye(I,d,xo);let U=C.intersectsBox(go),k=C.intersectsBox(xo);y=U&&hi(E,D,n,e,i,o,s,c,a+1,C,!h)||k&&hi(E,I,n,e,i,o,s,c,a+1,C,!h),Ts.releasePrimitive(C)}}return y}var jl=new class{constructor(){let r=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=r=s._roots[o],this.uint16Array=e=new Uint16Array(r),this.uint32Array=t=new Uint32Array(r)},this.reset=()=>{this.root=null,this.buffer=r=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!ie(o,e);)s=ce(s),o=s*2;return de(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!ie(o,e);)s=le(s,t),o=s*2;return de(s,t)+ge(o,e)};let i=(s,o,a)=>{let c=o*2,l=ie(c,e);if(!s(a,l,o)&&!l){let u=ce(o),f=le(o,t);i(s,u,a+1),i(s,f,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,c)=>{if(a){let l=c*2,h=t[c+6],u=e[l+14];return s(o,a,new Float32Array(r,c*4,6),h,u)}else{let l=ho(c,t);return s(o,a,new Float32Array(r,c*4,6),l)}})}}};var c0=new oe,_o=new Float32Array(6),th=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...ql,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),r0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let s=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,h=-1/0;for(let u=t,f=t+e;u<f;u++){this.writePrimitiveBounds(u,_o,0);let[d,g,x,p,m,_]=_o;d<s&&(s=d),p>c&&(c=p),g<o&&(o=g),m>l&&(l=m),x<a&&(a=x),_>h&&(h=_)}return n[i+0]=s,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=h,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,_o,0);let[a,c,l,h,u,f]=_o,d=(a+h)/2,g=(c+u)/2,x=(l+f)/2,p=(h-a)/2,m=(u-c)/2,_=(f-l)/2,M=(s-i)*6;n[M+0]=d,n[M+1]=p+(Math.abs(d)+p)*lo,n[M+2]=g,n[M+3]=m+(Math.abs(g)+m)*lo,n[M+4]=x,n[M+5]=_+(Math.abs(x)+_)*lo}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let s=n[i],o=new Uint32Array(s),a=new Uint16Array(s),c=s.byteLength/32;for(let l=0;l<c;l++){let h=8*l,u=2*h;ie(u,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){jl.setBVH(this,e),jl.traverse(t),jl.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],s=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/32;for(let l=c-1;l>=0;l--){let h=l*8,u=h*2;if(ie(u,o)){let d=de(h,s),g=ge(u,o);this.writePrimitiveRangeBounds(d,g,_o,0),a.set(_o,h)}else{let d=ce(h),g=le(h,s);for(let x=0;x<3;x++){let p=a[d+x],m=a[d+x+3],_=a[g+x],M=a[g+x+3];a[h+x]=p<_?p:_,a[h+x+3]=m>M?m:M}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ye(0,new Float32Array(n),c0),t.union(c0)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(i&&s){let u=i;i=(f,d,g,x,p)=>u(f,d,g,x,p)?!0:a(f,d,this,s,g,x,o)}else i||(s?i=(u,f,d,g)=>a(u,f,this,s,d,g,o):i=(u,f,d)=>d);let c=!1,l=0,h=this._roots;for(let u=0,f=h.length;u<f;u++){let d=h[u];if(c=o0(this,u,n,i,e,l),c)break;l+=d.byteLength/32}return c}bvhcast(t,e,n){let{intersectsRanges:i}=n;return a0(this,t,e,i)}};function l0(){return typeof SharedArrayBuffer<"u"}function Af(r){return r.index?r.index.count:r.attributes.position.count}function ws(r){return Af(r)/3}function vS(r,t=ArrayBuffer){return r>65535?new Uint32Array(new t(4*r)):new Uint16Array(new t(2*r))}function h0(r,t){if(!r.index){let e=r.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=vS(e,n);r.setIndex(new Ft(i,1));for(let s=0;s<e;s++)i[s]=s}}function MS(r,t,e){let n=Af(r)/e,i=t||r.drawRange,s=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,s),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function SS(r,t){return r.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Rf(r,t,e){let n=MS(r,t,e),i=SS(r,e);if(!i.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,c=Af(r)/e,l=[];for(let f of i){let{offset:d,count:g}=f,x=d,p=isFinite(g)?g:c-d,m=d+p;x<a&&m>o&&(l.push({pos:Math.max(o,x),isStart:!0}),l.push({pos:Math.min(a,m),isStart:!1}))}l.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let h=0,u=null;for(let f of l){let d=f.pos;h!==0&&d!==u&&s.push({offset:u,count:d-u}),h+=f.isStart?1:-1,u=d}return s}function bS(r,t){let e=r[r.length-1],n=e.offset+e.count>2**16,i=r.reduce((l,h)=>l+h.count,0),s=n?4:2,o=t?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),a=n?new Uint32Array(o):new Uint16Array(o),c=0;for(let l=0;l<r.length;l++){let{offset:h,count:u}=r[l];for(let f=0;f<u;f++)a[c+f]=h+f;c+=u}return a}var eh=class extends th{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!l0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...ql,...e},e[Aa]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=Rf(e,t.range,n),s=bS(i,t.useSharedArrayBuffer);this._indirectBuffer=s}else h0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new oe))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Rf(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Vn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){let c=t[s][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};Vn.prototype.setFromBox=(function(){let r=new L;return function(e,n){let i=n.min,s=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let h=0;h<=1;h++){r.x=i.x*c+s.x*(1-c),r.y=i.y*l+s.y*(1-l),r.z=i.z*h+s.z*(1-h);let u=e.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();var TS=(function(){let r=new L,t=new L,e=new L;return function(i,s,o){let a=i.start,c=r,l=s.start,h=t;e.subVectors(a,l),r.subVectors(i.end,i.start),t.subVectors(s.end,s.start);let u=e.dot(h),f=h.dot(c),d=h.dot(h),g=e.dot(c),p=c.dot(c)*d-f*f,m,_;p!==0?m=(u*f-g*d)/p:m=0,_=(u+m*f)/d,o.x=m,o.y=_}})(),Pa=(function(){let r=new Nt,t=new L,e=new L;return function(i,s,o,a){TS(i,s,r);let c=r.x,l=r.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),s.at(l,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;c<0?h=i.start:h=i.end;let u;l<0?u=s.start:u=s.end;let f=t,d=e;if(i.closestPointToPoint(u,!0,t),s.closestPointToPoint(h,!0,e),f.distanceToSquared(u)<=d.distanceToSquared(h)){o.copy(f),a.copy(u);return}else{o.copy(h),a.copy(d);return}}}})(),u0=(function(){let r=new L,t=new L,e=new Mn,n=new on;return function(s,o){let{radius:a,center:c}=s,{a:l,b:h,c:u}=o;if(n.start=l,n.end=h,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=a))return!0;let x=o.getPlane(e);if(Math.abs(x.distanceToPoint(c))<=a){let m=x.projectPoint(c,t);if(o.containsPoint(m))return!0}return!1}})();var wS=["x","y","z"],Qi=1e-15,f0=Qi*Qi;function Jn(r){return Math.abs(r)<Qi}var an=class extends pn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Vn),this.points=[this.a,this.b,this.c],this.plane=new Mn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new on,this.needsUpdate=!0}intersectsSphere(t){return u0(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=s[1],h=o[1];l.subVectors(t,e),h.setFromPoints(l,i);let u=s[2],f=o[2];u.subVectors(e,n),f.setFromPoints(u,i);let d=s[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,i);let x=l.length(),p=u.length(),m=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<Qi?p<Qi||m<Qi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):p<Qi?m<Qi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):m<Qi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};an.prototype.closestPointToSegment=(function(){let r=new L,t=new L,e=new on;return function(i,s=null,o=null){this.needsUpdate&&this.update();let{start:a,end:c}=i,l=this.points,h,u=1/0,f=this.plane.distanceToPoint(a),d=this.plane.distanceToPoint(c);if(f*d<0&&this.plane.intersectLine(i,r)!==null&&this.containsPoint(r))return s&&s.copy(r),o&&o.copy(r),0;for(let g=0;g<3;g++){let x=(g+1)%3;e.start.copy(l[g]),e.end.copy(l[x]),Pa(e,i,r,t),h=r.distanceToSquared(t),h<u&&(u=h,s&&s.copy(r),o&&o.copy(t))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(c,r),h=c.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(c)),Math.sqrt(u)}})();an.prototype.intersectsTriangle=(function(){let r=new an,t=new Vn,e=new Vn,n=new L,i=new L,s=new L,o=new L,a=new on,c=new on,l=new L,h=new Nt,u=new Nt;function f(M,v,S,T){let y=n;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?y.copy(M.plane.normal):y.copy(v.plane.normal);let b=M.satBounds,E=M.satAxes;for(let C=1;C<4;C++){let D=b[C],I=E[C];if(t.setFromPoints(I,v.points),D.isSeparated(t)||(o.copy(y).cross(I),t.setFromPoints(o,M.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}let R=v.satBounds,P=v.satAxes;for(let C=1;C<4;C++){let D=R[C],I=P[C];if(t.setFromPoints(I,M.points),D.isSeparated(t)||(o.crossVectors(y,I),t.setFromPoints(o,M.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}return S&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function d(M,v,S,T,y,b,E,R,P,C,D){let I=E/(E-R);C.x=T+(y-T)*I,D.start.subVectors(v,M).multiplyScalar(I).add(M),I=E/(E-P),C.y=T+(b-T)*I,D.end.subVectors(S,M).multiplyScalar(I).add(M)}function g(M,v,S,T,y,b,E,R,P,C,D){if(y>0)d(M.c,M.a,M.b,T,v,S,P,E,R,C,D);else if(b>0)d(M.b,M.a,M.c,S,v,T,R,E,P,C,D);else if(R*P>0||E!=0)d(M.a,M.b,M.c,v,S,T,E,R,P,C,D);else if(R!=0)d(M.b,M.a,M.c,S,v,T,R,E,P,C,D);else if(P!=0)d(M.c,M.a,M.b,T,v,S,P,E,R,C,D);else return!0;return!1}function x(M,v,S,T){let y=v.degenerateSegment,b=M.plane.distanceToPoint(y.start),E=M.plane.distanceToPoint(y.end);return Jn(b)?Jn(E)?f(M,v,S,T):(S&&(S.start.copy(y.start),S.end.copy(y.start)),M.containsPoint(y.start)):Jn(E)?(S&&(S.start.copy(y.end),S.end.copy(y.end)),M.containsPoint(y.end)):M.plane.intersectLine(y,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),M.containsPoint(n)):!1}function p(M,v,S){let T=v.a;return Jn(M.plane.distanceToPoint(T))&&M.containsPoint(T)?(S&&(S.start.copy(T),S.end.copy(T)),!0):!1}function m(M,v,S){let T=M.degenerateSegment,y=v.a;return T.closestPointToPoint(y,!0,n),y.distanceToSquared(n)<f0?(S&&(S.start.copy(y),S.end.copy(y)),!0):!1}function _(M,v,S,T){if(M.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){let y=M.degenerateSegment,b=v.degenerateSegment,E=i,R=s;y.delta(E),b.delta(R);let P=n.subVectors(b.start,y.start),C=E.x*R.y-E.y*R.x;if(Jn(C))return!1;let D=(P.x*R.y-P.y*R.x)/C,I=-(E.x*P.y-E.y*P.x)/C;if(D<0||D>1||I<0||I>1)return!1;let U=y.start.z+E.z*D,k=b.start.z+R.z*I;return Jn(U-k)?(S&&(S.start.copy(y.start).addScaledVector(E,D),S.end.copy(y.start).addScaledVector(E,D)),!0):!1}else return v.isDegenerateIntoPoint?m(M,v,S):x(v,M,S,T);else{if(M.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(M.a)<f0?(S&&(S.start.copy(M.a),S.end.copy(M.a)),!0):!1:v.isDegenerateIntoSegment?m(v,M,S):p(v,M,S);if(v.isDegenerateIntoPoint)return p(M,v,S);if(v.isDegenerateIntoSegment)return x(M,v,S,T)}}return function(v,S=null,T=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(r.copy(v),r.update(),v=r);let y=_(this,v,S,T);if(y!==void 0)return y;let b=this.plane,E=v.plane,R=E.distanceToPoint(this.a),P=E.distanceToPoint(this.b),C=E.distanceToPoint(this.c);Jn(R)&&(R=0),Jn(P)&&(P=0),Jn(C)&&(C=0);let D=R*P,I=R*C;if(D>0&&I>0)return!1;let U=b.distanceToPoint(v.a),k=b.distanceToPoint(v.b),V=b.distanceToPoint(v.c);Jn(U)&&(U=0),Jn(k)&&(k=0),Jn(V)&&(V=0);let tt=U*k,W=U*V;if(tt>0&&W>0)return!1;i.copy(b.normal),s.copy(E.normal);let j=i.cross(s),et=0,xt=Math.abs(j.x),It=Math.abs(j.y);It>xt&&(xt=It,et=1),Math.abs(j.z)>xt&&(et=2);let at=wS[et],vt=this.a[at],Ct=this.b[at],pt=this.c[at],Ot=v.a[at],Ee=v.b[at],Et=v.c[at];if(g(this,vt,Ct,pt,D,I,R,P,C,h,a))return f(this,v,S,T);if(g(v,Ot,Ee,Et,tt,W,U,k,V,u,c))return f(this,v,S,T);if(h.y<h.x){let Xt=h.y;h.y=h.x,h.x=Xt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(u.y<u.x){let Xt=u.y;u.y=u.x,u.x=Xt,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return h.y<u.x||u.y<h.x?!1:(S&&(u.x>h.x?S.start.copy(c.start):S.start.copy(a.start),u.y<h.y?S.end.copy(c.end):S.end.copy(a.end)),!0)}})();an.prototype.distanceToPoint=(function(){let r=new L;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();an.prototype.distanceToTriangle=(function(){let r=new L,t=new L,e=["a","b","c"],n=new on,i=new on;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let h=1/0;for(let u=0;u<3;u++){let f,d=e[u],g=o[d];this.closestPointToPoint(g,r),f=g.distanceToSquared(r),f<h&&(h=f,a&&a.copy(r),c&&c.copy(g));let x=this[d];o.closestPointToPoint(x,r),f=x.distanceToSquared(r),f<h&&(h=f,a&&a.copy(x),c&&c.copy(r))}for(let u=0;u<3;u++){let f=e[u],d=e[(u+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){let x=e[g],p=e[(g+1)%3];i.set(o[x],o[p]),Pa(n,i,r,t);let m=r.distanceToSquared(t);m<h&&(h=m,a&&a.copy(r),c&&c.copy(t))}}return Math.sqrt(h)}})();var Oe=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new yt,this.invMatrix=new yt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Vn),this.alignedSatBounds=new Array(3).fill().map(()=>new Vn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Oe.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let f=1*l|2*h|4*u,d=i[f];d.x=l?n.x:e.x,d.y=h?n.y:e.y,d.z=u?n.z:e.z,d.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let h=o[l],u=s[l],f=1<<l,d=i[f];h.subVectors(a,d),u.setFromPoints(h,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Oe.prototype.intersectsBox=(function(){let r=new Vn;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let c=0;c<3;c++){let l=o[c],h=s[c];if(r.setFromBox(l,e),h.isSeparated(r))return!1}return!0}})();Oe.prototype.intersectsTriangle=(function(){let r=new an,t=new Array(3),e=new Vn,n=new Vn,i=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],g=c[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let l=o.satBounds,h=o.satAxes,u=this.points;for(let f=0;f<3;f++){let d=l[f],g=h[f];if(e.setFromPoints(g,u),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=c[f];for(let g=0;g<4;g++){let x=h[g];if(i.crossVectors(d,x),e.setFromPoints(i,t),n.setFromPoints(i,u),e.isSeparated(n))return!1}}return!0}})();Oe.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Oe.prototype.distanceToPoint=(function(){let r=new L;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();Oe.prototype.distanceToBox=(function(){let r=["x","y","z"],t=new Array(12).fill().map(()=>new on),e=new Array(12).fill().map(()=>new on),n=new L,i=new L;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let h=a*a,u=o.min,f=o.max,d=this.points,g=1/0;for(let p=0;p<8;p++){let m=d[p];i.copy(m).clamp(u,f);let _=m.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(m),l&&l.copy(i),_<h))return Math.sqrt(_)}let x=0;for(let p=0;p<3;p++)for(let m=0;m<=1;m++)for(let _=0;_<=1;_++){let M=(p+1)%3,v=(p+2)%3,S=m<<M|_<<v,T=1<<p|m<<M|_<<v,y=d[S],b=d[T];t[x].set(y,b);let R=r[p],P=r[M],C=r[v],D=e[x],I=D.start,U=D.end;I[R]=u[R],I[P]=m?u[P]:f[P],I[C]=_?u[C]:f[C],U[R]=f[R],U[P]=m?u[P]:f[P],U[C]=_?u[C]:f[C],x++}for(let p=0;p<=1;p++)for(let m=0;m<=1;m++)for(let _=0;_<=1;_++){i.x=p?f.x:u.x,i.y=m?f.y:u.y,i.z=_?f.z:u.z,this.closestPointToPoint(i,n);let M=i.distanceToSquared(n);if(M<g&&(g=M,c&&c.copy(n),l&&l.copy(i),M<h))return Math.sqrt(M)}for(let p=0;p<12;p++){let m=t[p];for(let _=0;_<12;_++){let M=e[_];Pa(m,M,n,i);let v=n.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(i),v<h))return Math.sqrt(v)}}return Math.sqrt(g)}})();var Cf=class extends Ss{constructor(){super(()=>new an)}},En=new Cf;var Ia=new L,Pf=new L;function d0(r,t,e={},n=0,i=1/0){let s=n*n,o=i*i,a=1/0,c=null;if(r.shapecast({boundsTraverseOrder:h=>(Ia.copy(t).clamp(h.min,h.max),Ia.distanceToSquared(t)),intersectsBounds:(h,u,f)=>f<a&&f<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,Ia);let f=t.distanceToSquared(Ia);return f<a&&(Pf.copy(Ia),a=f,c=u),f<s}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(Pf):e.point=Pf.clone(),e.distance=l,e.faceIndex=c,e}var nh=parseInt("187")>=169,ES=parseInt("187")<=161,fr=new L,dr=new L,pr=new L,ih=new Nt,sh=new Nt,rh=new Nt,p0=new L,m0=new L,g0=new L,La=new L;function AS(r,t,e,n,i,s,o,a){let c;if(s===Ye?c=r.intersectTriangle(n,e,t,!0,i):c=r.intersectTriangle(t,e,n,s!==Pe,i),c===null)return null;let l=r.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function x0(r,t,e,n,i,s,o,a,c,l,h){fr.fromBufferAttribute(t,s),dr.fromBufferAttribute(t,o),pr.fromBufferAttribute(t,a);let u=AS(r,fr,dr,pr,La,c,l,h);if(u){if(n){ih.fromBufferAttribute(n,s),sh.fromBufferAttribute(n,o),rh.fromBufferAttribute(n,a),u.uv=new Nt;let d=pn.getInterpolation(La,fr,dr,pr,ih,sh,rh,u.uv);nh||(u.uv=d)}if(i){ih.fromBufferAttribute(i,s),sh.fromBufferAttribute(i,o),rh.fromBufferAttribute(i,a),u.uv1=new Nt;let d=pn.getInterpolation(La,fr,dr,pr,ih,sh,rh,u.uv1);nh||(u.uv1=d),ES&&(u.uv2=u.uv1)}if(e){p0.fromBufferAttribute(e,s),m0.fromBufferAttribute(e,o),g0.fromBufferAttribute(e,a),u.normal=new L;let d=pn.getInterpolation(La,fr,dr,pr,p0,m0,g0,u.normal);u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1),nh||(u.normal=d)}let f={a:s,b:o,c:a,normal:new L,materialIndex:0};if(pn.getNormal(fr,dr,pr,f.normal),u.face=f,u.faceIndex=s,nh){let d=new L;pn.getBarycoord(La,fr,dr,pr,d),u.barycoord=d}}return u}function _0(r){return r&&r.isMaterial?r.side:r}function yo(r,t,e,n,i,s,o){let a=n*3,c=a+0,l=a+1,h=a+2,{index:u,groups:f}=r;r.index&&(c=u.getX(c),l=u.getX(l),h=u.getX(h));let{position:d,normal:g,uv:x,uv1:p}=r.attributes;if(Array.isArray(t)){let m=n*3;for(let _=0,M=f.length;_<M;_++){let{start:v,count:S,materialIndex:T}=f[_];if(m>=v&&m<v+S){let y=_0(t[T]),b=x0(e,d,g,x,p,c,l,h,y,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=T,i)i.push(b);else return b}}}else{let m=_0(t),_=x0(e,d,g,x,p,c,l,h,m,s,o);if(_)if(_.faceIndex=n,_.face.materialIndex=0,i)i.push(_);else return _}return null}function ve(r,t,e,n){let i=r.a,s=r.b,o=r.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function y0(r,t,e,n,i,s,o,a){let{geometry:c,_indirectBuffer:l}=r;for(let h=n,u=n+i;h<u;h++)yo(c,t,e,h,s,o,a)}function v0(r,t,e,n,i,s,o){let{geometry:a,_indirectBuffer:c}=r,l=1/0,h=null;for(let u=n,f=n+i;u<f;u++){let d;d=yo(a,t,e,u,null,s,o),d&&d.distance<l&&(h=d,l=d.distance)}return h}function M0(r,t,e,n,i,s,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=r,u=t+r;h<u;h++){let f;if(f=h,ve(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,s))return!0}return!1}function S0(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,o,a,c,l=0,h=r._roots;for(let f=0,d=h.length;f<d;f++)s=h[f],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(f,d,g=!1){let x=f*2;if(ie(x,a)){let p=de(f,o),m=ge(x,a),_=1/0,M=1/0,v=1/0,S=-1/0,T=-1/0,y=-1/0;for(let b=3*p,E=3*(p+m);b<E;b++){let R=n[b],P=i.getX(R),C=i.getY(R),D=i.getZ(R);P<_&&(_=P),P>S&&(S=P),C<M&&(M=C),C>T&&(T=C),D<v&&(v=D),D>y&&(y=D)}return c[f+0]!==_||c[f+1]!==M||c[f+2]!==v||c[f+3]!==S||c[f+4]!==T||c[f+5]!==y?(c[f+0]=_,c[f+1]=M,c[f+2]=v,c[f+3]=S,c[f+4]=T,c[f+5]=y,!0):!1}else{let p=ce(f),m=le(f,o),_=g,M=!1,v=!1;if(t){if(!_){let R=p/8+d/32,P=m/8+d/32;M=t.has(R),v=t.has(P),_=!M&&!v}}else M=!0,v=!0;let S=_||M,T=_||v,y=!1;S&&(y=u(p,d,_));let b=!1;T&&(b=u(m,d,_));let E=y||b;if(E)for(let R=0;R<3;R++){let P=p+R,C=m+R,D=c[P],I=c[P+3],U=c[C],k=c[C+3];c[f+R]=D<U?D:U,c[f+R+3]=I>k?I:k}return E}}}function gn(r,t,e,n,i){let s,o,a,c,l,h,u=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,x=e.origin.y,p=e.origin.z,m=t[r],_=t[r+3],M=t[r+1],v=t[r+3+1],S=t[r+2],T=t[r+3+2];return u>=0?(s=(m-g)*u,o=(_-g)*u):(s=(_-g)*u,o=(m-g)*u),f>=0?(a=(M-x)*f,c=(v-x)*f):(a=(v-x)*f,c=(M-x)*f),s>c||a>o||((a>s||isNaN(s))&&(s=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(S-p)*d,h=(T-p)*d):(l=(T-p)*d,h=(S-p)*d),s>h||l>o)?!1:((l>s||s!==s)&&(s=l),(h<o||o!==o)&&(o=h),s<=i&&o>=n)}function b0(r,t,e,n,i,s,o,a){let{geometry:c,_indirectBuffer:l}=r;for(let h=n,u=n+i;h<u;h++){let f=l?l[h]:h;yo(c,t,e,f,s,o,a)}}function T0(r,t,e,n,i,s,o){let{geometry:a,_indirectBuffer:c}=r,l=1/0,h=null;for(let u=n,f=n+i;u<f;u++){let d;d=yo(a,t,e,c?c[u]:u,null,s,o),d&&d.distance<l&&(h=d,l=d.distance)}return h}function w0(r,t,e,n,i,s,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let h=r,u=t+r;h<u;h++){let f;if(f=e.resolveTriangleIndex(h),ve(o,f*3,c,l),o.needsUpdate=!0,n(o,f,i,s))return!0}return!1}function E0(r,t,e,n,i,s,o){Jt.setBuffer(r._roots[t]),gn(0,Jt.float32Array,n,s,o)&&If(0,r,e,n,i,s,o),Jt.clearBuffer()}function If(r,t,e,n,i,s,o){let{float32Array:a,uint16Array:c,uint32Array:l}=Jt,h=r*2;if(ie(h,c)){let f=de(r,l),d=ge(h,c);y0(t,e,n,f,d,i,s,o)}else{let f=ce(r);gn(f,a,n,s,o)&&If(f,t,e,n,i,s,o);let d=le(r,l);gn(d,a,n,s,o)&&If(d,t,e,n,i,s,o)}}var RS=["x","y","z"];function A0(r,t,e,n,i,s){Jt.setBuffer(r._roots[t]);let o=null;return gn(0,Jt.float32Array,n,i,s)&&(o=Lf(0,r,e,n,i,s)),Jt.clearBuffer(),o}function Lf(r,t,e,n,i,s){let{float32Array:o,uint16Array:a,uint32Array:c}=Jt,l=r*2;if(ie(l,a)){let u=de(r,c),f=ge(l,a);return v0(t,e,n,u,f,i,s)}else{let u=ho(r,c),f=RS[u],g=n.direction[f]>=0,x,p;g?(x=ce(r),p=le(r,c)):(x=le(r,c),p=ce(r));let _=gn(x,o,n,i,s)?Lf(x,t,e,n,i,s):null;if(_){let S=_.point[f];if(g?S<=o[p+u]:S>=o[p+u+3])return _}let v=gn(p,o,n,i,s)?Lf(p,t,e,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var oh=new oe,vo=new an,Mo=new an,Na=new yt,R0=new Oe,ah=new Oe;function C0(r,t,e,n){Jt.setBuffer(r._roots[t]);let i=Nf(0,r,e,n);return Jt.clearBuffer(),i}function Nf(r,t,e,n,i=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Jt,c=r*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),R0.set(e.boundingBox.min,e.boundingBox.max,n),i=R0),ie(c,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,g=e.attributes.position,x=de(r,a),p=ge(c,o);if(Na.copy(n).invert(),e.boundsTree)return ye(r,s,ah),ah.matrix.copy(Na),ah.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>ah.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let M=x*3,v=(p+x)*3;M<v;M+=3)if(ve(Mo,M,u,f),Mo.needsUpdate=!0,_.intersectsTriangle(Mo))return!0;return!1}});{let m=ws(e);for(let _=x*3,M=(p+x)*3;_<M;_+=3){ve(vo,_,u,f),vo.a.applyMatrix4(Na),vo.b.applyMatrix4(Na),vo.c.applyMatrix4(Na),vo.needsUpdate=!0;for(let v=0,S=m*3;v<S;v+=3)if(ve(Mo,v,d,g),Mo.needsUpdate=!0,vo.intersectsTriangle(Mo))return!0}}}else{let h=ce(r),u=le(r,a);return ye(h,s,oh),!!(i.intersectsBox(oh)&&Nf(h,t,e,n,i)||(ye(u,s,oh),i.intersectsBox(oh)&&Nf(u,t,e,n,i)))}}var ch=new yt,Df=new Oe,Da=new Oe,CS=new L,PS=new L,IS=new L,LS=new L;function P0(r,t,e,n={},i={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Df.set(t.boundingBox.min,t.boundingBox.max,e),Df.needsUpdate=!0;let a=r.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,f=En.getPrimitive(),d=En.getPrimitive(),g=CS,x=PS,p=null,m=null;i&&(p=IS,m=LS);let _=1/0,M=null,v=null;return ch.copy(e).invert(),Da.matrix.copy(ch),r.shapecast({boundsTraverseOrder:S=>Df.distanceToBox(S),intersectsBounds:(S,T,y)=>y<_&&y<o?(T&&(Da.min.copy(S.min),Da.max.copy(S.max),Da.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:b=>Da.distanceToBox(b),intersectsBounds:(b,E,R)=>R<_&&R<o,intersectsRange:(b,E)=>{for(let R=b,P=b+E;R<P;R++){ve(d,3*R,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let C=S,D=S+T;C<D;C++){ve(f,3*C,l,c),f.needsUpdate=!0;let I=f.distanceToTriangle(d,g,p);if(I<_&&(x.copy(g),m&&m.copy(p),_=I,M=C,v=R),I<s)return!0}}}});{let y=ws(t);for(let b=0,E=y;b<E;b++){ve(d,3*b,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let R=S,P=S+T;R<P;R++){ve(f,3*R,l,c),f.needsUpdate=!0;let C=f.distanceToTriangle(d,g,p);if(C<_&&(x.copy(g),m&&m.copy(p),_=C,M=R,v=b),C<s)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=M,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(ch),x.applyMatrix4(ch),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function I0(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,o,a,c,l=0,h=r._roots;for(let f=0,d=h.length;f<d;f++)s=h[f],o=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(f,d,g=!1){let x=f*2;if(ie(x,a)){let p=de(f,o),m=ge(x,a),_=1/0,M=1/0,v=1/0,S=-1/0,T=-1/0,y=-1/0;for(let b=p,E=p+m;b<E;b++){let R=3*r.resolveTriangleIndex(b);for(let P=0;P<3;P++){let C=R+P;C=n?n[C]:C;let D=i.getX(C),I=i.getY(C),U=i.getZ(C);D<_&&(_=D),D>S&&(S=D),I<M&&(M=I),I>T&&(T=I),U<v&&(v=U),U>y&&(y=U)}}return c[f+0]!==_||c[f+1]!==M||c[f+2]!==v||c[f+3]!==S||c[f+4]!==T||c[f+5]!==y?(c[f+0]=_,c[f+1]=M,c[f+2]=v,c[f+3]=S,c[f+4]=T,c[f+5]=y,!0):!1}else{let p=ce(f),m=le(f,o),_=g,M=!1,v=!1;if(t){if(!_){let R=p/8+d/32,P=m/8+d/32;M=t.has(R),v=t.has(P),_=!M&&!v}}else M=!0,v=!0;let S=_||M,T=_||v,y=!1;S&&(y=u(p,d,_));let b=!1;T&&(b=u(m,d,_));let E=y||b;if(E)for(let R=0;R<3;R++){let P=p+R,C=m+R,D=c[P],I=c[P+3],U=c[C],k=c[C+3];c[f+R]=D<U?D:U,c[f+R+3]=I>k?I:k}return E}}}function L0(r,t,e,n,i,s,o){Jt.setBuffer(r._roots[t]),gn(0,Jt.float32Array,n,s,o)&&Ff(0,r,e,n,i,s,o),Jt.clearBuffer()}function Ff(r,t,e,n,i,s,o){let{float32Array:a,uint16Array:c,uint32Array:l}=Jt,h=r*2;if(ie(h,c)){let f=de(r,l),d=ge(h,c);b0(t,e,n,f,d,i,s,o)}else{let f=ce(r);gn(f,a,n,s,o)&&Ff(f,t,e,n,i,s,o);let d=le(r,l);gn(d,a,n,s,o)&&Ff(d,t,e,n,i,s,o)}}var NS=["x","y","z"];function N0(r,t,e,n,i,s){Jt.setBuffer(r._roots[t]);let o=null;return gn(0,Jt.float32Array,n,i,s)&&(o=Uf(0,r,e,n,i,s)),Jt.clearBuffer(),o}function Uf(r,t,e,n,i,s){let{float32Array:o,uint16Array:a,uint32Array:c}=Jt,l=r*2;if(ie(l,a)){let u=de(r,c),f=ge(l,a);return T0(t,e,n,u,f,i,s)}else{let u=ho(r,c),f=NS[u],g=n.direction[f]>=0,x,p;g?(x=ce(r),p=le(r,c)):(x=le(r,c),p=ce(r));let _=gn(x,o,n,i,s)?Uf(x,t,e,n,i,s):null;if(_){let S=_.point[f];if(g?S<=o[p+u]:S>=o[p+u+3])return _}let v=gn(p,o,n,i,s)?Uf(p,t,e,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var lh=new oe,So=new an,bo=new an,Fa=new yt,D0=new Oe,hh=new Oe;function F0(r,t,e,n){Jt.setBuffer(r._roots[t]);let i=Of(0,r,e,n);return Jt.clearBuffer(),i}function Of(r,t,e,n,i=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Jt,c=r*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),D0.set(e.boundingBox.min,e.boundingBox.max,n),i=D0),ie(c,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,g=e.attributes.position,x=de(r,a),p=ge(c,o);if(Fa.copy(n).invert(),e.boundsTree)return ye(r,s,hh),hh.matrix.copy(Fa),hh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>hh.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let M=x,v=p+x;M<v;M++)if(ve(bo,3*t.resolveTriangleIndex(M),u,f),bo.needsUpdate=!0,_.intersectsTriangle(bo))return!0;return!1}});{let m=ws(e);for(let _=x,M=p+x;_<M;_++){let v=t.resolveTriangleIndex(_);ve(So,3*v,u,f),So.a.applyMatrix4(Fa),So.b.applyMatrix4(Fa),So.c.applyMatrix4(Fa),So.needsUpdate=!0;for(let S=0,T=m*3;S<T;S+=3)if(ve(bo,S,d,g),bo.needsUpdate=!0,So.intersectsTriangle(bo))return!0}}}else{let h=ce(r),u=le(r,a);return ye(h,s,lh),!!(i.intersectsBox(lh)&&Of(h,t,e,n,i)||(ye(u,s,lh),i.intersectsBox(lh)&&Of(u,t,e,n,i)))}}var uh=new yt,Bf=new Oe,Ua=new Oe,DS=new L,FS=new L,US=new L,OS=new L;function U0(r,t,e,n={},i={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Bf.set(t.boundingBox.min,t.boundingBox.max,e),Bf.needsUpdate=!0;let a=r.geometry,c=a.attributes.position,l=a.index,h=t.attributes.position,u=t.index,f=En.getPrimitive(),d=En.getPrimitive(),g=DS,x=FS,p=null,m=null;i&&(p=US,m=OS);let _=1/0,M=null,v=null;return uh.copy(e).invert(),Ua.matrix.copy(uh),r.shapecast({boundsTraverseOrder:S=>Bf.distanceToBox(S),intersectsBounds:(S,T,y)=>y<_&&y<o?(T&&(Ua.min.copy(S.min),Ua.max.copy(S.max),Ua.needsUpdate=!0),!0):!1,intersectsRange:(S,T)=>{if(t.boundsTree){let y=t.boundsTree;return y.shapecast({boundsTraverseOrder:b=>Ua.distanceToBox(b),intersectsBounds:(b,E,R)=>R<_&&R<o,intersectsRange:(b,E)=>{for(let R=b,P=b+E;R<P;R++){let C=y.resolveTriangleIndex(R);ve(d,3*C,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=S,I=S+T;D<I;D++){let U=r.resolveTriangleIndex(D);ve(f,3*U,l,c),f.needsUpdate=!0;let k=f.distanceToTriangle(d,g,p);if(k<_&&(x.copy(g),m&&m.copy(p),_=k,M=D,v=R),k<s)return!0}}}})}else{let y=ws(t);for(let b=0,E=y;b<E;b++){ve(d,3*b,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let R=S,P=S+T;R<P;R++){let C=r.resolveTriangleIndex(R);ve(f,3*C,l,c),f.needsUpdate=!0;let D=f.distanceToTriangle(d,g,p);if(D<_&&(x.copy(g),m&&m.copy(p),_=D,M=R,v=b),D<s)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=M,i&&(i.point?i.point.copy(m):i.point=m.clone(),i.point.applyMatrix4(uh),x.applyMatrix4(uh),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function kf(r,t,e){return r===null?null:(r.point.applyMatrix4(t.matrixWorld),r.distance=r.point.distanceTo(e.ray.origin),r.object=t,r)}var fh=new Oe,dh=new si,O0=new L,B0=new yt,k0=new L,zf=["getX","getY","getZ"],To=class r extends eh{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(s));let a=new r(e,{...n,[Aa]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let l=e.getIndex();if(l===null){let h=new Ft(t.index,1,!1);e.setIndex(h)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let h=0;h<l.length;h++){let u=l[h],f=new Uint32Array(u),d=new Uint16Array(u);for(let g=0,x=u.byteLength/32;g<x;g++){let p=8*g,m=2*p;ie(m,d)||(f[p+6]=f[p+6]/8-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=(s?s[t]:t)*3,h=l+0,u=l+1,f=l+2;a&&(h=a[h],u=a[u],f=a[f]);for(let d=0;d<3;d++){let g=o[zf[d]](h),x=o[zf[d]](u),p=o[zf[d]](f),m=g;x<m&&(m=x),p<m&&(m=p);let _=g;x>_&&(_=x),p>_&&(_=p),e[n+d]=m,e[n+d+3]=_}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=o.array,h=o.offset||0,u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);let f=["getX","getY","getZ"],d=n.offset;for(let g=t,x=t+e;g<x;g++){let m=(s?s[g]:g)*3,_=(g-d)*6,M=m+0,v=m+1,S=m+2;a&&(M=a[M],v=a[v],S=a[S]),c||(M=M*u+h,v=v*u+h,S=S*u+h);for(let T=0;T<3;T++){let y,b,E;c?(y=o[f[T]](M),b=o[f[T]](v),E=o[f[T]](S)):(y=l[M+T],b=l[v+T],E=l[S+T]);let R=y;b<R&&(R=b),E<R&&(R=E);let P=y;b>P&&(P=b),E>P&&(P=E);let C=(P-R)/2,D=T*2;n[_+D+0]=R+C,n[_+D+1]=C+(Math.abs(R)+C)*lo}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;B0.copy(t.matrixWorld).invert(),dh.copy(e.ray).applyMatrix4(B0),k0.setFromMatrixScale(t.matrixWorld),O0.copy(dh.direction).multiply(k0);let s=O0.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let c=this.raycastFirst(dh,i,o,a);c=kf(c,t,e),c&&n.push(c)}else{let c=this.raycast(dh,i,o,a);for(let l=0,h=c.length;l<h;l++){let u=kf(c[l],t,e);u&&n.push(u)}}return n}refit(t=null){return(this.indirect?I0:S0)(this,t)}raycast(t,e=Un,n=0,i=1/0){let s=this._roots,o=[],a=this.indirect?L0:E0;for(let c=0,l=s.length;c<l;c++)a(this,c,e,t,o,n,i);return o}raycastFirst(t,e=Un,n=0,i=1/0){let s=this._roots,o=null,a=this.indirect?N0:A0;for(let c=0,l=s.length;c<l;c++){let h=a(this,c,e,t,n,i);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1,i=this._roots,s=this.indirect?F0:C0;for(let o=0,a=i.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=En.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?w0:M0});return En.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:s}=n,o=En.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let x=this.resolveTriangleIndex(g);ve(o,x*3,a,c)}:g=>{ve(o,g*3,a,c)},h=En.getPrimitive(),u=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{let x=t.resolveTriangleIndex(g);ve(h,x*3,u,f)}:g=>{ve(h,g*3,u,f)};if(s){if(!(t instanceof r))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let g=(x,p,m,_,M,v,S,T)=>{for(let y=m,b=m+_;y<b;y++){d(y),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let E=x,R=x+p;E<R;E++)if(l(E),o.needsUpdate=!0,s(o,h,E,y,M,v,S,T))return!0}return!1};if(i){let x=i;i=function(p,m,_,M,v,S,T,y){return x(p,m,_,M,v,S,T,y)?!0:g(p,m,_,M,v,S,T,y)}}else i=g}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return fh.set(t.min,t.max,e),fh.needsUpdate=!0,this.shapecast({intersectsBounds:n=>fh.intersectsBox(n),intersectsTriangle:n=>fh.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},s=0,o=1/0){return(this.indirect?U0:P0)(this,t,e,n,i,s,o)}closestPointToPoint(t,e={},n=0,i=1/0){return d0(this,t,e,n,i)}};var mr=class{constructor(t=65536,e=1<<17){this.pos=new Float32Array(t*3),this.nor=new Int8Array(t*4),this.uv=new Float32Array(t*2),this.mat=new Uint8Array(t*4),this.idx=new Uint32Array(e),this.nv=0,this.ni=0}_growV(t){let e=this.nv+t,n=this.pos.length/3;if(e<=n)return;for(;n<e;)n*=2;let i=(s,o)=>{let a=new s.constructor(o);return a.set(s),a};this.pos=i(this.pos,n*3),this.nor=i(this.nor,n*4),this.uv=i(this.uv,n*2),this.mat=i(this.mat,n*4)}_growI(t){let e=this.ni+t,n=this.idx.length;if(e<=n)return;for(;n<e;)n*=2;let i=new Uint32Array(n);i.set(this.idx),this.idx=i}addKit(t,e,n,i){this._growV(t.nv),this._growI(t.nt*3);let{i16:s,u8:o,i8:a,idx:c}=t,l=this.nv,h=this.pos,u=this.nor,f=this.uv,d=this.mat,g=Math.hypot(e[0],e[1],e[2]),x=Math.hypot(e[4],e[5],e[6]),p=Math.hypot(e[8],e[9],e[10]),m=e[0]/(g*g),_=e[1]/(g*g),M=e[2]/(g*g),v=e[4]/(x*x),S=e[5]/(x*x),T=e[6]/(x*x),y=e[8]/(p*p),b=e[9]/(p*p),E=e[10]/(p*p);for(let C=0;C<t.nv;C++){let D=s[C*8]*n,I=s[C*8+1]*n,U=s[C*8+2]*n,k=(l+C)*3;h[k]=e[0]*D+e[4]*I+e[8]*U+e[12],h[k+1]=e[1]*D+e[5]*I+e[9]*U+e[13],h[k+2]=e[2]*D+e[6]*I+e[10]*U+e[14];let V=a[C*16+8],tt=a[C*16+9],W=a[C*16+10],j=m*V+v*tt+y*W,et=_*V+S*tt+b*W,xt=M*V+T*tt+E*W,It=127/(Math.hypot(j,et,xt)||1),K=(l+C)*4;u[K]=Math.round(j*It),u[K+1]=Math.round(et*It),u[K+2]=Math.round(xt*It),f[(l+C)*2]=s[C*8+6]*i,f[(l+C)*2+1]=s[C*8+7]*i,d[K]=o[C*16+6],d[K+1]=o[C*16+7],d[K+2]=o[C*16+11],d[K+3]=0}let R=this.idx,P=this.ni;for(let C=0;C<c.length;C++)R[P+C]=c[C]+l;this.nv+=t.nv,this.ni+=c.length}quad(t,e,n,i,s,o,a=0,c=0,l=1,h=1){this._growV(4),this._growI(6);let u=this.nv,f=this.pos,d=this.nor,g=this.uv,x=this.mat,p=[t,e,n,i],m=[[a,c],[l,c],[l,h],[a,h]];for(let v=0;v<4;v++){let S=(u+v)*3,T=(u+v)*4;f[S]=p[v][0],f[S+1]=p[v][1],f[S+2]=p[v][2],d[T]=Math.round(s[0]*127),d[T+1]=Math.round(s[1]*127),d[T+2]=Math.round(s[2]*127),g[(u+v)*2]=m[v][0],g[(u+v)*2+1]=m[v][1],x[T]=o[0],x[T+1]=o[1],x[T+2]=o[2],x[T+3]=o[3]||0}let _=this.idx,M=this.ni;_[M]=u,_[M+1]=u+1,_[M+2]=u+2,_[M+3]=u,_[M+4]=u+2,_[M+5]=u+3,this.nv+=4,this.ni+=6}box(t,e,n,i,s,o,a,c,l=4,h=!0){let u=Math.cos(a),f=Math.sin(a),d=(p,m,_)=>[t+p*u+_*f,e+m,n-p*f+_*u],g=(p,m,_)=>[p*u+_*f,m,-p*f+_*u],x=1/l;this.quad(d(i,-s,o),d(i,-s,-o),d(i,s,-o),d(i,s,o),g(1,0,0),c,0,0,2*o*x,2*s*x),this.quad(d(-i,-s,-o),d(-i,-s,o),d(-i,s,o),d(-i,s,-o),g(-1,0,0),c,0,0,2*o*x,2*s*x),this.quad(d(-i,-s,o),d(i,-s,o),d(i,s,o),d(-i,s,o),g(0,0,1),c,0,0,2*i*x,2*s*x),this.quad(d(i,-s,-o),d(-i,-s,-o),d(-i,s,-o),d(i,s,-o),g(0,0,-1),c,0,0,2*i*x,2*s*x),this.quad(d(-i,s,o),d(i,s,o),d(i,s,-o),d(-i,s,-o),[0,1,0],c,0,0,2*i*x,2*o*x),h||this.quad(d(-i,-s,-o),d(i,-s,-o),d(i,-s,o),d(-i,-s,o),[0,-1,0],c,0,0,2*i*x,2*o*x)}cyl(t,e,n,i,s,o,a,c,l=4,h=!0,u=!1){let f=e-o/2,d=e+o/2,g=1/l;for(let x=0;x<a;x++){let p=x/a*Math.PI*2,m=(x+1)/a*Math.PI*2,_=(p+m)/2,M=[t+Math.cos(p)*i,f,n+Math.sin(p)*i],v=[t+Math.cos(m)*i,f,n+Math.sin(m)*i],S=[t+Math.cos(m)*s,d,n+Math.sin(m)*s],T=[t+Math.cos(p)*s,d,n+Math.sin(p)*s];this.quad(v,M,T,S,[Math.cos(_),0,Math.sin(_)],c,m*i*g,0,p*i*g,o*g),h&&this.tri([t,d,n],S,T,[0,1,0],c),u&&this.tri([t,f,n],M,v,[0,-1,0],c)}}tri(t,e,n,i,s){this._growV(3),this._growI(3);let o=this.nv,a=[t,e,n];for(let c=0;c<3;c++){let l=(o+c)*3,h=(o+c)*4;this.pos[l]=a[c][0],this.pos[l+1]=a[c][1],this.pos[l+2]=a[c][2],this.nor[h]=Math.round(i[0]*127),this.nor[h+1]=Math.round(i[1]*127),this.nor[h+2]=Math.round(i[2]*127),this.uv[(o+c)*2]=a[c][0]*.25,this.uv[(o+c)*2+1]=a[c][2]*.25,this.mat[h]=s[0],this.mat[h+1]=s[1],this.mat[h+2]=s[2],this.mat[h+3]=s[3]||0}this.idx[this.ni]=o,this.idx[this.ni+1]=o+1,this.idx[this.ni+2]=o+2,this.nv+=3,this.ni+=3}beam(t,e,n,i){let s=e[0]-t[0],o=e[1]-t[1],a=e[2]-t[2],c=Math.hypot(s,o,a);if(c<1e-5)return;let l=[s/c,o/c,a/c],h=Math.abs(l[1])>.95?[1,0,0]:[0,1,0],u=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],f=Math.hypot(u[0],u[1],u[2]);u=u.map(_=>_/f*n/2);let d=[l[1]*u[2]-l[2]*u[1],l[2]*u[0]-l[0]*u[2],l[0]*u[1]-l[1]*u[0]],g=Math.hypot(d[0],d[1],d[2]);d=d.map(_=>_/g*n/2);let x=(_,M,v)=>[_[0]+u[0]*M+d[0]*v,_[1]+u[1]*M+d[1]*v,_[2]+u[2]*M+d[2]*v],p=_=>{let M=Math.hypot(_[0],_[1],_[2]);return[_[0]/M,_[1]/M,_[2]/M]},m=c/4;this.quad(x(t,1,-1),x(t,1,1),x(e,1,1),x(e,1,-1),p(u),i,0,0,.1,m),this.quad(x(t,-1,1),x(t,-1,-1),x(e,-1,-1),x(e,-1,1),p(u.map(_=>-_)),i,0,0,.1,m),this.quad(x(t,1,1),x(t,-1,1),x(e,-1,1),x(e,1,1),p(d),i,0,0,.1,m),this.quad(x(t,-1,-1),x(t,1,-1),x(e,1,-1),x(e,-1,-1),p(d.map(_=>-_)),i,0,0,.1,m)}ramp(t,e,n,i,s=2){let o=e[0]-t[0],a=e[2]-t[2],c=Math.hypot(o,a);if(c<1e-4)return;let l=o/c,h=a/c,u=[h*n,-l*n],f=t[1],d=e[1],g=d-f,x=[t[0]+u[0],f,t[2]+u[1]],p=[t[0]-u[0],f,t[2]-u[1]],m=[e[0]+u[0],d,e[2]+u[1]],_=[e[0]-u[0],d,e[2]-u[1]],M=[e[0]+u[0],f,e[2]+u[1]],v=[e[0]-u[0],f,e[2]-u[1]],S=Math.hypot(c,g),T=1/s;this.quad(x,p,_,m,[-l*g/S,c/S,-h*g/S],i,0,0,2*n*T,S*T),this.quad(v,M,m,_,[l,0,h],i,0,0,2*n*T,g*T),this.tri(M,x,m,[h,0,-l],i),this.tri(p,v,_,[-h,0,l],i)}shape(t){switch(t[0]){case"b":this.box(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]??4);break;case"c":this.cyl(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]??4,!0,t[10]??!1);break;case"m":this.beam(t[1],t[2],t[3],t[4]);break;case"w":this.ramp(t[1],t[2],t[3],t[4],t[5]??2);break;case"q":this.quad(t[1],t[2],t[3],t[4],t[5],t[6],t[7]??0,t[8]??0,t[9]??1,t[10]??1);break}}arrays(){return{position:this.pos.subarray(0,this.nv*3),normal:this.nor.subarray(0,this.nv*4),uv:this.uv.subarray(0,this.nv*2),mat:this.mat.subarray(0,this.nv*4),index:this.idx.subarray(0,this.ni)}}};var $e=.0009765625,rR={num:r=>{let t=r%4,e=r/4|0;return[t*256*$e,e*256*$e,(t+1)*256*$e,(e+1)*256*$e]},title:[0,512*$e,512*$e,768*$e],chevron:[512*$e,512*$e,768*$e,768*$e],arrow:[768*$e,512*$e,1024*$e,768*$e],signV:r=>[r*128*$e,768*$e,(r*128+128)*$e,1024*$e]},z0=["\u5929\u4F7F","\u7D05\u5340","\u9999\u6E2F","\u72D9\u64CA","\u4E2D\u74B0","\u9152\u5E97","\u8336\u6A13","\u7576\u92EA"];var H0='"Noto Sans HK","PingFang HK","PingFang TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC","Source Han Sans TC",sans-serif',V0='"Barlow Condensed","Arial Narrow","Roboto Condensed","Helvetica Neue",Impact,sans-serif';function G0(r=1024){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),n=r/1024;e.fillStyle="#000",e.fillRect(0,0,r,r),e.fillStyle="#fff",e.strokeStyle="#fff",e.textAlign="center",e.textBaseline="middle";for(let i=0;i<8;i++){let s=i%4*256*n,o=(i/4|0)*256*n,a=256*n;e.lineWidth=7*n,e.strokeRect(s+16*n,o+16*n,a-32*n,a-32*n),e.font=`italic 800 ${190*n}px ${V0}`,e.fillText("0"+(i+1),s+a/2-4*n,o+a/2+12*n),e.fillRect(s+30*n,o+222*n,60*n,8*n)}{let s=512*n,o=512*n,a=256*n;e.lineWidth=8*n,e.strokeRect(0+12*n,s+12*n,o-24*n,a-24*n),e.font=`900 ${132*n}px ${H0}`,e.fillText("\u72D9\u64CA\u4E4B\u57CE",0+o/2,s+108*n),e.font=`italic 800 ${58*n}px ${V0}`,e.fillText("S N I P E R   C I T Y",0+o/2,s+206*n)}{let i=512*n,s=512*n;e.lineWidth=26*n,e.lineJoin="miter";for(let o=0;o<3;o++){let a=s+(70+o*62)*n;e.beginPath(),e.moveTo(i+46*n,a+44*n),e.lineTo(i+128*n,a-22*n),e.lineTo(i+210*n,a+44*n),e.stroke()}e.lineWidth=6*n,e.strokeRect(i+10*n,s+10*n,236*n,236*n)}{let i=768*n,s=512*n;e.beginPath(),e.moveTo(i+128*n,s+22*n),e.lineTo(i+216*n,s+120*n),e.lineTo(i+160*n,s+120*n),e.lineTo(i+160*n,s+232*n),e.lineTo(i+96*n,s+232*n),e.lineTo(i+96*n,s+120*n),e.lineTo(i+40*n,s+120*n),e.closePath(),e.fill()}for(let i=0;i<8;i++){let s=i*128*n,o=768*n;e.lineWidth=5*n,e.strokeRect(s+10*n,o+8*n,108*n,240*n),e.font=`900 ${88*n}px ${H0}`;let a=z0[i];e.fillText(a[0],s+64*n,o+74*n),e.fillText(a[1],s+64*n,o+182*n)}return t}async function BS(r,t,e){let n=e.texSize,i=t.layers,s=i.length,o=new Uint8Array(n*n*s);for(let h=0;h<s;h++){let u=r.get(i[h]);if(!u)continue;let f=await xf(u.blob);Xl(f,n,n,o,h*n*n),f.close&&f.close()}let a=i.indexOf("custom"),c=G0(n);Xl(c,n,n,o,a*n*n);let l=new qs(o,n,n,s);return l.format=so,l.type=en,l.minFilter=tn,l.magFilter=Se,l.wrapS=l.wrapT=Zn,l.generateMipmaps=!0,l.anisotropy=e.aniso,l.unpackAlignment=1,l.needsUpdate=!0,l.userData.repaint=()=>{Xl(G0(n),n,n,o,a*n*n),l.needsUpdate=!0},l}function kS(r){let t=new ri({color:16777215,side:Pe}),e=n=>{n.uniforms.uCityTex={value:r},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aMat; varying vec2 vCUv; varying vec4 vMat;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCUv = uv; vMat = aMat;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform highp sampler2DArray uCityTex; varying vec2 vCUv; varying vec4 vMat;
float scHash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }`).replace("#include <map_fragment>",`
float scLayer = floor(vMat.x + 0.5), scM = floor(vMat.y + 0.5); int scFl = int(floor(vMat.z + 0.5)); float scX = floor(vMat.w + 0.5);
float scLum = 1.0, scMask = 0.0;
if (scLayer < 254.5) { scLum = pow(texture(uCityTex, vec3(vCUv, scLayer)).r, 2.2); if (scM < 254.5) scMask = texture(uCityTex, vec3(vCUv, scM)).r; }
else { scLum = pow(scM / 255.0, 2.2); }
bool scCustom = (scFl & 32) != 0;
if (scCustom && (scFl & 192) != 0 && scMask < 0.42) discard;
if (scCustom) scLum = 0.012;
if ((scFl & 64) != 0) { scLum = scX > 0.5 ? 0.55 : 0.0; diffuseColor.rgb = scX > 0.5 ? vec3(1.0) : uRedCol * 0.95; if (scX > 0.5) diffuseColor.rgb *= scLum; }
else diffuseColor.rgb *= scLum;
if ((scFl & 16) != 0) { // roofs: a little procedural grit so they hold up underfoot
  float gr = scHash(floor(vWp * 7.0)) * 0.5 + scHash(floor(vWp * 23.0)) * 0.5; diffuseColor.rgb *= 0.86 + 0.28 * gr;
}
`).replace("#include <emissivemap_fragment>",`
{
  float ph = scX * 0.0246; vec3 em = vec3(0.0);
  if ((scFl & 2) != 0) { // red neon / beacons
    float amt = scCustom ? scMask : 1.0; float blink = 1.0;
    if (!scCustom && scLayer > 254.5) blink = scX < 0.5 ? 0.75 + 0.25 * sin(uTime * 5.0) : step(0.55, fract(uTime * 0.45 + ph));
    if (scCustom) blink = 0.82 + 0.18 * step(0.08, fract(uTime * 0.31 + sin(vWp.x) * 3.0)) * (0.9 + 0.1 * sin(uTime * 37.0));
    if (!scCustom && scLayer < 254.5) amt = smoothstep(0.02, 0.25, scLum);
    em += uRedCol * amt * blink * 1.6;
  }
  if ((scFl & 128) != 0) { float amt = scCustom ? scMask : 1.0; float pulse = scCustom ? 0.55 + 0.45 * abs(sin(uTime * 2.2 - vCUv.y * 9.0)) : 0.7 + 0.3 * sin(uTime * 3.0 + ph * 5.0); em += vec3(1.0) * amt * pulse * 1.1; }
  if ((scFl & 8) != 0) { // shop signs: the painted parts glow, some of them red
    float h = scHash(floor(vWp * vec3(0.31, 0.22, 0.31)));
    float flick = h > 0.86 ? step(0.25, fract(uTime * (0.7 + h) + h * 9.0)) * (0.7 + 0.3 * sin(uTime * 31.0)) : 0.9 + 0.1 * sin(uTime * 2.0 + h * 30.0);
    vec3 c = h > 0.55 ? uRedCol * 2.2 : vec3(0.62);
    em += c * scMask * (0.25 + scLum * 2.2) * flick;
  }
  if ((scFl & 1) != 0) { // windows: a few are lit, fewer are red
    vec3 cell = floor(vec3(vWp.x * 0.41, vWp.y * 0.295, vWp.z * 0.41)); float h = scHash(cell);
    float on = step(0.83, h); float tw = 0.85 + 0.15 * sin(uTime * 1.3 + h * 50.0);
    em += (h > 0.975 ? uRedCol * 1.6 : vec3(0.78)) * on * tw * (0.25 + 1.4 * scLum);
  }
  totalEmissiveRadiance += em;
}
`)};return e.key="city",ci(t,e),t}function W0(r){let t=new ue;return t.setAttribute("position",new Ft(r.position.slice(),3)),t.setAttribute("normal",new Ft(r.normal.slice(),4,!0)),t.setAttribute("uv",new Ft(r.uv.slice(),2)),t.setAttribute("aMat",new Ft(r.mat.slice(),4,!1)),t.setIndex(new Ft(r.index.slice(),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}function X0(r,t=new yt){return t.compose(new L(r.x,0,r.z),new De().setFromAxisAngle(new L(0,1,0),r.rot*Math.PI/2),new L(1,r.sy,1))}function zS(r){let t=r.skyline.length,e=new ms(1,1,1);e.translate(0,.5,0);let n=new ze({color:16777215}),i=a=>{a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
float skHash(vec3 p) { p = fract(p * 0.3183099 + vec3(0.11, 0.37, 0.53)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }`).replace("#include <map_fragment>",`
vec3 skN = normalize(cross(dFdx(vWp), dFdy(vWp)));
float side = step(abs(skN.y), 0.5);
float along = abs(skN.z) > abs(skN.x) ? vWp.x : vWp.z;
vec2 wc = vec2(along / 2.6, vWp.y / 3.4); vec2 wf = fract(wc); vec3 cell = vec3(floor(wc), floor(dot(skN.xz, vec2(3.0, 7.0)) + 0.5) + floor((abs(skN.z) > abs(skN.x) ? vWp.z : vWp.x) / 9.0));
float h = skHash(cell); float win = step(0.2, wf.x) * step(wf.x, 0.8) * step(0.28, wf.y) * step(wf.y, 0.78);
float lit = step(0.80, h) * win * side;
vec3 body = vec3(0.016 + 0.02 * skHash(cell * 0.31)) * (0.6 + 0.4 * side);
vec3 glow = (h > 0.985 ? uRedCol * 1.5 : vec3(0.42 + 0.5 * skHash(cell + 3.1))) * lit * (0.8 + 0.2 * sin(uTime * 0.9 + h * 60.0));
diffuseColor.rgb = body + glow * smoothstep(9.0, 14.0, vWp.y);
`)};i.key="sky",ci(n,i),n.defines={SC_NO_WORLDFX:1};let s=new Zs(e,n,t),o=new yt;return r.skyline.forEach((a,c)=>{o.compose(new L(a[0],0,a[1]),new De,new L(a[2],a[4],a[3])),s.setMatrixAt(c,o)}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s}function HS(){let r=new sa(700,24,12),t=new He({side:Ye,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uFogLow:ne.uFogLow,uFogHigh:ne.uFogHigh,uFogDeep:ne.uFogDeep,uFogParams:ne.uFogParams,uTime:ne.uTime,uRedCol:ne.uRedCol,uAngel:{value:new L(0,60,0)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.9999; }",fragmentShader:`
precision highp float; varying vec3 vDir; uniform float uTime; uniform vec3 uRedCol; uniform vec3 uAngel;
${hr}
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec3 dir = normalize(vDir);
  vec3 sky = mix(vec3(0.030), vec3(0.008), clamp(dir.y, 0.0, 1.0));
  // slow cloud deck lit from below
  vec2 cuv = dir.xz / max(dir.y + 0.18, 0.05); float cl = vnoise(cuv * 1.3 + uTime * 0.006) * 0.6 + vnoise(cuv * 3.1 - uTime * 0.01) * 0.4;
  sky += vec3(0.05) * smoothstep(0.42, 0.85, cl) * smoothstep(-0.05, 0.3, dir.y);
  // the pale disc the angel hangs in front of
  vec3 toA = normalize(uAngel - cameraPosition); float ad = max(dot(dir, toA), 0.0);
  sky += vec3(0.22) * pow(ad, 90.0) + vec3(0.06) * pow(ad, 9.0);
  float fa = scFogAmount(cameraPosition, dir, 1500.0);
  vec3 col = mix(sky, scFogColor(dir, 0.0), fa);
  gl_FragColor = vec4(col, 1.0);
}`}),e=new fe(r,t);return e.frustumCulled=!1,e.renderOrder=-10,e.matrixAutoUpdate=!0,e}async function q0(r,t,e){let{kit:n,pack:i,arena:s}=t,o=n.header.posScale,a=n.header.uvScale,c=await BS(i,n,e),l=kS(c),h=new mr(1<<19,1<<21),u=new yt;for(let E of s.roofs)h.addKit(n.types[E.type],X0(E,u).elements,o,a);for(let E of s.shapes)h.shape(E);let f=W0(h.arrays()),d=new fe(f,l);d.castShadow=!0,d.receiveShadow=!0,d.matrixAutoUpdate=!1,d.frustumCulled=!1;let g=new mr(32768,1<<17);for(let E of s.deco)g.shape(E);for(let E of s.backdrop||[])g.addKit(n.types[E.type],X0(E,u).setPosition(E.x,E.y||0,E.z).elements,o,a);let x=new fe(W0(g.arrays()),l);x.castShadow=!0,x.receiveShadow=!0,x.matrixAutoUpdate=!1,x.frustumCulled=!1;let p=new Te;p.add(d,x);let m=zS(s);p.add(m);let _=HS();p.add(_);let M=new fe(new Vi(1600,1600).rotateX(-Math.PI/2),ci(new ze({color:328965})));M.position.y=-.2,M.matrixAutoUpdate=!1,M.updateMatrix(),p.add(M);let v=new nr(5000786,10132898,1);p.add(v);let S=new Ki(16777215,2.6);S.position.set(-70,150,-52),S.target.position.set(0,10,0),S.castShadow=!0,S.shadow.mapSize.set(e.shadow,e.shadow);let T=S.shadow.camera;T.left=-112,T.right=112,T.top=112,T.bottom=-112,T.near=20,T.far=320,T.updateProjectionMatrix(),S.shadow.bias=-5e-4,S.shadow.normalBias=.12,p.add(S,S.target),r.scene.add(p);let y=new ue;y.setAttribute("position",f.getAttribute("position")),y.setIndex(f.getIndex());let b=new To(y);return{group:p,solid:d,deco:x,skyline:m,sky:_,mat:l,tex:c,bvh:b,colGeo:y,moon:S,hemi:v,tris:(f.index.count+x.geometry.index.count)/3}}function Hf(r,t){if(t===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===ro||t===va){let e=r.getIndex();if(e===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=e.count-2,i=[];if(t===ro)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function ph(r){let t=new Map,e=new Map,n=r.clone();return Y0(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Y0(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Y0(r.children[n],t.children[n],e)}var mh=class extends xi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Kf(e)}),this.register(function(e){return new Zf(e)}),this.register(function(e){return new $f(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new Qf(e)}),this.register(function(e){return new jf(e)}),this.register(function(e){return new td(e)}),this.register(function(e){return new ed(e)}),this.register(function(e){return new Yf(e)}),this.register(function(e){return new nd(e)}),this.register(function(e){return new Jf(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new id(e)}),this.register(function(e){return new Xf(e)}),this.register(function(e){return new gh(e,Kt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new gh(e,Kt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new cd(e)})}load(t,e,n,i){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Zi.extractUrlBase(t);o=Zi.resolveURL(l,this.path)}else o=Zi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new Jr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s,o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Q0){try{o[Kt.KHR_BINARY_GLTF]=new ld(t)}catch(u){i&&i(u);return}s=JSON.parse(o[Kt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new gd(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:o[u]=new qf;break;case Kt.KHR_DRACO_MESH_COMPRESSION:o[u]=new hd(s,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:o[u]=new ud;break;case Kt.KHR_MESH_QUANTIZATION:o[u]=new fd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}};function GS(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Fe(r,t,e){let n=r.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xf=class{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],l,h=new At(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ki(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ua(h),l.distance=u;break;case"spot":l=new ha(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}},qf=class{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return ze}extendParams(t,e,n){let i=[];t.color=new At(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Sn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ae))}return Promise.all(i)}},Yf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Kf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Nt(s,s)}return Promise.all(i)}},Zf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},$f=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Jf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Qf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];if(e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],Sn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Ae)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},jf=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},td=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(s[0],s[1],s[2],Sn),Promise.all(i)}},ed=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},nd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(s[0],s[1],s[2],Sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Ae)),Promise.all(i)}},id=class{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}},sd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?wn:null}extendMaterialParams(t,e){let n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},rd=class{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}},od=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},ad=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(t,o.source,c)}},gh=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},cd=class{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let g of u){let x=new yt,p=new L,m=new De,_=new L(1,1,1),M=new Zs(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&_.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,x.compose(p,m,_));let v=null;for(let S in c)if(S==="_COLOR_0"){let T=c[S];M.instanceColor=new zi(T.array,T.itemSize,T.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let y=M.geometry;v=new ue,v.name=y.name;for(let b in y.attributes)v.setAttribute(b,y.attributes[b]);for(let b in y.morphAttributes)v.morphAttributes[b]=y.morphAttributes[b];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let b of y.groups)v.addGroup(b.start,b.count,b.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),M.geometry=v}let T=c[S];v.setAttribute(S,new zi(T.array,T.itemSize,T.normalized))}Ce.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Q0="glTF",Oa=12,K0={JSON:1313821514,BIN:5130562},ld=class{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Q0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Oa,s=new DataView(t,Oa),o=0;for(;o<i;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===K0.JSON){let l=new Uint8Array(t,Oa+o,a);this.content=n.decode(l)}else if(c===K0.BIN){let l=Oa+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hd=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=pd[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=pd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=wo[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(d)},a,l,Sn,f)})})}},ud=class{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},fd=class{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}},xh=class extends gi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,g=t*l,x=g-l,p=-2*d+3*f,m=d-f,_=1-p,M=m-f+u;for(let v=0;v!==a;v++){let S=o[x+v+a],T=o[x+v+c]*h,y=o[g+v+a],b=o[g+v]*h;s[v]=_*S+M*T+p*y+m*b}return s}},WS=new De,dd=class extends xh{interpolate_(t,e,n,i){let s=super.interpolate_(t,e,n,i);return WS.fromArray(s).normalize().toArray(s),s}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Z0={9728:Be,9729:Se,9984:Qc,9985:no,9986:ar,9987:tn},$0={33071:Yn,33648:kr,10497:Zn},Vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XS={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new js({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),r.DefaultMaterial}function gr(r,t,e){for(let n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function wi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function YS(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){let u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function KS(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZS(r){let t,e=r.extensions&&r.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Wf(e.attributes):t=r.indices+":"+Wf(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Wf(r.targets[n]);return t}function Wf(r){let t="",e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function md(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $S(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var JS=new yt,gd=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new GS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?(this.textureLoader=new ca(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return gr(s,a,i),wi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){let o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(Zi.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let o=Vf[i.type],a=wo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ft(l,o,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=Vf[i.type],l=wo[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(d&&d!==u){let m=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,M=e.cache.get(_);M||(x=new l(a,m*d,i.count*d/h),M=new Xr(x,d/h),e.cache.add(_,M)),p=new qr(M,c,f%d/h,g)}else a===null?x=new l(i.count*c):x=new l(a,f,i.count*c),p=new Ft(x,c,g);if(i.sparse!==void 0){let m=Vf.SCALAR,_=wo[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new _(o[1],M,i.sparse.count*m),T=new l(o[2],v,i.sparse.count*c);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let y=0,b=S.length;y<b;y++){let E=S[y];if(p.setX(E,T[y*c]),c>=2&&p.setY(E,T[y*c+1]),c>=3&&p.setZ(E,T[y*c+2]),c>=4&&p.setW(E,T[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){let e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){let i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Z0[f.magFilter]||Se,h.minFilter=Z0[f.minFilter]||tn,h.wrapS=$0[f.wrapS]||Zn,h.wrapT=$0[f.wrapT]||Zn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Be&&h.minFilter!==Se,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());let o=i.images[t],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,g){e.parse(f,d,g)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(d,g){let x=d;e.isImageBitmapLoader===!0&&(x=function(p){let m=new ke(p);m.needsUpdate=!0,d(m)}),e.load(Zi.resolveURL(f,s.path),x,void 0,g)})})}let u=h.then(function(f){return l===!0&&a.revokeObjectURL(c),wi(f,o),f.userData.mimeType=o.mimeType||$S(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Kt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new $r,Tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Zr,Tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return js}loadMaterial(t){let e=this,n=this.json,i=this.extensions,s=n.materials[t],o,a={},c=s.extensions||{},l=[];if(c[Kt.KHR_MATERIALS_UNLIT]){let u=i[Kt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Pe);let h=s.alphaMode||Gf.OPAQUE;if(h===Gf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ze&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Nt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ze&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ze){let u=s.emissiveFactor;a.emissive=new At().setRGB(u[0],u[1],u[2],Sn)}return s.emissiveTexture!==void 0&&o!==ze&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ae)),Promise.all(l).then(function(){let u=new o(a);return s.name&&(u.name=s.name),wi(u,s),e.associations.set(u,{materials:t}),s.extensions&&gr(i,u,s),u})}createUniqueName(t){let e=me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return J0(c,a,e)})}let o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a],h=ZS(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=J0(new ue,l,e),l.mode===Qn.TRIANGLE_STRIP?f=f.then(d=>Hf(d,va)):l.mode===Qn.TRIANGLE_FAN&&(f=f.then(d=>Hf(d,ro))),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?qS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],p=o[d],m,_=l[d];if(p.mode===Qn.TRIANGLES||p.mode===Qn.TRIANGLE_STRIP||p.mode===Qn.TRIANGLE_FAN||p.mode===void 0){let M=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=M&&v?new Ks(x,_):new fe(x,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Qn.LINES)m=new Js(x,_);else if(p.mode===Qn.LINE_STRIP)m=new $s(x,_);else if(p.mode===Qn.LINE_LOOP)m=new jo(x,_);else if(p.mode===Qn.POINTS)m=new ps(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&KS(m,s),m.name=e.createUniqueName(s.name||"mesh_"+t),wi(m,s),p.extensions&&gr(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&gr(i,u[0],s),u[0];let f=new Te;s.extensions&&gr(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Xe(Ji.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),wi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new yt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Qo(a,c)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let M=0,v=f.length;M<v;M++){let S=f[M],T=d[M],y=g[M],b=x[M],E=p[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,T,y,b,E);if(R)for(let P=0;P<R.length;P++)m.push(R[P])}let _=new tr(s,void 0,m);return wi(_,i),_})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,JS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Yr:l.length>1?h=new Te:l.length===1?h=l[0]:h=new Ce,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),wi(h,s),s.extensions&&gr(n,h,s),s.matrix!==void 0){let u=new yt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,s=new Te;n.name&&(s.name=i.createUniqueName(n.name)),wi(s,n),n.extensions&&gr(e,s,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?s.add(ph(f)):s.add(f)}let l=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Tn||f instanceof ke)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){let o=[],a=t.name?t.name:t.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Es[s.path]===Es.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(a);let h;switch(Es[s.path]){case Es.weights:h=Wi;break;case Es.rotation:h=Xi;break;case Es.translation:case Es.scale:h=gs;break;default:n.itemSize===1?h=Wi:h=gs;break}let u=i.interpolation!==void 0?XS[i.interpolation]:Ws,f=this._getArrayFromAccessor(n);for(let d=0,g=c.length;d<g;d++){let x=new h(c[d]+"."+Es[s.path],e.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=md(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let i=this instanceof Xi?dd:xh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function QS(r,t,e){let n=t.attributes,i=new oe;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=md(wo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new L,c=new L;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=md(wo[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;let o=new Cn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function J0(r,t,e){let n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(let o in n){let a=pd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){let o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return Yt.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),wi(r,t),QS(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?YS(r,t.targets,e):r})}async function j0(r,t){let e=new Uint8Array(r),n=new DataView(r);if(String.fromCharCode(e[0],e[1],e[2],e[3])!=="SCMD")throw new Error("bad model pack");let i=n.getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(e.subarray(8,8+i))),o=8+i,a=new mh,c=x=>new Promise((p,m)=>a.parse(r.slice(o+s[x].off,o+s[x].off+s[x].len),"",p,m)),[l,h,u]=await Promise.all([c("weapons"),c("cop"),c("angel")]),f=await jS(t);h.scene.traverse(x=>{x.isSkinnedMesh&&(x.material=f.cop,x.castShadow=!1,x.receiveShadow=!1)});let d={};for(let x of[...l.scene.children]){let p=new Te;p.name=x.name,p.add(x),d[x.name]=p}let g={};for(let x of["rifle_fp","pistol"])d[x].traverse(p=>{if(!p.isMesh)return;let m=p.material,_=m.userData&&m.userData.tex;p.material=f.weapon(_,m.name),p.frustumCulled=!1});return d.rifle_tp.traverse(x=>{x.isMesh&&(x.material=f.rifleTp,x.frustumCulled=!1)}),await Promise.all(f._pending),{cop:h.scene,weapons:d,angel:{scene:u.scene,clips:u.animations},mats:f}}var _h=r=>{let t=e=>{e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.6); outgoingLight += vec3(${r.toFixed(3)}) * fr; }
#include <opaque_fragment>`)};return t.key="rim"+r,t};async function jS(r){let t=[],e=h=>{h.fragmentShader=`uniform float uScope;
`+h.fragmentShader.replace("#include <opaque_fragment>",`{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.2); outgoingLight += vec3(0.46) * fr;
      float core = 1.0 - fr; outgoingLight = mix(outgoingLight, outgoingLight * 0.22 + uRedCol * (0.12 + 0.46 * core * core), uScope); }
#include <opaque_fragment>`)};e.key="cop2";let n=new ri({color:9342606,emissive:vs.clone(),emissiveIntensity:2.6});ci(n,e),t.push(co(r,"cop_base").then(h=>{n.map=h,n.needsUpdate=!0}),co(r,"cop_emis").then(h=>{n.emissiveMap=h,n.needsUpdate=!0}));let i=new Map,s=(h,u)=>{let f=h||u;if(i.has(f))return i.get(f);let d=new ri({color:/lens/.test(u)?328965:7237230});return ci(d,_h(.12)),d.name=u,i.set(f,d),h&&t.push(co(r,h,{repeat:!0}).then(g=>{g&&(d.map=g,d.needsUpdate=!0)})),d},o=new ri({color:723723});ci(o,_h(.14));let a=new ri({color:14869218,emissive:2368548});ci(a,_h(.32));let c=new ri({color:15263976,emissive:2368548});ci(c,_h(.32)),t.push(co(r,"angel_body").then(h=>{a.map=h,a.needsUpdate=!0}),co(r,"angel_arm").then(h=>{c.map=h,c.needsUpdate=!0}));let l=ci(new ze({color:vs.clone().multiplyScalar(1.6)}));return{cop:n,weapon:s,rifleTp:o,angelBody:a,angelArm:c,halo:l,_pending:t}}var kt=(r=0,t=0,e=0)=>new L(r,t,e),we=()=>new De,Eo=kt(),nn=kt(),As=kt(),xr=kt(),Gn=we(),Ei=we(),tg=new yt,wR=new yt,ji=new L(1,0,0),Ai=new L(0,1,0),Ba=new L(0,0,1),tb=["Hips","Spine","Spine1","Spine2","Neck","Head","LeftShoulder","LeftArm","LeftForeArm","LeftHand","RightShoulder","RightArm","RightForeArm","RightHand","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightUpLeg","RightLeg","RightFoot","RightToeBase"],eb=r=>{let t=/mixamorig:?([A-Za-z0-9]+?)(_\d+)?$/.exec(r);return t?t[1]:null},Ao=(r,t,e)=>Math.min(e,Math.max(t,r)),Rs=(r,t,e)=>r+(t-r)*e,eg=r=>r*r*(3-2*r),ka=class{constructor(t){this.scene=t,t.updateMatrixWorld(!0);let e=null;t.traverse(l=>{l.isSkinnedMesh&&(e=l)}),this.mesh=e;let n=e.skeleton;this.nb=n.bones.length,this.idx={},this.shortNames=n.bones.map(l=>eb(l.name)),this.shortNames.forEach((l,h)=>{l&&(this.idx[l]=h)});let i=n.bones.findIndex(l=>!l.parent||!l.parent.isBone);this.top=i;let s=new yt().multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]);this.restP=[],this.restQ=[],this.parent=[];let o=kt();for(let l=0;l<this.nb;l++){let h=new yt().copy(n.boneInverses[l]).invert().premultiply(s),u=kt(),f=we();h.decompose(u,f,o),this.restP.push(u),this.restQ.push(f),this.parent.push(n.bones[l].parent&&n.bones[l].parent.isBone?n.bones.indexOf(n.bones[l].parent):-1)}this.scale=o.x,this.restLocalQ=this.restQ.map((l,h)=>this.parent[h]<0?n.bones[h].quaternion.clone():this.restQ[this.parent[h]].clone().invert().multiply(l)),this.offset=this.restP.map((l,h)=>this.parent[h]<0?kt():l.clone().sub(this.restP[this.parent[h]]).applyQuaternion(this.restQ[this.parent[h]].clone().invert()));let a=this.idx;this.J=tb.map(l=>a[l]),this.hand={},this.fingers={Left:[],Right:[]};for(let l of["Left","Right"]){let h=a[l+"Hand"],u=this.restP[a[l+"HandMiddle1"]].clone().sub(this.restP[h]).normalize(),f=this.restP[a[l+"HandThumb1"]].clone().sub(this.restP[h]);f.addScaledVector(u,-f.dot(u)).normalize();let d=u.clone().cross(f),g=l==="Left"?d.clone():d.clone().negate();this.hand[l]={basisInv:new yt().makeBasis(u,f,d).transpose(),fwd:u,th:f,palm:g};for(let x of["Index","Middle","Ring","Pinky","Thumb"])for(let p of[1,2,3]){let m=a[`${l}Hand${x}${p}`];if(m==null)continue;let _=a[`${l}Hand${x}${p+1}`],M=_!=null?this.restP[_].clone().sub(this.restP[m]).normalize():u.clone(),S=(x==="Thumb"?M.clone().cross(u).normalize().multiplyScalar(l==="Left"?-1:1):M.clone().cross(g).normalize()).applyQuaternion(this.restQ[m].clone().invert());this.fingers[l].push({j:m,axis:S,thumb:x==="Thumb",k:p})}}let c=l=>this.restP[a[l]];this.len={upArm:c("LeftForeArm").distanceTo(c("LeftArm")),foreArm:c("LeftHand").distanceTo(c("LeftForeArm")),upLeg:c("LeftLeg").distanceTo(c("LeftUpLeg")),loLeg:c("LeftFoot").distanceTo(c("LeftLeg"))},this.hipH=c("Hips").y,this.footH=c("LeftFoot").y,this.hipW=c("LeftUpLeg").x,this.headTop=c("Head").y+.2,this.topParentInv=n.bones[i].parent?new yt().copy(n.bones[i].parent.matrixWorld).invert():new yt,this.topParentQ=we(),n.bones[i].parent&&n.bones[i].parent.matrixWorld.decompose(kt(),this.topParentQ,kt())}instantiate(){return new xd(this)}},xd=class{constructor(t){this.p=t,this.root=ph(t.scene);let e=null;this.root.traverse(i=>{i.isSkinnedMesh&&(e=i)}),this.mesh=e,this.bones=e.skeleton.bones,e.frustumCulled=!1;let n=t.nb;this.wQ=[],this.wP=[],this.ctrl=new Uint8Array(n);for(let i=0;i<n;i++)this.wQ.push(t.restQ[i].clone()),this.wP.push(t.restP[i].clone()),this.bones[i].quaternion.copy(t.restLocalQ[i]);this.weapon=new Te,this.root.add(this.weapon),this.phase=Math.random()*6,this.aimK=0,this.crouchK=0,this.pitch=0,this.twist=0,this.recoil=0,this.bob=0,this.moveK=0,this.modeK={air:0,zip:0,ladder:0,dead:0},this.deadT=0,this.deadDir=1,this.lean=0,this.flinch=0,this.boltK=0,this.muzzle=kt(),this.muzzleDir=kt(0,0,1),this.eye=kt(),this.fwd=kt(0,0,1),this.caps=[],this.gripR=kt(),this.gripL=kt()}_fk(t){let e=this.p.parent[t];this.wP[t].copy(this.p.offset[t]).applyQuaternion(this.wQ[e]).add(this.wP[e])}_setQ(t,e){this.wQ[t].copy(e).multiply(this.p.restQ[t]),this.ctrl[t]=1}_ik(t,e,n,i,s,o,a,c,l){let h=this.wP[t],u=Eo.copy(i).sub(h),f=u.length(),d=(o+a)*.999;f>d&&(f=d),f<.05&&(f=.05),u.normalize();let g=Ao((o*o+f*f-a*a)/(2*o*f),-1,1),x=Math.sqrt(1-g*g),p=nn.copy(s).addScaledVector(u,-s.dot(u));p.lengthSq()<1e-6&&p.set(0,0,1).addScaledVector(u,-u.z),p.normalize();let m=As.copy(h).addScaledVector(u,o*g).addScaledVector(p,o*x),_=xr.copy(h).addScaledVector(u,f),M=this.p,v=kt().copy(M.restP[e]).sub(M.restP[t]).normalize().applyQuaternion(c),S=kt().copy(m).sub(h).normalize(),y=we().setFromUnitVectors(v,S).multiply(c);this._setQ(t,y),this.wP[e].copy(m);let b=kt().copy(M.restP[n]).sub(M.restP[e]).normalize().applyQuaternion(y),E=kt().copy(_).sub(m).normalize(),P=we().setFromUnitVectors(b,E).multiply(y);return this._setQ(e,P),this.wP[n].copy(_),l&&l.copy(P),P}update(t,e){let n=this.p,i=n.idx,s=1-Math.exp(-t*12);this.aimK=Rs(this.aimK,e.aim?1:0,1-Math.exp(-t*9)),this.crouchK=Rs(this.crouchK,e.crouch?1:0,1-Math.exp(-t*10)),this.pitch=Rs(this.pitch,e.pitch||0,s),this.twist=Rs(this.twist,Ao(e.twist||0,-1,1),s);let o=e.speed||0;this.moveK=Rs(this.moveK,Ao(o/5,0,1.3),1-Math.exp(-t*8)),this.recoil=Math.max(0,this.recoil-t*4.5),this.flinch=Math.max(0,this.flinch-t*3.2),this.boltK=Math.max(0,this.boltK-t*1.4);for(let rt in this.modeK)this.modeK[rt]=Rs(this.modeK[rt],e.mode===rt?1:0,1-Math.exp(-t*(rt==="dead"?30:9)));let a=e.moveDir||Ba;this.phase+=t*(2.2+o*1.55)*(o>.2?1:0),e.mode==="ladder"&&(this.phase+=t*7);let c=this.phase,l=this.modeK.air,h=this.modeK.zip,u=this.modeK.ladder,f=0;e.mode==="dead"?(this.deadT+=t,f=Ao(this.deadT/.62,0,1),f=f*f):this.deadT=0;let d=this.aimK*(1-h)*(1-u)*(1-f),g=this.crouchK*(1-h)*(1-u)*(1-l*.6),x=i.Hips,p=this.moveK*(1-l)*(1-h)*(1-u),m=Math.abs(Math.sin(c))*.045*p,_=g*.4+d*.03+p*.035,M=p*.16*(1-d*.6)*a.z,v=p*.07*a.x,S=Gn.setFromAxisAngle(ji,M+g*.12+l*.25-this.flinch*.12).premultiply(Ei.setFromAxisAngle(Ba,-v+Math.sin(c)*.03*p)).premultiply(Ei.setFromAxisAngle(Ai,Math.sin(c)*.07*p*(1-d)-this.twist*.18-.16*d)),T=we().copy(S);this.wP[x].set(Math.sin(c)*.02*p,n.hipH-_+m-h*0,g*-.05),this._setQ(x,T);let y=null;if(f>0){let rt=f*1.52*this.deadDir;y=we().setFromAxisAngle(ji,-rt),this.wP[x].set(0,Rs(n.hipH-_,.16,f),-Math.sin(rt)*.55*this.deadDir*0+-this.deadDir*f*.75),T.premultiply(y),this._setQ(x,T)}let b=this.pitch*(.35+.65*d)*(1-f),E=this.twist*.82*(1-f),R=[i.Spine,i.Spine1,i.Spine2],P=we().copy(T),C=we(),D=d*.1+g*.1+p*.05*(1-d)+this.flinch*.2-f*.25,I=-.46*d;for(let rt=0;rt<3;rt++){C.setFromAxisAngle(Ai,(E+I)/3).multiply(Ei.setFromAxisAngle(ji,(-b+D)/3)),P.multiply(C);let Q=R[rt];this._fk(Q),this._setQ(Q,P)}let U=we().copy(P),k=we().copy(T).multiply(Ei.setFromAxisAngle(Ai,E*1.22+.16*d)).multiply(Ei.setFromAxisAngle(ji,-b/(.35+.65*Math.max(d,.001))*Math.max(d,.35))),V=kt(0,0,1).applyQuaternion(k),tt=kt(0,1,0).applyQuaternion(k),W=kt(-1,0,0).applyQuaternion(k);this.fwd.copy(V),this._fk(i.Neck);let j=we().copy(U).slerp(k,.5);this._setQ(i.Neck,j),this._fk(i.Head);let et=we().copy(k).multiply(Ei.setFromAxisAngle(Ba,-.2*d)).multiply(Gn.setFromAxisAngle(ji,.22*d+f*.5));this._setQ(i.Head,et),this.eye.copy(this.wP[i.Head]).addScaledVector(tt,.09).addScaledVector(V,.09);for(let rt of["Left","Right"]){let Q=i[rt+"Shoulder"];this._fk(Q),this._setQ(Q,U),this._fk(i[rt+"Arm"])}let xt=Math.max(h,u),It=this.wP[i.RightArm],K=Eo.copy(this.wP[i.LeftArm]).add(It).multiplyScalar(.5),at=this.recoil*this.recoil,vt=kt().copy(It).addScaledVector(V,.215-at*.07).addScaledVector(tt,.012+at*.02).addScaledVector(W,-.055),Ct=we().copy(U).multiply(Ei.setFromAxisAngle(Ai,.62)).multiply(Gn.setFromAxisAngle(ji,.5-Math.sin(c*2)*.03*p)),pt=kt(0,0,1).applyQuaternion(Ct),Ot=kt(0,1,0).applyQuaternion(Ct),Ee=kt().copy(K).addScaledVector(kt(0,0,1).applyQuaternion(U),.27).addScaledVector(kt(0,1,0).applyQuaternion(U),-.21+Math.sin(c*2)*.012*p).addScaledVector(kt(-1,0,0).applyQuaternion(U),.1),Et=we().copy(Ct).slerp(k,eg(d)),Xt=kt().copy(Ee).lerp(vt,eg(d));if(xt>.01){let rt=we().copy(U).multiply(Ei.setFromAxisAngle(Ba,.45)).multiply(Gn.setFromAxisAngle(ji,-1.25)),Q=kt().copy(K).addScaledVector(kt(0,0,1).applyQuaternion(U),-.19).addScaledVector(kt(0,1,0).applyQuaternion(U),-.2).addScaledVector(kt(-1,0,0).applyQuaternion(U),.06);Et.slerp(rt,xt),Xt.lerp(Q,xt)}if(f>0){let rt=we().setFromAxisAngle(Ai,.7*this.deadDir).multiply(Gn.setFromAxisAngle(Ba,1.5)),Q=kt(-.55,.05,.35*this.deadDir);Et.slerp(rt,f),Xt.lerp(Q,f)}at>0&&Et.multiply(Gn.setFromAxisAngle(ji,-at*.1));let $t=kt(0,0,1).applyQuaternion(Et),zt=kt(0,1,0).applyQuaternion(Et),Ie=kt(-1,0,0).applyQuaternion(Et);this.weapon.quaternion.copy(Et).multiply(Gn.setFromAxisAngle(Ai,Math.PI)),this.weapon.position.copy(Xt);let Le=this.weaponScale||1.2;this.muzzle.copy(Xt).addScaledVector($t,.733*Le).addScaledVector(zt,.045*Le),this.muzzleDir.copy($t);let qe=n.len,ee={Right:kt(),Left:kt()},ln={Right:kt(),Left:kt()},be={Right:kt(),Left:kt()},Ue={Right:1.15,Left:.9};if(ee.Right.copy(Xt).addScaledVector(zt,-.055).addScaledVector($t,-.02).addScaledVector(Ie,.012),ln.Right.copy($t).addScaledVector(zt,.35).normalize(),be.Right.copy(zt).addScaledVector(Ie,-.25).addScaledVector($t,-.3).normalize(),ee.Left.copy(Xt).addScaledVector($t,.235*Le).addScaledVector(zt,-.03).addScaledVector(Ie,-.035),ln.Left.copy(Ie).addScaledVector(zt,.62).addScaledVector($t,.25).normalize(),be.Left.copy($t).addScaledVector(zt,.25).normalize(),this.boltK>0&&d>.3){let rt=Math.sin(Ao(1-this.boltK,0,1)*Math.PI);ee.Right.addScaledVector(zt,.1*rt).addScaledVector(Ie,.07*rt).addScaledVector($t,.06*rt-.09*Math.sin(Ao(1-this.boltK,0,1)*Math.PI*2)*rt),Ue.Right=.7}if(h>.01){let rt=Eo.set(0,n.hipH+.98,.1);ee.Right.lerp(nn.copy(rt).add(As.set(-.13,0,0)),h),ee.Left.lerp(nn.copy(rt).add(As.set(.13,0,0)),h);for(let Q of["Right","Left"])ln[Q].lerp(Ai,h).normalize(),be[Q].lerp(nn.set(Q==="Right"?1:-1,0,0),h).normalize();Ue.Right=Ue.Left=1.3}if(u>.01){let rt=Math.sin(c)*.16,Q=-rt;ee.Right.lerp(nn.set(-.2,n.hipH+.52+rt,.36),u),ee.Left.lerp(nn.set(.2,n.hipH+.52+Q,.36),u);for(let Zt of["Right","Left"])ln[Zt].lerp(Ai,u).normalize(),be[Zt].lerp(nn.set(Zt==="Right"?1:-1,0,0),u).normalize();Ue.Right=Ue.Left=1.3}if(f>0){let rt=y;for(let Q of["Right","Left"]){let Zt=Q==="Right"?-1:1,St=nn.set(Zt*(.42+.2*(Q==="Right"?1:.6)),n.hipH+.48,Q==="Right"?.12:-.05).applyQuaternion(rt);St.y=Math.max(St.y,.07),St.add(As.set(0,0,0)),ee[Q].lerp(xr.copy(this.wP[x]).add(St.sub(As.set(0,n.hipH,0).applyQuaternion(rt))),f),Ue[Q]=Rs(Ue[Q],.35,f)}}let Rn={Right:kt(-.75,-.6,-.35),Left:kt(.55,-.8,-.1)};for(let rt of["Right","Left"]){let Q=i[rt+"Arm"],Zt=i[rt+"ForeArm"],St=i[rt+"Hand"],Dt=xr.copy(Rn[rt]).applyQuaternion(k);xt>.01&&Dt.lerp(nn.set(rt==="Right"?-1:1,-.2,.5),xt);let N=we();this._ik(Q,Zt,St,ee[rt],Dt,qe.upArm,qe.foreArm,U,N);let w=ln[rt],z=nn.copy(be[rt]).addScaledVector(w,-be[rt].dot(w)).normalize(),nt=As.copy(w).cross(z),J=we().setFromRotationMatrix(tg.makeBasis(w,z,nt).multiply(n.hand[rt].basisInv));f>0&&J.slerp(N,f),this._setQ(St,J);let st=Gn.copy(N).invert().multiply(J),ct=xr.copy(n.restP[St]).sub(n.restP[Zt]).normalize().applyQuaternion(Ei.copy(n.restQ[Zt]).invert().multiply(n.restQ[Zt])),q=Eo.copy(n.restP[St]).sub(n.restP[Zt]).normalize(),Z=q.x*st.x+q.y*st.y+q.z*st.z,lt=Ei.set(q.x*Z,q.y*Z,q.z*Z,st.w).normalize(),F=we().slerp(lt,.5);this.wQ[Zt].copy(N).multiply(F).multiply(n.restQ[Zt]);for(let $ of n.fingers[rt]){let Y=$.thumb?Ue[rt]*.25:Ue[rt]*($.k===1?.75:.95);this.bones[$.j].quaternion.copy(n.restLocalQ[$.j]).multiply(Gn.setFromAxisAngle($.axis,Y))}}this.gripR.copy(ee.Right),this.gripL.copy(ee.Left);let _n=.34*p,B=.2*p,Nn=we().setFromAxisAngle(Ai,-this.twist*.18*0);for(let rt of["Left","Right"]){let Q=rt==="Left"?1:-1,Zt=i[rt+"UpLeg"],St=i[rt+"Leg"],Dt=i[rt+"Foot"];this._fk(Zt);let N=c+(rt==="Left"?0:Math.PI),w=Math.cos(N),z=Math.max(0,Math.sin(N)),nt=Eo.set(Q*(n.hipW+.035+g*.07)+a.x*w*_n,n.footH+z*B,a.z*w*_n+g*Q*.1+d*Q*.1*(1-p));if(l>.01&&nt.lerp(nn.set(Q*(n.hipW+.03),this.wP[x].y-.62+(rt==="Left"?.12:0),rt==="Left"?.22:-.22),l),h>.01&&nt.lerp(nn.set(Q*(n.hipW+.02),this.wP[x].y-.74,.2+(rt==="Left"?.08:0)),h),u>.01&&nt.lerp(nn.set(Q*.17,this.wP[x].y-.62+Math.sin(N)*.16,.3),u),f>0){let q=nn.set(Q*(n.hipW+.12),n.footH,rt==="Left"?.05:-.08).sub(As.set(0,n.hipH,0)).applyQuaternion(y).add(this.wP[x]);q.y=Math.max(q.y,.08),nt.lerp(q,f)}let J=nn.set(Q*.14,0,1);f>0&&J.applyQuaternion(y);let st=we();this._ik(Zt,St,Dt,nt,J,qe.upLeg,qe.loLeg,T,st);let ct=we().setFromAxisAngle(Ai,Q*.14).multiply(Gn.setFromAxisAngle(ji,z*.5*p+h*.5+l*.4));f>0&&ct.premultiply(Gn.copy(y).slerp(we(),1-f)),this._setQ(Dt,ct)}let xe=this.bones;for(let rt of n.J){if(rt==null||!this.ctrl[rt])continue;let Q=n.parent[rt],Zt=Q<0?n.topParentQ:this.ctrl[Q]?this.wQ[Q]:n.restQ[Q];xe[rt].quaternion.copy(Gn.copy(Zt).invert().multiply(this.wQ[rt]))}{let rt=n.parent[x],Q=tg.compose(n.restP[rt],n.restQ[rt],nn.set(n.scale,n.scale,n.scale)).invert();xe[x].position.copy(this.wP[x]).applyMatrix4(Q)}}hitShapes(t){let e=this.p.idx,n=this.wP,i=this.root.matrixWorld;t.length=0;let s=(c,l)=>Eo.copy(c).add(l||nn.set(0,0,0)).applyMatrix4(i),o=(c,l,h,u,f,d)=>{let g=s(c,f),x=g.x,p=g.y,m=g.z,_=s(l,d);t.push(x,p,m,_.x,_.y,_.z,h,u)},a=As.set(0,.1,.02).applyQuaternion(this.wQ[e.Head]).applyQuaternion(Gn.copy(this.p.restQ[e.Head]).invert());return o(n[e.Head],n[e.Head],.125,0,xr.set(0,.105,.03),xr),o(n[e.Hips],n[e.Neck],.19,1,xr.set(0,.03,0),nn.set(0,-.06,0)),o(n[e.LeftUpLeg],n[e.LeftLeg],.095,2),o(n[e.LeftLeg],n[e.LeftFoot],.075,2),o(n[e.RightUpLeg],n[e.RightLeg],.095,2),o(n[e.RightLeg],n[e.RightFoot],.075,2),o(n[e.LeftArm],n[e.LeftForeArm],.065,2),o(n[e.LeftForeArm],n[e.LeftHand],.055,2),o(n[e.RightArm],n[e.RightForeArm],.065,2),o(n[e.RightForeArm],n[e.RightHand],.055,2),t}};var ts=new si,_d=new L,nb=new L,za=22,yh=class{constructor(t,e){this.data=t,this.bvh=e,this.cell=t.cell,this.zone=t.zone,this.roofs=t.roofs.map((i,s)=>{let o=atob(i.grid.m),a=new Uint8Array(o.length);for(let c=0;c<o.length;c++)a[c]=o.charCodeAt(c);return{...i,i:s,m:a,nx:i.grid.nx,nz:i.grid.nz,ox:i.grid.ox,oz:i.grid.oz,x0:i.x-i.hx,x1:i.x+i.hx,z0:i.z-i.hz,z1:i.z+i.hz,links:[],cells:[]}});for(let i of this.roofs)for(let s=0;s<i.m.length;s++)i.m[s]&&i.cells.push(s);let n=t.zone.center;for(let i of this.roofs)i.cellD=Float32Array.from(i.cells.map(s=>Math.hypot(i.ox+(s%i.nx+.5)*this.cell-n[0],i.oz+((s/i.nx|0)+.5)*this.cell-n[1]))).sort(),i.dist=Math.hypot(i.x-n[0],i.z-n[1]);this.links=t.links.map((i,s)=>({...i,i:s,p0:new L(...i.p0),p1:new L(...i.p1),k0:i.k0?new L(...i.k0):null,k1:i.k1?new L(...i.k1):null}));for(let i of this.links)this.roofs[i.a].links.push({link:i,dir:0,to:i.b}),i.oneWay||this.roofs[i.b].links.push({link:i,dir:1,to:i.a});if(this.spawns=this.roofs.filter(i=>i.spawn>=0).sort((i,s)=>i.spawn-s.spawn),this.fenceBvh=null,t.fence&&t.fence.length){let i=new mr(4096,8192);for(let a of t.fence)i.shape(a);let s=i.arrays(),o=new ue;o.setAttribute("position",new Ft(s.position.slice(),3)),o.setIndex(new Ft(s.index.slice(),1)),this.fenceBvh=new To(o)}}safeCount(t,e){let n=t.cellD,i=0,s=n.length;for(;i<s;){let o=i+s>>1;n[o]<e?i=o+1:s=o}return i}roofAt(t,e,n=null){let i=-1,s=1e9;for(let o of this.roofs){if(t<o.x0-.35||t>o.x1+.35||e<o.z0-.35||e>o.z1+.35)continue;let a=n==null?0:Math.abs(n-o.roofY);a<s&&(s=a,i=o.i)}return s<3.5||n==null?i:-1}cellAt(t,e,n){let i=Math.floor((e-t.ox)/this.cell),s=Math.floor((n-t.oz)/this.cell);return i<0||s<0||i>=t.nx||s>=t.nz?-1:s*t.nx+i}walk(t,e,n){let i=this.cellAt(t,e,n);return i>=0&&t.m[i]===1}cellPos(t,e,n=new L){return n.set(t.ox+(e%t.nx+.5)*this.cell,t.roofY,t.oz+((e/t.nx|0)+.5)*this.cell)}nearestCell(t,e,n){let i=this.cellAt(t,e,n);if(i>=0&&t.m[i])return i;let s=-1,o=1e9;for(let a of t.cells){let c=t.ox+(a%t.nx+.5)*this.cell,l=t.oz+((a/t.nx|0)+.5)*this.cell,h=(c-e)**2+(l-n)**2;h<o&&(o=h,s=a)}return s}clearWalk(t,e,n,i,s){let o=Math.hypot(i-e,s-n),a=Math.ceil(o/(this.cell*.5));for(let c=0;c<=a;c++){let l=a?c/a:0;if(!this.walk(t,e+(i-e)*l,n+(s-n)*l))return!1}return!0}path(t,e,n,i,s){if(this.clearWalk(t,e,n,i,s))return[{x:i,z:s}];let o=this.nearestCell(t,e,n),a=this.nearestCell(t,i,s);if(o<0||a<0)return[{x:i,z:s}];if(o===a)return[{x:i,z:s}];let c=t.nx,l=t.nz,h=c*l,u=new Float32Array(h).fill(1e9),f=new Int32Array(h).fill(-1),d=new Uint8Array(h),g=[o];u[o]=0;let x=a%c,p=a/c|0,m=E=>{let R=Math.abs(E%c-x),P=Math.abs((E/c|0)-p);return Math.max(R,P)+.414*Math.min(R,P)},_=!1,M=0;for(;g.length&&M++<4e3;){let E=0,R=1e9;for(let I=0;I<g.length;I++){let U=u[g[I]]+m(g[I]);U<R&&(R=U,E=I)}let P=g[E];if(g[E]=g[g.length-1],g.pop(),P===a){_=!0;break}if(d[P])continue;d[P]=1;let C=P%c,D=P/c|0;for(let I=-1;I<=1;I++)for(let U=-1;U<=1;U++){if(!U&&!I)continue;let k=C+U,V=D+I;if(k<0||V<0||k>=c||V>=l)continue;let tt=V*c+k;if(!t.m[tt]||d[tt]||U&&I&&(!t.m[D*c+k]||!t.m[V*c+C]))continue;let W=u[P]+(U&&I?1.414:1);W<u[tt]&&(u[tt]=W,f[tt]=P,g.push(tt))}}if(!_)return[{x:i,z:s}];let v=[];for(let E=a;E!==o&&E>=0;E=f[E])v.push(this.cellPos(t,E));v.reverse(),v[v.length-1]={x:i,z:s};let S=[],T=e,y=n,b=0;for(;b<v.length;){let E=v.length-1;for(;E>b&&!this.clearWalk(t,T,y,v[E].x,v[E].z);)E--;S.push({x:v[E].x,z:v[E].z}),T=v[E].x,y=v[E].z,b=E+1}return S}route(t,e,n=null){let i=this.roofs.length,s=new Float32Array(i).fill(1e9),o=new Array(i).fill(null),a=new Uint8Array(i);for(s[t]=0;;){let c=-1,l=1e9;for(let h=0;h<i;h++)!a[h]&&s[h]<l&&(l=s[h],c=h);if(c<0)return null;if(c!==t&&e(this.roofs[c])){let h=[];for(let u=c;u!==t;u=o[u].from)h.push(o[u].e);return h.reverse()}a[c]=1;for(let h of this.roofs[c].links){if(n&&n(h))continue;let u=s[c]+h.link.time+3;u<s[h.to]&&(s[h.to]=u,o[h.to]={from:c,e:h})}}}raycast(t,e,n=400){return ts.origin.copy(t),ts.direction.copy(e),this.bvh.raycastFirst(ts,Pe,0,n)||null}los(t,e){_d.copy(e).sub(t);let n=_d.length();return n<.01?!0:(ts.origin.copy(t),ts.direction.copy(_d).multiplyScalar(1/n),!this.bvh.raycastFirst(ts,Pe,0,n-.05))}groundY(t,e,n,i=6){ts.origin.set(t,n,e),ts.direction.set(0,-1,0);let s=this.bvh.raycastFirst(ts,Pe,0,i);return s?s.point.y:null}linkEnds(t,e){return e?[t.p1,t.p0]:[t.p0,t.p1]}linkDuration(t){return t.time}linkPos(t,e,n,i){let[s,o]=this.linkEnds(t,e);if(t.kind==="zip"){let a=t.lift,c=.12;if(n<c)return i.copy(s).setY(s.y+a*(n/c));if(n>1-c)return i.copy(o).setY(o.y+a*((1-n)/c));let l=(n-c)/(1-2*c);return i.copy(s).lerp(o,l).setY(s.y+(o.y-s.y)*l+a)}if(t.kind==="pad"){let a=n*t.time;return i.set(s.x+t.v[0]*a,s.y+t.v[1]*a-.5*za*a*a,s.z+t.v[2]*a)}if(t.kind==="jump"&&t.k0){let a=e?t.k1:t.k0,c=e?t.k0:t.k1,l=e?1-t.seg[1]:t.seg[0],h=e?1-t.seg[0]:t.seg[1];if(n<l)return i.copy(s).lerp(a,n/l);if(n>h)return i.copy(c).lerp(o,(n-h)/(1-h));let u=(n-l)/(h-l);return i.copy(a).lerp(c,u).setY(a.y+(c.y-a.y)*u+1.05*4*u*(1-u))}if(t.kind==="jump"||t.kind==="step"){let a=(t.kind==="jump"?1.25:.55)+Math.max(0,o.y-s.y),c=s.y+(o.y-s.y)*n+a*4*n*(1-n)*(o.y>s.y?1-n*.5:.5+n*.5);return i.copy(s).lerp(o,n).setY(Math.max(c,s.y+(o.y-s.y)*n))}if(t.kind==="ladder"){let a=t.p0,c=t.p1,l=nb.set(t.wall[0]-t.n[0]*.42,a.y,t.wall[1]-t.n[1]*.42),h=e?1-n:n,u=.12,f=.86;return h<u?i.copy(a).lerp(l,h/u):h<f?i.copy(l).setY(a.y+(c.y-a.y)*((h-u)/(f-u))):i.copy(l).setY(c.y).lerp(c,(h-f)/(1-f))}return i.copy(s).lerp(o,n)}linkMode(t,e,n=0){if(t.kind==="jump"&&t.seg){let i=n?1-e:e;return i<t.seg[0]||i>t.seg[1]?"ground":"air"}return t.kind==="zip"?e>.1&&e<.92?"zip":"air":t.kind==="ladder"?e>.1&&e<.88?"ladder":"ground":"air"}linkLabel(t){return{zip:"ZIPLINE",pad:"LAUNCH PAD",ladder:"LADDER",jump:"RAMP",step:"CLIMB"}[t.kind]}};var vh=class{constructor(){this.ctx=null,this.muted=!1,this.vol=.9,this.loops={}}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.vol;let n=e.createDynamicsCompressor();n.threshold.value=-16,n.knee.value=18,n.ratio.value=5,n.attack.value=.004,n.release.value=.22,this.master.connect(n),n.connect(e.destination);let i=e.sampleRate*2.6,s=e.createBuffer(2,i,e.sampleRate);for(let c=0;c<2;c++){let l=s.getChannelData(c);for(let h=0;h<i;h++){let u=h/i;l[h]=(Math.random()*2-1)*Math.pow(1-u,2.6)*(h<400?h/400:1)*(1+.6*Math.sin(h*7e-4+c))}}this.rev=e.createConvolver(),this.rev.buffer=s,this.revGain=e.createGain(),this.revGain.gain.value=.55,this.rev.connect(this.revGain),this.revGain.connect(this.master);let o=e.sampleRate*2;this.noise=e.createBuffer(1,o,e.sampleRate);let a=this.noise.getChannelData(0);for(let c=0;c<o;c++)a[c]=Math.random()*2-1;this._ambience()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:this.vol,this.ctx.currentTime,.05)}get t(){return this.ctx?this.ctx.currentTime:0}_out(t=0,e=.25,n=1){let i=this.ctx,s=i.createGain();s.gain.value=n;let o=s;if(i.createStereoPanner){let a=i.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,t)),s.connect(a),o=a}if(o.connect(this.master),e>0){let a=i.createGain();a.gain.value=e,o.connect(a),a.connect(this.rev)}return s}_noise(t,e=0){let i=this.ctx.createBufferSource();return i.buffer=this.noise,i.loop=!0,i.start(this.t+e,Math.random()*1.5),i.stop(this.t+e+t+.05),i}_env(t,e,n=0){let i=this.t+n;t.cancelScheduledValues(i),t.setValueAtTime(e[0][1],i+e[0][0]);for(let s=1;s<e.length;s++)e[s][2]==="exp"?t.exponentialRampToValueAtTime(Math.max(1e-4,e[s][1]),i+e[s][0]):t.linearRampToValueAtTime(e[s][1],i+e[s][0])}_tone(t,e,n,i,s,o,a=0){let c=this.ctx,l=c.createOscillator();l.type=t;let h=c.createGain();return l.frequency.setValueAtTime(e,this.t+a),n!==e&&l.frequency.exponentialRampToValueAtTime(Math.max(1,n),this.t+a+i),this._env(h.gain,[[0,0],[.004,s],[i,1e-4,"exp"]],a),l.connect(h),h.connect(o),l.start(this.t+a),l.stop(this.t+a+i+.05),l}_burst(t,e,n,i,s,o,a=0,c="bandpass"){let l=this.ctx,h=this._noise(t,a),u=l.createBiquadFilter();u.type=c,u.Q.value=i,u.frequency.setValueAtTime(e,this.t+a),u.frequency.exponentialRampToValueAtTime(Math.max(20,n),this.t+a+t);let f=l.createGain();this._env(f.gain,[[0,0],[.002,s],[t,1e-4,"exp"]],a),h.connect(u),u.connect(f),f.connect(o)}shot(t=0,e=0,n=!1){if(!this.ctx)return;let i=Math.min(.5,t/343),s=t<=0?1:Math.max(.05,1/(1+t/26)),o=this._out(e,t<=0?.55:.9,s*(n?.6:1)),a=o;if(t>0){let c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=Math.max(500,9e3-t*55),c.connect(o),a=c}if(n){this._burst(.11,3200,500,.7,.9,a,i),this._tone("sine",190,60,.12,.7,a,i);return}this._burst(.05,6e3,1800,.5,1,a,i,"highpass"),this._burst(.42,1600,140,.6,.95,a,i),this._tone("sine",120,34,.5,1,a,i),this._burst(1.3,700,180,.4,.22,a,i+.05,"lowpass")}bolt(t=.32){if(!this.ctx)return;let e=this._out(.15,.08,.5);for(let[n,i]of[[0,2600],[.11,1700],[.36,2100],[.47,3100]])this._burst(.035,i,i*.6,4,.8,e,t+n),this._tone("square",i*.5,i*.25,.02,.08,e,t+n)}reload(t=2.4){if(!this.ctx)return;let e=this._out(.1,.08,.5);for(let[n,i]of[[.15,900],[.3,1400],[t*.55,1100],[t*.62,2400],[t-.5,1800],[t-.38,3e3]])this._burst(.05,i,i*.5,3,.8,e,n)}dry(){this.ctx&&this._burst(.03,2400,1500,5,.5,this._out(0,0,.5))}whiz(t=0){if(!this.ctx)return;let e=this._out(t,.2,.75),n=this.ctx,i=this._noise(.22),s=n.createBiquadFilter();s.type="bandpass",s.Q.value=9,s.frequency.setValueAtTime(5200,this.t),s.frequency.exponentialRampToValueAtTime(900,this.t+.2);let o=n.createGain();this._env(o.gain,[[0,0],[.03,1],[.22,1e-4,"exp"]]),i.connect(s),s.connect(o),o.connect(e)}impact(t=10,e=0){if(!this.ctx)return;let n=this._out(e,.3,Math.max(.05,.6/(1+t/14)));this._burst(.07,2600,500,1.5,1,n)}hit(t=!1){if(!this.ctx)return;let e=this._out(0,.12,.55);this._burst(.05,1900,700,2,.9,e),t&&(this._tone("sine",1320,1318,.5,.35,e,.02),this._tone("sine",1980,1975,.35,.18,e,.02))}kill(){if(!this.ctx)return;let t=this._out(0,.5,.5);this._tone("sine",660,659,.9,.3,t,.05),this._tone("sine",990,988,.7,.2,t,.13),this._tone("triangle",330,329,1.1,.2,t,.05)}hurt(){if(!this.ctx)return;let t=this._out(0,.1,.9);this._tone("sine",150,48,.25,1,t),this._burst(.18,600,120,.8,.7,t)}step(t=!1){if(!this.ctx)return;let e=this._out((Math.random()-.5)*.3,.05,t?.09:.2);this._burst(.06,380+Math.random()*160,110,1.2,1,e)}jump(){this.ctx&&this._burst(.09,300,700,1,.3,this._out(0,.05,.4))}land(t=1){if(!this.ctx)return;let e=this._out(0,.12,Math.min(1,.3+t*.5));this._tone("sine",110,40,.18,.9,e),this._burst(.12,500,90,.8,.7,e)}pad(){if(!this.ctx)return;let t=this._out(0,.4,.8);this._tone("sawtooth",70,520,.38,.22,t),this._burst(.9,300,3200,.7,.55,t,.02),this._tone("sine",880,1760,.22,.2,t,0)}ui(){this.ctx&&this._tone("sine",700,700,.05,.16,this._out(0,0,.6))}tick(){this.ctx&&this._tone("square",1100,1100,.03,.07,this._out(0,.1,.5))}heart(){if(!this.ctx)return;let t=this._out(0,0,.9);this._tone("sine",62,38,.13,1,t),this._tone("sine",56,34,.14,.75,t,.17)}ladder(){this.ctx&&this._burst(.04,1500,900,5,.5,this._out(0,.1,.35))}choir(t=4.5,e=!1){if(!this.ctx)return;let n=this.ctx,i=this._out(0,1,.36);(e?[73.4,110,146.8,174.6,220]:[146.8,220,293.7,349.2,440,587.3]).forEach((o,a)=>{for(let c of[-5,4]){let l=n.createOscillator();l.type=a%2?"triangle":"sine",l.frequency.value=o,l.detune.value=c+Math.random()*4;let h=n.createOscillator();h.frequency.value=4.2+Math.random();let u=n.createGain();u.gain.value=5,h.connect(u),u.connect(l.detune);let f=n.createGain();this._env(f.gain,[[0,0],[t*.35,.16/(1+a*.25)],[t*.65,.12/(1+a*.25)],[t,1e-4,"exp"]],a*.05),l.connect(f),f.connect(i),l.start(this.t),h.start(this.t),l.stop(this.t+t+.3),h.stop(this.t+t+.3)}})}toll(t=0){if(!this.ctx)return;let e=this._out(0,1,.45),n=196*Math.pow(2,-t/12);for(let[i,s]of[[1,.5],[2.01,.25],[2.76,.18],[5.4,.06]])this._tone("sine",n*i,n*i*.995,3.2/i+.6,s,e)}stinger(t){if(!this.ctx)return;let e=this._out(0,.9,.5);(t?[220,277.2,329.6,440,554.4]:[220,207.6,174.6,146.8,110]).forEach((i,s)=>{this._tone("triangle",i,i,1.6,.3,e,s*.16),this._tone("sine",i*2,i*2,1.2,.12,e,s*.16)})}_ambience(){let t=this.ctx,e=(a,c,l,h)=>{let u=t.createBufferSource();u.buffer=this.noise,u.loop=!0;let f=t.createBiquadFilter();f.type=a,f.frequency.value=c,f.Q.value=l;let d=t.createGain();return d.gain.value=h,u.connect(f),f.connect(d),d.connect(this.master),u.start(),{s:u,f,g:d}};this.wind=e("bandpass",420,.5,.075),this.rain=e("highpass",5200,.3,.022);let n=t.createOscillator();n.frequency.value=.07;let i=t.createGain();i.gain.value=190,n.connect(i),i.connect(this.wind.f.frequency),n.start();let s=t.createGain();s.gain.value=.05;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=150;for(let a of[36.7,55.2,73.6]){let c=t.createOscillator();c.type="sawtooth",c.frequency.value=a,c.detune.value=Math.random()*12-6,c.connect(o),c.start()}o.connect(s),s.connect(this.master),this.drone=s,this.zipL=e("bandpass",900,6,0),this.zoneL=e("bandpass",180,2.5,0)}setZip(t){this.zipL&&(this.zipL.g.gain.setTargetAtTime(t*.35,this.t,.05),this.zipL.f.frequency.setTargetAtTime(700+t*1500,this.t,.1))}setZone(t){this.zoneL&&this.zoneL.g.gain.setTargetAtTime(t*.3,this.t,.1)}setTension(t){this.drone&&this.drone.gain.setTargetAtTime(.05+t*.07,this.t,.5)}};var Mh=class{constructor(t,e){this.canvas=t,this.ui=e,this.keys=new Set,this.down={},this.edge={},this.lookX=0,this.lookY=0,this.moveX=0,this.moveY=0,this.locked=!1,this.lockFailed=!1,this.everLocked=!1,this.touch=!1,this.enabled=!1,this.wheel=0,this.sens=1,this.mouseBtn=[!1,!1,!1],this.cursor={x:.5,y:.5,inside:!1},this.stick={id:-1,ox:0,oy:0,x:0,y:0},this.lookTouch={id:-1,x:0,y:0},this.fireTouch={id:-1,x:0,y:0,moved:0};let n=s=>{if(s.repeat){this.enabled&&s.preventDefault();return}this.keys.add(s.code);let o=ng[s.code];o&&(this._press(o),this.enabled&&s.preventDefault()),s.code==="Tab"&&this.enabled&&s.preventDefault()},i=s=>{this.keys.delete(s.code);let o=ng[s.code];o&&this._release(o)};window.addEventListener("keydown",n),window.addEventListener("keyup",i),window.addEventListener("blur",()=>{this.keys.clear();for(let s in this.down)this.down[s]=!1;this.mouseBtn=[!1,!1,!1]}),t.addEventListener("mousedown",s=>{if(!this.touch&&this.enabled){if(s.preventDefault(),!this.locked&&!this.lockFailed){this.requestLock();return}this.mouseBtn[s.button]=!0,s.button===0&&this._press("fire"),s.button===2&&this._press("ads")}}),window.addEventListener("mouseup",s=>{this.mouseBtn[s.button]=!1,s.button===0&&this._release("fire"),s.button===2&&this._release("ads")}),t.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("mousemove",s=>{if(!(this.touch||!this.enabled))if(this.locked)this.lookX+=s.movementX||0,this.lookY+=s.movementY||0;else{let o=t.getBoundingClientRect();this.cursor.x=(s.clientX-o.left)/o.width,this.cursor.y=(s.clientY-o.top)/o.height,this.cursor.inside=this.cursor.x>=0&&this.cursor.x<=1&&this.cursor.y>=0&&this.cursor.y<=1,this.lockFailed&&this.cursor.inside&&(this.lookX+=s.movementX||0,this.lookY+=s.movementY||0)}}),t.addEventListener("wheel",s=>{this.enabled&&(this.wheel+=Math.sign(s.deltaY),s.preventDefault())},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked&&(this.everLocked=!0),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>this._lockError()),window.addEventListener("touchstart",()=>{this.touch||(this.touch=!0,this.onTouchMode&&this.onTouchMode())},{capture:!0,passive:!0}),this._touchSetup()}requestLock(){if(!(this.touch||this.lockFailed)){if(!this.canvas.requestPointerLock){this.lockFailed=!0,this.onLockChange&&this.onLockChange(!1);return}try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>this._lockError())}catch{this._lockError()}}}_lockError(){let t=performance.now();t-(this._lastErr||-1e9)<80||(this._lastErr=t,this.everLocked?this.onLockError&&this.onLockError():(this.lockFailed=!0,this.onLockChange&&this.onLockChange(!1)))}exitLock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}_press(t){this.down[t]||(this.edge[t]=!0),this.down[t]=!0}_release(t){this.down[t]=!1,t==="fire"&&(this.edge.fireUp=!0)}pressed(t){return!!this.edge[t]}held(t){return!!this.down[t]}endFrame(){for(let t in this.edge)this.edge[t]=!1;this.lookX=0,this.lookY=0,this.wheel=0}poll(t){let e=0,n=0,i=this.keys;(i.has("KeyW")||i.has("ArrowUp"))&&(n+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(n-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(e+=1),(i.has("KeyA")||i.has("ArrowLeft"))&&(e-=1),this.stick.id>=0&&(e=this.stick.x,n=this.stick.y);let s=Math.hypot(e,n);if(s>1&&(e/=s,n/=s),this.moveX=e,this.moveY=n,this.sprintStick=this.stick.id>=0&&s>.92&&n>.6,!this.touch&&!this.locked&&this.lockFailed&&this.cursor.inside&&this.enabled){let o=this.cursor.x<.12?-(.12-this.cursor.x)/.12:this.cursor.x>.88?(this.cursor.x-.88)/.12:0,a=this.cursor.y<.1?-(.1-this.cursor.y)/.1:this.cursor.y>.9?(this.cursor.y-.9)/.1:0;this.lookX+=o*900*t,this.lookY+=a*500*t}}_touchSetup(){let t=this.canvas,e={passive:!1},n=o=>{if(this.touch||(this.touch=!0,this.onTouchMode&&this.onTouchMode()),!!this.enabled){o.preventDefault();for(let a of o.changedTouches){let c=t.getBoundingClientRect();(a.clientX-c.left)/c.width<.42&&this.stick.id<0?(this.stick.id=a.identifier,this.stick.ox=a.clientX,this.stick.oy=a.clientY,this.stick.x=this.stick.y=0,this.onStick&&this.onStick(!0,a.clientX,a.clientY,0,0)):this.lookTouch.id<0&&(this.lookTouch.id=a.identifier,this.lookTouch.x=a.clientX,this.lookTouch.y=a.clientY)}}},i=o=>{if(this.enabled){o.preventDefault();for(let a of o.changedTouches)if(a.identifier===this.stick.id){let l=(a.clientX-this.stick.ox)/56,h=(a.clientY-this.stick.oy)/56,u=Math.hypot(l,h);u>1&&(l/=u,h/=u),this.stick.x=l,this.stick.y=-h,this.onStick&&this.onStick(!0,this.stick.ox,this.stick.oy,l,h)}else a.identifier===this.lookTouch.id&&(this.lookX+=(a.clientX-this.lookTouch.x)*2.1,this.lookY+=(a.clientY-this.lookTouch.y)*2.1,this.lookTouch.x=a.clientX,this.lookTouch.y=a.clientY)}},s=o=>{for(let a of o.changedTouches)a.identifier===this.stick.id&&(this.stick.id=-1,this.stick.x=this.stick.y=0,this.onStick&&this.onStick(!1)),a.identifier===this.lookTouch.id&&(this.lookTouch.id=-1)};t.addEventListener("touchstart",n,e),t.addEventListener("touchmove",i,e),t.addEventListener("touchend",s,e),t.addEventListener("touchcancel",s,e)}bindButton(t,e,n="tap"){let i={passive:!1},s=-1,o=0,a=0;t.addEventListener("touchstart",l=>{if(l.preventDefault(),l.stopPropagation(),this.touch=!0,!this.enabled)return;let h=l.changedTouches[0];s=h.identifier,o=h.clientX,a=h.clientY,t.classList.add("on"),n==="toggle"?(this.down[e]=!this.down[e],this.edge[e]=!0,t.classList.toggle("lit",this.down[e])):n==="fire"?(this.fireTouch.id=s,this.edge.fireDown=!0):this._press(e)},i),t.addEventListener("touchmove",l=>{if(l.preventDefault(),l.stopPropagation(),!(n!=="fire"&&n!=="hold"))for(let h of l.changedTouches)h.identifier===s&&(this.lookX+=(h.clientX-o)*1.7,this.lookY+=(h.clientY-a)*1.7,o=h.clientX,a=h.clientY)},i);let c=l=>{l.preventDefault(),l.stopPropagation();for(let h of l.changedTouches)h.identifier===s&&(s=-1,t.classList.remove("on"),n==="fire"?(this.fireTouch.id=-1,this.edge.fire=!0,this.edge.fireUp=!0):n!=="toggle"&&this._release(e))};t.addEventListener("touchend",c,i),t.addEventListener("touchcancel",c,i),t.addEventListener("mousedown",l=>{l.preventDefault(),l.stopPropagation(),this.enabled&&(n==="toggle"?(this.down[e]=!this.down[e],this.edge[e]=!0,t.classList.toggle("lit",this.down[e])):n==="fire"?this.edge.fire=!0:this._press(e))}),t.addEventListener("mouseup",l=>{l.stopPropagation(),n!=="toggle"&&n!=="fire"&&this._release(e)})}setToggle(t,e,n){this.down[t]=e,n&&n.classList.toggle("lit",e)}},ng={Space:"jump",ShiftLeft:"sprint",ShiftRight:"sprint",ControlLeft:"crouch",KeyC:"crouch",KeyR:"reload",KeyE:"use",KeyF:"use",KeyQ:"swap",Digit1:"w1",Digit2:"w2",KeyZ:"zoom",KeyX:"zoom",Escape:"pause",KeyP:"pause",KeyM:"mute",Tab:"map",Enter:"confirm"};var ib=r=>document.getElementById(r),ig=r=>String(r).padStart(2,"0"),Ha="http://www.w3.org/2000/svg",Sh=class{constructor(t){this.g=t,this.el={};for(let e of["hud","scope","touch","title","pause","results","fade","alive-n","pips","kills","time","phase","map","feed","banner","target","cross","hit","arcs","prompt","hp","hpn","hpbar","where","seen","gain","ammo","wname","mag","res","act","ret","zoomx","range","hold","breath","stick","b-use","b-zoom","b-crouch","b-ads","deploy","load","loadtxt","loadbar","keys","rplace","rhead","rsub","stats","rlog","err","psub"])this.el[e]=ib(e);this.mapCtx=this.el.map.getContext("2d"),this.bannerT=0,this.hitT=0,this.feedItems=[],this.arcs=[],this.mapT=0,this.gainT=0,this.lastHp=100,this.mode="title";for(let e=0;e<8;e++)this.el.pips.appendChild(document.createElement("i"));for(let e=0;e<4;e++){let n=document.createElementNS(Ha,"svg");n.setAttribute("viewBox","-100 -100 200 200");let i=document.createElementNS(Ha,"path");i.setAttribute("d","M -26 -96.6 A 100 100 0 0 1 26 -96.6"),n.appendChild(i);let s=document.createElementNS(Ha,"path");s.setAttribute("d","M -9 -104 L 0 -113 L 9 -104"),n.appendChild(s),this.el.arcs.appendChild(n),this.arcs.push({el:n,t:0,x:0,z:0,k:1})}this._reticle(),this.el.hit.querySelectorAll("i").forEach((e,n)=>{e.style.transform=`rotate(${45+n*90}deg) translateY(-13px)`}),[["l",-15,0],["r",6,0],["t",0,-15],["b",0,6]].forEach(([e,n,i])=>{let s=this.el.cross.querySelector("."+e);s.style.left=n+"px",s.style.top=i+"px"})}_reticle(){let t=this.el.ret,e=(i,s,o,a,c)=>{let l=document.createElementNS(Ha,"line");l.setAttribute("x1",i),l.setAttribute("y1",s),l.setAttribute("x2",o),l.setAttribute("y2",a),l.setAttribute("class",c),t.appendChild(l)},n=(i,s,o,a)=>{let c=document.createElementNS(Ha,"circle");c.setAttribute("cx",i),c.setAttribute("cy",s),c.setAttribute("r",o),c.setAttribute("class",a),t.appendChild(c)};e(-100,0,-3,0,"thin"),e(3,0,100,0,"thin"),e(0,-100,0,-3,"thin"),e(0,3,0,100,"thin"),e(-100,0,-42,0,"post"),e(42,0,100,0,"post"),e(0,42,0,100,"post");for(let i=1;i<=6;i++)for(let s of[-1,1])n(s*i*6,0,.5,"m"),n(0,s*i*6,.5,"m");for(let i=1;i<=5;i++)e(-1.6,6*i+3,1.6,6*i+3,"thin");n(0,0,.55,"c")}show(t){this.mode=t;let e=this.el;e.title.hidden=t!=="title",e.pause.hidden=t!=="pause",e.results.hidden=t!=="results",e.hud.hidden=!(t==="play"||t==="pause"||t==="spectate"),t!=="play"&&(e.scope.hidden=!0),e.touch.hidden=!(t==="play"&&this.g.input.touch)}loading(t,e){this.el.loadbar.firstElementChild.style.width=Math.round(t*100)+"%",e&&(this.el.loadtxt.textContent=e)}ready(){this.el.deploy.disabled=!1,this.el.load.hidden=!0}error(t){this.el.err.hidden=!1,this.el.err.textContent=t}keysLegend(t){this.el.keys.innerHTML=t?"<span><b>LEFT THUMB</b> move</span><span><b>RIGHT THUMB</b> look</span><span><b>FIRE</b> drag to aim, release to shoot</span><span><b>SCOPE</b> toggle</span><span><b>USE</b> ziplines and ladders</span>":"<span><b>WASD</b> move</span><span><b>MOUSE</b> look</span><span><b>LMB</b> fire</span><span><b>RMB</b> scope</span><span><b>WHEEL</b> 4\xD7 / 8\xD7</span><span><b>SHIFT</b> sprint \xB7 hold breath</span><span><b>SPACE</b> jump \xB7 climb</span><span><b>C</b> crouch</span><span><b>E</b> zipline \xB7 ladder</span><span><b>R</b> reload</span><span><b>Q</b> sidearm</span><span><b>ESC</b> pause</span>"}fade(t){this.el.fade.style.opacity=t}time(t,e,n,i){let s=Math.max(0,e-t),o=Math.floor(s/60),a=Math.floor(s%60),c=`${ig(o)}:${ig(a)}`;c!==this._t&&(this._t=c,this.el.time.textContent=c,this.el.time.classList.toggle("late",s<=30)),n!==this._pl&&(this._pl=n,this.el.phase.textContent=n,this.el.phase.className="lab "+(i||""))}alive(t,e){let n=t.filter(s=>s.alive).length;this.el["alive-n"].textContent=n;let i=this.el.pips.children;t.forEach((s,o)=>{i[o]&&(i[o].className=(s.alive?"":"dead")+(s===e?" me":""))}),this.el.kills.textContent=`${e.kills} elimination${e.kills===1?"":"s"}`}health(t){let e=Math.max(0,Math.ceil(t));this.el.hpn.textContent=e,this.el.hpbar.querySelector("i").style.width=e+"%",this.el.hpbar.querySelector("em").style.width=e+"%",this.el.hp.classList.toggle("low",e<=35),e>this.lastHp+4&&(this.el.gain.textContent="+"+(e-this.lastHp),this.el.gain.style.opacity=1,this.gainT=1.4),this.lastHp=e}where(t){t!==this._w&&(this._w=t,this.el.where.textContent=t)}seen(t,e){let n=t?"the angel sees you":e?"hide from the angel":"unseen";n!==this._s&&(this._s=n,this.el.seen.textContent=n,this.el.seen.classList.toggle("on",t||e))}weapon(t){let e=t.w[t.cur];this.el.wname.textContent=t.weapon.name,this.el.mag.textContent=e.mag,this.el.res.textContent="/ "+e.reserve,this.el.ammo.classList.toggle("empty",e.mag===0),this.el["b-zoom"].textContent=t.weapon.zooms[Math.min(t.zoomIdx,t.weapon.zooms.length-1)]+"\xD7"}action(t){let e=t<0?0:Math.round(t*100);e!==this._a&&(this._a=e,this.el.act.firstElementChild.style.width=e+"%")}prompt(t,e,n){let i=this.el.prompt,s=this.el["b-use"];if(!t){i.hidden||(i.hidden=!0),s.hidden||(s.hidden=!0),this._p=null;return}t!==this._p&&(this._p=t,n?(s.hidden=!0,i.hidden=!1,i.textContent=t):e?(s.hidden=!1,s.textContent=t,i.hidden=!0):(i.hidden=!1,i.innerHTML=`<kbd>E</kbd>${t}`))}banner(t,e=2.4,n=!1,i="",s=!1){let o=this.el.banner;o.querySelector("b").textContent=t,o.querySelector("span").textContent=i,o.className=(n?"small ":"")+(s?"red":""),o.style.opacity=1,this.bannerT=e}feed(t,e,n,i){let s=document.createElement("div");for(i&&(s.className="me"),s.innerHTML=`${t}<u></u>${e}${n?`<s>${n}</s>`:""}`,this.el.feed.prepend(s),this.feedItems.unshift({el:s,t:6.5});this.feedItems.length>5;)this.feedItems.pop().el.remove()}hitMarker(t,e){let n=this.el.hit;n.className=t||e?"kill":"",n.style.opacity=1,this.hitT=t?.5:.22}threat(t,e=1){let n=this.arcs[0];for(let i of this.arcs)i.t<n.t&&(n=i);n.t=1.3*e+.5,n.x=t.x,n.z=t.z,n.k=e}target(t){let e=this.el.target;if(!t){e.hidden||(e.hidden=!0),this._tg=null;return}e.hidden&&(e.hidden=!1);let n=t.name+Math.ceil(t.hp);n!==this._tg&&(this._tg=n,e.querySelector("b").textContent=`${t.name} \xB7 ${Math.max(0,Math.ceil(t.hp))}`,e.querySelector("i").style.width=Math.max(0,t.hp)+"%")}scope(t,e,n,i,s,o){let a=this.el;if(a.scope.hidden===t&&(a.scope.hidden=!t,a.cross.style.visibility=t?"hidden":""),!t)return;let c=e+"\xD7";c!==this._z&&(this._z=c,a.zoomx.textContent=c);let l=n>0?Math.round(n)+" m":"\u2014 m";l!==this._r&&(this._r=l,a.range.textContent=l),a.breath.firstElementChild.style.width=Math.round(i*100)+"%",a.breath.classList.toggle("out",s>0),this._ht!==o&&(this._ht=o,a.hold.textContent=o?"crouch to steady":"shift \xB7 hold breath")}syncCrouch(t){this.el["b-crouch"].classList.toggle("lit",t),this.g.input&&this.g.input.touch&&(this.g.input.down.crouch=t)}stick(t,e,n,i,s){let o=this.el.stick;o.hidden=!t,t&&(o.style.left=e+"px",o.style.top=n+"px",o.firstElementChild.style.transform=`translate(${i*34}px,${s*34}px)`)}update(t,e){this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(this.el.banner.style.opacity=0)),this.hitT>0&&(this.hitT-=t,this.hitT<=0&&(this.el.hit.style.opacity=0)),this.gainT>0&&(this.gainT-=t,this.gainT<=0&&(this.el.gain.style.opacity=0));for(let i of this.feedItems)i.t-=t,i.t<=0&&i.el.style.opacity!=="0"&&(i.el.style.opacity=0);let n=e.player;for(let i of this.arcs){if(i.t<=0){i.el.style.opacity!=="0"&&(i.el.style.opacity=0);continue}i.t-=t;let s=Math.atan2(-(i.x-n.pos.x),-(i.z-n.pos.z))-n.yaw;i.el.style.transform=`rotate(${(-s*180/Math.PI).toFixed(1)}deg)`,i.el.style.opacity=Math.min(1,i.t*1.6)*(.55+.45*i.k)}this.mapT-=t,this.mapT<=0&&(this.mapT=.1,this._map(e))}_map(t){let e=this.el.map,n=this.mapCtx,i=e.width,s=i/2,o=t.arena,a=t.player,c=t.zone,l=Math.min(100,Math.max(30,c.r+15));this.mapRange=this.mapRange?this.mapRange+(l-this.mapRange)*.12:l;let h=this.mapRange,u=s/h;n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,i,i),n.save(),n.beginPath(),n.arc(s,s,s-1,0,7),n.clip();let f=!a.alive,d=f?0:a.yaw,g=Math.cos(d),x=Math.sin(d),p=1/u;n.translate(s,s),n.rotate(d),n.scale(u,u),n.translate(-c.cx,-c.cz);for(let _ of o.roofs){let M=_.dist-Math.max(_.hx,_.hz)*.7>c.r;n.fillStyle=M?"rgba(94,10,19,0.85)":!f&&_.i===a.roof?"rgba(242,242,239,0.82)":"rgba(170,171,174,0.42)",n.fillRect(_.x0,_.z0,_.x1-_.x0,_.z1-_.z0)}n.lineWidth=p*1.1;for(let _ of o.links)_.kind!=="step"&&(n.strokeStyle="rgba(242,242,239,0.5)",n.setLineDash(_.kind==="pad"?[p*3,p*3]:_.kind==="jump"?[p*1.5,p*2]:[]),n.beginPath(),n.moveTo(_.p0.x,_.p0.z),n.lineTo(_.p1.x,_.p1.z),n.stroke());n.setLineDash([]),n.lineWidth=p*3,n.strokeStyle="#b51224",n.beginPath(),n.arc(c.cx,c.cz,c.r,0,7),n.stroke(),c.nextR<c.r-.5&&(n.lineWidth=p*1.6,n.strokeStyle="rgba(242,242,239,0.75)",n.setLineDash([p*5,p*5]),n.beginPath(),n.arc(c.cx,c.cz,c.nextR,0,7),n.stroke(),n.setLineDash([])),n.strokeStyle="#b51224",n.lineWidth=p*1.8;let m=p*5;n.beginPath(),n.arc(c.cx,c.cz,m,0,7),n.stroke(),n.beginPath(),n.moveTo(c.cx-m*.8,c.cz),n.lineTo(c.cx+m*.8,c.cz),n.moveTo(c.cx,c.cz-m*.8),n.lineTo(c.cx,c.cz+m*.8),n.stroke();for(let _ of t.actors){if(_===a||!_.alive)continue;let M=_.revealedUntil>t.time||f,v=t.time-_.lastShot<2.5;M?(n.fillStyle="#b51224",n.beginPath(),n.arc(_.pos.x,_.pos.z,p*4.5,0,7),n.fill()):v&&(n.strokeStyle="rgba(181,18,36,0.9)",n.lineWidth=p*1.8,n.beginPath(),n.arc(_.lastShotPos.x,_.lastShotPos.z,p*(6+(t.time-_.lastShot)*4),0,7),n.stroke())}if(n.restore(),!f){let _=a.pos.x-c.cx,M=a.pos.z-c.cz,v=(_*g-M*x)*u,S=(_*x+M*g)*u,T=Math.hypot(v,S),y=s-12;T>y&&(v*=y/T,S*=y/T),n.save(),n.translate(s+v,s+S),n.fillStyle="#f2f2ef",n.strokeStyle="rgba(5,5,5,0.9)",n.lineWidth=2,n.beginPath(),n.moveTo(0,-10),n.lineTo(7,8),n.lineTo(0,4),n.lineTo(-7,8),n.closePath(),n.stroke(),n.fill(),n.restore()}n.save(),n.translate(s,s),n.rotate(d),n.fillStyle="rgba(242,242,239,0.8)",n.font='700 15px "JetBrains Mono",monospace',n.textAlign="center",n.fillText("N",0,-s+17),n.restore()}results(t){let e=this.el;e.rplace.textContent=t.placeLabel,e.rhead.textContent=t.head,e.rhead.className=t.win?"win":"lose",e.rsub.textContent=t.sub,e.stats.innerHTML=t.stats.map(([n,i])=>`<div><b>${n}</b><span class="lab">${i}</span></div>`).join(""),e.rlog.innerHTML=t.log}};var Va=()=>({uFogLow:ne.uFogLow,uFogHigh:ne.uFogHigh,uFogDeep:ne.uFogDeep,uFogParams:ne.uFogParams,uTime:ne.uTime,uRedCol:ne.uRedCol});var yd=40,Co=18,sg=8,bh=yd+Co*sg,Th=class{constructor(t,e){let n=new ue,i=bh*4;this.aA=new Float32Array(i*3),this.aB=new Float32Array(i*3),this.aP=new Float32Array(i*4);let s=new Uint16Array(bh*6);for(let o=0;o<bh;o++){let a=o*4;for(let c=0;c<4;c++)this.aP[(a+c)*4]=c%2?1:-1,this.aP[(a+c)*4+1]=c<2?0:1,this.aP[(a+c)*4+2]=-1e3;s.set([a,a+1,a+2,a+2,a+1,a+3],o*6)}n.setAttribute("position",new Ft(new Float32Array(i*3),3)),n.setAttribute("aA",new Ft(this.aA,3)),n.setAttribute("aB",new Ft(this.aB,3)),n.setAttribute("aP",new Ft(this.aP,4)),n.setIndex(new Ft(s,1));for(let o of["aA","aB","aP"])n.getAttribute(o).setUsage(ys);this.mat=new He({uniforms:{...Va(),uRes:{value:e},uLife:{value:5.5}},transparent:!0,depthWrite:!1,blending:On,side:Pe,vertexShader:`
attribute vec3 aA; attribute vec3 aB; attribute vec4 aP; uniform vec2 uRes; uniform float uTime; uniform float uLife;
varying vec3 vWp; varying float vSide; varying float vAge; varying float vAlong; varying float vStyle; varying float vLen;
void main() {
  vec4 va = viewMatrix * vec4(aA, 1.0), vb = viewMatrix * vec4(aB, 1.0); float nz = -0.12;
  if (va.z > nz && vb.z > nz) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  if (va.z > nz) va = mix(va, vb, (nz - va.z) / (vb.z - va.z)); if (vb.z > nz) vb = mix(vb, va, (nz - vb.z) / (va.z - vb.z));
  vec4 ca = projectionMatrix * va, cb = projectionMatrix * vb; vec2 sa = ca.xy / ca.w, sb = cb.xy / cb.w; float asp = uRes.x / uRes.y;
  vec2 d = (sb - sa) * vec2(asp, 1.0); float dl = length(d); d = dl > 1e-6 ? d / dl : vec2(1.0, 0.0); vec2 nrm = vec2(-d.y, d.x);
  vec4 c = mix(ca, cb, aP.y); vec4 vv = mix(va, vb, aP.y);
  float style = floor(aP.w); float age = uTime - aP.z;
  float worldW = style > 0.5 ? 0.05 : mix(0.11, 0.035, clamp(age * 5.0, 0.0, 1.0));
  float px = max(style > 0.5 ? 1.25 : 1.6, worldW * projectionMatrix[1][1] * uRes.y * 0.5 / max(-vv.z, 0.1));
  c.xy += nrm * vec2(1.0 / asp, 1.0) * (px * 2.0 / uRes.y) * c.w * aP.x;
  gl_Position = c; vWp = mix(aA, aB, aP.y); vSide = aP.x; vAge = age; vStyle = style; vLen = distance(aA, aB); vAlong = aP.y * vLen + fract(aP.w) * 37.0;
}`,fragmentShader:`
precision highp float; uniform float uTime; uniform float uLife; uniform vec3 uRedCol;
varying vec3 vWp; varying float vSide; varying float vAge; varying float vAlong; varying float vStyle; varying float vLen;
${hr}
float h1(float x) { return fract(sin(x * 127.1) * 43758.5453); }
void main() {
  float soft = 1.0 - vSide * vSide; float a; vec3 col;
  if (vStyle > 0.5) { // soul thread: thin, steady, breathing
    if (vAge < 0.0) discard; float grow = clamp(vAge * 0.55, 0.0, 1.0);
    a = soft * (0.55 + 0.25 * sin(uTime * 1.7 - vAlong * 0.35)) * grow; col = uRedCol * 1.5;
  } else {
    if (vAge < 0.0 || vAge > uLife) discard;
    float t = vAge / uLife; float fray = h1(floor(vAlong * 3.0)) ; if (fray < (t - 0.35) * 1.6) discard;   // the thread frays as it dies
    float hot = 1.0 - clamp(vAge * 9.0, 0.0, 1.0);
    a = soft * mix(1.0, 0.0, smoothstep(0.0, 1.0, t)) * (0.55 + 0.45 * hot);
    col = mix(uRedCol * 1.7, vec3(1.0, 0.92, 0.9), hot * 0.85);
  }
  vec3 toP = vWp - cameraPosition; float dist = length(toP); float fa = scFogAmount(cameraPosition, toP / max(dist, 1e-4), dist);
  gl_FragColor = vec4(col * a * (1.0 - fa * 0.75), 1.0);
}`}),this.mesh=new fe(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,t.add(this.mesh),this.geo=n,this.next=0,this.souls=[]}_setQuad(t,e,n,i,s){for(let o=0;o<4;o++){let a=t*4+o;this.aA[a*3]=e.x,this.aA[a*3+1]=e.y,this.aA[a*3+2]=e.z,this.aB[a*3]=n.x,this.aB[a*3+1]=n.y,this.aB[a*3+2]=n.z,this.aP[a*4+2]=i,this.aP[a*4+3]=s}}shot(t,e){let n=this.next;this.next=(this.next+1)%yd,this._setQuad(n,t,e,ne.uTime.value,Math.random()*.99);for(let i of["aA","aB","aP"])this.geo.getAttribute(i).needsUpdate=!0}addSoul(t,e){this.souls.length>=sg||this.souls.push({from:t.clone(),getTo:e,birth:ne.uTime.value,to:new L,c:new L})}clear(){this.souls.length=0;for(let t=0;t<bh*4;t++)this.aP[t*4+2]=-1e3;this.geo.getAttribute("aP").needsUpdate=!0}update(){if(!this.souls.length)return;let t=new L,e=new L;this.souls.forEach((n,i)=>{n.getTo(n.to),n.c.copy(n.from).lerp(n.to,.5),n.c.y=Math.max(n.from.y,n.to.y)+14+3*Math.sin(ne.uTime.value*.4+i);let s=(a,c)=>{let l=1-a;return c.set(l*l*n.from.x+2*l*a*n.c.x+a*a*n.to.x,l*l*n.from.y+2*l*a*n.c.y+a*a*n.to.y,l*l*n.from.z+2*l*a*n.c.z+a*a*n.to.z)},o=Math.min(1,(ne.uTime.value-n.birth)/2.4);for(let a=0;a<Co;a++){let c=a/Co*o,l=(a+1)/Co*o;s(c,t),s(l,e),this._setQuad(yd+i*Co+a,t,e,n.birth,1+a/Co*.9)}});for(let n of["aA","aB","aP"])this.geo.getAttribute(n).needsUpdate=!0}},es=900,wh=class{constructor(t,e){let n=new ue;this.pos=new Float32Array(es*3),this.dat=new Float32Array(es*4),n.setAttribute("position",new Ft(this.pos,3).setUsage(ys)),n.setAttribute("aD",new Ft(this.dat,4).setUsage(ys)),this.vel=new Float32Array(es*3),this.life=new Float32Array(es),this.max=new Float32Array(es),this.grav=new Float32Array(es),this.n=0,this.head=0,this.mat=new He({uniforms:{...Va(),uRes:{value:e}},transparent:!0,depthWrite:!1,blending:xs,vertexShader:`attribute vec4 aD; uniform vec2 uRes; varying vec4 vD; varying vec3 vWp;
void main() { vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; vD = aD; vWp = position;
  float px = aD.z > 3.5 ? aD.x : aD.x * projectionMatrix[1][1] * uRes.y * 0.5 / max(-mv.z, 0.05); gl_PointSize = aD.y <= 0.0 ? 0.0 : clamp(px, 1.5, 220.0); }`,fragmentShader:`precision highp float; uniform vec3 uRedCol; uniform float uTime; varying vec4 vD; varying vec3 vWp;
${hr}
void main() { vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0; if (r > 1.0) discard; float a = vD.y; vec3 col;
  vec3 toP = vWp - cameraPosition; float dist = length(toP); float fa = scFogAmount(cameraPosition, toP / max(dist, 1e-4), dist);
  if (vD.z < 0.5) { col = uRedCol * (0.75 + 0.25 * (1.0 - r)); a *= smoothstep(1.0, 0.72, r); col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa * 0.8); }
  else if (vD.z < 1.5) { col = vec3(1.0); a *= (1.0 - r); }
  else if (vD.z < 2.5) { col = vec3(0.42); a *= (1.0 - r) * 0.5; col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa); }
  else if (vD.z < 3.5) { float star = max(0.0, 1.0 - abs(c.x) * 14.0) * (1.0 - r) + max(0.0, 1.0 - abs(c.y) * 14.0) * (1.0 - r); col = vec3(1.0, 0.95, 0.92); a *= clamp((1.0 - r) * (1.0 - r) * 1.6 + star, 0.0, 1.0); }
  else { float star = max(0.0, 1.0 - abs(c.x) * 9.0) + max(0.0, 1.0 - abs(c.y) * 9.0); col = uRedCol * 1.8; a *= clamp(pow(1.0 - r, 3.0) * 1.3 + star * (1.0 - r) * 0.7, 0.0, 1.0) * (1.0 - fa * 0.5); }
  gl_FragColor = vec4(col, a); }`}),this.mesh=new ps(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=21,t.add(this.mesh),this.geo=n}spawn(t,e,n,i,s,o=0){let a=this.head;return this.head=(this.head+1)%es,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z,this.vel[a*3]=e.x,this.vel[a*3+1]=e.y,this.vel[a*3+2]=e.z,this.dat[a*4]=i,this.dat[a*4+1]=1,this.dat[a*4+2]=n,this.life[a]=this.max[a]=s,this.grav[a]=o,a}blood(t,e,n=1){let i=new L,s=Math.round(16*n);for(let o=0;o<s;o++){let c=(Math.random()<.28?-1.6:5.5)*(.35+Math.random());i.set(e.x*c+(Math.random()-.5)*2.6,e.y*c+(Math.random()-.2)*2.6,e.z*c+(Math.random()-.5)*2.6),this.spawn(t,i,0,.04+Math.random()*.085*n,.45+Math.random()*.5,14)}for(let o=0;o<3;o++)i.set((Math.random()-.5)*.8,.5+Math.random()*.6,(Math.random()-.5)*.8),this.spawn(t,i,0,.22*n,.22,0)}impact(t,e){let n=new L;for(let i=0;i<7;i++)n.set(e.x*3+(Math.random()-.5)*4,e.y*3+Math.random()*3,e.z*3+(Math.random()-.5)*4),this.spawn(t,n,1,.035,.16+Math.random()*.2,16);for(let i=0;i<4;i++)n.set(e.x*1.2+(Math.random()-.5),e.y*1.2+Math.random()*.8,e.z*1.2+(Math.random()-.5)),this.spawn(t,n,2,.35+Math.random()*.4,.7+Math.random()*.5,-.6)}flash(t,e=1.3){this.spawn(t,new L,3,e,.07,0)}glint(t,e=9){return this.spawn(t,new L,4,e,.12,0)}motes(t,e=26){let n=new L;for(let i=0;i<e;i++){n.set((Math.random()-.5)*.7,.6+Math.random()*1.8,(Math.random()-.5)*.7);let s=new L(t.x+(Math.random()-.5)*.6,t.y+Math.random()*.4,t.z+(Math.random()-.5)*.6);this.spawn(s,n,0,.03+Math.random()*.04,1.6+Math.random()*2.2,-.8)}}update(t){let e=!1;for(let n=0;n<es;n++){if(this.life[n]<=0)continue;e=!0,this.life[n]-=t;let i=this.dat[n*4+2];if(this.life[n]<=0){this.dat[n*4+1]=0;continue}this.vel[n*3+1]-=this.grav[n]*t;let o=Math.max(0,1-(i===2?2.5:.6)*t);this.vel[n*3]*=o,this.vel[n*3+2]*=o,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let a=this.life[n]/this.max[n];this.dat[n*4+1]=i===2?a:Math.min(1,a*2.5),i===2&&(this.dat[n*4]+=t*.5)}(e||this._dirty)&&(this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("aD").needsUpdate=!0),this._dirty=e}clear(){this.life.fill(0);for(let t=0;t<es;t++)this.dat[t*4+1]=0;this._dirty=!0}},Ro=72;function sb(){let t=document.createElement("canvas");t.width=t.height=256*2;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256*2,256*2),e.fillStyle="#fff";let n=7,i=()=>(n=n*16807%2147483647,n/2147483647);for(let o=0;o<4;o++){let a=o%2*256+128,c=(o/2|0)*256+256/2;if(o===3){e.beginPath(),e.arc(a,c,26,0,7),e.fill();for(let l=0;l<9;l++){let h=i()*7,u=26+i()*30;e.beginPath(),e.arc(a+Math.cos(h)*u,c+Math.sin(h)*u,3+i()*6,0,7),e.fill()}continue}for(let l=0;l<9;l++){let h=i()*7,u=i()*34;e.beginPath(),e.ellipse(a+Math.cos(h)*u,c+Math.sin(h)*u,20+i()*34,14+i()*26,i()*3,0,7),e.fill()}for(let l=0;l<26;l++){let h=i()*7,u=40+i()*78;e.beginPath(),e.arc(a+Math.cos(h)*u,c+Math.sin(h)*u,1.5+i()*7,0,7),e.fill(),i()<.4&&(e.lineWidth=2+i()*5,e.strokeStyle="#fff",e.beginPath(),e.moveTo(a+Math.cos(h)*u*.4,c+Math.sin(h)*u*.4),e.lineTo(a+Math.cos(h)*u,c+Math.sin(h)*u),e.stroke())}}let s=new Qs(t);return s.colorSpace=kn,s.generateMipmaps=!0,s.minFilter=tn,s}var Eh=class{constructor(t){let e=new ue;this.pos=new Float32Array(Ro*12),this.uv=new Float32Array(Ro*8),this.dat=new Float32Array(Ro*16);let n=new Uint16Array(Ro*6);for(let i=0;i<Ro;i++)n.set([i*4,i*4+1,i*4+2,i*4,i*4+2,i*4+3],i*6);e.setAttribute("position",new Ft(this.pos,3).setUsage(ys)),e.setAttribute("uv",new Ft(this.uv,2).setUsage(ys)),e.setAttribute("aD",new Ft(this.dat,4).setUsage(ys)),e.setIndex(new Ft(n,1)),this.mat=new He({uniforms:{...Va(),uMap:{value:sb()}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,side:Pe,vertexShader:"attribute vec4 aD; varying vec2 vUv; varying vec4 vD; varying vec3 vWp; void main(){ vUv = uv; vD = aD; vWp = position; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }",fragmentShader:`precision highp float; uniform sampler2D uMap; uniform vec3 uRedCol; uniform float uTime; varying vec2 vUv; varying vec4 vD; varying vec3 vWp;
${hr}
void main() { float m = texture2D(uMap, vUv).r; float grow = clamp((uTime - vD.x) / max(vD.y, 0.001), 0.0, 1.0); float a = smoothstep(1.0 - grow * 0.92, 1.0 - grow * 0.92 + 0.12, m) ; if (a < 0.02) discard;
  vec3 col = vD.z > 0.5 ? vec3(0.012) : uRedCol * (0.62 + 0.25 * m); vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4); float fa = scFogAmount(cameraPosition, dir, dist);
  col = mix(col, scFogColor(dir, vWp.y), fa); gl_FragColor = vec4(col, a * vD.w); }`}),this.mesh=new fe(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,t.add(this.mesh),this.geo=e,this.next=0}add(t,e,n,i=0,s=.12,o=.92){let a=this.next;this.next=(this.next+1)%Ro;let c=new L().copy(e).normalize(),l=new L(1,0,0);Math.abs(c.x)>.8&&l.set(0,0,1);let h=new L().crossVectors(c,l).normalize(),u=new L().crossVectors(c,h),f=Math.random()*Math.PI*2,d=Math.cos(f)*n,g=Math.sin(f)*n,x=new L().copy(h).multiplyScalar(d).addScaledVector(u,g),p=new L().copy(h).multiplyScalar(-g).addScaledVector(u,d),m=new L().copy(t).addScaledVector(c,.012),_=[[-1,-1],[1,-1],[1,1],[-1,1]],M=i===1?3:Math.random()*3|0,v=M%2*.5,S=(M/2|0)*.5;_.forEach(([T,y],b)=>{let E=a*4+b;this.pos[E*3]=m.x+x.x*T+p.x*y,this.pos[E*3+1]=m.y+x.y*T+p.y*y,this.pos[E*3+2]=m.z+x.z*T+p.z*y,this.uv[E*2]=v+(T*.5+.5)*.5,this.uv[E*2+1]=S+(y*.5+.5)*.5,this.dat[E*4]=ne.uTime.value,this.dat[E*4+1]=s,this.dat[E*4+2]=i,this.dat[E*4+3]=o});for(let T of["position","uv","aD"])this.geo.getAttribute(T).needsUpdate=!0}clear(){this.pos.fill(0),this.geo.getAttribute("position").needsUpdate=!0}};function rg(r){let t=new ia(1,1,1,96,1,!0);t.translate(0,.5,0);let e=new He({uniforms:{...Va(),uR:{value:80}},transparent:!0,depthWrite:!1,side:Pe,blending:On,vertexShader:"varying vec3 vWp; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vWp = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`precision highp float; uniform float uTime; uniform vec3 uRedCol; uniform float uR; varying vec3 vWp; varying vec2 vUv;
float h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() { float ang = vUv.x * uR * 6.2832; float col = floor(ang * 2.6); float hh = h(vec2(col, 1.0));
  float fall = fract(vWp.y * 0.05 * (0.6 + hh) + uTime * (0.10 + 0.25 * hh) + hh * 7.0); float streak = smoothstep(0.0, 0.05, fall) * smoothstep(0.42, 0.05, fall) * step(0.55, hh);
  float thin = smoothstep(0.30, 0.5, abs(fract(ang * 2.6) - 0.5));
  float d = distance(vWp, cameraPosition); float near = smoothstep(70.0, 8.0, d); float low = smoothstep(80.0, 26.0, vWp.y) * smoothstep(5.0, 13.0, vWp.y);
  float a = (0.012 + streak * 0.16 * (1.0 - thin)) * low * (0.12 + 0.88 * near);
  gl_FragColor = vec4(uRedCol * a * 1.6, 1.0); }`}),n=new fe(t,e);return n.frustumCulled=!1,n.renderOrder=15,n.scale.set(80,110,80),r.add(n),n}function og(r,t,e){let n=[],i=[],s=new L;for(let l of t.links){if(l.kind!=="pad")continue;let h=26;for(let u=1;u<h;u++)t.linkPos(l,0,u/h,s),n.push(s.x,s.y+.9,s.z),i.push(u/h)}let o=new ue;o.setAttribute("position",new Ft(new Float32Array(n),3)),o.setAttribute("aU",new Ft(new Float32Array(i),1));let a=new He({uniforms:{...Va(),uRes:{value:e}},transparent:!0,depthWrite:!1,blending:On,vertexShader:"attribute float aU; uniform vec2 uRes; uniform float uTime; varying float vA; void main(){ vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; float d = -mv.z; float w = fract(aU * 3.0 - uTime * 0.9); vA = (0.25 + 0.75 * smoothstep(0.75, 1.0, w)) * smoothstep(110.0, 25.0, d); gl_PointSize = clamp(0.11 * projectionMatrix[1][1] * uRes.y * 0.5 / max(d, 0.1), 1.5, 9.0); }",fragmentShader:"precision highp float; varying float vA; void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(vec3(0.85) * vA * (1.0 - r * r), 1.0); }"}),c=new ps(o,a);return c.frustumCulled=!1,c.renderOrder=14,r.add(c),c}function ag(r,t=900){let e=new Float32Array(t*6),n=new Float32Array(t*2);for(let a=0;a<t;a++){let c=Math.random()*46,l=Math.random()*34,h=Math.random()*46;e.set([c,l,h,c,l,h],a*6),n[a*2]=0,n[a*2+1]=1}let i=new ue;i.setAttribute("position",new Ft(e,3)),i.setAttribute("aE",new Ft(n,1));let s=new He({uniforms:{uTime:ne.uTime,uAmt:{value:1}},transparent:!0,depthWrite:!1,vertexShader:`attribute float aE; uniform float uTime; varying float vA;
void main() { vec3 box = vec3(46.0, 34.0, 46.0); float sp = 26.0 + fract(position.x * 7.31) * 9.0; vec3 p = position; p.y -= uTime * sp; p.x += uTime * 2.2;
  p = mod(p - cameraPosition + box * 0.5, box) - box * 0.5 + cameraPosition; p.y += aE * (0.55 + fract(position.z * 3.7) * 0.5); p.x -= aE * 0.045;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vA = smoothstep(23.0, 6.0, -mv.z) * smoothstep(0.3, 2.5, -mv.z); }`,fragmentShader:"precision highp float; uniform float uAmt; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62), vA * 0.20 * uAmt); }"}),o=new Js(i,s);return o.frustumCulled=!1,o.renderOrder=18,r.add(o),o}var Cs=r=>r*r*(3-2*r),In=(r,t,e)=>Math.min(e,Math.max(t,r)),Ps=(r,t,e)=>r+(t-r)*e,Wn=(r,t,e)=>In((r-t)/(e-t),0,1),Ah=class{constructor(t,e){this.scene=t.fpScene,this.cam=t.fpCamera,this.hemi=new nr(12106946,3816512,.9),this.key=new Ki(16777215,1.7),this.key.position.set(-1.2,2.2,1),this.scene.add(this.hemi,this.key),this.root=new Te,this.scene.add(this.root);let n=(l,h)=>{let u=null;l.traverse(d=>{d.name===h&&(u=d)});let f=new Te;return u.parent.add(f),f.add(u),f};this.rifle=e.weapons.rifle_fp,this.pistol=e.weapons.pistol,this.root.add(this.rifle,this.pistol),this.pistol.rotation.z=Math.PI;let i=n(this.rifle,"rifle_bolt");this.boltSpin=new Te,this.boltSlide=new Te,i.parent.add(this.boltSlide),this.boltSlide.add(this.boltSpin),this.boltSpin.add(i),this.boltSpin.position.set(0,.046,0),i.position.set(0,-.046,0),this.mag=n(this.rifle,"rifle_mag"),this.slide=n(this.pistol,"pistol_slide");let s=document.createElement("canvas");s.width=s.height=64;let o=s.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.25,"rgba(255,255,255,0.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,64,64);let c=new Qs(s);this.flashMat=new ze({map:c,transparent:!0,blending:On,depthTest:!1,depthWrite:!1,opacity:0,fog:!1}),this.flash=new Te;for(let[l,h,u]of[[.34,.11,0],[.11,.34,0],[.2,.2,.785]]){let f=new fe(new Vi(l,h),this.flashMat);f.rotation.z=u,this.flash.add(f)}this.flash.renderOrder=50,this.root.add(this.flash),this.cur="rifle",this.swayX=0,this.swayY=0,this.kick=0,this.flashT=0,this.vis={rifle:1,pistol:0}}shot(){this.kick=1,this.flashT=.055}update(t,e){this.kick=Math.max(0,this.kick-t*(e.weapon==="rifle"?5.5:11)),this.flashT-=t,this.swayX=Ps(this.swayX,In(-e.lookX*.004,-.03,.03),1-Math.exp(-t*9)),this.swayY=Ps(this.swayY,In(e.lookY*.004,-.03,.03),1-Math.exp(-t*9));let n=e.weapon==="rifle";this.rifle.visible=n&&!e.hidden,this.pistol.visible=!n&&!e.hidden;let i=Cs(In(e.ads,0,1)),s=this.kick*this.kick,o=n?[.112,-.134,-.285]:[.105,-.118,-.33],a=n?[0,-.1012,-.105]:[0,-.088,-.27],c=Ps(o[0],a[0],i),l=Ps(o[1],a[1],i),h=Ps(o[2],a[2],i),u=Ps(0,0,i),f=Ps(n?.045:.03,0,i),d=Ps(n?-.03:0,0,i),g=e.bob*(1-i*.85);c+=Math.sin(e.phase)*.006*g+this.swayX*(1-i*.6),l+=-Math.abs(Math.cos(e.phase))*.008*g+this.swayY*(1-i*.6)-e.land*.03,d+=Math.sin(e.phase)*.012*g+this.swayX*1.2;let x=Cs(In(e.lower,0,1));l-=x*.12,c+=x*.02,u-=x*.42,f+=x*.55,h+=s*(n?.075:.03),u+=s*(n?.13:.2),l+=s*.012;let p=e.swap;if(p>0){let T=Math.sin(In(p,0,1)*Math.PI);l-=T*.22,u-=T*.6}let m=0,_=0;if(n&&e.bolt>=0){let T=e.bolt,y=Wn(T,.2,.32)-Wn(T,.66,.78),b=Wn(T,.32,.46)-Wn(T,.5,.66);m=Cs(In(y,0,1))*1.05,_=Cs(In(b,0,1))*.062;let E=Math.sin(In(Wn(T,.12,.85),0,1)*Math.PI)*(1-i*.5);d+=E*.16,f+=E*.06,l-=E*.012,c+=E*.012}let M=0,v=0;if(e.reload>=0){let T=e.reload,y=Math.sin(In(Wn(T,0,.9),0,1)*Math.PI);d+=y*(n?.38:.5),u+=y*.2,l-=y*.035;let b=Wn(T,.12,.3)-Wn(T,.55,.74);if(M=-Cs(In(b,0,1))*.16,v=Cs(In(b,0,1))*.02,n&&T>.78){let E=Wn(T,.78,1);m=Cs(In(Wn(E,.05,.3)-Wn(E,.7,.95),0,1))*1.05,_=Cs(In(Wn(E,.3,.5)-Wn(E,.5,.7),0,1))*.062}}this.root.position.set(c,l,h),this.root.rotation.set(u,f,d,"YXZ"),n?(this.boltSpin.rotation.z=-m,this.boltSlide.position.z=_,this.mag.position.set(0,M,v)):this.slide.position.z=s*.03;let S=this.flashT>0?1:0;this.flashMat.opacity=S*.95,this.flash.visible=S>0&&!e.hidden,S&&(this.flash.position.set(0,n?.052:.06,n?-.8:-.24),this.flash.rotation.z=Math.random()*3,this.flash.scale.setScalar((n?1.3:.8)*(.8+Math.random()*.5))),this.hemi.intensity=.9+S*2.5}};var Ln={rifle:{key:"rifle",name:"BALLISTA .338",mag:5,reserve:20,cycle:1.3,reload:2.6,dmg:[160,74,44],hip:.05,zooms:[4,8],swap:.38},pistol:{key:"pistol",name:"SIDEARM 9MM",mag:12,reserve:36,cycle:.16,reload:1.45,dmg:[60,27,17],hip:.011,zooms:[1.35],swap:.28,falloff:[22,75]}};function rb(r,t,e,n,i,s,o,a,c,l,h,u,f){let d=l-o,g=h-a,x=u-c,p=r-o,m=t-a,_=e-c,M=d*d+g*g+x*x;if(M<1e-8){let C=n*p+i*m+s*_,D=p*p+m*m+_*_-f*f,I=C*C-D;return I<0?-1:-C-Math.sqrt(I)}let v=d*n+g*i+x*s,S=d*p+g*m+x*_,T=n*p+i*m+s*_,y=p*p+m*m+_*_,b=M-v*v,E=M*T-S*v,R=M*y-S*S-f*f*M,P=E*E-b*R;if(P>=0&&b>1e-9){let C=(-E-Math.sqrt(P))/b,D=S+C*v;if(D>0&&D<M)return C;let I=D<=0?p:r-l,U=D<=0?m:t-h,k=D<=0?_:e-u;if(E=n*I+i*U+s*k,R=I*I+U*U+k*k-f*f,P=E*E-R,P>0)return-E-Math.sqrt(P)}return-1}var ui=[];function vd(r,t,e,n,i){let s=null;for(let o of r){if(o===i||!o.alive)continue;let a=o.pos.x-t.x,c=o.pos.y+1-t.y,l=o.pos.z-t.z,h=a*e.x+c*e.y+l*e.z;if(!(h<-2||h>n+2||a*a+c*c+l*l-h*h>9)){o.hitShapes(ui);for(let f=0;f<ui.length;f+=8){let d=rb(t.x,t.y,t.z,e.x,e.y,e.z,ui[f],ui[f+1],ui[f+2],ui[f+3],ui[f+4],ui[f+5],ui[f+6]);d>0&&d<n&&(!s||d<s.t||Math.abs(d-s.t)<.25&&ui[f+7]<s.zone)&&(s={actor:o,t:Math.min(d,s?s.t:d),zone:ui[f+7]})}}}return s}var fi=new L,Ri=new L,Rh=new L,_r=new L;function Ch(r,t,e,n,i,s){let{arena:o,fx:a,audio:c}=r,l=o.raycast(e,n,420),h=l?l.distance:420,u=vd(r.actors,e,n,h,t),f=u?u.t:h;fi.copy(e).addScaledVector(n,f),a.threads.shot(i,fi),t.shots++,t.lastShot=r.time,t.lastShotPos.copy(e);let d=r.player,g=t===d?0:e.distanceTo(r.listenerPos),x=t===d?0:r.panOf(e);if(c.shot(g,x,s.key==="pistol"),t!==d&&(a.particles.flash(i,1.6),d.alive)){Rh.copy(r.listenerPos).sub(e);let m=Math.max(0,Math.min(f,Rh.dot(n)));_r.copy(e).addScaledVector(n,m),_r.distanceTo(r.listenerPos)<2.4&&m>4&&(!u||u.actor!==d)&&(c.whiz(r.panOf(_r)),r.hud.threat(e,.6),d.suppress=Math.min(1,(d.suppress||0)+.5))}for(let m of r.bots){if(!m.alive||m===t||u&&u.actor===m)continue;let _=m.eye(Rh);_r.copy(_).sub(e);let M=_r.dot(n);M<3||M>f+1||_r.lengthSq()-M*M<2.2&&m.nearMiss(t)}let p={hit:null,zone:-1,point:fi.clone(),dist:f};if(u){let m=u.actor,_=s.dmg[u.zone];if(s.falloff){let S=Math.min(1,Math.max(0,(f-s.falloff[0])/(s.falloff[1]-s.falloff[0])));_*=1-.55*S}a.particles.blood(fi,n,u.zone===0?1.7:1);let M=o.raycast(fi,n,4.5);M&&(Ri.copy(M.face.normal),Ri.dot(n)>0&&Ri.negate(),a.decals.add(M.point,Ri,.35+Math.random()*.5+(u.zone===0?.35:0),0,.25));let v=o.raycast(Rh.copy(fi),_r.set(0,-1,0),3);v&&a.decals.add(v.point,Ri.set(0,1,0),.22+Math.random()*.3,0,.6),t.hits++,u.zone===0&&t.heads++,p.hit=m,p.zone=u.zone,r.damage(m,_,t,{zone:u.zone,dir:n,point:fi,wpn:s})}else l&&(Ri.copy(l.face.normal),Ri.dot(n)>0&&Ri.negate(),a.particles.impact(fi,Ri),a.decals.add(fi,Ri,.07+Math.random()*.05,1,.01,.85),(t!==d||f<60)&&c.impact(fi.distanceTo(r.listenerPos),r.panOf(fi)));return r.onShot(t,e,p),p}var xn=L,Md=(r,t,e)=>Math.min(e,Math.max(t,r)),cn=(r,t,e)=>r+(t-r)*e,ns=.32,cg=1.74,Sd=1.14,bd=1.6,Td=1,Ph=74,wd=.56,An=new xn,Xn=new xn,Ci=new xn,Ih=new xn,Ga=new xn,Po=new oe,Pi=new on,lg=new xn,Wa=new xn,ob=new xn(0,1,0),Lh=class{constructor(t){this.g=t,this.isPlayer=!0,this.name="YOU",this.id=0,this.pos=new xn,this.vel=new xn,this.yaw=0,this.pitch=0,this.lastShotPos=new xn,this.eyeV=new xn,this.chestV=new xn,this.fwdV=new xn(0,0,-1),this.reset()}reset(){this.hp=100,this.alive=!0,this.kills=0,this.shots=0,this.hits=0,this.heads=0,this.lastShot=-99,this.revealedUntil=-1,this.deathTime=0,this.place=0,this.crouch=!1,this.crouchK=0,this.grounded=!1,this.mode="walk",this.link=null,this.linkT=0,this.linkDir=0,this.mantle=null,this.roof=-1,this.speed=0,this.w={rifle:{mag:Ln.rifle.mag,reserve:Ln.rifle.reserve,cool:0},pistol:{mag:Ln.pistol.mag,reserve:Ln.pistol.reserve,cool:0}},this.cur="rifle",this.cool=0,this.reloadT=-1,this.boltT=-1,this.swapT=0,this.swapTo=null,this.ads=0,this.scoped=!1,this.zoomIdx=0,this.focus=1,this.gasp=0,this.holding=!1,this.kick=0,this.kickYaw=0,this.swayX=0,this.swayY=0,this.fov=Ph,this.coyote=0,this.jumpBuf=0,this.landDip=0,this.walkPhase=0,this.stepAcc=0,this.vel.set(0,0,0),this.suppress=0,this.fallStart=0,this.airTime=0,this.padLock=0,this.aimSlow=1,this.prompt=null,this.deadCam=0,this.lean=0,this.stepLift=0,this.hurtT=0,this.locked=!0}spawn(t,e){this.pos.copy(t),this.yaw=e,this.pitch=0,this.vel.set(0,0,0)}get weapon(){return Ln[this.cur]}eye(t=this.eyeV){return t.set(this.pos.x,this.pos.y+cn(bd,Td,this.crouchK),this.pos.z)}chest(t=this.chestV){return t.set(this.pos.x,this.pos.y+cn(1.3,.78,this.crouchK),this.pos.z)}hitShapes(t){let e=this.pos,n=cn(bd,Td,this.crouchK);return t.length=0,t.push(e.x,e.y+n+.02,e.z,e.x,e.y+n+.02,e.z,.125,0,e.x,e.y+n*.5,e.z,e.x,e.y+n*.84,e.z,.2,1,e.x,e.y+.14,e.z,e.x,e.y+n*.48,e.z,.15,2),t}get moving(){return this.speed>.6}_collide(t,e){let n=this.g.arena.bvh;Pi.start.set(t.x,t.y+ns,t.z),Pi.end.set(t.x,t.y+e-ns,t.z),Po.makeEmpty(),Po.expandByPoint(Pi.start),Po.expandByPoint(Pi.end),Po.min.addScalar(-ns),Po.max.addScalar(ns);let i={intersectsBounds:o=>o.intersectsBox(Po),intersectsTriangle:o=>{let a=o.closestPointToSegment(Pi,lg,Wa);if(a<ns){let c=ns-a;a>1e-5?Wa.sub(lg).multiplyScalar(1/a):o.getNormal(Wa),Pi.start.addScaledVector(Wa,c),Pi.end.addScaledVector(Wa,c)}}};n.shapecast(i);let s=this.g.arena.fenceBvh;s&&this.mode==="walk"&&s.shapecast(i),t.set(Pi.start.x,Pi.start.y-ns,Pi.start.z)}_stepUp(t,e,n,i,s){let o=this.g.arena,a=this.pos,c=o.raycast(An.set(a.x+n*(ns+.14),a.y+wd+.12,a.z+i*(ns+.14)),Xn.set(0,-1,0),wd+.1);if(!c||c.face.normal.y<.7)return!1;let l=c.point.y-a.y;return l<.03||l>wd||o.raycast(An.set(a.x,a.y+e-.1,a.z),Xn.set(0,1,0),l+.2)||(Ga.set(a.x+n*s,a.y+l+.012,a.z+i*s),this._collide(Ga,e),Ga.y<a.y+l-.08)?!1:(this.stepLift=Math.min(.62,this.stepLift+(Ga.y-a.y)),t.copy(Ga),!0)}_groundProbe(){let t=this.g.arena.raycast(An.set(this.pos.x,this.pos.y+.3,this.pos.z),Xn.set(0,-1,0),.46);return t&&t.face.normal.y>.5?t:null}_tryMantle(t){let e=this.g.arena,n=-Math.sin(this.yaw),i=-Math.cos(this.yaw),s=this.pos,o=null;for(let f of this.grounded?[1.25,.75,.35]:[1.25,.75,.35,.1]){let d=e.raycast(An.set(s.x,s.y+f,s.z),Xn.set(n,0,i),.78);if(d&&Math.abs(d.face.normal.y)<.55){o=d;break}}if(!o)return!1;let a=o.point.x+n*.3,c=o.point.z+i*.3,l=e.raycast(An.set(a,s.y+2.6,c),Xn.set(0,-1,0),2.3);if(!l||l.face.normal.y<.7)return!1;let h=l.point.y-s.y;if(h<(this.grounded?.42:.1)||h>2.4||!t&&h<.9&&this.grounded||!e.raycast(An.set(o.point.x+n*1.15,l.point.y+.3,o.point.z+i*1.15),Xn.set(0,-1,0),2.3)||e.raycast(An.set(a,l.point.y+.15,c),Xn.set(0,1,0),1.05)||e.raycast(An.set(s.x,l.point.y+.35,s.z),Xn.set(n,0,i),.95))return!1;let u=!e.raycast(An.set(a,l.point.y+.15,c),Xn.set(0,1,0),1.7);return this.mantle={from:s.clone(),to:new xn(a+n*.12,l.point.y+.03,c+i*.12),t:0,dur:(h<.5?.12:.26)+.15*h,crouch:!u},this.mode="mantle",this.vel.set(0,0,0),this.g.audio.jump(),!0}_walk(t,e){let n=this.g,i=n.arena,s=-Math.sin(this.yaw),o=-Math.cos(this.yaw),a=Math.cos(this.yaw),c=-Math.sin(this.yaw),l=e.moveX,h=e.moveY,u=(e.held("sprint")||e.sprintStick)&&h>.5&&!this.crouch&&this.ads<.2&&this.reloadT<0;this.sprinting=u&&this.grounded;let f=this.crouch?2.35:(u?7.3:4.5)*(1-.42*this.ads),d=(s*h+a*l)*f,g=(o*h+c*l)*f,x=Math.hypot(d,g);if(this.grounded){let y=1-Math.exp(-t*13);this.vel.x=cn(this.vel.x,d,y),this.vel.z=cn(this.vel.z,g,y)}else this.vel.x+=(d-this.vel.x)*Math.min(1,t*1.7),this.vel.z+=(g-this.vel.z)*Math.min(1,t*1.7);if(this.vel.y-=za*t,this.vel.y<-55&&(this.vel.y=-55),e.pressed("jump")&&(this.jumpBuf=.13),this.jumpBuf-=t,this.coyote=this.grounded?.11:this.coyote-t,this.jumpBuf>0&&this.coyote>0){if(h>.2&&this._tryMantle(!0)||(this.vel.y=7.3,this.grounded=!1,this.coyote=0,this.jumpBuf=0,this.crouch&&(this.crouch=!1,n.hud.syncCrouch(!1)),n.audio.jump()),this.mode!=="walk")return}else if(!this.grounded&&h>.3&&this.vel.y<4.5&&this._tryMantle(e.held("jump")||this.jumpBuf>0))return;let p=cn(cg,Sd,this.crouchK),m=5,_=t/m,M=this.grounded,v=this.vel.y,S=!1;for(let y=0;y<m;y++){Ci.copy(this.pos).addScaledVector(this.vel,_),Ih.copy(Ci),this._collide(Ci,p);let b=Ci.x-Ih.x,E=Ci.y-Ih.y,R=Ci.z-Ih.z,P=Math.hypot(b,E,R);if(P>1e-6){let C=b/P,D=E/P,I=R/P;if(D>.55&&this.vel.y<=.5)S=!0,this.vel.y=Math.max(this.vel.y,0);else{let U=this.vel.x*C+this.vel.y*D+this.vel.z*I;U<0&&(this.vel.x-=C*U,this.vel.y-=D*U,this.vel.z-=I*U)}}if((M||S)&&this.vel.y<=.5&&x>.5){let C=x*_;((Ci.x-this.pos.x)*d+(Ci.z-this.pos.z)*g)/x<C*.7&&this._stepUp(Ci,p,d/x,g/x,C)&&(S=!0,this.vel.x=d,this.vel.z=g)}this.pos.copy(Ci)}if(!S&&this.vel.y<=.5&&this._groundProbe()&&(S=!0),S&&!M){let y=-v;y>14.5&&n.damage(this,(y-14.5)*8,null,{cause:"fall"}),y>4&&(this.landDip=Math.min(1,y/14),n.audio.land(y/16))}if(S&&this.vel.y<0&&(this.vel.y=0),S&&M&&!this.jumpBuf>0&&this.vel.y<=0&&(this.vel.y=-2.2),this.grounded=S,this.airTime=S?0:this.airTime+t,this.speed=Math.hypot(this.vel.x,this.vel.z),S&&(this.walkPhase+=t*this.speed*1.75,this.stepAcc+=t*this.speed,this.stepAcc>(this.crouch?1.5:2.1)&&(this.stepAcc=0,n.audio.step(this.crouch)),this.roof=i.roofAt(this.pos.x,this.pos.z,this.pos.y)),this.pos.y<9.5){if(n.damage(this,999,null,{cause:"drop"}),this.alive&&n.opts.god){let y=this.spawnRoof||i.roofs[0];this.pos.set(y.spawnPt[0],y.spawnPt[1]+.1,y.spawnPt[2]),this.vel.set(0,0,0)}return}this.prompt=null,this.padLock-=t;let T=1e9;if(S&&this.roof>=0)for(let y of i.roofs[this.roof].links){let b=y.link,E=y.dir?b.p1:b.p0,R=Math.hypot(E.x-this.pos.x,E.z-this.pos.z);if(b.kind==="pad"){if(R<1&&this.padLock<=0&&Math.abs(E.y-this.pos.y)<.8){this._ride(b,0),n.audio.pad(),n.hud.banner(`LAUNCH \xB7 ${i.roofs[y.to].name}`,1.4,!0);return}}else if((b.kind==="zip"||b.kind==="ladder")&&R<(b.kind==="zip"?2.1:1.7)&&Math.abs(E.y-this.pos.y)<1.2){let P=y.dir?b.p0:b.p1,C=Math.hypot(P.x-E.x,P.z-E.z)||1,D=R-.9*((P.x-E.x)*s+(P.z-E.z)*o)/C;D<T&&(T=D,this.prompt={link:b,dir:y.dir,text:`${i.linkLabel(b)} \xB7 ${i.roofs[y.to].name}`})}else if((b.kind==="jump"||b.kind==="step")&&T>1e8&&!this.prompt&&R<(b.kind==="jump"?3.4:2)){let P=y.dir?b.p0:b.p1;(P.x-this.pos.x)*s+(P.z-this.pos.z)*o>0&&(this.prompt={link:b,dir:y.dir,passive:!0,text:b.kind==="jump"?"SPRINT UP THE RAMP \xB7 JUMP AT THE RED LIP":(P.y>E.y?"JUMP TO CLIMB":"DROP DOWN")+` \xB7 ${i.roofs[y.to].name}`})}}this.prompt&&!this.prompt.passive&&e.pressed("use")&&(this._ride(this.prompt.link,this.prompt.dir),this.prompt=null)}_ride(t,e){this.mode="link",this.link=t,this.linkDir=e,this.linkT=0,this.vel.set(0,0,0),this.grounded=!1,this.crouch=!1,this.g.hud.syncCrouch(!1),this.linkFrom=this.pos.clone(),this.g.stats.traversals=(this.g.stats.traversals||0)+1}_rideStep(t,e){let n=this.g.arena,i=this.link,s=i.time*(i.kind==="ladder"?.85:1),o=An.copy(this.pos);this.linkT+=t/s;let a=Math.min(1,this.linkT);if(n.linkPos(i,this.linkDir,a,Xn),a<.08&&Xn.lerpVectors(this.linkFrom,Xn,a/.08),this.pos.copy(Xn),t>0&&this.vel.copy(this.pos).sub(o).multiplyScalar(1/t),this.speed=0,this.g.audio.setZip(i.kind==="zip"&&a>.1&&a<.9?1:0),i.kind==="ladder"&&(this.stepAcc+=t,this.stepAcc>.28&&(this.stepAcc=0,this.g.audio.ladder())),i.kind==="zip"&&e.pressed("jump")&&a>.14&&a<.86){this.mode="walk",this.link=null,this.vel.multiplyScalar(.85),this.g.audio.setZip(0);return}a>=1&&(this.mode="walk",this.link=null,this.grounded=!0,this.vel.set(0,-2,0),this.padLock=.8,this.g.audio.setZip(0),(i.kind==="pad"||i.kind==="zip")&&(this.landDip=.7,this.g.audio.land(.6)))}_mantleStep(t){let e=this.mantle;e.t+=t/e.dur;let n=Math.min(1,e.t),i=n*n*(3-2*n),s=Math.min(1,i*1.7),o=Math.max(0,(i-.35)/.65);this.pos.set(cn(e.from.x,e.to.x,o),cn(e.from.y,e.to.y,s),cn(e.from.z,e.to.z,o)),this.landDip=Math.sin(n*Math.PI)*.6,n>=1&&(this.mode="walk",this.mantle=null,this.grounded=!0,this.vel.set(0,-1,0),e.crouch&&(this.crouch=!0,this.g.hud.syncCrouch(!0)))}_weapons(t,e){let n=this.g,i=this.weapon,s=this.w[this.cur],o=this.mode==="link"&&this.link.kind!=="pad"||this.mode==="mantle";this.w.rifle.cool=Math.max(0,this.w.rifle.cool-t),this.w.pistol.cool=Math.max(0,this.w.pistol.cool-t),this.cool=s.cool;let a=e.pressed("swap")?this.cur==="rifle"?"pistol":"rifle":e.pressed("w1")?"rifle":e.pressed("w2")?"pistol":null;a&&a!==this.cur&&!this.swapTo&&(this.swapTo=a,this.swapT=0,this.reloadT=-1,this.boltT=-1),this.swapTo&&(this.swapT+=t/Ln[this.swapTo].swap,this.swapT>=.5&&this.cur!==this.swapTo&&(this.cur=this.swapTo,this.zoomIdx=0,n.hud.weapon(this),this.cur==="rifle"&&this.w.rifle.cool>.15&&this.w.rifle.mag>0&&(this.boltT=1-this.w.rifle.cool/Ln.rifle.cycle)),this.swapT>=1&&(this.swapTo=null,this.swapT=0));let c=!!this.swapTo||o,l=e.held("ads")&&!c&&this.reloadT<0&&!this.sprinting;if(this.ads=Md(this.ads+(l?t/.16:-t/.12),0,1),this.scoped=this.cur==="rifle"&&this.ads>=.98,e.wheel||e.pressed("zoom")){let h=this.weapon.zooms.length;this.zoomIdx=(this.zoomIdx+(e.wheel<0?1:e.wheel>0?h-1:1))%h}if(this.holding=this.scoped&&e.held("sprint")&&this.focus>0&&this.gasp<=0,this.holding?(this.focus=Math.max(0,this.focus-t/4.2),this.focus===0&&(this.gasp=2.2)):this.focus=Math.min(1,this.focus+t/5.5),this.gasp=Math.max(0,this.gasp-t),this.boltT>=0&&(this.boltT+=t/i.cycle,this.boltT>=1&&(this.boltT=-1)),this.reloadT>=0&&(this.reloadT+=t/i.reload,this.reloadT>=1)){let h=i.mag-s.mag,u=Math.min(h,s.reserve);s.mag+=u,s.reserve-=u,this.reloadT=-1,n.hud.weapon(this)}e.pressed("reload")&&this.reloadT<0&&!c&&s.mag<i.mag&&s.reserve>0&&this._startReload(),e.pressed("fire")&&!c&&n.weaponsFree&&(this.reloadT>=0||s.cool>0||(s.mag<=0?s.reserve>0?this._startReload():n.audio.dry():this._fire()))}_startReload(){this.reloadT=0,this.boltT=-1,this.g.audio.reload(this.weapon.reload)}_fire(){let t=this.g,e=this.weapon,n=this.w[this.cur],i=t.gfx.camera;n.mag--,n.cool=e.cycle,this.cool=e.cycle;let s=i.getWorldDirection(new xn),o=e.hip*(1-this.ads)*(1+this.speed*.25)+(this.cur==="rifle"&&!this.scoped?.004:0)+(this.grounded?0:.03);if(o>0){let h=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*o;An.set(Math.cos(h)*u,Math.sin(h)*u,0).applyQuaternion(i.quaternion),s.add(An).normalize()}let a=i.position.clone(),c=a.clone().addScaledVector(s,this.scoped?1.2:.75);An.set(this.scoped?0:.1,this.scoped?-.06:-.09,0).applyQuaternion(i.quaternion),c.add(An);let l=Ch(t,this,a,s,c,e);this.kick+=this.cur==="rifle"?.046:.016,this.kickYaw+=(Math.random()-.5)*(this.cur==="rifle"?.02:.01),t.fp.shot(),t.gfx.post.uKick.value=this.cur==="rifle"?1:.4,t.hud.weapon(this),this.cur==="rifle"&&n.mag>0&&(this.boltT=0,t.audio.bolt(.26)),l.hit&&(t.hud.hitMarker(!l.hit.alive,l.zone===0),t.audio.hit(l.zone===0))}update(t,e){let n=this.g,i=n.gfx.camera;if(!this.alive){this.deadCam+=t;return}let s=Math.tan(Ji.degToRad(this.fov)/2)/Math.tan(Ji.degToRad(Ph)/2),o=.0022*e.sens*s*this.aimSlow;if(this.yaw-=e.lookX*o,this.pitch=Md(this.pitch-e.lookY*o,-1.5,1.5),e.pressed("crouch")&&this.mode==="walk"&&(e.touch?this.crouch=e.held("crouch"):this.crouch=!this.crouch,!this.crouch&&this.g.arena.raycast(An.set(this.pos.x,this.pos.y+Sd,this.pos.z),ob,cg-Sd+.05)&&(this.crouch=!0),n.hud.syncCrouch(this.crouch)),this.crouchK=Md(this.crouchK+(this.crouch?t/.16:-t/.16),0,1),this.locked?(this.vel.set(0,0,0),this.speed=0):this.mode==="walk"?this._walk(t,e):this.mode==="link"?this._rideStep(t,e):this.mode==="mantle"&&this._mantleStep(t),!this.alive)return;this._weapons(t,e);let a=this.weapon,c=a.zooms[Math.min(this.zoomIdx,a.zooms.length-1)]*(this.holding?1.05:1),l=Ji.radToDeg(2*Math.atan(Math.tan(Ji.degToRad(Ph)/2)/c)),h=this.ads*this.ads*(3-2*this.ads),u=cn(Ph+(this.sprinting?5:0),l,this.cur==="rifle"?this.scoped?1:h*.35:h);this.fov=cn(this.fov,u,1-Math.exp(-t*(this.scoped?30:12))),Math.abs(i.fov-this.fov)>.01&&(i.fov=this.fov,i.updateProjectionMatrix());let f=n.time,d=(this.crouch?.0021:.0042)*(1+this.speed*.6)*(1+this.suppress*1.5)*(this.gasp>0?2.2:1)*(this.holding?.12:1)*(this.hp<35?1.35:1)*this.ads;this.cur==="pistol"&&(d*=.4),this.suppress=Math.max(0,this.suppress-t*.5),this.swayX=(Math.sin(f*.83)*.6+Math.sin(f*2.17+1.3)*.4)*d,this.swayY=(Math.cos(f*1.07)*.6+Math.sin(f*1.71+.4)*.4)*d,this.kick=cn(this.kick,0,1-Math.exp(-t*6)),this.kickYaw=cn(this.kickYaw,0,1-Math.exp(-t*6)),this.landDip=cn(this.landDip,0,1-Math.exp(-t*9)),this.stepLift=cn(this.stepLift,0,1-Math.exp(-t*13)),this.hurtT=Math.max(0,this.hurtT-t);let g=cn(bd,Td,this.crouchK),x=this.grounded&&this.mode==="walk"?Math.min(1,this.speed/5)*(1-this.ads*.8):0;this.lean=cn(this.lean,this.mode==="walk"?-e.moveX*.018*Math.min(1,this.speed/4):0,1-Math.exp(-t*8)),i.position.set(this.pos.x,this.pos.y+g+Math.sin(this.walkPhase*2)*.022*x-this.landDip*.16-this.stepLift,this.pos.z),i.rotation.set(this.pitch+this.kick+this.swayY+Math.sin(this.hurtT*40)*this.hurtT*.02,this.yaw+this.kickYaw+this.swayX,this.lean+Math.sin(this.walkPhase)*.004*x,"YXZ"),this.fwdV.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}};var sn=L,Xa=(r,t,e)=>Math.min(e,Math.max(t,r)),Io=(r,t,e)=>r+(t-r)*e,Ed=Math.PI*2,Lo=r=>(r=(r+Math.PI)%Ed,r<0&&(r+=Ed),r-Math.PI),te=new sn,is=new sn,ab=new sn,cb=new sn,hg=()=>{let r=0,t=0;for(;r===0;)r=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(Ed*t)},ug=["MAGPIE","LANTERN","TYPHOON","JADE","KOWLOON","MONSOON","EGRET","MAHJONG","HARBOUR","TRAM","KITE","NEON","ORCHID","DRAGONFLY"],Nh=null;function lb(){return Nh||(Nh=new ze({color:vs.clone().multiplyScalar(1.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1,blending:On}),Nh)}var Dh=class{constructor(t,e,n,i,s){this.g=t,this.id=e,this.name=n,this.isPlayer=!1,this.pos=new sn,this.vel=new sn,this.lastShotPos=new sn,this.eyeV=new sn,this.chestV=new sn,this.lookAt=new sn,this.muzzleW=new sn,this.rig=i.instantiate(),t.gfx.scene.add(this.rig.root),this.gun=s.clone(),this.gun.scale.setScalar(1.2),this.rig.weapon.add(this.gun),this.ghostMat=lb().clone(),this.ghost=new Ks(this.rig.mesh.geometry,this.ghostMat),this.ghost.bind(this.rig.mesh.skeleton,this.rig.mesh.bindMatrix),this.ghost.frustumCulled=!1,this.ghost.renderOrder=30,this.ghost.visible=!1,this.rig.mesh.parent.add(this.ghost),this.skill={react:.7+Math.random()*.6,turn:2.6+Math.random()*1.4,sigma:.0052+Math.random()*.0044,aggr:.2+Math.random()*.75,devout:Math.random()<.55,headBias:.06+Math.random()*.14},this.mem=new Map,this.shapes=[],this.reset()}reset(){this.hp=100,this.alive=!0,this.kills=0,this.shots=0,this.hits=0,this.heads=0,this.lastShot=-99,this.revealedUntil=-1,this.deathTime=0,this.place=0,this.yaw=0,this.aimYaw=0,this.aimPitch=0,this.crouch=!1,this.crouchK=0,this.speed=0,this.roof=-1,this.path=[],this.plan=[],this.link=null,this.state="scan",this.target=null,this.aimPt=0,this.settle=0,this.cool=.5+Math.random(),this.mag=Ln.rifle.mag,this.reloadT=0,this.shotsHere=0,this.thinkT=Math.random()*.2,this.scanT=0,this.stanceT=1+Math.random()*2,this.roamT=12+Math.random()*20,this.zoneDelay=Math.random()*9,this.hideUntil=-1,this.threat=null,this.threatT=-99,this.firstShotAt=new Map,this.moveLocal=new sn(0,0,1),this.lostT=0,this.stuckT=0,this.aimHold=0,this.glintT=0,this.fleeing=!1,this.duck=!1,this.calmUntil=0,this.fall=null,this.vel.set(0,0,0),this.mem.clear(),this.rig.deadT=0,this.rig.modeK.dead=0,this.rig.root.visible=!0,this.ghost.visible=!1,this.suppress=0}spawn(t,e,n){this.pos.copy(t),this.yaw=this.aimYaw=e,this.roof=n,this.lookAt.set(0,t.y,0),this._sync(0)}get moving(){return this.speed>.6}eye(t=this.eyeV){return t.set(this.pos.x-Math.sin(this.aimYaw)*.12,this.pos.y+Io(1.58,1,this.crouchK),this.pos.z-Math.cos(this.aimYaw)*.12)}chest(t=this.chestV){return t.set(this.pos.x,this.pos.y+Io(1.3,.78,this.crouchK),this.pos.z)}hitShapes(t){return this.rig.hitShapes(t)}get roofObj(){return this.g.arena.roofs[this.roof]}_perceive(t){let e=this.g,n=e.arena,i=this.eye(),s=-Math.sin(this.aimYaw)*Math.cos(this.aimPitch),o=Math.sin(this.aimPitch),a=-Math.cos(this.aimYaw)*Math.cos(this.aimPitch),c=null,l=-1e9;for(let h of e.actors){if(h===this||!h.alive)continue;let u=this.mem.get(h);u||(u={aw:0,seen:-99,pos:new sn,vis:!1},this.mem.set(h,u));let f=h.chest(te),d=f.x-i.x,g=f.y-i.y,x=f.z-i.z,p=Math.hypot(d,g,x);u.d=p;let m=!this.link||this.link.link.kind==="pad",_=!1;if(u.visHead=u.visChest=!1,m&&p<210&&(u.visChest=n.los(i,f),u.visHead=u.visChest&&p<40?!0:n.los(i,h.eye(is)),_=u.visHead||u.visChest),u.vis=_,_){let M=Math.acos(Xa((d*s+g*o+x*a)/p,-1,1)),v=M<.45?1:M<1.2?.34:.09,S=Xa(1.7-p/105,.2,1.6)*v*(h.moving?1.6:1)*((h.crouchK||0)>.5?.55:1)*(e.time-h.lastShot<3.2?4.5:1)*(this.crouchK>.5?.8:1);S*=.5*Xa(e.time/30,.12,1)*(h.isPlayer?e.botEye:1),h.revealedUntil>e.time&&(S=99),u.aw=Math.min(1.4,u.aw+S*t),u.aw>=1&&(u.seen=e.time,u.pos.copy(h.pos))}else u.aw=Math.max(0,u.aw-.16*t),h.revealedUntil>e.time&&(u.aw=Math.max(u.aw,.8),u.seen=e.time,u.pos.copy(h.pos));if(_&&u.aw>=1){let M=0;for(let S of e.bots)S!==this&&S.alive&&S.state==="engage"&&S.target===h&&M++;if(M>=(h.isPlayer?e.botCrowd:1)&&!(h===this.threat&&e.time-this.threatT<6)&&h!==this.target)continue;let v=70-p*.42+(h===this.threat&&e.time-this.threatT<6?45:0)+(h.hp<50?12:0)+(h===this.target?14:0);v>l&&(l=v,c=h)}}return c}hear(t,e){if(!this.alive||t===this)return;let n=this.mem.get(t);e.distanceTo(this.pos)>170||(n&&(n.aw=Math.min(1.4,n.aw+.3)),this.state==="scan"&&Math.random()<.6&&(this.lookAt.copy(e),this.scanT=2+Math.random()*2))}nearMiss(t){if(!(!this.alive||this.link||this.plan.length)){if(this.suppress=Math.min(1,this.suppress+.6),t&&t.alive){this.threat=t,this.threatT=this.g.time;let e=this.mem.get(t);e&&(e.aw=Math.min(1.4,e.aw+.5))}Math.random()<.55&&(this.crouch=!0,this.stanceT=.8+Math.random()*1.6,this.state==="engage"&&(this.cool=Math.max(this.cool,.9+Math.random()),this.duck=!0))}}onDamage(t,e){if(this.rig.flinch=1,this.suppress=1,e&&e.alive){this.threat=e,this.threatT=this.g.time;let n=this.mem.get(e);n||(n={aw:0,seen:-99,pos:new sn,vis:!1},this.mem.set(e,n)),n.aw=Math.max(n.aw,1.05),n.seen=this.g.time,n.pos.copy(e.pos),this.lookAt.copy(e.pos).setY(e.pos.y+1.2)}this.link||this.plan.length||(this.crouch=!0,this.stanceT=.9+Math.random()*1.2,(this.hp<60||Math.random()<.5)&&e&&this._relocate(e))}_zoneSafeR(){let t=this.g.zone;return t.shrinking||t.toNext<16?Math.min(t.r,t.nextR):t.r}_safeAt(t,e,n){return Math.hypot(t-this.g.zone.cx,e-this.g.zone.cz)<n-1.2}_pickPerch(t,e={}){let n=this.g.arena,i=n.roofs[t],s=this._zoneSafeR(),o=-1,a=-1e9,c=i.perch.length?i.perch:i.cells,l=Math.min(c.length,26);for(let h=0;h<l;h++){let u=c[Math.random()*c.length|0];n.cellPos(i,u,te);let f=Math.random()*4;this._safeAt(te.x,te.z,s)||(f-=60);let d=Math.hypot(te.x,te.z);f+=(Math.hypot(i.x,i.z)-d)*.5*(e.inward||.3),e.from&&(f-=Math.max(0,5-Math.hypot(te.x-e.from.x,te.z-e.from.z))*3),e.hideFrom&&(is.set(te.x,te.y+1,te.z),n.los(e.hideFrom,is)||(f+=30),is.y=te.y+1.55,n.los(e.hideFrom,is)||(f+=10)),f>a&&(a=f,o=u)}return o<0?null:n.cellPos(i,o,new sn)}_goTo(t,e,n){let i=this.g.arena;this.path=i.path(this.roofObj,this.pos.x,this.pos.z,t,e),this.arrive=n||null}_relocate(t){let e=t?t.eye(new sn):null,n=this._pickPerch(this.roof,{from:this.pos,hideFrom:e});n&&(this.state="move",this.shotsHere=0,this._goTo(n.x,n.z,()=>{this.state="scan",this.crouch=!!e||Math.random()<.4,this.stanceT=e?1.5+Math.random()*2:.8+Math.random(),this.calmUntil=this.g.time+1.2+Math.random()*2}))}_travel(t){this.plan=t.slice(),this.state="move",this.target=null,this._nextLeg()}_nextLeg(){let t=this.g.arena;if(!this.plan.length){let i=this._pickPerch(this.roof,{inward:.6});i?this._goTo(i.x,i.z,()=>{this.state="scan",this.crouch=Math.random()<.6,this.stanceT=1.5+Math.random()*2.5,this.calmUntil=this.g.time+2.5+Math.random()*3}):this.state="scan";return}let e=this.plan[0],n=e.dir?e.link.p1:e.link.p0;this._goTo(n.x,n.z,()=>{this.plan.shift(),this.link={link:e.link,dir:e.dir,t:0,to:e.to,from:this.pos.clone()},this.crouch=!1})}_zoneCheck(t){let e=this.g,n=e.arena,i=e.zone;if(this.link)return;let s=this._zoneSafeR(),o=!this._safeAt(this.pos.x,this.pos.z,i.r+.6);if(this._safeAt(this.pos.x,this.pos.z,s)&&!t||this.plan.length&&!o||!o&&i.phaseAge<this.zoneDelay&&!i.shrinking&&i.toNext>9)return;let c=this.roofObj;if(n.safeCount(c,s-2)>=6){if(this.state!=="move"||t){let u=null,f=1e9;for(let d=0;d<40;d++){let g=c.cells[Math.random()*c.cells.length|0];if(n.cellPos(c,g,te),!this._safeAt(te.x,te.z,s-.8))continue;let x=Math.hypot(te.x-this.pos.x,te.z-this.pos.z);x<f&&(f=x,u=te.clone())}u&&(this.state="move",this.plan.length=0,this.fleeing=!0,this.target=null,this._goTo(u.x,u.z,()=>{this.state="scan",this.fleeing=!1}))}return}let h=n.route(this.roof,u=>n.safeCount(u,s-2.2)>=10);h||(h=n.route(this.roof,u=>n.safeCount(u,s-1)>=1)),h&&(this.fleeing=!1,this._travel(h))}hideFromAngel(t){if(!this.alive||!this.skill.devout||this.link||this.plan.length||this.state==="engage")return;let e=this.g.arena,n=this.roofObj,i=null,s=1e9;for(let o=0;o<50;o++){let a=n.cells[Math.random()*n.cells.length|0];if(e.cellPos(n,a,te),!this._safeAt(te.x,te.z,this.g.zone.r)||(is.set(te.x,te.y+.95,te.z),e.los(t,is)))continue;let c=Math.hypot(te.x-this.pos.x,te.z-this.pos.z);c<s&&(s=c,i=te.clone())}i&&s<13&&(this.state="move",this._goTo(i.x,i.z,()=>{this.state="scan",this.crouch=!0,this.stanceT=4.5}),this.hideUntil=this.g.time+6)}update(t){let e=this.g,n=e.arena;if(!this.alive){if(this.fall){let o=this.fall;o.vy-=za*t;let a=this.pos.y+o.vy*t,c=o.vy<0?n.groundY(this.pos.x,this.pos.z,this.pos.y+.6,.7-o.vy*t):null;c!=null&&c>=a?(this.pos.y=c,this.fall=null):(this.pos.y=a,this.pos.x+=o.vx*t,this.pos.z+=o.vz*t,n.raycast(te.set(this.pos.x,this.pos.y+.9,this.pos.z),is.set(o.vx,0,o.vz).normalize(),.45)&&(o.vx=0,o.vz=0),this.pos.y<1&&(this.fall=null)),this.rig.update(t,{mode:this.fall?"air":"dead"}),this._sync(t)}else this.rig.update(t,{mode:"dead"});this.ghost.visible&&(this.ghost.visible=!1);return}if(this.cool-=t,this.thinkT-=t,this.stanceT-=t,this.scanT-=t,this.roamT-=t,this.suppress=Math.max(0,this.suppress-t*.4),this.thinkT<=0){this.thinkT=.2;let a=this._perceive(.2);if(this._zoneCheck(!1),this.state==="move"&&!this.path.length&&!this.plan.length&&!this.link&&(this.state="scan",this.fleeing=!1),!(this.link||this.plan.length>0||this.hideUntil>e.time||this.fleeing)){if(a&&e.weaponsFree&&this.reloadT<=0&&(e.time>this.calmUntil||a===this.threat&&e.time-this.threatT<5)){if(this.target!==a){this.target=a,this.settle=0;let l=!this.firstShotAt.has(a);this.aimNeed=(this.skill.react+this.mem.get(a).d/100*1.1+(l?.5:0)+Math.random()*.4)*(a.isPlayer?e.botAim:1),this.aimPt=Math.random()<this.skill.headBias?1:0}this.state!=="engage"&&(this.state="engage",this.path.length=0,this.arrive=null,this.crouch=!1),this.lostT=0}else if(this.state==="engage"&&(this.lostT+=.2,this.lostT>1.6||!this.target||!this.target.alive)){let l=this.target&&this.mem.get(this.target);l&&this.lookAt.copy(l.pos).setY(l.pos.y+1.2),this.state="scan",this.target=null,this.scanT=3,this.stanceT=2+Math.random()*2}if(this.state==="scan"){if(this.shotsHere>=2+this.id*7%2)this._relocate(this.threat&&e.time-this.threatT<8?this.threat:null);else if(this.roamT<=0)if(this.roamT=14+Math.random()*22,Math.random()<this.skill.aggr*.7){let l=this._zoneSafeR(),h=this.roofObj.dist,u=this.roofObj.links.filter(f=>n.safeCount(n.roofs[f.to],l-2.2)>=30&&n.roofs[f.to].dist>h-16&&!e.bots.some(d=>d!==this&&d.alive&&d.roof===f.to));u.length?this._travel([u[Math.random()*u.length|0]]):this._relocate(null)}else this._relocate(null)}}}this.reloadT>0&&(this.reloadT-=t,this.crouch=!0,this.reloadT<=0&&(this.mag=Ln.rifle.mag,this.stanceT=.2));let i="ground",s=!1;if(this.speed=0,this.link){let o=this.link;o.t+=t/(o.link.time*(o.link.kind==="ladder",1));let a=Math.min(1,o.t),c=ab.copy(this.pos);n.linkPos(o.link,o.dir,a,te),a<.07&&te.lerpVectors(o.from,te,a/.07),this.pos.copy(te),t>0&&this.vel.copy(this.pos).sub(c).multiplyScalar(1/t),i=n.linkMode(o.link,a,o.dir),i==="ground"&&o.link.kind==="jump"&&(this.speed=6);let l=o.dir?o.link.p0:o.link.p1,h=o.link.kind==="ladder"?Math.atan2(-o.link.n[0],-o.link.n[1]):Math.atan2(-(l.x-this.pos.x),-(l.z-this.pos.z));this.yaw+=Lo(h-this.yaw)*Math.min(1,t*10),this.aimYaw=this.yaw,this.aimPitch=Io(this.aimPitch,0,t*5),a>=1&&(this.roof=o.to,this.link=null,this.pos.y=this.roofObj.roofY,this._nextLeg())}else{if(this.path.length){let o=this.path[0],a=o.x-this.pos.x,c=o.z-this.pos.z,l=Math.hypot(a,c),h=this.crouch&&this.state!=="move"?2.2:5.2,u=h*t;if(l<=u+.05){if(this.pos.x=o.x,this.pos.z=o.z,this.path.shift(),!this.path.length&&this.arrive){let f=this.arrive;this.arrive=null,f()}}else{this.pos.x+=a/l*u,this.pos.z+=c/l*u,this.speed=h;let f=Math.atan2(-a,-c);this.yaw+=Lo(f-this.yaw)*Math.min(1,t*9),this.state==="move"&&(this.aimYaw+=Lo(this.yaw-this.aimYaw)*Math.min(1,t*6),this.aimPitch=Io(this.aimPitch,0,t*4),this.crouch=!1)}}if(this.pos.y=Io(this.pos.y,this.roofObj.roofY,Math.min(1,t*12)),this.state==="scan"){if(this.stanceT<=0&&(this.crouch=!this.crouch,this.stanceT=this.crouch?1.2+Math.random()*2.6:2.6+Math.random()*3.6,this.hideUntil>e.time&&(this.crouch=!0)),this.scanT<=0){this.scanT=2.2+Math.random()*3;let o=null;if(Math.random()<.55){let a=-99;for(let[c,l]of this.mem)c.alive&&l.seen>a&&e.time-l.seen<25&&(a=l.seen,o=l.pos)}if(o)this.lookAt.copy(o).setY(o.y+1.2);else{let a=n.roofs[Math.random()*n.roofs.length|0];this.lookAt.set(a.x+(Math.random()-.5)*8,a.roofY+1.2,a.z+(Math.random()-.5)*8)}}this._aimAt(this.lookAt,t,1.5),s=!this.crouch}else if(this.state==="engage"&&this.target){let o=this.target,a=this.mem.get(o),c=this.aimPt===1||a&&!a.visChest,l=c?o.eye(te):o.chest(te);c&&(l.y+=.03);let h=this._aimAt(l,t,this.skill.turn);s=!0,this.crouch=this.cool>.45&&this.duck,this.glintT=.3,h<.035?this.settle+=t:this.settle=Math.max(0,this.settle-t*.5),this.settle>=this.aimNeed&&this.cool<=0&&!this.crouch&&this.crouchK<.25&&e.weaponsFree&&this._shoot(o,l)}}if(this.crouchK=Xa(this.crouchK+(this.crouch?t/.2:-t/.2),0,1),this.link)this.moveLocal.set(0,0,1);else if(this.speed>.1&&this.path.length){let o=this.path[0],a=Math.atan2(-(o.x-this.pos.x),-(o.z-this.pos.z))-this.yaw;this.moveLocal.set(-Math.sin(a)*-1,0,Math.cos(a))}else this.moveLocal.set(0,0,1);this.rig.update(t,{aim:s&&i==="ground"&&this.speed<.5,crouch:this.crouch&&i==="ground",pitch:this.aimPitch,twist:Lo(this.aimYaw-this.yaw),speed:this.speed,moveDir:this.moveLocal,mode:i}),this._sync(t),this.glintT-=t}_aimAt(t,e,n){let i=this.eye(is),s=t.x-i.x,o=t.y-i.y,a=t.z-i.z,c=Math.atan2(-s,-a),l=Math.atan2(o,Math.hypot(s,a)),h=Lo(c-this.aimYaw),u=l-this.aimPitch,f=Math.hypot(h,u),d=n*e*(.35+Math.min(1,f*2.5));f<=d?(this.aimYaw=c,this.aimPitch=l):(this.aimYaw+=h/f*d,this.aimPitch+=u/f*d);let g=Lo(this.aimYaw-this.yaw);return Math.abs(g)>.5&&this.speed<.5&&(this.yaw+=Math.sign(g)*Math.min(Math.abs(g)-.35,e*4.5)),f}_shoot(t,e){let n=this.g,i=this.mem.get(t),s=this.eye(new sn);if(!n.arena.los(s,e)){this.settle*=.6;return}let o=s.distanceTo(e),a=!this.firstShotAt.has(t);this.firstShotAt.set(t,n.time);let c=i&&!i.visChest,l=this.skill.sigma*(1+o/170)*(1+Math.min(2.2,(t.speed||0)*.42))*(1+this.suppress*1.6)*(a?1.75:1)*n.botSigma*(t.isPlayer?n.botSigmaPlayer:n.botSigmaBot*Io(1.12,1,Xa(n.time/210,0,1)))*((t.crouchK||0)>.5?1.15:1)*(c?1.25:1),h=cb.copy(e).sub(s).normalize();te.set(hg()*l,hg()*l,0);let u=new De().setFromUnitVectors(new sn(0,0,-1),h);h.add(te.applyQuaternion(u)).normalize(),this.rig.root.updateMatrixWorld(!0),this.muzzleW.copy(this.rig.muzzle).applyMatrix4(this.rig.root.matrixWorld),Ch(n,this,s,h.clone(),this.muzzleW.clone(),Ln.rifle),this.rig.recoil=1,this.rig.boltK=1,this.mag--,this.shotsHere++,this.cool=Ln.rifle.cycle+.7+Math.random()*1.7,this.settle=this.aimNeed*.25,this.duck=Math.random()<.8,this.aimPt=Math.random()<this.skill.headBias?1:0,this.mag<=0&&(this.reloadT=Ln.rifle.reload+.4,this.crouch=!0)}_sync(t){let e=this.rig.root;e.position.copy(this.pos),e.rotation.y=this.yaw+Math.PI,e.updateMatrixWorld(!0);let n=this.revealedUntil-this.g.time;n>0?(this.ghost.visible=!0,this.ghostMat.opacity=Math.min(1,n*1.2)*(.42+.14*Math.sin(this.g.time*18))):this.ghost.visible&&(this.ghost.visible=!1)}die(){this.alive=!1,this.rig.deadDir=Math.random()<.5?1:-1,this.fall=this.link?{vx:this.vel.x*.6,vy:Math.min(this.vel.y,3),vz:this.vel.z*.6}:null,this.path.length=0,this.plan.length=0,this.link=null,this.target=null}};var Fh=(r,t,e)=>Math.min(e,Math.max(t,r)),fg=r=>r*r*(3-2*r),Uh=class{constructor(t,e,n){this.g=t,this.root=new Te,this.model=e.scene,this.root.add(this.model),t.gfx.scene.add(this.root),this.model.traverse(c=>{if(!c.isMesh)return;c.frustumCulled=!1;let l=c.material.name;c.material=/halo/.test(l)?n.halo:/arm/.test(l)?n.angelArm:n.angelBody,/halo/.test(l)&&(c.renderOrder=12)});let i=new oe().setFromObject(this.model),s=i.max.y-i.min.y;this.height=44;let o=this.height/s;this.model.scale.setScalar(o),this.model.position.y=-i.min.y*o,this.baseY=31,this.root.position.set(0,this.baseY,0),this.mixer=new da(this.model),this.action=this.mixer.clipAction(e.clips[0]),this.action.play(),this.dur=e.clips[0].duration,this.t=.3,this.mixer.setTime(this.t),this.wrists=[],this.halo=null,this.model.traverse(c=>{/arm_wrist/.test(c.name)&&this.wrists.push(c),c.name==="halo"&&(this.halo=c)}),this.eye=new L(0,this.baseY+this.height*.9,0),this.state="idle",this.st=0,this.pulseR=0,this.pulseOn=!1,this.frenzy=!1,this.open=0,this.spin=0;let a=new fe(new ra(1,.035,6,72),new ze({color:new At("#B51224").multiplyScalar(1),transparent:!0,opacity:.5,blending:On,depthWrite:!1,fog:!1}));a.rotation.x=Math.PI/2,this.glowRing=a,this.root.add(a),ne.uPulse.value.set(0,this.eye.y,0,0)}wristPos(t,e){return this.wrists[t%this.wrists.length].getWorldPosition(e)}warn(){this.state="warn",this.st=0}look(){this.state="look",this.st=0,this.pulseR=0,this.pulseOn=!0;for(let t of this.g.actors)t._gazed=!1}reset(){this.state="idle",this.st=0,this.pulseOn=!1,this.frenzy=!1,this.open=0,ne.uPulse.value.w=0,this.t=.3}update(t){let e=this.g;this.st+=t;let n=0;this.state==="warn"?n=fg(Fh(this.st/4.5,0,1)):this.state==="look"?n=1:this.state==="close"&&(n=1-fg(Fh(this.st/4,0,1))),this.state==="look"&&this.st>4.2&&(this.state="close",this.st=0),this.state==="close"&&this.st>4&&(this.state="idle",this.st=0),this.open=n,this.frenzy?(this.t+=t*.55,this.t>this.dur&&(this.t-=this.dur)):this.t=.25+n*3.3+Math.sin(e.clock*.35)*.12*(1-n),this.mixer.setTime(this.t),this.root.position.y=this.baseY+Math.sin(e.clock*.4)*.6-(e.zone?(1-Fh(e.zone.r/30,0,1))*5:0),this.root.rotation.y=Math.sin(e.clock*.07)*.5,this.root.updateMatrixWorld(!0),this.halo&&this.halo.getWorldPosition(this.eye);let i=3.4*(1+.06*Math.sin(e.clock*2.2)+this.open*.25);if(this.glowRing.position.set(this.eye.x-this.root.position.x,this.eye.y-this.root.position.y+.1,this.eye.z-this.root.position.z),this.glowRing.scale.set(i,i,i),this.glowRing.material.opacity=.35+.4*this.open,this.pulseOn){this.pulseR+=t*78;let s=Fh(1-this.pulseR/260,0,1);ne.uPulse.value.set(0,this.eye.y,this.pulseR,s*1);for(let o of e.actors){if(!o.alive||o._gazed)continue;o.chest().distanceTo(this.eye)<=this.pulseR&&(o._gazed=!0,e.gazeHit(o,e.arena.los(this.eye,o.chest())))}this.pulseR>260&&(this.pulseOn=!1,ne.uPulse.value.w=0)}}};var Bh=L,yr=(r,t,e)=>Math.min(e,Math.max(t,r)),vr=(r,t,e)=>r+(t-r)*e,ss=new Bh,Is=new Bh,Ls=new Bh,Ad=r=>`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`,Oh=class{constructor({gfx:t,assets:e,city:n,models:i,opts:s={}}){this.gfx=t,this.city=n,this.models=i,this.opts=s,this.arena=new yh(e.arena,n.bvh),this.audio=new vh,this.input=new Mh(t.canvas),this.hud=new Sh(this);let o=t.post.uRes.value,a=t.scene;this.fx={threads:new Th(a,o),particles:new wh(a,o),decals:new Eh(a),curtain:rg(a),hints:og(a,this.arena,o),rain:ag(a,t.isMobile?500:900)},this.fp=new Ah(t,i),this.player=new Lh(this),this.proto=new ka(i.cop);let c=ug.slice().sort(()=>Math.random()-.5);this.bots=[];for(let l=0;l<7;l++)this.bots.push(new Dh(this,l+1,c[l],this.proto,i.weapons.rifle_tp));this.actors=[this.player,...this.bots],this.angel=new Uh(this,i.angel,i.mats),n.sky.material.uniforms.uAngel.value=this.angel.eye,this.zone={cx:0,cz:0,r:84,nextR:84,phase:0,shrinking:!1,toNext:60,phaseAge:0,dps:0},this.Z=this.arena.zone,this.calm=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),this.calm&&(t.post.uGrain.value=.035),this.lockHintT=0,this.state="title",this.time=0,this.clock=0,this.timeScale=1,this.slowT=0,this.weaponsFree=!1,this.listenerPos=new Bh,this.stats={},this.botSigma=1,this.level=1,this.botSigmaPlayer=1.2,this.botEye=1,this.botAim=1,this.botCrowd=2,this.botSigmaBot=2,this.log=[],this.orbit=Math.random()*6,this.glintT=0,this.heartT=0,this.tickT=0,this.fpsAcc=0,this.fpsN=0,this.resultsShown=!1,this.simSpeed=s.sim?s.speed||6:1,this.bots.forEach(l=>{l.rig.root.visible=!1}),this._ui()}_ui(){let t=this.hud,e=this.input,n=f=>document.getElementById(f);t.keysLegend(e.touch||this.gfx.isMobile),n("deploy").addEventListener("click",()=>this.start()),n("again").addEventListener("click",()=>this.start()),n("resume").addEventListener("click",()=>this.resume()),n("quit").addEventListener("click",()=>this.toTitle()),n("sens").addEventListener("input",f=>{e.sens=+f.target.value;try{localStorage.setItem("sc.sens",f.target.value)}catch{}});try{let f=localStorage.getItem("sc.sens");f&&(n("sens").value=f,e.sens=+f)}catch{}let i=(f,d,g,x)=>{let p=n(f);p.addEventListener("click",()=>{let m=p.getAttribute("aria-pressed")!=="true";p.setAttribute("aria-pressed",m),p.textContent=m?d:g,x(m)})},s=n("fsb"),o=n("app");s&&(!document.fullscreenEnabled||!o.requestFullscreen?s.hidden=!0:(s.addEventListener("click",()=>{try{let f=document.fullscreenElement?document.exitFullscreen():o.requestFullscreen();f&&f.catch&&f.catch(()=>{s.hidden=!0})}catch{s.hidden=!0}}),document.addEventListener("fullscreenchange",()=>{let f=!!document.fullscreenElement;s.setAttribute("aria-pressed",f),s.textContent=f?"FULL SCREEN ON":"FULL SCREEN"})));let a=["RECRUIT","MARKSMAN","GHOST"],c=n("aib"),l=f=>{this.level=f,c.textContent="RIVALS \xB7 "+a[f];try{localStorage.setItem("sc.ai",String(f))}catch{}},h=1,u=!1;try{let f=localStorage.getItem("sc.ai");(f==="0"||f==="1"||f==="2")&&(h=+f,u=!0)}catch{}!u&&this.gfx.isMobile&&(h=0),this.level=h,c.textContent="RIVALS \xB7 "+a[h],c.addEventListener("click",()=>{u=!0,l((this.level+1)%3),this.audio.start(),this.audio.ui()}),i("snd","SOUND ON","SOUND OFF",f=>{this.audio.start(),this.audio.setMuted(!f)}),i("rainb","RAIN ON","RAIN OFF",f=>{this.fx.rain.visible=f}),e.onLockChange=f=>{!f&&this.state==="live"&&this.player.alive&&!e.touch&&!e.lockFailed&&!this.opts.sim&&this.pause(),e.lockFailed&&!this._lockHint&&this.state==="live"&&!e.touch&&(this._lockHint=!0,this.lockHintT=1.6)},e.onLockError=()=>{this.state==="live"&&this.player.alive&&!this.opts.sim&&(this.pause(),t.el.psub.textContent="the browser needs a second before it hands the mouse back \xB7 press resume again")},e.onTouchMode=()=>{t.keysLegend(!0),document.getElementById("app").classList.add("touch"),this.state==="live"&&t.show(this.player.alive?"play":"spectate")},e.onStick=(f,d,g,x,p)=>t.stick(f,d,g,x||0,p||0),e.bindButton(n("b-fire"),"fire","fire"),e.bindButton(n("b-ads"),"ads","toggle"),e.bindButton(n("b-jump"),"jump","tap"),e.bindButton(n("b-crouch"),"crouch","toggle"),e.bindButton(n("b-reload"),"reload","tap"),e.bindButton(n("b-swap"),"swap","tap"),e.bindButton(n("b-use"),"use","tap"),e.bindButton(n("b-zoom"),"zoom","tap"),n("b-pause").addEventListener("touchstart",f=>{f.preventDefault(),this.state==="live"&&this.pause()},{passive:!1}),n("b-pause").addEventListener("click",()=>{this.state==="live"&&this.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="live"&&this.player.alive&&!this.opts.sim&&this.pause()})}start(){let t=this.arena,e=this.player;this.audio.start(),this.audio.ui(),this.hud.fade(0);for(let o of this.actors)o.reset();this.fx.threads.clear(),this.fx.particles.clear(),this.fx.decals.clear(),this.angel.reset();let n=t.spawns.map((o,a)=>a).sort(()=>Math.random()-.5),i=(o,a)=>Math.atan2(o,a);this.actors.forEach((o,a)=>{let c=t.spawns[n[a]];ss.set(c.spawnPt[0],c.spawnPt[1],c.spawnPt[2]),o.isPlayer?(o.spawn(ss,i(ss.x,ss.z)),o.roof=c.i,o.spawnRoof=c):(o.spawn(ss,i(ss.x,ss.z),c.i),o.rig.root.visible=!0),o.outT=0,o.zoneAcc=0,o._gazed=!1}),this.opts.sim&&(e.alive=!1,e.hp=0,e.place=9);let s=this.level;this.botSigmaPlayer=[2,1.2,.75][s],this.botEye=[.6,1,1.35][s],this.botAim=[1.35,1,.7][s],this.botCrowd=[1,2,3][s],this.time=0,this.timeScale=1,this.slowT=0,this.weaponsFree=!1,this.stats={traversals:0,dmg:0},this.log=[],this.winner=null,this.resultsShown=!1,this.overT=0,this.deathInfo=null,this.gazeWarned=-1,this.gazeDone=-1,this.zoneWarned=-1,this.lastTwo=!1,this.introT=0,e.locked=!0,this.state="live",this.input.enabled=!0,this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.setToggle("crouch",!1,document.getElementById("b-crouch")),this.hud.show(e.alive?"play":"spectate"),this.hud.health(100),this.hud.lastHp=100,this.hud.weapon(e),this.hud.alive(this.actors,e),this.hud.el.feed.innerHTML="",this.hud.feedItems.length=0,this.hud.seen(!1,!1),e.alive&&this.hud.banner(`${e.spawnRoof.name} \xB7 0${e.spawnRoof.spawn+1}`,this.input.touch?5.5:3.2,!1,this.input.touch?"left thumb moves \xB7 right thumb looks \xB7 hold FIRE to aim, let go to shoot":"eight snipers \xB7 last one standing");try{this.gfx.canvas.focus({preventScroll:!0})}catch{}!this.input.touch&&!this.opts.sim&&this.input.requestLock(),this._zone(0)}pause(){this.state==="live"&&(this.state="paused",this.hud.show("pause"),this.input.enabled=!1,this.input.exitLock(),this.audio.setZip(0),this.hud.el.psub.textContent=this.input.touch?"the match is frozen":"the match is frozen \xB7 click resume to take the mouse back")}resume(){if(this.state==="paused"){this.state="live",this.hud.show(this.player.alive?"play":"spectate"),this.input.enabled=!0,this.audio.start();try{this.gfx.canvas.focus({preventScroll:!0})}catch{}this.input.touch||this.input.requestLock()}}toTitle(){this.state="title",this.hud.show("title"),this.input.enabled=!1,this.input.exitLock();for(let t of this.bots)t.rig.root.visible=!1;this.fx.threads.clear(),this.angel.reset(),this.gfx.post.uFade.value=1,this.audio.setZone(0),this.audio.setZip(0)}flash(t){let e=this.gfx.post.uFlash;e.value=Math.max(e.value,t*(this.calm?.3:1))}_zone(t){let e=this.Z,n=this.zone,i=this.time,s=0;for(;s+1<e.phases.length&&e.phases[s+1].t<=i;)s++;let o=e.phases[s],a=e.phases[Math.max(0,s-1)],c=e.phases[s+1],l=i-o.t;if(n.shrinking=s>0&&l<o.shrink,n.r=n.shrinking?vr(a.r,o.r,l/o.shrink):o.r,n.nextR=n.shrinking?o.r:c?c.r:o.r,n.toNext=c?c.t-i:e.duration-i,n.phaseAge=l,n.dps=o.dps||5,n.phase=s,n.total=e.phases.length,ne.uZone.value.set(n.cx,n.cz,n.r,1),this.fx.curtain.scale.set(n.r,120,n.r),this.fx.curtain.material.uniforms.uR.value=n.r,!(t<=0)){if(c&&(n.toNext<=15&&this.zoneWarned<s&&(this.zoneWarned=s,this.hud.banner("the halo tightens in 15",2.6,!0,"white ring on the map = next safe ground"),this.audio.tick()),n.toNext<=5.5&&this.gazeWarned<s)){this.gazeWarned=s,this.angel.warn(),this.audio.choir(7.5,s>=3),this.hud.banner("the angel is opening its arms",3.4,!0,"break its line of sight",!0);for(let h of this.bots)h.hideFromAngel(this.angel.eye)}s>0&&this.gazeDone<s&&(this.gazeDone=s,this.angel.look(),this.flash(.22),s===e.phases.length-1?(this.angel.frenzy=!0,this.hud.banner("final halo",2.6,!1,"no roof is safe for long",!0)):this.hud.banner("the halo is closing",2.2,!0));for(let h of this.actors){if(!h.alive)continue;if(Math.hypot(h.pos.x-n.cx,h.pos.z-n.cz)>n.r){if(h.outT+=t,h.outT>2.5&&(h.zoneAcc+=n.dps*t,h.zoneAcc>=3)){let f=h.zoneAcc;h.zoneAcc=0,this.damage(h,f,null,{cause:"zone"})}}else h.outT=Math.max(0,h.outT-t*2),h.zoneAcc=0}}}gazeHit(t,e){e&&(t.revealedUntil=this.time+5.5),t.isPlayer&&t.alive&&(this.flash(.3),e?(this.hud.banner("the angel sees you",2.6,!0,"your outline shows through walls",!0),this.audio.toll(5)):this.hud.banner("unseen",1.8,!0,"you were out of its sight"))}panOf(t){let e=this.player,n=e.alive?e.yaw:this.orbit+Math.PI/2;Ls.copy(t).sub(this.listenerPos);let i=Math.hypot(Ls.x,Ls.z)||1;return(Ls.x*Math.cos(n)-Ls.z*Math.sin(n))/i*.85}onShot(t,e,n){for(let i of this.bots)i.alive&&i!==t&&i.hear(t,e)}damage(t,e,n,i={}){if(!(!t.alive||this.state==="title")&&!(t.isPlayer&&this.opts.god)){if(t.hp-=e,n&&n.isPlayer&&(this.stats.dmg+=Math.min(e,100)),t.isPlayer){let s=yr(e/55,.25,1);this.gfx.post.uDamage.value=Math.max(this.gfx.post.uDamage.value,s),t.hurtT=.3,this.audio.hurt(),n&&this.hud.threat(n.pos,1),this.hud.health(t.hp),t.suppress=1}else t.onDamage(e,n);t.hp<=0&&this.kill(t,n,i)}}kill(t,e,n){t.alive=!1,t.hp=0,t.deathTime=this.time;let i=this.actors.filter(u=>u.alive).length;t.place=i+1;let s=n.cause==="zone"?"THE HALO":n.cause==="drop"||n.cause==="fall"?"THE STREET":null,o=s?"":n.zone===0?"head":n.wpn&&n.wpn.key==="pistol"?"sidearm":"",a=e?e.name:s||"\u2014";this.hud.feed(a,t.name,o,t.isPlayer||e&&e.isPlayer),this.log.push({t:this.time,k:a,v:t.name,how:o,red:t.isPlayer||e&&e.isPlayer}),e&&e.alive&&(e.kills++,e.hp=Math.min(100,e.hp+30),e.isPlayer&&(this.hud.health(e.hp),this.audio.kill(),this.slowT=.42,this.flash(.35)));let c=ss.copy(t.pos);if(c.y+=.25,n.cause!=="drop"){let u=this.arena.raycast(Is.copy(c).setY(c.y+.6),Ls.set(0,-1,0),4);u&&this.fx.decals.add(u.point,Ls.set(0,1,0),.9+Math.random()*.4,0,3.5),t.isPlayer||this.fx.particles.motes(c,30)}let l=8-t.place,h=this.angel;this.fx.threads.addSoul(c.clone().setY(Math.max(c.y,6)),u=>h.wristPos(l,u)),this.audio.toll(8-i),t.isPlayer?(this.deathInfo={killer:a,cause:s,how:o},this.hud.show("spectate"),this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.exitLock(),this.audio.setZip(0),this.deadFrom=this.gfx.camera.position.clone(),this.deadQ=this.gfx.camera.quaternion.clone()):t.die(),this.hud.alive(this.actors,this.player),i===2&&!this.lastTwo&&(this.lastTwo=!0,this.player.alive&&this.hud.banner("two left",2.4,!1,"one thread away",!0)),i<=1&&this._finish(this.actors.find(u=>u.alive)||e||t)}_finish(t){this.winner||(this.winner=t,t.place=1,t.isPlayer&&(this.slowT=1.6,this.audio.stinger(!0)),this.overT=0,this.state="over")}_timeout(){let t=this.actors.filter(e=>e.alive).sort((e,n)=>n.hp-e.hp||n.kills-e.kills||Math.hypot(e.pos.x,e.pos.z)-Math.hypot(n.pos.x,n.pos.z));t.forEach((e,n)=>{e.place=n+1}),this.hud.banner("judgement",3,!1,"time \xB7 highest health takes the block",!0),this._finish(t[0])}_results(){let t=this.player,e=this.winner,n=t.place===1;this.resultsShown=!0,this.input.enabled=!1,this.input.exitLock(),n||this.audio.stinger(!1);let i=t.shots?Math.round(100*t.hits/t.shots):0,s=t.alive?this.time:t.deathTime,o=this.deathInfo,a=this.time>=this.Z.duration-.05&&this.actors.filter(h=>h.alive).length>1,c=n?a?"Strongest at the bell":"Last sniper standing":o&&o.cause==="THE HALO"?"Taken by the halo":o&&o.cause==="THE STREET"?"The street took you":o?`Eliminated by ${o.killer}`:"Out of time",l=this.log.map(h=>`<b>${Ad(h.t)}</b> ${h.red?"<i>":""}${h.k} \u2501 ${h.v}${h.how?" \xB7 "+h.how:""}${h.red?"</i>":""}`).join(" &nbsp; ");this.hud.results({win:n,placeLabel:`placed ${t.place} of 8`,head:c,sub:n?a?"time ran out \xB7 highest health takes the block":`${Ad(this.time)} on the clock`:e?`${e.name} holds the block`:"the match is still running",stats:[[t.kills,"eliminations"],[t.heads,"headshots"],[i+"%","accuracy"],[Ad(s),"survived"],[this.stats.traversals,"roof crossings"]],log:l}),this.hud.show("results")}_post(t){let e=this.gfx,n=this.player,i=e.post,s=this.state==="live"||this.state==="over";i.uDamage.value=Math.max(0,i.uDamage.value-t*1.6),i.uFlash.value=Math.max(0,i.uFlash.value-t*1.4),i.uKick.value=Math.max(0,i.uKick.value-t*7);let o=n.alive&&s,a=o?yr((38-n.hp)/38,0,1):0;i.uLowHP.value=vr(i.uLowHP.value,a,1-Math.exp(-t*4)),i.uInk.value=vr(i.uInk.value,a*.55,1-Math.exp(-t*3));let c=o&&Math.hypot(n.pos.x-this.zone.cx,n.pos.z-this.zone.cz)>this.zone.r?1:0;i.uZoneOut.value=vr(i.uZoneOut.value,c,1-Math.exp(-t*5)),i.uGlitch.value=this.calm?0:i.uZoneOut.value*.55+(ne.uPulse.value.w>.6?.25:0),this.audio.setZone(i.uZoneOut.value),i.uVignette.value=o&&n.scoped?0:.25,ne.uScope.value=vr(ne.uScope.value,o&&n.scoped?1:0,1-Math.exp(-t*10))}update(t){let e=this.gfx,n=this.player,i=this.input,s=e.post;this.clock+=t,ne.uTime.value=this.clock,i.poll(t),i.pressed("pause")&&(this.state==="live"&&!this.opts.sim?this.pause():this.state==="paused"&&this.resume()),i.pressed("mute")&&document.getElementById("snd").click();let o=this.state==="live"||this.state==="over";if(o){this.slowT>0?(this.slowT-=t,this.timeScale=vr(this.timeScale,.22,1-Math.exp(-t*30))):this.timeScale=vr(this.timeScale,1,1-Math.exp(-t*6));let c=!n.alive&&this.state==="live"?this.opts.sim?this.simSpeed:2.2:1,l=c>1.5?Math.ceil(c):1;for(let h=0;h<l;h++)this._step(t*this.timeScale*c/l,t,h===0)}else this.angel.update(t),this.fx.threads.update(),this.fx.particles.update(t);let a=e.camera;if(this.state==="title"||!n.alive&&o||this.state==="paused"&&!n.alive){this.orbit+=t*.035;let c=0,l=24,h=0,u=118,f=52,d=o&&this.deathInfo&&this.time-n.deathTime<2.2&&this.deadFrom;if(a.fov!==50&&(a.fov=50,a.updateProjectionMatrix()),d){let g=yr((this.clock-(this._deadClock||(this._deadClock=this.clock)))/1,0,1);a.position.copy(this.deadFrom),a.position.y=Math.max(n.pos.y+.22,this.deadFrom.y-g*g*1.5),a.quaternion.copy(this.deadQ),a.rotateZ(g*.9),a.rotateX(-g*.3)}else{if(this._deadClock=0,this.state!=="title"){let g=this.actors.filter(x=>x.alive);g.length&&(c=g.reduce((x,p)=>x+p.pos.x,0)/g.length*.5,h=g.reduce((x,p)=>x+p.pos.z,0)/g.length*.5),u=Math.min(96,Math.max(58,this.zone.r+40)),f=44+this.zone.r*.16}else u=92,f=34,l=30;a.position.set(c+Math.cos(this.orbit)*u,f,h+Math.sin(this.orbit)*u),a.lookAt(c,l,h)}this.listenerPos.copy(a.position)}else this.listenerPos.copy(a.position);this._post(t),this.city.sky.position.copy(a.position),this.state==="over"?(this.overT+=t,!this.resultsShown&&this.overT>(this.winner&&this.winner.isPlayer?2.6:1.6)&&this._results()):this.state==="live"&&!n.alive&&!this.resultsShown&&!this.opts.sim&&this.time-n.deathTime>2.6&&this._results(),this.resultsShown&&this.winner&&this._resWin!==this.winner&&(this._resWin=this.winner,this.winner.isPlayer||(this.hud.el.rsub.textContent=`${this.winner.name} holds the block`)),this.hud.update(t,this),i.endFrame()}_step(t,e,n){let i=this.player,s=this.input,o=this.hud;this.state==="live"&&(this.time+=t,this.introT+=t,i.locked&&this.introT>1.3&&(i.locked=!1),this.lockHintT>0&&(this.lockHintT-=t,this.lockHintT<=0&&i.alive&&o.banner("this frame cannot capture the mouse",5,!0,"move the cursor to look \xB7 rest it at an edge to keep turning")),!this.weaponsFree&&this.time>=6&&(this.weaponsFree=!0,i.alive&&(o.banner("weapons free",1.8,!0),this.audio.tick())),this._zone(t),this.time>=this.Z.duration&&!this.winner&&this._timeout()),i.alive&&n&&i.update(t,s);for(let h of this.bots)h.update(t);if(this.angel.update(t),this.fx.threads.update(),this.fx.particles.update(t),!n)return;if(i.alive){let h=this.gfx.camera,u=i.mode==="link"&&i.link.kind!=="pad"||i.mode==="mantle";this.fp.update(e,{weapon:i.cur,ads:i.ads,hidden:i.scoped,bob:i.grounded?Math.min(1,i.speed/5):0,phase:i.walkPhase,land:i.landDip,lower:(i.sprinting?1:0)+(u?1.6:0),swap:i.swapTo?i.swapT:0,bolt:i.boltT,reload:i.reloadT,lookX:s.lookX,lookY:s.lookY});let f=h.getWorldDirection(ss),d=this.arena.raycast(h.position,f,400),g=d?d.distance:-1,x=null;if(i.ads>.5){let _=vd(this.actors,h.position,f,d?d.distance:400,i);if(_)x=_.actor;else{let M=i.scoped?.012:.03;for(let v of this.bots){if(!v.alive)continue;Is.copy(v.chest()).sub(h.position);let S=Is.length(),T=Math.acos(yr(Is.dot(f)/S,-1,1));T<M&&this.arena.los(h.position,v.chest())&&(M=T,x=v)}}}o.target(x),o.scope(i.scoped,i.weapon.zooms[Math.min(i.zoomIdx,i.weapon.zooms.length-1)],x?h.position.distanceTo(x.chest()):g,i.focus,i.gasp,s.touch);let p=1;if(s.touch&&i.ads>.6)for(let _ of this.bots){if(!_.alive)continue;Is.copy(_.chest()).sub(h.position);let M=Is.length();if(Math.acos(yr(Is.dot(f)/M,-1,1))<(i.scoped?.02:.06)&&this.arena.los(h.position,_.chest())){p=.5;break}}i.aimSlow=p,o.prompt(i.prompt&&!i.scoped?i.prompt.text:null,s.touch,i.prompt&&i.prompt.passive),o.action(i.reloadT>=0?i.reloadT:i.boltT>=0?i.boltT:i.swapTo?i.swapT:-1);let m=i.roof>=0?this.arena.roofs[i.roof]:null;if(o.where(i.mode==="link"?this.arena.linkLabel(i.link):m?m.spawn>=0?`${m.name} \xB7 0${m.spawn+1}`:m.name:"in the air"),o.seen(i.revealedUntil>this.time,this.angel.state==="warn"),this.heartT-=e,(i.hp<38||i.holding)&&this.heartT<=0&&(this.heartT=i.holding?1.05:.5+i.hp/90,this.audio.heart()),i.outT>.2&&(this.tickT-=e,this.tickT<=0&&(this.tickT=.8,this.audio.tick())),this.glintT-=e,this.glintT<=0){this.glintT=.09;for(let _ of this.bots)if(_.alive&&_.state==="engage"&&_.target===i&&_.crouchK<.5){let M=_.eye(Is);this.fx.particles.glint(Ls.set(M.x,M.y-.03,M.z),7+9*yr(_.settle/(_.aimNeed||1),0,1))}}}let a=this.zone,c,l="";this.weaponsFree?a.shrinking?(c="halo closing",l="hot"):a.phase>=a.total-1?(c="final halo",l="hot"):(c=`halo holds \xB7 ${Math.ceil(a.toNext)}s`,l=a.toNext<=15?"warn":""):(c=`weapons free in ${Math.max(1,Math.ceil(6-this.time))}`,l="warn"),o.time(this.time,this.Z.duration,c,l),this.audio.setTension(yr((8-this.actors.filter(h=>h.alive).length)/7*.6+a.phase/5*.4,0,1))}};var pC=new URLSearchParams(location.search),qa=r=>document.getElementById(r);async function hb(){Zm();let r=qa("view"),t=qa("loadbar").firstElementChild,e=qa("loadtxt"),n=(M,v)=>{t.style.width=Math.round(M*100)+"%",v&&(e.textContent=v)},i;try{i=new Wl(r)}catch{throw new Error("This device could not start WebGL 2, which the game needs.")}if(!i.renderer.capabilities.isWebGL2)throw new Error("This browser does not offer WebGL 2, which the game needs.");let s={texSize:i.isMobile?512:1024,aniso:i.isMobile?2:8,shadow:i.isMobile?2048:4096};n(.02,"loading the district");let o=await jm(M=>n(.02+M*.68));n(.72,"raising the buildings"),await new Promise(M=>setTimeout(M,30));let a=await q0(i,o,s);n(.88,"waking the angel"),await new Promise(M=>setTimeout(M,30));let c=await j0(o.models,o.pack);i.renderer.shadowMap.needsUpdate=!0;let l=new Oh({gfx:i,assets:o,city:a,models:c,opts:{}});try{i.renderer.setRenderTarget(i.rt),i.renderer.compile(i.scene,i.camera),i.renderer.compile(i.fpScene,i.fpCamera),i.renderer.setRenderTarget(null)}catch{}n(1,"ready"),l.hud.ready(),document.fonts&&document.fonts.load&&Promise.all([document.fonts.load('900 64px "Noto Sans HK"',"\u72D9\u64CA\u4E4B\u57CE\u5929\u4F7F\u7D05\u5340\u9999\u6E2F\u4E2D\u74B0\u9152\u5E97\u8336\u6A13\u7576\u92EA"),document.fonts.load('italic 800 64px "Barlow Condensed"',"0123456789 SNIPER CITY")]).then(()=>a.tex.userData.repaint()).catch(()=>{});let h=performance.now(),u=0,f="",d=!1,g=()=>l.player.alive&&(l.state==="live"||l.state==="over"||l.state==="paused")&&!l.player.scoped;d&&(window.__frame=(M=1/60,v=1)=>{for(let S=0;S<v;S++)i.resize(),l.update(M),i.render(g())},window.__tick=(M=1/60,v=1)=>{for(let S=0;S<v;S++)l.update(M)},window.__frame(),window.__ready=!0);let x={t:0,n:0,slow:0,fast:0,sum:0,cap:1,capT:0,prev:0,dropped:!1,noGain:0,base:1,on:!0,quiet:4};function p(M,v){if(!x.on)return;if(x.quiet>0){x.quiet-=M;return}if(M>=.099)return;let S=M*1e3;if(x.t+=M,x.n++,x.sum+=S,S>25&&x.slow++,S<19&&x.fast++,x.t<1.5||x.n<12)return;let T=x.sum/x.n,y=x.slow/x.n,b=x.fast/x.n;if(x.t=0,x.n=0,x.sum=0,x.slow=0,x.fast=0,x.dropped)if(x.dropped=!1,T>x.prev*.92){if(++x.noGain>=2){x.on=!1,i.scale=x.base;return}}else x.noGain=0;y>.5&&i.scale>.5?(x.noGain||(x.base=i.scale),x.prev=T,x.dropped=!0,x.cap=Math.max(.5,i.scale-.1),x.capT=v+3e4,i.scale=x.cap):b>.95&&i.scale<1&&(i.scale+.05<=x.cap+1e-6||v>x.capT)&&(i.scale=Math.min(1,i.scale+.05))}function m(M){if(requestAnimationFrame(m),d)return;let v=(M-h)/1e3;h=M,v>.1&&(v=.1),v<=0&&(v=1/120),i.resize(),l.update(v),i.render(g()),u++,l.state!==f&&(f=l.state,x.quiet=Math.max(x.quiet,2.5)),p(v,M),u===3&&(window.__ready=!0)}requestAnimationFrame(m);let _=new Proxy({},{get:()=>()=>{}})}hb().catch(r=>{console.error(r),window.__err=String(r&&r.stack||r);let t=qa("err");t&&(t.hidden=!1,t.textContent="Sniper City could not start: "+(r&&r.message?r.message:r));let e=qa("loadtxt");e&&(e.textContent="could not load")});})();
