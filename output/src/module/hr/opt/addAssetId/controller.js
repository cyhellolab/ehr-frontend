define(["require","../../app","module/config","module/codeConfig"],function(e){var t=e("../../app"),n=e("module/config"),r=e("module/codeConfig"),i={};t.controller("hrOptAddAssetIdCtrl",["$scope","hrRequest","$stateParams","localStorage","$state","util","$modalInstance","item",function(e,t,n,r,s,o,u,a){function f(){e.assetCode=a.assetCode,e.isValid=!0,e.validityConfirm=l}function l(){if(e.assetCode){var t=/^[0-9]{4}\.[0-9]{4}$/g;e.isValid=t.test(e.assetCode)}}f(),e.save=function(n){if(!n.$valid)return;if(!e.isValid)return;t.addAssetCode({number:a.number,assetCode:e.assetCode}).then(function(){i.hadSuccess=!0,info("添加成功"),u.dismiss(i)})},e.closeHandler=function(){u.dismiss(i)}}])});