define(["require","../../app","./inputOptions","module/config","module/codeConfig"],function(e){var t=e("../../app"),n=e("./inputOptions"),r=e("module/config"),i=e("module/codeConfig"),s={};t.controller("hrOptModMobileCtrl",["$scope","hrRequest","$stateParams","localStorage","$state","util","$modalInstance","number","password",function(e,t,r,i,o,u,a,f,l){function c(){e.inputOptions=n("modMobileForm",e,u)}function h(n){if(n.mobile.invalid)return;t.modMobileValidateCode({number:f,mobile:e.mobile}).then(function(){e.beginTimer=!0})}e.beginTimer=!1,e.sendCode=h,e.save=function(n){if(!n.$valid)return;t.modMobile({password:l,code:e.code}).then(function(){s.hadSuccess=!0,s.mobile=e.mobile,info("修改成功"),a.dismiss(s)})},e.closeHandler=function(){a.dismiss(s)},c()}])});