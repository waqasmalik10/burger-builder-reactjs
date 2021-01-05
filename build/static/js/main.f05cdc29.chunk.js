(this["webpackJsonpburger-builder-reactjs"]=this["webpackJsonpburger-builder-reactjs"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return _}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_ORDER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAILED",m="AUTH_START",f="AUTH_SUCCESS",b="AUTH_FAIL",g="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(18),a=function(e,t){var n=!0;return t&&t.required&&(n=""!==e.trim()&&n),t&&t.minLength&&(n=e.trim().length>=5&&n),t&&t.maxLength&&(n=e.trim().length<=5&&n),n};t.b=function(e,t){return Object(r.a)({},e,{},t)}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";var r=n(1),a=n(23),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e(u())}))}},u=function(){return{type:r.f}},l=n(18),s=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},p=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(l.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},h=n(32),m=n.n(h),f=function(e,t){return{type:r.e,idToken:e,userId:t}},b=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},g=function(e){return function(t){setTimeout((function(){t(b())}),1e3*e)}},_=function(e,t,n){return function(a){var o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBtGHiJ0e63A1_PT5lTwSXh5spb1SuiQRQ";n||(o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBtGHiJ0e63A1_PT5lTwSXh5spb1SuiQRQ"),a({type:r.d});var i={email:e,password:t,returnSecureToken:!0};m.a.post(o,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(f(e.data.idToken,e.data.localId)),a(g(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error.message,{type:r.b,error:t}))}))}},v=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));n>new Date?(e(f(t,localStorage.getItem("userId"))),e(g((n.getTime()-(new Date).getTime())/1e3))):e(b())}else e(b())}};n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return _})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return v})),n.d(t,"c",(function(){return E}))},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__wtQXh",BreadTop:"BurgerIngredients_BreadTop__3M2jF",Seeds1:"BurgerIngredients_Seeds1__p7_n-",Seeds2:"BurgerIngredients_Seeds2__1nv0c",Meat:"BurgerIngredients_Meat__1ylfY",Cheese:"BurgerIngredients_Cheese__3qWpp",Salad:"BurgerIngredients_Salad__nySHS",Bacon:"BurgerIngredients_Bacon__3HC-C"}},,,function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://newslink-217605.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(63),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(65),d=n.n(s),p=n(11),h=n(31),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentWillUpdate",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(42),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(66),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(11),d=n(33);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(d.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(68),a=n(0),o=n.n(a),i=n(21),c=n(64),u=n.n(c),l=n(20),s=n.n(l),d=function(e){var t=null;switch(e.type){case"bread-bottom":t=o.a.createElement("div",{className:s.a.BreadBottom});break;case"bread-top":t=o.a.createElement("div",{className:s.a.BreadTop},o.a.createElement("div",{className:s.a.Seeds1}),o.a.createElement("div",{className:s.a.Seeds2}));break;case"meat":t=o.a.createElement("div",{className:s.a.Meat});break;case"cheese":t=o.a.createElement("div",{className:s.a.Cheese});break;case"bacon":t=o.a.createElement("div",{className:s.a.Bacon});break;case"salad":t=o.a.createElement("div",{className:s.a.Salad});break;default:t=null}return t};t.a=Object(i.g)((function(e){var t=Object.keys(e.BurgerIngredients).map((function(t){return Object(r.a)(Array(e.BurgerIngredients[t])).map((function(e,n){return o.a.createElement(d,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients")),o.a.createElement("div",{className:u.a.Burger},o.a.createElement(d,{type:"bread-top"}),t,o.a.createElement(d,{type:"bread-bottom"}))}))},,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},,function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX",active:"NavigationItems_active__3EugU"}},function(e,t,n){e.exports={DrawerToggle:"SideDrawerOpener_DrawerToggle__UpX82"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2WBTT"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},,,function(e,t,n){e.exports=n(97)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),i=n.n(o),c=(n(74),n(4)),u=n(5),l=n(7),s=n(6),d=n(8),p=n(21),h=n(15),m=n(11),f=n(57),b=n.n(f),g=n(37),_=n.n(g),v=n(58),E=n.n(v),O=n(59),y=n.n(O),k=function(e){return a.a.createElement("div",{className:y.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:E.a,alt:"MyBurger"}))},j=n(22),I=n(38),S=n.n(I),C=function(e){return a.a.createElement("li",{className:S.a.NavigationItem},a.a.createElement(j.b,{exact:!0,activeClassName:S.a.active,to:e.link},e.children))},w=n(61),B=n.n(w),T=function(e){return a.a.createElement("ul",{className:B.a.NavigationItems},a.a.createElement(C,{link:"/"},"Burger Builder"),e.isAuthenticated?a.a.createElement(C,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(C,{link:"/logout"},"Logout"):a.a.createElement(C,{link:"/auth"},"Authenticate"))},N=n(62),D=n.n(N),A=function(e){return a.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},R=function(e){return a.a.createElement("header",{className:_.a.Toolbar},a.a.createElement(A,{clicked:e.clicked}),a.a.createElement(k,{height:"50%"}),a.a.createElement("nav",{className:_.a.DesktopOnly},a.a.createElement(T,{isAuthenticated:e.isAuth})))},H=n(27),x=n.n(H),L=n(31),P=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.show&&(t=[x.a.SideDrawer,x.a.Open]),a.a.createElement(m.a,null,a.a.createElement(L.a,{show:e.show,clicked:e.clicked}),a.a.createElement("div",{className:t.join(" "),onClick:e.clicked},a.a.createElement(k,{height:"8%"}),a.a.createElement("nav",null,a.a.createElement(T,{isAuthenticated:e.isAuth}))))},U=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerOpenHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(R,{isAuth:this.props.isAuthenticated,clicked:this.sideDrawerOpenHandler}),a.a.createElement(P,{isAuth:this.props.isAuthenticated,show:this.state.showSideDrawer,clicked:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:b.a.Content},this.props.children))}}]),t}(r.Component),M=Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.idToken}}),(function(e){return{}}))(U),F=n(18),G=n(55),W=n(23),X=n(41),q=n.n(X),Y=n(28),Q=n.n(Y),J=function(e){return a.a.createElement("div",{className:Q.a.BuildControl},a.a.createElement("div",{className:Q.a.Label},e.label),a.a.createElement("button",{onClick:e.removeIngredient,className:Q.a.Less,disabled:e.disabled},"Less"),a.a.createElement("button",{onClick:e.addIngredient,className:Q.a.More},"More"))},z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],K=function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("b",null,"$",e.totalPrice.toFixed(2))),z.map((function(t){return a.a.createElement(J,{addIngredient:function(){return e.addIngredient(t.type)},removeIngredient:function(){return e.removeIngredient(t.type)},disabled:e.disabledInfo[t.type],key:t.label,label:t.label})})),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},e.isAuthenticated?"ORDER NOW":"SIGN UP TO ORDER "))},V=n(33),$=n(34),Z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(m.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delecious burger with the following ingredients: "),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to checkout?"),a.a.createElement($.a,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement($.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ee=n(43),te=n(44),ne=n(16),re=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.updatePurchaseState=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);n.setState({purchaseable:t>0})},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHanlder=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredient()}},{key:"componentWillMount",value:function(){}},{key:"render",value:function(){var e=this,t=Object(F.a)({},this.props.ing);for(var n in t)t[n]=t[n]<=0;var r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded"):a.a.createElement(ee.a,null),o=null;return this.props.ing&&(r=a.a.createElement(m.a,null,a.a.createElement(G.a,{BurgerIngredients:this.props.ing}),a.a.createElement(K,{addIngredient:function(t){return e.props.onIngredientAdded(t)},removeIngredient:function(t){return e.props.onIngredientRemoved(t)},disabledInfo:t,totalPrice:this.props.totPrice,purchaseable:this.props.purchaseable,ordered:this.purchaseHandler,isAuthenticated:this.props.isAuthenticated})),o=a.a.createElement(Z,{ingredients:this.props.ing,purchaseContinued:this.purchaseContinueHandler,purchaseCancelled:this.purchaseCancelHanlder,price:this.props.totPrice})),a.a.createElement(m.a,null,a.a.createElement(V.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHanlder},o),r)}}]),t}(r.Component),ae=Object(h.b)((function(e){return{ing:e.burgerBuilder.ingredients,totPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,purchaseable:e.burgerBuilder.purchaseable,isAuthenticated:null!==e.auth.idToken}}),(function(e){return{onIngredientAdded:function(t){return e(ne.a(t))},onIngredientRemoved:function(t){return e(ne.i(t))},onInitIngredient:function(){return e(ne.e())},onInitPurchase:function(){return e(ne.h())},onSetAuthRedirectPath:function(t){return e(ne.j(t))}}}))(Object(te.a)(re,W.a)),oe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),t}(r.Component),ie=Object(h.b)(null,(function(e){return{onLogout:function(){return e(ne.f())}}}))(oe),ce=function(e){return function(t){function n(){var e,t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(d.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},ue=ce((function(){return n.e(3).then(n.bind(null,105))})),le=ce((function(){return n.e(5).then(n.bind(null,106))})),se=ce((function(){return n.e(4).then(n.bind(null,104))})),de=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/auth",component:se}),a.a.createElement(p.b,{path:"/",exact:!0,component:ae}),a.a.createElement(p.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/checkout",component:ue}),a.a.createElement(p.b,{path:"/orders",component:le}),a.a.createElement(p.b,{path:"/logout",component:ie}),a.a.createElement(p.b,{path:"/auth",component:se}),a.a.createElement(p.b,{path:"/",exact:!0,component:ae}),a.a.createElement(p.a,{to:"/"}))),a.a.createElement(M,null,e)}}]),t}(r.Component),pe=Object(p.g)(Object(h.b)((function(e){return{isAuthenticated:null!==e.auth.idToken}}),(function(e){return{onTryAutoSignup:function(){return e(ne.c())}}}))(de));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(24),me=n(67),fe=n(25),be=n(1),ge=n(3),_e={ingredients:null,totalPrice:4,error:!1,purchaseable:!1,building:!1},ve={salad:.5,cheese:.4,meat:1.3,bacon:.6},Ee=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},Oe=function(e,t){var n=Object(F.a)({},e.ingredients,Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),r={ingredients:n,totalPrice:e.totalPrice+ve[t.ingredientName],purchaseable:Ee(n),building:!0};return Object(ge.b)(e,r)},ye=function(e,t){var n=Object(F.a)({},e.ingredients,Object(fe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),r={ingredients:n,totalPrice:e.totalPrice-ve[t.ingredientName],purchaseable:Ee(n),building:!0};return Object(ge.b)(e,r)},ke=function(e,t){var n={ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1};return Object(ge.b)(e,n)},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return Oe(e,t);case be.n:return ye(e,t);case be.p:return ke(e,t);case be.f:return Object(ge.b)(e,{error:!0});default:return e}},Ie={orders:[],loading:!1,purchased:!1},Se=function(e,t){var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.m:return Object(ge.b)(e,{purchased:!1});case be.k:return Object(ge.b)(e,{loading:!0});case be.l:return Se(e,t);case be.j:return Object(ge.b)(e,{loading:!1});case be.h:return Object(ge.b)(e,{loading:!0});case be.i:return Object(ge.b)(e,{orders:t.orders,loading:!1});case be.g:return Object(ge.b)(e,{loading:!1});default:return e}},we={idToken:null,userId:null,error:null,loading:null,authRedirectPath:"/"},Be=function(e){return Object(ge.b)(e,{error:null,loading:!0})},Te=function(e,t){return Object(ge.b)(e,{idToken:t.idToken,userId:t.userId,error:null,loading:!1})},Ne=function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})},De=function(e,t){return Object(ge.b)(e,{idToken:null,userId:null})},Ae=function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return Be(e);case be.e:return Te(e,t);case be.b:return Ne(e,t);case be.c:return De(e);case be.o:return Ae(e,t);default:return e}},He=he.d,xe=Object(he.c)({burgerBuilder:je,order:Ce,auth:Re}),Le=Object(he.e)(xe,He(Object(he.a)(me.a))),Pe=a.a.createElement(h.a,{store:Le},a.a.createElement(j.a,null,a.a.createElement(pe,null)));i.a.render(Pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[69,1,2]]]);
//# sourceMappingURL=main.f05cdc29.chunk.js.map