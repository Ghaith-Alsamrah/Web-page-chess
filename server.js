const express = require ("express")
const app = express()
const PORT = 3000 
const path = require('path');

app.use(express.static('public'))
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})


app.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', '/HTML/mainGame.html'))
})