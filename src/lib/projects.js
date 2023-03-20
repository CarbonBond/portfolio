let projects = {
  tictactoe: {
    name: "Tic-Tac-Toe",
    desc: "A basic Tic-Tac-Toe game that has AI. I used old fasion JS modules to emulate OOP. This help lower the amount of boilerplate code.",
    github: "https://github.com/CarbonBond/tic-tac-toe",
    iframe: true,
    live: "https://tictactoe.brandonburge.com",
    imgsrc: "/images/tictactoe.png",
    wip: false,
    tools: [
      "html",
      "css",
      "javascript",
      "docker",
      "nginx"
    ]
  },
  pong: {
    name: "Pong",
    desc: "Its Pong! A game with a ball and two paddles. This version is created using C++ with SDL for grapgics. It can be compiled to emscripten, which is why you can play the game on the web. Font doesn't work on emscripten compiling, but you can still enjoy the game! As you play, the AI paddle difficulty will increase/decrease based on your skills.",
    github: "https://github.com/CarbonBond/tic-tac-toe",
    iframe: false,
    live: "https://pong.brandonburge.com",
    imgsrc: "/images/pong.png",
    wip: false,
    tools: [
      "html",
      "css",
      "javascript",
      "docker",
      "nginx",
      "cplusplus"
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
    imgsrc: "/images/blog.png",
    wip: true,
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
    imgsrc: "/images/blog-api.png",
    wip: true,
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
    imgsrc: "/images/tweetor.png",
    wip: false,
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
    imgsrc: "/images/thewikipage.png",
    wip: true,
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
    live: "https://brandonbrownlandsurvey.com",
    imgsrc: "/images/bbsurvey.png",
    wip: false,
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
    imgsrc: "/images/sketch.png",
    wip: false,
    tools: [
      "html",
      "css",
      "javascript",
      "docker",
      "nginx"
    ]
  },
  resume: {
    name: "Resume",
    desc: "A website that hosts a resume",
    github: "https://github.com/CarbonBond/resume",
    iframe: true,
    live: "https://resume.brandonburge.com",
    imgsrc: "/images/resume.png",
    wip: false,
    tools: [
      "html",
      "css",
      "docker",
      "nginx"
    ]
  },


  

}

export default projects;
