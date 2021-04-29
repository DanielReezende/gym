import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems:'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  form: {
    marginTop: 40,
    width: '85%',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 40,
    paddingVertical: 50,
    borderRadius: 16,
    backgroundColor: colors.white
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -75,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: colors.red,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 10
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }
})

export default styles;