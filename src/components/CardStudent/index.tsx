import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



interface CardStudentProps extends RectButtonProps {
  data: {
    id: string;
    name: string;
  };
}


export const CardStudent = ({ data, ...rest}: CardStudentProps) => { 
  const navigation = useNavigation()
  const { token } = useAuth();

  async function handleRemove (id: string, name: string) {
    await api.delete('/person', { headers: token,
      data: {
        id,
        name
      }
    })

    alert('Aluno excluído com sucesso!')
    navigation.navigate('Main');
    navigation.navigate('ListStudents');
  }


  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton 
              style={styles.buttonRemove}
              onPress={() => handleRemove(data.id, data.name)}
            >
              <Feather name="trash" size={28} color={colors.white} /> 
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
        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            ID do usuário:
          </Text>
          <Text style={styles.time}>
            {data.id}
          </Text>
        </View> 
      </RectButton>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 5    
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading
  },
  details: {
    alignItems: 'flex-end',
    marginRight: 20
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark
  },
  buttonRemove: {
    width: 100,
    height: 75,
    backgroundColor: colors.red,
    marginTop: 6,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    right: 30,
    paddingLeft: 25
  }
});