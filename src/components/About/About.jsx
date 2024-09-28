import './About.scss';
import handQuill from '../../assets/images/hand-quill.png';


const About = () => {

    return (
        <div className="about">
            <div className="about__intro about__text">
                <div className="about__text-block">
                    <h1>Hey there...</h1>
                    <p>My name's Elyse.</p>
                    <p>I like to create.</p>
                    <p>My hobbies are problem solving, learning, and creating beautiful work in all areas of life. I’m a self-driven worker who is always aiming to better my practice and improve my skills; I’m a glutton for learning new techniques, and am taking self-directed courses to this day.</p>
                    <p>I create in any medium I can fathom. Currently my biggest interests are web design and development, leatherworking, knitting, and alternative printing-methods.</p>
                    <p>This site is to be a place to host some of my recent creative ventures, and a testament to what I'm capable of doing.</p>
                </div>
            </div>

            <div className="about__history about__text">
                <img className="about__image" src={handQuill} />
                <div className="about__text-block">
                    <h2>History</h2>
                    <p>From a young age I've been creating. I started out, like many artists my age, drawing fanart and short comics about Sailor Moon. To say I was self-taught would be a dishonour to my grandfather who taught me to draw, my aunt who inspired me to craft, and my mother who encouraged me to pursue any and all passions. So many other people in my life were huge inspirations to creativity.</p>
                    <p>From the age of 9 or 10 I began coding basi HTML websites. In highschool I learned how to use CSS via customising my livejournal pages, and started to build more complex websites. I toyed with Wordpress and other free web hosting services to build fan-sites for my favourite anime, and just recently have devled into the world of back-end development.</p>
                </div>
            </div>

            <div className="about__career about__text">
                <h2>Professional Career</h2>
                <p>While coding and art was always my greatest interests, I didn't believe I could make it a career until much later in life. I was working in the tech space at a start-up as customer service and dev support QA, when I decided I wanted to go back to school for graphic design and take a stab at a creative career. There I releaned to build websites and approach them from a designer's perspective.</p>
                <p>When I graduated I worked as a contract graphic designer, before landing a job in the print industry. This only helped accentuate my knowledge of graphic design, and allowed me to work building and modifying Shopify and WordPress websites. Inspired by the web work, I went back to school again to take a web development bootcamp at <a href="https://brainstation.io">BrainStation</a>.</p>
                <p>From there I was hired on as a Teaching Assistant within the program, and continued to develop my coding knowledge. I was also working on a Wix based website for the <a href="https://westcoastknitters.org">West Coast Knitters' Guild</a>, which was a super fun project to learn the system on.</p>
            </div>

            <div className="about__current about__text">
                <h2>Current Day</h2>
                <p>Now-a-days I can be found playing with my cat Toc, watching dev-tube/youtube channels, knitting up a storm, dying wool, playing with linocuts and screen printing, and occasionally crafting leather armour.</p>
            </div> 
        </div>
    )

}

export default About; 