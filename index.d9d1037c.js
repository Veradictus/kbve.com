import{a as o}from"./chunks/index.8c3da851.js";import{b as E,H as T,B as O}from"./chunks/Menu.0814c075.js";import"./chunks/index.e3b0c442.ad3ca3d9.js";import{j as t}from"./chunks/jsx-runtime.547077c7.js";import{u as $}from"./chunks/useCookies.43712668.js";import{S as d,C as A}from"./chunks/Stack.bebd1ef7.js";import{P as B}from"./chunks/ButtonBase.4571d04e.js";import{T as l}from"./chunks/TextField.4fd77237.js";import"./chunks/index.698b27f6.js";//! IMPORT -> [START]
const I=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),q=({url:e="https://api.kbve.com/api/auth/local/register",display:s=!0})=>{const r=o.useRef(null),[a,n]=o.useState(!1),[i,c]=o.useState(""),[u,p]=o.useState(""),[m,x]=o.useState(""),[h,f]=o.useState(""),[j,g]=$(["user"]),[b,k]=o.useState(!1);//! Core -> [START] -> EOF
return t.exports.jsx(d,{direction:"column",alignItems:"center",children:t.exports.jsx(B,{variant:"outlined",children:t.exports.jsx(E,{component:"form",maxWidth:"sm",children:t.exports.jsxs(d,{direction:"column",justifyContent:"center",spacing:2,p:2,sx:{flex:1},children:[t.exports.jsx(l,{id:"username-input",type:"username",label:"Username",value:i,error:""!==i,onChange:e=>c(e.target.value),disabled:b}),t.exports.jsx(l,{id:"email-input",type:"email",label:"Email",value:u,error:""!==u&&!I(u),onChange:e=>p(e.target.value),disabled:b}),t.exports.jsx(l,{id:"password-input",type:"password",label:"Password",value:m,error:""!==m&&m!==h,onChange:e=>x(e.target.value),disabled:b}),t.exports.jsx(l,{id:"confirm-password-input",type:"password",label:"Confirm Password",value:h,error:""!==h&&m!==h,onChange:e=>f(e.target.value),disabled:b}),t.exports.jsx(T,{ref:r,sitekey:"e77af3f6-a0e3-44b7-82f8-b7c098d38022",onVerify:(e,t)=>((e,t)=>{console.log({token:e,eKey:t}),n(e)})(e,t)}),t.exports.jsx(A,{in:!!a,children:t.exports.jsx(d,{direction:"column",alignItems:"flex-end",children:t.exports.jsx(O,{variant:"contained",fullWidth:!0,onClick:async t=>{t.preventDefault(),k(!0),await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,email:u,password:m,token:a})}).then((async e=>{if(!e.ok)return k(!1),r.current?.resetCaptcha(),console.error(`\tRegisterConfirmation::An Error Occurred (${e.statusText})`),console.log(`Error: ${e}`),new Error(e.statusText);const t=await e.json().then((e=>{new Promise(((t,s)=>{t((e=>{g("user",e,{path:"/",domain:".kbve.com",secure:!0,sameSite:"strict"})})(e.user))})).then(window.location="https://kbve.com/profile")}));console.log(`\tRegisterConfirmation::Success:\n${JSON.stringify(t,null,2)}`)}))},disabled:b,children:"Sign Up"})})})]})})})})};export{q as default};