import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../constants/theme';
import {saveBlog} from '../redux/actions/blog';
import {getLoggedInUser} from '../redux/reducers/auth';

const AddStory = (props) => {
  const strikethrough = require('../../assets/strikethrough.png'); //icon for strikethrough
  const video = require('../assets/video.png'); //icon for Addvideo
  const image = require('../assets/camera.png'); //icon for Addvideo
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState('');
  const [title, setArticleTitle] = useState('');
  const loggedInUser = useSelector(getLoggedInUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function onPressAddImage(imageUrl) {
    console.log('image', imageUrl);
    // you can easily add images from your gallery
    RichText.current.insertImage(
      'https://img1.thelist.com/img/gallery/ways-to-tell-if-youre-really-happy/intro-1494540038.jpg',
    );
  }

  function insertVideo() {
    // you can easily add videos from your gallery
    RichText.current.insertVideo(
      'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4',
    );
  }

  const onDonePressed = () => {
    if (article === '') {
      ToastAndroid.show('Please enter blog data', ToastAndroid.SHORT);
    } else if (title === '') {
      ToastAndroid.show('Please enter blog title', ToastAndroid.SHORT);
    } else {
      try {
        const blogId = Math.floor(Math.random() * 1000 + 1);
        const journal = {
          blogId,
          title,
          article,
          author: loggedInUser.name,
          likes: 0,
          image:
            'https://img1.thelist.com/img/gallery/ways-to-tell-if-youre-really-happy/intro-1494540038.jpg',
        };

        dispatch(saveBlog(journal));
        ToastAndroid.show('Blog saved', ToastAndroid.SHORT);
        navigation.navigate('MainScreen');
      } catch (e) {
        console.log('blog error', e);
        ToastAndroid.show('Save failed', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{height: 30}}>
        <Text onPress={() => props.navigation.navigate('MainScreen')}>
          Back
        </Text>
      </View>
      <ScrollView contentContainerStyle={{padding: 10}}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setArticleTitle(text);
          }}
          value={title}
        />
        <RichEditor
          disabled={false}
          containerStyle={styles.editor}
          ref={RichText}
          style={styles.rich}
          placeholder="Start Writing Here!"
          //initialContentHTML={data.content}
          onChange={(text) => {
            setArticle(text);
          }}
        />
        <RichToolbar
          style={[styles.richBar]}
          editor={RichText}
          disabled={false}
          iconTint={colors.secondary}
          selectedIconTint={colors.yellow}
          disabledIconTint={colors.secondary}
          onPressAddImage={onPressAddImage}
          iconSize={45}
          actions={[
            ...defaultActions,
            actions.setStrikethrough,
            actions.heading1,
          ]}
          // map icons for self made actions
          iconMap={{
            [actions.heading1]: ({tintColor}) => (
              <Text style={[styles.tib, {color: tintColor}]}>H1</Text>
            ),
            [actions.setStrikethrough]: strikethrough,
          }}
          insertVideo={insertVideo}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginLeft: 130,
            width: 80,
            height: 50,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: colors.yellow,
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: colors.yellow,
          }}
          onPress={() => onDonePressed()}>
          <Text style={[styles.text]}>
            <Entypo name="check" size={20} color="black" /> Done
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddStory;

const styles = StyleSheet.create({
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: 'bold',
    color: 'purple',
  },
  div: {
    fontFamily: 'monospace',
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    display: 'flex',
    marginTop: 0,
    backgroundColor: '#F5FCFF',
  },
  editor: {
    backgroundColor: 'black',
    borderColor: colors.accent,
    borderWidth: 0.8,
  },
  rich: {
    minHeight: 450,
    flex: 1,
  },
  richBar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 15,
    margin: 5,
    color: colors.black,
  },
  tib: {
    textAlign: 'center',
    color: '#515156',
  },
  input: {
    height: 40,
    marginBottom: 12,
    padding: 10,
    backgroundColor: colors.white,
    borderColor: colors.accent,
    borderWidth: 0.8,
  },
});
