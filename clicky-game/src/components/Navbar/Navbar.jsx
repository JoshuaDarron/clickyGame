
/*
    NAVBAR.JSX CONTAINS THE NAVBAR COMPONENT
*/

// DEPENDENCIES
import React, {Component} from "react";
// NAVBAR STYLES
import "./Navbar.css";

// NAVBAR COMPONENT
class Navbar extends Component {
// RENDER 
render () {
    console.log(this.props.feedback)
        // RETURN THE HTML FOR THE NAVBAR
        return (
            // NAVBAR
            <div className="col-xs-12 col-xs-12 col-md-12 text-center header">
                {/* COMMUMN ONE */}
                <div className="clicker col-xs-4">
                    CLICKER! 
                </div>
                {/* COMMUMN TWO */}
                <div className="answer col-xs-4">
                    
                </div>
                {/* COMMUMN THREE */}
                <div className="score col-xs-4">
                Score: {this.props.score} | High-Score: {this.props.highScore}
                </div>
            </div>
        ); // END RETURN        
}; // END RENDER














}; // END NAVBAR

// EXPORT NAVBAR
export default Navbar;