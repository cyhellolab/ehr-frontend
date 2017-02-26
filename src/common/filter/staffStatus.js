/**
 * @file 学历转化
 * @author Lingling Yan yanlingling@baijiahulian.com
 */
define(function (require) {
    var app = require('../app');
    var config = require('module/nameConfig');
    app.filter('staffStatus', function () {
        return function (value) {
            return (value === null || value === '' || typeof value == 'undefined')
                ? config.EMPTY_VALUE  : config.STAFF_STATUS[value];
        };
    })
});