import{R as s}from"./chunks/index.0d03162d.js";import{B as b,H as k}from"./chunks/Box.607ce137.js";import"./chunks/styles.module.d7c222e5.js";import{j as t}from"./chunks/jsx-runtime.44949ced.js";import{u as L}from"./chunks/useCookies.35608aca.js";import{S as l}from"./chunks/Stack.b172f5be.js";import{P as T}from"./chunks/TransitionGroupContext.59b44132.js";import{T as d}from"./chunks/TextField.c1c431ef.js";import{C as E}from"./chunks/Collapse.805f19a0.js";import{B as P}from"./chunks/Button.69891491.js";import"./chunks/ButtonBase.1805c610.js";import"./chunks/utils.0a856f7b.js";import"./chunks/index.469f5992.js";import"./chunks/Menu.99b9d12d.js";const R=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),G=({url:e="https://api.kbve.com/api/auth/local/",display:o=!0})=>{const n=s.useRef(null),[r,i]=s.useState(!1),[a,c]=s.useState(""),[u,p]=s.useState(""),[m,h]=L(["user"]),[f,x]=s.useState(!1);s.useState(!1);return t.exports.jsx(l,{direction:"column",alignItems:"center",children:t.exports.jsx(T,{variant:"outlined",children:t.exports.jsx(b,{component:"form",maxWidth:"sm",children:t.exports.jsxs(l,{direction:"column",justifyContent:"center",spacing:2,p:2,sx:{flex:1},children:[t.exports.jsx(d,{id:"email-input",type:"email",label:"Email",value:a,error:""!==a&&!R(a),onChange:e=>c(e.target.value),disabled:f}),t.exports.jsx(d,{id:"password-input",type:"password",label:"Password",value:u,error:""!==u,onChange:e=>p(e.target.value),disabled:f}),t.exports.jsx(k,{ref:n,sitekey:"e77af3f6-a0e3-44b7-82f8-b7c098d38022",onVerify:(e,s)=>((e,s)=>{console.log({token:e,eKey:s}),i(e)})(e,s)}),t.exports.jsx(E,{in:!!r,children:t.exports.jsx(l,{direction:"column",alignItems:"flex-end",children:t.exports.jsx(P,{variant:"contained",fullWidth:!0,onClick:async s=>{s.preventDefault(),x(!0),await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:a,password:u,token:r})}).then((async e=>{if(!e.ok)return x(!1),n.current?.resetCaptcha(),console.error(`\tLoginConfirmation::An Error Occurred (${e.statusText})`),console.log(`Error: ${e}`),new Error(e.statusText);const s=await e.json().then((e=>{console.log("Data:",e),console.log("JWT",e.jwt),console.log("User",e.user),new Promise(((s,t)=>{s((e=>{h("user",e,{path:"/",domain:".kbve.com",secure:!0,sameSite:"strict"})})(e.user))})).then(window.location="https://kbve.com/profile")}));console.log(`\tLoginConfirmation::Success:\n${JSON.stringify(s,null,2)}`)}))},disabled:f,children:"Login"})})})]})})})})};export{G as default};