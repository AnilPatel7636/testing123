require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

const gitdata = {
    "login": "AnilPatel7636",
    "id": 117933002,
    "node_id": "U_kgDOBweDyg",
    "avatar_url": "https://avatars.githubusercontent.com/u/117933002?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AnilPatel7636",
    "html_url": "https://github.com/AnilPatel7636",
    "followers_url": "https://api.github.com/users/AnilPatel7636/followers",
    "following_url": "https://api.github.com/users/AnilPatel7636/following{/other_user}",
    "gists_url": "https://api.github.com/users/AnilPatel7636/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AnilPatel7636/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AnilPatel7636/subscriptions",
    "organizations_url": "https://api.github.com/users/AnilPatel7636/orgs",
    "repos_url": "https://api.github.com/users/AnilPatel7636/repos",
    "events_url": "https://api.github.com/users/AnilPatel7636/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AnilPatel7636/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Anil Patel",
    "company": "Indian Institute of Technology Goa",
    "blog": "AnilPatel7636.github.io",
    "location": "Jodhpur",
    "email": null,
    "hireable": null,
    "bio": "  B-Tech | Computer Science & Engineering'26 |  Web and App Development Club-Core Member @Architechs-IITGOA | Problem Solver 🧑‍💻 ",
    "twitter_username": null,
    "public_repos": 12,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-11-10T16:35:13Z",
    "updated_at": "2024-10-15T17:07:33Z"
  }


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send('itsap018')
})

app.get('/about',(req,res)=>{
    res.send('<h1> AP </h1>')
})

app.get('/git',(req,res)=>{
    res.json(gitdata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})