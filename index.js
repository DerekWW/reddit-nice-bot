require('dotenv').config()

const Snoowrap = require('snoowrap')
const Snoostorm = require('snoostorm')

const r = new Snoowrap({
  userAgent: process.env.USER_AGENT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
})

const client = new Snoostorm(r)

const streamOpts = {
  subreddit: 'testingground4bots',
  results: 5
}

const comments = client.CommentStream(streamOpts)

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
  console.log(comment)

  if (comment.body === ':(') {
    comment.reply(':)')
  }
})
