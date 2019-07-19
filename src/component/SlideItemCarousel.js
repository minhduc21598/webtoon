import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class SlideItemCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {data, renderItem, onSnapToItem} = this.props;
    return (
      <Carousel
        data={data}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={280}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        inactiveSlideScale={0.85}
        slideStyle={{ marginLeft: 5 }}
        activeSlideAlignment={'start'}
        onSnapToItem ={onSnapToItem}
        enableMomentum={true}
    />
    );
  }
}

export default SlideItemCarousel;