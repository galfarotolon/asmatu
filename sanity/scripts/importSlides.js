// sanity/scripts/importSlides.js

const { client } = require('../client.js')  // <-- reference the new JS file
const fs = require('fs')
const path = require('path')

function importSlides() {
  try {
    // Build the path to "slides.json" in your top-level "data" folder
    const filePath = path.join(process.cwd(), 'data', 'slides.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)

    // Prepare a document with a fixed ID
    const doc = {
      _id: 'homepage',
      _type: 'homepage',
      slides: data.slides,
    }

    client
      .createOrReplace(doc)
      .then((result) => {

      })
      .catch((error) => {
        console.error('Error importing slides:', error)
      })
  } catch (error) {
    console.error('Error reading or parsing slides.json:', error)
  }
}

importSlides()
