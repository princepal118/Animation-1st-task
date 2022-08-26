import {
  Animated,
  PanResponder,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});

  const rotate = position.x.interpolate({
    inputRange: [0, 200],
    outputRange: ['0deg', '360deg'],
  });
  const rotatey = position.y.interpolate({
    inputRange: [0, 200],
    outputRange: ['0deg', '360deg'],
  });

  const [openDiv, setOpenDiv] = useState(true);

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gesture) => {
      if (gesture.moveY <= 720) {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      } else {
        setOpenDiv(false);
      }
    },

    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <>
      <View style={styles.container}>
        {openDiv ? (
          <Animated.View
            {...pan.panHandlers}
            style={[
              styles.elementContainer,
              {
                transform: [
                  {translateX: position.x},
                  {translateY: position.y},
                  {rotate: rotate},
                  {rotate: rotatey},
                ],
              },
            ]}>
            <Text>Animated Data</Text>
          </Animated.View>
        ) : (
          ''
        )}
      </View>

      <View style={styles.button}>
        <Button title="Revert" onPress={() => setOpenDiv(true)} />
      </View>
      <View style={styles.button}>
        <Button title="delete" />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {marginBottom: 20},
  elementContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
