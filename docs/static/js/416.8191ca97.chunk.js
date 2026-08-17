"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[416],{2646:(e,n,t)=>{t.d(n,{A:()=>r});var i=t(579);const r=e=>{var n;let{src:t,width:r,height:o}=e;const a="png"===(null===(n=t.split(".").pop())||void 0===n?void 0:n.toLowerCase())?"png":"svg";return(0,i.jsx)("img",{src:`./img/${a}/${t}`,alt:t,width:r,height:o,style:{width:r,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},5639:(e,n,t)=>{t.d(n,{$:()=>o});const i=(0,t(9).Ay)("button")`
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
`;var r=t(579);const o=e=>{let{color:n,children:t,onClick:o}=e;return(0,r.jsx)(i,{color:n,onClick:o,children:t})}},9416:(e,n,t)=>{t.r(n),t.d(n,{default:()=>I});var i=t(1645),r=t(7419),o=t(9281),a=t(3614),d=t(5639),s=t(2646),l=t(9);const c=(0,l.Ay)("section")`
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
`,h=(0,l.Ay)("h6")`
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
`,m=(0,l.Ay)("p")`
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
`,x=(0,l.Ay)("div")`
  width: min(100%, 760px);

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,p=(0,l.Ay)("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 auto;
  width: min(100%, 1080px);
`,g=(0,l.Ay)(x)`
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
    ${m} {
      max-width: 100%;
    }
  }
`,f=(0,l.Ay)("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 100%;
`,w=(0,l.Ay)(r.A)`
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
`,u=(0,l.Ay)("div")`
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
`,y=(0,l.Ay)("div")`
  width: ${e=>{let{$tight:n}=e;return n?"108px":"100%"}};
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;

  img {
    margin: 0 auto;
  }
`,j=(0,l.Ay)("h3")`
  margin: 0;
  color: #1f1f1f;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
`,b=(0,l.Ay)("p")`
  margin: 0.35rem 0 0;
  color: #d4a017;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,A=(0,l.Ay)("p")`
  margin: 0.75rem 0 0;
  color: #606060;
  font-size: 0.95rem;
  line-height: 1.65;
  white-space: pre-line;
`,v=(0,l.Ay)("section")`
  width: 100%;

  & + & {
    margin-top: 2.5rem;
  }
`,$=(0,l.Ay)("h2")`
  margin: 0 0 1rem;
  color: #404041;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: left;

  @media only screen and (max-width: 575px) {
    font-size: 1.15rem;
  }
`,k=(0,l.Ay)("button")`
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
`,z=(0,l.Ay)("p")`
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
`;var C=t(579);const I=(0,o.C)()((e=>{let{title:n,content:t,button:o,icon:l,section:I,groups:M,id:S,t:L}=e;const D=e=>({__html:L(e)}),H=e=>{e&&(/^https?:\/\//i.test(e)?window.open(e,"_blank","noopener,noreferrer"):window.location.href=e)},T="object"===typeof I&&I.length>0,B="object"===typeof M&&M.length>0,O="service"===S,_=["products","companies","brands","teams"].includes(S||""),G=e=>(0,C.jsx)(w,{$stacked:_,gutter:_?[12,12]:[24,24],children:e.map(((e,n)=>(0,C.jsx)(i.A,{lg:_?12:7,md:_?12:8,sm:_?24:12,xs:24,children:(0,C.jsxs)(u,{$stacked:_,onClick:()=>H(e.link),children:[(0,C.jsx)(y,{$tight:O,children:(0,C.jsx)(s.A,{src:e.icon||l||"",width:"120px",height:"120px"})}),_?(0,C.jsxs)("div",{children:[(0,C.jsx)(j,{children:L(e.title||"")}),(0,C.jsx)(b,{children:L(e.subtitle||"")}),(0,C.jsx)(A,{dangerouslySetInnerHTML:D(e.content)}),e.link&&(0,C.jsx)(k,{type:"button",onClick:n=>{n.stopPropagation(),H(e.link)},children:"\ubc14\ub85c\uac00\uae30"})]}):(0,C.jsx)(z,{$wide:O,dangerouslySetInnerHTML:D(e.content)})]})},`${e.title}-${n}`)))});return(0,C.jsx)(c,{id:S,children:(0,C.jsx)(a.q7,{direction:"up",triggerOnce:!0,children:T||B?(0,C.jsx)(p,{children:(0,C.jsxs)(g,{children:[(0,C.jsx)(h,{dangerouslySetInnerHTML:D(n)}),(0,C.jsx)(m,{dangerouslySetInnerHTML:D(t)}),(0,C.jsx)(f,{children:B?(0,C.jsx)("div",{children:M.map((e=>(0,C.jsxs)(v,{children:[(0,C.jsx)($,{children:L(e.title)}),G(e.section)]},e.title)))}):G(I||[])})]})}):(0,C.jsx)(r.A,{justify:"center",align:"middle",children:(0,C.jsx)(x,{children:(0,C.jsxs)(i.A,{lg:24,md:24,sm:24,xs:24,children:[(0,C.jsx)(h,{dangerouslySetInnerHTML:D(n)}),(0,C.jsx)(m,{dangerouslySetInnerHTML:D(t)}),o&&(0,C.jsx)(d.$,{name:"submit",onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("mission"),children:L(o)})]})})})})})}))}}]);
//# sourceMappingURL=416.8191ca97.chunk.js.map