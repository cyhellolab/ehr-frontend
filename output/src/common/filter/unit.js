define(["require","../app","module/nameConfig"],function(e){var t=e("../app"),n=e("module/nameConfig");t.filter("unit",function(){return function(e,t){return e===null||typeof e=="undefined"?n.EMPTY_VALUE:e+t}})});