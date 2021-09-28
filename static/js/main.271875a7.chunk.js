(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,a,t){e.exports=t(136)},125:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(48),m=t.n(u),d=(t(124),t(125),t(62)),b=t(17),p=t(113),v=t(27),g=t.n(v),k=t(40),E=t(19),h=t(139),f=t(140),w=t(147),O=t(103),j=t(141),y=t(142),S=t(152),I=t(99),x=t(100),C=t(89),B=t.n(C),F=new(function(){function e(){Object(I.a)(this,e)}return Object(x.a)(e,[{key:"getProfile",value:function(){return B()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return B()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),L=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},T=t(145),N=t(56),_=t(41),q=Object(_.a)(n||(n=Object(N.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        email\n        username\n      }\n    }\n  }\n"]))),$=Object(_.a)(r||(r=Object(N.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),P=Object(_.a)(o||(o=Object(N.a)(["\n  mutation saveBook($bookBody: BookInput!) {\n    saveBook(bookBody: $bookBody) {\n      _id\n      username\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),D=Object(_.a)(l||(l=Object(N.a)(["\n  mutation removeBook($bookId: String!) {\n    removeBook(bookId: $bookId) {\n      _id\n      username\n      bookCount\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),G=function(){var e=Object(i.useState)([]),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(E.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(E.a)(u,2),d=m[0],b=m[1],v=Object(T.a)(P),I=Object(E.a)(v,1)[0];Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var x=function(){var e=Object(k.a)(g.a.mark((function e(a){var t,r,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description||"No description to display",image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(k.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find((function(e){return e.bookId===a})),e.prev=1,e.next=4,I({variables:{bookBody:n}});case 4:b([].concat(Object(p.a)(d),[n.bookId])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(w.a,{onSubmit:x},s.a.createElement(w.a.Row,null,s.a.createElement(O.a,{xs:12,md:8},s.a.createElement(w.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(O.a,{xs:12,md:4},s.a.createElement(j.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(f.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(y.a,null,t.map((function(e){return s.a.createElement(S.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(S.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(S.a.Body,null,s.a.createElement(S.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(S.a.Text,null,e.description),F.loggedIn()&&s.a.createElement(j.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return C(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},U=t(150),V=Object(_.a)(c||(c=Object(N.a)(["\n  query {\n    me {\n      _id\n      username\n      bookCount\n      savedBooks {\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),Y=function(){var e=Object(i.useState)({}),a=Object(E.a)(e,1)[0],t=Object(U.a)(V),n=t.loading,r=t.data,o=Object(T.a)(D),l=Object(E.a)(o,1)[0],c=function(){var e=Object(k.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l({variables:{bookId:t}});case 3:n=e.sent,r=n.data,a(r),L(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return n?s.a.createElement("h2",null,"LOADING..."):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(f.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(f.a,null,s.a.createElement("div",null,s.a.createElement("h2",null,r.me.savedBooks.length?"Viewing ".concat(r.me.savedBooks.length," saved ").concat(1===r.me.savedBooks.length?"book":"books",":"):"You have no saved books!")),s.a.createElement(y.a,null,r.me.savedBooks.map((function(e){return s.a.createElement(S.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(S.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(S.a.Body,null,s.a.createElement(S.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(S.a.Text,null,e.description),s.a.createElement(j.a,{className:"btn-block btn-danger",onClick:function(){return c(e.bookId)}},"Delete this Book!")))})))))},J=t(149),K=t(148),z=t(146),A=t(151),M=t(60),H=t(51),R=t(143),W=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(T.a)($),b=Object(E.a)(d,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(H.a)(Object(H.a)({},t),{},Object(M.a)({},r,o)))},v=function(){var e=Object(k.a)(g.a.mark((function e(a){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(H.a)({},t)});case 6:r=e.sent,o=r.data,F.login(o.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:p,value:t.username,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},Q=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(E.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(E.a)(l,2),u=c[0],m=c[1],d=Object(T.a)(q),b=Object(E.a)(d,1)[0],p=function(e){var a=e.target,r=a.name,o=a.value;n(Object(H.a)(Object(H.a)({},t),{},Object(M.a)({},r,o)))},v=function(){var e=Object(k.a)(g.a.mark((function e(a){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,b({variables:Object(H.a)({},t)});case 6:r=e.sent,o=r.data,F.login(o.login.token),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:n({username:"",email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(w.a,{noValidate:!0,validated:o,onSubmit:v},s.a.createElement(R.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(w.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:p,value:t.email,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(w.a.Group,null,s.a.createElement(w.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(w.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:p,value:t.password,required:!0}),s.a.createElement(w.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(j.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},X=function(){var e=Object(i.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(J.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(f.a,{fluid:!0},s.a.createElement(J.a.Brand,{as:d.b,to:"/"},"Google Books Search"),s.a.createElement(J.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(J.a.Collapse,{id:"navbar"},s.a.createElement(K.a,{className:"ml-auto"},s.a.createElement(K.a.Link,{as:d.b,to:"/"},"Search For Books"),F.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(K.a.Link,{as:d.b,to:"/saved"},"See Your Books"),s.a.createElement(K.a.Link,{onClick:F.logout},"Logout")):s.a.createElement(K.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(z.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(A.a.Container,{defaultActiveKey:"login"},s.a.createElement(z.a.Header,{closeButton:!0},s.a.createElement(z.a.Title,{id:"signup-modal"},s.a.createElement(K.a,{variant:"pills"},s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"login"},"Login")),s.a.createElement(K.a.Item,null,s.a.createElement(K.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(z.a.Body,null,s.a.createElement(A.a.Content,null,s.a.createElement(A.a.Pane,{eventKey:"login"},s.a.createElement(Q,{handleModalClose:function(){return n(!1)}})),s.a.createElement(A.a.Pane,{eventKey:"signup"},s.a.createElement(W,{handleModalClose:function(){return n(!1)}})))))))},Z=t(144),ee=new(t(112).a)({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var ae=function(){return s.a.createElement(Z.a,{client:ee},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(X,null),s.a.createElement(b.c,null,s.a.createElement(b.a,{exact:!0,path:"/",component:G}),s.a.createElement(b.a,{exact:!0,path:"/saved",component:Y}),s.a.createElement(b.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ae,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.271875a7.chunk.js.map