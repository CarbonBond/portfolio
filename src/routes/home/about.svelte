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
		<h3>Skills</h3>
		<div class="skill">
			<li>
				<div class="svg">
					{@html skills.html.svg}
				</div>
				<h4>{skills.html.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.css.svg}
				</div>
				<h4>{skills.css.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.typescript.svg}
				</div>
				<h4>{skills.typescript.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.react.svg}
				</div>
				<h4>{skills.react.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.mongodb.svg}
				</div>
				<h4>{skills.mongodb.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.express.svg}
				</div>
				<h4>{skills.express.name}</h4>
			</li>
			<li>
				<div class="svg">
					{@html skills.nodejs.svg}
				</div>
				<h4>{skills.nodejs.name}</h4>
			</li>
		</div >
		<a href="/skills" class='button' >All Skills</a>
	</section>
</div>

<style lang="scss">
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
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

    h3 {
      font-size: 4rem;
      margin-bottom: 4rem;
    }
		div {
			display: flex;
			flex-wrap: wrap;
      align-items: center;
      justify-content: center;
		}
		li {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 25px;
		}
		.button {
			font-size: 25px;
			font-weight: bold;
      flex-grow: 0;
      padding: 25px;
      max-height: 30px;
		}
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
</style>
