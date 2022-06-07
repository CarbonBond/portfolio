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
    name: "Blog/API",
    desc:
      `A blog the reaches to a Backend REST API. Uses JWT for authentication, meaning I can log in and manage posts. 
CURL is avaliable on each post. You will find me posting about Software here!`,
    github: "https://github.com/CarbonBond/blog-frontend",
    iframe: true,
    live: "https://blog.brandonburge.com",
    tools: [
      "html",
      "css",
      "javascript",
      "express",
      "react",
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
  }
}


export default projects;
