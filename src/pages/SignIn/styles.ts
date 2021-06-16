import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontWeight: '400',
    textAlign: 'center'
  },
  form: {
    flex: 1,
    marginTop: 10
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    height: 60,
    fontSize: 18,
    marginTop: 20,
    padding: 5,
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor:  '#EFEDF5',
    marginVertical: 10,
    borderRadius: 20
  },
  footer: {
    width: '100%',
    marginTop: 30,
  }
})

export default styles;