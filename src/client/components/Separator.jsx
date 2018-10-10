import React from 'react'

const Separator = props => (
    <div style={props.style}>
        {
            (props.type && props.type === 'big') 
            ?
            <div className='separatorBig'>            
                <span>×××</span>            
            </div>
            : 
            <div className='separator'>            
                <span>×××</span>            
            </div>
        }
    </div>
    )

export default Separator