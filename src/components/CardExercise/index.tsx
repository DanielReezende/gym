import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import ExercisesRepository from '../../repositories/Exercises';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface CardExerciseprops extends RectButtonProps {
  data: {
    idExercicio: number;
    dsExercicio: string;
    idSerie: number;
    repeticoes: number;
    qtdRepeticoes: number;
  };
}


export const CardExercise = ({ data, ...rest}: CardExerciseprops) => {  
  const navigation = useNavigation()

  const repository = new ExercisesRepository();

  function handleRemove (idExercicio: number, desc: string, idSerie: number, qtdRepeticoes: number, repeticoes: number) {
    console.log(idExercicio)
    repository.Delete({exercises: {
      idExercicio,
      dsExercicio: desc,
      idSerie,
      qtdRepeticoes,
      repeticoes
    }, onSuccess: () => {
      alert(`Exercicio ${data.idExercicio} removido com sucesso!`)
      navigation.navigate('Main');
      navigation.navigate('ListExercises');
    }})
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
            ID da Série:
          </Text>
          <Text style={styles.detailsSubtitle}>
            {data.idSerie}
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