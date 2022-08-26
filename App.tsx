/* eslint-disable react-native/no-inline-styles */
import {
  // FlatList,
  Animated,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
  Pressable,
  // TouchableOpacity,
  // Pressable,
} from 'react-native';
import React, {useState} from 'react';
import sliderData from './jsonData';
// interface IProps {
//   item: {
//     value: string;
//     id: number;
//   };
// }

const App = () => {
  const [arrayValue, setArrayValue] = useState(sliderData);

  const [first, setfirst] = useState(0);
  const position = new Animated.ValueXY({x: 0, y: 0});

  const rotateX = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  const rotateY = position.y.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    // onPanResponderMove: Animated.event([
    //   null,
    //   {dx: position.x, dy: position.y},
    // ]),
    onPanResponderMove: (e, gesture) => {
      if (gesture.moveY <= 500) {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      } else {
        // setArrayValue((currentCourseGoals: any) => {
        //   return currentCourseGoals.filter((item: any) => {
        //     item.id !== first;
        //     console.log('item', item);
        //     console.log('Deleted data of index ====', item.id);

        //   });
        // }); // if (!first) {

        setArrayValue(
          arrayValue.filter((person: any) => {
            return first !== person.id;
          }),
        );

        // }
        // setArrayValue((arrayValuedata: any) => {
        //   return arrayValuedata.filter((item: any) => item.id !== first);
        // });
      }
    },
    // onPanResponderStart: e => console.log(e),
  });

  // const deleteGoalHandler = (id: number) => {
  //   setArrayValue((currentCourseGoals: any) => {
  //     return currentCourseGoals.filter((item: any) => {
  //       item.id !== id;
  //       console.log('item', item);
  //     });
  //   });
  // };

  console.log('first value on console', first);
  return (
    <View style={styles.mainContainer}>
      {arrayValue.map((item: any, index: any) => {
        if (index === first) {
          return (
            <Animated.View
              key={index}
              onResponderStart={() => {
                console.log('dsffdsfdssdfsdr');
              }}
              {...pan.panHandlers}
              style={{
                width: 60,
                height: 60,
                margin: 10,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                transform: [
                  {translateX: position.x},
                  {translateY: position.y},
                  {rotate: rotateX},
                  {rotate: rotateY},
                ],
              }}>
              <TouchableOpacity
                onPressIn={() => {
                  setfirst(index);
                }}>
                <Text style={styles.text}>{item.value}</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={index}
              {...pan.panHandlers}
              style={{
                width: 60,
                height: 60,
                margin: 10,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                // transform: [
                //   {translateX: position.x},
                //   {translateY: position.y},
                //   {rotate: rotateX},
                //   {rotate: rotateY},
                // ],
              }}>
              <TouchableOpacity
                onPressIn={() => {
                  setfirst(index);
                }}>
                <Text style={styles.text}>{item.value}</Text>
              </TouchableOpacity>
            </Animated.View>
            // </Pressable>
          );
        }
      })}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  multiBoxes: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

// // onPress={() => {
// //               setArrayData(() => {
// //                 console.log('item.id', item.id);
// //                 // if (gesture.moveY >= 700) {
// //                 return arrayData.filter((data1: any) => data1.id !== item.id);
// //                 // }
// //               });
// //             }}

// import {StyleSheet, View} from 'react-native';
// import React from 'react';
// import PrimaryButton from './conponents/Button';
