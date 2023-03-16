import "./Blue-Simple.css"
import React from "react"
import image from "../../../img/sections/hero/file-react.svg"


const Feature = () => (
    <div className="features">
        <div className="features-option">

            <ul className="features-option-item">
                <li >
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>Sync across device</div>
                        <p>Enables to keep synchronized</p>
                    </div>
                </li>
                <li>
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>Create fancy documents <span>&rarr;</span> </div>
                        <p>Makes your documents styled </p>
                    </div>
                </li>
                <li>
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>Edit like a pro</div>
                        <p>Edit content is yours</p>
                    </div>
                </li>
                <li>
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>Organize documents</div>
                        <p>Keep it all in one place</p>
                    </div>
                </li>
                <li>
                    <div><img src={image} alt="" /></div>
                    <div>
                        <div>Manage tasks and projects</div>
                        <p>Make simple checklists</p>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div > Browse by Features</div>
                </li>
                <li>
                    <div> Formated text & Markdown</div>
                </li>
                <li>
                    <div> Documents themes</div>
                </li>
                <li>
                    <div> Convert & Compile</div>
                </li>
                <li>
                    <div> Apple pencil</div>
                </li>
                <li>
                    <div> Flowcharts</div>
                </li>
                <li>
                    <div> Change Tracking</div>
                </li>
                <li>
                    <div> Math Typsetting <span className="typsetting-status">New</span></div>
                </li>
                <li>
                    <div> HQ Typesetting</div>
                </li>
            </ul>
        </div>

        <div className="feature-footer">
            <div className="ready-started">
                <div>Ready to get started?</div>
                <div>Take your documents to the next level with Nulis</div>
            </div>
            <div className="demo-video">Watch demo</div>
        </div>
    </div>
)

const BlueSimple = () => {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <div className="blue-simple">
            <nav className="blue-simple-nav">
                <img src={image} alt="" />
                <a href="" className="features">
                    <div onClick={(e) => {
                        e.preventDefault();
                        setOpen(!isOpen)
                    }}>
                        <span>Features</span>
                        {isOpen && (<Feature />)}
                    </div>
                </a>
                <a href="" >Downloads</a>
                <a href="" >Resources</a>
                <a href="" >Company</a>
            </nav>

        </div >
    )
}

export default BlueSimple;