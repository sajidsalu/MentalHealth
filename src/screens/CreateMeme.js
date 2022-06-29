import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {memeData} from '../constants/memeData';
import {useNavigation} from '@react-navigation/native';
import {Alert, Platform, PermissionsAndroid} from 'react-native';

import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Share from 'react-native-share';

const CreateMeme = () => {
  const [loading, setLoading] = useState(false);
  const [memeArray, setMemeArray] = useState(memeData);
  const [meme, setMeme] = useState(null);
  const [randomIndex, setRandomIndex] = useState(0);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const navigation = useNavigation();
  const viewRef = React.useRef();

  useEffect(() => {
    // axios
    //   .get('http://alpha-meme-maker.herokuapp.com/2')
    //   .then(res => {
    //     console.log('meme response', res.data.data);
    //     setMemeArray(res.data.data);
    //     console.log(res.data.data);
    //     setLoading(false);
    //     setMeme(res.data.data[0]);
    //     console.log(meme);
    //   })
    //   .catch(err => {
    //     console.log('meme error', err);
    //     console.log(err);
    //   });
  }, []);

  const generateRandomNumber = () => {
    const rand = Math.floor(Math.random() * memeArray.length);
    setRandomIndex(rand);
    console.log(rand);
  };

  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        '',
        'Your permission is required to save images to your device',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } catch (err) {
      // handle error as you please
      console.log('err', err);
    }
  };

  // download image
  const downloadImage = async () => {
    try {
      // react-native-view-shot caputures component
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });

      if (Platform.OS === 'android') {
        const granted = await getPermissionAndroid();
        if (!granted) {
          return;
        }
      }

      // cameraroll saves image
      const image = CameraRoll.save(uri, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Image saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      console.log('uri', uri);
      const shareResponse = await Share.open({url: uri});
      console.log('shareResponse', shareResponse);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Meme Generator</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={styles.memeContainer}
              collapsable={false}
              ref={viewRef}>
              <View style={styles.memeTextContainer}>
                <Text style={styles.memeText}>{topText}</Text>
                <Text style={styles.memeText}>{bottomText}</Text>
              </View>
              <Image
                source={{uri: memeArray[randomIndex].image}}
                style={{
                  width: Dimensions.get('screen').width - 100,
                  height: Dimensions.get('screen').width - 100,
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.generateAnother1}
              onPress={generateRandomNumber}>
              <View style={styles.generateAnother}>
                <Text style={{color: colors.secondary}}>
                  Generate Another Image
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={'Top Text'}
                value={topText}
                onChangeText={(text) => {
                  setTopText(text);
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder={'Bottom Text'}
                value={bottomText}
                onChangeText={(text) => {
                  setBottomText(text);
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={shareImage}>
                <View style={styles.postButton}>
                  <Text style={styles.buttonText}>Share</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={downloadImage}>
                <View style={styles.downloadButton}>
                  <Text style={styles.buttonText}>Download</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateMeme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  memeContainer: {
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    width: Dimensions.get('screen').width - 100,
    backgroundColor: colors.gray3,
    height: 35,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  textInputContainer: {
    paddingTop: 10,
  },
  postButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: colors.shareGreen,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  downloadButton: {
    flex: 1,
    minWidth: 100,
    marginRight: 10,
    backgroundColor: colors.royalBlue,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  generateAnother: {
    marginTop: 10,
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'flex-end',
    backgroundColor: colors.accent,
  },
  generateAnother1: {
    alignSelf: 'flex-end',
    width: Dimensions.get('screen').width - 20,
  },
  memeTextContainer: {
    width: Dimensions.get('screen').width - 100,
    height: Dimensions.get('screen').width - 100,
    position: 'absolute',
    zIndex: 100,
    marginTop: 10,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  memeText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
