/**
 * @file 表格配置项
 * @author Lingling Yan yanlingling@baijiahulian.com
 */
define(function (require) {
    return function ($scope) {
        var userAgent = window.navigator.userAgent;
        var optWidth = '38px';
        if (userAgent.indexOf('Mac') > -1) {
            optWidth = '65px';
        }
        return [
            {
                field: 'displayNumber',
                displayName: '工号',
                style: {
                    width: '3%'
                },
                rowspan: 2
            },
            {
                field: 'lawName',
                displayName: '法律名',
                cellTpl: 'src/module/hr/salaryList/tableTpl/name.html',
                style: {
                    width: '4%'
                },
                rowspan: 2
            },
            {
                field: 'staffTypeValue',
                displayName: '员工类型',
                style: {
                    width: '4%'
                },
                rowspan: 2
            },
            {
                field: 'systemMemo',
                displayName: '系统备注',
                cellTpl: 'src/module/hr/salaryList/tableTpl/systemMemo.html',
                style: {
                    width: '4%',
                },
                rowspan: '2'
            },
            /*{
                field: 'structureName',
                displayName: '组织架构',
                style: {
                    width: '7%'
                },
                rowspan: 2
            },*/
            {
                field: '',
                displayName: '最大出勤天数/全勤',
                cellTpl: 'src/module/hr/salaryList/tableTpl/fullDay.html',
                style: {
                    width: '4%'
                },
                rowspan: 2
            },
            {
                field: 'realDay',
                displayName: '实际出勤天数',
                style: {
                    width: '3%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/realDay.html',
                rowspan: 2
            },
            {
                field: 'executeSalary',
                headOneDisplayName: '应发工资',
                colspan: 7,
                displayName: '执行工资',
                style: {
                    width: '5%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/executeSalary.html'
            },
            {
                field: 'trafficSubsidy',
                displayName: '交通补贴',
                style: {
                    width: '3%'
                }
            },
            {
                field: 'mobileSubsidy',
                displayName: '通讯补贴',
                style: {
                    width: '3%'
                }
            },
            {
                field: 'mealSubsidy',
                displayName: '餐补',
                style: {
                    width: '3%'
                }
            },
            {
                field: '',
                displayName: '绩效工资',
                style: {
                    width: '5%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/performSalary.html'
            },
            {
                field: '',
                displayName: '其它',
                style: {
                    width: '4%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/otherSalary.html'
            },
            {
                field: 'sumSalary',
                displayName: '小计',
                style: {
                    width: '5%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/sumSalary.html'
            },
            {
                headOneDisplayName: '代扣五险一金及个税(个人)',
                colspan: 4,
                field: '',
                displayName: '五险总计',
                style: {
                    width: '3%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/sumSocialSecurityPer.html'
            },
            {
                field: '',
                displayName: '住房公积金',
                style: {
                    width: '3%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/houseFundPer.html'
            },
            {
                field: '',
                displayName: '个人所得税',
                style: {
                    width: '4%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/personTax.html'
            },
            {
                field: 'sumMinusPer',
                displayName: '小计',
                style: {
                    width: '4%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/sumMinusPer.html'
            },

            {
                headOneDisplayName: '五险一金(公司)',
                colspan: 3,
                field: '',
                displayName: '五险总计',
                style: {
                    width: '3%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/sumSocialSecurityCom.html'
            },
            {
                field: '',
                displayName: '住房公积金',
                style: {
                    width: '3%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/houseFundCom.html'
            },
            {
                field: 'sumCom',
                displayName: '小计',
                style: {
                    width: '4%'
                },
                cellTpl: 'src/module/hr/salaryList/tableTpl/sumCom.html'
            },
            {
                field: 'taxFreeSubsidy',
                displayName: '免税所得',
                style: {
                    width: '3%'
                },
                rowspan: 2,
                cellTpl: 'src/module/hr/salaryList/tableTpl/taxFreeSubsidy.html'
            },
            {
                headOneDisplayName: '年终奖',
                colspan: 2,
                field: 'yearAward',
                displayName: '税前年终奖',
                style: {
                    width: '3%'
                }
            },
            {
                field: 'yearAwardTax',
                displayName: '年终奖纳税',
                style: {
                    width: '3%'
                }
            },
            {
                field: 'realSumAll',
                displayName: '实发工资',
                style: {
                    width: '5%'
                },
                rowspan: 2,
                cellTpl: 'src/module/hr/salaryList/tableTpl/realSum.html'
            },
            {
                field: '',
                displayName: '备注',
                style: {
                    width: '4%'
                },
                rowspan: 2,
                cellTpl: 'src/module/hr/salaryList/tableTpl/detail.html'
            },

            {
                field: 'opt',
                displayName: '操作',
/*                style: {
                    'width': optWidth
                },*/
                rowspan: 2,
                cellTpl: 'src/module/hr/salaryList/tableTpl/opt.html'
            }
        ]
    }
});