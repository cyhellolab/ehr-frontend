define(["require","module/config"],function(e){return function(t){var n=e("module/config");return{resumeStorageId:{required:!1,displayName:"电子简历",name:"resumeStorageId",formName:t,mode:"file"},idCardAndContract:{required:!1,displayName:"劳动合同/实习协议",name:"idCardAndContract",formName:t,mode:"file"},idCardUpload:{required:!1,displayName:"身份证复印件",name:"idCardUpload",formName:t,mode:"file"},limitAgreement:{required:!1,displayName:"竞业协议",name:"limitAgreement",formName:t,mode:"file"},detail:{required:!1,displayName:"备注",maxLength:200,name:"detail",formName:t,placeholder:"少于200个字",mode:"textarea"},recommendType:{required:!1,displayName:"入职推荐途径",name:"recommendType",formName:t,mode:"select",items:n.RECOMMEND_TYPE,filter:"recommendType"},recommendDetail:{required:!1,displayName:"推荐详情",maxLength:30,name:"recommendDetail",formName:t,placeholder:"少于30个字"}}}});