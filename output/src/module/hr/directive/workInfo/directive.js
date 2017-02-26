define(["require","../../app","module/config"],function(e){var t=e("../../app"),n=e("module/config");t.directive("workInfo",["ajaxService","hrRequest",function(e,t){return{restrict:"EA",scope:{options:"="},require:"?ngModel",templateUrl:"src/module/hr/directive/workInfo/tpl.html",replace:!1,compile:function(e,n,r,i){return{pre:function(e,t,n,r){var i="workForm";e.inputOptions={start:{required:!0,displayName:"开始时间",name:"start",formName:i,type:"month",placeholder:"YYYY-MM"},end:{required:!0,displayName:"结束时间",name:"end",formName:i,type:"month"},company:{required:!0,displayName:"单位",name:"company",formName:i,maxLength:30,placeholder:"少于30个字"},position:{required:!0,displayName:"职位",name:"position",formName:i,maxLength:30,placeholder:"少于30个字"}}},post:function(e,n,r,i){function s(){e.editInfo={start:e.start,end:e.end,company:e.company,position:e.position}}function o(){e.editInfo={start:undefined,end:undefined,company:undefined,position:undefined}}e.onDel=function(){confirm("确认删除该条信息吗？",function(){t.delWorkExperience({id:e.id}).then(function(t){info("删除成功");if(e.$parent.$parent.workExpList&&e.$parent.$parent.workExperienceId){var r=0;e.$parent.$parent.workExpList.indexOf(e.id)!==-1&&(r=e.$parent.$parent.workExpList.indexOf(e.id),e.$parent.$parent.workExpList.splice(r,1)),e.$parent.$parent.workExperienceId.indexOf(e.id)!==-1&&(r=e.$parent.$parent.workExperienceId.indexOf(e.id),e.$parent.$parent.workExperienceId.splice(r,1))}i.$setViewValue({}),$(n).html("")})})},e.onEditSave=function(n){n.$submitted=!0;if(!n.$valid)return;var r=e.editInfo.start.getTime(),s=e.editInfo.end.getTime();if(r>s){alert("结束时间必须大于开始时间");return}var o={id:e.id,start:r,end:s,company:e.editInfo.company,position:e.editInfo.position};t.modWorkExperience(o).then(function(t){info("修改成功"),e.editing=!1,e.start=e.editInfo.start,e.end=e.editInfo.end,e.startShow=e.formatMonth(e.editInfo.start),e.endShow=e.formatMonth(e.editInfo.end),e.company=e.editInfo.company,e.position=e.editInfo.position,i.$setViewValue(o)})},e.onEdit=function(){e.editing=!0,s()},e.onCancelEdit=function(){e.editing=!1,o()},e.formatMonth=function(e){return e.getFullYear()+"-"+(e.getMonth()+1)},i.$formatters.push(function(e){return e}),i.$parsers.push(function(e){return e}),i.$render=function(){e.id=i.$viewValue.id,e.start=i.$viewValue.start,e.end=i.$viewValue.end,e.company=i.$viewValue.company,e.position=i.$viewValue.position,e.disable=i.$viewValue.disable,e.startShow=e.formatMonth(e.start),e.endShow=e.formatMonth(e.end)}}}}}}])});