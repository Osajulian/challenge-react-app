import React from 'react';
import CarouselItem from './CarouselItem';
//import { CSSTransitionGroup } from 'react-transition-group';

class Carousel extends React.Component
{
    state = {
        currentIndex: 0
    }

    setItemHandler = (index) => {
        let newIndex = index;

        if (newIndex < 0)
            newIndex = 0;

        if (this.props.items.length <= index)
            newIndex = 0;


        this.setState({ currentIndex: newIndex });
    }

    render() {
        const { items } = this.props;

        const carouselItems = items.map((item, index) => 
            <CarouselItem key={index} item={item} active={index === this.state.currentIndex}></CarouselItem>
        );

        return (
            <div className="carousel slide">
                <ol className="carousel-indicators">
                    {items.map((_, index) => <li key={index} onClick={() => this.setItemHandler(index)} className={index === this.state.currentIndex ? 'active' : null}></li>)}
                </ol>
                <div className="carousel-inner">
                {/* <CSSTransitionGroup component="div" className="carousel-inner"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={2000}> */}
                    {carouselItems}
                {/* </CSSTransitionGroup> */}
                </div>
                <a role="button" href="#prev" className="carousel-control-prev" onClick={() => this.setItemHandler(this.state.currentIndex-1)}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a role="button" href="#next" className="carousel-control-next" onClick={() => this.setItemHandler(this.state.currentIndex+1)}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
};

export default Carousel;