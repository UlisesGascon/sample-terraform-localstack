
const fs = require('fs')
const path = require('path')
const uploadFile = require('./aws')

const testUpload = () => {
   const filePath = path.resolve(__dirname, 'cute_cat.jpg')
   const fileStream = fs.createReadStream(filePath)
   const fileName = `test-image-${new Date().toISOString()}.jpg`
   uploadFile(fileStream, fileName).then(console.log).catch((err) => {
      console.log(`[ERROR] ${err}`)
   })
}

testUpload()