(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{Txvc:function(e,a,t){"use strict";t.r(a);t("T2oS");var n,l,i,r=t("W9HT"),c=(t("IzEo"),t("bx4M")),o=(t("+L6B"),t("2/Rp")),m=(t("BoS7"),t("Sdc0")),s=(t("giR+"),t("fyUT")),d=(t("7Kak"),t("9yH6")),f=(t("/zsF"),t("PArb")),g=(t("nRaC"),t("5RzL")),p=(t("14J3"),t("BMrR")),u=(t("jCWc"),t("kPKH")),h=(t("5NDa"),t("5rEg")),b=(t("y8nQ"),t("Vl3Y")),E=t("jehZ"),x=t.n(E),y=(t("Znn+"),t("ZTPi")),v=t("2Taf"),j=t.n(v),M=t("vZ4D"),O=t.n(M),C=t("l4Ni"),w=t.n(C),k=t("ujKo"),I=t.n(k),V=t("MhPg"),P=t.n(V),A=t("q1tI"),S=t.n(A),D=t("MuoO"),R=t("LLXN"),N=(t("Q9mQ"),t("diRs")),L=(t("+BJd"),t("mr32")),q=t("WFjJ"),F=function(e){function a(){var e,t;j()(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return t=w()(this,(e=I()(a)).call.apply(e,[this].concat(l))),t.handleChangeComplete=function(e){var a=t.props.onChange;a(e.hex)},t}return P()(a,e),O()(a,[{key:"render",value:function(){var e=this.props.value,a=["#f5222d","#fa541c","#ffad14","#13c2c2","#52c41a","#1890ff","#2f54eb","#722ed1","#f47373","#697689","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"];return S.a.createElement("span",null,S.a.createElement(N["a"],{placement:"bottom",content:S.a.createElement(q["BlockPicker"],{color:e,colors:a,onChangeComplete:this.handleChangeComplete}),trigger:"click"},S.a.createElement(L["a"],{color:e,style:{width:"90px",height:"30px",textAlign:"center",lineHeight:"30px"}},e)))}}]),a}(A["Component"]),T=F,B=t("v99g"),K=t("zX7x"),z=(t("Pwec"),t("CtXQ")),J=function(e){function a(){var e,t;j()(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return t=w()(this,(e=I()(a)).call.apply(e,[this].concat(l))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,l={level:0,prefix:"",key:"",expired:3600};n.push(l),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,l=a.value;l.splice(e,1),n(l)}},t.setLevel=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].level=a,l(i)}},t.setPrefix=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].prefix=a.target.value,l(i)}},t.setKey=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].key=a.target.value,l(i)}},t.setExpired=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].expired=a.target.value,l(i)}},t}return P()(a,e),O()(a,[{key:"render",value:function(){var e=this,a=(h["a"].Search,this.props.value),t=void 0===a?[]:a,n=t.map(function(a,t){return S.a.createElement("span",null,S.a.createElement(p["a"],{type:"flex",justify:"start",align:"top"},S.a.createElement(u["a"],{md:3,style:{display:"flex",alignItems:"center"}},S.a.createElement(s["a"],{value:a.level,placeholder:Object(R["formatMessage"])({id:"config.player.level"}),size:"large",onChange:e.setLevel(t),style:{width:"100%"}})),S.a.createElement(u["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},S.a.createElement(z["a"],{type:"close-circle",onClick:e.remove(t)})),S.a.createElement(u["a"],{md:20,style:{borderLeft:"dashed 1px rgba(0,0,0,0.2)",paddingLeft:"16px"}},S.a.createElement(p["a"],null,S.a.createElement(u["a"],{span:10},S.a.createElement(h["a"],{value:a.prefix,placeholder:Object(R["formatMessage"])({id:"config.player.prefix"}),onChange:e.setPrefix(t)})),S.a.createElement(u["a"],{span:6,offset:1},S.a.createElement(h["a"],{value:a.key,placeholder:Object(R["formatMessage"])({id:"config.player.key"}),onChange:e.setKey(t)})),S.a.createElement(u["a"],{span:6,offset:1},S.a.createElement(h["a"],{value:a.expired,placeholder:Object(R["formatMessage"])({id:"config.player.expired"}),onChange:e.setExpired(t)}))))),S.a.createElement(f["a"],null))});return S.a.createElement("div",null,n,S.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},S.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},S.a.createElement(z["a"],{type:"plus"})," ",Object(R["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(A["Component"]),H=J,Q=t("+n12"),Z=function(e){function a(){var e,t;j()(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return t=w()(this,(e=I()(a)).call.apply(e,[this].concat(l))),t.add=function(){var e=t.props,a=e.onChange,n=e.value,l={pattern:"",prefix:""};n.push(l),a(n)},t.remove=function(e){return function(){var a=t.props,n=a.onChange,l=a.value;l.splice(e,1),n(l)}},t.setPattern=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].pattern=a.target.value,l(i)}},t.setPrefix=function(e){return function(a){var n=t.props,l=n.onChange,i=n.value;i[e].prefix=a.target.value,l(i)}},t}return P()(a,e),O()(a,[{key:"render",value:function(){var e=this,a=this.props.value,t=void 0===a?[]:a,n=t.map(function(a,t){return S.a.createElement("span",null,S.a.createElement(p["a"],{type:"flex",justify:"start",align:"top"},S.a.createElement(u["a"],{md:10},S.a.createElement(h["a"],{value:a.pattern,placeholder:Object(R["formatMessage"])({id:"config.jiexi.pattern"}),onChange:e.setPattern(t)})),S.a.createElement(u["a"],{md:12,offset:1},S.a.createElement(h["a"],{value:a.prefix,placeholder:Object(R["formatMessage"])({id:"config.jiexi.url"}),onChange:e.setPrefix(t)})),S.a.createElement(u["a"],{md:1,style:{display:"flex",justifyContent:"center",alignItems:"center",height:"40px"}},S.a.createElement(z["a"],{type:"close-circle",onClick:e.remove(t)}))),S.a.createElement(f["a"],null))});return S.a.createElement("div",null,n,S.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},S.a.createElement(o["a"],{type:"dashed",onClick:this.add,style:{width:"160px",height:"40px",marginBottom:"16px"}},S.a.createElement(z["a"],{type:"plus"})," ",Object(R["formatMessage"])({id:"config.jiexi.add"}))))}}]),a}(A["Component"]),W=Z,X=(n=Object(D["connect"])(function(e){var a=e.config,t=e.category,n=e.loading;return{config:a,category:t,loading:n.models.config}}),n((i=function(e){function a(){var e,t;j()(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return t=w()(this,(e=I()(a)).call.apply(e,[this].concat(l))),t.handleSubmit=function(e){e.preventDefault();var a=t.props,n=a.dispatch,l=a.form;l.validateFields(function(e,a){e||n({type:"config/postConfig",payload:{data:a}})})},t.initData=function(){var e=t.props.dispatch;e({type:"config/getConfig",payload:{query:{}}})},t}return P()(a,e),O()(a,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=y["a"].TabPane,a=this.props.form.getFieldDecorator,t=this.props,n=t.loading,l=t.config.data,i=t.category,E=i.kind,v=i.post,j=i.comic,M=Object(Q["h"])(E),O=Object(Q["h"])(v),C=Object(Q["h"])(j),w=[{title:"\u9884\u7f6e",key:"init",value:"init1639732",disabled:!0,children:[{title:"\u64ad\u653e\u6700\u9ad8(\u89c6\u9891)",key:"newIndexPlayAnimate",value:"newIndexPlayAnimate"},{title:"\u8bc4\u5206\u6700\u9ad8(\u89c6\u9891)",key:"newIndexRateAnimate",value:"newIndexRateAnimate"},{title:"\u65b0\u756a\u8fde\u8f7d(\u89c6\u9891)",key:"newIndexNewAnimate",value:"newIndexNewAnimate"},{title:"\u968f\u673a\u63a8\u8350(\u89c6\u9891)",key:"newIndexRandomAnimate",value:"newIndexRandomAnimate"},{title:"\u64ad\u653e\u6700\u9ad8(\u6f2b\u753b)",key:"newIndexPlayComic",value:"newIndexPlayComic"},{title:"\u8bc4\u5206\u6700\u9ad8(\u6f2b\u753b)",key:"newIndexRateComic",value:"newIndexRateComic"},{title:"\u65b0\u756a\u8fde\u8f7d(\u6f2b\u753b)",key:"newIndexNewComic",value:"newIndexNewComic"},{title:"\u968f\u673a\u63a8\u8350(\u6f2b\u753b)",key:"newIndexRandomComic",value:"newIndexRandomComic"}]},{title:"\u89c6\u9891",key:"animate",value:"init1639733",disabled:!0,children:M},{title:"\u6f2b\u753b",key:"comic",value:"init1639734",disabled:!0,children:C}],k=[{title:"\u9884\u7f6e",key:"init",value:"init1639732",disabled:!0,children:[{title:"\u65b0\u756a",key:"newAnimate",value:"newAnimate"},{title:"\u65b0\u6f2b",key:"newComic",value:"newComic"},{title:"\u52a8\u6001",key:"newDiscuss",value:"newDiscuss"},{title:"\u5546\u54c1",key:"newShop",value:"newShop"}]},{title:"\u89c6\u9891",key:"animate",value:"init1639733",disabled:!0,children:M},{title:"\u6f2b\u753b",key:"comic",value:"init1639734",disabled:!0,children:C},{title:"\u6587\u7ae0",key:"post",value:"init1639735",disabled:!0,children:O}],I={labelCol:{lg:{span:2}},wrapperCol:{lg:{span:18,offset:1},xl:{span:14,offset:1},xxl:{span:10,offset:1}}},V={xs:24,sm:24,md:24,lg:24,xl:12},P={labelCol:{span:4},wrapperCol:{span:18,offset:1}};return S.a.createElement(B["a"],null,S.a.createElement(r["a"],{tip:"Loading...",spinning:!!n},S.a.createElement(b["a"],{onSubmit:this.handleSubmit},S.a.createElement(c["a"],{bordered:!1},S.a.createElement(y["a"],{defaultActiveKey:"1"},S.a.createElement(e,{tab:Object(R["formatMessage"])({id:"common.baseinfo"}),key:"1"},S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.color"}),extra:Object(R["formatMessage"])({id:"config.color.extra"})}),a("color",{initialValue:l.color||"#22194d"})(S.a.createElement(T,null))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.name"}),extra:Object(R["formatMessage"])({id:"config.name.extra"})}),a("name",{initialValue:l.name})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.name"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.slogan"}),extra:Object(R["formatMessage"])({id:"config.slogan.extra"})}),a("slogan",{initialValue:l.slogan})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.slogan"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.information"}),extra:Object(R["formatMessage"])({id:"config.information.extra"})}),a("information",{initialValue:l.information})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.information"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.qq"})}),a("qq",{initialValue:l.qq})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.qq"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.email"})}),a("email",{initialValue:l.email})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.email"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.app"})}),a("app",{initialValue:l.app})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.app"})})))),S.a.createElement(e,{tab:Object(R["formatMessage"])({id:"config.image.setting"}),key:"2"},S.a.createElement(p["a"],null,S.a.createElement(u["a"],V,S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.pc.headimg"}),extra:Object(R["formatMessage"])({id:"config.pc.headimg.extra"})}),a("headimg",{initialValue:l.headimg})(S.a.createElement(K["a"],{type:"config",width:400,height:160}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.pc.loginimg"}),extra:Object(R["formatMessage"])({id:"config.pc.loginimg.extra"})}),a("loginimg",{initialValue:l.loginimg})(S.a.createElement(K["a"],{type:"config",width:400,height:240}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.user.background"}),extra:Object(R["formatMessage"])({id:"config.user.background.extra"})}),a("background",{initialValue:l.background})(S.a.createElement(K["a"],{type:"config",width:400,height:160})))),S.a.createElement(u["a"],V,S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.mobile.headimg"}),extra:Object(R["formatMessage"])({id:"config.mobile.headimg.extra"})}),a("mobleimg",{initialValue:l.mobleimg})(S.a.createElement(K["a"],{type:"config",width:240,height:400}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.user.avatar"}),extra:Object(R["formatMessage"])({id:"config.user.avatar.extra"})}),a("avatar",{initialValue:l.avatar})(S.a.createElement(K["a"],{type:"config"})))))),S.a.createElement(e,{tab:Object(R["formatMessage"])({id:"config.page.setting"}),key:"3"},S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.header.pc.menu"}),extra:Object(R["formatMessage"])({id:"config.header.pc.menu.extra"})}),a("pcMenu",{initialValue:l.pcMenu||[]})(S.a.createElement(g["a"],{treeData:k,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(R["formatMessage"])({id:"config.header.menu.select"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.index.pc.menu"}),extra:Object(R["formatMessage"])({id:"config.index.pc.menu.extra"})}),a("pcIndex",{initialValue:l.pcIndex||[]})(S.a.createElement(g["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(R["formatMessage"])({id:"config.header.menu.select"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.header.h5.menu"}),extra:Object(R["formatMessage"])({id:"config.header.h5.menu.extra"})}),a("h5Menu",{initialValue:l.h5Menu||[]})(S.a.createElement(g["a"],{treeData:k,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(R["formatMessage"])({id:"config.header.menu.select"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.index.h5.menu"}),extra:Object(R["formatMessage"])({id:"config.index.h5.menu.extra"})}),a("h5Index",{initialValue:l.h5Index||[]})(S.a.createElement(g["a"],{treeData:w,showSearch:!0,treeNodeFilterProp:"title",treeDefaultExpandAll:!0,allowClear:!0,multiple:!0,placeholder:Object(R["formatMessage"])({id:"config.header.menu.select"})})))),S.a.createElement(e,{tab:Object(R["formatMessage"])({id:"config.player.setting"}),key:"4"},S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.player.limit"}),extra:Object(R["formatMessage"])({id:"config.player.limit.extra"})}),a("playLimit",{initialValue:l.playLimit||[]})(S.a.createElement(H,null))),S.a.createElement(f["a"],null),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.player.jiexi"}),extra:Object(R["formatMessage"])({id:"config.player.jiexi.extra"})}),a("jiexi",{initialValue:l.jiexi||[]})(S.a.createElement(W,null)))),S.a.createElement(e,{tab:Object(R["formatMessage"])({id:"config.email.setting"}),key:"5"},S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.email.type"}),extra:Object(R["formatMessage"])({id:"config.email.type.extra"})}),a("emailSetting.type",{initialValue:l.emailSetting.type||"smtp"})(S.a.createElement(d["a"].Group,null,S.a.createElement(d["a"],{value:"smtp"},"smtp"),S.a.createElement(d["a"],{value:"sendgrid"},"sendgrid")))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.email.name"})}),a("emailSetting.name",{initialValue:l.emailSetting.name||""})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.email.name"})}))),S.a.createElement(b["a"].Item,x()({},I,{label:Object(R["formatMessage"])({id:"config.email.sender"})}),a("emailSetting.sender",{initialValue:l.emailSetting.sender||""})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.email.sender"})}))),S.a.createElement(p["a"],{type:"flex"},S.a.createElement(u["a"],{xs:23,lg:11},S.a.createElement(f["a"],{orientation:"left"},"smtp"),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.smtp.port"})}),a("smtp.port",{initialValue:l.smtp.port||465})(S.a.createElement(s["a"],{placeholder:"port"}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.smtp.secure"})}),a("smtp.secure",{initialValue:l.smtp.secure||!1,valuePropName:"checked"})(S.a.createElement(m["a"],null))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.smtp.host"}),extra:Object(R["formatMessage"])({id:"config.smtp.host.extra"})}),a("smtp.host",{initialValue:l.smtp.host||""})(S.a.createElement(h["a"],{placeholder:"host"}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.smtp.user.name"})}),a("smtp.user",{initialValue:l.smtp.user||""})(S.a.createElement(h["a"],{placeholder:Object(R["formatMessage"])({id:"config.smtp.user.name"})}))),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.smtp.user.pass"})}),a("smtp.pass",{initialValue:l.smtp.pass||""})(S.a.createElement(h["a"],{type:"password",placeholder:Object(R["formatMessage"])({id:"config.smtp.user.pass"})})))),S.a.createElement(u["a"],{xs:23,lg:11,offset:1},S.a.createElement(f["a"],{orientation:"left"},"sendgrid"),S.a.createElement(b["a"].Item,x()({},P,{label:Object(R["formatMessage"])({id:"config.sendgrid.key"})}),a("sendgrid.key",{initialValue:l.sendgrid.key||""})(S.a.createElement(h["a"],{placeholder:"key"}))))))),S.a.createElement(f["a"],null),S.a.createElement(p["a"],{type:"flex",justify:"center",align:"middle"},S.a.createElement(o["a"],{type:"primary",htmlType:"submit"},Object(R["formatMessage"])({id:"config.save"})))))))}}]),a}(A["Component"]),l=i))||l);a["default"]=b["a"].create()(X)}}]);