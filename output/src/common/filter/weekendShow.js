define(["require","../app"],function(e){var t=e("../app");t.filter("weekendShow",function(){return function(e){if($.isNumeric(e)){var t=parseInt(e);return t===0?"工作日":t===1?"休息日":"--"}return"--"}})});