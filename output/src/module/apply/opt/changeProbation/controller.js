define(["require","../../app","./inputOptions","module/config","../../config","module/codeConfig","moment"],function(e){function a(e,t,r,i,a,f,l){function c(){f.getStaffBaseInfo({number:e.number}).then(function(t){e.formalDate=new Date(t.data.formalDate),e.enterTime=new Date(t.data.enterTime),e.hasChangedProbation=!1;var n=+o().add(1,"day").format("YYYYMMDD"),r=Math.min(+o(e.enterTime).add(6,"month").format("YYYYMMDD"),+o().add(15,"day").format("YYYYMMDD")),i=Math.max(n,+o(e.enterTime).add(3,"month").format("YYYYMMDD"));+o(e.formalDate).format("YYYYMMDD")==+o(e.enterTime).add(3,"month").format("YYYYMMDD")?(e.inputOptions.probationEndDate.min=o(e.formalDate).add(1,"day").toDate(),e.inputOptions.probationEndDate.max=o(e.formalDate).add(3,"month").toDate()):+o(e.formalDate).format("YYYYMMDD")==+o(e.enterTime).add(6,"month").format("YYYYMMDD")?(e.inputOptions.probationEndDate.min=o(n,"YYYYMMDD").toDate(),e.inputOptions.probationEndDate.max=o(r,"YYYYMMDD").toDate()):(e.hasChangedProbation=!0,e.inputOptions.probationEndDate.min=o(i,"YYYYMMDD").toDate(),e.inputOptions.probationEndDate.max=o(e.enterTime).add(6,"month").toDate())})}function h(t){if(!t.$valid)return;var n={probationEndDate:e.probationEndDate.getTime()},r=+o(e.userCommonInfo.enterTime).format("YYYYMMDD"),i=+o(e.probationEndDate).format("YYYYMMDD");if(e.hasChangedProbation){var s=o().add(16,"day"),u=o(e.userCommonInfo.formalTime);if(i>=+s.format("YYYYMMDD")&&i<=+u.format("YYYYMMDD")){alert("试用期的截止日期不能处于"+s.format("YYYY/MM/DD")+"到"+u.format("YYYY/MM/DD")+"之间");return}}p(n)}function p(n){var r=o().format("YYYY-MM-DD"),a=(new Date(r+" 23:59:59")).getTime();t.addApply({editedNumber:e.userCommonInfo.number,type:s.APPLY_CODE.PROBATION_CHANGE,content:n,reason:e.comments,executeDate:a}).then(function(){u.hadSuccess=!0,i.dismiss(u)})}function d(){i.dismiss(u)}e.number=r.get("number"),e.save=h,e.closeHandler=d,e.inputOptions=n("changeProbationForm",e),e.isChangeProbation=!0,c()}var t=e("../../app"),n=e("./inputOptions"),r=e("module/config"),i=e("../../config"),s=e("module/codeConfig"),o=e("moment"),u={};t.controller("applyChangeProbation",a),a.$inject=["$scope","applyRequest","localStorage","$modalInstance","util","hrRequest","hrUtil"]});