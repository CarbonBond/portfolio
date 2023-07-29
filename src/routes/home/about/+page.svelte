<script>
	import skills from '$lib/skills.js';
  import Skill from '$lib/Skill.svelte';
</script>

<sevlte:head>
	<title>About</title>
</sevlte:head>

<div class="container">
	<section class="intro">
		<article class="description">
			<h3>Hi, I'm Brandon.</h3>
			<p>
				I began my journey with code 12 years ago by modding minecraft. This led to C++ terminal
				games and Python automation. Everyone needs a website, so I began to create mine.
				<br /><br />
        After a while of web development with Svelte, React, and Vanilla JS, I wanted more complexity.
        This led me to learn basic x86 assembly and C, which is currently my favorite language.
        I love using C for embedded devices, rendering, and performance-heavy programs.
			</p>
		</article>
    <img src="/images/ProPic.png" alt="Picture of Brandon B" class="picture" />
	</section>

	<section class="project">
		<h3>Projects</h3>
		<div class="main">
			<a href="/home/projects/resume">
				<h2>Resume</h2>
				<img src="/images/resume.png" alt="" />
				<p />
			</a>
		</div>
		<div class="other">
			<a href="/home/projects/sketch">
				<h4>Sketch-n-Etch</h4>
				<img src="/images/sketch.png" alt="" />
			</a>
			<a href="/home/projects/3dRenderer">
				<h4>3d CPU renderer</h4>
				<img src="/images/renderer.png" alt="" class="8bit" />
				<p />
			</a>
			<a href="/home/projects/pong">
				<h4>Pong</h4>
				<img src="/images/pong.png" alt="" />
			</a>
		</div>
		<div class="buttonArea"><a href="/home/skills" class="button">See More</a></div>
	</section>

	<section class="skills">
		<h3 class="title">Skills</h3>
		<div class="webskill">
			<article class="skill">
				<h3>Structure</h3>
				<div class="imgGroup">
					<div class="imgContainer">
            <Skill name='html' skill={skills.html} />
					</div>
					<div class="imgContainer">
            <Skill name='css' skill={skills.css} />
					</div>
				</div>
				<p>
					HTML5 and CSS3 are the structure and style that power the web. They are the core of every
					website.
				</p>
			</article>
			<article class="skill">
				<h3>Front-End</h3>
				<div class="imgGroup">
					<div class="imgContainer">
            <Skill name='javascript' skill={skills.javascript} />
					</div>
					<div class="imgContainer">
            <Skill name='react' skill={skills.react} />
					</div>
				</div>
				<p>
					Javascript and React give powerfull interactivity to websites. I use this to power up my
					websites to another level.
				</p>
			</article>
			<article class="skill">
				<h3>Back-End</h3>
				<div class="imgGroup">
					<div class="imgContainer">
            <Skill name='mongodb' skill={skills.mongodb} />
					</div>
					<div class="imgContainer">
            <Skill name='express' skill={skills.express} />
					</div>
					<div class="imgContainer">
            <Skill name='nodejs' skill={skills.nodejs} />
					</div>
				</div>
				<p>
					Completing the MERN stack, we have MongoDB as the Databse, and Nodejs w/ Express for
					backends.
				</p>
			</article>
		</div>
		<div class="buttonArea"><a href="/home/skills" class="button">All Skills</a></div>
	</section>
</div>


<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
	}
  
	.container section {
			min-height: 85vh;
			display: flex;
			margin-bottom: 30rem;
		}

	.intro {
		justify-content: space-evenly;
		align-items: center;
		padding-top: 4rem;
	}

  .picture {
			flex: 1 1 auto;
			max-width: 90ch;
			padding: 1em;
  }

	.project {
		flex-direction: column;
		align-items: center;
		margin: 20rem 0;
    margin: auto;

	}
	.project h3 {
			font-size: 5rem;
			margin-bottom: 4rem;
		}

	.project h2 {
			font-size: 4rem;
			margin-bottom: 2rem;
		}
	.project h4 {
			font-size: 2.5rem;
      overflow: none;
		}
	.project h2,
	.project h4 {
			text-align: center;
		}
  .project img:hover {

      border: 2px solid hsl(var(--core-purple));
    }
	.project .main {
			display: flex;
			flex-direction: column;
			align-items: center;

		}
		.project .main 	* {
				margin: 1rem 0;
			}

	.project .main	a {
				width: 100%;

			}
	.project .main a img {
					object-fit: cover;
				}

	.project .main 		p {
				text-align: justify;
				min-width: 25ch;
				margin-bottom: 5rem;
			}

	.project .other {
			display: flex;
			justify-content: space-evenly;
      flex-wrap: wrap;
			width: 100%;

		}
	.project .other a {
				margin: 10px;
				max-width: 360px;
				max-height: 220px;

        margin: 4rem;
			}
  .project .other a img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

	.skills {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 0px !important;
	}
	.skills .title {
			font-size: 4rem;
			margin-bottom: 4rem;
		}

	.buttonArea {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem;
	}
	.buttonArea .button {
			font-size: 25px;
			font-weight: bold;
			padding: 25px;
			max-height: 30px;
		}

	.webskill {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 80%;
    min-height: 400px;
	}

	.skill {
		display: grid;
    width: 33%;
    justify-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 6fr 4fr;
		height: 25rem;
	}
		.skill h3 {
			font-size: 26px;
			align-self: flex-end;
			text-align: center;
			grid-area: 1 / 1 / 2 / 2;
		}
		.skill .imgGroup {
			display: flex;
			margin: 20px;
			grid-area: 2 / 1 / 3 / 2;
			margin: 4rem 0;
			align-items: center;
			justify-content: space-around;
		}
		.skill p {
			grid-area: 3 / 1 / 4 / 2;
			text-align: center;
			max-width: 40ch;
		}

	.imgContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 5px;
	}

	.description {
		max-width: 70ch;
	}
		.description h3 {
			font-size: 3rem;
		}
		.description p {
			font-size: 2rem;
		}


	@media screen and (max-width: 500px) {
		.picture {
			display: none;
		}

		.project {
			padding: 0 1rem;
		}
		.project .main a {
        width: 90%;
			}
    .project .other {
      flex-direction: column;
      align-items: center;
    }
    .project .other a  {
        width: 80%;
      }

		.description p {
      max-width: 30ch;
		}
	}
</style>
