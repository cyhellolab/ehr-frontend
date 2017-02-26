define(function (require) {
angular.module('templates-main', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("src/common/directive/checkboxGroup/tpl.html",
    "<div class=\"directives-checkbox-group\">\n" +
    "    <div class=\"form-inline group\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input name=\"checkboxGroupType\" type=\"radio\" value=\"default\"\n" +
    "                   ng-model=\"checkboxGroupType\" ng-click=\"defaultClick()\">\n" +
    "            <label class=\"form-label\">\n" +
    "                默认指标\n" +
    "            </label>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <input name=\"checkboxGroupType\"  type=\"radio\" value=\"selfDefine\"\n" +
    "                   ng-click=\"selfDefineClick()\"\n" +
    "                   ng-model=\"checkboxGroupType\">\n" +
    "            <label class=\"form-label\">\n" +
    "                自定义指标\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-inline content\">\n" +
    "        <div ng-repeat=\"item in options.data\" class=\"group\">\n" +
    "            <div class=\"inline group-name\">{{item.name}}:</div>\n" +
    "            <ul class=\"inline list-inline item-area\">\n" +
    "                <li ng-repeat=\"data in item.items\" class=\"item\">\n" +
    "                    <input type=\"checkbox\" value=\"{{data.key}}\" class=\"input\"\n" +
    "                           ng-change=\"itemClick(data.key,data.value)\"\n" +
    "                           ng-model=\"data.checked\"/>\n" +
    "                    {{data.value}}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-wrap\">\n" +
    "        <p ng-click=\"confirmHandler({error: error})\" class=\"btn btn-warning btn-sm\">确定</p>\n" +
    "        <p ng-click=\"cancelHandler()\"\n" +
    "           class=\"btn btn-default btn-sm\">取消</p>\n" +
    "        <span class=\"red\">{{error}}</span>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/common/directive/commonInfo/tpl.html",
    "<div class=\"directive-commonInfo container-fluid\" style=\"padding: 10px\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-1 head-img-wrap\" ng-if=\"commonInfo.headImgUrl\">\n" +
    "            <img ng-src=\"{{commonInfo.headImgUrl}}\" class=\"head-img\"\n" +
    "                 ng-class=\"{'pointer': canEditHeadImg}\"\n" +
    "                    />\n" +
    "            <i ng-show=\"canEditHeadImg\"\n" +
    "               ng-click=\"editClick()\"\n" +
    "               class=\"glyphicon glyphicon-edit edit\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-1 no-head-img\" ng-if=\"!commonInfo.headImgUrl\"\n" +
    "             ng-click=\"uploadClick()\">\n" +
    "            <span class=\"upload-tip\">上传照片</span>\n" +
    "        </div>\n" +
    "        <div class=\"char\">\n" +
    "             姓名：\n" +
    "            {{commonInfo.name}}\n" +
    "        </div>\n" +
    "        <div class=\"char\">\n" +
    "             性别：\n" +
    "            {{commonInfo.sex|sex}}\n" +
    "        </div>\n" +
    "        <div class=\"char\">\n" +
    "             员工编号：\n" +
    "            {{commonInfo.displayNumber}}\n" +
    "        </div>\n" +
    "        <div class=\"char\">\n" +
    "             员工状态：\n" +
    "            {{commonInfo.status|staffStatus}}\n" +
    "        </div>\n" +
    "        <div class=\"char\" ng-show=\"commonInfo.type != 21\">\n" +
    "             员工类型：\n" +
    "            {{commonInfo.type|type}}\n" +
    "        </div>\n" +
    "        <div class=\"char\">\n" +
    "             法律名：\n" +
    "            {{commonInfo.lawName}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/customCols/tpl.html",
    "<div dropdown is-open=\"status.isopen\" class=\"directives-custom-cols\">\n" +
    "    <div dropdown-toggle class=\"btn btn-default\">\n" +
    "       {{options.name}}\n" +
    "    </div>\n" +
    "    <div class=\"dropdown-menu\" stop-event=\"click\"  role=\"menu\">\n" +
    "        <div checkbox-group options=\"options\"\n" +
    "             confirm-handler='confirmBtnClickHandler(error)'\n" +
    "             cancel-handler='cancelBtnClickHandler()'\n" +
    "                ></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/fiveBase/tpl.html",
    "<div class=\"directive-fiveBase\">\n" +
    "    <table>\n" +
    "        <tr class=\"thead\">\n" +
    "            <td class=\"col1\">&nbsp;</td>\n" +
    "            <td>养老</td>\n" +
    "            <td>失业</td>\n" +
    "            <td>医疗</td>\n" +
    "            <td>工伤</td>\n" +
    "            <td>生育</td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td class=\"col1\">\n" +
    "                <span class=\"blue\" ng-show=\"fiveBaseInitOptions.required\">\n" +
    "                    *</span>{{fiveBaseInitOptions\n" +
    "                .fieldName}}：</td>\n" +
    "            <td class=\"endow\">\n" +
    "                <div input-control\n" +
    "                     options=\"fiveBaseOptions.endowBase\"\n" +
    "                     ng-model=\"endowBase\">\n" +
    "                </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                <div input-control\n" +
    "                     options=\"fiveBaseOptions.unemployBase\"\n" +
    "                     ng-model=\"unemployBase\">\n" +
    "                </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                <div input-control\n" +
    "                     options=\"fiveBaseOptions.medicalBase\"\n" +
    "                     ng-model=\"medicalBase\">\n" +
    "                </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                <div input-control\n" +
    "                     options=\"fiveBaseOptions.injuryBase\"\n" +
    "                     ng-model=\"injuryBase\">\n" +
    "                </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                <div input-control\n" +
    "                     options=\"fiveBaseOptions.maternityBase\"\n" +
    "                     ng-model=\"maternityBase\">\n" +
    "                </div>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/imageCrop/tpl.html",
    "<div class=\"directives-imageCrop\">\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/inputControl/tpl.html",
    "<div ng-if=\"options.mode!='textarea'\" class=\"directive-inputControl\">\n" +
    "<label class=\"col-sm-2 control-label\">\n" +
    "        <span class=\"{{options.prefixClass|| 'red'}}\"\n" +
    "              ng-show=\"((options.prefixClass || options.required) && !options.disable) && options.displayName!=''\">\n" +
    "            *</span>\n" +
    "    {{options.displayName}}\n" +
    "        <span ng-show=\"options.tip\"\n" +
    "              popover=\"{{options.tip}}\"\n" +
    "              popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "              popover-append-to-body=\"true\"\n" +
    "              class=\"glyphicon glyphicon-question-sign\"\n" +
    "                >\n" +
    "                </span>\n" +
    "    <span ng-show=\"options.displayName!=''\" class=\"dot\">:</span>\n" +
    "</label>\n" +
    "\n" +
    "<div class=\"col-sm-4\" ng-switch=\"options.mode\">\n" +
    "        <span ng-switch-when=\"select\">\n" +
    "            <select ng-model=\"result.value\"\n" +
    "                    ng-hide=\"options.disable\"\n" +
    "                    class=\"form-control\"\n" +
    "                    ng-disabled=\"options.forbid\"\n" +
    "                    name=\"{{options.name}}\"\n" +
    "                    ng-change=\"options.changeHandler(result.value)\"\n" +
    "                    ng-required=\"options.required\"\n" +
    "                    input-validate=\"errorOption\"\n" +
    "                    ng-options=\"m.id as m.name for m in options.items\">\n" +
    "            </select>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <span ng-switch-when=\"nameSuggestion\">\n" +
    "             <span\n" +
    "                     name-suggestion ng-model=\"result.value\"\n" +
    "                     ng-hide=\"options.disable\"\n" +
    "                     name=\"{{options.name}}\"\n" +
    "                     disable=\"options.disable\"\n" +
    "                     require=\"{{require}}\"\n" +
    "                     error-option=\"errorOption\"\n" +
    "                     >\n" +
    "\n" +
    "                     </span>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-switch-when=\"multiName\">\n" +
    "             <span\n" +
    "                     multi-name ng-model=\"result.value\"\n" +
    "                     ng-hide=\"options.disable\"\n" +
    "                     name=\"{{options.name}}\"\n" +
    "                     disable=\"options.disable\"\n" +
    "                     error-option=\"errorOption\"\n" +
    "                     ></span>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-switch-when=\"structure\">\n" +
    "            <span structure-selector ng-model=\"result.value\"\n" +
    "                  ng-hide=\"options.disable\"\n" +
    "                  name=\"{{options.name}}\"\n" +
    "                  disable=\"options.disable\"\n" +
    "                  require=\"{{require}}\"\n" +
    "                  error-option=\"errorOption\"\n" +
    "                  options='treeSelectorOptions'>\n" +
    "\n" +
    "             </span>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-switch-when=\"checkbox\">\n" +
    "            <input type=\"checkbox\" ng-model=\"result.value\"\n" +
    "                   ng-hide=\"options.disable\"\n" +
    "                   ng-change=\"options.changeHandler(result.value)\"\n" +
    "                   name=\"{{options.name}}\"\n" +
    "                    >\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "\n" +
    "    <div ng-switch-when=\"file\">\n" +
    "        <div input-validate=\"errorOption\">\n" +
    "            <span class=\"file-load\" ng-show=\"!options.disable\">\n" +
    "                <label class=\"upload-file-btn\" ng-show=\"!options.fileUrl\">\n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>上传文件\n" +
    "                </label>\n" +
    "                <label class=\"upload-file-btn\" ng-show=\"options.fileUrl\">\n" +
    "                    <i class=\"glyphicon glyphicon-upload\"></i>重新上传\n" +
    "                </label>\n" +
    "                <input type=\"file\" ng-model=\"result.value\"\n" +
    "                       class=\"upload-file\"\n" +
    "                       onchange=\"angular.element(this).scope().fileChange(this)\"\n" +
    "                       name=\"{{options.name}}\"/>\n" +
    "            </span>\n" +
    "            <span class=\"file-download\" ng-show=\"options.fileUrl\">\n" +
    "                <a href=\"{{options.fileUrl}}\" target=\"_blank\">\n" +
    "                    <i class=\"glyphicon glyphicon-download\"></i>下载\n" +
    "                </a>\n" +
    "            </span>\n" +
    "\n" +
    "            <p ng-show=\"!options.disable\" class=\"gray\">\n" +
    "\n" +
    "                <span>只允许pdf、png、jpg、jpeg、doc、docx后缀文件</span>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "        <span ng-switch-when=\"selectWithInput\">\n" +
    "            <div class=\"col-sm-8 combine-first\">\n" +
    "                <input\n" +
    "                        ng-disabled=\"options.forbid\"\n" +
    "                        ng-hide=\"options.disable\"\n" +
    "                        class=\"form-control\"\n" +
    "                        ng-model=\"result.input\"\n" +
    "                        name=\"{{options.name}}Input\"\n" +
    "                        ng-maxlength=\"{{options.maxLength}}\"\n" +
    "                        ng-minlength=\"{{options.minLength}}\"\n" +
    "                        input-validate=\"errorOption\"\n" +
    "                        placeholder=\"{{options.placeholder}}\"\n" +
    "                        ng-required=\"{{options.required}}\"\n" +
    "                        ng-pattern=\"options.pattern\"\n" +
    "                        ng-change=\"options.changeHandler(result.value)\"\n" +
    "                        type=\"{{options.type}}\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 combine-scd\">\n" +
    "                <span ng-repeat=\"item in options.items\">\n" +
    "                    <input type=\"radio\" name=\"options.name\"\n" +
    "                           value=\"{{item.id}}\" ng-model=\"result.select\">\n" +
    "                    {{item.name}}\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "\n" +
    "        <span ng-switch-when=\"combine\">\n" +
    "            <div class=\"col-sm-8 combine-first\">\n" +
    "                <input\n" +
    "                        ng-disabled=\"options.forbid\"\n" +
    "                        ng-hide=\"options.disable\"\n" +
    "                        class=\"form-control\"\n" +
    "                        ng-model=\"result.input\"\n" +
    "                        name=\"{{options.name}}\"\n" +
    "                        ng-maxlength=\"{{options.maxLength}}\"\n" +
    "                        ng-minlength=\"{{options.minLength}}\"\n" +
    "                        input-validate=\"errorOption\"\n" +
    "                        placeholder=\"{{options.placeholder}}\"\n" +
    "                        ng-required=\"{{options.required}}\"\n" +
    "                        ng-pattern=\"options.pattern\"\n" +
    "                        ng-change=\"options.changeHandler(result.input)\"\n" +
    "                        type=\"{{options.type}}\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4 combine-scd\">\n" +
    "                <select ng-model=\"result.select\"\n" +
    "                        ng-hide=\"options.disable\"\n" +
    "                        ng-disabled=\"options.forbid\"\n" +
    "                        class=\"form-control\"\n" +
    "                        ng-required=\"{{options.required}}\"\n" +
    "                        ng-options=\"m.id as m.name for m in options.items\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "        </span>\n" +
    "        <span ng-switch-default>\n" +
    "            <span ng-class=\"{'input-group':options.postfix}\"\n" +
    "                  input-validate=\"errorOption\"\n" +
    "                    >\n" +
    "            <input\n" +
    "                    ng-hide=\"options.disable\"\n" +
    "                    ng-disabled=\"options.forbid\"\n" +
    "                    class=\"form-control\"\n" +
    "                    ng-model=\"result.value\"\n" +
    "                    name=\"{{options.name}}\"\n" +
    "                    ng-maxlength=\"{{options.maxLength}}\"\n" +
    "                    ng-minlength=\"{{options.minLength}}\"\n" +
    "                    ng-max=\"options.max\"\n" +
    "                    ng-min=\"options.min\"\n" +
    "                    placeholder=\"{{options.placeholder}}\"\n" +
    "                    ng-required=\"{{options.required}}\"\n" +
    "                    ng-change=\"options.changeHandler(result.value,this)\"\n" +
    "                    ng-blur=\"options.blurHandler(result.value,this)\"\n" +
    "                    ng-pattern=\"options.pattern\"\n" +
    "                    type=\"{{options.type}}\">\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "                <span ng-show=\"options.postfix\">\n" +
    "                    {{options.postfix}}\n" +
    "                </span>\n" +
    "            </span>\n" +
    "            <span ng-show=\"options.postfix && (!options.disable)\"\n" +
    "                  class=\"input-group-addon\">\n" +
    "                {{options.postfix}}\n" +
    "            </span>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"options.mode=='textarea'\" class=\"directive-inputControl\">\n" +
    "    <span class=\"col-sm-2 control-label\">\n" +
    "        <span class=\"red\" ng-show=\"options.required\">*</span>\n" +
    "        {{options.displayName}}:\n" +
    "    </span>\n" +
    "\n" +
    "    <div class=\"col-sm-9\">\n" +
    "        <textarea\n" +
    "                ng-hide=\"options.disable\"\n" +
    "                class=\"form-control\"\n" +
    "                ng-disabled=\"options.forbid\"\n" +
    "                ng-model=\"result.value\"\n" +
    "                name=\"{{options.name}}\"\n" +
    "                ng-maxlength=\"{{options.maxLength}}\"\n" +
    "                ng-minlength=\"{{options.minLength}}\"\n" +
    "                input-validate=\"errorOption\"\n" +
    "                placeholder=\"{{options.placeholder}}\"\n" +
    "                ng-change=\"options.changeHandler(result.value,this)\"\n" +
    "                ng-blur=\"options.blurHandler(result.value,this)\"\n" +
    "                ng-required=\"{{options.required}}\"\n" +
    "                >\n" +
    "\n" +
    "        </textarea>\n" +
    "            <span ng-show=\"options.disable\" class=\"display-name textarea-value\">\n" +
    "                {{displayValue|emptyFormat}}\n" +
    "            </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/common/directive/inputValidate/tpl.html",
    "<div class=\"directive-inputValidate\">\n" +
    "    <span\n" +
    "            ng-show=\"form.$submitted && form[name].$error.required &&(!form[name].$error.requiredSubmitted)\">\n" +
    "        请{{optTip}}{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form.$submitted && form[name].$error.fileRequired &&(!form[name].$error.requiredSubmitted)\">\n" +
    "        请上传{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form.$submitted && form[name].$error.requiredSubmitted\">\n" +
    "        请{{optTip}}{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.maxlength\">\n" +
    "        请输入少于{{maxlength}}个字符的{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.minlength\">\n" +
    "        请输入不少于{{minlength}}个字符的{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.number\">\n" +
    "        请输入数字\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.date\">\n" +
    "        请输入正确的日期\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.pattern\">\n" +
    "        请输入正确的{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.common\">\n" +
    "        请输入正确的{{options.displayName}}\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.min\">\n" +
    "        请输入大于{{min|dateFormat}}的日期\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.max\">\n" +
    "        请输入小于{{max|dateFormat}}的日期\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.sugguestionRequired\">\n" +
    "        请选择{{options.displayName}}\n" +
    "     </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.email\">\n" +
    "        请输入正确的邮箱\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.url\">\n" +
    "        请输入正确的url地址\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.file\">\n" +
    "        文件格式不正确\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.dateRequired\">\n" +
    "        请输入日期\n" +
    "            </span>\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.month\">\n" +
    "        请输入正确日期\n" +
    "            </span>\n" +
    "\n" +
    "    <!--for nameSugguestion。。。-->\n" +
    "    <span\n" +
    "            ng-show=\"form[name].$error.parse\">\n" +
    "        请从下拉列表中选择\n" +
    "            </span>\n" +
    "</div>");
  $templateCache.put("src/common/directive/itemSet/tpl.html",
    "<div class=\"directive-item-set\">\n" +
    "    <div ng-repeat=\"item in listData\" class=\"data-item\"\n" +
    "         class=\"item\">\n" +
    "        <div ng-if=\"!options.tpl\" class=\"btn btn-default name\">\n" +
    "            {{item.name}}\n" +
    "        </div>\n" +
    "        <div ng-if=\"options.tpl\" class=\"inline-block name-content\"\n" +
    "             compile=\"options.tpl\">\n" +
    "        </div>\n" +
    "            <span class=\"glyphicon delete\"\n" +
    "                  ng-click=\"delClickHandler(item, $index)\">\n" +
    "            </span>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/common/directive/multiName/customTemplate.html",
    "<div style=\"padding-left: 10px\">\n" +
    "    {{match.model.displayName}},{{match.model.username}}\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/multiName/itemSetTpl.html",
    "<span class=\"item-set-content\">\n" +
    "            {{item.name}},{{item.userName}}\n" +
    "</span>");
  $templateCache.put("src/common/directive/multiName/tpl.html",
    "<div class=\"directive-multiName\">\n" +
    "    <input type=\"text\" ng-model=\"value\"\n" +
    "           name=\"{{name}}\"\n" +
    "           ng-keydown=\"onkeydown\"\n" +
    "           ng-disabled=\"disable\"\n" +
    "           ng-required=\"{{require}}\"\n" +
    "           input-validate=\"errorOption\"\n" +
    "           typeahead-append-to-body=false\n" +
    "           placeholder=\"请输入邮箱前缀,并从下拉列表中选择\" typeahead-editable=\"false\"\n" +
    "           typeahead-on-select=\"typeaheadOnSelect(item)\"\n" +
    "           typeahead=\"account for account in getAccounts($viewValue) | filter:{username:$viewValue}\"\n" +
    "           class=\"form-control\"\n" +
    "            >\n" +
    "    <div item-set ng-model=\"listValue\" options=\"itemSetOption\"\n" +
    "         class=\"names-container\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/common/directive/multiSelect/tpl.html",
    "<div class=\"form-control directives-multiSelect\" dropdown\n" +
    "     is-open=\"status.isopen\">\n" +
    "    <div class=\"dropdown-toggle content\"\n" +
    "         data-toggle=\"dropdown\" title=\"{{selectedNames}}\">\n" +
    "        {{selectedNames}}\n" +
    "        <span class=\"caret\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <ul class=\"list-group\" stop-event=\"click\">\n" +
    "            <li class=\"list-group-item\" id=\"{{item.id}}\"\n" +
    "                ng-repeat=\"item in options.items\">\n" +
    "                <input type=\"checkbox\" ng-model=\"item.checked\"\n" +
    "                       ng-change=\"itemChange(item.checked)\">\n" +
    "                {{item.name}}\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
  $templateCache.put("src/common/directive/nameSuggestion/customTemplate.html",
    "<div style=\"padding-left: 10px\">\n" +
    "    {{match.model.displayName}},{{match.model.username}}\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/nameSuggestion/tpl.html",
    "<input type=\"text\" ng-model=\"value\"\n" +
    "       name=\"{{name}}\"\n" +
    "       title=\"输入邮箱前缀,并从下拉列表中选择\"\n" +
    "       ng-disabled=\"disable\"\n" +
    "       ng-required=\"{{require}}\"\n" +
    "       input-validate=\"errorOption\"\n" +
    "       typeahead-append-to-body=false\n" +
    "       placeholder=\"输入邮箱前缀,并从下拉列表中选择\" typeahead-editable=\"false\"\n" +
    "       typeahead-on-select=\"typeaheadOnSelect(item)\"\n" +
    "       typeahead=\"account for account in getAccounts($viewValue) | filter:{username:$viewValue}\"\n" +
    "       class=\"form-control\"\n" +
    "        >\n" +
    "\n" +
    "");
  $templateCache.put("src/common/directive/popoverHtmlUnsafePopup/tpl.html",
    "<div class=\"popover {{placement}} perform\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "    <div class=\"arrow\"></div>\n" +
    "    <div class=\"popover-inner\">\n" +
    "        <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
    "        <button ng-show=\"title\" style=\"position: absolute;top: 3px;right: 10px;\"  ng-click=\"closePopover()\" class=\"close\"><span>x</span></button>\n" +
    "        <div class=\"popover-content\" bind-html-unsafe=\"content\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/directive/singleSelect/tpl.html",
    "<ul class=\"list-inline directives-single-select\">\n" +
    "    <li\n" +
    "            ng-repeat=\"item in values track by $index\"\n" +
    "            ng-click=\"valueChange(item.key,$index)\"\n" +
    "            ng-class=\"{active: item.key == value,pointer:item.key != value}\">\n" +
    "        {{item.value}}\n" +
    "        <span class=\"split\" values= 'months' ng-if=\"$index!=(values.length-1)\">\n" +
    "            |</span>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
  $templateCache.put("src/common/directive/structureSelector/tpl.html",
    "<div class=\"directives-structureSelector\" dropdown\n" +
    "     is-open=\"status.isopen\">\n" +
    "    <input class=\"form-control dropdown-toggle content\"\n" +
    "           value=\"{{selectedNodeName}}\"\n" +
    "           ng-disabled=\"disable\"\n" +
    "           ng-required=\"{{require}}\"\n" +
    "           readonly\n" +
    "           name=\"{{name}}\"\n" +
    "           input-validate=\"errorOption\"\n" +
    "           data-toggle=\"dropdown\" title=\"{{selectedNodeName}}\"\n" +
    "            />\n" +
    "\n" +
    "    <div class=\"dropdown-menu\" role=\"menu\" stop-event=\"click\">\n" +
    "        <treecontrol class=\"tree-light\" tree-model=\"structureData\"\n" +
    "                     options=\"opts\"\n" +
    "                     selected-node=\"selectedNode\"\n" +
    "                     expanded-nodes=\"expandedNodes\"\n" +
    "                     filter-expression=\"nodeFilter\"\n" +
    "                     filter-comparator=\"comparator\"\n" +
    "                     on-selection=\"onSelect(node)\">\n" +
    "            <span>\n" +
    "                <span class=\"node-name\" node-id=\"{{node.id}}\">\n" +
    "                {{node.label}}\n" +
    "                </span>\n" +
    "            </span>\n" +
    "            <span class=\"line\" ng-show=\"node.parentId\"></span>\n" +
    "        </treecontrol>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
  $templateCache.put("src/common/directive/table/tpl.html",
    "<div class=\"directive-table\">\n" +
    "    <div ng-class=\"{'body-scroll': options.bodyScroll}\">\n" +
    "        <div class=\"header\" ng-show=\"options.totalCount\">\n" +
    "            共 <span class=\"count\">{{options.totalCount}}</span> 条\n" +
    "        </div>\n" +
    "        <div class=\"table-area\">\n" +
    "            <table class=\"table table-striped table-bordered\">\n" +
    "                <!--两行表头-->\n" +
    "                <tbody ng-if=\"options.hasTwoHead\" class=\"tbody-head\">\n" +
    "                    <tr>\n" +
    "                        <td ng-show=\"options.canSelect\" rowspan=\"2\"\n" +
    "                            class=\"checkbox-col td-head\" style=\"width: 20px\">\n" +
    "                            <input type=\"checkbox\" ng-model=\"$parent.selectCurAll\"\n" +
    "                            ng-change=\"onSelectCurAllChange()\">\n" +
    "                        </td>\n" +
    "                        <td ng-repeat=\"col in options.cols\"\n" +
    "                            rowspan=\"{{col.rowspan}}\" class=\"td-head\"\n" +
    "                            ng-style=\"col.style\"\n" +
    "                            colspan=\"{{col.colspan||1}}\"\n" +
    "                            ng-show=\"col.rowspan || col.headOneDisplayName\">\n" +
    "                            {{col.headOneDisplayName||col.displayName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td ng-repeat=\"col in options.cols\" ng-if=\"!col.rowspan\"\n" +
    "                            ng-style=\"col.style\">\n" +
    "                            {{col.displayName}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "                <!--一行表头-->\n" +
    "                <thead ng-if=\"!options.hasTwoHead\">\n" +
    "                    <th ng-show=\"options.canSelect\" class=\"checkbox-col\"\n" +
    "                        style=\"width: 20px\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"$parent.selectCurAll\"\n" +
    "                        ng-change=\"onSelectCurAllChange()\">\n" +
    "                    </th>\n" +
    "                    <th ng-repeat=\"col in options.cols\"\n" +
    "                        class=\"td-head\" ng-style=\"col.style\">\n" +
    "                        {{col.displayName}}\n" +
    "                    </th>\n" +
    "                </thead>\n" +
    "                <tbody class=\"tbody\">\n" +
    "                    <tr ng-repeat=\"item in dataSource track by $index\"\n" +
    "                        ng-style=\"item.style\"\n" +
    "                        ng-class=\"{success: options.curItemId &&(item.id==options.curItemId)}\">\n" +
    "                        <td ng-show=\"options.canSelect\" class=\"checkbox-col\"\n" +
    "                            style=\"width: 20px\">\n" +
    "                            <input type=\"checkbox\" ng-model=\"item.selected\"\n" +
    "                            ng-change=\"onItemSelectChange($index,item.selected)\">\n" +
    "                        </td>\n" +
    "                        <td ng-repeat=\"col in options.cols track by $index\"\n" +
    "                            ng-style=\"col.style\">\n" +
    "                            <div ng-if=\"col.cellTpl\" compile=\"col.cellTpl\"></div>\n" +
    "                            <div ng-if=\"!col.cellTpl\">\n" +
    "                                {{item[col.field]}}\n" +
    "                            </div>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            <div class=\"no-data\" ng-show=\"!dataSource.length\">\n" +
    "                <div class=\"no-data-tip\">暂无结果</div>\n" +
    "            </div>\n" +
    "            <div class=\"no-data\" ng-show=\"options.isLoading\">\n" +
    "                <img src=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"page-container\" ng-show=\"options.totalCount\">\n" +
    "            <pagination total-items=\"options.totalCount\" ng-model=\"curPage\"\n" +
    "                ng-change=\"onPageChanged()\"\n" +
    "                items-per-page=\"{{options.pageSize}}\"\n" +
    "                previous-text=\"上一页\"\n" +
    "                next-text=\"下一页\"\n" +
    "                first-text=\"首页\"\n" +
    "                last-text=\"末页\"\n" +
    "                max-size=\"6\" class=\"\" boundary-links=\"true\"\n" +
    "            rotate=\"false\" num-pages=\"numPages\"></pagination>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/common/directive/timerButton/tpl.html",
    "<span class=\"btn btn-info main\"\n" +
    "        ng-show=\"!showTimer\" ng-click=\"clickHandler()\">发送</span>\n" +
    "<span class=\"btn btn-info timer\" ng-show=\"showTimer\" disabled>\n" +
    "    {{remain}}秒后再次发送</span>");
  $templateCache.put("src/common/service/alert/alert.html",
    "<div class=\"common-service\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <label class=\"red\">\n" +
    "            {{tip}}\n" +
    "        </label>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-info\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/service/confirm/confirm.html",
    "<div class=\"common-service\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <label>\n" +
    "            {{tip}}\n" +
    "        </label>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-info\"\n" +
    "                ng-click=\"saveHandler()\">确定\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">取消\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/service/info/info.html",
    "<div class=\"common-service\">\n" +
    "    <div class=\"common-service-info\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            {{tip}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/common/service/login/login.html",
    "<div class=\"common-service-login\">\n" +
    "    <div class=\"login-container\">\n" +
    "        <div class=\"title\">登陆eHR</div>\n" +
    "        <div class=\"slogan\">你的光芒，照亮我们的梦想!</div>\n" +
    "        <div class=\"\">\n" +
    "            <input type=\"text\"\n" +
    "                   placeholder=\"邮箱前缀\" class=\"form-control\"\n" +
    "                   ng-model=\"username\">\n" +
    "        </div>\n" +
    "        <div class=\"\">\n" +
    "            <input type=\"password\"\n" +
    "                   class=\"form-control\"\n" +
    "                   placeholder=\"密码\" ng-model=\"password\">\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                    ng-click=\"saveHandler()\">登陆\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/contractCompany/mod/tpl.html",
    "<div class=\"admin-structure-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modContractCompanyForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"saveHandler(modContractCompanyForm)\">保存\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/contractCompany/tableTpl/companyOpt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.modifyClick(item)\">修改</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/contractCompany/tableTpl/name.html",
    "<div class=\"name-field\" title=\"{{item.name}}\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/contractCompany/tpl.html",
    "<h5>\n" +
    "    <span>签约公司配置</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"row admin-contractCompany\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"addCompany()\">新增\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"companyTableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/directive/companyInfo/tpl.html",
    "<div class=\"admin-directive admin-directive-companyInfo\">\n" +
    "    <div class=\"wraper-show\" ng-show=\"!editing\">\n" +
    "        <span class=\"time\">\n" +
    "            {{options.companyName}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{options.departmentNames}}\n" +
    "        </span>\n" +
    "        <span class=\"btn btn-sm btn-warning\" ng-click=\"onEdit()\">编辑</span>\n" +
    "        <span class=\"btn btn-sm btn-warning\" ng-click=\"onDel()\">删除</span>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"editing\">\n" +
    "        <form class=\"form-horizontal\" name=\"companyForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-1 control-label\">\n" +
    "                    公司:\n" +
    "                </label>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <select ng-model=\"options.companyId\"\n" +
    "                            class=\"form-control\"\n" +
    "                            name=\"company\"\n" +
    "                            required=\"true\"\n" +
    "                            ng-options=\"m.id as m.name for m in companys\">\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <label class=\"col-sm-1 control-label\">\n" +
    "                    部门:\n" +
    "                </label>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <div multi-select ng-model=\"options.departmentIds\"\n" +
    "                         options=\"departmentsSelectOptions\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "             <span class=\"btn btn-sm btn-warning\"\n" +
    "                   ng-click=\"onEditSave(companyForm)\">确定</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"onCancelEdit()\">取消</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/directive/levelInfo/tpl.html",
    "<div class=\"admin-directive admin-directive-levelInfo\">\n" +
    "    <div class=\"wraper-show\" ng-show=\"!editing\">\n" +
    "        <span class=\"col1\">\n" +
    "            {{options.level}}\n" +
    "        </span>\n" +
    "        <span class=\"col2\">\n" +
    "            {{options.levelName}}\n" +
    "        </span>\n" +
    "\n" +
    "        <div class=\"col3\">\n" +
    "            <span ng-show='!options.disable' class=\"btn btn-sm btn-warning\"\n" +
    "                  ng-click=\"onDel()\">删除</span>\n" +
    "            <span ng-show='!options.disable' class=\"btn btn-sm btn-warning\"\n" +
    "                  ng-click=\"onEdit()\">编辑</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"editing\">\n" +
    "        <form class=\"form-horizontal\" name=\"levelForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.level\"\n" +
    "                     ng-model=\"editInfo.level\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.levelName\"\n" +
    "                     ng-model=\"editInfo.levelName\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"center\">\n" +
    "               <span class=\"btn btn-sm btn-warning\"\n" +
    "                     ng-click=\"onEditSave(levelForm)\">保存</span>\n" +
    "                <span class=\"btn btn-sm btn-default\"\n" +
    "                      ng-click=\"onCancelEdit()\">取消</span>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/directive/structureInfo/tpl.html",
    "<div class=\"admin-directive admin-directive-structureInfo\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">组织名称:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.name}}\">{{info.name}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">上级组织:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.parentStructureName}}\">\n" +
    "                {{info.parentStructureName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">负责人:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.leaderName}}\">\n" +
    "                {{info.ownerName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">招聘HR:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.ZPHRName.join(',')}}\">\n" +
    "                {{info.recruitHRName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">薪酬HR:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.XCHRName.join(',')}}\">\n" +
    "                {{info.salaryHRName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">员工关系HR:</div>\n" +
    "            <div class=\"col-sm-9 content\" title=\"{{info.GXHRName.join(',')}}\">\n" +
    "                {{info.relationshipHRName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">HRBP:</div>\n" +
    "            <div class=\"col-sm-9 content\"\n" +
    "                 title=\"{{info.businessPartnerHRName.join(',')}}\">\n" +
    "                {{info.businessPartnerHRName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">培训HR:</div>\n" +
    "            <div class=\"col-sm-9 content\"\n" +
    "                 title=\"{{info.trainingHRName.join(',')}}\">\n" +
    "                {{info.trainingHRName.join(',')}}\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">资产管理员:</div>\n" +
    "            <div class=\"col-sm-9 content\"\n" +
    "                 title=\"{{info.assetManagerName.join(',')}}\">\n" +
    "                {{info.assetManagerName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 name\">IT负责人:</div>\n" +
    "            <div class=\"col-sm-9 content\"\n" +
    "                 title=\"{{info.itOwnerName.join(',')}}\">\n" +
    "                {{info.itOwnerName.join(',')}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/disability/mod/tpl.html",
    "<div class=\"admin-structure-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">新增员工</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modContractCompanyForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2\">员工：</label>\n" +
    "                <div class=\"col-sm-4\" name-suggestion\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"saveHandler(modContractCompanyForm)\">保存\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/disability/tableTpl/name.html",
    "<div class=\"name-field\" title=\"{{item.name}}\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/disability/tableTpl/opt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.delClick(item)\">删除</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/disability/tpl.html",
    "<h5>\n" +
    "    <span>残疾员工名单</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"row admin-disability\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"addDisability()\">新增\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"disabilityTableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/holiday/mod/tpl.html",
    "<div class=\"admin-structure-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modCalendarForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"saveHandler(modCalendarForm)\">保存\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/holiday/tableTpl/name.html",
    "<div class=\"name-field pointer\"\n" +
    "     ng-class=\"{'blue': item.id == mainScope.cid}\"\n" +
    "     title=\"{{item.name}}\"\n" +
    "     ng-click=\"mainScope.nameClick(item)\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/holiday/tableTpl/opt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.modifyClick(item)\">\n" +
    "            修改名称</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/holiday/tpl.html",
    "<h5>\n" +
    "    <span>工作日配置</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"admin-holiday row\">\n" +
    "        <div class=\"col-sm-6 border-right\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"add({})\">新增模板\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"tableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div>{{curName}}</div>\n" +
    "            <div class=\"form-inline \">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label>请选择年份：</label>\n" +
    "                    <select class=\"form-control\"\n" +
    "                            ng-model=\"query.year\" ng-change=\"yearChangeHandler()\"\n" +
    "                            ng-options=\"m for m in years\">\n" +
    "                    </select>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                <span single-select\n" +
    "                      ng-model=\"query.month\"\n" +
    "                      click-handler='monthChangeHandler(val,index)'\n" +
    "                      values=\"months\">\n" +
    "\n" +
    "                </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"date-pick-wrap\">\n" +
    "                <div class=\"header\">{{query.year}}年{{query.month}}月</div>\n" +
    "                <ul class=\"content\">\n" +
    "                    <li ng-repeat=\"val in weeks\">\n" +
    "                        <span>{{val}}</span>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"item in days\"\n" +
    "                        ng-class=\"{'holiday': item.isHoliday}\"\n" +
    "                        ng-click=\"dayClickHandler(item)\">\n" +
    "                        <span>{{item.value}}</span>\n" +
    "                        <span ng-show=\"item.isHoliday\" class=\"holiday-icon\">休</span>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"row\" style=\"text-align: center\">\n" +
    "                <span class=\"btn btn-primary\" ng-click=\"saveHandler()\">保存</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/level/levelAdd.html",
    "<div class=\"wraper-edit\" ng-show=\"addingLevel\">\n" +
    "    <form class=\"form-horizontal\" name=\"levelAddForm\"\n" +
    "          novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"levelOptions.level\"\n" +
    "                 ng-model=\"levelAdd.level\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"levelOptions.levelName\"\n" +
    "                 ng-model=\"levelAdd.levelName\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"center\">\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"levelAdd.onSave(levelAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"levelAdd.onCancel()\">取消</span>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/level/mod/tpl.html",
    "<div class=\"admin-level-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modLevelForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"saveHandler(modLevelForm)\">保存\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/level/tableTpl/name.html",
    "<div class=\"name-field pointer\"\n" +
    "     ng-class=\"{'blue': item.id == mainScope.tid}\"\n" +
    "     title=\"{{item.name}}\"\n" +
    "     ng-click=\"mainScope.nameClick(item)\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/level/tableTpl/opt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.modifyClick(item)\">\n" +
    "            修改名称</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/level/tpl.html",
    "<h5>\n" +
    "    <span>等级模板配置</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"admin-level row\">\n" +
    "        <div class=\"col-sm-6 border-right\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"add({})\">新增模板\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"tableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"cur-name\" >{{curName}}</div>\n" +
    "            <div class=\"form-inline \">\n" +
    "                <div>\n" +
    "                    <span single-select\n" +
    "                          ng-model=\"type\"\n" +
    "                          click-handler='typeChangeHandler(val,index)'\n" +
    "                          values=\"types\">\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div level-info\n" +
    "                 ng-repeat=\"item in levelList\"\n" +
    "                 options=\"item\">\n" +
    "            </div>\n" +
    "            <div\n" +
    "                    ng-include=\"'src/module/admin/level/levelAdd.html'\"></div>\n" +
    "            <div class=\"add-wrap\">\n" +
    "                <span class=\"add\" ng-click=\"levelAdd.addClick()\">\n" +
    "                    <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "                    添加等级\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/office/mod/tpl.html",
    "<div class=\"admin-structure-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modOfficeForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"saveHandler(modOfficeForm)\">保存\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/office/tableTpl/name.html",
    "<div class=\"name-field\" title=\"{{item.name}}\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/office/tableTpl/opt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.modifyClick(item)\">修改</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/office/tpl.html",
    "<h5>\n" +
    "    <span>工作地点配置</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"row admin-office\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"addOffice()\">新增\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"officeTableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/opt/editKeyInfo/tpl.html",
    "<div class=\"hr-opt-editStructure\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"editKeyInfoForm\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.lawName\"\n" +
    "                     ng-model=\"lawName\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.sex\"\n" +
    "                     ng-model=\"sex\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(editKeyInfoForm)\">保存\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/admin/opt/editStructure/tpl.html",
    "<div class=\"hr-opt-editStructure\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"editStructureForm\">\n" +
    "            <div class=\"form-group\" ng-show=\"showName\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.parentStructure\"\n" +
    "                     ng-model=\"parentStructure\" ng-show=\"showParentStructure\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"showName\">\n" +
    "                <div input-control options=\"inputOptions.shortName\"\n" +
    "                     ng-model=\"shortName\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"\n" +
    "                inputOptions.numberPrefix\"\n" +
    "                     ng-model=\"numberPrefix\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <p class=\"sub-title\">基本信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.isKeyNode\"\n" +
    "                     ng-model=\"isKeyNode\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.calendar\"\n" +
    "                     ng-model=\"calendar\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.mailSuffix\"\n" +
    "                     ng-model=\"mailSuffix\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"\n" +
    "                inputOptions.lowestSalary\"\n" +
    "                     ng-model=\"lowestSalary\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-show=\"isKeyNode\">\n" +
    "                <div input-control\n" +
    "                     ng-show=\"isKeyNode\" options=\"inputOptions.isPunchCard\"\n" +
    "                     ng-model=\"isPunchCard\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"isPunchCard && isKeyNode\">\n" +
    "                <div input-control options=\"inputOptions.reception\"\n" +
    "                     ng-model=\"reception\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.punchDevice\"\n" +
    "                     ng-model=\"punchDevice\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"isKeyNode\">\n" +
    "                <div input-control options=\"inputOptions.socialSecurityCity\"\n" +
    "                     ng-model=\"socialSecurityCity\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.mealSubsidy\"\n" +
    "                     ng-model=\"mealSubsidy\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"isKeyNode\">\n" +
    "                <div input-control options=\"inputOptions.taxLocal\"\n" +
    "                     ng-model=\"taxLocal\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.isWelfareDefault\"\n" +
    "                     ng-model=\"isWelfareDefault\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\" ng-show=\"isKeyNode\">\n" +
    "                <div input-control options=\"inputOptions.levelTemplate\"\n" +
    "                     ng-model=\"levelTemplate\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.isGroupNode\"\n" +
    "                     ng-model=\"isGroupNode\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <hr>\n" +
    "            <p class=\"sub-title\">人员配置</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.owner\"\n" +
    "                     ng-model=\"owner\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.businessPartnerHR\"\n" +
    "                     ng-model=\"businessPartnerHR\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.recruitHR\"\n" +
    "                     ng-model=\"recruitHR\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.salaryHR\"\n" +
    "                     ng-model=\"salaryHR\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.relationshipHR\"\n" +
    "                     ng-model=\"relationshipHR\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.trainingHR\"\n" +
    "                     ng-model=\"trainingHR\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.assetManager\"\n" +
    "                     ng-model=\"assetManager\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.itOwner\"\n" +
    "                     ng-model=\"itOwner\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(editStructureForm)\">保存\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/admin/permission/tpl.html",
    "<div class=\"admin-permission\">\n" +
    "    <h5>\n" +
    "        <span>权限配置</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <div common-info number=\"{{number}}\"></div>\n" +
    "    <div class=\"content-container form-horizontal\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                <label>权限角色分配:</label>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"HRBP\">HRBP\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"ZPHR\">招聘HR\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"XCHR\">薪酬HR\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"GXHR\">员工关系角色\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"PXHR\">培训HR\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"work-title\">\n" +
    "            <label class=\"control-label\">公司分配:</label>\n" +
    "        <span class=\"add pointer\" ng-click=\"companyAddClick()\"><i\n" +
    "                class=\"glyphicon glyphicon-plus\"></i>添加</span>\n" +
    "        </div>\n" +
    "        <div class=\"add-block\" ng-show='isAdding'>\n" +
    "            <form class=\"form-horizontal\" name=\"companyAddForm\"\n" +
    "                  novalidate=\"novalidate\">\n" +
    "                <div class=\"form-group row\">\n" +
    "                    <label class=\"col-sm-1 control-label\">\n" +
    "                        公司:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <select ng-model=\"add.company\"\n" +
    "                                class=\"form-control\"\n" +
    "                                name=\"company\"\n" +
    "                                ng-change=\"companyChangeHandler(add.company)\"\n" +
    "                                required=\"true\"\n" +
    "                                ng-options=\"m.id as m.name for m in add.companys\">\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                    <label class=\"col-sm-1 control-label\">\n" +
    "                        部门:\n" +
    "                    </label>\n" +
    "\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        <div multi-select ng-model=\"add.departments\"\n" +
    "                             options=\"departmentsSelectOptions\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                         <span class=\"btn btn-sm btn-warning\"\n" +
    "                               ng-click=\"add.onSave(companyAddForm)\">添加</span>\n" +
    "                        <span class=\"btn btn-sm btn-default\"\n" +
    "                              ng-click=\"add.onCancel()\">取消</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in manageRange\">\n" +
    "            <div company-info options=\"item\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"save\">\n" +
    "            <button class=\"btn btn-sm btn-primary\" ng-click=\"saveAuth()\">保存\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/socialSecurityCity/mod/tpl.html",
    "<div class=\"admin-socialSecurityCity-mod\">\n" +
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\"\n" +
    "            ng-click=\"closeHandler()\"\n" +
    "            data-dismiss=\"modal\"><span\n" +
    "            aria-hidden=\"true\">&times;</span><span\n" +
    "            class=\"sr-only\">Close</span>\n" +
    "    </button>\n" +
    "    <h4 class=\"modal-title\">{{title}}</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "<form class=\"form-horizontal\" name=\"modSocialSecurityCityForm\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "<div class=\"content-block\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control options=\"inputOptions.name\"\n" +
    "             ng-model=\"name\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"content-block\">\n" +
    "    <p class=\"sub-title\">社保基数配置</p>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.socialSecurityMin\"\n" +
    "             ng-model=\"socialSecurityMin\">\n" +
    "        </div>\n" +
    "        <div input-control options=\"inputOptions.socialSecurityMax\"\n" +
    "             ng-model=\"socialSecurityMax\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.socialSecurityDefault\"\n" +
    "             ng-model=\"socialSecurityDefault\">\n" +
    "        </div>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.socialSecurityBySalary\"\n" +
    "             ng-model=\"socialSecurityBySalary\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.needFiveBase\"\n" +
    "             ng-model=\"needFiveBase\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content-block\">\n" +
    "<p class=\"sub-title\">五险配置</p>\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "    <th> 类型</th>\n" +
    "    <th> 养老保险</th>\n" +
    "    <th> 失业保险</th>\n" +
    "    <th> 医疗保险</th>\n" +
    "    <th> 工伤保险</th>\n" +
    "    <th> 生育保险</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr>\n" +
    "    <td>个人基数下限(元)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowMin\"\n" +
    "             ng-model=\"endowMin\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployMin\"\n" +
    "             ng-model=\"unemployMin\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalMin\"\n" +
    "             ng-model=\"medicalMin\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryMin\"\n" +
    "             ng-model=\"injuryMin\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityMin\"\n" +
    "             ng-model=\"maternityMin\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "    <td>个人基数上限(元)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowMax\"\n" +
    "             ng-model=\"endowMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployMax\"\n" +
    "             ng-model=\"unemployMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalMax\"\n" +
    "             ng-model=\"medicalMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryMax\"\n" +
    "             ng-model=\"injuryMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityMax\"\n" +
    "             ng-model=\"maternityMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<tr>\n" +
    "<td>公司基数下限(元)</td>\n" +
    "<td>\n" +
    "    <div input-control\n" +
    "         options=\"inputOptions.endowCMin\"\n" +
    "         ng-model=\"endowCMin\">\n" +
    "    </div>\n" +
    "</td>\n" +
    "<td>\n" +
    "    <div input-control\n" +
    "         options=\"inputOptions.unemployCMin\"\n" +
    "         ng-model=\"unemployCMin\">\n" +
    "    </div>\n" +
    "</td>\n" +
    "<td>\n" +
    "    <div input-control\n" +
    "         options=\"inputOptions.medicalCMin\"\n" +
    "         ng-model=\"medicalCMin\">\n" +
    "    </div>\n" +
    "</td>\n" +
    "<td>\n" +
    "    <div input-control\n" +
    "         options=\"inputOptions.injuryCMin\"\n" +
    "         ng-model=\"injuryCMin\">\n" +
    "    </div>\n" +
    "</td>\n" +
    "<td>\n" +
    "    <div input-control\n" +
    "         options=\"inputOptions.maternityCMin\"\n" +
    "         ng-model=\"maternityCMin\">\n" +
    "    </div>\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "    <td>公司基数上限(元)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowCMax\"\n" +
    "             ng-model=\"endowCMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployCMax\"\n" +
    "             ng-model=\"unemployCMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalCMax\"\n" +
    "             ng-model=\"medicalCMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryCMax\"\n" +
    "             ng-model=\"injuryCMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityCMax\"\n" +
    "             ng-model=\"maternityCMax\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "<tr>\n" +
    "    <td>本地城镇-个人缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowLCityPP\"\n" +
    "             ng-model=\"endowLCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployLCityPP\"\n" +
    "             ng-model=\"unemployLCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control class=\"inline\"\n" +
    "             options=\"inputOptions.medicalLCityPP\"\n" +
    "             ng-model=\"medicalLCityPP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalLCityPlus\"\n" +
    "             ng-model=\"medicalLCityPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryLCityPP\"\n" +
    "             ng-model=\"injuryLCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityLCityPP\"\n" +
    "             ng-model=\"maternityLCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr>\n" +
    "    <td>本地城镇-公司缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowLCityCP\"\n" +
    "             ng-model=\"endowLCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployLCityCP\"\n" +
    "             ng-model=\"unemployLCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalLCityCP\"\n" +
    "             ng-model=\"medicalLCityCP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalLCityCPlus\"\n" +
    "             ng-model=\"medicalLCityCPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryLCityCP\"\n" +
    "             ng-model=\"injuryLCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityLCityCP\"\n" +
    "             ng-model=\"maternityLCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "<tr>\n" +
    "    <td>本地农村-个人缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowLCtryPP\"\n" +
    "             ng-model=\"endowLCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployLCtryPP\"\n" +
    "             ng-model=\"unemployLCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control class=\"inline\"\n" +
    "             options=\"inputOptions.medicalLCtryPP\"\n" +
    "             ng-model=\"medicalLCtryPP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalLCtryPlus\"\n" +
    "             ng-model=\"medicalLCtryPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryLCtryPP\"\n" +
    "             ng-model=\"injuryLCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityLCtryPP\"\n" +
    "             ng-model=\"maternityLCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "    <td>本地农村-公司缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowLCtryCP\"\n" +
    "             ng-model=\"endowLCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployLCtryCP\"\n" +
    "             ng-model=\"unemployLCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalLCtryCP\"\n" +
    "             ng-model=\"medicalLCtryCP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalLCtryCPlus\"\n" +
    "             ng-model=\"medicalLCtryCPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryLCtryCP\"\n" +
    "             ng-model=\"injuryLCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityLCtryCP\"\n" +
    "             ng-model=\"maternityLCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "<tr>\n" +
    "    <td>外地城镇-个人缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowFCityPP\"\n" +
    "             ng-model=\"endowFCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployFCityPP\"\n" +
    "             ng-model=\"unemployFCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control class=\"inline\"\n" +
    "             options=\"inputOptions.medicalFCityPP\"\n" +
    "             ng-model=\"medicalFCityPP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalFCityPlus\"\n" +
    "             ng-model=\"medicalFCityPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryFCityPP\"\n" +
    "             ng-model=\"injuryFCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityFCityPP\"\n" +
    "             ng-model=\"maternityFCityPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr>\n" +
    "    <td>外地城镇-公司缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowFCityCP\"\n" +
    "             ng-model=\"endowFCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployFCityCP\"\n" +
    "             ng-model=\"unemployFCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalFCityCP\"\n" +
    "             ng-model=\"medicalFCityCP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalFCityCPlus\"\n" +
    "             ng-model=\"medicalFCityCPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryFCityCP\"\n" +
    "             ng-model=\"injuryFCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityFCityCP\"\n" +
    "             ng-model=\"maternityFCityCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "<tr>\n" +
    "    <td>外地农村-个人缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowFCtryPP\"\n" +
    "             ng-model=\"endowFCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployFCtryPP\"\n" +
    "             ng-model=\"unemployFCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control class=\"inline\"\n" +
    "             options=\"inputOptions.medicalFCtryPP\"\n" +
    "             ng-model=\"medicalFCtryPP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalFCtryPlus\"\n" +
    "             ng-model=\"medicalFCtryPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryFCtryPP\"\n" +
    "             ng-model=\"injuryFCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityFCtryPP\"\n" +
    "             ng-model=\"maternityFCtryPP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "<tr>\n" +
    "    <td>外地农村-公司缴纳比例(%)</td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.endowFCtryCP\"\n" +
    "             ng-model=\"endowFCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.unemployFCtryCP\"\n" +
    "             ng-model=\"unemployFCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.medicalFCtryCP\"\n" +
    "             ng-model=\"medicalFCtryCP\">\n" +
    "        </div>\n" +
    "        <span class=\"plus\">+</span>\n" +
    "\n" +
    "        <div input-control class=\"inline plus-input\"\n" +
    "             options=\"inputOptions.medicalFCtryCPlus\"\n" +
    "             ng-model=\"medicalFCtryCPlus\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.injuryFCtryCP\"\n" +
    "             ng-model=\"injuryFCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.maternityFCtryCP\"\n" +
    "             ng-model=\"maternityFCtryCP\">\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<div class=\"content-block\">\n" +
    "    <p class=\"sub-title\">公积金配置</p>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control options=\"inputOptions.houseFundMin\"\n" +
    "             ng-model=\"houseFundMin\">\n" +
    "        </div>\n" +
    "        <div input-control options=\"inputOptions.houseFundMax\"\n" +
    "             ng-model=\"houseFundMax\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control options=\"inputOptions.houseFundDefault\"\n" +
    "             ng-model=\"houseFundDefault\">\n" +
    "        </div>\n" +
    "        <div input-control options=\"inputOptions.houseFundBySalary\"\n" +
    "             ng-model=\"houseFundBySalary\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.houseFundPersonalPer\"\n" +
    "             ng-model=\"houseFundPersonalPer\">\n" +
    "        </div>\n" +
    "        <div input-control\n" +
    "             options=\"inputOptions.houseFundCompanyPer\"\n" +
    "             ng-model=\"houseFundCompanyPer\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-primary\"\n" +
    "            ng-click=\"saveHandler(modSocialSecurityCityForm)\">保存\n" +
    "    </button>\n" +
    "    <button type=\"button\" class=\"btn btn-default\"\n" +
    "            ng-click=\"closeHandler()\"\n" +
    "            data-dismiss=\"modal\">关闭\n" +
    "    </button>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/socialSecurityCity/tableTpl/name.html",
    "<div class=\"name-field\" title=\"{{item.name}}\">\n" +
    "    {{item.name}}\n" +
    "</div>");
  $templateCache.put("src/module/admin/socialSecurityCity/tableTpl/opt.html",
    "<div>\n" +
    "    <span>\n" +
    "        <a class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.modifyClick(item)\">修改</a>\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/admin/socialSecurityCity/tpl.html",
    "<h5>\n" +
    "    <span>社保缴纳城市配置</span>\n" +
    "</h5>\n" +
    "<div class=\"admin\">\n" +
    "    <div class=\"row admin-socialSecurityCity\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"table-opt-area\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"addCity()\">新增\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div options=\"cityTableOptions\" table-control></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/admin/structure/tpl.html",
    "<h5>\n" +
    "    <span>组织架构变更</span>\n" +
    "</h5>\n" +
    "<div class=\"admin admin-structure clearFloat\">\n" +
    "    <div class=\"tree-container\">\n" +
    "        <treecontrol class=\"tree-light\" tree-model=\"treeData\"\n" +
    "                     options=\"treeOptions\"\n" +
    "                     selected-node=\"selectedNode\"\n" +
    "                     expanded-nodes=\"expandedNodes\"\n" +
    "                     on-selection=\"onNodeSelect(node)\">\n" +
    "        <span class=\"tree-node\">\n" +
    "            <span class=\"node-name\" ng-click=\"viewNode(node)\"\n" +
    "                  ng-class=\"{'disabled': node.disable}\"\n" +
    "                  node-id=\"{{node.id}}\" level=\"{{node.level}}\">\n" +
    "                {{node.label}}\n" +
    "            </span>\n" +
    "            <i\n" +
    "                    ng-show=\"!node.disable\"\n" +
    "                    class=\"glyphicon glyphicon-plus-sign blue opt\" title=\"添加\"\n" +
    "                    ng-click=\"addNode(node)\"></i>\n" +
    "            <i ng-show=\"!node.disable\" class=\"glyphicon glyphicon-cog blue opt\"\n" +
    "               title=\"编辑\"\n" +
    "               ng-click=\"editNode(node)\"></i>\n" +
    "            <i ng-show=\"!node.disable\"\n" +
    "               class=\"glyphicon glyphicon-ban-circle blue opt\" title=\"隐藏\"\n" +
    "               ng-click=\"delNode(node)\"></i>\n" +
    "            <i ng-show=\"node.disable\"\n" +
    "               class=\"glyphicon glyphicon-play-circle blue opt\" title=\"恢复\"\n" +
    "               ng-click=\"enableNode(node)\"></i>\n" +
    "        </span>\n" +
    "            <span class=\"line\" ng-show=\"node.parentId\"></span>\n" +
    "        </treecontrol>\n" +
    "    </div>\n" +
    "    <div class=\"structure-info\" id=\"structure-info\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">组织名称:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\" title=\"{{info.name}}\">\n" +
    "                    {{info.name}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">简称:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\" title=\"{{info.shortName}}\">\n" +
    "                    {{info.shortName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">员工编号序列:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\" title=\"{{info.numberPrefix}}\">\n" +
    "                    {{info.numberPrefix}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" ng-show=\"hasParentNode\">\n" +
    "                <label class=\"col-sm-3 name\">上级组织:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.parentStructureName}}\">\n" +
    "                    {{info.parentStructureName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">负责人:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\" title=\"{{info.leaderName}}\">\n" +
    "                    {{info.ownerName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">招聘HR:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.ZPHRName.join(',')}}\">\n" +
    "                    {{info.recruitHRName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">薪酬HR:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.XCHRName.join(',')}}\">\n" +
    "                    {{info.salaryHRName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">员工关系HR:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.GXHRName.join(',')}}\">\n" +
    "                    {{info.relationshipHRName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">HRBP:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.businessPartnerHRName.join(',')}}\">\n" +
    "                    {{info.businessPartnerHRName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">培训HR:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.trainingHRName.join(',')}}\">\n" +
    "                    {{info.trainingHRName.join(',')}}\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">资产管理员:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.assetManagerName.join(',')}}\">\n" +
    "                    {{info.assetManagerName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">IT负责人:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.itOwnerName.join(',')}}\">\n" +
    "                    {{info.itOwnerName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">工资结算结点:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{ info.isKeyNode|boolean}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">社保缴纳城市:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{ info.socialSecurityCityName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">本地缴纳所得税:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{ info.taxLocal|boolean}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">默认有职位福利费:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{info.isWelfareDefault|boolean}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">职级体系模板:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{ info.levelTemplateName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">餐补:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{\n" +
    "                    info.mealSubsidy|emptyFormat}}元/天\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">是否打卡:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"> {{ info.isPunchCard|punchCard}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">前台:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.receptionName.join(',')}}\">\n" +
    "                    {{info.receptionName.join(',')}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">打卡机前缀:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.punchDevice}}\">\n" +
    "                    {{info.punchDevice}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">日历模板:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.calendarName}}\">\n" +
    "                    {{info.calendarName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <label class=\"col-sm-3 name\">邮箱后缀:</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8 content\"\n" +
    "                     title=\"{{info.mailSuffix}}\">\n" +
    "                    {{info.mailSuffix}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
  $templateCache.put("src/module/admin/tpl.html",
    "<div ui-view></div>");
  $templateCache.put("src/module/apply/detail/formalApply/tpl.html",
    "<div class=\"apply-detail-leave\">\n" +
    "    <h5>\n" +
    "        员工信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "    </div>\n" +
    "    <h5>\n" +
    "        试用期员工转正申请\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"change-info-container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                目标设定：\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\" ng-bind-html=\"applyInfo.workTarget\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                转正申请：\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\" ng-bind-html=\"applyInfo.contentAfter.formalApply\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/infos/tpl.html",
    "<div class=\"apply-detail\">\n" +
    "    <div class=\"apply-detail-structureAndSalary\">\n" +
    "        <h5>\n" +
    "            员工信息\n" +
    "        </h5>\n" +
    "\n" +
    "        <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "        </div>\n" +
    "        <h5>\n" +
    "            {{subTitle}}\n" +
    "        </h5>\n" +
    "\n" +
    "        <div class=\"change-info-container\">\n" +
    "            <div ng-repeat=\"item in changeList\" class=\"change-info row\">\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    {{item.fieldName}}:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    {{item.oldVal|emptyFormat}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    变更为:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    {{item.newVal|emptyFormat}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    生效日期:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    {{applyInfo.executeDate|dateFormat}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-2\">\n" +
    "                    变更原因:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    {{applyInfo.reason}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/leave/tpl.html",
    "<div class=\"apply-detail-leave\">\n" +
    "    <h5>\n" +
    "        员工信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "    </div>\n" +
    "    <h5>\n" +
    "        离职信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"change-info-container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                最后工作时间:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                {{applyInfo.contentAfter.leaveDate|dateFormat}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                离职原因:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                {{applyInfo.contentAfter.reasonName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                离职详细信息:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                {{applyInfo.contentAfter.detail}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/offerChange/tpl.html",
    "<div class=\"apply-detail-offerChange\">\n" +
    "    <h5>\n" +
    "        变动信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"change-info-container\">\n" +
    "        <div ng-repeat=\"item in changeList\" class=\"change-info row\">\n" +
    "            <div>\n" +
    "                <div class=\"col-sm-2 before-title\">\n" +
    "                    {{item.fieldName}}:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\" ng-if=\"item.field!='resumeUrl'\">\n" +
    "                    {{item.oldVal}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\" ng-if=\"item.field=='resumeUrl'\">\n" +
    "                    <a href=\"{{item.oldVal}}\" target=\"_blank\">下载</a>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-1\">\n" +
    "                    变更为:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\" ng-if=\"item.field!='resumeUrl'\">\n" +
    "                    {{item.newVal}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\" ng-if=\"item.field=='resumeUrl'\">\n" +
    "                    <a href=\"{{item.newVal}}\" target=\"_blank\">下载</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                变更原因:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                {{applyInfo.reason}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ui-view></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/offerInfos/tpl.html",
    "<div class=\"apply-detail-offerInfos form-horizontal\">\n" +
    "    <h5>\n" +
    "        部门人员信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"content-container\" style=\"padding-bottom: 0\" ng-hide=\"userInfo.isAgent\">\n" +
    "        <table class=\"table table-bordered table-condensed\">\n" +
    "            <tr>\n" +
    "                <th>&nbsp;</th>\n" +
    "                <th>正式员工</th>\n" +
    "                <th>实习生</th>\n" +
    "                <th>劳务</th>\n" +
    "            </tr>\n" +
    "            <tr ng-repeat=\"item in headCount\">\n" +
    "                <td>{{item.structureName}}</td>\n" +
    "                <td>{{item.regularCount}}</td>\n" +
    "                <td>{{item.traineeCount}}</td>\n" +
    "                <td>{{item.labourserviceCount}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content-container\" style=\"padding-bottom: 0\" ng-show=\"userInfo.isAgent\">\n" +
    "        <table class=\"table table-bordered table-condensed table-agent\">\n" +
    "            <tr>\n" +
    "                <td>{{structureName}}</td>\n" +
    "                <td>{{agentCount}}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <h5>\n" +
    "        候选人详细信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"content-container\">\n" +
    "        <!--非合作和半自然信息 -->\n" +
    "        <div class=\"content-block\" ng-hide=\"userInfo.isAgent\">\n" +
    "            <p class=\"sub-title\">自然信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">法律名:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.lawName}}</div>\n" +
    "                <div class=\"col-sm-2\">常用名:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.name}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">姓名拼音:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.namePinyin}}</div>\n" +
    "                <div class=\"col-sm-2\">性别:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.sex|sex}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">学历:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.degree|degree}}</div>\n" +
    "                <div class=\"col-sm-2\">身份证号:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.idCardNumber}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- 合作伙伴自然信息-->\n" +
    "        <div class=\"content-block\" ng-show=\"userInfo.isAgent\">\n" +
    "            <p class=\"sub-title\">自然信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">法律名:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.lawName}}</div>\n" +
    "                <div class=\"col-sm-2\">性别:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.sex|sex}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">学历:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.degree|degree}}</div>\n" +
    "                <div class=\"col-sm-2\">身份证号:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.idCardNumber}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!---联系方式-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">联系方式</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">手机号:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.mobile}}</div>\n" +
    "                <div class=\"col-sm-2\">邮箱:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.personalEmail}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <!---非合作伙伴基本信息-->\n" +
    "        <div class=\"content-block\" ng-hide=\"userInfo.isAgent\">\n" +
    "            <p class=\"sub-title\">基本信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">员工类型:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.type | type}}</div>\n" +
    "                <div class=\"col-sm-2\">直属领导:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.leaderName}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">组织架构:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.structureName}}</div>\n" +
    "                <div class=\"col-sm-2\">等级:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.level}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">职位:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.positionName}}</div>\n" +
    "                <div class=\"col-sm-2\">入职时间:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.promiseEnterDate|dateFormat}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">转正日期:</div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    {{offerInfos.formalDate|dateFormat}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">合同签约公司:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.contractCompanyName}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">社保缴纳城市:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.socialSecurityCityName}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!---合作伙伴基本信息-->\n" +
    "        <div class=\"content-block\" ng-show=\"userInfo.isAgent\">\n" +
    "            <p class=\"sub-title\">基本信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">入职时间:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.promiseEnterDate|dateFormat}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">直属领导:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.leaderName}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">组织架构:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.structureName}}</div>\n" +
    "                <div class=\"col-sm-2\">等级:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.level}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">职位:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.positionName}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!---薪酬信息-->\n" +
    "        <div class=\"content-block\" ng-hide=\"userInfo.isAgent\" >\n" +
    "            <p class=\"sub-title\">薪酬信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">基本工资:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.baseSalary|salary}}</div>\n" +
    "                <div class=\"col-sm-2\">试用期基本工资:</div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    {{offerInfos.probationarySalary|salary}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">社保缴纳基数：</div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    {{offerInfos.socialSecurityBase|unit:'元'}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">公积金缴纳基数：</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.houseFundBase|unit:'元'}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"needFiveBase\">\n" +
    "                <table width=\"100%\" class=\"table1\">\n" +
    "                    <tr class=\"thead\">\n" +
    "                        <td class=\"td1\">&nbsp;</td>\n" +
    "                        <td>养老</td>\n" +
    "                        <td>失业</td>\n" +
    "                        <td>医疗</td>\n" +
    "                        <td>工伤</td>\n" +
    "                        <td>生育</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td class=\"col1 td1\">\n" +
    "                            五险基数：\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{offerInfos.endowBase|unit:'元'}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{offerInfos.unemployBase|unit:'元'}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{offerInfos.medicalBase|unit:'元'}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{offerInfos.injuryBase|unit:'元'}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{offerInfos.maternityBase|unit:'元'}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">通讯补贴：</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.mobileSubsidy|salary}}</div>\n" +
    "                <div class=\"col-sm-2\">交通补贴：</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.trafficSubsidy|salary}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">工资类型:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.salaryType|salaryType}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!---其他信息-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">其他信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">电子简历:</div>\n" +
    "                <div class=\"col-sm-4\">\n" +
    "                    <a href=\"{{offerInfos.resumeUrl}}\"\n" +
    "                       ng-show=\"offerInfos.resumeUrl\"\n" +
    "                       target=\"_blank\">\n" +
    "                        下载\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\" ng-hide=\"userInfo.isAgent\">配备电脑:</div>\n" +
    "                <div class=\"col-sm-4\" ng-hide=\"userInfo.isAgent\">{{offerInfos.pcType | pcType}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">入职推荐途径:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.recommendType|\n" +
    "                    recommendType}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-2\">推荐详情:</div>\n" +
    "                <div class=\"col-sm-4\">{{offerInfos.recommendDetail}}</div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-2\">备注:</div>\n" +
    "                <div class=\"col-sm-8\">{{offerInfos.detail}}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/tpl.html",
    "<div class=\"apply-detail\">\n" +
    "    <h4>\n" +
    "        审批详情-{{title}}\n" +
    "    </h4>\n" +
    "\n" +
    "    <div class=\"opt-area\" ng-show=\"showOptArea\">\n" +
    "        <form class=\"form-inline\">\n" +
    "            <label class=\"radio-inline\">\n" +
    "                <input type=\"radio\" name=\"approveResult\"\n" +
    "                       ng-model=\"approveResult\"\n" +
    "                       value=\"2\">通过\n" +
    "            </label>\n" +
    "            <label class=\"radio-inline\">\n" +
    "                <input type=\"radio\" name=\"approveResult\"\n" +
    "                       ng-model=\"approveResult\" value=\"3\">拒绝&nbsp;\n" +
    "            </label>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <textarea class=\"form-control handle-detail\" ng-model=\"detail\"\n" +
    "                          maxlength=\"500\"\n" +
    "                          placeholder=\"请输入审批意见(不超过500字)\"></textarea>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <button class=\"btn btn-primary btn-sm\" ng-click=\"onSubmit()\">提\n" +
    "                    交\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"apply-content\">\n" +
    "        <div class=\"left\">\n" +
    "            <div ui-view></div>\n" +
    "        </div>\n" +
    "        <div class=\"right\">\n" +
    "            <div>审批记录</div>\n" +
    "            <div>\n" +
    "                <div ng-repeat=\"item in applyInfo.handleList\">\n" +
    "                    <p class=\"apply-name-line\">\n" +
    "                        <span class=\"name\">\n" +
    "                            <i class=\"glyphicon status-icon\"\n" +
    "                               ng-class=\"{'glyphicon-ok-sign blue':item.status==statusCode.TO_EXCUTE,\n" +
    "                               'glyphicon-remove-sign red':item.status==statusCode.REJECT,\n" +
    "                               'glyphicon-question-sign gray':(item.status==statusCode.TO_HANDLE||item.status==statusCode.IN_PROCESS)\n" +
    "                               }\"></i>\n" +
    "                            &nbsp;{{item.name}}\n" +
    "                        </span>\n" +
    "                        <span class=\"date\" ng-show=\"item.status==statusCode.TO_EXCUTE||item.status==statusCode.REJECT\">\n" +
    "                            {{item.handleTime | timeFormat}}</span>\n" +
    "                    </p>\n" +
    "\n" +
    "                    <P>\n" +
    "\n" +
    "                    <div ng-show=\"!$last\">\n" +
    "\n" +
    "                        <i class=\"up-arrow\"\n" +
    "                           ng-class=\"{'up-arrow-blue':(item.status==statusCode.TO_EXCUTE || item.status==statusCode.REJECT)}\"></i>\n" +
    "\n" +
    "                        <div ng-class=\"{'arrow-line':!$last,\n" +
    "                        'arrow-line-blue': (item.status==statusCode.TO_EXCUTE || item.status==statusCode.REJECT)}\">\n" +
    "\n" +
    "                        <span class=\"status\">\n" +
    "                            {{item.status | applyHandleStatus}}\n" +
    "                        </span>\n" +
    "                            <span class=\"detail\">\n" +
    "                                {{item.detail}}\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <span class=\"detail\" ng-show=\"$last\">发起审批</span>\n" +
    "                    </P>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/transFullMember/tpl.html",
    "<div class=\"apply-detail-structureAndSalary\">\n" +
    "    <h5>\n" +
    "        员工信息\n" +
    "    </h5>\n" +
    "    <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "    </div>\n" +
    "    <h5>\n" +
    "        转正后信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"trans-full-time\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                实习/劳务截止时间:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{ contentAfter.internsEndDate | dateFormat}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                实习生转正日期:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{ contentAfter.positiveDate| dateFormat}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                社保缴纳城市:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.socialSecurityCityName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr/>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                组织架构:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                {{contentAfter.structureName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                等级:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.level}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                职位名称:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.positionName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                基本工资:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.baseSalary|salary}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                试用期基本工资:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.probationarySalary|salary}}\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                工资类型:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.salaryType|salaryType}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                直属领导:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.leaderName}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                社保缴纳基数:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.socialSecurityBase|unit:'元'}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                公积金缴纳基数:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.houseFundBase|unit:'元'}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                通讯补贴:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.mobileSubsidy|salary}}\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                交通补贴:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{contentAfter.trafficSubsidy|salary}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row detail\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                变动原因:\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                {{applyInfo.reason}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/detail/workTarget/tpl.html",
    "<div class=\"apply-detail-leave\">\n" +
    "    <h5>\n" +
    "        员工信息\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "    </div>\n" +
    "    <h5>\n" +
    "        试用期工作目标\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"change-info-container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-2\">\n" +
    "                目标设定：\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-9\" ng-bind-html=\"applyInfo.contentAfter.workTarget\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/directive/staffInfo/tpl.html",
    "<div class=\"apply-directive-staffInfo container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            姓名:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.name}}\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            员工编号:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.displayNumber}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"!isChangeProbation\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            性别:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.sex|sex}}\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            邮箱地址:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.email}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\" ng-show=\"!isChangeProbation\">\n" +
    "        <div class=\"col-sm-2\" ng-hide=\"isAgent\">\n" +
    "            员工类型:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\" ng-hide=\"isAgent\">\n" +
    "            {{userCommonInfo.type | type}}\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\" ng-show=\"isAgent\">\n" +
    "            入职时间:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\" ng-show=\"isAgent\">\n" +
    "            {{userCommonInfo.enterTime|dateFormat}}\n" +
    "            <strong ng-if=\"userCommonInfo.formalTime\" >\n" +
    "            (转正日期：{{userCommonInfo.formalTime|dateFormat}})\n" +
    "            </strong>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            组织架构:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\" title=\"{{userCommonInfo.structureName}}\">\n" +
    "            {{userCommonInfo.structureName}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            等级:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.level}}\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            职位名称:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.positionName}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            直属领导:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            {{userCommonInfo.leaderName}}\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\" ng-hide=\"isAgent\">\n" +
    "            入职时间:\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\" ng-hide=\"isAgent\">\n" +
    "            {{userCommonInfo.enterTime|dateFormat}}\n" +
    "            <strong ng-if=\"userCommonInfo.formalTime && showFormalDate\" >\n" +
    "            (转正日期：{{userCommonInfo.formalTime|dateFormat}})\n" +
    "            </strong>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/list/subTab/tpl.html",
    "<div class=\"\">\n" +
    "    <ul class='list-inline sub-tab' ng-hide=\"userInfo.isAgent\">\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a\n" +
    "                    ui-sref=\"{{entry}}.all\">全部 ( {{count.all}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.staffEnter\">新员工入职 ( {{count.staffEnter}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.rejoin\">员工再入职 ( {{count.rejoin}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.leave\">离职处理 ( {{count.leave}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.workInfo\">薪酬岗位调整 ( {{count.workInfo}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.structure\">人事调动 ( {{count.structure}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.transFullMember\">实习生/劳务转正式 ( {{count\n" +
    "                .transFullMember}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.workTarget\">试用期工作目标( {{count.workTarget}})</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.formalApply\">试用期转正申请( {{count.formalApply}})</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.multiple\">综合审批 ( {{count\n" +
    "                .multiple}} )</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <ul class='list-inline sub-tab' ng-show=\"userInfo.isAgent\">\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.all\">全部 ( {{count.all}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.agentEnter\">新员工入职 ( {{count.agentEnter}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.agentRejoin\">员工再入职 ( {{count.agentRejoin}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.agentStructure\">人事调动 ( {{count.agentStructure}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\" ui-sref-active=\"active\">\n" +
    "            <a ui-sref=\"{{entry}}.agentLeave\">离职处理 ( {{count.agentLeave}} )</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div ui-view></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/list/table/tableTpl/opt.html",
    "<div class=\"inline-opt-area\">\n" +
    "        <span class=\"opt\" ng-show=\"$parent.$parent.$parent.$parent.showPassBtn\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.onSinglePassClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >通过\n" +
    "        </a>\n" +
    "        </span>\n" +
    "    &nbsp;&nbsp;\n" +
    "        <span class=\"opt\"\n" +
    "              ng-show=\"$parent.$parent.$parent.$parent.showRejectBtn\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.onSingleRejectClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >拒绝</a>\n" +
    "        </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-show=\"item.canBeCanceled && $parent.$parent.$parent.$parent.showCancelBtn\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.onSingleCancelClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >撤回</a>\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/apply/list/table/tableTpl/title.html",
    "<div class=\"\">\n" +
    "    <a class=\"apply-title\"\n" +
    "       ng-click=\"$parent.$parent.$parent.$parent.onTitleClick(item)\"\n" +
    "            >{{item.title}}</a>\n" +
    "</div>");
  $templateCache.put("src/module/apply/list/table/tpl.html",
    "<div class=\"\">\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <button class=\"btn btn-primary btn-sm\" ng-click=\"onPassClick()\"\n" +
    "                ng-show=\"showPassBtn\"\n" +
    "                ng-disabled=\"!tableOptions.selectedItems.length\">批量通过\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-warning btn-sm\" ng-click=\"onRejectClick()\"\n" +
    "                ng-show=\"showRejectBtn\"\n" +
    "                ng-disabled=\"!tableOptions.selectedItems.length\">批量拒绝\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/list/tpl.html",
    "<div class=\"apply-list\">\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('apply.list.toHandle')}\">\n" +
    "            <a\n" +
    "                    ui-sref=\"apply.list.toHandle.all\">待审批</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('apply.list.hasHandled')}\">\n" +
    "            <a ui-sref=\"apply.list.hasHandled.all\">已审批</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('apply.list.promoteMyself')}\">\n" +
    "            <a ui-sref=\"apply.list.promoteMyself.all\">我发起的审批</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div ui-view></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/opt/changeProbation/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-changeProbation\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">试用期变更</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                试用期变更信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"changeProbationForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.probationEndDate\" errorOption=\"errorOption\"\n" +
    "                         ng-model=\"probationEndDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.commonts\"\n" +
    "                         ng-model=\"comments\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(changeProbationForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/opt/changeSalary/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-changeSalary\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">岗位薪酬调整申请</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                岗位薪酬调整\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"changeSalaryForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">等级:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.level|emptyFormat}}</div>\n" +
    "                    <div input-control options=\"inputOptions.level\"\n" +
    "                         ng-model=\"level\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">职位名称:</div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        {{workInfo.positionName|emptyFormat}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.position\"\n" +
    "                         ng-model=\"position\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">基本工资:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.baseSalary | salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.baseSalary\"\n" +
    "                         ng-model=\"baseSalary\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\"ng-show=\"canModProbationarySalary\">\n" +
    "                    <div class=\"col-sm-2\">试用期基本工资:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.probationarySalary|\n" +
    "                        salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.probationarySalary\"\n" +
    "                         ng-model=\"probationarySalary\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" style=\"position: relative\">\n" +
    "                    <div class=\"col-sm-2\">社保缴纳基数\n" +
    "                        :\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        {{salaryInfo.socialSecurityBase|emptyFormat}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.socialSecurityBase\"\n" +
    "                         ng-model=\"socialSecurityBase\">\n" +
    "                    </div>\n" +
    "                    <div class=\"red base-tip\">无特殊情况，经理无需发起基数调整申请</div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">公积金缴纳基数:</div>\n" +
    "                    <div class=\"col-sm-3\">\n" +
    "                        {{salaryInfo.houseFundBase|emptyFormat}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.houseFundBase\"\n" +
    "                         ng-model=\"houseFundBase\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-show=\"needFiveBase\">\n" +
    "                    <div class=\"col-sm-5\">\n" +
    "                        <table width=\"100%\" class=\"table1\">\n" +
    "                            <tr class=\"thead\">\n" +
    "                                <td class=\"td1\">&nbsp;</td>\n" +
    "                                <td>养老</td>\n" +
    "                                <td>失业</td>\n" +
    "                                <td>医疗</td>\n" +
    "                                <td>工伤</td>\n" +
    "                                <td>生育</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td class=\"col1 td1\">\n" +
    "                                    五险基数：\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.endowBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.unemployBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.medicalBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.injuryBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.maternityBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7 \">\n" +
    "                        <div five-base></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">通讯补贴\n" +
    "                        <i popover=\"分公司师资专员和市场专员享受每月最多100元的交通补贴\"\n" +
    "                           popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "                           popover-append-to-body=\"true\"\n" +
    "                           class=\"glyphicon glyphicon-question-sign\"></i>\n" +
    "                        :\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.mobileSubsidy| salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.mobileSubsidy\"\n" +
    "                         ng-model=\"mobileSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">交通补贴\n" +
    "                        <i popover=\"分公司师资专员和市场专员享受每月最多100元的通讯补贴\"\n" +
    "                           popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "                           popover-append-to-body=\"true\"\n" +
    "                           class=\"glyphicon glyphicon-question-sign\"></i>\n" +
    "                        :\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.trafficSubsidy| salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.trafficSubsidy\"\n" +
    "                         ng-model=\"trafficSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">工资类型:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.salaryType | salaryType}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.salaryType\"\n" +
    "                         ng-model=\"salaryType\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.executeDate\"\n" +
    "                         ng-model=\"executeDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.reason\"\n" +
    "                         ng-model=\"reason\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(changeSalaryForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/changeStructure/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-changeStructure\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">人事调动申请</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                人事调动\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"changeStructureForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">组织架构:</div>\n" +
    "                    <div class=\"col-sm-3\" title=\"{{workInfo.structureName}}\">{{workInfo.structureName}}</div>\n" +
    "                    <div input-control options=\"inputOptions.structure\"\n" +
    "                         ng-model=\"structure\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">直属领导:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.leaderName}}</div>\n" +
    "                    <div input-control options=\"inputOptions.leader\"\n" +
    "                         ng-model=\"leader\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">等级:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.level|emptyFormat}}</div>\n" +
    "                    <div input-control options=\"inputOptions.level\"\n" +
    "                         ng-model=\"level\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">职位名称:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.positionName|emptyFormat}}</div>\n" +
    "                    <div input-control options=\"inputOptions.position\"\n" +
    "                         ng-model=\"position\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.executeDate\"\n" +
    "                         ng-model=\"executeDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.reason\"\n" +
    "                         ng-model=\"reason\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(changeStructureForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/detail/tpl.html",
    "<div class=\"apply-opt-detail\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                id=\"apply-opt-detail-close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <iframe ng-src=\"{{url}}\" class=\"detail-iframe\"></iframe>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/formalApply/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-transFullTime\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">\n" +
    "                试用期员工转正申请\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                试用期员工转正申请\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div style=\"width: 166px;\" class=\"col-sm-2\">\n" +
    "                    目标设定:\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\" ng-bind-html=\"workTarget\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br>\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"formalApplyForm\">\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.detail\"\n" +
    "                         ng-model=\"detail\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(formalApplyForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/leave/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-transFullTime\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\" ng-show=\"!isAgent\">员工离职申请\n" +
    "                <a style=\"font-size: 14px\"\n" +
    "                        href=\"http://www.baijiahulian.com/policy/Documents/%E7%A6%BB%E8%81%8C%E6%B5%81%E7%A8%8B.pdf\"\n" +
    "                   target=\"_blank\"> &nbsp;&nbsp;查看离职流程</a>\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                离职信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"leaveForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.leaveDate\"\n" +
    "                         ng-model=\"leaveDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.reason\"\n" +
    "                         ng-model=\"reason\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.detail\"\n" +
    "                         ng-model=\"detail\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(leaveForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/multiple/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-changeSalary\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">综合审批</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                综合审批\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"changeMultipleForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">组织架构:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.structureName}}</div>\n" +
    "                    <div input-control options=\"inputOptions.structure\"\n" +
    "                         ng-model=\"structure\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">直属领导:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.leaderName}}</div>\n" +
    "                    <div input-control options=\"inputOptions.leader\"\n" +
    "                         ng-model=\"leader\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">等级:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.level}}</div>\n" +
    "                    <div input-control options=\"inputOptions.level\"\n" +
    "                         ng-model=\"level\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">职位名称:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.positionName}}</div>\n" +
    "                    <div input-control options=\"inputOptions.position\"\n" +
    "                         ng-model=\"position\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">工作地点:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.officeName|emptyFormat}}</div>\n" +
    "                    <div input-control options=\"inputOptions.office\"\n" +
    "                         ng-model=\"office\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">签约公司:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.contractCompanyName|emptyFormat}}</div>\n" +
    "                    <div input-control options=\"inputOptions.contractCompany\"\n" +
    "                         ng-model=\"contractCompany\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">社保缴纳城市:</div>\n" +
    "                    <div class=\"col-sm-3\">{{workInfo.socialSecurityCityName|emptyFormat}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.socialSecurityCity\"\n" +
    "                         ng-model=\"socialSecurityCity\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">基本工资:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.baseSalary | salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.baseSalary\"\n" +
    "                         ng-model=\"baseSalary\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-show=\"canModProbationarySalary\">\n" +
    "                    <div class=\"col-sm-2\">试用期基本工资:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.probationarySalary|salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.probationarySalary\"\n" +
    "                         ng-model=\"probationarySalary\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">社保缴纳基数:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.socialSecurityBase|unit:'元'}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.socialSecurityBase\"\n" +
    "                         ng-model=\"socialSecurityBase\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">公积金缴纳基数:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.houseFundBase|unit:'元'}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.houseFundBase\"\n" +
    "                         ng-model=\"houseFundBase\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-show=\"needFiveBase\">\n" +
    "                    <div class=\"col-sm-5\">\n" +
    "                        <table width=\"100%\" class=\"table1\">\n" +
    "                            <tr class=\"thead\">\n" +
    "                                <td class=\"td1\">&nbsp;</td>\n" +
    "                                <td>养老</td>\n" +
    "                                <td>失业</td>\n" +
    "                                <td>医疗</td>\n" +
    "                                <td>工伤</td>\n" +
    "                                <td>生育</td>\n" +
    "                            </tr>\n" +
    "                            <tr>\n" +
    "                                <td class=\"col1 td1\">\n" +
    "                                    五险基数：\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.endowBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.unemployBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.medicalBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.injuryBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                                <td>\n" +
    "                                    {{salaryInfo.maternityBase|unit:'元'}}\n" +
    "                                </td>\n" +
    "                            </tr>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-7 \">\n" +
    "                        <div five-base></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">交通补贴:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.trafficSubsidy| salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.trafficSubsidy\"\n" +
    "                         ng-model=\"trafficSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">通讯补贴:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.mobileSubsidy| salary}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.mobileSubsidy\"\n" +
    "                         ng-model=\"mobileSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-2\">工资类型:</div>\n" +
    "                    <div class=\"col-sm-3\">{{salaryInfo.salaryType | salaryType}}\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.salaryType\"\n" +
    "                         ng-model=\"salaryType\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.executeDate\"\n" +
    "                         ng-model=\"executeDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.reason\"\n" +
    "                         ng-model=\"reason\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(changeMultipleForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/opt/transFullTime/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-transFullTime\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">实习/劳务转正式申请</h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                转正信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"transFullTimeForm\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.internsEndDate\"\n" +
    "                         ng-model=\"internsEndDate\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.positiveDate\"\n" +
    "                         ng-model=\"positiveDate\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.formalDate\"\n" +
    "                         ng-model=\"formalDate\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.socialSecurityCity\"\n" +
    "                         ng-model=\"socialSecurityCity\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <hr/>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.structure\"\n" +
    "                         ng-model=\"structure\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.leader\"\n" +
    "                         ng-model=\"leader\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.level\"\n" +
    "                         ng-model=\"level\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.position\"\n" +
    "                         ng-model=\"position\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.baseSalary\"\n" +
    "                         ng-model=\"baseSalary\">\n" +
    "                    </div>\n" +
    "                    <div input-control\n" +
    "                         options=\"inputOptions.probationarySalary\"\n" +
    "                         ng-model=\"probationarySalary\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.salaryType\"\n" +
    "                         ng-model=\"salaryType\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"inputOptions.socialSecurityBase\"\n" +
    "                         ng-model=\"socialSecurityBase\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div five-base class=\"form-group\" ng-show=\"needFiveBase\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control\n" +
    "                         options=\"inputOptions.houseFundBase\"\n" +
    "                         ng-model=\"houseFundBase\">\n" +
    "                    </div>\n" +
    "                    <div input-control\n" +
    "                         options=\"inputOptions.mobileSubsidy\"\n" +
    "                         ng-model=\"mobileSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"inputOptions.trafficSubsidy\"\n" +
    "                         ng-model=\"trafficSubsidy\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.reason\"\n" +
    "                         ng-model=\"reason\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(transFullTimeForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/apply/opt/workTarget/tpl.html",
    "<div class=\"apply-opt\">\n" +
    "    <div class=\"apply-opt-transFullTime\">\n" +
    "        <div class=\"modal-header\">\n" +
    "            <button type=\"button\" class=\"close\"\n" +
    "                    ng-click=\"closeHandler()\"\n" +
    "                    data-dismiss=\"modal\"><span\n" +
    "                    aria-hidden=\"true\">&times;</span><span\n" +
    "                    class=\"sr-only\">Close</span>\n" +
    "            </button>\n" +
    "            <h4 class=\"modal-title\">\n" +
    "                试用期工作目标设定\n" +
    "            </h4>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"modal-body \">\n" +
    "            <h5>\n" +
    "                员工信息\n" +
    "            </h5>\n" +
    "\n" +
    "            <div class=\"container\" apply-staff-info number=\"{{number}}\">\n" +
    "            </div>\n" +
    "            <h5>\n" +
    "                试用期工作目标\n" +
    "            </h5>\n" +
    "\n" +
    "            <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "                  name=\"workTargetForm\">\n" +
    "                <div class=\"form-group detail\">\n" +
    "                    <div input-control options=\"inputOptions.detail\"\n" +
    "                         ng-model=\"detail\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <span class=\"red\" style=\"margin-left:82px\">*</span>\n" +
    "                    <input type=\"checkbox\" ng-model=\"isReadStaffManual\">\n" +
    "                    <span >本人已详细阅读</span>\n" +
    "                    <a href=\"http://www.baijiahulian.com/policy/Pages/%E8%B7%9F%E8%B0%81%E5%AD%A6%E5%91%98%E5%B7%A5%E6%89%8B%E5%86%8C.pdf\" target=\"_blank\">《员工手册2016年2月1日版》</a>\n" +
    "                    <span>，并熟知和充分理解《员工手册》的全部内容，对其条款无异议，并承诺遵照执行。</span>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                            ng-click=\"save(workTargetForm)\">提交\n" +
    "                    </button>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\"\n" +
    "                            ng-click=\"closeHandler()\"\n" +
    "                            data-dismiss=\"modal\">关闭\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/apply/tpl.html",
    "<div ui-view></div>");
  $templateCache.put("src/module/home/baseChange/tpl.html",
    "<div class=\"home-baseChange\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">五险一金变更信息导入</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form>\n" +
    "            <label for=\"base-change-upload\" class=\"pointer\">\n" +
    "                <i class=\"glyphicon glyphicon-upload blue\"></i>\n" +
    "                上传文件\n" +
    "            </label>\n" +
    "            <input id=\"base-change-upload\" type=\"file\"  class=\"hide\"\n" +
    "                   onchange=\"angular.element(this).scope().fileChange(this)\"\n" +
    "                    >\n" +
    "            </label>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/home/salaryChange/tpl.html",
    "<div class=\"home-salaryChange\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">薪酬变更信息导入</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form>\n" +
    "            <label for=\"salary-change-upload\" class=\"pointer\">\n" +
    "                <i class=\"glyphicon glyphicon-upload blue\"></i>\n" +
    "                上传文件\n" +
    "            </label>\n" +
    "            <input id=\"salary-change-upload\" type=\"file\"  class=\"hide\"\n" +
    "                   onchange=\"angular.element(this).scope().fileChange(this)\"\n" +
    "                    >\n" +
    "            </label>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/home/tpl.html",
    "<div class=\"home\">\n" +
    "    <h5>\n" +
    "        <span>快捷入口</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <a class=\"col-xs-3 block\" ng-click=\"selfInfoClick()\"\n" +
    "                    >\n" +
    "                <i class=\"glyphicon glyphicon-user\"></i>\n" +
    "                <span>我的信息</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"subordinate.search\" ng-show=\"isManager\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>下属信息</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"subordinate.ownerSearch\" ng-show=\"isStructureOwner\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>部门员工信息</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"apply.list.toHandle.all\">\n" +
    "                <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "                <span>我的审批</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.newer\" ng-show=\"isRecruitHR\">\n" +
    "                <i class=\"glyphicon glyphicon-circle-arrow-right\"></i>\n" +
    "                <span>发送offer</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.newerSearch\" ng-show=\"isRecruitHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>offer信息查询</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.abandonSearch\" ng-show=\"isRecruitHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>取消offer</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.rejoin\" ng-show=\"isRecruitHR\">\n" +
    "                <i class=\"glyphicon glyphicon-refresh\"></i>\n" +
    "                <span>员工再入职</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.toJoinSearch\" ng-show=\"isRelationshipHR && !isAgent\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>办理入职手续</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.toJoinSearchAgent\" ng-show=\"isRelationshipHR && isAgent\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>办理入职手续</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.salaryHRSearch\"\n" +
    "               ng-show=\"isSalaryHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>员工信息查询-薪酬</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.relationshipHRSearch\"\n" +
    "               ng-show=\"isRelationshipHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>员工信息查询-员工关系</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ui-sref=\"hr.rejoinAgent\" ng-show=\"isRelationshipHR && isAgent\">\n" +
    "                <i class=\"glyphicon glyphicon-refresh\"></i>\n" +
    "                <span>员工再入职</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.trainingHRSearch\"\n" +
    "               ng-show=\"isTrainingHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>员工信息查询-培训</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.businessPartnerHRSearch\"\n" +
    "               ng-show=\"isHRBP\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>员工信息查询-HRBP</span>\n" +
    "            </a>\n" +
    "\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.salaryBillSearch\"\n" +
    "               ng-show=\"isSalaryHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>应发工资名单</span>\n" +
    "            </a>\n" +
    "\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.securityList\"\n" +
    "               ng-show=\"isSalaryHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>社保缴纳名单</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.taxList\"\n" +
    "               ng-show=\"isSalaryHR\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>个税名单</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.tempCard.all\"\n" +
    "               ng-show=\"isReception\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>前台工作</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.assetManagerSearch\"\n" +
    "               ng-show=\"isAssetManager\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>资产管理</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"hr.itManagerSearch\"\n" +
    "               ng-show=\"isItManager\">\n" +
    "                <i class=\"glyphicon glyphicon-search\"></i>\n" +
    "                <span>IT管理</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.structure\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-list\"></i>\n" +
    "                <span>组织架构</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.contractCompany\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-align-justify\"></i>\n" +
    "                <span>签约公司配置</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.socialSecurityCity\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-align-justify\"></i>\n" +
    "                <span>社保缴纳城市配置</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.office\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-align-justify\"></i>\n" +
    "                <span>办公地点配置</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.holiday\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-calendar\"></i>\n" +
    "                <span>工作日配置</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ng-click=\"yearAwardClick()\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-usd\"></i>\n" +
    "                <span>年终奖导入</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ng-click=\"salaryChangeClick()\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-import\"></i>\n" +
    "                <span>薪酬变更导入</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\"\n" +
    "               ng-click=\"baseChangeClick()\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-import\"></i>\n" +
    "                <span>五险一金基数变更导入</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.disability\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-align-justify\"></i>\n" +
    "                <span>残疾员工名单</span>\n" +
    "            </a>\n" +
    "            <a class=\"col-xs-3 block\" ui-sref=\"admin.level\"\n" +
    "               ng-show=\"isAdmin\">\n" +
    "                <i class=\"glyphicon glyphicon-menu-hamburger\"></i>\n" +
    "                <span>职级体系配置</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/home/yearAward/tpl.html",
    "<div class=\"home-yearAward\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">年终奖导入</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form>\n" +
    "            <label for=\"year-award-upload\" class=\"pointer\">\n" +
    "                <i class=\"glyphicon glyphicon-upload blue\"></i>\n" +
    "                上传文件\n" +
    "            </label>\n" +
    "            <input id=\"year-award-upload\" type=\"file\"  class=\"hide\"\n" +
    "                   onchange=\"angular.element(this).scope().fileChange(this)\"\n" +
    "                    >\n" +
    "            </label>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/agent/tpl.html",
    "<div class=\"hr-agent hr hr-staffInfo\">\n" +
    "<h5>\n" +
    "    <span>{{title}}</span>\n" +
    "</h5>\n" +
    "\n" +
    "<form class=\"form-horizontal\" name=\"agentEnterForm\"\n" +
    "      onkeydown=\"if(event.keyCode==13)return false;\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "    <div class=\"content-container\">\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">自然信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.lawName\"\n" +
    "                     ng-model=\"lawName\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.namePinyin\"\n" +
    "                     ng-model=\"namePinyin\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.sex\" ng-model=\"sex\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.degree\"\n" +
    "                     ng-model=\"degree\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.accountLocation\"\n" +
    "                     ng-model=\"accountLocation\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.birthday\"\n" +
    "                     ng-model=\"birthday\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.beginWorkTime\"\n" +
    "                     ng-model=\"beginWorkTime\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.isForeign\"\n" +
    "                     ng-model=\"isForeign\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.idCardNumber\"\n" +
    "                     ng-model=\"idCardNumber\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!---联系方式-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">联系方式</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"contactOptions.mobile\"\n" +
    "                     ng-model=\"mobile\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"contactOptions.personalEmail\"\n" +
    "                     ng-model=\"personalEmail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <!---基本信息-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">基本信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.promiseEnterDate\"\n" +
    "                     ng-model=\"promiseEnterDate\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.leader\"\n" +
    "                     ng-model=\"leader\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.structure\"\n" +
    "                     class=\"\"\n" +
    "                     ng-model=\"structure\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.level\"\n" +
    "                     ng-model=\"levelIndex\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.position\"\n" +
    "                     ng-model=\"position\">\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "\n" +
    "<div class=\"content-container\">\n" +
    "    <!-- 个人信息-->\n" +
    "    <div class=\"content-block\">\n" +
    "        <p class=\"sub-title\">个人信息\n" +
    "            <span class=\"clearFloat\">\n" +
    "                <span class=\"edit\" ng-click=\"onEditPart2()\">\n" +
    "                <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "                    编辑\n" +
    "                </span>\n" +
    "            </span>\n" +
    "        </p>\n" +
    "\n" +
    "        <div>\n" +
    "            教育经历\n" +
    "            <span class=\"add\" ng-click=\"educationAdd.addClick()\"\n" +
    "            ng-show=\"!isReadOnly2\">\n" +
    "                <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "                    添加\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"wraper-edit\" ng-show=\"addingEducation\">\n" +
    "            <form class=\"form-horizontal\" name=\"educationAddForm\"\n" +
    "                novalidate=\"novalidate\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"educationAddOptions.start\"\n" +
    "                        ng-model=\"educationAdd.start\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"educationAddOptions.end\"\n" +
    "                        ng-model=\"educationAdd.end\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"educationAddOptions.school\"\n" +
    "                        ng-model=\"educationAdd.school\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"educationAddOptions.discipline\"\n" +
    "                        ng-model=\"educationAdd.discipline\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"educationAddOptions.degree\"\n" +
    "                        ng-model=\"educationAdd.degree\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <span class=\"btn btn-sm btn-warning\"\n" +
    "                    ng-click=\"educationAdd.onSave(educationAddForm)\">添加\n" +
    "                </span>\n" +
    "                <span class=\"btn btn-sm btn-default\"\n" +
    "                    ng-click=\"educationAdd.onCancel()\">取消\n" +
    "                </span>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div education-info\n" +
    "     ng-repeat=\"item in educationList\" ng-model=\"item\"></div>\n" +
    "\n" +
    "    <div>\n" +
    "        <div class=\"work-title\">\n" +
    "            工作经历\n" +
    "            <span class=\"add\" ng-click=\"workExpAdd.addClick()\"\n" +
    "                ng-show=\"!isReadOnly2\">\n" +
    "                <i class=\"glyphicon glyphicon-plus\"></i>添加\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "        <div class=\"wraper-edit\" ng-show=\"addingWorkExp\">\n" +
    "            <form class=\"form-horizontal\" name=\"workExpAddForm\"\n" +
    "                novalidate=\"novalidate\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"workExpAddOptions.start\"\n" +
    "                        ng-model=\"workExpAdd.start\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"workExpAddOptions.end\"\n" +
    "                        ng-model=\"workExpAdd.end\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div input-control options=\"workExpAddOptions.company\"\n" +
    "                        ng-model=\"workExpAdd.company\">\n" +
    "                    </div>\n" +
    "                    <div input-control options=\"workExpAddOptions.position\"\n" +
    "                         ng-model=\"workExpAdd.position\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            <span class=\"btn btn-sm btn-warning\"\n" +
    "                ng-click=\"workExpAdd.onSave(workExpAddForm)\">添加</span>\n" +
    "                <span class=\"btn btn-sm btn-default\"\n" +
    "                    ng-click=\"workExpAdd.onCancel()\">取消</span>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div work-info ng-repeat=\"item in workExpList\" ng-model=\"item\">\n" +
    "        </div>\n" +
    "\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" ng-show=\"!isReadOnly2\" style=\"margin: 10px 0 0\">\n" +
    "                <div class=\"col-sm-12 center\">\n" +
    "                    <button class=\"btn btn-sm btn-default\" ng-show=\"!isReadOnly2\"\n" +
    "                        ng-click=\"cancelPart2()\">取消\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<form class=\"form-horizontal\" name=\"otherInfoForm\"\n" +
    "                novalidate=\"novalidate\">\n" +
    "    <!---其他信息-->\n" +
    "<div class=\"content-container\">\n" +
    "    <div class=\"content-block\">\n" +
    "        <p class=\"sub-title\">其他信息</p>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.resumeStorageId\"\n" +
    "                 ng-model=\"resumeStorageId\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.recommendType\"\n" +
    "                 ng-model=\"recommendType\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"otherOptions.recommendDetail\"\n" +
    "                 ng-model=\"recommendDetail\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.idCardAndContract\"\n" +
    "                 ng-model=\"idCardAndContract\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.idCardUpload\"\n" +
    "                 ng-model=\"idCardUpload\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.limitAgreement\"\n" +
    "                 ng-model=\"limitAgreement\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"otherOptions.detail\"\n" +
    "                 ng-model=\"detail\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</form>\n" +
    "<div class=\"text-muted\" ng-hide=\"isReadOnly\">提示：\n" +
    "        <span class=\"red\">*</span>为提交的必填项\n" +
    "    </div>\n" +
    "<div class=\"btn-area\">\n" +
    "    <button class=\"btn btn-primary btn-sm\" type=\"submit\"\n" +
    "            ng-hide=\"hideSubmit || isReadOnly\"\n" +
    "            ng-click=\"submit()\">提交\n" +
    "    </button>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/attendceRecord/tpl.html",
    "<div class=\"hr-salaryList\">\n" +
    "    <h5>\n" +
    "        <span>考勤记录导出</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <form class=\"form-horizontal query-container\"\n" +
    "          role=\"form\" novalidate=\"novalidate\" class='salaryQueryForm'>\n" +
    "        <div class=\"row\">\n" +
    "        	<div class=\"col-sm-3 control\">\n" +
    "                <label>姓名:</label>\n" +
    "                <span name-suggestion ng-model=\"query.name\"></span>\n" +
    "                <!-- <input class=\"form-control\" placeholder=\"请输入邮箱前缀\"\n" +
    "                       maxlength=\"20\"\n" +
    "                       ng-model=\"query.name\"> -->\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-5 control\">\n" +
    "                <label>时间:</label>\n" +
    "                <input class=\"form-control ng-pristine ng-untouched ng-valid\" placeholder=\"yyyy-MM-dd\" type=\"date\" ng-model=\"query.startDate\">\n" +
    "                至\n" +
    "                <input type=\"date\" placeholder=\"yyyy-MM-dd\" class=\"form-control ng-pristine ng-untouched ng-valid\" ng-model=\"query.endDate\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>组织架构:</label>\n" +
    "                <select class=\"form-control\"\n" +
    "                        ng-model=\"query.structure\"\n" +
    "                        ng-options=\"m.id as m.name for m in structureList\">\n" +
    "                        <option value=\"\">请选择</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-1 control\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"onSearch()\">查询\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <span>\n" +
    "            <span class=\"btn btn-default btn-sm\">\n" +
    "                <a target=\"_blank\" href=\"{{exportUrl}}\">\n" +
    "                   导出\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <form name=\"salaryComputeForm\">\n" +
    "        <div table-control options=\"tableOptions\">\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/baseInfo/educationAdd.html",
    "<div class=\"wraper-edit\" ng-show=\"addingEducation\">\n" +
    "    <form class=\"form-horizontal\" name=\"educationAddForm\"\n" +
    "          novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"educationAddOptions.start\"\n" +
    "                 ng-model=\"educationAdd.start\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"educationAddOptions.end\"\n" +
    "                 ng-model=\"educationAdd.end\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"educationAddOptions.school\"\n" +
    "                 ng-model=\"educationAdd.school\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"educationAddOptions.discipline\"\n" +
    "                 ng-model=\"educationAdd.discipline\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"educationAddOptions.degree\"\n" +
    "                 ng-model=\"educationAdd.degree\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"educationAdd.onSave(educationAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"educationAdd.onCancel()\">取消</span>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/baseInfo/tpl.html",
    "<div class=\"content-container hr-baseInfo\">\n" +
    "<div class=\"content-block\">\n" +
    "    <p class=\"sub-title info-title\">个人信息-1\n" +
    "    <span ng-if=\"canEditBaseInfo\" class=\"clearFloat\">\n" +
    "            <span class=\"edit\" ng-click=\"$parent.onEdit()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "    </span>\n" +
    "    </p>\n" +
    "\n" +
    "    <form class=\"form-horizontal\" name=\"baseInfoForm\"\n" +
    "          novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"baseOptions.hometown\"\n" +
    "                 ng-model=\"hometown\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.ethnic\"\n" +
    "                 ng-model=\"ethnic\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"baseOptions.politicalStatus\"\n" +
    "                 ng-model=\"politicalStatus\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.birthplace\"\n" +
    "                 ng-model=\"birthplace\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"baseOptions.accountLocation\"\n" +
    "                 ng-model=\"accountLocation\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.degree\"\n" +
    "                 ng-model=\"degree\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"baseOptions.religion\"\n" +
    "                 ng-model=\"religion\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.maritalStatus\"\n" +
    "                 ng-model=\"maritalStatus\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"baseOptions.citizenship\"\n" +
    "                 ng-model=\"citizenship\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.accountType\"\n" +
    "                 ng-model=\"accountType\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"baseOptions.isForeign\"\n" +
    "                 ng-model=\"isForeign\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.idCardNumber\"\n" +
    "                 ng-model=\"idCardNumber\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"baseOptions.beginWorkTime\"\n" +
    "                 ng-model=\"beginWorkTime\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.isGraduate\"\n" +
    "                 ng-model=\"isGraduate\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" style=\"position: relative\">\n" +
    "            <div input-control options=\"baseOptions.mobile\"\n" +
    "                 ng-model=\"mobile\">\n" +
    "            </div>\n" +
    "            <span class=\"btn btn-warning btn-sm mod-mobile\"\n" +
    "                  ng-click=\"modMobileClick()\" ng-show=\"showModMobile\">修改</span>\n" +
    "            <div input-control options=\"baseOptions.birthday\"\n" +
    "                 ng-model=\"birthday\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"baseOptions.enterTime\"\n" +
    "                 ng-model=\"enterTime\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.beginWorkTime\"\n" +
    "                 ng-model=\"beginWorkTime\" ng-show=\"isAgent\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"baseOptions.contractEndDate\"\n" +
    "                 ng-model=\"contractEndDate\" ng-show=\"!isAgent\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent && staffType == 1\">\n" +
    "            <div input-control options=\"baseOptions.formalDate\"\n" +
    "                 ng-model=\"formalDate\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group id-card upload-file\" ng-show=\"canDownLoadFile\">\n" +
    "            <div input-control options=\"baseOptions.idCardAndContract\"\n" +
    "                 ng-model=\"idCardAndContract\">\n" +
    "            </div>\n" +
    "                <span class=\"red\" ng-show=\"canEditBaseInfo\">\n" +
    "                </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group id-card upload-file\" ng-show=\"canDownLoadFile\">\n" +
    "            <div input-control options=\"baseOptions.idCardUpload\"\n" +
    "                 ng-model=\"idCardUpload\">\n" +
    "            </div>\n" +
    "                <span class=\"red\" ng-show=\"canEditBaseInfo\">\n" +
    "                </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group limit-agreement upload-file\"\n" +
    "             ng-show=\"canDownLoadFile\">\n" +
    "            <div input-control options=\"baseOptions.limitAgreement\"\n" +
    "                 ng-model=\"limitAgreement\">\n" +
    "            </div>\n" +
    "            <span class=\"red\" ng-show=\"canEditBaseInfo\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group upload-file\"\n" +
    "             ng-show=\"canDownLoadFile\">\n" +
    "            <div input-control options=\"baseOptions.resume\"\n" +
    "                 ng-model=\"resume\">\n" +
    "            </div>\n" +
    "            <span class=\"red\" ng-show=\"canEditBaseInfo\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isReadOnly\">\n" +
    "            <div class=\"col-sm-12 center\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"saveBaseInfo(baseInfoForm)\">保存\n" +
    "                </button>\n" +
    "                <span class=\"btn btn-sm btn-default\"\n" +
    "                        ng-click=\"cancelPart1(baseInfoForm)\">取消\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"\">\n" +
    "    <p class=\"sub-title\">个人信息-2\n" +
    "    <span ng-if=\"canEditWorkEduInfo\" class=\"clearFloat\">\n" +
    "            <span class=\"edit\" ng-click=\"$parent.onEditPart2()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "    </span>\n" +
    "    </p>\n" +
    "\n" +
    "    <div>\n" +
    "        教育经历\n" +
    "        <span class=\"add\" ng-click=\"educationAdd.addClick()\"\n" +
    "              ng-show=\"!isReadOnly2\">\n" +
    "            <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "            添加</span>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"addingEducation\">\n" +
    "        <form class=\"form-horizontal\" name=\"educationAddForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"educationAddOptions.start\"\n" +
    "                     ng-model=\"educationAdd.start\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"educationAddOptions.end\"\n" +
    "                     ng-model=\"educationAdd.end\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"educationAddOptions.school\"\n" +
    "                     ng-model=\"educationAdd.school\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"educationAddOptions.discipline\"\n" +
    "                     ng-model=\"educationAdd.discipline\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"educationAddOptions.degree\"\n" +
    "                     ng-model=\"educationAdd.degree\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"educationAdd.onSave(educationAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"educationAdd.onCancel()\">取消</span>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div education-info\n" +
    "         ng-repeat=\"item in educationList\" ng-model=\"item\"></div>\n" +
    "\n" +
    "    <div>\n" +
    "        <div class=\"work-title\">\n" +
    "            工作经历\n" +
    "        <span class=\"add\" ng-click=\"workExpAdd.addClick()\"\n" +
    "              ng-show=\"!isReadOnly2\">\n" +
    "            <i\n" +
    "                    class=\"glyphicon glyphicon-plus\"></i>添加</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"addingWorkExp\">\n" +
    "        <form class=\"form-horizontal\" name=\"workExpAddForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"workExpAddOptions.start\"\n" +
    "                     ng-model=\"workExpAdd.start\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"workExpAddOptions.end\"\n" +
    "                     ng-model=\"workExpAdd.end\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"workExpAddOptions.company\"\n" +
    "                     ng-model=\"workExpAdd.company\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"workExpAddOptions.position\"\n" +
    "                     ng-model=\"workExpAdd.position\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"workExpAdd.onSave(workExpAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"workExpAdd.onCancel()\">取消</span>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div work-info\n" +
    "         ng-repeat=\"item in workExpList\" ng-model=\"item\">\n" +
    "    </div>\n" +
    "\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"form-group\" ng-show=\"!isReadOnly2\" style=\"margin: 10px 0 0\">\n" +
    "            <div class=\"col-sm-12 center\">\n" +
    "                <button class=\"btn btn-sm btn-default\"\n" +
    "                        ng-click=\"cancelPart2()\">取消\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/baseInfo/workExpAdd.html",
    "<div class=\"wraper-edit\" ng-show=\"addingWorkExp\">\n" +
    "    <form class=\"form-horizontal\" name=\"workExpAddForm\"\n" +
    "          novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"workExpAddOptions.start\"\n" +
    "                 ng-model=\"workExpAdd.start\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"workExpAddOptions.end\"\n" +
    "                 ng-model=\"workExpAdd.end\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"workExpAddOptions.company\"\n" +
    "                 ng-model=\"workExpAdd.company\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"workExpAddOptions.position\"\n" +
    "                 ng-model=\"workExpAdd.position\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"workExpAdd.onSave(workExpAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"workExpAdd.onCancel()\">取消</span>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/changeInfo/tpl.html",
    "<div class=\"hr-changeInfo\">\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/dimission/tpl.html",
    "<form class=\"form-horizontal\" name=\"leaveJobForm\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "    <div class=\"content-container hr-dimission\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">离职原因：</div>\n" +
    "            <div class=\"col-sm-4\">{{reason}}</div>\n" +
    "            <div input-control options=\"inputOptions.leaveDate\"\n" +
    "                 ng-model=\"leaveDate\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"inputOptions.reasonFromHr\"\n" +
    "                 ng-model=\"reasonFromHr\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">备注：</div>\n" +
    "            <div class=\"col-sm-10\">{{leaveDetail}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"inputOptions.leaveSignBill\"\n" +
    "                 ng-model=\"leaveSignBill\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-if=\"canEditLeaveInfo\">\n" +
    "            <div class=\"col-sm-12 center\">\n" +
    "                <button class=\"btn btn-primary btn-sm\" type=\"submit\"\n" +
    "                        ng-click=\"ok(leaveJobForm)\">提交\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/directive/educationInfo/tpl.html",
    "<div class=\"hr-directive hr-directive-educationInfo\">\n" +
    "    <div class=\"wraper-show\" ng-show=\"!editing\">\n" +
    "        <span class=\"time\">\n" +
    "            {{startShow}}至{{endShow}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{school}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{discipline}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{degree|degree}}\n" +
    "        </span>\n" +
    "        <span ng-show='!disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onDel()\">删除</span>\n" +
    "        <span ng-show='!disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onEdit()\">编辑</span>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"editing\">\n" +
    "        <form class=\"form-horizontal\" name=\"educationForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.start\"\n" +
    "                     ng-model=\"editInfo.start\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.end\"\n" +
    "                     ng-model=\"editInfo.end\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.school\"\n" +
    "                     ng-model=\"editInfo.school\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.discipline\"\n" +
    "                     ng-model=\"editInfo.discipline\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.degree\"\n" +
    "                     ng-model=\"editInfo.degree\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onEditSave(educationForm)\">保存</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"onCancelEdit()\">取消</span>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/directive/familyInfo/tpl.html",
    "<div class=\"hr-directive hr-directive-familyInfo\">\n" +
    "    <div class=\"wraper-show\" ng-show=\"!editing\">\n" +
    "        <span class=\"time\">\n" +
    "            {{options.name}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{options.title}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            生日：{{options.birthday |dateFormat}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{options.company || emptyValue}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{options.position || emptyValue}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{options.mobile || emptyValue}}\n" +
    "        </span>\n" +
    "        <span ng-show='!options.disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onDel()\">删除</span>\n" +
    "        <span ng-show='!options.disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onEdit()\">编辑</span>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"editing\">\n" +
    "        <form class=\"form-horizontal\" name=\"familyForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.name\"\n" +
    "                     ng-model=\"editInfo.name\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.title\"\n" +
    "                     ng-model=\"editInfo.title\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.birthday\"\n" +
    "                     ng-model=\"editInfo.birthday\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.company\"\n" +
    "                     ng-model=\"editInfo.company\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.position\"\n" +
    "                     ng-model=\"editInfo.position\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.mobile\"\n" +
    "                     ng-model=\"editInfo.mobile\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"center\">\n" +
    "               <span class=\"btn btn-sm btn-warning\"\n" +
    "                     ng-click=\"onEditSave(familyForm)\">保存</span>\n" +
    "                <span class=\"btn btn-sm btn-default\"\n" +
    "                      ng-click=\"onCancelEdit()\">取消</span>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/directive/workInfo/tpl.html",
    "<div class=\"hr-directive hr-directive-workInfo\">\n" +
    "    <div class=\"wraper-show\" ng-show=\"!editing\">\n" +
    "        <span class=\"time\">\n" +
    "            {{startShow}}至{{endShow}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{company}}\n" +
    "        </span>\n" +
    "        <span class=\"char\">\n" +
    "            {{position}}\n" +
    "        </span>\n" +
    "        <span ng-show='!disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onDel()\">删除</span>\n" +
    "        <span ng-show='!disable' class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onEdit()\">编辑</span>\n" +
    "    </div>\n" +
    "    <div class=\"wraper-edit\" ng-show=\"editing\">\n" +
    "        <form class=\"form-horizontal\" name=\"workForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.start\"\n" +
    "                     ng-model=\"editInfo.start\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.end\"\n" +
    "                     ng-model=\"editInfo.end\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.company\"\n" +
    "                     ng-model=\"editInfo.company\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"inputOptions.position\"\n" +
    "                     ng-model=\"editInfo.position\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"onEditSave(workForm)\">保存</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"onCancelEdit()\">取消</span>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/formalApplyInfo/tpl.html",
    "<div class=\"content-container formalApply\">\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <td>转正申请：</td>\n" +
    "            <td ng-bind-html=\"commonInfo.formalApplyInfo\"></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
  $templateCache.put("src/module/hr/initInfo/tpl.html",
    "<div class=\"admin-structure-mod\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">员工初始信息</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form class=\"form-horizontal\" name=\"modStructureForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3\">员工编号：</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">{{info.displayNumber}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3\">邮箱：</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">{{info.email}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-3\">初始密码：</label>\n" +
    "\n" +
    "                <div class=\"col-sm-8\">{{info.password}}</div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">关闭\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/monthSalary/tpl.html",
    "<div class=\"hr-monthSalary container\">\n" +
    "    <div class=\"row row1\">\n" +
    "        <div class=\"col-sm-1\">\n" +
    "            <span class=\"month-char\">月份选择:</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-2\">\n" +
    "            <form name='monthSalaryForm'\n" +
    "            novalidate=\"novalidate\">\n" +
    "                <input class=\"form-control month\" placeholder=\"yy-MM\"\n" +
    "                type='month'\n" +
    "                name='month'\n" +
    "                required=true\n" +
    "                max=\"{{monthMax}}\"\n" +
    "                min=\"{{monthMin}}\"\n" +
    "                ng-change=\"onMonthChange()\"\n" +
    "                ng-model=\"query.month\"\n" +
    "                >\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "            <div class=\"row row2\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    &nbsp;\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    税前总收入：{{sumSalary|rmb}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    代扣金额：{{sumMinusPer|rmb}}\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <strong>\n" +
    "                    实发工资：{{realSum|rmb}}\n" +
    "                    </strong>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row3\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <p><strong>税前收入明细</strong></p>\n" +
    "            <table class=\"table table-bordered\">\n" +
    "                <tr>\n" +
    "                    <td class='td1'>描述</td>\n" +
    "                    <td>收入额</td>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"item in abtainSalary\">\n" +
    "                    <td>{{item.name}}</td>\n" +
    "                    <td>{{item.value|rmb}}</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td class='sum-tip'>\n" +
    "                        小计:\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <strong>\n" +
    "                        {{sumSalary|rmb}}\n" +
    "                        </strong>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <p><strong>代扣明细</strong></p>\n" +
    "            <table class=\"table table-bordered\">\n" +
    "                <tr>\n" +
    "                    <td class='td1'>描述</td>\n" +
    "                    <td>扣减额</td>\n" +
    "                </tr>\n" +
    "                <tr ng-repeat=\"item in minusSalary\">\n" +
    "                    <td>{{item.name}}</td>\n" +
    "                    <td>{{item.value|rmb}}</td>\n" +
    "                </tr>\n" +
    "                <tr ng-show=\"yearAwardTax\">\n" +
    "                    <td>代扣年终奖所得税</td>\n" +
    "                    <td>{{yearAwardTax|rmb}}</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td class='sum-tip'>\n" +
    "                        小计:\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <strong>\n" +
    "                        {{sumMinusPer|rmb}}\n" +
    "                        </strong>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class='yinzhang'>\n" +
    "    </div>\n" +
    "    <div class=\"row row3\" ng-if=\"performDetail\">\n" +
    "        <p><strong>绩效详情：</strong></p>\n" +
    "        <div class=\"col-sm-6 perform-table\" id=\"perform\" ng-bind-html=\"performDetail\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row3\" ng-show=\"detail\">\n" +
    "        <p><strong>备注信息：</strong></p>\n" +
    "        <p>{{detail}}</p>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
  $templateCache.put("src/module/hr/newer/tpl.html",
    "<div class=\"hr-newer hr\">\n" +
    "<h5>\n" +
    "    <span>{{title}}</span>\n" +
    "        <span class=\"edit\" ng-click=\"onEditClick()\" ng-show=\"canEdit\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "        </span>\n" +
    "</h5>\n" +
    "\n" +
    "<form class=\"form-horizontal\" name=\"newerEnterForm\"\n" +
    "      onkeydown=\"if(event.keyCode==13)return false;\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "    <div class=\"content-container\">\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">自然信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.lawName\"\n" +
    "                     ng-model=\"lawName\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.name\"\n" +
    "                     ng-model=\"name\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.namePinyin\"\n" +
    "                     ng-model=\"namePinyin\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.sex\" ng-model=\"sex\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"baseOptions.degree\"\n" +
    "                     ng-model=\"degree\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"baseOptions.idCardNumber\"\n" +
    "                     ng-model=\"idCardNumber\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!---联系方式-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">联系方式</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"contactOptions.mobile\"\n" +
    "                     ng-model=\"mobile\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"contactOptions.personalEmail\"\n" +
    "                     ng-model=\"personalEmail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <!---基本信息-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">基本信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.type\"\n" +
    "                     ng-model=\"type\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.leader\"\n" +
    "                     ng-model=\"leader\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.structure\"\n" +
    "                     class=\"\"\n" +
    "                     ng-model=\"structure\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.level\"\n" +
    "                     ng-model=\"levelIndex\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.position\"\n" +
    "                     ng-model=\"position\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.promiseEnterDate\"\n" +
    "                     ng-model=\"promiseEnterDate\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.formalDate\"\n" +
    "                    ng-model=\"formalDate\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"infoOptions.contractCompany\"\n" +
    "                     ng-model=\"contractCompany\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"infoOptions.socialSecurityCity\"\n" +
    "                     ng-model=\"socialSecurityCity\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!---薪酬信息-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">薪酬信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"salaryOptions.baseSalary\"\n" +
    "                     ng-model=\"baseSalary\">\n" +
    "                </div>\n" +
    "                <div input-control\n" +
    "                     options=\"salaryOptions.probationarySalary\"\n" +
    "                     ng-model=\"probationarySalary\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"salaryOptions.socialSecurityBase\"\n" +
    "                     ng-model=\"socialSecurityBase\">\n" +
    "                </div>\n" +
    "                <div input-control\n" +
    "                     options=\"salaryOptions.houseFundBase\"\n" +
    "                     ng-model=\"houseFundBase\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div five-base class=\"form-group\" ng-show=\"needFiveBase\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control\n" +
    "                     options=\"salaryOptions.mobileSubsidy\"\n" +
    "                     ng-model=\"mobileSubsidy\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"salaryOptions.trafficSubsidy\"\n" +
    "                     ng-model=\"trafficSubsidy\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"salaryOptions.salaryType\"\n" +
    "                     ng-model=\"salaryType\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"\n" +
    "                salaryOptions.reportAddress\"\n" +
    "                     ng-model=\"reportAddress\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <!---其他信息-->\n" +
    "        <div class=\"content-block\">\n" +
    "            <p class=\"sub-title\">其他信息</p>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"otherOptions.resumeStorageId\"\n" +
    "                     ng-model=\"resumeStorageId\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"otherOptions.pcType\"\n" +
    "                     ng-model=\"pcType\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"otherOptions.recommendType\"\n" +
    "                     ng-model=\"recommendType\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"otherOptions.recommendDetail\"\n" +
    "                     ng-model=\"recommendDetail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"otherOptions.detail\"\n" +
    "                     ng-model=\"detail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content-block\" ng-show=\"isEditing && commited\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"editOptions.reason\"\n" +
    "                     ng-model=\"reason\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"btn-area\">\n" +
    "        <div class=\"text-muted\" ng-hide=\"isReadOnly\">提示：\n" +
    "            <span class=\"red\">*</span>为保存,预览和提交的必填项，\n" +
    "            <span class=\"blue\">*</span>为提交的必填项，\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-default btn-sm\" type=\"submit\"\n" +
    "                ng-show=\"(!isReadOnly)\"\n" +
    "                ng-click=\"showOfferDetail(newerEnterForm)\">预览\n" +
    "        </button>\n" +
    "        &nbsp;&nbsp;\n" +
    "\n" +
    "        <button class=\"btn btn-default btn-sm\" type=\"submit\"\n" +
    "                ng-show=\"canSave && (!isReadOnly)\"\n" +
    "                ng-click=\"save(newerEnterForm)\">保存\n" +
    "        </button>\n" +
    "        &nbsp;&nbsp;\n" +
    "\n" +
    "\n" +
    "        <button class=\"btn btn-primary btn-sm\" type=\"submit\"\n" +
    "                ng-hide=\"hideSubmit || isReadOnly\"\n" +
    "                ng-click=\"submit(newerEnterForm)\">提交\n" +
    "        </button>\n" +
    "        &nbsp;&nbsp;\n" +
    "\n" +
    "\n" +
    "        <button class=\"btn btn-warning btn-sm pointer\"\n" +
    "                ng-click=\"desertClick()\"\n" +
    "                ng-show=\"showAbandonBtn\">\n" +
    "            放弃\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "<div class=\"bg-danger\" ng-show=\"showAbandonInfo\">\n" +
    "    <span class=\"red\">该候选人已放弃!</span>\n" +
    "\n" +
    "    <p class=\"reason\">原因：{{abandonReason | abandonReason}}\n" +
    "        &nbsp;&nbsp;{{abandonDetail}}\n" +
    "    </p>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/opt/addAssetId/tpl.html",
    "<div class=\"hr-opt-addAssetId\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">录入资产编码</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"addAssetIdForm\">\n" +
    "            <div class=\"form\">\n" +
    "               <input type=\"text\"\n" +
    "                      ng-model=\"assetCode\"\n" +
    "                      ng-change=\"validityConfirm()\"\n" +
    "                      value=\"{{assetCode}}\"\n" +
    "                      title=\"资产编码\">\n" +
    "\n" +
    "                <div ng-show=\"!isValid\">请输入正确格式资产编码</div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(addAssetIdForm)\">保存\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/desertCandidate/tpl.html",
    "<div class=\"hr-desertCandidate\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">候选人放弃</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"desertCandidateForm\">\n" +
    "            <div class=\"form-group reason\">\n" +
    "                <div input-control options=\"inputOptions.reason\"\n" +
    "                     ng-model=\"reason\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group detail\">\n" +
    "                <div input-control options=\"inputOptions.detail\"\n" +
    "                     ng-model=\"detail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(desertCandidateForm)\">保存\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/detail/tpl.html",
    "<div class=\"hr-opt-detail\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <iframe ng-src=\"{{url}}\" class=\"detail-iframe\"></iframe>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/modFiveInsurance/tpl.html",
    "<div class=\"hr-opt-modFiveInsurance\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">五险个人缴纳金额详细</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"modFiveInsuranceForm\">\n" +
    "            <table class=\"table table-bordered table-salary\">\n" +
    "            <tr class=\"thead\">\n" +
    "                    <td>养老保险</td>\n" +
    "                    <td>失业保险</td>\n" +
    "                    <td>医疗保险</td>\n" +
    "                    <td>工伤保险</td>\n" +
    "                    <td>生育保险</td>\n" +
    "                    <td>总计</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.endowPer\"\n" +
    "                                ng-model=\"endowPer\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.unemployPer\"\n" +
    "                                ng-model=\"unemployPer\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.medicalPer\"\n" +
    "                                ng-model=\"medicalPer\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.injuryPer\"\n" +
    "                                ng-model=\"injuryPer\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.maternityPer\"\n" +
    "                                ng-model=\"maternityPer\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td class=\"sum\">{{sumSocialSecurityPer}}</td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(modFiveInsuranceForm)\">确认\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">取消\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/modFiveInsuranceCom/tpl.html",
    "<div class=\"hr-opt-modFiveInsuranceCom\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">五险公司缴纳金额详细</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"modFiveInsuranceComForm\">\n" +
    "            <table class=\"table table-bordered table-salary\">\n" +
    "            <tr class=\"thead\">\n" +
    "                    <td>养老保险</td>\n" +
    "                    <td>失业保险</td>\n" +
    "                    <td>医疗保险</td>\n" +
    "                    <td>工伤保险</td>\n" +
    "                    <td>生育保险</td>\n" +
    "                    <td>总计</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.endowCom\"\n" +
    "                                ng-model=\"endowCom\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.unemployCom\"\n" +
    "                                ng-model=\"unemployCom\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.medicalCom\"\n" +
    "                                ng-model=\"medicalCom\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.injuryCom\"\n" +
    "                                ng-model=\"injuryCom\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.maternityCom\"\n" +
    "                                ng-model=\"maternityCom\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td class=\"sum\">{{sumSocialSecurityCom}}</td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(modFiveInsuranceComForm)\">确认\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">取消\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/modMobile/tpl.html",
    "<div class=\"hr-desertCandidate\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">修改手机号-验证密码</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"modMobileForm\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.mobile\"\n" +
    "                     ng-model=\"mobile\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.code\"\n" +
    "                     ng-model=\"code\">\n" +
    "                </div>\n" +
    "                <span clickhandler=\"sendCode(modMobileForm)\" begintimer=\"beginTimer\" timer-button\n" +
    "                      time=\"60\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(modMobileForm)\">提交\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/modOfferDetail/tpl.html",
    "<div class=\"hr-opt-modOfferDetail\">\n" +
    "    <div class=\"modalHeader\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body\">\n" +
    "        <h2 style=\"text-align: center\">入职通知书</h2>\n" +
    "        <p>{{lawName}} 您好</p>\n" +
    "        <p>&nbsp;&nbsp;&nbsp;\n" +
    "        <span>我们非常荣幸的通知您，欢迎您成为跟谁学的一员.\n" +
    "        </span></p>\n" +
    "        <strong>请您于\n" +
    "            <span ng-class = \"{'offer-line': enterDate.dateExist}\">{{enterDate.dateStr}}</span>10点，到\n" +
    "            <span ng-class = \"{'offer-line': office.isExist}\">{{office.str}}</span>报到。\n" +
    "        </strong>\n" +
    "        <br>\n" +
    "        <strong>聘用期限、职位情况及薪酬：</strong>\n" +
    "        <p>入职部门：\n" +
    "            <span ng-class=\"{'offer-line': structure.isExist}\">{{structure.str}}</span>\n" +
    "        </p>\n" +
    "        <p>担任职位：\n" +
    "            <span ng-class=\"{'offer-line': position.isExist}\">{{position.str}}</span>\n" +
    "        </p>\n" +
    "        <div ng-show=\"type == 1 && formalDate == 2\">\n" +
    "            <p>聘用期限<span>3</span>年，试用期<span>6</span>个月</p>\n" +
    "        </div>\n" +
    "        <div ng-show=\"type == 1 && formalDate == 1\">\n" +
    "            <p>聘用期限<span>3</span>年，试用期<span>3</span>个月</p>\n" +
    "        </div>\n" +
    "        <div ng-show=\"type != 1\">\n" +
    "            <p>聘用期限<span>6</span>个月</p>\n" +
    "        </div>\n" +
    "        <p>试用期工资：\n" +
    "            <span ng-class=\"{'offer-line': probationarySalary.isExist}\">{{probationarySalary.str}}</span>元（人民币／月）。转正工资：\n" +
    "            <span ng-class=\"{'offer-line':\n" +
    "            baseSalary.isExist}\">{{baseSalary.str}}</span>\n" +
    "            元（人民币／月）\n" +
    "        </p>\n" +
    "        <p>月工资指满勤月收入，支付工资根据实际出勤进行计算。月工资中包含个人所得税</p>\n" +
    "        <strong>报到时需要您提供以下入职文件：</strong>\n" +
    "        <ol>\n" +
    "            <li>原单位离职证明（加盖原单位红印章）1份；</li>\n" +
    "            <li>二代身份证原件及复印件（正反面在一张纸上）1份；</li>\n" +
    "            <li>学位证、毕业证原件及复印件1份； </li>\n" +
    "            <li>北京招商银行借记卡及复印件（复印件上注明银行卡号）1份；</li>\n" +
    "            <li>个人彩色一寸白底免冠照片电子版1张（用于办理员工卡使用）；</li>\n" +
    "            <li>入职体检证明（公司指定的体检机构）;</li>\n" +
    "            <li>员工基础信息采集卡电子打印版（见邮件附件）。</li>\n" +
    "        </ol>\n" +
    "        <strong>注意事项</strong>\n" +
    "        <ol>\n" +
    "            <li>社保公积金转移业务于每月15日之前办理，15日之后入职的将于下月办理； </li>\n" +
    "            <li>未在北京参加过社保的同学，需提供一寸白底彩色电子照片（正面、免冠、彩色、白底、服装与背景颜色的反差要大的，jpg格式，宽度：358 像素，高度：441 像素；文件不小于 9KB，不大于 20KB）</li>\n" +
    "        </ol>\n" +
    "        <p>以上内容如有任何疑问，请与人力资源部联系。</p>\n" +
    "        &nbsp;&nbsp;&nbsp;\n" +
    "        <strong>本通知书为公司保密文件，请认真阅读，不得向任何第三方透露。\n" +
    "        </strong>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <br>\n" +
    "        <div style=\"float: right;width: 100px;text-align: center\">\n" +
    "            <span>跟谁学</span><br>\n" +
    "            <span>{{sendDate.dateStr}}</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>");
  $templateCache.put("src/module/hr/opt/modSalaryDetail/tpl.html",
    "<div class=\"hr-opt-modSalaryDetail\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">备注</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"modSalaryDetailForm\">\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.detail\"\n" +
    "                     ng-model=\"detail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"save(modSalaryDetailForm)\">确认\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">取消\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/rejoin/tpl.html",
    "<div class=\"hr-desertCandidate\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">员工再入职-查找</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"hrRejoinForm\">\n" +
    "            <div class=\"form-group reason\">\n" +
    "                <div input-control options=\"inputOptions.idCardNumber\"\n" +
    "                     ng-model=\"idCardNumber\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(hrRejoinForm)\">提交\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/salaryOther/tpl.html",
    "<div class=\"hr-opt-salaryOther\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">应发工资其他各项详细</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"modSalaryOtherForm\">\n" +
    "            <table class=\"table table-bordered table-salary\">\n" +
    "            <tr class=\"thead\">\n" +
    "                    <td>补充餐补</td>\n" +
    "                    <td>推荐费用</td>\n" +
    "                    <td>住房补贴</td>\n" +
    "                    <td ng-show=\"isSpecialRewardShow\">分公司经理特别奖</td>\n" +
    "                    <td>补充绩效</td>\n" +
    "                    <td>其它补贴</td>\n" +
    "                    <td>总计</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.mealPlus\"\n" +
    "                                ng-model=\"mealPlus\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.recommend\"\n" +
    "                                ng-model=\"recommend\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.houseSubsidy\"\n" +
    "                                ng-model=\"houseSubsidy\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td ng-show=\"isSpecialRewardShow\">\n" +
    "                        <div class=\"special-reward\"\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.specialReward\"\n" +
    "                                ng-model=\"specialReward\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.performExtSalary\"\n" +
    "                                ng-model=\"performExtSalary\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <div\n" +
    "                                input-control\n" +
    "                                options=\"inputOptions.otherSubsidy\"\n" +
    "                                ng-model=\"otherSubsidy\">\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                    <td><div class=\"sum\">{{otherSalary}}</div></td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(modSalaryOtherForm)\">确认\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">取消\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/tempCardAdd/tpl.html",
    "<div class=\"hr-opt-tempCardAdd\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">添加临时卡</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"tempCardAddForm\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.cardName\"\n" +
    "                     ng-model=\"cardName\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.cardNumber\"\n" +
    "                     ng-model=\"cardNumber\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(tempCardAddForm)\">添加\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/tempCardBorrow/tpl.html",
    "<div class=\"hr-opt-tempCardBorrow\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">借出临时卡</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"tempCardBorrowForm\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2\">卡名:</label>\n" +
    "                <div class=\"col-sm-4\">{{cardName}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.borrowUserName\"\n" +
    "                     ng-model=\"borrowUserName\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.idCardNumber\"\n" +
    "                     ng-model=\"idCardNumber\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.memo\"\n" +
    "                     ng-model=\"memo\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(tempCardBorrowForm)\">提交\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/tempCardDel/tpl.html",
    "<div class=\"hr-opt-tempCardDel\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">删除临时卡</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"tempCardDelForm\">\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"inputOptions.detail\"\n" +
    "                     ng-model=\"detail\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\"\n" +
    "                ng-click=\"save(tempCardDelForm)\">确认\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-default\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\">取消\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/tempCardReturn/tpl.html",
    "<div class=\"hr-opt-tempCardReturn\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">归还临时卡</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"tempCardReturnForm\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2\">卡名:</label>\n" +
    "                <div class=\"col-sm-4\">{{cardName}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2\">借卡人:</label>\n" +
    "                <div class=\"col-sm-4\">{{borrowName}}</div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(tempCardReturnForm)\">归还\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/uploadHeadImg/tpl.html",
    "<div class=\"hr-uploadHeadImg\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">上传照片</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <div class=\"content-tip\">\n" +
    "            <p><label>照片要求</label></p>\n" +
    "\n" +
    "            <p>1.近期(半年内)正面免冠电子版照片一张，面带微笑；</p>\n" +
    "\n" +
    "            <p ng-if=\"!userInfo.isAgent\">2.穿着深色，最好是本公司服装；</p>\n" +
    "\n" +
    "            <p ng-if=\"userInfo.isAgent\">2.着白色logo文化衫;</p>\n" +
    "\n" +
    "            <p>3.使用偏暖灰浅色背景；</p>\n" +
    "\n" +
    "            <p>4.照片要求: 大于 100KB，小于5M（建议使用单反相机或苹果手机拍摄）；</p>\n" +
    "\n" +
    "            <p>5.照片要求人像清晰，神态自然。不建议使用黑白照片或经翻拍的照片；</p>\n" +
    "\n" +
    "            <p>6.只能上传png、jpg、jpeg后缀的文件；</p>\n" +
    "        </div>\n" +
    "        <div class=\"img-area\">\n" +
    "            <div image-crop options=\"imgOptions\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/opt/validatePassword/tpl.html",
    "<div class=\"hr-desertCandidate\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\"\n" +
    "                ng-click=\"closeHandler()\"\n" +
    "                data-dismiss=\"modal\"><span\n" +
    "                aria-hidden=\"true\">&times;</span><span\n" +
    "                class=\"sr-only\">Close</span>\n" +
    "        </button>\n" +
    "        <h4 class=\"modal-title\">修改手机号-验证密码</h4>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"modal-body \">\n" +
    "        <form class=\"form-horizontal\" role=\"form\" novalidate\n" +
    "              name=\"validatePasswordForm\">\n" +
    "            <div class=\"form-group reason\">\n" +
    "                <div input-control options=\"inputOptions.password\"\n" +
    "                     ng-model=\"password\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"submit\"  class=\"btn btn-primary\"\n" +
    "                        ng-click=\"save(validatePasswordForm)\">下一步\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\"\n" +
    "                        ng-click=\"closeHandler()\"\n" +
    "                        data-dismiss=\"modal\">关闭\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/salaryChangeInfo/tableTpl/content.html",
    "<div ng-bind-html=\"item.content\">\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryChangeInfo/tpl.html",
    "<div class=\"hr-changeInfo\">\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/salaryInfo/tpl.html",
    "<form class=\"form-horizontal hr-salaryInfo\" name=\"salaryInfoForm\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "    <div class=\"content-container\">\n" +
    "        <div ng-show=\"canEditSalaryInfo\n" +
    "        ||(isFromSelf && mealSubsidyToMealCard)\">\n" +
    "            <span class=\"edit\" ng-click=\"onEdit()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">基本工资：</div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{baseSalary|salary}}\n" +
    "                <span ng-show=\"welfareSalary>0  && (!isProbationary)\"\n" +
    "                      class=\"gray\">(包含{{welfareOri}}元职位福利费)\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-2\">试用期基本工资：</div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                {{probationarySalary|salary}}\n" +
    "                <span ng-show=\"welfareSalary>0  && isProbationary\"\n" +
    "                      class=\"gray\">(包含{{welfareOri}}元职位福利费)\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">社保缴纳基数：</div>\n" +
    "            <div class=\"col-sm-4\">{{socialSecurityBase|unit:'元'}}</div>\n" +
    "            <div class=\"col-sm-2\">公积金缴纳基数：</div>\n" +
    "            <div class=\"col-sm-4\">{{houseFundBase|unit:'元'}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"needFiveBase && !isSelfView\">\n" +
    "            <table width=\"100%\" class=\"table1\">\n" +
    "                <tr class=\"thead\">\n" +
    "                    <td class=\"td1\">&nbsp;</td>\n" +
    "                    <td>养老</td>\n" +
    "                    <td>失业</td>\n" +
    "                    <td>医疗</td>\n" +
    "                    <td>工伤</td>\n" +
    "                    <td>生育</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td class=\"col1 td1\">\n" +
    "                        五险基数：\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{endowBase|unit:'元'}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{unemployBase|unit:'元'}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{medicalBase|unit:'元'}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{injuryBase|unit:'元'}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{maternityBase|unit:'元'}}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">通讯补贴：</div>\n" +
    "            <div class=\"col-sm-4\">{{mobileSubsidy|salary}}</div>\n" +
    "            <div class=\"col-sm-2\">交通补贴：</div>\n" +
    "            <div class=\"col-sm-4\">{{trafficSubsidy|salary}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">工资类型：</div>\n" +
    "            <div class=\"col-sm-4\">{{salaryType|salaryType}}</div>\n" +
    "\n" +
    "            <div ng-show=\"maxWelfareSalary>0\" input-control\n" +
    "                 options=\"options.welfareSalary\"\n" +
    "                 ng-model=\"welfareSalary\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div ng-show=\"mealSubsidyToMealCard\" input-control\n" +
    "                 options=\"options.mealSalaryMethod\"\n" +
    "                 ng-model=\"mealSalaryMethod\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\"\n" +
    "             ng-show=\"(canEditSalaryInfo||(isFromSelf && mealSubsidyToMealCard))\n" +
    "             && !isReadOnly\">\n" +
    "            <div class=\"col-sm-12 center\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"saveSalaryInfo(salaryInfoForm)\">保存\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/detail.html",
    "<div class=\"detail\">\n" +
    "    <div ng-if=\"item.isEdit && (!mainScope.onlyViewMode)\">\n" +
    "        <i class=\"glyphicon glyphicon-pencil detail-edit\"\n" +
    "           ng-click=\"mainScope.onDetailClick($parent.$parent.$parent.$index)\">\n" +
    "        </i>\n" +
    "        <a ng-click=\"mainScope.onDetailClick($parent.$parent.$parent.$parent.$index)\"\n" +
    "           popover=\"{{item.detail}}\"\n" +
    "           popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "           popover-append-to-body=\"true\"\n" +
    "           class=\"detail-content\">\n" +
    "            {{item.detail}}\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <span ng-if=\"!item.isEdit || mainScope.onlyViewMode\"\n" +
    "          popover=\"{{item.detail}}\"\n" +
    "          popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "          popover-append-to-body=\"true\"\n" +
    "          class=\"detail-content\">\n" +
    "        {{item.detail}}\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/executeSalary.html",
    "<div>\n" +
    "   {{item.executeSalary}}{{item.executeSalaryTypeValue}}\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/fullDay.html",
    "<div>\n" +
    "   {{item.maxDay}}/{{item.fullDay}}\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/houseFundCom.html",
    "<div ng-class=\"{'red':item.houseFundCom<0}\">\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['houseFundComOptions'+$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.houseFundCom\">\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/houseFundPer.html",
    "<div ng-class=\"{'red':item.houseFundPer<0}\">\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['houseFundPerOptions'+$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.houseFundPer\">\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/name.html",
    "<div ng-class=\"{'yellow-bg': item.yellowBg}\"\n" +
    "     popover=\"{{item.structureName}}\"\n" +
    "     popover-trigger=\"mouseenter\"\n" +
    "     popover-placement=\"top\"\n" +
    "     popover-append-to-body=\"true\"\n" +
    ">\n" +
    "    {{item.lawName}}\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/salaryList/tableTpl/opt.html",
    "<div class=\"inline-opt-area\">\n" +
    "    <div ng-show=\"!mainScope.onlyViewMode\">\n" +
    "        <a\n" +
    "                ng-show=\"item.isEdit\"\n" +
    "                ng-click=\"mainScope.onSave($parent.$parent.$index)\">保存</a>\n" +
    "        <a\n" +
    "                ng-show=\"item.isEdit\"\n" +
    "                ng-click=\"mainScope.onConfirm($parent.$parent.$index)\">确认</a>\n" +
    "        <a ng-show=\"!item.isEdit && mainScope.canEditSalary\"\n" +
    "           ng-click=\"mainScope.onEdit($parent.$parent.$index)\">编辑</a>\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/otherSalary.html",
    "<div ng-class=\"{'red':item.otherSalary<0}\">\n" +
    "    <a ng-if=\"item.isEdit && !mainScope.onlyViewMode\"\n" +
    "       ng-click=\"mainScope.onOtherSalaryClick($parent.$parent.$parent.$index)\">\n" +
    "        {{item.otherSalary}}\n" +
    "    </a>\n" +
    "    <span ng-if=\"!item.isEdit || mainScope.onlyViewMode\">\n" +
    "        {{item.otherSalary}}\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/performSalary.html",
    "<div  class=\"perform-salary\"\n" +
    "      ng-class=\"{'red':item.performLeaveSalary<0}\"\n" +
    "      popover-html-unsafe=\"{{item.performSalaryHtml}}\"\n" +
    "      popover-trigger=\"click\"\n" +
    "      popover-title=\"绩效详情\"\n" +
    "      popover-append-to-body=\"true\"\n" +
    "      popover-placement=\"right\"\n" +
    "      >\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['performSalaryOptions'+$parent.$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.performSalary\" >\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/personTax.html",
    "<div class=\"\"  ng-class=\"{'red':item.personTax<0}\">\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['personTaxOptions'+$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.personTax\">\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/realDay.html",
    "<div class=\"real-day\">\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['realDayOptions'+$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.realDay\">\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/realSum.html",
    "<div\n" +
    "    class=\"real-sum\" popover-html-unsafe=\"{{item.realSumHtml}}\"\n" +
    "    popover-trigger=\"mouseenter\"\n" +
    "    popover-title=\"绩效工资详情\"\n" +
    "    popover-placement=\"left\"\n" +
    "    popover-append-to-body=\"true\"\n" +
    "    ng-class=\"{'red':item.realSumAll<0}\">\n" +
    "        {{item.realSumAll}}\n" +
    "</div>\n" +
    "\n" +
    "");
  $templateCache.put("src/module/hr/salaryList/tableTpl/sumCom.html",
    "<div class=\"\" ng-class=\"{'red':item.sumCom<0}\">\n" +
    "    {{item.sumCom}}\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/salaryList/tableTpl/sumMinusPer.html",
    "<div class=\"real-sum\" ng-class=\"{'red':item.sumMinusPer<0}\">\n" +
    "    {{item.sumMinusPer}}\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/sumSalary.html",
    "<div ng-class=\"{'red':item.sumSalary<0}\">\n" +
    "   {{item.sumSalary}}</a>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/sumSocialSecurityCom.html",
    "<div  ng-class=\"{'red':item.sumSocialSecurityCom<0}\">\n" +
    "    <a\n" +
    "            ng-if=\"!item.noInsurance && item.isEdit && !mainScope.onlyViewMode\" ng-click=\"mainScope.onSumSocialSecurityComClick($parent.$parent.$parent.$index)\">\n" +
    "        {{item.sumSocialSecurityCom}}\n" +
    "    </a>\n" +
    "    <span ng-if=\"item.noInsurance || (!item.isEdit) || mainScope.onlyViewMode\">\n" +
    "        {{item.sumSocialSecurityCom}}\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/salaryList/tableTpl/sumSocialSecurityPer.html",
    "<div ng-class=\"{'red':item.sumSocialSecurityPer<0}\">\n" +
    "    <a  ng-if=\"!item.noInsurance && item.isEdit && !mainScope.onlyViewMode\" ng-click=\"mainScope.onSumSocialSecurityPerClick($parent.$parent.$parent.$index)\">\n" +
    "        {{item.sumSocialSecurityPer}}\n" +
    "    </a>\n" +
    "    <span ng-if=\"item.noInsurance || (!item.isEdit) || mainScope.onlyViewMode\">\n" +
    "        {{item.sumSocialSecurityPer}}\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/salaryList/tableTpl/systemMemo.html",
    "<div class=\"system-Memo\">\n" +
    "    <span class=\"detail-content\" popover=\"{{item.systemMemo}}\"\n" +
    "    popover-trigger=\"mouseenter\"\n" +
    "    popover-placement=\"top\"\n" +
    "    popover-append-to-body=\"true\"\n" +
    "    >\n" +
    "        {{item.systemMemo}}\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tableTpl/taxFreeSubsidy.html",
    "<div ng-class=\"{'red':item.taxFreeSubsidy<0}\">\n" +
    "    <div input-control\n" +
    "         options=\"mainScope['taxFreeSubsidyOptions'+$parent.$parent.$index]\"\n" +
    "         ng-model=\"item.taxFreeSubsidy\">\n" +
    "    </div>\n" +
    "</div>");
  $templateCache.put("src/module/hr/salaryList/tpl.html",
    "<div class=\"hr-salaryList\">\n" +
    "    <h5>\n" +
    "        <span>应发工资名单查询</span>\n" +
    "    </h5>\n" +
    "    <form class=\"form-horizontal query-container\"\n" +
    "          role=\"form\" novalidate=\"novalidate\" class='salaryQueryForm'>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>组织架构:</label>\n" +
    "                <select class=\"form-control\"\n" +
    "                        ng-change=\"onStructureChange(query.structure)\"\n" +
    "                        ng-model=\"query.structure\"\n" +
    "                        ng-options=\"m.id as m.name for m in structureList\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>月份:</label>\n" +
    "                <input class=\"form-control month\" placeholder=\"yy-MM\"\n" +
    "                       type='month'\n" +
    "                       max=\"{{monthMax}}\"\n" +
    "                       ng-model=\"query.month\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-1 control\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"onSearch()\">查询\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <span ng-show=\"!onlyViewMode\">\n" +
    "            <span class=\"btn btn-primary btn-sm\" ng-click=\"onBatchSaveClick()\"\n" +
    "                  ng-disabled=\"!tableOptions.selectedItems.length\"\n" +
    "                    >批量保存\n" +
    "            </span>\n" +
    "            <span class=\"btn btn-warning btn-sm\"\n" +
    "                  ng-click=\"onBatchConfirmClick()\"\n" +
    "                  ng-disabled=\"!tableOptions.selectedItems.length\"\n" +
    "                    >批量确认\n" +
    "            </span>\n" +
    "            <span class=\"btn btn-default btn-sm\" ng-show='hasMealSubsidyList'>\n" +
    "                <a target=\"_blank\" href=\"{{exportMealSubsidyListUrl}}\">\n" +
    "                    导出餐补名单\n" +
    "                </a>\n" +
    "            </span>\n" +
    "            <span class=\"btn btn-default btn-sm\">\n" +
    "                <a target=\"_blank\" href=\"{{exportWelfareSalaryListUrl}}\">\n" +
    "                   职位福利费导出\n" +
    "                </a>\n" +
    "            </span>\n" +
    "            <a class=\"export\" target=\"_blank\" href=\"{{exportUrl}}\">\n" +
    "                导出\n" +
    "            </a>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <form name=\"salaryComputeForm\">\n" +
    "        <div table-control options=\"tableOptions\">\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"text-muted bg-tip\">提示：红色记录代表由于出勤原因或者罚款过多导致员工本月不能参与职位福利费</div>\n" +
    "\n" +
    "</script>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/search/tableTpl/entryLeaveLog.html",
    "<span popover-html-unsafe=\"{{item.entryLeaveLog}}\" \n" +
    "   popover-trigger=\"mouseenter\" \n" +
    "   popover-popup-delay=\"300\" \n" +
    "   popover-placement=\"top\" \n" +
    "   popover-append-to-body=\"true\" \n" +
    "   title=\"{{item.entryLeaveLog}}\" \n" +
    "   style=\"width: 80px;\"\n" +
    "   class=\"ellipsis\">\n" +
    "        {{item.entryLeaveLog}}\n" +
    "    </span>");
  $templateCache.put("src/module/hr/search/tableTpl/name.html",
    "<div>\n" +
    "    <span\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.isRecruitHRSearch\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'newerSearch')\"\n" +
    "           class=\"pointer\"\n" +
    "                >{{item.name}}</a>\n" +
    "    </span>\n" +
    "    <span\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.isHRSearch\n" +
    "            || $parent.$parent.$parent.$parent.isToJoinSearch\n" +
    "            || $parent.$parent.$parent.$parent.isAdminSearch\n" +
    "            || $parent.$parent.$parent.$parent.isBillSearch\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'search')\"\n" +
    "           class=\"pointer\"\n" +
    "                >{{item.name}}</a>\n" +
    "    </span>\n" +
    "    <span\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.entryName == 'subordinate.search'\n" +
    "            || $parent.$parent.$parent.$parent.entryName == 'subordinate.ownerSearch' \">\n" +
    "        <a\n" +
    "                class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'subordinateSearch')\"\n" +
    "                >{{item.name}}</a>\n" +
    "    </span>\n" +
    "    <span\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.entryName == 'hr.assetManagerSearch'\">\n" +
    "        {{item.name}}\n" +
    "    </span>\n" +
    "    <span\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.entryName == 'hr.itManagerSearch'\">\n" +
    "        {{item.name}}\n" +
    "    </span>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/search/tableTpl/opt.html",
    "<div class=\"inline-opt-area\">\n" +
    "    <span class=\"opt\"\n" +
    "          ng-if=\"$parent.$parent.$parent.$parent.isRecruitHRSearch\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'newerSearch')\"\n" +
    "           class=\"pointer\"\n" +
    "                >查看/修改</a>\n" +
    "    </span>\n" +
    "    <span\n" +
    "            class=\"opt\"\n" +
    "            ng-if=\"$parent.$parent.$parent.$parent.isHRSearch || $parent.$parent.$parent.$parent.isToJoinSearch\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'search')\"\n" +
    "           class=\"pointer\"\n" +
    "                >查看/修改</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-if=\"$parent.$parent.$parent.$parent.entryName == 'subordinate.search'\">\n" +
    "        <a\n" +
    "                class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'subordinateSearch')\"\n" +
    "                >查看/修改</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-if=\"$parent.$parent.$parent.$parent.entryName == 'subordinate.ownerSearch'\">\n" +
    "        <a\n" +
    "                class=\"pointer\"\n" +
    "                ng-click=\"$parent.$parent.$parent.$parent.$parent.viewInfo(item.number,'subordinateSearch')\"\n" +
    "                >查看/修改</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-if=\"false\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.setPermission(item.number)\"\n" +
    "           class=\"pointer\"\n" +
    "                >权限配置</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-if=\"$parent.$parent.$parent.$parent.entryName == 'admin.search'\">\n" +
    "        <a ng-click=\"$parent.$parent.$parent.$parent.$parent.modKeyInfo(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >修改</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\" ng-show=\"item.canSeeInitInfo\">\n" +
    "    <a ng-click=\"$parent.$parent.$parent.$parent.viewInitInfo(item.number)\"\n" +
    "       class=\"pointer\"\n" +
    "            >查看初始信息</a\n" +
    "    </span>\n" +
    "    <span class=\"opt\" ng-show=\"item.canAddAssetCode\">\n" +
    "    <a ng-click=\"$parent.$parent.$parent.$parent.addAssetCodeClick(item)\"\n" +
    "       class=\"pointer\"\n" +
    "            >录入资产编码</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\" ng-show=\"item.canSeeJoinWork\">\n" +
    "\n" +
    "       <a ng-click=\"$parent.$parent.$parent.$parent.joinWorkClick(item.number)\"\n" +
    "          class=\"pointer\"\n" +
    "               >入职</a>\n" +
    "    </span>\n" +
    "\n" +
    "    <span class=\"opt\" ng-show=\"item.canSeeAbandon\">\n" +
    "       <a ng-click=\"$parent.$parent.$parent.$parent.abandonClick(item.number)\"\n" +
    "          class=\"pointer\"\n" +
    "               >放弃</a>\n" +
    "    </span>\n" +
    "\n" +
    "    <span class=\"opt\" ng-show=\"item.canSeeSubAccount\">\n" +
    "       <a ng-click=\"$parent.$parent.$parent.$parent.viewSubAccountClick(item)\"\n" +
    "          class=\"pointer\"\n" +
    "               >下属</a>\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/hr/search/tpl.html",
    "<div class=\"hr-search\">\n" +
    "    <h5>\n" +
    "        <span>{{title}}</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <form class=\"form-horizontal query-container\" novalidate=\"novalidate\">\n" +
    "        <div class=\"row\">\n" +
    "            <!-- <div class=\"col-sm-3 control\">\n" +
    "                <label>编号:</label>\n" +
    "                <input class=\"form-control\" ng-model=\"query.number\">\n" +
    "            </div> -->\n" +
    "            <div class=\"col-sm-3 control\"\n" +
    "                 ng-show=\"!isRecruitHRSearch\">\n" +
    "                <label>姓名:</label>\n" +
    "                <span name-suggestion ng-model=\"query.name\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\"\n" +
    "                 ng-show=\"isRecruitHRSearch\">\n" +
    "                <label>姓名:</label>\n" +
    "                <input class=\"form-control\" ng-model=\"query.name\"/>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>手机号:</label>\n" +
    "                <input class=\"form-control\" ng-model=\"query.mobile\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>直属领导:</label>\n" +
    "                <span name-suggestion ng-model=\"query.leader\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>员工状态:</label>\n" +
    "                <select class=\"form-control\" ng-model=\"query.status\"\n" +
    "                        ng-options=\"m.id as m.name for m in staffStatus\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\"\n" +
    "                 ng-show=\"!isRecruitHRSearch && !userInfo.isAgent\">\n" +
    "                <label>员工类型:</label>\n" +
    "                <select class=\"form-control\" ng-model=\"query.type\"\n" +
    "                        ng-options=\"m.id as m.name for m in staffType\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>组织架构:</label>\n" +
    "                <span structure-selector ng-model=\"query.structure\"\n" +
    "                      options='structureOptions'>\n" +
    "                        >\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-5 control\"\n" +
    "                 ng-show=\"isRecruitHRSearch\"\n" +
    "                    >\n" +
    "                <label>入职日期:</label>\n" +
    "                <input class=\"form-control\" placeholder=\"yyyy-MM-dd\" type='date'\n" +
    "                       ng-model=\"query.promiseEnterDateBegin\">\n" +
    "                至\n" +
    "                <input type='date' placeholder=\"yyyy-MM-dd\"\n" +
    "                       class=\"form-control\"\n" +
    "                       ng-model=\"query.promiseEnterDateEnd\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\" ng-show=\"isAssetManagerSearch\">\n" +
    "                <label>电脑类型:</label>\n" +
    "                <select ng-model=\"query.pcType\" class=\"form-control\"\n" +
    "                        ng-options=\"m.id as m.name for m in pcTypeItems\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-1 control\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"onSearch()\">查询\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"table-plus-info\">\n" +
    "        <div ng-show=\"leaderStack.length\">\n" +
    "            <span class=\"return pointer\" ng-click=\"returnLastLeaderClick()\">\n" +
    "                <i class=\"glyphicon glyphicon-arrow-left\"></i>\n" +
    "                返回\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <a class=\"export\" target=\"_blank\" href=\"{{exportUrl}}\"\n" +
    "           ng-show=\"showExport\">\n" +
    "            导出\n" +
    "        </a>\n" +
    "\n" +
    "        <div class=\"custom-cols\" custom-cols options=\"userDefineColOptions\"\n" +
    "             ng-show=\"showCustomCols\"\n" +
    "             confirm-handler='userDefineColConfirmHandler(error)'>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/secretInfo/familyAdd.html",
    "<div class=\"wraper-edit\" ng-show=\"addingFamilyMember\">\n" +
    "    <form class=\"form-horizontal\" name=\"familyMemberAddForm\"\n" +
    "          novalidate=\"novalidate\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"familyMemberOptions.name\"\n" +
    "                 ng-model=\"familyMemberAdd.name\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"familyMemberOptions.title\"\n" +
    "                 ng-model=\"familyMemberAdd.title\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"familyMemberOptions.birthday\"\n" +
    "                 ng-model=\"familyMemberAdd.birthday\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"familyMemberOptions.company\"\n" +
    "                 ng-model=\"familyMemberAdd.company\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"familyMemberOptions.position\"\n" +
    "                 ng-model=\"familyMemberAdd.position\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"familyMemberOptions.mobile\"\n" +
    "                 ng-model=\"familyMemberAdd.mobile\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"center\">\n" +
    "        <span class=\"btn btn-sm btn-warning\"\n" +
    "              ng-click=\"familyMemberAdd.onSave(familyMemberAddForm)\">添加</span>\n" +
    "            <span class=\"btn btn-sm btn-default\"\n" +
    "                  ng-click=\"familyMemberAdd.onCancel()\">取消</span>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/secretInfo/tpl.html",
    "<div class=\"content-container hr-secretInfo\">\n" +
    "    <div class=\"content-block\">\n" +
    "        <div ng-show=\"canEditSecretInfo\">\n" +
    "            <span class=\"edit\" ng-click=\"onEdit()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal\" name=\"secretInfoForm\"\n" +
    "              novalidate=\"novalidate\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"secretOptions.bank\"\n" +
    "                     ng-model=\"bank\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"secretOptions.cardNum\"\n" +
    "                     ng-model=\"cardNum\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"secretOptions.personalEmail\"\n" +
    "                     ng-model=\"personalEmail\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"secretOptions.emergContact\"\n" +
    "                     ng-model=\"emergContact\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"secretOptions.emergContactMobile\"\n" +
    "                     ng-model=\"emergContactMobile\">\n" +
    "                </div>\n" +
    "                <div input-control options=\"secretOptions.address\"\n" +
    "                     ng-model=\"address\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div input-control options=\"secretOptions.filePlace\"\n" +
    "                     ng-model=\"filePlace\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-show=\"!isReadOnly\">\n" +
    "                <div class=\"col-sm-12 center\">\n" +
    "                    <button class=\"btn btn-sm btn-primary\"\n" +
    "                            ng-click=\"saveSecretInfo(secretInfoForm)\">保存\n" +
    "                    </button>\n" +
    "                    <span class=\"btn btn-sm btn-default\"\n" +
    "                          ng-click=\"cancelPart1(secretInfoForm)\">取消\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"family-container\">\n" +
    "        <div ng-show=\"canEditSecretInfo\">\n" +
    "            <span class=\"edit\" ng-click=\"onEditPart2()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <br>\n" +
    "\n" +
    "        <div>\n" +
    "            家庭成员\n" +
    "        <span class=\"add\" ng-click=\"familyMemberAdd.addClick()\"\n" +
    "              ng-show=\"!isReadOnly2\">\n" +
    "            <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "            添加\n" +
    "        </span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-include=\"'src/module/hr/secretInfo/familyAdd.html'\"></div>\n" +
    "        <div family-info\n" +
    "             ng-repeat=\"item in familyList\"\n" +
    "             options=\"item\">\n" +
    "\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\" ng-show=\"!isReadOnly2\"\n" +
    "                 style=\"margin: 10px 0 0\">\n" +
    "                <div class=\"col-sm-12 center\">\n" +
    "                    <button class=\"btn btn-sm btn-default\"\n" +
    "                            ng-click=\"cancelPart2()\">取消\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/securityList/tpl.html",
    "<div class=\"hr-taxList\">\n" +
    "    <h5>\n" +
    "        <span>社保缴纳名单查询</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <form class=\"form-horizontal query-container\" novalidate=\"novalidate\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>社保缴纳城市:</label>\n" +
    "                <select class=\"form-control\" ng-model=\"query.city\"\n" +
    "                        ng-options=\"m.id as m.name for m in cityList\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>月份:</label>\n" +
    "                <input class=\"form-control month\" placeholder=\"yy-MM\"\n" +
    "                       type='month'\n" +
    "                       max=\"{{monthMax}}\"\n" +
    "                       ng-model=\"query.month\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-1 control\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"onSearch()\">查询\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <a class=\"export\" target=\"_blank\" href=\"{{exportUrl}}\">\n" +
    "            导出\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/staffInfo/tpl.html",
    "<div class=\"hr-staffInfo\">\n" +
    "    <h5>\n" +
    "        <span>{{pageTitle}}</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <div class=\"container-fluid\" common-info number=\"{{number}}\">\n" +
    "    </div>\n" +
    "    <div class=\"opt-btn\">\n" +
    "        <!--zhanwentao-->\n" +
    "        <button class=\"btn btn-default pointer\"\n" +
    "                style=\"background-color: #618fe4;\"\n" +
    "                ng-show=\"showJoinBtn\"\n" +
    "                ng-click=\"getJobNumber()\"\n" +
    "                ng-disabled=\"hasGetJobNumber\"\n" +
    "                ng-show=\"!isAgent\"\n" +
    "                >\n" +
    "            <span ng-if=\"!hasGetJobNumber\">生成工号</span>\n" +
    "            <span ng-if=\"hasGetJobNumber\">已生成工号</span>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-primary pointer\"\n" +
    "                ng-click=\"joinWorkClick()\"\n" +
    "                ng-show=\"showJoinBtn && !isAgent\"\n" +
    "                >\n" +
    "            入职\n" +
    "        </button>\n" +
    "\n" +
    "        <button class=\"btn btn-default pointer\"\n" +
    "                ng-show=\"canSeeInitInfo\"\n" +
    "                ng-click=\"initInfoClick()\"\n" +
    "                >\n" +
    "            查看初始信息\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"bg-danger\" ng-show=\"showJoinBtn\">\n" +
    "        备注： {{detail}}\n" +
    "    </div>\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.baseInfo')}\"\n" +
    "            ng-show=\"canReadBaseInfo\">\n" +
    "            <a\n" +
    "                    ui-sref=\"{{entryName}}.baseInfo\">个人资料</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.workInfo')}\"\n" +
    "            ng-show=\"canReadWorkInfo\">\n" +
    "            <a ui-sref=\"{{entryName}}.workInfo\">岗位信息</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.salaryInfo')}\"\n" +
    "            ng-show=\"canReadSalaryInfo && !isAgent\">\n" +
    "            <a ui-sref=\"{{entryName}}.salaryInfo\">薪酬信息</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.secretInfo')}\"\n" +
    "            ng-show=\"canReadSecretInfo && !isAgent\">\n" +
    "            <a ui-sref=\"{{entryName}}.secretInfo\">隐私信息</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.changeInfo')}\"\n" +
    "            ng-show=\"canReadChangeInfo\">\n" +
    "            <a ui-sref=\"{{entryName}}.changeInfo\">岗位变动历史</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.salaryChangeInfo')}\"\n" +
    "            ng-show=\"canReadSalaryInfo && !isAgent\">\n" +
    "            <a ui-sref=\"{{entryName}}.salaryChangeInfo\">薪酬变动历史</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.leaveInfo')}\"\n" +
    "            ng-show=\"canReadLeaveInfo\">\n" +
    "            <a ui-sref=\"{{entryName}}.leaveInfo\">员工离职</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.workTargetInfo')}\"\n" +
    "            ng-show=\"canReadWorkTargetInfo\">\n" +
    "            <a ui-sref=\"{{entryName}}.workTargetInfo\">试用期工作目标</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.formalApplyInfo')}\"\n" +
    "            ng-show=\"canReadFormalApplyInfo\">\n" +
    "            <a ui-sref=\"{{entryName}}.formalApplyInfo\">试用期转正申请</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('*.*.monthSalary')}\"\n" +
    "            ng-show=\"canReadMonthSalary && !isAgent\">\n" +
    "            <a ui-sref=\"{{entryName}}.monthSalary\">工资单</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div ui-view></div>\n" +
    "\n" +
    "    <div class=\"row opt-container\" ng-show=\"showOptArea\">\n" +
    "        <h5 style=\"text-align: left\">\n" +
    "            <span>工作台</span>\n" +
    "        </h5>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showProbationChangeBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onChangeProbation()\"\n" +
    "                    ng-disabled=\"disableProbationChangeBtn\"\n" +
    "                    >试用期变更\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showWorkTargetBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onWriteWorkTarget()\"\n" +
    "                    ng-disabled=\"disableWorkTargetBtn\"\n" +
    "                    >试用期工作目标\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showFormalApplyBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onFormalApply()\"\n" +
    "                    ng-disabled=\"disableFormalApplyBtn\"\n" +
    "                    >试用期转正申请\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showTransFullBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onTransFull()\"\n" +
    "                    ng-disabled=\"disableTransFullBtn\"\n" +
    "                    >实习生/劳务转正式\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showStructureChangeBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onChangeStructure()\"\n" +
    "                    ng-disabled=\"disableStructureChangeBtn\"\n" +
    "                    >内部人事调动\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showSalaryChangeBtn && !isAgent\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onChangeSalary()\"\n" +
    "                    ng-disabled=\"disableSalaryChangeBtn\"\n" +
    "                    >岗位薪酬调整\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showLeaveBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onLeave()\"\n" +
    "                    ng-disabled=\"disbaleLeaveBtn\"\n" +
    "                    >发起离职\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showMultipleBtn && !isAgent\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onMultiple()\"\n" +
    "                    ng-disabled=\"disbaleMultipleBtn\"\n" +
    "                    >综合审批\n" +
    "                <i popover=\"跨公司调整、调整部门、岗位、薪酬、签约公司、社保城市等\"\n" +
    "                   popover-trigger=\"mouseenter\" popover-placement=\"top\"\n" +
    "                   popover-append-to-body=\"true\"\n" +
    "                   class=\"glyphicon glyphicon-question-sign\"></i>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-btn\"\n" +
    "             ng-show=\"showForbidBtn\">\n" +
    "            <button class=\"btn btn-primary\"\n" +
    "                    ng-click=\"onForbid()\"\n" +
    "                    >{{curForbidBtnName}}\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/taxList/tpl.html",
    "<div class=\"hr-taxList\">\n" +
    "    <h5>\n" +
    "        <span>个税名单查询</span>\n" +
    "    </h5>\n" +
    "\n" +
    "    <form class=\"form-horizontal query-container\" novalidate=\"novalidate\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>组织架构:</label>\n" +
    "                <select class=\"form-control\" ng-model=\"query.structure\"\n" +
    "                        ng-options=\"m.id as m.name for m in structureList\">\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-3 control\">\n" +
    "                <label>月份:</label>\n" +
    "                <input class=\"form-control month\" placeholder=\"yy-MM\"\n" +
    "                       type='month'\n" +
    "                       max=\"{{monthMax}}\"\n" +
    "                       ng-model=\"query.month\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-1 control\">\n" +
    "                <button class=\"btn btn-primary\" ng-click=\"onSearch()\">查询\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <a class=\"export\" target=\"_blank\" href=\"{{exportUrl}}\">\n" +
    "            导出\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/tempCard/table/tableTpl/opt.html",
    "<div class=\"inline-opt-area\">\n" +
    "    <span class=\"opt\"\n" +
    "          ng-show=\"item.status == mainScope.tabCode.HAD_BORROW\">\n" +
    "        <a ng-click=\"mainScope.onSingleReturnClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >归还</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\"\n" +
    "          ng-show=\"item.status == mainScope.tabCode.CAN_BORROW\">\n" +
    "        <a ng-click=\"mainScope.onSingleBorrowClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >借出</a>\n" +
    "    </span>\n" +
    "    <span class=\"opt\">\n" +
    "        <a ng-click=\"mainScope.onSingleDelClick(item)\"\n" +
    "           class=\"pointer\"\n" +
    "                >删除</a>\n" +
    "    </span>\n" +
    "</div>");
  $templateCache.put("src/module/hr/tempCard/table/tableTpl/title.html",
    "<div class=\"\">\n" +
    "</div>");
  $templateCache.put("src/module/hr/tempCard/table/tpl.html",
    "<div class=\"\">\n" +
    "    <div class=\"table-opt-area\">\n" +
    "        <button class=\"btn btn-primary btn-sm\"\n" +
    "                ng-click=\"addTempCard()\">添加临时卡\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div table-control options=\"tableOptions\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/tempCard/tpl.html",
    "<div class=\"tempCard-list\">\n" +
    "    <h5>\n" +
    "        <span>临时卡管理</span>\n" +
    "    </h5>\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('hr.tempCard.all')}\">\n" +
    "            <a\n" +
    "                    ui-sref=\"hr.tempCard.all\">全部 ( {{count.all}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('hr.tempCard.canBorrow')}\">\n" +
    "            <a ui-sref=\"hr.tempCard.canBorrow\">可借出 ( {{count.canBorrow}} )</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"\n" +
    "            ng-class=\"{active: $state.includes('hr.tempCard.hadBorrow')}\">\n" +
    "            <a ui-sref=\"hr.tempCard.hadBorrow\">已借出( {{count.hadBorrow}} )</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div ui-view></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/module/hr/tpl.html",
    "<div ui-view></div>");
  $templateCache.put("src/module/hr/workInfo/tpl.html",
    "<form class=\"form-horizontal hr-workInfo\" name=\"workInfoForm\"\n" +
    "      novalidate=\"novalidate\">\n" +
    "    <div class=\"content-container\">\n" +
    "        <div ng-show=\"canEditWorkInfo && !isAgent\">\n" +
    "            <span class=\"edit\" ng-click=\"onEdit()\">\n" +
    "            <i class=\"glyphicon glyphicon-pencil\"></i>\n" +
    "            编辑\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div class=\"col-sm-2\">员工类型：</div>\n" +
    "            <div class=\"col-sm-4\">{{type|type}}</div>\n" +
    "            <div input-control options=\"workOptions.contractCompany\"\n" +
    "                 ng-model=\"contractCompany\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">直属领导：</div>\n" +
    "            <div class=\"col-sm-4\">{{leader}}</div>\n" +
    "            <div class=\"col-sm-2\">组织架构：</div>\n" +
    "            <div class=\"col-sm-4\">{{structureName}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-2\">等级：</div>\n" +
    "            <div class=\"col-sm-4\">{{level}}</div>\n" +
    "            <div class=\"col-sm-2\">职位名称：</div>\n" +
    "            <div class=\"col-sm-4\">{{positionName}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"workOptions.office\"\n" +
    "                 ng-model=\"office\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"workOptions.sit\"\n" +
    "                 ng-model=\"sit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"workOptions.socialSecurityCity\"\n" +
    "                 ng-model=\"socialSecurityCity\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"workOptions.icCardNumber\"\n" +
    "                 ng-model=\"icCardNumber\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-show=\"!isAgent\">\n" +
    "            <div input-control options=\"workOptions.remotePunchCard\"\n" +
    "                 ng-model=\"remotePunchCard\">\n" +
    "            </div>\n" +
    "            <div input-control options=\"workOptions.requireCheckTime\"\n" +
    "                 ng-model=\"requireCheckTime\" ng-show=\"isPunchCardNode\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div input-control options=\"workOptions.workEmail\"\n" +
    "                ng-model=\"workEmail\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"form-group\" ng-show=\"canEditWorkInfo && !isReadOnly\">\n" +
    "            <div class=\"col-sm-12 center\">\n" +
    "                <button class=\"btn btn-sm btn-primary\"\n" +
    "                        ng-click=\"saveWorkInfo(workInfoForm)\">保存\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
  $templateCache.put("src/module/hr/workTargetInfo/tpl.html",
    "<div class=\"content-container workTarget\">\n" +
    "    <table>\n" +
    "        <tr>\n" +
    "            <td>目标设定：</td>\n" +
    "            <td ng-bind-html=\"commonInfo.workTargetInfo\"></td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
  $templateCache.put("src/module/subordinate/tpl.html",
    "<div ui-view></div>");
}]);
})
