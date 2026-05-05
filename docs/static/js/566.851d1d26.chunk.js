"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[566],{2646:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(579);const r=e=>{var t;let{src:i,width:r,height:o}=e;const l="png"===(null===(t=i.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,n.jsx)("img",{src:`/img/${l}/${i}`,alt:i,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,t,i)=>{i.d(t,{$:()=>o});const n=(0,i(9).Ay)("button")`
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
`;var r=i(579);const o=e=>{let{color:t,children:i,onClick:o}=e;return(0,r.jsx)(n,{color:t,onClick:o,children:i})}},6566:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var n=i(4647),r=i(3614),o=i(9281),l=i(5639),s=i(2646),c=i(1319),a=i(9);const d=(0,a.Ay)("section")`
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
`,h=(0,a.Ay)("h6")`
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,x=(0,a.Ay)("p")`
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
`,m=(0,a.Ay)(c.A)`
  width: 100%;
  flex-direction: ${e=>{let{direction:t}=e;return"left"===t?"row":"row-reverse"}};
`,p=(0,a.Ay)("div")`
  position: relative;
  max-width: 540px;
  width: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,g=(0,a.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,f=(0,a.Ay)(p)`
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
    padding-top: 0;

    ${x} {
      max-width: 100%;
    }
  }
`,y=(0,a.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,w=(0,a.Ay)(c.A)`
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
`,u=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 280px;
  margin: 0 auto;
`,j=(0,a.Ay)("div")`
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
`,A=((0,a.Ay)("h6")`
  font-size: 22px;
  line-height: 1.3;
  padding: 0 0 0.75rem;
  color: #000;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  white-space: pre-line;
`,(0,a.Ay)("p")`
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
`),b=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;
`,v=(0,a.Ay)("div")`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
    gap: 1rem;
  }
`,M=(0,a.Ay)("div")`
  min-width: 110px;
  font-size: 3rem;
  line-height: 1;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`,S=(0,a.Ay)("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,T=(0,a.Ay)("div")`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  color: #404041;
`,k=(0,a.Ay)("span")`
  min-width: 28px;
  font-size: 1rem;
  line-height: 1.6;
  font-family: "OneStoreMobileGothicTitleFont", sans-serif;
  font-weight: 700;
  color: #404041;
`,I=(0,a.Ay)("span")`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-line;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`,L=(0,a.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;var $=i(579);const D=(0,o.C)()((e=>{let{icon:t,title:i,content:o,section:c,history:a,button:D,t:H,id:z,direction:C}=e;const F=e=>({__html:H(e)}),O="object"===typeof c&&c.length>0,_="object"===typeof a&&a.length>0,G=Boolean(t);return(0,$.jsx)(d,{children:(0,$.jsx)(r.zW,{direction:C,triggerOnce:!0,children:O?(0,$.jsx)(g,{children:(0,$.jsxs)(f,{id:z,children:[(0,$.jsx)(h,{dangerouslySetInnerHTML:F(i)}),o?(0,$.jsx)(x,{dangerouslySetInnerHTML:F(o)}):null,(0,$.jsx)(y,{children:(0,$.jsx)(w,{gutter:[24,24],children:c.map(((e,t)=>(0,$.jsx)(n.A,{lg:7,md:8,sm:12,xs:24,children:(0,$.jsxs)(u,{children:[(0,$.jsx)(j,{children:(0,$.jsx)(s.A,{src:e.icon,width:"108px",height:"108px"})}),(0,$.jsx)(A,{dangerouslySetInnerHTML:F(e.content)})]})},t)))})})]})}):_?(0,$.jsx)(m,{justify:"space-between",align:"middle",id:z,direction:C,children:(0,$.jsx)(n.A,{span:24,children:(0,$.jsxs)(p,{children:[(0,$.jsx)(h,{dangerouslySetInnerHTML:F(i)}),(0,$.jsx)(b,{children:a.map(((e,t)=>(0,$.jsxs)(v,{children:[(0,$.jsx)(M,{children:H(e.year)}),(0,$.jsx)(S,{children:e.items.map(((e,t)=>(0,$.jsxs)(T,{children:[(0,$.jsx)(k,{dangerouslySetInnerHTML:F(e.month)}),(0,$.jsx)(I,{dangerouslySetInnerHTML:F(e.content)})]},t)))})]},t)))})]})})}):(0,$.jsxs)(m,{justify:"space-between",align:"middle",id:z,direction:C,children:[G?(0,$.jsx)(n.A,{lg:11,md:11,sm:12,xs:24,children:(0,$.jsx)(s.A,{src:t,width:"100%",height:"100%"})}):null,(0,$.jsx)(n.A,{lg:G?11:24,md:G?11:24,sm:G?11:24,xs:24,children:(0,$.jsxs)(p,{children:[(0,$.jsx)(h,{dangerouslySetInnerHTML:F(i)}),o?(0,$.jsx)(x,{dangerouslySetInnerHTML:F(o)}):null,"right"===C?(0,$.jsx)(L,{children:"object"===typeof D&&D.map(((e,t)=>(0,$.jsx)(l.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("about"),children:H(e.title)},t)))}):null]})})]})})})}))}}]);
//# sourceMappingURL=566.851d1d26.chunk.js.map