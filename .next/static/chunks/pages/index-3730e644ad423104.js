(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45728:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(12614)}])},12614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return HomePage}});var a=n(85893),i=n(26721),s=n(67294),r=n(69077),l=JSON.parse('[{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC1155InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC1155InvalidApprover","type":"error"},{"inputs":[{"internalType":"uint256","name":"idsLength","type":"uint256"},{"internalType":"uint256","name":"valuesLength","type":"uint256"}],"name":"ERC1155InvalidArrayLength","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC1155InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC1155InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC1155InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC1155MissingApprovalForAll","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EarthId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EarthPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EarthSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"JupiterId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"JupiterPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"JupiterSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarsId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarsPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MarsSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SaturnId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SaturnPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SaturnSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UranusId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UranusPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UranusSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UserInfo","outputs":[{"internalType":"address","name":"Address","type":"address"},{"internalType":"string","name":"Level","type":"string"},{"internalType":"bool","name":"isMember","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEarthSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentJupiterSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentMarsSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSaturnSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentUranusSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getLevel","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isMember","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minadmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"number","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]'),d=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),u=n(76520),p=n(10682),c=n(68340),m=n(5607);function HomePage(){let{address:e}=(0,r.mA)(),{isConnected:t}=(0,r.mA)(),{open:n,close:o}=(0,i.k_)(),[y,x]=(0,s.useState)({address:"0x26A6779EA88D9e9D68CB3AB191a7dBBfeA59C226",abi:l}),[v,h]=(0,s.useState)({address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",abi:d}),{config:f}=(0,r.PJ)({...v,functionName:"approve",args:["0x26A6779EA88D9e9D68CB3AB191a7dBBfeA59C226",5e8]}),{write:b,isLoading:j,isSuccess:T}=(0,r.GG)(f),[g,N]=(0,s.useState)(1),handleImageClick=e=>{N(e)},{data:w,write:M}=(0,r.GG)({...y,functionName:"mintMember",args:[g]}),[A,S]=s.useState(0n),{data:_}=(0,r.do)({...y,functionName:"currentEarthSupply",watch:!0});s.useEffect(()=>{_&&S(_)},[_]);let I=A.toString(),[q,F]=s.useState(0n),{data:C}=(0,r.do)({...y,functionName:"currentMarsSupply",watch:!0});s.useEffect(()=>{C&&F(C)},[C]);let E=q.toString(),[Z,Q]=s.useState(0n),{data:U}=(0,r.do)({...y,functionName:"currentJupiterSupply",watch:!0});s.useEffect(()=>{U&&Q(U)},[U]);let B=Z.toString(),[R,k]=s.useState(0n),{data:D}=(0,r.do)({...y,functionName:"currentSaturnSupply",watch:!0});s.useEffect(()=>{D&&k(D)},[D]);let L=R.toString(),[O,H]=s.useState(0n),{data:P}=(0,r.do)({...y,functionName:"currentUranusSupply",watch:!0});s.useEffect(()=>{P&&H(P)},[P]);let J=O.toString();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"stars"}),(0,a.jsx)("div",{id:"stars2"}),(0,a.jsx)("div",{id:"stars3"}),(0,a.jsxs)("div",{className:"Background",children:[(0,a.jsx)("img",{className:"Bg1",src:"Ellipse1.png",alt:""}),(0,a.jsx)("img",{className:"Bg2",src:"Ellipse2.png",alt:""})]}),(0,a.jsx)(u.Z,{className:"Navbar",expand:"lg",bg:"transparent",variant:"dark",children:(0,a.jsxs)(p.Z,{children:[(0,a.jsxs)(u.Z.Brand,{className:"Brand",href:"#home",children:[(0,a.jsx)("img",{src:"Logo.png",alt:""}),(0,a.jsx)("h2",{children:"SENS"})]}),(0,a.jsx)(u.Z.Toggle,{"aria-controls":"basic-navbar-nav",className:"ml-auto"}),(0,a.jsx)(u.Z.Collapse,{id:"basic-navbar-nav",children:(0,a.jsxs)(c.Z,{className:"m-auto",children:[(0,a.jsx)(c.Z.Link,{href:"#Mint",children:"Mint"}),(0,a.jsx)(c.Z.Link,{href:"#Team",children:"Team"}),(0,a.jsx)(c.Z.Link,{href:"#Roadmap",children:"Roadmap"}),(0,a.jsx)(c.Z.Link,{href:"#FAQ",children:"FAQ"})]})}),(0,a.jsx)(u.Z.Collapse,{className:"justify-content-end",children:(0,a.jsx)("div",{children:t?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{className:"WalletConnect",onClick:()=>n(),children:[" ",e.slice(0,5),"...",e.slice(-5)]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{className:"WalletConnect",onClick:()=>n(),children:"Connect Wallet"})})})})]})}),(0,a.jsxs)("section",{className:"HomeSection",children:[(0,a.jsxs)("h1",{children:[" ",(0,a.jsx)("span",{className:"RainbowColor",children:"Solar Eclispe"})," NASA "]}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero."}),(0,a.jsx)("div",{class:"slider",children:(0,a.jsxs)("div",{class:"slide-track",children:[(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"EARTH.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"MARS.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"JUPITER.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"SATURN.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"URANUS.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"EARTH.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"MARS.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"JUPITER.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"SATURN.png",alt:""})}),(0,a.jsx)("div",{class:"slide",children:(0,a.jsx)("img",{src:"URANUS.png",alt:""})})]})})]}),(0,a.jsx)("section",{className:"MintSection",id:"Mint",children:(0,a.jsxs)("div",{className:"MintSection-Container",children:[(0,a.jsxs)("div",{className:"Col-1",children:[(0,a.jsx)("h3",{children:"Mint your NFTs"}),(0,a.jsx)("p",{className:"Description",children:{0:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipit. Praesent lectus quam.",1:"Praesent lectus quam, luctus eu scelerisque id, ullamcorper non mi. Nunc sapien lacus, placerat ac neque ac, convallis dignissim tellus. Aenean quis sodales erat. Aenean quis sodales erat. Aenean quis sodales erat.",2:"Duis interdum maximus vehicula. Nunc vehicula elementum magna, eu feugiat tellus convallis id. Donec sed vulputate lectus. Maecenas venenatis interdum orci non pellentesque. Aenean quis sodales erat.",3:"Donec at nunc vel justo rhoncus rhoncus. Integer non felis nec nibh dictum iaculis non non massa. Aliquam iaculis massa et lectus tristique varius. Aenean quis sodales erat. Aenean quis sodales erat.",4:"Quisque auctor ligula hendrerit pellentesque auctor. Aenean sagittis massa enim, at rhoncus quam lacinia vel. Donec porta interdum fermentum. Mauris convallis finibus iaculis. Aenean quis sodales erat."}[g]}),(0,a.jsx)("hr",{className:"Separator"}),(0,a.jsxs)("div",{className:"InfoNFT",children:[(0,a.jsxs)("p",{children:["Selected NFT: ",(0,a.jsx)("span",{className:"BoldText",children:{0:"Earth",1:"Mars",2:"Jupiter",3:"Saturn",4:"Uranus"}[g]})," "]}),(0,a.jsxs)("p",{children:["Price: ",(0,a.jsx)("span",{className:"BoldText",children:{0:"10000 $USDT",1:"50000 $USDT",2:"100000 $USDT",3:"500000 $USDT",4:"1000000 $USDT"}[g]})]}),(0,a.jsxs)("p",{children:["Minted: ",(0,a.jsx)("span",{className:"BoldText",children:{0:I+"/3600",1:E+"/640",2:B+"/180",3:L+"/24",4:J+"/5"}[g]})]})]}),(0,a.jsx)("button",{className:"MintButton",children:"Mint Now"})]}),(0,a.jsxs)("div",{className:"Col-2",children:[(0,a.jsx)("div",{className:"SelectedVideo",children:(0,a.jsx)("video",{src:{0:"Earth.mp4",1:"Mars.mp4",2:"Jupiter.mp4",3:"saturn.mp4",4:"Uranus.mp4"}[g],className:"Selected-Video",autoPlay:!0,muted:!0,loop:!0})}),(0,a.jsxs)("div",{className:"NFTs",children:[(0,a.jsx)("div",{children:(0,a.jsx)("video",{src:"Earth.mp4",alt:"",onClick:()=>handleImageClick(0),className:0===g?"selected":""})}),(0,a.jsx)("div",{children:(0,a.jsx)("video",{src:"Mars.mp4",alt:"",onClick:()=>handleImageClick(1),className:1===g?"selected":""})}),(0,a.jsx)("div",{children:(0,a.jsx)("video",{src:"Jupiter.mp4",alt:"",onClick:()=>handleImageClick(2),className:2===g?"selected":""})}),(0,a.jsx)("div",{children:(0,a.jsx)("video",{src:"saturn.mp4",alt:"",onClick:()=>handleImageClick(3),className:3===g?"selected":""})}),(0,a.jsx)("div",{children:(0,a.jsx)("video",{src:"Uranus.mp4",alt:"",onClick:()=>handleImageClick(4),className:4===g?"selected":""})})]})]})]})}),(0,a.jsxs)("section",{className:"TeamSection",id:"Team",children:[(0,a.jsx)("h3",{children:"Team"}),(0,a.jsxs)("div",{className:"TeamImages-Container",children:[(0,a.jsx)("img",{src:"Member1.png",alt:""}),(0,a.jsx)("img",{src:"Member2.png",alt:""}),(0,a.jsx)("img",{src:"Member3.png",alt:""}),(0,a.jsx)("img",{src:"Member4.png",alt:""})]})]}),(0,a.jsxs)("section",{className:"roadmap",id:"Roadmap",children:[(0,a.jsx)("h3",{className:"roadmapTitle",children:"Roadmap"}),(0,a.jsx)("div",{className:"section-timeline-4",children:(0,a.jsx)("div",{className:"containercool-2",children:(0,a.jsxs)("div",{className:"timeline_wrappercool-2",children:[(0,a.jsx)("div",{className:"timeline_progresscool",children:(0,a.jsx)("div",{className:"timeline_progress-barcool"})}),(0,a.jsxs)("div",{"data-w-id":"046baf0c-9b4c-ea28-05a2-50fd0f70aa61",className:"timeline_item-2",children:[(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",className:"timeline_left",children:(0,a.jsx)("div",{className:"timeline_date-text",children:"Q4 2023"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",className:"timeline_centre",children:(0,a.jsx)("div",{className:"timeline_circle"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",className:"timeline_right",children:(0,a.jsx)("div",{className:"margin-bottom-xlarge",children:(0,a.jsxs)("div",{className:"timeline_text-2",children:[(0,a.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi"]})})})]}),(0,a.jsxs)("div",{"data-w-id":"046baf0c-9b4c-ea28-05a2-50fd0f70aa61",className:"timeline_item-2",children:[(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",className:"timeline_left",children:(0,a.jsx)("div",{className:"timeline_date-text",children:"Q1 2024"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",className:"timeline_centre",children:(0,a.jsx)("div",{className:"timeline_circle"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",className:"timeline_right",children:(0,a.jsx)("div",{className:"margin-bottom-xlarge",children:(0,a.jsxs)("div",{className:"timeline_text-2",children:[(0,a.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi"]})})})]}),(0,a.jsxs)("div",{"data-w-id":"046baf0c-9b4c-ea28-05a2-50fd0f70aa61",className:"timeline_item-2",children:[(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",className:"timeline_left",children:(0,a.jsx)("div",{className:"timeline_date-text",children:"Q2 2024"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",className:"timeline_centre",children:(0,a.jsx)("div",{className:"timeline_circle"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",className:"timeline_right",children:(0,a.jsx)("div",{className:"margin-bottom-xlarge",children:(0,a.jsxs)("div",{className:"timeline_text-2",children:[(0,a.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipit."]})})})]}),(0,a.jsxs)("div",{"data-w-id":"046baf0c-9b4c-ea28-05a2-50fd0f70aa61",className:"timeline_item-2",children:[(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd",className:"timeline_left",children:(0,a.jsx)("div",{className:"timeline_date-text",children:"Q3 2024"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd",className:"timeline_centre",children:(0,a.jsx)("div",{className:"timeline_circle"})}),(0,a.jsx)("div",{id:"w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd",className:"timeline_right",children:(0,a.jsx)("div",{className:"margin-bottom-xlarge",children:(0,a.jsxs)("div",{className:"timeline_text-2",children:[(0,a.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi"]})})})]}),(0,a.jsx)("div",{className:"overlay-fade-bottom-2"}),(0,a.jsx)("div",{className:"overlay-fade-top-2"})]})})})]}),(0,a.jsxs)("section",{className:"FAQSection",id:"FAQ",children:[(0,a.jsx)("h3",{children:"Frequently Answer Questions"}),(0,a.jsxs)("div",{className:"FAQ-Container",children:[(0,a.jsxs)("div",{className:"FAQ-Col-1",children:[(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #1"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #2"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #3"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})]}),(0,a.jsxs)("div",{className:"FAQ-Col-1 FAQ-Col-2",children:[(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #4"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #5"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),(0,a.jsx)(m.Z,{children:(0,a.jsxs)(m.Z.Item,{className:"FAQ-Item",eventKey:"0",children:[(0,a.jsx)(m.Z.Header,{className:"FAQ-Item-Header",children:"FAQ Item #6"}),(0,a.jsx)(m.Z.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})})]})]})]}),(0,a.jsx)("section",{className:"FooterSection",children:(0,a.jsxs)("div",{className:"Footer-Container",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"",children:"Twitter"}),(0,a.jsx)("a",{href:"",children:"Discord"}),(0,a.jsx)("a",{href:"",children:"Telegram"}),(0,a.jsx)("a",{href:"",children:"Medium"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("span",{children:"Solar Eclipse Nasa \xa9 2023 All Rights Reserved"})})]})})]})}}},function(e){e.O(0,[13,774,888,179],function(){return e(e.s=45728)}),_N_E=e.O()}]);