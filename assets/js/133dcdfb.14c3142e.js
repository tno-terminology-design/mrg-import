"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[232],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),c=a,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Error Reporting",s={unversionedId:"mrg-import/error-reporting",id:"mrg-import/error-reporting",title:"Error Reporting",description:"During execution the MRG Import Tool outputs information about the state of the tool to the console. All console messages listed in the section below include timestamps, information about the type of message, and the object which caused the message. Error messages may also supply additional information about the error supplied by Node.js directly.",source:"@site/docs/mrg-import/4-error-reporting.md",sourceDirName:"mrg-import",slug:"/mrg-import/error-reporting",permalink:"/mrg-import/docs/mrg-import/error-reporting",draft:!1,editUrl:"https://github.com/tno-terminology-design/mrg-import/blob/master/docs/mrg-import/4-error-reporting.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1695206518,formattedLastUpdatedAt:"Sep 20, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Deployment",permalink:"/mrg-import/docs/mrg-import/deployment"},next:{title:"Testing",permalink:"/mrg-import/docs/mrg-import/testing"}},p={},l=[{value:"Error Messages",id:"error-messages",level:2}],m={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-reporting"},"Error Reporting"),(0,a.kt)("p",null,"During execution the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG Import Tool")," outputs information about the state of the tool to the console. All console messages listed in the section below include timestamps, information about the type of message, and the object which caused the message. ",(0,a.kt)("a",{parentName:"p",href:"#error-messages"},"Error messages")," may also supply additional information about the error supplied by ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," directly."),(0,a.kt)("p",null,"The list of messages below gives additional information about the messages reported in the console. Most messages include some kind of placeholder to give more specific details. All placeholders are marked in ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," format, and most are also surrounded by apostrophes ('')."),(0,a.kt)("h2",{id:"error-messages"},"Error Messages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E002 Missing required property in SAF at '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"': '",(0,a.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,a.kt)("br",null),"\nA required property could not be located in the ",(0,a.kt)("a",{parentName:"p",href:"@"},"SAF"),"'s scope section at ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL"),", the error message should state the missing properties at the ",(0,a.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. See the ",(0,a.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,a.kt)("a",{parentName:"p",href:"@"},"SAF")," properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E003 Missing required property in MRG at '",(0,a.kt)("inlineCode",{parentName:"em"},"mrgURL"),"': '",(0,a.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,a.kt)("br",null),"\nA required property could not be located in the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG"),"'s terminology section at ",(0,a.kt)("inlineCode",{parentName:"p"},"mrgURL"),", the error message should state the missing properties at the ",(0,a.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. Check the ",(0,a.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG")," properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E004 SAF request of '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"' failed with status code ",(0,a.kt)("inlineCode",{parentName:"em"},"status"))),(0,a.kt)("br",null),"\nThe requested ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL")," could not be downloaded and the server returned ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"HTTP status code")," ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),". Check if the raw file URL in the request listed above this error points to the correct file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E005 SAF interpretation of '",(0,a.kt)("inlineCode",{parentName:"em"},"safURL"),"' failed due to a YAML parsing error")),(0,a.kt)("br",null),"\nThe downloaded ",(0,a.kt)("a",{parentName:"p",href:"@"},"SAF")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"safURL")," could not be interpreted by the YAML parser. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E006 ",(0,a.kt)("inlineCode",{parentName:"em"},"error"),", halting execution as requested by the 'onNotExist' throw option")),(0,a.kt)("br",null),"\nSomething with cause ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," went wrong while handling an ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"onNotExist")," parameter value was set to ",(0,a.kt)("inlineCode",{parentName:"p"},"throw"),", so the tool execution was halted.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E007 Error creating directory '",(0,a.kt)("inlineCode",{parentName:"em"},"dirPath"),"'")),(0,a.kt)("br",null),"\nCreating the specified (sub)directory path ",(0,a.kt)("inlineCode",{parentName:"p"},"dirPath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E008 Error writing file '",(0,a.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,a.kt)("br",null),"\nWriting the specified file ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E009 Unsupported Git platform ",(0,a.kt)("inlineCode",{parentName:"em"},"platform"))),(0,a.kt)("br",null),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"platform")," of the parsed URL is unknown as a source by tool and can not be converted into a raw URL for getting data. View URL handling information in ",(0,a.kt)("a",{parentName:"p",href:"usage#url-handling"},"usage")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E011 Failed to read or parse the config file '",(0,a.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,a.kt)("br",null),"\nSomething went wrong during the interpretation of the config file at ",(0,a.kt)("inlineCode",{parentName:"p"},"filePath"),". Some additional information on the cause of this error should be displayed underneath this message.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ERROR E012 Something unexpected went wrong")),(0,a.kt)("br",null),"\nThis error message should only be seen when an error occurs that results in the ",(0,a.kt)("a",{parentName:"p",href:"@"},"MRG")," import process is not able to complete normally. Some additional information on the cause of this error should be displayed underneath this message."))))}u.isMDXComponent=!0}}]);