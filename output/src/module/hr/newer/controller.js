define(["require","../app","./options/baseInfo","./options/contactInfo","./options/info","./options/otherInfo","./options/salaryInfo","./options/editInfo","module/config","module/codeConfig","../config","module/apply/config","moment"],function(e){var t=e("../app"),n=e("./options/baseInfo"),r=e("./options/contactInfo"),i=e("./options/info"),s=e("./options/otherInfo"),o=e("./options/salaryInfo"),u=e("./options/editInfo"),a=e("module/config"),f=e("module/codeConfig"),l=f.TYPE_CODE,c=e("../config"),h=f.STAFF_STATUS_CODE,p=a.SALARY_TYPE[1].id,d=e("module/apply/config"),v=e("moment");t.controller("newerCtrl",["$scope","hrRequest","$stateParams","localStorage","$state","hrUtil","hrOptUtil","util","$filter",function(e,t,d,m,g,y,b,w,E){function N(){C(),k(),e.initScopeVar(),e.entry=="newerEdit"&&e.getInfo(),e.entry=="rejoin"&&b.rejoin(U),e.getContractCompany(),z(),Y()}function C(){e.entry="";switch(g.current.name){case"hr.newerEdit":e.entry="newerEdit";break;case"hr.rejoin":e.entry="rejoin"}}function k(){e.title="添加offer",e.canEdit=!1,e.number=m.get("number"),e.fromApply=!1,e.entry=="newerEdit"&&(e.title="offer信息",e.isReadOnly=!0,e.canEdit=!0),e.entry=="rejoin"&&(e.title="员工再入职")}function L(){D(e.baseOptions),D(e.contactOptions),D(e.infoOptions),D(e.otherOptions),D(e.salaryOptions),D(e.fiveBaseOptions),e.infoOptions.position.displayValue=e.positionName,e.infoOptions.formalDate.displayValue=e.formalDate&&v(e.infoOptions.formalDate.items[e.formalDate-1].name).format("YYYY-MM-DD"),e.infoOptions.contractCompany.displayValue=e.contractCompanyName,e.infoOptions.socialSecurityCity.displayValue=e.socialSecurityCityName,e.salaryOptions.baseSalary.displayValue=A(e.baseSalary),e.salaryOptions.reportAddress.displayValue=e.reportAddressName,e.salaryOptions.probationarySalary.displayValue=A(e.probationarySalary),e.salaryOptions.trafficSubsidy.displayValue=A(e.trafficSubsidy),e.salaryOptions.mobileSubsidy.displayValue=A(e.mobileSubsidy),e.infoOptions.level.displayValue=e.level}function A(e){return E("salary")({value:e.inputVal,salaryType:e.selectVal})}function O(){P(e.baseOptions),P(e.contactOptions),P(e.infoOptions),P(e.otherOptions),P(e.salaryOptions),P(e.fiveBaseOptions),e.isEditing=!0,e.isReadOnly=!1}function M(t,n){if($.inArray(t,e.notRequiredFieldWhenSubmit)!=-1)return!0;var r=e.type;if(r!=l.INTERNS&&r!=l.LABOR||$.inArray(t,T)==-1){if(t=="probationarySalary"||t=="baseSalary"||t=="mobileSubsidy"||t=="trafficSubsidy"){var i=e[t].inputVal;if(typeof i=="undefined"||i==null)return n[t].$setViewValue(undefined),n[t].$setValidity("required",!1),!1}if(t=="structure"){if(!e[t]||!e[t].id)return n[t].$error.requiredSubmitted=!0,!1}else if(typeof e[t]=="undefined")return t=="promiseEnterDate"?n[t].$error.dateRequired=!0:t=="leader"?n[t].$error.sugguestionRequired=!0:n[t].$error.requiredSubmitted=!0,!1;return t=="promiseEnterDate"?n[t].$error.dateRequired=!1:t=="leader"?n[t].$error.sugguestionRequired=!1:n[t].$error.requiredSubmitted=!1,!0}return!0}function _(e,t){var n=!0;for(var r in e)if(e.hasOwnProperty(r)){var i=e[r].name;M(i,t)||(n=!1)}return n}function D(e){for(var t in e)e[t].disable=!0}function P(e){for(var t in e)t!="name"&&t!="lawName"&&t!="namePinyin"&&(e[t].disable=!1)}function H(){e.type===1?e.contractEndDate=e.promiseEnterDate&&new Date(v(e.promiseEnterDate).add(3,"year").format()):e.contractEndDate=e.promiseEnterDate&&new Date(v(e.promiseEnterDate).add(6,"month").format());var t={name:e.name||e.lawName,namePinyin:e.namePinyin,sex:e.sex,degree:e.degree,lawName:e.lawName,mobile:e.mobile,personalEmail:e.personalEmail,idCardNumber:e.idCardNumber,type:e.type,contractCompany:e.contractCompany,socialSecurityCity:e.socialSecurityCity,structure:e.structure&&e.structure.id,structureName:e.structure&&e.structure.name,level:e.level,position:e.position,formalDate:e.formalDate&&(new Date(e.infoOptions.formalDate.items[e.formalDate-1].name)).getTime(),promiseEnterDate:e.promiseEnterDate&&e.promiseEnterDate.getTime(),contractEndDate:e.contractEndDate&&e.contractEndDate.getTime(),leader:w.getUsernameFromSuggestion(e.leader),baseSalary:y.getSalary(e.baseSalary),probationarySalary:y.getSalary(e.probationarySalary),mobileSubsidy:y.getSalary(e.mobileSubsidy),trafficSubsidy:y.getSalary(e.trafficSubsidy),socialSecurityBase:+e.socialSecurityBase,houseFundBase:+e.houseFundBase,salaryType:+e.salaryType,reportAddress:+e.reportAddress,pcType:e.pcType,recommendType:e.recommendType,resumeStorageId:e.resumeStorageId};return x.needFiveBase&&(t.endowBase=+e.endowBase,t.unemployBase=+e.unemployBase,t.medicalBase=+e.medicalBase,t.injuryBase=+e.injuryBase,t.maternityBase=+e.maternityBase),t}function B(t,n){e[t]&&(n[t]=e[t])}function j(t){for(var n in t)t.hasOwnProperty(n)&&(n=="baseSalary"||n=="probationarySalary"||n=="mobileSubsidy"||n=="trafficSubsidy"?e[n]={inputVal:undefined,selectVal:p}:n=="resumeStorageId"?(e.otherOptions.resumeStorageId.fileUrl=undefined,e.resumeStorageId=undefined):e[n]=undefined);e.levelIndex=undefined}function F(n){var n=e.newerEnterForm;if(!n.$valid)return;var r=H();if(!w.validateSocialAndHouseFundBase(r,x))return;r.optType=c.OPT_TYPE.SAVE,B("detail",r),B("recommendDetail",r),B("scdDepartment",r);var i=t.savePreEnterInfo;e.entry=="newerEdit"&&(i=t.modPreEnterInfo,r.number=e.number),i(r).then(function(t){info("操作成功"),e.entry!="newerEdit"&&m.set("number",t.data.number),j(r),n.$submitted=!1})}function I(){var n=e.newerEnterForm;if(!x.needFiveBase){var r=e.socialSecurityBase;e.endowBase=r,e.unemployBase=r,e.medicalBase=r,e.injuryBase=r,e.maternityBase=r}var i=_(e.baseOptions,n),s=_(e.contactOptions,n),o=_(e.infoOptions,n),u=_(e.otherOptions,n),a=_(e.salaryOptions,n),l=_(e.fiveBaseOptions,n);if(!n.$valid||!i||!s||!o||!u||!a||!l)return;var h=H();if(!w.validateSocialAndHouseFundBase(h,x))return;if(h.type==f.TYPE_CODE.REGULAR&&!h.socialSecurityCity){alert("正式员工必须填写社保缴纳城市");return}h.optType=c.OPT_TYPE.COMMIT,B("detail",h),B("recommendDetail",h),B("scdDepartment",h);if(S!=h.promiseEnterDate&&!w.validateLast7Day("入职时间",h.promiseEnterDate))return;var p=t.submitPreEnterInfo,d={content:h,type:f.APPLY_CODE.STAFF_ENTER};if(e.entry=="rejoin"){var v=e.number;d.type=f.APPLY_CODE.REJOIN,d.editedNumber=v,d.content.number=v}if(e.entry=="newerEdit"){var v=e.number;e.optType==c.OPT_TYPE.COMMIT?d.type=f.APPLY_CODE.OFFER_CHANGE:d.type=f.APPLY_CODE.STAFF_ENTER,d.editedNumber=v,d.content.number=v,d.reason=e.reason}p(d).then(function(t){alert("系统已经接受了您的请求，开始审批流程，请注意查看审批结果邮件"),j(h),e.entry=="newerEdit"&&g.go("hr.newer"),n.$submitted=!1})}function q(){e.optType==c.OPT_TYPE.COMMIT&&(e.canSave=!1,e.commited=!0),e.status==h.DRAFT||e.status==h.TO_JOIN?e.showAbandonBtn=!0:e.showAbandonBtn=!1,e.entry=="rejoin"&&(e.canSave=!1,e.showAbandonBtn=!1),e.status==h.ABANDED&&(e.showAbandonInfo=!0)}function R(){e.promiseEnterDate&&(S=e.promiseEnterDate,e.promiseEnterDate=new Date(e.promiseEnterDate),e.type===1&&(e.infoOptions.formalDate.items=[{id:1,name:v(e.promiseEnterDate).add(3,"month").format("YYYY/MM/DD")},{id:2,name:v(e.promiseEnterDate).add(6,"month").format("YYYY/MM/DD")}])),e.formalDate&&(+v(e.promiseEnterDate).add(3,"month").format("YYYYMMDD")==+v(e.formalDate).format("YYYYMMDD")?e.formalDate=1:e.formalDate=2),e.mobile=e.mobile,e.leader&&(e.leader=e.leaderName+","+e.leader),e.baseSalary=y.transSalaryInfo(e.baseSalary),e.probationarySalary=y.transSalaryInfo(e.probationarySalary),e.mobileSubsidy=y.transSalaryInfo(e.mobileSubsidy),e.trafficSubsidy=y.transSalaryInfo(e.trafficSubsidy),e.structure={id:e.structure,name:e.structureName},e.otherOptions.resumeStorageId.fileUrl=e.resumeUrl}function U(t){$.extend(!0,e,t.staffInfo),G(e.type),e.baseOptions.name.disable=!0,e.baseOptions.namePinyin.disable=!0,e.baseOptions.lawName.disable=!0,e.baseOptions.idCardNumber.disable=!0,e.baseOptions.sex.disable=!0,R(),q()}function z(){t.getSocialSecurityCity().then(function(t){t.data.unshift(a.EMPTY),e.infoOptions.socialSecurityCity.items=t.data})}function W(n,r){t.getSocialSecurityCity({socialSecurityCity:n}).then(function(t){x=t.data[0],e.needFiveBase=x.needFiveBase,r||(X(),V())})}function X(t){var t=t||{};typeof t.type=="undefined"?type=e.type:type=t.type;if(type==l.INTERNS||type==l.LABOR)return;w.setDefaultSocialBase(t,x,e)}function V(t){var t=t||{},n=x;typeof t.type=="undefined"?type=e.type:type=t.type;if(type==l.INTERNS||type==l.LABOR)return;if(n.houseFundBySalary){var r=typeof t.salary=="undefined"?+e.probationarySalary.inputVal:+t.salary;r>n.houseFundMax?e.houseFundBase=n.houseFundMax:r<n.houseFundMin?e.houseFundBase=n.houseFundMin:e.houseFundBase=r;return}e.houseFundBase=n.houseFundDefault}function J(e){X({salary:e}),V({salary:e})}function K(e){X({type:e}),V({type:e}),G(e)}function Q(e){}function G(t){t==l.INTERNS||t==l.LABOR?(w.forbidFieldOfLabor(e.baseOptions,!0,e),w.forbidFieldOfLabor(e.contactOptions,!0,e),w.forbidFieldOfLabor(e.infoOptions,!0,e),w.forbidFieldOfLabor(e.otherOptions,!0,e),w.forbidFieldOfLabor(e.salaryOptions,!0,e),w.forbidFieldOfLabor(e.fiveBaseOptions,!0,e)):(w.forbidFieldOfLabor(e.baseOptions,!1,e),w.forbidFieldOfLabor(e.contactOptions,!1,e),w.forbidFieldOfLabor(e.infoOptions,!1,e),w.forbidFieldOfLabor(e.otherOptions,!1,e),w.forbidFieldOfLabor(e.salaryOptions,!1,e),w.forbidFieldOfLabor(e.fiveBaseOptions,!1,e))}function Y(){t.getOffice().then(function(t){t.data.unshift(a.EMPTY),e.salaryOptions.reportAddress.items=t.data})}function Z(e,t){var n="";if(typeof t!="undefined")for(var r=0;r<e.length;r++)if(e[r].id===t){n=e[r].name;break}return n}function et(){var t=e.newerEnterForm;if(!t.$valid)return;var n=tt();b.showOfferDetail(n)}function tt(){var t="";if(e.position)for(var n=0;n<e.infoOptions.position.items.length;n++)if(e.infoOptions.position.items[n].id===e.position){t=e.infoOptions.position.items[n].name;break}var r={lawName:e.lawName,promiseEnterDate:typeof e.promiseEnterDate=="undefined"?"":e.promiseEnterDate,office:Z(e.salaryOptions.reportAddress.items,e.reportAddress),structure:typeof e.structure=="undefined"?"":e.structure.name,position:Z(e.infoOptions.position.items,e.position),probationarySalary:typeof e.probationarySalary.inputVal=="undefined"?"":e.probationarySalary.inputVal,baseSalary:typeof e.baseSalary.inputVal=="undefined"?"":e.baseSalary.inputVal,formalDate:e.formalDate,type:e.type};return r}e.save=F,e.submit=I;var S="",x={};e.probationarySalaryChange=J,e.typeChange=K,e.showOfferDetail=et;var T=a.FORBID_OF_LABOR_STAFF;e.getInfo=function(){t.getPreEnterInfo({number:e.number,pageDto:{pageNum:1,pageSize:a.PAGE_SIZE}}).then(function(n){$.extend(!0,e,n.data[0]),R(),G(e.type),e.isReadOnly&&L(),e.socialSecurityCity&&t.getSocialSecurityCity({socialSecurityCity:e.socialSecurityCity}).then(function(t){x=t.data[0],e.needFiveBase=x.needFiveBase}),q()})},e.getLevel=function(n){n?t.getLevel({structure:e.structure.id}).then(function(t){for(var n=0,r;r=t.data[n++];)r.id=n;t.data.unshift(a.EMPTY),e.infoOptions.level.items=t.data,e.levelIndex=e.getLevelIndex(e.level)}):(e.infoOptions.level.items=[],e.infoOptions.position.items=[])},e.getPosition=function(n){n?t.getPosition({structure:e.structure.id,level:e.level}).then(function(t){t.data.unshift(a.EMPTY),e.infoOptions.position.items=t.data}):e.infoOptions.position.items=[]},e.$watch("structure",function(t,n){t!=n&&t&&t.id&&(e.getLevel(t),e.getPosition(t),n&&typeof n.id!="undefined"&&(e.level=undefined,e.position=undefined))},!0),e.$watch("promiseEnterDate",function(t,n){e.isReadOnly||(t&&e.type===1?(e.infoOptions.formalDate.forbid=!1,e.infoOptions.formalDate.items=[{id:1,name:v(t).add(3,"month").format("YYYY/MM/DD")},{id:2,name:v(t).add(6,"month").format("YYYY/MM/DD")}],e.formalDate=2):(e.infoOptions.formalDate.forbid=!0,e.formalDate=undefined))}),e.$watch("type",function(t,n){e.isReadOnly||t===1&&e.promiseEnterDate&&(e.infoOptions.formalDate.forbid=!1,e.infoOptions.formalDate.items=[{id:1,name:v(e.promiseEnterDate).add(3,"month").format("YYYY/MM/DD")},{id:2,name:v(e.promiseEnterDate).add(6,"month").format("YYYY/MM/DD")}],e.formalDate=2)}),e.$watch("socialSecurityCity",function(e,t){e?t?W(e):W(e,!0):x={}},!0),e.$watch("levelIndex",function(t,n){t!=n&&(e.level=e.getLevelByIndex(t))},!0),e.$watch("level",function(t,n){t!=n&&(e.getPosition(t),typeof n!="undefined"&&(e.position=undefined))},!0),e.getLevelByIndex=function(t){return typeof t=="undefined"?undefined:e.infoOptions.level.items[t].name},e.getLevelIndex=function(t){var n=e.infoOptions.level.items;for(var r=0,i;i=n[r++];)if(i.name==t)return i.id},e.getContractCompany=function(){t.getContractCompany().then(function(t){t.data.unshift(a.EMPTY),e.infoOptions.contractCompany.items=t.data})},e.desertClick=function(){b.desertCondidate(e.number,function(){e.getInfo()})},e.initScopeVar=function(){e.fiveBaseInitOptions={formName:"newerEnterForm",required:!1};var t="newerEnterForm";e.canSave=!0,e.fiveBaseRequired=!1,e.baseOptions=n(t),e.contactOptions=r(t),e.infoOptions=i(t,e),e.otherOptions=s(t),e.salaryOptions=o(t,e),e.editOptions=u(t),e.onEditClick=O,e.baseSalary={selectVal:p},e.probationarySalary={selectVal:p},e.trafficSubsidy={selectVal:p},e.mobileSubsidy={selectVal:p},e.notRequiredFieldWhenSubmit=["recommendDetail","detail","personalEmail","idCardNumber","socialSecurityCity","name"],e.showAbandonBtn=!1},N()}])});