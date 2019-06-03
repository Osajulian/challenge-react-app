import React, { Component } from 'react';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/search/SearchBar';
import Footer from './components/layout/Footer';
import Feature from './components/card/Feature';

export class App extends Component {
  state = {
    carousel: [
      {
        image: 'https://via.placeholder.com/1920x800/777?text=Image1',
        imageSmall: 'https://via.placeholder.com/600x600/777?text=ImageSmall',
        title: 'Cras justo idio',
        text: 'Lorem ipsum dolor sit amet',
        action: {
          link: '#',
          text: 'Enter here'
        }
      },
      {
        image: 'https://via.placeholder.com/1920x800/777?text=Image2',
        imageSmall: 'https://via.placeholder.com/600x600/777?text=ImageSmall',
        title: 'Cras justo idio',
        text: 'Lorem ipsum dolor sit amet',
        action: {
          link: '#',
          text: 'Register here'
        }
      },
      {
        image: 'https://via.placeholder.com/1920x800/777?text=Image3',
        imageSmall: 'https://via.placeholder.com/600x600/777?text=ImageSmall',
        title: 'Cras justo idio',
        text: 'Lorem ipsum dolor sit amet',
        action: {
          link: '#',
          text: 'Submit here'
        }
      }
    ],
    features: [
      {
        title: 'First featurette heading. <span className="text-muted">It’ll blow your mind.</span>',
        text: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
        image: 'https://via.placeholder.com/500x500/777'
      },
      {
        title: 'Second featurette heading. <span className="text-muted">It’ll blow your mind.</span>',
        text: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.',
        image: 'https://via.placeholder.com/500x500/777'
      }
    ],
    collapse: true
  }

  collapseNavbarHandler = () => {
    this.setState({
      ...this.state,
      collapse: !this.state.collapse
    });
  }

  render() {

    let navbarCollapseClasses = ["collapse", "navbar-collapse"];
    if (!this.state.collapse)
      navbarCollapseClasses.push('show');

    const features = this.state.features.map((item, index) => {
      return (
        <>
          {index > 0 ? <hr key={index +'hr'} className="feature-divider" /> : null}
          <Feature key={index + 'feature'} title={item.title} text={item.text} image={item.image} swap={index % 2 === 0}></Feature>
        </>
      );
    });

    return (
      <>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="./">Site Name</a>
            <button className="navbar-toggler" type="button" onClick={this.collapseNavbarHandler}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={navbarCollapseClasses.join(' ')}>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="./">Contact us</a>
                </li>
              </ul>
              <SearchBar key='searchbar' />
            </div>
          </nav>
        </header>
        <main role="main">
          <Carousel key='carousel' items={this.state.carousel}></Carousel>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">
                <img src="https://via.placeholder.com/140x140/777" className="rounded-circle" alt="Heading" />
                <h2>Heading</h2>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img src="https://via.placeholder.com/140x140/777" className="rounded-circle" alt="Heading" />
                <h2>Heading</h2>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-lg-4">
                <img src="https://via.placeholder.com/140x140/777" className="rounded-circle" alt="Heading" />
                <h2>Heading</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-secondary" href="/" role="button">View details &raquo;</a></p>
              </div>
            </div>
            <hr className="feature-divider" />
            {features}


          </div>
        </main>
        <Footer key='footer'></Footer>
      </>
    );
  }
}

export default App;
