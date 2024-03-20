import React from 'react'

const Textimage = ({ image, title, content, imageDirection, componentBackgroundColor }) => {

    const containerstyle =
    {
        display: 'flex',
        flexDirection: imageDirection === 'left' ? 'row' : 'row-reverse',
        backgroundColor: componentBackgroundColor,
    };

    const imageStyle = {
        flex: '1',
        maxWidth: '50%',
    };

    const textContainerStyle = {
        flex: '1',
        padding: '20px',
    };

    return (
                <div style={containerstyle}>
                    <div style={imageStyle}>
                    <img src={image} alt="Text Image" style={{ width: '100%' }} />
                    </div>
                    <div style={textContainerStyle}>
                        <strong><h2 style={{color :'red'}}>{title}</h2></strong><hr></hr>
                        <p style={{fontSize: '18px', fontWeight : 'bold'}}>{content}</p>
                    </div>
                </div>
  )
}

export default Textimage;