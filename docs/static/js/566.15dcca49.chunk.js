"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[566],{2646:(e,t,i)=>{i.d(t,{A:()=>o});var n=i(579);const o=e=>{var t;let{src:i,width:o,height:r}=e;const l="png"===(null===(t=i.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,n.jsx)("img",{src:`./img/${l}/${i}`,alt:i,width:o,height:r,style:{width:o,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,t,i)=>{i.d(t,{$:()=>r});const n=(0,i(9).Ay)("button")`
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
`;var o=i(579);const r=e=>{let{color:t,children:i,onClick:r}=e;return(0,o.jsx)(n,{color:t,onClick:r,children:i})}},6566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var n=i(1645),o=i(3614),r=i(9281),l=i(5639),s=i(2646),a=i(7419),d=i(9);const c=(0,d.Ay)("section")`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  padding: 8rem 0 4rem;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,h=(0,d.Ay)("h6")`
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,m=(0,d.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,p=(0,d.Ay)(a.A)`
  width: 100%;
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,x=(0,d.Ay)("div")`
  position: relative;
  max-width: 540px;
  width: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,g=(0,d.Ay)(x)`
  max-width: 100%;
`,f=(0,d.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,y=(0,d.Ay)(x)`
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  ${m} {
    max-width: 720px;
    margin: 1.5rem auto 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 0;

    ${m} {
      max-width: 100%;
    }
  }
`,u=(0,d.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,w=(0,d.Ay)(a.A)`
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
`,j=(0,d.Ay)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`,A=(0,d.Ay)("div")`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`,b=((0,d.Ay)("h6")`
  font-size: 22px;
  line-height: 1.3;
  padding: 0 0 0.75rem;
  color: #000;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  white-space: pre-line;
`,(0,d.Ay)("p")`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  max-width: 260px;
  margin: 0 auto;
  text-align: center;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`),v=(0,d.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`,M=(0,d.Ay)("div")`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
  }
`,S=(0,d.Ay)("div")`
  min-width: 110px;
  font-size: 3rem;
  line-height: 1;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`,T=(0,d.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`,k=(0,d.Ay)("div")`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0.25rem;
    top: 1.25rem;
    bottom: 0.35rem;
    width: 1px;
    background: rgba(212, 160, 23, 0.28);
  }

  @media only screen and (max-width: 575px) {
    gap: 1rem;
  }
`,I=(0,d.Ay)("div")`
  position: relative;
  min-width: 56px;
  font-size: 1.25rem;
  line-height: 1.4;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.35rem;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: #D4A017;
  }
`,L=(0,d.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  padding-top: 2.1rem;

  @media only screen and (max-width: 575px) {
    padding-top: 1.85rem;
  }
`,D=(0,d.Ay)("div")`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  color: #404041;

  @media only screen and (max-width: 575px) {
    gap: 0.75rem;
  }
`,H=(0,d.Ay)("span")`
  min-width: 32px;
  font-size: 0.85rem;
  line-height: 1.6;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 600;
  color: #8E8E93;
`,$=(0,d.Ay)("span")`
  font-size: 1.02rem;
  line-height: 1.75;
  white-space: pre-line;
  color: #404041;
  flex: 1;
  font-weight: 500;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,z=(0,d.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var C=i(579);const F=(0,r.C)()((e=>{let{icon:t,title:i,content:r,section:a,history:d,button:F,t:O,id:G,direction:_}=e;const E=e=>({__html:O(e)}),B="object"===typeof a&&a.length>0,W="object"===typeof d&&d.length>0,V=Boolean(t);return(0,C.jsx)(c,{children:(0,C.jsx)(o.zW,{direction:_,triggerOnce:!0,children:B?(0,C.jsx)(f,{children:(0,C.jsxs)(y,{id:G,children:[(0,C.jsx)(h,{dangerouslySetInnerHTML:E(i)}),r?(0,C.jsx)(m,{dangerouslySetInnerHTML:E(r)}):null,(0,C.jsx)(u,{children:(0,C.jsx)(w,{gutter:[24,24],children:a.map(((e,t)=>(0,C.jsx)(n.A,{lg:7,md:8,sm:12,xs:24,children:(0,C.jsxs)(j,{children:[(0,C.jsx)(A,{children:(0,C.jsx)(s.A,{src:e.icon,width:"108px",height:"108px"})}),(0,C.jsx)(b,{dangerouslySetInnerHTML:E(e.content)})]})},t)))})})]})}):W?(0,C.jsx)(p,{justify:"space-between",align:"middle",id:G,direction:_,children:(0,C.jsx)(n.A,{span:24,children:(0,C.jsxs)(g,{children:[(0,C.jsx)(h,{dangerouslySetInnerHTML:E(i)}),(0,C.jsx)(v,{children:d.map(((e,t)=>{const i=e.items.reduce(((e,t)=>{const i=e.find((e=>e.month===t.month));return i?(i.items.push(t),e):(e.push({month:t.month,items:[t]}),e)}),[]);return(0,C.jsxs)(M,{children:[(0,C.jsx)(S,{children:O(e.year)}),(0,C.jsx)(T,{children:i.map(((e,t)=>(0,C.jsxs)(k,{children:[(0,C.jsx)(I,{dangerouslySetInnerHTML:E(e.month)}),(0,C.jsx)(L,{children:e.items.map(((e,t)=>(0,C.jsxs)(D,{children:[e.day?(0,C.jsx)(H,{dangerouslySetInnerHTML:E(e.day)}):null,(0,C.jsx)($,{dangerouslySetInnerHTML:E(e.content)})]},t)))})]},t)))})]},t)}))})]})})}):(0,C.jsxs)(p,{justify:"space-between",align:"middle",id:G,direction:_,children:[V?(0,C.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,C.jsx)(s.A,{src:t,width:"100%",height:"100%"})}):null,(0,C.jsx)(n.A,{lg:V?11:24,md:V?11:24,sm:V?11:24,xs:24,children:(0,C.jsxs)(x,{children:[(0,C.jsx)(h,{dangerouslySetInnerHTML:E(i)}),r?(0,C.jsx)(m,{dangerouslySetInnerHTML:E(r)}):null,"right"===_?(0,C.jsx)(z,{children:"object"===typeof F&&F.map(((e,t)=>(0,C.jsx)(l.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:O(e.title)},t)))}):null]})})]})})})}))}}]);
//# sourceMappingURL=566.15dcca49.chunk.js.map