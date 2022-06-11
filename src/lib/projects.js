let projects = {
  tictactoe: {
    name: "Tic-Tac-Toe",
    desc: "A basic Tic-Tac-Toe game that has AI. I used old fasion JS modules to emulate OOP. This help lower the amount of boilerplate code.",
    github: "https://github.com/CarbonBond/tic-tac-toe",
    iframe: true,
    live: "https://tictactoe.brandonburge.com",
    tools: [
      "html",
      "css",
      "javascript",
      "docker",
      "nginx"
    ]
  },
  blog: {
    name: "Blog",
    desc:
      `A blog the reaches to a Backend REST API. Uses JWT for authentication, meaning I can log in and manage posts. 
CURL is avaliable on each post. You will find me posting about Software here! Build using functional React, along with a search system.`,
    github: "https://github.com/CarbonBond/blog-frontend",
    iframe: true,
    live: "https://blog.brandonburge.com",
    tools: [
      "html",
      "css",
      "javascript",
      "react",
      "bash",
      "docker"
    ]
  },
  blogapi: {
    name: "Blog API",
    desc:
      `A Backend REST API. Uses JWT for authentication with Passportjs. It uses Prisma Cloud as a sql manager that reachs a postgress SQL server on Hiroku;
  This is a REST api, so CURL is avaliable on each post. Checkout the Blog app to see it in action`,
    github: "https://github.com/CarbonBond/Blog-Backend",
    iframe: false,
    live: "https://blog.brandonburge.com",
    tools: [
      "html",
      "css",
      "javascript",
      "express",
      "nodejs",
      "prisma",
      "bash",
      "docker"
    ]
  },

  tweetor: {
    name: "Tweetor",
    desc: "A Twitter clone that uses sveltekit, and Prisma as a SQL generator. It allows for posting, Liking, deleting, tweeting. Along with custom URLs for profiles and posts. ",
    github: "https://github.com/CarbonBond/Tweetor",
    iframe: true,
    live: "https://tweetor.brandonburge.com",
    tools: [
      "html",
      "css",
      "typescript",
      "svelte",
      "prisma",
      "docker",
      "nginx"
    ]
  },
  thewikipage: {
    name: "TheWiki.page",
    desc: `A more custamizable wiki that allows for DOM node creation and saving. You could develope a full website using this, but its made for community information.   
It is developed using server side rendering with express and pug. Its save hashed User information and Page information in MongoDB. Users can follow eachother to keep up on there history. 
Communitcation can be down with private messaging, along with chats deticated to each wiki page.  IFRAME is disabled due too Clickjacking, please visit the live page!`,
    github: "https://github.com/CarbonBond/theWIkiPage",
    iframe: false,
    live: "https://thewiki.page",
    tools: [
      "html",
      "css",
      "javascript",
      "express",
      "mongodb",
      "docker",
      "nginx"
    ]

  },
  bbsurvey: {
    name: "Brandon Land Surveying",
    desc: "A Website for a friends land surveying company. Allows for email contact using a form. There isn't a public github for this, as it is their site.",
    github: "https://github.com/CarbonBond",
    iframe: true,
    live: "https://bb.wickedvoid.com",
    tools: [
      "html",
      "css",
      "javascript",
      "express",
      "docker",
      "nginx"
    ]
  },
  sketch: {
    name: "Sketch-n-Etch",
    desc: "A simple drawing board that lets you change colors, brush size, and clear the board. It draws using the Canvas API.",
    github: "https://github.com/CarbonBond/Etch-a-Sketch",
    iframe: true,
    live: "https://sketch.brandonburge.com",
    tools: [
      "html",
      "css",
      "javascript",
      "docker",
      "nginx"
    ]
  },


}

export default projects;
