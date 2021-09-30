import { Component } from 'react';

class ImageViewer extends Component {
  state = { selectedImage: this.props.images[0], selectedImageIndex: 0 };

  setSelectedImage = i => {
    this.setState({
      selectedImage: this.props.images[i],
      selectedImageIndex: i,
    });
  };

  renderImageListItem() {
    return this.props.images.map((el, i) => {
      const className = this.state.selectedImageIndex === i ? 'selected' : '';
      return (
        <li
          key={i}
          onMouseEnter={() => this.setSelectedImage(i)}
          onClick={() => this.setSelectedImage(i)}
          className={`image__item ${className}`}
        >
          <img src={el} alt='product item' />
        </li>
      );
    });
  }

  render() {
    return (
      <div className='image-box'>
        <ul className='image__list'>{this.renderImageListItem()}</ul>
        <div className='image__view'>
          <img src={this.state.selectedImage} alt='product item' />
        </div>
      </div>
    );
  }
}

export default ImageViewer;
