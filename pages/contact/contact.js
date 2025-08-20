var crsr = document.querySelector('.cursor')
var main = document.querySelector('#main')
var page1Vid = document.querySelector('.page1 video')

document.addEventListener('mousemove',function(dets) {
    crsr.style.left = dets.x+-10+'px'
    crsr.style.top = dets.y+-10+'px'
})