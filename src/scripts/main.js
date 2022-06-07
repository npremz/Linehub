"use strict"

import { gsap } from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const boutonUser1 = document.querySelector("#bouton1");
const boutonUser2 = document.querySelector("#bouton2");
const imageUser = document.querySelector("#image-user");

if (boutonUser1 && boutonUser2 && imageUser) {
boutonUser1.addEventListener("click", (e) => {
    boutonUser1.classList.add("section__button--active");
    boutonUser2.classList.remove("section__button--active");
    imageUser.setAttribute('src', 'assets/images/user1.jpg');
    imageUser.setAttribute('srcset', 'assets/images/user1.jpg 1x, assets/images/user1@2x.jpg 2x');
})

boutonUser2.addEventListener("click", (e) => {
    boutonUser1.classList.remove("section__button--active");
    boutonUser2.classList.add("section__button--active");
    imageUser.setAttribute('src', 'assets/images/user2.jpg')
    imageUser.setAttribute('srcset', 'assets/images/user2.jpg 1x, assets/images/user2@2x.jpg 2x');
})

}

let ruleBodyBefore = CSSRulePlugin.getRule("body:before");
let ruleBodyAfter = CSSRulePlugin.getRule("body:after");

let ruleBarWideAfter1 = CSSRulePlugin.getRule(".bar-wide-1:after");
let ruleBarWideAfter2 = CSSRulePlugin.getRule(".bar-wide-2:after");
let ruleBarWideAfter3 = CSSRulePlugin.getRule(".bar-wide-3:after");
let ruleBarWideAfter4 = CSSRulePlugin.getRule(".bar-wide-4:after");


// Intro

if (document.querySelector(".section-1")) {

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

}