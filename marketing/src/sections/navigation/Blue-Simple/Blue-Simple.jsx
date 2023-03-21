import "./Blue-Simple.css"
import React from "react"



const Feature = () => (
    <div className="features">
        <div className="features-option">

            <ul className="features-option-item">
                <li >
                    <div><img src="img/sections/navigations/BlueSimple/device.svg" alt="" /></div>
                    <div>
                        <div>Sync across device</div>
                        <p>Enables to keep synchronized</p>
                    </div>
                </li>
                <li>
                    <div><img src="img/sections/navigations/BlueSimple/folder.svg" alt="" /></div>
                    <div>
                        <div>Create fancy documents <span>&rarr;</span> </div>
                        <p>Makes your documents styled </p>
                    </div>
                </li>
                <li>
                    <div><img src="img/sections/navigations/BlueSimple/pen.svg" alt="" /></div>
                    <div>
                        <div>Edit like a pro</div>
                        <p>Edit content is yours</p>
                    </div>
                </li>
                <li>
                    <div><img src="img/sections/navigations/BlueSimple/file.svg" alt="" /></div>
                    <div>
                        <div>Organize documents</div>
                        <p>Keep it all in one place</p>
                    </div>
                </li>
                <li>
                    <div><img src="img/sections/navigations/BlueSimple/manage.svg" alt="" /></div>
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
                <img src="img/sections/navigations/BlueSimple/file.svg" alt="" />
                <a href="">
                    <div onClick={(e) => {
                        e.preventDefault();
                        setOpen(!isOpen)
                    }}>
                        <div className={isOpen ? "feature-open" : "feature-close"}>Features</div>
                    </div>
                    {isOpen && (<Feature />)}

                </a>
                <a href="" >Downloads</a>
                <a href="" >Resources</a>
                <a href="" >Company</a>
            </nav>

        </div >
    )
}

export default BlueSimple;