define(["require","../../app","../../config"],function(e){function r(e,t,n,r,i){function o(){u()}function u(){/apply\.detail\.\w*-?salary/g.test(s)?e.subTitle="薪酬岗位调整":/apply\.detail\.\w*-?structure/g.test(s)?e.subTitle="人事调动":/apply\.detail\.\w*-?multiple/g.test(s)?e.subTitle="综合审批":/apply\.detail\.\w*-?agentStructure/g.test(s)&&(e.subTitle="人事调动")}var s=t.current.name;e.subTitle="",o()}var t=e("../../app"),n=e("../../config");t.controller("applyDetailInfosCtrl",r),r.$inject=["$scope","$state","applyRequest","applyUtil","$filter"]});