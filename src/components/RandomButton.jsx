import React from 'react'
import { ReactComponent as Refresh} from '../images/refresh.svg'
import '../styles/random-button.css'

function RandomButton({onClick}) {
    return (
        <div className='button' >
            <div className='button-container' >
                <div className='random' onClick={onClick} >random</div>
                <Refresh className='refresh' />
            </div>
        </div>
    )
}

export default RandomButton