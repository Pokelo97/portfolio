import Hexagon from "./hexagon";

const Home = () => {
    return (
        <div class="pt-tablecell page-home relative" >
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                    <div class="page-title text-center">
                            <h2>Lucky <span class="primary">Mohlala</span></h2>
                            <p>A software developer from South Africa, who focuses on web application development</p>
                        </div>
                        <div class="hexagon-menu clear">
                            <Hexagon name="Welcome" icon="bi bi-suit-club" />
                            <Hexagon name="About" icon="bi bi-person"/>
                            <Hexagon name="Resume" icon="bi bi-journal-check"/>
                            <Hexagon name="Certifications" icon="bi bi-award"/>
                            <Hexagon name="Projects" icon="bi bi-code-slash"/>
                            <Hexagon name="Contact" icon="bi bi-envelope-open"/>
                            <Hexagon name="GitHub" link="https://github.com/Pokelo97" icon="bi bi-github"/>
                        </div> 
                    </div> 
                </div> 
            </div>
        </div> 
    );
  }
  
  export default Home;
  