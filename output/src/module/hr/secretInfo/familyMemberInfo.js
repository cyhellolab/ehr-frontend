define(["require","module/config"],function(e){return function(t){var n=e("module/config");return{name:{required:!0,displayName:"姓名",name:"name",formName:t,maxLength:30,placeholder:"少于30个字"},title:{required:!0,displayName:"称谓",name:"title",formName:t,maxLength:30,placeholder:"少于30个字"},birthday:{required:!1,displayName:"生日",name:"birthday",formName:t,type:"date",placeholder:"YYYY-MM-DD",filter:"dateFormat"},company:{required:!1,displayName:"单位",name:"company",formName:t,maxLength:30,placeholder:"少于30个字"},position:{required:!1,displayName:"职位",name:"position",formName:t,maxLength:30,placeholder:"少于30个字"},mobile:{required:!1,displayName:"联系电话",maxLength:15,name:"mobile",formName:t,type:"number",placeholder:"少于15个数字"}}}});