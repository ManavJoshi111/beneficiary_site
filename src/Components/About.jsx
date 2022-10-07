import React from 'react'
import "../Styles/about.css";

const About = () => {
    return (
        <>
            <div className="container-fluid mt-3 flex-wrap d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="leftcontainer">
                    {/* <img src={img} id="imganim" className="img-fluid marginanim" alt="" /> */}
                </div>
                <div className="rightcontainer">
                    <h2 id="hey">Hey There...</h2>
                    <center>
                        <p id="intro">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quisquam recusandae quasi quo optio tempore voluptas cum architecto, praesentium cupiditate, aut rem repudiandae minima, perspiciatis aliquid? Repellat velit quam dolore?
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, veniam sequi! Eius voluptatem amet suscipit aperiam at nisi, reprehenderit deleniti.
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat totam, facere dolor iusto corporis voluptates culpa voluptate, fuga voluptas aliquam tempore sequi, nulla perspiciatis quos eaque voluptatibus? Est, sunt maxime!
                            <br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto odio minima consequatur ad ipsa voluptas iste eius corrupti nobis rerum, tempore veritatis. Mollitia accusamus qui nesciunt? Placeat neque aperiam, aliquid quaerat impedit laboriosam, fuga ut perferendis, consectetur doloribus omnis exercitationem!

                            <br /> I am an introspecter who loves to be with himself the most.
                        </p>
                    </center>
                </div>
            </div>
        </>
    )
}

export default About;