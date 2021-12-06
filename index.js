const express = require('express');
const app = express();

const port = 3000

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})

app.get('/', (req, res) => {
  res.send('Authors API')
})


app.get('/authors/:index', (req, res) => {
  let author = req.params.index
  console.log(author)
  let authorName = ""
  let authorCountry = ""

  switch (author) {
    case "1":
      authorName = "Lawrence Nowell"
      authorCountry = "UK"
      break
    case "2": 
      authorName = "William Shakespeare"
      authorCountry = "UK"
      break
    case "3": 
      authorName = "Charles Dickens"
      authorCountry = "US"
      break
    case "4": 
      authorName = "Oscar Wilde"
      authorCountry = "UK"
      break

    default: 
      authorName = "Not found"
      authorCountry = "None"
      break
  }

  res.json({
    author: authorName,
    nationality: authorCountry
  });
});

app.get('/authors/:index/books', (req, res) => {
  let author = req.params.index
  let title = ""

  switch (author) {
    case "1":
      title = "Beowulf"
      break
    case "2": 
      title = "Hamlet, Othello, Romeo and Juliet, MacBeth"
      break
    case "3": 
      title = "Oliver Twist, A Christmas Carol"
      break
    case "4": 
      title = "The Picture of Dorian Gray, The Importance of Being Earnest"
      break

    default: 
      title = "Not found"
      break
  }

  res.json({
    books : title
  });
});


// const express = require('express');
// const port = 3000;

// const app = express();

// //Routes
// //Exo 2
// app.get('/', (req, res) => {
//     res.send('Authors API');
//   });

// app.get('/authors/1/', (req, res) => {
//     res.send('Lawrence Nowell, UK')
// });

// app.get('/authors/2/', (req, res) => {
//     res.send('William Shakespeare, UK')
// });

// app.get('/authors/3/', (req, res) => {
//     res.send('Charles Dickens, US')
// });

// app.get('/authors/4/', (req, res) => {
//     res.send('Oscar Wilde, UK')
// });

// //Exo 3
// app.get('/authors/1/books/', (req, res) => {
//     res.send('Beowulf')
// });

// app.get('/authors/2/books/', (req, res) => {
//     res.send('Hamlet, Othello, Romeo and Juliet, MacBeth')
// });

// app.get('/authors/3/books/', (req, res) => {
//     res.send('Oliver Twist, A Christmas Carol')
// });

// app.get('/authors/4/books/', (req, res) => {
//     res.send('Oliver Twist, A Christmas Carol')
// });


// //Server
// app.listen(port, () => {
//     console.log('Server started on port: ' + port);
// });
  

