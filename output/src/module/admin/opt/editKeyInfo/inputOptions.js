define(["require","module/config","module/codeConfig","module/nameConfig"],function(e){return function(t,n){var r=e("module/config"),i=e("module/codeConfig"),s=e("module/nameConfig"),o={lawName:{required:!0,displayName:"法律名",maxLength:5,name:"lawName",formName:t,placeholder:"少于5个字"},sex:{required:!0,displayName:"性别",name:"sex",formName:t,mode:"select",items:r.SEX,filter:"sex"}};return o}});