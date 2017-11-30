webpackJsonp([6],{106:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(166),l=a.n(s);t.default={data:function(){return{}},components:{supplierMsg:l.a}}},129:function(e,t){},148:function(e,t){},166:function(e,t,a){a(148);var s=a(7)(a(95),a(198),"data-v-ae0607bc",null);s.options.__file="E:\\devCode\\hotel-man\\src\\views\\componets\\supplier\\supplierMsgStep1.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] supplierMsgStep1.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},177:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-row"},[a("Row",{staticClass:"layout-row"},[a("supplierMsg")],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},198:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"supplierWrap"},[a("div",{staticClass:"supplierStep"},[a("Steps",{attrs:{current:e.current}},[a("Step",{attrs:{title:"步骤1",content:"基本信息"}}),e._v(" "),a("Step",{attrs:{title:"步骤2",content:"结算及佣金配置"}}),e._v(" "),a("Step",{attrs:{title:"完成"}})],1)],1),e._v(" "),0==e.current?a("div",{staticClass:"stepOne"},[a("div",{staticClass:"content"},[a("div",{staticClass:"main"},[a("div",{staticClass:"sameStyle name"},[e._m(0),e._v(" "),a("div",{staticClass:"right"},[a("Input",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px"},attrs:{placeholder:"请输入..."},model:{value:e.supplierName,callback:function(t){e.supplierName=t},expression:"supplierName"}})],1)]),e._v(" "),a("div",{staticClass:"sameStyle name"},[e._m(1),e._v(" "),a("div",{staticClass:"right"},[a("Select",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px","margin-right":"20px"},attrs:{placeholder:"请选择"},model:{value:e.selectAccessType,callback:function(t){e.selectAccessType=t},expression:"selectAccessType"}},e._l(e.AccessType,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])})),e._v(" "),e._m(2),e._v(" "),a("Select",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px","margin-right":"20px"},attrs:{disabled:1!=e.selectAccessType,placeholder:"请选择"},model:{value:e.selectPlatformName,callback:function(t){e.selectPlatformName=t},expression:"selectPlatformName"}},e._l(e.platformName,function(e){return a("Option",{key:e.value,attrs:{value:e.value}})})),e._v(" "),a("span",[e._v("平台供应商识别码")]),e._v(" "),a("Input",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px"},attrs:{disabled:1!=e.selectAccessType,placeholder:"请输入..."},model:{value:e.platformCode,callback:function(t){e.platformCode=t},expression:"platformCode"}})],1)]),e._v(" "),a("div",{staticClass:"sameStyle name"},[e._m(3),e._v(" "),a("div",{staticClass:"right"},[a("Select",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px","margin-right":"20px"},model:{value:e.selectQuotedCurrency,callback:function(t){e.selectQuotedCurrency=t},expression:"selectQuotedCurrency"}},e._l(e.quotedCurrency,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)]),e._v(" "),a("div",{staticClass:"sameStyle name"},[e._m(4),e._v(" "),a("div",{staticClass:"right"},[a("Select",{class:{errTipsBorder:e.errTips},staticStyle:{width:"260px","margin-right":"20px"},model:{value:e.selectSettlementCurrency,callback:function(t){e.selectSettlementCurrency=t},expression:"selectSettlementCurrency"}},e._l(e.settlementCurrency,function(t){return a("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.label))])}))],1)]),e._v(" "),e.timeErr?a("Alert",{staticStyle:{width:"200px",position:"absolute",right:"400px",top:"200px"},attrs:{type:"error","show-icon":""}},[e._v("请选择服务时间")]):e._e(),e._v(" "),e._l(e.dateLines,function(t,s){return a("div",[a("div",{staticClass:"sameStyle name serviceTime"},[e._m(5,!0),e._v(" "),a("div",{staticClass:"right",staticStyle:{"border-bottom":"1px solid #e9eaec"}},[a("span",[e._v("请选择")]),e._v(" "),e._l(e.showDays(t),function(s,l){return[a("input",{directives:[{name:"model",rawName:"v-model",value:s.select,expression:"showDay.select"}],attrs:{type:"checkbox",disabled:s.disable},domProps:{checked:Array.isArray(s.select)?e._i(s.select,null)>-1:s.select},on:{click:function(a){e.changeSelect(t,s)},__c:function(t){var a=s.select,l=t.target,i=!!l.checked;if(Array.isArray(a)){var n=e._i(a,null);l.checked?n<0&&(s.select=a.concat([null])):n>-1&&(s.select=a.slice(0,n).concat(a.slice(n+1)))}else s.select=i}}}),e._v(e._s(e.dayText[l])+"\n                            ")]}),e._v(" "),e.selectedDays.length<7&&0==s?a("div",{staticStyle:{display:"inline-block"},on:{click:e.addTime}},[a("Icon",{attrs:{type:"ios-plus",size:"20"}})],1):e._e(),e._v(" "),0!=s?a("div",{staticStyle:{display:"inline-block"},on:{click:function(t){e.removeDateLine(s)}}},[a("Icon",{attrs:{type:"ios-close",size:"20"}})],1):e._e()],2)]),e._v(" "),a("div",{staticClass:"sameStyle name",staticStyle:{"border-bottom":"1px solid #e9eaec"}},[a("div",{staticClass:"left"}),e._v(" "),a("div",{staticClass:"right"},[a("Checkbox",{model:{value:e.selectedValue1,callback:function(t){e.selectedValue1=t},expression:"selectedValue1"}}),e._v(" "),a("span",[e._v("每天的")]),e._v(" "),a("TimePicker",{staticStyle:{width:"112px"},attrs:{format:"HH:mm",steps:[1,60],placeholder:"选择时间"},model:{value:t.start,callback:function(e){t.start=e},expression:"dateLine.start"}}),e._v(" "),a("span",[e._v("到")]),e._v(" "),a("TimePicker",{staticStyle:{width:"112px"},attrs:{format:"HH:mm",steps:[1,60],placeholder:"选择时间"},model:{value:t.end,callback:function(e){t.end=e},expression:"dateLine.end"}}),e._v(" "),a("span",[e._v("处理")])],1)])])}),e._v(" "),a("div",{staticClass:"sameStyle name serviceTime"},[e._m(6),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v("请选择")]),e._v(" "),a("CheckboxGroup",{staticStyle:{width:"540px",display:"inline-block"},model:{value:e.invoiceData,callback:function(t){e.invoiceData=t},expression:"invoiceData"}},[a("Checkbox",{attrs:{label:"1"}},[e._v("代订房费")]),e._v(" "),a("Checkbox",{attrs:{label:"2"}},[e._v("代订住宿费")]),e._v(" "),a("Checkbox",{attrs:{label:"3"}},[e._v("旅游服务费")]),e._v(" "),a("Checkbox",{attrs:{label:"4"}},[e._v("会议服务费")]),e._v(" "),a("Checkbox",{attrs:{label:"5"}},[e._v("住宿费")]),e._v(" "),a("Checkbox",{attrs:{label:"6"}},[e._v("旅游费")]),e._v(" "),a("Checkbox",{attrs:{label:"7"}},[e._v("其他")])],1),e._v(" "),e.showInvioceInput?a("Input",{staticStyle:{width:"200px"},model:{value:e.invoiceValue,callback:function(t){e.invoiceValue=t},expression:"invoiceValue"}}):e._e()],1)]),e._v(" "),a("div",{staticClass:"sameStyle name serviceTime"},[e._m(7),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v("请选择")]),e._v(" "),a("Checkbox",{attrs:{indeterminate:e.indeterminate,value:e.channelAll},nativeOn:{click:function(t){t.preventDefault(),e.channelCheckAll(t)}}},[e._v("全选")]),e._v(" "),a("CheckboxGroup",{staticStyle:{display:"inline-block"},on:{"on-change":e.checkAllChannel},model:{value:e.channelData,callback:function(t){e.channelData=t},expression:"channelData"}},[a("Checkbox",{attrs:{label:"2"}},[e._v("网站前台")]),e._v(" "),a("Checkbox",{attrs:{label:"3"}},[e._v("酒店APP")]),e._v(" "),a("Checkbox",{attrs:{label:"4"}},[e._v("网站差旅")]),e._v(" "),a("Checkbox",{attrs:{label:"5"}},[e._v("薪福卡（大客户）")]),e._v(" "),a("Checkbox",{attrs:{label:"6"}},[e._v("齐采网（大客户）")]),e._v(" "),a("Checkbox",{attrs:{label:"7"}},[e._v("大连航空（大客户）")])],1)],1)]),e._v(" "),a("div",{staticClass:"sameStyle name serviceTime"},[e._m(8),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v("请选择")]),e._v(" "),a("RadioGroup",{model:{value:e.physicalRoom,callback:function(t){e.physicalRoom=t},expression:"physicalRoom"}},[a("Radio",{attrs:{label:"0"}},[e._v("是")]),e._v(" "),a("Radio",{attrs:{label:"1"}},[e._v("否")])],1)],1)]),e._v(" "),a("div",{staticClass:"sameStyle name serviceTime"},[e._m(9),e._v(" "),a("div",{staticClass:"right"},[a("span",[e._v("请选择")]),e._v(" "),a("RadioGroup",{model:{value:e.priceDays,callback:function(t){e.priceDays=t},expression:"priceDays"}},[a("Radio",{attrs:{label:"90"}},[e._v("90天")]),e._v(" "),a("Radio",{attrs:{label:"其它"}})],1),e._v(" "),e.showDaysInput?a("Input",{staticStyle:{width:"200px"},model:{value:e.priceDaysValue,callback:function(t){e.priceDaysValue=t},expression:"priceDaysValue"}}):e._e()],1)])],2)]),e._v(" "),a("div",{staticClass:"btn"},[a("Button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary"},on:{click:e.goToNext}},[e._v("下一步")]),e._v(" "),a("Button",{attrs:{type:"warning"}},[e._v("返回")])],1)]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("供应商名称")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("供应商接入方式")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("em",[e._v("*")]),e._v("平台名称")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("报价币种")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("结算币种")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left",staticStyle:{"border-bottom":"1px solid #e9eaec"}},[a("span",[a("em",[e._v("*")]),e._v("服务时间")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("可开具发票类型")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("上架渠道")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("是否含有物理房型")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left"},[a("span",[a("em",[e._v("*")]),e._v("报价天数")])])}]},e.exports.render._withStripped=!0},61:function(e,t,a){a(129);var s=a(7)(a(106),a(177),"data-v-298d2990",null);s.options.__file="E:\\devCode\\hotel-man\\src\\views\\pages\\Supplier\\supplierMsgStep1.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] supplierMsgStep1.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{current:0,supplierName:"",selectAccessType:"",AccessType:[{value:1,label:"平台"},{value:2,label:"API平台"},{value:3,label:"Ebooking"}],selectPlatformName:"",platformName:[{value:"泰坦云",label:"泰坦云"},{value:"畅联",label:"畅联"}],platformCode:"",selectQuotedCurrency:1,quotedCurrency:[{value:1,label:"CNY人民币"},{value:2,label:"USD美元"},{value:3,label:"EUR欧元"},{value:4,label:"JPY日元"},{value:5,label:"HKD港币"},{value:6,label:"KER韩元"},{value:7,label:"SGD新元"},{value:8,label:"THB泰铢"},{value:9,label:"CAD加元"}],selectSettlementCurrency:1,settlementCurrency:[{value:1,label:"CNY人民币"},{value:2,label:"USD美元"},{value:3,label:"EUR欧元"},{value:4,label:"JPY日元"},{value:5,label:"HKD港币"},{value:6,label:"KER韩元"},{value:7,label:"SGD新元"},{value:8,label:"THB泰铢"},{value:9,label:"CAD加元"}],allDays:[1,2,3,4,5,6,7],dateLines:[{selectedDays:[1,2,3,4,5,6,7],start:"00:00",end:"23:00"}],dayText:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],selectedValue1:!0,timeValue1:"00:00",timeValue2:"23:59",invoiceData:[],invoiceValue:"",channelData:["2","3","4","5","6","7"],indeterminate:!0,channelAll:!1,physicalRoom:0,priceDays:90,priceDaysValue:"",errTips:!0,timeErr:!0}},watch:{dateLines:{handler:function(){for(var e=0;e<this.dateLines.length;e++){var t=this.dateLines[e];"string"!=typeof t.start&&(t.start=this.dateToTimeStr(t.start)),"string"!=typeof t.end&&(t.end=this.dateToTimeStr(t.end))}},deep:!0}},computed:{selectedDays:function(){for(var e=[],t=0;t<this.dateLines.length;t++)for(var a=this.dateLines[t],s=0;s<a.selectedDays.length;s++)e.push(a.selectedDays[s]);return e},isAllSelect:function(){return 7===this.selectedDays.length},showInvioceInput:function(){return-1!=this.invoiceData.indexOf("7")},showDaysInput:function(){return 90!=this.priceDays}},methods:{channelCheckAll:function(){this.indeterminate?this.channelAll=!1:this.channelAll=!this.channelAll,this.indeterminate=!1,this.channelAll?this.channelData=["网站前台","酒店APP","网站差旅","薪福卡（大客户）","齐采网（大客户）","大连航空（大客户）"]:this.channelData=[]},checkAllChannel:function(e){6===e.length?(this.indeterminate=!1,this.channelAll=!0):e.length>0?(this.indeterminate=!0,this.channelAll=!1):(this.indeterminate=!1,this.channelAll=!1)},addTime:function(){this.isAllSelect||this.dateLines.push({selectedDays:[],start:"00:00",end:"23:00"})},showDays:function(e){for(var t=[],a=0;a<this.allDays.length;a++){for(var s=this.allDays[a],l=!1,i=0;i<e.selectedDays.length;i++){var n=e.selectedDays[i];if(s===n){l=!0;break}}t.push({day:s,select:l,disable:!1})}for(var a=0;a<t.length;a++){for(var c=t[a],l=!1,i=0;i<this.selectedDays.length;i++){var n=this.selectedDays[i];if(!c.select&&c.day===n){l=!0;break}}c.disable=l}return t},changeSelect:function(e,t){if(t.select)e.selectedDays.push(t.day);else{for(var a=[],s=0;s<e.selectedDays.length;s++)e.selectedDays[s]!=t.day&&a.push(e.selectedDays[s]);e.selectedDays=a}},removeDateLine:function(e){this.dateLines.splice(e,1)},goToNext:function(){var e={supplierName:this.supplierName,selectAccessType:this.selectAccessType,selectPlatformName:this.selectPlatformName,platformCode:this.platformCode,selectQuotedCurrency:this.selectQuotedCurrency,selectSettlementCurrency:this.selectSettlementCurrency,dateLines:this.dateLines,invoiceData:this.invoiceData,channelData:this.channelData,physicalRoom:this.physicalRoom,priceDays:this.priceDays};console.log("点击下一步的时候保存信息:",e)},dateToTimeStr:function(e){var t="",a=e.getHours();a<10&&(t+="0"),t+=a+":";var s=e.getMinutes();return s<10&&(t+="0"),t+=s}}}}});