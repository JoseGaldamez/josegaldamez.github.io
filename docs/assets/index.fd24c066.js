import{j as s,R as l,a as u,b as d,B as a}from"./vendor.00d7ac71.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};f();const r=s.exports.jsx,m=s.exports.jsxs,p=s.exports.Fragment,h=()=>m(p,{children:[r("header",{children:"Aqu\xED va el menu"}),r("main",{children:"contenido"}),r("footer",{children:"Footer"})]}),g=()=>r(l,{children:r(u,{path:"/",element:r(h,{})})});d.render(r(a,{children:r(g,{})}),document.getElementById("root"));
