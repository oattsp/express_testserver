const express = require('express')
const app = express()
 
app.get('/', (req, res) => {
  res.send('<h1>Welcome to services.....</h1>')
})

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})