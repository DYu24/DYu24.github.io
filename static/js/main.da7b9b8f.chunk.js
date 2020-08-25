(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{133:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(17),r=n.n(o),c=(n(94),n(84)),l=n(149),s=n(160),m=n(150),d=n(161),p=n(162),u=n(165),h=n(13),f=n(33),g=n(9),w=n(151),b=n(152),E=Object(l.a)((function(e){return{navBarWhite:{background:"transparent",boxShadow:"none",color:"white",transition:"background-color 0.5s"},navBarBlack:{backgroundColor:"black",color:"white",transition:"background-color 0.5s","& .active":{padddingBottom:"3px",borderBottom:"1.25px solid white"}},container:{minHeight:"50px",display:"flex",justifyContent:"flex-end","& div":{margin:"0.5em",cursor:"pointer",fontWeight:500}}}})),v=function(e){var t=e.to,n=e.text;return i.a.createElement("div",null,i.a.createElement(f.Link,{activeClass:"active",to:t,spy:!0,hashSpy:!0,smooth:!0,duration:500},n))},x=function(){var e=E(),t=e.navBarWhite,n=e.navBarBlack,o=e.container,r=Object(m.a)("screen and (max-width: 623px)"),c=Object(a.useState)(t),l=Object(g.a)(c,2),s=l[0],d=l[1];return Object(a.useEffect)((function(){var e=function(){window.pageYOffset<window.innerHeight-50?d(t):d(n)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),i.a.createElement(w.a,{className:s,position:"fixed"},i.a.createElement(b.a,{className:o,style:r?{justifyContent:"center"}:{}},i.a.createElement(v,{to:"about-me",text:"About Me"}),i.a.createElement(v,{to:"work-experience",text:"Work Experience"}),i.a.createElement(v,{to:"projects",text:"Projects"})))},y=n(26),j=n(153),A=n(154),k=n(16),I=n.n(k),C=n(64),O=n.n(C),N=n(65),S=n.n(N),D=n(66),T=n.n(D),M=n(67),W=n.n(M),J=n(68),B=n.n(J),R=Object(l.a)({landingContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",textAlign:"center",color:"white","& h1":{fontSize:"5vmax",zIndex:1},"& h2":{fontSize:"3vmax",marginTop:"-1em",zIndex:1}},iconLinks:{margin:"0em 0.5em"},icons:{marginTop:"2.5em",zIndex:1},divider:{zIndex:1,height:"4px",width:"100px",background:"white"}}),L=function(){var e=R(),t=e.divider,n=e.icons,o=e.iconLinks,r=e.landingContainer,c=Object(y.a)(),l=Object(a.useState)(!1),s=Object(g.a)(l,2),m=s[0],d=s[1],p=Object(a.useState)(!1),u=Object(g.a)(p,2),f=u[0],w=u[1],b=Object(a.useState)(!1),E=Object(g.a)(b,2),v=E[0],x=E[1],k=Object(a.useState)(0),C=Object(g.a)(k,2),N=C[0],D=C[1];return Object(a.useEffect)((function(){var e=function(){var e=window.pageYOffset,t=window.innerHeight;D(Math.min(100,100*e/t))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),i.a.createElement("div",null,i.a.createElement(h.ParallaxBanner,{layers:[{image:B.a,amount:.25}],style:{height:"100vh"}},i.a.createElement(j.a,{in:!0,timeout:1e3,style:{transitionDelay:"500ms"}},i.a.createElement("div",{className:r},i.a.createElement("h1",null,"Derek Yu"),i.a.createElement("h2",null,"Software Engineering Student"),i.a.createElement("div",{className:t,style:{background:"linear-gradient(to right, ".concat(c.palette.primary.main," 0%, ").concat(c.palette.primary.main," ").concat(1.75*N,"%, white ").concat(1.75*N,"%, white 100%)")}}),i.a.createElement("div",{className:n},i.a.createElement(A.a,{in:m&&f&&v,timeout:500,style:{transitionDelay:"1000ms"}},i.a.createElement("a",{href:"https://github.com/DYu24",title:"https://github.com/DYU24",target:"_blank",rel:"noopener noreferrer",className:o},i.a.createElement(I.a,{src:O.a,width:"32px",height:"32px",onLoad:function(){return d(!0)}}))),i.a.createElement(A.a,{in:m&&f&&v,timeout:500,style:{transitionDelay:"1250ms"}},i.a.createElement("a",{href:"https://www.linkedin.com/in/derek-yu/",title:"https://www.linkedin.com/in/derek-yu/",target:"_blank",rel:"noopener noreferrer",className:o},i.a.createElement(I.a,{src:S.a,width:"32px",height:"32px",onLoad:function(){return w(!0)}}))),i.a.createElement(A.a,{in:m&&f&&v,timeout:500,style:{transitionDelay:"1500ms"}},i.a.createElement("a",{href:W.a,title:"CV",target:"_blank",rel:"noopener noreferrer",className:o},i.a.createElement(I.a,{src:T.a,width:"32px",height:"32px",onLoad:function(){return x(!0)}}))))))))},H=n(167),U=n(69),G=n.n(U),P=Object(l.a)({aboutMeContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh",padding:"1em"},content:{display:"flex",justifyContent:"center",width:"70vw",padding:"2em 0em"},profilePictureContainer:{flexBasis:"35%",minWidth:"225px",maxWidth:"350px",margin:"0em 3em","& Img":{width:"100%",borderRadius:"15px"}},description:{flexBasis:"55%",flexGrow:1,wordWrap:"break-word",textAlign:"justify",maxWidth:"600px"}}),F=function(){var e=P(),t=e.aboutMeContainer,n=e.content,o=e.profilePictureContainer,r=e.description,c=Object(m.a)("screen and (min-width: 1025px)"),l=Object(a.useState)(!1),s=Object(g.a)(l,2),d=s[0],p=s[1],u=Object(a.useState)(!1),f=Object(g.a)(u,2),w=f[0],b=f[1],E=Object(a.useState)(!1),v=Object(g.a)(E,2),x=v[0],y=v[1];Object(a.useEffect)((function(){var e=function(){window.pageYOffset>.5*window.innerHeight&&p(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(a.useEffect)((function(){d&&w&&setTimeout((function(){return y(!0)}),1e3)}),[d,w]);return i.a.createElement("div",{className:t,style:c?{}:{padding:"3em 0 1em 0"},id:"about-me"},i.a.createElement("h1",null,"ABOUT ME"),i.a.createElement(h.Parallax,{x:["-70%","30%"]},i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:n,style:c?{}:{flexWrap:"wrap"}},i.a.createElement(j.a,{in:d&&w},i.a.createElement("div",{className:o},i.a.createElement(I.a,{src:G.a,onLoad:function(){b(!0)}}))),i.a.createElement(j.a,{in:d&&x},i.a.createElement("div",{className:r},i.a.createElement("p",null,"I'm a software engineering student at"," ",i.a.createElement(H.a,{href:"https://www.concordia.ca/",target:"_blank",rel:"noopener noreferrer"},"Concordia University")," ","in Montreal, Canada. I first got into programming when I joined the robotics team at school and instantly fell in love with all the creative possibilities that came with coding."),i.a.createElement("p",null,"I find myself drawn to backend development, along with the architectural and algorithmic challenges that come with it. I've also dabbled with machine learning and Big Data in a few course projects. I have experience developing in several languages and frameworks (such as TypeScript, Java and Python to name a few)."),i.a.createElement("p",null,"My other interests, when I have a life, include: photography, travelling & exploring, movies & video games, watching cute dog videos, and eating"," ",i.a.createElement("span",{role:"img","aria-hidden":!0},"\ud83c\udf55\ud83c\udf54\ud83c\udf5c\ud83c\udf63"))))))},Y=n(166),z=Object(l.a)({jobInfoContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"1em"},jobInfoContent:{wordWrap:"break-word",textAlign:"justify","& h2 a":{color:"inherit",textDecoration:"none"},"& h3":{marginTop:"-1em"},"& h5":{marginTop:"-1em",color:"#a5a5a5"}},jobInfoVisual:{marginLeft:"5%","& Img":{maxWidth:"600px",minWidth:"100px",width:"100%"}},chip:{margin:"0.2em",borderRadius:5,fontFamily:"Raleway"}}),Z=Object(l.a)({jobInfoContentMobile:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"justify"},jobInfoVisualMobile:{margin:"5%",width:"30vw","& Img":{maxWidth:"600px",minWidth:"100px",width:"100%"}},jobInfoHeaderMobile:{textAlign:"center","& h2 a":{color:"inherit",textDecoration:"none"},"& h3":{marginTop:"-1em"},"& h5":{marginTop:"-1em",color:"#a5a5a5"}},technologiesMobile:{display:"flex",flexWrap:"wrap",justifyContent:"center"}}),V=function(e){var t=e.job,n=e.show,o=e.timeout,r=t.company,c=t.position,l=t.period,s=t.src,d=t.description,p=t.url,u=t.technologies,h=z(),f=h.jobInfoContainer,w=h.jobInfoContent,b=h.jobInfoVisual,E=h.chip,v=Z(),x=v.jobInfoVisualMobile,y=v.jobInfoHeaderMobile,A=v.jobInfoContentMobile,k=v.technologiesMobile,C=Object(m.a)("screen and (max-width: 623px)"),O=Object(a.useState)(!1),N=Object(g.a)(O,2),S=N[0],D=N[1],T=Object(a.useState)(!1),M=Object(g.a)(T,2),W=M[0],J=M[1];Object(a.useEffect)((function(){(n&&W||n&&C)&&setTimeout((function(){return D(!0)}),o)}),[n,o,W,C]);var B=function(e){return e.map((function(e){return i.a.createElement(Y.a,{key:e,size:"small",variant:"outlined",label:e,color:"primary",className:E})}))},R=function(){J(!0)};return i.a.createElement(j.a,{in:n&&S},i.a.createElement("div",{className:f},C?i.a.createElement("div",{className:A},i.a.createElement("div",{className:x},i.a.createElement("a",{href:p,title:p,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(I.a,{src:s,onLoad:R}))),i.a.createElement("div",{className:y},i.a.createElement("h2",null,r),i.a.createElement("h3",null,c),i.a.createElement("h5",null,l)),i.a.createElement("p",null,d),i.a.createElement("div",{className:k},B(u))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:w},i.a.createElement("h2",null,r),i.a.createElement("h3",null,c),i.a.createElement("h5",null,l),i.a.createElement("p",null,d),B(u)),i.a.createElement("div",{className:b},i.a.createElement("a",{href:p,title:p,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(I.a,{src:s,onLoad:R}))))))},Q=n(72),X=n.n(Q),K=n(73),q=n.n(K),_=n(74),$=n.n(_),ee=n(75),te=n.n(ee),ne=[{company:"Amazon",position:"Software Development Engineer Intern",period:"May 2020 - August 2020",src:X.a,description:"At Amazon, I had the opportunity to work as a software developer in the Alexa domain.\n        My project focused on designing and delivering a new feature that would allow customers to set\n        named timers on their Alexa devices without specifying a duration. The goal was to improve on the\n        existing customer experience by reducing friction when speaking to Alexa, and therefore create more\n        enjoyable and natural interactions.",url:"https://www.amazon.com/",technologies:["Java","Spring","Amazon Web Services"]},{company:"Dott",position:"Software Engineer Intern",period:"May 2019 - August 2019",src:q.a,description:"Dott is a European micro-mobility ridesharing startup based in Amsterdam. \n        At the company, I worked as a backend engineer on the platform and was responsible for \n        developing and maintaining features for the core functionality of the business (e.g. \n        vehicle parts management, payments).",url:"https://ridedott.com/",technologies:["TypeScript","Node.Js","Google Cloud Platform"]},{company:"Square-Enix Montreal",position:"Intern Programmer",period:"May 2018 - August 2018",src:$.a,description:"Square-Enix Montreal, a subsidiary of Square-Enix, is a mobile games studio\n        that has developed critically acclaimed games such as Hitman Go and Lara Croft Go. As a \n        fullstack developer, I primarily worked on an internal web portal for game management and \n        metrics tracking, as well as secondary tooling for auto-generation of code and documentation.",url:"https://www.square-enix-montreal.com/",technologies:["TypeScript","C#","Angular","ASP.NET"]},{company:"CAE Inc.",position:"Intern Developer",period:"September 2017 - December 2017",src:te.a,description:"CAE specializes in the development of simulators for training in civil aviation,\n         defence & security, and for healthcare. I was part of the platform team and developed an automated \n         solution to build and deploy customized OS images for simulator computers. This helped to drastically \n         decrease maintenance and deployment time of these images as the majority of manual work had been cut away.",url:"https://www.cae.com/",technologies:["PowerShell","Batch","VBScript","Microsoft Deployment Toolkit"]}],ae=Object(l.a)({workExperienceContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",minHeight:"100vh",padding:"3em","& h1":{textAlign:"center"}},workExperienceContents:{display:"flex",flexDirection:"column",width:"65vw",minWidth:"300px"}}),ie=function(){var e=ae(),t=e.workExperienceContainer,n=e.workExperienceContents,o=Object(a.useState)(!1),r=Object(g.a)(o,2),c=r[0],l=r[1];Object(a.useEffect)((function(){var e=function(){window.pageYOffset>1.75*window.innerHeight&&l(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}));return i.a.createElement("div",{className:t,id:"work-experience"},i.a.createElement("h1",null,"WORK EXPERIENCE"),i.a.createElement(h.Parallax,{x:["75%","-25%"]},i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:n},function(){var e=0;return ne.map((function(t){var n=i.a.createElement(V,{key:t.company,job:t,show:c,timeout:e});return e+=500,n}))}()))},oe=n(156),re=n(157),ce=n(158),le=n(159),se=Object(l.a)((function(e){return{projectInfoContainer:{flexBasis:"30%",flexGrow:1,padding:"0.5em",minWidth:"350px"},projectInfoCard:{display:"flex",flexDirection:"column"},projectInfoHeader:{display:"flex",justifyContent:"space-between"},projectInfoLogo:{height:60},projectInfoLinks:{marginTop:"-1em",marginLeft:"5px"},chip:{margin:"0.1em",borderRadius:5,fontFamily:"Raleway"}}})),me=function(e){var t=e.project,n=e.show,o=e.timeout,r=t.img,c=t.title,l=t.description,s=t.technologies,m=t.url,d=t.devpost,p=Object(a.useState)(!1),u=Object(g.a)(p,2),h=u[0],f=u[1];Object(a.useEffect)((function(){n&&setTimeout((function(){return f(!0)}),o)}),[n,o]);var w=se(),b=w.chip,E=w.projectInfoContainer,v=w.projectInfoHeader,x=w.projectInfoLogo,y=w.projectInfoCard,A=w.projectInfoLinks,k=function(e){window.open(e,"_blank")};return i.a.createElement(j.a,{in:h},i.a.createElement("div",{className:E},i.a.createElement(oe.a,{className:y},i.a.createElement(re.a,null,i.a.createElement("div",{className:v},i.a.createElement("h2",null,c),i.a.createElement(I.a,{className:x,src:r})),i.a.createElement("p",null,l),s.map((function(e){return i.a.createElement(Y.a,{key:e,size:"small",variant:"outlined",label:e,color:"primary",className:b})}))),i.a.createElement(ce.a,{className:A},i.a.createElement(le.a,{size:"small",color:"primary",onClick:function(){return k(m)}},"GITHUB"),d&&i.a.createElement(le.a,{size:"small",color:"primary",onClick:function(){return k(d)}},"DEVPOST")))))},de=n(76),pe=n.n(de),ue=n(77),he=n.n(ue),fe=n(78),ge=n.n(fe),we=n(79),be=n.n(we),Ee=n(80),ve=n.n(Ee),xe=n(81),ye=n.n(xe),je=[{img:pe.a,title:"SmartBox Delivery",url:"https://github.com/DYu24/smart-box",devpost:"https://devpost.com/software/smartbox-delivery",description:"An end-to-end system that allows independent couriers to easily and securely deliver your \n        packages in smart mailboxes. First place winner at UOttaHack3.",technologies:["JavaScript","Python","Node.Js","React","Arduino","Google Cloud Platform","Solace PubSub+"]},{img:he.a,title:"RUDating",url:"https://github.com/DYu24/rudating",devpost:"https://devpost.com/software/rudating",description:"A speed dating web application where users have 2 minutes to converse, after which \n        they can decide whether or not they'd like to exchange contact information to keep talking.",technologies:["Python","JavaScript","Flask","React","Google Cloud Platform"]},{img:ge.a,title:"Tap of War",url:"https://github.com/DYu24/tap-of-war",devpost:"https://devpost.com/software/tap-of-war",description:"A tug-of-war inspired game where users on opposing teams continuously tap to \n        dominate Nanoleaf light panels with their team's color.",technologies:["JavaScript","Node.Js","React"]},{img:ye.a,title:"Wikipedia Android App",url:"https://github.com/DYu24/big-wiki-crew",description:"A fork of the Wikipedia Android app with additional features such as image search,\n        categorical browsing, and note taking. Academic project.",technologies:["Java","Android"]},{img:be.a,title:"CaptionThis",url:"https://github.com/DYu24/CaptionThis",description:"A website that allows users to post their own pictures and let the community come up \n        with fun and interesting captions. Academic project.",technologies:["JavaScript","Node.Js","React"]},{img:ve.a,title:"ChefPic",url:"https://github.com/DYu24/ChefPic",devpost:"https://devpost.com/software/chefpic",description:"An Android application that allows a user to take a picture of an unknown dish and \n        returns the name and recipe for that dish.",technologies:["Java","Android","IBM Watson"]}],Ae=Object(l.a)({projectsContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"100vh",height:"100%",padding:"3em 0 5em 0"},projectsContent:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",maxWidth:"65vw",marginTop:"2em"}}),ke=function(){var e=Ae(),t=e.projectsContainer,n=e.projectsContent,o=Object(a.useState)(!1),r=Object(g.a)(o,2),c=r[0],l=r[1];Object(a.useEffect)((function(){var e=function(){window.pageYOffset>3*window.innerHeight&&l(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}));return i.a.createElement("div",{className:t,id:"projects"},i.a.createElement("h1",null,"PROJECTS"),i.a.createElement(h.Parallax,{x:["-75%","25%"]},i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:n},function(){var e=0;return je.map((function(t){var n=i.a.createElement(me,{key:t.title,project:t,show:c,timeout:e});return e+=250,n}))}()))},Ie=Object(l.a)((function(e){return{"@global":{body:{fontFamily:"Raleway"},p:{fontSize:"1.1em",lineHeight:1.5},"* .underline":{height:"4px",width:"100px",background:e.palette.primary.main,marginBottom:"1em"},"* ::-webkit-scrollbar":{display:"none"}}}})),Ce=Object(l.a)({fabContainer:{position:"fixed",bottom:"1.5em",right:"1.5em","& span":{fontFamily:"Raleway",fontWeight:600}}}),Oe=function(e){var t=e.children,n=Ce().fabContainer,a=Object(s.a)({disableHysteresis:!0}),o=Object(m.a)("screen and (min-width: 1025px)"),r=window.innerWidth/2-73;return i.a.createElement(d.a,{in:a},i.a.createElement("div",{onClick:function(){f.animateScroll.scrollToTop({duration:500})},role:"presentation",className:n,style:o?{}:{right:"".concat(r,"px")}},t))},Ne=function(e){var t=Ie(),n=Object(h.useController)().parallaxController;return Object(a.useLayoutEffect)((function(){var e=function(){return n.update()};return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[n]),i.a.createElement(c.a,null,i.a.createElement("div",{className:t},i.a.createElement(x,null),i.a.createElement(L,null),i.a.createElement(F,null),i.a.createElement(ie,null),i.a.createElement(ke,null),i.a.createElement(Oe,e,i.a.createElement(p.a,{className:"fab",color:"primary",variant:"extended",size:"medium"},i.a.createElement(u.a,null)," BACK TO TOP"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=n(163),De=n(83),Te=Object(De.a)({palette:{primary:{main:"#1c8db8"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"',"Raleway","Montserrat","Poppins","Lora","Manrope","IBM Plex Sans","Merriweather"].join(",")}});r.a.render(i.a.createElement(h.ParallaxProvider,null,i.a.createElement(Se.a,{theme:Te},i.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="},65:function(e,t,n){e.exports=n.p+"static/media/linkedin-logo.b7b9d7b8.png"},66:function(e,t,n){e.exports=n.p+"static/media/cv-icon.6efac0ae.png"},67:function(e,t,n){e.exports=n.p+"static/media/resume.cdd10c93.pdf"},68:function(e,t,n){e.exports=n.p+"static/media/iceland-pool.09fd77ba.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/DSC_0376.73a6f1b6.jpg"},72:function(e,t,n){e.exports=n.p+"static/media/amazon-logo.ed6b5e83.png"},73:function(e,t,n){e.exports=n.p+"static/media/dott-logo.c63e9978.png"},74:function(e,t,n){e.exports=n.p+"static/media/sqm-logo.b12b1153.png"},75:function(e,t,n){e.exports=n.p+"static/media/cae-logo.c76eeacf.png"},76:function(e,t,n){e.exports=n.p+"static/media/smart-box-logo.89d717ee.png"},77:function(e,t,n){e.exports=n.p+"static/media/rudating.9e5ffccc.png"},78:function(e,t,n){e.exports=n.p+"static/media/TapOfWarLogo.48dbff7b.png"},79:function(e,t,n){e.exports=n.p+"static/media/caption-this-logo.d659daba.png"},80:function(e,t,n){e.exports=n.p+"static/media/chefpic-logo.ce637f05.png"},81:function(e,t,n){e.exports=n.p+"static/media/wikipedia-logo.f5da73be.png"},89:function(e,t,n){e.exports=n(133)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.da7b9b8f.chunk.js.map