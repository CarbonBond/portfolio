<div class="footer">
	<nav class="linkContainer">
			<a href="tel:720-545-6524" class="link">720-545-6524</a>
			<a href="mailto:brandon.w.burge@gmail.com" class="link">Brandon.w.Burge@gmail.com</a>
			<a href="https://www.linkedin.com/in/brandon-w-burge/" class="link">LinkedIn</a>
	</nav>
</div>

<style >
	.footer { 
    position: relative;
    bottom:0;
    height: 12rem;
    width: 100%;
    display: grid;
    border-top: 2px solid hsl(var(--core-purple), 100%);
    background-color: hsl(var(--dark-blue), 100%);
    flex: 0 0 auto;
	}

	.linkContainer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}

	.link {
		flex: 1 1 auto;
		margin: 0.5rem 3rem;

		text-align: center;

		padding: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		font-weight: 600;
		background-color: hsl(var(--dark-blue));
		color: hsl(var(--light-purple));
		transition: background-color 0.65s, box-shadow 0.75s;
	}
	.link:hover {
		background-color: hsl(var(--core-purple));
		box-shadow: 0 0 2px 1px hsl(var(--core-purple));
	}
	.link:active {
		background-color: hsl(var(--core-purple), 50%);
	}
	@media screen and (max-width: 500px) {
		.link {
			min-width: 4ch;
			padding: 0.5rem 0;
			margin: 0;
		}
	}
</style>
