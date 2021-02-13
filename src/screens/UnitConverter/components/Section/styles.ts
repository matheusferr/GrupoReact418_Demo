import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';

export default StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: DarkTheme.colors.text,
  },

  pickerContainer: {
    flexDirection: 'row',
    paddingVertical: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  measure: {
    flexBasis: '40%',
    fontSize: 22,
  },
});
