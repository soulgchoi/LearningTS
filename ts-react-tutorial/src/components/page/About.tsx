import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About component</h1>
                <div>
                    <h1>
                        <small>
                            sample
                        </small>
                    </h1>
                    <div>
                        <h3>
                            <small>
                                component
                            </small>
                        </h3>
                    </div>
                </div>

                <div>
                    <h3>
                        Highlights
                    </h3>
                    <small>
                        ummmm
                    </small>
                </div>

                <div>
                    <ul>
                        <li>
                            <h4><b>Components:</b></h4>
                            <ul>
                                <li>
                                    <h4>
                                        app.tsx: <small>main component</small>
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        header.tsx: <small>simulate a header component</small>
                                    </h4>
                                </li>
                                <li>
                                    <h4>
                                        aboutPage.tsx: <small>page like component</small>
                                    </h4>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default About;