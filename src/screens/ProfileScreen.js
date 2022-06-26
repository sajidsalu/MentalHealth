import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
//import { AntDesign,MaterialIcons,Feather,FontAwesome5,MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, fonts} from '../constants/theme';
import {concerns} from '../constants/concerns';
import pastData from '../constants/pastData';
import futureData from '../constants/futureData';
import Appointments from '../components/Appointments';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getLoggedInUser} from '../redux/reducers/auth';
import {logoutUser} from '../redux/actions/auth';
import {Dimensions} from 'react-native';
import {DataTable} from 'react-native-paper';
import {getConcernName} from '../utils/user-concerns-utils';

const ProfileScreen = (props) => {
  const loggedInUser = useSelector(getLoggedInUser);
  const [selectedConcerns, setSelectedConcerns] = useState(
    loggedInUser.concerns,
  );
  const [modalVisible, setModalVisible] = useState(false);
  console.log('selected concerns', selectedConcerns);
  const dispatch = useDispatch();
  useEffect(() => {
    setSelectedConcerns(loggedInUser.concerns);
  }, [loggedInUser]);

  const [userConcerns, setUserConcerns] = React.useState([]);

  const calculateScores = () => {};

  useEffect(() => {
    calculateScores();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.top}>
          <AntDesign
            style={{flex: 1}}
            name="arrowleft"
            size={32}
            color={colors.white}
            onPress={() => props.navigation.navigate('Home')}
          />
          <Text style={styles.profileText}>Profile</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <FontAwesome5
              name="edit"
              size={24}
              color={colors.white}
              onPress={() => props.navigation.navigate('EditProfile')}
            />
            <TouchableOpacity
              onPress={() => {
                console.log('logout');
                dispatch(logoutUser());
              }}>
              <MaterialIcons name="logout" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dpCover}>
          <Image
            style={{width: 100, height: 100}}
            source={
              loggedInUser.gender === 'male'
                ? require('../assets/maleUserIcon.png')
                : require('../assets/femaleUserIcon.png')
            }
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{loggedInUser.name}</Text>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="gender-male-female"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>{loggedInUser.gender}</Text>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="timer-sand-empty"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>{loggedInUser.age} yrs. old</Text>
        </View>
        <View style={styles.infoBox}>
          <Feather name="phone" size={20} color={colors.tertiary} />
          <Text style={styles.otherInfo}>{loggedInUser.phone}</Text>
        </View>
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color={colors.tertiary}
          />
          <Text style={styles.otherInfo}>{loggedInUser.email}</Text>
        </View>
      </View>
      <View style={styles.concernContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.concernTitle}>View Concerns</Text>
        </TouchableOpacity>
      </View>
      <View style={{position: 'relative', top: 60}}>
        <Appointments data={futureData} type="Future" />
      </View>
      <View style={{position: 'relative', top: 60, marginBottom: 70}}>
        <Appointments data={pastData} type="Past" />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DataTable style={styles.DataTable}>
              <DataTable.Header>
                <DataTable.Title>User Concerns</DataTable.Title>
                <DataTable.Title numeric>Score</DataTable.Title>
              </DataTable.Header>

              {selectedConcerns.map((item) => {
                return (
                  <DataTable.Row key={item.key}>
                    <DataTable.Cell>{getConcernName(item.key)}</DataTable.Cell>
                    <DataTable.Cell numeric>{item.value}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
            </DataTable>
            <Button
              mode="outlined"
              onPress={() => setModalVisible(false)}
              color={colors.primary}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  background: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    //   borderBottomEndRadius:100
  },
  top: {
    padding: 20,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileText: {
    flex: 2,
    position: 'relative',
    color: colors.white,
    fontSize: fonts.h1.fontSize,
    fontWeight: '700',
    textAlign: 'center',
  },
  dpCover: {
    width: 110,
    height: 110,
    position: 'relative',
    alignSelf: 'center',
    top: 10,
    borderRadius: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  info: {
    position: 'relative',
    top: 55,
    display: 'flex',
    alignItems: 'center',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    paddingBottom: 5,
    fontSize: fonts.title.fontSize,
    fontWeight: 'bold',
    color: 'black',
  },
  otherInfo: {
    paddingBottom: 5,
    paddingLeft: 5,
    // fontStyle:'italic'
  },
  concernContainer: {
    margin: 10,
    paddingBottom: 10,
    position: 'relative',
    top: 70,
    borderTopWidth: 2,
    borderTopColor: colors.accent,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  concernTitle: {
    textAlign: 'center',
    padding: 10,
    fontSize: fonts.title.fontSize,
    color: colors.secondary,
  },
  chip: {
    margin: 5,
    backgroundColor: colors.accent,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
  },
  DataTable: {marginTop: 0, padding: 10},
});
