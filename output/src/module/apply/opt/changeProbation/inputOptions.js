define(["require","module/config","module/codeConfig","module/nameConfig"],function(e){return function(t,n){var r=e("module/config"),i=e("module/codeConfig"),s=e("module/nameConfig"),o={probationEndDate:{required:!0,displayName:"试用期截止日期",name:"probationEndDate",formName:t,placeholder:"yy-MM-dd",type:"date"},commonts:{required:!0,displayName:"备注",maxLength:200,name:"commonts",formName:t,placeholder:"请填写试用期变更原因（少于200个字）",mode:"textarea"}};return o}});