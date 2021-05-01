import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType, View, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


interface ListButtonProps  extends TouchableOpacityProps {
  image: ImageSourcePropType;
  title: string;
  detail: string;
}


export function ListButton({ image, title, detail, ...rest }: ListButtonProps){
  return (
    <TouchableOpacity style={styles.buttonList} activeOpacity={0.8} {...rest}>
      <Image source={image} style={styles.listImage}/>
      <View style={styles.listInfo}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listDetatil}>{detail}</Text>
      </View>
    </TouchableOpacity>      
  );
}


const styles = StyleSheet.create({
   buttonList: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginBottom: 10
  },
  listImage: {
    width: 58,
    height: 58,
    marginLeft: 20
  },
  listInfo: {
    marginLeft: 20,
  },
  listTitle: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.heading
  },
  listDetatil: {
    fontSize: 14,
    fontFamily: fonts.text,
    color: '#979797'
  }
})
