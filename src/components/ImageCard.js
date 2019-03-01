import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { span: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 10);
        this.setState({ span })
    }

    render() {
        const {description, urls} = this.props.image;
        // <div style={{gridRowEnd: `span ${this.state.span}` }}>
        return(
            <div style={{gridRowEnd: `span ${this.state.span}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;