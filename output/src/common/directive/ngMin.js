define(["require","../app"],function(e){var t=e("../app");t.directive("ngMin",["util",function(e){return{restrict:"A",require:"ngModel",link:function(t,n,r,i){t.$watch(r.ngMin,function(){i.$setViewValue(i.$viewValue)});var s=function(n){var s=t.$eval(r.ngMin)||0;return!e.isEmpty(n)&&n<s?(i.$setValidity("ngMin",!1),undefined):(i.$setValidity("ngMin",!0),n)};i.$parsers.push(s),i.$formatters.push(s)}}}])});