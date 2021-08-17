import Footer from "./footer"

const Welcome =()=>{
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-title text-center">
                            <h2>Lucky <span class="primary">Mohlala</span> <span class="title-bg">About</span></h2>
                            <p>A software developer, who focuses on web development  &  A React Native developer </p>
                        </div>
                    </div>
                </div> 
            </div> 
            <Footer prev="/" next="/About"/>
        </>
    )
}
export default Welcome;