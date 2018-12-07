// imports the react library
import React from 'react';
// imports the stylesheet applied to this component
import './Business.css';

// defines a new component class that inherits (extends) all of the react library's component properties
class Business extends React.Component {
  // defines a render() method that will be used called when the component is rendered
  render () {
    // the return statement that will return what needs to be rendered
    return (
      // a nested JSX expression that creates a single template for a search result
      // note: notice how the the HTML attribute 'class' has been altered to 'className' this is unique to JSX and allows the compiler to differentiate between JSX and HTML
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt='' />
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

// default exports the component class Business for use and rendering in App.js by the App component class
export default Business;
