import React from 'react';

const feature = ({title, text, image, swap}) => {

    let columnNamesLeft = ['col-md-7'];
    columnNamesLeft.push('order-md-' + (swap ? 2 : 1));

    let columnNamesRight = ['col-md-5'];
    columnNamesRight.push('order-md-' + (!swap ? 2 : 1));

    return <div className="row feature">
        <div className={columnNamesLeft.join(' ')}>
            <h2 className="feature-heading" dangerouslySetInnerHTML={{__html:title}}></h2>
            <p className="lead">{text}</p>
        </div>
        <div className={columnNamesRight.join(' ')}>
            <img src={image} className="img-fluid mx-auto" alt={title} />
        </div>
    </div>;
}

export default feature;