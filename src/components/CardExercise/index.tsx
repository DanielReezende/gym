import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { useAuth } from '../../hooks/useAuth';
import { Exercise } from '../../pages/ListExercises';
import { api } from '../../services/api';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



interface CardExerciseprops extends RectButtonProps {
  data: {
    idExercicio: string;
    dsExercicio: string;
    idSerie: string;
    repeticoes: number;
    qtdRepeticoes: number;
  };
}


export const CardExercise = ({ data, ...rest }: CardExerciseprops) => { 
  const { token } = useAuth(); 
  const navigation = useNavigation()
  

  async function handleRemove (idExercicio: string, desc: string, idSerie: string, qtdRepeticoes: number, repeticoes: number) {
    await api.delete('/person', { headers: token,
      data: {
        idExercicio,
        dsExercicio: desc,
        idSerie,
        qtdRepeticoes,
        repeticoes
      }
    })

    alert('Exercicio excluído com sucesso!')
    navigation.navigate('Main');
    navigation.navigate('ListExercises');
  }


  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton 
              style={styles.buttonRemove}
              onPress={() => handleRemove(data.idExercicio, data.dsExercicio, data.idSerie, data.qtdRepeticoes, data.repeticoes)}
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
          {data.dsExercicio}
        </Text>
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>
            ID do exercicio:
          </Text>
          <Text style={styles.detailsSubtitle}>
            {data.idExercicio}
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
  detailsTitle: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light
  },
  detailsSubtitle: {
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