const trianglify = require('trianglify')
const fs = require('fs')

const canvas = trianglify({
    width: 1440,
    height: 900,
    cellSize: 50,
    variance: 1,
    xColors: "GnBu"
}).toCanvas()

const file = fs.createWriteStream('public/images/trianglify.png')
canvas.createPNGStream().pipe(file)
