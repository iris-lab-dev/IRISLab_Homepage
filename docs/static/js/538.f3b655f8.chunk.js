"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[538],{2646:(t,i,e)=>{e.d(i,{A:()=>s});var o=e(579);const s=t=>{var i;let{src:e,width:s,height:n}=t;const r="png"===(null===(i=e.split(".").pop())||void 0===i?void 0:i.toLowerCase())?"png":"svg";return(0,o.jsx)("img",{src:`./img/${r}/${e}`,alt:e,width:s,height:n,style:{width:s,height:"auto",display:"block",objectFit:"contain",maxWidth:"100%"}})}},8538:(t,i,e)=>{e.r(i),e.d(i,{default:()=>a});var o=e(5043),s=e(2646);const n=(0,e(9).Ay)("div")`
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
  visibility: ${t=>t.show?"visible":"hidden"};
  opacity: ${t=>t.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=e(579);const a=()=>{const[t,i]=(0,o.useState)(!1),e=(0,o.useCallback)((()=>{const e=window.scrollY;!t&&e>350?i(!0):e<=350&&i(!1)}),[t]);(0,o.useEffect)((()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)})),[e]);return(0,r.jsx)(n,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},show:t,children:(0,r.jsx)(s.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.f3b655f8.chunk.js.map