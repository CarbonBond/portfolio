<sevlte:head>
    <title>Brandon Burge</title>
</sevlte:head>

<div class="wrapper">
 <div class="title" >
    <h1 class="name">
        BRANDON BURGE 
     </h1> 
    <h2 class="dev">FULL STACK DEVELOPER</h2>
 </div>  
 <nav>
     <a href="">ABOUT</a>
     <a href="">PROJECTS</a>
 </nav>
</div>


<style>
.wrapper {
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: minmax(5rem, 1fr) minmax(30rem,4fr) minmax(30rem, 4fr) ;
    grid-template-rows: 1fr 2.5fr 2.5fr 5fr 1fr;
}

.title {
    grid-column: 2 / 4;
    grid-row:    2 / 4;

    justify-content: flex-end;
    
    display: flex;
    flex-direction: column;
}

.name {
    font-weight: 600;
    letter-spacing: 0.2rem;
    font-size: 9rem;
    color: lavender; 
}

.dev {
    text-shadow:-1px  1px 1px #fff,
                 1px  1px 1px #fff,
                 1px -1px 1px #fff,
                -1px -1px 1px #fff;
    font-size: 5rem;
    color: hsl(var(--dark-blue))
}

nav{
    grid-column: 2/ 3;
    grid-row:    4;
    justify-self: flex-start;
    display: flex;
    max-height: 7rem;
    margin: 3rem 0rem;
}
nav > * {
    padding: 1rem;
    width:18rem;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    margin: 1rem 2rem 1rem 0;
    font-size: 3rem;
    color: hsl(var(--dark-blue));
    background-color: hsl(var(--core-purple));
}
</style>