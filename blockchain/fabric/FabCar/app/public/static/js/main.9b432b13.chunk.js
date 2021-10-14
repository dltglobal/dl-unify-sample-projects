(this["webpackJsonpfabcar-react-app"]=this["webpackJsonpfabcar-react-app"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),s=a.n(l),c=a(13),o=a(2),i=(a(40),a(9)),u=a(10),m=a(12),p=a(11),d=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Fabcar"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/",className:"nav-link"},"Query All Cars")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/addcar",className:"nav-link"},"Add New Car")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(c.b,{to:"/changeowner",className:"nav-link"},"Change Owner")))))}}]),a}(n.Component),h=a(19),b=a.n(h),v=a(32),E=a(3),f=a(34),w=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).carList=n.carList.bind(Object(E.a)(n)),n.state={cars:{}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/queryallcars",e.next=3,fetch("/api/queryallcars");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),console.log([a.response.proposal_response_payload.extension.response.payload]),this.setState({cars:[a.response.proposal_response_payload.extension.response.payload]}),console.log(this.state),console.log(this.state.cars),console.log(this.state.cars[0]),console.log(JSON.parse(this.state.cars[0]).make);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"carList",value:function(){for(var e=[],t=0;t<this.state.cars.length;t++)e.push(r.a.createElement("tr",null,r.a.createElement("td",null,JSON.parse(this.state.cars[t]).docType),r.a.createElement("td",null,JSON.parse(this.state.cars[t]).make),r.a.createElement("td",null,JSON.parse(this.state.cars[t]).model),r.a.createElement("td",null,JSON.parse(this.state.cars[t]).color),r.a.createElement("td",null,JSON.parse(this.state.cars[t]).owner)));return e}},{key:"render",value:function(){return r.a.createElement("body",{className:"bg_queryAll"},r.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0,className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"CAR ID"),r.a.createElement("th",null,"MAKE"),r.a.createElement("th",null,"MODEL"),r.a.createElement("th",null,"COLOR"),r.a.createElement("th",null,"OWNER"))),r.a.createElement("tbody",null,this.carList())))}}]),a}(n.Component),O=a(15),N=a.n(O),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setCarid=n.setCarid.bind(Object(E.a)(n)),n.setMake=n.setMake.bind(Object(E.a)(n)),n.setModel=n.setModel.bind(Object(E.a)(n)),n.setColor=n.setColor.bind(Object(E.a)(n)),n.setOwner=n.setOwner.bind(Object(E.a)(n)),n.onSubmit=n.onSubmit.bind(Object(E.a)(n)),n.state={carid:"",make:"",model:"",color:"",owner:""},n}return Object(u.a)(a,[{key:"setCarid",value:function(e){this.setState({carid:e.target.value})}},{key:"setMake",value:function(e){this.setState({make:e.target.value})}},{key:"setModel",value:function(e){this.setState({model:e.target.value})}},{key:"setColor",value:function(e){this.setState({color:e.target.value})}},{key:"setOwner",value:function(e){this.setState({owner:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={carid:this.state.carid,make:this.state.make,model:this.state.model,color:this.state.color,owner:this.state.owner};N.a.post("/api/addcar",a).then((function(e){console.log(e.data.response.proposal_response_payload.extension.results.ns_rwset[1].rwset.writes[0].value),t.setState({resp:e.data.response.proposal_response_payload.extension.results.ns_rwset[1].rwset.writes[0].value}),console.log(t.state.resp)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car ID: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"ID of the Car",value:this.state.carid,onChange:this.setCarid})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Make: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Make of Car",value:this.state.make,onChange:this.setMake})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Model: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Model of car.",value:this.state.model,onChange:this.setModel})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Color: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Black",value:this.state.color,onChange:this.setColor})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Owner: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Owner of car",value:this.state.owner,onChange:this.setOwner})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Add New Car",className:"btn btn-primary"})),r.a.createElement("div",null,r.a.createElement("lable",null,"Response, will come here!"),r.a.createElement("p",null,this.state.resp))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).setCarid=n.setCarid.bind(Object(E.a)(n)),n.setNewOwner=n.setNewOwner.bind(Object(E.a)(n)),n.onSubmit=n.onSubmit.bind(Object(E.a)(n)),n.state={carid:"",newowner:""},n}return Object(u.a)(a,[{key:"setCarid",value:function(e){this.setState({carid:e.target.value})}},{key:"setNewOwner",value:function(e){this.setState({newowner:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={carid:this.state.carid,newowner:this.state.newowner};N.a.post("/api/changeowner",t),window.location="/changeowner"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Car ID: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"CAR5",value:this.state.carid,onChange:this.setCarid})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"New Owner: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",placeholder:"Tom",value:this.state.newowner,onChange:this.setNewOwner})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-primary"}))))}}]),a}(n.Component);var k=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(o.a,{path:"/",exact:!0,component:w}),r.a.createElement(o.a,{path:"/addcar",component:y}),r.a.createElement(o.a,{path:"/changeowner",component:g})))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9b432b13.chunk.js.map