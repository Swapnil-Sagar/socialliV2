import React from 'react'

function FeatureBox(props) {
    return (
        <div className='a-box'>
            
            <div className='s-b-text'>
              <h2>
                  {props.title}
              </h2>
              <p>{props.content}</p>
            </div>
            <div className='a-b-img'>
                <img src={props.image} alt=""/>
            </div>
        </div>
    )
}

export default FeatureBox
