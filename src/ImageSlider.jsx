import React from 'react'

class ImageSlider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            images: props.imgList.map(img => require('./assets/img/'+img)),
            imgIndex: 0
        }

        setInterval(() => {
            const {imgIndex, images} = this.state
            if(imgIndex < images.length-1){
                this.setState({
                    imgIndex: imgIndex+1
                })
            }else{
                this.setState({
                    imgIndex: 0
                })
            }
        }, props.time)
    }

    render(){
        return (
            <img src={this.state.images[this.state.imgIndex]}/>
        )
    }

}

export default ImageSlider