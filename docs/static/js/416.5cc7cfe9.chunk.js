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
`;var r=t(579);const o=e=>{let{color:n,children:t,onClick:o}=e;return(0,r.jsx)(i,{color:n,onClick:o,children:t})}},9416:(e,n,t)=>{t.r(n),t.d(n,{default:()=>M});var i=t(1645),r=t(7419),o=t(9281),a=t(1688),d=t(3614),s=t(5639),l=t(2646),c=t(9);const h=(0,c.Ay)("section")`
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
`,m=(0,c.Ay)("h6")`
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
`,x=(0,c.Ay)("p")`
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
`,p=(0,c.Ay)("div")`
  width: min(100%, 760px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,g=(0,c.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,f=(0,c.Ay)(p)`
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
`,u=(0,c.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,w=(0,c.Ay)(r.A)`
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
`,y=(0,c.Ay)("div")`
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
`,j=(0,c.Ay)("div")`
  width: ${e=>{let{$tight:n}=e;return n?"108px":"100%"}};
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;

  img {
    margin: 0 auto;
  }
`,b=(0,c.Ay)("h3")`
  margin: 0;
  color: #1f1f1f;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
`,A=(0,c.Ay)("p")`
  margin: 0.35rem 0 0;
  color: #d4a017;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,v=(0,c.Ay)("p")`
  margin: 0.75rem 0 0;
  color: #606060;
  font-size: 0.95rem;
  line-height: 1.65;
  white-space: pre-line;
`,$=(0,c.Ay)("section")`
  width: 100%;

  & + & {
    margin-top: 2.5rem;
  }
`,k=(0,c.Ay)("h2")`
  margin: 0 0 1rem;
  color: #404041;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: left;

  @media only screen and (max-width: 575px) {
    font-size: 1.15rem;
  }
`,z=(0,c.Ay)("button")`
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

  &:hover {
    border-color: #d4a017;
    background: #d4a017;
    color: #ffffff;
  }
`,C=(0,c.Ay)("p")`
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
`;var I=t(579);const M=(0,o.C)()((e=>{let{title:n,content:t,button:o,icon:c,section:M,groups:S,id:L,t:D}=e;const H=(0,a.W6)(),T=e=>({__html:D(e)}),B=e=>{e&&(/^https?:\/\//i.test(e)?window.open(e,"_blank","noopener,noreferrer"):H.push(e))},O="object"===typeof M&&M.length>0,_="object"===typeof S&&S.length>0,F="service"===L,G=["products","companies","brands","teams"].includes(L||""),W=e=>(0,I.jsx)(w,{$stacked:G,gutter:G?[12,12]:[24,24],children:e.map(((e,n)=>(0,I.jsx)(i.A,{lg:G?12:7,md:G?12:8,sm:G?24:12,xs:24,children:(0,I.jsxs)(y,{$stacked:G,onClick:()=>B(e.link),children:[(0,I.jsx)(j,{$tight:F,children:(0,I.jsx)(l.A,{src:e.icon||c||"",width:"120px",height:"120px"})}),G?(0,I.jsxs)("div",{children:[(0,I.jsx)(b,{children:D(e.title||"")}),(0,I.jsx)(A,{children:D(e.subtitle||"")}),(0,I.jsx)(v,{dangerouslySetInnerHTML:T(e.content)}),e.link&&(0,I.jsx)(z,{type:"button",onClick:n=>{n.stopPropagation(),B(e.link)},children:"\ubc14\ub85c\uac00\uae30"})]}):(0,I.jsx)(C,{$wide:F,dangerouslySetInnerHTML:T(e.content)})]})},`${e.title}-${n}`)))});return(0,I.jsx)(h,{id:L,children:(0,I.jsx)(d.q7,{direction:"up",triggerOnce:!0,children:O||_?(0,I.jsx)(g,{children:(0,I.jsxs)(f,{children:[(0,I.jsx)(m,{dangerouslySetInnerHTML:T(n)}),(0,I.jsx)(x,{dangerouslySetInnerHTML:T(t)}),(0,I.jsx)(u,{children:_?(0,I.jsx)("div",{children:S.map((e=>(0,I.jsxs)($,{children:[(0,I.jsx)(k,{children:D(e.title)}),W(e.section)]},e.title)))}):W(M||[])})]})}):(0,I.jsx)(r.A,{justify:"center",align:"middle",children:(0,I.jsx)(p,{children:(0,I.jsxs)(i.A,{lg:24,md:24,sm:24,xs:24,children:[(0,I.jsx)(m,{dangerouslySetInnerHTML:T(n)}),(0,I.jsx)(x,{dangerouslySetInnerHTML:T(t)}),o&&(0,I.jsx)(s.$,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:D(o)})]})})})})})}))}}]);
//# sourceMappingURL=416.5cc7cfe9.chunk.js.map