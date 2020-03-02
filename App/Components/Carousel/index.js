import React, { useState, useEffect } from 'react';
import {StyleSheet, View, ScrollView, Dimensions, Image} from 'react-native';

// Styles
import styles from './CarouselStyles';

const DEVICE_WIDTH = Dimensions.get('window').width

const Carousel = ({ children }) => {
  const [state, setState] = useState({ _selectedIndex: 0, _tracker: 0, _scrollRef: React.createRef() });

  const rePosition = () => {
    setTimeout(() => {
      setState({
        ...state,
        _tracker: state._tracker + 1,
        _selectedIndex: (state._selectedIndex >= children.length - 1) ? 0 : state._selectedIndex + 1
      });
    }, 3000)
  };

  useEffect(() => {
    rePosition();
  }, []);

  useEffect(() => {
    // console.log(state._tracker)
    state._scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: DEVICE_WIDTH * state._selectedIndex
    });
    rePosition();
  }, [state._tracker])


  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    setState({
      ...state,
      _selectedIndex: selectedIndex
    })
  }

  return (
    <View style= {styles.container} key={state._selectedIndex}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal centerContent
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelectedIndex}
        pagingEnabled
        ref={state._scrollRef}
        >
        {children}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {children.map((component, index) => <View key={index} style={[styles.blueCircle, (state._selectedIndex === index) ? styles.whiteCircle : {}]}/>)}
      </View>
    </View>
  )
}

export default Carousel;