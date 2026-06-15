"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[538,780],{2646:(t,r,e)=>{e.d(r,{A:()=>a});var o=e(579);const a=t=>{var r;let{src:e,width:a,height:i}=t;const s="png"===(null===(r=e.split(".").pop())||void 0===r?void 0:r.toLowerCase())?"png":"svg";return(0,o.jsx)("img",{src:`./img/${s}/${e}`,alt:e,width:a,height:i,style:{width:a,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},8538:(t,r,e)=>{e.r(r),e.d(r,{default:()=>n});var o=e(5043),a=e(2646);const i=(0,e(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${t=>t.show?"visible":"hidden"};
  opacity: ${t=>t.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var s=e(579);const n=()=>{const[t,r]=(0,o.useState)(!1),e=(0,o.useCallback)((()=>{const e=window.scrollY;!t&&e>350?r(!0):e<=350&&r(!1)}),[t]);(0,o.useEffect)((()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)})),[e]);return(0,s.jsx)(i,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},show:t,children:(0,s.jsx)(a.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}},9780:(t,r,e)=>{e.r(r),e.d(r,{default:()=>k});var o=e(5043),a=e(3239),i=e(180),s=e(7419),n=e(1645),l=e(9),c=e(1766),d=e(8538),h=e(579);const{Title:p,Paragraph:m,Text:f}=a.A,u=[{account:"tumtum.kr",description:"\ud2c8\ud2c8 \uacf5\uc2dd \uc778\uc2a4\ud0c0\uadf8\ub7a8",channels:[{platform:"Instagram",href:"https://www.instagram.com/tumtum.kr"}]},{account:"50days_left",description:"0\uc5d0\uc11c 1\uc744 \ub9cc\ub4dc\ub294 50\uc77c\uac04\uc758 \uae30\ub85d",channels:[{platform:"YouTube",href:"https://www.youtube.com/@50days_left"},{platform:"Instagram",href:"https://www.instagram.com/50days_left"}]},{account:"\uc544\uc774\ub9ac\uc2a4\ub7a9",description:"\uc8fc\uc2dd\ud68c\uc0ac \uc544\uc774\ub9ac\uc2a4\ub7a9 \uacf5\uc2dd \ucc44\ub110",channels:[{platform:"Homepage",href:"https://irislab.co.kr"},{platform:"YouTube",href:"https://youtube.irislab.co.kr"},{platform:"Chzzk",href:"https://chzzk.irislab.co.kr"},{platform:"Discord",href:"https://discord.irislab.co.kr"},{platform:"Github",href:"https://github.irislab.co.kr"},{platform:"Toonation",href:"https://toon.at/donate/irislab"}]}],x=l.Ay.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 5rem 0;
`,g=l.Ay.div`
  text-align: center;
  margin-bottom: 3rem;
`,b=(0,l.Ay)(i.A)`
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  .ant-card-body {
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`,w=(0,l.Ay)(p)`
  && {
    margin-bottom: 0.75rem;
  }
`,v=l.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
`,y=l.Ay.a`
  display: inline-flex;
  align-items: center;
  border: 1px solid #f0d37a;
  border-radius: 999px;
  background: #fff9e8;
  color: #ad6800;
  padding: 0.45rem 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    border-color: #d4a017;
    color: #8c5500;
    transform: translateY(-2px);
  }
`,k=()=>((0,o.useEffect)((()=>{window.scrollTo({top:0})}),[]),(0,h.jsxs)(c.default,{children:[(0,h.jsx)(d.default,{}),(0,h.jsxs)(x,{children:[(0,h.jsxs)(g,{children:[(0,h.jsx)(p,{level:2,children:"SNS"}),(0,h.jsx)(m,{children:"\uc544\uc774\ub9ac\uc2a4\ub7a9\uc5d0\uc11c \uc6b4\uc601\ud558\ub294 SNS \ucc44\ub110 \ubaa9\ub85d\uc785\ub2c8\ub2e4."})]}),(0,h.jsx)(s.A,{gutter:[24,24],children:u.map((t=>(0,h.jsx)(n.A,{lg:8,md:12,sm:24,xs:24,children:(0,h.jsxs)(b,{hoverable:!0,children:[(0,h.jsx)(w,{level:3,children:t.account}),(0,h.jsx)(f,{type:"secondary",children:t.description}),(0,h.jsx)(v,{children:t.channels.map((r=>(0,h.jsx)(y,{href:r.href,target:"_blank",rel:"noopener noreferrer","aria-label":`${t.account} ${r.platform}`,children:r.platform},`${t.account}-${r.platform}`)))})]})},t.account)))})]})]}))}}]);
//# sourceMappingURL=780.3b1d7c4d.chunk.js.map