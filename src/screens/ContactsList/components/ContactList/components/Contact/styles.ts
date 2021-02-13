import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  infoContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },

  baseText: {
    color: DarkTheme.colors.text,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'capitalize',
  },

  number: {
    fontSize: 14,
    fontWeight: '200',
  },
});
