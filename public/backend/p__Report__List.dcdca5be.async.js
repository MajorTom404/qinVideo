(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{mIg0:function(e,t,a){"use strict";a.r(t);a("IzEo");var n,r,o,i=a("bx4M"),s=(a("g9YV"),a("wCAj")),l=(a("14J3"),a("BMrR")),c=(a("jCWc"),a("kPKH")),d=(a("+L6B"),a("2/Rp")),u=(a("/zsF"),a("PArb")),p=(a("Awhp"),a("KrTs")),m=(a("2qtc"),a("kLXV")),f=a("p0pE"),h=a.n(f),y=a("2Taf"),g=a.n(y),b=a("vZ4D"),O=a.n(b),M=a("l4Ni"),j=a.n(M),v=a("ujKo"),w=a.n(v),E=a("rlhR"),R=a.n(E),C=a("MhPg"),k=a.n(C),I=(a("5NDa"),a("5rEg")),S=a("q1tI"),q=a.n(S),x=a("MuoO"),D=a("LLXN"),A=a("wd/R"),K=a.n(A),z=(a("y8nQ"),a("Vl3Y")),B=a("jehZ"),N=a.n(B),T=(a("OaEy"),a("2fM7")),V=(a("7Q2D"),a("XII7")),Y=I["a"].TextArea,L=T["a"].Option,P=function(e){function t(){var e,a;g()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=j()(this,(e=w()(t)).call.apply(e,[this].concat(r))),a.state={show:!1,data:{}},a.handleSubmit=function(){var e=a.state.data,t=a.props,n=t.form,r=t.submit;n.validateFields(function(t,a){t||(a.target&&(a.target=a.target.key,a.onModel="Animate"),r(h()({},e,a)))})},a.handleCancel=function(){var e=a.props.cancel;a.setState({show:!1,data:{}}),e&&e()},a.modalShow=function(e){var t=e.type,n=e.data;a.setState({show:!0,data:h()({type:t},n)})},a}return k()(t,e),O()(t,[{key:"render",value:function(){var e=this.state,t=e.show,a=e.data,n=this.props.form.getFieldDecorator,r={labelCol:{span:4},wrapperCol:{span:18}},o="many"!==a.type&&"all"!==a.type,i="reply"===a.type;return q.a.createElement(m["a"],{title:Object(D["formatMessage"])({id:"common.edit"}),visible:t,maskClosable:!1,forceRender:"true",onOk:this.handleSubmit,onCancel:this.handleCancel,destroyOnClose:!0},q.a.createElement(z["a"],null,"new"===a.type&&q.a.createElement(z["a"].Item,N()({},r,{label:Object(D["formatMessage"])({id:"report.target"})}),n("target",{initialValue:void 0})(q.a.createElement(V["a"],null))),o&&!i&&q.a.createElement(z["a"].Item,N()({},r,{label:Object(D["formatMessage"])({id:"report.content"})}),n("content",{initialValue:a.content||""})(q.a.createElement(Y,{rows:4}))),q.a.createElement(z["a"].Item,N()({},r,{label:Object(D["formatMessage"])({id:"shop.status"})}),n("status",{initialValue:a.status||"draft",rules:[{required:!0,message:Object(D["formatMessage"])({id:"shop.status"})}]})(q.a.createElement(T["a"],{placeholder:Object(D["formatMessage"])({id:"shop.status.extra"})},q.a.createElement(L,{value:"draft"},Object(D["formatMessage"])({id:"common.draft"})),q.a.createElement(L,{value:"publish"},Object(D["formatMessage"])({id:"common.publish"})),q.a.createElement(L,{value:"reject"},Object(D["formatMessage"])({id:"common.reject"})))))))}}]),t}(S["PureComponent"]),_=z["a"].create()(P),F=a("ZeOv"),H=I["a"].Search,J=(n=Object(x["connect"])(function(e){var t=e.report,a=e.loading;return{report:t,loading:a.models.report}}),n((o=function(e){function t(e){var a;g()(this,t),a=j()(this,w()(t).call(this,e)),a.editRef=q.a.createRef(null),a.submit=function(e){var t=a.props.dispatch,n=a.state.selectedRowKeys,r=e.type;if("many"===r||"all"===r||"one"===r||"reply"===r){var o="one"===r||"reply"===r?[e.id]:"all"===r?[]:n;t({type:"report/putReportBatch",payload:{data:h()({},e,{ids:o})}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})}else t({type:"report/postReport",payload:{data:h()({},e)}}).then(function(e){e&&a.editRef.handleCancel(),a.initData()})},a.editNew=function(){a.edit({type:"new",data:{}})},a.editReply=function(e){a.edit({type:"reply",data:{content:e.content,status:e.status,reply:e.reply,image:e.image,id:e._id}})},a.editOne=function(e){var t={content:e.content,status:e.status,reply:e.reply,image:e.image,id:e._id};a.edit({type:"one",data:t})},a.editMany=function(){a.edit({type:"many"})},a.editAll=function(){a.edit({type:"all"})},a.edit=function(e){var t=e.type,n=e.data;a.editRef.modalShow({type:t,data:n})},a.deleteMany=function(){var e=a.state.selectedRowKeys;a.destroy(e)},a.deleteAll=function(){a.destroy([])},a.deleteOne=function(e){return function(){a.destroy([e])}},a.destroy=function(e){var t=a.props.dispatch;m["a"].confirm({title:Object(D["formatMessage"])({id:"report.list.delete.report"}),content:Object(D["formatMessage"])({id:"common.delete.tips"}),okText:Object(D["formatMessage"])({id:"common.confirm"}),cancelText:Object(D["formatMessage"])({id:"common.cancel"}),onOk:function(){return t({type:"report/deleteReportBatch",payload:{data:{ids:e}}}).then(function(e){e&&(a.initData(),a.setState({selectedRowKeys:[]}))})}})},a.onSearchVideo=function(e){a.query.title=e,a.query.page=1,a.initData()},a.onChangeTable=function(e,t,n){var r,o,i=e.current,s=e.pageSize,l=t.status?t.status[0]:null;n.order&&(r="descend"===n.order?-1:1,o=n.field),a.query=h()({},a.query,{size:s,page:i,sortBy:o,sortOrder:r,status:l}),a.initData()},a.initData=function(){var e=R()(a),t=e.query,n=a.props.dispatch;n({type:"report/queryReport",payload:{query:t}});var r=a.props,o=r.location.pathname,i=r.history;i.push({pathname:o,state:a.query})};var n=e.location.state,r=void 0===n?{}:n;return a.state={selectedRowKeys:[]},a.query={title:r.title,size:r.size?r.size:10,page:r.page?r.page:1,sortBy:r.sortBy,sortOrder:r.sortOrder,status:r.status},a}return k()(t,e),O()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,a=this.props,n=a.report,r=n.list,o=n.total,m=a.loading,f=r.map(function(e){return e.children&&e.children.length>0?e.countChild=e.children.length:(delete e.children,e.countChild=0),e}),h=[{title:Object(D["formatMessage"])({id:"report.target"}),dataIndex:"target",render:function(e){return e?e.title||e.name||e.content:Object(D["formatMessage"])({id:"common.deleted"})}},{title:Object(D["formatMessage"])({id:"report.type"}),dataIndex:"onModel",render:function(e){return Object(D["formatMessage"])({id:"report.type.".concat(e)})}},{title:Object(D["formatMessage"])({id:"report.author"}),dataIndex:"author.name",sorter:!0},{title:Object(D["formatMessage"])({id:"report.content"}),dataIndex:"content",render:function(e){return e.slice(0,50)}},{title:Object(D["formatMessage"])({id:"report.status"}),dataIndex:"status",filters:Object.values(F["g"]),filterMultiple:!1,render:function(e){return q.a.createElement(p["a"],{status:F["g"][e].badge,text:F["g"][e].text})}},{title:Object(D["formatMessage"])({id:"report.createdAt"}),dataIndex:"createdAt",sorter:!0,render:function(e){return K()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(D["formatMessage"])({id:"report.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,a){return q.a.createElement("span",null,q.a.createElement("a",{onClick:function(){return e.editReply(a)}},Object(D["formatMessage"])({id:"common.reply"})),q.a.createElement(u["a"],{type:"vertical"}),q.a.createElement("a",{onClick:e.deleteOne(t)},Object(D["formatMessage"])({id:"common.delete"})))}}],y={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},g=Object(F["e"])(this.query.page,this.query.size,o);return q.a.createElement(i["a"],{className:"tableList",bordered:!1},q.a.createElement(l["a"],{className:"head"},q.a.createElement(c["a"],{span:16},q.a.createElement(d["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(D["formatMessage"])({id:"common.add.new"})),t.length>0&&q.a.createElement(F["b"],{edit:this.editMany,delete:this.deleteMany}),q.a.createElement(F["a"],{edit:this.editAll,delete:this.deleteAll})),q.a.createElement(c["a"],{span:8},q.a.createElement(H,{placeholder:Object(D["formatMessage"])({id:"report.search"}),onSearch:this.onSearchVideo,enterButton:!0}))),q.a.createElement(l["a"],null,q.a.createElement(s["a"],{className:"longTable",loading:m,rowKey:"_id",rowSelection:y,columns:h,onChange:this.onChangeTable,dataSource:f,pagination:g})),q.a.createElement(_,{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}))}}]),t}(S["Component"]),r=o))||r);t["default"]=J}}]);