define(["require","../app","module/config","module/codeConfig","module/nameConfig","./options"],function(e){var t=e("../app"),n=e("module/config"),r=e("module/codeConfig"),i=e("module/nameConfig");t.controller("hrSalaryInfoCtrl",["$scope","hrRequest","$stateParams","localStorage","$state","authUtil","hrUtil","adminRequest","util",function(t,n,i,s,o,u,a,f,l){function p(e){n.getSocialSecurityCity({socialSecurityCity:e}).then(function(e){c=e.data[0],t.needFiveBase=c.needFiveBase})}function d(){t.getSalaryInfo(),t.getWorkInfo(),a.initEntryHRType(t),t.isFromSalaryHR&&(t.canEditSalaryInfo=!0)}function v(e){return e<15e3?0:e}function m(){f.getKeyNodeInfo({structure:t.structure}).then(function(e){var n=e.data.punchCard;n==r.PUNCH_CARD.NEED_SUBSIDY_NOT_BY_SALARY?(t.mealSubsidyToMealCard=!0,t.mealSalaryMethod||(t.mealSalaryMethod=r.MEAL_SALARY_METHOD.MEALCARD)):t.mealSubsidyToMealCard=!1})}t.number=s.get("number");var c={},h=e("./options");t.canEditSalaryInfo=!1,t.isReadOnly=!0,t.entryName=o.current.name,t.options=h("salaryInfoForm",t),t.getSalaryInfo=function(){t.isProbationary=t.commonInfo.isProbationary,n.getStaffSalaryInfo({number:t.number}).then(function(e){$.extend(!0,t,e.data),t.welfareOri=t.welfareSalary,t.mealSubsidyToMealCard&&(t.mealSalaryMethod||(t.mealSalaryMethod=r.MEAL_SALARY_METHOD.MEALCARD)),t.isProbationary?t.maxWelfareSalary=v(t.probationarySalary.value):t.maxWelfareSalary=v(t.baseSalary.value)})},t.getWorkInfo=function(){n.getStaffWorkInfo({number:t.number}).then(function(e){$.extend(!0,t,e.data),p(t.socialSecurityCity),m()})},t.onEdit=function(){t.isFromSalaryHR?t.options.welfareSalary.disable=!1:t.isFromSelf&&(t.options.mealSalaryMethod.disable=!1),t.isReadOnly=!1},t.disbaleSalaryInput=function(){a.disableOptions(t.options)},t.saveSalaryInfo=function(e){if(!e.$valid)return;var r={number:t.number,welfareSalary:+t.welfareSalary};if(+t.welfareSalary>t.maxWelfareSalary){alert("职位福利费必须小于上限"+t.maxWelfareSalary);return}var i=n.saveSalaryInfo;t.isFromSelf&&(i=n.changeMealSalaryMethod,r={method:t.mealSalaryMethod}),i(r).then(function(){info("保存成功"),t.isReadOnly=!0,t.disbaleSalaryInput(),t.getSalaryInfo()})},d()}])});