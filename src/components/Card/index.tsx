import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



interface CardProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
  };
  handleRemove: () => void;
}

export const Card = ({ data, handleRemove, ...rest}: CardProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={styles.container}
        {...rest}
      >
        <Text style={styles.title}>
          {data.name}
        </Text>

      </RectButton>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading
  },
  buttonRemove: {
    width: 100,
    height: 85,
    backgroundColor: colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    right: 20,
    paddingLeft: 15
  }
});
