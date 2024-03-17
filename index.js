require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const gitHubData ={
  "login": "vidhi1976",
  "id": 132744452,
  "node_id": "U_kgDOB-mFBA",
  "avatar_url": "https://avatars.githubusercontent.com/u/132744452?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/vidhi1976",
  "html_url": "https://github.com/vidhi1976",
  "followers_url": "https://api.github.com/users/vidhi1976/followers",
  "following_url": "https://api.github.com/users/vidhi1976/following{/other_user}",
  "gists_url": "https://api.github.com/users/vidhi1976/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/vidhi1976/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/vidhi1976/subscriptions",
  "organizations_url": "https://api.github.com/users/vidhi1976/orgs",
  "repos_url": "https://api.github.com/users/vidhi1976/repos",
  "events_url": "https://api.github.com/users/vidhi1976/events{/privacy}",
  "received_events_url": "https://api.github.com/users/vidhi1976/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-05-06T08:30:09Z",
  "updated_at": "2024-03-01T13:48:31Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('vidhisinghtwttr')
})

app.get('/login',(req,res)=>{
  res.send('<h1>LOGIN PAGE HERE !</h1>')
})
app.get('/github',(req,res)=>{
  res.json(gitHubData)
})
app.get('/')
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



