/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const YogaScreenOne = () => {
  return (
    <View style={styles.container}>
    <View style={styles.videoContainer}>
    <WebView
      style={styles.webView}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{uri: 'https://www.youtube.com/embed/qSG7PsdZG04'}}
      allowsFullscreenVideo={false}
    />
    </View>
    <View style={styles.divider}/>
    <View style={styles.descriptionView}>
        <ScrollView>
            <Text style={styles.description}>
            Our yoga for weight loss series continues with this total body yoga workout. 
Whether you are looking to tone the body or just find what feels good, this weight loss yoga practice brings a real approach to this full-body workout providing instruction and alignment for all levels! 
Get inspired! Do what you can! Modify as needed and return to this practice, again and again, to build strength, flexibility, evolve, and grow! Quiet the mind, connect to the breath, and move your body.
            </Text>
        </ScrollView>
    </View>
 </View>
  );
};

export default YogaScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    flex:1,
    backgroundColor:'white',
  },
  webView:{
    flex:1,
    height: 100,
    maxHeight: 200,
  },
  divider:{
    marginTop:10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  descriptionView:{flex:2, backgroundColor:'white'},
  description: {
    marginTop: 5,
    paddingLeft:20,
    paddingRight:20,
    fontSize: 18,
  },
});