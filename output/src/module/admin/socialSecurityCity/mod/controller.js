define(["require","../../app","module/config","./inputOptions"],function(e){var t=e("../../app"),n=e("module/config"),r=e("./inputOptions");t.controller("adminSocialSecurityCityModControllor",["$scope","$stateParams","util","adminRequest","hrRequest","item","optType","$modalInstance",function(e,t,n,i,s,o,u,a){function c(e){return p(e,"socialSecurity","社保基数")?p(e,"endow","养老保险个人基数")?p(e,"unemploy","失业险个人基数")?p(e,"medical","医疗保险个人基数")?p(e,"injury","工伤保险个人基数")?p(e,"maternity","生育险个人基数")?p(e,"endowC","养老保险公司基数")?p(e,"unemployC","失业险公司基数")?p(e,"medicalC","医疗保险公司基数")?p(e,"injuryC","工伤保险公司基数")?p(e,"maternityC","生育险公司基数")?p(e,"houseFund","公积金基数")?!0:!1:!1:!1:!1:!1:!1:!1:!1:!1:!1:!1:!1}function h(e){return e.socialSecurityDefault>e.socialSecurityMax||e.socialSecurityDefault<e.socialSecurityMin?(alert("默认社保基数应该大于社保基数下限且小于社保基数上限"),!1):e.houseFundDefault>e.houseFundMax||e.houseFundDefault<e.houseFundMin?(alert("默认公积金基数应该大于公积金基数下限且小于公积金基数上限"),!1):!0}function p(e,t,n){return+e[t+"Max"]<+e[t+"Min"]?(alert(n+"上限须大于下限"),!1):!0}function d(e){e?v(!0):v(!1)}function v(t){e.inputOptions.socialSecurityDefault.forbid=t}function m(e){e?g(!0):g(!1)}function g(t){e.inputOptions.houseFundDefault.forbid=t}function y(){var t={socialSecurityCityName:e.name,socialSecurityDefault:+e.socialSecurityDefault,socialSecurityBySalary:e.socialSecurityBySalary?1:0,needFiveBase:e.needFiveBase?1:0,houseFundPersonalPer:+e.houseFundPersonalPer,houseFundCompanyPer:+e.houseFundCompanyPer,houseFundDefault:+e.houseFundDefault,houseFundBySalary:e.houseFundBySalary?1:0,socialSecurityMax:+e.socialSecurityMax,socialSecurityMin:+e.socialSecurityMin,houseFundMin:+e.houseFundMin,houseFundMax:+e.houseFundMax,medicalLCtryPlus:+e.medicalLCtryPlus,medicalLCityPlus:+e.medicalLCityPlus,medicalFCtryPlus:+e.medicalFCtryPlus,medicalFCityPlus:+e.medicalFCityPlus,medicalLCtryCPlus:+e.medicalLCtryCPlus,medicalLCityCPlus:+e.medicalLCityCPlus,medicalFCtryCPlus:+e.medicalFCtryCPlus,medicalFCityCPlus:+e.medicalFCityCPlus};return b(t,"endow"),b(t,"medical"),b(t,"unemploy"),b(t,"injury"),b(t,"maternity"),t}function b(t,r){t[r+"Min"]=+e[r+"Min"]||0,t[r+"Max"]=+e[r+"Max"]||0,n.inputEmpty(e[r+"CMin"])?t[r+"CMin"]=t[r+"Min"]:t[r+"CMin"]=+e[r+"CMin"],n.inputEmpty(e[r+"CMax"])?t[r+"CMax"]=t[r+"Max"]:t[r+"CMax"]=+e[r+"CMax"],t[r+"LCityPP"]=+e[r+"LCityPP"]||0,t[r+"LCityCP"]=+e[r+"LCityCP"]||0,t[r+"LCtryPP"]=+e[r+"LCtryPP"]||0,t[r+"LCtryCP"]=+e[r+"LCtryCP"]||0,t[r+"FCityPP"]=+e[r+"FCityPP"]||0,t[r+"FCityCP"]=+e[r+"FCityCP"]||0,t[r+"FCtryPP"]=+e[r+"FCtryPP"]||0,t[r+"FCtryCP"]=+e[r+"FCtryCP"]||0}var f="社保缴纳城市";$.extend(!0,e,o),u=="mod"?e.title="修改"+f:e.title="新增"+f,e.socialSecurityBySalaryChange=d,e.houseFundBySalaryChange=m;var l="modSocialSecurityCityForm";e.inputOptions=r(l,e),e.socialSecurityBySalary&&v(!0),e.houseFundBySalary&&g(!0),e.closeHandler=function(){a.dismiss({})},e.saveHandler=function(t){t.$submitted=!0,e.socialSecurityBySalary&&t.socialSecurityDefault.$setValidity("required",!0),e.houseFundBySalary&&t.houseFundDefault.$setValidity("required",!0);if(!t.$valid)return;var n=null,r=y();if(!c(r))return;if(!h(r))return;u=="mod"?(n=i.modSocialSecurityCity,r.socialSecurityCity=o.id):n=i.addSocialSecurityCity,n(r).then(function(e){info("操作成功"),a.dismiss({hasSuccess:!0,optType:u})})}}])});