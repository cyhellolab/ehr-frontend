define(["require","../../app","./inputOptions","module/config","module/codeConfig","../../config","moment"],function(e){function a(e,t,r,u,a,f,l){function h(){f.getWorkTarget({number:e.number}).then(function(t){e.workTarget=t.data.workTarget})}function p(e){if(!e.$valid)return;confirm(s.FORMAL_APPLY_EXECUTE_TIP,function(){d()})}function d(){var n=o().format("YYYY-MM-DD"),r=(new Date(n+" 23:59:59")).getTime(),a={formalApply:e.detail.replace(/\n/g,"<br>").replace(/[ ]/g,"&nbsp;")},f=o().format("dddd");t.addApply({editedNumber:e.userCommonInfo.number,type:i.APPLY_CODE.FORMAL_APPLY,content:a,executeDate:r}).then(function(){alert(s.SUCCESS_TIP),c.hadSuccess=!0,u.dismiss(c)})}function v(){u.dismiss(c)}e.number=r.get("number"),e.save=p,e.closeHandler=v,e.inputOptions=n("formalApplyForm",e);var c={};h()}var t=e("../../app"),n=e("./inputOptions"),r=e("module/config"),i=e("module/codeConfig"),s=e("../../config"),o=e("moment"),u={};t.controller("applyOptFormalApplyCtrl",a),a.$inject=["$scope","applyRequest","localStorage","$modalInstance","util","hrRequest","hrUtil"]});