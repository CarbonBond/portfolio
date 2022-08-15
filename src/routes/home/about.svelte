<script>
	import skills from '../../lib/skills.js';
	import projects from '../../lib/projects.js';
  import Skill from '../../components/skill/Skill.svelte'
</script>

<sevlte:head>
	<title>About</title>
</sevlte:head>

<div class="container">
	<section class="intro">
		<article class="description">
			<h3>Hi, I'm Brandon.</h3>
			<p>
				I'm a multifaceted person when it comes to software development. From modding games with
				lua, to styling websites with SCSS. I have a wide amount of skills and am always ready and
				wanting to learns more.
				<br />
				<br />
				I currently focus on web development with Front-End apps using React or Svelte. The Back-End
				servers use Nodejs or Go. As for databases, I use mongoDB or Prisma as a ORM for sql.
			</p>
		</article>
		<img src="/images/ProPic.png" alt="Brandon B" class="picture" />
	</section>

	<section class="project">
		<h3>Projects</h3>
		<div class="main">
			<a href="/home/projects/tweetor">
				<h2>Tweetor</h2>
				<img src="/images/tweetor.png" alt="" />
				<p />
			</a>
		</div>
		<div class="other">
			<a href="/home/projects/sketch">
				<h4>Sketch-n-Etch</h4>
				<img src="/images/sketch.png" alt="" />
			</a>
			<a href="/home/projects/bbsurvey">
				<h4>Brandon Brown Land Surveying</h4>
				<img src="/images/bbsurvey.png" alt="" class="8bit" />
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

<style lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-bottom: 30px;
		section {
			min-height: 85vh;
			display: flex;
			margin-bottom: 30rem;
		}
	}

	.intro {
		justify-content: space-evenly;
		align-items: center;
		padding: 4rem;
		flex-wrap: wrap-reverse;

		img {
			flex: 1 1 auto;
			max-width: 90ch;
			padding: 1em;
		}
	}

	.project {
		flex-direction: column;
		align-items: center;
		margin: 20rem 0;
		margin: auto;

		h3 {
			font-size: 5rem;
			margin-bottom: 4rem;
		}

		h2 {
			font-size: 4rem;
			margin-bottom: 2rem;
		}
		h4 {
			font-size: 2.5rem;
			overflow: none;
		}
		h2,
		h4 {
			text-align: center;
		}
		img:hover {
			border: 2px solid hsl(270, 100%, 36%);
		}
		.main {
			display: flex;
			flex-direction: column;
			align-items: center;

			* {
				margin: 1rem 0;
			}

			a {
				width: 100%;

				img {
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
			flex-wrap: wrap;
			width: 100%;

			a {
				margin: 10px;
				max-width: 360px;
				max-height: 220px;

				margin: 4rem;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}

	.skills {
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 0px !important;
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
      margin: auto;
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
		min-width: 40ch;
		max-width: 90ch;
		h3 {
			font-size: 4.5rem;
		}
		p {
			font-size: 2.5rem;
		}
	}

	.svg {
		font-size: 8rem;
		height: 10rem;
		width: 10rem;
		text-align: center;
	}

	@media screen and (max-width: 700px) {
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
