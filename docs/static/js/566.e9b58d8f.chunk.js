"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[566],{2646:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(579);const r=e=>{var t;let{src:i,width:r,height:o}=e;const l="png"===(null===(t=i.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,n.jsx)("img",{src:`./img/${l}/${i.normalize("NFC")}`,alt:i,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,t,i)=>{i.d(t,{$:()=>o});const n=(0,i(9).Ay)("button")`
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
`;var r=i(579);const o=e=>{let{color:t,children:i,onClick:o}=e;return(0,r.jsx)(n,{color:t,onClick:o,children:i})}},6566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var n=i(5043),r=i(1645),o=i(3614),l=i(9281),a=i(5639),s=i(2646),d=i(7419),c=i(9);const m=(0,c.Ay)("section")`
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
`,h=(0,c.Ay)("h6")`
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,p=(0,c.Ay)("p")`
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
`,x=(0,c.Ay)(d.A)`
  width: 100%;
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,g=(0,c.Ay)("div")`
  position: relative;
  max-width: 540px;
  width: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,f=(0,c.Ay)(g)`
  max-width: 100%;
`,y=(0,c.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,u=(0,c.Ay)(g)`
  max-width: 100%;
  width: 100%;
  text-align: center;
  margin: 0 auto;

  ${p} {
    max-width: 720px;
    margin: 1.5rem auto 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 575px) {
    padding-top: 0;

    ${p} {
      max-width: 100%;
    }
  }
`,w=(0,c.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,A=(0,c.Ay)(d.A)`
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
`,b=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`,j=(0,c.Ay)("div")`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`,v=((0,c.Ay)("h6")`
  font-size: 22px;
  line-height: 1.3;
  padding: 0 0 0.75rem;
  color: #000;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  white-space: pre-line;
`,(0,c.Ay)("p")`
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
`),S=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`,$=((0,c.Ay)("div")`
  margin-top: 2rem;
`,(0,c.Ay)("h3")`
  margin: 0 0 1.25rem;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #404041;
`,(0,c.Ay)("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,(0,c.Ay)("div")`
  min-height: 160px;
  padding: 1.5rem;
  border: 1px solid rgba(212, 160, 23, 0.38);
  border-radius: 4px;
  background: rgba(212, 160, 23, 0.08);
`,(0,c.Ay)("div")`
  margin-bottom: 0.75rem;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #D4A017;
`,(0,c.Ay)("h4")`
  margin: 0;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-size: 1.15rem;
  line-height: 1.5;
  font-weight: 700;
  color: #404041;
`,(0,c.Ay)("p")`
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  line-height: 1.65;
  color: #666;
`,(0,c.Ay)("div")`
  margin-top: 4rem;
`),D=(0,c.Ay)("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,M=(0,c.Ay)("button")`
  padding: 0.5rem 0.9rem;
  border: 1px solid ${e=>{let{$active:t}=e;return t?"#D4A017":"#D9D9D9"}};
  border-radius: 999px;
  background: ${e=>{let{$active:t}=e;return t?"#D4A017":"#fff"}};
  color: ${e=>{let{$active:t}=e;return t?"#fff":"#404041"}};
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: #D4A017;
    color: ${e=>{let{$active:t}=e;return t?"#fff":"#D4A017"}};
  }
`,T=(0,c.Ay)("div")`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
  }
`,k=(0,c.Ay)("div")`
  min-width: 110px;
  font-size: 3rem;
  line-height: 1;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`,z=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`,I=(0,c.Ay)("div")`
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
`,C=(0,c.Ay)("div")`
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
`,F=(0,c.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  padding-top: 2.1rem;

  @media only screen and (max-width: 575px) {
    padding-top: 1.85rem;
  }
`,L=(0,c.Ay)("div")`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  color: #404041;

  @media only screen and (max-width: 575px) {
    gap: 0.75rem;
  }
`,H=(0,c.Ay)("span")`
  min-width: 32px;
  font-size: 0.85rem;
  line-height: 1.6;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 600;
  color: #8E8E93;
`,O=(0,c.Ay)("span")`
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
`,G=(0,c.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var E=i(579);const B=["All","Core","Service","Patent","SNS"],N=(0,l.C)()((e=>{let{icon:t,title:i,content:l,section:d,history:c,button:N,t:W,id:_,direction:P}=e;const[V,q]=(0,n.useState)("All"),J=e=>({__html:W(e)}),K="object"===typeof d&&d.length>0,Q="object"===typeof c&&c.length>0,R=Q,U=Boolean(t),X=(c||[]).map((e=>({...e,items:e.items.filter((e=>"All"===V||e.category===V))}))).filter((e=>e.items.length>0));return(0,E.jsx)(m,{children:(0,E.jsx)(o.zW,{direction:P,triggerOnce:!0,children:K?(0,E.jsx)(y,{children:(0,E.jsxs)(u,{id:_,children:[(0,E.jsx)(h,{dangerouslySetInnerHTML:J(i)}),l?(0,E.jsx)(p,{dangerouslySetInnerHTML:J(l)}):null,(0,E.jsx)(w,{children:(0,E.jsx)(A,{gutter:[24,24],children:d.map(((e,t)=>(0,E.jsx)(r.A,{lg:7,md:8,sm:12,xs:24,children:(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:(0,E.jsx)(s.A,{src:e.icon,width:"108px",height:"108px"})}),(0,E.jsx)(v,{dangerouslySetInnerHTML:J(e.content)})]})},t)))})})]})}):R?(0,E.jsx)(x,{justify:"space-between",align:"middle",id:_,direction:P,children:(0,E.jsx)(r.A,{span:24,children:(0,E.jsxs)(f,{children:[(0,E.jsx)(h,{dangerouslySetInnerHTML:J(i)}),Q?(0,E.jsxs)($,{children:[(0,E.jsx)(D,{children:B.map((e=>(0,E.jsx)(M,{type:"button",$active:V===e,onClick:()=>q(e),children:e},e)))}),(0,E.jsx)(S,{children:X.map(((e,t)=>{const i=e.items.reduce(((e,t)=>{const i=e.find((e=>e.month===t.month));return i?(i.items.push(t),e):(e.push({month:t.month,items:[t]}),e)}),[]);return(0,E.jsxs)(T,{children:[(0,E.jsx)(k,{children:W(e.year)}),(0,E.jsx)(z,{children:i.map(((e,t)=>(0,E.jsxs)(I,{children:[(0,E.jsx)(C,{dangerouslySetInnerHTML:J(e.month)}),(0,E.jsx)(F,{children:e.items.map(((e,t)=>(0,E.jsxs)(L,{children:[e.day?(0,E.jsx)(H,{dangerouslySetInnerHTML:J(e.day)}):null,(0,E.jsx)(O,{dangerouslySetInnerHTML:J(e.content)})]},t)))})]},t)))})]},t)}))})]}):null]})})}):(0,E.jsxs)(x,{justify:"space-between",align:"middle",id:_,direction:P,children:[U?(0,E.jsx)(r.A,{lg:11,md:11,sm:12,xs:24,children:(0,E.jsx)(s.A,{src:t,width:"100%",height:"100%"})}):null,(0,E.jsx)(r.A,{lg:U?11:24,md:U?11:24,sm:U?11:24,xs:24,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(h,{dangerouslySetInnerHTML:J(i)}),l?(0,E.jsx)(p,{dangerouslySetInnerHTML:J(l)}):null,"right"===P?(0,E.jsx)(G,{children:"object"===typeof N&&N.map(((e,t)=>(0,E.jsx)(a.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:W(e.title)},t)))}):null]})})]})})})}))}}]);
//# sourceMappingURL=566.e9b58d8f.chunk.js.map