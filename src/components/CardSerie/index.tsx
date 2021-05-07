import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { Serie } from '../../pages/ListSeries';
import SerieRepository from '../../repositories/Series';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';



interface CardSerieprops extends RectButtonProps {
  data: {
    idSerie: number;
    dsSerie: string;
    idPerson: number;
  };
}


export const CardSerie = ({ data, ...rest}: CardSerieprops) => {  
  const navigation = useNavigation()
  
  function handleEdit (serie: Serie) {
    navigation.navigate("EditSerie", serie);
  }

  const repository = new SerieRepository();

  function handleRemove (id: number, desc: string, idPerson: number) {
    repository.Delete({series: {
      id,
      desc,
      idPerson
    }, onSuccess: () => {
      alert(`Serie ${data.idSerie} removida com sucesso!`)
      navigation.navigate('Main');
      navigation.navigate('ListSeries');
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
              onPress={() => handleRemove(data.idSerie, data.dsSerie, data.idPerson)}
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
        onPress={() => handleEdit(data)}
      >
        <Text style={styles.title}>
          {data.dsSerie}
        </Text>
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>
            ID do usuário:
          </Text>
          <Text style={styles.detailsSubtitle}>
            {data.idPerson}
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