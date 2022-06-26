import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/theme';
import BrickList from 'react-native-masonry-brick-list';
import axios from 'axios';
import base64 from 'react-native-base64';
import AnimatedLoader from 'react-native-animated-loader';
import Grid from 'react-native-grid-component';
import FitnessCategoryCard from '../components/FitnessCategoryCard';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const YogaScreen = () => {
  return (
    <View style={styles.container}>
      <Text> YogaScreens</Text>
      <WebView
        style={{marginTop: 50, width: 320, height: 50, maxHeight: 200}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w'}}
        allowsFullscreenVideo={false}
      />
    </View>
  );
};

export default YogaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1,
  },
  list: {
    flex: 1,
    marginTop: 40,
  },
  innerStyle: {
    justifyContent: 'space-between',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
