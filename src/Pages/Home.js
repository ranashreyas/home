

import Card from 'react-bootstrap/Card';

import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
import { useState } from 'react';

import mobiTest from '../assets/images/MobiTestSrcSquare.png'
import foodGrind from '../assets/images/foodGrindSC.png'
import autoLatex from '../assets/images/autoLatex.png'
import synchro from '../assets/images/synchro.png'
import robotics from '../assets/images/robotics.png'
import faiza from '../assets/images/faiza.png'
import blossomVR from '../assets/images/blossomVR.png'


import linkedin from '../assets/images/linkedin.png'
import devpost from '../assets/images/devpost.png'
import instagram from '../assets/images/instagram.png'
import portfolio from '../assets/images/portfolio.png'
import gmail from '../assets/images/gmail.png'
import github from '../assets/images/github.png'
import shreyas from '../assets/images/shreyas.png'



export default function Landing() {
    const[expandState, setExpandState] = useState(false)

    const[skill1State, setSkill1State] = useState(false)
    const[skill2State, setSkill2State] = useState(false)
    const[skill3State, setSkill3State] = useState(false)
    const[skill4State, setSkill4State] = useState(false)
    const[skill5State, setSkill5State] = useState(false)
    const[skill6State, setSkill6State] = useState(false)
    const[skill7State, setSkill7State] = useState(false)
    const[skill8State, setSkill8State] = useState(false)
    const[skill9State, setSkill9State] = useState(false)
    const[skill10State, setSkill10State] = useState(false)
    const[skill11State, setSkill11State] = useState(false)

    const fullExpandCollapse = (newState) => {
        setSkill1State(newState)
        setSkill2State(newState)
        setSkill3State(newState)
        setSkill4State(newState)
        setSkill5State(newState)
        setSkill6State(newState)
        setSkill7State(newState)
        setSkill8State(newState)
        setSkill9State(newState)
        setSkill10State(newState)
        setSkill11State(newState)

        setExpandState(newState)
    }

    return (
        <body>
            <div class="wrapper">
                <div class="typing-demo">
                    ShreyasRana()
                </div>
            </div>
            <div class="wrapperDescription">
                <div class="typing-demo-small">
                    "I am a freshman at <i><b>UC Berkeley</b></i> double majoring in Computer Science and Data Science.<br />
                    I have extensive experience in full stack software development,<br />
                    with an interest in <i><b>ML/AI, blockchain, robotics, and art.</b></i><br />
                    {/* My skills and passion for technology make me<br />
                    an asset in any development project." */}
                </div>
            </div>
            <div class='sideAlign'>
                <div class="sideAlignChild">
                <Card onClick={() => {
                        fullExpandCollapse(!expandState)
                    }} style={{ width: '10rem', borderWidth:(expandState?'2px':'2px'), borderColor:(expandState?'rgb(0, 255, 34)':'rgb(0, 0, 0)') }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '20px' }}></Card.Title>
                            <Card.Text>{expandState?<p>--- <b>-</b> ---</p>:<p>--- <b>+</b> ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h2 class='sideAlign'>m_projects[] = </h2>
            <div class='sideAlign'>
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill1State(true):setSkill1State(false)
                    }} onMouseEnter={() => {
                        setSkill1State(true)
                    }} style={{width: '18rem', borderWidth:(skill1State?'2px':'2px'), borderColor:(skill1State?'rgb(0, 255, 34)':'rgb(0, 0, 0)') }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>MobiTest</Card.Title>
                            <Card.Text id='skill1' >{skill1State?
                            <div>
                                <p>• <a target="_blank" rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.covidassistant.pdapp&hl=en_US&gl=US'><b>Research project</b> to monitor the severity of Parkinson's disease in a patient using a phone</a></p>
                                <p><b>• &gt; 600 downloads</b> on Android + iOS</p>
                                <p>• Collaboration with with University of Malmö</p>
                                <p><b>• Robby Byers Synopsis Science Championship award</b></p>
                                <p>• Created using <b>Flutter/Dart</b></p>
                                <img alt='mobitest' src={mobiTest} ></img>
                                <p>05/2020 to Present</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill2State(true):setSkill2State(false)
                    }} onMouseEnter={() => {
                        setSkill2State(true)
                    }} style={{ width: '18rem', borderWidth:(skill2State?'2px':'2px'), borderColor:(skill2State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>FoodGrind</Card.Title>
                            <Card.Text id='skill1' >{skill2State?
                            <div>

                                <p><b>• Crowdsourcing mobile application</b> allowing UC Berkeley students to <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/foodgrindberkeley/'>rate daily-updated menu items at the Dining Halls.</a></p>
                                <p><b>• Daily Cron job web-scraper</b> to get data from dining hall pages</p>
                                <p>• Created all artwork done in Adobe Illustrator</p>
                                <p>• Created using <b>Flutter/Dart, SQL, MongoDB+Heroku (archive version) DynamoDB+Boto3 (current)</b></p>
                                <img alt='foodgrind' src={foodGrind} ></img>
                                <p>10/2022 to Present</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill3State(true):setSkill3State(false)
                    }} onMouseEnter={() => {
                        setSkill3State(true)
                    }} style={{ width: '18rem', borderWidth:(skill3State?'2px':'2px'), borderColor:(skill3State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>AutoLaTeX</Card.Title>
                            <Card.Text id='skill1' >{skill3State?
                            <div>
                                <p>• Authored the add-on for rendering LaTeX equations on Google Slides.</p>
                                <p><b>• Over 10 million downloads</b> and is a top rated on <a target="_blank" rel="noopener noreferrer" href='https://workspace.google.com/marketplace/app/autolatex_equations/850293439076'>Google Marketplace</a></p>
                                <p>• Collaborated with Google Cloud team to debug issues</p>
                                <p>• Created using <b>HTML and TypeScript</b></p>
                                <img alt='autolatex' src={autoLatex} ></img>
                                <p>05/2021 to 2/2022</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill4State(true):setSkill4State(false)
                    }} onMouseEnter={() => {
                        setSkill4State(true)
                    }} style={{ width: '18rem', borderWidth:(skill4State?'2px':'2px'), borderColor:(skill4State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>BlossomVR</Card.Title>
                            <Card.Text id='skill1' >{skill4State?
                            <div>
                                <p>• Fully functional subroutine (Pizza creation simulator) for the <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/presentation/d/12L6yF-B1-vs1QnyQQZ5Y-ALstMsvzvtS3TG532aWsto/edit?usp=sharing'>BlossomVR project</a></p>
                                <p>• Part of the <b>Extended Reality @ Berkeley club</b></p>
                                <p>• Working alongside, and learning from senior members</p>
                                <p>• meant for stimulating relaxation senses in VR</p>
                                <p>• Created using <b>Unity, C#</b></p>
                                <img alt='blossomVR' src={blossomVR} ></img>
                                <p>10/2022 to Present</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div class='sideAlign'>
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill5State(true):setSkill5State(false)
                    }} onMouseEnter={() => {
                        setSkill5State(true)
                    }} style={{ width: '18rem', borderWidth:(skill5State?'2px':'2px'), borderColor:(skill5State?'rgb(0, 255, 34)':'rgb(0, 0, 0)') }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>Faiza</Card.Title>
                            <Card.Text id='skill1' >{skill5State?
                            <div>
                                <p>• Medical forum that turns <b>posts and comments into real NFTs</b> that users can trade for on the <b>blockchain</b></p>
                                <p>• <a target="_blank" rel="noopener noreferrer" href='https://devpost.com/software/faiza'>Created ground up from scratch</a> in 24 hours @ CalHacks 9.0 2022</p>
                                <p>• 2nd Place Sonr Sponsor Award</p>
                                <p>• Created using <b>Sonr (blockchain), ReactJs, Bootstrap, MongoDB, Heroku, SQL Carbon</b></p>
                                <img alt='faiza' src={faiza} ></img>
                                <p>09/2022 to Present</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill6State(true):setSkill6State(false)
                    }} onMouseEnter={() => {
                        setSkill6State(true)
                    }} style={{ width: '18rem', borderWidth:(skill6State?'2px':'2px'), borderColor:(skill6State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>FRC Robotics</Card.Title>
                            <Card.Text id='skill1' >{skill6State?
                            <div>
                                <p><b>• President and Software Lead</b></p>
                                <p>• Responsible for programming all subsystems of our robot for the <a target="_blank" rel="noopener noreferrer" href='https://thebluealliance.com/team/649/2022'>2021 and 2022 seasons</a></p>
                                <p>• Trained rookie software members</p>
                                <p>• Led electronics and hardware brainstorming sessions</p>
                                <p><b>• Chairman's award (2022), Inspire Award (2022)</b></p>
                                <p><b>• World Championships (2022) - Quarterfinalists @ Turing Division</b></p>
                                <img alt='robotics' src={robotics} ></img>
                                <p>09/2020 to 5/2022</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill7State(true):setSkill7State(false)
                    }} onMouseEnter={() => {
                        setSkill7State(true)
                    }} style={{ width: '18rem', borderWidth:(skill7State?'2px':'2px'), borderColor:(skill7State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>Synchro</Card.Title>
                            <Card.Text id='skill1' >{skill7State?
                            <div>
                                <p>• Solving time and study management problems with the sudden strike of Covid</p>
                                <p>• Easy-to-use <a target="_blank" rel="noopener noreferrer" href='https://chrome.google.com/webstore/detail/synchro-productivity-mana/gcfbppmhmopmakhclakgnlpobjedkjhe?hl=en'>task organizer Chrome add-on for students</a></p>
                                <p>• Actively used by over <b>200 users, and is currently featured</b></p>
                                <p>• Integrations with Canvas LMS to fetch assignments using the <b>Canvas API</b></p>
                                <img alt='synchro' src={synchro} ></img>
                                <p>06/2021 to Present</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill8State(true):setSkill8State(false)
                    }} onMouseEnter={() => {
                        setSkill8State(true)
                    }} style={{ width: '18rem', borderWidth:(skill8State?'2px':'2px'), borderColor:(skill8State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>AoPS Teacher</Card.Title>
                            <Card.Text id='skill1' >{skill8State?
                            <div>
                                <p>• <a target="_blank" rel="noopener noreferrer" href='https://santaclara.aopsacademy.org/?utm_source=google&utm_medium=cpc&utm_campaign=&cmid=11876662724&agid=114920102589&search_keyword=art%20of%20problem%20solving%20santa%20clara&search_type=e&netid=g&adid=487262015491&adpos=&dvt=&ptid=&gclid=Cj0KCQiAzeSdBhC4ARIsACj36uHG2-nQcSlwV7kltFOv6LAt7nN17Jb8ADrhEysZDJRvTjMiqxuH2XwaAjiiEALw_wcB'>Taught mathematics over the summer in-person</a> <b>(Santa Clara)</b> and online</p>
                                <p>• Topics ranged from <b>pre-algebra to Linear Algebra and Calculus</b></p>
                                <p>2020-2022</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h2 class='sideAlign'>m_aboutMe[] = </h2>
            <div class='sideAlign'>
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill9State(true):setSkill9State(false)
                    }} onMouseEnter={() => {
                        setSkill9State(true)
                    }} style={{ width: '18rem', borderWidth:(skill9State?'2px':'2px'), borderColor:(skill9State?'rgb(0, 255, 34)':'rgb(0, 0, 0)') }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>Technical Skills</Card.Title>
                            <Card.Text id='skill1' >{skill9State?
                            <div>
                                <p>• JavaScript/HTML/CSS</p>
                                <p>• Bootstrap</p>
                                <p>• Java</p>
                                <p>• Google Cloud</p>
                                <p>• C++</p>
                                <p>• C#</p>
                                <p>• React.js</p>
                                <p>• Flutter/Dart</p>
                                <p>• Python</p>
                                <p>• SQL</p>
                                <p>• Node.js</p>
                                <p>• Unity</p>
                                <p>• MongoDB</p>
                                <p>• AWS DynamoDB + API Gateway</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill10State(true):setSkill10State(false)
                    }} onMouseEnter={() => {
                        setSkill10State(true)
                    }} style={{ width: '18rem', borderWidth:(skill10State?'2px':'2px'), borderColor:(skill10State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>Education</Card.Title>
                            <Card.Text id='skill1' >{skill10State?
                            <div>
                                <p>UC Berkeley Class of 2026 🐻🪓🌲</p>
                                <hr></hr>
                                <p><b>Notable Courses:</b></p>
                                <p>• CS 61A - Intro CS (py)</p>
                                <p>• CS 61B - Data Structures (java)</p>
                                <p>• CS70 - Discrete Math/Probability</p>
                                <hr></hr>
                                <p>• Very high Honors @ Saratoga High School - 2022</p>
                                <p>• CC Dual Enrollment @ West Valley College, Foothill College</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div class="sideAlignChild">
                    <Card onMouseLeave={() => {
                        expandState?setSkill11State(true):setSkill11State(false)
                    }} onMouseEnter={() => {
                        setSkill11State(true)
                    }} style={{ width: '18rem', borderWidth:(skill11State?'2px':'2px'), borderColor:(skill11State?'rgb(0, 255, 34)':'rgb(0, 0, 0)')}}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'monospace', fontSize: '30px' }}>Awards/ Positions</Card.Title>
                            <Card.Text id='skill1' >{skill11State?
                            <div>
                                <p>• USACO Gold <b>(Java/C++)</b> - 2020</p>
                                <p>• CalHacks 9.0 - Sonr - 2022</p>
                                <p>• Engineering VP @ Silicon Valley Youth - 2020-2022</p>
                                <p>• <b>Research Asst.</b> @ University of Malmö - 2021-2022</p>
                                <p>• Robby Byers Synopsis Science Championship Award 2022</p>
                                <p>• Congressional award: all-round achievement and service - 2021</p>
                                <p>• AP Scholar with Distinction - 2022</p>
                            </div>:<p>--- + ---</p>}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <h2 class='sideAlign'>contactMe() </h2>
            <div class='sideAlign'>
                <div class="sideAlignChildShreyas">
                    <img 
                        src={shreyas}
                        alt='gm'
                    />
                </div>
            </div>
            <div class='sideAlign'>
                <div class="sideAlignChildContact">
                    <a href="https://www.linkedin.com/in/shreyas-rana-61b0a5156/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={linkedin}
                            alt='ld'
                        />
                    </a>
                </div>
                
                <div class="sideAlignChildContact">
                    <a href="https://devpost.com/ranashreyas" target="_blank" rel="noopener noreferrer">
                        <img
                            src={devpost}
                            alt='dp'
                        />
                    </a>
                </div>

                <div class="sideAlignChildContact">
                    <a href="https://github.com/ranashreyas" target="_blank" rel="noopener noreferrer">
                        <img
                            src={github}
                            alt='gh'
                        />
                    </a>
                </div>

                <div class="sideAlignChildContact">
                    <a href="https://www.instagram.com/_shreyasrana_/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={instagram}
                            alt='ig'
                        />
                    </a>
                </div>

                <div class="sideAlignChildContact">
                    <a href="https://drive.google.com/drive/folders/146Rj9hzqp2AJrGH3CfY3AQwdEfmsiGUt?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <img
                            src={portfolio}
                            alt='ig'
                        />
                    </a>
                </div>

                <div class="sideAlignChildContact">
                    <a href="mailto:ranashreyas@berkeley.edu" target="_blank" rel="noopener noreferrer">
                        <img
                            src={gmail}
                            alt='gm'
                        />
                    </a>
                </div>
            </div>
        </body>
    );
}
