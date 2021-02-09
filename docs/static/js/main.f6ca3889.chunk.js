(this["webpackJsonptodo-react-redux"]=this["webpackJsonptodo-react-redux"]||[]).push([[0],{211:function(e,t,n){"use strict";n.r(t);var a,i=n(123),r=n(256),c=n(23),o=(n(194),n(0)),s=n.n(o),l=n(13),d=n.n(l),u=n(37),j=n(59),b=n(67),p=n(239),m=n(253),O=n(254),h=n(255),x=n(249),v=n(214),f=n(68),g=n(266),D=n(259),y=n(149),w=n.n(y),N=n(18),C=n(21),I=n(42),k=n(257),M=n(144);!function(e){e[e.NONE=0]="NONE",e[e.LOW=1]="LOW",e[e.MEDIUM=2]="MEDIUM",e[e.HIGH=3]="HIGH"}(a||(a={}));var T="dd.MM.yyyy",S=function e(t){var n=t.id,i=void 0===n?void 0:n,r=t.title,c=void 0===r?"":r,o=t.description,s=void 0===o?"":o,l=t.creationDate,d=void 0===l?void 0:l,u=t.dueDate,j=void 0===u?void 0:u,b=t.priority,p=void 0===b?a.NONE:b,m=t.completionDate,O=void 0===m?void 0:m;Object(M.a)(this,e),this.id=void 0,this.title=void 0,this.description=void 0,this.creationDate=void 0,this.dueDate=void 0,this.priority=void 0,this.completionDate=void 0,this.id=null!==i&&void 0!==i?i:Object(I.e)(),this.title=c,this.description=s,this.creationDate=null!==d&&void 0!==d?d:(new Date).toISOString(),this.dueDate=j,this.priority=p,this.completionDate=O},A=[Object(C.a)({},new S({description:"It is imperative",title:"Make this app work",priority:a.HIGH,dueDate:"2021-02-27"})),Object(C.a)({},new S({description:"Maybe play some video games?",title:"Relax a bit",dueDate:"2021-02-12"})),Object(C.a)({},new S({title:"Have some fun"})),Object(C.a)({},new S({title:"Workout!",priority:a.MEDIUM})),Object(C.a)({},new S({title:"Do the laundry",dueDate:"2021-02-16"})),Object(C.a)({},new S({description:"Just a bit",title:"Try to document it",priority:a.LOW,dueDate:"2021-02-16"})),Object(C.a)({},new S({description:"Hello!",title:"Publish this on GitHub",completionDate:"2021-02-09T18:28:39.266Z"}))],H=function(e,t){return(e.dueDate?new Date(e.dueDate).getTime():1/0)-(t.dueDate?new Date(t.dueDate).getTime():1/0)},W=Object(I.c)({sortComparer:function(e,t){var n=(e.completionDate?new Date(e.completionDate).getTime():1/0)-(t.completionDate?new Date(t.completionDate).getTime():1/0);if(0!==n&&!isNaN(n))return-1*n;var a=t.priority-e.priority;if(0!==a)return a;var i=H(e,t);return 0===i||isNaN(i)?new Date(e.creationDate).getTime()-new Date(t.creationDate).getTime():i}}),L=W.getInitialState(),B=W.upsertMany(L,A),E=Object(I.d)({name:"todos",initialState:B,reducers:{create:{prepare:function(e){var t=new S(e);return{payload:Object(C.a)({},t)}},reducer:W.addOne},update:W.updateOne,remove:W.removeOne}}),P=E.actions,F=E.reducer,G=W.getSelectors(),z=Object(I.b)(G.selectAll,(function(e){return e.filter((function(e){return!e.completionDate}))})),U=Object(I.b)(z,(function(e){return e.filter((function(e){return e.dueDate})).sort(H).map((function(e){return Object(C.a)(Object(C.a)({},e),{},{formatedDueDate:Object(k.a)(new Date(e.dueDate),T)})}))})),J=Object(C.a)(Object(C.a)({},G),{},{selectAllIncomplete:z,selectWithDueDate:U}),_=n(263),K=n(242),R=n(261),Z=n(243),q=n(244),Q=n(245),V=n(260),X=n(251),Y=n(248),$=n(145),ee=n.n($),te=n(258),ne=Object(p.a)((function(e){return{root:{marginBottom:e.spacing(2)},accordion:{position:"relative",overflow:"hidden","&:after":{background:function(t){var n=t.priority;return n===a.LOW?e.palette.success.light:n===a.MEDIUM?e.palette.info.light:n===a.HIGH?e.palette.error.light:"none"},content:'""',height:"100%",left:0,position:"absolute",top:0,width:5}},accordionDetails:{paddingTop:0},accordionSummaryContent:{alignItems:"center",display:"flex",flex:1},title:{margin:0,"&:before":{borderColor:"transparent"}},dueDate:{color:function(t){return t.overdue?e.palette.error.light:e.palette.text.secondary},paddingLeft:e.spacing(2)},priorityAndButton:{alignItems:"flex-end",display:"flex",flexDirection:"column",justifyContent:"space-between"},deleteButton:{marginTop:e.spacing(2)}}})),ae=n(6);function ie(e){var t=e.id,n=e.title,i=e.description,r=e.completionDate,c=e.dueDate,o=e.priority,l=Object(u.b)(),d=s.a.useCallback((function(){return l(P.remove(t))}),[t]),j=s.a.useCallback((function(e){return l(P.update({id:t,changes:e}))}),[t]),b=s.a.useMemo((function(){return Boolean(c&&new Date>new Date(c))}),[c]),p=ne({overdue:b,priority:o});return Object(ae.jsx)(D.a,{className:p.root,children:Object(ae.jsxs)(_.a,{className:p.accordion,children:[Object(ae.jsx)(K.a,{expandIcon:Object(ae.jsx)(ee.a,{}),children:Object(ae.jsxs)("div",{className:p.accordionSummaryContent,onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},children:[Object(ae.jsx)(R.a,{checked:!!r,onChange:function(e){j({completionDate:e.target.checked?(new Date).toISOString():void 0})}}),Object(ae.jsx)(Z.a,{className:p.title,fullWidth:!0,onChange:function(e){return j({title:e.target.value})},value:n}),c?Object(ae.jsx)(f.a,{className:p.dueDate,variant:"body2",children:Object(k.a)(new Date(c),"dd.MM.yyyy")}):null]})}),Object(ae.jsx)(q.a,{className:p.accordionDetails,children:Object(ae.jsxs)(Q.a,{container:!0,spacing:2,children:[Object(ae.jsx)(Q.a,{item:!0,xs:12,sm:12,md:6,children:Object(ae.jsx)(V.a,{fullWidth:!0,label:"Notes",multiline:!0,onChange:function(e){return j({description:e.target.value})},rows:5,value:i})}),Object(ae.jsx)(Q.a,{item:!0,xs:12,sm:12,md:3,children:Object(ae.jsx)(te.a,{disableToolbar:!0,format:T,fullWidth:!0,label:"Due date",onChange:function(e){(null===e||void 0===e?void 0:e.getTime)&&!isNaN(e.getTime())?j({dueDate:e.toISOString().split("T")[0]}):null===e&&j({dueDate:void 0})},value:c||null,variant:"inline"})}),Object(ae.jsxs)(Q.a,{className:p.priorityAndButton,item:!0,xs:12,sm:12,md:3,children:[Object(ae.jsxs)(V.a,{fullWidth:!0,label:"Priority",select:!0,value:o,onChange:function(e){return j({priority:parseInt(e.target.value)})},children:[Object(ae.jsx)(X.a,{value:a.NONE,children:"None"}),Object(ae.jsx)(X.a,{value:a.LOW,children:"Low"}),Object(ae.jsx)(X.a,{value:a.MEDIUM,children:"Medium"}),Object(ae.jsx)(X.a,{value:a.HIGH,children:"High"})]}),Object(ae.jsx)(Y.a,{className:p.deleteButton,onClick:d,children:"Delete"})]})]})})]})})}var re=s.a.memo(ie),ce=n.p+"static/media/happy.96f71ab0.svg",oe=Object(p.a)((function(e){return{dueDate:{marginLeft:e.spacing(2),marginBottom:e.spacing(1),marginTop:e.spacing(3),"&:first-of-type":{marginTop:0}},iconContainer:{textAlign:"center"},icon:{height:250,margin:"".concat(e.spacing(5),"px 0")},iconCredits:{color:e.palette.text.secondary,fontSize:10,opacity:.25},iconCreditsLink:{color:"".concat(e.palette.text.secondary," !important")}}}));function se(){var e=oe(),t=Object(u.c)(J.selectWithDueDate);return Object(ae.jsx)("div",{children:t.length>0?t.map((function(t,n,a){var i;return Object(ae.jsxs)(s.a.Fragment,{children:[t.formatedDueDate!==(null===(i=a[n-1])||void 0===i?void 0:i.formatedDueDate)?Object(ae.jsx)(f.a,{className:e.dueDate,variant:"h5",children:t.formatedDueDate}):null,Object(ae.jsx)(re,Object(C.a)({},t),t.id)]},t.id)})):Object(ae.jsxs)("div",{className:e.iconContainer,children:[Object(ae.jsx)("img",{className:e.icon,src:ce}),Object(ae.jsx)(f.a,{variant:"h4",children:"All done, you're awesome!"}),Object(ae.jsxs)(f.a,{className:e.iconCredits,color:"secondary",variant:"body2",children:["Icon from"," ",Object(ae.jsx)("a",{className:e.iconCreditsLink,href:"https://www.flaticon.com/free-icon/happy_2374630",target:"_blank",rel:"noreferrer",children:"Flaticon"})]})]})})}var le=s.a.memo(se),de=n(246),ue=n(216),je=n(252),be="/",pe="/calendar",me=Object(p.a)((function(e){return{nested:{paddingLeft:e.spacing(4)},linkActive:{background:e.palette.action.selected}}}));function Oe(){var e=me();return Object(ae.jsxs)(de.a,{component:"nav",children:[Object(ae.jsx)(ue.a,{button:!0,component:j.b,exact:!0,to:be,activeClassName:e.linkActive,children:Object(ae.jsx)(je.a,{primary:"Overview"})}),Object(ae.jsx)(ue.a,{button:!0,component:j.b,to:pe,activeClassName:e.linkActive,children:Object(ae.jsx)(je.a,{primary:"Calendar"})})]})}var he=s.a.memo(Oe),xe=n(250),ve=n(146),fe=n.n(ve),ge=n(148),De=n.n(ge),ye=n(147),we=n.n(ye),Ne=Object(p.a)({textfield:{margin:0},button:{height:"100%"}});function Ce(){var e=Ne(),t=s.a.useState(""),n=Object(b.a)(t,2),a=n[0],i=n[1],r=s.a.useState(!1),c=Object(b.a)(r,2),o=c[0],l=c[1],d=Object(u.c)(o?J.selectAll:J.selectAllIncomplete),j=Object(u.c)((function(e){return J.selectAll(e).length-J.selectAllIncomplete(e).length})),p=Object(u.b)();return Object(ae.jsxs)(ae.Fragment,{children:[d.map((function(e){return Object(ae.jsx)(re,Object(C.a)({},e),e.id)})),Object(ae.jsxs)(Q.a,{container:!0,spacing:2,children:[Object(ae.jsx)(Q.a,{item:!0,xs:12,sm:9,md:10,children:Object(ae.jsx)(V.a,{className:e.textfield,fullWidth:!0,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(p(P.create({title:a})),i(""))},placeholder:"Plan something new",value:a,InputProps:{startAdornment:Object(ae.jsx)(xe.a,{position:"start",children:Object(ae.jsx)(fe.a,{})})}})}),Object(ae.jsx)(Q.a,{item:!0,xs:12,sm:3,md:2,children:Object(ae.jsxs)(Y.a,{className:e.button,fullWidth:!0,onClick:function(){return l(!o)},size:"medium",startIcon:o?Object(ae.jsx)(we.a,{}):Object(ae.jsx)(De.a,{}),variant:"text",children:["Done (",j,")"]})})]})]})}var Ie=s.a.memo(Ce),ke=Object(p.a)((function(e){return{appContainer:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawerOpen:{transition:e.transitions.create("width",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),width:240},drawerClose:{transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:0},drawerPaper:{width:240},link:{color:"#ffffff",textDecoration:"none"},linkActive:{textDecoration:"underline"}}}));var Me=function(){var e=s.a.useState(!0),t=Object(b.a)(e,2),n=t[0],a=t[1],i=ke();return Object(ae.jsxs)(m.a,{className:i.appContainer,disableGutters:!0,children:[Object(ae.jsx)(O.a,{}),Object(ae.jsx)(h.a,{className:i.appBar,position:"fixed",children:Object(ae.jsxs)(x.a,{children:[Object(ae.jsx)(v.a,{onClick:function(){return a(!n)},edge:"start",children:Object(ae.jsx)(w.a,{})}),Object(ae.jsx)(f.a,{variant:"h6",children:"GNOME-ish Todo"})]})}),Object(ae.jsxs)(g.a,{anchor:"left",classes:{root:n?i.drawerOpen:i.drawerClose,paper:i.drawerPaper},open:n,variant:"persistent",children:[Object(ae.jsx)(x.a,{}),Object(ae.jsx)(he,{})]}),Object(ae.jsxs)(D.a,{m:3,width:"100%",children:[Object(ae.jsx)(x.a,{}),Object(ae.jsxs)(N.c,{children:[Object(ae.jsx)(N.a,{exact:!0,path:be,children:Object(ae.jsx)(Ie,{})}),Object(ae.jsx)(N.a,{path:pe,children:Object(ae.jsx)(le,{})})]})]})]})},Te=Object(I.a)({reducer:F}),Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,268)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},Ae=n(150),He=Object(Ae.a)({palette:{type:"dark"},props:{MuiTextField:{margin:"dense",variant:"outlined"},MuiButton:{size:"small",variant:"outlined"}}});d.a.render(Object(ae.jsx)(s.a.StrictMode,{children:Object(ae.jsx)(u.a,{store:Te,children:Object(ae.jsx)(j.a,{children:Object(ae.jsx)(r.a,{theme:He,children:Object(ae.jsx)(c.a,{utils:i.a,children:Object(ae.jsx)(Me,{})})})})})}),document.getElementById("root")),Se()}},[[211,1,2]]]);
//# sourceMappingURL=main.f6ca3889.chunk.js.map