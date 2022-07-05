<script>
	import skills from '../../lib/skills.js';
	import projects from '../../lib/projects.js';
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
				games and Python automation. Soon I needed a website, and so my Web Development began.
				<br /><br />
				Currently my focus resides here, with the MERN stack (MongoDB, Express, React, Node). When not
				needing a backend, I use NGINX to power my sites. All of these are run in Docker containers to
				speed up development.
			</p>
		</article>
		<img src="" alt="" class="picture" />
	</section>

	<section class="project">
		<div class="main">
			<h2>Brandon Brown Land Surveying</h2>
			<a href="/home/projects/bbsurvey"><img src="/images/bbsurvey.png" alt="" class="8bit" /> </a>
			<nav class="links"><a href="" class="Github" /><a href="" class="Live" /></nav>
			<p />
		</div>
		<div class="other">
			<a href="/home/projects/codeproblem">
				<h4>Sketch-n-Etch</h4>
				<img src="/images/sketch.png" alt="" />
			</a>
			<a href="/home/projects/tweetor">
				<h4>Tweetor</h4>
				<img src="/images/tweetor.png" alt="" />
				<p />
			</a>
			<a href="/home/projects/resume">
				<h4>Resume</h4>
				<img src="/images/resume.png" alt="" />
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
						<div class="svg">
							{@html skills.html.svg}
						</div>
						<h4>{skills.html.name}</h4>
					</div>
					<div class="imgContainer">
						<div class="svg">
							{@html skills.css.svg}
						</div>
						<h4>{skills.css.name}</h4>
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
						<div class="svg">
							{@html skills.javascript.svg}
						</div>
						<h4>{skills.javascript.name}</h4>
					</div>
					<div class="imgContainer">
						<div class="svg">
							{@html skills.react.svg}
						</div>
						<h4>{skills.react.name}</h4>
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
						<div class="svg">
							{@html skills.mongodb.svg}
						</div>
						<h4>{skills.mongodb.name}</h4>
					</div>
					<div class="imgContainer">
						<div class="svg">
							{@html skills.express.svg}
						</div>
						<h4>{skills.express.name}</h4>
					</div>
					<div class="imgContainer">
						<div class="svg">
							{@html skills.nodejs.svg}
						</div>
						<h4>{skills.nodejs.name}</h4>
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

<style lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
		section {
			display: flex;
			margin-bottom: 20rem;
		}
	}

	.intro {
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.project {
		flex-direction: column;
		align-items: center;
    padding: 0 20rem;
		.main {
			display: flex;
			flex-direction: column;
			align-items: center;

			* {
				margin: 1rem 0;
			}

      a {
        width: 50%;

        img{
          object-fit: cover;
        }
      }

			p {
				text-align: justify;
				min-width: 25ch;
				margin-bottom: 5rem;
			}
		}

		.other {
			display: flex;
			justify-content: space-evenly;
      width: 100%;
			a {
				margin: 10px;
        max-width: 400px;
        max-height: 240px;
			}

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

		}
	}

	.skills {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		.title {
			font-size: 4rem;
			margin-bottom: 4rem;
		}
	}

	.buttonArea {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem;
		.button {
			font-size: 25px;
			font-weight: bold;
			padding: 25px;
			max-height: 30px;
		}
	}
	.webskill {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
    width: 80%;
	}

	.skill {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 6fr 4fr;
		height: 25rem;
		margin: 70px 0;
		h3 {
			font-size: 26px;
			align-self: flex-end;
			text-align: center;
			grid-area: 1 / 1 / 2 / 2;
		}
		.imgGroup {
			display: flex;
			margin: 20px;
			grid-area: 2 / 1 / 3 / 2;
			margin: 4rem 0;
			align-items: center;
			justify-content: space-around;
		}
		p {
			grid-area: 3 / 1 / 4 / 2;
			text-align: center;
			max-width: 40ch;
		}
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
		h3 {
			font-size: 3rem;
		}
		p {
			font-size: 2rem;
		}
	}

	.svg {
		font-size: 8rem;
		height: 10rem;
		width: 10rem;
		text-align: center;
	}

	@media screen and (max-width: 500px) {
		.picture {
			display: none;
		}

		.project {
      padding: 0 1rem;

      .main {
        a {
          width: 90%;
        }
      }
			.other {
				flex-direction: column;
        align-items: center;
        a {
          width: 80%;
        }
			}
		}

    .description {
      p {
        max-width: 30ch;
      }
    }
	}
</style>
