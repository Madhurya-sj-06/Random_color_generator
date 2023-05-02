const container = document.querySelector('.container')
const refreshBtn = document.querySelector('.refresh_btn')

const maxPaletteBoxes = 50


const gernerateColors = () => {
    container.innerHTML = ""
    for(let i=0;i<maxPaletteBoxes;i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,'0')}`

        const color = document.createElement('li')
        color.classList.add('color')
        color.innerHTML = `<div class="box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`

        container.appendChild(color)

    }
}

gernerateColors()

refreshBtn.addEventListener('click', gernerateColors)
