import React from "react";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage"
class UpFile extends React.Component{
    constructor(){
        super()
        this.state = {
            uploadValue: 0,
            picture: null
        }
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload (event) {
        const file = event.target.files[0];
        console.log(file.name)
        
        const storage = getStorage()

        const storageRef = ref( storage, `/fotos/${file.name}`)
        const taskUp = uploadBytesResumable( storageRef, file )  

        taskUp.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
            switch (snapshot.state){
                case 'paused':
                    console.log('upload is paused')
                    break;   
                case 'running':
                    console.log('upload is running')
                    break;
                default:
                    break;
            }
        }, error => {
            console.log(error.message)
        }, () => {
            console.log()
            this.setState({
                uploadValue: 100,
                picture: taskUp.snapshot.dowloadURL
            });
        })

    }

    render(){
        return(<>
                <div className="processBar">
                    <div className="inbarr" style={ { width: this.state.uploadValue+'%' } }></div>
                </div>
                <br/>
                <div className="DivconButtoFile mindPos">
                    <label className="confiButtonBlack" style={ { position: "absolute"} }>
                        <span>Seleccionar archivo</span>
                        <input type="file" onChange={this.handleUpload} />
                    </label>
                </div>

                <br/>
                <div className="confIImg">
                    <img width={320} src={ this.state.picture } alt=""/>
                </div>

        </>)
    }
}

export default UpFile