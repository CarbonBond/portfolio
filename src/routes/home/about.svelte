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
			<h3>Who am I?</h3>
			<p>
				I'm Brandon, a software engineer that is currently focusing on full-stack web development.
				The tech I work with is either Sveltekit + prima w/ sql or MERN (MongoDB, Express, React,
				Node).
			</p>
		</article>
		<img src="" alt="" />
	</section>

	<section class="project">
		<div class="main">
			<h2>8-Bit breadboard PC</h2>
			<img src="" alt="" class="8bit" />
			<nav class="links"><a href="" class="Github" /><a href="" class="Live" /></nav>
		</div>
		<div class="other">
			<a href="/home/projects/codeproblem">
				<h4>CodeProblem.Page</h4>
				<img src="" alt="" />
			</a>
			<a href="/home/projects/sketch">
				<h4>Sketch-n-Etch</h4>
				<img src="" alt="" />
			</a>
			<a href="/home/projects/bbsurvey">
				<h4>Brandon Brown Land Surveying</h4>
				<img src="" alt="" />
			</a>
			<a href="/home/projects/tweetor">
				<h4>Tweetor</h4>
				<img src="" alt="" />
				<p />
			</a>
		</div>
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
					Completing the MERN stack, we have MongoDB, Express, and Nodejs for backends. MongoDB is a
					simple and managable document database. Express runs on Node to provide a backend server,
					sending the HTML or API information we need.
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
			height: 100vh;
			display: flex;
		}
	}

	.intro {
		flex-wrap: wrap-reverse;
		justify-content: space-evenly;
		align-items: flex-end;
	}

	.project {
		flex-direction: column;
		align-items: center;

		.other {
			display: flex;
			justify-content: space-evenly;

			a {
				margin: 10px;
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
		.buttonArea {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 10rem;
			.button {
				font-size: 25px;
				font-weight: bold;
				padding: 25px;
				max-height: 30px;
			}
		}
	}

	.webskill {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 20rem;
	}

	.skill {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 6fr 4fr;
		height: 25rem;
		margin: 50px;
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
			justify-content: center;
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
		.container {
			padding: 0 20px;
		}
	}
</style>
