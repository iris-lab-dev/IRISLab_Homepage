"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[416],{2646:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(579);const r=e=>{var t;let{src:i,width:r,height:o}=e;const d="png"===(null===(t=i.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,n.jsx)("img",{src:`/img/${d}/${i}`,alt:i,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,t,i)=>{i.d(t,{$:()=>o});const n=(0,i(9).Ay)("button")`
  background: ${e=>e.color||"#000"};
  color: ${e=>e.color?"#000":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(0 0 0 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #000;
    background-color: #000;
  }
`;var r=i(579);const o=e=>{let{color:t,children:i,onClick:o}=e;return(0,r.jsx)(n,{color:t,onClick:o,children:i})}},9416:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var n=i(4647),r=i(1319),o=i(9281),d=i(3614),a=i(5639),l=i(2646),s=i(9);const c=(0,s.Ay)("section")`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`,h=(0,s.Ay)("h6")`
  white-space: pre-line;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.2;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.85rem;
    line-height: 1.18;
  }
`,x=(0,s.Ay)("p")`
  padding: 0.75rem 0 0.75rem;
  white-space: pre-line;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.55;
  }
`,m=(0,s.Ay)("div")`
  width: min(100%, 760px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,p=(0,s.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,g=(0,s.Ay)(m)`
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  ${x} {
    max-width: 720px;
    margin: 1.5rem auto 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    ${x} {
      max-width: 100%;
    }
  }
`,w=(0,s.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,u=(0,s.Ay)(r.A)`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: center;
  align-items: stretch;
  row-gap: 2rem;

  .ant-col {
    display: flex;
    justify-content: center;
  }
`,f=(0,s.Ay)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  cursor: pointer;
`,y=(0,s.Ay)("div")`
  width: ${e=>{let{$tight:t}=e;return t?"108px":"100%"}};
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;

  img {
    margin: 0 auto;
  }
`,j=(0,s.Ay)("p")`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  width: ${e=>{let{$wide:t}=e;return t?"162px":"auto"}};
  max-width: ${e=>{let{$wide:t}=e;return t?"162px":"260px"}};
  margin: ${e=>{let{$wide:t}=e;return t?"0":"0 auto"}};
  text-align: center;
`;var v=i(579);const b=(0,o.C)()((e=>{let{title:t,content:i,button:o,icon:s,section:b,id:A,t:$}=e;const k="object"===typeof b&&b.length>0,C="service"===A;return(0,v.jsx)(c,{id:A,children:(0,v.jsx)(d.q7,{direction:"up",triggerOnce:!0,children:k?(0,v.jsx)(p,{children:(0,v.jsxs)(g,{children:[(0,v.jsx)(h,{children:$(t)}),(0,v.jsx)(x,{children:$(i)}),(0,v.jsx)(w,{children:(0,v.jsx)(u,{gutter:[24,24],children:b.map(((e,t)=>(0,v.jsx)(n.A,{lg:7,md:8,sm:12,xs:24,children:(0,v.jsxs)(f,{onClick:()=>{var t;(t=e.link)&&(/^https?:\/\//i.test(t)?window.open(t,"_blank","noopener,noreferrer"):window.location.href=t)},children:[(0,v.jsx)(y,{$tight:C,children:(0,v.jsx)(l.A,{src:e.icon||s||"",width:"108px",height:"108px"})}),(0,v.jsx)(j,{$wide:C,children:$(e.content)})]})},t)))})})]})}):(0,v.jsx)(r.A,{justify:"center",align:"middle",children:(0,v.jsx)(m,{children:(0,v.jsxs)(n.A,{lg:24,md:24,sm:24,xs:24,children:[(0,v.jsx)(h,{children:$(t)}),(0,v.jsx)(x,{children:$(i)}),o&&(0,v.jsx)(a.$,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:$(o)})]})})})})})}))}}]);
//# sourceMappingURL=416.3ba02b91.chunk.js.map