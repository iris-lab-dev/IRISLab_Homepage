"use strict";(self.webpackChunkirislab=self.webpackChunkirislab||[]).push([[538],{2646:(i,t,e)=>{e.d(t,{A:()=>o});var s=e(579);const o=i=>{var t;let{src:e,width:o,height:n}=i;const r="png"===(null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase())?"png":"svg";return(0,s.jsx)("img",{src:`./img/${r}/${e}`,alt:e,width:o,height:n,style:{width:o,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},8538:(i,t,e)=>{e.r(t),e.d(t,{default:()=>a});var s=e(5043),o=e(2646);const n=(0,e(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${i=>i.show?"visible":"hidden"};
  opacity: ${i=>i.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=e(579);const a=()=>{const[i,t]=(0,s.useState)(!1),e=(0,s.useCallback)((()=>{const e=window.scrollY;!i&&e>350?t(!0):e<=350&&t(!1)}),[i]);(0,s.useEffect)((()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)})),[e]);return(0,r.jsx)(n,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},show:i,children:(0,r.jsx)(o.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.91fc6a7f.chunk.js.map