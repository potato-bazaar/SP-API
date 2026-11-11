(()=>{var Hp=0,Iu=1,Vp=2;var ar=1,Gp=2,no=3,Oi=0,Ke=1,Le=2,lr=0,vs=1,Bi=2,Lu=3,Nu=4,Wp=5;var cr=100,Xp=101,qp=102,Yp=103,Kp=104,$p=200,Zp=201,Jp=202,jp=203,Du=204,Fu=205,Qp=206,tm=207,em=208,im=209,nm=210,sm=211,rm=212,om=213,am=214,Rl=0,Cl=1,Pl=2,Hr=3,Il=4,Ll=5,Nl=6,Dl=7,tc=0,lm=1,cm=2,vn=0,Uu=1,Ou=2,Bu=3,ku=4,zu=5,Hu=6,Vu=7,Su="attached",hm="detached",Gu=300,hr=301,so=302,ec=303,ic=304,$i=1e3,Yi=1001,Vr=1002,ke=1003,nc=1004;var ur=1005;var be=1006,ro=1007;var ei=1008;var ii=1009,Wu=1010,Xu=1011,oo=1012,sc=1013,ln=1014,ki=1015,cn=1016,rc=1017,oc=1018,fr=1020,qu=35902,Yu=35899,Ku=1021,$u=1022,Zi=1023,Hn=1026,Qn=1027,ao=1028,ac=1029,Ms=1030,lc=1031;var cc=1033,xa=33776,_a=33777,ya=33778,va=33779,hc=35840,uc=35841,fc=35842,dc=35843,pc=36196,mc=37492,gc=37496,xc=37488,_c=37489,Ma=37490,yc=37491,vc=37808,Mc=37809,Sc=37810,bc=37811,wc=37812,Tc=37813,Ec=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Ic=37819,Lc=37820,Nc=37821,Dc=36492,Fc=36494,Uc=36495,Oc=36283,Bc=36284,Sa=36285,kc=36286,um=2200,fm=2201,dm=2202,Ks=2300,$s=2301,El=2302,bu=2303,Xs=2400,qs=2401,Ko=2402,zc=2500,pm=2501,Zu=0,ba=1,lo=2,mm=3200;var wa=0,gm=1,zi="",Ce="srgb",bi="srgb-linear",$o="linear",fe="srgb";var Al=7680;var xm=519,_m=512,ym=513,vm=514,Ju=515,Mm=516,Sm=517,ju=518,Qu=519,tf=35044,Ss=35048;var ef="300 es",Ki=2e3,Gr=2001;function Vg(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bm(){let r=Wr("canvas");return r.style.display="block",r}var tp={},Xr=null;function Zo(...r){let t="THREE."+r.shift();Xr?Xr("log",t,...r):console.log(t,...r)}function wm(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Rt(...r){r=wm(r);let t="THREE."+r.shift();if(Xr)Xr("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ut(...r){r=wm(r);let t="THREE."+r.shift();if(Xr)Xr("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Ys(...r){let t=r.join(" ");t in tp||(tp[t]=!0,Rt(...r))}function Tm(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Em={[Rl]:Rl,[Pl]:Nl,[Il]:Il,[Hr]:Ll,[Cl]:Cl,[Nl]:Pl,[Dl]:Dl,[Ll]:Hr},rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},ui=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ep=1234567,qo=Math.PI/180,Zs=180/Math.PI;function Mn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ui[r&255]+ui[r>>8&255]+ui[r>>16&255]+ui[r>>24&255]+"-"+ui[t&255]+ui[t>>8&255]+"-"+ui[t>>16&15|64]+ui[t>>24&255]+"-"+ui[e&63|128]+ui[e>>8&255]+"-"+ui[e>>16&255]+ui[e>>24&255]+ui[i&255]+ui[i>>8&255]+ui[i>>16&255]+ui[i>>24&255]).toLowerCase()}function Gt(r,t,e){return Math.max(t,Math.min(e,r))}function nf(r,t){return(r%t+t)%t}function Wg(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Xg(r,t,e){return r!==t?(e-r)/(t-r):0}function Yo(r,t,e){return(1-e)*r+e*t}function qg(r,t,e,i){return Yo(r,t,1-Math.exp(-e*i))}function Yg(r,t=1){return t-Math.abs(nf(r,t*2)-t)}function Kg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function $g(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Zg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jg(r,t){return r+Math.random()*(t-r)}function jg(r){return r*(.5-Math.random())}function Qg(r){r!==void 0&&(ep=r);let t=ep+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tx(r){return r*qo}function ex(r){return r*Zs}function ix(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function nx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sx(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hc(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rf(r,t){if(t.constructor===Float32Array)return r;let e=Hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function of(r,t){if(t.constructor===Float32Array)return r;let e=Hc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var ts={DEG2RAD:qo,RAD2DEG:Zs,generateUUID:Mn,clamp:Gt,euclideanModulo:nf,mapLinear:Wg,inverseLerp:Xg,lerp:Yo,damp:qg,pingpong:Yg,smoothstep:Kg,smootherstep:$g,randInt:Zg,randFloat:Jg,randFloatSpread:jg,seededRandom:Qg,degToRad:tx,radToDeg:ex,isPowerOfTwo:ix,ceilPowerOfTwo:nx,floorPowerOfTwo:sf,setQuaternionFromProperEuler:sx,normalize:of,denormalize:rf},uf=class uf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uf.prototype.isVector2=!0;var Nt=uf,Pe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=s[o+0],d=s[o+1],p=s[o+2],x=s[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),M=Math.sin(_);g=Math.sin(g*_)/M,a=Math.sin(a*_)/M,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),f=l(i/2),d=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ip.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ip.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jh.copy(this).projectOnVector(t),this.sub(Jh)}reflect(t){return this.sub(Jh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;var L=ff,Jh=new L,ip=new Pe,df=class df{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=n[0],m=n[3],g=n[6],_=n[1],M=n[4],v=n[7],S=n[2],w=n[5],y=n[8];return s[0]=o*x+a*_+l*S,s[3]=o*m+a*M+l*w,s[6]=o*g+a*v+l*y,s[1]=c*x+h*_+u*S,s[4]=c*m+h*M+u*w,s[7]=c*g+h*v+u*y,s[2]=f*x+d*_+p*S,s[5]=f*m+d*M+p*w,s[8]=f*g+d*v+p*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jh.makeScale(t,e)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jh.makeRotation(-t)),this}translate(t,e){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;var Bt=df,jh=new Bt,np=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rx(){let r={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===fe&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(n.r=zr(n.r),n.g=zr(n.g),n.b=zr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===zi?$o:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[bi]:{primaries:t,whitePoint:i,transfer:$o,toXYZ:np,fromXYZ:sp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:np,fromXYZ:sp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),r}var Yt=rx();function zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wr,Fl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wr===void 0&&(wr=Wr("canvas")),wr.width=t.width,wr.height=t.height;let n=wr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=wr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=zn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zn(e[i]/255)*255):e[i]=zn(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ox=0,qr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Qh(n[o].image)):s.push(Qh(n[o]))}else s=Qh(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Fl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var ax=0,tu=new L,ze=class r extends rn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Yi,n=Yi,s=be,o=ei,a=Zi,l=ii,c=r.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Mn(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Gu;ze.DEFAULT_ANISOTROPY=1;var pf=class pf{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,S=(g+1)/2,w=(h+f)/4,y=(u+x)/4,b=(p+m)/4;return M>v&&M>S?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=w/i,s=y/i):v>S?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=w/n,s=b/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=y/s,n=b/s),this.set(i,n,s,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;var oe=pf,Ul=class extends rn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new ze({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new qr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Js=class extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ol=class extends ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ql=class Ql{constructor(t,e,i,n,s,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,u,f,d,p,x,m)}set(t,e,i,n,s,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ql().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Tr.setFromMatrixColumn(t,0).length(),s=1/Tr.setFromMatrixColumn(t,1).length(),o=1/Tr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lx,t,cx)}lookAt(t,e,i){let n=this.elements;return Fi.subVectors(t,e),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),hs.crossVectors(i,Fi),hs.lengthSq()===0&&(Math.abs(i.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),hs.crossVectors(i,Fi)),hs.normalize(),tl.crossVectors(Fi,hs),n[0]=hs.x,n[4]=tl.x,n[8]=Fi.x,n[1]=hs.y,n[5]=tl.y,n[9]=Fi.y,n[2]=hs.z,n[6]=tl.z,n[10]=Fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],M=i[7],v=i[11],S=i[15],w=n[0],y=n[4],b=n[8],A=n[12],R=n[1],P=n[5],C=n[9],D=n[13],I=n[2],U=n[6],k=n[10],V=n[14],tt=n[3],W=n[7],Q=n[11],et=n[15];return s[0]=o*w+a*R+l*I+c*tt,s[4]=o*y+a*P+l*U+c*W,s[8]=o*b+a*C+l*k+c*Q,s[12]=o*A+a*D+l*V+c*et,s[1]=h*w+u*R+f*I+d*tt,s[5]=h*y+u*P+f*U+d*W,s[9]=h*b+u*C+f*k+d*Q,s[13]=h*A+u*D+f*V+d*et,s[2]=p*w+x*R+m*I+g*tt,s[6]=p*y+x*P+m*U+g*W,s[10]=p*b+x*C+m*k+g*Q,s[14]=p*A+x*D+m*V+g*et,s[3]=_*w+M*R+v*I+S*tt,s[7]=_*y+M*P+v*U+S*W,s[11]=_*b+M*C+v*k+S*Q,s[15]=_*A+M*D+v*V+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*d-c*f,M=a*d-c*u,v=a*f-l*u,S=o*d-c*h,w=o*f-l*h,y=o*u-a*h;return e*(x*_-m*M+g*v)-i*(p*_-m*S+g*w)+n*(p*M-x*S+g*y)-s*(p*v-x*w+m*y)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-i*o,M=e*l-n*o,v=e*c-s*o,S=i*l-n*a,w=i*c-s*a,y=n*c-s*l,b=h*x-u*p,A=h*m-f*p,R=h*g-d*p,P=u*m-f*x,C=u*g-d*x,D=f*g-d*m,I=_*D-M*C+v*P+S*R-w*A+y*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/I;return t[0]=(a*D-l*C+c*P)*U,t[1]=(n*C-i*D-s*P)*U,t[2]=(x*y-m*w+g*S)*U,t[3]=(f*w-u*y-d*S)*U,t[4]=(l*R-o*D-c*A)*U,t[5]=(e*D-n*R+s*A)*U,t[6]=(m*v-p*y-g*M)*U,t[7]=(h*y-f*v+d*M)*U,t[8]=(o*C-a*R+c*b)*U,t[9]=(i*R-e*C-s*b)*U,t[10]=(p*w-x*v+g*_)*U,t[11]=(u*v-h*w-d*_)*U,t[12]=(a*A-o*P-l*b)*U,t[13]=(e*P-i*A+n*b)*U,t[14]=(x*M-p*S-m*_)*U,t[15]=(h*S-u*M+f*_)*U,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,x=o*h,m=o*u,g=a*u,_=l*c,M=l*h,v=l*u,S=i.x,w=i.y,y=i.z;return n[0]=(1-(x+g))*S,n[1]=(d+v)*S,n[2]=(p-M)*S,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(f+g))*w,n[6]=(m+_)*w,n[7]=0,n[8]=(p+M)*y,n[9]=(m-_)*y,n[10]=(1-(f+x))*y,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Tr.set(n[0],n[1],n[2]).length(),a=Tr.set(n[4],n[5],n[6]).length(),l=Tr.set(n[8],n[9],n[10]).length();s<0&&(o=-o),en.copy(this);let c=1/o,h=1/a,u=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=Ki,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),f=(e+t)/(e-t),d=(i+n)/(i-n),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Ki)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Gr)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Ki,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),f=-(e+t)/(e-t),d=-(i+n)/(i-n),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Ki)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Gr)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ql.prototype.isMatrix4=!0;var yt=Ql,Tr=new L,en=new yt,lx=new L(0,0,0),cx=new L(1,1,1),hs=new L,tl=new L,Fi=new L,rp=new yt,op=new Pe,xn=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return op.setFromEuler(this),this.setFromQuaternion(op,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hx=0,ap=new L,Er=new Pe,Dn=new yt,el=new L,Oo=new L,ux=new L,fx=new Pe,lp=new L(1,0,0),cp=new L(0,1,0),hp=new L(0,0,1),up={type:"added"},dx={type:"removed"},Ar={type:"childadded",child:null},eu={type:"childremoved",child:null},we=class r extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new xn,i=new Pe,n=new L(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new yt},normalMatrix:{value:new Bt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(lp,t)}rotateY(t){return this.rotateOnAxis(cp,t)}rotateZ(t){return this.rotateOnAxis(hp,t)}translateOnAxis(t,e){return ap.copy(t).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lp,t)}translateY(t){return this.translateOnAxis(cp,t)}translateZ(t){return this.translateOnAxis(hp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?el.copy(t):el.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Oo,el,this.up):Dn.lookAt(el,Oo,this.up),this.quaternion.setFromRotationMatrix(Dn),n&&(Dn.extractRotation(n.matrixWorld),Er.setFromRotationMatrix(Dn),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(up),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dx),eu.child=t,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(up),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,ux),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,fx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},px={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ee;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},il={h:0,s:0,l:0};function iu(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var At=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Yt.workingColorSpace){if(t=nf(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=iu(o,s,t+1/3),this.g=iu(o,s,t),this.b=iu(o,s,t-1/3)}return Yt.colorSpaceToWorking(this,n),this}setStyle(t,e=Ce){function i(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let i=Am[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Yt.workingToColorSpace(fi.copy(this),t),Math.round(Gt(fi.r*255,0,255))*65536+Math.round(Gt(fi.g*255,0,255))*256+Math.round(Gt(fi.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(fi.copy(this),e);let i=fi.r,n=fi.g,s=fi.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(fi.copy(this),e),t.r=fi.r,t.g=fi.g,t.b=fi.b,t}getStyle(t=Ce){Yt.workingToColorSpace(fi.copy(this),t);let e=fi.r,i=fi.g,n=fi.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(us),this.setHSL(us.h+t,us.s+e,us.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(us),t.getHSL(il);let i=Yo(us.h,il.h,e),n=Yo(us.s,il.s,e),s=Yo(us.l,il.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fi=new At;At.NAMES=Am;var jo=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},js=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},nn=new L,Fn=new L,nu=new L,Un=new L,Rr=new L,Cr=new L,fp=new L,su=new L,ru=new L,ou=new L,au=new oe,lu=new oe,cu=new oe,di=class r{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),nn.subVectors(t,e),n.cross(nn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){nn.subVectors(n,e),Fn.subVectors(i,e),nu.subVectors(t,e);let o=nn.dot(nn),a=nn.dot(Fn),l=nn.dot(nu),c=Fn.dot(Fn),h=Fn.dot(nu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(t,e),lu.fromBufferAttribute(t,i),cu.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(au,s.x),o.addScaledVector(lu,s.y),o.addScaledVector(cu,s.z),o}static isFrontFacing(t,e,i,n){return nn.subVectors(i,e),Fn.subVectors(t,e),nn.cross(Fn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),nn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Rr.subVectors(n,i),Cr.subVectors(s,i),su.subVectors(t,i);let l=Rr.dot(su),c=Cr.dot(su);if(l<=0&&c<=0)return e.copy(i);ru.subVectors(t,n);let h=Rr.dot(ru),u=Cr.dot(ru);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Rr,o);ou.subVectors(t,s);let d=Rr.dot(ou),p=Cr.dot(ou);if(p>=0&&d<=p)return e.copy(s);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Cr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return fp.subVectors(s,n),a=(u-h)/(u-h+(d-p)),e.copy(n).addScaledVector(fp,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ae=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nl.copy(i.boundingBox)),nl.applyMatrix4(t.matrixWorld),this.union(nl)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),sl.subVectors(this.max,Bo),Pr.subVectors(t.a,Bo),Ir.subVectors(t.b,Bo),Lr.subVectors(t.c,Bo),fs.subVectors(Ir,Pr),ds.subVectors(Lr,Ir),Hs.subVectors(Pr,Lr);let e=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Hs.z,Hs.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Hs.z,0,-Hs.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Hs.y,Hs.x,0];return!hu(e,Pr,Ir,Lr,sl)||(e=[1,0,0,0,1,0,0,0,1],!hu(e,Pr,Ir,Lr,sl))?!1:(rl.crossVectors(fs,ds),e=[rl.x,rl.y,rl.z],hu(e,Pr,Ir,Lr,sl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,nl=new ae,Pr=new L,Ir=new L,Lr=new L,fs=new L,ds=new L,Hs=new L,Bo=new L,sl=new L,rl=new L,Vs=new L;function hu(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Vs.fromArray(r,s);let a=n.x*Math.abs(Vs.x)+n.y*Math.abs(Vs.y)+n.z*Math.abs(Vs.z),l=t.dot(Vs),c=e.dot(Vs),h=i.dot(Vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Xe=new L,ol=new Nt,mx=0,Ft=class extends rn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tf,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=t!==void 0?Hc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ol.fromBufferAttribute(this,e),ol.applyMatrix3(t),this.setXY(e,ol.x,ol.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):of(t,this.array)}};var Qo=class extends Ft{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ta=class extends Ft{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ie=class extends Ft{constructor(t,e,i){super(new Float32Array(t),e,i)}},gx=new ae,ko=new L,uu=new L,Pi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gx.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);let e=ko.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ko,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(uu)),this.expandByPoint(ko.copy(t.center).sub(uu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xx=0,qi=new yt,fu=new we,Nr=new L,Ui=new ae,zo=new ae,ti=new L,ce=class r extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vg(t)?ta:Qo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Bt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qi.makeRotationFromQuaternion(t),this.applyMatrix4(qi),this}rotateX(t){return qi.makeRotationX(t),this.applyMatrix4(qi),this}rotateY(t){return qi.makeRotationY(t),this.applyMatrix4(qi),this}rotateZ(t){return qi.makeRotationZ(t),this.applyMatrix4(qi),this}translate(t,e,i){return qi.makeTranslation(t,e,i),this.applyMatrix4(qi),this}scale(t,e,i){return qi.makeScale(t,e,i),this.applyMatrix4(qi),this}lookAt(t){return fu.lookAt(t),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Ui.setFromBufferAttribute(s),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(Ui.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(Ui.min,zo.min),Ui.expandByPoint(ti),ti.addVectors(Ui.max,zo.max),Ui.expandByPoint(ti)):(Ui.expandByPoint(zo.min),Ui.expandByPoint(zo.max))}Ui.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)ti.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ti));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ti.fromBufferAttribute(a,c),l&&(Nr.fromBufferAttribute(t,c),ti.add(Nr)),n=Math.max(n,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let A=0;A<i.count;A++)a[A]=new L,l[A]=new L;let h=new L,u=new L,f=new L,d=new Nt,p=new Nt,x=new Nt,m=new L,g=new L;function _(A,R,P){c[A]=c[R]=c[P]=1,h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,R),x.fromBufferAttribute(s,P),u.sub(h),f.sub(h),p.sub(d),x.sub(d);let C=1/(p.x*x.y-x.x*p.y);isFinite(C)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(C),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(C),a[A].add(m),a[R].add(m),a[P].add(m),l[A].add(g),l[R].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,R=M.length;A<R;++A){let P=M[A],C=P.start,D=P.count;for(let I=C,U=C+D;I<U;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new L,S=new L,w=new L,y=new L;function b(A){w.fromBufferAttribute(n,A),y.copy(w);let R=a[A];v.copy(R),v.sub(w.multiplyScalar(w.dot(R))).normalize(),S.crossVectors(y,R);let C=S.dot(l[A])<0?-1:1;o.setXYZW(A,v.x,v.y,v.z,C)}for(let A=0,R=i.count;A<R;++A)c[A]&&b(A);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ft(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ti.fromBufferAttribute(t,e),ti.normalize(),t.setXYZ(e,ti.x,ti.y,ti.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ft(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tf,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=dp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=dp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function dp(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Mn()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var Mi=new L,$r=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Hc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Mi.fromBufferAttribute(this,e),Mi.applyMatrix4(t),this.setXYZ(e,Mi.x,Mi.y,Mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Mi.fromBufferAttribute(this,e),Mi.applyNormalMatrix(t),this.setXYZ(e,Mi.x,Mi.y,Mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Mi.fromBufferAttribute(this,e),Mi.transformDirection(t),this.setXYZ(e,Mi.x,Mi.y,Mi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Ft(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):of(t,this.data.array)}},du=new L,_x=new L,yx=new Bt,Si=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=du.subVectors(i,e).cross(_x.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(du),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||yx.getNormalMatrix(t),n=this.coplanarPoint(du).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vx=0,Ti=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=vs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Fu,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Si().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Bn=new L,pu=new L,al=new L,ll=new L,on=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){pu.copy(t).add(e).multiplyScalar(.5),al.copy(e).sub(t).normalize(),ll.copy(this.origin).sub(pu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(al),a=ll.dot(this.direction),l=-ll.dot(al),c=ll.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(pu).addScaledVector(al,f),d}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);let i=Bn.dot(this.direction),n=Bn.dot(Bn)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,_=i.y-o.y,M=i.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),y,b,A,R,P,C,D,I,U,k,V,tt;if(v>=S&&v>=w?(A=l,C=u,U=p,tt=g,l>=0?(y=c,b=h,R=f,P=d,D=x,I=m,k=_,V=M):(y=h,b=c,R=d,P=f,D=m,I=x,k=M,V=_)):S>=w?(A=c,C=f,U=x,tt=_,c>=0?(y=h,b=l,R=d,P=u,D=m,I=p,k=M,V=g):(y=l,b=h,R=u,P=d,D=p,I=m,k=g,V=M)):(A=h,C=d,U=m,tt=M,h>=0?(y=l,b=c,R=u,P=f,D=p,I=x,k=g,V=_):(y=c,b=l,R=f,P=u,D=x,I=p,k=_,V=g)),A===0)return null;let W=y/A,Q=b/A,et=1/A,xt=R-W*C,It=P-Q*C,K=D-W*U,at=I-Q*U,vt=k-W*tt,Ct=V-Q*tt,pt=vt*at-Ct*K,Ot=xt*Ct-It*vt,Re=K*It-at*xt;if(n){if(pt<0||Ot<0||Re<0)return null}else if((pt<0||Ot<0||Re<0)&&(pt>0||Ot>0||Re>0))return null;let Et=pt+Ot+Re;if(Et===0)return null;let Xt=et*(pt*C+Ot*U+Re*tt);return(Et>0?Xt<0:Xt>0)?null:this.at(Xt/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},pp=new yt,Gs=new on,cl=new Pi,mp=new L,hl=new L,ul=new L,fl=new L,mu=new L,dl=new L,gp=new L,pl=new L,de=class extends we{constructor(t=new ce,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(mu.fromBufferAttribute(u,t),o?dl.addScaledVector(mu,h):dl.addScaledVector(mu.sub(e),h))}e.add(dl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Gs.copy(t.ray).recast(t.near),!(cl.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(cl,mp)===null||Gs.origin.distanceToSquared(mp)>(t.far-t.near)**2))&&(pp.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(pp),!(i.boundingBox!==null&&Gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gs)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=M;v<S;v+=3){let w=a.getX(v),y=a.getX(v+1),b=a.getX(v+2);n=ml(this,g,t,i,c,h,u,w,y,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=ml(this,o,t,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],_=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=M;v<S;v+=3){let w=v,y=v+1,b=v+2;n=ml(this,g,t,i,c,h,u,w,y,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let _=m,M=m+1,v=m+2;n=ml(this,o,t,i,c,h,u,_,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Mx(r,t,e,i,n,s,o,a){let l;if(t.side===Ke?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Oi,a),l===null)return null;pl.copy(a),pl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(pl);return c<e.near||c>e.far?null:{distance:c,point:pl.clone(),object:r}}function ml(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,hl),r.getVertexPosition(l,ul),r.getVertexPosition(c,fl);let h=Mx(r,t,e,i,hl,ul,fl,gp);if(h){let u=new L;di.getBarycoord(gp,hl,ul,fl,u),n&&(h.uv=di.getInterpolatedAttribute(n,a,l,c,u,new Nt)),s&&(h.uv1=di.getInterpolatedAttribute(s,a,l,c,u,new Nt)),o&&(h.normal=di.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};di.getNormal(hl,ul,fl,f.normal),h.face=f,h.barycoord=u}return h}var Ho=new oe,xp=new oe,_p=new oe,Sx=new oe,yp=new yt,gl=new L,gu=new Pi,vp=new yt,xu=new on,Vn=class extends de{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Su,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ae),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,gl),this.boundingBox.expandByPoint(gl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,gl),this.boundingSphere.expandByPoint(gl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gu.copy(this.boundingSphere),gu.applyMatrix4(n),t.ray.intersectsSphere(gu)!==!1&&(vp.copy(n).invert(),xu.copy(t.ray).applyMatrix4(vp),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,xu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new oe,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;xp.fromBufferAttribute(n.attributes.skinIndex,t),_p.fromBufferAttribute(n.attributes.skinWeight,t),e.isVector4?(Ho.copy(e),e.set(0,0,0,0)):(Ho.set(e.x,e.y,e.z,1),e.set(0,0,0)),Ho.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=_p.getComponent(s);if(o!==0){let a=xp.getComponent(s);yp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Sx.copy(Ho).applyMatrix4(yp),o)}}return e.isVector4&&(e.w=Ho.w),e.applyMatrix4(this.bindMatrixInverse)}},Zr=class extends we{constructor(){super(),this.isBone=!0,this.type="Bone"}},Jr=class extends ze{constructor(t=null,e=1,i=1,n,s,o,a,l,c=ke,h=ke,u,f){super(null,o,a,l,c,h,n,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mp=new yt,bx=new yt,ea=class r{constructor(t=[],e=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new yt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:bx;Mp.multiplyMatrices(a,e[s]),Mp.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Jr(e,t,t,Zi,ki);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],o=e[s];o===void 0&&(Rt("Skeleton: No bone found with UUID:",s),o=new Zr),this.bones.push(o),this.boneInverses.push(new yt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let o=e[n];t.bones.push(o.uuid);let a=i[n];t.boneInverses.push(a.toArray())}return t}},Gn=class extends Ft{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Dr=new yt,Sp=new yt,xl=[],bp=new ae,wx=new yt,Vo=new de,Go=new Pi,Qs=class extends de{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ae),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dr),bp.copy(t.boundingBox).applyMatrix4(Dr),this.boundingBox.union(bp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dr),Go.copy(t.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),t.ray.intersectsSphere(Go)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Dr),Sp.multiplyMatrices(i,Dr),Vo.matrixWorld=Sp,Vo.raycast(t,xl);for(let o=0,a=xl.length;o<a;o++){let l=xl[o];l.instanceId=s,l.object=this,e.push(l)}xl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Gn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(n*this.count),n,this.count,ao,ki));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ws=new Pi,Tx=new Nt(.5,.5),_l=new L,gs=class{constructor(t=new Si,e=new Si,i=new Si,n=new Si,s=new Si,o=new Si){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ki,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],x=s[9],m=s[10],g=s[11],_=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(c-o,d-h,g-p,S-_).normalize(),n[1].setComponents(c+o,d+h,g+p,S+_).normalize(),n[2].setComponents(c+a,d+u,g+x,S+M).normalize(),n[3].setComponents(c-a,d-u,g-x,S-M).normalize(),i)n[4].setComponents(l,f,m,v).normalize(),n[5].setComponents(c-l,d-f,g-m,S-v).normalize();else if(n[4].setComponents(c-l,d-f,g-m,S-v).normalize(),e===Ki)n[5].setComponents(c+l,d+f,g+m,S+v).normalize();else if(e===Gr)n[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);let e=Tx.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(_l.x=n.normal.x>0?t.max.x:t.min.x,_l.y=n.normal.y>0?t.max.y:t.min.y,_l.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(_l)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wp=new yt,Bl=class r{constructor(){this.coordinateSystem=Ki,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];wp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new gs),i[n].setFromProjectionMatrix(wp,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new gs),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var jr=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kl=new L,zl=new L,Tp=new yt,Wo=new on,yl=new Pi,_u=new L,Ep=new L,tr=class extends we{constructor(t=new ce,e=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)kl.fromBufferAttribute(e,n-1),zl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=kl.distanceTo(zl);t.setAttribute("lineDistance",new Ie(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(n),yl.radius+=s,t.ray.intersectsSphere(yl)===!1)return;Tp.copy(n).invert(),Wo.copy(t.ray).applyMatrix4(Tp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),M=vl(this,t,Wo,l,g,_,x);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=vl(this,t,Wo,l,x,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=vl(this,t,Wo,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=vl(this,t,Wo,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function vl(r,t,e,i,n,s,o){let a=r.geometry.attributes.position;if(kl.fromBufferAttribute(a,n),zl.fromBufferAttribute(a,s),e.distanceSqToSegment(kl,zl,_u,Ep)>i)return;_u.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(_u);if(!(c<t.near||c>t.far))return{distance:c,point:Ep.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Ap=new L,Rp=new L,er=class extends tr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ap.fromBufferAttribute(e,n),Rp.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ap.distanceTo(Rp);t.setAttribute("lineDistance",new Ie(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ia=class extends tr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Qr=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cp=new yt,wu=new on,Ml=new Pi,Sl=new L,xs=class extends we{constructor(t=new ce,e=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(n),Ml.radius+=s,t.ray.intersectsSphere(Ml)===!1)return;Cp.copy(n).invert(),wu.copy(t.ray).applyMatrix4(Cp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);Sl.fromBufferAttribute(u,m),Pp(Sl,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Sl.fromBufferAttribute(u,p),Pp(Sl,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Pp(r,t,e,i,n,s,o){let a=wu.distanceSqToPoint(r);if(a<e){let l=new L;wu.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var na=class extends ze{constructor(t=[],e=hr,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ir=class extends ze{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends ze{constructor(t,e,i=ln,n,s,o,a=ke,l=ke,c,h=Hn,u=1){if(h!==Hn&&h!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sa=class extends Wn{constructor(t,e=ln,i=hr,n,s,o=ke,a=ke,l,c=Hn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ra=class extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},_s=class r extends ce{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function p(x,m,g,_,M,v,S,w,y,b,A){let R=v/y,P=S/b,C=v/2,D=S/2,I=w/2,U=y+1,k=b+1,V=0,tt=0,W=new L;for(let Q=0;Q<k;Q++){let et=Q*P-D;for(let xt=0;xt<U;xt++){let It=xt*R-C;W[x]=It*_,W[m]=et*M,W[g]=I,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),u.push(xt/y),u.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let et=0;et<y;et++){let xt=f+et+U*Q,It=f+et+U*(Q+1),K=f+(et+1)+U*(Q+1),at=f+(et+1)+U*Q;l.push(xt,It,at),l.push(It,K,at),tt+=6}a.addGroup(d,tt,A),d+=tt,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var oa=class r extends ce{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,x=[],m=i/2,g=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function _(){let v=new L,S=new L,w=0,y=(e-t)/i;for(let b=0;b<=s;b++){let A=[],R=b/s,P=R*(e-t)+t;for(let C=0;C<=n;C++){let D=C/n,I=D*l+a,U=Math.sin(I),k=Math.cos(I);S.x=P*U,S.y=-R*i+m,S.z=P*k,u.push(S.x,S.y,S.z),v.set(U,y,k).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-R),A.push(p++)}x.push(A)}for(let b=0;b<n;b++)for(let A=0;A<s;A++){let R=x[A][b],P=x[A+1][b],C=x[A+1][b+1],D=x[A][b+1];(t>0||A!==0)&&(h.push(R,P,D),w+=3),(e>0||A!==s-1)&&(h.push(P,C,D),w+=3)}c.addGroup(g,w,0),g+=w}function M(v){let S=p,w=new Nt,y=new L,b=0,A=v===!0?t:e,R=v===!0?1:-1;for(let C=1;C<=n;C++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let C=0;C<=n;C++){let I=C/n*l+a,U=Math.cos(I),k=Math.sin(I);y.x=A*k,y.y=m*R,y.z=A*U,u.push(y.x,y.y,y.z),f.push(0,R,0),w.x=U*.5+.5,w.y=k*.5*R+.5,d.push(w.x,w.y),p++}for(let C=0;C<n;C++){let D=S+C,I=P+C;v===!0?h.push(I,I+1,D):h.push(I+1,I,D),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Xn=class r extends ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*f-o;for(let M=0;M<c;M++){let v=M*u-s;p.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let M=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),w=_+1+c*g;d.push(M,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var aa=class r extends ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let _=[],M=g/i,v=o+M*a,S=t*Math.cos(v),w=Math.sqrt(t*t-S*S),y=0;g===0&&o===0?y=.5/e:g===i&&l===Math.PI&&(y=-.5/e);for(let b=0;b<=e;b++){let A=b/e,R=n+A*s;u.x=-w*Math.cos(R),u.y=S,u.z=w*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+y,1-M),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<e;_++){let M=h[g][_+1],v=h[g][_],S=h[g+1][_],w=h[g+1][_+1];(g!==0||o>0)&&d.push(M,v,w),(g!==i-1||l<Math.PI)&&d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var la=class r extends ce{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],f=new L,d=new L,p=new L;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=n;g++){let _=g/n*s;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,_=(n+1)*(x-1)+m-1,M=(n+1)*(x-1)+m,v=(n+1)*x+m;l.push(g,_,v),l.push(_,M,v)}this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function dr(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Ip(n))n.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Ip(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function pi(r){let t={};for(let e=0;e<r.length;e++){let i=dr(r[e]);for(let n in i)t[n]=i[n]}return t}function Ip(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ex(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function af(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Rm={clone:dr,merge:pi},Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Ex(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(n.value);break;case"v2":this.uniforms[i].value=new Nt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new L().fromArray(n.value);break;case"v4":this.uniforms[i].value=new oe().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Hl=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nr=class extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ei=class extends nr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Nt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ys('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var an=class extends Ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vl=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Gl=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Xo(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Cx(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Lp(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){let a=e[s]*t;for(let l=0;l!==t;++l)n[o++]=r[a+l]}return n}function Px(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(t.push(s.time),e.push(o)),s=r[n++];while(s!==void 0)}var _n=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];t:{e:{let o;i:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break e}o=e.length;break i}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break e}o=i,i=0;break i}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wl=class extends _n{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xs,endingEnd:Xs}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case qs:s=t,a=2*e-i;break;case Ko:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qs:o=t,l=2*i-e;break;case Ko:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,M=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+_*o[c+S]+M*o[l+S]+v*o[u+S];return s}},ca=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Xl=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ql=class extends _n{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,_=u[g],M=u[g+1],v=t*f+p*2,S=h[v],w=h[v+1],y=Lx(i,e,_,S,n);s[p]=Cm(y,x,M,w,m)}return s}};function Cm(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Ix(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function Lx(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=Cm(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=Ix(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Ii=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Xo(t.settings)&&(i.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case $s:e=this.InterpolantFactoryMethodLinear;break;case El:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;Xo(this.settings)&&(Np(this.settings.inTangents,t),Np(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Xo(this.settings)&&(Dp(this.settings.inTangents,t),Dp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ut("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Gg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===El,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Xo(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Np(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function Dp(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=$s;var qn=class extends Ii{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Ks;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};ha.prototype.ValueTypeName="color";var Yn=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};Yn.prototype.ValueTypeName="number";var Yl=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pe.slerpFlat(s,0,o,c-a,o,c,l);return s}},Kn=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};Kn.prototype.ValueTypeName="quaternion";Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Ii{constructor(t,e,i){super(t,e,i)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ks;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends Ii{constructor(t,e,i,n){super(t,e,i,n)}};ys.prototype.ValueTypeName="vector";var sr=class{constructor(t="",e=-1,i=[],n=zc){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let o=0,a=i.length;o!==a;++o)e.push(Dx(i[o]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=i.length;s!==o;++s)e.push(Ii.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=Cx(l);l=Lp(l,1,h),c=Lp(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Yn(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/i))}return new this(t,-1,o)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],f=n[u];f||(n[u]=f=[]),f.push(c)}}let o=[];for(let a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],e,i));return o}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Nx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return ha;case"quaternion":return Kn;case"bool":case"boolean":return qn;case"string":return $n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Dx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Nx(r.type);if(r.times===void 0){let i=[],n=[];Px(r.keys,i,n,"value"),r.times=i,r.values=n}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Xo(r.settings)&&(e.settings={inTangents:ms(r.settings.inTangents,Float32Array),outTangents:ms(r.settings.outTangents,Float32Array)}),e}var gn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Fp(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Fp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Fp(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Kl=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pm=new Kl,yn=class{constructor(t){this.manager=t!==void 0?t:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};yn.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},Tu=class extends Error{constructor(t,e){super(t),this.response=e}},to=class extends yn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=gn.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(kn[t]!==void 0){kn[t].push({onLoad:e,onProgress:i,onError:n});return}kn[t]=[],kn[t].push({onLoad:e,onProgress:i,onError:n});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=kn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:M,value:v})=>{if(M)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let w=0,y=h.length;w<y;w++){let b=h[w];b.onProgress&&b.onProgress(S)}g.enqueue(v),_()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Tu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{gn.add(`file:${t}`,c);let h=kn[t];delete kn[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=kn[t];if(h===void 0)throw this.manager.itemError(t),c;delete kn[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fr=new WeakMap,$l=class extends yn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=gn.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Fr.get(o);u===void 0&&(u=[],Fr.set(o,u)),u.push({onLoad:e,onError:n})}return o}let a=Wr("img");function l(){h(),e&&e(this);let u=Fr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Fr.delete(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),gn.remove(`image:${t}`);let f=Fr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Fr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gn.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var ua=class extends yn{constructor(t){super(t)}load(t,e,i,n){let s=new ze,o=new $l(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},rr=class extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},or=class extends rr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yu=new yt,Up=new L,Op=new L,eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Up.setFromMatrixPosition(t.matrixWorld),e.position.copy(Up),Op.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Op),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yu,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(yu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bl=new L,wl=new Pe,mn=new L,fa=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bl,wl,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,wl,mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(bl,wl,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bl,wl,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new L,Bp=new Nt,kp=new Nt,qe=class extends fa{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,e){return this.getViewBounds(t,Bp,kp),e.subVectors(kp,Bp)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Eu=class extends eo{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Zs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},da=class extends rr{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Eu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Au=class extends eo{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},pa=class extends rr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zn=class extends fa{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ru=class extends eo{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var jn=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var vu=new WeakMap,ma=class extends yn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=gn.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{vu.has(o)===!0?(n&&n(vu.get(o)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return gn.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),vu.set(l,c),gn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});gn.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ur=-90,Or=1,io=class extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new qe(Ur,Or,t,e);n.layers=this.layers,this.add(n);let s=new qe(Ur,Or,t,e);s.layers=this.layers,this.add(s);let o=new qe(Ur,Or,t,e);o.layers=this.layers,this.add(o);let a=new qe(Ur,Or,t,e);a.layers=this.layers,this.add(a);let l=new qe(Ur,Or,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ur,Or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Zl=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Jl=class{constructor(t,e,i){this.binding=t,this.valueSize=i;let n,s,o;switch(e){case"quaternion":n=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let i=this.buffer,n=this.valueSize,s=t*n+n,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==n;++a)i[s+a]=i[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,i=this.buffer,n=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(i,n,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(i[l]!==i[l+e]){a.setValue(i,n);break}}saveOriginalState(){let t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let s=i,o=n;s!==o;++s)e[s]=e[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,s){if(n>=.5)for(let o=0;o!==s;++o)t[e+o]=t[i+o]}_slerp(t,e,i,n){Pe.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,s){let o=this._workIndex*s;Pe.multiplyQuaternionsFlat(t,o,t,e,t,i),Pe.slerpFlat(t,e,t,e,t,o,n)}_lerp(t,e,i,n,s){let o=1-n;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*o+t[i+a]*n}}_lerpAdditive(t,e,i,n,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[i+o]*n}}},lf="\\[\\]\\.:\\/",Fx=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",Ux="[^"+lf.replace("\\.","")+"]",Ox=/((?:WC+[\/:])*)/.source.replace("WC",cf),Bx=/(WCOD+)?/.source.replace("WCOD",Ux),kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),Hx=new RegExp("^"+Ox+Bx+kx+zx+"$"),Vx=["material","materials","bones","map"],Cu=class{constructor(t,e,i){let n=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(t){let e=Hx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Vx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Cu;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jl=class{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;let s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Xs,endingEnd:Xs};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i=!1){if(t.fadeOut(e),this.fadeIn(e),i===!0){let n=this._clip.duration,s=t._clip.duration,o=s/n,a=n/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,i=!1){return t.crossFadeFrom(this,e,i)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){let n=this._mixer,s=n.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*i;l<0||i===0?e=0:(this._startTime=null,e=i*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case zc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(n,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,i=this.loop,n=this.time+t,s=this._loopCount,o=i===dm;if(t===0)return s===-1?n:o&&(s&1)===1?e-n:n;if(i===um){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else if(n<0)n=0;else{this.time=n;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),n>=e||n<0){let a=Math.floor(n/e);n-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=n;if(o&&(s&1)===1)return e-n}return n}_setEndings(t,e,i){let n=this._interpolantSettings;i?(n.endingStart=qs,n.endingEnd=qs):(t?n.endingStart=this.zeroSlopeAtStart?qs:Xs:n.endingStart=Ko,e?n.endingEnd=this.zeroSlopeAtEnd?qs:Xs:n.endingEnd=Ko)}_scheduleFading(t,e,i){let n=this._mixer,s=n.time,o=this._weightInterpolant;o===null&&(o=n._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=i,this}},Gx=new Float32Array(1),ga=class extends rn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let i=t._localRoot||this._root,n=t._clip.tracks,s=n.length,o=t._propertyBindings,a=t._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let f=n[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let x=e&&e._propertyBindings[u].binding.parsedPath;p=new Jl(ge.create(i,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let i=(t._localRoot||this._root).uuid,n=t._clip.uuid,s=this._actionsByClip[n];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,n,i)}let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,i){let n=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=n.length,n.push(t),o.actionByRoot[i]=t}_removeInactiveAction(t){let e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let i=0,n=e.length;i!==n;++i){let s=e[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackAction(t){let e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_addInactiveBinding(t,e,i){let n=this._bindingsByRootAndName,s=this._bindings,o=n[e];o===void 0&&(o={},n[e]=o),o[i]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,i=t.binding,n=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[n],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[n]}_lendBinding(t){let e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_takeBackBinding(t){let e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,s=e[n];t._cacheIndex=n,e[n]=t,s._cacheIndex=i,e[i]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,i=t[e];return i===void 0&&(i=new ca(new Float32Array(2),new Float32Array(2),1,Gx),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){let e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,s=e[n];t.__cacheIndex=n,e[n]=t,s.__cacheIndex=i,e[i]=s}clipAction(t,e,i){let n=e||this._root,s=n.uuid,o=typeof t=="string"?sr.findByName(n,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(i===void 0&&(o!==null?i=o.blendMode:i=zc),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new jl(this,o,e,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){let i=e||this._root,n=i.uuid,s=typeof t=="string"?sr.findByName(i,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let i=e-1;i>=0;--i)t[i].stop();return this}update(t){t*=this.timeScale;let e=this._actions,i=this._nActiveActions,n=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==i;++c)e[c]._update(n,t,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,i=t.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(t){let e=t.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let i=this.existingAction(t,e);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var mf=class mf{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};mf.prototype.isMatrix2=!0;var Pu=mf;var zp=new L,Tl=new L,Br=new L,kr=new L,Mu=new L,Wx=new L,Xx=new L,oi=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){zp.subVectors(t,this.start),Tl.subVectors(this.end,this.start);let i=Tl.dot(Tl);if(i===0)return 0;let s=Tl.dot(zp)/i;return e&&(s=Gt(s,0,1)),s}closestPointToPoint(t,e,i){let n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(t,e=Wx,i=Xx){let n=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,h=t.end;Br.subVectors(c,a),kr.subVectors(h,l),Mu.subVectors(a,l);let u=Br.dot(Br),f=kr.dot(kr),d=kr.dot(Mu);if(u<=n&&f<=n)return e.copy(a),i.copy(l),e.distanceToSquared(i);if(u<=n)s=0,o=d/f,o=Gt(o,0,1);else{let p=Br.dot(Mu);if(f<=n)o=0,s=Gt(-p/u,0,1);else{let x=Br.dot(kr),m=u*f-x*x;m!==0?s=Gt((x*d-p*f)/m,0,1):s=0,o=(x*s+d)/f,o<0?(o=0,s=Gt(-p/u,0,1)):o>1&&(o=1,s=Gt((x-p)/u,0,1))}}return e.copy(a).addScaledVector(Br,s),i.copy(l).addScaledVector(kr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function hf(r,t,e,i){let n=qx(i);switch(e){case Ku:return r*t;case ao:return r*t/n.components*n.byteLength;case ac:return r*t/n.components*n.byteLength;case Ms:return r*t*2/n.components*n.byteLength;case lc:return r*t*2/n.components*n.byteLength;case $u:return r*t*3/n.components*n.byteLength;case Zi:return r*t*4/n.components*n.byteLength;case cc:return r*t*4/n.components*n.byteLength;case xa:case _a:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ya:case va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uc:case dc:return Math.max(r,16)*Math.max(t,8)/4;case hc:case fc:return Math.max(r,8)*Math.max(t,8)/2;case pc:case mc:case xc:case _c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case gc:case Ma:case yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case bc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case wc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Dc:case Fc:case Uc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oc:case Bc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sa:case kc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(r){switch(r){case ii:case Wu:return{byteLength:1,components:1};case oo:case Xu:case cn:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case ln:case sc:case ki:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jm(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Yx(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,Zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,n_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a_=`#ifdef USE_IRIDESCENCE
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
#endif`,l_=`#ifdef USE_BUMPMAP
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,__=`vec3 transformedNormal = objectNormal;
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
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D_=`#ifdef USE_GRADIENTMAP
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
}`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k_=`#ifdef USE_ENVMAP
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
#endif`,z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W_=`PhysicalMaterial material;
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
#endif`,X_=`uniform sampler2D dfgLUT;
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
}`,q_=`
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
#endif`,Y_=`#if defined( RE_IndirectDiffuse )
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ay=`#if defined( USE_MORPHCOLORS )
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
#endif`,ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,my=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gy=`#ifdef USE_NORMALMAP
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
#endif`,xy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,by=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dy=`#ifdef USE_SKINNING
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
#endif`,Fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,By=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#ifdef USE_TRANSMISSION
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ky=`uniform sampler2D t2D;
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
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform float backgroundBlurriness;
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
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
}`,tv=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,iv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`uniform float scale;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,uv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,pv=`#define NORMAL
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
}`,mv=`#define PHONG
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
}`,gv=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,_v=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,vv=`#define TOON
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
}`,Mv=`uniform float size;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Kx,alphahash_pars_fragment:$x,alphamap_fragment:Zx,alphamap_pars_fragment:Jx,alphatest_fragment:jx,alphatest_pars_fragment:Qx,aomap_fragment:t_,aomap_pars_fragment:e_,batching_pars_vertex:i_,batching_vertex:n_,begin_vertex:s_,beginnormal_vertex:r_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:u_,clipping_planes_vertex:f_,color_fragment:d_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:x_,defaultnormal_vertex:__,displacementmap_pars_vertex:y_,displacementmap_vertex:v_,emissivemap_fragment:M_,emissivemap_pars_fragment:S_,colorspace_fragment:b_,colorspace_pars_fragment:w_,envmap_fragment:T_,envmap_common_pars_fragment:E_,envmap_pars_fragment:A_,envmap_pars_vertex:R_,envmap_physical_pars_fragment:k_,envmap_vertex:C_,fog_vertex:P_,fog_pars_vertex:I_,fog_fragment:L_,fog_pars_fragment:N_,gradientmap_pars_fragment:D_,lightmap_pars_fragment:F_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:O_,lights_pars_begin:B_,lights_toon_fragment:z_,lights_toon_pars_fragment:H_,lights_phong_fragment:V_,lights_phong_pars_fragment:G_,lights_physical_fragment:W_,lights_physical_pars_fragment:X_,lights_fragment_begin:q_,lights_fragment_maps:Y_,lights_fragment_end:K_,lightprobes_pars_fragment:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:j_,logdepthbuf_vertex:Q_,map_fragment:ty,map_pars_fragment:ey,map_particle_fragment:iy,map_particle_pars_fragment:ny,metalnessmap_fragment:sy,metalnessmap_pars_fragment:ry,morphinstance_vertex:oy,morphcolor_vertex:ay,morphnormal_vertex:ly,morphtarget_pars_vertex:cy,morphtarget_vertex:hy,normal_fragment_begin:uy,normal_fragment_maps:fy,normal_pars_fragment:dy,normal_pars_vertex:py,normal_vertex:my,normalmap_pars_fragment:gy,clearcoat_normal_fragment_begin:xy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:yy,iridescence_pars_fragment:vy,opaque_fragment:My,packing:Sy,premultiplied_alpha_fragment:by,project_vertex:wy,dithering_fragment:Ty,dithering_pars_fragment:Ey,roughnessmap_fragment:Ay,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:Py,shadowmap_vertex:Iy,shadowmask_pars_fragment:Ly,skinbase_vertex:Ny,skinning_pars_vertex:Dy,skinning_vertex:Fy,skinnormal_vertex:Uy,specularmap_fragment:Oy,specularmap_pars_fragment:By,tonemapping_fragment:ky,tonemapping_pars_fragment:zy,transmission_fragment:Hy,transmission_pars_fragment:Vy,uv_pars_fragment:Gy,uv_pars_vertex:Wy,uv_vertex:Xy,worldpos_vertex:qy,background_vert:Yy,background_frag:Ky,backgroundCube_vert:$y,backgroundCube_frag:Zy,cube_vert:Jy,cube_frag:jy,depth_vert:Qy,depth_frag:tv,distance_vert:ev,distance_frag:iv,equirect_vert:nv,equirect_frag:sv,linedashed_vert:rv,linedashed_frag:ov,meshbasic_vert:av,meshbasic_frag:lv,meshlambert_vert:cv,meshlambert_frag:hv,meshmatcap_vert:uv,meshmatcap_frag:fv,meshnormal_vert:dv,meshnormal_frag:pv,meshphong_vert:mv,meshphong_frag:gv,meshphysical_vert:xv,meshphysical_frag:_v,meshtoon_vert:yv,meshtoon_frag:vv,points_vert:Mv,points_frag:Sv,shadow_vert:bv,shadow_frag:wv,sprite_vert:Tv,sprite_frag:Ev},gt={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},bn={basic:{uniforms:pi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:pi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:pi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:pi([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:pi([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new At(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:pi([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:pi([gt.points,gt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:pi([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:pi([gt.common,gt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:pi([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:pi([gt.sprite,gt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:pi([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:pi([gt.lights,gt.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};bn.physical={uniforms:pi([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Vc={r:0,b:0,g:0},Av=new yt,Qm=new Bt;Qm.set(-1,0,0,0,1,0,0,0,1);function Rv(r,t,e,i,n,s){let o=new At(0),a=n===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let v=_.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(_){let M=!1,v=d(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new de(new _s(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:dr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==fe,(h!==v||u!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new de(new Xn(2,2),new Ve({name:"BackgroundMaterial",uniforms:dr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Vc,af(r)),e.buffers.color.setClear(Vc.r,Vc.g,Vc.b,M,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Cv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null),s=n,o=!1;function a(P,C,D,I,U){let k=!1,V=u(P,I,D,C);s!==V&&(s=V,c(s.object)),k=d(P,I,D,U),k&&p(P,I,D,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(P,C,D,I),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function u(P,C,D,I){let U=I.wireframe===!0,k=i[C.id];k===void 0&&(k={},i[C.id]=k);let V=P.isInstancedMesh===!0?P.id:0,tt=k[V];tt===void 0&&(tt={},k[V]=tt);let W=tt[D.id];W===void 0&&(W={},tt[D.id]=W);let Q=W[U];return Q===void 0&&(Q=f(l()),W[U]=Q),Q}function f(P){let C=[],D=[],I=[];for(let U=0;U<e;U++)C[U]=0,D[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:I,object:P,attributes:{},index:null}}function d(P,C,D,I){let U=s.attributes,k=C.attributes,V=0,tt=D.getAttributes();for(let W in tt)if(tt[W].location>=0){let et=U[W],xt=k[W];if(xt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),et===void 0||et.attribute!==xt||xt&&et.data!==xt.data)return!0;V++}return s.attributesNum!==V||s.index!==I}function p(P,C,D,I){let U={},k=C.attributes,V=0,tt=D.getAttributes();for(let W in tt)if(tt[W].location>=0){let et=k[W];et===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let xt={};xt.attribute=et,et&&et.data&&(xt.data=et.data),U[W]=xt,V++}s.attributes=U,s.attributesNum=V,s.index=I}function x(){let P=s.newAttributes;for(let C=0,D=P.length;C<D;C++)P[C]=0}function m(P){g(P,0)}function g(P,C){let D=s.newAttributes,I=s.enabledAttributes,U=s.attributeDivisors;D[P]=1,I[P]===0&&(r.enableVertexAttribArray(P),I[P]=1),U[P]!==C&&(r.vertexAttribDivisor(P,C),U[P]=C)}function _(){let P=s.newAttributes,C=s.enabledAttributes;for(let D=0,I=C.length;D<I;D++)C[D]!==P[D]&&(r.disableVertexAttribArray(D),C[D]=0)}function M(P,C,D,I,U,k,V){V===!0?r.vertexAttribIPointer(P,C,D,U,k):r.vertexAttribPointer(P,C,D,I,U,k)}function v(P,C,D,I){x();let U=I.attributes,k=D.getAttributes(),V=C.defaultAttributeValues;for(let tt in k){let W=k[tt];if(W.location>=0){let Q=U[tt];if(Q===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let et=Q.normalized,xt=Q.itemSize,It=t.get(Q);if(It===void 0)continue;let K=It.buffer,at=It.type,vt=It.bytesPerElement,Ct=at===r.INT||at===r.UNSIGNED_INT||Q.gpuType===sc;if(Q.isInterleavedBufferAttribute){let pt=Q.data,Ot=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,Re=Q.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Et=0;Et<W.locationSize;Et++)g(W.location+Et,pt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Et=0;Et<W.locationSize;Et++)m(W.location+Et);r.bindBuffer(r.ARRAY_BUFFER,K);for(let Et=0;Et<W.locationSize;Et++)M(W.location+Et,xt/W.locationSize,at,et,Ot*vt,(Re+xt/W.locationSize*Et)*vt,Ct)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)g(W.location+pt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);r.bindBuffer(r.ARRAY_BUFFER,K);for(let pt=0;pt<W.locationSize;pt++)M(W.location+pt,xt/W.locationSize,at,et,xt*vt,xt/W.locationSize*pt*vt,Ct)}}else if(V!==void 0){let et=V[tt];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(W.location,et);break;case 3:r.vertexAttrib3fv(W.location,et);break;case 4:r.vertexAttrib4fv(W.location,et);break;default:r.vertexAttrib1fv(W.location,et)}}}}_()}function S(){A();for(let P in i){let C=i[P];for(let D in C){let I=C[D];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;let C=i[P.id];for(let D in C){let I=C[D];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}}delete i[P.id]}function y(P){for(let C in i){let D=i[C];for(let I in D){let U=D[I];if(U[P.id]===void 0)continue;let k=U[P.id];for(let V in k)h(k[V].object),delete k[V];delete U[P.id]}}}function b(P){for(let C in i){let D=i[C],I=P.isInstancedMesh===!0?P.id:0,U=D[I];if(U!==void 0){for(let k in U){let V=U[k];for(let tt in V)h(V[tt].object),delete V[tt];delete U[k]}delete D[I],Object.keys(D).length===0&&delete i[C]}}}function A(){R(),o=!0,s!==n&&(s=n,c(s.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Pv(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Iv(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==Zi&&i.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let b=y===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ii&&y!==ki&&!b&&i.convert(y)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:w}}function Lv(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Si,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let _=s?0:i,M=_*4,v=g.clippingState||null;l.value=v,v=h(p,f,M,d);for(let S=0;S!==M;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Aa=class extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new na(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new _s(5,5,5),s=new Ve({name:"CubemapFromEquirect",uniforms:dr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:lr});s.uniforms.tEquirect.value=e;let o=new de(n,s),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=be),new io(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},Im=256,Nv=3,Dv=20,t0=256,e0=16,Fv=3,Uv=new L,Ov=new At,Wc=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new io(1,10,null),this._boxMesh=new de(new _s(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=Uv}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Ov));let m=new io(i,n,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Im,sf(t))}_fromTexture(t,e){t.mapping===hr||t.mapping===so?this._setSize(t.image.length===0?Im:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Lm(t,!1,!1),i=Math.log2(t)-Nv;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Lm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===hr||t.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Bv(),this._integrationMaterial=kv());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/e0);for(let o=0;o<=i;o++){let a=r.lodToRoughness(o,i);if(o>i-Fv)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(t0*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=zv());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function Lm(r,t,e){return new Aa(r,{minFilter:ei,generateMipmaps:t,type:cn,colorSpace:bi,depthBuffer:e})}function Ra(r,t,e){return new Ve({name:r,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Ke,blending:lr,depthTest:!1,depthWrite:!1})}function Bv(){return Ra("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${t0}u

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
	`)}function kv(){return Ra("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:e0}},`

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
	`)}function zv(){return Ra("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Dv}
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
	`)}function Nm(){return Ra("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dm(){return Ra("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hv(r){let t=new WeakMap,e=new WeakMap,i=null;function n(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===ec||d===ic)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Aa(p.height);return x.fromEquirectangularTexture(r,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===ec||d===ic,x=d===hr||d===so;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Wc(r)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Wc(r)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===ec?f.mapping=hr:d===ic&&(f.mapping=so),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function Vv(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Ys("WebGLRenderer: "+i+" extension not supported."),n}}}function Gv(r,t,e,i){let n={},s=new WeakMap,o=new FinalizationRegistry(p=>delete n[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete n[p.id],o.unregister(p);let x=s.get(p);x&&(t.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],r.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?ta:Qo,v=new M(Math.ceil(_/3)*6,1),S=v.array;if(x!==null){let y=x.array;g=x.version;for(let b=0,A=0;b<_;b+=3){let R=y[b+0],P=y[b+1],C=y[b+2];S[A++]=R,S[A++]=P,S[A++]=P,S[A++]=C,S[A++]=C,S[A++]=R}}else{g=m.version;for(let y=0,b=0;y<_;y+=3){let A=y+0,R=y+1,P=y+2;S[b++]=A,S[b++]=R,S[b++]=R,S[b++]=P,S[b++]=P,S[b++]=A}}v.version=g;let w=s.get(p);w&&t.remove(w),s.set(p,v)}function f(p){let x=s.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return s.get(p)}function d(){for(let p in n){let x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Wv(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(i,f,s,u*o),e.update(f,i,1)}function c(u,f,d){d!==0&&(r.drawElementsInstanced(i,f,s,u*o,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qv(r,t,e){let i=new WeakMap,n=new oe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let A=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*u),y=new Js(w,v,S,u);y.type=ki,y.needsUpdate=!0;let b=M*4;for(let R=0;R<u;R++){let P=m[R],C=g[R],D=_[R],I=v*S*4*R;for(let U=0;U<P.count;U++){let k=U*b;d===!0&&(n.fromBufferAttribute(P,U),w[I+k+0]=n.x,w[I+k+1]=n.y,w[I+k+2]=n.z,w[I+k+3]=0),p===!0&&(n.fromBufferAttribute(C,U),w[I+k+4]=n.x,w[I+k+5]=n.y,w[I+k+6]=n.z,w[I+k+7]=0),x===!0&&(n.fromBufferAttribute(D,U),w[I+k+8]=n.x,w[I+k+9]=n.y,w[I+k+10]=n.z,w[I+k+11]=D.itemSize===4?n.w:1)}}f={count:u,texture:y,size:new Nt(v,S)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Yv(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Kv={[Uu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function $v(r,t,e,i,n,s){let o=new wi(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ce;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let u=new Hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new de(h,u),d=new Zn(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,_=null,M=[],v=!1;this.setSize=function(S,w){o.setSize(S,w),a!==null&&a.setSize(S,w),l!==null&&l.setSize(S,w);for(let y=0;y<M.length;y++){let b=M[y];b.setSize&&b.setSize(S,w)}},this.setEffects=function(S){M=S,v=M.length>0&&M[0].isRenderPass===!0;let w=o.width,y=o.height;M.length>0&&a===null&&(a=new wi(w,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new wi(w,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&M.some(A=>A.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Wn(w,y),s===!0&&(c.format=Qn,c.type=fr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let A=0;A<M.length;A++){let R=M[A];R.setSize&&R.setSize(w,y),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(S,w){if(m||S.toneMapping===vn&&M.length===0)return!1;if(_=w,w!==null){let y=w.width,b=w.height;(o.width!==y||o.height!==b)&&this.setSize(y,b)}return v===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=vn,!0},this.hasRenderPass=function(){return v},this.end=function(S,w){S.toneMapping=g,m=!0;let y=o,b=a;for(let A=0;A<M.length;A++){let R=M[A];R.enabled!==!1&&(R.render(S,b,y,w),R.needsSwap!==!1&&(y=b,b=b===a?l:a))}if(p!==S.outputColorSpace||x!==S.toneMapping){p=S.outputColorSpace,x=S.toneMapping,u.defines={},Yt.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");let A=Kv[x];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(f,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var i0=new ze,n0=new Wn(1,1),s0=new sa(1),r0=new Js,o0=new Ol,a0=new na,Fm=[],Um=[],Om=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function ho(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Fm[n];if(s===void 0&&(s=new Float32Array(n),Fm[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function $e(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Yc(r,t){let e=Um[t];e===void 0&&(e=new Int32Array(t),Um[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Zv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function Qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function tM(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;km.set(i),r.uniformMatrix2fv(this.addr,!1,km),Ze(e,i)}}function eM(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Bm.set(i),r.uniformMatrix3fv(this.addr,!1,Bm),Ze(e,i)}}function iM(r,t){let e=this.cache,i=t.elements;if(i===void 0){if($e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,i))return;Om.set(i),r.uniformMatrix4fv(this.addr,!1,Om),Ze(e,i)}}function nM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function sM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function rM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function oM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function aM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function lM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function cM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function hM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function Kc(r){return r.version===0&&(r.compareFunction=Qu,r.needsUpdate=!0),r}function uM(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=Kc(n0):s=i0,e.setTexture2D(t||s,n)}function fM(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||o0,n)}function dM(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Kc(s0):s=a0,e.setTextureCube(t||s,n)}function pM(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||r0,n)}function mM(r){switch(r){case 5126:return Zv;case 35664:return Jv;case 35665:return jv;case 35666:return Qv;case 35674:return tM;case 35675:return eM;case 35676:return iM;case 5124:case 35670:return nM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(r,t){r.uniform1fv(this.addr,t)}function xM(r,t){let e=ho(t,this.size,2);r.uniform2fv(this.addr,e)}function _M(r,t){let e=ho(t,this.size,3);r.uniform3fv(this.addr,e)}function yM(r,t){let e=ho(t,this.size,4);r.uniform4fv(this.addr,e)}function vM(r,t){let e=ho(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function MM(r,t){let e=ho(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function SM(r,t){let e=ho(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bM(r,t){r.uniform1iv(this.addr,t)}function wM(r,t){r.uniform2iv(this.addr,t)}function TM(r,t){r.uniform3iv(this.addr,t)}function EM(r,t){r.uniform4iv(this.addr,t)}function AM(r,t){r.uniform1uiv(this.addr,t)}function RM(r,t){r.uniform2uiv(this.addr,t)}function CM(r,t){r.uniform3uiv(this.addr,t)}function PM(r,t){r.uniform4uiv(this.addr,t)}function IM(r,t,e){let i=this.cache,n=t.length,s=Yc(e,n);$e(i,s)||(r.uniform1iv(this.addr,s),Ze(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Kc(n0):o=i0;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function LM(r,t,e){let i=this.cache,n=t.length,s=Yc(e,n);$e(i,s)||(r.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||o0,s[o])}function NM(r,t,e){let i=this.cache,n=t.length,s=Yc(e,n);$e(i,s)||(r.uniform1iv(this.addr,s),Ze(i,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=Kc(s0):o=a0;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,s[a])}function DM(r,t,e){let i=this.cache,n=t.length,s=Yc(e,n);$e(i,s)||(r.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||r0,s[o])}function FM(r){switch(r){case 5126:return gM;case 35664:return xM;case 35665:return _M;case 35666:return yM;case 35674:return vM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return bM;case 35667:case 35671:return wM;case 35668:case 35672:return TM;case 35669:case 35673:return EM;case 5125:return AM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return DM}}var _f=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mM(e.type)}},yf=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FM(e.type)}},vf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},gf=/(\w+)(\])?(\[|\.)?/g;function zm(r,t){r.seq.push(t),r.map[t.id]=t}function UM(r,t,e){let i=r.name,n=i.length;for(gf.lastIndex=0;;){let s=gf.exec(i),o=gf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){zm(e,c===void 0?new _f(a,r,t):new yf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new vf(a),zm(e,u)),e=u}}}var co=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);UM(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Hm(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var OM=37297,BM=0;function kM(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Vm=new Bt;function zM(r){Yt._getMatrix(Vm,Yt.workingColorSpace,r);let t=`mat3( ${Vm.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(r)){case $o:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gm(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+kM(r.getShaderSource(t),a)}else return s}function HM(r,t){let e=zM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var VM={[Uu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[ku]:"ACESFilmic",[Hu]:"AgX",[Vu]:"Neutral",[zu]:"Custom"};function GM(r,t){let e=VM[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gc=new L;function WM(){Yt.getLuminanceCoefficients(Gc);let r=Gc.x.toFixed(4),t=Gc.y.toFixed(4),e=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function qM(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function YM(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ea(r){return r!==""}function Wm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(r){return r.replace(KM,$M)}function $M(r,t){let e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Mf(e)}var ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(r){return r.replace(ZM,JM)}function JM(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ym(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var jM={[ar]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function QM(r){return jM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tS={[so]:"ENVMAP_MODE_REFRACTION"};function eS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":tS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iS={[tc]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};function nS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":iS[r.combine]||"ENVMAP_BLENDING_NONE"}function sS(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=QM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=eS(e),u=nS(e),f=XM(e),d=qM(s),p=n.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ea).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ea).join(`
`),m.length>0&&(m+=`
`)):(x=[Ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),m=[Ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==vn?GM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,HM("linearToOutputTexel",e.outputColorSpace),WM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Mf(o),o=Wm(o,e),o=Xm(o,e),a=Mf(a),a=Wm(a,e),a=Xm(a,e),o=qm(o),a=qm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+x+o,M=g+m+a,v=Hm(n,n.VERTEX_SHADER,_),S=Hm(n,n.FRAGMENT_SHADER,M);n.attachShader(p,v),n.attachShader(p,S),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function w(R){if(r.debug.checkShaderErrors){let P=n.getProgramInfoLog(p)||"",C=n.getShaderInfoLog(v)||"",D=n.getShaderInfoLog(S)||"",I=P.trim(),U=C.trim(),k=D.trim(),V=!0,tt=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,v,S);else{let W=Gm(n,v,"vertex"),Q=Gm(n,S,"fragment");Ut("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+Q)}else I!==""?Rt("WebGLProgram: Program Info Log:",I):(U===""||k==="")&&(tt=!1);tt&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:U,prefix:x},fragmentShader:{log:k,prefix:m}})}n.deleteShader(v),n.deleteShader(S),y=new co(n,p),b=YM(n,p)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(p,OM)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=S,this}var rS=0,Sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bf(t),e.set(t,i)),i}},bf=class{constructor(t){this.id=rS++,this.code=t,this.usedTimes=0}};function oS(r){return r===Ms||r===Ma||r===Sa}function aS(r,t,e,i,n,s){let o=new Jo,a=new Sf,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,A,R,P,C){let D=R.fog,I=P.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=t.get(y.envMap||U,k),tt=f[y.type],W=i.precision;y.precision!==null&&(W=i.getMaxPrecision(y.precision),W!==y.precision&&Rt("WebGLProgram.getParameters:",y.precision,"not supported, using",W,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,et=Q!==void 0?Q.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let It,K,at,vt;if(tt){let mt=bn[tt];It=mt.vertexShader,K=mt.fragmentShader}else{It=y.vertexShader,K=y.fragmentShader;let mt=a.getVertexShaderStage(y),me=a.getFragmentShaderStage(y);a.update(y,mt,me),at=mt.id,vt=me.id}let Ct=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Ot=P.isInstancedMesh===!0,Re=P.isBatchedMesh===!0,Et=!!y.map,Xt=!!y.matcap,Jt=!!V,zt=Jt&&V.isPMREMTexture===!0,Ne=!!y.aoMap,De=!!y.lightMap,Ye=!!y.bumpMap&&y.wireframe===!1,ie=!!y.normalMap,li=!!y.displacementMap,Te=!!y.emissiveMap,Oe=!!y.metalnessMap,Ci=!!y.roughnessMap,yi=y.anisotropy>0,B=y.clearcoat>0,Di=y.diffuseRoughness>0,_e=y.dispersion>0,rt=y.retroreflectivity>0,j=y.iridescence>0,$t=y.sheen>0,St=y.transmission>0,Dt=yi&&!!y.anisotropyMap,N=B&&!!y.clearcoatMap,T=B&&!!y.clearcoatNormalMap,z=B&&!!y.clearcoatRoughnessMap,it=Di&&!!y.diffuseRoughnessMap,J=j&&!!y.iridescenceMap,st=j&&!!y.iridescenceThicknessMap,lt=$t&&!!y.sheenColorMap,q=$t&&!!y.sheenRoughnessMap,$=!!y.specularMap,ct=!!y.specularColorMap,F=!!y.specularIntensityMap,Z=St&&!!y.transmissionMap,Y=St&&!!y.thicknessMap,ut=!!y.gradientMap,ot=!!y.alphaMap,ht=y.alphaTest>0,Pt=!!y.alphaHash,qt=!!y.extensions,nt=vn;y.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(nt=r.toneMapping);let Lt=zt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Wt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:It,fragmentShader:K,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:W,batching:Re,batchingColor:Re&&P._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&P.instanceColor!==null,instancingMorph:Ot&&P.morphTexture!==null,outputColorSpace:Ct===null?r.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:Xt,envMap:Jt,envMapMode:Jt&&V.mapping,envMapPMREM:zt,envMapMaxLod:zt?Lt.length-1:null,envMapSize:zt?Lt[0].width:null,aoMap:Ne,lightMap:De,bumpMap:Ye,normalMap:ie,displacementMap:li,emissiveMap:Te,normalMapObjectSpace:ie&&y.normalMapType===gm,normalMapTangentSpace:ie&&y.normalMapType===wa,packedNormalMap:ie&&y.normalMapType===wa&&oS(y.normalMap.format),metalnessMap:Oe,roughnessMap:Ci,anisotropy:yi,anisotropyMap:Dt,clearcoat:B,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:z,diffuseRoughness:Di,diffuseRoughnessMap:it,dispersion:_e,retroreflection:rt,iridescence:j,iridescenceMap:J,iridescenceThicknessMap:st,sheen:$t,sheenColorMap:lt,sheenRoughnessMap:q,specularMap:$,specularColorMap:ct,specularIntensityMap:F,transmission:St,transmissionMap:Z,thicknessMap:Y,gradientMap:ut,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Pt,combine:y.combine,mapUv:Et&&d(y.map.channel),aoMapUv:Ne&&d(y.aoMap.channel),lightMapUv:De&&d(y.lightMap.channel),bumpMapUv:Ye&&d(y.bumpMap.channel),normalMapUv:ie&&d(y.normalMap.channel),displacementMapUv:li&&d(y.displacementMap.channel),emissiveMapUv:Te&&d(y.emissiveMap.channel),metalnessMapUv:Oe&&d(y.metalnessMap.channel),roughnessMapUv:Ci&&d(y.roughnessMap.channel),anisotropyMapUv:Dt&&d(y.anisotropyMap.channel),clearcoatMapUv:N&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:J&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(y.sheenRoughnessMap.channel),specularMapUv:$&&d(y.specularMap.channel),specularColorMapUv:ct&&d(y.specularColorMap.channel),specularIntensityMapUv:F&&d(y.specularIntensityMap.channel),transmissionMapUv:Z&&d(y.transmissionMap.channel),thicknessMapUv:Y&&d(y.thicknessMap.channel),alphaMapUv:ot&&d(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ie||yi),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(Et||ot),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&ie===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.filter(mt=>mt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:Te&&y.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Le,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||Re)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function x(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)b.push(A),b.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(m(b,y),g(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapPMREM),y.push(b.envMapMaxLod),y.push(b.envMapSize),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.diffuseRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.numLightProbeGrids),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function g(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function _(y){let b=f[y.type],A;if(b){let R=bn[b];A=Rm.clone(R.uniforms)}else A=y.uniforms;return A}function M(y,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new sS(r,b,y,n),c.push(A),h.set(b,A)),A}function v(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:M,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:w}}function lS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function cS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Km(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $m(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let _=r[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},r[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=m,_.group=g),t++,_}function l(f,d,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let M=a(f,d,p,x,m,g);p.transmission>0?i.push(M):p.transparent===!0?n.push(M):e.push(M)}function c(f,d,p,x,m,g){let _=a(f,d,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||cS),i.length>1&&i.sort(d||Km),n.length>1&&n.sort(d||Km)}function u(){for(let f=t,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function hS(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new $m,r.set(i,[o])):n>=s.length?(o=new $m,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function uS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new At};break;case"SpotLight":e={position:new L,direction:new L,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function fS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var dS=0;function pS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function mS(r){let t=new uS,e=fS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,s=new yt,o=new yt;function a(c){let h=0,u=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,_=0,M=0,v=0,S=0,w=0,y=0,b=0,A=0,R=0;c.sort(pS);for(let C=0,D=c.length;C<D;C++){let I=c[C],U=I.color,k=I.intensity,V=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ms?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*k,u+=U.g*k,f+=U.b*k;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],k);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=et,i.sunShadowMap[p]=tt;let xt=Q.getViewportCount();for(let It=0;It<xt;It++)i.sunShadowMatrix[x+It]=Q.getMatrix(It),i.sunShadowCascade[x+It]=Q._cascadeData[It];x+=xt,p++}i.sun[d]=W,d++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.directionalShadow[m]=et,i.directionalShadowMap[m]=tt,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;let Q=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,Q.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,I.castShadow){let et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,i.spotShadow[_]=et,i.spotShadowMap[_]=tt,y++}_++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(U).multiplyScalar(k),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=W,M++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,et=e.get(I);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,i.pointShadow[g]=et,i.pointShadowMap[g]=tt,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(k),W.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[v]=W,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let P=i.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=R,i.version=dS++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let v=c[_];if(v.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function Zm(r){let t=new mS(r),e=[],i=[],n=[];function s(u){h.camera=u,e.length=0,i.length=0,n.length=0}function o(u){u.isLightProbeGrid?n.push(u):e.push(u)}function a(u){i.push(u)}function l(){t.setup(e),n.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gS(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new Zm(r),t.set(n,[a])):s>=o.length?(a=new Zm(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var xS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`,yS=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],vS=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Jm=new yt,Ta=new L,xf=new L;function MS(r,t,e){let i=new gs,n=new Nt,s=new Nt,o=new oe,a=new Vl,l=new Gl,c={},h=e.maxTextureSize,u={[Oi]:Ke,[Ke]:Oi,[Le]:Le},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:xS,fragmentShader:_S}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ce;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let g=this.type;this.render=function(w,y,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Gp&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);let A=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),C=r.state;C.setBlending(lr),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let D=g!==this.type;D&&y.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(U=>U.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,U=w.length;I<U;I++){let k=w[I],V=k.shadow;if(V===void 0){Rt("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);let tt=V.getFrameExtents();n.multiply(tt),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/tt.x),n.x=s.x*tt.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/tt.y),n.y=s.y*tt.y,V.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||D===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===no){if(k.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new wi(n.x,n.y,{format:Ms,type:cn,minFilter:be,magFilter:be,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new Wn(n.x,n.y,ki),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=Hn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke}else k.isPointLight?(V.map=new Aa(n.x),V.map.depthTexture=new sa(n.x,ln)):(V.map=new wi(n.x,n.y),V.map.depthTexture=new Wn(n.x,n.y,ln)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=Hn,this.type===ar?(V.map.depthTexture.compareFunction=W?ju:Ju,V.map.depthTexture.minFilter=be,V.map.depthTexture.magFilter=be):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==n.x||V.map.height!==n.y)&&V.map.setSize(n.x,n.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,b);let et=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let xt=0;xt<Q;xt++){let It=V.getCamera(xt);if(k.isPointLight){let K=V.camera,at=V.matrix,vt=k.distance||K.far;vt!==K.far&&(K.far=vt,K.updateProjectionMatrix()),Ta.setFromMatrixPosition(k.matrixWorld),K.position.copy(Ta),xf.copy(K.position),xf.add(yS[xt]),K.up.copy(vS[xt]),K.lookAt(xf),K.updateMatrixWorld(),at.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Jm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Jm,K.coordinateSystem,K.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(V.map),r.clear());let K=V.getViewport(xt);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),C.viewport(o)}i=V.getFrustum(xt),v(y,b,It,k,et,this.type)}V.isPointLightShadow!==!0&&this.type===no&&_(V,b),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,R,P)};function _(w,y){let b=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new wi(n.x,n.y,{format:Ms,type:cn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,b,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,b,d,x,null)}function M(w,y,b,A){let R=null,P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=b.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let C=R.uuid,D=y.uuid,I=c[C];I===void 0&&(I={},c[C]=I);let U=I[D];U===void 0&&(U=R.clone(),I[D]=U,y.addEventListener("dispose",S)),R=U}if(R.visible=y.visible,R.wireframe=y.wireframe,A===no?R.side=y.shadowSide!==null?y.shadowSide:y.side:R.side=y.shadowSide!==null?y.shadowSide:u[y.side],R.alphaMap=y.alphaMap,R.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,R.map=y.map,R.clipShadows=y.clipShadows,R.clippingPlanes=y.clippingPlanes,R.clipIntersection=y.clipIntersection,R.displacementMap=y.displacementMap,R.displacementScale=y.displacementScale,R.displacementBias=y.displacementBias,R.wireframeLinewidth=y.wireframeLinewidth,R.linewidth=y.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let C=r.properties.get(R);C.light=b}return R}function v(w,y,b,A,R,P){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===no)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),U=w.material;if(Array.isArray(U)){let k=I.groups;for(let V=0,tt=k.length;V<tt;V++){let W=k[V],Q=U[W.materialIndex];if(Q&&Q.visible){let et=M(w,Q,A,P);w.onBeforeShadow(r,w,y,b,I,et,W),r.renderBufferDirect(b,null,I,et,w,W),w.onAfterShadow(r,w,y,b,I,et,W)}}}else if(U.visible){let k=M(w,U,A,P);w.onBeforeShadow(r,w,y,b,I,k,null),r.renderBufferDirect(b,null,I,k,w,null),w.onAfterShadow(r,w,y,b,I,k,null)}}let D=w.children;for(let I=0,U=D.length;I<U;I++)v(D[I],y,b,A,R,P)}function S(w){w.target.removeEventListener("dispose",S);for(let b in c){let A=c[b],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function SS(r,t){function e(){let F=!1,Z=new oe,Y=null,ut=new oe(0,0,0,0);return{setMask:function(ot){Y!==ot&&!F&&(r.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){F=ot},setClear:function(ot,ht,Pt,qt,nt){nt===!0&&(ot*=qt,ht*=qt,Pt*=qt),Z.set(ot,ht,Pt,qt),ut.equals(Z)===!1&&(r.clearColor(ot,ht,Pt,qt),ut.copy(Z))},reset:function(){F=!1,Y=null,ut.set(-1,0,0,0)}}}function i(){let F=!1,Z=!1,Y=null,ut=null,ot=null;return{setReversed:function(ht){if(Z!==ht){let Pt=t.get("EXT_clip_control");ht?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Z=ht;let qt=ot;ot=null,this.setClear(qt)}},getReversed:function(){return Z},setTest:function(ht){ht?pt(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!F&&(r.depthMask(ht),Y=ht)},setFunc:function(ht){if(Z&&(ht=Em[ht]),ut!==ht){switch(ht){case Rl:r.depthFunc(r.NEVER);break;case Cl:r.depthFunc(r.ALWAYS);break;case Pl:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case Il:r.depthFunc(r.EQUAL);break;case Ll:r.depthFunc(r.GEQUAL);break;case Nl:r.depthFunc(r.GREATER);break;case Dl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=ht}},setLocked:function(ht){F=ht},setClear:function(ht){ot!==ht&&(ot=ht,Z&&(ht=1-ht),r.clearDepth(ht))},reset:function(){F=!1,Y=null,ut=null,ot=null,Z=!1}}}function n(){let F=!1,Z=null,Y=null,ut=null,ot=null,ht=null,Pt=null,qt=null,nt=null;return{setTest:function(Lt){F||(Lt?pt(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(Lt){Z!==Lt&&!F&&(r.stencilMask(Lt),Z=Lt)},setFunc:function(Lt,Wt,mt){(Y!==Lt||ut!==Wt||ot!==mt)&&(r.stencilFunc(Lt,Wt,mt),Y=Lt,ut=Wt,ot=mt)},setOp:function(Lt,Wt,mt){(ht!==Lt||Pt!==Wt||qt!==mt)&&(r.stencilOp(Lt,Wt,mt),ht=Lt,Pt=Wt,qt=mt)},setLocked:function(Lt){F=Lt},setClear:function(Lt){nt!==Lt&&(r.clearStencil(Lt),nt=Lt)},reset:function(){F=!1,Z=null,Y=null,ut=null,ot=null,ht=null,Pt=null,qt=null,nt=null}}}let s=new e,o=new i,a=new n,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,S=null,w=null,y=null,b=new At(0,0,0),A=0,R=!1,P=null,C=null,D=null,I=null,U=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=tt>=2);let Q=null,et={},xt=r.getParameter(r.SCISSOR_BOX),It=r.getParameter(r.VIEWPORT),K=new oe().fromArray(xt),at=new oe().fromArray(It);function vt(F,Z,Y,ut){let ot=new Uint8Array(4),ht=r.createTexture();r.bindTexture(F,ht),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pt=0;Pt<Y;Pt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(Z+Pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return ht}let Ct={};Ct[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),Ct[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ct[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(r.DEPTH_TEST),o.setFunc(Hr),Ye(!1),ie(Iu),pt(r.CULL_FACE),Ne(lr);function pt(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Ot(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Re(F,Z){return f[F]!==Z?(r.bindFramebuffer(F,Z),f[F]=Z,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Z),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function Et(F,Z){let Y=p,ut=!1;if(F){Y=d.get(Z),Y===void 0&&(Y=[],d.set(Z,Y));let ot=F.textures;if(Y.length!==ot.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ht=0,Pt=ot.length;ht<Pt;ht++)Y[ht]=r.COLOR_ATTACHMENT0+ht;Y.length=ot.length,ut=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,ut=!0);ut&&r.drawBuffers(Y)}function Xt(F){return x!==F?(r.useProgram(F),x=F,!0):!1}let Jt={[cr]:r.FUNC_ADD,[Xp]:r.FUNC_SUBTRACT,[qp]:r.FUNC_REVERSE_SUBTRACT};Jt[Yp]=r.MIN,Jt[Kp]=r.MAX;let zt={[$p]:r.ZERO,[Zp]:r.ONE,[Jp]:r.SRC_COLOR,[Du]:r.SRC_ALPHA,[nm]:r.SRC_ALPHA_SATURATE,[em]:r.DST_COLOR,[Qp]:r.DST_ALPHA,[jp]:r.ONE_MINUS_SRC_COLOR,[Fu]:r.ONE_MINUS_SRC_ALPHA,[im]:r.ONE_MINUS_DST_COLOR,[tm]:r.ONE_MINUS_DST_ALPHA,[sm]:r.CONSTANT_COLOR,[rm]:r.ONE_MINUS_CONSTANT_COLOR,[om]:r.CONSTANT_ALPHA,[am]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(F,Z,Y,ut,ot,ht,Pt,qt,nt,Lt){if(F===lr){m===!0&&(Ot(r.BLEND),m=!1);return}if(m===!1&&(pt(r.BLEND),m=!0),F!==Wp){if(F!==g||Lt!==R){if((_!==cr||S!==cr)&&(r.blendEquation(r.FUNC_ADD),_=cr,S=cr),Lt)switch(F){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bi:r.blendFunc(r.ONE,r.ONE);break;case Lu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",F);break}else switch(F){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lu:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",F);break}M=null,v=null,w=null,y=null,b.set(0,0,0),A=0,g=F,R=Lt}return}ot=ot||Z,ht=ht||Y,Pt=Pt||ut,(Z!==_||ot!==S)&&(r.blendEquationSeparate(Jt[Z],Jt[ot]),_=Z,S=ot),(Y!==M||ut!==v||ht!==w||Pt!==y)&&(r.blendFuncSeparate(zt[Y],zt[ut],zt[ht],zt[Pt]),M=Y,v=ut,w=ht,y=Pt),(qt.equals(b)===!1||nt!==A)&&(r.blendColor(qt.r,qt.g,qt.b,nt),b.copy(qt),A=nt),g=F,R=!1}function De(F,Z){F.side===Le?Ot(r.CULL_FACE):pt(r.CULL_FACE);let Y=F.side===Ke;Z&&(Y=!Y),Ye(Y),F.blending===vs&&F.transparent===!1?Ne(lr):Ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ut=F.stencilWrite;a.setTest(ut),ut&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){P!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),P=F)}function ie(F){F!==Hp?(pt(r.CULL_FACE),F!==C&&(F===Iu?r.cullFace(r.BACK):F===Vp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),C=F}function li(F){F!==D&&(V&&r.lineWidth(F),D=F)}function Te(F,Z,Y){F?(pt(r.POLYGON_OFFSET_FILL),(I!==Z||U!==Y)&&(I=Z,U=Y,o.getReversed()&&(Z=-Z,Y=-Y),r.polygonOffset(Z,Y))):Ot(r.POLYGON_OFFSET_FILL)}function Oe(F){F?pt(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function Ci(F){F===void 0&&(F=r.TEXTURE0+k-1),Q!==F&&(r.activeTexture(F),Q=F)}function yi(F,Z,Y){Y===void 0&&(Q===null?Y=r.TEXTURE0+k-1:Y=Q);let ut=et[Y];ut===void 0&&(ut={type:void 0,texture:void 0},et[Y]=ut),(ut.type!==F||ut.texture!==Z)&&(Q!==Y&&(r.activeTexture(Y),Q=Y),r.bindTexture(F,Z||Ct[F]),ut.type=F,ut.texture=Z)}function B(){let F=et[Q];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Di(){try{r.compressedTexImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function _e(){try{r.compressedTexImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function rt(){try{r.texSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function j(){try{r.texSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function $t(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function St(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function Dt(){try{r.texStorage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function N(){try{r.texStorage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function T(){try{r.texImage2D(...arguments)}catch(F){Ut("WebGLState:",F)}}function z(){try{r.texImage3D(...arguments)}catch(F){Ut("WebGLState:",F)}}function it(F){return u[F]!==void 0?u[F]:r.getParameter(F)}function J(F,Z){u[F]!==Z&&(r.pixelStorei(F,Z),u[F]=Z)}function st(F){K.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function lt(F){at.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),at.copy(F))}function q(F,Z){let Y=c.get(Z);Y===void 0&&(Y=new WeakMap,c.set(Z,Y));let ut=Y.get(F);ut===void 0&&(ut=r.getUniformBlockIndex(Z,F.name),r.uniformBlockBinding(Z,ut,ut),Y.set(F,ut))}function $(F,Z,Y){let ot=c.get(Z).get(F);l[ot]!==Y&&(r.bindBufferBase(r.UNIFORM_BUFFER,ot,Y),l[ot]=Y)}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,et={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,M=null,v=null,S=null,w=null,y=null,b=new At(0,0,0),A=0,R=!1,P=null,C=null,D=null,I=null,U=null,K.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pt,disable:Ot,bindFramebuffer:Re,drawBuffers:Et,useProgram:Xt,setBlending:Ne,setMaterial:De,setFlipSided:Ye,setCullFace:ie,setLineWidth:li,setPolygonOffset:Te,setScissorTest:Oe,activeTexture:Ci,bindTexture:yi,unbindTexture:B,compressedTexImage2D:Di,compressedTexImage3D:_e,texImage2D:T,texImage3D:z,pixelStorei:J,getParameter:it,updateUBOMapping:q,uniformBlockBinding:$,texStorage2D:Dt,texStorage3D:N,texSubImage2D:rt,texSubImage3D:j,compressedTexSubImage2D:$t,compressedTexSubImage3D:St,scissor:st,viewport:lt,reset:ct}}function bS(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,x=new FinalizationRegistry(N=>p.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,T){return m?new OffscreenCanvas(N,T):Wr("canvas")}function _(N,T,z){let it=1,J=Dt(N);if((J.width>z||J.height>z)&&(it=z/Math.max(J.width,J.height)),it<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let st=Math.floor(it*J.width),lt=Math.floor(it*J.height);f===void 0&&(f=g(st,lt));let q=T?g(st,lt):f;return q.width=st,q.height=lt,q.getContext("2d").drawImage(N,0,0,st,lt),Rt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+lt+")."),q}else return"data"in N&&Rt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(N,T,z,it,J,st=!1){if(N!==null){if(r[N]!==void 0)return r[N];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt;it&&(lt=t.get("EXT_texture_norm16"),lt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=T;if(T===r.RED&&(z===r.FLOAT&&(q=r.R32F),z===r.HALF_FLOAT&&(q=r.R16F),z===r.UNSIGNED_BYTE&&(q=r.R8),z===r.UNSIGNED_SHORT&&lt&&(q=lt.R16_EXT),z===r.SHORT&&lt&&(q=lt.R16_SNORM_EXT)),T===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.R8UI),z===r.UNSIGNED_SHORT&&(q=r.R16UI),z===r.UNSIGNED_INT&&(q=r.R32UI),z===r.BYTE&&(q=r.R8I),z===r.SHORT&&(q=r.R16I),z===r.INT&&(q=r.R32I)),T===r.RG&&(z===r.FLOAT&&(q=r.RG32F),z===r.HALF_FLOAT&&(q=r.RG16F),z===r.UNSIGNED_BYTE&&(q=r.RG8),z===r.UNSIGNED_SHORT&&lt&&(q=lt.RG16_EXT),z===r.SHORT&&lt&&(q=lt.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RG8UI),z===r.UNSIGNED_SHORT&&(q=r.RG16UI),z===r.UNSIGNED_INT&&(q=r.RG32UI),z===r.BYTE&&(q=r.RG8I),z===r.SHORT&&(q=r.RG16I),z===r.INT&&(q=r.RG32I)),T===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(q=r.RGB16UI),z===r.UNSIGNED_INT&&(q=r.RGB32UI),z===r.BYTE&&(q=r.RGB8I),z===r.SHORT&&(q=r.RGB16I),z===r.INT&&(q=r.RGB32I)),T===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),z===r.UNSIGNED_INT&&(q=r.RGBA32UI),z===r.BYTE&&(q=r.RGBA8I),z===r.SHORT&&(q=r.RGBA16I),z===r.INT&&(q=r.RGBA32I)),T===r.RGB&&(z===r.UNSIGNED_SHORT&&lt&&(q=lt.RGB16_EXT),z===r.SHORT&&lt&&(q=lt.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),T===r.RGBA){let $=st?$o:Yt.getTransfer(J);z===r.FLOAT&&(q=r.RGBA32F),z===r.HALF_FLOAT&&(q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(q=$===fe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&lt&&(q=lt.RGBA16_EXT),z===r.SHORT&&lt&&(q=lt.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(N,T){let z;return N?T===null||T===ln||T===fr?z=r.DEPTH24_STENCIL8:T===ki?z=r.DEPTH32F_STENCIL8:T===oo&&(z=r.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ln||T===fr?z=r.DEPTH_COMPONENT24:T===ki?z=r.DEPTH_COMPONENT32F:T===oo&&(z=r.DEPTH_COMPONENT16),z}function b(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==ke&&N.minFilter!==be?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function A(N){let T=new WeakRef(N);i.get(N).__ref=T,p.add(T),x.register(N,T,T)}function R(N){let T=i.get(N).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function P(N){D(N.target)}function C(N){I(N.target)}function D(N){N.removeEventListener("dispose",P),R(N),k(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&u.delete(N)}function I(N){N.removeEventListener("dispose",C),R(N),tt(N)}function U(){for(let N of p){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?I(T):D(T))}p.clear(),u.clear()}function k(N){let T=i.get(N);if(T.__webglInit===void 0)return;let z=N.source,it=d.get(z);if(it){let J=it[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(N),Object.keys(it).length===0&&d.delete(z)}i.remove(N)}function V(N){let T=i.get(N);r.deleteTexture(T.__webglTexture);let z=N.source,it=d.get(z);delete it[T.__cacheKey],o.memory.textures--}function tt(N){let T=i.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let z=N.depthTexture;if(z&&z.renderTarget===N&&D(z),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let st=0;st<T.__webglFramebuffer[J].length;st++)r.deleteFramebuffer(T.__webglFramebuffer[J][st]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let it=N.textures;for(let J=0,st=it.length;J<st;J++){let lt=i.get(it[J]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(it[J])}i.remove(N)}let W=0;function Q(){W=0}function et(){return W}function xt(N){W=N}function It(){let N=W;return N>=n.maxTextures&&Rt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,N}function K(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function at(N,T){let z=i.get(N);if(N.isVideoTexture&&$t(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&z.__version!==N.version){let it=N.image;if(it===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(z,N,T);return}}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+T)}function vt(N,T){let z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){De(z,N,T);return}else N.isExternalTexture&&(z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+T)}function Ct(N,T){let z=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&z.__version!==N.version){De(z,N,T);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+T)}function pt(N,T){let z=i.get(N);if(N.version>0&&z.__version!==N.version){Ye(z,N,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+T)}let Ot={[$i]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[Vr]:r.MIRRORED_REPEAT},Re={[ke]:r.NEAREST,[nc]:r.NEAREST_MIPMAP_NEAREST,[ur]:r.NEAREST_MIPMAP_LINEAR,[be]:r.LINEAR,[ro]:r.LINEAR_MIPMAP_NEAREST,[ei]:r.LINEAR_MIPMAP_LINEAR},Et={[_m]:r.NEVER,[Qu]:r.ALWAYS,[ym]:r.LESS,[Ju]:r.LEQUAL,[vm]:r.EQUAL,[ju]:r.GEQUAL,[Mm]:r.GREATER,[Sm]:r.NOTEQUAL};function Xt(N,T){if(T.type===ki&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===be||T.magFilter===ro||T.magFilter===ur||T.magFilter===ei||T.minFilter===be||T.minFilter===ro||T.minFilter===ur||T.minFilter===ei)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,Ot[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,Ot[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,Ot[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Re[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ke||T.minFilter!==ur&&T.minFilter!==ei||T.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Jt(N,T){let z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P),A(T));let it=T.source,J=d.get(it);J===void 0&&(J={},d.set(it,J));let st=K(T);if(st!==N.__cacheKey){J[st]===void 0&&(J[st]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[st].usedTimes++;let lt=J[N.__cacheKey];lt!==void 0&&(J[N.__cacheKey].usedTimes--,lt.usedTimes===0&&V(T)),N.__cacheKey=st,N.__webglTexture=J[st].texture}return z}function zt(N,T,z){return Math.floor(Math.floor(N/z)/T)}function Ne(N,T,z,it){let st=N.updateRanges;if(st.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,z,it,T.data);else{st.sort((F,Z)=>F.start-Z.start);let lt=0;for(let F=1;F<st.length;F++){let Z=st[lt],Y=st[F],ut=Z.start+Z.count,ot=zt(Y.start,T.width,4),ht=zt(Z.start,T.width,4);Y.start<=ut+1&&ot===ht&&zt(Y.start+Y.count-1,T.width,4)===ot?Z.count=Math.max(Z.count,Y.start+Y.count-Z.start):(++lt,st[lt]=Y)}st.length=lt+1;let q=e.getParameter(r.UNPACK_ROW_LENGTH),$=e.getParameter(r.UNPACK_SKIP_PIXELS),ct=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let F=0,Z=st.length;F<Z;F++){let Y=st[F],ut=Math.floor(Y.start/4),ot=Math.ceil(Y.count/4),ht=ut%T.width,Pt=Math.floor(ut/T.width),qt=ot,nt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(r.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(r.TEXTURE_2D,0,ht,Pt,qt,nt,z,it,T.data)}N.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,$),e.pixelStorei(r.UNPACK_SKIP_ROWS,ct)}}function De(N,T,z){let it=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=r.TEXTURE_3D);let J=Jt(N,T),st=T.source;e.bindTexture(it,N.__webglTexture,r.TEXTURE0+z);let lt=i.get(st);if(st.version!==lt.__version||J===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let nt=Yt.getPrimaries(Yt.workingColorSpace),Lt=T.colorSpace===zi?null:Yt.getPrimaries(T.colorSpace),Wt=T.colorSpace===zi||nt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let $=_(T.image,!1,n.maxTextureSize);$=St(T,$);let ct=s.convert(T.format,T.colorSpace),F=s.convert(T.type),Z=w(T.internalFormat,ct,F,T.normalized,T.colorSpace,T.isVideoTexture);Xt(it,T);let Y,ut=T.mipmaps,ot=T.isVideoTexture!==!0,ht=lt.__version===void 0||J===!0,Pt=st.dataReady,qt=b(T,$);if(T.isDepthTexture)Z=y(T.format===Qn,T.type),ht&&(ot?e.texStorage2D(r.TEXTURE_2D,1,Z,$.width,$.height):e.texImage2D(r.TEXTURE_2D,0,Z,$.width,$.height,0,ct,F,null));else if(T.isDataTexture)if(ut.length>0){ot&&ht&&e.texStorage2D(r.TEXTURE_2D,qt,Z,ut[0].width,ut[0].height);for(let nt=0,Lt=ut.length;nt<Lt;nt++)Y=ut[nt],ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,F,Y.data):e.texImage2D(r.TEXTURE_2D,nt,Z,Y.width,Y.height,0,ct,F,Y.data);T.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(r.TEXTURE_2D,qt,Z,$.width,$.height),Pt&&Ne(T,$,ct,F)):e.texImage2D(r.TEXTURE_2D,0,Z,$.width,$.height,0,ct,F,$.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Z,ut[0].width,ut[0].height,$.depth);for(let nt=0,Lt=ut.length;nt<Lt;nt++)if(Y=ut[nt],T.format!==Zi)if(ct!==null)if(ot){if(Pt)if(T.layerUpdates.size>0){let Wt=hf(Y.width,Y.height,T.format,T.type);for(let mt of T.layerUpdates){let me=Y.data.subarray(mt*Wt/Y.data.BYTES_PER_ELEMENT,(mt+1)*Wt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,mt,Y.width,Y.height,1,ct,me)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,$.depth,ct,Y.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Z,Y.width,Y.height,$.depth,0,Y.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Pt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Y.width,Y.height,$.depth,ct,F,Y.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Z,Y.width,Y.height,$.depth,0,ct,F,Y.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(r.TEXTURE_2D,qt,Z,ut[0].width,ut[0].height);for(let nt=0,Lt=ut.length;nt<Lt;nt++)Y=ut[nt],T.format!==Zi?ct!==null?ot?Pt&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,Y.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Z,Y.width,Y.height,0,Y.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Y.width,Y.height,ct,F,Y.data):e.texImage2D(r.TEXTURE_2D,nt,Z,Y.width,Y.height,0,ct,F,Y.data)}else if(T.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Z,$.width,$.height,$.depth),Pt)if(T.layerUpdates.size>0){let nt=hf($.width,$.height,T.format,T.type);for(let Lt of T.layerUpdates){let Wt=$.data.subarray(Lt*nt/$.data.BYTES_PER_ELEMENT,(Lt+1)*nt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Lt,$.width,$.height,1,ct,F,Wt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ct,F,$.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,ct,F,$.data);else if(T.isData3DTexture)ot?(ht&&e.texStorage3D(r.TEXTURE_3D,qt,Z,$.width,$.height,$.depth),Pt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ct,F,$.data)):e.texImage3D(r.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,ct,F,$.data);else if(T.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(r.TEXTURE_2D,qt,Z,$.width,$.height);else{let nt=$.width,Lt=$.height;for(let Wt=0;Wt<qt;Wt++)e.texImage2D(r.TEXTURE_2D,Wt,Z,nt,Lt,0,ct,F,null),nt>>=1,Lt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let nt=r.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),$.parentNode!==nt){nt.appendChild($),u.add(T),nt.onpaint=Lt=>{let Wt=Lt.changedElements;for(let mt of u)Wt.includes(mt.image)&&(mt.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,$);else{let Wt=r.RGBA,mt=r.RGBA,me=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Wt,mt,me,$)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ot&&ht){let nt=Dt(ut[0]);e.texStorage2D(r.TEXTURE_2D,qt,Z,nt.width,nt.height)}for(let nt=0,Lt=ut.length;nt<Lt;nt++)Y=ut[nt],ot?Pt&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct,F,Y):e.texImage2D(r.TEXTURE_2D,nt,Z,ct,F,Y);T.generateMipmaps=!1}else if(ot){if(ht){let nt=Dt($);e.texStorage2D(r.TEXTURE_2D,qt,Z,nt.width,nt.height)}Pt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ct,F,$)}else e.texImage2D(r.TEXTURE_2D,0,Z,ct,F,$);M(T)&&T.mipmapsAutoUpdate===!0&&v(it),lt.__version=st.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ye(N,T,z){if(T.image.length!==6)return;let it=Jt(N,T),J=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+z);let st=i.get(J);if(J.version!==st.__version||it===!0){e.activeTexture(r.TEXTURE0+z);let lt=Yt.getPrimaries(Yt.workingColorSpace),q=T.colorSpace===zi?null:Yt.getPrimaries(T.colorSpace),$=T.colorSpace===zi||lt===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ct=T.isCompressedTexture||T.image[0].isCompressedTexture,F=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let mt=0;mt<6;mt++)!ct&&!F?Z[mt]=_(T.image[mt],!0,n.maxCubemapSize):Z[mt]=F?T.image[mt].image:T.image[mt],Z[mt]=St(T,Z[mt]);let Y=Z[0],ut=s.convert(T.format,T.colorSpace),ot=s.convert(T.type),ht=w(T.internalFormat,ut,ot,T.normalized,T.colorSpace),Pt=T.isVideoTexture!==!0,qt=st.__version===void 0||it===!0,nt=J.dataReady,Lt=b(T,Y);Xt(r.TEXTURE_CUBE_MAP,T);let Wt;if(T.isDepthTexture){if(ht=y(T.format===Qn,T.type),qt)if(Pt)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,ht,Y.width,Y.height);else for(let mt=0;mt<6;mt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,Y.width,Y.height,0,ut,ot,null)}else if(ct){Pt&&qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ht,Y.width,Y.height);for(let mt=0;mt<6;mt++){Wt=Z[mt].mipmaps;for(let me=0;me<Wt.length;me++){let je=Wt[me];T.format!==Zi?ut!==null?Pt?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me,0,0,je.width,je.height,ut,je.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me,ht,je.width,je.height,0,je.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me,0,0,je.width,je.height,ut,ot,je.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me,ht,je.width,je.height,0,ut,ot,je.data)}}}else{if(Wt=T.mipmaps,Pt&&qt){Wt.length>0&&Lt++;let mt=Dt(Z[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Lt,ht,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(F){Pt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Z[mt].width,Z[mt].height,ut,ot,Z[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,Z[mt].width,Z[mt].height,0,ut,ot,Z[mt].data);for(let me=0;me<Wt.length;me++){let ls=Wt[me].image[mt].image;Pt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me+1,0,0,ls.width,ls.height,ut,ot,ls.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me+1,ht,ls.width,ls.height,0,ut,ot,ls.data)}}else{Pt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ut,ot,Z[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ht,ut,ot,Z[mt]);for(let me=0;me<Wt.length;me++){let je=Wt[me];Pt?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me+1,0,0,ut,ot,je.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,me+1,ht,ut,ot,je.image[mt])}}}M(T)&&T.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),st.__version=J.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ie(N,T,z,it,J,st){let lt=s.convert(z.format,z.colorSpace),q=s.convert(z.type),$=w(z.internalFormat,lt,q,z.normalized,z.colorSpace),ct=i.get(T),F=i.get(z);if(F.__renderTarget=T,!ct.__hasExternalTextures){let Z=Math.max(1,T.width>>st),Y=Math.max(1,T.height>>st);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,st,$,Z,Y,T.depth,0,lt,q,null):e.texImage2D(J,st,$,Z,Y,0,lt,q,null)}e.bindFramebuffer(r.FRAMEBUFFER,N),j(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,J,F.__webglTexture,0,rt(T)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,J,F.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function li(N,T,z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){let it=T.depthTexture,J=it&&it.isDepthTexture?it.type:null,st=y(T.stencilBuffer,J),lt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;j(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(T),st,T.width,T.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(T),st,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,st,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,N)}else{let it=T.textures;for(let J=0;J<it.length;J++){let st=it[J],lt=s.convert(st.format,st.colorSpace),q=s.convert(st.type),$=w(st.internalFormat,lt,q,st.normalized,st.colorSpace);j(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(T),$,T.width,T.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(T),$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(N,T,z){let it=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(T.depthTexture);J.__renderTarget=T;let st=it?T.depthTexture.image[0]:T.depthTexture.image;(!J.__webglTexture||st.width!==T.width||st.height!==T.height)&&(st.width=T.width,st.height=T.height,T.depthTexture.needsUpdate=!0),it?pt(T.depthTexture,0):at(T.depthTexture,0);let lt=J.__webglTexture,q=rt(T),$=it?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,ct=T.depthTexture.format===Qn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Hn)j(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,$,lt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ct,$,lt,0);else if(T.depthTexture.format===Qn)j(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,$,lt,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,ct,$,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(N){let T=i.get(N),z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let it=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){let J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",J)};it.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=it}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(z)for(let it=0;it<6;it++)Te(T.__webglFramebuffer[it],N,it);else N.texture.mipmaps.length>0?Te(T.__webglFramebuffer[0],N,0):Te(T.__webglFramebuffer,N,0);else if(z){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=r.createRenderbuffer(),li(T.__webglDepthbuffer[it],N,!1);else{let J=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,st)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),li(T.__webglDepthbuffer,N,!1);else{let J=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,st)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ci(N,T,z){let it=i.get(N);T!==void 0&&ie(it.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Oe(N)}function yi(N){let T=N.texture,z=i.get(N),it=i.get(T);N.addEventListener("dispose",C),A(N);let J=N.textures,st=N.isWebGLCubeRenderTarget===!0,lt=J.length>1;if(lt||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=T.version,o.memory.textures++),st){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(T.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let $=0;$<T.mipmaps.length;$++)z.__webglFramebuffer[q][$]=r.createFramebuffer()}else z.__webglFramebuffer[q]=r.createFramebuffer()}else{if(T.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<T.mipmaps.length;q++)z.__webglFramebuffer[q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(lt)for(let q=0,$=J.length;q<$;q++){let ct=i.get(J[q]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&j(N)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){let $=J[q];z.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[q]);let ct=s.convert($.format,$.colorSpace),F=s.convert($.type),Z=w($.internalFormat,ct,F,$.normalized,$.colorSpace,N.isXRRenderTarget===!0),Y=rt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,Z,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,z.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),li(z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,T);for(let q=0;q<6;q++)if(T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)ie(z.__webglFramebuffer[q][$],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,$);else ie(z.__webglFramebuffer[q],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);M(T)?v(r.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let q=0,$=J.length;q<$;q++){let ct=J[q],F=i.get(ct),Z=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Z=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Z,F.__webglTexture),Xt(Z,ct),ie(z.__webglFramebuffer,N,ct,r.COLOR_ATTACHMENT0+q,Z,0),M(ct)&&v(Z)}e.unbindTexture()}else{let q=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(q=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(q,it.__webglTexture),Xt(q,T),T.mipmaps.length>0)for(let $=0;$<T.mipmaps.length;$++)ie(z.__webglFramebuffer[$],N,T,r.COLOR_ATTACHMENT0,q,$);else ie(z.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,q,0);M(T)?v(q):T.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Oe(N)}function B(N){let T=N.textures;for(let z=0,it=T.length;z<it;z++){let J=T[z];if(M(J)&&J.mipmapsAutoUpdate===!0){let st=S(N),lt=i.get(J).__webglTexture;e.bindTexture(st,lt),v(st),e.unbindTexture()}}}let Di=[];function _e(N){if(N.samples>0){if(j(N)===!1){let T=N.textures,z=N.width,it=N.height,J=r.COLOR_BUFFER_BIT,st=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=i.get(N),q=T.length>1;if(q)for(let ct=0;ct<T.length;ct++)e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<T.length;ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let F=i.get(T[ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,F,0)}r.blitFramebuffer(0,0,z,it,0,0,z,it,J,r.NEAREST),l===!0&&(Di.length=0,Di.push(r.COLOR_ATTACHMENT0+ct),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Di.push(st),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Di))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let ct=0;ct<T.length;ct++){e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);let F=i.get(T[ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,F,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function rt(N){return Math.min(n.maxSamples,N.samples)}function j(N){let T=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(N){let T=o.render.frame;h.get(N)!==T&&(h.set(N,T),N.update())}function St(N,T){let z=N.colorSpace,it=N.format,J=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||z!==bi&&z!==zi&&(Yt.getTransfer(z)===fe?(it!==Zi||J!==ii)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",z)),T}function Dt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=Q,this.getTextureUnits=et,this.setTextureUnits=xt,this.setTexture2D=at,this.setTexture2DArray=vt,this.setTexture3D=Ct,this.setTextureCube=pt,this.rebindTextures=Ci,this.setupRenderTarget=yi,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=j,this.dispose=U}function wS(r,t){function e(i,n=zi){let s,o=Yt.getTransfer(n);if(i===ii)return r.UNSIGNED_BYTE;if(i===rc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===qu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Yu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wu)return r.BYTE;if(i===Xu)return r.SHORT;if(i===oo)return r.UNSIGNED_SHORT;if(i===sc)return r.INT;if(i===ln)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===cn)return r.HALF_FLOAT;if(i===Ku)return r.ALPHA;if(i===$u)return r.RGB;if(i===Zi)return r.RGBA;if(i===Hn)return r.DEPTH_COMPONENT;if(i===Qn)return r.DEPTH_STENCIL;if(i===ao)return r.RED;if(i===ac)return r.RED_INTEGER;if(i===Ms)return r.RG;if(i===lc)return r.RG_INTEGER;if(i===cc)return r.RGBA_INTEGER;if(i===xa||i===_a||i===ya||i===va)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===uc||i===fc||i===dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc||i===xc||i===_c||i===Ma||i===yc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pc||i===mc)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xc)return s.COMPRESSED_R11_EAC;if(i===_c)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ma)return s.COMPRESSED_RG11_EAC;if(i===yc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vc||i===Mc||i===Sc||i===bc||i===wc||i===Tc||i===Ec||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Nc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ac)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nc)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dc||i===Fc||i===Uc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Dc)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===Bc||i===Sa||i===kc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var TS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ES=`
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

}`,wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ve({vertexShader:TS,fragmentShader:ES,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tf=class extends rn{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new wf,g={},_=e.getContextAttributes(),M=null,v=null,S=[],w=[],y=new Nt,b=null,A=null,R=new qe;R.viewport=new oe;let P=new qe;P.viewport=new oe;let C=[R,P],D=new Zl,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=S[K];return at===void 0&&(at=new Yr,S[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=S[K];return at===void 0&&(at=new Yr,S[K]=at),at.getGripSpace()},this.getHand=function(K){let at=S[K];return at===void 0&&(at=new Yr,S[K]=at),at.getHandSpace()};function k(K){let at=w.indexOf(K.inputSource);if(at===-1)return;let vt=S[at];vt!==void 0&&(vt.update(K.inputSource,K.frame,c||o),vt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",tt);for(let K=0;K<S.length;K++){let at=w[K];at!==null&&(w[K]=null,S[K].disconnect(at))}I=null,U=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(M),d=null,f=null,u=null,n=null,v=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(y.width,y.height,!1),A!==null){let K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(M=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",V),n.addEventListener("inputsourceschange",tt),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ct=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?Qn:Hn,Ct=_.stencil?fr:ln);let Ot={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ot),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new wi(f.textureWidth,f.textureHeight,{format:Zi,type:ii,depthTexture:new Wn(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,vt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wi(d.framebufferWidth,d.framebufferHeight,{format:Zi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),It.setContext(n),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(K){for(let at=0;at<K.removed.length;at++){let vt=K.removed[at],Ct=w.indexOf(vt);Ct>=0&&(w[Ct]=null,S[Ct].disconnect(vt))}for(let at=0;at<K.added.length;at++){let vt=K.added[at],Ct=w.indexOf(vt);if(Ct===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=w.length){w.push(vt),Ct=Ot;break}else if(w[Ot]===null){w[Ot]=vt,Ct=Ot;break}if(Ct===-1)break}let pt=S[Ct];pt&&pt.connect(vt)}}function W(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let at=K.near,vt=K.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),D.near=P.near=R.near=at,D.far=P.far=R.far=vt,(I!==D.near||U!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,U=D.far),D.layers.mask=K.layers.mask|6,R.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;let Ct=K.parent,pt=D.cameras;W(D,Ct);for(let Ot=0;Ot<pt.length;Ot++)W(pt[Ot],Ct);D.projectionMatrix.copy(R.projectionMatrix),D.projectionMatrixInverse.copy(R.projectionMatrixInverse),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,D,Ct)};function Q(K,at,vt){vt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(vt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Zs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return g[K]};let et=null;function xt(K,at){if(h=at.getViewerPose(c||o),p=at,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ct=!1;vt.length!==D.cameras.length&&(D.cameras.length=0,Ct=!0);for(let Et=0;Et<vt.length;Et++){let Xt=vt[Et],Jt=null;if(d!==null)Jt=d.getViewport(Xt);else{let Ne=u.getViewSubImage(f,Xt);Jt=Ne.viewport,Et===0&&(t.setRenderTargetTextures(v,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(v))}let zt=C[Et];zt===void 0&&(zt=new qe,zt.layers.enable(Et),zt.viewport=new oe,C[Et]=zt),zt.matrix.fromArray(Xt.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Xt.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Et===0&&(D.matrix.copy(zt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ct===!0&&D.cameras.push(zt)}let pt=n.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Et=u.getDepthInformation(vt[0]);Et&&Et.isValid&&Et.texture&&m.init(Et,n.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Et=0;Et<vt.length;Et++){let Xt=vt[Et].camera;if(Xt){let Jt=g[Xt];Jt||(Jt=new ra,g[Xt]=Jt);let zt=u.getCameraImage(Xt);Jt.sourceTexture=zt}}}}for(let vt=0;vt<S.length;vt++){let Ct=w[vt],pt=S[vt];Ct!==null&&pt!==void 0&&pt.update(Ct,at,c||o)}et&&et(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}let It=new jm;It.setAnimationLoop(xt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},AS=new yt,l0=new Bt;l0.set(-1,0,0,0,1,0,0,0,1);function RS(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,af(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ke&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ke&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(l0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function CS(r,t,e,i){let n={},s={};function o(_,M){let v=M.program;i.uniformBlockBinding(_,v,n[_.id])}function a(_,M){let v=n[_.id];v===void 0&&(p(_),v=l(_),n[_.id]=v,_.addEventListener("dispose",m));let S=M.program;i.updateUBOMapping(_,S);let w=t.render.frame;s[_.id]!==w&&(c(_),s[_.id]=w)}function l(_){let M=r.createBuffer(),v=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,v,S),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(_){let M=n[_.id],v=_.uniforms,S=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,y=v.length;w<y;w++){let b=v[w];if(Array.isArray(b))for(let A=0,R=b.length;A<R;A++)h(b[A],w,A,S);else h(b,w,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(_,M,v,S){if(f(_,M,v,S)===!0){let w=_.__offset,y=_.value;if(Array.isArray(y)){let b=0;for(let A=0;A<y.length;A++){let R=y[A],P=x(R,!0);u(R,_.__data,b),b+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,_.__data)}}function u(_,M,v){typeof _=="number"||typeof _=="boolean"?M[v]=_:_.isMatrix3?(M[v]=_.elements[0],M[v+1]=_.elements[1],M[v+2]=_.elements[2],M[v+3]=0,M[v+4]=_.elements[3],M[v+5]=_.elements[4],M[v+6]=_.elements[5],M[v+7]=0,M[v+8]=_.elements[6],M[v+9]=_.elements[7],M[v+10]=_.elements[8],M[v+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-v),v):_.toArray(M,v)}function f(_,M,v,S){let w=_.value,y=M+"_"+v;if(Array.isArray(w)){S[y]===void 0&&(S[y]=[]);let b=S[y],A=!1;for(let R=0;R<w.length;R++)d(w[R],b,R)===!0&&(A=!0);return A}return d(w,S,y)}function d(_,M,v){if(M[v]===void 0)return typeof _=="number"||typeof _=="boolean"?M[v]=_:ArrayBuffer.isView(_)?M[v]=_.slice():M[v]=_.clone(),!0;{let S=M[v];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return M[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function p(_){let M=_.uniforms,v=0,S=16;for(let y=0,b=M.length;y<b;y++){let A=Array.isArray(M[y])?M[y]:[M[y]];for(let R=0,P=A.length;R<P;R++){let C=A[R],D=Array.isArray(C.value)?C.value:[C.value],I=Array.isArray(M[y])||Array.isArray(C.value),U=v;for(let V=0,tt=D.length;V<tt;V++){let W=D[V],Q=x(W,I),et=v%S,xt=et%Q.boundary,It=et+xt;v+=xt,It!==0&&S-It<Q.storage&&(v+=S-It),V===0&&(U=v),v+=Q.storage}let k=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new k((v-U)/Float32Array.BYTES_PER_ELEMENT),C.__offset=U}}let w=v%S;return w>0&&(v+=S-w),_.__size=v,_.__cache={},this}function x(_,M){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let M=_.target;M.removeEventListener("dispose",m),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function g(){for(let _ in n)r.deleteBuffer(n[_]);n={},s={}}return{bind:o,update:a,dispose:g}}var PS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sn=null;function IS(){return Sn===null&&(Sn=new Jr(PS,16,16,Ms,cn),Sn.name="DFG_LUT",Sn.minFilter=be,Sn.magFilter=be,Sn.wrapS=Yi,Sn.wrapT=Yi,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}var Xc=class{constructor(t={}){let{canvas:e=bm(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ii}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=d,m=new Set([cc,lc,ac]),g=new Set([ii,ln,oo,fr,rc,oc]),_=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},S=null,w=null,y=[],b=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,C=null,D=null,I=null,U=null;this._outputColorSpace=Ce;let k=0,V=0,tt=null,W=-1,Q=null,et=new oe,xt=new oe,It=null,K=new At(0),at=0,vt=e.width,Ct=e.height,pt=1,Ot=null,Re=null,Et=new oe(0,0,vt,Ct),Xt=new oe(0,0,vt,Ct),Jt=!1,zt=new gs,Ne=new Bl,De=!1,Ye=!1,ie=new yt,li=new L,Te=new oe,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ci=!1;function yi(){return tt===null?pt:1}let B=i;function Di(E,O){return e.getContext(E,O)}let _e,rt,j,$t,St,Dt,N,T,z,it,J,st,lt,q,$,ct,F,Z,Y,ut,ot,ht,Pt;try{let E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),B===null){let O="webgl2";if(B=Di(O,E),B===null)throw Di(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(E){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Ut("WebGLRenderer: "+E.message),E}function qt(){_e=new Vv(B),_e.init(),ot=new wS(B,_e),rt=new Iv(B,_e,t,ot),j=new SS(B,_e),rt.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),D=B.createFramebuffer(),I=B.createFramebuffer(),U=B.createFramebuffer(),$t=new Xv(B),St=new lS,Dt=new bS(B,_e,j,St,rt,ot,$t),N=new Hv(R),T=new Yx(B),ht=new Cv(B,T),z=new Gv(B,T,$t,ht),it=new Yv(B,z,T,ht,$t),Z=new qv(B,rt,Dt),$=new Lv(St),J=new aS(R,N,_e,rt,ht,$),st=new RS(R,St),lt=new hS,q=new gS(_e),F=new Rv(R,N,j,it,p,l),ct=new MS(R,it,rt),Pt=new CS(B,$t,rt,j),Y=new Pv(B,_e,$t),ut=new Wv(B,_e,$t),$t.programs=J.programs,R.capabilities=rt,R.extensions=_e,R.properties=St,R.renderLists=lt,R.shadowMap=ct,R.state=j,R.info=$t}x!==ii&&(A=new $v(x,e.width,e.height,a,n,s));let nt=new Tf(R,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(E){E!==void 0&&(pt=E,this.setSize(vt,Ct,!1))},this.getSize=function(E){return E.set(vt,Ct)},this.setSize=function(E,O,X=!0){if(nt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=E,Ct=O,e.width=Math.floor(E*pt),e.height=Math.floor(O*pt),X===!0&&(e.style.width=E+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(vt*pt,Ct*pt).floor()},this.setDrawingBufferSize=function(E,O,X){vt=E,Ct=O,pt=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===ii){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,O,X,H){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,O,X,H),j.viewport(et.copy(Et).multiplyScalar(yi()).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,O,X,H){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,O,X,H),j.scissor(xt.copy(Xt).multiplyScalar(yi()).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(E){j.setScissorTest(Jt=E)},this.setOpaqueSort=function(E){Ot=E},this.setTransparentSort=function(E){Re=E},this.getClearColor=function(E){return E.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let H=0;if(E){let G=!1;if(tt!==null){let dt=tt.texture.format;G=m.has(dt)}if(G){let dt=tt.texture.type,Mt=g.has(dt),ft=F.getClearColor(),_t=F.getClearAlpha(),Tt=ft.r,Vt=ft.g,Qt=ft.b;Mt?(_[0]=Tt,_[1]=Vt,_[2]=Qt,_[3]=_t,B.clearBufferuiv(B.COLOR,0,_)):(M[0]=Tt,M[1]=Vt,M[2]=Qt,M[3]=_t,B.clearBufferiv(B.COLOR,0,M))}else H|=B.COLOR_BUFFER_BIT}O&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),C=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),F.dispose(),lt.dispose(),q.dispose(),Dt.dispose(),St.dispose(),N.dispose(),it.dispose(),z.dispose(),ht.dispose(),Pt.dispose(),J.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Wd),nt.removeEventListener("sessionend",Xd),Bs.stop()};function Lt(E){E.preventDefault(),Zo("WebGLRenderer: Context Lost."),P=!0}function Wt(){Zo("WebGLRenderer: Context Restored."),P=!1;let E=$t.autoReset,O=ct.enabled,X=ct.autoUpdate,H=ct.needsUpdate,G=ct.type;qt(),$t.autoReset=E,ct.enabled=O,ct.autoUpdate=X,ct.needsUpdate=H,ct.type=G}function mt(E){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let O=E.target;O.removeEventListener("dispose",me),je(O)}function je(E){ls(E),St.remove(E)}function ls(E){let O=St.get(E).programs;O!==void 0&&(O.forEach(function(X){J.releaseProgram(X)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,H,G,dt){O===null&&(O=Oe);let Mt=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=kg(E,O,X,H,G);j.setMaterial(H,Mt);let _t=X.index,Tt=1;if(H.wireframe===!0){if(_t=z.getWireframeAttribute(X),_t===void 0)return;Tt=2}let Vt=X.drawRange,Qt=X.attributes.position,bt=Vt.start*Tt,te=(Vt.start+Vt.count)*Tt;dt!==null&&(bt=Math.max(bt,dt.start*Tt),te=Math.min(te,(dt.start+dt.count)*Tt)),_t!==null?(bt=Math.max(bt,0),te=Math.min(te,_t.count)):Qt!=null&&(bt=Math.max(bt,0),te=Math.min(te,Qt.count));let We=te-bt;if(We<0||We===1/0)return;ht.setup(G,H,ft,X,_t);let Se,ye=Y;if(_t!==null&&(Se=T.get(_t),ye=ut,ye.setIndex(Se)),G.isMesh)H.wireframe===!0?(j.setLineWidth(H.wireframeLinewidth*yi()),ye.setMode(B.LINES)):ye.setMode(B.TRIANGLES);else if(G.isLine){let ci=H.linewidth;ci===void 0&&(ci=1),j.setLineWidth(ci*yi()),G.isLineSegments?ye.setMode(B.LINES):G.isLineLoop?ye.setMode(B.LINE_LOOP):ye.setMode(B.LINE_STRIP)}else G.isPoints?ye.setMode(B.POINTS):G.isSprite&&ye.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))ye.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ci=G._multiDrawStarts,wt=G._multiDrawCounts,vi=G._multiDrawCount,le=_t?T.get(_t).bytesPerElement:1,ks=St.get(H).currentProgram.getUniforms();for(let hi=0;hi<vi;hi++)ks.setValue(B,"_gl_DrawID",hi),ye.render(ci[hi]/le,wt[hi])}else if(G.isInstancedMesh)ye.renderInstances(bt,We,G.count);else if(X.isInstancedBufferGeometry){let ci=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,ci);ye.renderInstances(bt,We,wt)}else ye.render(bt,We)};function Gd(E,O,X,H){C!==null&&E.isNodeMaterial&&C.setObject(H,E),De===!0&&$.setState(E,X,!1),E.transparent===!0&&E.side===Le&&E.forceSinglePass===!1?(E.side=Ke,E.needsUpdate=!0,Uo(E,O,H),E.side=Oi,E.needsUpdate=!0,Uo(E,O,H),E.side=Le):Uo(E,O,H)}this.compile=function(E,O,X=null){X===null&&(X=E),C!==null&&C.renderStart(E,O,X),w=q.get(X),w.init(O),b.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),C!==null&&C.updateLights(w.state.lightsArray),Ye=this.localClippingEnabled,De=$.init(this.clippingPlanes,Ye),De===!0&&$.setGlobalState(this.clippingPlanes,O),C!==null&&ct.render(w.state.shadowsArray,X,O);let H=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let ft=dt[Mt];Gd(ft,X,O,G),H.add(ft)}else Gd(dt,X,O,G),H.add(dt)}),w=b.pop(),C!==null&&C.renderEnd(),H},this.compileAsync=function(E,O,X=null){let H=this.compile(E,O,X);return new Promise(G=>{function dt(){if(H.forEach(function(Mt){let _t=St.get(Mt).currentProgram;(_t===void 0||_t.isReady())&&H.delete(Mt)}),H.size===0){G(E);return}setTimeout(dt,10)}_e.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let $h=null;function Og(E){$h&&$h(E)}function Wd(){Bs.stop()}function Xd(){Bs.start()}let Bs=new jm;Bs.setAnimationLoop(Og),typeof self<"u"&&Bs.setContext(self),this.setAnimationLoop=function(E){$h=E,nt.setAnimationLoop(E),E===null?Bs.stop():Bs.start()},nt.addEventListener("sessionstart",Wd),nt.addEventListener("sessionend",Xd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(E,O);let X=nt.enabled===!0&&nt.isPresenting===!0,H=A!==null&&(tt===null||X)&&A.begin(R,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(O),O=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,tt),w=q.get(E,b.length),w.init(O),w.state.textureUnits=Dt.getTextureUnits(),b.push(w),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ne.setFromArrayCamera(O):zt.setFromProjectionMatrix(ie,Ki,O.reversedDepth),Ye=this.localClippingEnabled,De=$.init(this.clippingPlanes,Ye),S=lt.get(E,y.length),S.init(),y.push(S),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let Mt=R.xr.getDepthSensingMesh();Mt!==null&&Zh(Mt,O,-1/0,R.sortObjects)}Zh(E,O,0,R.sortObjects),S.finish(),C!==null&&C.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(Ot,Re),Ci=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ci&&F.addToRenderList(S,E),this.info.autoReset===!0&&this.info.reset(),De===!0&&$.beginShadows();let G=w.state.shadowsArray;if(ct.render(G,E,O),De===!0&&$.endShadows(),(H&&A.hasRenderPass())===!1){let Mt=S.opaque,ft=S.transmissive;if(w.setupLights(),O.isArrayCamera){let _t=O.cameras;if(ft.length>0)for(let Tt=0,Vt=_t.length;Tt<Vt;Tt++){let Qt=_t[Tt];Yd(Mt,ft,E,Qt)}Ci&&F.render(E);for(let Tt=0,Vt=_t.length;Tt<Vt;Tt++){let Qt=_t[Tt];qd(S,E,Qt,Qt.viewport)}}else ft.length>0&&Yd(Mt,ft,E,O),Ci&&F.render(E),qd(S,E,O)}tt!==null&&V===0&&(Dt.updateMultisampleRenderTarget(tt),Dt.updateRenderTargetMipmap(tt)),H&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),ht.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(w=b[b.length-1],Dt.setTextureUnits(w.state.textureUnits),De===!0&&$.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?S=y[y.length-1]:S=null,C!==null&&C.renderEnd()};function Zh(E,O,X,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Mt=O.isArrayCamera?Ne:zt;if(!E.frustumCulled||E.intersectsFrustum(Mt)){H&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);let ft=it.update(E),_t=E.material;_t.visible&&S.push(E,ft,_t,X,Te.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Mt=O.isArrayCamera?Ne:zt;if(!E.frustumCulled||E.intersectsFrustum(Mt)){let ft=it.update(E),_t=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Te.copy(ft.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(ie)),Array.isArray(_t)){let Tt=ft.groups;for(let Vt=0,Qt=Tt.length;Vt<Qt;Vt++){let bt=Tt[Vt],te=_t[bt.materialIndex];te&&te.visible&&S.push(E,ft,te,X,Te.z,bt,O)}}else _t.visible&&S.push(E,ft,_t,X,Te.z,null,O)}}}let dt=E.children;for(let Mt=0,ft=dt.length;Mt<ft;Mt++)Zh(dt[Mt],O,X,H)}function qd(E,O,X,H){let{opaque:G,transmissive:dt,transparent:Mt}=E;w.setupLightsView(X),De===!0&&$.setGlobalState(R.clippingPlanes,X),H&&j.viewport(et.copy(H)),G.length>0&&ja(G,O,X),dt.length>0&&ja(dt,O,X),Mt.length>0&&ja(Mt,O,X),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Yd(E,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let bt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new wi(1,1,{generateMipmaps:!0,type:bt?cn:ii,minFilter:ei,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let dt=w.state.transmissionRenderTarget[H.id],Mt=H.viewport||et;dt.setSize(Mt.z*R.transmissionResolutionScale,Mt.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),_t=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor(K),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),Ci&&F.render(X);let Vt=R.toneMapping;R.toneMapping=vn;let Qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),De===!0&&$.setGlobalState(R.clippingPlanes,H),ja(E,X,H),Dt.updateMultisampleRenderTarget(dt),Dt.updateRenderTargetMipmap(dt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let te=0,We=O.length;te<We;te++){let Se=O[te],{object:ye,geometry:ci,material:wt,group:vi}=Se;if(wt.side===Le&&ye.layers.test(H.layers)){let le=wt.side;wt.side=Ke,wt.needsUpdate=!0,Kd(ye,X,H,ci,wt,vi),wt.side=le,wt.needsUpdate=!0,bt=!0}}bt===!0&&(Dt.updateMultisampleRenderTarget(dt),Dt.updateRenderTargetMipmap(dt))}R.setRenderTarget(ft,_t,Tt),R.setClearColor(K,at),Qt!==void 0&&(H.viewport=Qt),R.toneMapping=Vt}function ja(E,O,X){let H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,dt=E.length;G<dt;G++){let Mt=E[G],{object:ft,geometry:_t,group:Tt}=Mt,Vt=Mt.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),ft.layers.test(X.layers)&&Kd(ft,O,X,_t,Vt,Tt)}}function Kd(E,O,X,H,G,dt){C!==null&&G.isNodeMaterial&&C.setObject(E,G),E.onBeforeRender(R,O,X,H,G,dt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(R,O,X,H,E,dt),G.transparent===!0&&G.side===Le&&G.forceSinglePass===!1?(G.side=Ke,G.needsUpdate=!0,R.renderBufferDirect(X,O,H,G,E,dt),G.side=Oi,G.needsUpdate=!0,R.renderBufferDirect(X,O,H,G,E,dt),G.side=Le):R.renderBufferDirect(X,O,H,G,E,dt),E.onAfterRender(R,O,X,H,G,dt)}function $d(E){let O=0;for(let X of E)X.texture!==null&&O++;return O}function Uo(E,O,X){O.isScene!==!0&&(O=Oe);let H=St.get(E),G=w.state.lights,dt=w.state.shadowsArray,Mt=G.state.version,ft=J.getParameters(E,G.state,dt,O,X,w.state.lightProbeGridArray),_t=J.getProgramCacheKey(ft),Tt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Vt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=N.get(E.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",me),Tt=new Map,H.programs=Tt,H.programVariants=new Map);let Qt=Tt.get(_t);if(Qt!==void 0){if(H.currentProgram===Qt&&H.lightsStateVersion===Mt)return Jd(E,ft),Qt}else ft.uniforms=J.getUniforms(E),C!==null&&E.isNodeMaterial&&C.build(E,X,ft),E.onBeforeCompile(ft,R),Qt=J.acquireProgram(ft,_t),Tt.set(_t,Qt),H.uniforms=ft.uniforms;let bt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=$.uniform),Jd(E,ft),H.needsLights=Hg(E),H.lightsStateVersion=Mt,H.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.numLightProbeGrids=$d(w.state.lightProbeGridArray),H.currentProgram=Qt,H.uniformsList=null,Qt}function Bg(E,O,X,H,G){let dt=St.get(E),Mt=dt.currentProgram.id+","+H+","+G,ft=dt.programVariants.get(Mt);return ft===void 0?(ft=Uo(E,O,X),dt.programVariants.set(Mt,ft)):(dt.currentProgram=ft,dt.uniformsList=null,dt.outputColorSpace=H,dt.toneMapping=G),ft}function Zd(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=co.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Jd(E,O){let X=St.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function kg(E,O,X,H,G){O.isScene!==!0&&(O=Oe),Dt.resetTextureUnits();let dt=O.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ft=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Yt.workingColorSpace,_t=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Tt=N.get(H.envMap||Mt,_t),Vt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,We=!!X.morphAttributes.color,Se=vn;H.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=R.toneMapping);let ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ci=ye!==void 0?ye.length:0,wt=St.get(H),vi=w.state.lights;if(De===!0&&(Ye===!0||E!==Q)){let Fe=E===Q&&H.id===W;$.setState(H,E,Fe)}let le=!1,ks=!1;H.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==vi.state.version||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==Tt||H.fog===!0&&wt.fog!==dt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==$.numPlanes||wt.numIntersection!==$.numIntersection)||wt.vertexAlphas!==Vt||wt.vertexTangents!==Qt||wt.morphTargets!==bt||wt.morphNormals!==te||wt.morphColors!==We||wt.morphTargetsCount!==ci||wt.numLightProbeGrids!==$d(w.state.lightProbeGridArray)?le=!0:(wt.outputColorSpace!==ft||wt.toneMapping!==Se)&&(ks=!0):(le=!0,wt.__version=H.version);let hi=wt.currentProgram;(le===!0||ks===!0)&&(hi=ks===!0?Bg(H,O,G,ft,Se):Uo(H,O,G),C&&H.isNodeMaterial&&C.onUpdateProgram(H,hi,wt));let Qa=!1,cs=!1,zs=!1,re=hi.getUniforms(),ri=wt.uniforms;if(j.useProgram(hi.program)&&(Qa=!0,cs=!0,zs=!0),H.id!==W&&(W=H.id,cs=!0),Qa||Q!==E){j.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),re.setValue(B,"projectionMatrix",E.projectionMatrix),re.setValue(B,"viewMatrix",E.matrixWorldInverse);let Qe=re.map.cameraPosition;Qe!==void 0&&Qe.setValue(B,li.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&re.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&re.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,cs=!0,zs=!0)}if(wt.needsLights&&(vi.state.sunShadowMap.length>0&&re.setValue(B,"sunShadowMap",vi.state.sunShadowMap,Dt),vi.state.directionalShadowMap.length>0&&re.setValue(B,"directionalShadowMap",vi.state.directionalShadowMap,Dt),vi.state.spotShadowMap.length>0&&re.setValue(B,"spotShadowMap",vi.state.spotShadowMap,Dt),vi.state.pointShadowMap.length>0&&re.setValue(B,"pointShadowMap",vi.state.pointShadowMap,Dt)),G.isSkinnedMesh){re.setOptional(B,G,"bindMatrix"),re.setOptional(B,G,"bindMatrixInverse");let Fe=G.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),re.setValue(B,"boneTexture",Fe.boneTexture,Dt))}G.isBatchedMesh&&(re.setOptional(B,G,"batchingTexture"),re.setValue(B,"batchingTexture",G._matricesTexture,Dt),re.setOptional(B,G,"batchingIdTexture"),re.setValue(B,"batchingIdTexture",G._indirectTexture,Dt),re.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&re.setValue(B,"batchingColorTexture",G._colorsTexture,Dt));let tn=X.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Z.update(G,X,hi),(cs||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,re.setValue(B,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),ri.dfgLUT!==void 0&&(ri.dfgLUT.value=IS()),cs){if(re.setValue(B,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&zg(ri,zs),dt&&H.fog===!0&&st.refreshFogUniforms(ri,dt),st.refreshMaterialUniforms(ri,H,pt,Ct,w.state.transmissionRenderTarget[E.id]),wt.needsLights&&wt.numLightProbeGrids>0){let Fe=v,Qe=0;for(let Nn of w.state.lightProbeGridArray)Nn.texture!==null&&(Fe.textures[Qe]=Nn.texture,Fe.min[Qe]=Nn.boundingBox.min,Fe.max[Qe]=Nn.boundingBox.max,Fe.resolution[Qe]=Nn.resolution,Qe++);for(let Nn in Fe)Fe[Nn].length=Qe;ri.probesSH.value=Fe.textures,ri.probesMin.value=Fe.min,ri.probesMax.value=Fe.max,ri.probesResolution.value=Fe.resolution}co.upload(B,Zd(wt),ri,Dt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(co.upload(B,Zd(wt),ri,Dt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&re.setValue(B,"center",G.center),re.setValue(B,"modelViewMatrix",G.modelViewMatrix),re.setValue(B,"normalMatrix",G.normalMatrix),re.setValue(B,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Fe=H.uniformsGroups;for(let Qe=0,Nn=Fe.length;Qe<Nn;Qe++){let Qd=Fe[Qe];Pt.update(Qd,hi),Pt.bind(Qd,hi)}}return hi}function zg(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Hg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,O,X){let H=St.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),St.get(E.texture).__webglTexture=O,St.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let X=St.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){tt=E,k=O,V=X;let H=null,G=!1,dt=!1;if(E){let ft=St.get(E);if(ft.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(B.FRAMEBUFFER,ft.__webglFramebuffer),et.copy(E.viewport),xt.copy(E.scissor),It=E.scissorTest,j.viewport(et),j.scissor(xt),j.setScissorTest(It),W=-1;return}else if(ft.__webglFramebuffer===void 0)Dt.setupRenderTarget(E);else if(ft.__hasExternalTextures)Dt.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Vt=E.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&St.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(E)}}let _t=E.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(dt=!0);let Tt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?H=Tt[O][X]:H=Tt[O],G=!0):E.samples>0&&Dt.useMultisampledRTT(E)===!1?H=St.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?H=Tt[X]:H=Tt,et.copy(E.viewport),xt.copy(E.scissor),It=E.scissorTest}else et.copy(Et).multiplyScalar(pt).floor(),xt.copy(Xt).multiplyScalar(pt).floor(),It=Jt;if(X!==0&&(H=D),j.bindFramebuffer(B.FRAMEBUFFER,H)&&j.drawBuffers(E,H),j.viewport(et),j.scissor(xt),j.setScissorTest(It),G){let ft=St.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,ft.__webglTexture,X)}else if(dt){let ft=O;for(let _t=0;_t<E.textures.length;_t++){let Tt=St.get(E.textures[_t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+_t,Tt.__webglTexture,X,ft)}}else if(E!==null&&X!==0){let ft=St.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ft.__webglTexture,X)}W=-1};function jd(E){let O=St.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=rt.textureFormatReadable(E.format),O.__typeReadable=rt.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,X,H,G,dt,Mt,ft=0){if(!(E&&E.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t){j.bindFramebuffer(B.FRAMEBUFFER,_t);try{let Tt=E.textures[ft],Vt=Tt.format,Qt=Tt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let bt=jd(Tt);if(bt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&X>=0&&X<=E.height-G&&B.readPixels(O,X,H,G,ot.convert(Vt),ot.convert(Qt),dt)}finally{let Tt=tt!==null?St.get(tt).__webglFramebuffer:null;j.bindFramebuffer(B.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,H,G,dt,Mt,ft=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(_t=_t[Mt],Array.isArray(_t)&&(_t=_t[0])),_t)if(O>=0&&O<=E.width-H&&X>=0&&X<=E.height-G){j.bindFramebuffer(B.FRAMEBUFFER,_t);let Tt=E.textures[ft],Vt=Tt.format,Qt=Tt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ft);let bt=jd(Tt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.bufferData(B.PIXEL_PACK_BUFFER,dt.byteLength,B.STREAM_READ),B.readPixels(O,X,H,G,ot.convert(Vt),ot.convert(Qt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let We=tt!==null?St.get(tt).__webglFramebuffer:null;j.bindFramebuffer(B.FRAMEBUFFER,We);let Se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Tm(B,Se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,dt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(te),B.deleteSync(Se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){let H=Math.pow(2,-X),G=Math.floor(E.image.width*H),dt=Math.floor(E.image.height*H),Mt=O!==null?O.x:0,ft=O!==null?O.y:0;Dt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Mt,ft,G,dt),j.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,H=null,G=0,dt=0){let Mt,ft,_t,Tt,Vt,Qt,bt,te,We,Se=E.isCompressedTexture?E.mipmaps[dt]:E.image;if(X!==null)Mt=X.max.x-X.min.x,ft=X.max.y-X.min.y,_t=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Vt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let re=Math.pow(2,-G);Mt=Math.floor(Se.width*re),ft=Math.floor(Se.height*re),E.isDataArrayTexture?_t=Se.depth:E.isData3DTexture?_t=Math.floor(Se.depth*re):_t=1,Tt=0,Vt=0,Qt=0}H!==null?(bt=H.x,te=H.y,We=H.z):(bt=0,te=0,We=0);let ye=ot.convert(O.format),ci=ot.convert(O.type),wt;O.isData3DTexture?(Dt.setTexture3D(O,0),wt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Dt.setTexture2DArray(O,0),wt=B.TEXTURE_2D_ARRAY):(Dt.setTexture2D(O,0),wt=B.TEXTURE_2D),j.activeTexture(B.TEXTURE0),j.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),j.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),j.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let vi=j.getParameter(B.UNPACK_ROW_LENGTH),le=j.getParameter(B.UNPACK_IMAGE_HEIGHT),ks=j.getParameter(B.UNPACK_SKIP_PIXELS),hi=j.getParameter(B.UNPACK_SKIP_ROWS),Qa=j.getParameter(B.UNPACK_SKIP_IMAGES);j.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),j.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),j.pixelStorei(B.UNPACK_SKIP_PIXELS,Tt),j.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),j.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);let cs=E.isDataArrayTexture||E.isData3DTexture,zs=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let re=St.get(E),ri=St.get(O),tn=St.get(re.__renderTarget),Fe=St.get(ri.__renderTarget);j.bindFramebuffer(B.READ_FRAMEBUFFER,tn.__webglFramebuffer),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Qe=0;Qe<_t;Qe++)cs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.get(E).__webglTexture,G,Qt+Qe),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.get(O).__webglTexture,dt,We+Qe)),B.blitFramebuffer(Tt,Vt,Tt+Mt,Vt+ft,bt,te,bt+Mt,te+ft,B.DEPTH_BUFFER_BIT,B.NEAREST);j.bindFramebuffer(B.READ_FRAMEBUFFER,null),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||St.has(E)){let re=St.get(E),ri=St.get(O);j.bindFramebuffer(B.READ_FRAMEBUFFER,I),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let tn=0;tn<_t;tn++)cs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,re.__webglTexture,G,Qt+tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,re.__webglTexture,G),zs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ri.__webglTexture,dt,We+tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ri.__webglTexture,dt),G!==0?B.blitFramebuffer(Tt,Vt,Tt+Mt,Vt+ft,bt,te,bt+Mt,te+ft,B.COLOR_BUFFER_BIT,B.NEAREST):zs?B.copyTexSubImage3D(wt,dt,bt,te,We+tn,Tt,Vt,Mt,ft):B.copyTexSubImage2D(wt,dt,bt,te,Tt,Vt,Mt,ft);j.bindFramebuffer(B.READ_FRAMEBUFFER,null),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zs?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(wt,dt,bt,te,We,Mt,ft,_t,ye,ci,Se.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,dt,bt,te,We,Mt,ft,_t,ye,Se.data):B.texSubImage3D(wt,dt,bt,te,We,Mt,ft,_t,ye,ci,Se):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,dt,bt,te,Mt,ft,ye,ci,Se.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,dt,bt,te,Se.width,Se.height,ye,Se.data):B.texSubImage2D(B.TEXTURE_2D,dt,bt,te,Mt,ft,ye,ci,Se);j.pixelStorei(B.UNPACK_ROW_LENGTH,vi),j.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),j.pixelStorei(B.UNPACK_SKIP_PIXELS,ks),j.pixelStorei(B.UNPACK_SKIP_ROWS,hi),j.pixelStorei(B.UNPACK_SKIP_IMAGES,Qa),dt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(wt),j.unbindTexture()},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&Dt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Dt.setTextureCube(E,0):E.isData3DTexture?Dt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Dt.setTexture2DArray(E,0):Dt.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){k=0,V=0,tt=null,j.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var bs=new At("#B51224"),IT=new At("#5e0a13"),Ef=r=>new At(r),ne={uTime:{value:0},uFogLow:{value:Ef("#8a8c8f")},uFogHigh:{value:Ef("#2a2b2d")},uFogDeep:{value:Ef("#141516")},uFogParams:{value:new oe(.17,6,4.6,.0042)},uZone:{value:new oe(0,0,0,0)},uPulse:{value:new oe(0,60,0,0)},uRedCol:{value:bs.clone()},uReveal:{value:0},uScope:{value:0}},pr=`
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
`,c0=!1;function h0(){c0||(c0=!0,Ht.fog_pars_vertex=`
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
  ${pr}
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
#endif`)}function hn(r,t){let e=r.onBeforeCompile;if(r.onBeforeCompile=(i,n)=>{for(let s in ne)i.uniforms[s]=ne[s];t&&t(i),e&&e.call(r,i,n)},t){let i=t.toString().length+":"+(t.key||t.name||"x");r.customProgramCacheKey=()=>i}return r}var LS=`
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
}`,$c=class{constructor(t){this.canvas=t;let e=this.renderer=new Xc({canvas:t,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1,depth:!1});e.outputColorSpace=Ce,e.shadowMap.enabled=!0,e.shadowMap.type=ar,e.shadowMap.autoUpdate=!1,e.info.autoReset=!1,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.userAgent),this.scale=1,this.maxDpr=this.isMobile?1.5:1.75,this.samples=this.isMobile?2:4,this.scene=new js,this.scene.fog=new jo(8421504,1,1e3),this.camera=new qe(72,1,.08,900),this.fpScene=new js,this.fpCamera=new qe(52,1,.02,20),this.post={tScene:{value:null},uRes:{value:new Nt(1,1)},uTime:ne.uTime,uRedCol:{value:bs.clone()},uGrain:{value:.07},uExposure:{value:1.25},uVignette:{value:0},uDamage:{value:0},uLowHP:{value:0},uGlitch:{value:0},uFlash:{value:0},uInk:{value:0},uScoped:{value:0},uFade:{value:1},uZoneOut:{value:0},uKick:{value:0}};let i=new ce;i.setAttribute("position",new Ft(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),i.setAttribute("uv",new Ft(new Float32Array([0,0,2,0,0,2]),2)),this.postMat=new Ve({uniforms:this.post,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:LS,depthTest:!1,depthWrite:!1}),this.postMesh=new de(i,this.postMat),this.postMesh.frustumCulled=!1,this.postScene=new js,this.postScene.add(this.postMesh),this.postCam=new Zn(-1,1,1,-1,0,1),this.rt=null,this.resize()}resize(){let t=Math.max(2,this.canvas.clientWidth|0),e=Math.max(2,this.canvas.clientHeight|0),i=Math.min(window.devicePixelRatio||1,this.maxDpr)*this.scale,n=Math.max(2,Math.round(t*i)),s=Math.max(2,Math.round(e*i));this.pw===n&&this.ph===s||(this.pw=n,this.ph=s,this.w=t,this.h=e,this.renderer.setPixelRatio(1),this.renderer.setSize(n,s,!1),this.rt&&this.rt.dispose(),this.rt=new wi(n,s,{samples:this.samples,depthBuffer:!0,stencilBuffer:!1,type:ii,colorSpace:Ce}),this.rt.texture.minFilter=be,this.rt.texture.magFilter=be,this.rt.texture.generateMipmaps=!1,this.post.tScene.value=this.rt.texture,this.post.uRes.value.set(n,s),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.fpCamera.aspect=t/e,this.fpCamera.updateProjectionMatrix())}render(t=!0){let e=this.renderer;e.info.reset(),e.setRenderTarget(this.rt),e.autoClear=!0,e.render(this.scene,this.camera),t&&this.fpScene.children.length&&(e.autoClear=!1,e.clearDepth(),e.render(this.fpScene,this.fpCamera),e.autoClear=!0),e.setRenderTarget(null),e.render(this.postScene,this.postCam)}};function u0(r){let t=new Uint8Array(r);if(String.fromCharCode(t[0],t[1],t[2],t[3])!=="SCKT")throw new Error("bad kit file");let n=new DataView(r).getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(t.subarray(8,8+n))),o=8+n,a={};for(let[l,c]of Object.entries(s.types))a[l]={...c,i16:new Int16Array(r,o+c.vOff,c.nv*8),u8:new Uint8Array(r,o+c.vOff,c.nv*16),i8:new Int8Array(r,o+c.vOff,c.nv*16),idx:c.i32?new Uint32Array(r,o+c.iOff,c.nt*3):new Uint16Array(r,o+c.iOff,c.nt*3)};return{header:s,types:a,layers:s.layers}}var Ca={city:"city.txt",tex:"tex.txt",arena:"arena.json",models:"models.txt"},d0={"city.txt":481e4,"tex.txt":252e4,"arena.json":12e4,"models.txt":388e4},wn=new Uint8Array(256);for(let r=0;r<64;r++)wn["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(r)]=r;function NS(r){let t=r.length;for(;t>0&&(r[t-1]===61||r[t-1]===10||r[t-1]===13||r[t-1]===32);)t--;let e=new Uint8Array(Math.floor(t*3/4)),i=0,n=0;for(;n+4<=t;n+=4){let s=wn[r[n]]<<18|wn[r[n+1]]<<12|wn[r[n+2]]<<6|wn[r[n+3]];e[i++]=s>>16,e[i++]=s>>8&255,e[i++]=s&255}if(t-n===2)e[i++]=(wn[r[n]]<<18|wn[r[n+1]]<<12)>>16;else if(t-n===3){let s=wn[r[n]]<<18|wn[r[n+1]]<<12|wn[r[n+2]]<<6;e[i++]=s>>16,e[i++]=s>>8&255}return e.buffer}async function DS(r,t){let e=await fetch(r);if(!e.ok)throw new Error(`Could not load ${r} (${e.status})`);let i=+e.headers.get("Content-Length")||d0[r]||1e6,n=/\.txt$/.test(r),s=u=>n?NS(new Uint8Array(u)):u;if(!e.body||!e.body.getReader){let u=await e.arrayBuffer();return t&&t(u.byteLength,u.byteLength),s(u)}let o=e.body.getReader(),a=[],l=0;for(;;){let{done:u,value:f}=await o.read();if(u)break;a.push(f),l+=f.length,t&&t(l,Math.max(i,l))}let c=new Uint8Array(l),h=0;for(let u of a)c.set(u,h),h+=u.length;return s(c.buffer)}function FS(r){let t=new Uint8Array(r),e=new DataView(r);if(String.fromCharCode(t[0],t[1],t[2],t[3])!=="SCTX")throw new Error("bad texture pack");let i=e.getUint32(4,!0),n=JSON.parse(new TextDecoder().decode(t.subarray(8,8+i))),s=8+i,o=new Map;for(let a of n.items)o.set(a.name,{...a,blob:new Blob([t.subarray(s+a.off,s+a.off+a.len)],{type:"image/webp"})});return o}async function Af(r){if(typeof createImageBitmap=="function")try{return await createImageBitmap(r)}catch{}return await new Promise((t,e)=>{let i=URL.createObjectURL(r),n=new Image;n.onload=()=>{URL.revokeObjectURL(i),t(n)},n.onerror=()=>{URL.revokeObjectURL(i),e(new Error("image decode failed"))},n.src=i})}var mr=null,f0=null;function US(r,t){return mr||(mr=document.createElement("canvas"),f0=mr.getContext("2d",{willReadFrequently:!0})),(mr.width!==r||mr.height!==t)&&(mr.width=r,mr.height=t),f0}function Zc(r,t,e,i,n=0){let s=US(t,e);s.globalCompositeOperation="copy",s.drawImage(r,0,0,t,e);let o=s.getImageData(0,0,t,e).data;for(let a=0,l=t*e;a<l;a++)i[n+a]=o[a*4];return i}async function uo(r,t,{srgb:e=!0,repeat:i=!1,flipY:n=!1}={}){let s=r.get(t);if(!s)return null;let o=await Af(s.blob),a=new ze(o);return a.flipY=n,a.colorSpace=e?Ce:zi,a.generateMipmaps=!0,a.minFilter=ei,a.magFilter=be,a.anisotropy=4,i&&(a.wrapS=a.wrapT=$i),a.needsUpdate=!0,a}async function p0(r){let t=Object.values(Ca),e={},i={};t.forEach(h=>{e[h]=0,i[h]=d0[h]||1e6});let n=()=>{let h=0,u=0;for(let f of t)h+=e[f],u+=i[f];r&&r(Math.min(1,h/u))},s=h=>DS(h,(u,f)=>{e[h]=u,i[h]=f,n()}),[o,a,l,c]=await Promise.all([s(Ca.city),s(Ca.tex),s(Ca.arena),s(Ca.models).catch(()=>null)]);return{kit:u0(o),pack:FS(a),arena:JSON.parse(new TextDecoder().decode(l)),models:c}}var fo=Math.pow(2,-24),Pa=Symbol("SKIP_GENERATION"),Jc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Pa]:!1};function ve(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function Ia(r){let t=-1,e=-1/0;for(let i=0;i<3;i++){let n=r[i+3]-r[i];n>e&&(e=n,t=i)}return t}function Rf(r,t,e){for(let i=0;i<3;i++){let n=t[r+2*i],s=t[r+2*i+1],o=n-s,a=n+s;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function jc(r){let t=r[3]-r[0],e=r[4]-r[1],i=r[5]-r[2];return 2*(t*e+e*i+i*t)}function se(r,t){return t[r+15]===65535}function pe(r,t){return t[r+6]}function xe(r,t){return t[r+14]}function he(r){return r+8}function ue(r,t){let e=t[r+6];return r+e*8}function po(r,t){return t[r+7]}function Qc(r,t,e,i,n){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,f=1/0,d=1/0,p=-1/0,x=-1/0,m=-1/0,g=r.offset||0;for(let _=(t-g)*6,M=(t+e-g)*6;_<M;_+=6){let v=r[_+0],S=r[_+1],w=v-S,y=v+S;w<s&&(s=w),y>l&&(l=y),v<u&&(u=v),v>p&&(p=v);let b=r[_+2],A=r[_+3],R=b-A,P=b+A;R<o&&(o=R),P>c&&(c=P),b<f&&(f=b),b>x&&(x=b);let C=r[_+4],D=r[_+5],I=C-D,U=C+D;I<a&&(a=I),U>h&&(h=U),C<d&&(d=C),C>m&&(m=C)}i[0]=s,i[1]=o,i[2]=a,i[3]=l,i[4]=c,i[5]=h,n[0]=u,n[1]=f,n[2]=d,n[3]=p,n[4]=x,n[5]=m}var En=8,Pf=8,Cf=new Int32Array(En),Tn=new Float32Array(En*6),mo=new Float32Array(En*6),un=new Float32Array(6),th=new Float32Array(6),ws=new Int32Array(Pf),g0=new Float32Array(Pf*6);function kS(r,t,e,i){for(let n=0;n<3;n++){let s=t[r+2*n],o=t[r+2*n+1],a=s-o,l=s+o;a<e[i+n]&&(e[i+n]=a),l>e[i+n+3]&&(e[i+n+3]=l)}}function x0(r,t){let e=r[t+3]-r[t],i=r[t+4]-r[t+1],n=r[t+5]-r[t+2];return 2*(e*i+i*n+n*e)}function _0(r,t,e,i,n,s){let o=-1,a=0;if(s===0)o=Ia(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=Ia(r),o!==-1&&(a=zS(e,i,n,o));else if(s===2){let l=jc(r),c=1.25*n,h=e.offset||0,u=(i-h)*6,f=(i+n-h)*6;for(let d=0;d<3;d++){let p=t[d],g=(t[d+3]-p)/En;if(n<Pf){for(let _=0;_<n;_++){let M=u+_*6,v=e[M+2*d],S=_;for(;S>0&&e[ws[S-1]+2*d]>v;)ws[S]=ws[S-1],S--;ws[S]=M}for(let _=0;_<3;_++)un[_]=1/0,un[_+3]=-1/0,th[_]=1/0,th[_+3]=-1/0;for(let _=n-1;_>=0;_--)Rf(ws[_],e,th),g0.set(th,_*6);for(let _=0;_<n-1;_++){Rf(ws[_],e,un);let M=e[ws[_+1]+2*d];if(e[ws[_]+2*d]===M)continue;let v=_+1,S=n-v,w=jc(un)/l,y=x0(g0,v*6)/l,b=1+1.25*(w*v+y*S);b<c&&(o=d,c=b,a=M)}}else{for(let v=0;v<En;v++){Cf[v]=0;for(let S=0;S<3;S++)Tn[v*6+S]=1/0,Tn[v*6+S+3]=-1/0}for(let v=u;v<f;v+=6){let y=~~((e[v+2*d]-p)/g);y>=En&&(y=En-1),Cf[y]++,kS(v,e,Tn,y*6)}let _=(En-1)*6;for(let v=0;v<6;v++)mo[_+v]=Tn[_+v];for(let v=En-2;v>=0;v--){let S=v*6,w=S+6;for(let y=0;y<3;y++)mo[S+y]=Math.min(Tn[S+y],mo[w+y]),mo[S+y+3]=Math.max(Tn[S+y+3],mo[w+y+3])}let M=0;for(let v=0;v<En-1;v++){let S=v*6,w=Cf[v];if(w!==0)for(let P=0;P<3;P++)M===0?(un[P]=Tn[S+P],un[P+3]=Tn[S+P+3]):(un[P]=Math.min(un[P],Tn[S+P]),un[P+3]=Math.max(un[P+3],Tn[S+P+3]));M+=w;let y=0,b=0;M!==0&&(y=jc(un)/l);let A=n-M;A!==0&&(b=x0(mo,S+6)/l);let R=1+1.25*(y*M+b*A);R<c&&(o=d,c=R,a=p+g+v*g)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function zS(r,t,e,i){let n=0,s=r.offset;for(let o=t,a=t+e;o<a;o++)n+=r[(o-s)*6+i*2];return n/e}function y0(r,t,e,i,n,s){let o=i,a=i+n-1,l=s.pos,c=s.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let u=0;u<t;u++){let f=r[o*t+u];r[o*t+u]=r[a*t+u],r[a*t+u]=f}for(let u=0;u<6;u++){let f=o-h,d=a-h,p=e[f*6+u];e[f*6+u]=e[d*6+u],e[d*6+u]=p}o++,a--}else return o}}var HS=Math.pow(2,32),go=new Float32Array(6),eh=new Float32Array(6);function VS(r,t,e,i,n,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:u,useSharedArrayBuffer:f=!1}=n,d=r.primitiveBuffer,p=r.primitiveBufferStride,x=f?SharedArrayBuffer:ArrayBuffer,m=new x(32*Math.max(1,2*Math.ceil(i)-1)),g=new Float32Array(m),_=new Uint32Array(m),M=new Uint16Array(m),v=0,S=!1;return Qc(t,e,i,go,eh),b(e,i,0),m.slice(0,v*32);function w(A){u&&u((A-s.offset)/s.count)}function y(A,R,P){let C=A*2;_[A+6]=R,M[C+14]=P,M[C+15]=65535,w(R+P)}function b(A,R,P){let C=v++,D=C*8;g.set(go,D),!S&&P>=o&&(S=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let I=R>c;if(R<=l&&!I||P>=o){y(D,A,R);return}let U=_0(go,eh,t,A,R,h),k=U.axis===-1?-1:y0(d,p,t,A,R,U);if(U.axis===-1||k===A||k===A+R){if(!I){y(D,A,R);return}U.axis=Math.max(0,Ia(go)),k=A+Math.max(1,Math.floor(R/2))}_[D+7]=U.axis;let V=k-A;Qc(t,A,V,go,eh),b(A,V,P+1);let tt=v-C;if(tt>HS)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");_[D+6]=tt;let W=R-V;Qc(t,k,W,go,eh),b(k,W,P+1)}}function v0(r,t){let e=r.getRootRanges(t.range),i=e[0],n=e[e.length-1],s={offset:i.offset,count:n.offset+n.count-i.offset},o=new Float32Array(6*s.count);o.offset=s.offset,r.computePrimitiveBounds(s.offset,s.count,o),r._roots=e.map(a=>VS(r,o,a.offset,a.count,t,s))}var Ts=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var If=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},jt=new If;var Es,_o,xo=[],ih=new Ts(()=>new ae);function M0(r,t,e,i,n,s){Es=ih.getPrimitive(),_o=ih.getPrimitive(),xo.push(Es,_o),jt.setBuffer(r._roots[t]);let o=Lf(0,r.geometry,e,i,n,s);jt.clearBuffer(),ih.releasePrimitive(Es),ih.releasePrimitive(_o),xo.pop(),xo.pop();let a=xo.length;return a>0&&(_o=xo[a-1],Es=xo[a-2]),o}function Lf(r,t,e,i,n=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=jt,h=r*2;if(se(h,l)){let f=pe(r,c),d=xe(h,l);return ve(r,a,Es),i(f,d,!1,o,s+r/8,Es)}else{let R=function(C){let{uint16Array:D,uint32Array:I}=jt,U=C*2;for(;!se(U,D);)C=he(C),U=C*2;return pe(C,I)},P=function(C){let{uint16Array:D,uint32Array:I}=jt,U=C*2;for(;!se(U,D);)C=ue(C,I),U=C*2;return pe(C,I)+xe(U,D)},f=he(r),d=ue(r,c),p=f,x=d,m,g,_,M;if(n&&(_=Es,M=_o,ve(p,a,_),ve(x,a,M),m=n(_),g=n(M),g<m)){p=d,x=f;let C=m;m=g,g=C,_=M}_||(_=Es,ve(p,a,_));let v=se(p*2,l),S=e(_,v,m,o+1,s+p/8),w;if(S===2){let C=R(p),I=P(p)-C;w=i(C,I,!0,o+1,s+p/8,_)}else w=S&&Lf(p,t,e,i,n,s,o+1);if(w)return!0;M=_o,ve(x,a,M);let y=se(x*2,l),b=e(M,y,g,o+1,s+x/8),A;if(b===2){let C=R(x),I=P(x)-C;A=i(C,I,!0,o+1,s+x/8,M)}else A=b&&Lf(x,t,e,i,n,s,o+1);return!!A}}var La=new jt.constructor,nh=new jt.constructor,As=new Ts(()=>new ae),yo=new ae,vo=new ae,Df=new ae,Ff=new ae,Uf=!1;function S0(r,t,e,i){if(Uf)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Uf=!0;let n=r._roots,s=t._roots,o,a=0,l=0,c=new yt().copy(e).invert();for(let h=0,u=n.length;h<u;h++){La.setBuffer(n[h]),l=0;let f=As.getPrimitive();ve(0,La.float32Array,f),f.applyMatrix4(c);for(let d=0,p=s.length;d<p&&(nh.setBuffer(s[d]),o=fn(0,0,e,c,i,a,l,0,0,f),nh.clearBuffer(),l+=s[d].byteLength/32,!o);d++);if(As.releasePrimitive(f),La.clearBuffer(),a+=n[h].byteLength/32,o)break}return Uf=!1,o}function fn(r,t,e,i,n,s=0,o=0,a=0,l=0,c=null,h=!1){let u,f;h?(u=nh,f=La):(u=La,f=nh);let d=u.float32Array,p=u.uint32Array,x=u.uint16Array,m=f.float32Array,g=f.uint32Array,_=f.uint16Array,M=r*2,v=t*2,S=se(M,x),w=se(v,_),y=!1;if(w&&S)h?y=n(pe(t,g),xe(t*2,_),pe(r,p),xe(r*2,x),l,o+t/8,a,s+r/8):y=n(pe(r,p),xe(r*2,x),pe(t,g),xe(t*2,_),a,s+r/8,l,o+t/8);else if(w){let b=As.getPrimitive();ve(t,m,b),b.applyMatrix4(e);let A=he(r),R=ue(r,p);ve(A,d,yo),ve(R,d,vo);let P=b.intersectsBox(yo),C=b.intersectsBox(vo);y=P&&fn(t,A,i,e,n,o,s,l,a+1,b,!h)||C&&fn(t,R,i,e,n,o,s,l,a+1,b,!h),As.releasePrimitive(b)}else{let b=he(t),A=ue(t,g);ve(b,m,Df),ve(A,m,Ff);let R=c.intersectsBox(Df),P=c.intersectsBox(Ff);if(R&&P)y=fn(r,b,e,i,n,s,o,a,l+1,c,h)||fn(r,A,e,i,n,s,o,a,l+1,c,h);else if(R)if(S)y=fn(r,b,e,i,n,s,o,a,l+1,c,h);else{let C=As.getPrimitive();C.copy(Df).applyMatrix4(e);let D=he(r),I=ue(r,p);ve(D,d,yo),ve(I,d,vo);let U=C.intersectsBox(yo),k=C.intersectsBox(vo);y=U&&fn(b,D,i,e,n,o,s,l,a+1,C,!h)||k&&fn(b,I,i,e,n,o,s,l,a+1,C,!h),As.releasePrimitive(C)}else if(P)if(S)y=fn(r,A,e,i,n,s,o,a,l+1,c,h);else{let C=As.getPrimitive();C.copy(Ff).applyMatrix4(e);let D=he(r),I=ue(r,p);ve(D,d,yo),ve(I,d,vo);let U=C.intersectsBox(yo),k=C.intersectsBox(vo);y=U&&fn(A,D,i,e,n,o,s,l,a+1,C,!h)||k&&fn(A,I,i,e,n,o,s,l,a+1,C,!h),As.releasePrimitive(C)}}return y}var sh=new class{constructor(){let r=null,t=null,e=null,i=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(i)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=r=s._roots[o],this.uint16Array=e=new Uint16Array(r),this.uint32Array=t=new Uint32Array(r)},this.reset=()=>{this.root=null,this.buffer=r=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!se(o,e);)s=he(s),o=s*2;return pe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!se(o,e);)s=ue(s,t),o=s*2;return pe(s,t)+xe(o,e)};let n=(s,o,a)=>{let l=o*2,c=se(l,e);if(!s(a,c,o)&&!c){let u=he(o),f=ue(o,t);n(s,u,a+1),n(s,f,a+1)}};this.traverseBuffer=s=>{if(i)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");i=!0;try{n(s,0,0)}finally{i=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,h=t[l+6],u=e[c+14];return s(o,a,new Float32Array(r,l*4,6),h,u)}else{let c=po(l,t);return s(o,a,new Float32Array(r,l*4,6),c)}})}}};var b0=new ae,Mo=new Float32Array(6),rh=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Jc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),v0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,i,n){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=t,f=t+e;u<f;u++){this.writePrimitiveBounds(u,Mo,0);let[d,p,x,m,g,_]=Mo;d<s&&(s=d),m>l&&(l=m),p<o&&(o=p),g>c&&(c=g),x<a&&(a=x),_>h&&(h=_)}return i[n+0]=s,i[n+1]=o,i[n+2]=a,i[n+3]=l,i[n+4]=c,i[n+5]=h,i}computePrimitiveBounds(t,e,i){let n=i.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Mo,0);let[a,l,c,h,u,f]=Mo,d=(a+h)/2,p=(l+u)/2,x=(c+f)/2,m=(h-a)/2,g=(u-l)/2,_=(f-c)/2,M=(s-n)*6;i[M+0]=d,i[M+1]=m+(Math.abs(d)+m)*fo,i[M+2]=p,i[M+3]=g+(Math.abs(p)+g)*fo,i[M+4]=x,i[M+5]=_+(Math.abs(x)+_)*fo}return i}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let i=0,n=e.length;i<n;i++)e[i]+=t;else{let i=this._roots;for(let n=0;n<i.length;n++){let s=i[n],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/32;for(let c=0;c<l;c++){let h=8*c,u=2*h;se(u,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){sh.setBVH(this,e),sh.traverse(t),sh.reset()}refit(){let t=this._roots;for(let e=0,i=t.length;e<i;e++){let n=t[e],s=new Uint32Array(n),o=new Uint16Array(n),a=new Float32Array(n),l=n.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,u=h*2;if(se(u,o)){let d=pe(h,s),p=xe(u,o);this.writePrimitiveRangeBounds(d,p,Mo,0),a.set(Mo,h)}else{let d=he(h),p=ue(h,s);for(let x=0;x<3;x++){let m=a[d+x],g=a[d+x+3],_=a[p+x],M=a[p+x+3];a[h+x]=m<_?m:_,a[h+x+3]=g>M?g:M}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{ve(0,new Float32Array(i),b0),t.union(b0)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:i,intersectsRange:n,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(n&&s){let u=n;n=(f,d,p,x,m)=>u(f,d,p,x,m)?!0:a(f,d,this,s,p,x,o)}else n||(s?n=(u,f,d,p)=>a(u,f,this,s,d,p,o):n=(u,f,d)=>d);let l=!1,c=0,h=this._roots;for(let u=0,f=h.length;u<f;u++){let d=h[u];if(l=M0(this,u,i,n,e,c),l)break;c+=d.byteLength/32}return l}bvhcast(t,e,i){let{intersectsRanges:n}=i;return S0(this,t,e,n)}};function w0(){return typeof SharedArrayBuffer<"u"}function Of(r){return r.index?r.index.count:r.attributes.position.count}function Rs(r){return Of(r)/3}function WS(r,t=ArrayBuffer){return r>65535?new Uint32Array(new t(4*r)):new Uint16Array(new t(2*r))}function T0(r,t){if(!r.index){let e=r.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=WS(e,i);r.setIndex(new Ft(n,1));for(let s=0;s<e;s++)n[s]=s}}function XS(r,t,e){let i=Of(r)/e,n=t||r.drawRange,s=n.start/e,o=(n.start+n.count)/e,a=Math.max(0,s),l=Math.min(i,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function qS(r,t){return r.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Bf(r,t,e){let i=XS(r,t,e),n=qS(r,e);if(!n.length)return[i];let s=[],o=i.offset,a=i.offset+i.count,l=Of(r)/e,c=[];for(let f of n){let{offset:d,count:p}=f,x=d,m=isFinite(p)?p:l-d,g=d+m;x<a&&g>o&&(c.push({pos:Math.max(o,x),isStart:!0}),c.push({pos:Math.min(a,g),isStart:!1}))}c.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let h=0,u=null;for(let f of c){let d=f.pos;h!==0&&d!==u&&s.push({offset:u,count:d-u}),h+=f.isStart?1:-1,u=d}return s}function YS(r,t){let e=r[r.length-1],i=e.offset+e.count>2**16,n=r.reduce((c,h)=>c+h.count,0),s=i?4:2,o=t?new SharedArrayBuffer(n*s):new ArrayBuffer(n*s),a=i?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<r.length;c++){let{offset:h,count:u}=r[c];for(let f=0;f<u;f++)a[l+f]=h+f;l+=u}return a}var oh=class extends rh{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!w0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Jc,...e},e[Pa]||this.init(e)}init(t){let{geometry:e,primitiveStride:i}=this;if(t.indirect){let n=Bf(e,t.range,i),s=YS(n,t.useSharedArrayBuffer);this._indirectBuffer=s}else T0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ae))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Bf(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Vi=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,n=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}setFromPoints(t,e){let i=1/0,n=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);i=l<i?l:i,n=l>n?l:n}this.min=i,this.max=n}isSeparated(t){return this.min>t.max||t.min>this.max}};Vi.prototype.setFromBox=(function(){let r=new L;return function(e,i){let n=i.min,s=i.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=n.x*l+s.x*(1-l),r.y=n.y*c+s.y*(1-c),r.z=n.z*h+s.z*(1-h);let u=e.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();var KS=(function(){let r=new L,t=new L,e=new L;return function(n,s,o){let a=n.start,l=r,c=s.start,h=t;e.subVectors(a,c),r.subVectors(n.end,n.start),t.subVectors(s.end,s.start);let u=e.dot(h),f=h.dot(l),d=h.dot(h),p=e.dot(l),m=l.dot(l)*d-f*f,g,_;m!==0?g=(u*f-p*d)/m:g=0,_=(u+g*f)/d,o.x=g,o.y=_}})(),Na=(function(){let r=new Nt,t=new L,e=new L;return function(n,s,o,a){KS(n,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){n.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),n.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?n.at(0,o):n.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=n.start:h=n.end;let u;c<0?u=s.start:u=s.end;let f=t,d=e;if(n.closestPointToPoint(u,!0,t),s.closestPointToPoint(h,!0,e),f.distanceToSquared(u)<=d.distanceToSquared(h)){o.copy(f),a.copy(u);return}else{o.copy(h),a.copy(d);return}}}})(),E0=(function(){let r=new L,t=new L,e=new Si,i=new oi;return function(s,o){let{radius:a,center:l}=s,{a:c,b:h,c:u}=o;if(i.start=c,i.end=h,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(i.start=c,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(i.start=h,i.end=u,i.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;let x=o.getPlane(e);if(Math.abs(x.distanceToPoint(l))<=a){let g=x.projectPoint(l,t);if(o.containsPoint(g))return!0}return!1}})();var $S=["x","y","z"],es=1e-15,A0=es*es;function Ji(r){return Math.abs(r)<es}var ai=class extends di{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Vi),this.points=[this.a,this.b,this.c],this.plane=new Si,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new oi,this.needsUpdate=!0}intersectsSphere(t){return E0(t,this)}update(){let t=this.a,e=this.b,i=this.c,n=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,n);let c=s[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,n);let u=s[2],f=o[2];u.subVectors(e,i),f.setFromPoints(u,n);let d=s[3],p=o[3];d.subVectors(i,t),p.setFromPoints(d,n);let x=c.length(),m=u.length(),g=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<es?m<es||g<es?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(i)):m<es?g<es?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):g<es&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};ai.prototype.closestPointToSegment=(function(){let r=new L,t=new L,e=new oi;return function(n,s=null,o=null){this.needsUpdate&&this.update();let{start:a,end:l}=n,c=this.points,h,u=1/0,f=this.plane.distanceToPoint(a),d=this.plane.distanceToPoint(l);if(f*d<0&&this.plane.intersectLine(n,r)!==null&&this.containsPoint(r))return s&&s.copy(r),o&&o.copy(r),0;for(let p=0;p<3;p++){let x=(p+1)%3;e.start.copy(c[p]),e.end.copy(c[x]),Na(e,n,r,t),h=r.distanceToSquared(t),h<u&&(u=h,s&&s.copy(r),o&&o.copy(t))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(u)}})();ai.prototype.intersectsTriangle=(function(){let r=new ai,t=new Vi,e=new Vi,i=new L,n=new L,s=new L,o=new L,a=new oi,l=new oi,c=new L,h=new Nt,u=new Nt;function f(M,v,S,w){let y=i;!M.isDegenerateIntoPoint&&!M.isDegenerateIntoSegment?y.copy(M.plane.normal):y.copy(v.plane.normal);let b=M.satBounds,A=M.satAxes;for(let C=1;C<4;C++){let D=b[C],I=A[C];if(t.setFromPoints(I,v.points),D.isSeparated(t)||(o.copy(y).cross(I),t.setFromPoints(o,M.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}let R=v.satBounds,P=v.satAxes;for(let C=1;C<4;C++){let D=R[C],I=P[C];if(t.setFromPoints(I,M.points),D.isSeparated(t)||(o.crossVectors(y,I),t.setFromPoints(o,M.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}return S&&(w||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function d(M,v,S,w,y,b,A,R,P,C,D){let I=A/(A-R);C.x=w+(y-w)*I,D.start.subVectors(v,M).multiplyScalar(I).add(M),I=A/(A-P),C.y=w+(b-w)*I,D.end.subVectors(S,M).multiplyScalar(I).add(M)}function p(M,v,S,w,y,b,A,R,P,C,D){if(y>0)d(M.c,M.a,M.b,w,v,S,P,A,R,C,D);else if(b>0)d(M.b,M.a,M.c,S,v,w,R,A,P,C,D);else if(R*P>0||A!=0)d(M.a,M.b,M.c,v,S,w,A,R,P,C,D);else if(R!=0)d(M.b,M.a,M.c,S,v,w,R,A,P,C,D);else if(P!=0)d(M.c,M.a,M.b,w,v,S,P,A,R,C,D);else return!0;return!1}function x(M,v,S,w){let y=v.degenerateSegment,b=M.plane.distanceToPoint(y.start),A=M.plane.distanceToPoint(y.end);return Ji(b)?Ji(A)?f(M,v,S,w):(S&&(S.start.copy(y.start),S.end.copy(y.start)),M.containsPoint(y.start)):Ji(A)?(S&&(S.start.copy(y.end),S.end.copy(y.end)),M.containsPoint(y.end)):M.plane.intersectLine(y,i)!=null?(S&&(S.start.copy(i),S.end.copy(i)),M.containsPoint(i)):!1}function m(M,v,S){let w=v.a;return Ji(M.plane.distanceToPoint(w))&&M.containsPoint(w)?(S&&(S.start.copy(w),S.end.copy(w)),!0):!1}function g(M,v,S){let w=M.degenerateSegment,y=v.a;return w.closestPointToPoint(y,!0,i),y.distanceToSquared(i)<A0?(S&&(S.start.copy(y),S.end.copy(y)),!0):!1}function _(M,v,S,w){if(M.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){let y=M.degenerateSegment,b=v.degenerateSegment,A=n,R=s;y.delta(A),b.delta(R);let P=i.subVectors(b.start,y.start),C=A.x*R.y-A.y*R.x;if(Ji(C))return!1;let D=(P.x*R.y-P.y*R.x)/C,I=-(A.x*P.y-A.y*P.x)/C;if(D<0||D>1||I<0||I>1)return!1;let U=y.start.z+A.z*D,k=b.start.z+R.z*I;return Ji(U-k)?(S&&(S.start.copy(y.start).addScaledVector(A,D),S.end.copy(y.start).addScaledVector(A,D)),!0):!1}else return v.isDegenerateIntoPoint?g(M,v,S):x(v,M,S,w);else{if(M.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(M.a)<A0?(S&&(S.start.copy(M.a),S.end.copy(M.a)),!0):!1:v.isDegenerateIntoSegment?g(v,M,S):m(v,M,S);if(v.isDegenerateIntoPoint)return m(M,v,S);if(v.isDegenerateIntoSegment)return x(M,v,S,w)}}return function(v,S=null,w=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(r.copy(v),r.update(),v=r);let y=_(this,v,S,w);if(y!==void 0)return y;let b=this.plane,A=v.plane,R=A.distanceToPoint(this.a),P=A.distanceToPoint(this.b),C=A.distanceToPoint(this.c);Ji(R)&&(R=0),Ji(P)&&(P=0),Ji(C)&&(C=0);let D=R*P,I=R*C;if(D>0&&I>0)return!1;let U=b.distanceToPoint(v.a),k=b.distanceToPoint(v.b),V=b.distanceToPoint(v.c);Ji(U)&&(U=0),Ji(k)&&(k=0),Ji(V)&&(V=0);let tt=U*k,W=U*V;if(tt>0&&W>0)return!1;n.copy(b.normal),s.copy(A.normal);let Q=n.cross(s),et=0,xt=Math.abs(Q.x),It=Math.abs(Q.y);It>xt&&(xt=It,et=1),Math.abs(Q.z)>xt&&(et=2);let at=$S[et],vt=this.a[at],Ct=this.b[at],pt=this.c[at],Ot=v.a[at],Re=v.b[at],Et=v.c[at];if(p(this,vt,Ct,pt,D,I,R,P,C,h,a))return f(this,v,S,w);if(p(v,Ot,Re,Et,tt,W,U,k,V,u,l))return f(this,v,S,w);if(h.y<h.x){let Xt=h.y;h.y=h.x,h.x=Xt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(u.y<u.x){let Xt=u.y;u.y=u.x,u.x=Xt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<u.x||u.y<h.x?!1:(S&&(u.x>h.x?S.start.copy(l.start):S.start.copy(a.start),u.y<h.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();ai.prototype.distanceToPoint=(function(){let r=new L;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();ai.prototype.distanceToTriangle=(function(){let r=new L,t=new L,e=["a","b","c"],i=new oi,n=new oi;return function(o,a=null,l=null){let c=a||l?i:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let f,d=e[u],p=o[d];this.closestPointToPoint(p,r),f=p.distanceToSquared(r),f<h&&(h=f,a&&a.copy(r),l&&l.copy(p));let x=this[d];o.closestPointToPoint(x,r),f=x.distanceToSquared(r),f<h&&(h=f,a&&a.copy(x),l&&l.copy(r))}for(let u=0;u<3;u++){let f=e[u],d=e[(u+1)%3];i.set(this[f],this[d]);for(let p=0;p<3;p++){let x=e[p],m=e[(p+1)%3];n.set(o[x],o[m]),Na(i,n,r,t);let g=r.distanceToSquared(t);g<h&&(h=g,a&&a.copy(r),l&&l.copy(t))}}return Math.sqrt(h)}})();var Be=class{constructor(t,e,i){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new yt,this.invMatrix=new yt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Vi),this.alignedSatBounds=new Array(3).fill().map(()=>new Vi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Be.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,i=this.max,n=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){let f=1*c|2*h|4*u,d=n[f];d.x=c?i.x:e.x,d.y=h?i.y:e.y,d.z=u?i.z:e.z,d.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=n[0];for(let c=0;c<3;c++){let h=o[c],u=s[c],f=1<<c,d=n[f];h.subVectors(a,d),u.setFromPoints(h,n)}let l=this.alignedSatBounds;l[0].setFromPointsField(n,"x"),l[1].setFromPointsField(n,"y"),l[2].setFromPointsField(n,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Be.prototype.intersectsBox=(function(){let r=new Vi;return function(e){this.needsUpdate&&this.update();let i=e.min,n=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=i.x,r.max=n.x,a[0].isSeparated(r)||(r.min=i.y,r.max=n.y,a[1].isSeparated(r))||(r.min=i.z,r.max=n.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){let c=o[l],h=s[l];if(r.setFromBox(c,e),h.isSeparated(r))return!1}return!0}})();Be.prototype.intersectsTriangle=(function(){let r=new ai,t=new Array(3),e=new Vi,i=new Vi,n=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],p=l[f];if(e.setFromPoints(p,t),d.isSeparated(e))return!1}let c=o.satBounds,h=o.satAxes,u=this.points;for(let f=0;f<3;f++){let d=c[f],p=h[f];if(e.setFromPoints(p,u),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=l[f];for(let p=0;p<4;p++){let x=h[p];if(n.crossVectors(d,x),e.setFromPoints(n,t),i.setFromPoints(n,u),e.isSeparated(i))return!1}}return!0}})();Be.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Be.prototype.distanceToPoint=(function(){let r=new L;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();Be.prototype.distanceToBox=(function(){let r=["x","y","z"],t=new Array(12).fill().map(()=>new oi),e=new Array(12).fill().map(()=>new oi),i=new L,n=new L;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(n),this.closestPointToPoint(n,i),o.closestPointToPoint(i,n),l&&l.copy(i),c&&c.copy(n)),0;let h=a*a,u=o.min,f=o.max,d=this.points,p=1/0;for(let m=0;m<8;m++){let g=d[m];n.copy(g).clamp(u,f);let _=g.distanceToSquared(n);if(_<p&&(p=_,l&&l.copy(g),c&&c.copy(n),_<h))return Math.sqrt(_)}let x=0;for(let m=0;m<3;m++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){let M=(m+1)%3,v=(m+2)%3,S=g<<M|_<<v,w=1<<m|g<<M|_<<v,y=d[S],b=d[w];t[x].set(y,b);let R=r[m],P=r[M],C=r[v],D=e[x],I=D.start,U=D.end;I[R]=u[R],I[P]=g?u[P]:f[P],I[C]=_?u[C]:f[C],U[R]=f[R],U[P]=g?u[P]:f[P],U[C]=_?u[C]:f[C],x++}for(let m=0;m<=1;m++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){n.x=m?f.x:u.x,n.y=g?f.y:u.y,n.z=_?f.z:u.z,this.closestPointToPoint(n,i);let M=n.distanceToSquared(i);if(M<p&&(p=M,l&&l.copy(i),c&&c.copy(n),M<h))return Math.sqrt(M)}for(let m=0;m<12;m++){let g=t[m];for(let _=0;_<12;_++){let M=e[_];Na(g,M,i,n);let v=i.distanceToSquared(n);if(v<p&&(p=v,l&&l.copy(i),c&&c.copy(n),v<h))return Math.sqrt(v)}}return Math.sqrt(p)}})();var kf=class extends Ts{constructor(){super(()=>new ai)}},Ai=new kf;var Da=new L,zf=new L;function R0(r,t,e={},i=0,n=1/0){let s=i*i,o=n*n,a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:h=>(Da.copy(t).clamp(h.min,h.max),Da.distanceToSquared(t)),intersectsBounds:(h,u,f)=>f<a&&f<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(t,Da);let f=t.distanceToSquared(Da);return f<a&&(zf.copy(Da),a=f,l=u),f<s}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy(zf):e.point=zf.clone(),e.distance=c,e.faceIndex=l,e}var ah=parseInt("187")>=169,ZS=parseInt("187")<=161,gr=new L,xr=new L,_r=new L,lh=new Nt,ch=new Nt,hh=new Nt,C0=new L,P0=new L,I0=new L,Fa=new L;function JS(r,t,e,i,n,s,o,a){let l;if(s===Ke?l=r.intersectTriangle(i,e,t,!0,n):l=r.intersectTriangle(t,e,i,s!==Le,n),l===null)return null;let c=r.origin.distanceTo(n);return c<o||c>a?null:{distance:c,point:n.clone()}}function L0(r,t,e,i,n,s,o,a,l,c,h){gr.fromBufferAttribute(t,s),xr.fromBufferAttribute(t,o),_r.fromBufferAttribute(t,a);let u=JS(r,gr,xr,_r,Fa,l,c,h);if(u){if(i){lh.fromBufferAttribute(i,s),ch.fromBufferAttribute(i,o),hh.fromBufferAttribute(i,a),u.uv=new Nt;let d=di.getInterpolation(Fa,gr,xr,_r,lh,ch,hh,u.uv);ah||(u.uv=d)}if(n){lh.fromBufferAttribute(n,s),ch.fromBufferAttribute(n,o),hh.fromBufferAttribute(n,a),u.uv1=new Nt;let d=di.getInterpolation(Fa,gr,xr,_r,lh,ch,hh,u.uv1);ah||(u.uv1=d),ZS&&(u.uv2=u.uv1)}if(e){C0.fromBufferAttribute(e,s),P0.fromBufferAttribute(e,o),I0.fromBufferAttribute(e,a),u.normal=new L;let d=di.getInterpolation(Fa,gr,xr,_r,C0,P0,I0,u.normal);u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1),ah||(u.normal=d)}let f={a:s,b:o,c:a,normal:new L,materialIndex:0};if(di.getNormal(gr,xr,_r,f.normal),u.face=f,u.faceIndex=s,ah){let d=new L;di.getBarycoord(Fa,gr,xr,_r,d),u.barycoord=d}}return u}function N0(r){return r&&r.isMaterial?r.side:r}function So(r,t,e,i,n,s,o){let a=i*3,l=a+0,c=a+1,h=a+2,{index:u,groups:f}=r;r.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));let{position:d,normal:p,uv:x,uv1:m}=r.attributes;if(Array.isArray(t)){let g=i*3;for(let _=0,M=f.length;_<M;_++){let{start:v,count:S,materialIndex:w}=f[_];if(g>=v&&g<v+S){let y=N0(t[w]),b=L0(e,d,p,x,m,l,c,h,y,s,o);if(b)if(b.faceIndex=i,b.face.materialIndex=w,n)n.push(b);else return b}}}else{let g=N0(t),_=L0(e,d,p,x,m,l,c,h,g,s,o);if(_)if(_.faceIndex=i,_.face.materialIndex=0,n)n.push(_);else return _}return null}function Me(r,t,e,i){let n=r.a,s=r.b,o=r.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),n.x=i.getX(a),n.y=i.getY(a),n.z=i.getZ(a),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),o.x=i.getX(c),o.y=i.getY(c),o.z=i.getZ(c)}function D0(r,t,e,i,n,s,o,a){let{geometry:l,_indirectBuffer:c}=r;for(let h=i,u=i+n;h<u;h++)So(l,t,e,h,s,o,a)}function F0(r,t,e,i,n,s,o){let{geometry:a,_indirectBuffer:l}=r,c=1/0,h=null;for(let u=i,f=i+n;u<f;u++){let d;d=So(a,t,e,u,null,s,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function U0(r,t,e,i,n,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=r,u=t+r;h<u;h++){let f;if(f=h,Me(o,f*3,l,c),o.needsUpdate=!0,i(o,f,n,s))return!0}return!1}function O0(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,i=e.index?e.index.array:null,n=e.attributes.position,s,o,a,l,c=0,h=r._roots;for(let f=0,d=h.length;f<d;f++)s=h[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(f,d,p=!1){let x=f*2;if(se(x,a)){let m=pe(f,o),g=xe(x,a),_=1/0,M=1/0,v=1/0,S=-1/0,w=-1/0,y=-1/0;for(let b=3*m,A=3*(m+g);b<A;b++){let R=i[b],P=n.getX(R),C=n.getY(R),D=n.getZ(R);P<_&&(_=P),P>S&&(S=P),C<M&&(M=C),C>w&&(w=C),D<v&&(v=D),D>y&&(y=D)}return l[f+0]!==_||l[f+1]!==M||l[f+2]!==v||l[f+3]!==S||l[f+4]!==w||l[f+5]!==y?(l[f+0]=_,l[f+1]=M,l[f+2]=v,l[f+3]=S,l[f+4]=w,l[f+5]=y,!0):!1}else{let m=he(f),g=ue(f,o),_=p,M=!1,v=!1;if(t){if(!_){let R=m/8+d/32,P=g/8+d/32;M=t.has(R),v=t.has(P),_=!M&&!v}}else M=!0,v=!0;let S=_||M,w=_||v,y=!1;S&&(y=u(m,d,_));let b=!1;w&&(b=u(g,d,_));let A=y||b;if(A)for(let R=0;R<3;R++){let P=m+R,C=g+R,D=l[P],I=l[P+3],U=l[C],k=l[C+3];l[f+R]=D<U?D:U,l[f+R+3]=I>k?I:k}return A}}}function gi(r,t,e,i,n){let s,o,a,l,c,h,u=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,p=e.origin.x,x=e.origin.y,m=e.origin.z,g=t[r],_=t[r+3],M=t[r+1],v=t[r+3+1],S=t[r+2],w=t[r+3+2];return u>=0?(s=(g-p)*u,o=(_-p)*u):(s=(_-p)*u,o=(g-p)*u),f>=0?(a=(M-x)*f,l=(v-x)*f):(a=(v-x)*f,l=(M-x)*f),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(S-m)*d,h=(w-m)*d):(c=(w-m)*d,h=(S-m)*d),s>h||c>o)?!1:((c>s||s!==s)&&(s=c),(h<o||o!==o)&&(o=h),s<=n&&o>=i)}function B0(r,t,e,i,n,s,o,a){let{geometry:l,_indirectBuffer:c}=r;for(let h=i,u=i+n;h<u;h++){let f=c?c[h]:h;So(l,t,e,f,s,o,a)}}function k0(r,t,e,i,n,s,o){let{geometry:a,_indirectBuffer:l}=r,c=1/0,h=null;for(let u=i,f=i+n;u<f;u++){let d;d=So(a,t,e,l?l[u]:u,null,s,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function z0(r,t,e,i,n,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=r,u=t+r;h<u;h++){let f;if(f=e.resolveTriangleIndex(h),Me(o,f*3,l,c),o.needsUpdate=!0,i(o,f,n,s))return!0}return!1}function H0(r,t,e,i,n,s,o){jt.setBuffer(r._roots[t]),gi(0,jt.float32Array,i,s,o)&&Hf(0,r,e,i,n,s,o),jt.clearBuffer()}function Hf(r,t,e,i,n,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=jt,h=r*2;if(se(h,l)){let f=pe(r,c),d=xe(h,l);D0(t,e,i,f,d,n,s,o)}else{let f=he(r);gi(f,a,i,s,o)&&Hf(f,t,e,i,n,s,o);let d=ue(r,c);gi(d,a,i,s,o)&&Hf(d,t,e,i,n,s,o)}}var jS=["x","y","z"];function V0(r,t,e,i,n,s){jt.setBuffer(r._roots[t]);let o=null;return gi(0,jt.float32Array,i,n,s)&&(o=Vf(0,r,e,i,n,s)),jt.clearBuffer(),o}function Vf(r,t,e,i,n,s){let{float32Array:o,uint16Array:a,uint32Array:l}=jt,c=r*2;if(se(c,a)){let u=pe(r,l),f=xe(c,a);return F0(t,e,i,u,f,n,s)}else{let u=po(r,l),f=jS[u],p=i.direction[f]>=0,x,m;p?(x=he(r),m=ue(r,l)):(x=ue(r,l),m=he(r));let _=gi(x,o,i,n,s)?Vf(x,t,e,i,n,s):null;if(_){let S=_.point[f];if(p?S<=o[m+u]:S>=o[m+u+3])return _}let v=gi(m,o,i,n,s)?Vf(m,t,e,i,n,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var uh=new ae,bo=new ai,wo=new ai,Ua=new yt,G0=new Be,fh=new Be;function W0(r,t,e,i){jt.setBuffer(r._roots[t]);let n=Gf(0,r,e,i);return jt.clearBuffer(),n}function Gf(r,t,e,i,n=null){let{float32Array:s,uint16Array:o,uint32Array:a}=jt,l=r*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),G0.set(e.boundingBox.min,e.boundingBox.max,i),n=G0),se(l,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,p=e.attributes.position,x=pe(r,a),m=xe(l,o);if(Ua.copy(i).invert(),e.boundsTree)return ve(r,s,fh),fh.matrix.copy(Ua),fh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>fh.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let M=x*3,v=(m+x)*3;M<v;M+=3)if(Me(wo,M,u,f),wo.needsUpdate=!0,_.intersectsTriangle(wo))return!0;return!1}});{let g=Rs(e);for(let _=x*3,M=(m+x)*3;_<M;_+=3){Me(bo,_,u,f),bo.a.applyMatrix4(Ua),bo.b.applyMatrix4(Ua),bo.c.applyMatrix4(Ua),bo.needsUpdate=!0;for(let v=0,S=g*3;v<S;v+=3)if(Me(wo,v,d,p),wo.needsUpdate=!0,bo.intersectsTriangle(wo))return!0}}}else{let h=he(r),u=ue(r,a);return ve(h,s,uh),!!(n.intersectsBox(uh)&&Gf(h,t,e,i,n)||(ve(u,s,uh),n.intersectsBox(uh)&&Gf(u,t,e,i,n)))}}var dh=new yt,Wf=new Be,Oa=new Be,QS=new L,tb=new L,eb=new L,ib=new L;function X0(r,t,e,i={},n={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Wf.set(t.boundingBox.min,t.boundingBox.max,e),Wf.needsUpdate=!0;let a=r.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,u=t.index,f=Ai.getPrimitive(),d=Ai.getPrimitive(),p=QS,x=tb,m=null,g=null;n&&(m=eb,g=ib);let _=1/0,M=null,v=null;return dh.copy(e).invert(),Oa.matrix.copy(dh),r.shapecast({boundsTraverseOrder:S=>Wf.distanceToBox(S),intersectsBounds:(S,w,y)=>y<_&&y<o?(w&&(Oa.min.copy(S.min),Oa.max.copy(S.max),Oa.needsUpdate=!0),!0):!1,intersectsRange:(S,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:b=>Oa.distanceToBox(b),intersectsBounds:(b,A,R)=>R<_&&R<o,intersectsRange:(b,A)=>{for(let R=b,P=b+A;R<P;R++){Me(d,3*R,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let C=S,D=S+w;C<D;C++){Me(f,3*C,c,l),f.needsUpdate=!0;let I=f.distanceToTriangle(d,p,m);if(I<_&&(x.copy(p),g&&g.copy(m),_=I,M=C,v=R),I<s)return!0}}}});{let y=Rs(t);for(let b=0,A=y;b<A;b++){Me(d,3*b,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let R=S,P=S+w;R<P;R++){Me(f,3*R,c,l),f.needsUpdate=!0;let C=f.distanceToTriangle(d,p,m);if(C<_&&(x.copy(p),g&&g.copy(m),_=C,M=R,v=b),C<s)return!0}}}}}),Ai.releasePrimitive(f),Ai.releasePrimitive(d),_===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=_,i.faceIndex=M,n&&(n.point?n.point.copy(g):n.point=g.clone(),n.point.applyMatrix4(dh),x.applyMatrix4(dh),n.distance=x.sub(n.point).length(),n.faceIndex=v),i)}function q0(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,i=e.index?e.index.array:null,n=e.attributes.position,s,o,a,l,c=0,h=r._roots;for(let f=0,d=h.length;f<d;f++)s=h[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(f,d,p=!1){let x=f*2;if(se(x,a)){let m=pe(f,o),g=xe(x,a),_=1/0,M=1/0,v=1/0,S=-1/0,w=-1/0,y=-1/0;for(let b=m,A=m+g;b<A;b++){let R=3*r.resolveTriangleIndex(b);for(let P=0;P<3;P++){let C=R+P;C=i?i[C]:C;let D=n.getX(C),I=n.getY(C),U=n.getZ(C);D<_&&(_=D),D>S&&(S=D),I<M&&(M=I),I>w&&(w=I),U<v&&(v=U),U>y&&(y=U)}}return l[f+0]!==_||l[f+1]!==M||l[f+2]!==v||l[f+3]!==S||l[f+4]!==w||l[f+5]!==y?(l[f+0]=_,l[f+1]=M,l[f+2]=v,l[f+3]=S,l[f+4]=w,l[f+5]=y,!0):!1}else{let m=he(f),g=ue(f,o),_=p,M=!1,v=!1;if(t){if(!_){let R=m/8+d/32,P=g/8+d/32;M=t.has(R),v=t.has(P),_=!M&&!v}}else M=!0,v=!0;let S=_||M,w=_||v,y=!1;S&&(y=u(m,d,_));let b=!1;w&&(b=u(g,d,_));let A=y||b;if(A)for(let R=0;R<3;R++){let P=m+R,C=g+R,D=l[P],I=l[P+3],U=l[C],k=l[C+3];l[f+R]=D<U?D:U,l[f+R+3]=I>k?I:k}return A}}}function Y0(r,t,e,i,n,s,o){jt.setBuffer(r._roots[t]),gi(0,jt.float32Array,i,s,o)&&Xf(0,r,e,i,n,s,o),jt.clearBuffer()}function Xf(r,t,e,i,n,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=jt,h=r*2;if(se(h,l)){let f=pe(r,c),d=xe(h,l);B0(t,e,i,f,d,n,s,o)}else{let f=he(r);gi(f,a,i,s,o)&&Xf(f,t,e,i,n,s,o);let d=ue(r,c);gi(d,a,i,s,o)&&Xf(d,t,e,i,n,s,o)}}var nb=["x","y","z"];function K0(r,t,e,i,n,s){jt.setBuffer(r._roots[t]);let o=null;return gi(0,jt.float32Array,i,n,s)&&(o=qf(0,r,e,i,n,s)),jt.clearBuffer(),o}function qf(r,t,e,i,n,s){let{float32Array:o,uint16Array:a,uint32Array:l}=jt,c=r*2;if(se(c,a)){let u=pe(r,l),f=xe(c,a);return k0(t,e,i,u,f,n,s)}else{let u=po(r,l),f=nb[u],p=i.direction[f]>=0,x,m;p?(x=he(r),m=ue(r,l)):(x=ue(r,l),m=he(r));let _=gi(x,o,i,n,s)?qf(x,t,e,i,n,s):null;if(_){let S=_.point[f];if(p?S<=o[m+u]:S>=o[m+u+3])return _}let v=gi(m,o,i,n,s)?qf(m,t,e,i,n,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var ph=new ae,To=new ai,Eo=new ai,Ba=new yt,$0=new Be,mh=new Be;function Z0(r,t,e,i){jt.setBuffer(r._roots[t]);let n=Yf(0,r,e,i);return jt.clearBuffer(),n}function Yf(r,t,e,i,n=null){let{float32Array:s,uint16Array:o,uint32Array:a}=jt,l=r*2;if(n===null&&(e.boundingBox||e.computeBoundingBox(),$0.set(e.boundingBox.min,e.boundingBox.max,i),n=$0),se(l,o)){let h=t.geometry,u=h.index,f=h.attributes.position,d=e.index,p=e.attributes.position,x=pe(r,a),m=xe(l,o);if(Ba.copy(i).invert(),e.boundsTree)return ve(r,s,mh),mh.matrix.copy(Ba),mh.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>mh.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(i),_.b.applyMatrix4(i),_.c.applyMatrix4(i),_.needsUpdate=!0;for(let M=x,v=m+x;M<v;M++)if(Me(Eo,3*t.resolveTriangleIndex(M),u,f),Eo.needsUpdate=!0,_.intersectsTriangle(Eo))return!0;return!1}});{let g=Rs(e);for(let _=x,M=m+x;_<M;_++){let v=t.resolveTriangleIndex(_);Me(To,3*v,u,f),To.a.applyMatrix4(Ba),To.b.applyMatrix4(Ba),To.c.applyMatrix4(Ba),To.needsUpdate=!0;for(let S=0,w=g*3;S<w;S+=3)if(Me(Eo,S,d,p),Eo.needsUpdate=!0,To.intersectsTriangle(Eo))return!0}}}else{let h=he(r),u=ue(r,a);return ve(h,s,ph),!!(n.intersectsBox(ph)&&Yf(h,t,e,i,n)||(ve(u,s,ph),n.intersectsBox(ph)&&Yf(u,t,e,i,n)))}}var gh=new yt,Kf=new Be,ka=new Be,sb=new L,rb=new L,ob=new L,ab=new L;function J0(r,t,e,i={},n={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Kf.set(t.boundingBox.min,t.boundingBox.max,e),Kf.needsUpdate=!0;let a=r.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,u=t.index,f=Ai.getPrimitive(),d=Ai.getPrimitive(),p=sb,x=rb,m=null,g=null;n&&(m=ob,g=ab);let _=1/0,M=null,v=null;return gh.copy(e).invert(),ka.matrix.copy(gh),r.shapecast({boundsTraverseOrder:S=>Kf.distanceToBox(S),intersectsBounds:(S,w,y)=>y<_&&y<o?(w&&(ka.min.copy(S.min),ka.max.copy(S.max),ka.needsUpdate=!0),!0):!1,intersectsRange:(S,w)=>{if(t.boundsTree){let y=t.boundsTree;return y.shapecast({boundsTraverseOrder:b=>ka.distanceToBox(b),intersectsBounds:(b,A,R)=>R<_&&R<o,intersectsRange:(b,A)=>{for(let R=b,P=b+A;R<P;R++){let C=y.resolveTriangleIndex(R);Me(d,3*C,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=S,I=S+w;D<I;D++){let U=r.resolveTriangleIndex(D);Me(f,3*U,c,l),f.needsUpdate=!0;let k=f.distanceToTriangle(d,p,m);if(k<_&&(x.copy(p),g&&g.copy(m),_=k,M=D,v=R),k<s)return!0}}}})}else{let y=Rs(t);for(let b=0,A=y;b<A;b++){Me(d,3*b,u,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let R=S,P=S+w;R<P;R++){let C=r.resolveTriangleIndex(R);Me(f,3*C,c,l),f.needsUpdate=!0;let D=f.distanceToTriangle(d,p,m);if(D<_&&(x.copy(p),g&&g.copy(m),_=D,M=R,v=b),D<s)return!0}}}}}),Ai.releasePrimitive(f),Ai.releasePrimitive(d),_===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=_,i.faceIndex=M,n&&(n.point?n.point.copy(g):n.point=g.clone(),n.point.applyMatrix4(gh),x.applyMatrix4(gh),n.distance=x.sub(n.point).length(),n.faceIndex=v),i)}function $f(r,t,e){return r===null?null:(r.point.applyMatrix4(t.matrixWorld),r.distance=r.point.distanceTo(e.ray.origin),r.object=t,r)}var xh=new Be,_h=new on,j0=new L,Q0=new yt,tg=new L,Zf=["getX","getY","getZ"],Ao=class r extends oh{static serialize(t,e={}){e={cloneBuffers:!0,...e};let i=t.geometry,n=t._roots,s=t._indirectBuffer,o=i.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=n.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=n,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};let{index:n,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new r(e,{...i,[Pa]:!0});if(a._roots=s,a._indirectBuffer=o||null,i.setIndex){let c=e.getIndex();if(c===null){let h=new Ft(t.index,1,!1);e.setIndex(h)}else c.array!==n&&(c.array.set(n),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let u=c[h],f=new Uint32Array(u),d=new Uint16Array(u);for(let p=0,x=u.byteLength/32;p<x;p++){let m=8*p,g=2*m;se(g,d)||(f[m+6]=f[m+6]/8-p)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,i){let n=this.geometry,s=this._indirectBuffer,o=n.attributes.position,a=n.index?n.index.array:null,c=(s?s[t]:t)*3,h=c+0,u=c+1,f=c+2;a&&(h=a[h],u=a[u],f=a[f]);for(let d=0;d<3;d++){let p=o[Zf[d]](h),x=o[Zf[d]](u),m=o[Zf[d]](f),g=p;x<g&&(g=x),m<g&&(g=m);let _=p;x>_&&(_=x),m>_&&(_=m),e[i+d]=g,e[i+d+3]=_}return e}computePrimitiveBounds(t,e,i){let n=this.geometry,s=this._indirectBuffer,o=n.attributes.position,a=n.index?n.index.array:null,l=o.normalized;if(t<0||e+t-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,u=3;o.isInterleavedBufferAttribute&&(u=o.data.stride);let f=["getX","getY","getZ"],d=i.offset;for(let p=t,x=t+e;p<x;p++){let g=(s?s[p]:p)*3,_=(p-d)*6,M=g+0,v=g+1,S=g+2;a&&(M=a[M],v=a[v],S=a[S]),l||(M=M*u+h,v=v*u+h,S=S*u+h);for(let w=0;w<3;w++){let y,b,A;l?(y=o[f[w]](M),b=o[f[w]](v),A=o[f[w]](S)):(y=c[M+w],b=c[v+w],A=c[S+w]);let R=y;b<R&&(R=b),A<R&&(R=A);let P=y;b>P&&(P=b),A>P&&(P=A);let C=(P-R)/2,D=w*2;i[_+D+0]=R+C,i[_+D+1]=C+(Math.abs(R)+C)*fo}}return i}raycastObject3D(t,e,i=[]){let{material:n}=t;if(n===void 0)return;Q0.copy(t.matrixWorld).invert(),_h.copy(e.ray).applyMatrix4(Q0),tg.setFromMatrixScale(t.matrixWorld),j0.copy(_h.direction).multiply(tg);let s=j0.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(_h,n,o,a);l=$f(l,t,e),l&&i.push(l)}else{let l=this.raycast(_h,n,o,a);for(let c=0,h=l.length;c<h;c++){let u=$f(l[c],t,e);u&&i.push(u)}}return i}refit(t=null){return(this.indirect?q0:O0)(this,t)}raycast(t,e=Oi,i=0,n=1/0){let s=this._roots,o=[],a=this.indirect?Y0:H0;for(let l=0,c=s.length;l<c;l++)a(this,l,e,t,o,i,n);return o}raycastFirst(t,e=Oi,i=0,n=1/0){let s=this._roots,o=null,a=this.indirect?K0:V0;for(let l=0,c=s.length;l<c;l++){let h=a(this,l,e,t,i,n);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let i=!1,n=this._roots,s=this.indirect?Z0:W0;for(let o=0,a=n.length;o<a&&(i=s(this,o,t,e),!i);o++);return i}shapecast(t){let e=Ai.getPrimitive(),i=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?z0:U0});return Ai.releasePrimitive(e),i}bvhcast(t,e,i){let{intersectsRanges:n,intersectsTriangles:s}=i,o=Ai.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?p=>{let x=this.resolveTriangleIndex(p);Me(o,x*3,a,l)}:p=>{Me(o,p*3,a,l)},h=Ai.getPrimitive(),u=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?p=>{let x=t.resolveTriangleIndex(p);Me(h,x*3,u,f)}:p=>{Me(h,p*3,u,f)};if(s){if(!(t instanceof r))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let p=(x,m,g,_,M,v,S,w)=>{for(let y=g,b=g+_;y<b;y++){d(y),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let A=x,R=x+m;A<R;A++)if(c(A),o.needsUpdate=!0,s(o,h,A,y,M,v,S,w))return!0}return!1};if(n){let x=n;n=function(m,g,_,M,v,S,w,y){return x(m,g,_,M,v,S,w,y)?!0:p(m,g,_,M,v,S,w,y)}}else n=p}return super.bvhcast(t,e,{intersectsRanges:n})}intersectsBox(t,e){return xh.set(t.min,t.max,e),xh.needsUpdate=!0,this.shapecast({intersectsBounds:i=>xh.intersectsBox(i),intersectsTriangle:i=>xh.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},n={},s=0,o=1/0){return(this.indirect?J0:X0)(this,t,e,i,n,s,o)}closestPointToPoint(t,e={},i=0,n=1/0){return R0(this,t,e,i,n)}};var Cs=class{constructor(t=65536,e=1<<17){this.pos=new Float32Array(t*3),this.nor=new Int8Array(t*4),this.uv=new Float32Array(t*2),this.mat=new Uint8Array(t*4),this.idx=new Uint32Array(e),this.nv=0,this.ni=0}_growV(t){let e=this.nv+t,i=this.pos.length/3;if(e<=i)return;for(;i<e;)i*=2;let n=(s,o)=>{let a=new s.constructor(o);return a.set(s),a};this.pos=n(this.pos,i*3),this.nor=n(this.nor,i*4),this.uv=n(this.uv,i*2),this.mat=n(this.mat,i*4)}_growI(t){let e=this.ni+t,i=this.idx.length;if(e<=i)return;for(;i<e;)i*=2;let n=new Uint32Array(i);n.set(this.idx),this.idx=n}addKit(t,e,i,n){this._growV(t.nv),this._growI(t.nt*3);let{i16:s,u8:o,i8:a,idx:l}=t,c=this.nv,h=this.pos,u=this.nor,f=this.uv,d=this.mat,p=Math.hypot(e[0],e[1],e[2]),x=Math.hypot(e[4],e[5],e[6]),m=Math.hypot(e[8],e[9],e[10]),g=e[0]/(p*p),_=e[1]/(p*p),M=e[2]/(p*p),v=e[4]/(x*x),S=e[5]/(x*x),w=e[6]/(x*x),y=e[8]/(m*m),b=e[9]/(m*m),A=e[10]/(m*m);for(let C=0;C<t.nv;C++){let D=s[C*8]*i,I=s[C*8+1]*i,U=s[C*8+2]*i,k=(c+C)*3;h[k]=e[0]*D+e[4]*I+e[8]*U+e[12],h[k+1]=e[1]*D+e[5]*I+e[9]*U+e[13],h[k+2]=e[2]*D+e[6]*I+e[10]*U+e[14];let V=a[C*16+8],tt=a[C*16+9],W=a[C*16+10],Q=g*V+v*tt+y*W,et=_*V+S*tt+b*W,xt=M*V+w*tt+A*W,It=127/(Math.hypot(Q,et,xt)||1),K=(c+C)*4;u[K]=Math.round(Q*It),u[K+1]=Math.round(et*It),u[K+2]=Math.round(xt*It),f[(c+C)*2]=s[C*8+6]*n,f[(c+C)*2+1]=s[C*8+7]*n,d[K]=o[C*16+6],d[K+1]=o[C*16+7],d[K+2]=o[C*16+11],d[K+3]=0}let R=this.idx,P=this.ni;for(let C=0;C<l.length;C++)R[P+C]=l[C]+c;this.nv+=t.nv,this.ni+=l.length}quad(t,e,i,n,s,o,a=0,l=0,c=1,h=1){this._growV(4),this._growI(6);let u=this.nv,f=this.pos,d=this.nor,p=this.uv,x=this.mat,m=[t,e,i,n],g=[[a,l],[c,l],[c,h],[a,h]];for(let v=0;v<4;v++){let S=(u+v)*3,w=(u+v)*4;f[S]=m[v][0],f[S+1]=m[v][1],f[S+2]=m[v][2],d[w]=Math.round(s[0]*127),d[w+1]=Math.round(s[1]*127),d[w+2]=Math.round(s[2]*127),p[(u+v)*2]=g[v][0],p[(u+v)*2+1]=g[v][1],x[w]=o[0],x[w+1]=o[1],x[w+2]=o[2],x[w+3]=o[3]||0}let _=this.idx,M=this.ni;_[M]=u,_[M+1]=u+1,_[M+2]=u+2,_[M+3]=u,_[M+4]=u+2,_[M+5]=u+3,this.nv+=4,this.ni+=6}box(t,e,i,n,s,o,a,l,c=4,h=!0){let u=Math.cos(a),f=Math.sin(a),d=(m,g,_)=>[t+m*u+_*f,e+g,i-m*f+_*u],p=(m,g,_)=>[m*u+_*f,g,-m*f+_*u],x=1/c;this.quad(d(n,-s,o),d(n,-s,-o),d(n,s,-o),d(n,s,o),p(1,0,0),l,0,0,2*o*x,2*s*x),this.quad(d(-n,-s,-o),d(-n,-s,o),d(-n,s,o),d(-n,s,-o),p(-1,0,0),l,0,0,2*o*x,2*s*x),this.quad(d(-n,-s,o),d(n,-s,o),d(n,s,o),d(-n,s,o),p(0,0,1),l,0,0,2*n*x,2*s*x),this.quad(d(n,-s,-o),d(-n,-s,-o),d(-n,s,-o),d(n,s,-o),p(0,0,-1),l,0,0,2*n*x,2*s*x),this.quad(d(-n,s,o),d(n,s,o),d(n,s,-o),d(-n,s,-o),[0,1,0],l,0,0,2*n*x,2*o*x),h||this.quad(d(-n,-s,-o),d(n,-s,-o),d(n,-s,o),d(-n,-s,o),[0,-1,0],l,0,0,2*n*x,2*o*x)}cyl(t,e,i,n,s,o,a,l,c=4,h=!0,u=!1){let f=e-o/2,d=e+o/2,p=1/c;for(let x=0;x<a;x++){let m=x/a*Math.PI*2,g=(x+1)/a*Math.PI*2,_=(m+g)/2,M=[t+Math.cos(m)*n,f,i+Math.sin(m)*n],v=[t+Math.cos(g)*n,f,i+Math.sin(g)*n],S=[t+Math.cos(g)*s,d,i+Math.sin(g)*s],w=[t+Math.cos(m)*s,d,i+Math.sin(m)*s];this.quad(v,M,w,S,[Math.cos(_),0,Math.sin(_)],l,g*n*p,0,m*n*p,o*p),h&&this.tri([t,d,i],S,w,[0,1,0],l),u&&this.tri([t,f,i],M,v,[0,-1,0],l)}}tri(t,e,i,n,s){this._growV(3),this._growI(3);let o=this.nv,a=[t,e,i];for(let l=0;l<3;l++){let c=(o+l)*3,h=(o+l)*4;this.pos[c]=a[l][0],this.pos[c+1]=a[l][1],this.pos[c+2]=a[l][2],this.nor[h]=Math.round(n[0]*127),this.nor[h+1]=Math.round(n[1]*127),this.nor[h+2]=Math.round(n[2]*127),this.uv[(o+l)*2]=a[l][0]*.25,this.uv[(o+l)*2+1]=a[l][2]*.25,this.mat[h]=s[0],this.mat[h+1]=s[1],this.mat[h+2]=s[2],this.mat[h+3]=s[3]||0}this.idx[this.ni]=o,this.idx[this.ni+1]=o+1,this.idx[this.ni+2]=o+2,this.nv+=3,this.ni+=3}beam(t,e,i,n){let s=e[0]-t[0],o=e[1]-t[1],a=e[2]-t[2],l=Math.hypot(s,o,a);if(l<1e-5)return;let c=[s/l,o/l,a/l],h=Math.abs(c[1])>.95?[1,0,0]:[0,1,0],u=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],f=Math.hypot(u[0],u[1],u[2]);u=u.map(_=>_/f*i/2);let d=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]],p=Math.hypot(d[0],d[1],d[2]);d=d.map(_=>_/p*i/2);let x=(_,M,v)=>[_[0]+u[0]*M+d[0]*v,_[1]+u[1]*M+d[1]*v,_[2]+u[2]*M+d[2]*v],m=_=>{let M=Math.hypot(_[0],_[1],_[2]);return[_[0]/M,_[1]/M,_[2]/M]},g=l/4;this.quad(x(t,1,-1),x(t,1,1),x(e,1,1),x(e,1,-1),m(u),n,0,0,.1,g),this.quad(x(t,-1,1),x(t,-1,-1),x(e,-1,-1),x(e,-1,1),m(u.map(_=>-_)),n,0,0,.1,g),this.quad(x(t,1,1),x(t,-1,1),x(e,-1,1),x(e,1,1),m(d),n,0,0,.1,g),this.quad(x(t,-1,-1),x(t,1,-1),x(e,1,-1),x(e,-1,-1),m(d.map(_=>-_)),n,0,0,.1,g)}ramp(t,e,i,n,s=2){let o=e[0]-t[0],a=e[2]-t[2],l=Math.hypot(o,a);if(l<1e-4)return;let c=o/l,h=a/l,u=[h*i,-c*i],f=t[1],d=e[1],p=d-f,x=[t[0]+u[0],f,t[2]+u[1]],m=[t[0]-u[0],f,t[2]-u[1]],g=[e[0]+u[0],d,e[2]+u[1]],_=[e[0]-u[0],d,e[2]-u[1]],M=[e[0]+u[0],f,e[2]+u[1]],v=[e[0]-u[0],f,e[2]-u[1]],S=Math.hypot(l,p),w=1/s;this.quad(x,m,_,g,[-c*p/S,l/S,-h*p/S],n,0,0,2*i*w,S*w),this.quad(v,M,g,_,[c,0,h],n,0,0,2*i*w,p*w),this.tri(M,x,g,[h,0,-c],n),this.tri(m,v,_,[-h,0,c],n)}shape(t){switch(t[0]){case"b":this.box(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]??4);break;case"c":this.cyl(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9]??4,!0,t[10]??!1);break;case"m":this.beam(t[1],t[2],t[3],t[4]);break;case"w":this.ramp(t[1],t[2],t[3],t[4],t[5]??2);break;case"q":this.quad(t[1],t[2],t[3],t[4],t[5],t[6],t[7]??0,t[8]??0,t[9]??1,t[10]??1);break}}arrays(){return{position:this.pos.subarray(0,this.nv*3),normal:this.nor.subarray(0,this.nv*4),uv:this.uv.subarray(0,this.nv*2),mat:this.mat.subarray(0,this.nv*4),index:this.idx.subarray(0,this.ni)}}};function Jf(r,t=new yt){return t.compose(new L(r.x,0,r.z),new Pe().setFromAxisAngle(new L(0,1,0),r.rot*Math.PI/2),new L(1,r.sy,1))}function eg(r,t){let e=r.header.posScale,i=r.header.uvScale,n=new Cs(1<<19,1<<21),s=new yt;for(let o of t.roofs)n.addKit(r.types[o.type],Jf(o,s).elements,e,i);for(let o of t.shapes)n.shape(o);return n.arrays()}function yh(r,t,e,i=1.6,n=1){let s=i+(n-i)*e;return r.length=0,r.push(t.x,t.y+s+.02,t.z,t.x,t.y+s+.02,t.z,.125,0,t.x,t.y+s*.5,t.z,t.x,t.y+s*.84,t.z,.2,1,t.x,t.y+.14,t.z,t.x,t.y+s*.48,t.z,.15,2),r}var Je=.0009765625,DR={num:r=>{let t=r%4,e=r/4|0;return[t*256*Je,e*256*Je,(t+1)*256*Je,(e+1)*256*Je]},title:[0,512*Je,512*Je,768*Je],chevron:[512*Je,512*Je,768*Je,768*Je],arrow:[768*Je,512*Je,1024*Je,768*Je],signV:r=>[r*128*Je,768*Je,(r*128+128)*Je,1024*Je]},ig=["\u5929\u4F7F","\u7D05\u5340","\u9999\u6E2F","\u72D9\u64CA","\u4E2D\u74B0","\u9152\u5E97","\u8336\u6A13","\u7576\u92EA"];var ng='"Noto Sans HK","PingFang HK","PingFang TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC","Source Han Sans TC",sans-serif',sg='"Barlow Condensed","Arial Narrow","Roboto Condensed","Helvetica Neue",Impact,sans-serif';function rg(r=1024){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),i=r/1024;e.fillStyle="#000",e.fillRect(0,0,r,r),e.fillStyle="#fff",e.strokeStyle="#fff",e.textAlign="center",e.textBaseline="middle";for(let n=0;n<8;n++){let s=n%4*256*i,o=(n/4|0)*256*i,a=256*i;e.lineWidth=7*i,e.strokeRect(s+16*i,o+16*i,a-32*i,a-32*i),e.font=`italic 800 ${190*i}px ${sg}`,e.fillText("0"+(n+1),s+a/2-4*i,o+a/2+12*i),e.fillRect(s+30*i,o+222*i,60*i,8*i)}{let s=512*i,o=512*i,a=256*i;e.lineWidth=8*i,e.strokeRect(0+12*i,s+12*i,o-24*i,a-24*i),e.font=`900 ${132*i}px ${ng}`,e.fillText("\u72D9\u64CA\u4E4B\u57CE",0+o/2,s+108*i),e.font=`italic 800 ${58*i}px ${sg}`,e.fillText("S N I P E R   C I T Y",0+o/2,s+206*i)}{let n=512*i,s=512*i;e.lineWidth=26*i,e.lineJoin="miter";for(let o=0;o<3;o++){let a=s+(70+o*62)*i;e.beginPath(),e.moveTo(n+46*i,a+44*i),e.lineTo(n+128*i,a-22*i),e.lineTo(n+210*i,a+44*i),e.stroke()}e.lineWidth=6*i,e.strokeRect(n+10*i,s+10*i,236*i,236*i)}{let n=768*i,s=512*i;e.beginPath(),e.moveTo(n+128*i,s+22*i),e.lineTo(n+216*i,s+120*i),e.lineTo(n+160*i,s+120*i),e.lineTo(n+160*i,s+232*i),e.lineTo(n+96*i,s+232*i),e.lineTo(n+96*i,s+120*i),e.lineTo(n+40*i,s+120*i),e.closePath(),e.fill()}for(let n=0;n<8;n++){let s=n*128*i,o=768*i;e.lineWidth=5*i,e.strokeRect(s+10*i,o+8*i,108*i,240*i),e.font=`900 ${88*i}px ${ng}`;let a=ig[n];e.fillText(a[0],s+64*i,o+74*i),e.fillText(a[1],s+64*i,o+182*i)}return t}async function lb(r,t,e){let i=e.texSize,n=t.layers,s=n.length,o=new Uint8Array(i*i*s);for(let h=0;h<s;h++){let u=r.get(n[h]);if(!u)continue;let f=await Af(u.blob);Zc(f,i,i,o,h*i*i),f.close&&f.close()}let a=n.indexOf("custom"),l=rg(i);Zc(l,i,i,o,a*i*i);let c=new Js(o,i,i,s);return c.format=ao,c.type=ii,c.minFilter=ei,c.magFilter=be,c.wrapS=c.wrapT=$i,c.generateMipmaps=!0,c.anisotropy=e.aniso,c.unpackAlignment=1,c.needsUpdate=!0,c.userData.repaint=()=>{Zc(rg(i),i,i,o,a*i*i),c.needsUpdate=!0},c}function cb(r){let t=new an({color:16777215,side:Le}),e=i=>{i.uniforms.uCityTex={value:r},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aMat; varying vec2 vCUv; varying vec4 vMat;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCUv = uv; vMat = aMat;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
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
`)};return e.key="city",hn(t,e),t}function og(r){let t=new ce;return t.setAttribute("position",new Ft(r.position.slice(),3)),t.setAttribute("normal",new Ft(r.normal.slice(),4,!0)),t.setAttribute("uv",new Ft(r.uv.slice(),2)),t.setAttribute("aMat",new Ft(r.mat.slice(),4,!1)),t.setIndex(new Ft(r.index.slice(),1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}function hb(r){let t=r.skyline.length,e=new _s(1,1,1);e.translate(0,.5,0);let i=new He({color:16777215}),n=a=>{a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
`)};n.key="sky",hn(i,n),i.defines={SC_NO_WORLDFX:1};let s=new Qs(e,i,t),o=new yt;return r.skyline.forEach((a,l)=>{o.compose(new L(a[0],0,a[1]),new Pe,new L(a[2],a[4],a[3])),s.setMatrixAt(l,o)}),s.instanceMatrix.needsUpdate=!0,s.frustumCulled=!1,s.matrixAutoUpdate=!1,s}function ub(){let r=new aa(700,24,12),t=new Ve({side:Ke,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uFogLow:ne.uFogLow,uFogHigh:ne.uFogHigh,uFogDeep:ne.uFogDeep,uFogParams:ne.uFogParams,uTime:ne.uTime,uRedCol:ne.uRedCol,uAngel:{value:new L(0,60,0)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.9999; }",fragmentShader:`
precision highp float; varying vec3 vDir; uniform float uTime; uniform vec3 uRedCol; uniform vec3 uAngel;
${pr}
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
}`}),e=new de(r,t);return e.frustumCulled=!1,e.renderOrder=-10,e.matrixAutoUpdate=!0,e}async function ag(r,t,e){let{kit:i,pack:n,arena:s}=t,o=i.header.posScale,a=i.header.uvScale,l=await lb(n,i,e),c=cb(l),h=new yt,u=og(eg(i,s)),f=new de(u,c);f.castShadow=!0,f.receiveShadow=!0,f.matrixAutoUpdate=!1,f.frustumCulled=!1;let d=new Cs(32768,1<<17);for(let b of s.deco)d.shape(b);for(let b of s.backdrop||[])d.addKit(i.types[b.type],Jf(b,h).setPosition(b.x,b.y||0,b.z).elements,o,a);let p=new de(og(d.arrays()),c);p.castShadow=!0,p.receiveShadow=!0,p.matrixAutoUpdate=!1,p.frustumCulled=!1;let x=new Ee;x.add(f,p);let m=hb(s);x.add(m);let g=ub();x.add(g);let _=new de(new Xn(1600,1600).rotateX(-Math.PI/2),hn(new He({color:328965})));_.position.y=-.2,_.matrixAutoUpdate=!1,_.updateMatrix(),x.add(_);let M=new or(5000786,10132898,1);x.add(M);let v=new Jn(16777215,2.6);v.position.set(-70,150,-52),v.target.position.set(0,10,0),v.castShadow=!0,v.shadow.mapSize.set(e.shadow,e.shadow);let S=v.shadow.camera;S.left=-112,S.right=112,S.top=112,S.bottom=-112,S.near=20,S.far=320,S.updateProjectionMatrix(),v.shadow.bias=-5e-4,v.shadow.normalBias=.12,x.add(v,v.target),r.scene.add(x);let w=new ce;w.setAttribute("position",u.getAttribute("position")),w.setIndex(u.getIndex());let y=new Ao(w);return{group:x,solid:f,deco:p,skyline:m,sky:g,mat:c,tex:l,bvh:y,colGeo:w,moon:v,hemi:M,tris:(u.index.count+p.geometry.index.count)/3}}function jf(r,t){if(t===Zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===lo||t===ba){let e=r.getIndex();if(e===null){let s=[],o=r.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);r.setIndex(s),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===lo)for(let s=1;s<=i;s++)n.push(e.getX(0)),n.push(e.getX(s)),n.push(e.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(e.getX(s)),n.push(e.getX(s+1)),n.push(e.getX(s+2))):(n.push(e.getX(s+2)),n.push(e.getX(s+1)),n.push(e.getX(s)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}function vh(r){let t=new Map,e=new Map,i=r.clone();return lg(r,i,function(n,s){t.set(s,n),e.set(n,s)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let s=n,o=t.get(n),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function lg(r,t,e){e(r,t);for(let i=0;i<r.children.length;i++)lg(r.children[i],t.children[i],e)}var Mh=class extends yn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new rd(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new gd(e)}),this.register(function(e){return new xd(e)}),this.register(function(e){return new _d(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new id(e)}),this.register(function(e){return new Sh(e,Kt.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Sh(e,Kt.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new yd(e)})}load(t,e,i,n){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=jn.extractUrlBase(t);o=jn.resolveURL(c,this.path)}else o=jn.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new to(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===dg){try{o[Kt.KHR_BINARY_GLTF]=new vd(t)}catch(u){n&&n(u);return}s=JSON.parse(o[Kt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ad(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case Kt.KHR_MATERIALS_UNLIT:o[u]=new nd;break;case Kt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Md(s,this.dracoLoader);break;case Kt.KHR_TEXTURE_TRANSFORM:o[u]=new Sd;break;case Kt.KHR_MESH_QUANTIZATION:o[u]=new bd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function db(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}function Ue(r,t,e){let i=r.json.materials[t];return i.extensions&&i.extensions[e]?i.extensions[e]:null}var Kt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},id=class{constructor(t){this.parser=t,this.name=Kt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,h=new At(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],bi);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pa(h),c.distance=u;break;case"spot":c=new da(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),An(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(e.cache,a,l)})}},nd=class{constructor(){this.name=Kt.KHR_MATERIALS_UNLIT}getMaterialType(){return He}extendParams(t,e,i){let n=[];t.color=new At(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],bi),t.opacity=o[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,Ce))}return Promise.all(n)}},sd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);return i===null||i.emissiveStrength!==void 0&&(e.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},rd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(e.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(e,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(e,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Nt(s,s)}return Promise.all(n)}},od=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];return e.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(e,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(n)}},ad=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);return i===null||(e.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},ld=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(e.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(e,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(e.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(e,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},cd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];if(e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;e.sheenColor.setRGB(s[0],s[1],s[2],bi)}return i.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(e,"sheenColorMap",i.sheenColorTexture,Ce)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(e,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},hd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(e.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(e,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},ud=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];e.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(e,"thicknessMap",i.thicknessTexture)),e.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(s[0],s[1],s[2],bi),Promise.all(n)}},fd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_IOR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);return i===null||(e.ior=i.ior!==void 0?i.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},dd=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];e.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(e,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(s[0],s[1],s[2],bi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(e,"specularColorMap",i.specularColorTexture,Ce)),Promise.all(n)}},pd=class{constructor(t){this.parser=t,this.name=Kt.EXT_MATERIALS_BUMP}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];return e.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(e,"bumpMap",i.bumpTexture)),Promise.all(n)}},md=class{constructor(t){this.parser=t,this.name=Kt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ue(this.parser,t,this.name)!==null?Ei:null}extendMaterialParams(t,e){let i=Ue(this.parser,t,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(e.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(e.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(e,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},gd=class{constructor(t){this.parser=t,this.name=Kt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}},xd=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(t,o.source,l)}},_d=class{constructor(t){this.parser=t,this.name=Kt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let o=s.extensions[e],a=n.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(t,o.source,l)}},Sh=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,n.mode,n.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,n.mode,n.filter),d})})}else return null}},yd=class{constructor(t){this.name=Kt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==ji.TRIANGLES&&c.mode!==ji.TRIANGLE_STRIP&&c.mode!==ji.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new yt,m=new L,g=new Pe,_=new L(1,1,1),M=new Qs(p.geometry,p.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),M.setMatrixAt(S,x.compose(m,g,_));let v=null;for(let S in l)if(S==="_COLOR_0"){let w=l[S];M.instanceColor=new Gn(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let y=M.geometry;v=new ce,v.name=y.name;for(let b in y.attributes)v.setAttribute(b,y.attributes[b]);for(let b in y.morphAttributes)v.morphAttributes[b]=y.morphAttributes[b];y.index!==null&&v.setIndex(y.index),v.morphTargetsRelative=y.morphTargetsRelative;for(let b of y.groups)v.addGroup(b.start,b.count,b.materialIndex);y.boundingBox!==null&&(v.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(v.boundingSphere=y.boundingSphere.clone()),v.drawRange.start=y.drawRange.start,v.drawRange.count=y.drawRange.count,v.userData=Object.assign({},y.userData),M.geometry=v}let w=l[S];v.setAttribute(S,new Gn(w.array,w.itemSize,w.normalized))}we.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},dg="glTF",za=12,cg={JSON:1313821514,BIN:5130562},vd=class{constructor(t){this.name=Kt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,za),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==dg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-za,s=new DataView(t,za),o=0;for(;o<n;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===cg.JSON){let c=new Uint8Array(t,za+o,a);this.content=i.decode(c)}else if(l===cg.BIN){let c=za+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Md=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Kt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Td[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Td[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[t.attributes[h]],d=Ro[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){n.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,bi,f)})})}},Sd=class{constructor(){this.name=Kt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let i=Math.cos(t.rotation),n=Math.sin(t.rotation);t.matrix.set(t.repeat.x*i,t.repeat.y*n,t.offset.x,-t.repeat.x*n,t.repeat.y*i,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},bd=class{constructor(){this.name=Kt.KHR_MESH_QUANTIZATION}},bh=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let o=0;o!==n;o++)e[o]=i[s+o];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-e,u=(i-e)/h,f=u*u,d=f*u,p=t*c,x=p-c,m=-2*d+3*f,g=d-f,_=1-m,M=g-f+u;for(let v=0;v!==a;v++){let S=o[x+v+a],w=o[x+v+l]*h,y=o[p+v+a],b=o[p+v]*h;s[v]=_*S+M*w+m*y+g*b}return s}},pb=new Pe,wd=class extends bh{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return pb.fromArray(s).normalize().toArray(s),s}},ji={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ro={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hg={9728:ke,9729:be,9984:nc,9985:ro,9986:ur,9987:ei},ug={33071:Yi,33648:Vr,10497:$i},Qf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mb={CUBICSPLINE:void 0,LINEAR:$s,STEP:Ks},td={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oi})),r.DefaultMaterial}function yr(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function An(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function xb(r,t,e){let i=!1,n=!1,s=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(i){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(n){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function _b(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yb(r){let t,e=r.extensions&&r.extensions[Kt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ed(e.attributes):t=r.indices+":"+ed(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+ed(r.targets[i]);return t}function ed(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Ed(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Mb=new yt,Ad=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new db,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||s&&o<98?(this.textureLoader=new ua(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ma(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new to(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return yr(s,a,n),An(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let o=e[n].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let o=t[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,o){return i.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Kt.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,o){i.load(jn.resolveURL(e.uri,n.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let o=Qf[n.type],a=Ro[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new Ft(c,o,l))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Qf[n.type],c=Ro[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,p=n.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count,M=e.cache.get(_);M||(x=new c(a,g*d,n.count*d/h),M=new Kr(x,d/h),e.cache.add(_,M)),m=new $r(M,l,f%d/h,p)}else a===null?x=new c(n.count*l):x=new c(a,f,n.count*l),m=new Ft(x,l,p);if(n.sparse!==void 0){let g=Qf.SCALAR,_=Ro[n.sparse.indices.componentType],M=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,S=new _(o[1],M,n.sparse.count*g),w=new c(o[2],v,n.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,b=S.length;y<b;y++){let A=S[y];if(m.setX(A,w[y*l]),l>=2&&m.setY(A,w[y*l+1]),l>=3&&m.setZ(A,w[y*l+2]),l>=4&&m.setW(A,w[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,o=e.images[s],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,i){let n=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return h.magFilter=hg[f.magFilter]||be,h.minFilter=hg[f.minFilter]||ei,h.wrapS=ug[f.wrapS]||$i,h.wrapT=ug[f.wrapT]||$i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ke&&h.minFilter!==be,n.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());let o=n.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=i.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){e.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;e.isImageBitmapLoader===!0&&(x=function(m){let g=new ze(m);g.needsUpdate=!0,d(g)}),e.load(jn.resolveURL(f,s.path),x,void 0,p)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),An(f,o),f.userData.mimeType=o.mimeType||vb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=u,u}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Kt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Kt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[Kt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Qr,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(t.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new jr,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||s||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return nr}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],o,a={},l=s.extensions||{},c=[];if(l[Kt.KHR_MATERIALS_UNLIT]){let u=n[Kt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{let u=s.pbrMetallicRoughness||{};if(a.color=new At(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],bi),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ce)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Le);let h=s.alphaMode||td.OPAQUE;if(h===td.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===td.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==He&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Nt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==He&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==He){let u=s.emissiveFactor;a.emissive=new At().setRGB(u[0],u[1],u[2],bi)}return s.emissiveTexture!==void 0&&o!==He&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ce)),Promise.all(c).then(function(){let u=new o(a);return s.name&&(u.name=s.name),An(u,s),e.associations.set(u,{materials:t}),s.extensions&&yr(n,u,s),u})}createUniqueName(t){let e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Kt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return fg(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=yb(c),u=n[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Kt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=fg(new ce,c,e),c.mode===ji.TRIANGLE_STRIP?f=f.then(d=>jf(d,ba)):c.mode===ji.TRIANGLE_FAN&&(f=f.then(d=>jf(d,lo))),n[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?gb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,_=c[d];if(m.mode===ji.TRIANGLES||m.mode===ji.TRIANGLE_STRIP||m.mode===ji.TRIANGLE_FAN||m.mode===void 0){let M=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&v?new Vn(x,_):new de(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ji.LINES)g=new er(x,_);else if(m.mode===ji.LINE_STRIP)g=new tr(x,_);else if(m.mode===ji.LINE_LOOP)g=new ia(x,_);else if(m.mode===ji.POINTS)g=new xs(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&_b(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),An(g,s),m.extensions&&yr(n,g,m),e.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&yr(n,u[0],s),u[0];let f=new Ee;s.extensions&&yr(n,f,s),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new qe(ts.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new Zn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),An(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new yt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ea(a,l)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=n.channels.length;u<f;u++){let d=n.channels[u],p=n.samplers[d.sampler],x=d.target,m=x.node,g=n.parameters!==void 0?n.parameters[p.input]:p.input,_=n.parameters!==void 0?n.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let M=0,v=f.length;M<v;M++){let S=f[M],w=d[M],y=p[M],b=x[M],A=m[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=i._createAnimationTracks(S,w,y,b,A);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let _=new sr(s,void 0,g);return An(_,n),_})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Mb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],o=s.name?n.createUniqueName(s.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Zr:c.length>1?h=new Ee:c.length===1?h=c[0]:h=new we,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),An(h,s),s.extensions&&yr(i,h,s),s.matrix!==void 0){let u=new yt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(s.mesh!==void 0&&n.meshCache.refs[s.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new Ee;i.name&&(s.name=n.createUniqueName(i.name)),An(s,i),i.extensions&&yr(e,s,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?s.add(vh(f)):s.add(f)}let c=h=>{let u=new Map;for(let[f,d]of n.associations)(f instanceof Ti||f instanceof ze)&&u.set(f,d);return h.traverse(f=>{let d=n.associations.get(f);d!=null&&u.set(f,d)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let o=[],a=t.name?t.name:t.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ps[s.path]===Ps.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ps[s.path]){case Ps.weights:h=Yn;break;case Ps.rotation:h=Kn;break;case Ps.translation:case Ps.scale:h=ys;break;default:i.itemSize===1?h=Yn:h=ys;break}let u=n.interpolation!==void 0?mb[n.interpolation]:$s,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+Ps[s.path],e.array,f,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=Ed(e.constructor),n=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Kn?wd:bh;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Sb(r,t,e){let i=t.attributes,n=new ae;if(i.POSITION!==void 0){let a=e.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=Ed(Ro[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Ed(Ro[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}r.boundingBox=n;let o=new Pi;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=o}function fg(r,t,e){let i=t.attributes,n=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(let o in i){let a=Td[o]||o.toLowerCase();a in r.attributes||n.push(s(i[o],a))}if(t.indices!==void 0&&!r.index){let o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});n.push(o)}return Yt.workingColorSpace!==bi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),An(r,t),Sb(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?xb(r,t.targets,e):r})}async function pg(r,t){let e=new Uint8Array(r),i=new DataView(r);if(String.fromCharCode(e[0],e[1],e[2],e[3])!=="SCMD")throw new Error("bad model pack");let n=i.getUint32(4,!0),s=JSON.parse(new TextDecoder().decode(e.subarray(8,8+n))),o=8+n,a=new Mh,l=x=>new Promise((m,g)=>a.parse(r.slice(o+s[x].off,o+s[x].off+s[x].len),"",m,g)),[c,h,u]=await Promise.all([l("weapons"),l("cop"),l("angel")]),f=await bb(t);h.scene.traverse(x=>{x.isSkinnedMesh&&(x.material=f.cop,x.castShadow=!1,x.receiveShadow=!1)});let d={};for(let x of[...c.scene.children]){let m=new Ee;m.name=x.name,m.add(x),d[x.name]=m}let p={};for(let x of["rifle_fp","pistol"])d[x].traverse(m=>{if(!m.isMesh)return;let g=m.material,_=g.userData&&g.userData.tex;m.material=f.weapon(_,g.name),m.frustumCulled=!1});return d.rifle_tp.traverse(x=>{x.isMesh&&(x.material=f.rifleTp,x.frustumCulled=!1)}),await Promise.all(f._pending),{cop:h.scene,weapons:d,angel:{scene:u.scene,clips:u.animations},mats:f}}var wh=r=>{let t=e=>{e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",`{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.6); outgoingLight += vec3(${r.toFixed(3)}) * fr; }
#include <opaque_fragment>`)};return t.key="rim"+r,t};async function bb(r){let t=[],e=h=>{h.fragmentShader=`uniform float uScope;
`+h.fragmentShader.replace("#include <opaque_fragment>",`{ float fr = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.2); outgoingLight += vec3(0.46) * fr;
      float core = 1.0 - fr; outgoingLight = mix(outgoingLight, outgoingLight * 0.22 + uRedCol * (0.12 + 0.46 * core * core), uScope); }
#include <opaque_fragment>`)};e.key="cop2";let i=new an({color:9342606,emissive:bs.clone(),emissiveIntensity:2.6});hn(i,e),t.push(uo(r,"cop_base").then(h=>{i.map=h,i.needsUpdate=!0}),uo(r,"cop_emis").then(h=>{i.emissiveMap=h,i.needsUpdate=!0}));let n=new Map,s=(h,u)=>{let f=h||u;if(n.has(f))return n.get(f);let d=new an({color:/lens/.test(u)?328965:7237230});return hn(d,wh(.12)),d.name=u,n.set(f,d),h&&t.push(uo(r,h,{repeat:!0}).then(p=>{p&&(d.map=p,d.needsUpdate=!0)})),d},o=new an({color:723723});hn(o,wh(.14));let a=new an({color:14869218,emissive:2368548});hn(a,wh(.32));let l=new an({color:15263976,emissive:2368548});hn(l,wh(.32)),t.push(uo(r,"angel_body").then(h=>{a.map=h,a.needsUpdate=!0}),uo(r,"angel_arm").then(h=>{l.map=h,l.needsUpdate=!0}));let c=hn(new He({color:bs.clone().multiplyScalar(1.6)}));return{cop:i,weapon:s,rifleTp:o,angelBody:a,angelArm:l,halo:c,_pending:t}}var kt=(r=0,t=0,e=0)=>new L(r,t,e),Ae=()=>new Pe,Co=kt(),ni=kt(),Is=kt(),vr=kt(),Gi=Ae(),Rn=Ae(),mg=new yt,eC=new yt,is=new L(1,0,0),Cn=new L(0,1,0),Ha=new L(0,0,1),wb=["Hips","Spine","Spine1","Spine2","Neck","Head","LeftShoulder","LeftArm","LeftForeArm","LeftHand","RightShoulder","RightArm","RightForeArm","RightHand","LeftUpLeg","LeftLeg","LeftFoot","LeftToeBase","RightUpLeg","RightLeg","RightFoot","RightToeBase"],Tb=r=>{let t=/mixamorig:?([A-Za-z0-9]+?)(_\d+)?$/.exec(r);return t?t[1]:null},Po=(r,t,e)=>Math.min(e,Math.max(t,r)),Ls=(r,t,e)=>r+(t-r)*e,gg=r=>r*r*(3-2*r),Va=class{constructor(t){this.scene=t,t.updateMatrixWorld(!0);let e=null;t.traverse(c=>{c.isSkinnedMesh&&(e=c)}),this.mesh=e;let i=e.skeleton;this.nb=i.bones.length,this.idx={},this.shortNames=i.bones.map(c=>Tb(c.name)),this.shortNames.forEach((c,h)=>{c&&(this.idx[c]=h)});let n=i.bones.findIndex(c=>!c.parent||!c.parent.isBone);this.top=n;let s=new yt().multiplyMatrices(i.bones[n].matrixWorld,i.boneInverses[n]);this.restP=[],this.restQ=[],this.parent=[];let o=kt();for(let c=0;c<this.nb;c++){let h=new yt().copy(i.boneInverses[c]).invert().premultiply(s),u=kt(),f=Ae();h.decompose(u,f,o),this.restP.push(u),this.restQ.push(f),this.parent.push(i.bones[c].parent&&i.bones[c].parent.isBone?i.bones.indexOf(i.bones[c].parent):-1)}this.scale=o.x,this.restLocalQ=this.restQ.map((c,h)=>this.parent[h]<0?i.bones[h].quaternion.clone():this.restQ[this.parent[h]].clone().invert().multiply(c)),this.offset=this.restP.map((c,h)=>this.parent[h]<0?kt():c.clone().sub(this.restP[this.parent[h]]).applyQuaternion(this.restQ[this.parent[h]].clone().invert()));let a=this.idx;this.J=wb.map(c=>a[c]),this.hand={},this.fingers={Left:[],Right:[]};for(let c of["Left","Right"]){let h=a[c+"Hand"],u=this.restP[a[c+"HandMiddle1"]].clone().sub(this.restP[h]).normalize(),f=this.restP[a[c+"HandThumb1"]].clone().sub(this.restP[h]);f.addScaledVector(u,-f.dot(u)).normalize();let d=u.clone().cross(f),p=c==="Left"?d.clone():d.clone().negate();this.hand[c]={basisInv:new yt().makeBasis(u,f,d).transpose(),fwd:u,th:f,palm:p};for(let x of["Index","Middle","Ring","Pinky","Thumb"])for(let m of[1,2,3]){let g=a[`${c}Hand${x}${m}`];if(g==null)continue;let _=a[`${c}Hand${x}${m+1}`],M=_!=null?this.restP[_].clone().sub(this.restP[g]).normalize():u.clone(),S=(x==="Thumb"?M.clone().cross(u).normalize().multiplyScalar(c==="Left"?-1:1):M.clone().cross(p).normalize()).applyQuaternion(this.restQ[g].clone().invert());this.fingers[c].push({j:g,axis:S,thumb:x==="Thumb",k:m})}}let l=c=>this.restP[a[c]];this.len={upArm:l("LeftForeArm").distanceTo(l("LeftArm")),foreArm:l("LeftHand").distanceTo(l("LeftForeArm")),upLeg:l("LeftLeg").distanceTo(l("LeftUpLeg")),loLeg:l("LeftFoot").distanceTo(l("LeftLeg"))},this.hipH=l("Hips").y,this.footH=l("LeftFoot").y,this.hipW=l("LeftUpLeg").x,this.headTop=l("Head").y+.2,this.topParentInv=i.bones[n].parent?new yt().copy(i.bones[n].parent.matrixWorld).invert():new yt,this.topParentQ=Ae(),i.bones[n].parent&&i.bones[n].parent.matrixWorld.decompose(kt(),this.topParentQ,kt())}instantiate(){return new Rd(this)}},Rd=class{constructor(t){this.p=t,this.root=vh(t.scene);let e=null;this.root.traverse(n=>{n.isSkinnedMesh&&(e=n)}),this.mesh=e,this.bones=e.skeleton.bones,e.frustumCulled=!1;let i=t.nb;this.wQ=[],this.wP=[],this.ctrl=new Uint8Array(i);for(let n=0;n<i;n++)this.wQ.push(t.restQ[n].clone()),this.wP.push(t.restP[n].clone()),this.bones[n].quaternion.copy(t.restLocalQ[n]);this.weapon=new Ee,this.root.add(this.weapon),this.phase=Math.random()*6,this.aimK=0,this.crouchK=0,this.pitch=0,this.twist=0,this.recoil=0,this.bob=0,this.moveK=0,this.modeK={air:0,zip:0,ladder:0,dead:0},this.deadT=0,this.deadDir=1,this.lean=0,this.flinch=0,this.boltK=0,this.muzzle=kt(),this.muzzleDir=kt(0,0,1),this.eye=kt(),this.fwd=kt(0,0,1),this.caps=[],this.gripR=kt(),this.gripL=kt()}_fk(t){let e=this.p.parent[t];this.wP[t].copy(this.p.offset[t]).applyQuaternion(this.wQ[e]).add(this.wP[e])}_setQ(t,e){this.wQ[t].copy(e).multiply(this.p.restQ[t]),this.ctrl[t]=1}_ik(t,e,i,n,s,o,a,l,c){let h=this.wP[t],u=Co.copy(n).sub(h),f=u.length(),d=(o+a)*.999;f>d&&(f=d),f<.05&&(f=.05),u.normalize();let p=Po((o*o+f*f-a*a)/(2*o*f),-1,1),x=Math.sqrt(1-p*p),m=ni.copy(s).addScaledVector(u,-s.dot(u));m.lengthSq()<1e-6&&m.set(0,0,1).addScaledVector(u,-u.z),m.normalize();let g=Is.copy(h).addScaledVector(u,o*p).addScaledVector(m,o*x),_=vr.copy(h).addScaledVector(u,f),M=this.p,v=kt().copy(M.restP[e]).sub(M.restP[t]).normalize().applyQuaternion(l),S=kt().copy(g).sub(h).normalize(),y=Ae().setFromUnitVectors(v,S).multiply(l);this._setQ(t,y),this.wP[e].copy(g);let b=kt().copy(M.restP[i]).sub(M.restP[e]).normalize().applyQuaternion(y),A=kt().copy(_).sub(g).normalize(),P=Ae().setFromUnitVectors(b,A).multiply(y);return this._setQ(e,P),this.wP[i].copy(_),c&&c.copy(P),P}update(t,e){let i=this.p,n=i.idx,s=1-Math.exp(-t*12);this.aimK=Ls(this.aimK,e.aim?1:0,1-Math.exp(-t*9)),this.crouchK=Ls(this.crouchK,e.crouch?1:0,1-Math.exp(-t*10)),this.pitch=Ls(this.pitch,e.pitch||0,s),this.twist=Ls(this.twist,Po(e.twist||0,-1,1),s);let o=e.speed||0;this.moveK=Ls(this.moveK,Po(o/5,0,1.3),1-Math.exp(-t*8)),this.recoil=Math.max(0,this.recoil-t*4.5),this.flinch=Math.max(0,this.flinch-t*3.2),this.boltK=Math.max(0,this.boltK-t*1.4);for(let rt in this.modeK)this.modeK[rt]=Ls(this.modeK[rt],e.mode===rt?1:0,1-Math.exp(-t*(rt==="dead"?30:9)));let a=e.moveDir||Ha;this.phase+=t*(2.2+o*1.55)*(o>.2?1:0),e.mode==="ladder"&&(this.phase+=t*7);let l=this.phase,c=this.modeK.air,h=this.modeK.zip,u=this.modeK.ladder,f=0;e.mode==="dead"?(this.deadT+=t,f=Po(this.deadT/.62,0,1),f=f*f):this.deadT=0;let d=this.aimK*(1-h)*(1-u)*(1-f),p=this.crouchK*(1-h)*(1-u)*(1-c*.6),x=n.Hips,m=this.moveK*(1-c)*(1-h)*(1-u),g=Math.abs(Math.sin(l))*.045*m,_=p*.4+d*.03+m*.035,M=m*.16*(1-d*.6)*a.z,v=m*.07*a.x,S=Gi.setFromAxisAngle(is,M+p*.12+c*.25-this.flinch*.12).premultiply(Rn.setFromAxisAngle(Ha,-v+Math.sin(l)*.03*m)).premultiply(Rn.setFromAxisAngle(Cn,Math.sin(l)*.07*m*(1-d)-this.twist*.18-.16*d)),w=Ae().copy(S);this.wP[x].set(Math.sin(l)*.02*m,i.hipH-_+g-h*0,p*-.05),this._setQ(x,w);let y=null;if(f>0){let rt=f*1.52*this.deadDir;y=Ae().setFromAxisAngle(is,-rt),this.wP[x].set(0,Ls(i.hipH-_,.16,f),-Math.sin(rt)*.55*this.deadDir*0+-this.deadDir*f*.75),w.premultiply(y),this._setQ(x,w)}let b=this.pitch*(.35+.65*d)*(1-f),A=this.twist*.82*(1-f),R=[n.Spine,n.Spine1,n.Spine2],P=Ae().copy(w),C=Ae(),D=d*.1+p*.1+m*.05*(1-d)+this.flinch*.2-f*.25,I=-.46*d;for(let rt=0;rt<3;rt++){C.setFromAxisAngle(Cn,(A+I)/3).multiply(Rn.setFromAxisAngle(is,(-b+D)/3)),P.multiply(C);let j=R[rt];this._fk(j),this._setQ(j,P)}let U=Ae().copy(P),k=Ae().copy(w).multiply(Rn.setFromAxisAngle(Cn,A*1.22+.16*d)).multiply(Rn.setFromAxisAngle(is,-b/(.35+.65*Math.max(d,.001))*Math.max(d,.35))),V=kt(0,0,1).applyQuaternion(k),tt=kt(0,1,0).applyQuaternion(k),W=kt(-1,0,0).applyQuaternion(k);this.fwd.copy(V),this._fk(n.Neck);let Q=Ae().copy(U).slerp(k,.5);this._setQ(n.Neck,Q),this._fk(n.Head);let et=Ae().copy(k).multiply(Rn.setFromAxisAngle(Ha,-.2*d)).multiply(Gi.setFromAxisAngle(is,.22*d+f*.5));this._setQ(n.Head,et),this.eye.copy(this.wP[n.Head]).addScaledVector(tt,.09).addScaledVector(V,.09);for(let rt of["Left","Right"]){let j=n[rt+"Shoulder"];this._fk(j),this._setQ(j,U),this._fk(n[rt+"Arm"])}let xt=Math.max(h,u),It=this.wP[n.RightArm],K=Co.copy(this.wP[n.LeftArm]).add(It).multiplyScalar(.5),at=this.recoil*this.recoil,vt=kt().copy(It).addScaledVector(V,.215-at*.07).addScaledVector(tt,.012+at*.02).addScaledVector(W,-.055),Ct=Ae().copy(U).multiply(Rn.setFromAxisAngle(Cn,.62)).multiply(Gi.setFromAxisAngle(is,.5-Math.sin(l*2)*.03*m)),pt=kt(0,0,1).applyQuaternion(Ct),Ot=kt(0,1,0).applyQuaternion(Ct),Re=kt().copy(K).addScaledVector(kt(0,0,1).applyQuaternion(U),.27).addScaledVector(kt(0,1,0).applyQuaternion(U),-.21+Math.sin(l*2)*.012*m).addScaledVector(kt(-1,0,0).applyQuaternion(U),.1),Et=Ae().copy(Ct).slerp(k,gg(d)),Xt=kt().copy(Re).lerp(vt,gg(d));if(xt>.01){let rt=Ae().copy(U).multiply(Rn.setFromAxisAngle(Ha,.45)).multiply(Gi.setFromAxisAngle(is,-1.25)),j=kt().copy(K).addScaledVector(kt(0,0,1).applyQuaternion(U),-.19).addScaledVector(kt(0,1,0).applyQuaternion(U),-.2).addScaledVector(kt(-1,0,0).applyQuaternion(U),.06);Et.slerp(rt,xt),Xt.lerp(j,xt)}if(f>0){let rt=Ae().setFromAxisAngle(Cn,.7*this.deadDir).multiply(Gi.setFromAxisAngle(Ha,1.5)),j=kt(-.55,.05,.35*this.deadDir);Et.slerp(rt,f),Xt.lerp(j,f)}at>0&&Et.multiply(Gi.setFromAxisAngle(is,-at*.1));let Jt=kt(0,0,1).applyQuaternion(Et),zt=kt(0,1,0).applyQuaternion(Et),Ne=kt(-1,0,0).applyQuaternion(Et);this.weapon.quaternion.copy(Et).multiply(Gi.setFromAxisAngle(Cn,Math.PI)),this.weapon.position.copy(Xt);let De=this.weaponScale||1.2;this.muzzle.copy(Xt).addScaledVector(Jt,.733*De).addScaledVector(zt,.045*De),this.muzzleDir.copy(Jt);let Ye=i.len,ie={Right:kt(),Left:kt()},li={Right:kt(),Left:kt()},Te={Right:kt(),Left:kt()},Oe={Right:1.15,Left:.9};if(ie.Right.copy(Xt).addScaledVector(zt,-.055).addScaledVector(Jt,-.02).addScaledVector(Ne,.012),li.Right.copy(Jt).addScaledVector(zt,.35).normalize(),Te.Right.copy(zt).addScaledVector(Ne,-.25).addScaledVector(Jt,-.3).normalize(),ie.Left.copy(Xt).addScaledVector(Jt,.235*De).addScaledVector(zt,-.03).addScaledVector(Ne,-.035),li.Left.copy(Ne).addScaledVector(zt,.62).addScaledVector(Jt,.25).normalize(),Te.Left.copy(Jt).addScaledVector(zt,.25).normalize(),this.boltK>0&&d>.3){let rt=Math.sin(Po(1-this.boltK,0,1)*Math.PI);ie.Right.addScaledVector(zt,.1*rt).addScaledVector(Ne,.07*rt).addScaledVector(Jt,.06*rt-.09*Math.sin(Po(1-this.boltK,0,1)*Math.PI*2)*rt),Oe.Right=.7}if(h>.01){let rt=Co.set(0,i.hipH+.98,.1);ie.Right.lerp(ni.copy(rt).add(Is.set(-.13,0,0)),h),ie.Left.lerp(ni.copy(rt).add(Is.set(.13,0,0)),h);for(let j of["Right","Left"])li[j].lerp(Cn,h).normalize(),Te[j].lerp(ni.set(j==="Right"?1:-1,0,0),h).normalize();Oe.Right=Oe.Left=1.3}if(u>.01){let rt=Math.sin(l)*.16,j=-rt;ie.Right.lerp(ni.set(-.2,i.hipH+.52+rt,.36),u),ie.Left.lerp(ni.set(.2,i.hipH+.52+j,.36),u);for(let $t of["Right","Left"])li[$t].lerp(Cn,u).normalize(),Te[$t].lerp(ni.set($t==="Right"?1:-1,0,0),u).normalize();Oe.Right=Oe.Left=1.3}if(f>0){let rt=y;for(let j of["Right","Left"]){let $t=j==="Right"?-1:1,St=ni.set($t*(.42+.2*(j==="Right"?1:.6)),i.hipH+.48,j==="Right"?.12:-.05).applyQuaternion(rt);St.y=Math.max(St.y,.07),St.add(Is.set(0,0,0)),ie[j].lerp(vr.copy(this.wP[x]).add(St.sub(Is.set(0,i.hipH,0).applyQuaternion(rt))),f),Oe[j]=Ls(Oe[j],.35,f)}}let Ci={Right:kt(-.75,-.6,-.35),Left:kt(.55,-.8,-.1)};for(let rt of["Right","Left"]){let j=n[rt+"Arm"],$t=n[rt+"ForeArm"],St=n[rt+"Hand"],Dt=vr.copy(Ci[rt]).applyQuaternion(k);xt>.01&&Dt.lerp(ni.set(rt==="Right"?-1:1,-.2,.5),xt);let N=Ae();this._ik(j,$t,St,ie[rt],Dt,Ye.upArm,Ye.foreArm,U,N);let T=li[rt],z=ni.copy(Te[rt]).addScaledVector(T,-Te[rt].dot(T)).normalize(),it=Is.copy(T).cross(z),J=Ae().setFromRotationMatrix(mg.makeBasis(T,z,it).multiply(i.hand[rt].basisInv));f>0&&J.slerp(N,f),this._setQ(St,J);let st=Gi.copy(N).invert().multiply(J),lt=vr.copy(i.restP[St]).sub(i.restP[$t]).normalize().applyQuaternion(Rn.copy(i.restQ[$t]).invert().multiply(i.restQ[$t])),q=Co.copy(i.restP[St]).sub(i.restP[$t]).normalize(),$=q.x*st.x+q.y*st.y+q.z*st.z,ct=Rn.set(q.x*$,q.y*$,q.z*$,st.w).normalize(),F=Ae().slerp(ct,.5);this.wQ[$t].copy(N).multiply(F).multiply(i.restQ[$t]);for(let Z of i.fingers[rt]){let Y=Z.thumb?Oe[rt]*.25:Oe[rt]*(Z.k===1?.75:.95);this.bones[Z.j].quaternion.copy(i.restLocalQ[Z.j]).multiply(Gi.setFromAxisAngle(Z.axis,Y))}}this.gripR.copy(ie.Right),this.gripL.copy(ie.Left);let yi=.34*m,B=.2*m,Di=Ae().setFromAxisAngle(Cn,-this.twist*.18*0);for(let rt of["Left","Right"]){let j=rt==="Left"?1:-1,$t=n[rt+"UpLeg"],St=n[rt+"Leg"],Dt=n[rt+"Foot"];this._fk($t);let N=l+(rt==="Left"?0:Math.PI),T=Math.cos(N),z=Math.max(0,Math.sin(N)),it=Co.set(j*(i.hipW+.035+p*.07)+a.x*T*yi,i.footH+z*B,a.z*T*yi+p*j*.1+d*j*.1*(1-m));if(c>.01&&it.lerp(ni.set(j*(i.hipW+.03),this.wP[x].y-.62+(rt==="Left"?.12:0),rt==="Left"?.22:-.22),c),h>.01&&it.lerp(ni.set(j*(i.hipW+.02),this.wP[x].y-.74,.2+(rt==="Left"?.08:0)),h),u>.01&&it.lerp(ni.set(j*.17,this.wP[x].y-.62+Math.sin(N)*.16,.3),u),f>0){let q=ni.set(j*(i.hipW+.12),i.footH,rt==="Left"?.05:-.08).sub(Is.set(0,i.hipH,0)).applyQuaternion(y).add(this.wP[x]);q.y=Math.max(q.y,.08),it.lerp(q,f)}let J=ni.set(j*.14,0,1);f>0&&J.applyQuaternion(y);let st=Ae();this._ik($t,St,Dt,it,J,Ye.upLeg,Ye.loLeg,w,st);let lt=Ae().setFromAxisAngle(Cn,j*.14).multiply(Gi.setFromAxisAngle(is,z*.5*m+h*.5+c*.4));f>0&&lt.premultiply(Gi.copy(y).slerp(Ae(),1-f)),this._setQ(Dt,lt)}let _e=this.bones;for(let rt of i.J){if(rt==null||!this.ctrl[rt])continue;let j=i.parent[rt],$t=j<0?i.topParentQ:this.ctrl[j]?this.wQ[j]:i.restQ[j];_e[rt].quaternion.copy(Gi.copy($t).invert().multiply(this.wQ[rt]))}{let rt=i.parent[x],j=mg.compose(i.restP[rt],i.restQ[rt],ni.set(i.scale,i.scale,i.scale)).invert();_e[x].position.copy(this.wP[x]).applyMatrix4(j)}}hitShapes(t){let e=this.p.idx,i=this.wP,n=this.root.matrixWorld;t.length=0;let s=(l,c)=>Co.copy(l).add(c||ni.set(0,0,0)).applyMatrix4(n),o=(l,c,h,u,f,d)=>{let p=s(l,f),x=p.x,m=p.y,g=p.z,_=s(c,d);t.push(x,m,g,_.x,_.y,_.z,h,u)},a=Is.set(0,.1,.02).applyQuaternion(this.wQ[e.Head]).applyQuaternion(Gi.copy(this.p.restQ[e.Head]).invert());return o(i[e.Head],i[e.Head],.125,0,vr.set(0,.105,.03),vr),o(i[e.Hips],i[e.Neck],.19,1,vr.set(0,.03,0),ni.set(0,-.06,0)),o(i[e.LeftUpLeg],i[e.LeftLeg],.095,2),o(i[e.LeftLeg],i[e.LeftFoot],.075,2),o(i[e.RightUpLeg],i[e.RightLeg],.095,2),o(i[e.RightLeg],i[e.RightFoot],.075,2),o(i[e.LeftArm],i[e.LeftForeArm],.065,2),o(i[e.LeftForeArm],i[e.LeftHand],.055,2),o(i[e.RightArm],i[e.RightForeArm],.065,2),o(i[e.RightForeArm],i[e.RightHand],.055,2),t}};var ns=new on,Cd=new L,Eb=new L,Ga=22,Th=class{constructor(t,e){this.data=t,this.bvh=e,this.cell=t.cell,this.zone=t.zone,this.roofs=t.roofs.map((n,s)=>{let o=atob(n.grid.m),a=new Uint8Array(o.length);for(let l=0;l<o.length;l++)a[l]=o.charCodeAt(l);return{...n,i:s,m:a,nx:n.grid.nx,nz:n.grid.nz,ox:n.grid.ox,oz:n.grid.oz,x0:n.x-n.hx,x1:n.x+n.hx,z0:n.z-n.hz,z1:n.z+n.hz,links:[],cells:[]}});for(let n of this.roofs)for(let s=0;s<n.m.length;s++)n.m[s]&&n.cells.push(s);let i=t.zone.center;for(let n of this.roofs)n.cellD=Float32Array.from(n.cells.map(s=>Math.hypot(n.ox+(s%n.nx+.5)*this.cell-i[0],n.oz+((s/n.nx|0)+.5)*this.cell-i[1]))).sort(),n.dist=Math.hypot(n.x-i[0],n.z-i[1]);this.links=t.links.map((n,s)=>({...n,i:s,p0:new L(...n.p0),p1:new L(...n.p1),k0:n.k0?new L(...n.k0):null,k1:n.k1?new L(...n.k1):null}));for(let n of this.links)this.roofs[n.a].links.push({link:n,dir:0,to:n.b}),n.oneWay||this.roofs[n.b].links.push({link:n,dir:1,to:n.a});if(this.spawns=this.roofs.filter(n=>n.spawn>=0).sort((n,s)=>n.spawn-s.spawn),this.fenceBvh=null,t.fence&&t.fence.length){let n=new Cs(4096,8192);for(let a of t.fence)n.shape(a);let s=n.arrays(),o=new ce;o.setAttribute("position",new Ft(s.position.slice(),3)),o.setIndex(new Ft(s.index.slice(),1)),this.fenceBvh=new Ao(o)}}safeCount(t,e){let i=t.cellD,n=0,s=i.length;for(;n<s;){let o=n+s>>1;i[o]<e?n=o+1:s=o}return n}roofAt(t,e,i=null){let n=-1,s=1e9;for(let o of this.roofs){if(t<o.x0-.35||t>o.x1+.35||e<o.z0-.35||e>o.z1+.35)continue;let a=i==null?0:Math.abs(i-o.roofY);a<s&&(s=a,n=o.i)}return s<3.5||i==null?n:-1}cellAt(t,e,i){let n=Math.floor((e-t.ox)/this.cell),s=Math.floor((i-t.oz)/this.cell);return n<0||s<0||n>=t.nx||s>=t.nz?-1:s*t.nx+n}walk(t,e,i){let n=this.cellAt(t,e,i);return n>=0&&t.m[n]===1}cellPos(t,e,i=new L){return i.set(t.ox+(e%t.nx+.5)*this.cell,t.roofY,t.oz+((e/t.nx|0)+.5)*this.cell)}nearestCell(t,e,i){let n=this.cellAt(t,e,i);if(n>=0&&t.m[n])return n;let s=-1,o=1e9;for(let a of t.cells){let l=t.ox+(a%t.nx+.5)*this.cell,c=t.oz+((a/t.nx|0)+.5)*this.cell,h=(l-e)**2+(c-i)**2;h<o&&(o=h,s=a)}return s}clearWalk(t,e,i,n,s){let o=Math.hypot(n-e,s-i),a=Math.ceil(o/(this.cell*.5));for(let l=0;l<=a;l++){let c=a?l/a:0;if(!this.walk(t,e+(n-e)*c,i+(s-i)*c))return!1}return!0}path(t,e,i,n,s){if(this.clearWalk(t,e,i,n,s))return[{x:n,z:s}];let o=this.nearestCell(t,e,i),a=this.nearestCell(t,n,s);if(o<0||a<0)return[{x:n,z:s}];if(o===a)return[{x:n,z:s}];let l=t.nx,c=t.nz,h=l*c,u=new Float32Array(h).fill(1e9),f=new Int32Array(h).fill(-1),d=new Uint8Array(h),p=[o];u[o]=0;let x=a%l,m=a/l|0,g=A=>{let R=Math.abs(A%l-x),P=Math.abs((A/l|0)-m);return Math.max(R,P)+.414*Math.min(R,P)},_=!1,M=0;for(;p.length&&M++<4e3;){let A=0,R=1e9;for(let I=0;I<p.length;I++){let U=u[p[I]]+g(p[I]);U<R&&(R=U,A=I)}let P=p[A];if(p[A]=p[p.length-1],p.pop(),P===a){_=!0;break}if(d[P])continue;d[P]=1;let C=P%l,D=P/l|0;for(let I=-1;I<=1;I++)for(let U=-1;U<=1;U++){if(!U&&!I)continue;let k=C+U,V=D+I;if(k<0||V<0||k>=l||V>=c)continue;let tt=V*l+k;if(!t.m[tt]||d[tt]||U&&I&&(!t.m[D*l+k]||!t.m[V*l+C]))continue;let W=u[P]+(U&&I?1.414:1);W<u[tt]&&(u[tt]=W,f[tt]=P,p.push(tt))}}if(!_)return[{x:n,z:s}];let v=[];for(let A=a;A!==o&&A>=0;A=f[A])v.push(this.cellPos(t,A));v.reverse(),v[v.length-1]={x:n,z:s};let S=[],w=e,y=i,b=0;for(;b<v.length;){let A=v.length-1;for(;A>b&&!this.clearWalk(t,w,y,v[A].x,v[A].z);)A--;S.push({x:v[A].x,z:v[A].z}),w=v[A].x,y=v[A].z,b=A+1}return S}route(t,e,i=null){let n=this.roofs.length,s=new Float32Array(n).fill(1e9),o=new Array(n).fill(null),a=new Uint8Array(n);for(s[t]=0;;){let l=-1,c=1e9;for(let h=0;h<n;h++)!a[h]&&s[h]<c&&(c=s[h],l=h);if(l<0)return null;if(l!==t&&e(this.roofs[l])){let h=[];for(let u=l;u!==t;u=o[u].from)h.push(o[u].e);return h.reverse()}a[l]=1;for(let h of this.roofs[l].links){if(i&&i(h))continue;let u=s[l]+h.link.time+3;u<s[h.to]&&(s[h.to]=u,o[h.to]={from:l,e:h})}}}raycast(t,e,i=400){return ns.origin.copy(t),ns.direction.copy(e),this.bvh.raycastFirst(ns,Le,0,i)||null}los(t,e){Cd.copy(e).sub(t);let i=Cd.length();return i<.01?!0:(ns.origin.copy(t),ns.direction.copy(Cd).multiplyScalar(1/i),!this.bvh.raycastFirst(ns,Le,0,i-.05))}groundY(t,e,i,n=6){ns.origin.set(t,i,e),ns.direction.set(0,-1,0);let s=this.bvh.raycastFirst(ns,Le,0,n);return s?s.point.y:null}linkEnds(t,e){return e?[t.p1,t.p0]:[t.p0,t.p1]}linkDuration(t){return t.time}linkPos(t,e,i,n){let[s,o]=this.linkEnds(t,e);if(t.kind==="zip"){let a=t.lift,l=.12;if(i<l)return n.copy(s).setY(s.y+a*(i/l));if(i>1-l)return n.copy(o).setY(o.y+a*((1-i)/l));let c=(i-l)/(1-2*l);return n.copy(s).lerp(o,c).setY(s.y+(o.y-s.y)*c+a)}if(t.kind==="pad"){let a=i*t.time;return n.set(s.x+t.v[0]*a,s.y+t.v[1]*a-.5*Ga*a*a,s.z+t.v[2]*a)}if(t.kind==="jump"&&t.k0){let a=e?t.k1:t.k0,l=e?t.k0:t.k1,c=e?1-t.seg[1]:t.seg[0],h=e?1-t.seg[0]:t.seg[1];if(i<c)return n.copy(s).lerp(a,i/c);if(i>h)return n.copy(l).lerp(o,(i-h)/(1-h));let u=(i-c)/(h-c);return n.copy(a).lerp(l,u).setY(a.y+(l.y-a.y)*u+1.05*4*u*(1-u))}if(t.kind==="jump"||t.kind==="step"){let a=(t.kind==="jump"?1.25:.55)+Math.max(0,o.y-s.y),l=s.y+(o.y-s.y)*i+a*4*i*(1-i)*(o.y>s.y?1-i*.5:.5+i*.5);return n.copy(s).lerp(o,i).setY(Math.max(l,s.y+(o.y-s.y)*i))}if(t.kind==="ladder"){let a=t.p0,l=t.p1,c=Eb.set(t.wall[0]-t.n[0]*.42,a.y,t.wall[1]-t.n[1]*.42),h=e?1-i:i,u=.12,f=.86;return h<u?n.copy(a).lerp(c,h/u):h<f?n.copy(c).setY(a.y+(l.y-a.y)*((h-u)/(f-u))):n.copy(c).setY(l.y).lerp(l,(h-f)/(1-f))}return n.copy(s).lerp(o,i)}linkMode(t,e,i=0){if(t.kind==="jump"&&t.seg){let n=i?1-e:e;return n<t.seg[0]||n>t.seg[1]?"ground":"air"}return t.kind==="zip"?e>.1&&e<.92?"zip":"air":t.kind==="ladder"?e>.1&&e<.88?"ladder":"ground":"air"}linkLabel(t){return{zip:"ZIPLINE",pad:"LAUNCH PAD",ladder:"LADDER",jump:"RAMP",step:"CLIMB"}[t.kind]}};var Eh=class{constructor(){this.ctx=null,this.muted=!1,this.vol=.9,this.loops={}}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.vol;let i=e.createDynamicsCompressor();i.threshold.value=-16,i.knee.value=18,i.ratio.value=5,i.attack.value=.004,i.release.value=.22,this.master.connect(i),i.connect(e.destination);let n=e.sampleRate*2.6,s=e.createBuffer(2,n,e.sampleRate);for(let l=0;l<2;l++){let c=s.getChannelData(l);for(let h=0;h<n;h++){let u=h/n;c[h]=(Math.random()*2-1)*Math.pow(1-u,2.6)*(h<400?h/400:1)*(1+.6*Math.sin(h*7e-4+l))}}this.rev=e.createConvolver(),this.rev.buffer=s,this.revGain=e.createGain(),this.revGain.gain.value=.55,this.rev.connect(this.revGain),this.revGain.connect(this.master);let o=e.sampleRate*2;this.noise=e.createBuffer(1,o,e.sampleRate);let a=this.noise.getChannelData(0);for(let l=0;l<o;l++)a[l]=Math.random()*2-1;this._ambience()}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:this.vol,this.ctx.currentTime,.05)}get t(){return this.ctx?this.ctx.currentTime:0}_out(t=0,e=.25,i=1){let n=this.ctx,s=n.createGain();s.gain.value=i;let o=s;if(n.createStereoPanner){let a=n.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,t)),s.connect(a),o=a}if(o.connect(this.master),e>0){let a=n.createGain();a.gain.value=e,o.connect(a),a.connect(this.rev)}return s}_noise(t,e=0){let n=this.ctx.createBufferSource();return n.buffer=this.noise,n.loop=!0,n.start(this.t+e,Math.random()*1.5),n.stop(this.t+e+t+.05),n}_env(t,e,i=0){let n=this.t+i;t.cancelScheduledValues(n),t.setValueAtTime(e[0][1],n+e[0][0]);for(let s=1;s<e.length;s++)e[s][2]==="exp"?t.exponentialRampToValueAtTime(Math.max(1e-4,e[s][1]),n+e[s][0]):t.linearRampToValueAtTime(e[s][1],n+e[s][0])}_tone(t,e,i,n,s,o,a=0){let l=this.ctx,c=l.createOscillator();c.type=t;let h=l.createGain();return c.frequency.setValueAtTime(e,this.t+a),i!==e&&c.frequency.exponentialRampToValueAtTime(Math.max(1,i),this.t+a+n),this._env(h.gain,[[0,0],[.004,s],[n,1e-4,"exp"]],a),c.connect(h),h.connect(o),c.start(this.t+a),c.stop(this.t+a+n+.05),c}_burst(t,e,i,n,s,o,a=0,l="bandpass"){let c=this.ctx,h=this._noise(t,a),u=c.createBiquadFilter();u.type=l,u.Q.value=n,u.frequency.setValueAtTime(e,this.t+a),u.frequency.exponentialRampToValueAtTime(Math.max(20,i),this.t+a+t);let f=c.createGain();this._env(f.gain,[[0,0],[.002,s],[t,1e-4,"exp"]],a),h.connect(u),u.connect(f),f.connect(o)}shot(t=0,e=0,i=!1){if(!this.ctx)return;let n=Math.min(.5,t/343),s=t<=0?1:Math.max(.05,1/(1+t/26)),o=this._out(e,t<=0?.55:.9,s*(i?.6:1)),a=o;if(t>0){let l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=Math.max(500,9e3-t*55),l.connect(o),a=l}if(i){this._burst(.11,3200,500,.7,.9,a,n),this._tone("sine",190,60,.12,.7,a,n);return}this._burst(.05,6e3,1800,.5,1,a,n,"highpass"),this._burst(.42,1600,140,.6,.95,a,n),this._tone("sine",120,34,.5,1,a,n),this._burst(1.3,700,180,.4,.22,a,n+.05,"lowpass")}bolt(t=.32){if(!this.ctx)return;let e=this._out(.15,.08,.5);for(let[i,n]of[[0,2600],[.11,1700],[.36,2100],[.47,3100]])this._burst(.035,n,n*.6,4,.8,e,t+i),this._tone("square",n*.5,n*.25,.02,.08,e,t+i)}reload(t=2.4){if(!this.ctx)return;let e=this._out(.1,.08,.5);for(let[i,n]of[[.15,900],[.3,1400],[t*.55,1100],[t*.62,2400],[t-.5,1800],[t-.38,3e3]])this._burst(.05,n,n*.5,3,.8,e,i)}dry(){this.ctx&&this._burst(.03,2400,1500,5,.5,this._out(0,0,.5))}whiz(t=0){if(!this.ctx)return;let e=this._out(t,.2,.75),i=this.ctx,n=this._noise(.22),s=i.createBiquadFilter();s.type="bandpass",s.Q.value=9,s.frequency.setValueAtTime(5200,this.t),s.frequency.exponentialRampToValueAtTime(900,this.t+.2);let o=i.createGain();this._env(o.gain,[[0,0],[.03,1],[.22,1e-4,"exp"]]),n.connect(s),s.connect(o),o.connect(e)}impact(t=10,e=0){if(!this.ctx)return;let i=this._out(e,.3,Math.max(.05,.6/(1+t/14)));this._burst(.07,2600,500,1.5,1,i)}hit(t=!1){if(!this.ctx)return;let e=this._out(0,.12,.55);this._burst(.05,1900,700,2,.9,e),t&&(this._tone("sine",1320,1318,.5,.35,e,.02),this._tone("sine",1980,1975,.35,.18,e,.02))}kill(){if(!this.ctx)return;let t=this._out(0,.5,.5);this._tone("sine",660,659,.9,.3,t,.05),this._tone("sine",990,988,.7,.2,t,.13),this._tone("triangle",330,329,1.1,.2,t,.05)}hurt(){if(!this.ctx)return;let t=this._out(0,.1,.9);this._tone("sine",150,48,.25,1,t),this._burst(.18,600,120,.8,.7,t)}step(t=!1){if(!this.ctx)return;let e=this._out((Math.random()-.5)*.3,.05,t?.09:.2);this._burst(.06,380+Math.random()*160,110,1.2,1,e)}jump(){this.ctx&&this._burst(.09,300,700,1,.3,this._out(0,.05,.4))}land(t=1){if(!this.ctx)return;let e=this._out(0,.12,Math.min(1,.3+t*.5));this._tone("sine",110,40,.18,.9,e),this._burst(.12,500,90,.8,.7,e)}pad(){if(!this.ctx)return;let t=this._out(0,.4,.8);this._tone("sawtooth",70,520,.38,.22,t),this._burst(.9,300,3200,.7,.55,t,.02),this._tone("sine",880,1760,.22,.2,t,0)}ui(){this.ctx&&this._tone("sine",700,700,.05,.16,this._out(0,0,.6))}tick(){this.ctx&&this._tone("square",1100,1100,.03,.07,this._out(0,.1,.5))}heart(){if(!this.ctx)return;let t=this._out(0,0,.9);this._tone("sine",62,38,.13,1,t),this._tone("sine",56,34,.14,.75,t,.17)}ladder(){this.ctx&&this._burst(.04,1500,900,5,.5,this._out(0,.1,.35))}choir(t=4.5,e=!1){if(!this.ctx)return;let i=this.ctx,n=this._out(0,1,.36);(e?[73.4,110,146.8,174.6,220]:[146.8,220,293.7,349.2,440,587.3]).forEach((o,a)=>{for(let l of[-5,4]){let c=i.createOscillator();c.type=a%2?"triangle":"sine",c.frequency.value=o,c.detune.value=l+Math.random()*4;let h=i.createOscillator();h.frequency.value=4.2+Math.random();let u=i.createGain();u.gain.value=5,h.connect(u),u.connect(c.detune);let f=i.createGain();this._env(f.gain,[[0,0],[t*.35,.16/(1+a*.25)],[t*.65,.12/(1+a*.25)],[t,1e-4,"exp"]],a*.05),c.connect(f),f.connect(n),c.start(this.t),h.start(this.t),c.stop(this.t+t+.3),h.stop(this.t+t+.3)}})}toll(t=0){if(!this.ctx)return;let e=this._out(0,1,.45),i=196*Math.pow(2,-t/12);for(let[n,s]of[[1,.5],[2.01,.25],[2.76,.18],[5.4,.06]])this._tone("sine",i*n,i*n*.995,3.2/n+.6,s,e)}stinger(t){if(!this.ctx)return;let e=this._out(0,.9,.5);(t?[220,277.2,329.6,440,554.4]:[220,207.6,174.6,146.8,110]).forEach((n,s)=>{this._tone("triangle",n,n,1.6,.3,e,s*.16),this._tone("sine",n*2,n*2,1.2,.12,e,s*.16)})}_ambience(){let t=this.ctx,e=(a,l,c,h)=>{let u=t.createBufferSource();u.buffer=this.noise,u.loop=!0;let f=t.createBiquadFilter();f.type=a,f.frequency.value=l,f.Q.value=c;let d=t.createGain();return d.gain.value=h,u.connect(f),f.connect(d),d.connect(this.master),u.start(),{s:u,f,g:d}};this.wind=e("bandpass",420,.5,.075),this.rain=e("highpass",5200,.3,.022);let i=t.createOscillator();i.frequency.value=.07;let n=t.createGain();n.gain.value=190,i.connect(n),n.connect(this.wind.f.frequency),i.start();let s=t.createGain();s.gain.value=.05;let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=150;for(let a of[36.7,55.2,73.6]){let l=t.createOscillator();l.type="sawtooth",l.frequency.value=a,l.detune.value=Math.random()*12-6,l.connect(o),l.start()}o.connect(s),s.connect(this.master),this.drone=s,this.zipL=e("bandpass",900,6,0),this.zoneL=e("bandpass",180,2.5,0)}setZip(t){this.zipL&&(this.zipL.g.gain.setTargetAtTime(t*.35,this.t,.05),this.zipL.f.frequency.setTargetAtTime(700+t*1500,this.t,.1))}setZone(t){this.zoneL&&this.zoneL.g.gain.setTargetAtTime(t*.3,this.t,.1)}setTension(t){this.drone&&this.drone.gain.setTargetAtTime(.05+t*.07,this.t,.5)}};var Ah=class{constructor(t,e){this.canvas=t,this.ui=e,this.keys=new Set,this.down={},this.edge={},this.lookX=0,this.lookY=0,this.moveX=0,this.moveY=0,this.locked=!1,this.lockFailed=!1,this.everLocked=!1,this.touch=!1,this.enabled=!1,this.wheel=0,this.sens=1,this.mouseBtn=[!1,!1,!1],this.cursor={x:.5,y:.5,inside:!1},this.stick={id:-1,ox:0,oy:0,x:0,y:0},this.lookTouch={id:-1,x:0,y:0},this.fireTouch={id:-1,x:0,y:0,moved:0};let i=s=>{if(s.repeat){this.enabled&&s.preventDefault();return}this.keys.add(s.code);let o=xg[s.code];o&&(this._press(o),this.enabled&&s.preventDefault()),s.code==="Tab"&&this.enabled&&s.preventDefault()},n=s=>{this.keys.delete(s.code);let o=xg[s.code];o&&this._release(o)};window.addEventListener("keydown",i),window.addEventListener("keyup",n),window.addEventListener("blur",()=>{this.keys.clear();for(let s in this.down)this.down[s]=!1;this.mouseBtn=[!1,!1,!1]}),t.addEventListener("mousedown",s=>{if(!this.touch&&this.enabled){if(s.preventDefault(),!this.locked&&!this.lockFailed){this.requestLock();return}this.mouseBtn[s.button]=!0,s.button===0&&this._press("fire"),s.button===2&&this._press("ads")}}),window.addEventListener("mouseup",s=>{this.mouseBtn[s.button]=!1,s.button===0&&this._release("fire"),s.button===2&&this._release("ads")}),t.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("mousemove",s=>{if(!(this.touch||!this.enabled))if(this.locked)this.lookX+=s.movementX||0,this.lookY+=s.movementY||0;else{let o=t.getBoundingClientRect();this.cursor.x=(s.clientX-o.left)/o.width,this.cursor.y=(s.clientY-o.top)/o.height,this.cursor.inside=this.cursor.x>=0&&this.cursor.x<=1&&this.cursor.y>=0&&this.cursor.y<=1,this.lockFailed&&this.cursor.inside&&(this.lookX+=s.movementX||0,this.lookY+=s.movementY||0)}}),t.addEventListener("wheel",s=>{this.enabled&&(this.wheel+=Math.sign(s.deltaY),s.preventDefault())},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,this.locked&&(this.everLocked=!0),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>this._lockError()),window.addEventListener("touchstart",()=>{this.touch||(this.touch=!0,this.onTouchMode&&this.onTouchMode())},{capture:!0,passive:!0}),this._touchSetup()}requestLock(){if(!(this.touch||this.lockFailed)){if(!this.canvas.requestPointerLock){this.lockFailed=!0,this.onLockChange&&this.onLockChange(!1);return}try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>this._lockError())}catch{this._lockError()}}}_lockError(){let t=performance.now();t-(this._lastErr||-1e9)<80||(this._lastErr=t,this.everLocked?this.onLockError&&this.onLockError():(this.lockFailed=!0,this.onLockChange&&this.onLockChange(!1)))}exitLock(){try{document.pointerLockElement&&document.exitPointerLock()}catch{}}_press(t){this.down[t]||(this.edge[t]=!0),this.down[t]=!0}_release(t){this.down[t]=!1,t==="fire"&&(this.edge.fireUp=!0)}pressed(t){return!!this.edge[t]}held(t){return!!this.down[t]}endFrame(){for(let t in this.edge)this.edge[t]=!1;this.lookX=0,this.lookY=0,this.wheel=0}poll(t){let e=0,i=0,n=this.keys;(n.has("KeyW")||n.has("ArrowUp"))&&(i+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(i-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(e+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(e-=1),this.stick.id>=0&&(e=this.stick.x,i=this.stick.y);let s=Math.hypot(e,i);if(s>1&&(e/=s,i/=s),this.moveX=e,this.moveY=i,this.sprintStick=this.stick.id>=0&&s>.92&&i>.6,!this.touch&&!this.locked&&this.lockFailed&&this.cursor.inside&&this.enabled){let o=this.cursor.x<.12?-(.12-this.cursor.x)/.12:this.cursor.x>.88?(this.cursor.x-.88)/.12:0,a=this.cursor.y<.1?-(.1-this.cursor.y)/.1:this.cursor.y>.9?(this.cursor.y-.9)/.1:0;this.lookX+=o*900*t,this.lookY+=a*500*t}}_touchSetup(){let t=this.canvas,e={passive:!1},i=o=>{if(this.touch||(this.touch=!0,this.onTouchMode&&this.onTouchMode()),!!this.enabled){o.preventDefault();for(let a of o.changedTouches){let l=t.getBoundingClientRect();(a.clientX-l.left)/l.width<.42&&this.stick.id<0?(this.stick.id=a.identifier,this.stick.ox=a.clientX,this.stick.oy=a.clientY,this.stick.x=this.stick.y=0,this.onStick&&this.onStick(!0,a.clientX,a.clientY,0,0)):this.lookTouch.id<0&&(this.lookTouch.id=a.identifier,this.lookTouch.x=a.clientX,this.lookTouch.y=a.clientY)}}},n=o=>{if(this.enabled){o.preventDefault();for(let a of o.changedTouches)if(a.identifier===this.stick.id){let c=(a.clientX-this.stick.ox)/56,h=(a.clientY-this.stick.oy)/56,u=Math.hypot(c,h);u>1&&(c/=u,h/=u),this.stick.x=c,this.stick.y=-h,this.onStick&&this.onStick(!0,this.stick.ox,this.stick.oy,c,h)}else a.identifier===this.lookTouch.id&&(this.lookX+=(a.clientX-this.lookTouch.x)*2.1,this.lookY+=(a.clientY-this.lookTouch.y)*2.1,this.lookTouch.x=a.clientX,this.lookTouch.y=a.clientY)}},s=o=>{for(let a of o.changedTouches)a.identifier===this.stick.id&&(this.stick.id=-1,this.stick.x=this.stick.y=0,this.onStick&&this.onStick(!1)),a.identifier===this.lookTouch.id&&(this.lookTouch.id=-1)};t.addEventListener("touchstart",i,e),t.addEventListener("touchmove",n,e),t.addEventListener("touchend",s,e),t.addEventListener("touchcancel",s,e)}bindButton(t,e,i="tap"){let n={passive:!1},s=-1,o=0,a=0;t.addEventListener("touchstart",c=>{if(c.preventDefault(),c.stopPropagation(),this.touch=!0,!this.enabled)return;let h=c.changedTouches[0];s=h.identifier,o=h.clientX,a=h.clientY,t.classList.add("on"),i==="toggle"?(this.down[e]=!this.down[e],this.edge[e]=!0,t.classList.toggle("lit",this.down[e])):i==="fire"?(this.fireTouch.id=s,this.edge.fireDown=!0):this._press(e)},n),t.addEventListener("touchmove",c=>{if(c.preventDefault(),c.stopPropagation(),!(i!=="fire"&&i!=="hold"))for(let h of c.changedTouches)h.identifier===s&&(this.lookX+=(h.clientX-o)*1.7,this.lookY+=(h.clientY-a)*1.7,o=h.clientX,a=h.clientY)},n);let l=c=>{c.preventDefault(),c.stopPropagation();for(let h of c.changedTouches)h.identifier===s&&(s=-1,t.classList.remove("on"),i==="fire"?(this.fireTouch.id=-1,this.edge.fire=!0,this.edge.fireUp=!0):i!=="toggle"&&this._release(e))};t.addEventListener("touchend",l,n),t.addEventListener("touchcancel",l,n),t.addEventListener("mousedown",c=>{c.preventDefault(),c.stopPropagation(),this.enabled&&(i==="toggle"?(this.down[e]=!this.down[e],this.edge[e]=!0,t.classList.toggle("lit",this.down[e])):i==="fire"?this.edge.fire=!0:this._press(e))}),t.addEventListener("mouseup",c=>{c.stopPropagation(),i!=="toggle"&&i!=="fire"&&this._release(e)})}setToggle(t,e,i){this.down[t]=e,i&&i.classList.toggle("lit",e)}},xg={Space:"jump",ShiftLeft:"sprint",ShiftRight:"sprint",ControlLeft:"crouch",KeyC:"crouch",KeyR:"reload",KeyE:"use",KeyF:"use",KeyQ:"swap",Digit1:"w1",Digit2:"w2",KeyZ:"zoom",KeyX:"zoom",Escape:"pause",KeyP:"pause",KeyM:"mute",Tab:"map",Enter:"confirm"};var Ab=r=>document.getElementById(r),_g=r=>String(r).padStart(2,"0"),Wa="http://www.w3.org/2000/svg",Rh=class{constructor(t){this.g=t,this.el={};for(let e of["hud","scope","touch","title","pause","results","fade","alive-n","pips","kills","time","phase","map","feed","banner","target","cross","hit","arcs","prompt","hp","hpn","hpbar","where","seen","gain","ammo","wname","mag","res","act","ret","zoomx","range","hold","breath","stick","b-use","b-zoom","b-crouch","b-ads","deploy","load","loadtxt","loadbar","keys","rplace","rhead","rsub","stats","rlog","err","psub","online","lobby","score","tags","again","tolobby","rwait","quit","resume"])this.el[e]=Ab(e);this.tagEls=new Map,this.teams=!1,this.myTeam=0,this.mapCtx=this.el.map.getContext("2d"),this.bannerT=0,this.hitT=0,this.feedItems=[],this.arcs=[],this.mapT=0,this.gainT=0,this.lastHp=100,this.mode="title";for(let e=0;e<8;e++)this.el.pips.appendChild(document.createElement("i"));for(let e=0;e<4;e++){let i=document.createElementNS(Wa,"svg");i.setAttribute("viewBox","-100 -100 200 200");let n=document.createElementNS(Wa,"path");n.setAttribute("d","M -26 -96.6 A 100 100 0 0 1 26 -96.6"),i.appendChild(n);let s=document.createElementNS(Wa,"path");s.setAttribute("d","M -9 -104 L 0 -113 L 9 -104"),i.appendChild(s),this.el.arcs.appendChild(i),this.arcs.push({el:i,t:0,x:0,z:0,k:1})}this._reticle(),this.el.hit.querySelectorAll("i").forEach((e,i)=>{e.style.transform=`rotate(${45+i*90}deg) translateY(-13px)`}),[["l",-15,0],["r",6,0],["t",0,-15],["b",0,6]].forEach(([e,i,n])=>{let s=this.el.cross.querySelector("."+e);s.style.left=i+"px",s.style.top=n+"px"})}_reticle(){let t=this.el.ret,e=(n,s,o,a,l)=>{let c=document.createElementNS(Wa,"line");c.setAttribute("x1",n),c.setAttribute("y1",s),c.setAttribute("x2",o),c.setAttribute("y2",a),c.setAttribute("class",l),t.appendChild(c)},i=(n,s,o,a)=>{let l=document.createElementNS(Wa,"circle");l.setAttribute("cx",n),l.setAttribute("cy",s),l.setAttribute("r",o),l.setAttribute("class",a),t.appendChild(l)};e(-100,0,-3,0,"thin"),e(3,0,100,0,"thin"),e(0,-100,0,-3,"thin"),e(0,3,0,100,"thin"),e(-100,0,-42,0,"post"),e(42,0,100,0,"post"),e(0,42,0,100,"post");for(let n=1;n<=6;n++)for(let s of[-1,1])i(s*n*6,0,.5,"m"),i(0,s*n*6,.5,"m");for(let n=1;n<=5;n++)e(-1.6,6*n+3,1.6,6*n+3,"thin");i(0,0,.55,"c")}show(t){this.mode=t;let e=this.el;e.title.hidden=t!=="title",e.online.hidden=t!=="online",e.lobby.hidden=t!=="lobby",t!=="results"&&this.netResults(!1),t!=="pause"&&this.netPause(!1),e.pause.hidden=t!=="pause",e.results.hidden=t!=="results",e.hud.hidden=!(t==="play"||t==="pause"||t==="spectate"),t!=="play"&&(e.scope.hidden=!0),e.touch.hidden=!(t==="play"&&this.g.input.touch)}loading(t,e){this.el.loadbar.firstElementChild.style.width=Math.round(t*100)+"%",e&&(this.el.loadtxt.textContent=e)}ready(){this.el.deploy.disabled=!1,this.el.load.hidden=!0}error(t){this.el.err.hidden=!1,this.el.err.textContent=t}keysLegend(t){this.el.keys.innerHTML=t?"<span><b>LEFT THUMB</b> move</span><span><b>RIGHT THUMB</b> look</span><span><b>FIRE</b> drag to aim, release to shoot</span><span><b>SCOPE</b> toggle</span><span><b>USE</b> ziplines and ladders</span>":"<span><b>WASD</b> move</span><span><b>MOUSE</b> look</span><span><b>LMB</b> fire</span><span><b>RMB</b> scope</span><span><b>WHEEL</b> 4\xD7 / 8\xD7</span><span><b>SHIFT</b> sprint \xB7 hold breath</span><span><b>SPACE</b> jump \xB7 climb</span><span><b>C</b> crouch</span><span><b>E</b> zipline \xB7 ladder</span><span><b>R</b> reload</span><span><b>Q</b> sidearm</span><span><b>ESC</b> pause</span>"}fade(t){this.el.fade.style.opacity=t}time(t,e,i,n){let s=Math.max(0,e-t),o=Math.floor(s/60),a=Math.floor(s%60),l=`${_g(o)}:${_g(a)}`;l!==this._t&&(this._t=l,this.el.time.textContent=l,this.el.time.classList.toggle("late",s<=30)),i!==this._pl&&(this._pl=i,this.el.phase.textContent=i,this.el.phase.className="lab "+(n||""))}alive(t,e){let i=t.filter(s=>s.alive).length;this.el["alive-n"].textContent=i;let n=this.el.pips.children;t.forEach((s,o)=>{n[o]&&(n[o].className=(s.alive?"":"dead")+(s===e?" me":""))}),this.el.kills.textContent=`${e.kills} elimination${e.kills===1?"":"s"}`}health(t){let e=Math.max(0,Math.ceil(t));this.el.hpn.textContent=e,this.el.hpbar.querySelector("i").style.width=e+"%",this.el.hpbar.querySelector("em").style.width=e+"%",this.el.hp.classList.toggle("low",e<=35),e>this.lastHp+4&&(this.el.gain.textContent="+"+(e-this.lastHp),this.el.gain.style.opacity=1,this.gainT=1.4),this.lastHp=e}where(t){t!==this._w&&(this._w=t,this.el.where.textContent=t)}seen(t,e){let i=t?"the angel sees you":e?"hide from the angel":"unseen";i!==this._s&&(this._s=i,this.el.seen.textContent=i,this.el.seen.classList.toggle("on",t||e))}weapon(t){let e=t.w[t.cur];this.el.wname.textContent=t.weapon.name,this.el.mag.textContent=e.mag,this.el.res.textContent="/ "+e.reserve,this.el.ammo.classList.toggle("empty",e.mag===0),this.el["b-zoom"].textContent=t.weapon.zooms[Math.min(t.zoomIdx,t.weapon.zooms.length-1)]+"\xD7"}action(t){let e=t<0?0:Math.round(t*100);e!==this._a&&(this._a=e,this.el.act.firstElementChild.style.width=e+"%")}prompt(t,e,i){let n=this.el.prompt,s=this.el["b-use"];if(!t){n.hidden||(n.hidden=!0),s.hidden||(s.hidden=!0),this._p=null;return}t!==this._p&&(this._p=t,i?(s.hidden=!0,n.hidden=!1,n.textContent=t):e?(s.hidden=!1,s.textContent=t,n.hidden=!0):(n.hidden=!1,n.innerHTML=`<kbd>E</kbd>${t}`))}banner(t,e=2.4,i=!1,n="",s=!1){let o=this.el.banner;o.querySelector("b").textContent=t,o.querySelector("span").textContent=n,o.className=(i?"small ":"")+(s?"red":""),o.style.opacity=1,this.bannerT=e}feed(t,e,i,n){let s=document.createElement("div");for(n&&(s.className="me"),s.innerHTML=`${Pd(t)}<u></u>${Pd(e)}${i?`<s>${Pd(i)}</s>`:""}`,this.el.feed.prepend(s),this.feedItems.unshift({el:s,t:6.5});this.feedItems.length>5;)this.feedItems.pop().el.remove()}hitMarker(t,e){let i=this.el.hit;i.className=t||e?"kill":"",i.style.opacity=1,this.hitT=t?.5:.22}threat(t,e=1){let i=this.arcs[0];for(let n of this.arcs)n.t<i.t&&(i=n);i.t=1.3*e+.5,i.x=t.x,i.z=t.z,i.k=e}target(t){let e=this.el.target;if(!t){e.hidden||(e.hidden=!0),this._tg=null;return}e.hidden&&(e.hidden=!1);let i=t.name+Math.ceil(t.hp);i!==this._tg&&(this._tg=i,e.querySelector("b").textContent=`${t.name} \xB7 ${Math.max(0,Math.ceil(t.hp))}`,e.querySelector("i").style.width=Math.max(0,t.hp)+"%")}scope(t,e,i,n,s,o){let a=this.el;if(a.scope.hidden===t&&(a.scope.hidden=!t,a.cross.style.visibility=t?"hidden":""),!t)return;let l=e+"\xD7";l!==this._z&&(this._z=l,a.zoomx.textContent=l);let c=i>0?Math.round(i)+" m":"\u2014 m";c!==this._r&&(this._r=c,a.range.textContent=c),a.breath.firstElementChild.style.width=Math.round(n*100)+"%",a.breath.classList.toggle("out",s>0),this._ht!==o&&(this._ht=o,a.hold.textContent=o?"crouch to steady":"shift \xB7 hold breath")}syncCrouch(t){this.el["b-crouch"].classList.toggle("lit",t),this.g.input&&this.g.input.touch&&(this.g.input.down.crouch=t)}stick(t,e,i,n,s){let o=this.el.stick;o.hidden=!t,t&&(o.style.left=e+"px",o.style.top=i+"px",o.firstElementChild.style.transform=`translate(${n*34}px,${s*34}px)`)}teamMode(t,e){this.teams=t,this.myTeam=e,this.el.score.hidden=!0;for(let i of this.tagEls.values())i.remove();this.tagEls.clear()}score(t){let e=this.el.score;if(!t){e.hidden||(e.hidden=!0);return}e.hidden&&(e.hidden=!1),t!==this._sc&&(this._sc=t,e.innerHTML=t)}netResults(t,e){this.el.again.hidden=t,this.el.tolobby.hidden=!(t&&e),this.el.rwait.hidden=!(t&&!e),document.getElementById("rleave").hidden=!t}netPause(t){this.el.quit.textContent=t?"Leave room":"Leave match",this.el.pause.querySelector("h2").textContent=t?"Menu":"Paused"}_tags(t){let e=t.gfx.camera,i=t.gfx.w||innerWidth,n=t.gfx.h||innerHeight,s=new Set,o=this._tv||(this._tv=e.position.clone());if(t.net&&t.player.alive)for(let a of t.puppets){let l=this.teams&&a.team===this.myTeam,c=a.revealedUntil>t.time;if(!a.alive||!(l||c)||(o.copy(a.pos),o.y+=2.15,o.project(e),o.z>1||Math.abs(o.x)>1.1||Math.abs(o.y)>1.1))continue;let h=this.tagEls.get(a.netId);h||(h=document.createElement("div"),h.className="tag",this.el.tags.appendChild(h),this.tagEls.set(a.netId,h));let u=(l?"":"\u25C6 ")+a.name+(a.bot,"");h._t!==u&&(h._t=u,h.textContent=u),h.classList.toggle("foe",!l),h.style.transform=`translate(${((o.x+1)/2*i).toFixed(1)}px,${((1-o.y)/2*n).toFixed(1)}px)`,s.add(a.netId)}for(let[a,l]of this.tagEls)s.has(a)||(l.remove(),this.tagEls.delete(a))}update(t,e){this._tags(e),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&(this.el.banner.style.opacity=0)),this.hitT>0&&(this.hitT-=t,this.hitT<=0&&(this.el.hit.style.opacity=0)),this.gainT>0&&(this.gainT-=t,this.gainT<=0&&(this.el.gain.style.opacity=0));for(let n of this.feedItems)n.t-=t,n.t<=0&&n.el.style.opacity!=="0"&&(n.el.style.opacity=0);let i=e.player;for(let n of this.arcs){if(n.t<=0){n.el.style.opacity!=="0"&&(n.el.style.opacity=0);continue}n.t-=t;let s=Math.atan2(-(n.x-i.pos.x),-(n.z-i.pos.z))-i.yaw;n.el.style.transform=`rotate(${(-s*180/Math.PI).toFixed(1)}deg)`,n.el.style.opacity=Math.min(1,n.t*1.6)*(.55+.45*n.k)}this.mapT-=t,this.mapT<=0&&(this.mapT=.1,this._map(e))}_map(t){let e=this.el.map,i=this.mapCtx,n=e.width,s=n/2,o=t.arena,a=t.player,l=t.zone,c=Math.min(100,Math.max(30,l.r+15));this.mapRange=this.mapRange?this.mapRange+(c-this.mapRange)*.12:c;let h=this.mapRange,u=s/h;i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(s,s,s-1,0,7),i.clip();let f=!a.alive,d=f?0:a.yaw,p=Math.cos(d),x=Math.sin(d),m=1/u;i.translate(s,s),i.rotate(d),i.scale(u,u),i.translate(-l.cx,-l.cz);for(let _ of o.roofs){let M=_.dist-Math.max(_.hx,_.hz)*.7>l.r;i.fillStyle=M?"rgba(94,10,19,0.85)":!f&&_.i===a.roof?"rgba(242,242,239,0.82)":"rgba(170,171,174,0.42)",i.fillRect(_.x0,_.z0,_.x1-_.x0,_.z1-_.z0)}i.lineWidth=m*1.1;for(let _ of o.links)_.kind!=="step"&&(i.strokeStyle="rgba(242,242,239,0.5)",i.setLineDash(_.kind==="pad"?[m*3,m*3]:_.kind==="jump"?[m*1.5,m*2]:[]),i.beginPath(),i.moveTo(_.p0.x,_.p0.z),i.lineTo(_.p1.x,_.p1.z),i.stroke());i.setLineDash([]),i.lineWidth=m*3,i.strokeStyle="#b51224",i.beginPath(),i.arc(l.cx,l.cz,l.r,0,7),i.stroke(),l.nextR<l.r-.5&&(i.lineWidth=m*1.6,i.strokeStyle="rgba(242,242,239,0.75)",i.setLineDash([m*5,m*5]),i.beginPath(),i.arc(l.cx,l.cz,l.nextR,0,7),i.stroke(),i.setLineDash([])),i.strokeStyle="#b51224",i.lineWidth=m*1.8;let g=m*5;i.beginPath(),i.arc(l.cx,l.cz,g,0,7),i.stroke(),i.beginPath(),i.moveTo(l.cx-g*.8,l.cz),i.lineTo(l.cx+g*.8,l.cz),i.moveTo(l.cx,l.cz-g*.8),i.lineTo(l.cx,l.cz+g*.8),i.stroke();for(let _ of t.actors){if(_===a||!_.alive)continue;if(this.teams&&_.team===this.myTeam){i.fillStyle="#f2f2ef",i.beginPath(),i.arc(_.pos.x,_.pos.z,m*3.6,0,7),i.fill();continue}let M=_.revealedUntil>t.time||f&&!t.net,v=t.time-_.lastShot<2.5;M?(i.fillStyle="#b51224",i.beginPath(),i.arc(_.pos.x,_.pos.z,m*4.5,0,7),i.fill()):v&&(i.strokeStyle="rgba(181,18,36,0.9)",i.lineWidth=m*1.8,i.beginPath(),i.arc(_.lastShotPos.x,_.lastShotPos.z,m*(6+(t.time-_.lastShot)*4),0,7),i.stroke())}if(i.restore(),!f){let _=a.pos.x-l.cx,M=a.pos.z-l.cz,v=(_*p-M*x)*u,S=(_*x+M*p)*u,w=Math.hypot(v,S),y=s-12;w>y&&(v*=y/w,S*=y/w),i.save(),i.translate(s+v,s+S),i.fillStyle="#f2f2ef",i.strokeStyle="rgba(5,5,5,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(0,-10),i.lineTo(7,8),i.lineTo(0,4),i.lineTo(-7,8),i.closePath(),i.stroke(),i.fill(),i.restore()}i.save(),i.translate(s,s),i.rotate(d),i.fillStyle="rgba(242,242,239,0.8)",i.font='700 15px "JetBrains Mono",monospace',i.textAlign="center",i.fillText("N",0,-s+17),i.restore()}results(t){let e=this.el;e.rplace.textContent=t.placeLabel,e.rhead.textContent=t.head,e.rhead.className=t.win?"win":"lose",e.rsub.textContent=t.sub,e.stats.innerHTML=t.stats.map(([i,n])=>`<div><b>${i}</b><span class="lab">${n}</span></div>`).join(""),e.rlog.innerHTML=t.log}},Pd=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var Xa=()=>({uFogLow:ne.uFogLow,uFogHigh:ne.uFogHigh,uFogDeep:ne.uFogDeep,uFogParams:ne.uFogParams,uTime:ne.uTime,uRedCol:ne.uRedCol});var Id=40,Lo=18,yg=8,Ch=Id+Lo*yg,Ph=class{constructor(t,e){let i=new ce,n=Ch*4;this.aA=new Float32Array(n*3),this.aB=new Float32Array(n*3),this.aP=new Float32Array(n*4);let s=new Uint16Array(Ch*6);for(let o=0;o<Ch;o++){let a=o*4;for(let l=0;l<4;l++)this.aP[(a+l)*4]=l%2?1:-1,this.aP[(a+l)*4+1]=l<2?0:1,this.aP[(a+l)*4+2]=-1e3;s.set([a,a+1,a+2,a+2,a+1,a+3],o*6)}i.setAttribute("position",new Ft(new Float32Array(n*3),3)),i.setAttribute("aA",new Ft(this.aA,3)),i.setAttribute("aB",new Ft(this.aB,3)),i.setAttribute("aP",new Ft(this.aP,4)),i.setIndex(new Ft(s,1));for(let o of["aA","aB","aP"])i.getAttribute(o).setUsage(Ss);this.mat=new Ve({uniforms:{...Xa(),uRes:{value:e},uLife:{value:5.5}},transparent:!0,depthWrite:!1,blending:Bi,side:Le,vertexShader:`
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
${pr}
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
}`}),this.mesh=new de(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,t.add(this.mesh),this.geo=i,this.next=0,this.souls=[]}_setQuad(t,e,i,n,s){for(let o=0;o<4;o++){let a=t*4+o;this.aA[a*3]=e.x,this.aA[a*3+1]=e.y,this.aA[a*3+2]=e.z,this.aB[a*3]=i.x,this.aB[a*3+1]=i.y,this.aB[a*3+2]=i.z,this.aP[a*4+2]=n,this.aP[a*4+3]=s}}shot(t,e){let i=this.next;this.next=(this.next+1)%Id,this._setQuad(i,t,e,ne.uTime.value,Math.random()*.99);for(let n of["aA","aB","aP"])this.geo.getAttribute(n).needsUpdate=!0}addSoul(t,e){this.souls.length>=yg||this.souls.push({from:t.clone(),getTo:e,birth:ne.uTime.value,to:new L,c:new L})}clear(){this.souls.length=0;for(let t=0;t<Ch*4;t++)this.aP[t*4+2]=-1e3;this.geo.getAttribute("aP").needsUpdate=!0}update(){if(!this.souls.length)return;let t=new L,e=new L;this.souls.forEach((i,n)=>{i.getTo(i.to),i.c.copy(i.from).lerp(i.to,.5),i.c.y=Math.max(i.from.y,i.to.y)+14+3*Math.sin(ne.uTime.value*.4+n);let s=(a,l)=>{let c=1-a;return l.set(c*c*i.from.x+2*c*a*i.c.x+a*a*i.to.x,c*c*i.from.y+2*c*a*i.c.y+a*a*i.to.y,c*c*i.from.z+2*c*a*i.c.z+a*a*i.to.z)},o=Math.min(1,(ne.uTime.value-i.birth)/2.4);for(let a=0;a<Lo;a++){let l=a/Lo*o,c=(a+1)/Lo*o;s(l,t),s(c,e),this._setQuad(Id+n*Lo+a,t,e,i.birth,1+a/Lo*.9)}});for(let i of["aA","aB","aP"])this.geo.getAttribute(i).needsUpdate=!0}},ss=900,Ih=class{constructor(t,e){let i=new ce;this.pos=new Float32Array(ss*3),this.dat=new Float32Array(ss*4),i.setAttribute("position",new Ft(this.pos,3).setUsage(Ss)),i.setAttribute("aD",new Ft(this.dat,4).setUsage(Ss)),this.vel=new Float32Array(ss*3),this.life=new Float32Array(ss),this.max=new Float32Array(ss),this.grav=new Float32Array(ss),this.n=0,this.head=0,this.mat=new Ve({uniforms:{...Xa(),uRes:{value:e}},transparent:!0,depthWrite:!1,blending:vs,vertexShader:`attribute vec4 aD; uniform vec2 uRes; varying vec4 vD; varying vec3 vWp;
void main() { vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; vD = aD; vWp = position;
  float px = aD.z > 3.5 ? aD.x : aD.x * projectionMatrix[1][1] * uRes.y * 0.5 / max(-mv.z, 0.05); gl_PointSize = aD.y <= 0.0 ? 0.0 : clamp(px, 1.5, 220.0); }`,fragmentShader:`precision highp float; uniform vec3 uRedCol; uniform float uTime; varying vec4 vD; varying vec3 vWp;
${pr}
void main() { vec2 c = gl_PointCoord - 0.5; float r = length(c) * 2.0; if (r > 1.0) discard; float a = vD.y; vec3 col;
  vec3 toP = vWp - cameraPosition; float dist = length(toP); float fa = scFogAmount(cameraPosition, toP / max(dist, 1e-4), dist);
  if (vD.z < 0.5) { col = uRedCol * (0.75 + 0.25 * (1.0 - r)); a *= smoothstep(1.0, 0.72, r); col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa * 0.8); }
  else if (vD.z < 1.5) { col = vec3(1.0); a *= (1.0 - r); }
  else if (vD.z < 2.5) { col = vec3(0.42); a *= (1.0 - r) * 0.5; col = mix(col, scFogColor(toP / max(dist, 1e-4), vWp.y), fa); }
  else if (vD.z < 3.5) { float star = max(0.0, 1.0 - abs(c.x) * 14.0) * (1.0 - r) + max(0.0, 1.0 - abs(c.y) * 14.0) * (1.0 - r); col = vec3(1.0, 0.95, 0.92); a *= clamp((1.0 - r) * (1.0 - r) * 1.6 + star, 0.0, 1.0); }
  else { float star = max(0.0, 1.0 - abs(c.x) * 9.0) + max(0.0, 1.0 - abs(c.y) * 9.0); col = uRedCol * 1.8; a *= clamp(pow(1.0 - r, 3.0) * 1.3 + star * (1.0 - r) * 0.7, 0.0, 1.0) * (1.0 - fa * 0.5); }
  gl_FragColor = vec4(col, a); }`}),this.mesh=new xs(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=21,t.add(this.mesh),this.geo=i}spawn(t,e,i,n,s,o=0){let a=this.head;return this.head=(this.head+1)%ss,this.pos[a*3]=t.x,this.pos[a*3+1]=t.y,this.pos[a*3+2]=t.z,this.vel[a*3]=e.x,this.vel[a*3+1]=e.y,this.vel[a*3+2]=e.z,this.dat[a*4]=n,this.dat[a*4+1]=1,this.dat[a*4+2]=i,this.life[a]=this.max[a]=s,this.grav[a]=o,a}blood(t,e,i=1){let n=new L,s=Math.round(16*i);for(let o=0;o<s;o++){let l=(Math.random()<.28?-1.6:5.5)*(.35+Math.random());n.set(e.x*l+(Math.random()-.5)*2.6,e.y*l+(Math.random()-.2)*2.6,e.z*l+(Math.random()-.5)*2.6),this.spawn(t,n,0,.04+Math.random()*.085*i,.45+Math.random()*.5,14)}for(let o=0;o<3;o++)n.set((Math.random()-.5)*.8,.5+Math.random()*.6,(Math.random()-.5)*.8),this.spawn(t,n,0,.22*i,.22,0)}impact(t,e){let i=new L;for(let n=0;n<7;n++)i.set(e.x*3+(Math.random()-.5)*4,e.y*3+Math.random()*3,e.z*3+(Math.random()-.5)*4),this.spawn(t,i,1,.035,.16+Math.random()*.2,16);for(let n=0;n<4;n++)i.set(e.x*1.2+(Math.random()-.5),e.y*1.2+Math.random()*.8,e.z*1.2+(Math.random()-.5)),this.spawn(t,i,2,.35+Math.random()*.4,.7+Math.random()*.5,-.6)}flash(t,e=1.3){this.spawn(t,new L,3,e,.07,0)}glint(t,e=9){return this.spawn(t,new L,4,e,.12,0)}motes(t,e=26){let i=new L;for(let n=0;n<e;n++){i.set((Math.random()-.5)*.7,.6+Math.random()*1.8,(Math.random()-.5)*.7);let s=new L(t.x+(Math.random()-.5)*.6,t.y+Math.random()*.4,t.z+(Math.random()-.5)*.6);this.spawn(s,i,0,.03+Math.random()*.04,1.6+Math.random()*2.2,-.8)}}update(t){let e=!1;for(let i=0;i<ss;i++){if(this.life[i]<=0)continue;e=!0,this.life[i]-=t;let n=this.dat[i*4+2];if(this.life[i]<=0){this.dat[i*4+1]=0;continue}this.vel[i*3+1]-=this.grav[i]*t;let o=Math.max(0,1-(n===2?2.5:.6)*t);this.vel[i*3]*=o,this.vel[i*3+2]*=o,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t;let a=this.life[i]/this.max[i];this.dat[i*4+1]=n===2?a:Math.min(1,a*2.5),n===2&&(this.dat[i*4]+=t*.5)}(e||this._dirty)&&(this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("aD").needsUpdate=!0),this._dirty=e}clear(){this.life.fill(0);for(let t=0;t<ss;t++)this.dat[t*4+1]=0;this._dirty=!0}},Io=72;function Rb(){let t=document.createElement("canvas");t.width=t.height=256*2;let e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256*2,256*2),e.fillStyle="#fff";let i=7,n=()=>(i=i*16807%2147483647,i/2147483647);for(let o=0;o<4;o++){let a=o%2*256+128,l=(o/2|0)*256+256/2;if(o===3){e.beginPath(),e.arc(a,l,26,0,7),e.fill();for(let c=0;c<9;c++){let h=n()*7,u=26+n()*30;e.beginPath(),e.arc(a+Math.cos(h)*u,l+Math.sin(h)*u,3+n()*6,0,7),e.fill()}continue}for(let c=0;c<9;c++){let h=n()*7,u=n()*34;e.beginPath(),e.ellipse(a+Math.cos(h)*u,l+Math.sin(h)*u,20+n()*34,14+n()*26,n()*3,0,7),e.fill()}for(let c=0;c<26;c++){let h=n()*7,u=40+n()*78;e.beginPath(),e.arc(a+Math.cos(h)*u,l+Math.sin(h)*u,1.5+n()*7,0,7),e.fill(),n()<.4&&(e.lineWidth=2+n()*5,e.strokeStyle="#fff",e.beginPath(),e.moveTo(a+Math.cos(h)*u*.4,l+Math.sin(h)*u*.4),e.lineTo(a+Math.cos(h)*u,l+Math.sin(h)*u),e.stroke())}}let s=new ir(t);return s.colorSpace=zi,s.generateMipmaps=!0,s.minFilter=ei,s}var Lh=class{constructor(t){let e=new ce;this.pos=new Float32Array(Io*12),this.uv=new Float32Array(Io*8),this.dat=new Float32Array(Io*16);let i=new Uint16Array(Io*6);for(let n=0;n<Io;n++)i.set([n*4,n*4+1,n*4+2,n*4,n*4+2,n*4+3],n*6);e.setAttribute("position",new Ft(this.pos,3).setUsage(Ss)),e.setAttribute("uv",new Ft(this.uv,2).setUsage(Ss)),e.setAttribute("aD",new Ft(this.dat,4).setUsage(Ss)),e.setIndex(new Ft(i,1)),this.mat=new Ve({uniforms:{...Xa(),uMap:{value:Rb()}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,side:Le,vertexShader:"attribute vec4 aD; varying vec2 vUv; varying vec4 vD; varying vec3 vWp; void main(){ vUv = uv; vD = aD; vWp = position; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }",fragmentShader:`precision highp float; uniform sampler2D uMap; uniform vec3 uRedCol; uniform float uTime; varying vec2 vUv; varying vec4 vD; varying vec3 vWp;
${pr}
void main() { float m = texture2D(uMap, vUv).r; float grow = clamp((uTime - vD.x) / max(vD.y, 0.001), 0.0, 1.0); float a = smoothstep(1.0 - grow * 0.92, 1.0 - grow * 0.92 + 0.12, m) ; if (a < 0.02) discard;
  vec3 col = vD.z > 0.5 ? vec3(0.012) : uRedCol * (0.62 + 0.25 * m); vec3 toP = vWp - cameraPosition; float dist = length(toP); vec3 dir = toP / max(dist, 1e-4); float fa = scFogAmount(cameraPosition, dir, dist);
  col = mix(col, scFogColor(dir, vWp.y), fa); gl_FragColor = vec4(col, a * vD.w); }`}),this.mesh=new de(e,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,t.add(this.mesh),this.geo=e,this.next=0}add(t,e,i,n=0,s=.12,o=.92){let a=this.next;this.next=(this.next+1)%Io;let l=new L().copy(e).normalize(),c=new L(1,0,0);Math.abs(l.x)>.8&&c.set(0,0,1);let h=new L().crossVectors(l,c).normalize(),u=new L().crossVectors(l,h),f=Math.random()*Math.PI*2,d=Math.cos(f)*i,p=Math.sin(f)*i,x=new L().copy(h).multiplyScalar(d).addScaledVector(u,p),m=new L().copy(h).multiplyScalar(-p).addScaledVector(u,d),g=new L().copy(t).addScaledVector(l,.012),_=[[-1,-1],[1,-1],[1,1],[-1,1]],M=n===1?3:Math.random()*3|0,v=M%2*.5,S=(M/2|0)*.5;_.forEach(([w,y],b)=>{let A=a*4+b;this.pos[A*3]=g.x+x.x*w+m.x*y,this.pos[A*3+1]=g.y+x.y*w+m.y*y,this.pos[A*3+2]=g.z+x.z*w+m.z*y,this.uv[A*2]=v+(w*.5+.5)*.5,this.uv[A*2+1]=S+(y*.5+.5)*.5,this.dat[A*4]=ne.uTime.value,this.dat[A*4+1]=s,this.dat[A*4+2]=n,this.dat[A*4+3]=o});for(let w of["position","uv","aD"])this.geo.getAttribute(w).needsUpdate=!0}clear(){this.pos.fill(0),this.geo.getAttribute("position").needsUpdate=!0}};function vg(r){let t=new oa(1,1,1,96,1,!0);t.translate(0,.5,0);let e=new Ve({uniforms:{...Xa(),uR:{value:80}},transparent:!0,depthWrite:!1,side:Le,blending:Bi,vertexShader:"varying vec3 vWp; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vWp = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`precision highp float; uniform float uTime; uniform vec3 uRedCol; uniform float uR; varying vec3 vWp; varying vec2 vUv;
float h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() { float ang = vUv.x * uR * 6.2832; float col = floor(ang * 2.6); float hh = h(vec2(col, 1.0));
  float fall = fract(vWp.y * 0.05 * (0.6 + hh) + uTime * (0.10 + 0.25 * hh) + hh * 7.0); float streak = smoothstep(0.0, 0.05, fall) * smoothstep(0.42, 0.05, fall) * step(0.55, hh);
  float thin = smoothstep(0.30, 0.5, abs(fract(ang * 2.6) - 0.5));
  float d = distance(vWp, cameraPosition); float near = smoothstep(70.0, 8.0, d); float low = smoothstep(80.0, 26.0, vWp.y) * smoothstep(5.0, 13.0, vWp.y);
  float a = (0.012 + streak * 0.16 * (1.0 - thin)) * low * (0.12 + 0.88 * near);
  gl_FragColor = vec4(uRedCol * a * 1.6, 1.0); }`}),i=new de(t,e);return i.frustumCulled=!1,i.renderOrder=15,i.scale.set(80,110,80),r.add(i),i}function Mg(r,t,e){let i=[],n=[],s=new L;for(let c of t.links){if(c.kind!=="pad")continue;let h=26;for(let u=1;u<h;u++)t.linkPos(c,0,u/h,s),i.push(s.x,s.y+.9,s.z),n.push(u/h)}let o=new ce;o.setAttribute("position",new Ft(new Float32Array(i),3)),o.setAttribute("aU",new Ft(new Float32Array(n),1));let a=new Ve({uniforms:{...Xa(),uRes:{value:e}},transparent:!0,depthWrite:!1,blending:Bi,vertexShader:"attribute float aU; uniform vec2 uRes; uniform float uTime; varying float vA; void main(){ vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; float d = -mv.z; float w = fract(aU * 3.0 - uTime * 0.9); vA = (0.25 + 0.75 * smoothstep(0.75, 1.0, w)) * smoothstep(110.0, 25.0, d); gl_PointSize = clamp(0.11 * projectionMatrix[1][1] * uRes.y * 0.5 / max(d, 0.1), 1.5, 9.0); }",fragmentShader:"precision highp float; varying float vA; void main(){ float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(vec3(0.85) * vA * (1.0 - r * r), 1.0); }"}),l=new xs(o,a);return l.frustumCulled=!1,l.renderOrder=14,r.add(l),l}function Sg(r,t=900){let e=new Float32Array(t*6),i=new Float32Array(t*2);for(let a=0;a<t;a++){let l=Math.random()*46,c=Math.random()*34,h=Math.random()*46;e.set([l,c,h,l,c,h],a*6),i[a*2]=0,i[a*2+1]=1}let n=new ce;n.setAttribute("position",new Ft(e,3)),n.setAttribute("aE",new Ft(i,1));let s=new Ve({uniforms:{uTime:ne.uTime,uAmt:{value:1}},transparent:!0,depthWrite:!1,vertexShader:`attribute float aE; uniform float uTime; varying float vA;
void main() { vec3 box = vec3(46.0, 34.0, 46.0); float sp = 26.0 + fract(position.x * 7.31) * 9.0; vec3 p = position; p.y -= uTime * sp; p.x += uTime * 2.2;
  p = mod(p - cameraPosition + box * 0.5, box) - box * 0.5 + cameraPosition; p.y += aE * (0.55 + fract(position.z * 3.7) * 0.5); p.x -= aE * 0.045;
  vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; vA = smoothstep(23.0, 6.0, -mv.z) * smoothstep(0.3, 2.5, -mv.z); }`,fragmentShader:"precision highp float; uniform float uAmt; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62), vA * 0.20 * uAmt); }"}),o=new er(n,s);return o.frustumCulled=!1,o.renderOrder=18,r.add(o),o}var Ns=r=>r*r*(3-2*r),Li=(r,t,e)=>Math.min(e,Math.max(t,r)),Ds=(r,t,e)=>r+(t-r)*e,Wi=(r,t,e)=>Li((r-t)/(e-t),0,1),Nh=class{constructor(t,e){this.scene=t.fpScene,this.cam=t.fpCamera,this.hemi=new or(12106946,3816512,.9),this.key=new Jn(16777215,1.7),this.key.position.set(-1.2,2.2,1),this.scene.add(this.hemi,this.key),this.root=new Ee,this.scene.add(this.root);let i=(c,h)=>{let u=null;c.traverse(d=>{d.name===h&&(u=d)});let f=new Ee;return u.parent.add(f),f.add(u),f};this.rifle=e.weapons.rifle_fp,this.pistol=e.weapons.pistol,this.root.add(this.rifle,this.pistol),this.pistol.rotation.z=Math.PI;let n=i(this.rifle,"rifle_bolt");this.boltSpin=new Ee,this.boltSlide=new Ee,n.parent.add(this.boltSlide),this.boltSlide.add(this.boltSpin),this.boltSpin.add(n),this.boltSpin.position.set(0,.046,0),n.position.set(0,-.046,0),this.mag=i(this.rifle,"rifle_mag"),this.slide=i(this.pistol,"pistol_slide");let s=document.createElement("canvas");s.width=s.height=64;let o=s.getContext("2d"),a=o.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.25,"rgba(255,255,255,0.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=a,o.fillRect(0,0,64,64);let l=new ir(s);this.flashMat=new He({map:l,transparent:!0,blending:Bi,depthTest:!1,depthWrite:!1,opacity:0,fog:!1}),this.flash=new Ee;for(let[c,h,u]of[[.34,.11,0],[.11,.34,0],[.2,.2,.785]]){let f=new de(new Xn(c,h),this.flashMat);f.rotation.z=u,this.flash.add(f)}this.flash.renderOrder=50,this.root.add(this.flash),this.cur="rifle",this.swayX=0,this.swayY=0,this.kick=0,this.flashT=0,this.vis={rifle:1,pistol:0}}shot(){this.kick=1,this.flashT=.055}update(t,e){this.kick=Math.max(0,this.kick-t*(e.weapon==="rifle"?5.5:11)),this.flashT-=t,this.swayX=Ds(this.swayX,Li(-e.lookX*.004,-.03,.03),1-Math.exp(-t*9)),this.swayY=Ds(this.swayY,Li(e.lookY*.004,-.03,.03),1-Math.exp(-t*9));let i=e.weapon==="rifle";this.rifle.visible=i&&!e.hidden,this.pistol.visible=!i&&!e.hidden;let n=Ns(Li(e.ads,0,1)),s=this.kick*this.kick,o=i?[.112,-.134,-.285]:[.105,-.118,-.33],a=i?[0,-.1012,-.105]:[0,-.088,-.27],l=Ds(o[0],a[0],n),c=Ds(o[1],a[1],n),h=Ds(o[2],a[2],n),u=Ds(0,0,n),f=Ds(i?.045:.03,0,n),d=Ds(i?-.03:0,0,n),p=e.bob*(1-n*.85);l+=Math.sin(e.phase)*.006*p+this.swayX*(1-n*.6),c+=-Math.abs(Math.cos(e.phase))*.008*p+this.swayY*(1-n*.6)-e.land*.03,d+=Math.sin(e.phase)*.012*p+this.swayX*1.2;let x=Ns(Li(e.lower,0,1));c-=x*.12,l+=x*.02,u-=x*.42,f+=x*.55,h+=s*(i?.075:.03),u+=s*(i?.13:.2),c+=s*.012;let m=e.swap;if(m>0){let w=Math.sin(Li(m,0,1)*Math.PI);c-=w*.22,u-=w*.6}let g=0,_=0;if(i&&e.bolt>=0){let w=e.bolt,y=Wi(w,.2,.32)-Wi(w,.66,.78),b=Wi(w,.32,.46)-Wi(w,.5,.66);g=Ns(Li(y,0,1))*1.05,_=Ns(Li(b,0,1))*.062;let A=Math.sin(Li(Wi(w,.12,.85),0,1)*Math.PI)*(1-n*.5);d+=A*.16,f+=A*.06,c-=A*.012,l+=A*.012}let M=0,v=0;if(e.reload>=0){let w=e.reload,y=Math.sin(Li(Wi(w,0,.9),0,1)*Math.PI);d+=y*(i?.38:.5),u+=y*.2,c-=y*.035;let b=Wi(w,.12,.3)-Wi(w,.55,.74);if(M=-Ns(Li(b,0,1))*.16,v=Ns(Li(b,0,1))*.02,i&&w>.78){let A=Wi(w,.78,1);g=Ns(Li(Wi(A,.05,.3)-Wi(A,.7,.95),0,1))*1.05,_=Ns(Li(Wi(A,.3,.5)-Wi(A,.5,.7),0,1))*.062}}this.root.position.set(l,c,h),this.root.rotation.set(u,f,d,"YXZ"),i?(this.boltSpin.rotation.z=-g,this.boltSlide.position.z=_,this.mag.position.set(0,M,v)):this.slide.position.z=s*.03;let S=this.flashT>0?1:0;this.flashMat.opacity=S*.95,this.flash.visible=S>0&&!e.hidden,S&&(this.flash.position.set(0,i?.052:.06,i?-.8:-.24),this.flash.rotation.z=Math.random()*3,this.flash.scale.setScalar((i?1.3:.8)*(.8+Math.random()*.5))),this.hemi.intensity=.9+S*2.5}};var Ni={rifle:{key:"rifle",name:"BALLISTA .338",mag:5,reserve:20,cycle:1.3,reload:2.6,dmg:[160,74,44],hip:.05,zooms:[4,8],swap:.38},pistol:{key:"pistol",name:"SIDEARM 9MM",mag:12,reserve:36,cycle:.16,reload:1.45,dmg:[60,27,17],hip:.011,zooms:[1.35],swap:.28,falloff:[22,75]}};function Cb(r,t,e,i,n,s,o,a,l,c,h,u,f){let d=c-o,p=h-a,x=u-l,m=r-o,g=t-a,_=e-l,M=d*d+p*p+x*x;if(M<1e-8){let C=i*m+n*g+s*_,D=m*m+g*g+_*_-f*f,I=C*C-D;return I<0?-1:-C-Math.sqrt(I)}let v=d*i+p*n+x*s,S=d*m+p*g+x*_,w=i*m+n*g+s*_,y=m*m+g*g+_*_,b=M-v*v,A=M*w-S*v,R=M*y-S*S-f*f*M,P=A*A-b*R;if(P>=0&&b>1e-9){let C=(-A-Math.sqrt(P))/b,D=S+C*v;if(D>0&&D<M)return C;let I=D<=0?m:r-c,U=D<=0?g:t-h,k=D<=0?_:e-u;if(A=i*I+n*U+s*k,R=I*I+U*U+k*k-f*f,P=A*A-R,P>0)return-A-Math.sqrt(P)}return-1}var dn=[];function Ld(r,t,e,i,n){let s=null;for(let o of r){if(o===n||!o.alive)continue;let a=o.pos.x-t.x,l=o.pos.y+1-t.y,c=o.pos.z-t.z,h=a*e.x+l*e.y+c*e.z;if(!(h<-2||h>i+2||a*a+l*l+c*c-h*h>9)){o.hitShapes(dn);for(let f=0;f<dn.length;f+=8){let d=Cb(t.x,t.y,t.z,e.x,e.y,e.z,dn[f],dn[f+1],dn[f+2],dn[f+3],dn[f+4],dn[f+5],dn[f+6]);d>0&&d<i&&(!s||d<s.t||Math.abs(d-s.t)<.25&&dn[f+7]<s.zone)&&(s={actor:o,t:Math.min(d,s?s.t:d),zone:dn[f+7]})}}}return s}var pn=new L,Pn=new L,Dh=new L,Mr=new L;function Fh(r,t,e,i,n,s){let{arena:o,fx:a,audio:l}=r,c=o.raycast(e,i,420),h=c?c.distance:420,u=Ld(r.actors,e,i,h,t),f=u?u.t:h;pn.copy(e).addScaledVector(i,f),a.threads.shot(n,pn),t.shots++,t.lastShot=r.time,t.lastShotPos.copy(e);let d=r.headless?null:r.player,p=t===d?0:e.distanceTo(r.listenerPos),x=t===d?0:r.panOf(e);if(l.shot(p,x,s.key==="pistol"),t!==d&&(a.particles.flash(n,1.6),d&&d.alive)){Dh.copy(r.listenerPos).sub(e);let g=Math.max(0,Math.min(f,Dh.dot(i)));Mr.copy(e).addScaledVector(i,g),Mr.distanceTo(r.listenerPos)<2.4&&g>4&&(!u||u.actor!==d)&&(l.whiz(r.panOf(Mr)),r.hud.threat(e,.6),d.suppress=Math.min(1,(d.suppress||0)+.5))}for(let g of r.bots){if(!g.alive||g===t||u&&u.actor===g)continue;let _=g.eye(Dh);Mr.copy(_).sub(e);let M=Mr.dot(i);M<3||M>f+1||Mr.lengthSq()-M*M<2.2&&g.nearMiss(t)}let m={hit:null,zone:-1,point:pn.clone(),dist:f};if(u){let g=u.actor,_=s.dmg[u.zone];if(s.falloff){let S=Math.min(1,Math.max(0,(f-s.falloff[0])/(s.falloff[1]-s.falloff[0])));_*=1-.55*S}a.particles.blood(pn,i,u.zone===0?1.7:1);let M=o.raycast(pn,i,4.5);M&&(Pn.copy(M.face.normal),Pn.dot(i)>0&&Pn.negate(),a.decals.add(M.point,Pn,.35+Math.random()*.5+(u.zone===0?.35:0),0,.25));let v=o.raycast(Dh.copy(pn),Mr.set(0,-1,0),3);v&&a.decals.add(v.point,Pn.set(0,1,0),.22+Math.random()*.3,0,.6),t.hits++,u.zone===0&&t.heads++,m.hit=g,m.zone=u.zone,r.damage(g,_,t,{zone:u.zone,dir:i,point:pn,wpn:s})}else c&&(Pn.copy(c.face.normal),Pn.dot(i)>0&&Pn.negate(),a.particles.impact(pn,Pn),a.decals.add(pn,Pn,.07+Math.random()*.05,1,.01,.85),(t!==d||f<60)&&l.impact(pn.distanceTo(r.listenerPos),r.panOf(pn)));return r.onShot(t,e,m),m}var _i=L,Nd=(r,t,e)=>Math.min(e,Math.max(t,r)),xi=(r,t,e)=>r+(t-r)*e,rs=.32,bg=1.74,Dd=1.14,Fd=1.6,Ud=1,Uh=74,Od=.56,Ri=new _i,Xi=new _i,In=new _i,Oh=new _i,qa=new _i,No=new ae,Ln=new oi,wg=new _i,Ya=new _i,Pb=new _i(0,1,0),Bh=class{constructor(t){this.g=t,this.isPlayer=!0,this.name="YOU",this.id=0,this.pos=new _i,this.vel=new _i,this.yaw=0,this.pitch=0,this.lastShotPos=new _i,this.eyeV=new _i,this.chestV=new _i,this.fwdV=new _i(0,0,-1),this.reset()}reset(){this.hp=100,this.alive=!0,this.kills=0,this.shots=0,this.hits=0,this.heads=0,this.lastShot=-99,this.revealedUntil=-1,this.deathTime=0,this.place=0,this.crouch=!1,this.crouchK=0,this.grounded=!1,this.mode="walk",this.link=null,this.linkT=0,this.linkDir=0,this.mantle=null,this.roof=-1,this.speed=0,this.w={rifle:{mag:Ni.rifle.mag,reserve:Ni.rifle.reserve,cool:0},pistol:{mag:Ni.pistol.mag,reserve:Ni.pistol.reserve,cool:0}},this.cur="rifle",this.cool=0,this.reloadT=-1,this.boltT=-1,this.swapT=0,this.swapTo=null,this.ads=0,this.scoped=!1,this.zoomIdx=0,this.focus=1,this.gasp=0,this.holding=!1,this.kick=0,this.kickYaw=0,this.swayX=0,this.swayY=0,this.fov=Uh,this.coyote=0,this.jumpBuf=0,this.landDip=0,this.walkPhase=0,this.stepAcc=0,this.vel.set(0,0,0),this.suppress=0,this.fallStart=0,this.airTime=0,this.padLock=0,this.aimSlow=1,this.prompt=null,this.deadCam=0,this.lean=0,this.stepLift=0,this.hurtT=0,this.locked=!0}spawn(t,e){this.pos.copy(t),this.yaw=e,this.pitch=0,this.vel.set(0,0,0)}get weapon(){return Ni[this.cur]}eye(t=this.eyeV){return t.set(this.pos.x,this.pos.y+xi(Fd,Ud,this.crouchK),this.pos.z)}chest(t=this.chestV){return t.set(this.pos.x,this.pos.y+xi(1.3,.78,this.crouchK),this.pos.z)}hitShapes(t){return yh(t,this.pos,this.crouchK,Fd,Ud)}get moving(){return this.speed>.6}_collide(t,e){let i=this.g.arena.bvh;Ln.start.set(t.x,t.y+rs,t.z),Ln.end.set(t.x,t.y+e-rs,t.z),No.makeEmpty(),No.expandByPoint(Ln.start),No.expandByPoint(Ln.end),No.min.addScalar(-rs),No.max.addScalar(rs);let n={intersectsBounds:o=>o.intersectsBox(No),intersectsTriangle:o=>{let a=o.closestPointToSegment(Ln,wg,Ya);if(a<rs){let l=rs-a;a>1e-5?Ya.sub(wg).multiplyScalar(1/a):o.getNormal(Ya),Ln.start.addScaledVector(Ya,l),Ln.end.addScaledVector(Ya,l)}}};i.shapecast(n);let s=this.g.arena.fenceBvh;s&&this.mode==="walk"&&s.shapecast(n),t.set(Ln.start.x,Ln.start.y-rs,Ln.start.z)}_stepUp(t,e,i,n,s){let o=this.g.arena,a=this.pos,l=o.raycast(Ri.set(a.x+i*(rs+.14),a.y+Od+.12,a.z+n*(rs+.14)),Xi.set(0,-1,0),Od+.1);if(!l||l.face.normal.y<.7)return!1;let c=l.point.y-a.y;return c<.03||c>Od||o.raycast(Ri.set(a.x,a.y+e-.1,a.z),Xi.set(0,1,0),c+.2)||(qa.set(a.x+i*s,a.y+c+.012,a.z+n*s),this._collide(qa,e),qa.y<a.y+c-.08)?!1:(this.stepLift=Math.min(.62,this.stepLift+(qa.y-a.y)),t.copy(qa),!0)}_groundProbe(){let t=this.g.arena.raycast(Ri.set(this.pos.x,this.pos.y+.3,this.pos.z),Xi.set(0,-1,0),.46);return t&&t.face.normal.y>.5?t:null}_tryMantle(t){let e=this.g.arena,i=-Math.sin(this.yaw),n=-Math.cos(this.yaw),s=this.pos,o=null;for(let f of this.grounded?[1.25,.75,.35]:[1.25,.75,.35,.1]){let d=e.raycast(Ri.set(s.x,s.y+f,s.z),Xi.set(i,0,n),.78);if(d&&Math.abs(d.face.normal.y)<.55){o=d;break}}if(!o)return!1;let a=o.point.x+i*.3,l=o.point.z+n*.3,c=e.raycast(Ri.set(a,s.y+2.6,l),Xi.set(0,-1,0),2.3);if(!c||c.face.normal.y<.7)return!1;let h=c.point.y-s.y;if(h<(this.grounded?.42:.1)||h>2.4||!t&&h<.9&&this.grounded||!e.raycast(Ri.set(o.point.x+i*1.15,c.point.y+.3,o.point.z+n*1.15),Xi.set(0,-1,0),2.3)||e.raycast(Ri.set(a,c.point.y+.15,l),Xi.set(0,1,0),1.05)||e.raycast(Ri.set(s.x,c.point.y+.35,s.z),Xi.set(i,0,n),.95))return!1;let u=!e.raycast(Ri.set(a,c.point.y+.15,l),Xi.set(0,1,0),1.7);return this.mantle={from:s.clone(),to:new _i(a+i*.12,c.point.y+.03,l+n*.12),t:0,dur:(h<.5?.12:.26)+.15*h,crouch:!u},this.mode="mantle",this.vel.set(0,0,0),this.g.audio.jump(),!0}_walk(t,e){let i=this.g,n=i.arena,s=-Math.sin(this.yaw),o=-Math.cos(this.yaw),a=Math.cos(this.yaw),l=-Math.sin(this.yaw),c=e.moveX,h=e.moveY,u=(e.held("sprint")||e.sprintStick)&&h>.5&&!this.crouch&&this.ads<.2&&this.reloadT<0;this.sprinting=u&&this.grounded;let f=this.crouch?2.35:(u?7.3:4.5)*(1-.42*this.ads),d=(s*h+a*c)*f,p=(o*h+l*c)*f,x=Math.hypot(d,p);if(this.grounded){let y=1-Math.exp(-t*13);this.vel.x=xi(this.vel.x,d,y),this.vel.z=xi(this.vel.z,p,y)}else this.vel.x+=(d-this.vel.x)*Math.min(1,t*1.7),this.vel.z+=(p-this.vel.z)*Math.min(1,t*1.7);if(this.vel.y-=Ga*t,this.vel.y<-55&&(this.vel.y=-55),e.pressed("jump")&&(this.jumpBuf=.13),this.jumpBuf-=t,this.coyote=this.grounded?.11:this.coyote-t,this.jumpBuf>0&&this.coyote>0){if(h>.2&&this._tryMantle(!0)||(this.vel.y=7.3,this.grounded=!1,this.coyote=0,this.jumpBuf=0,this.crouch&&(this.crouch=!1,i.hud.syncCrouch(!1)),i.audio.jump()),this.mode!=="walk")return}else if(!this.grounded&&h>.3&&this.vel.y<4.5&&this._tryMantle(e.held("jump")||this.jumpBuf>0))return;let m=xi(bg,Dd,this.crouchK),g=5,_=t/g,M=this.grounded,v=this.vel.y,S=!1;for(let y=0;y<g;y++){In.copy(this.pos).addScaledVector(this.vel,_),Oh.copy(In),this._collide(In,m);let b=In.x-Oh.x,A=In.y-Oh.y,R=In.z-Oh.z,P=Math.hypot(b,A,R);if(P>1e-6){let C=b/P,D=A/P,I=R/P;if(D>.55&&this.vel.y<=.5)S=!0,this.vel.y=Math.max(this.vel.y,0);else{let U=this.vel.x*C+this.vel.y*D+this.vel.z*I;U<0&&(this.vel.x-=C*U,this.vel.y-=D*U,this.vel.z-=I*U)}}if((M||S)&&this.vel.y<=.5&&x>.5){let C=x*_;((In.x-this.pos.x)*d+(In.z-this.pos.z)*p)/x<C*.7&&this._stepUp(In,m,d/x,p/x,C)&&(S=!0,this.vel.x=d,this.vel.z=p)}this.pos.copy(In)}if(!S&&this.vel.y<=.5&&this._groundProbe()&&(S=!0),S&&!M){let y=-v;y>14.5&&i.damage(this,(y-14.5)*8,null,{cause:"fall"}),y>4&&(this.landDip=Math.min(1,y/14),i.audio.land(y/16))}if(S&&this.vel.y<0&&(this.vel.y=0),S&&M&&!this.jumpBuf>0&&this.vel.y<=0&&(this.vel.y=-2.2),this.grounded=S,this.airTime=S?0:this.airTime+t,this.speed=Math.hypot(this.vel.x,this.vel.z),S&&(this.walkPhase+=t*this.speed*1.75,this.stepAcc+=t*this.speed,this.stepAcc>(this.crouch?1.5:2.1)&&(this.stepAcc=0,i.audio.step(this.crouch)),this.roof=n.roofAt(this.pos.x,this.pos.z,this.pos.y)),this.pos.y<9.5){if(i.damage(this,999,null,{cause:"drop"}),this.alive&&i.opts.god){let y=this.spawnRoof||n.roofs[0];this.pos.set(y.spawnPt[0],y.spawnPt[1]+.1,y.spawnPt[2]),this.vel.set(0,0,0)}return}this.prompt=null,this.padLock-=t;let w=1e9;if(S&&this.roof>=0)for(let y of n.roofs[this.roof].links){let b=y.link,A=y.dir?b.p1:b.p0,R=Math.hypot(A.x-this.pos.x,A.z-this.pos.z);if(b.kind==="pad"){if(R<1&&this.padLock<=0&&Math.abs(A.y-this.pos.y)<.8){this._ride(b,0),i.audio.pad(),i.hud.banner(`LAUNCH \xB7 ${n.roofs[y.to].name}`,1.4,!0);return}}else if((b.kind==="zip"||b.kind==="ladder")&&R<(b.kind==="zip"?2.1:1.7)&&Math.abs(A.y-this.pos.y)<1.2){let P=y.dir?b.p0:b.p1,C=Math.hypot(P.x-A.x,P.z-A.z)||1,D=R-.9*((P.x-A.x)*s+(P.z-A.z)*o)/C;D<w&&(w=D,this.prompt={link:b,dir:y.dir,text:`${n.linkLabel(b)} \xB7 ${n.roofs[y.to].name}`})}else if((b.kind==="jump"||b.kind==="step")&&w>1e8&&!this.prompt&&R<(b.kind==="jump"?3.4:2)){let P=y.dir?b.p0:b.p1;(P.x-this.pos.x)*s+(P.z-this.pos.z)*o>0&&(this.prompt={link:b,dir:y.dir,passive:!0,text:b.kind==="jump"?"SPRINT UP THE RAMP \xB7 JUMP AT THE RED LIP":(P.y>A.y?"JUMP TO CLIMB":"DROP DOWN")+` \xB7 ${n.roofs[y.to].name}`})}}this.prompt&&!this.prompt.passive&&e.pressed("use")&&(this._ride(this.prompt.link,this.prompt.dir),this.prompt=null)}_ride(t,e){this.mode="link",this.link=t,this.linkDir=e,this.linkT=0,this.vel.set(0,0,0),this.grounded=!1,this.crouch=!1,this.g.hud.syncCrouch(!1),this.linkFrom=this.pos.clone(),this.g.stats.traversals=(this.g.stats.traversals||0)+1}_rideStep(t,e){let i=this.g.arena,n=this.link,s=n.time*(n.kind==="ladder"?.85:1),o=Ri.copy(this.pos);this.linkT+=t/s;let a=Math.min(1,this.linkT);if(i.linkPos(n,this.linkDir,a,Xi),a<.08&&Xi.lerpVectors(this.linkFrom,Xi,a/.08),this.pos.copy(Xi),t>0&&this.vel.copy(this.pos).sub(o).multiplyScalar(1/t),this.speed=0,this.g.audio.setZip(n.kind==="zip"&&a>.1&&a<.9?1:0),n.kind==="ladder"&&(this.stepAcc+=t,this.stepAcc>.28&&(this.stepAcc=0,this.g.audio.ladder())),n.kind==="zip"&&e.pressed("jump")&&a>.14&&a<.86){this.mode="walk",this.link=null,this.vel.multiplyScalar(.85),this.g.audio.setZip(0);return}a>=1&&(this.mode="walk",this.link=null,this.grounded=!0,this.vel.set(0,-2,0),this.padLock=.8,this.g.audio.setZip(0),(n.kind==="pad"||n.kind==="zip")&&(this.landDip=.7,this.g.audio.land(.6)))}_mantleStep(t){let e=this.mantle;e.t+=t/e.dur;let i=Math.min(1,e.t),n=i*i*(3-2*i),s=Math.min(1,n*1.7),o=Math.max(0,(n-.35)/.65);this.pos.set(xi(e.from.x,e.to.x,o),xi(e.from.y,e.to.y,s),xi(e.from.z,e.to.z,o)),this.landDip=Math.sin(i*Math.PI)*.6,i>=1&&(this.mode="walk",this.mantle=null,this.grounded=!0,this.vel.set(0,-1,0),e.crouch&&(this.crouch=!0,this.g.hud.syncCrouch(!0)))}_weapons(t,e){let i=this.g,n=this.weapon,s=this.w[this.cur],o=this.mode==="link"&&this.link.kind!=="pad"||this.mode==="mantle";this.w.rifle.cool=Math.max(0,this.w.rifle.cool-t),this.w.pistol.cool=Math.max(0,this.w.pistol.cool-t),this.cool=s.cool;let a=e.pressed("swap")?this.cur==="rifle"?"pistol":"rifle":e.pressed("w1")?"rifle":e.pressed("w2")?"pistol":null;a&&a!==this.cur&&!this.swapTo&&(this.swapTo=a,this.swapT=0,this.reloadT=-1,this.boltT=-1),this.swapTo&&(this.swapT+=t/Ni[this.swapTo].swap,this.swapT>=.5&&this.cur!==this.swapTo&&(this.cur=this.swapTo,this.zoomIdx=0,i.hud.weapon(this),this.cur==="rifle"&&this.w.rifle.cool>.15&&this.w.rifle.mag>0&&(this.boltT=1-this.w.rifle.cool/Ni.rifle.cycle)),this.swapT>=1&&(this.swapTo=null,this.swapT=0));let l=!!this.swapTo||o,c=e.held("ads")&&!l&&this.reloadT<0&&!this.sprinting;if(this.ads=Nd(this.ads+(c?t/.16:-t/.12),0,1),this.scoped=this.cur==="rifle"&&this.ads>=.98,e.wheel||e.pressed("zoom")){let h=this.weapon.zooms.length;this.zoomIdx=(this.zoomIdx+(e.wheel<0?1:e.wheel>0?h-1:1))%h}if(this.holding=this.scoped&&e.held("sprint")&&this.focus>0&&this.gasp<=0,this.holding?(this.focus=Math.max(0,this.focus-t/4.2),this.focus===0&&(this.gasp=2.2)):this.focus=Math.min(1,this.focus+t/5.5),this.gasp=Math.max(0,this.gasp-t),this.boltT>=0&&(this.boltT+=t/n.cycle,this.boltT>=1&&(this.boltT=-1)),this.reloadT>=0&&(this.reloadT+=t/n.reload,this.reloadT>=1)){let h=n.mag-s.mag,u=Math.min(h,s.reserve);s.mag+=u,s.reserve-=u,this.reloadT=-1,i.hud.weapon(this)}e.pressed("reload")&&this.reloadT<0&&!l&&s.mag<n.mag&&s.reserve>0&&this._startReload(),e.pressed("fire")&&!l&&i.weaponsFree&&(this.reloadT>=0||s.cool>0||(s.mag<=0?s.reserve>0?this._startReload():i.audio.dry():this._fire()))}_startReload(){this.reloadT=0,this.boltT=-1,this.g.audio.reload(this.weapon.reload),this.g.net&&this.g.net.send({t:"reload",w:this.cur})}_fire(){let t=this.g,e=this.weapon,i=this.w[this.cur],n=t.gfx.camera;i.mag--,i.cool=e.cycle,this.cool=e.cycle;let s=n.getWorldDirection(new _i),o=e.hip*(1-this.ads)*(1+this.speed*.25)+(this.cur==="rifle"&&!this.scoped?.004:0)+(this.grounded?0:.03);if(o>0){let h=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*o;Ri.set(Math.cos(h)*u,Math.sin(h)*u,0).applyQuaternion(n.quaternion),s.add(Ri).normalize()}let a=n.position.clone(),l=a.clone().addScaledVector(s,this.scoped?1.2:.75);if(Ri.set(this.scoped?0:.1,this.scoped?-.06:-.09,0).applyQuaternion(n.quaternion),l.add(Ri),t.net){t.netFire(a,s,l,e),this.kick+=this.cur==="rifle"?.046:.016,this.kickYaw+=(Math.random()-.5)*(this.cur==="rifle"?.02:.01),t.fp.shot(),t.gfx.post.uKick.value=this.cur==="rifle"?1:.4,t.hud.weapon(this),this.cur==="rifle"&&i.mag>0&&(this.boltT=0,t.audio.bolt(.26));return}let c=Fh(t,this,a,s,l,e);this.kick+=this.cur==="rifle"?.046:.016,this.kickYaw+=(Math.random()-.5)*(this.cur==="rifle"?.02:.01),t.fp.shot(),t.gfx.post.uKick.value=this.cur==="rifle"?1:.4,t.hud.weapon(this),this.cur==="rifle"&&i.mag>0&&(this.boltT=0,t.audio.bolt(.26)),c.hit&&(t.hud.hitMarker(!c.hit.alive,c.zone===0),t.audio.hit(c.zone===0))}update(t,e){let i=this.g,n=i.gfx.camera;if(!this.alive){this.deadCam+=t;return}let s=Math.tan(ts.degToRad(this.fov)/2)/Math.tan(ts.degToRad(Uh)/2),o=.0022*e.sens*s*this.aimSlow;if(this.yaw-=e.lookX*o,this.pitch=Nd(this.pitch-e.lookY*o,-1.5,1.5),e.pressed("crouch")&&this.mode==="walk"&&(e.touch?this.crouch=e.held("crouch"):this.crouch=!this.crouch,!this.crouch&&this.g.arena.raycast(Ri.set(this.pos.x,this.pos.y+Dd,this.pos.z),Pb,bg-Dd+.05)&&(this.crouch=!0),i.hud.syncCrouch(this.crouch)),this.crouchK=Nd(this.crouchK+(this.crouch?t/.16:-t/.16),0,1),this.locked?(this.vel.set(0,0,0),this.speed=0):this.mode==="walk"?this._walk(t,e):this.mode==="link"?this._rideStep(t,e):this.mode==="mantle"&&this._mantleStep(t),!this.alive)return;this._weapons(t,e);let a=this.weapon,l=a.zooms[Math.min(this.zoomIdx,a.zooms.length-1)]*(this.holding?1.05:1),c=ts.radToDeg(2*Math.atan(Math.tan(ts.degToRad(Uh)/2)/l)),h=this.ads*this.ads*(3-2*this.ads),u=xi(Uh+(this.sprinting?5:0),c,this.cur==="rifle"?this.scoped?1:h*.35:h);this.fov=xi(this.fov,u,1-Math.exp(-t*(this.scoped?30:12))),Math.abs(n.fov-this.fov)>.01&&(n.fov=this.fov,n.updateProjectionMatrix());let f=i.time,d=(this.crouch?.0021:.0042)*(1+this.speed*.6)*(1+this.suppress*1.5)*(this.gasp>0?2.2:1)*(this.holding?.12:1)*(this.hp<35?1.35:1)*this.ads;this.cur==="pistol"&&(d*=.4),this.suppress=Math.max(0,this.suppress-t*.5),this.swayX=(Math.sin(f*.83)*.6+Math.sin(f*2.17+1.3)*.4)*d,this.swayY=(Math.cos(f*1.07)*.6+Math.sin(f*1.71+.4)*.4)*d,this.kick=xi(this.kick,0,1-Math.exp(-t*6)),this.kickYaw=xi(this.kickYaw,0,1-Math.exp(-t*6)),this.landDip=xi(this.landDip,0,1-Math.exp(-t*9)),this.stepLift=xi(this.stepLift,0,1-Math.exp(-t*13)),this.hurtT=Math.max(0,this.hurtT-t);let p=xi(Fd,Ud,this.crouchK),x=this.grounded&&this.mode==="walk"?Math.min(1,this.speed/5)*(1-this.ads*.8):0;this.lean=xi(this.lean,this.mode==="walk"?-e.moveX*.018*Math.min(1,this.speed/4):0,1-Math.exp(-t*8)),n.position.set(this.pos.x,this.pos.y+p+Math.sin(this.walkPhase*2)*.022*x-this.landDip*.16-this.stepLift,this.pos.z),n.rotation.set(this.pitch+this.kick+this.swayY+Math.sin(this.hurtT*40)*this.hurtT*.02,this.yaw+this.kickYaw+this.swayX,this.lean+Math.sin(this.walkPhase)*.004*x,"YXZ"),this.fwdV.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}};var si=L,Ka=(r,t,e)=>Math.min(e,Math.max(t,r)),Do=(r,t,e)=>r+(t-r)*e,Bd=Math.PI*2,Fo=r=>(r=(r+Math.PI)%Bd,r<0&&(r+=Bd),r-Math.PI),ee=new si,os=new si,Ib=new si,Lb=new si,Tg=()=>{let r=0,t=0;for(;r===0;)r=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(r))*Math.cos(Bd*t)},Eg=["MAGPIE","LANTERN","TYPHOON","JADE","KOWLOON","MONSOON","EGRET","MAHJONG","HARBOUR","TRAM","KITE","NEON","ORCHID","DRAGONFLY"],kh=null;function kd(){return kh||(kh=new He({color:bs.clone().multiplyScalar(1.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1,blending:Bi}),kh)}var zh=class{constructor(t,e,i,n,s){this.g=t,this.id=e,this.name=i,this.isPlayer=!1,this.pos=new si,this.vel=new si,this.lastShotPos=new si,this.eyeV=new si,this.chestV=new si,this.lookAt=new si,this.muzzleW=new si,this.team=0,this.netId=e,t.headless?(this.rig={root:new we,muzzle:new L(0,1.45,-.9),flinch:0,recoil:0,boltK:0,deadDir:1,deadT:0,modeK:{dead:0},update(){}},this.gun=null,this.ghostMat={opacity:0},this.ghost={visible:!1}):(this.rig=n.instantiate(),t.gfx.scene.add(this.rig.root),this.gun=s.clone(),this.gun.scale.setScalar(1.2),this.rig.weapon.add(this.gun),this.ghostMat=kd().clone(),this.ghost=new Vn(this.rig.mesh.geometry,this.ghostMat),this.ghost.bind(this.rig.mesh.skeleton,this.rig.mesh.bindMatrix),this.ghost.frustumCulled=!1,this.ghost.renderOrder=30,this.ghost.visible=!1,this.rig.mesh.parent.add(this.ghost)),this.skill={react:.7+Math.random()*.6,turn:2.6+Math.random()*1.4,sigma:.0052+Math.random()*.0044,aggr:.2+Math.random()*.75,devout:Math.random()<.55,headBias:.06+Math.random()*.14},this.mem=new Map,this.shapes=[],this.reset()}reset(){this.hp=100,this.alive=!0,this.kills=0,this.shots=0,this.hits=0,this.heads=0,this.lastShot=-99,this.revealedUntil=-1,this.deathTime=0,this.place=0,this.yaw=0,this.aimYaw=0,this.aimPitch=0,this.crouch=!1,this.crouchK=0,this.speed=0,this.roof=-1,this.path=[],this.plan=[],this.link=null,this.state="scan",this.target=null,this.aimPt=0,this.settle=0,this.cool=.5+Math.random(),this.mag=Ni.rifle.mag,this.reloadT=0,this.shotsHere=0,this.thinkT=Math.random()*.2,this.scanT=0,this.stanceT=1+Math.random()*2,this.roamT=12+Math.random()*20,this.zoneDelay=Math.random()*9,this.hideUntil=-1,this.threat=null,this.threatT=-99,this.firstShotAt=new Map,this.moveLocal=new si(0,0,1),this.lostT=0,this.stuckT=0,this.aimHold=0,this.glintT=0,this.fleeing=!1,this.duck=!1,this.calmUntil=0,this.fall=null,this.vel.set(0,0,0),this.mem.clear(),this.rig.deadT=0,this.rig.modeK.dead=0,this.rig.root.visible=!0,this.ghost.visible=!1,this.suppress=0,this.place=0,this.deaths=0}spawn(t,e,i){this.pos.copy(t),this.yaw=this.aimYaw=e,this.roof=i,this.lookAt.set(0,t.y,0),this._sync(0)}get moving(){return this.speed>.6}eye(t=this.eyeV){return t.set(this.pos.x-Math.sin(this.aimYaw)*.12,this.pos.y+Do(1.58,1,this.crouchK),this.pos.z-Math.cos(this.aimYaw)*.12)}chest(t=this.chestV){return t.set(this.pos.x,this.pos.y+Do(1.3,.78,this.crouchK),this.pos.z)}hitShapes(t){return this.g.headless?yh(t,this.pos,this.crouchK,1.58,1):this.rig.hitShapes(t)}foe(t){return t!==this&&(!this.g.teams||t.team!==this.team)}get roofObj(){return this.g.arena.roofs[this.roof]}_perceive(t){let e=this.g,i=e.arena,n=this.eye(),s=-Math.sin(this.aimYaw)*Math.cos(this.aimPitch),o=Math.sin(this.aimPitch),a=-Math.cos(this.aimYaw)*Math.cos(this.aimPitch),l=null,c=-1e9;for(let h of e.actors){if(!this.foe(h)||!h.alive)continue;let u=this.mem.get(h);u||(u={aw:0,seen:-99,pos:new si,vis:!1},this.mem.set(h,u));let f=h.chest(ee),d=f.x-n.x,p=f.y-n.y,x=f.z-n.z,m=Math.hypot(d,p,x);u.d=m;let g=!this.link||this.link.link.kind==="pad",_=!1;if(u.visHead=u.visChest=!1,g&&m<210&&(u.visChest=i.los(n,f),u.visHead=u.visChest&&m<40?!0:i.los(n,h.eye(os)),_=u.visHead||u.visChest),u.vis=_,_){let M=Math.acos(Ka((d*s+p*o+x*a)/m,-1,1)),v=M<.45?1:M<1.2?.34:.09,S=Ka(1.7-m/105,.2,1.6)*v*(h.moving?1.6:1)*((h.crouchK||0)>.5?.55:1)*(e.time-h.lastShot<3.2?4.5:1)*(this.crouchK>.5?.8:1);S*=.5*Ka(e.time/30,.12,1)*(h.isPlayer?e.botEye:1),h.revealedUntil>e.time&&(S=99),u.aw=Math.min(1.4,u.aw+S*t),u.aw>=1&&(u.seen=e.time,u.pos.copy(h.pos))}else u.aw=Math.max(0,u.aw-.16*t),h.revealedUntil>e.time&&(u.aw=Math.max(u.aw,.8),u.seen=e.time,u.pos.copy(h.pos));if(_&&u.aw>=1){let M=0;for(let S of e.bots)S!==this&&S.alive&&S.state==="engage"&&S.target===h&&M++;if(M>=(h.isPlayer?e.botCrowd:1)&&!(h===this.threat&&e.time-this.threatT<6)&&h!==this.target)continue;let v=70-m*.42+(h===this.threat&&e.time-this.threatT<6?45:0)+(h.hp<50?12:0)+(h===this.target?14:0);v>c&&(c=v,l=h)}}return l}hear(t,e){if(!this.alive||!this.foe(t))return;let i=this.mem.get(t);e.distanceTo(this.pos)>170||(i&&(i.aw=Math.min(1.4,i.aw+.3)),this.state==="scan"&&Math.random()<.6&&(this.lookAt.copy(e),this.scanT=2+Math.random()*2))}nearMiss(t){if(!(!this.alive||this.link||this.plan.length||t&&!this.foe(t))){if(this.suppress=Math.min(1,this.suppress+.6),t&&t.alive){this.threat=t,this.threatT=this.g.time;let e=this.mem.get(t);e&&(e.aw=Math.min(1.4,e.aw+.5))}Math.random()<.55&&(this.crouch=!0,this.stanceT=.8+Math.random()*1.6,this.state==="engage"&&(this.cool=Math.max(this.cool,.9+Math.random()),this.duck=!0))}}onDamage(t,e){if(this.rig.flinch=1,this.suppress=1,e&&e.alive&&this.foe(e)){this.threat=e,this.threatT=this.g.time;let i=this.mem.get(e);i||(i={aw:0,seen:-99,pos:new si,vis:!1},this.mem.set(e,i)),i.aw=Math.max(i.aw,1.05),i.seen=this.g.time,i.pos.copy(e.pos),this.lookAt.copy(e.pos).setY(e.pos.y+1.2)}this.link||this.plan.length||(this.crouch=!0,this.stanceT=.9+Math.random()*1.2,(this.hp<60||Math.random()<.5)&&e&&this._relocate(e))}_zoneSafeR(){let t=this.g.zone;return t.shrinking||t.toNext<16?Math.min(t.r,t.nextR):t.r}_safeAt(t,e,i){return Math.hypot(t-this.g.zone.cx,e-this.g.zone.cz)<i-1.2}_pickPerch(t,e={}){let i=this.g.arena,n=i.roofs[t],s=this._zoneSafeR(),o=-1,a=-1e9,l=n.perch.length?n.perch:n.cells,c=Math.min(l.length,26);for(let h=0;h<c;h++){let u=l[Math.random()*l.length|0];i.cellPos(n,u,ee);let f=Math.random()*4;this._safeAt(ee.x,ee.z,s)||(f-=60);let d=Math.hypot(ee.x,ee.z);f+=(Math.hypot(n.x,n.z)-d)*.5*(e.inward||.3),e.from&&(f-=Math.max(0,5-Math.hypot(ee.x-e.from.x,ee.z-e.from.z))*3),e.hideFrom&&(os.set(ee.x,ee.y+1,ee.z),i.los(e.hideFrom,os)||(f+=30),os.y=ee.y+1.55,i.los(e.hideFrom,os)||(f+=10)),f>a&&(a=f,o=u)}return o<0?null:i.cellPos(n,o,new si)}_goTo(t,e,i){let n=this.g.arena;this.path=n.path(this.roofObj,this.pos.x,this.pos.z,t,e),this.arrive=i||null}_relocate(t){let e=t?t.eye(new si):null,i=this._pickPerch(this.roof,{from:this.pos,hideFrom:e});i&&(this.state="move",this.shotsHere=0,this._goTo(i.x,i.z,()=>{this.state="scan",this.crouch=!!e||Math.random()<.4,this.stanceT=e?1.5+Math.random()*2:.8+Math.random(),this.calmUntil=this.g.time+1.2+Math.random()*2}))}_travel(t){this.plan=t.slice(),this.state="move",this.target=null,this._nextLeg()}_nextLeg(){let t=this.g.arena;if(!this.plan.length){let n=this._pickPerch(this.roof,{inward:.6});n?this._goTo(n.x,n.z,()=>{this.state="scan",this.crouch=Math.random()<.6,this.stanceT=1.5+Math.random()*2.5,this.calmUntil=this.g.time+2.5+Math.random()*3}):this.state="scan";return}let e=this.plan[0],i=e.dir?e.link.p1:e.link.p0;this._goTo(i.x,i.z,()=>{this.plan.shift(),this.link={link:e.link,dir:e.dir,t:0,to:e.to,from:this.pos.clone()},this.crouch=!1})}_zoneCheck(t){let e=this.g,i=e.arena,n=e.zone;if(this.link)return;let s=this._zoneSafeR(),o=!this._safeAt(this.pos.x,this.pos.z,n.r+.6);if(this._safeAt(this.pos.x,this.pos.z,s)&&!t||this.plan.length&&!o||!o&&n.phaseAge<this.zoneDelay&&!n.shrinking&&n.toNext>9)return;let l=this.roofObj;if(i.safeCount(l,s-2)>=6){if(this.state!=="move"||t){let u=null,f=1e9;for(let d=0;d<40;d++){let p=l.cells[Math.random()*l.cells.length|0];if(i.cellPos(l,p,ee),!this._safeAt(ee.x,ee.z,s-.8))continue;let x=Math.hypot(ee.x-this.pos.x,ee.z-this.pos.z);x<f&&(f=x,u=ee.clone())}u&&(this.state="move",this.plan.length=0,this.fleeing=!0,this.target=null,this._goTo(u.x,u.z,()=>{this.state="scan",this.fleeing=!1}))}return}let h=i.route(this.roof,u=>i.safeCount(u,s-2.2)>=10);h||(h=i.route(this.roof,u=>i.safeCount(u,s-1)>=1)),h&&(this.fleeing=!1,this._travel(h))}hideFromAngel(t){if(!this.alive||!this.skill.devout||this.link||this.plan.length||this.state==="engage")return;let e=this.g.arena,i=this.roofObj,n=null,s=1e9;for(let o=0;o<50;o++){let a=i.cells[Math.random()*i.cells.length|0];if(e.cellPos(i,a,ee),!this._safeAt(ee.x,ee.z,this.g.zone.r)||(os.set(ee.x,ee.y+.95,ee.z),e.los(t,os)))continue;let l=Math.hypot(ee.x-this.pos.x,ee.z-this.pos.z);l<s&&(s=l,n=ee.clone())}n&&s<13&&(this.state="move",this._goTo(n.x,n.z,()=>{this.state="scan",this.crouch=!0,this.stanceT=4.5}),this.hideUntil=this.g.time+6)}update(t){let e=this.g,i=e.arena;if(!this.alive){if(this.fall){let o=this.fall;o.vy-=Ga*t;let a=this.pos.y+o.vy*t,l=o.vy<0?i.groundY(this.pos.x,this.pos.z,this.pos.y+.6,.7-o.vy*t):null;l!=null&&l>=a?(this.pos.y=l,this.fall=null):(this.pos.y=a,this.pos.x+=o.vx*t,this.pos.z+=o.vz*t,i.raycast(ee.set(this.pos.x,this.pos.y+.9,this.pos.z),os.set(o.vx,0,o.vz).normalize(),.45)&&(o.vx=0,o.vz=0),this.pos.y<1&&(this.fall=null)),this.rig.update(t,{mode:this.fall?"air":"dead"}),this._sync(t)}else this.rig.update(t,{mode:"dead"});this.ghost.visible&&(this.ghost.visible=!1);return}if(this.cool-=t,this.thinkT-=t,this.stanceT-=t,this.scanT-=t,this.roamT-=t,this.suppress=Math.max(0,this.suppress-t*.4),this.thinkT<=0){this.thinkT=.2;let a=this._perceive(.2);if(this._zoneCheck(!1),this.state==="move"&&!this.path.length&&!this.plan.length&&!this.link&&(this.state="scan",this.fleeing=!1),!(this.link||this.plan.length>0||this.hideUntil>e.time||this.fleeing)){if(a&&e.weaponsFree&&this.reloadT<=0&&(e.time>this.calmUntil||a===this.threat&&e.time-this.threatT<5)){if(this.target!==a){this.target=a,this.settle=0;let c=!this.firstShotAt.has(a);this.aimNeed=(this.skill.react+this.mem.get(a).d/100*1.1+(c?.5:0)+Math.random()*.4)*(a.isPlayer?e.botAim:1),this.aimPt=Math.random()<this.skill.headBias?1:0}this.state!=="engage"&&(this.state="engage",this.path.length=0,this.arrive=null,this.crouch=!1),this.lostT=0}else if(this.state==="engage"&&(this.lostT+=.2,this.lostT>1.6||!this.target||!this.target.alive)){let c=this.target&&this.mem.get(this.target);c&&this.lookAt.copy(c.pos).setY(c.pos.y+1.2),this.state="scan",this.target=null,this.scanT=3,this.stanceT=2+Math.random()*2}if(this.state==="scan"){if(this.shotsHere>=2+this.id*7%2)this._relocate(this.threat&&e.time-this.threatT<8?this.threat:null);else if(this.roamT<=0)if(this.roamT=14+Math.random()*22,Math.random()<this.skill.aggr*.7){let c=this._zoneSafeR(),h=this.roofObj.dist,u=this.roofObj.links.filter(f=>i.safeCount(i.roofs[f.to],c-2.2)>=30&&i.roofs[f.to].dist>h-16&&!e.bots.some(d=>d!==this&&d.alive&&d.roof===f.to));u.length?this._travel([u[Math.random()*u.length|0]]):this._relocate(null)}else this._relocate(null)}}}this.reloadT>0&&(this.reloadT-=t,this.crouch=!0,this.reloadT<=0&&(this.mag=Ni.rifle.mag,this.stanceT=.2));let n="ground",s=!1;if(this.speed=0,this.link){let o=this.link;o.t+=t/(o.link.time*(o.link.kind==="ladder",1));let a=Math.min(1,o.t),l=Ib.copy(this.pos);i.linkPos(o.link,o.dir,a,ee),a<.07&&ee.lerpVectors(o.from,ee,a/.07),this.pos.copy(ee),t>0&&this.vel.copy(this.pos).sub(l).multiplyScalar(1/t),n=i.linkMode(o.link,a,o.dir),n==="ground"&&o.link.kind==="jump"&&(this.speed=6);let c=o.dir?o.link.p0:o.link.p1,h=o.link.kind==="ladder"?Math.atan2(-o.link.n[0],-o.link.n[1]):Math.atan2(-(c.x-this.pos.x),-(c.z-this.pos.z));this.yaw+=Fo(h-this.yaw)*Math.min(1,t*10),this.aimYaw=this.yaw,this.aimPitch=Do(this.aimPitch,0,t*5),a>=1&&(this.roof=o.to,this.link=null,this.pos.y=this.roofObj.roofY,this._nextLeg())}else{if(this.path.length){let o=this.path[0],a=o.x-this.pos.x,l=o.z-this.pos.z,c=Math.hypot(a,l),h=this.crouch&&this.state!=="move"?2.2:5.2,u=h*t;if(c<=u+.05){if(this.pos.x=o.x,this.pos.z=o.z,this.path.shift(),!this.path.length&&this.arrive){let f=this.arrive;this.arrive=null,f()}}else{this.pos.x+=a/c*u,this.pos.z+=l/c*u,this.speed=h;let f=Math.atan2(-a,-l);this.yaw+=Fo(f-this.yaw)*Math.min(1,t*9),this.state==="move"&&(this.aimYaw+=Fo(this.yaw-this.aimYaw)*Math.min(1,t*6),this.aimPitch=Do(this.aimPitch,0,t*4),this.crouch=!1)}}if(this.pos.y=Do(this.pos.y,this.roofObj.roofY,Math.min(1,t*12)),this.state==="scan"){if(this.stanceT<=0&&(this.crouch=!this.crouch,this.stanceT=this.crouch?1.2+Math.random()*2.6:2.6+Math.random()*3.6,this.hideUntil>e.time&&(this.crouch=!0)),this.scanT<=0){this.scanT=2.2+Math.random()*3;let o=null;if(Math.random()<.55){let a=-99;for(let[l,c]of this.mem)l.alive&&c.seen>a&&e.time-c.seen<25&&(a=c.seen,o=c.pos)}if(o)this.lookAt.copy(o).setY(o.y+1.2);else{let a=i.roofs[Math.random()*i.roofs.length|0];this.lookAt.set(a.x+(Math.random()-.5)*8,a.roofY+1.2,a.z+(Math.random()-.5)*8)}}this._aimAt(this.lookAt,t,1.5),s=!this.crouch}else if(this.state==="engage"&&this.target){let o=this.target,a=this.mem.get(o),l=this.aimPt===1||a&&!a.visChest,c=l?o.eye(ee):o.chest(ee);l&&(c.y+=.03);let h=this._aimAt(c,t,this.skill.turn);s=!0,this.crouch=this.cool>.45&&this.duck,this.glintT=.3,h<.035?this.settle+=t:this.settle=Math.max(0,this.settle-t*.5),this.settle>=this.aimNeed&&this.cool<=0&&!this.crouch&&this.crouchK<.25&&e.weaponsFree&&this._shoot(o,c)}}if(this.crouchK=Ka(this.crouchK+(this.crouch?t/.2:-t/.2),0,1),this.link)this.moveLocal.set(0,0,1);else if(this.speed>.1&&this.path.length){let o=this.path[0],a=Math.atan2(-(o.x-this.pos.x),-(o.z-this.pos.z))-this.yaw;this.moveLocal.set(-Math.sin(a)*-1,0,Math.cos(a))}else this.moveLocal.set(0,0,1);this.rig.update(t,{aim:s&&n==="ground"&&this.speed<.5,crouch:this.crouch&&n==="ground",pitch:this.aimPitch,twist:Fo(this.aimYaw-this.yaw),speed:this.speed,moveDir:this.moveLocal,mode:n}),this._sync(t),this.glintT-=t}_aimAt(t,e,i){let n=this.eye(os),s=t.x-n.x,o=t.y-n.y,a=t.z-n.z,l=Math.atan2(-s,-a),c=Math.atan2(o,Math.hypot(s,a)),h=Fo(l-this.aimYaw),u=c-this.aimPitch,f=Math.hypot(h,u),d=i*e*(.35+Math.min(1,f*2.5));f<=d?(this.aimYaw=l,this.aimPitch=c):(this.aimYaw+=h/f*d,this.aimPitch+=u/f*d);let p=Fo(this.aimYaw-this.yaw);return Math.abs(p)>.5&&this.speed<.5&&(this.yaw+=Math.sign(p)*Math.min(Math.abs(p)-.35,e*4.5)),f}_shoot(t,e){let i=this.g,n=this.mem.get(t),s=this.eye(new si);if(!i.arena.los(s,e)){this.settle*=.6;return}let o=s.distanceTo(e),a=!this.firstShotAt.has(t);this.firstShotAt.set(t,i.time);let l=n&&!n.visChest,c=this.skill.sigma*(1+o/170)*(1+Math.min(2.2,(t.speed||0)*.42))*(1+this.suppress*1.6)*(a?1.75:1)*i.botSigma*(t.isPlayer?i.botSigmaPlayer:i.botSigmaBot*Do(1.12,1,Ka(i.time/210,0,1)))*((t.crouchK||0)>.5?1.15:1)*(l?1.25:1),h=Lb.copy(e).sub(s).normalize();ee.set(Tg()*c,Tg()*c,0);let u=new Pe().setFromUnitVectors(new si(0,0,-1),h);h.add(ee.applyQuaternion(u)).normalize(),this.rig.root.updateMatrixWorld(!0),this.muzzleW.copy(this.rig.muzzle).applyMatrix4(this.rig.root.matrixWorld),Fh(i,this,s,h.clone(),this.muzzleW.clone(),Ni.rifle),this.rig.recoil=1,this.rig.boltK=1,this.mag--,this.shotsHere++,this.cool=Ni.rifle.cycle+.7+Math.random()*1.7,this.settle=this.aimNeed*.25,this.duck=Math.random()<.8,this.aimPt=Math.random()<this.skill.headBias?1:0,this.mag<=0&&(this.reloadT=Ni.rifle.reload+.4,this.crouch=!0)}_sync(t){let e=this.rig.root;e.position.copy(this.pos),e.rotation.y=this.yaw+Math.PI,e.updateMatrixWorld(!0);let i=this.revealedUntil-this.g.time;i>0?(this.ghost.visible=!0,this.ghostMat.opacity=Math.min(1,i*1.2)*(.42+.14*Math.sin(this.g.time*18))):this.ghost.visible&&(this.ghost.visible=!1)}die(){this.alive=!1,this.rig.deadDir=Math.random()<.5?1:-1,this.fall=this.link?{vx:this.vel.x*.6,vy:Math.min(this.vel.y,3),vz:this.vel.z*.6}:null,this.path.length=0,this.plan.length=0,this.link=null,this.target=null}};var Hh=(r,t,e)=>Math.min(e,Math.max(t,r)),Ag=r=>r*r*(3-2*r),Vh=class{constructor(t,e,i){this.g=t,this.root=new Ee,this.model=e.scene,this.root.add(this.model),t.gfx.scene.add(this.root),this.model.traverse(l=>{if(!l.isMesh)return;l.frustumCulled=!1;let c=l.material.name;l.material=/halo/.test(c)?i.halo:/arm/.test(c)?i.angelArm:i.angelBody,/halo/.test(c)&&(l.renderOrder=12)});let n=new ae().setFromObject(this.model),s=n.max.y-n.min.y;this.height=44;let o=this.height/s;this.model.scale.setScalar(o),this.model.position.y=-n.min.y*o,this.baseY=31,this.root.position.set(0,this.baseY,0),this.mixer=new ga(this.model),this.action=this.mixer.clipAction(e.clips[0]),this.action.play(),this.dur=e.clips[0].duration,this.t=.3,this.mixer.setTime(this.t),this.wrists=[],this.halo=null,this.model.traverse(l=>{/arm_wrist/.test(l.name)&&this.wrists.push(l),l.name==="halo"&&(this.halo=l)}),this.eye=new L(0,this.baseY+this.height*.9,0),this.state="idle",this.st=0,this.pulseR=0,this.pulseOn=!1,this.frenzy=!1,this.open=0,this.spin=0;let a=new de(new la(1,.035,6,72),new He({color:new At("#B51224").multiplyScalar(1),transparent:!0,opacity:.5,blending:Bi,depthWrite:!1,fog:!1}));a.rotation.x=Math.PI/2,this.glowRing=a,this.root.add(a),ne.uPulse.value.set(0,this.eye.y,0,0)}wristPos(t,e){return this.wrists[t%this.wrists.length].getWorldPosition(e)}warn(){this.state="warn",this.st=0}look(){this.state="look",this.st=0,this.pulseR=0,this.pulseOn=!0;for(let t of this.g.actors)t._gazed=!1}reset(){this.state="idle",this.st=0,this.pulseOn=!1,this.frenzy=!1,this.open=0,ne.uPulse.value.w=0,this.t=.3}update(t){let e=this.g;this.st+=t;let i=0;this.state==="warn"?i=Ag(Hh(this.st/4.5,0,1)):this.state==="look"?i=1:this.state==="close"&&(i=1-Ag(Hh(this.st/4,0,1))),this.state==="look"&&this.st>4.2&&(this.state="close",this.st=0),this.state==="close"&&this.st>4&&(this.state="idle",this.st=0),this.open=i,this.frenzy?(this.t+=t*.55,this.t>this.dur&&(this.t-=this.dur)):this.t=.25+i*3.3+Math.sin(e.clock*.35)*.12*(1-i),this.mixer.setTime(this.t),this.root.position.y=this.baseY+Math.sin(e.clock*.4)*.6-(e.zone?(1-Hh(e.zone.r/30,0,1))*5:0),this.root.rotation.y=Math.sin(e.clock*.07)*.5,this.root.updateMatrixWorld(!0),this.halo&&this.halo.getWorldPosition(this.eye);let n=3.4*(1+.06*Math.sin(e.clock*2.2)+this.open*.25);if(this.glowRing.position.set(this.eye.x-this.root.position.x,this.eye.y-this.root.position.y+.1,this.eye.z-this.root.position.z),this.glowRing.scale.set(n,n,n),this.glowRing.material.opacity=.35+.4*this.open,this.pulseOn){this.pulseR+=t*78;let s=Hh(1-this.pulseR/260,0,1);ne.uPulse.value.set(0,this.eye.y,this.pulseR,s*1);for(let o of e.actors){if(!o.alive||o._gazed)continue;o.chest().distanceTo(this.eye)<=this.pulseR&&(o._gazed=!0,e.gazeHit(o,e.arena.los(this.eye,o.chest())))}this.pulseR>260&&(this.pulseOn=!1,ne.uPulse.value.w=0)}}};var Fs=L,Rg=Math.PI*2,Pg=r=>(r=(r+Math.PI)%Rg,r<0&&(r+=Rg),r-Math.PI),Cg=(r,t,e)=>r+Pg(t-r)*e,Nb=["ground","link","ground","air","zip","ladder"],Gh=class{constructor(t,e,i,n,s){this.g=t,this.netId=e,this.name=i.name||"SNIPER",this.team=i.team||0,this.bot=!!i.bot,this.isPlayer=!1,this.puppet=!0,this.pos=new Fs,this.vel=new Fs,this.lastShotPos=new Fs,this.eyeV=new Fs,this.chestV=new Fs,this.muzzleW=new Fs,this.rig=n.instantiate(),t.gfx.scene.add(this.rig.root),this.gun=s.clone(),this.gun.scale.setScalar(1.2),this.rig.weapon.add(this.gun),this.ghostMat=kd().clone(),this.ghost=new Vn(this.rig.mesh.geometry,this.ghostMat),this.ghost.bind(this.rig.mesh.skeleton,this.rig.mesh.bindMatrix),this.ghost.frustumCulled=!1,this.ghost.renderOrder=30,this.ghost.visible=!1,this.rig.mesh.parent.add(this.ghost),this.buf=[],this.hp=100,this.alive=!0,this.kills=0,this.deaths=0,this.place=0,this.lastShot=-99,this.revealedUntil=-1,this.yaw=0,this.aimYaw=0,this.aimPitch=0,this.crouchK=0,this.speed=0,this.mode="ground",this.flags=1,this.shots=0,this.hits=0,this.heads=0}get moving(){return this.speed>.6}eye(t=this.eyeV){return t.set(this.pos.x,this.pos.y+1.58-.58*this.crouchK,this.pos.z)}chest(t=this.chestV){return t.set(this.pos.x,this.pos.y+1.3-.52*this.crouchK,this.pos.z)}hitShapes(t){return this.rig.hitShapes(t)}muzzle(t=this.muzzleW){return this.rig.root.updateMatrixWorld(!0),t.copy(this.rig.muzzle).applyMatrix4(this.rig.root.matrixWorld)}push(t,e){this.buf.push({t,row:e}),this.buf.length>40&&this.buf.shift()}snap(t){this.buf.length=0,this.push(-1e9,t),this._apply(t,t,0)}spawn(t,e){this.buf.length=0,this.pos.set(t[0],t[1],t[2]),this.yaw=this.aimYaw=e,this.alive=!0,this.hp=100,this.rig.deadT=0,this.rig.modeK.dead=0,this.rig.root.visible=!0}die(){this.alive=!1,this.rig.deadDir=Math.random()<.5?1:-1}_apply(t,e,i){let n=a=>t[a]+(e[a]-t[a])*i,s=this.pos.x,o=this.pos.z;if(this.pos.set(n(1),n(2),n(3)),this.yaw=Cg(t[4],e[4],i),this.aimYaw=Cg(t[5],e[5],i),this.aimPitch=n(6),this.crouchK=n(7),this.speed=n(8),this.flags=e[10],this.hp=e[11],this.mode=Nb[e[9]]||"ground",e[9]===1&&e[12]>=0){let a=this.g.arena.links[e[12]];a&&(this.mode=this.bot?this.g.arena.linkMode(a,e[13],e[14]):a.kind==="zip"?"zip":a.kind==="ladder"?"ladder":"air")}this.vel.set(this.pos.x-s,0,this.pos.z-o)}update(t,e){let i=this.buf;if(i.length){let l=i.length-1;for(;l>0&&i[l-1].t>e;)l--;if(l===0||i.length===1)this._apply(i[0].row,i[0].row,0);else{let c=i[l-1],h=i[l],u=Math.min(1,Math.max(0,(e-c.t)/Math.max(1e-4,h.t-c.t)));e>h.t?this._apply(h.row,h.row,0):this._apply(c.row,h.row,u)}}if(this.revealedUntil=this.flags&2?this.g.time+.2:-1,!this.alive){this.rig.update(t,{mode:"dead"}),this.ghost.visible=!1,this._sync();return}let n=Pg(this.aimYaw-this.yaw),s=Math.atan2(-this.vel.x,-this.vel.z)-this.yaw,o=this.speed>.3?new Fs(Math.sin(s),0,Math.cos(s)):new Fs(0,0,1),a=(this.flags&8)!==0;this.rig.update(t,{aim:a&&this.mode==="ground"&&this.speed<.5,crouch:this.crouchK>.5&&this.mode==="ground",pitch:this.aimPitch,twist:n,speed:this.speed,moveDir:o,mode:this.mode}),this._sync()}_sync(){let t=this.rig.root;t.position.copy(this.pos),t.rotation.y=this.yaw+Math.PI,t.updateMatrixWorld(!0);let e=this.revealedUntil>this.g.time&&this.alive;this.ghost.visible=e,e&&(this.ghostMat.opacity=.42+.14*Math.sin(this.g.time*18))}dispose(){this.g.gfx.scene.remove(this.rig.root)}};var Hd=L,Wh=new Hd,Ig=new Hd,zd=new Hd,Db=.1,Fb=r=>`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`,Qi=["WHITE","RED"];function Lg(r){let t=r.prototype;t.startNet=function(e,i,n){let s=this.player;this.net=e,this.netRoom=n,this.netS=i.settings,this.teams=i.settings.mode!=="ffa",this.netOver=null,this.netKills={},this.audio.start(),this.hud.fade(0);for(let a of this.soloBots)a.alive=!1,a.rig.root.visible=!1;for(let a of this.puppets||[])a.dispose();this.puppets=[],this.bots=[],this.fx.threads.clear(),this.fx.particles.clear(),this.fx.decals.clear(),this.angel.reset(),s.reset(),s.team=0,s.netId=e.id;for(let[a,l]of Object.entries(i.roster)){if(a===e.id){s.team=l.team,s.name="YOU";continue}let c=new Gh(this,a,l,this.proto,this.models.weapons.rifle_tp);this.puppets.push(c)}this.byNet=new Map(this.puppets.map(a=>[a.netId,a])),this.byNet.set(e.id,s),this.actors=[s,...this.puppets];for(let a of i.snap.a){let l=this.byNet.get(a[0]);l&&l.puppet?(l.snap(a),a[10]&1||l.die()):l===s&&(s.pos.set(a[1],a[2],a[3]),s.yaw=a[4],s.alive=!!(a[10]&1),s.hp=a[11])}let o=i.ammo&&i.ammo[e.id];o&&this._netAmmo(o.ammo),this.time=i.snap.t,this.timeScale=1,this.slowT=0,this.weaponsFree=this.time>=6,this.stats={traversals:0,dmg:0},this.log=[],this.winner=null,this.resultsShown=!1,this.overT=0,this.deathInfo=null,this.gazeWarned=-1,this.gazeDone=-1,this.zoneWarned=-1,this.lastTwo=!1,this.introT=i.rejoin?9:0,this.netSeq=0,this.netSendT=0,this.respawnAt=0,this._netZone(i.snap.z,0),this.gazeDone=this.zone.phase,this.gazeWarned=this.zone.phase-1,s.locked=!i.rejoin,this.state="live",this.input.enabled=!0,this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.setToggle("crouch",!1,document.getElementById("b-crouch")),this.hud.show(s.alive?"play":"spectate"),this.hud.health(s.hp),this.hud.lastHp=s.hp,this.hud.weapon(s),this.hud.alive(this.actors,s),this.hud.el.feed.innerHTML="",this.hud.feedItems.length=0,this.hud.seen(!1,!1),this.hud.teamMode(this.teams,s.team),!i.rejoin&&s.alive&&this.hud.banner(this.teams?`TEAM ${Qi[s.team]}`:"FREE FOR ALL",3.4,!1,this._netRuleLine(),!1);for(let a of i.events||[])this._netEvent(a);for(let a of i.log||[])this.log.push({t:a.t,k:this._nm(a.k,a.cause),v:this._nm(a.v),how:a.how,red:a.v===e.id||a.k===e.id});this.input.touch||this.input.requestLock();try{this.gfx.canvas.focus({preventScroll:!0})}catch{}},t._netRuleLine=function(){let e=this.netS;return[e.respawn?`respawn \xB7 ${e.scoreLimit?"first to "+e.scoreLimit:"most kills at the bell"}`:"one life",e.headshotsOnly?"headshots only":"",e.halo?"":"no halo"].filter(Boolean).join(" \xB7 ")},t._nm=function(e,i){if(!e)return i==="halo"?"THE HALO":i==="street"?"THE STREET":"\u2014";if(e===this.net.id)return"YOU";let n=this.byNet.get(e);return n?n.name:"?"},t.stopNet=function(){for(let e of this.puppets||[])e.dispose();this.puppets=[],this.bots=this.soloBots,this.actors=[this.player,...this.soloBots],this.net=null,this.teams=!1,this.hud.teamMode(!1,0)},t.onNetSnap=function(e){if(!this.net||this.state==="title")return;let i=e.s;for(let n of i.a){let s=this.byNet.get(n[0]);s&&s.puppet?s.push(i.t,n):s===this.player&&(this.netSelf=n)}if(this._netZone(i.z,i.t),this.netScore=i.k,e.e)for(let n of e.e)this._netEvent(n)},t._netZone=function(e,i){if(!e)return;let n=this.zone;n.r=e[0],n.nextR=e[1],n.phase=e[2],n.shrinking=!!e[3],n.toNext=e[4],n.total=this.Z.phases.length,n.dps=1},t._netAmmo=function(e){let i=this.player;i.w.rifle.mag=e.rifle[0],i.w.rifle.reserve=e.rifle[1],i.w.pistol.mag=e.pistol[0],i.w.pistol.reserve=e.pistol[1],this.hud.weapon(i)},t._netEvent=function(e){let i=this.player,n=this.net.id,s=this.hud;switch(e.t){case"spawn":{let o=this.byNet.get(e.id);if(!o)break;o===i?(i.reset(),i.team=this.teamOf(n),i.spawn(Wh.set(e.p[0],e.p[1],e.p[2]),e.yaw),i.roof=e.roof,i.netId=n,this.respawnAt=0,this.deathInfo=null,s.show("play"),s.lastHp=100,s.health(100),s.weapon(i),this.time>1&&s.banner("back on the roofs",1.6,!0,"spawn protection until you fire"),this.input.touch||this.input.requestLock()):o.spawn(e.p,e.yaw),s.alive(this.actors,i);break}case"shot":{if(e.by===n)break;let o=this.byNet.get(e.by),a=Wh.set(e.o[0],e.o[1],e.o[2]),l=Ig.set(e.e[0],e.e[1],e.e[2]),c=o&&o.puppet&&o.alive?o.muzzle():a;o&&(o.lastShot=this.time,o.lastShotPos.copy(a),o.rig.recoil=1,o.rig.boltK=e.w==="rifle"?1:.3),this.fx.threads.shot(c,l),this.fx.particles.flash(c,1.6);let h=a.distanceTo(this.listenerPos);this.audio.shot(h,this.panOf(a),e.w==="pistol");let u=zd.copy(l).sub(a).normalize();if(e.hit){this.fx.particles.blood(l,u,e.z===0?1.7:1);let f=this.arena.raycast(l,u,4.5);if(f){let d=f.face.normal.clone();d.dot(u)>0&&d.negate(),this.fx.decals.add(f.point,d,.35+Math.random()*.5,0,.25)}}else{let f=this.arena.raycast(a,u,a.distanceTo(l)+.5);if(f){let d=f.face.normal.clone();d.dot(u)>0&&d.negate(),this.fx.particles.impact(f.point,d),this.fx.decals.add(f.point,d,.08,1,.01,.85)}}if(i.alive&&e.hit!==n){let f=Wh.copy(this.listenerPos).sub(a),d=a.distanceTo(l),p=Math.max(0,Math.min(d,f.dot(u))),x=a.clone().addScaledVector(u,p);x.distanceTo(this.listenerPos)<2.4&&p>4&&(this.audio.whiz(this.panOf(x)),s.threat(a,.6),i.suppress=Math.min(1,(i.suppress||0)+.5))}break}case"dmg":{let o=this.byNet.get(e.id);if(!o)break;if(o.hp=e.hp,o===i){let a=Math.min(1,Math.max(.25,e.amt/55));this.gfx.post.uDamage.value=Math.max(this.gfx.post.uDamage.value,a),i.hurtT=.3,this.audio.hurt();let l=e.by&&this.byNet.get(e.by);l&&s.threat(l.pos,1),s.health(e.hp),i.suppress=1}else o.puppet&&(o.rig.flinch=1);break}case"hit":e.id===n&&(s.hitMarker(e.kill,e.z===0),this.audio.hit(e.z===0));break;case"kill":{let o=this.byNet.get(e.id),a=e.by&&this.byNet.get(e.by);if(!o)break;let l=this._nm(e.by,e.cause),c=this._nm(e.id),h=e.id===n||e.by===n,u=e.cause?"":e.how;s.feed(l,c,u,h),this.log.push({t:this.time,k:l,v:c,how:u,red:h}),o.alive=!1,o.hp=0,o.deathTime=this.time,o.place=e.place||0,o.deaths=(o.deaths||0)+1,a&&a!==o&&!(this.teams&&a.team===o.team)&&(a.kills=(a.kills||0)+1),a===i&&e.hp!=null&&(i.hp=e.hp,s.health(e.hp),this.audio.kill(),this.flash(.35));let f=Wh.set(e.p[0],e.p[1]+.25,e.p[2]),d=this.arena.raycast(Ig.copy(f).setY(f.y+.6),zd.set(0,-1,0),4);d&&this.fx.decals.add(d.point,zd.set(0,1,0),.9+Math.random()*.4,0,3.5),o!==i&&this.fx.particles.motes(f,30);let p=this.angel,x=(this.log.length-1)%8;this.fx.threads.addSoul(f.clone().setY(Math.max(f.y,6)),m=>p.wristPos(x,m)),this.audio.toll(Math.min(7,this.log.length)),o===i?(this.deathInfo={killer:l,cause:e.cause==="halo"?"THE HALO":e.cause==="street"?"THE STREET":null,how:u},i.alive=!1,i.hp=0,i.deathTime=this.time,s.show("spectate"),this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.exitLock(),this.audio.setZip(0),this.deadFrom=this.gfx.camera.position.clone(),this.deadQ=this.gfx.camera.quaternion.clone(),e.respawnIn&&(this.respawnAt=this.time+e.respawnIn,s.banner(`${l==="YOU"?"you fell":"taken by "+l}`,2.2,!1,`back in ${e.respawnIn} seconds`,!0))):o.puppet&&o.die(),s.alive(this.actors,i);break}case"gaze":e.id===n&&(this._gazeFromServer=!0,this.gazeHit(i,e.seen),this._gazeFromServer=!1);break;case"correct":e.id===n&&(i.pos.set(e.p[0],e.p[1],e.p[2]),i.vel.set(0,0,0),i.mode="walk",i.link=null,i.mantle=null);break;case"ammo":e.id===n&&this._netAmmo(e.ammo);break;case"deny":e.id===n&&(this._netAmmo(e.ammo),e.why==="empty"&&this.audio.dry());break;case"free":this.weaponsFree=!0,i.alive&&(s.banner("weapons free",1.8,!0),this.audio.tick());break;case"end":this.netOver=e,this.state="over",this.overT=0;{let o=e.winner,a=o.team!=null?this.teams&&o.team===i.team:o.id===n;this.winner=a?i:{isPlayer:!1,name:o.id?this._nm(o.id):o.team!=null?Qi[o.team]:""},a&&(this.slowT=1.2,this.audio.stinger(!0))}break}},t.teamOf=function(e){let i=this.byNet.get(e);return i&&i.team||0},t._netStep=function(e,i){let n=this.player,s=this.net;this.time=s.now(),this.introT+=e,n.locked&&this.introT>1.3&&(n.locked=!1),this._zone(e);let o=this.time-Db;for(let c of this.puppets)c.update(e,o);this.netSendT-=i,n.alive&&this.netSendT<=0&&this.state==="live"&&(this.netSendT=1/30,s.send({t:"in",seq:this.netSeq++,p:[+n.pos.x.toFixed(3),+n.pos.y.toFixed(3),+n.pos.z.toFixed(3)],yaw:+n.yaw.toFixed(4),pitch:+n.pitch.toFixed(4),c:+n.crouchK.toFixed(2),mode:n.mode==="link"?"link":n.mode==="mantle"?"mantle":"walk",link:n.mode==="link"&&n.link?n.link.i:-1,w:n.cur,ads:+n.ads.toFixed(2)}));let a=this.netS,l="";if(this.teams){let c=this.netScore||[0,0];if(a.respawn)l=`<b class="w">${Qi[0]} ${c[0]}</b> \xB7 <b class="r">${c[1]} ${Qi[1]}</b>${a.scoreLimit?` <i>to ${a.scoreLimit}</i>`:""}`;else{let h=[0,1].map(u=>this.actors.filter(f=>f.alive&&(f.team||0)===u).length);l=`<b class="w">${Qi[0]} ${h[0]}</b> \xB7 <b class="r">${h[1]} ${Qi[1]}</b> <i>alive</i>`}}else if(a.respawn){let c=Math.max(0,...this.puppets.map(h=>h.kills||0));l=`<b class="w">YOU ${n.kills}</b> \xB7 <b>BEST ${c}</b>${a.scoreLimit?` <i>to ${a.scoreLimit}</i>`:""}`}if(this.hud.score(l),!n.alive&&this.respawnAt>0){let c=Math.ceil(this.respawnAt-this.time);c!==this._rsLeft&&(this._rsLeft=c,c>0&&this.hud.banner(`back in ${c}`,1.1,!0,this.deathInfo?`taken by ${this.deathInfo.killer}`:""))}},t.netFire=function(e,i,n,s){let o=this.arena.raycast(e,i,420),a=e.clone().addScaledVector(i,o?o.distance:420);if(this.fx.threads.shot(n,a),this.audio.shot(0,0,s.key==="pistol"),this.player.shots++,this.player.lastShot=this.time,this.player.lastShotPos.copy(e),o){let l=o.face.normal.clone();l.dot(i)>0&&l.negate(),this.fx.particles.impact(a,l),this.fx.decals.add(a,l,.08,1,.01,.85)}this.net.send({t:"fire",o:[e.x,e.y,e.z].map(l=>+l.toFixed(3)),d:[i.x,i.y,i.z].map(l=>+l.toFixed(5)),w:s.key,ct:this.time})},t.netDamageSelf=function(e,i){i.cause==="fall"&&this.net.send({t:"fall",v:e/8+14.5})},t._netResults=function(){let e=this.netOver,i=this.player,n=this.net.id;this.resultsShown=!0,this.input.enabled=!1,this.input.exitLock();let s=e.winner,o=e.standings.rows,a=o.find(x=>x.id===n)||{},l=s.team!=null?this.teams&&s.team===i.team:s.id===n,c=s.team==null&&s.id==null;l||this.audio.stinger(!1);let h=c?"A dead heat":l?this.teams?`Team ${Qi[i.team]} holds the block`:"Last sniper standing":this.teams?`Team ${Qi[s.team]} holds the block`:`${this._nm(s.id)} holds the block`,u=this.teams&&e.standings.teams?`${Qi[0]} ${e.standings.teams[0]} \xB7 ${e.standings.teams[1]} ${Qi[1]}${s.timeout?" \xB7 on the clock":""}`:s.timeout?"decided on the clock":`${Fb(this.time)} on the clock`,f=a.shots?Math.round(100*a.hits/a.shots):0,d=this.netS.respawn?o.findIndex(x=>x.id===n)+1:a.place||o.findIndex(x=>x.id===n)+1,p=o.map((x,m)=>`<tr class="${x.id===n?"me":""}${this.teams?" t"+x.team:""}"><td>${m+1}</td><td>${x.id===n?"YOU":Ub(this._nm(x.id))}${x.bot?" <s>AI</s>":""}</td><td>${x.kills}</td><td>${x.deaths}</td><td>${x.heads}</td></tr>`).join("");this.hud.results({win:l,placeLabel:c?"draw":`placed ${d} of ${o.length}`,head:h,sub:u,stats:[[a.kills||0,"eliminations"],[a.heads||0,"headshots"],[f+"%","accuracy"],[a.deaths||0,"deaths"]],log:`<table class="board"><thead><tr><th>#</th><th>sniper</th><th>kills</th><th>deaths</th><th>heads</th></tr></thead><tbody>${p}</tbody></table>`}),this.hud.show("results"),this.hud.netResults(!0,this.netRoom&&this.netRoom.isHost())}}var Ub=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);var Xh=L,Sr=(r,t,e)=>Math.min(e,Math.max(t,r)),br=(r,t,e)=>r+(t-r)*e,as=new Xh,Us=new Xh,Os=new Xh,Vd=r=>`${Math.floor(r/60)}:${String(Math.floor(r%60)).padStart(2,"0")}`,$a=class{constructor({gfx:t,assets:e,city:i,models:n,opts:s={}}){this.gfx=t,this.city=i,this.models=n,this.opts=s,this.arena=new Th(e.arena,i.bvh),this.audio=new Eh,this.input=new Ah(t.canvas),this.hud=new Rh(this);let o=t.post.uRes.value,a=t.scene;this.fx={threads:new Ph(a,o),particles:new Ih(a,o),decals:new Lh(a),curtain:vg(a),hints:Mg(a,this.arena,o),rain:Sg(a,t.isMobile?500:900)},this.fp=new Nh(t,n),this.player=new Bh(this),this.proto=new Va(n.cop);let l=Eg.slice().sort(()=>Math.random()-.5);this.bots=[];for(let c=0;c<7;c++)this.bots.push(new zh(this,c+1,l[c],this.proto,n.weapons.rifle_tp));this.actors=[this.player,...this.bots],this.angel=new Vh(this,n.angel,n.mats),i.sky.material.uniforms.uAngel.value=this.angel.eye,this.zone={cx:0,cz:0,r:84,nextR:84,phase:0,shrinking:!1,toNext:60,phaseAge:0,dps:0},this.Z=this.arena.zone,this.calm=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),this.calm&&(t.post.uGrain.value=.035),this.lockHintT=0,this.state="title",this.time=0,this.clock=0,this.timeScale=1,this.slowT=0,this.weaponsFree=!1,this.listenerPos=new Xh,this.stats={},this.botSigma=1,this.level=1,this.botSigmaPlayer=1.2,this.botEye=1,this.botAim=1,this.botCrowd=2,this.botSigmaBot=2,this.log=[],this.orbit=Math.random()*6,this.glintT=0,this.heartT=0,this.tickT=0,this.fpsAcc=0,this.fpsN=0,this.resultsShown=!1,this.simSpeed=s.sim?s.speed||6:1,this.bots.forEach(c=>{c.rig.root.visible=!1}),this.soloBots=this.bots,this.puppets=[],this.net=null,this.teams=!1,this._ui()}_ui(){let t=this.hud,e=this.input,i=f=>document.getElementById(f);t.keysLegend(e.touch||this.gfx.isMobile),i("deploy").addEventListener("click",()=>this.start()),i("again").addEventListener("click",()=>this.start()),i("resume").addEventListener("click",()=>this.resume()),i("quit").addEventListener("click",()=>this.toTitle()),i("sens").addEventListener("input",f=>{e.sens=+f.target.value;try{localStorage.setItem("sc.sens",f.target.value)}catch{}});try{let f=localStorage.getItem("sc.sens");f&&(i("sens").value=f,e.sens=+f)}catch{}let n=(f,d,p,x)=>{let m=i(f);m.addEventListener("click",()=>{let g=m.getAttribute("aria-pressed")!=="true";m.setAttribute("aria-pressed",g),m.textContent=g?d:p,x(g)})},s=i("fsb"),o=i("app");s&&(!document.fullscreenEnabled||!o.requestFullscreen?s.hidden=!0:(s.addEventListener("click",()=>{try{let f=document.fullscreenElement?document.exitFullscreen():o.requestFullscreen();f&&f.catch&&f.catch(()=>{s.hidden=!0})}catch{s.hidden=!0}}),document.addEventListener("fullscreenchange",()=>{let f=!!document.fullscreenElement;s.setAttribute("aria-pressed",f),s.textContent=f?"FULL SCREEN ON":"FULL SCREEN"})));let a=["RECRUIT","MARKSMAN","GHOST"],l=i("aib"),c=f=>{this.level=f,l.textContent="RIVALS \xB7 "+a[f];try{localStorage.setItem("sc.ai",String(f))}catch{}},h=1,u=!1;try{let f=localStorage.getItem("sc.ai");(f==="0"||f==="1"||f==="2")&&(h=+f,u=!0)}catch{}!u&&this.gfx.isMobile&&(h=0),this.level=h,l.textContent="RIVALS \xB7 "+a[h],l.addEventListener("click",()=>{u=!0,c((this.level+1)%3),this.audio.start(),this.audio.ui()}),n("snd","SOUND ON","SOUND OFF",f=>{this.audio.start(),this.audio.setMuted(!f)}),n("rainb","RAIN ON","RAIN OFF",f=>{this.fx.rain.visible=f}),e.onLockChange=f=>{!f&&this.state==="live"&&this.player.alive&&!e.touch&&!e.lockFailed&&!this.opts.sim&&this.pause(),e.lockFailed&&!this._lockHint&&this.state==="live"&&!e.touch&&(this._lockHint=!0,this.lockHintT=1.6)},e.onLockError=()=>{this.state==="live"&&this.player.alive&&!this.opts.sim&&(this.pause(),t.el.psub.textContent="the browser needs a second before it hands the mouse back \xB7 press resume again")},e.onTouchMode=()=>{t.keysLegend(!0),document.getElementById("app").classList.add("touch"),this.state==="live"&&t.show(this.player.alive?"play":"spectate")},e.onStick=(f,d,p,x,m)=>t.stick(f,d,p,x||0,m||0),e.bindButton(i("b-fire"),"fire","fire"),e.bindButton(i("b-ads"),"ads","toggle"),e.bindButton(i("b-jump"),"jump","tap"),e.bindButton(i("b-crouch"),"crouch","toggle"),e.bindButton(i("b-reload"),"reload","tap"),e.bindButton(i("b-swap"),"swap","tap"),e.bindButton(i("b-use"),"use","tap"),e.bindButton(i("b-zoom"),"zoom","tap"),i("b-pause").addEventListener("touchstart",f=>{f.preventDefault(),this.state==="live"&&this.pause()},{passive:!1}),i("b-pause").addEventListener("click",()=>{this.state==="live"&&this.pause()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="live"&&this.player.alive&&!this.opts.sim&&this.pause()})}start(){this.net&&this.leaveNet&&this.leaveNet(),this.bots=this.soloBots,this.actors=[this.player,...this.soloBots];let t=this.arena,e=this.player;this.audio.start(),this.audio.ui(),this.hud.fade(0);for(let o of this.actors)o.reset();this.fx.threads.clear(),this.fx.particles.clear(),this.fx.decals.clear(),this.angel.reset();let i=t.spawns.map((o,a)=>a).sort(()=>Math.random()-.5),n=(o,a)=>Math.atan2(o,a);this.actors.forEach((o,a)=>{let l=t.spawns[i[a]];as.set(l.spawnPt[0],l.spawnPt[1],l.spawnPt[2]),o.isPlayer?(o.spawn(as,n(as.x,as.z)),o.roof=l.i,o.spawnRoof=l):(o.spawn(as,n(as.x,as.z),l.i),o.rig.root.visible=!0),o.outT=0,o.zoneAcc=0,o._gazed=!1}),this.opts.sim&&(e.alive=!1,e.hp=0,e.place=9);let s=this.level;this.botSigmaPlayer=[2,1.2,.75][s],this.botEye=[.6,1,1.35][s],this.botAim=[1.35,1,.7][s],this.botCrowd=[1,2,3][s],this.time=0,this.timeScale=1,this.slowT=0,this.weaponsFree=!1,this.stats={traversals:0,dmg:0},this.log=[],this.winner=null,this.resultsShown=!1,this.overT=0,this.deathInfo=null,this.gazeWarned=-1,this.gazeDone=-1,this.zoneWarned=-1,this.lastTwo=!1,this.introT=0,e.locked=!0,this.state="live",this.input.enabled=!0,this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.setToggle("crouch",!1,document.getElementById("b-crouch")),this.hud.show(e.alive?"play":"spectate"),this.hud.health(100),this.hud.lastHp=100,this.hud.weapon(e),this.hud.alive(this.actors,e),this.hud.el.feed.innerHTML="",this.hud.feedItems.length=0,this.hud.seen(!1,!1),e.alive&&this.hud.banner(`${e.spawnRoof.name} \xB7 0${e.spawnRoof.spawn+1}`,this.input.touch?5.5:3.2,!1,this.input.touch?"left thumb moves \xB7 right thumb looks \xB7 hold FIRE to aim, let go to shoot":"eight snipers \xB7 last one standing");try{this.gfx.canvas.focus({preventScroll:!0})}catch{}!this.input.touch&&!this.opts.sim&&this.input.requestLock(),this._zone(0)}pause(){if(this.net){if(this.netMenu)return;this.netMenu=!0,this.hud.show("pause"),this.input.enabled=!1,this.input.exitLock(),this.hud.el.psub.textContent="online matches keep running",this.hud.netPause(!0);return}this.state==="live"&&(this.state="paused",this.hud.show("pause"),this.input.enabled=!1,this.input.exitLock(),this.audio.setZip(0),this.hud.el.psub.textContent=this.input.touch?"the match is frozen":"the match is frozen \xB7 click resume to take the mouse back")}resume(){if(this.net){if(!this.netMenu)return;this.netMenu=!1,this.hud.show(this.player.alive?"play":"spectate"),this.input.enabled=!0,this.input.touch||this.input.requestLock();return}if(this.state==="paused"){this.state="live",this.hud.show(this.player.alive?"play":"spectate"),this.input.enabled=!0,this.audio.start();try{this.gfx.canvas.focus({preventScroll:!0})}catch{}this.input.touch||this.input.requestLock()}}toTitle(){this.net&&this.leaveNet&&this.leaveNet(),this.netMenu=!1,this.state="title",this.hud.show("title"),this.input.enabled=!1,this.input.exitLock();for(let t of this.bots)t.rig.root.visible=!1;this.fx.threads.clear(),this.angel.reset(),this.gfx.post.uFade.value=1,this.audio.setZone(0),this.audio.setZip(0)}flash(t){let e=this.gfx.post.uFlash;e.value=Math.max(e.value,t*(this.calm?.3:1))}_zone(t){if(this.net)return this._zoneNet(t);let e=this.Z,i=this.zone,n=this.time,s=0;for(;s+1<e.phases.length&&e.phases[s+1].t<=n;)s++;let o=e.phases[s],a=e.phases[Math.max(0,s-1)],l=e.phases[s+1],c=n-o.t;if(i.shrinking=s>0&&c<o.shrink,i.r=i.shrinking?br(a.r,o.r,c/o.shrink):o.r,i.nextR=i.shrinking?o.r:l?l.r:o.r,i.toNext=l?l.t-n:e.duration-n,i.phaseAge=c,i.dps=o.dps||5,i.phase=s,i.total=e.phases.length,ne.uZone.value.set(i.cx,i.cz,i.r,1),this.fx.curtain.scale.set(i.r,120,i.r),this.fx.curtain.material.uniforms.uR.value=i.r,!(t<=0)){if(l&&(i.toNext<=15&&this.zoneWarned<s&&(this.zoneWarned=s,this.hud.banner("the halo tightens in 15",2.6,!0,"white ring on the map = next safe ground"),this.audio.tick()),i.toNext<=5.5&&this.gazeWarned<s)){this.gazeWarned=s,this.angel.warn(),this.audio.choir(7.5,s>=3),this.hud.banner("the angel is opening its arms",3.4,!0,"break its line of sight",!0);for(let h of this.bots)h.hideFromAngel(this.angel.eye)}s>0&&this.gazeDone<s&&(this.gazeDone=s,this.angel.look(),this.flash(.22),s===e.phases.length-1?(this.angel.frenzy=!0,this.hud.banner("final halo",2.6,!1,"no roof is safe for long",!0)):this.hud.banner("the halo is closing",2.2,!0));for(let h of this.actors){if(!h.alive)continue;if(Math.hypot(h.pos.x-i.cx,h.pos.z-i.cz)>i.r){if(h.outT+=t,h.outT>2.5&&(h.zoneAcc+=i.dps*t,h.zoneAcc>=3)){let f=h.zoneAcc;h.zoneAcc=0,this.damage(h,f,null,{cause:"zone"})}}else h.outT=Math.max(0,h.outT-t*2),h.zoneAcc=0}}}_zoneNet(t){let e=this.zone,i=e.phase,n=this.netS,s=i>=this.Z.phases.length-1;ne.uZone.value.set(e.cx,e.cz,e.r,n.halo?1:0),this.fx.curtain.visible=n.halo,this.fx.curtain.scale.set(e.r,120,e.r),this.fx.curtain.material.uniforms.uR.value=e.r,!(t<=0)&&(s||(n.halo&&e.toNext<=15&&this.zoneWarned<i&&(this.zoneWarned=i,this.hud.banner("the halo tightens in 15",2.6,!0,"white ring on the map = next safe ground"),this.audio.tick()),n.angelGaze&&e.toNext<=5.5&&this.gazeWarned<i&&(this.gazeWarned=i,this.angel.warn(),this.audio.choir(7.5,i>=3),this.hud.banner("the angel is opening its arms",3.4,!0,"break its line of sight",!0))),i>0&&this.gazeDone<i&&(this.gazeDone=i,n.angelGaze&&(this.angel.look(),this.flash(.22)),s?(this.angel.frenzy=!0,n.halo&&this.hud.banner("final halo",2.6,!1,"no roof is safe for long",!0)):n.halo&&this.hud.banner("the halo is closing",2.2,!0)),this.player.alive&&(this.player.outT=n.halo&&Math.hypot(this.player.pos.x-e.cx,this.player.pos.z-e.cz)>e.r?(this.player.outT||0)+t:0))}gazeHit(t,e){this.net&&!this._gazeFromServer||(e&&(t.revealedUntil=this.time+5.5),t.isPlayer&&t.alive&&(this.flash(.3),e?(this.hud.banner("the angel sees you",2.6,!0,"your outline shows through walls",!0),this.audio.toll(5)):this.hud.banner("unseen",1.8,!0,"you were out of its sight")))}panOf(t){let e=this.player,i=e.alive?e.yaw:this.orbit+Math.PI/2;Os.copy(t).sub(this.listenerPos);let n=Math.hypot(Os.x,Os.z)||1;return(Os.x*Math.cos(i)-Os.z*Math.sin(i))/n*.85}onShot(t,e,i){if(!this.net)for(let n of this.bots)n.alive&&n!==t&&n.hear(t,e)}damage(t,e,i,n={}){if(this.net){t===this.player&&this.netDamageSelf(e,n);return}if(!(!t.alive||this.state==="title")&&!(t.isPlayer&&this.opts.god)){if(t.hp-=e,i&&i.isPlayer&&(this.stats.dmg+=Math.min(e,100)),t.isPlayer){let s=Sr(e/55,.25,1);this.gfx.post.uDamage.value=Math.max(this.gfx.post.uDamage.value,s),t.hurtT=.3,this.audio.hurt(),i&&this.hud.threat(i.pos,1),this.hud.health(t.hp),t.suppress=1}else t.onDamage(e,i);t.hp<=0&&this.kill(t,i,n)}}kill(t,e,i){t.alive=!1,t.hp=0,t.deathTime=this.time;let n=this.actors.filter(u=>u.alive).length;t.place=n+1;let s=i.cause==="zone"?"THE HALO":i.cause==="drop"||i.cause==="fall"?"THE STREET":null,o=s?"":i.zone===0?"head":i.wpn&&i.wpn.key==="pistol"?"sidearm":"",a=e?e.name:s||"\u2014";this.hud.feed(a,t.name,o,t.isPlayer||e&&e.isPlayer),this.log.push({t:this.time,k:a,v:t.name,how:o,red:t.isPlayer||e&&e.isPlayer}),e&&e.alive&&(e.kills++,e.hp=Math.min(100,e.hp+30),e.isPlayer&&(this.hud.health(e.hp),this.audio.kill(),this.slowT=.42,this.flash(.35)));let l=as.copy(t.pos);if(l.y+=.25,i.cause!=="drop"){let u=this.arena.raycast(Us.copy(l).setY(l.y+.6),Os.set(0,-1,0),4);u&&this.fx.decals.add(u.point,Os.set(0,1,0),.9+Math.random()*.4,0,3.5),t.isPlayer||this.fx.particles.motes(l,30)}let c=8-t.place,h=this.angel;this.fx.threads.addSoul(l.clone().setY(Math.max(l.y,6)),u=>h.wristPos(c,u)),this.audio.toll(8-n),t.isPlayer?(this.deathInfo={killer:a,cause:s,how:o},this.hud.show("spectate"),this.input.setToggle("ads",!1,document.getElementById("b-ads")),this.input.exitLock(),this.audio.setZip(0),this.deadFrom=this.gfx.camera.position.clone(),this.deadQ=this.gfx.camera.quaternion.clone()):t.die(),this.hud.alive(this.actors,this.player),n===2&&!this.lastTwo&&(this.lastTwo=!0,this.player.alive&&this.hud.banner("two left",2.4,!1,"one thread away",!0)),n<=1&&this._finish(this.actors.find(u=>u.alive)||e||t)}_finish(t){this.winner||(this.winner=t,t.place=1,t.isPlayer&&(this.slowT=1.6,this.audio.stinger(!0)),this.overT=0,this.state="over")}_timeout(){let t=this.actors.filter(e=>e.alive).sort((e,i)=>i.hp-e.hp||i.kills-e.kills||Math.hypot(e.pos.x,e.pos.z)-Math.hypot(i.pos.x,i.pos.z));t.forEach((e,i)=>{e.place=i+1}),this.hud.banner("judgement",3,!1,"time \xB7 highest health takes the block",!0),this._finish(t[0])}_results(){let t=this.player,e=this.winner,i=t.place===1;this.resultsShown=!0,this.input.enabled=!1,this.input.exitLock(),i||this.audio.stinger(!1);let n=t.shots?Math.round(100*t.hits/t.shots):0,s=t.alive?this.time:t.deathTime,o=this.deathInfo,a=this.time>=this.Z.duration-.05&&this.actors.filter(h=>h.alive).length>1,l=i?a?"Strongest at the bell":"Last sniper standing":o&&o.cause==="THE HALO"?"Taken by the halo":o&&o.cause==="THE STREET"?"The street took you":o?`Eliminated by ${o.killer}`:"Out of time",c=this.log.map(h=>`<b>${Vd(h.t)}</b> ${h.red?"<i>":""}${h.k} \u2501 ${h.v}${h.how?" \xB7 "+h.how:""}${h.red?"</i>":""}`).join(" &nbsp; ");this.hud.results({win:i,placeLabel:`placed ${t.place} of 8`,head:l,sub:i?a?"time ran out \xB7 highest health takes the block":`${Vd(this.time)} on the clock`:e?`${e.name} holds the block`:"the match is still running",stats:[[t.kills,"eliminations"],[t.heads,"headshots"],[n+"%","accuracy"],[Vd(s),"survived"],[this.stats.traversals,"roof crossings"]],log:c}),this.hud.show("results")}_post(t){let e=this.gfx,i=this.player,n=e.post,s=this.state==="live"||this.state==="over";n.uDamage.value=Math.max(0,n.uDamage.value-t*1.6),n.uFlash.value=Math.max(0,n.uFlash.value-t*1.4),n.uKick.value=Math.max(0,n.uKick.value-t*7);let o=i.alive&&s,a=o?Sr((38-i.hp)/38,0,1):0;n.uLowHP.value=br(n.uLowHP.value,a,1-Math.exp(-t*4)),n.uInk.value=br(n.uInk.value,a*.55,1-Math.exp(-t*3));let l=o&&Math.hypot(i.pos.x-this.zone.cx,i.pos.z-this.zone.cz)>this.zone.r?1:0;n.uZoneOut.value=br(n.uZoneOut.value,l,1-Math.exp(-t*5)),n.uGlitch.value=this.calm?0:n.uZoneOut.value*.55+(ne.uPulse.value.w>.6?.25:0),this.audio.setZone(n.uZoneOut.value),n.uVignette.value=o&&i.scoped?0:.25,ne.uScope.value=br(ne.uScope.value,o&&i.scoped?1:0,1-Math.exp(-t*10))}update(t){let e=this.gfx,i=this.player,n=this.input,s=e.post;this.clock+=t,ne.uTime.value=this.clock,n.poll(t),n.pressed("pause")&&(this.net?this.state==="live"&&this.pause():this.state==="live"&&!this.opts.sim?this.pause():this.state==="paused"&&this.resume()),n.pressed("mute")&&document.getElementById("snd").click();let o=this.state==="live"||this.state==="over";if(o){this.slowT>0?(this.slowT-=t,this.timeScale=br(this.timeScale,.22,1-Math.exp(-t*30))):this.timeScale=br(this.timeScale,1,1-Math.exp(-t*6));let l=!i.alive&&this.state==="live"&&!this.net?this.opts.sim?this.simSpeed:2.2:1,c=l>1.5?Math.ceil(l):1;for(let h=0;h<c;h++)this._step(t*this.timeScale*l/c,t,h===0)}else this.angel.update(t),this.fx.threads.update(),this.fx.particles.update(t);let a=e.camera;if(this.state==="title"||!i.alive&&o||this.state==="paused"&&!i.alive){this.orbit+=t*.035;let l=0,c=24,h=0,u=118,f=52,d=o&&this.deathInfo&&this.time-i.deathTime<2.2&&this.deadFrom;if(a.fov!==50&&(a.fov=50,a.updateProjectionMatrix()),d){let p=Sr((this.clock-(this._deadClock||(this._deadClock=this.clock)))/1,0,1);a.position.copy(this.deadFrom),a.position.y=Math.max(i.pos.y+.22,this.deadFrom.y-p*p*1.5),a.quaternion.copy(this.deadQ),a.rotateZ(p*.9),a.rotateX(-p*.3)}else{if(this._deadClock=0,this.state!=="title"){let p=this.actors.filter(x=>x.alive);p.length&&(l=p.reduce((x,m)=>x+m.pos.x,0)/p.length*.5,h=p.reduce((x,m)=>x+m.pos.z,0)/p.length*.5),u=Math.min(96,Math.max(58,this.zone.r+40)),f=44+this.zone.r*.16}else u=92,f=34,c=30;a.position.set(l+Math.cos(this.orbit)*u,f,h+Math.sin(this.orbit)*u),a.lookAt(l,c,h)}this.listenerPos.copy(a.position)}else this.listenerPos.copy(a.position);this._post(t),this.city.sky.position.copy(a.position),this.state==="over"?(this.overT+=t,!this.resultsShown&&this.overT>(this.winner&&this.winner.isPlayer?2.6:1.6)&&(this.net?this._netResults():this._results())):this.state==="live"&&!i.alive&&!this.resultsShown&&!this.opts.sim&&!this.net&&this.time-i.deathTime>2.6&&this._results(),this.resultsShown&&this.winner&&this._resWin!==this.winner&&(this._resWin=this.winner,this.winner.isPlayer||(this.hud.el.rsub.textContent=`${this.winner.name} holds the block`)),this.hud.update(t,this),n.endFrame()}_step(t,e,i){let n=this.player,s=this.input,o=this.hud;if(this.net?(this.state==="live"||this.state==="over")&&this._netStep(t,e):this.state==="live"&&(this.time+=t,this.introT+=t,n.locked&&this.introT>1.3&&(n.locked=!1),this.lockHintT>0&&(this.lockHintT-=t,this.lockHintT<=0&&n.alive&&o.banner("this frame cannot capture the mouse",5,!0,"move the cursor to look \xB7 rest it at an edge to keep turning")),!this.weaponsFree&&this.time>=6&&(this.weaponsFree=!0,n.alive&&(o.banner("weapons free",1.8,!0),this.audio.tick())),this._zone(t),this.time>=this.Z.duration&&!this.winner&&this._timeout()),n.alive&&i&&n.update(t,s),!this.net)for(let h of this.bots)h.update(t);if(this.angel.update(t),this.fx.threads.update(),this.fx.particles.update(t),!i)return;if(n.alive){let h=this.gfx.camera,u=n.mode==="link"&&n.link.kind!=="pad"||n.mode==="mantle";this.fp.update(e,{weapon:n.cur,ads:n.ads,hidden:n.scoped,bob:n.grounded?Math.min(1,n.speed/5):0,phase:n.walkPhase,land:n.landDip,lower:(n.sprinting?1:0)+(u?1.6:0),swap:n.swapTo?n.swapT:0,bolt:n.boltT,reload:n.reloadT,lookX:s.lookX,lookY:s.lookY});let f=h.getWorldDirection(as),d=this.arena.raycast(h.position,f,400),p=d?d.distance:-1,x=null;if(n.ads>.5){let _=Ld(this.actors,h.position,f,d?d.distance:400,n);if(_)x=_.actor;else{let M=n.scoped?.012:.03;for(let v of this.bots){if(!v.alive)continue;Us.copy(v.chest()).sub(h.position);let S=Us.length(),w=Math.acos(Sr(Us.dot(f)/S,-1,1));w<M&&this.arena.los(h.position,v.chest())&&(M=w,x=v)}}}o.target(x),o.scope(n.scoped,n.weapon.zooms[Math.min(n.zoomIdx,n.weapon.zooms.length-1)],x?h.position.distanceTo(x.chest()):p,n.focus,n.gasp,s.touch);let m=1;if(s.touch&&n.ads>.6)for(let _ of this.net?this.puppets:this.bots){if(!_.alive||this.teams&&_.team===n.team)continue;Us.copy(_.chest()).sub(h.position);let M=Us.length();if(Math.acos(Sr(Us.dot(f)/M,-1,1))<(n.scoped?.02:.06)&&this.arena.los(h.position,_.chest())){m=.5;break}}n.aimSlow=m,o.prompt(n.prompt&&!n.scoped?n.prompt.text:null,s.touch,n.prompt&&n.prompt.passive),o.action(n.reloadT>=0?n.reloadT:n.boltT>=0?n.boltT:n.swapTo?n.swapT:-1);let g=n.roof>=0?this.arena.roofs[n.roof]:null;if(o.where(n.mode==="link"?this.arena.linkLabel(n.link):g?g.spawn>=0?`${g.name} \xB7 0${g.spawn+1}`:g.name:"in the air"),o.seen(n.revealedUntil>this.time,this.angel.state==="warn"),this.heartT-=e,(n.hp<38||n.holding)&&this.heartT<=0&&(this.heartT=n.holding?1.05:.5+n.hp/90,this.audio.heart()),n.outT>.2&&(this.tickT-=e,this.tickT<=0&&(this.tickT=.8,this.audio.tick())),this.glintT-=e,this.glintT<=0){this.glintT=.09;for(let _ of this.bots)if(_.alive&&_.state==="engage"&&_.target===n&&_.crouchK<.5){let M=_.eye(Us);this.fx.particles.glint(Os.set(M.x,M.y-.03,M.z),7+9*Sr(_.settle/(_.aimNeed||1),0,1))}}}let a=this.zone,l,c="";this.weaponsFree?this.net&&!this.netS.halo?l=this.netS.respawn?"respawn on":"no halo":a.shrinking?(l="halo closing",c="hot"):a.phase>=a.total-1?(l="final halo",c="hot"):(l=`halo holds \xB7 ${Math.ceil(a.toNext)}s`,c=a.toNext<=15?"warn":""):(l=`weapons free in ${Math.max(1,Math.ceil(6-this.time))}`,c="warn"),o.time(this.time,this.net?this.netS.timeLimit:this.Z.duration,l,c),this.audio.setTension(Sr((8-this.actors.filter(h=>h.alive).length)/7*.6+a.phase/5*.4,0,1))}};Lg($a);function Ng(){let t=new URLSearchParams(location.hash.slice(1)).get("server")||window.SC_SERVER||"";if(t)return t.replace(/^http/,"ws").replace(/\/?$/,"")+(/\/ws$/.test(t)?"":"/ws");let e=document.querySelector('meta[name="sc:server"]');return e&&e.content==="same-origin"?(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws":e&&e.content?e.content:null}function Dg(){let r=/\/r\/([A-Za-z0-9]{5,8})\b/.exec(location.pathname);if(r)return r[1].toUpperCase();let e=new URLSearchParams(location.hash.slice(1)).get("room");return e?e.toUpperCase():null}function Fg(r){let t=document.querySelector('meta[name="sc:server"]');return t&&t.content==="same-origin"?`${location.origin}/r/${r}`:`${location.href.split("#")[0]}#room=${r}`}var qh={get(r){try{return sessionStorage.getItem(r)||localStorage.getItem(r)}catch{return null}},set(r,t,e){try{(e?localStorage:sessionStorage).setItem(r,t)}catch{}}},Yh=class{constructor(t){this.url=t,this.ws=null,this.handlers={},this.rtt=.12,this.open=!1,this.closed=!1,this.id=null,this.token=qh.get("sc.token"),this.name=qh.get("sc.name")||"",this.queue=[],this.retry=0,this.seq=0,this.clockT=0,this.clockAt=0,this.haveClock=!1}on(t,e){return(this.handlers[t]=this.handlers[t]||[]).push(e),this}emit(t,e){for(let i of this.handlers[t]||[])i(e);for(let i of this.handlers["*"]||[])i(e)}connect(){if(this.ws||this.closed)return;let t;try{t=new WebSocket(this.url)}catch(e){this.emit("status",{t:"status",state:"failed",why:String(e.message||e)});return}this.ws=t,this.emit("status",{t:"status",state:"connecting"}),t.onopen=()=>{this.open=!0,this.retry=0,this._send({t:"hello",name:this.name||void 0,token:this.token||void 0,v:1});for(let e of this.queue.splice(0))this._send(e);this.emit("status",{t:"status",state:"open"}),this._pinger()},t.onmessage=e=>{let i;try{i=JSON.parse(e.data)}catch{return}this._recv(i)},t.onclose=()=>{if(this.open=!1,this.ws=null,clearInterval(this.pingT),this.closed)return;this.emit("status",{t:"status",state:"reconnecting"});let e=Math.min(8e3,400*2**this.retry++);setTimeout(()=>this.connect(),e)},t.onerror=()=>{}}close(){this.closed=!0,clearInterval(this.pingT),this.ws&&this.ws.close()}_pinger(){clearInterval(this.pingT);let t=()=>this._send({t:"ping",c:performance.now(),r:+this.rtt.toFixed(3)});t(),this.pingT=setInterval(t,2e3)}_send(t){this.ws&&this.open&&this.ws.send(JSON.stringify(t))}send(t){this.open?this._send(t):t.t!=="in"&&t.t!=="ping"&&this.queue.push(t)}_recv(t){if(t.t==="welcome")this.id=t.id,this.token=t.token,qh.set("sc.token",t.token);else if(t.t==="pong"){let e=(performance.now()-t.c)/1e3;this.rtt=this.rtt*.75+e*.25;return}else t.t==="s"?this._clock(t.s.t):t.t==="start"&&(this.haveClock=!1,this._clock(t.snap.t));this.emit(t.t,t)}_clock(t){let e=performance.now()/1e3;if(!this.haveClock||Math.abs(this.now()-t)>.5){this.clockT=t,this.clockAt=e,this.haveClock=!0;return}let i=this.now(),n=t+.5/30;this.clockT=i+(n-i)*.1,this.clockAt=e}now(){return this.clockT+(performance.now()/1e3-this.clockAt)}setName(t){this.name=t,qh.set("sc.name",t,!0),this.open&&this.send({t:"name",name:t})}};var Zt=r=>document.getElementById(r),Za=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ug=["RECRUIT","MARKSMAN","GHOST"],Kh=class{constructor(t){this.g=t,this.url=Ng(),this.net=null,this.room=null,this.toastT=0;let e=Zt("online-btn");if(!this.url)return;e.hidden=!1,e.disabled=!1,e.addEventListener("click",()=>this.open()),Zt("ob-back").addEventListener("click",()=>{this.g.hud.show("title")}),Zt("mk").addEventListener("click",()=>{this._name()&&(this._connect(),this.net.send({t:"create",settings:this._lastSettings()}),this._stat("making a room\u2026"))}),Zt("jn").addEventListener("click",()=>this._join()),Zt("code").addEventListener("keydown",s=>{s.key==="Enter"&&this._join()}),Zt("code").addEventListener("input",s=>{s.target.value=s.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"")}),Zt("nm").addEventListener("keydown",s=>{s.key==="Enter"&&Zt("mk").click()}),Zt("lcopy").addEventListener("click",()=>this._copy(Fg(this.room.code),"invite link copied")),Zt("lcopyc").addEventListener("click",()=>this._copy(this.room.code,"code copied")),Zt("lleave").addEventListener("click",()=>this.leave()),Zt("lready").addEventListener("click",()=>{let s=this._me();this.net.send({t:"ready",v:!(s&&s.ready)})}),Zt("lstart").addEventListener("click",()=>this.net.send({t:"start"})),Zt("tolobby").addEventListener("click",()=>this.net.send({t:"lobby"})),Zt("rleave").addEventListener("click",()=>this.leave()),t.leaveNet=()=>this.leave(!0);let i="";try{i=localStorage.getItem("sc.name")||""}catch{}Zt("nm").value=i;let n=Dg();n&&(Zt("code").value=n,this.open(),i&&setTimeout(()=>this._join(),50))}open(){this.g.audio.start(),this.g.hud.show("online"),setTimeout(()=>(Zt("nm").value?Zt("code"):Zt("nm")).focus(),30)}_name(){let t=Zt("nm").value.trim().replace(/[^\p{L}\p{N} _.\-]/gu,"").slice(0,16);if(!t)return this._stat("type a name first",!0),Zt("nm").focus(),null;Zt("nm").value=t,this.net?this.net.setName(t):this._pendingName=t;try{localStorage.setItem("sc.name",t)}catch{}return t}_join(){if(!this._name())return;let t=Zt("code").value.trim().toUpperCase();if(t.length<5){this._stat("room codes have 5 letters",!0);return}this._connect(),this.net.send({t:"join",code:t}),this._stat("joining "+t+"\u2026")}_lastSettings(){try{return JSON.parse(localStorage.getItem("sc.rules")||"null")||void 0}catch{return}}_stat(t,e){let i=Zt("netstat");i.textContent=t,i.classList.toggle("bad",!!e)}toast(t,e=3200){let i=Zt("toast");i.textContent=t,i.hidden=!1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>{i.hidden=!0},e)}_copy(t,e){let i=()=>this.toast(e,1800);try{navigator.clipboard.writeText(t).then(i,()=>this._fallbackCopy(t,i))}catch{this._fallbackCopy(t,i)}}_fallbackCopy(t,e){let i=document.createElement("textarea");i.value=t,document.body.appendChild(i),i.select();try{document.execCommand("copy"),e()}catch{this.toast(t,6e3)}i.remove()}isHost(){return this.room&&this.net&&this.room.host===this.net.id}_me(){return this.room&&this.room.members.find(t=>t.id===this.net.id)}_connect(){if(this.net)return;let t=this.net=new Yh(this.url);this._pendingName&&(t.name=this._pendingName),t.on("status",e=>{e.state==="reconnecting"&&this.toast("connection lost \xB7 reconnecting\u2026",2500),e.state==="failed"&&this._stat("could not reach the room server",!0)}),t.on("welcome",()=>{this._pendingName&&t.setName(this._pendingName)}),t.on("error",e=>{this.toast(e.msg),this._stat(e.msg,!0)}),t.on("notice",e=>this.toast(e.text,2600)),t.on("left",e=>{this.room=null,this.g.net&&this.g.stopNet(),this.g.state="title",this.g.hud.show("online"),this._stat(e.why==="kicked"?"the host removed you from the room":"you left the room",e.why==="kicked")}),t.on("room",e=>this._room(e)),t.on("start",e=>{this.g.startNet(t,e,this),this._setUrl(this.room?this.room.code:null)}),t.on("s",e=>this.g.onNetSnap(e)),t.on("chat",e=>this.toast(`${e.from}: ${e.text}`,4e3)),t.connect()}leave(t){this.net&&this.net.send({t:"leave"}),this.room=null,this.g.net&&this.g.stopNet(),this._setUrl(null),t||this.g.toTitle()}_setUrl(t){try{let e=new URLSearchParams(location.hash.slice(1));t?e.set("room",t):e.delete("room");let i=e.toString();history.replaceState(null,"",location.pathname+location.search+(i?"#"+i:""))}catch{}}_room(t){let e=!this.room;this.room=t,this._setUrl(t.code),t.state==="lobby"?(this.g.net&&(this.g.stopNet(),this.g.state="title"),this.g.hud.show("lobby"),this.render(),e&&this._stat("")):t.state==="results"&&this.g.net&&this.g.resultsShown?this.g.hud.netResults(!0,this.isHost()):this.g.net||(this.g.hud.show("lobby"),this.render(),Zt("lnote").textContent="a match is running in this room \xB7 you will join the next one");try{this.isHost()&&localStorage.setItem("sc.rules",JSON.stringify(t.settings))}catch{}}render(){let t=this.room,e=t.settings,i=this.isHost(),n=this._me(),s=e.mode!=="ffa",o=t.state==="lobby";Zt("lcode").textContent=t.code,Zt("lhostonly").hidden=i,Zt("lmode").textContent=`${e.mode==="ffa"?"free for all":e.mode} \xB7 ${t.members.length+t.bots.length} / ${t.slots} snipers`;let a=p=>`<div class="who${p.id===this.net.id?" me":""}${p.online?"":" off"}"><span class="n">${Za(p.name)}</span>${p.id===t.host?'<span class="st host">HOST</span>':`<span class="st${p.ready?" ok":""}">${p.ready?"READY":p.online?"NOT READY":"OFFLINE"}</span>`}${i&&p.id!==this.net.id&&o?`<button data-kick="${Za(p.id)}" title="remove from room" aria-label="remove ${Za(p.name)}">\xD7</button><button data-host="${Za(p.id)}" title="make host" aria-label="make ${Za(p.name)} host">\u2605</button>`:""}</div>`,l=p=>`<div class="who bot"><span class="n">AI sniper</span><span class="st">${Ug[e.botSkill]}</span></div>`,c="";if(s){let p=t.slots/2;for(let x of[0,1]){let m=t.members.filter(M=>M.team===x),g=t.bots.filter(M=>M.team===x),_=p-m.length-g.length;c+=`<div class="tcol t${x}"><h3>TEAM ${Qi[x]}${o&&n&&n.team!==x&&m.length<p?`<button data-team="${x}">JOIN</button>`:""}</h3>${m.map(a).join("")}${g.map(l).join("")}${_>0?`<div class="empty">${_} open</div>`:""}</div>`}}else{let p=t.slots-t.members.length-t.bots.length;c=`<div class="tcol"><h3>SNIPERS</h3>${t.members.map(a).join("")}${t.bots.map(l).join("")}${p>0?`<div class="empty">${p} open \xB7 share the code</div>`:""}</div>`}let h=Zt("lteams");h.innerHTML=c,h.classList.toggle("two",s),h.querySelectorAll("[data-team]").forEach(p=>p.addEventListener("click",()=>this.net.send({t:"team",team:+p.dataset.team}))),h.querySelectorAll("[data-kick]").forEach(p=>p.addEventListener("click",()=>this.net.send({t:"kick",id:p.dataset.kick}))),h.querySelectorAll("[data-host]").forEach(p=>p.addEventListener("click",()=>this.net.send({t:"host",id:p.dataset.host})));let u=Math.max(0,t.slots-t.members.length),f=[["mode","mode",[["ffa","FREE FOR ALL"],["2v2","2 V 2"],["4v4","4 V 4"]]],...s?[]:[["room size","maxPlayers",[2,3,4,5,6,8].map(p=>[p,String(p)])]],["AI snipers","bots",Array.from({length:u+1},(p,x)=>[x,String(x)])],["AI skill","botSkill",Ug.map((p,x)=>[x,p])],["lives","respawn",[[!1,"ONE LIFE"],[!0,"RESPAWN"]]],...e.respawn?[["respawn after","respawnDelay",[3,5,8,12].map(p=>[p,p+" S"])],["win at","scoreLimit",[[0,"CLOCK"],[10,"10"],[20,"20"],[30,"30"]]]]:[],["time","timeLimit",[180,300,420,600].map(p=>[p,p/60+" MIN"])],["the halo","halo",[[!0,"CLOSES"],[!1,"OFF"]]],["the angel looks","angelGaze",[[!0,"ON"],[!1,"OFF"]]],["headshots only","headshotsOnly",[[!1,"NO"],[!0,"YES"]]],...s?[["friendly fire","friendlyFire",[[!1,"OFF"],[!0,"ON"]]]]:[]];Zt("lset").innerHTML=f.map(([p,x,m])=>`<div class="row"><span class="lab">${p}</span><div class="seg">${m.map(([g,_])=>`<button type="button" data-k="${x}" data-v='${JSON.stringify(g)}' aria-pressed="${e[x]===g}" ${i&&o?"":"disabled"}>${_}</button>`).join("")}</div></div>`).join(""),Zt("lset").querySelectorAll("button[data-k]").forEach(p=>p.addEventListener("click",()=>{this.isHost()&&this.net.send({t:"settings",patch:{[p.dataset.k]:JSON.parse(p.dataset.v)}})})),Zt("lstart").hidden=!i||!o,Zt("lready").hidden=i||!o,Zt("lready").textContent=n&&n.ready?"Not ready":"Ready",Zt("lready").classList.toggle("red",!(n&&n.ready));let d=t.members.filter(p=>p.online&&!p.ready&&p.id!==t.host).map(p=>p.name);Zt("lnote").textContent=o?i?d.length?`waiting for ${d.join(", ")}`:t.members.length+t.bots.length<2?"add an AI sniper or share the code":"everyone is ready":n&&n.ready?"waiting for the host to start":"press ready when you are":"a match is running in this room"}};var s2=new URLSearchParams(location.search),Ja=r=>document.getElementById(r);async function Ob(){h0();let r=Ja("view"),t=Ja("loadbar").firstElementChild,e=Ja("loadtxt"),i=(M,v)=>{t.style.width=Math.round(M*100)+"%",v&&(e.textContent=v)},n;try{n=new $c(r)}catch{throw new Error("This device could not start WebGL 2, which the game needs.")}if(!n.renderer.capabilities.isWebGL2)throw new Error("This browser does not offer WebGL 2, which the game needs.");let s={texSize:n.isMobile?512:1024,aniso:n.isMobile?2:8,shadow:n.isMobile?2048:4096};i(.02,"loading the district");let o=await p0(M=>i(.02+M*.68));i(.72,"raising the buildings"),await new Promise(M=>setTimeout(M,30));let a=await ag(n,o,s);i(.88,"waking the angel"),await new Promise(M=>setTimeout(M,30));let l=await pg(o.models,o.pack);n.renderer.shadowMap.needsUpdate=!0;let c=new $a({gfx:n,assets:o,city:a,models:l,opts:{}});try{n.renderer.setRenderTarget(n.rt),n.renderer.compile(n.scene,n.camera),n.renderer.compile(n.fpScene,n.fpCamera),n.renderer.setRenderTarget(null)}catch{}i(1,"ready"),c.hud.ready(),c.online=new Kh(c),document.fonts&&document.fonts.load&&Promise.all([document.fonts.load('900 64px "Noto Sans HK"',"\u72D9\u64CA\u4E4B\u57CE\u5929\u4F7F\u7D05\u5340\u9999\u6E2F\u4E2D\u74B0\u9152\u5E97\u8336\u6A13\u7576\u92EA"),document.fonts.load('italic 800 64px "Barlow Condensed"',"0123456789 SNIPER CITY")]).then(()=>a.tex.userData.repaint()).catch(()=>{});let h=performance.now(),u=0,f="",d=!1,p=()=>c.player.alive&&(c.state==="live"||c.state==="over"||c.state==="paused")&&!c.player.scoped;d&&(window.__frame=(M=1/60,v=1)=>{for(let S=0;S<v;S++)n.resize(),c.update(M),n.render(p())},window.__tick=(M=1/60,v=1)=>{for(let S=0;S<v;S++)c.update(M)},window.__frame(),window.__ready=!0);let x={t:0,n:0,slow:0,fast:0,sum:0,cap:1,capT:0,prev:0,dropped:!1,noGain:0,base:1,on:!0,quiet:4};function m(M,v){if(!x.on)return;if(x.quiet>0){x.quiet-=M;return}if(M>=.099)return;let S=M*1e3;if(x.t+=M,x.n++,x.sum+=S,S>25&&x.slow++,S<19&&x.fast++,x.t<1.5||x.n<12)return;let w=x.sum/x.n,y=x.slow/x.n,b=x.fast/x.n;if(x.t=0,x.n=0,x.sum=0,x.slow=0,x.fast=0,x.dropped)if(x.dropped=!1,w>x.prev*.92){if(++x.noGain>=2){x.on=!1,n.scale=x.base;return}}else x.noGain=0;y>.5&&n.scale>.5?(x.noGain||(x.base=n.scale),x.prev=w,x.dropped=!0,x.cap=Math.max(.5,n.scale-.1),x.capT=v+3e4,n.scale=x.cap):b>.95&&n.scale<1&&(n.scale+.05<=x.cap+1e-6||v>x.capT)&&(n.scale=Math.min(1,n.scale+.05))}function g(M){if(requestAnimationFrame(g),d)return;let v=(M-h)/1e3;h=M,v>.1&&(v=.1),v<=0&&(v=1/120),n.resize(),c.update(v),n.render(p()),u++,c.state!==f&&(f=c.state,x.quiet=Math.max(x.quiet,2.5)),m(v,M),u===3&&(window.__ready=!0)}requestAnimationFrame(g);let _=new Proxy({},{get:()=>()=>{}})}Ob().catch(r=>{console.error(r),window.__err=String(r&&r.stack||r);let t=Ja("err");t&&(t.hidden=!1,t.textContent="Sniper City could not start: "+(r&&r.message?r.message:r));let e=Ja("loadtxt");e&&(e.textContent="could not load")});})();
