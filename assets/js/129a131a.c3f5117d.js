"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[842],{5505:(s,e,i)=>{i.r(e),i.d(e,{default:()=>N});var d,r,l,a,n,c,u=i(5276),t=i(797),h=(i(6540),i(3698)),x=i(1805),m=i(9594),p=i(5668),j=i(5225),g=i(4848);const o="Grids",v="Fully customizable and responsive CSS grids.";const N=function(){const s=(0,t.A)(),{siteConfig:e={}}=s,{customFields:{pureVersion:i}}=e;return(0,g.jsxs)(h.A,{description:v,title:o,children:[(0,g.jsx)(x.A,{description:v,title:o}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(p.A,{heading:"Introduction to Pure Grids"}),(0,g.jsx)("p",{children:"Pure Grids are easy to work with, and very powerful. There are a few simple concepts to keep in mind:"}),(0,g.jsxs)("dl",{children:[(0,g.jsx)("dt",{children:"Grid classes vs. unit classes"}),(0,g.jsxs)("dd",{children:["Pure Grids consist of two types of classes: the grid class (",(0,g.jsx)("code",{children:"pure-g"}),") and unit classes (",(0,g.jsx)("code",{children:"pure-u"})," or ",(0,g.jsx)("code",{children:"pure-u-*"}),")"]}),(0,g.jsx)("dt",{children:"The widths of the units are fractions"}),(0,g.jsxs)("dd",{children:["Units have various class names that represent their widths. For example, ",(0,g.jsx)("code",{children:"pure-u-1-2"})," has a width of 50%, whereas ",(0,g.jsx)("code",{children:"pure-u-1-5"})," would have a width of 20%."]}),(0,g.jsx)("dt",{children:"All child elements of a grid must be units"}),(0,g.jsxs)("dd",{children:["Child elements contained within an element with a ",(0,g.jsx)("code",{children:"pure-g"})," classname ",(0,g.jsx)("em",{children:"must"})," be a grid unit with a ",(0,g.jsx)("code",{children:"pure-u"})," or ",(0,g.jsx)("code",{children:"pure-u-*"})," classname."]}),(0,g.jsx)("dt",{children:"Content goes inside grid units"}),(0,g.jsx)("dd",{children:"All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly."})]}),(0,g.jsx)("p",{children:"Let's start with a simple example. Here's a grid with three columns:"}),(0,g.jsx)(m.A,{wrap:!0,children:(0,j.dx)(d||(d=(0,u.A)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                            <div class="pure-u-1-3"><p>Thirds</p></div>\n                        </div>\n                    '])))}),(0,g.jsx)(p.A,{heading:"Grids Units Sizes"}),(0,g.jsxs)("p",{children:["Pure ships with both a ",(0,g.jsx)("b",{children:"5ths"})," and ",(0,g.jsx)("b",{children:"24ths"})," based grid. Depicted below are the available units that can be appended to the ",(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"pure-u-*"})})," classname where ",(0,g.jsx)("code",{children:"*"})," is one of the unit fractions listed below. For example the unit classname for 50% width is: ",(0,g.jsx)("code",{children:"pure-u-1-2"}),"."]}),(0,g.jsx)("h3",{children:"5ths-Based Units"}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-5"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-5"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"2-5"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-2-5"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"3-5"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-3-5"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"4-5"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-4-5"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-1"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-1"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"5-5"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-5-5"})})})]}),(0,g.jsx)("h3",{children:"24ths-Based Units"}),(0,g.jsxs)("div",{className:"grids-unit pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-12"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-12"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"2-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-2-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"3-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-3-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-8"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-8"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"4-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-4-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-6"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-6"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"5-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-5-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-4"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-4"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"6-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-6-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"7-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-7-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-3"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-3"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"8-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-8-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"3-8"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-3-8"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"9-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-9-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"5-12"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-5-12"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"10-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-10-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"11-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-11-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-2"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-2"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"12-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-12-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"13-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-13-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"7-12"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-7-12"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"14-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-14-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"5-8"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-5-8"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"15-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-15-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"2-3"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-2-3"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"16-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-16-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"17-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-17-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"3-4"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-3-4"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"18-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-18-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"19-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-19-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"5-6"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-5-6"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"20-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-20-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"7-8"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-7-8"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"21-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-21-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"11-12"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-11-12"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"22-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-22-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"23-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-23-24"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1"})})})]}),(0,g.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"1-1"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-1-1"})})})]}),(0,g.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,g.jsx)("div",{className:"grids-unit-width pure-u",children:"24-24"}),(0,g.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,g.jsx)("div",{className:"pure-g",children:(0,g.jsx)("div",{className:"grids-unit-bar pure-u-24-24"})})})]}),(0,g.jsx)("h3",{children:"Custom Unit Sizes"}),(0,g.jsxs)("p",{children:["We are working on building tools to allow people to customize Pure Grids. The first low-level tools, the ",(0,g.jsx)("b",{children:(0,g.jsx)("a",{href:"https://github.com/ericf/rework-pure-grids",children:"Pure Grids Rework Plugin"})}),", is available to use today\u2014we use this tool to generate Pure's built-in unit sizes."]}),(0,g.jsx)(p.A,{heading:"Pure Responsive Grids"}),(0,g.jsx)("p",{children:"Pure has a mobile-first responsive grid system that can be used declaratively through CSS class names. It's a robust and flexible grid  that builds on top of the default grid."}),(0,g.jsx)("h3",{children:"Including on Your Page"}),(0,g.jsxs)("p",{children:["Since media queries cannot be over-written, we ",(0,g.jsx)("u",{children:"do not"})," include the grid system as part of ",(0,g.jsx)("code",{children:"pure.css"}),". You'll have to pull it in as a separate CSS file. You can do this by adding the following ",(0,g.jsx)("code",{children:"<link>"})," tag to your page."]}),(0,g.jsx)(m.A,{children:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@'+i+'/build/grids-responsive-min.css" />'}),(0,g.jsx)("h3",{children:"Pure's Regular Grid vs. Responsive Grid"}),(0,g.jsxs)("p",{children:["The best way to understand the difference between Pure's regular grid and a responsive grid is through an example.The snippet below shows how regular Pure Grids are written. These grids are unresponsive. They'll always be ",(0,g.jsx)("code",{children:"width: 33.33%"}),", irrespective of the width of the screen."]}),(0,g.jsx)(m.A,{wrap:!0,children:(0,j.dx)(r||(r=(0,u.A)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1-3"> ... </div>\n                            <div class="pure-u-1-3"> ... </div>\n                            <div class="pure-u-1-3"> ... </div>\n                        </div>\n                    '])))}),(0,g.jsxs)("p",{children:["Next, let's look at a responsive grid. Elements within this grid will be ",(0,g.jsx)("code",{children:"width: 100%"})," on small screens, but will shrink to become ",(0,g.jsx)("code",{children:"width: 33.33%"})," on medium-sized screens and above."]}),(0,g.jsx)(m.A,{wrap:!0,children:(0,j.dx)(l||(l=(0,u.A)(['\n                        <div class="pure-g">\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>\n                        </div>\n                    '])))}),(0,g.jsx)("h3",{children:"Default Media Queries"}),(0,g.jsx)("p",{children:"When using Responsive Grids, you can control how the grid behaves at specific breakpoints by adding class names. Pure's default responsive grids comes with the following class names and media query breakpoints."}),(0,g.jsx)("div",{className:"table-responsive",children:(0,g.jsxs)("table",{className:"mq-table pure-table-bordered pure-table",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{className:"highlight",children:"Key"}),(0,g.jsx)("th",{className:"highlight",children:"CSS Media Query"}),(0,g.jsx)("th",{children:"Applies"}),(0,g.jsx)("th",{children:"Classname"})]})}),(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("i",{children:"None"})}),(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("i",{children:"None"})}),(0,g.jsx)("td",{children:(0,g.jsx)("i",{children:"Always"})}),(0,g.jsx)("td",{children:(0,g.jsx)("code",{children:".pure-u-*"})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"sm"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 35.5em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"568px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"sm"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"md"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 48em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"768px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"md"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"lg"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 64em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"1024px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"lg"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"xl"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 80em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"1280px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"xl"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"xxl"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 120em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"1920px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"xxl"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"xxxl"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 160em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"2560px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"xxxl"}),"-*"]})})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"highlight",children:(0,g.jsx)("b",{children:(0,g.jsx)("code",{children:"x4k"})})}),(0,g.jsx)("td",{className:"mq-table-mq highlight",children:(0,g.jsx)("code",{children:"@media screen and (min-width: 240em)"})}),(0,g.jsxs)("td",{children:["\u2265 ",(0,g.jsx)("b",{children:"3840px"})]}),(0,g.jsx)("td",{children:(0,g.jsxs)("code",{children:[".pure-u-",(0,g.jsx)("b",{children:"x4k"}),"-*"]})})]})]})]})}),(0,g.jsx)("h3",{children:"Using Relative Units for Widths"}),(0,g.jsxs)("p",{children:["You may have noticed that we use ",(0,g.jsx)("code",{children:"em"})," for our default CSS Media Query widths instead of ",(0,g.jsx)("code",{children:"px"}),". This was a conscious decision since it allows the Media Queries to respond appropriately when people zoom the webpage. Check out ",(0,g.jsx)("a",{href:"https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/",children:"this article by Brad Frost"})," for some background information on using relative units within Media Queries."]}),(0,g.jsxs)("p",{children:["If you do want to use units other than ",(0,g.jsx)("code",{children:"em"}),", you can always modify the default Media Queries on the ",(0,g.jsx)("a",{href:"/start/#build-your-pure-starter-kit",children:"Get Started"})," page. Converting from ",(0,g.jsx)("code",{children:"em"})," to ",(0,g.jsx)("code",{children:"px"})," is pretty simple:"]}),(0,g.jsx)(m.A,{wrap:!0,children:"1em == 16px *"}),(0,g.jsx)("p",{children:(0,g.jsxs)("small",{children:["* The ",(0,g.jsx)("code",{children:"em"})," to ",(0,g.jsx)("code",{children:"px"})," conversion is based on the browser's default font size, which is generally ",(0,g.jsx)("code",{children:"16px"}),", but can be overridden by a user in their browser settings."]})}),(0,g.jsx)("h3",{children:"An Example of Pure Responsive Grids"}),(0,g.jsxs)("p",{children:["The example below leverages Pure's Responsive Grid to create a row with four columns. The columns stack on small screens, take up ",(0,g.jsx)("code",{children:"width: 50%"})," on medium-sized screens, and ",(0,g.jsx)("code",{children:"width: 25%"})," on large screens."]}),(0,g.jsxs)("p",{children:["This is done by adding the ",(0,g.jsx)("code",{children:".pure-u-1"})," class for small screens, ",(0,g.jsx)("code",{children:".pure-u-md-1-2"})," for medium-sized screens, and ",(0,g.jsx)("code",{children:".pure-u-lg-1-4"})," for large screens. ",(0,g.jsx)("em",{children:"Resize the page to see the grid respond to the screen size."})]})]}),(0,g.jsx)("div",{className:"grids-example",children:(0,g.jsxs)("div",{className:"pure-g",children:[(0,g.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Lorem Ipsum"}),(0,g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})}),(0,g.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Dolor Sit Amet"}),(0,g.jsx)("p",{children:"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."})]})}),(0,g.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Proident laborum"}),(0,g.jsx)("p",{children:"In culpa qui officia deserunt mollit anim id est laborum. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]})}),(0,g.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Praesent consectetur"}),(0,g.jsx)("p",{children:"Integer vitae lectus accumsan, egestas dui eget, ullamcorper urn. In feugiat tortor at turpis rhoncus tincidunt. Duis sed porttitor ante, eget venenatis lectus."})]})}),(0,g.jsx)("div",{className:"pure-u-1",children:(0,g.jsx)("img",{className:"pure-img",src:"https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg",alt:"By Sylwia Bartyzel from unsplash.com"})}),(0,g.jsx)("div",{className:"pure-u-2-5",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Two-Fifth Column"}),(0,g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum dui turpis."})]})}),(0,g.jsx)("div",{className:"pure-u-3-5",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Three-Fifth Column"}),(0,g.jsx)("p",{children:"Quisque ac magna eget est porta varius ut eget quam. Curabitur tincidunt gravida nisl."}),(0,g.jsx)("p",{children:"Fusce accumsan, sem vitae tempus tempor, nulla lectus interdum felis, eget molestie urna mauris vel elit. Curabitur vel ipsum nulla."})]})})]})}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(p.A,{heading:"Grids on Mobile"}),(0,g.jsxs)("p",{children:["Pure's default grid system is mobile-first. If you want to have a grid on small screens, just use the ",(0,g.jsx)("code",{children:"pure-u-*"})," classnames on your elements."]})]}),(0,g.jsx)("div",{className:"grids-example",children:(0,g.jsxs)("div",{className:"pure-g",children:[(0,g.jsx)("div",{className:"pure-u-1-3",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Thirds"}),(0,g.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})}),(0,g.jsx)("div",{className:"pure-u-1-3",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Thirds"}),(0,g.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})}),(0,g.jsx)("div",{className:"pure-u-1-3",children:(0,g.jsxs)("div",{className:"l-box",children:[(0,g.jsx)("h3",{children:"Thirds"}),(0,g.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})})]})}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(p.A,{heading:"Responsive Images"}),(0,g.jsxs)("p",{children:["When using Responsive Grids, you'll want your images to be fluid as well so they grow and shrink with the content, while maintaining the correct ratio. To do this, just add the ",(0,g.jsx)("code",{children:".pure-img"})," class on them. Check out the example below."]})]}),(0,g.jsx)("div",{className:"grids-example",children:(0,g.jsxs)("div",{className:"pure-g",children:[(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg",alt:"Peyto Lake"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg",alt:"Train"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg",alt:"T-Shirt Store"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg",alt:"Mountain"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7478/16185861115_4ed6353a97.jpg",alt:"Miami"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/4068/4666556755_091acf3253.jpg",alt:"BCE Place, Toronto"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm6.staticflickr.com/7313/13136053333_f04b335933.jpg",alt:"Banff"})}),(0,g.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,g.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/7628/16754137141_27dcaabd24.jpg",alt:"Boston North Point Park"})})]})}),(0,g.jsxs)("div",{className:"content",children:[(0,g.jsx)(p.A,{heading:"Applying Padding and Borders to Grid Units"}),(0,g.jsxs)("p",{children:["To add borders and padding to Pure Grids, you have two options. The first option is to nest a ",(0,g.jsx)("code",{children:"<div>"})," inside each Grid unit and style the child container:"]}),(0,g.jsx)(m.A,{wrap:!0,children:(0,j.dx)(a||(a=(0,u.A)(['\n                        <style>\n                            .l-box {\n                                padding: 1em;\n                            }\n                        </style>\n\n                        ...\n\n                        <div class="pure-g">\n                            <div class="pure-u-1-2">\n                                <div class="l-box"> ... </div>\n                            </div>\n                            <div class="pure-u-1-2">\n                                <div class="l-box"> ... </div>\n                            </div>\n                        </div>\n                    '])))}),(0,g.jsxs)("p",{children:["The second option is to add borders and padding directly to a grid unit. This would ordinarily risk breaking the layout, but you can easily avoid this problem by augmenting the behavior of the grid itself with a ",(0,g.jsx)("code",{children:"box-sizing: border-box"})," rule:"]}),(0,g.jsx)(m.A,{wrap:!0,children:(0,j.dx)(n||(n=(0,u.A)(['\n                        <style>\n                            .pure-g > div {\n                                box-sizing: border-box;\n                            }\n                            .l-box {\n                                padding: 1em;\n                            }\n                        </style>\n\n                        ...\n\n                        <div class="pure-g">\n                            <div class="pure-u-1-2 l-box"> ... </div>\n                            <div class="pure-u-1-2 l-box"> ... </div>\n                        </div>\n                    '])))}),(0,g.jsxs)("p",{children:["Using ",(0,g.jsx)("code",{children:"box-sizing: border-box"})," keeps your markup cleaner, but has one minor drawback. Setting this property on all grid units makes it harder to override or unset the value later on. As an unopinionated library, Pure lets ",(0,g.jsx)("code",{children:"box-sizing"})," remain at the default value of ",(0,g.jsx)("code",{children:"content-box"})," and leaves the choice up to you."]}),(0,g.jsx)(p.A,{heading:"Want to just use Grids?"}),(0,g.jsxs)("p",{children:["Grids is part of the Pure CSS file. However, if you just want Grids and not the other modules, you can pull it down separately. Just include these ",(0,g.jsx)("code",{children:"<link>"})," elements in your ",(0,g.jsx)("code",{children:"<head>"}),"."]}),(0,g.jsx)(m.A,{children:(0,j.dx)(c||(c=(0,u.A)(['\n                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@','/build/base-min.css">\n                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@','/build/grids-min.css">\n                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@','/build/grids-responsive-min.css">\n                    '])),i,i,i)})]})]})}}}]);