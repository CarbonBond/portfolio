let projects = {
  tictactoe: {
    name: "Tic-Tac-Toe",
    desc: "A basic Tic-Tac-Toe game that has AI. I used old Fasion JS modules to emulate OOP. This helps lower the amount of boilerplate code.",
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
    desc: "Its Pong! A game with a ball and two paddles. This version is created using C++ with SDL for graphics. It can be compiled into Emscripten, which is why you can play the game on the web. Font doesn't work on Emscripten compiling, but you can still enjoy the game! As you play, the AI paddle difficulty will increase or decrease based on your skills.",
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
      `A blog that reaches to a backend REST API. Uses JWT for authentication, meaning I can log in and manage posts. 
CURL is available on each post. You will find me posting about software here! Build using functional React, along with a search system.`,
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
      `A Backend REST API. Uses JWT for authentication with Passportjs. It uses Prisma Cloud as a sql manager that reaches a postgres SQL server on Hiroku;
  This is a REST API, so CURL is available on each post. Check out the Blog app to see it in action`,
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
    desc: "A Twitter clone that uses Sveltekit and Prisma as a SQL generator. It allows for posting, liking, deleting, and tweeting. Along with custom URLs for profiles and posts. ",
    github: "https://github.com/CarbonBond/Tweetor",
    iframe: true,
    live: "https://tweetor.brandonburge.com",
    imgsrc: "/images/tweetor.png",
    wip: true,
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
    desc: `A more custamizable wiki that allows for DOM node creation and saving. You could develop a full website using this, but it's made for community information.   
It is developed using server side rendering with Express and Pug. It saves hashed user information and page information in MongoDB. Users can follow each other to keep up with their history. 
Communication can be done through private messaging, along with chats designated for each wiki page.  IFRAME is disabled due to clickjacking; please visit the live page!`,
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
    desc: "A website for a friend's land surveying company. Allows for email contact using a form. There isn't a public github for this, as it is their site.",
    github: "https://github.com/CarbonBond",
    iframe: true,
    live: "https://brandonbrownlandsurvey.com",
    imgsrc: "/images/bbsurvey.png",
    wip: true,
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
  renderer: {
    name: "3D CPU Renderer",
    desc: "A renderer that uses old-fashioned rendering.",
    github: "https://github.com/CarbonBond/3dRenderer",
    iframe: false,
    live: "https://brandonburge.com/home/projects/renderer",
    imgsrc: "/images/renderer.png",
    wip: false,
    tools: [
      "c"
    ]
  },
  astroids: {
    name: "Astroids",
    desc: "A replica astroids game.",
    github: "https://github.com/CarbonBond/AstroidsReplica",
    iframe: false,
    live: "https://brandonburge.com/home/projects/astroids",
    imgsrc: "/images/astroids.png",
    wip: false,
    tools: [
      "odin"
    ]
  },
  

}

export default projects;
