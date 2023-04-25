var express = require('express');
const axios = require('axios').default;
var router = express.Router()

router.get('/nulis', async function (req, res, next) {
  res.render('index', {
    title:
      'Nulis Online - Nizar Rahman',
    my_url: "https://nulis-nizar.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "Nizar"
  })
})

router.get('/', function (req, res) {
  res.render('home', {
    title:
      'Nulis Online - Nizar Rahman',
    my_url: "https://nulis-nizar.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "Nizar"
  })
})

router.get('*', function (req, res) {
  res.render('error')
})
// tes
module.exports = router
