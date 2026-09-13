"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[170],{170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(5043),a=n(3364),i=n(7252),o=n(579);const d=(0,r.lazy)((()=>Promise.resolve().then(n.bind(n,1766)))),l=(0,r.lazy)((()=>n.e(538).then(n.bind(n,8538)))),s=()=>((0,r.useEffect)((()=>{window.scrollTo({top:0})}),[]),(0,o.jsxs)(d,{children:[(0,o.jsx)(l,{}),(0,o.jsx)(a.A,{title:"Notice",items:i.A,basePath:"/notice"})]}))},3364:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(5043),a=n(3239),i=n(180),o=n(6615),d=n(4212),l=n(1688),s=n(9),c=n(579);const{Title:m,Text:p}=a.A,u=s.Ay.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
`,y=(0,s.Ay)(i.A)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;

  .ant-card-body {
    padding: 1.75rem;
  }
`,x=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`,g=s.Ay.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,h=s.Ay.button`
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
`,b=e=>{let{title:t,items:n,basePath:a}=e;const i=(0,l.W6)(),[s,b]=(0,r.useState)("\uc804\uccb4"),f=(0,r.useMemo)((()=>["\uc804\uccb4",...Array.from(new Set(n.map((e=>e.category))))]),[n]),v=(0,r.useMemo)((()=>"\uc804\uccb4"===s?n:n.filter((e=>e.category===s))),[n,s]);return(0,c.jsxs)(u,{children:[(0,c.jsx)(m,{level:2,style:{textAlign:"center",marginBottom:"2rem"},children:t}),(0,c.jsx)(g,{children:f.map((e=>(0,c.jsx)(h,{type:"button",$active:s===e,onClick:()=>b(e),children:e},e)))}),(0,c.jsx)(o.Ay,{itemLayout:"vertical",dataSource:v,renderItem:e=>(0,c.jsxs)(y,{hoverable:Boolean(a),onClick:()=>{return t=e.id,void(a&&i.push(`${a}/${t}`));var t},children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(d.A,{color:"gold",children:e.category}),(0,c.jsx)(p,{type:"secondary",children:e.date})]}),(0,c.jsx)(m,{level:4,style:{marginTop:0},children:e.title})]},e.id)})]})}},7252:(e,t,n)=>{n.d(t,{A:()=>r});const r=[{id:"4",category:"NOTICE",title:"[\ud2c8\ud2c8] \uc11c\ube44\uc2a4 \uc885\ub8cc \ubc0f \ud658\ubd88 \uc548\ub0b4",date:"2026-09-13",content:"\uc5d0\uc774\uc804\ud2b8 \uc5ec\ub7ec\ubd84 \uc548\ub155\ud558\uc138\uc694.\n(\uc8fc)\uc544\uc774\ub9ac\uc2a4\ub7a9\uc758 \ub300\ud45c, \uc544\uc774\ub9ac\uc2a4\uc785\ub2c8\ub2e4.\n\n\uc0ac\uc5c5\uc744 \uc2dc\uc791\ud558\uae30 \uc804\ubd80\ud130 \uc9c0\uae08 \uc774 \uc2dc\uac04\uae4c\uc9c0\ub3c4 \ub9ce\uc740 \uace0\ubbfc\uc744 \ud574 \uc654\uc2b5\ub2c8\ub2e4.\n\n\uace0\uc18c\uc640 \uc18c\uc1a1\uc744 \ube44\ub86f\ud55c \ubc95\uc801 \uc808\ucc28\ub97c \ubcd1\ud589\ud558\uba70 \uc11c\ube44\uc2a4\ub97c \uac1c\uc2dc \ubc0f \uc9c4\ud589\ud558\uace0\uc790 \ud588\uace0,\n\ucda9\ubd84\ud788 \uac10\uc218 \uac00\ub2a5\ud55c \uc815\ub3c4\uc758 \uc704\ud5d8\uc744 \uac10\uc218\ud558\uace0 \uc11c\ube44\uc2a4\ub97c \uc7ac\uac1c\ud558\uace0\uc790 \ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uadf8\uac83\uc774 \uc81c\uac00 \uc0dd\uac01\ud558\ub294 \uc0ac\uc5c5\uc774\ub2c8\uae4c\uc694.\n\n\ud558\uc9c0\ub9cc \uadf8\ub807\uac8c \ud558\uace0 \ub098\ub2c8\n\uc815\uc791 \ub300\ud45c\uc778 \uc81c\uac00 \ub0a9\ub4dd\ud560 \uc218 \uc788\ub294 \uc218\uc900\uc758 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\n\uadf8\ub807\uae30\uc5d0 (\uc8fc)\uc544\uc774\ub9ac\uc2a4\ub7a9\uc740 \ud2c8\ud2c8\uc758 \uc11c\ube44\uc2a4\ub97c \uc885\ub8cc, \uac1c\uc778\uc815\ubcf4 \uc0ad\uc81c\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4.\n\n\ub610\ud55c, \uc11c\ube44\uc2a4 \uc911\ub2e8 \uc2dc\uc810 \uc774\uc804 \uc5d0\uc774\uc804\ud2b8\uaed8\uc11c \ubcf4\uc720\ud558\uace0 \uacc4\uc2e0 \u2018\uc2e4\ubc84 \ud06c\ub808\ub527\u2019\uc758 \ud658\ubd88 \uc5ed\uc2dc \ub3d9\uc2dc\uc5d0 \uc9c4\ud589\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.\n\uc2e0\uccad \ubc29\ubc95 \ubc0f \uc9c4\ud589 \uc77c\uc790\ub294 \ud558\uae30 \ub0b4\uc6a9\uc744 \ucc38\uace0\ud558\uc5ec \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.\n\n## [\uc9c4\ud589 \uc77c\uc790]\n\n### \u2018\uc2e4\ubc84 \ud06c\ub808\ub527\u2019 \ud658\ubd88 \uc2e0\uccad\n2026. 09. 14(\uc6d4) 00:00 ~ 2026. 09. 30(\uc218) 23:59 (17\uc77c\uac04)\n- \ud558\ub2e8\uc758 [\uc2e4\ubc84 \ud06c\ub808\ub527 \ud658\ubd88 \uc2e0\uccad] \ub9c1\ud06c\ub97c \ud1b5\ud574 \ud658\ubd88 \uc2e0\uccad\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n### \ud658\ubd88 \uc644\ub8cc \ubc0f \uac1c\uc778\uc815\ubcf4 \uc0ad\uc81c \uc77c\uc2dc\n2026. 10. 14(\uc218)\n- \ud574\ub2f9 \uc2dc\uc810\ubd80\ud130 \ub2f9\uc0ac\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub4f1\ub85d\ub41c \uac1c\uc778\uc815\ubcf4\ub97c \uc804\ubd80 \uc0ad\uc81c\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.\n- \ub2e8, \ubc95\ub960\uc0c1 \uc758\ubb34 \ubcf4\uad00\ud574\uc57c \ud558\ub294 \uc815\ubcf4(\uc804\uc790\uc0c1\uac70\ub798\ubc95\uc5d0 \ub530\ub978 \uacc4\uc57d \ub610\ub294 \uccad\uc57d\ucca0\ud68c\uc5d0 \ub300\ud55c \uae30\ub85d \ub4f1)\ub294 \ud574\ub2f9 \ubc95\ub960\uc5d0 \uba85\uc2dc\ub41c \uae30\uac04 \ub3d9\uc548 \ubcc4\ub3c4\uc758 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ubd84\ub9ac \ubcf4\uad00\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.\n\n\ucd94\uac00\uc801\uc778 \ubb38\uc758 \uc0ac\ud56d\uc774 \uc788\uc744 \uacbd\uc6b0 contact@irislab.co.kr\ub85c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4. (\uc804\ud654 \uc218\uc2e0 \ubd88\uac00)\n\n\ud55c \ubc88\ub9cc \ub354 \uafc8\uc744 \uafb8\uace0 \uc2f6\uc5c8\ub2e4\uace0 \ub9d0\ud55c \uacfc\uac70\uc758 \uc800\uc5d0\uac8c\n\uafc8\uc740 \uc774\ub8e8\uc5c8\uc9c0\ub9cc, \uc544\ubb34\uac83\ub3c4 \ub0a8\uc740 \uac74 \uc5c6\uc5c8\ub2e4\uace0 \ub9d0\ud558\uace0 \uc2f6\ub124\uc694.\n\n\uac10\uc0ac\ud558\uace0, \uc8c4\uc1a1\ud588\uc2b5\ub2c8\ub2e4.\n\n2026. 09. 13\n\n[\uc2e4\ubc84 \ud06c\ub808\ub527 \ud658\ubd88 \uc2e0\uccad]\nhttps://forms.gle/hpNYBRCVKayubd468\n\n\uc218\uc815 2026. 09. 13 19:53) \ucd94\uac00 \ub0b4\uc6a9 \uc0ad\uc81c \ubc0f \ubb38\uc7a5 \uc5b4\uc0c9\ud568 \uc218\uc815"},{id:"3",category:"NOTICE",title:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ud3b8 \uc548\ub0b4",date:"2026-08-25",content:"- \uba54\ub274 \ubc0f \uac01\uc885 \ub0b4\uc6a9 \ucd94\uac00"},{id:"2",category:"NOTICE",title:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ud3b8 \uc548\ub0b4",date:"2026-08-14",content:"- \uc6f9\uc0ac\uc774\ud2b8 \uad6c\uc870 \ubcc0\uacbd, \uc870\uc9c1\ub3c4 \ubc0f \uc11c\ube44\uc2a4 \ucd94\uac00"},{id:"1",category:"NOTICE",title:"\uc6f9\uc0ac\uc774\ud2b8 \uac1c\ud3b8 \ubc0f \ucc44\uc6a9 \uac8c\uc2dc\ud310 \uc624\ud508",date:"2026-05-30",content:"- \uacf5\uc9c0\uc0ac\ud56d \ubc0f \ucc44\uc6a9 \uac8c\uc2dc\ud310\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}]}}]);
//# sourceMappingURL=170.005d4a71.chunk.js.map