import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    fontWeight: 'bold',
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 34
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.text,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    marginBottom: 10,
  },
  iconButton: {
    fontSize: 32,
    color: colors.white,
  }
})

export default styles;