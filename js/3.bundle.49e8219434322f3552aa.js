(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(1),i=r.n(o),l=r(7),c=r(95),m=r.n(c),s="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\BlogScreen\\components\\BlogHeader\\BlogHeader.jsx",u=function(e){var t=e.name,r=e.description,a=window.innerWidth,o=void 0;return o=window.devicePixelRatio<=1?a<400?400:a<600?600:a<800?800:a<1200?1200:a<1600?1600:2e3:a<400?800:a<600?1200:a<800?1600:a<1200?2400:a<1600?3200:4e3,n.a.createElement("div",{className:m.a["blog-header"],style:{backgroundImage:"url(https://cdn-images-1.medium.com/max/"+o+"/1*JVwi6UU_AJzhMkp1kMVc7A.jpeg)"},__source:{fileName:s,lineNumber:30}},n.a.createElement("div",{className:m.a.overlay,__source:{fileName:s,lineNumber:31}}),n.a.createElement("div",{className:m.a.inner,__source:{fileName:s,lineNumber:32}},n.a.createElement("div",{className:m.a.text,__source:{fileName:s,lineNumber:33}},n.a.createElement("h1",{className:m.a.name,__source:{fileName:s,lineNumber:34}},t),n.a.createElement("h2",{className:m.a.description,__source:{fileName:s,lineNumber:35}},r))))};u.propTypes={name:i.a.string.isRequired,description:i.a.string.isRequired};var _=u,N=r(71),f=r(101),p=r(93),d=r.n(p),b="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\BlogScreen\\components\\PostPreview\\PostPreview.jsx",h=function(e){var t=e.post,r=e.author;return n.a.createElement("article",{className:t.isLargePreview?d.a.post+" "+d.a["post--full-width"]:d.a.post,__source:{fileName:b,lineNumber:8}},n.a.createElement(f.a,{className:d.a.image,to:"/blogs/"+t.blogId+"/posts/"+t.id,__source:{fileName:b,lineNumber:9}},n.a.createElement("div",{className:d.a["overlay-border"],__source:{fileName:b,lineNumber:10}}),n.a.createElement("picture",{__source:{fileName:b,lineNumber:11}},n.a.createElement("source",{srcSet:"https://cdn-images-1.medium.com/max/400/"+t.imgDescriptor+" 1x, https://cdn-images-1.medium.com/max/800/"+t.imgDescriptor+" 2x",media:"(max-width: 400px)",__source:{fileName:b,lineNumber:12}}),n.a.createElement("source",{srcSet:"https://cdn-images-1.medium.com/max/600/"+t.imgDescriptor+" 1x, https://cdn-images-1.medium.com/max/1200/"+t.imgDescriptor+" 2x",media:"(min-width: 401px) and (max-width: 600px)",__source:{fileName:b,lineNumber:16}}),n.a.createElement("source",{srcSet:"https://cdn-images-1.medium.com/max/800/"+t.imgDescriptor+" 1x, https://cdn-images-1.medium.com/max/1600/"+t.imgDescriptor+" 2x",media:"(min-width: 601px)",__source:{fileName:b,lineNumber:20}}),n.a.createElement("img",{src:"https://cdn-images-1.medium.com/max/800/"+t.imgDescriptor,__source:{fileName:b,lineNumber:24}}))),n.a.createElement("div",{className:d.a.text,__source:{fileName:b,lineNumber:27}},n.a.createElement(f.a,{className:d.a["text-link"],to:"/blogs/"+t.blogId+"/posts/"+t.id,__source:{fileName:b,lineNumber:28}},n.a.createElement("h3",{__source:{fileName:b,lineNumber:29}},t.title),n.a.createElement("p",{__source:{fileName:b,lineNumber:30}},t.subTitle)),n.a.createElement("div",{className:d.a.meta,__source:{fileName:b,lineNumber:32}},n.a.createElement("a",{className:"avatar avatar--small avatar--circled",href:"https://blog.kentcdodds.com/@kentcdodds",target:"_blank",rel:"noopener noreferrer",__source:{fileName:b,lineNumber:33}},n.a.createElement("img",{src:r.avatarUrl,__source:{fileName:b,lineNumber:34}})),n.a.createElement("div",{className:d.a["sub-meta"],__source:{fileName:b,lineNumber:36}},n.a.createElement("a",{className:d.a.author,href:"https://blog.kentcdodds.com/@kentcdodds",target:"_blank",rel:"noopener noreferrer",__source:{fileName:b,lineNumber:37}},r.username),n.a.createElement("span",{className:d.a.date,__source:{fileName:b,lineNumber:40}},t.date)))))};h.propTypes={post:i.a.object.isRequired,author:i.a.object.isRequired};var g=h,E=r(91),v=r.n(E),w="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\BlogScreen\\components\\Footing\\Footing.jsx",x=function(){return n.a.createElement("div",{className:v.a.footing,__source:{fileName:w,lineNumber:5}},n.a.createElement("div",{className:v.a.inner,__source:{fileName:w,lineNumber:6}},n.a.createElement("nav",{__source:{fileName:w,lineNumber:7}},n.a.createElement("ul",{__source:{fileName:w,lineNumber:8}},n.a.createElement("li",{__source:{fileName:w,lineNumber:9}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://blog.kentcdodds.com/about",__source:{fileName:w,lineNumber:9}},"About kentcdodds")),n.a.createElement("li",{__source:{fileName:w,lineNumber:10}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://blog.kentcdodds.com/latest",__source:{fileName:w,lineNumber:10}},"Latest Stories")),n.a.createElement("li",{__source:{fileName:w,lineNumber:11}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://blog.kentcdodds.com/archive",__source:{fileName:w,lineNumber:11}},"Archive")),n.a.createElement("li",{__source:{fileName:w,lineNumber:12}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://about.medium.com/",__source:{fileName:w,lineNumber:12}},"About Medium")),n.a.createElement("li",{__source:{fileName:w,lineNumber:13}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/policy/9db0094a1e0f",__source:{fileName:w,lineNumber:13}},"Terms")),n.a.createElement("li",{__source:{fileName:w,lineNumber:14}},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/policy/f03bf92035c9",__source:{fileName:w,lineNumber:14}},"Privacy"))))))},k=r(89),y=r.n(k),j="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\BlogScreen\\BlogScreen.jsx",P=function(e){var t=e.data;if(!t)return n.a.createElement(l.a,{__source:{fileName:j,lineNumber:14}});var r=t.blog,a=t.author,o=t.posts;return n.a.createElement("main",{__source:{fileName:j,lineNumber:20}},n.a.createElement(_,{name:r.name,description:r.description,__source:{fileName:j,lineNumber:21}}),n.a.createElement(N.a,{__source:{fileName:j,lineNumber:22}}),n.a.createElement("div",{className:y.a.posts,__source:{fileName:j,lineNumber:23}},o.map(function(e){return n.a.createElement(g,{post:e,author:a,key:e.id,__source:{fileName:j,lineNumber:26}})})),n.a.createElement(x,{__source:{fileName:j,lineNumber:30}}))};P.defaultProps={data:null},P.propTypes={data:i.a.object};var M=P,D=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=a=B(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={data:null},B(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.a.Component),D(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0);Promise.all([fetch("/api/blogs/1").then(function(e){return e.json()}),fetch("/api/users/1").then(function(e){return e.json()}),fetch("/api/posts").then(function(e){return e.json()})]).then(function(t){var r=t[0],a=t[1],n=t[2];e.setState({data:{blog:r,author:a,posts:n}})})}},{key:"render",value:function(){return n.a.createElement(M,{data:this.state.data,__source:{fileName:"D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\screens\\BlogScreen\\BlogScreen_Container.jsx",lineNumber:31}})}}]),t}();t.default=S},71:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(1),i=r.n(o),l=r(101),c=r(75),m=r.n(c),s="D:\\MY\\My_Projects\\block5d\\medium-clone\\src\\client\\app\\components\\shared\\PreContent\\PreContent.jsx",u=function(e){var t=e.withoutBottomLine;return n.a.createElement("div",{className:m.a["pre-content"],__source:{fileName:s,lineNumber:8}},n.a.createElement("div",{className:t?m.a.inner+" "+m.a["inner--without-bottom-line"]:m.a.inner,__source:{fileName:s,lineNumber:9}},n.a.createElement("div",{className:m.a.links,__source:{fileName:s,lineNumber:10}},n.a.createElement(l.a,{to:"/blogs/1",__source:{fileName:s,lineNumber:11}},"HOME"),n.a.createElement("span",{className:m.a.devider,__source:{fileName:s,lineNumber:12}}),n.a.createElement("a",{href:"https://kentcdodds.com/links/",target:"_blank",rel:"noopener noreferrer",__source:{fileName:s,lineNumber:13}},"FIND KENT AROUND THE WEB")),n.a.createElement("div",{className:m.a.actions,__source:{fileName:s,lineNumber:15}},n.a.createElement("a",{className:m.a.search,href:"#",__source:{fileName:s,lineNumber:16}},"search"),n.a.createElement("a",{className:"link-icon "+m.a.twitter,href:"https://twitter.com/kentcdodds",target:"_blank",rel:"noopener noreferrer",__source:{fileName:s,lineNumber:17}},n.a.createElement("svg",{width:"25",height:"25",viewBox:"0 0 25 25",__source:{fileName:s,lineNumber:18}},n.a.createElement("path",{d:"M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23",__source:{fileName:s,lineNumber:19}}))),n.a.createElement("button",{className:"btn btn--smallest",__source:{fileName:s,lineNumber:22}},"Follow"))))};u.defaultProps={withoutBottomLine:!1},u.propTypes={withoutBottomLine:i.a.bool};var _=u;t.a=_},75:function(e,t,r){e.exports={"pre-content":"_pre-content_6I0g4",inner:"_inner_2agx1","inner--without-bottom-line":"_inner--without-bottom-line_2FoPm",links:"_links_2yGQp",devider:"_devider_3YGIm",actions:"_actions_34AQt",search:"_search_24Buu",twitter:"_twitter_1m6h9"}},89:function(e,t,r){e.exports={posts:"_posts_eDDPN"}},91:function(e,t,r){e.exports={footing:"_footing_3iOdT",inner:"_inner_1fGff"}},93:function(e,t,r){e.exports={post:"_post_7Nefd",image:"_image_107Ib","overlay-border":"_overlay-border_rOp8N",text:"_text_hENw1","text-link":"_text-link_1G8oh",meta:"_meta_23M71","sub-meta":"_sub-meta_1-F9o","post--full-width":"_post--full-width_3eMIV"}},95:function(e,t,r){e.exports={"blog-header":"_blog-header_3iowL",overlay:"_overlay_24A7Q",inner:"_inner_3lg0z",text:"_text_1efQ9"}}}]);
//# sourceMappingURL=3.bundle.49e8219434322f3552aa.js.map