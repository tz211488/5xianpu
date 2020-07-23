(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-link/u-link"],{"17e2":function(t,n,e){"use strict";e.r(n);var u=e("f8a0"),i=e("5f40");for(var f in i)"default"!==f&&function(t){e.d(n,t,(function(){return i[t]}))}(f);e("f488");var a,r=e("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"27d2d060",null,!1,u["a"],a);n["default"]=o.exports},"5f40":function(t,n,e){"use strict";e.r(n);var u=e("db66"),i=e.n(u);for(var f in u)"default"!==f&&function(t){e.d(n,t,(function(){return u[t]}))}(f);n["default"]=i.a},8926:function(t,n,e){},db66:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"u-link",props:{color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast()}}),this.$nextTick((function(){n.$u.toast(n.mpTips)}))}}};n.default=e}).call(this,e("f266")["default"])},f488:function(t,n,e){"use strict";var u=e("8926"),i=e.n(u);i.a},f8a0:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return f})),e.d(n,"a",(function(){return u}));var i=function(){var t=this,n=t.$createElement;t._self._c},f=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-link/u-link-create-component',
    {
        'uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('f266')['createComponent'](__webpack_require__("17e2"))
        })
    },
    [['uview-ui/components/u-link/u-link-create-component']]
]);
