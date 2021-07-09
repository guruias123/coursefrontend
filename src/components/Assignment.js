import { React, Component } from 'react'
import "./Assignment.css"
class Assignment extends Component {
    render() {
        return (
            <>

                <div className="side">
                    <p style={{color: "#d1d9d9"}}>Event settings</p>
                    <hr />
                    <ul>
                        <li>General</li>
                        <li>Privacy</li>
                        <li>Features</li>
                        <li className="get">Customization
                            <ul className="display">
                                <li>
                                    <span><h4>⭐ Branding</h4></span>
                                    <select>
                                        <option>Upload your event logo and partner logos for your event</option>
                                    </select><hr />
                                </li>
                                <li>
                                    <span><h4>⬆️ Present mode</h4></span>
                                    <select>
                                        <option>Choose your theme and customize it to your needs</option>
                                    </select><hr />

                                </li>
                                <li>
                                    <span><h4>🟣 Participant mode</h4></span>
                                    <select>
                                        <option>customize view for your attendees</option>
                                    </select><br />
                                </li>
                            </ul>
                        </li>
                        <li>Integration</li>
                        <li>Webmobi Labs</li>
                        <li>My Plans</li>

                    </ul>

                </div>
                <div className="search">
                    <input  type="search" placeholder="🔍search" />
                </div>
                {/* <div className="main">
                    <span><h4>Branding</h4></span>
                    <select>
                        <option>Upload your event logo and partner logos for your event</option>
                    </select><br />
                    <span><h4>Present mode</h4></span>
                    <select>
                        <option>Choose your theme and customize it to your needs</option>
                    </select><br />
                    <span><h4>Participant mode</h4></span>
                    <select>
                        <option>customize view for your attendees</option>
                    </select><br />

                </div> */}

            </>
        )
    }
}

export default Assignment;