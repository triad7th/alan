import * as env from './env.js'

const left = 50
const gap = 125
const width = 256

export const members = {
    dad : {idx: 0, x: 0},
    mom : {idx: 1, x: 0},
    bro : {idx: 2, x: 0},
    sis : {idx: 3, x: 0},
    beb : {idx: 4, x: 0}
}

export function locate() {
    Object.keys(members).forEach(name => {
        var member = $(`#${name}`)
        var idx = members[name].idx
        members[name].x = left + (idx * (width + gap))
        member.css('left', `${members[name].x}px`)
    })
}

export function choreo() {
    Object.keys(members).forEach((name) => {
        timeline.add(bounce(name), 2.0)
        timeline.add(move(name), 7 + (members[name].idx * 9.5))
        timeline.add(scale(name), 7 + (members[name].idx * 9.5))
    })    
}

function bounce(name) {
    var member = $(`#${name} > .layer1 > .layer2 > .img`)
    var memberElem = member[0]
    var tl = gsap.timeline()
    for (var i = 0; i < 55; i += 1.2)
    {
        tl
        .to(memberElem, 0.6, { x: '+=100px', ease: 'back.inOut' })
        .to(memberElem, 0.6, { x: '-=100px', ease: 'back.inOut' })
    }
    return tl
}

function move(name) {
    var member = $(`#${name}`)
    var memberElem = member[0]
    var tl = gsap.timeline()

    tl.set(memberElem, { zIndex : -5})
    var middle = env.width / 2 - (width)
    var go = middle - members[name].x
    tl.to(memberElem, 1, { x: `+=${go}px`, ease: 'power1' }, 0)    
    tl.to(memberElem, 1, { x: `-=${go}px`, ease: 'power1' }, 4)    
    
    return tl
}

function scale(name) {
    var member = $(`#${name}  > .layer1 > .layer2`)
    var memberElem = member[0]
    var tl = gsap.timeline()
    
    tl.to(memberElem, 1, { scale: 3, ease: 'power1' }, 0)
    tl.to(memberElem, 1, { scale: 1, ease: 'power1' }, 4)
    return tl
}
