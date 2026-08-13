"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[170],{170:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(5043),i=r(3364),o=r(7252),n=r(579);const d=(0,a.lazy)((()=>Promise.resolve().then(r.bind(r,1766)))),l=(0,a.lazy)((()=>r.e(538).then(r.bind(r,8538)))),s=()=>((0,a.useEffect)((()=>{window.scrollTo({top:0})}),[]),(0,n.jsxs)(d,{children:[(0,n.jsx)(l,{}),(0,n.jsx)(i.A,{title:"Notice",items:o.A,basePath:"/notice"})]}))},3364:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(5043),i=r(3239),o=r(180),n=r(6615),d=r(4212),l=r(1688),s=r(9),c=r(579);const{Title:m,Text:p}=i.A,u=s.Ay.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
`,x=(0,s.Ay)(o.A)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;

  .ant-card-body {
    padding: 1.75rem;
  }
`,y=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`,h=s.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,b=s.Ay.button`
  border: 1px solid ${e=>{let{$active:t}=e;return t?"#d4a106":"#d9d9d9"}};
  background: ${e=>{let{$active:t}=e;return t?"#fff7e6":"#ffffff"}};
  color: ${e=>{let{$active:t}=e;return t?"#ad6800":"#595959"}};
  border-radius: 999px;
  padding: 0.35rem 1rem;
  cursor: pointer;
  font-weight: ${e=>{let{$active:t}=e;return t?600:400}};
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4a106;
    color: #ad6800;
  }
`,g=e=>{let{title:t,items:r,basePath:i}=e;const o=(0,l.W6)(),[s,g]=(0,a.useState)("\uc804\uccb4"),f=(0,a.useMemo)((()=>["\uc804\uccb4",...Array.from(new Set(r.map((e=>e.category))))]),[r]),v=(0,a.useMemo)((()=>"\uc804\uccb4"===s?r:r.filter((e=>e.category===s))),[r,s]);return(0,c.jsxs)(u,{children:[(0,c.jsx)(m,{level:2,style:{textAlign:"center",marginBottom:"2rem"},children:t}),(0,c.jsx)(h,{children:f.map((e=>(0,c.jsx)(b,{type:"button",$active:s===e,onClick:()=>g(e),children:e},e)))}),(0,c.jsx)(n.Ay,{itemLayout:"vertical",dataSource:v,renderItem:e=>(0,c.jsxs)(x,{hoverable:Boolean(i),onClick:()=>{return t=e.id,void(i&&o.push(`${i}/${t}`));var t},children:[(0,c.jsxs)(y,{children:[(0,c.jsx)(d.A,{color:"gold",children:e.category}),(0,c.jsx)(p,{type:"secondary",children:e.date})]}),(0,c.jsx)(m,{level:4,style:{marginTop:0},children:e.title})]},e.id)})]})}},7252:(e,t,r)=>{r.d(t,{A:()=>a});const a=[{id:"2",category:"NOTICE",title:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ud3b8 \uc548\ub0b4",date:"2026-08-14",content:"- \uc6f9\uc0ac\uc774\ud2b8 \uad6c\uc870 \ubcc0\uacbd, \uc870\uc9c1\ub3c4 \ubc0f \uc11c\ube44\uc2a4 \ucd94\uac00"},{id:"1",category:"NOTICE",title:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ud3b8 \ubc0f \ucc44\uc6a9 \uac8c\uc2dc\ud310 \uc624\ud508",date:"2026-05-30",content:"- \uacf5\uc9c0\uc0ac\ud56d \ubc0f \ucc44\uc6a9 \uac8c\uc2dc\ud310\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}]}}]);
//# sourceMappingURL=170.a6467398.chunk.js.map