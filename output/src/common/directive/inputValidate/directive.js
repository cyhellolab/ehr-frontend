define(["require","../../app"],function(e){var t=e("../../app");t.directive("inputValidate",["$http","$templateCache","$compile",function(e,t,n){return{restrict:"EA",scope:{options:"=inputValidate"},replace:!1,link:function(e,r,i){if(e.options){e.optTip="输入",e.options.mode=="file"&&(e.optTip="上传");var s="src/common/directive/inputValidate/tpl.html";e.maxlength=e.options.maxLength,e.minlength=e.options.minLength,e.min=e.options.min,e.max=e.options.max,e.$watch("options.min",function(t,n){e.min=t}),e.$watch("options.max",function(t,n){e.max=t});var o=t.get(s)||$.ajax({type:"GET",url:s,async:!1}).responseText;e.name=e.options.name;var u=e.options.formName,a=e.$parent;e.form=a[u];while(!e.form)a=a.$parent,e.form=a[u];var f=n(o)(e);$(r).after(f)}}}}])});