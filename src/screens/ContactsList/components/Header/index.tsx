import React, { PureComponent } from 'react';
import {
  View, TextInput, Pressable, GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type HeaderProps = {
  text: string,
  onChangeText: (newText: string) => void,
  onClearPress: (newText: GestureResponderEvent) => void
}

export default class Header extends PureComponent<HeaderProps> {
  render() {
    const { text, onChangeText, onClearPress } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <Icon name="magnify" color="#FFF" size={28} />
          <TextInput
            style={styles.textInput}
            placeholder="Pesquisar contatos"
            placeholderTextColor="grey"
            value={text}
            onChangeText={onChangeText}
          />
          {
            text !== '' ? (
              <Pressable
                onPress={onClearPress}
              >
                <Icon name="window-close" color="#FFF" size={20} />
              </Pressable>
            ) : null
          }
        </View>
      </View>
    );
  }
}
