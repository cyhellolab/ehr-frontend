/**
 * @file 表格配置项
 * @author Lingling Yan yanlingling@baijiahulian.com
 */
define(function (require) {
    return function ($scope) {
        return [
            {
                field: 'displayNumber',
                displayName: '工号',
                width: 50
            },
            {
                field: 'lawName',
                displayName: '法律名',
                width: 50
            },
            {
                field: 'staffTypeValue',
                displayName: '员工类型',
                width: 60
            },
            {
                field: 'structureName',
                displayName: '组织架构',
                width: 120
            },
            {
                field: 'isForeignValue',
                displayName: '证件类型',
                width: 40
            },
            {
                field: 'idCardNumber',
                displayName: '证件号',
                width: 45
            },
            {
                field: 'income',
                displayName: '收入额',
                width: 50
            },
            {
                field: 'dutyFreeIncome',
                displayName: '免税收入额',
                width: 50
            },
            {
                field: 'standard',
                displayName: '费用扣除标准',
                width: 50
            },
            {
                field: 'taxIncome',
                displayName: '应纳税所得',
                width: 50
            },
            {
                field: 'taxRate',
                displayName: '税率（%）',
                width: 50
            },
            {
                field: 'taxMoney',
                displayName: '应扣税额',
                width: 50
            },
            {
                field: 'taxStructureName',
                displayName: '缴纳城市',
                width: 50
            }
        ]
    }
});