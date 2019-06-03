import React from 'react';

const carouselItem = ({ item, active }) => {

    let carouselItemClass = ['carousel-item'];
    if (active)
    {
        carouselItemClass.push('active');
    }
    return <div className={carouselItemClass.join(' ')}>
            <picture>
                <source media="(min-width: 800px)" srcSet={item.image} />
                <source media="(max-width: 576px)" srcSet={item.imageSmall} />
                <img src={item.image} alt={item.title} className="img-fluid img--object-fit" />
            </picture>
        <div className="container">
            <div className="carousel-caption text-left">
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            {item.action ? <p><a className="btn btn-lg btn-primary" href={item.action.link} role="button">{item.action.text}</a></p> : null }
            </div>
        </div>
    </div>
}

export default carouselItem;