import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const OpenBlogScreen = (props) => {
  const {width, height} = Dimensions.get('window');

  const {data} = props.route.params;
  const regex = /(<([^>]+)>)/gi;
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image
            source={{uri: data.image}}
            style={{
              width: '100%',
              height: height - 450,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.profilepicstyle}>
          <View>
            <Image
              source={{uri: data.profilePic}}
              style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}}
              resizeMode="cover"
            />
          </View>

          <View style={styles.abc}>
            <View>
              <View>
                <Text style={styles.authorstyle}>{data.author}</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Feather name="bookmark" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollview}>
        <View style={{width: width - 30, marginBottom: 14}}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: 'bold',
              lineHeight: 32,
            }}>
            {data.title}
          </Text>
        </View>
        <Text style={styles.text}>
          {data.article && data.article.toString().replace(regex, '')}
        </Text>

        <View style={styles.like}>
          <TouchableOpacity
            style={{padding: 12, flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="heart" size={16} color="orange" />
            <Text style={styles.liketext}>{data.likes} Likes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OpenBlogScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  profilepicstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 14,
    left: 10,
  },
  abc: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  authorstyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollview: {
    paddingHorizontal: 10,
    paddingTop: 14,
  },
  text: {
    fontSize: 14,
    lineHeight: 28,
    textAlign: 'justify',
    opacity: 0.5,
  },
  like: {
    marginVertical: 25,
    paddingBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liketext: {
    fontWeight: 'normal',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  backbutton: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});
