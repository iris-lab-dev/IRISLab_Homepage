"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[416],{2646:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(579);const r=e=>{var t;let{src:n,width:r,height:o}=e;const a="png"===(null===(t=n.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,i.jsx)("img",{src:`/img/${a}/${n}`,alt:n,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,t,n)=>{n.d(t,{$:()=>o});const i=(0,n(9).Ay)("button")`
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
`;var r=n(579);const o=e=>{let{color:t,children:n,onClick:o}=e;return(0,r.jsx)(i,{color:t,onClick:o,children:n})}},9416:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(4647),r=n(1319),o=n(9281),a=n(3614),c=n(5639),l=n(2646),s=n(9);const d=(0,s.Ay)("section")`
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
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }

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
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }

  .accent-black-strong {
    color: #000000;
    font-weight: 700;
  }

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
`,g=(0,s.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,p=(0,s.Ay)(m)`
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
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;var A=n(579);const v=(0,o.C)()((e=>{let{title:t,content:n,button:o,icon:s,section:v,id:b,t:$}=e;const k=e=>({__html:$(e)}),C="object"===typeof v&&v.length>0,I="service"===b;return(0,A.jsx)(d,{id:b,children:(0,A.jsx)(a.q7,{direction:"up",triggerOnce:!0,children:C?(0,A.jsx)(g,{children:(0,A.jsxs)(p,{children:[(0,A.jsx)(h,{dangerouslySetInnerHTML:k(t)}),(0,A.jsx)(x,{dangerouslySetInnerHTML:k(n)}),(0,A.jsx)(w,{children:(0,A.jsx)(u,{gutter:[24,24],children:v.map(((e,t)=>(0,A.jsx)(i.A,{lg:7,md:8,sm:12,xs:24,children:(0,A.jsxs)(f,{onClick:()=>{var t;(t=e.link)&&(/^https?:\/\//i.test(t)?window.open(t,"_blank","noopener,noreferrer"):window.location.href=t)},children:[(0,A.jsx)(y,{$tight:I,children:(0,A.jsx)(l.A,{src:e.icon||s||"",width:"108px",height:"108px"})}),(0,A.jsx)(j,{$wide:I,dangerouslySetInnerHTML:k(e.content)})]})},t)))})})]})}):(0,A.jsx)(r.A,{justify:"center",align:"middle",children:(0,A.jsx)(m,{children:(0,A.jsxs)(i.A,{lg:24,md:24,sm:24,xs:24,children:[(0,A.jsx)(h,{dangerouslySetInnerHTML:k(t)}),(0,A.jsx)(x,{dangerouslySetInnerHTML:k(n)}),o&&(0,A.jsx)(c.$,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:$(o)})]})})})})})}))}}]);
//# sourceMappingURL=416.6133aee9.chunk.js.map