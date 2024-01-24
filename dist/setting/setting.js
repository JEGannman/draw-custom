System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var a={},s={},o={};return{setters:[function(e){a.React=e.React,a.defaultMessages=e.defaultMessages},function(e){s.MapWidgetSelector=e.MapWidgetSelector,s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection},function(e){o.Select=e.Select,o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=o},756:e=>{"use strict";e.exports=s}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var r={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(r),n.d(r,{default:()=>i});var e,t=n(891);!function(e){e.SINGLE="single",e.CONTINUOUS="continuous",e.UPDATE="update"}(e||(e={}));const a={selectMapWidget:"Select a Map widget",sourceLabel:"Source Label",selectDrawMode:"Select Draw Mode",drawModeSingle:"Single",drawModeContinuous:"Continuous",drawModeUpdate:"Update"};var s=n(756),o=n(726);class i extends t.React.PureComponent{constructor(){super(...arguments),this.onPropertyChange=(e,t)=>{const{config:a}=this.props;if(t===a[e])return;const s=a.set(e,t),o={id:this.props.id,config:s};this.props.onSettingChange(o)},this.onMapWidgetSelected=e=>{this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e})},this.handleDrawModeChange=e=>{var t;const a=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value;this.onPropertyChange("creationMode",a)},this.formatMessage=(e,s)=>{const n=Object.assign({},a,o.defaultMessages,t.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:n[e]},s)}}render(){const{useMapWidgetIds:n,config:r}=this.props;return t.React.createElement("div",null,t.React.createElement("div",{className:"widget-setting-psearch"},t.React.createElement(s.SettingSection,{className:"map-selector-section",title:this.props.intl.formatMessage({id:"sourceLabel",defaultMessage:a.sourceLabel})},t.React.createElement(s.SettingRow,{label:this.formatMessage("selectMapWidget")}),t.React.createElement(s.SettingRow,null,t.React.createElement(s.MapWidgetSelector,{onSelect:this.onMapWidgetSelected,useMapWidgetIds:n})),t.React.createElement(s.SettingRow,{label:this.formatMessage("selectDrawMode"),flow:"wrap"},t.React.createElement(o.Select,{value:r.creationMode,onChange:this.handleDrawModeChange,className:"drop-height"},t.React.createElement("option",{value:e.CONTINUOUS},this.formatMessage("drawModeContinuous")),t.React.createElement("option",{value:e.SINGLE},this.formatMessage("drawModeSingle")))))))}}})(),r})())}}}));