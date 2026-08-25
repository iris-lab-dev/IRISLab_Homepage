"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[416],{2646:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(579);const r=e=>{var n;let{src:t,width:r,height:o}=e;const a="png"===(null===(n=t.split(".").pop())||void 0===n?void 0:n.toLowerCase())?"png":"svg";return(0,i.jsx)("img",{src:`./img/${a}/${t.normalize("NFC")}`,alt:t,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,n,t)=>{t.d(n,{$:()=>o});const i=(0,t(9).Ay)("button")`
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
`;var r=t(579);const o=e=>{let{color:n,children:t,onClick:o}=e;return(0,r.jsx)(i,{color:n,onClick:o,children:t})}},9416:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var i=t(1645),r=t(7419),o=t(9281),a=t(1688),l=t(3614),s=t(5639),d=t(2646),c=t(9);const m=(0,c.Ay)("section")`
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
`,h=(0,c.Ay)("h6")`
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
`,p=(0,c.Ay)("p")`
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
`,x=(0,c.Ay)("div")`
  width: min(100%, 760px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,g=(0,c.Ay)("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 3.5rem 0 0;
`,f=(0,c.Ay)("article")`
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  column-gap: 2.5rem;
  padding: 2rem 2.25rem;
  border-left: 2px solid #D4A017;
  background: #fafafa;
  text-align: left;

  > div {
    align-self: center;
  }

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }
`,u=(0,c.Ay)("h3")`
  margin: 0;
  color: #404041;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
`,y=(0,c.Ay)("p")`
  margin: 0.4rem 0 1rem;
  color: #D4A017;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,w=(0,c.Ay)("p")`
  margin: 0;
  color: #606060;
  font-size: 0.9rem;
  line-height: 1.75;
  white-space: pre-line;
`,b=(0,c.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,j=(0,c.Ay)(x)`
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
    ${p} {
      max-width: 100%;
    }
  }
`,A=(0,c.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,v=(0,c.Ay)(r.A)`
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

  ${e=>{let{$stacked:n}=e;return n&&"\n      row-gap: 0.75rem;\n    "}}
`,k=(0,c.Ay)("div")`
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

  ${e=>{let{$stacked:n}=e;return n&&"\n      display: grid;\n      grid-template-columns: 120px minmax(0, 1fr);\n      gap: 1rem;\n      max-width: none;\n      min-height: 148px;\n      padding: 1rem 1.25rem;\n      border: 1px solid #d9d9d9;\n      border-radius: 4px;\n      text-align: left;\n      transition: border-color 0.2s ease, box-shadow 0.2s ease;\n\n      &:hover {\n        border-color: #d4a017;\n        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n      }\n\n      > div:first-child {\n        width: 120px;\n        height: 96px;\n        margin: 0;\n      }\n\n      @media only screen and (max-width: 575px) {\n        grid-template-columns: 88px minmax(0, 1fr);\n        gap: 0.75rem;\n        min-height: 0;\n        padding: 0.875rem;\n\n        > div:first-child {\n          width: 88px;\n          height: 76px;\n        }\n\n        > div:first-child img {\n          max-width: 88px;\n          max-height: 76px;\n        }\n      }\n    "}}
`,$=(0,c.Ay)("div")`
  color: #a995d3;
  font-family: "Jua", "Arial Rounded MT Bold", sans-serif;
  font-size: clamp(2.05rem, 5vw, 2.7rem);
  line-height: 1;
  letter-spacing: -0.04em;
  text-shadow: 1px 2px #fff, 2px 2px #b7a2d7;

  span {
    color: #f2a5bd;
  }
`,z=(0,c.Ay)("div")`
  width: ${e=>{let{$tight:n}=e;return n?"108px":"100%"}};
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;

  img {
    margin: 0 auto;
  }
`,M=(0,c.Ay)("h3")`
  margin: 0;
  color: #1f1f1f;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
`,C=(0,c.Ay)("p")`
  margin: 0.35rem 0 0;
  color: #d4a017;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,S=(0,c.Ay)("p")`
  margin: 0.75rem 0 0;
  color: #606060;
  font-size: 0.95rem;
  line-height: 1.65;
  white-space: pre-line;
`,I=(0,c.Ay)("section")`
  width: 100%;

  & + & {
    margin-top: 2.5rem;
  }
`,D=(0,c.Ay)("h2")`
  margin: 0 0 1rem;
  color: #404041;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: left;

  @media only screen and (max-width: 575px) {
    font-size: 1.15rem;
  }
`,L=(0,c.Ay)("button")`
  margin-top: 0.75rem;
  padding: 0.4rem 0.75rem;
  border: 1px solid #404041;
  border-radius: 2px;
  background: transparent;
  color: #404041;
  font: inherit;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;

  &:hover:not(:disabled) {
    border-color: #d4a017;
    background: #d4a017;
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,T=(0,c.Ay)("p")`
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-line;
  width: ${e=>{let{$wide:n}=e;return n?"162px":"auto"}};
  max-width: ${e=>{let{$wide:n}=e;return n?"162px":"260px"}};
  margin: ${e=>{let{$wide:n}=e;return n?"0":"0 auto"}};
  text-align: center;
  color: #404041;

  .accent {
    color: #D4A017;
  }

  .accent-strong {
    color: #D4A017;
    font-weight: 700;
  }
`;var H=t(579);const B=(0,o.C)()((e=>{let{title:n,content:t,button:o,icon:c,section:B,groups:O,values:G,id:_,t:F}=e;const W=(0,a.W6)(),q=e=>({__html:F(e)}),E=e=>{e&&(/^https?:\/\//i.test(e)?window.open(e,"_blank","noopener,noreferrer"):W.push(e))},J="object"===typeof B&&B.length>0,N="object"===typeof O&&O.length>0,P="object"===typeof G&&G.length>0,R="service"===_,V=["products","companies","brands","teams"].includes(_||""),K=e=>(0,H.jsx)(v,{$stacked:V,gutter:V?[12,12]:[24,24],children:e.map(((e,n)=>{const t="yni.kr"===e.title;return(0,H.jsx)(i.A,{lg:V?12:7,md:V?12:8,sm:V?24:12,xs:24,children:(0,H.jsxs)(k,{$stacked:V,onClick:()=>E(e.link),children:[(0,H.jsx)(z,{$tight:R,children:t?(0,H.jsxs)($,{"aria-label":"yni.kr",children:["yni",(0,H.jsx)("span",{children:"."}),"kr"]}):(0,H.jsx)(d.A,{src:e.icon||c||"",width:"120px",height:"120px"})}),V?(0,H.jsxs)("div",{children:[(0,H.jsx)(M,{children:F(e.title||"")}),(0,H.jsx)(C,{children:F(e.subtitle||"")}),(0,H.jsx)(S,{dangerouslySetInnerHTML:q(e.content)}),(e.link||t)&&(0,H.jsx)(L,{type:"button",disabled:t,onClick:n=>{n.stopPropagation(),E(e.link)},children:t?"\uc900\ube44 \uc911":"\ubc14\ub85c\uac00\uae30"})]}):(0,H.jsx)(T,{$wide:R,dangerouslySetInnerHTML:q(e.content)})]})},`${e.title}-${n}`)}))});return(0,H.jsx)(m,{id:_,children:(0,H.jsx)(l.q7,{direction:"up",triggerOnce:!0,children:J||N?(0,H.jsx)(b,{children:(0,H.jsxs)(j,{children:[(0,H.jsx)(h,{dangerouslySetInnerHTML:q(n)}),(0,H.jsx)(p,{dangerouslySetInnerHTML:q(t)}),(0,H.jsx)(A,{children:N?(0,H.jsx)("div",{children:O.map((e=>(0,H.jsxs)(I,{children:[(0,H.jsx)(D,{children:F(e.title)}),K(e.section)]},e.title)))}):K(B||[])})]})}):(0,H.jsx)(r.A,{justify:"center",align:"middle",children:(0,H.jsx)(x,{children:(0,H.jsxs)(i.A,{lg:24,md:24,sm:24,xs:24,children:[(0,H.jsx)(h,{dangerouslySetInnerHTML:q(n)}),(0,H.jsx)(p,{dangerouslySetInnerHTML:q(t)}),P&&(0,H.jsx)(g,{children:G.map((e=>(0,H.jsxs)(f,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(u,{children:F(e.title)}),(0,H.jsx)(y,{children:F(e.subtitle)})]}),(0,H.jsx)(w,{dangerouslySetInnerHTML:q(e.content)})]},e.title)))}),o&&(0,H.jsx)(s.$,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:F(o)})]})})})})})}))}}]);
//# sourceMappingURL=416.c9704345.chunk.js.map