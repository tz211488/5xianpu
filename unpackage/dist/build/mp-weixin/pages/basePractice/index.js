(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basePractice/index"],{"1a83":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var u={musicScore:function(){return e.e("components/music-score/music-score").then(e.bind(null,"f95b"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"d210"))}},c=function(){var t=this,n=t.$createElement;t._self._c},r=[]},6211:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{customStyle:{height:"200rpx",width:"200rpx"}}},methods:{randomNum:function(t,n){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(n-t+1)+t,10);default:return 0}},update:function(){for(var t=[],n=0;n<5;n++)t.push(this.randomNum(1,8));console.log("orignal",t),this.$refs.music.update(t)},switchNotice:function(){this.$store.state.showNotice=!this.$store.state.showNotice}}};n.default=u},"815f":function(t,n,e){"use strict";e.r(n);var u=e("1a83"),c=e("fc8b");for(var r in c)"default"!==r&&function(t){e.d(n,t,(function(){return c[t]}))}(r);e("ad97");var o,a=e("f0c5"),i=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,"500759cf",null,!1,u["a"],o);n["default"]=i.exports},ad97:function(t,n,e){"use strict";var u=e("df59"),c=e.n(u);c.a},cc52:function(t,n,e){"use strict";(function(t){e("cabb");u(e("66fd"));var n=u(e("815f"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},df59:function(t,n,e){},fc8b:function(t,n,e){"use strict";e.r(n);var u=e("6211"),c=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=c.a}},[["cc52","common/runtime","common/vendor"]]]);