/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import { colors, fonts } from '../../constants/theme';

const FitnessDetails = () => {

    const  route = useRoute();
    const {item} = route.params;
    console.log('item is',item);
  return (
    <View style={styles.container}>
    <View style={styles.videoContainer}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{item.title}</Text>
        </View>
        <WebView
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: item.youTubeVideoURL}}
        allowsFullscreenVideo={false}
        />
    </View>
    <View style={styles.divider}/>
    <View style={styles.descriptionView}>
        <ScrollView>
            <Text style={styles.description}>
            {item.description}
            </Text>
        </ScrollView>
    </View>
 </View>
  );
};

export default FitnessDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    flex:2,
    backgroundColor:'white',
  },
  webView:{
    flex:2,
    height: 250,
  },
  divider:{
    marginTop:10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  descriptionView:{flex:2, backgroundColor:'white'},
  description: {
    marginTop: 5,
    textAlign:'left',
    paddingLeft:20,
    paddingRight:20,
    fontSize: 18,
  },
  header: {
    flex:0.25,
    width: '100%',
    height: 25,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: fonts.h1.fontSize,
    fontWeight: 'bold',
    position: 'relative',
    top: 20,
  },
});