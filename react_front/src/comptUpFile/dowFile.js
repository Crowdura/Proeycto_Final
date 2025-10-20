import React from "react";

class dowFile extends React.Component{
    constructor(props){
        super()
        this.state = {
            uploadValue: 0,
            picture
        }
    }
    render(){
        return(<>
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
            </div>
        </>)
    }
}

export default dowFile