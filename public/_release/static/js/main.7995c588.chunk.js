(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(432)},241:function(e,t,a){},243:function(e,t,a){},388:function(e,t){},391:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},417:function(e,t,a){},424:function(e,t,a){},426:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),c=(a(241),a(20)),s=a(21),l=a(23),u=a(22),d=a(24),p=a(435),m=a(436),h=a(433),f=a(434),v=a(30),g=a(16),E=a(154),b=a.n(E),O=(a(243),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.missingPart,a=t._id,n=t.part,o=t.buffer,i=t.module,c=t.date;return r.a.createElement("div",{className:"missing-part-row"},r.a.createElement("div",{className:"missing-part-column mpc-part"}," ",n," "),r.a.createElement("div",{className:"missing-part-column mpc-buffer"}," ",o," "),r.a.createElement("div",{className:"missing-part-column mpc-module"}," ",i," "),r.a.createElement("div",{className:"missing-part-column mpc-date"}," ",b()(c).format("DD/MM - hh:mm")," "),r.a.createElement("div",{className:"missing-part-column"},r.a.createElement(g.a,{color:"primary",variant:"contained",id:a,onClick:function(){return e.props.handleConfirm(e.props.missingPart)}}," CONFIRMAR ")))}}]),t}(n.Component));var w=a(156),S={socketServer:"http://10.8.66.81:8083",apiServer:"http://10.8.66.81:8083"},C=a.n(w)()(S.socketServer);a(391);var k=a(19),j=a.n(k),N=a(31),y=a(32),I=a.n(y);function G(){return L.apply(this,arguments)}function L(){return(L=Object(N.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.apiServer+"/api/groups",e.next=3,I.a.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function R(){return(R=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"/assets/data/stations.json",e.next=3,I.a.get("/assets/data/stations.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e){return P.apply(this,arguments)}function P(){return(P=Object(N.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=S.apiServer+"/api/groups/"+t,e.next=3,I.a.get(a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function _(){return(_=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(S.apiServer+"/api/groups/create");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(){return(A=Object(N.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Deseja mesmo excluir este grupo?")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,I.a.delete(S.apiServer+"/api/groups/"+t);case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function U(){return(U=Object(N.a)(j.a.mark(function e(t,a){var n,r,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t,station:a},r=S.apiServer+"/api/station",e.next=4,I.a.post(r,n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function D(){return(D=Object(N.a)(j.a.mark(function e(t,a){var n,r,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.apiServer+"/api/station",r={data:{_id:t,station:a}},e.next=4,I.a.delete(n,r);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var T=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handlePartEvent=function(e,t){x(a.state.groupId).then(function(e){return a.setState({partList:Object(v.a)(e)})}),t&&(console.log("Data received from socket:",t),t.mute||function(){var e=navigator.userAgent.toLowerCase();if(-1!==e.indexOf("safari"))return e.indexOf("chrome")>-1}()&&(a.beep.load(),a.beep.play()))},a.handleTestButton=function(e){a.beep.play();var t=Object(v.a)(a.state.partList).concat([e]);a.setState({partList:t}),console.log(e)},a.handleConfirm=function(e){var t,n,r=a.state.partList.find(function(t){return t._id===e._id});r||(r={_id:0}),t="confirm part",n=r,C.emit(t,n)};var n,r,o=localStorage.getItem("groupId");return a.audio=window.document.querySelector("audio"),a.beep=window.document.querySelector("#beep"),null===o&&(window.location.href="/config"),a.state={groupId:+o,partList:[]},x(a.state.groupId).then(function(e){return a.setState({partList:Object(v.a)(e)})}),n="list update",r=a.handlePartEvent,C.on(n,function(e){return r(null,e)}),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"group-id-title"}," GRUPO ",this.state.groupId),r.a.createElement("div",{className:"header"},r.a.createElement("div",null," PE\xc7A "),r.a.createElement("div",null," BUFFER "),r.a.createElement("div",null," MODULO "),r.a.createElement("div",null," DATA "),r.a.createElement("div",null,"  ")),r.a.createElement("div",{className:"missing-part-container"},this.state.partList.map(function(t,a){return r.a.createElement(O,{id:a,key:a,missingPart:t,handleConfirm:e.handleConfirm})})))}}]),t}(n.Component),M=(a(413),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,a=this.props,n=a.selectedStation,o=a.selectedGroup;return r.a.createElement("div",{className:"available-groups-container"},r.a.createElement("div",{className:"group-title"}," GRUPOS "),r.a.createElement("div",{className:"groups-container-body"},t.map(function(t,a){return r.a.createElement("div",{key:a,className:"group-wrapper"},r.a.createElement("div",{className:o===t._id?"group-header group-header-selected":"group-header",onClick:function(){return e.props.handleClickedGroup(t._id)}},"GRUPO ",t._id),t.station.map(function(a,i){return r.a.createElement("div",{key:i,className:n===a&&o===t._id?"group-station group-station-selected":"group-station",onClick:function(){return e.props.handleClickedStation(a,t._id)}},a)}))})))}}]),t}(n.Component)),B=(a(415),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={groupId:0,groupList:[]},a.updateGroupId=function(e){a.setState({groupId:e.target.value})},a.handle=function(){},a.saveChanges=function(){localStorage.setItem("groupId",a.state.groupId),window.location.href="/"},localStorage.removeItem("groupId"),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;G().then(function(t){var a=t.sort(function(e,t){return e._id>t._id});e.setState({groupList:Object(v.a)(a)})})}},{key:"render",value:function(){var e=this.state.groupList,t=e.map(function(e,t){return r.a.createElement(g.f,{key:t,value:+e._id},e._id.toString())});return r.a.createElement("div",{className:"config-container"},r.a.createElement("div",{className:"group-selection"},r.a.createElement(g.b,{className:"group-select"},r.a.createElement(g.c,{htmlFor:"group-select"}," SELECIONE UM GRUPO"),r.a.createElement(g.g,{value:this.state.groupId,onChange:this.updateGroupId,inputProps:{name:"group",id:"group-select"}},t)),r.a.createElement(g.a,{color:"primary",variant:"contained",onClick:this.saveChanges},"SALVAR ")),r.a.createElement(M,{items:e,handleClickedGroup:this.handle,handleClickedStation:this.handle}))}}]),t}(n.Component)),F=a(96),W=a.n(F),V=a(97),q=a.n(V),J=(a(417),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={groupId:0,groupList:[],stationList:[],selectedGroup:null,selectedStation:null,newStation:0},a.updateLists=function(){G().then(function(e){var t=e.sort(function(e,t){return e._id>t._id});a.setState({groupList:Object(v.a)(t),selectedGroup:null})}),function(){return R.apply(this,arguments)}().then(function(e){var t=e.sort(function(e,t){return e.id>t.id});a.setState({stationList:Object(v.a)(t),selectedStation:null})})},a.addNewStationToGroup=function(){(function(e,t){return U.apply(this,arguments)})(a.state.selectedGroup,a.state.newStation).then(a.updateLists)},a.removeStationFromGroup=function(){(function(e,t){return D.apply(this,arguments)})(a.state.selectedGroup,a.state.selectedStation).then(a.updateLists)},a.handleNewGroup=function(){(function(){return _.apply(this,arguments)})().then(a.updateLists)},a.handleRemoveGroup=function(){(function(e){return A.apply(this,arguments)})(a.state.selectedGroup).then(a.updateLists)},a.updateNewStation=function(e){a.setState({newStation:+e.target.value})},a.handleClickedGroup=function(e){a.setState({selectedGroup:e,selectedStation:null})},a.handleClickedStation=function(e,t){a.setState({selectedStation:e,selectedGroup:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateLists()}},{key:"render",value:function(){var e=this.state,t=e.groupList,a=e.selectedGroup,n=e.stationList,o=e.selectedStation,i=e.newStation,c=n.map(function(e,t){return r.a.createElement(g.f,{key:t,value:e.id}," ",e.id," ")});return r.a.createElement("div",{className:"edit-group-container"},r.a.createElement("div",{className:"edit-group-button-container"},r.a.createElement("div",{className:"edit-group-button"},r.a.createElement("div",{className:"edit-group-button-title"}," ADICIONAR NOVO GRUPO "),r.a.createElement("div",{className:"edit-group-button-element"},r.a.createElement(g.a,{variant:"fab",style:{background:"limegreen",color:"white"},onClick:this.handleNewGroup},r.a.createElement(W.a,null)))),r.a.createElement("div",{className:"edit-group-button"},r.a.createElement("div",{className:"edit-group-button-title"}," REMOVER GRUPO "),r.a.createElement("div",{className:"edit-group-button-element"},r.a.createElement(g.a,{disabled:null===a,variant:"fab",color:"secondary",onClick:this.handleRemoveGroup},r.a.createElement(q.a,null))))),r.a.createElement("div",{className:"edit-station-container",style:{display:null===a?"":null}},r.a.createElement("div",{className:"edit-station-button-title"},"EDITAR POSTOS"),r.a.createElement(g.b,{className:"edit-station-select"},r.a.createElement(g.g,{value:i,onChange:this.updateNewStation},c)),r.a.createElement("div",{className:"edit-station-button-container"},r.a.createElement(g.a,{variant:"fab",mini:!0,color:"primary",onClick:this.addNewStationToGroup,disabled:null===this.state.selectedGroup},r.a.createElement(W.a,null)),r.a.createElement(g.a,{variant:"fab",mini:!0,color:"secondary",onClick:this.removeStationFromGroup,disabled:null===this.state.selectedStation},r.a.createElement(q.a,null)))),r.a.createElement(M,{handleClickedGroup:this.handleClickedGroup,handleClickedStation:this.handleClickedStation,items:t,stationList:n,selectedStation:o,selectedGroup:a}))}}]),t}(n.Component)),Q=(a(424),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"corridor-map-container"},r.a.createElement("div",{className:"corridor"},r.a.createElement("img",{src:"/assets/images/P27.png",alt:"P27"})),r.a.createElement("div",{className:"corridor"},r.a.createElement("img",{src:"/assets/images/P30.png",alt:"P30"})))}}]),t}(n.Component)),$=(a(426),a(437)),z=a(64),H=a.n(z),K=a(65),X=a.n(K),Y=a(46),Z=a.n(Y),ee=a(66),te=a.n(ee),ae=a(67),ne=a.n(ae),re=a(29),oe=a.n(re),ie=a(157),ce=a.n(ie),se=a(158),le=a.n(se),ue=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleReload=function(){window.location.reload()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.anchorEl,t=Boolean(e);return r.a.createElement("div",{className:"app-bar"},r.a.createElement(H.a,{style:{backgroundColor:"#393840"},position:"sticky"},r.a.createElement(X.a,null,r.a.createElement(te.a,{"aria-label":"Menu","aria-owns":t?"main-menu":null,color:"inherit",onClick:this.handleClick,"aria-haspopup":"true"},r.a.createElement(ce.a,null)),r.a.createElement(ne.a,{id:"main-menu",anchorEl:e,open:t,onClose:this.handleClose},r.a.createElement(oe.a,{onClick:this.handleClose},r.a.createElement(g.d,null,r.a.createElement(le.a,null)),r.a.createElement($.a,{className:"not-selected",activeClassName:"selected",to:"/home"},r.a.createElement(g.e,{primary:"INICIO"}))),r.a.createElement(oe.a,{onClick:this.handleClose},r.a.createElement($.a,{className:"not-selected",activeClassName:"selected",to:"/config"},"DISPOSITIVO")),r.a.createElement(oe.a,{onClick:this.handleClose},r.a.createElement($.a,{className:"not-selected",activeClassName:"selected",to:"/groups"},"GRUPOS")),r.a.createElement(oe.a,{onClick:this.handleClose},r.a.createElement($.a,{className:"not-selected",activeClassName:"selected",to:"/corredores"},"CORREDORES")),r.a.createElement(oe.a,{onClick:this.handleClose},"SOBRE"),r.a.createElement(oe.a,{onClick:this.handleReload},"RECARREGAR")),r.a.createElement(Z.a,{variant:"h6",color:"inherit"},"LOGISTICS CALL"))))}}]),t}(n.Component),de=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={user:localStorage.getItem("user"),groupId:+localStorage.getItem("groupId")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"main-container"},r.a.createElement(ue,null),r.a.createElement("div",{className:"content-container"},r.a.createElement(m.a,null,r.a.createElement(h.a,{path:"/home",component:T}),r.a.createElement(h.a,{path:"/config",component:B}),r.a.createElement(h.a,{path:"/corredores",component:Q}),r.a.createElement(h.a,{path:"/groups",component:J}),null==this.state.groupId?r.a.createElement(f.a,{to:"/config"}):r.a.createElement(f.a,{to:"/home"})))))}}]),t}(n.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(de,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");pe?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):me(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):me(t,e)})}}()}},[[236,2,1]]]);
//# sourceMappingURL=main.7995c588.chunk.js.map