define(["require","../app","module/config"],function(e){function r(e,t,n,r,i){function s(){o()}function o(){r.getOffice().then(function(t){e.officeTableOptions.data=t.data})}function u(e){var t=i.open({templateUrl:"src/module/admin/office/mod/tpl.html",controller:"adminOfficeModControllor",resolve:{item:function(){return e},optType:function(){return"mod"}}});t.result.then(function(){},function(e){e.hasSuccess==1&&o()})}function a(e){var t=i.open({templateUrl:"src/module/admin/office/mod/tpl.html",controller:"adminOfficeModControllor",resolve:{item:function(){return e},optType:function(){return"add"}}});t.result.then(function(){},function(e){e.hasSuccess==1&&o()})}e.officeTableOptions={data:[],canSelect:!1,cols:[{field:"name",displayName:"工作地点",cellTpl:"src/module/admin/office/tableTpl/name.html"},{field:"opt",displayName:"操作",cellTpl:"src/module/admin/office/tableTpl/opt.html"}]},e.modifyClick=u,s(),e.addOffice=function(){a({})}}var t=e("../app"),n=e("module/config");t.controller("adminOfficeControllor",r),r.$inject=["$scope","$stateParams","adminRequest","hrRequest","$modal"]});