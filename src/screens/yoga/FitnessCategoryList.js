import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import fitnessData from '../../constants/fitnessCategories';
import {colors, fonts} from '../../constants/theme';

const FitnessCategories = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('FitnessDetailsScreen', {item})}>
        <Image source={{uri: item.imageURL}} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness Categories</Text>
      </View>
      <FlatList
        renderItem={renderItem}
        data={fitnessData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FitnessCategories;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: 10,
  },
  itemContainer: {
    margin: 10,
    width: 150,
    height: 180,
    borderWidth: 1,
    borderColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    padding: 5,
    fontSize: 18,
    backgroundColor: colors.primary,
    textAlign: 'center',
    alignContent: 'flex-end',
    color: 'white',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height: 75,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent:"space-around"
  },
  headerText: {
    color: 'white',
    fontSize: fonts.h1.fontSize,
    fontWeight: 'bold',
    position: 'relative',
    top: 20,
  },
});
