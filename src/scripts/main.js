"use strict"

import { gsap } from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

console.log(gsap.version);

let ruleBodyBefore = CSSRulePlugin.getRule("body:before");
let ruleBodyAfter = CSSRulePlugin.getRule("body:after");

let ruleBarWideAfter1 = CSSRulePlugin.getRule(".bar-wide-1:after");
let ruleBarWideAfter2 = CSSRulePlugin.getRule(".bar-wide-2:after");
let ruleBarWideAfter3 = CSSRulePlugin.getRule(".bar-wide-3:after");
let ruleBarWideAfter4 = CSSRulePlugin.getRule(".bar-wide-4:after");


// Intro

const tlintro = gsap.timeline({defaults: {duration: 0.5}})

    tlintro.from(ruleBodyBefore ,{height: "0vh"})
        .from(ruleBodyAfter ,{height: "0vh"}, "-=0.5")
        .from(".intro", {duration:0.5, y:100, opacity: 0}, "+=0.3")


gsap.to(".header", {
   backgroundPositionY: "30%",
   scrollTrigger: {
       trigger: ".header",
       start: "top top",
       scrub: true
   },
});

    

gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        start: "top 70%",
    }
    })
    .from(ruleBarWideAfter1, {
        width: "0vw",
        duration: 1,
    })
    .from(".section-1", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".anim-1", {
        y: 100,
        opacity: 0,
        duration: 0.3,
    }, "-=0.3")


gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%",
    }
    })
    .from(".section-2", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".anim-2", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    }, "-=0.3")
    .from(".anim-2-1", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    })


gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        start: "top 70%",
    }
    })
    .from(ruleBarWideAfter3, {
        width: "0vw",
        duration: 1,
    })
    .from(".section-3", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".anim-3", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    }, "-=0.3")
    .from(".anim-3-1", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    })
        

gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4",
        start: "top 70%",
    }
    })
    .from(".section-4", {
        opacity: 0,
        duration: 0.5
    }, "-=0.3")
    .from(".anim-4", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    }, "-=0.3")
    .from(".anim-4-1", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    })
    .from(".anim-4-2", {
        y: 50,
        opacity: 0,
        duration: 0.3,
    })