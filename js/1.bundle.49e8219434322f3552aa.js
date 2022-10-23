(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{73:function(e,t,a){e.exports={"post-text":"_post-text_YUz8N",title:"_title_271kt"}},78:function(e,t,a){e.exports={"post-meta":"_post-meta_1mrQ0","user-info":"_user-info_1THkX",author:"_author_1vwPs","post-actions":"_post-actions_qkb88",cancel:"_cancel_6Buhb"}},80:function(e,t,a){e.exports={"input-fields":"_input-fields_1ePXg",title:"_title_HzYOt",subtitle:"_subtitle_14Y3v","img-url":"_img-url_1R5fX","is-large-preview":"_is-large-preview_33noB"}},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),s=a(101),l=a(81),c=a.n(l),u=a(7),p=a(80),m=a.n(p),f="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\PostEditScreen\\components\\InputFields\\InputFields.jsx",d=function(e){var t=e.inputData,a=e.onInputChange,n=e.onCheckboxChange,o=t.title,i=t.subTitle,s=t.imgDescriptor,l=t.isLargePreview;return r.a.createElement("div",{className:m.a["input-fields"],__source:{fileName:f,lineNumber:10}},r.a.createElement("div",{__source:{fileName:f,lineNumber:11}},r.a.createElement("input",{type:"text",className:m.a["img-url"],name:"imgDescriptor",placeholder:"Image descriptor for url",value:s,onChange:a,__source:{fileName:f,lineNumber:12}})),r.a.createElement("div",{className:m.a["is-large-preview"],__source:{fileName:f,lineNumber:14}},r.a.createElement("label",{__source:{fileName:f,lineNumber:15}},r.a.createElement("input",{type:"checkbox",checked:l,onChange:n,__source:{fileName:f,lineNumber:16}}),"Enable large preview")),r.a.createElement("div",{__source:{fileName:f,lineNumber:20}},r.a.createElement("input",{type:"text",className:m.a.title,name:"title",placeholder:"Title",value:o,onChange:a,__source:{fileName:f,lineNumber:21}})),r.a.createElement("div",{__source:{fileName:f,lineNumber:23}},r.a.createElement("input",{type:"text",className:m.a.subtitle,name:"subTitle",placeholder:"Subtitle",value:i,onChange:a,__source:{fileName:f,lineNumber:24}})))};d.propTypes={inputData:i.a.object.isRequired,onInputChange:i.a.func.isRequired,onCheckboxChange:i.a.func.isRequired};var h=d,b=a(78),_=a.n(b),v=a(73),N=a.n(v),g="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\PostEditScreen\\PostEditScreen.jsx",y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var k=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={isDataLoaded:!1,formData:{title:"",subTitle:"",imgDescriptor:"",isLargePreview:!1}},n.handleInputChange=function(e){n.setState({formData:y({},n.state.formData,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},e.target.name,e.target.value))})},n.handleCheckboxChange=function(e){n.setState({formData:y({},n.state.formData,{isLargePreview:e.target.checked})})},n.handleSaveBtnClick=function(){var e=n.props.data.post;fetch("/api/posts/"+e.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(y({},n.state.formData,{contentMarkup:document.querySelector(".js-editable").innerHTML}))}).then(function(){n.props.onSave()})},E(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),w(t,[{key:"componentDidUpdate",value:function(){if(this.props.data&&!this.state.isDataLoaded){this.editor=new c.a(".js-editable",{targetBlank:!0,toolbar:{buttons:["bold","italic","underline","anchor","h3","h4",{name:"unorderedlist",contentDefault:"<b>UL</b>"},{name:"orderedlist",contentDefault:"<b>OL</b>"},"quote",{name:"pre",action:"append-pre",tagNames:["pre"],contentDefault:"PRE"},{name:"strikethrough",action:"strikethrough",tagNames:["strike"],contentDefault:"CODE"}]},placeholder:{text:"Tell your story...",hideOnClick:!1}});var e=this.props.data.post;this.setState({isDataLoaded:!0,formData:{title:e.title,subTitle:e.subTitle,imgDescriptor:e.imgDescriptor,isLargePreview:e.isLargePreview}})}}},{key:"componentWillUnmount",value:function(){this.editor.destroy()}},{key:"render",value:function(){if(!this.props.data)return r.a.createElement(u.a,{__source:{fileName:g,lineNumber:115}});var e=this.props.data,t=e.post,a=e.author,n=y({},this.state.formData);return r.a.createElement("main",{__source:{fileName:g,lineNumber:122}},r.a.createElement("div",{className:_.a["post-meta"],__source:{fileName:g,lineNumber:123}},r.a.createElement("div",{className:_.a["user-info"],__source:{fileName:g,lineNumber:124}},r.a.createElement("a",{className:"avatar avatar--middle avatar--circled",href:"#",__source:{fileName:g,lineNumber:125}},r.a.createElement("img",{src:a.avatarUrl,__source:{fileName:g,lineNumber:126}})),r.a.createElement("a",{className:_.a.author,href:"#",__source:{fileName:g,lineNumber:128}},a.username)),r.a.createElement(h,{inputData:n,onInputChange:this.handleInputChange,onCheckboxChange:this.handleCheckboxChange,__source:{fileName:g,lineNumber:130}})),r.a.createElement("div",{className:N.a["post-text"]+" js-editable",dangerouslySetInnerHTML:{__html:t.contentMarkup},__source:{fileName:g,lineNumber:136}}),r.a.createElement("div",{className:_.a["post-actions"],__source:{fileName:g,lineNumber:137}},r.a.createElement("button",{className:"btn",onClick:this.handleSaveBtnClick,__source:{fileName:g,lineNumber:138}},"Save"),r.a.createElement(s.a,{className:_.a.cancel,to:"/blogs/"+t.blogId+"/posts/"+t.id,__source:{fileName:g,lineNumber:139}},"Cancel")))}}]),t}();k.defaultProps={data:null},k.propTypes={data:i.a.object,onSave:i.a.func.isRequired};var C=k,j=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function D(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var P=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=D(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={data:null},n.handleSave=function(){var e=n.state.data.post;n.props.history.push("/blogs/"+e.blogId+"/posts/"+e.id)},D(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),j(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);var t=this.props.match.params.postId;Promise.all([fetch("/api/posts/"+t).then(function(e){return e.json()}),fetch("/api/users/1").then(function(e){return e.json()})]).then(function(t){var a=t[0],n=t[1];e.setState({data:{post:a,author:n}})})}},{key:"render",value:function(){return r.a.createElement(C,{data:this.state.data,onSave:this.handleSave,__source:{fileName:"D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\PostEditScreen\\PostEditScreen_Container.jsx",lineNumber:36}})}}]),t}();P.propTypes={match:i.a.object.isRequired,history:i.a.object.isRequired};t.default=P}}]);
//# sourceMappingURL=1.bundle.49e8219434322f3552aa.js.map