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
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
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
    fontSize: 20,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontWeight: '400',
  },
  listContainer: {
    flex: 1,
    marginTop: 10
  },
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

export default styles;