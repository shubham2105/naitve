import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

function Fancycards() {
  return (
    <View>
      <Text style={styles.title}>FancyCards</Text>
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} />
        <View style={[styles.card, styles.cardOne]}>
          <Image
            style = {{width:400, height: 100}}
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1174949%2Fjs_react_js_logo_react_react_native_icon&psig=AOvVaw0DBifMI7IsdQNHIKNzXWjM&ust=1713839056419000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCp3ZPi1IUDFQAAAAAdAAAAABAE'}}
          />
          <Text>React Native</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 8,
    fontWeight: 'bold',
  },
  container: {},
  card: {height: 200,width: 200},
  cardOne: {},
});
export default Fancycards;
