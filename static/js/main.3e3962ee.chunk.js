(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg",clicked:!1},{id:2,image:"https://404store.com/2018/02/05/Cute-puppy-photos-110.jpg",clicked:!1},{id:3,image:"https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:4,image:"https://images.pexels.com/photos/1663421/pexels-photo-1663421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:5,image:"https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:6,image:"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:7,image:"https://images.pexels.com/photos/672244/pexels-photo-672244.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:8,image:"https://images.pexels.com/photos/208834/pexels-photo-208834.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:9,image:"https://images.pexels.com/photos/208109/pexels-photo-208109.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:10,image:"https://images.pexels.com/photos/67680/pexels-photo-67680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:11,image:"https://images.pexels.com/photos/160962/puppy-dog-shepherd-cute-160962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1},{id:12,image:"https://images.pexels.com/photos/133195/pexels-photo-133195.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),o=a.n(c),n=a(8),s=a.n(n),i=(a(15),a(2)),r=a(3),l=a(5),p=a(4),m=a(6);a(16),a(17);var u=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"nav header sticky-top justify-content-center"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/"},"Click Memory Game")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("p",{className:"nav-link"},e.message)),o.a.createElement("li",{className:"nav-item"},o.a.createElement("p",{className:"nav-link"},"Current Score: ",e.roundScore," | Top Score: ",e.highScore))),o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Memory Game"),o.a.createElement("p",{className:"lead"},"Click on any picture below, but be sure not to click the same picture twice!"))))},d=a(1),h=(a(18),function(e){return o.a.createElement("div",{className:"puppy-card img-container"},o.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.clickyClick(e.id)},className:"shuffle"}))}),g=(a(19),function(e){return o.a.createElement("div",{className:"wrapper"},e.children)});a(20);var f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar footer navbar-light bg-light"},o.a.createElement("p",{className:"navbar-brand link"},"Created with React")))},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).clickyClick=function(e){if(void 0===a.state.notChosen.find(function(t){return t.id===e}))a.setState({highScore:a.state.roundScore>a.state.highScore?a.state.roundScore:a.state.highScore,roundScore:0,pics:d,notChosen:d,message:"Bummer! You choose the same one. Click another image to play again!"});else{var t=a.state.notChosen.filter(function(t){return t.id!==e});a.setState({roundScore:a.state.roundScore+1,pics:d,notChosen:t,message:"Great guess!"})}a.shuffleBoard()},a.shuffleBoard=function(){var e=a.state.pics.sort(function(){return Math.random()-.5});a.setState({puppy:e})},a.state={data:[],pics:d,notChosen:d,highScore:0,roundScore:0,message:"Click an image to begin!"},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.shuffleBoard()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u,{highScore:this.state.highScore,roundScore:this.state.roundScore,message:this.state.message}),o.a.createElement(g,null,this.state.pics.map(function(t){return o.a.createElement(h,{id:t.id,key:t.id,image:t.image,clicked:t.clicked,clickyClick:e.clickyClick,roundScore:e.state.roundScore})})),o.a.createElement(f,null))}}]),t}(c.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,null))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3e3962ee.chunk.js.map