define(["require","../app","module/config","jsLibrary/src/function/plus","jsLibrary/src/function/minus","jsLibrary/src/function/multiply","jsLibrary/src/function/divide"],function(e){var t=e("../app"),n=e("module/config");t.factory("bigDecimal",[function(){return{add:function(t,n){return e("jsLibrary/src/function/plus")(t,n)},minus:function(t,n){return e("jsLibrary/src/function/minus")(t,n)},multiply:function(t,n){return e("jsLibrary/src/function/multiply")(t,n)},div:function(t,n){return e("jsLibrary/src/function/divide")(t,n)}}}])});