const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.json())

let users=[
    {
        id: 1,
        name:"gulchin",   
    surname:"isgenderova",
    username:"igulchin",
    age:19, 
    email: "gulcinis@gmail.com",
    password: "g12",
    gender: "female",
    bio: "Happiness depends upon ourselves",
    profilePhoto: "https://wallpapers.com/images/hd/thumbs-up-cat-meme-7avdmx4bbkkqcrj2.jpg"
    },
    {
        id: 2,
        name:"ali", 
    surname:"ashrafli",
    username:"aliashrf",
    age:23, 
    email: "alish@gmail.com",
    password: "a12",
    gender: "male",
    bio: "I am a rich man ",
    profilePhoto:"https://ih1.redbubble.net/image.2392758200.3522/flat,750x,075,f-pad,750x1000,f8f8f8.webp"
    },
    {
        id: 3,
        name:"aysel", 
    surname:"tahirova",
      username:"ailesila",
    age:20, 
    email: "ays@gmail.com",
    password: "aysel12",
    gender: "female",
    bio:"Change will not come if we wait for some other person or some other time",
    profilePhoto:"https://png.pngtree.com/png-clipart/20190516/original/pngtree-funny-cat-taking-selfie-couple-of-kitty-with-a-smile-stick-png-image_3776833.jpg"
    },
    {
        id: 4,
        name:"said", 
    surname:"aliyev",
    username:"aliyevs",
    age:19, 
    email: "saidsn@gmail.com",
    password: "s12",
    gender: "male",
    bio:"You miss 100% of the shots you dont take",
    profilePhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHESAvAjp-AWz4q9aqmHXIY8oS_HNLOVMgRA&usqp=CAU"
    },

    {
        id: 5,
        name:"vusala",   
    surname:"salimova",
    username:"salimovavusala",
    age:18, 
    email: "vusala@gmail.com",
    password: "v12",
    gender: "female",
    bio : "You can be the lead in your own life",
    profilePhoto:"https://media.tenor.com/LhDkuD6Nc14AAAAM/cute-cat.gif"
    },
    {
        id: 6,
        name:"shahnaz",   
    surname:"rustemova",
    username:"rstmlishahnaz",
    age:20, 
    email: "sahnaz@gmail.com",
    password: "sh12",
    gender: "female",
    bio : "You can be the lead in your own ",
    profilePhoto:"https://i.redd.it/aic7sbhrv8pb1.jpg"
    },
    {
        id: 7,
        name:"dinara",   
    surname:"aydemirova",
    username:"dina",
    age:20, 
    email: "dinara@gmail.com",
    password: "d12",
    gender: "female",
    bio : "Never say never ",
    profilePhoto:"https://i.pinimg.com/736x/4b/12/1a/4b121ac7532d1f3ce0e308614cf39479.jpg"
    }
]

app.get('/', (req, res) => {
  res.send(users)
})
app.get('/:id', (req, res) => {
    let findElem=users.find((elem) => elem.id== req.params.id)
    // console.log(findElem);
  res.send(findElem)
  })
app.delete('/:id', (req, res) => {
    let findElement=users.filter((elem) => elem.id !== req.params.id)
  res.send(findElement)
  })
  app.post('/', (req, res) => {
    users.push(req.body)
    res.send("Succesful")
// console.log(req.body);
  })
  app.put('/:id', (req, res) => {
    let id= req.params.id
    let obj = req.body
   let elem=users.findIndex((el)=> el.id == id)
   users[elem]= {id:id, ...obj}
   res.send(users)
  })
  app.patch('/:id', (req, res) => {
    let id= req.params.id
    let obj = req.body
   let elemIndex=users.findIndex((el)=> el.id == id)
   let elem=users.find((el)=> el.id == id)
   users[elemIndex]= {...elem, ...obj}
   res.send(users)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})