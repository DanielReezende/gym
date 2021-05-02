import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  colors.red,

  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 139,
    height: 72,
  },
  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor:  '#EFEDF5',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontWeight: '400',
  },
  listContainer: {
    flex: 1,
    marginTop: 10
  },
 
})

export default styles;