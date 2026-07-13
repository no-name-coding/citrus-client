import {animate as e, svg as t} from "https://esm.sh/animejs";
import {LiquidGlass as n} from "https://cdn.jsdelivr.net/npm/@ybouane/liquidglass/dist/index.js";
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`,
        t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
}
)(),
Date.now,
Array.isArray;
var r = Math.abs
  , i = e => e
  , a = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , o = (e, t, n) => {
    let i = 0, o = 1, s, c, l = 0;
    do
        c = i + (o - i) / 2,
        s = a(c, t, n) - e,
        s > 0 ? o = c : i = c;
    while (r(s) > 1e-7 && ++l < 100);
    return c
}
  , s = ( (e=.5, t=0, n=.5, r=1) => e === t && n === r ? i : i => i === 0 || i === 1 ? i : a(o(i, e, n), t, r))(.7, .1, .126, 1.01)
  , c = () => {
    e(t.createDrawable(`.line`), {
        draw: [`0 0`, `0 1`, `1 1`],
        ease: `inOutQuad`,
        duration: 5500,
        loop: !0
    }),
    e(`.title`, {
        translateY: [`200%`, `0%`],
        duration: 1e3,
        ease: s
    }),
    e(`.panel`, {
        opacity: [`0`, `1`],
        duration: 1e3,
        ease: s
    }),
    e(`.bg`, {
        scale: [`1.2`, `1`],
        duration: 1e3,
        ease: s
    });
    let n = document.querySelector(`.title-container.first .title`)
      , r = document.querySelector(`.title-container.second .title`)
      , i = [`DISCOVER`, `STYLE`]
      , a = 0
      , o = () => {
        a = (a + 1) % i.length,
        e(n, {
            translateY: [`0%`, `-200%`],
            duration: 600,
            ease: s,
            onComplete: () => {
                n.innerHTML = i[a],
                e(n, {
                    translateY: [`200%`, `0%`],
                    duration: 600,
                    ease: s
                })
            }
        }),
        e(r, {
            translateY: [`0%`, `-200%`],
            duration: 600,
            ease: s,
            onComplete: () => {
                a === 1 ? r.closest(`.title-container`).style.visibility = `hidden` : (r.closest(`.title-container`).style.visibility = `visible`,
                r.innerHTML = `YOUR`,
                e(r, {
                    translateY: [`200%`, `0%`],
                    duration: 600,
                    ease: s
                }))
            }
        }),
        setTimeout(o, 3e3)
    }
    ;
    setTimeout(o, 3e3)
}
  , l = () => {
    let e = document.querySelector(`.my-glass`);
    return e.dataset.config = JSON.stringify({
        floating: !1,
        blurAmount: .25,
        refraction: .69,
        chromAberration: .15,
        edgeHighlight: .05,
        specular: 0,
        fresnel: 1,
        cornerRadius: 40,
        zRadius: 40,
        brightness: 0,
        saturation: 0,
        shadowOpacity: .3
    }),
    n.init({
        root: document.querySelector(`#root`),
        glassElements: [e]
    })
}
;
window.addEventListener(`load`, () => {
    let e = document.querySelector(`.bg`)
      , t = () => {
        l().then(e => {
            window.__liquidGlassInstance = e,
            requestAnimationFrame( () => {
                requestAnimationFrame( () => {
                    c()
                }
                )
            }
            )
        }
        )
    }
    ;
    e.complete && e.naturalWidth !== 0 ? t() : e.addEventListener(`load`, t, {
        once: !0
    })
}
, {
    once: !0
});
