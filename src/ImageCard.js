import React from 'react'

/**
 * Class for containing a gallery image
 */
class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: true
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(isVisible) {
        if (isVisible) {
            this.setState({visible: true});
        } else {
            this.setState({visible: false});
        }
    }
    render() {
        if (this.state.visible) {
            return (
                <div>
                    <img className="galleryImage" src={this.props.URL}/>
                </div>
            );
        } else {
            return (
                <div/>
            );
        }

    }
}

export default ImageCard;