import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const EASE_EXPO = 'power4.out'
export const EASE_ELASTIC = 'elastic.out(1,0.75)'
export const EASE_SMOOTH = 'power3.inOut'

export function splitIntoChars(el: HTMLElement): HTMLElement[] {
  const text = el.textContent || ''
  el.textContent = ''
  const chars: HTMLElement[] = []
  text.split('').forEach((char) => {
    const wrapper = document.createElement('span')
    wrapper.className = 'char-wrap'
    const inner = document.createElement('span')
    inner.className = 'char'
    inner.textContent = char === ' ' ? ' ' : char
    wrapper.appendChild(inner)
    el.appendChild(wrapper)
    chars.push(inner)
  })
  return chars
}

export function splitIntoWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent || ''
  el.textContent = ''
  const words: HTMLElement[] = []
  text.split(' ').forEach((word, i, arr) => {
    const wrapper = document.createElement('span')
    wrapper.className = 'char-wrap'
    wrapper.style.display = 'inline-block'
    const inner = document.createElement('span')
    inner.className = 'char'
    inner.style.display = 'inline-block'
    inner.textContent = word
    wrapper.appendChild(inner)
    el.appendChild(wrapper)
    if (i < arr.length - 1) {
      el.appendChild(document.createTextNode(' '))
    }
    words.push(inner)
  })
  return words
}

export function revealChars(
  chars: HTMLElement[],
  trigger: Element | string,
  stagger = 0.04,
  delay = 0
) {
  return gsap.fromTo(
    chars,
    { yPercent: 110, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1.0,
      ease: EASE_EXPO,
      stagger,
      delay,
      scrollTrigger: {
        trigger,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function fadeUp(
  els: Element | Element[] | string,
  trigger?: Element | string,
  stagger = 0.12,
  delay = 0
) {
  return gsap.fromTo(
    els,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: EASE_EXPO,
      stagger,
      delay,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  )
}

export function clipReveal(
  els: Element | Element[] | string,
  trigger?: Element | string,
  stagger = 0.1
) {
  return gsap.fromTo(
    els,
    { clipPath: 'inset(100% 0 0 0)', opacity: 1 },
    {
      clipPath: 'inset(0% 0 0 0)',
      duration: 1.2,
      ease: EASE_EXPO,
      stagger,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 86%',
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  )
}

export function parallaxEl(
  el: Element | string,
  yAmt: number,
  trigger?: Element | string
) {
  return gsap.to(el, {
    y: yAmt,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger || el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  })
}

export function scaleReveal(
  els: Element | Element[] | string,
  trigger?: Element | string,
  stagger = 0.1
) {
  return gsap.fromTo(
    els,
    { scale: 0.88, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: EASE_EXPO,
      stagger,
      scrollTrigger: trigger
        ? {
            trigger,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        : undefined,
    }
  )
}

export function counterAnim(
  el: HTMLElement,
  endValue: number,
  trigger: Element | string,
  suffix = ''
) {
  const obj = { val: 0 }
  return gsap.to(obj, {
    val: endValue,
    duration: 2.0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate() {
      el.textContent = Math.round(obj.val) + suffix
    },
  })
}
