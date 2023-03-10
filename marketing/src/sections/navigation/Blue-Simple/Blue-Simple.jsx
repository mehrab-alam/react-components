import "./Blue-Simple.css"

const BlueSimple = () => {
    return (
        <div className="blue-simple">
            <nav>
                <h2> Features</h2>

                <h2>Downloads</h2>
                <h2>Resources</h2>
                <h2>Company</h2>
            </nav>

            <div className="navBar-content">
                <div>
                    <div>
                        <div className="navBar-options">
                            <div>
                                <h3>Sync across device</h3>
                                <p>Enables to keep synchronized</p>
                            </div>
                        </div>
                        <div className="navBar-options">
                            <h3>Create fancy documents</h3>
                            <p>Makes your documents styled</p>
                        </div>
                        <div className="navBar-options">
                            <h3>Edit like a pro</h3>
                            <p>Edit content is yours</p>
                        </div>
                        <div className="navBar-options">
                            <h3>Organize documents</h3>
                            <p>Keep it all in one place</p>
                        </div>
                        <div className="navBar-options">
                            <h3>Manage tasks and projects</h3>
                            <p>Make simple checklists</p>
                        </div>
                    </div>
                    <div>
                        <h3>Browse by Features</h3>
                        <h3>Formated text & Markdown</h3>
                        <h3>Documents themes</h3>
                        <h3>Convert & Compile</h3>
                        <h3>Apple pencil</h3>
                        <h3>Flowcharts</h3>
                        <h3>Change Tracking</h3>
                        <h3>Math Typsetting <span>New</span></h3>
                        <h3>HQ Typesetting</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Ready to get started?</h2>
                        <p>Take your documents to the next level with Nulis</p>
                    </div>
                    <div>Watch demo</div>
                </div>
            </div>
        </div>
    )
}

export default BlueSimple;