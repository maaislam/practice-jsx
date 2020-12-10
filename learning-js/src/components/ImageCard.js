import React, { Component } from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {span:0}
    }
    
    componentDidMount() {

        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {

        const height = this.imageRef.current.clientHeight;

        const span = Math.ceil(height /10);

        this.setState({ span})
    }

    render() {


        const {alt_description, urls} = this.props.image;
       
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
               <img ref={this.imageRef} src={urls.thumb} alt={alt_description}  /> 
            </div>
        );
    }
}

export default ImageCard;