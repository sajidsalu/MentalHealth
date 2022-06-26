/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

const YogaScreenTwo = () => {
  return (
     <View style={styles.container}>
        <View style={styles.videoContainer}>
        <WebView
          style={styles.webView}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://www.youtube.com/embed/QZYw0SBqjqI'}}
          allowsFullscreenVideo={false}
        />
        </View>
        <View style={styles.divider}/>
        <View style={styles.descriptionView}>
            <ScrollView>
                <Text style={styles.description}>
                Intensive burn, suitable to be performed at home with just the weight of your body.
The workout activates all the major muscles areas in your body: Lower body, Upper body and Abs/Obliques. It's an excellent training routine to perform if you want to get a leaner body, burn the excessive fat and achieve great weightloss results!
Caution: This weight loss workout is heavy on your muscles and cardiovascular system. Make sure you consult your physician before performing any level physical effort. Hydrate yourself during the workout and make sure you rest properly after the workout, but also during the workout - if your body asks for it.
Good Luck and let's GO!
                </Text>
            </ScrollView>
        </View>
     </View>
  );
};

export default YogaScreenTwo;

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
    paddingLeft:20,
    paddingRight:20,
    marginTop: 5,
    fontSize: 18,
  },
});
