/**
 * @file 查询组织架构
 * yanlingling@baijiahulian.com
 */
var mockCreatFunction = function (param) {
    return {"data":[{"calendar":1,"disable":0,"id":1,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"百家互联","taxLocal":0},{"calendar":1,"disable":0,"id":2,"isGroupNode":0,"isKeyNode":1,"isPunchCard":1,"isWelfareDefault":0,"levelTemplate":1,"lowestSalary":2000,"mealSubsidy":0,"name":"武汉研发中心","parentId":1,"punchDevice":"武研","socialSecurityCity":4,"taxLocal":1},{"calendar":1,"disable":0,"id":3,"isGroupNode":0,"isKeyNode":1,"isPunchCard":1,"isWelfareDefault":0,"levelTemplate":1,"mealSubsidy":10,"name":"石家庄","parentId":1,"taxLocal":0},{"disable":0,"id":4,"isKeyNode":0,"mealSubsidy":0,"name":"马鞍山","parentId":1,"taxLocal":0},{"disable":0,"id":5,"isKeyNode":0,"mealSubsidy":0,"name":"长春","parentId":1,"taxLocal":0},{"disable":0,"id":6,"isKeyNode":0,"mealSubsidy":0,"name":"新疆","parentId":1,"taxLocal":0},{"disable":0,"id":7,"isKeyNode":0,"mealSubsidy":0,"name":"长沙","parentId":1,"taxLocal":0},{"disable":0,"id":8,"isKeyNode":0,"mealSubsidy":0,"name":"天津","parentId":1,"taxLocal":0},{"disable":0,"id":10,"isKeyNode":0,"mealSubsidy":0,"name":"沈阳","parentId":1,"taxLocal":0},{"disable":0,"id":11,"isKeyNode":0,"mealSubsidy":0,"name":"四川","parentId":1,"taxLocal":0},{"calendar":1,"disable":0,"id":12,"isGroupNode":0,"isKeyNode":1,"isPunchCard":0,"isWelfareDefault":1,"levelTemplate":7,"mailSuffix":"@chongqing.com","mealSubsidy":0,"name":"重庆","parentId":1,"socialSecurityCity":3,"taxLocal":1},{"disable":0,"id":13,"isKeyNode":0,"mealSubsidy":0,"name":"贵州","parentId":1,"taxLocal":0},{"calendar":1,"disable":0,"id":14,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"分公司-合肥","parentId":2,"taxLocal":0},{"disable":0,"id":15,"name":"成都市场部","parentId":4},{"disable":0,"id":16,"isKeyNode":0,"mealSubsidy":0,"name":"产品研发部","parentId":2,"taxLocal":0},{"disable":0,"id":18,"isKeyNode":0,"mealSubsidy":0,"name":"B端事业部","parentId":6,"taxLocal":0},{"disable":0,"id":20,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"产品运维部","parentId":2,"taxLocal":0},{"disable":0,"id":21,"isKeyNode":0,"mealSubsidy":0,"name":"开发部","parentId":8,"taxLocal":0},{"disable":0,"id":22,"isKeyNode":0,"mealSubsidy":0,"name":"二级部门","parentId":3,"taxLocal":0},{"disable":0,"id":32,"isKeyNode":0,"mealSubsidy":0,"name":"资源部","parentId":11,"taxLocal":0},{"disable":0,"id":34,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"运营部门","parentId":14,"taxLocal":0},{"disable":0,"id":36,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"lowestSalary":2000,"mealSubsidy":0,"name":"我是二级部门BB","parentId":16,"taxLocal":0},{"disable":0,"id":37,"name":"产品研发部-二级部门03","parentId":16},{"disable":0,"id":38,"name":"产品研发部-二级部门01","parentId":16},{"disable":0,"id":39,"name":"产品研发部-二级部门02","parentId":16},{"disable":0,"id":40,"name":"天津分部的新增二级部门01；天津分部的新","parentId":21},{"disable":0,"id":41,"name":"产品运维部二级部门01","parentId":20},{"disable":0,"id":42,"name":"产品运维部二级部门02","parentId":20},{"disable":0,"id":43,"name":"产品运维部二级部门03","parentId":20},{"disable":0,"id":52,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"三级部门","parentId":22,"taxLocal":0},{"disable":0,"id":66,"isKeyNode":0,"mealSubsidy":0,"name":"产品部","parentId":93,"taxLocal":0},{"disable":0,"id":67,"name":"test下级","parentId":66},{"disable":0,"id":73,"name":"test999","parentId":67},{"disable":0,"id":74,"isKeyNode":0,"mealSubsidy":0,"name":"广州","parentId":1,"taxLocal":0},{"disable":0,"id":75,"isKeyNode":0,"mealSubsidy":0,"name":"测试部","parentId":8,"taxLocal":0},{"disable":0,"id":76,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"武汉分公司","parentId":3,"taxLocal":0},{"disable":0,"id":77,"name":"武汉分红四1","parentId":4},{"disable":0,"id":79,"name":"255223","parentId":4},{"calendar":1,"disable":0,"id":80,"isGroupNode":0,"isKeyNode":1,"isPunchCard":1,"isWelfareDefault":0,"levelTemplate":1,"mealSubsidy":30,"name":"分公司-青岛","parentId":1,"socialSecurityCity":8,"taxLocal":1},{"disable":0,"id":81,"isKeyNode":0,"mealSubsidy":0,"name":"大树公司一部","parentId":80,"taxLocal":0},{"disable":0,"id":82,"isKeyNode":0,"mealSubsidy":0,"name":"大树公司二部","parentId":80,"taxLocal":0},{"disable":0,"id":83,"isKeyNode":0,"mealSubsidy":0,"name":"大树公司三部","parentId":80,"taxLocal":0},{"disable":0,"id":84,"name":"一部-1","parentId":81},{"disable":0,"id":85,"name":"一部-1-1","parentId":84},{"disable":0,"id":86,"name":"一部-1-2","parentId":84},{"disable":0,"id":87,"name":"二部","parentId":82},{"disable":0,"id":88,"isKeyNode":0,"mealSubsidy":0,"name":"大树公司四部","parentId":80,"taxLocal":0},{"disable":0,"id":89,"name":"4-1","parentId":88},{"disable":0,"id":90,"name":"4-2","parentId":88},{"disable":0,"id":91,"name":"4-1-1","parentId":89},{"disable":0,"id":92,"name":"4-1-2","parentId":89},{"disable":0,"id":93,"isKeyNode":0,"mealSubsidy":0,"name":"东南大区","parentId":1,"taxLocal":0},{"calendar":1,"disable":0,"id":94,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"lowestSalary":0,"mealSubsidy":0,"name":"保定","parentId":1,"taxLocal":0},{"disable":0,"id":96,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"南昌","parentId":1,"taxLocal":0},{"disable":0,"id":97,"name":"hjm_1","parentId":94},{"disable":0,"id":98,"name":"hjm_1_1","parentId":97},{"disable":0,"id":100,"name":"东北大区","parentId":93},{"calendar":1,"disable":0,"id":102,"isGroupNode":0,"isKeyNode":1,"isPunchCard":1,"isWelfareDefault":1,"levelTemplate":1,"mealSubsidy":0,"name":"总公司","parentId":1,"punchDevice":"北京","socialSecurityCity":3,"taxLocal":1},{"disable":0,"id":103,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"产品研发部","parentId":102,"taxLocal":0},{"disable":0,"id":104,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"运营部","parentId":102,"taxLocal":0},{"disable":0,"id":105,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"lowestSalary":2000,"mealSubsidy":0,"name":"测试部","parentId":102,"taxLocal":0},{"disable":0,"id":106,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"市场部","parentId":102,"taxLocal":0},{"disable":0,"id":108,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"渠道部","parentId":102,"taxLocal":0},{"disable":0,"id":109,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"人力资源部","parentId":102,"taxLocal":0},{"calendar":1,"disable":0,"id":111,"isGroupNode":0,"isKeyNode":1,"isPunchCard":2,"isWelfareDefault":0,"levelTemplate":1,"mealSubsidy":30,"name":"分公司-云南","parentId":1,"socialSecurityCity":3,"taxLocal":1},{"disable":0,"id":112,"isKeyNode":0,"mealSubsidy":0,"name":"上海","parentId":1,"taxLocal":0},{"disable":0,"id":113,"isKeyNode":0,"mealSubsidy":0,"name":"山西","parentId":1,"taxLocal":0},{"calendar":1,"disable":0,"id":114,"isGroupNode":1,"isKeyNode":1,"isPunchCard":1,"isWelfareDefault":1,"levelTemplate":1,"lowestSalary":3000,"mealSubsidy":20,"name":"北京总部","numberPrefix":"ZZ","parentId":1,"shortName":"北京总","socialSecurityCity":3,"taxLocal":1},{"calendar":1,"disable":0,"id":115,"isGroupNode":0,"isKeyNode":1,"isPunchCard":0,"isWelfareDefault":1,"levelTemplate":1,"mailSuffix":"@fenggongsi.com","mealSubsidy":0,"name":"分公司","parentId":1,"taxLocal":0},{"disable":0,"id":116,"isKeyNode":0,"mealSubsidy":0,"name":"线上运营","parentId":114,"taxLocal":0},{"disable":0,"id":117,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"技术平台","parentId":114,"taxLocal":0},{"disable":0,"id":118,"isKeyNode":0,"mealSubsidy":0,"name":"商户产品","parentId":114,"taxLocal":0},{"disable":0,"id":119,"isKeyNode":0,"mealSubsidy":0,"name":"线下运营","parentId":114,"taxLocal":0},{"disable":0,"id":120,"isKeyNode":0,"mealSubsidy":0,"name":"用户产品","parentId":114,"taxLocal":0},{"disable":0,"id":121,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"财务行政","parentId":114,"taxLocal":0},{"disable":0,"id":122,"name":"北京区","parentId":115},{"disable":0,"id":123,"isKeyNode":0,"mealSubsidy":0,"name":"大数据部","parentId":116,"taxLocal":0},{"disable":0,"id":124,"isKeyNode":0,"mealSubsidy":0,"name":"运营管理部","parentId":116,"taxLocal":0},{"disable":0,"id":125,"isKeyNode":0,"mealSubsidy":0,"name":"市场部","parentId":116,"taxLocal":0},{"disable":0,"id":126,"isKeyNode":0,"mealSubsidy":0,"name":"客户服务部","parentId":116,"taxLocal":0},{"disable":0,"id":127,"isKeyNode":0,"mealSubsidy":0,"name":"人力资源部","parentId":117,"taxLocal":0},{"disable":0,"id":128,"isKeyNode":0,"mealSubsidy":0,"name":"产品研发部","parentId":117,"taxLocal":0},{"disable":0,"id":129,"isKeyNode":0,"mealSubsidy":0,"name":"产品测试部","parentId":117,"taxLocal":0},{"disable":0,"id":130,"isKeyNode":0,"mealSubsidy":0,"name":"产品运维部","parentId":117,"taxLocal":0},{"disable":0,"id":131,"isKeyNode":0,"mealSubsidy":0,"name":"B端事业部","parentId":118,"taxLocal":0},{"disable":0,"id":132,"isKeyNode":0,"mealSubsidy":0,"name":"渠道管理部","parentId":119,"taxLocal":0},{"disable":0,"id":133,"isKeyNode":0,"mealSubsidy":0,"name":"分公司运营中心","parentId":119,"taxLocal":0},{"disable":0,"id":134,"isKeyNode":0,"mealSubsidy":0,"name":"C端事业部","parentId":120,"taxLocal":0},{"disable":0,"id":135,"isKeyNode":0,"mealSubsidy":0,"name":"内容管理部","parentId":120,"taxLocal":0},{"disable":0,"id":136,"isKeyNode":0,"mealSubsidy":0,"name":"财务管理部","parentId":121,"taxLocal":0},{"disable":0,"id":142,"name":"上海区","parentId":115},{"disable":0,"id":143,"name":"东南区","parentId":115},{"disable":0,"id":144,"name":"北京","parentId":122},{"disable":0,"id":145,"isKeyNode":0,"mealSubsidy":0,"name":"上海","parentId":142,"taxLocal":0},{"disable":0,"id":146,"name":"西南区","parentId":115},{"disable":0,"id":147,"name":"华中区","parentId":115},{"disable":0,"id":148,"name":"东北区","parentId":115},{"disable":0,"id":149,"name":"华北区","parentId":115},{"disable":0,"id":150,"name":"西北区","parentId":115},{"disable":0,"id":151,"name":"华南区","parentId":115},{"disable":0,"id":152,"name":"华东区","parentId":115},{"disable":0,"id":153,"name":"安徽","parentId":143},{"disable":0,"id":154,"name":"江西","parentId":143},{"disable":0,"id":155,"name":"福建","parentId":143},{"disable":0,"id":156,"name":"四川","parentId":146},{"disable":0,"id":157,"name":"重庆","parentId":146},{"disable":0,"id":158,"name":"贵州","parentId":146},{"disable":0,"id":159,"name":"云南","parentId":146},{"disable":0,"id":160,"name":"西藏","parentId":146},{"disable":0,"id":161,"name":"湖北","parentId":147},{"disable":0,"id":162,"name":"湖南","parentId":147},{"disable":0,"id":163,"name":"河南","parentId":147},{"disable":0,"id":164,"name":"黑龙江","parentId":148},{"disable":0,"id":165,"name":"河北","parentId":149},{"disable":0,"id":166,"name":"陕西","parentId":150},{"disable":0,"id":167,"name":"广东","parentId":151},{"disable":0,"id":168,"name":"江苏","parentId":152},{"disable":0,"id":169,"isKeyNode":0,"mealSubsidy":0,"name":"开发部","parentId":5,"taxLocal":0},{"disable":0,"id":170,"isKeyNode":0,"mealSubsidy":0,"name":"市场部","parentId":7,"taxLocal":0},{"disable":0,"id":171,"isKeyNode":0,"mealSubsidy":0,"name":"市场部","parentId":10,"taxLocal":0},{"disable":0,"id":172,"isKeyNode":0,"mealSubsidy":0,"name":"市场部","parentId":12,"taxLocal":0},{"disable":0,"id":173,"isKeyNode":0,"mealSubsidy":0,"name":"开发部","parentId":13,"taxLocal":0},{"disable":0,"id":174,"isKeyNode":0,"mealSubsidy":0,"name":"产品部","parentId":74,"taxLocal":0},{"disable":0,"id":175,"isKeyNode":0,"mealSubsidy":0,"name":"开发部","parentId":111,"taxLocal":0},{"disable":0,"id":176,"isKeyNode":0,"mealSubsidy":0,"name":"产品部","parentId":112,"taxLocal":0},{"disable":0,"id":177,"isKeyNode":0,"mealSubsidy":0,"name":"产品部","parentId":113,"taxLocal":0},{"disable":0,"id":178,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"产品运维部","parentId":102,"taxLocal":0},{"disable":0,"id":179,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"大数据部","parentId":102,"taxLocal":0},{"disable":0,"id":180,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"内容部","parentId":102,"taxLocal":0},{"disable":0,"id":181,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"总裁办","parentId":102,"taxLocal":0},{"disable":0,"id":182,"isKeyNode":0,"mealSubsidy":0,"name":"B端事业部","parentId":102,"taxLocal":0},{"disable":0,"id":183,"isKeyNode":0,"mealSubsidy":0,"name":"C端事业部","parentId":102,"taxLocal":0},{"disable":0,"id":184,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"分公司运营中心","parentId":102,"taxLocal":0},{"disable":0,"id":185,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"客服部","parentId":102,"taxLocal":0},{"disable":0,"id":186,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"test2016","parentId":2,"shortName":"test2016","taxLocal":0},{"calendar":1,"disable":0,"id":187,"isGroupNode":0,"isKeyNode":1,"isPunchCard":2,"isWelfareDefault":0,"levelTemplate":2,"lowestSalary":100,"mealSubsidy":15,"name":"20160629","numberPrefix":"AA","parentId":1,"shortName":"20160629","socialSecurityCity":4,"taxLocal":1},{"calendar":1,"disable":0,"id":188,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"百家互联","parentId":120,"shortName":"百家","taxLocal":0},{"calendar":1,"disable":0,"id":189,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"20160907","numberPrefix":"BB","parentId":1,"taxLocal":0},{"disable":0,"id":190,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"20161015","numberPrefix":"ZZ","parentId":1,"taxLocal":0},{"disable":0,"id":191,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"lowestSalary":1234567.11,"mailSuffix":"@baijiahulian.com","mealSubsidy":0,"name":"20161020","numberPrefix":"A","parentId":1,"shortName":"百家","taxLocal":0},{"disable":0,"id":192,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"武汉","parentId":187,"shortName":"武汉","taxLocal":0},{"disable":0,"id":193,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"额外问我饿","parentId":118,"taxLocal":0},{"disable":0,"id":194,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"预计","parentId":189,"taxLocal":0},{"disable":0,"id":195,"isGroupNode":0,"isKeyNode":0,"isPunchCard":0,"isWelfareDefault":0,"mealSubsidy":0,"name":"8889","parentId":187,"taxLocal":0}],"status":200}
    /*return  {"data": [
        {"id": 1, "isKeyNode": 0, "mealSubsidy": 0, "name": "百家互联", "taxLocal": 0},
        {"id": 2, "isKeyNode": 0, "mealSubsidy": 0, "name": "北京总部；北京总部；北京总部；北京总部；", "parentId": 1, "taxLocal": 0,disable:1},
        {"id": 3, "isKeyNode": 1, "mealSubsidy": 100, "name": "武汉分公司1", "parentId": 1, "socialSecurityCity": 4, "taxLocal": 1,disable:1},
        {"id": 4, "isKeyNode": 1, "mealSubsidy": 100, "name": "武汉研发中心", "parentId": 1, "socialSecurityCity": 4, "taxLocal": 1},
        {"id": 5, "name": "我也不知道这个是什么公司", "parentId": 1},
        {"id": 6, "isKeyNode": 0, "mealSubsidy": 0, "name": "新疆分公司", "parentId": 1, "taxLocal": 0},
        {"id": 7, "isKeyNode": 1, "mealSubsidy": 0, "name": "北京分部", "parentId": 1, "socialSecurityCity": 4, "taxLocal": 1},
        {"id": 8, "name": "天津分部；天津分部；天津分部；天津分部；", "parentId": 1},
        {"id": 9, "isKeyNode": 0, "mealSubsidy": 0, "name": "Z公司00", "parentId": 16, "taxLocal": 0},
        {"id": 10, "name": "Z分公司，是一个很好的公司，欢迎来到刚睡", "parentId": 1},
        {"id": 11, "name": "Z11", "parentId": 1},
        {"id": 12, "name": "Z2", "parentId": 1},
        {"id": 13, "name": "武汉分公司12", "parentId": 1},
        {"id": 14, "isKeyNode": 1, "name": "成都研发部门", "parentId": 1, "socialSecurityCity": 1, "taxLocal": 1},
        {"id": 15, "name": "成都市场部", "parentId": 4},
        {"id": 16, "isKeyNode": 1, "mealSubsidy": 12, "name": "产品研发部", "parentId": 2, "taxLocal": 0},
        {"id": 17, "isKeyNode": 1, "mealSubsidy": 100, "name": "总部管理部", "parentId": 6, "socialSecurityCity": 3, "taxLocal": 1},
        {"id": 18, "isKeyNode": 1, "mealSubsidy": 12, "name": "B端事业部", "parentId": 6, "socialSecurityCity": 6, "taxLocal": 1},
        {"id": 19, "name": "产品运营部", "parentId": 2},
        {"id": 20, "isKeyNode": 1, "mealSubsidy": 123456, "name": "产品运维部；产品运维部；产品运维部；", "parentId": 2, "taxLocal": 1},
        {"id": 21, "name": "天津分部的新增部门01；天津分部的新增部", "parentId": 8},
        {"id": 22, "isKeyNode": 0, "mealSubsidy": 0, "name": "武汉分部的二级部门", "parentId": 3, "taxLocal": 0},
        {"id": 23, "name": "小1部门1", "parentId": 9},
        {"id": 24, "name": "小1部门2", "parentId": 9},
        {"id": 25, "name": "小1部门们", "parentId": 9},
        {"id": 26, "name": "小1部门们4", "parentId": 9},
        {"id": 27, "name": "小1部门5", "parentId": 9},
        {"id": 28, "name": "444", "parentId": 9},
        {"id": 29, "name": "3", "parentId": 9},
        {"id": 30, "name": "2", "parentId": 9},
        {"id": 31, "name": "1", "parentId": 9},
        {"id": 32, "name": "我去啊", "parentId": 11},
        {"id": 33, "isKeyNode": 1, "name": "嘻哈猴部门啊", "parentId": 2, "socialSecurityCity": 5, "taxLocal": 1},
        {"id": 34, "name": "成都运营系统研发部门", "parentId": 14},
        {"id": 35, "isKeyNode": 0, "mealSubsidy": 0, "name": "0运营系统", "parentId": 16, "taxLocal": 0},
        {"id": 36, "name": "我是二级部门BB", "parentId": 16},
        {"id": 37, "name": "产品研发部-二级部门03", "parentId": 16},
        {"id": 38, "name": "产品研发部-二级部门01", "parentId": 16},
        {"id": 39, "name": "产品研发部-二级部门02", "parentId": 16},
        {"id": 40, "name": "天津分部的新增二级部门01；天津分部的新", "parentId": 21},
        {"id": 41, "name": "产品运维部二级部门01", "parentId": 20},
        {"id": 42, "name": "产品运维部二级部门02", "parentId": 20},
        {"id": 43, "name": "产品运维部二级部门03", "parentId": 20},
        {"id": 44, "name": "产品运维部二级部门04", "parentId": 20},
        {"id": 45, "name": "产品运维部二级部门05", "parentId": 20},
        {"id": 46, "name": "产品运维部二级部门06", "parentId": 20},
        {"id": 47, "name": "产品运维部二级部门07", "parentId": 20},
        {"id": 48, "name": "产品运维部二级部门08", "parentId": 20},
        {"id": 49, "name": "产品运维部二级部门09", "parentId": 20},
        {"id": 50, "name": "产品运维部二级部门10", "parentId": 20},
        {"id": 51, "name": "产品运维部二级部门11", "parentId": 20},
        {"id": 52, "name": "三级部门", "parentId": 22},
        {"id": 53, "name": "01部门", "parentId": 28},
        {"id": 54, "name": "02部门", "parentId": 28},
        {"id": 55, "name": "03部门", "parentId": 29},
        {"id": 56, "name": "03部门3", "parentId": 29},
        {"id": 57, "name": "04部门", "parentId": 30},
        {"id": 58, "name": "05部门", "parentId": 30},
        {"id": 59, "name": "嘻哈猴1", "parentId": 33},
        {"id": 60, "name": "嘻哈猴2", "parentId": 33},
        {"id": 66, "name": "test", "parentId": 93},
        {"id": 67, "name": "test下级", "parentId": 66},
        {"id": 68, "name": "test下下级改名", "parentId": 2},
        {"id": 69, "isKeyNode": 1, "mealSubsidy": 0, "name": "产品研发部", "parentId": 2, "taxLocal": 0},
        {"id": 70, "isKeyNode": 0, "name": "产品研发部", "parentId": 2, "socialSecurityCity": 2, "taxLocal": 1},
        {"id": 71, "isKeyNode": 1, "mealSubsidy": 0, "name": "产品运营1部", "parentId": 2, "taxLocal": 0},
        {"id": 72, "isKeyNode": 1, "name": "test001", "parentId": 2, "socialSecurityCity": 5, "taxLocal": 1},
        {"id": 73, "name": "test999", "parentId": 67},
        {"id": 74, "name": "test999", "parentId": 1},
        {"id": 75, "name": "xinjiang22233", "parentId": 8},
        {"id": 76, "name": "武汉分公司", "parentId": 3},
        {"id": 77, "name": "武汉分红四1", "parentId": 4},
        {"id": 78, "name": "我问问", "parentId": 6},
        {"id": 79, "name": "255223", "parentId": 4},
        {"id": 80, "name": "大树公司跟谁学", "parentId": 1},
        {"id": 81, "name": "大树公司一部", "parentId": 80},
        {"id": 82, "name": "大树公司二部", "parentId": 80},
        {"id": 83, "name": "大树公司三部", "parentId": 80},
        {"id": 84, "name": "一部-1", "parentId": 81},
        {"id": 85, "name": "一部-1-1", "parentId": 84},
        {"id": 86, "name": "一部-1-2", "parentId": 84},
        {"id": 87, "name": "二部", "parentId": 82},
        {"id": 88, "name": "大树4部门", "parentId": 80},
        {"id": 89, "name": "4-1", "parentId": 88},
        {"id": 90, "name": "4-2", "parentId": 88},
        {"id": 91, "name": "4-1-1", "parentId": 89},
        {"id": 92, "name": "4-1-2", "parentId": 89},
        {"id": 93, "name": "东南大区", "parentId": 1},
        {"id": 94, "name": "hjm", "parentId": 1},
        {"id": 95, "name": "hjm", "parentId": 1},
        {"id": 96, "name": "hjm", "parentId": 1},
        {"id": 97, "name": "hjm_1", "parentId": 94},
        {"id": 98, "name": "hjm_1_1", "parentId": 97},
        {"id": 99, "name": "hjm_1", "parentId": 96},
        {"id": 100, "name": "东北大区", "parentId": 93},
        {"id": 101, "name": "test002", "parentId": 72},
        {"id": 102, "isKeyNode": 1, "mealSubsidy": 0, "name": "孵化器", "parentId": 1, "socialSecurityCity": 3, "taxLocal": 1},
        {"id": 103, "name": "研发部", "parentId": 102},
        {"id": 104, "name": "UE", "parentId": 102},
        {"id": 105, "isKeyNode": 0, "mealSubsidy": 0, "name": "测试部", "parentId": 102, "taxLocal": 0},
        {"id": 106, "name": "市场部", "parentId": 102},
        {"id": 107, "name": "产品设计部", "parentId": 102},
        {"id": 108, "name": "运维部", "parentId": 102},
        {"id": 109, "isKeyNode": 0, "name": "人力资源部", "parentId": 102, "taxLocal": 0},
        {"id": 110, "name": "财务部", "parentId": 102},
        {"id": 111, "isKeyNode": 1, "mealSubsidy": 100, "name": "云南分公司", "parentId": 1, "socialSecurityCity": 5, "taxLocal": 1},
        {"id": 112, "name": "朝来校区", "parentId": 1},
        {"id": 113, "name": "什么公司", "parentId": 1},
        {"id": 114, "name": "北京总部", "parentId": 1},
        {"id": 115, "name": "分公司", "parentId": 1},
        {"id": 116, "name": "线上运营", "parentId": 114},
        {"id": 117, "name": "技术平台", "parentId": 114},
        {"id": 118, "name": "商户产品", "parentId": 114},
        {"id": 119, "name": "线下运营", "parentId": 114},
        {"id": 120, "name": "用户产品", "parentId": 114},
        {"id": 121, "name": "财务行政", "parentId": 114},
        {"id": 122, "name": "北京区", "parentId": 115},
        {"id": 123, "name": "大数据部", "parentId": 116},
        {"id": 124, "name": "运营管理部", "parentId": 116},
        {"id": 125, "name": "市场部", "parentId": 116},
        {"id": 126, "name": "客户服务部", "parentId": 116},
        {"id": 127, "name": "人力资源部", "parentId": 117},
        {"id": 128, "name": "产品研发部", "parentId": 117},
        {"id": 129, "name": "产品测试部", "parentId": 117},
        {"id": 130, "name": "产品运维部", "parentId": 117},
        {"id": 131, "name": "B端事业部", "parentId": 118},
        {"id": 132, "name": "渠道管理部", "parentId": 119},
        {"id": 133, "name": "分公司运营中心", "parentId": 119},
        {"id": 134, "name": "C端事业部", "parentId": 120},
        {"id": 135, "name": "内容管理部", "parentId": 120},
        {"id": 136, "name": "财务管理部", "parentId": 121},
        {"id": 137, "name": "总裁办公室", "parentId": 121},
        {"id": 138, "name": "行政管理", "parentId": 137},
        {"id": 139, "name": "资产管理", "parentId": 137},
        {"id": 140, "name": "法务管理", "parentId": 137},
        {"id": 141, "name": "公共关系", "parentId": 137},
        {"id": 142, "name": "上海区", "parentId": 115},
        {"id": 143, "name": "东南区", "parentId": 115},
        {"id": 144, "name": "北京", "parentId": 122},
        {"id": 145, "name": "上海", "parentId": 142},
        {"id": 146, "name": "西南区", "parentId": 115},
        {"id": 147, "name": "华中区", "parentId": 115},
        {"id": 148, "name": "东北区", "parentId": 115},
        {"id": 149, "name": "华北区", "parentId": 115},
        {"id": 150, "name": "西北区", "parentId": 115},
        {"id": 151, "name": "华南区", "parentId": 115},
        {"id": 152, "name": "华东区", "parentId": 115},
        {"id": 153, "name": "安徽", "parentId": 143},
        {"id": 154, "name": "江西", "parentId": 143},
        {"id": 155, "name": "福建", "parentId": 143},
        {"id": 156, "name": "四川", "parentId": 146},
        {"id": 157, "name": "重庆", "parentId": 146},
        {"id": 158, "name": "贵州", "parentId": 146},
        {"id": 159, "name": "云南", "parentId": 146},
        {"id": 160, "name": "西藏", "parentId": 146},
        {"id": 161, "name": "湖北", "parentId": 147},
        {"id": 162, "name": "湖南", "parentId": 147},
        {"id": 163, "name": "河南", "parentId": 147},
        {"id": 164, "name": "黑龙江", "parentId": 148},
        {"id": 165, "name": "河北", "parentId": 149},
        {"id": 166, "name": "陕西", "parentId": 150},
        {"id": 167, "name": "广东", "parentId": 151},
        {"id": 168, "name": "江苏", "parentId": 152}
    ], "status": 200};*/
}