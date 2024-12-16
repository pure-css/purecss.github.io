"use strict";(self.webpackChunkpure=self.webpackChunkpure||[]).push([[842],{7474:(s,e,i)=>{i.r(e),i.d(e,{default:()=>x});var d=i(4586),r=(i(6540),i(6225)),l=i(3454),a=i(3553),n=i(5353),c=i(5225),u=i(4848);const t="Grids",h="Fully customizable and responsive CSS grids.";const x=function(){const s=(0,d.A)(),{siteConfig:e={}}=s,{customFields:{pureVersion:i}}=e;return(0,u.jsxs)(r.A,{description:h,title:t,children:[(0,u.jsx)(l.A,{description:h,title:t}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(n.A,{heading:"Introduction to Pure Grids"}),(0,u.jsx)("p",{children:"Pure Grids are easy to work with, and very powerful. There are a few simple concepts to keep in mind:"}),(0,u.jsxs)("dl",{children:[(0,u.jsx)("dt",{children:"Grid classes vs. unit classes"}),(0,u.jsxs)("dd",{children:["Pure Grids consist of two types of classes: the grid class (",(0,u.jsx)("code",{children:"pure-g"}),") and unit classes (",(0,u.jsx)("code",{children:"pure-u"})," or ",(0,u.jsx)("code",{children:"pure-u-*"}),")"]}),(0,u.jsx)("dt",{children:"The widths of the units are fractions"}),(0,u.jsxs)("dd",{children:["Units have various class names that represent their widths. For example, ",(0,u.jsx)("code",{children:"pure-u-1-2"})," has a width of 50%, whereas ",(0,u.jsx)("code",{children:"pure-u-1-5"})," would have a width of 20%."]}),(0,u.jsx)("dt",{children:"All child elements of a grid must be units"}),(0,u.jsxs)("dd",{children:["Child elements contained within an element with a ",(0,u.jsx)("code",{children:"pure-g"})," classname ",(0,u.jsx)("em",{children:"must"})," be a grid unit with a ",(0,u.jsx)("code",{children:"pure-u"})," or ",(0,u.jsx)("code",{children:"pure-u-*"})," classname."]}),(0,u.jsx)("dt",{children:"Content goes inside grid units"}),(0,u.jsx)("dd",{children:"All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly."})]}),(0,u.jsx)("p",{children:"Let's start with a simple example. Here's a grid with three columns:"}),(0,u.jsx)(a.A,{wrap:!0,children:c.dx`
                        <div class="pure-g">
                            <div class="pure-u-1-3"><p>Thirds</p></div>
                            <div class="pure-u-1-3"><p>Thirds</p></div>
                            <div class="pure-u-1-3"><p>Thirds</p></div>
                        </div>
                    `}),(0,u.jsx)(n.A,{heading:"Grids Units Sizes"}),(0,u.jsxs)("p",{children:["Pure ships with both a ",(0,u.jsx)("b",{children:"5ths"})," and ",(0,u.jsx)("b",{children:"24ths"})," based grid. Depicted below are the available units that can be appended to the ",(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"pure-u-*"})})," classname where ",(0,u.jsx)("code",{children:"*"})," is one of the unit fractions listed below. For example the unit classname for 50% width is: ",(0,u.jsx)("code",{children:"pure-u-1-2"}),"."]}),(0,u.jsx)("h3",{children:"5ths-Based Units"}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-5"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-5"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"2-5"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-2-5"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"3-5"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-3-5"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"4-5"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-4-5"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-1"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-1"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"5-5"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-5-5"})})})]}),(0,u.jsx)("h3",{children:"24ths-Based Units"}),(0,u.jsxs)("div",{className:"grids-unit pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-12"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-12"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"2-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-2-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"3-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-3-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-8"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-8"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"4-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-4-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-6"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-6"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"5-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-5-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-4"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-4"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"6-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-6-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"7-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-7-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-3"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-3"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"8-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-8-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"3-8"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-3-8"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"9-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-9-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"5-12"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-5-12"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"10-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-10-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"11-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-11-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-2"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-2"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"12-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-12-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"13-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-13-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"7-12"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-7-12"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"14-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-14-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"5-8"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-5-8"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"15-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-15-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"2-3"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-2-3"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"16-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-16-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"17-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-17-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"3-4"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-3-4"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"18-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-18-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"19-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-19-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"5-6"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-5-6"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"20-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-20-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"7-8"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-7-8"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"21-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-21-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"11-12"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-11-12"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"22-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-22-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"23-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-23-24"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1"})})})]}),(0,u.jsxs)("div",{className:"grids-unit  pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"1-1"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-1-1"})})})]}),(0,u.jsxs)("div",{className:"grids-unit grids-unit-not-reduced pure-g",children:[(0,u.jsx)("div",{className:"grids-unit-width pure-u",children:"24-24"}),(0,u.jsx)("div",{className:"grids-unit-details pure-u-1",children:(0,u.jsx)("div",{className:"pure-g",children:(0,u.jsx)("div",{className:"grids-unit-bar pure-u-24-24"})})})]}),(0,u.jsx)("h3",{children:"Custom Unit Sizes"}),(0,u.jsxs)("p",{children:["We are working on building tools to allow people to customize Pure Grids. The first low-level tools, the ",(0,u.jsx)("b",{children:(0,u.jsx)("a",{href:"https://github.com/ericf/rework-pure-grids",children:"Pure Grids Rework Plugin"})}),", is available to use today\u2014we use this tool to generate Pure's built-in unit sizes."]}),(0,u.jsx)(n.A,{heading:"Pure Responsive Grids"}),(0,u.jsx)("p",{children:"Pure has a mobile-first responsive grid system that can be used declaratively through CSS class names. It's a robust and flexible grid  that builds on top of the default grid."}),(0,u.jsx)("h3",{children:"Including on Your Page"}),(0,u.jsxs)("p",{children:["Since media queries cannot be over-written, we ",(0,u.jsx)("u",{children:"do not"})," include the grid system as part of ",(0,u.jsx)("code",{children:"pure.css"}),". You'll have to pull it in as a separate CSS file. You can do this by adding the following ",(0,u.jsx)("code",{children:"<link>"})," tag to your page."]}),(0,u.jsx)(a.A,{children:`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@${i}/build/grids-responsive-min.css" />`}),(0,u.jsx)("h3",{children:"Pure's Regular Grid vs. Responsive Grid"}),(0,u.jsxs)("p",{children:["The best way to understand the difference between Pure's regular grid and a responsive grid is through an example.The snippet below shows how regular Pure Grids are written. These grids are unresponsive. They'll always be ",(0,u.jsx)("code",{children:"width: 33.33%"}),", irrespective of the width of the screen."]}),(0,u.jsx)(a.A,{wrap:!0,children:c.dx`
                        <div class="pure-g">
                            <div class="pure-u-1-3"> ... </div>
                            <div class="pure-u-1-3"> ... </div>
                            <div class="pure-u-1-3"> ... </div>
                        </div>
                    `}),(0,u.jsxs)("p",{children:["Next, let's look at a responsive grid. Elements within this grid will be ",(0,u.jsx)("code",{children:"width: 100%"})," on small screens, but will shrink to become ",(0,u.jsx)("code",{children:"width: 33.33%"})," on medium-sized screens and above."]}),(0,u.jsx)(a.A,{wrap:!0,children:c.dx`
                        <div class="pure-g">
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                            <div class="pure-u-1 pure-u-md-1-3"> ... </div>
                        </div>
                    `}),(0,u.jsx)("h3",{children:"Default Media Queries"}),(0,u.jsx)("p",{children:"When using Responsive Grids, you can control how the grid behaves at specific breakpoints by adding class names. Pure's default responsive grids comes with the following class names and media query breakpoints."}),(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"mq-table pure-table-bordered pure-table",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{className:"highlight",children:"Key"}),(0,u.jsx)("th",{className:"highlight",children:"CSS Media Query"}),(0,u.jsx)("th",{children:"Applies"}),(0,u.jsx)("th",{children:"Classname"})]})}),(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("i",{children:"None"})}),(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("i",{children:"None"})}),(0,u.jsx)("td",{children:(0,u.jsx)("i",{children:"Always"})}),(0,u.jsx)("td",{children:(0,u.jsx)("code",{children:".pure-u-*"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"sm"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 35.5em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"568px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"sm"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"md"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 48em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"768px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"md"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"lg"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 64em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"1024px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"lg"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"xl"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 80em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"1280px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"xl"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"xxl"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 120em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"1920px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"xxl"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"xxxl"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 160em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"2560px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"xxxl"}),"-*"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"highlight",children:(0,u.jsx)("b",{children:(0,u.jsx)("code",{children:"x4k"})})}),(0,u.jsx)("td",{className:"mq-table-mq highlight",children:(0,u.jsx)("code",{children:"@media screen and (min-width: 240em)"})}),(0,u.jsxs)("td",{children:["\u2265 ",(0,u.jsx)("b",{children:"3840px"})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("code",{children:[".pure-u-",(0,u.jsx)("b",{children:"x4k"}),"-*"]})})]})]})]})}),(0,u.jsx)("h3",{children:"Using Relative Units for Widths"}),(0,u.jsxs)("p",{children:["You may have noticed that we use ",(0,u.jsx)("code",{children:"em"})," for our default CSS Media Query widths instead of ",(0,u.jsx)("code",{children:"px"}),". This was a conscious decision since it allows the Media Queries to respond appropriately when people zoom the webpage. Check out ",(0,u.jsx)("a",{href:"https://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/",children:"this article by Brad Frost"})," for some background information on using relative units within Media Queries."]}),(0,u.jsxs)("p",{children:["If you do want to use units other than ",(0,u.jsx)("code",{children:"em"}),", you can always modify the default Media Queries on the ",(0,u.jsx)("a",{href:"/start/#build-your-pure-starter-kit",children:"Get Started"})," page. Converting from ",(0,u.jsx)("code",{children:"em"})," to ",(0,u.jsx)("code",{children:"px"})," is pretty simple:"]}),(0,u.jsx)(a.A,{wrap:!0,children:"1em == 16px *"}),(0,u.jsx)("p",{children:(0,u.jsxs)("small",{children:["* The ",(0,u.jsx)("code",{children:"em"})," to ",(0,u.jsx)("code",{children:"px"})," conversion is based on the browser's default font size, which is generally ",(0,u.jsx)("code",{children:"16px"}),", but can be overridden by a user in their browser settings."]})}),(0,u.jsx)("h3",{children:"An Example of Pure Responsive Grids"}),(0,u.jsxs)("p",{children:["The example below leverages Pure's Responsive Grid to create a row with four columns. The columns stack on small screens, take up ",(0,u.jsx)("code",{children:"width: 50%"})," on medium-sized screens, and ",(0,u.jsx)("code",{children:"width: 25%"})," on large screens."]}),(0,u.jsxs)("p",{children:["This is done by adding the ",(0,u.jsx)("code",{children:".pure-u-1"})," class for small screens, ",(0,u.jsx)("code",{children:".pure-u-md-1-2"})," for medium-sized screens, and ",(0,u.jsx)("code",{children:".pure-u-lg-1-4"})," for large screens. ",(0,u.jsx)("em",{children:"Resize the page to see the grid respond to the screen size."})]})]}),(0,u.jsx)("div",{className:"grids-example",children:(0,u.jsxs)("div",{className:"pure-g",children:[(0,u.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Lorem Ipsum"}),(0,u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})]})}),(0,u.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Dolor Sit Amet"}),(0,u.jsx)("p",{children:"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."})]})}),(0,u.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Proident laborum"}),(0,u.jsx)("p",{children:"In culpa qui officia deserunt mollit anim id est laborum. incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."})]})}),(0,u.jsx)("div",{className:"pure-u-1 pure-u-md-1-2 pure-u-lg-1-4",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Praesent consectetur"}),(0,u.jsx)("p",{children:"Integer vitae lectus accumsan, egestas dui eget, ullamcorper urn. In feugiat tortor at turpis rhoncus tincidunt. Duis sed porttitor ante, eget venenatis lectus."})]})}),(0,u.jsx)("div",{className:"pure-u-1",children:(0,u.jsx)("img",{className:"pure-img",src:"https://s3.amazonaws.com/ooomf-com-files/wjNV6gWuQkqeuH8txHc9_sylwiabartyzel_unsplash_tatry_03.jpg",alt:"By Sylwia Bartyzel from unsplash.com"})}),(0,u.jsx)("div",{className:"pure-u-2-5",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Two-Fifth Column"}),(0,u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum dui turpis."})]})}),(0,u.jsx)("div",{className:"pure-u-3-5",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Three-Fifth Column"}),(0,u.jsx)("p",{children:"Quisque ac magna eget est porta varius ut eget quam. Curabitur tincidunt gravida nisl."}),(0,u.jsx)("p",{children:"Fusce accumsan, sem vitae tempus tempor, nulla lectus interdum felis, eget molestie urna mauris vel elit. Curabitur vel ipsum nulla."})]})})]})}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(n.A,{heading:"Grids on Mobile"}),(0,u.jsxs)("p",{children:["Pure's default grid system is mobile-first. If you want to have a grid on small screens, just use the ",(0,u.jsx)("code",{children:"pure-u-*"})," classnames on your elements."]})]}),(0,u.jsx)("div",{className:"grids-example",children:(0,u.jsxs)("div",{className:"pure-g",children:[(0,u.jsx)("div",{className:"pure-u-1-3",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Thirds"}),(0,u.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})}),(0,u.jsx)("div",{className:"pure-u-1-3",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Thirds"}),(0,u.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})}),(0,u.jsx)("div",{className:"pure-u-1-3",children:(0,u.jsxs)("div",{className:"l-box",children:[(0,u.jsx)("h3",{children:"Thirds"}),(0,u.jsx)("p",{children:"This cell will be 1/3 width all the time."})]})})]})}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(n.A,{heading:"Responsive Images"}),(0,u.jsxs)("p",{children:["When using Responsive Grids, you'll want your images to be fluid as well so they grow and shrink with the content, while maintaining the correct ratio. To do this, just add the ",(0,u.jsx)("code",{children:".pure-img"})," class on them. Check out the example below."]})]}),(0,u.jsx)("div",{className:"grids-example",children:(0,u.jsxs)("div",{className:"pure-g",children:[(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg",alt:"Peyto Lake"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg",alt:"Train"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg",alt:"T-Shirt Store"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg",alt:"Mountain"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm8.staticflickr.com/7478/16185861115_4ed6353a97.jpg",alt:"Miami"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/4068/4666556755_091acf3253.jpg",alt:"BCE Place, Toronto"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm6.staticflickr.com/7313/13136053333_f04b335933.jpg",alt:"Banff"})}),(0,u.jsx)("div",{className:"pure-u-1-4 pure-u-lg-1-8",children:(0,u.jsx)("img",{className:"pure-img",src:"http://farm3.staticflickr.com/7628/16754137141_27dcaabd24.jpg",alt:"Boston North Point Park"})})]})}),(0,u.jsxs)("div",{className:"content",children:[(0,u.jsx)(n.A,{heading:"Applying Padding and Borders to Grid Units"}),(0,u.jsxs)("p",{children:["To add borders and padding to Pure Grids, you have two options. The first option is to nest a ",(0,u.jsx)("code",{children:"<div>"})," inside each Grid unit and style the child container:"]}),(0,u.jsx)(a.A,{wrap:!0,children:c.dx`
                        <style>
                            .l-box {
                                padding: 1em;
                            }
                        </style>

                        ...

                        <div class="pure-g">
                            <div class="pure-u-1-2">
                                <div class="l-box"> ... </div>
                            </div>
                            <div class="pure-u-1-2">
                                <div class="l-box"> ... </div>
                            </div>
                        </div>
                    `}),(0,u.jsxs)("p",{children:["The second option is to add borders and padding directly to a grid unit. This would ordinarily risk breaking the layout, but you can easily avoid this problem by augmenting the behavior of the grid itself with a ",(0,u.jsx)("code",{children:"box-sizing: border-box"})," rule:"]}),(0,u.jsx)(a.A,{wrap:!0,children:c.dx`
                        <style>
                            .pure-g > div {
                                box-sizing: border-box;
                            }
                            .l-box {
                                padding: 1em;
                            }
                        </style>

                        ...

                        <div class="pure-g">
                            <div class="pure-u-1-2 l-box"> ... </div>
                            <div class="pure-u-1-2 l-box"> ... </div>
                        </div>
                    `}),(0,u.jsxs)("p",{children:["Using ",(0,u.jsx)("code",{children:"box-sizing: border-box"})," keeps your markup cleaner, but has one minor drawback. Setting this property on all grid units makes it harder to override or unset the value later on. As an unopinionated library, Pure lets ",(0,u.jsx)("code",{children:"box-sizing"})," remain at the default value of ",(0,u.jsx)("code",{children:"content-box"})," and leaves the choice up to you."]}),(0,u.jsx)(n.A,{heading:"Want to just use Grids?"}),(0,u.jsxs)("p",{children:["Grids is part of the Pure CSS file. However, if you just want Grids and not the other modules, you can pull it down separately. Just include these ",(0,u.jsx)("code",{children:"<link>"})," elements in your ",(0,u.jsx)("code",{children:"<head>"}),"."]}),(0,u.jsx)(a.A,{children:c.dx`
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@${i}/build/base-min.css">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@${i}/build/grids-min.css">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@${i}/build/grids-responsive-min.css">
                    `})]})]})}}}]);