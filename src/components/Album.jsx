import React from 'react';
import './Album.css';

function Album() {
    return (
        <div>
            <figure className="album">
                <div className="image">
                    <div className="img">
                        <img 
                        src="https://img.discogs.com/gShU8r63R83YRZB9p7082qlByRg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13419543-1553855000-5926.jpeg.jpg" 
                        alt="Rozes"
                        className="cover"/>
                    </div>
                    
                    <div className="info">
                        <h3 className="name">Rozes</h3>
                        <h4 className="title">Under the grave</h4>
                        <h4 className="year">(2016)</h4>
                    </div>
                </div>
                
                    <div className="rate">
                        <p className="rate-text">Rate this album</p>
                        <span>  &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                    </div>                
            </figure>
        </div>
    )
}

export default Album;