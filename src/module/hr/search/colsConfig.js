/**
 * @file 表格配置项
 * @author Lingling Yan yanlingling@baijiahulian.com
 */
define(function (require) {
    return function ($scope) {
        return {
            lastEnterTime: {
                field: 'lastEnterTime',
                displayName: '上次入职信息'
            },
            lastLeaveTime: {
                field: 'lastLeaveTime',
                displayName: '上次离职信息'
            },
            lastStaffTypeValue: {
                field: 'lastStaffTypeValue',
                displayName: '上次员工类型'
            },
            entryLeaveLog: {
                field: 'entryLeaveLog',
                displayName: '入离职信息',
                cellTpl: 'src/module/hr/search/tableTpl/entryLeaveLog.html'
            },
            personalEmail: {
                field: 'personalEmail',
                displayName: '联系邮箱'
            },
            emergContact: {
                field: 'emergContact',
                displayName: '紧急联系人'
            },
            emergContactMobile: {
                field: 'emergContactMobile',
                displayName: '紧急联系人电话'
            },
            address: {
                field: 'address',
                displayName: '住址及邮编'
            },
            filePlace: {
                field: 'filePlace',
                displayName: '档案挂靠处'
            },
            accountType: {
                field: 'accountTypeValue',
                displayName: '户口类型'
            },
            contractCompany: {
                field: 'contractCompanyName',
                displayName: '合同签约公司'
            },
            /*contractTime: {
                field: 'contractTimeValue',
                displayName: '合同年限'
            },*/
            formalDate: {
                field: 'formalDateValue',
                displayName: '转正日期'
            },
            contractEndDate: {
                field: 'contractEndDateValue',
                displayName: '合同到期时间'
            },
            isGraduate: {
                field: 'isGraduateValue',
                displayName: '是否毕业生入职'
            },
            hometown: {
                field: 'hometown',
                displayName: '籍贯'
            },
            accountLocation: {
                field: 'accountLocation',
                displayName: '户口所在地'
            },
            citizenship: {
                field: 'citizenship',
                displayName: '国籍'
            },
            isForeign: {
                field: 'isForeignValue',
                displayName: '证件类型'
            },
            cardNum: {
                field: 'cardNum',
                displayName: '银行卡号'
            },
            /*            excuteSalary: {
             field: 'excuteSalary',
             displayName: '执行工资'
             },*/
            lawName: {
                field: 'lawName',
                displayName: '法律名'
            },
            name: {
                field: 'name',
                displayName: '姓名',
                cellTpl: 'src/module/hr/search/tableTpl/name.html'
            },
            sex: {
                field: 'sexValue',
                displayName: '性别'
            },
            birthday: {
                field: 'birthdayValue',
                displayName: '出生日期'
            },
            ethnic: {
                field: 'ethnic',
                displayName: '民族'
            },
            religion: {
                field: 'religion',
                displayName: '宗教信仰'
            },
            degree: {
                field: 'degreeValue',
                displayName: '学历'
            },
            politicalStatus: {
                field: 'politicalStatus',
                displayName: '政治面貌'
            },
            maritalStatus: {
                field: 'maritalStatusValue',
                displayName: '婚姻状况'
            },
            birthplace: {
                field: 'birthplace',
                displayName: '出生地'
            },
            beginWorkTime: {
                field: 'beginWorkTimeValue',
                displayName: '全职参加工作时间'
            },
            idCardNumber: {
                field: 'idCardNumber',
                displayName: '证件号'
            },
            email: {
                field: 'email',
                displayName: '邮箱'
            },
            structureName: {
                field: 'structureName',
                displayName: '组织架构'
            },
            mobile: {
                field: 'mobile',
                displayName: '手机号'
            },
            enterTime: {
                field: 'enterTimeValue',
                displayName: '入职日期'
            },
            lastModTime: {
                field: 'lastModTimeValue',
                displayName: '最新更新时间'
            },
            promiseEnterDate: {
                field: 'promiseEnterDateValue',
                displayName: '入职日期'
            },
            /*probationPeriod: {
                field: 'probationaryValue',
                displayName: '试用期'
            },*/
            status: {
                field: 'statusName',
                displayName: '员工状态'
            },
            positionName: {
                field: 'positionName',
                displayName: '职位名称'
            },
            displayNumber: {
                field: 'displayNumber',
                displayName: '员工编号'
            },
            leaderName: {
                field: 'leaderName',
                displayName: '直属领导'
            },
            level: {
                field: 'level',
                displayName: '级别'
            },
            type: {
                field: 'typeValue',
                displayName: '员工类型'
            },
            leaveDate: {
                field: 'leaveDateValue',
                displayName: '离职日期'
            },
            baseSalary: {
                field: 'baseSalary',
                displayName: '基本工资',
                filter: 'salary'
            },
            salaryType: {
                field: 'salaryTypeValue',
                displayName: '工资类型'
            },
            probationarySalary: {
                field: 'probationarySalary',
                displayName: '试用期基本工资',
                filter: 'salary'
            },

            serialNum: {
                field: 'serialNum',
                displayName: '序号'
            },
            assetCode: {
                field: 'assetCode',
                displayName: '固定资产编码'
            },

            pcType: {
                field: 'pcTypeValue',
                displayName: '电脑'
            },
            socialSecurityCity: {
                field: 'socialSecurityCityName',
                displayName: '社保缴纳城市'
            },
            office: {
                field: 'officeName',
                displayName: '工作地点'
            },
            sit: {
                field: 'sit',
                displayName: '工位'
            },
            icCardNumber: {
                field: 'icCardNumber',
                displayName: '工卡卡号'
            },
            socialSecurityBase: {
                field: 'socialSecurityBase',
                displayName: '社保基数'
            },
            houseFundBase: {
                field: 'houseFundBase',
                displayName: '公积金基数'
            },
            salaryLastDay: {
                field: 'salaryLastDay',
                displayName: '最近薪酬变更日期'
            },
            salaryLastSalary: {
                field: 'salaryLastSalary',
                displayName: '最近薪酬变更金额'
            },

            welfareSalary: {
                field: 'welfareSalary',
                displayName: '职位福利费'
            },

            workEmail: {
                field: 'workEmail',
                displayName: '邮箱地址'
            },

            opt: {
                field: 'opt',
                displayName: '操作',
                cellTpl: 'src/module/hr/search/tableTpl/opt.html'
            }
        }
    }
});