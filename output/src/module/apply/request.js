define(["require","../../common/app"],function(e){var t=e("../../common/app");t.factory("applyRequest",["ajaxService","$q","localStorage",function(e,t,n){return{getApplyList:function(t){var t=t||{};return e.send("/GET/approve/list.json",{data:t})},getApplyDetail:function(t){var t=t||{};return e.send("/GET/approve/detail.json",{data:t})},getCount:function(t){var t=t||{};return e.send("/GET/approve/amount.json",{data:t})},handleApply:function(t){var t=t||{};return e.send("/MOD/approve/batch.json",{data:t})},addApply:function(t){var t=t||{};return t.content&&(t.content=JSON.stringify(t.content)),e.send("/ADD/approve/approve.json",{data:t})},cancelApply:function(t){var t=t||{};return e.send("/MOD/approve/cancel.json",{data:t})}}}])});