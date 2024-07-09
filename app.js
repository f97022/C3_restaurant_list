const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/resraurants')
})

app.get('/resraurants', (req, res) => {
  res.send('listing resraurants')
})

app.get('/resraurant/:id', (req, res) => {
  const id =req.params.id
  res.send(`read resraurant: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})