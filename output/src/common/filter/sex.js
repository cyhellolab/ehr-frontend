define(["require","../app","module/nameConfig"],function(e){var t=e("../app"),n=e("module/nameConfig");t.filter("sex",function(){return function(e){return e===null||e===""||typeof e=="undefined"?n.EMPTY_VALUE:n.SEX[e]}})});