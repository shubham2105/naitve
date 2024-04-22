import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

function FlatCards() {
  return (
    <View>
      <Text style={styles.title}>FlatCards</Text>
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>Cyan</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>Emerald</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.cardText}>Asparagus</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={styles.cardText}>Resada</Text>
          </View>
        </ScrollView>
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 6,
  },
  cardOne: {
    backgroundColor: '#69FFF1',
  },
  cardText: {
    fontWeight: 'bold',
  },
  cardTwo: {
    backgroundColor: '#63D471',
  },
  cardThree: {
    backgroundColor: '#63A46C',
  },
  cardFour: {
    backgroundColor: '#6A7152',
  },
});

export default FlatCards;
