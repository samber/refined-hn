// from: https://gist.github.com/frabert/48b12088441f6195ea9292c2a5a77e3a


// ==UserScript==
// @name     Favicons for HN
// @version  1
// @grant    none
// ==/UserScript==

for (let link of document.querySelectorAll('.titlelink')) {
    const domain = new URL(link.href).hostname
    const imageUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`
    const image = document.createElement('img')
    image.src = imageUrl
    image.width = 16
    image.height = 16
    image.style.paddingRight = '0.25em'
    image.style.paddingLeft = '0.25em'
    link.prepend(image)
}
