import React from "react";
/* import "./container.css"; */

function Homepagecontainer() {
    return (
        <div className="container">
            {/* <form className="well form-horizontal" action=" " method="post" id="contact_form"> */}
            <fieldset>

                <legend>
                    <center>
                        <h2><b>Home Page</b></h2>
                    </center>
                </legend>
                <br />
                <div className="thumbnails">
                    <div className="box">
                        <a href="C:\xampp\htdocs\sola\Website\Final\Giphy-API\index.html" className="image fit">{/* <img src="C:\xampp\htdocs\sola\Website\Final\assets\images\giphy-700X525.png" alt="" /> */}</a>
                        <div className="inner">
                            {/*  <h3 style="font-family: 'Pacifico', cursive; font-weight: 900;">Featured Adverts</h3> */}
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                            <a href="C:\xampp\htdocs\sola\Website\Final\Giphy-API\index.html" className="button fit">Read More...</a>
                        </div>
                    </div>

                    <div className="box">
                        <a href="C:\xampp\htdocs\sola\Website\Final\TrainTracker\index.html" className="image fit">{/* <img src="C:\xampp\htdocs\sola\Website\Final\assets\images\train-700X525.png" alt="" /> */}</a>
                        <div className="inner">
                            {/* <h3 style="font-family: 'Pacifico', cursive; font-weight: 900;">Featured Articles</h3> */}
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                            <a href="C:\xampp\htdocs\sola\Website\Final\TrainTracker\index.html" className="button style2 fit">Read More...</a>
                        </div>
                    </div>
                    <div className="box">
                        <a href="C:\xampp\htdocs\sola\Website\Final\TriviaGame\index.html" className="image fit">{/* <img src="C:\xampp\htdocs\sola\Website\Final\assets\images\trivia-700X525.png" alt="" /> */}</a>
                        <div className="inner">
                            {/* <h3 style="font-family: 'Pacifico', cursive; font-weight: 900;">News Feeds</h3> */}
                            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus </p>
                            <a href="C:\xampp\htdocs\sola\Website\Final\TriviaGame\index.html" className="button style3 fit" data-poptrox="youtube,800x400">Read More...</a>
                        </div>
                    </div>
                </div>
            </fieldset>
            <hr />
            <div className="padding: 20px;">
                <a href="#about">Blog 1</a>  ||  <a href="#services">Blog 2</a>
                <a href="#clients">Blog 3</a>
                <a href="#contact">Blog 4</a>
                <a href="#about">Link 1</a>
                <a href="#services">Link 2</a>
                <a href="#clients">Link 3</a>
                <a href="#contact">Link 4</a>
            </div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
    )
}
export default Homepagecontainer;

