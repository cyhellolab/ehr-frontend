/**
 * @file
 * @author Lingling Yan (yanlingling@baijiahulian.com)
 */
define(function (require) {
    return {
        DEFAULT_COLS: {
            SALARY_HR: [
                'name', 'lawName', 'displayNumber', 'idCardNumber', 'status',
                'socialSecurityCity', 'salaryType', 'cardNum',
                'type', 'positionName', 'leaderName'
            ], // 'excuteSalary',
            RELATIONSHIP_HR: [
                'name', 'sex', 'displayNumber', 'type', 'lawName', 'degree', 'mobile',
                'level', 'positionName', 'leaderName'
            ],
            HRBP_HR: [
                'name', 'sex', 'displayNumber', 'mobile', 'degree',
                'lawName', 'type', 'level', 'positionName', 'leaderName'
            ],
            TRAINING_HR: [
                'name', 'sex', 'displayNumber', 'degree',
                'enterTime', 'lawName', 'type', 'level', 'positionName', 'leaderName'
            ],
            RECRUIT_HR: [
                'name', 'sex', 'displayNumber', 'mobile', 'degree',
                'promiseEnterDate', 'status', 'lawName', 'level',
                'positionName', 'leaderName'
            ],
            MANAGER: [
                'name', 'sex', 'displayNumber', 'type', 'degree', 'level',
                'positionName'
            ],
            OWNER: [
                'name', 'sex', 'displayNumber', 'type', 'degree', 'level',
                'positionName'
            ],
            ASSET_MANAGER: [
                'name', 'displayNumber', 'email', 'structureName', 'positionName',
                'assetCode',
                'pcType', 'office', 'enterTime'
            ],
            IT_MANAGER: [
                'name', 'displayNumber', 'email', 'structureName', 'positionName',
                'assetCode',
                'pcType', 'office', 'enterTime'
            ],
            ADMIN: ['name', 'displayNumber', 'lawName', 'sex', 'email'],
            AGENT: [
                'name', 'mobile', 'enterTime', 'leaderName', 'structureName', 'level',
                'positionName', 'sex'
            ]
        }
    }
});