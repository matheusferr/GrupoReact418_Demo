import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toggleButton: {
    position: 'absolute',
    bottom: 25,
    width: 55,
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  toggleButtonEnabled: {
    backgroundColor: '#379936',
  },

  toggleButtonDisabled: {
    backgroundColor: '#64B32C',
  },
});
