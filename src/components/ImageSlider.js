import React, { useEffect, useState } from 'react'

function ImageSlider(props){
    const [ images, setImages ] = useState(props.imgList.map(img => require('../assets/img/'+img)))
    const [ imgIndex, setImgIndex ] = useState(0)
    const [ timeout, _setTimeout ] = useState(null)

    useEffect(() => {
        createTimeout()
    }, [imgIndex])

    useEffect(() =>  {
        setImages(props.imgList.map(img => require('../assets/img/'+img)))
        clearTimeout(timeout)
        createTimeout()
    }, [props.imgList])

    const createTimeout = () => {
        _setTimeout(setTimeout(() => {
            setImages(props.imgList.map(img => require('../assets/img/'+img)))

            if(imgIndex < images.length-1)
                setImgIndex(imgIndex+1)
            else
                setImgIndex(0)

        }, 2000))
    }

    return (
        <div className="image-slider">
            <img className="image" src={images[imgIndex]} alt="slider"/>
            <div className="position-indicator">
                {images.map((img, i) => 
                    <div className={i === imgIndex ? "indicator current" : "indicator" }></div>)}
            </div>
        </div>
    )

}

export default ImageSlider