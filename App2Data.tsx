// /* eslint-disable react-native/no-inline-styles */
// import {Animated, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';

// const App2Data = () => {
//   const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

//   const moveBall = () => {
//     Animated.timing(value, {
//       toValue: {x: 100, y: 100},
//       useNativeDriver: false,
//       //   duration: 1000,
//     }).start();
//   };

//   const moveBallBack = () => {
//     Animated.timing(value, {
//       toValue: {x: 0, y: 0},
//       useNativeDriver: false,
//       //   duration: 1000,
//     }).start();
//   };

//   return (
//     <View>
//       <Animated.View style={value.getLayout()}>
//         <View
//           style={{
//             width: 100,
//             height: 100,
//             borderRadius: 100 / 2,
//             backgroundColor: 'red',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Text>Hello</Text>
//         </View>
//       </Animated.View>
//       <TouchableOpacity onPress={moveBall}>
//         <Text>Hey Click Me</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={moveBallBack} style={{marginTop: 50}}>
//         <Text>Back Me</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App2Data;

// const styles = StyleSheet.create({});

//////// single div Delete Data

/* eslint-disable react-native/no-inline-styles */
// import {
//   Animated,
//   PanResponder,
//   Button,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';

// const App = () => {
//   const position = new Animated.ValueXY({x: 0, y: 0});
//   // const animateDiv = () => {
//   //   Animated.timing(position, {
//   //     toValue: {x: 200, y: 500},
//   //     useNativeDriver: false,
//   //     duration: 2000,
//   //   }).start();
//   // };
//   const rotate = position.x.interpolate({
//     inputRange: [0, 200],
//     outputRange: ['0deg', '360deg'],
//   });
//   const rotatey = position.y.interpolate({
//     inputRange: [0, 200],
//     outputRange: ['0deg', '360deg'],
//   });

//   const [openDiv, setOpenDiv] = useState(true);

//   const pan = PanResponder.create({
//     onMoveShouldSetPanResponder: () => true,

//     // onPanResponderMove: Animated.event([
//     //   null,
//     //   {dx: position.x, dy: position.y},
//     // ]),

//     onPanResponderMove: (e, gesture) => {
//       if (gesture.moveY <= 720) {
//         position.setValue({
//           x: gesture.dx,
//           y: gesture.dy,
//         });
//       } else {
//         console.log('Deleted');
//         setOpenDiv(false);
//       }
//       console.log('gesture StateId', gesture.stateID);
//       console.log('moveY', gesture.moveY);
//     },
//     // console.log('gesture', gesture);

//     // onPanResponderRelease: (e, gestureState) => {...}
//     onPanResponderRelease: () => {
//       // position.setValue({x: 0, y: 0});
//       Animated.spring(position, {
//         toValue: {x: 0, y: 0},
//         useNativeDriver: false,
//       }).start();
//     },
//   });

//   // onPanResponderMove: (e, c) => {
//   //     console.log('e', e);
//   //     console.log('c', c);
//   //   },

//   return (
//     <>
//       <View style={styles.container}>
//         {openDiv ? (
//           <Animated.View
//             {...pan.panHandlers}
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: 'red',
//               alignItems: 'center',
//               justifyContent: 'center',

//               transform: [
//                 {translateX: position.x},
//                 {translateY: position.y},
//                 {rotate: rotate},
//                 {rotate: rotatey},
//               ],
//             }}>
//             <Text>Animated Data</Text>
//           </Animated.View>
//         ) : (
//           ''
//         )}
//       </View>

//       <View style={styles.button}>
//         <Button title="Revert" onPress={() => setOpenDiv(true)} />
//       </View>
//       <View style={styles.button}>
//         <Button title="delete" />
//       </View>
//     </>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {marginBottom: 20},
// });
