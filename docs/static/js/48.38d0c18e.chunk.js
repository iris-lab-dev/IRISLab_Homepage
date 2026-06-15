"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[48],{3364:(e,r,t)=>{t.d(r,{A:()=>f});var a=t(5043),i=t(3239),o=t(180),n=t(6615),l=t(4212),s=t(1688),d=t(9),c=t(579);const{Title:m,Text:u}=i.A,p=d.Ay.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
`,x=(0,d.Ay)(o.A)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;

  .ant-card-body {
    padding: 1.75rem;
  }
`,h=d.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`,b=d.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,y=d.Ay.button`
  border: 1px solid ${e=>{let{$active:r}=e;return r?"#d4a106":"#d9d9d9"}};
  background: ${e=>{let{$active:r}=e;return r?"#fff7e6":"#ffffff"}};
  color: ${e=>{let{$active:r}=e;return r?"#ad6800":"#595959"}};
  border-radius: 999px;
  padding: 0.35rem 1rem;
  cursor: pointer;
  font-weight: ${e=>{let{$active:r}=e;return r?600:400}};
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4a106;
    color: #ad6800;
  }
`,f=e=>{let{title:r,items:t,basePath:i}=e;const o=(0,s.W6)(),[d,f]=(0,a.useState)("\uc804\uccb4"),g=(0,a.useMemo)((()=>["\uc804\uccb4",...Array.from(new Set(t.map((e=>e.category))))]),[t]),v=(0,a.useMemo)((()=>"\uc804\uccb4"===d?t:t.filter((e=>e.category===d))),[t,d]);return(0,c.jsxs)(p,{children:[(0,c.jsx)(m,{level:2,style:{textAlign:"center",marginBottom:"2rem"},children:r}),(0,c.jsx)(b,{children:g.map((e=>(0,c.jsx)(y,{type:"button",$active:d===e,onClick:()=>f(e),children:e},e)))}),(0,c.jsx)(n.Ay,{itemLayout:"vertical",dataSource:v,renderItem:e=>(0,c.jsxs)(x,{hoverable:Boolean(i),onClick:()=>{return r=e.id,void(i&&o.push(`${i}/${r}`));var r},children:[(0,c.jsxs)(h,{children:[(0,c.jsx)(l.A,{color:"gold",children:e.category}),(0,c.jsx)(u,{type:"secondary",children:e.date})]}),(0,c.jsx)(m,{level:4,style:{marginTop:0},children:e.title})]},e.id)})]})}},5048:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var a=t(5043),i=t(3364),o=t(6720),n=t(579);const l=(0,a.lazy)((()=>Promise.resolve().then(t.bind(t,1766)))),s=(0,a.lazy)((()=>t.e(538).then(t.bind(t,8538)))),d=()=>((0,a.useEffect)((()=>{window.scrollTo({top:0,behavior:"smooth"})}),[]),(0,n.jsxs)(l,{children:[(0,n.jsx)(s,{}),(0,n.jsx)(i.A,{title:"Recruit",items:o.A,basePath:"/recruit"})]}))},6720:(e,r,t)=>{t.d(r,{A:()=>a});const a=[]}}]);
//# sourceMappingURL=48.38d0c18e.chunk.js.map