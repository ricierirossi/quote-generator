import React from 'react';
import '../styles/random-author-genre.css'
import { ReactComponent as Arrow } from '../images/arrow.svg';

function RandomAuthorGenre({ author, genre, onClick }) {
    return (
        <div className='container-info' onClick={onClick} >
            <div className='info'>
                <div className='author'> {author} </div>
                <Arrow className='arrow' />
                <div className='genre'> {genre} </div>
            </div>
        </div>
    )

}

export default RandomAuthorGenre

