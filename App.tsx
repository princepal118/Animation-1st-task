import {
  Animated,
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import sliderData from './jsonData';
interface IPropsItems {
  value: string;
  id: number;
}

const App = () => {
  const [arrayValue, setArrayValue] = useState(sliderData);

  const [first, setfirst] = useState(null);
  const position = new Animated.ValueXY({x: 0, y: 0});

  const rotateX = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  const rotateY = position.y.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  const deleteElementHandler = () => {
    const newArray = arrayValue.filter((item: IPropsItems, idx: any) => {
      if (idx === first) {
        return false;
      } else {
        return true;
      }
    });
    setArrayValue(newArray);
    setfirst(null);
  };

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gesture) => {
      if (gesture.moveY <= 725) {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      } else {
        deleteElementHandler();
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
    <View style={styles.mainContainer}>
      <View style={styles.wrapperContainer}>
        {arrayValue.map((item: IPropsItems, index: any) => {
          if (index === first) {
            return (
              <Animated.View
                key={index}
                style={
                  (position.getLayout(),
                  [
                    styles.itemsCollection,
                    {
                      transform: [
                        {translateX: position.x},
                        {translateY: position.y},
                        {rotate: rotateX},
                        {rotate: rotateY},
                      ],
                    },
                  ])
                }
                {...pan.panHandlers}>
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
                style={styles.itemsCollection}>
                <TouchableOpacity
                  onPressIn={() => {
                    setfirst(index);
                  }}>
                  <Text style={styles.text}>{item.value}</Text>
                </TouchableOpacity>
              </Animated.View>
            );
          }
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Delete Element" />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  wrapperContainer: {
    flexDirection: 'row',
  },

  text: {
    color: '#fff',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    marginBottom: 30,
    marginHorizontal: 10,
  },

  itemsCollection: {
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
