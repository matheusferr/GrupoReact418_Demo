import React, { PureComponent } from 'react';
import { IconButton } from 'react-native-paper';
import styles from './styles';

type FlashButtonProps = {
  icon: string,
  onFlashPress: () => void,
  disabled: boolean,
}

export default class FlashButton extends PureComponent<FlashButtonProps> {
  render() {
    const { icon, onFlashPress, disabled } = this.props;

    if (disabled) return null;

    return (
      //  @ts-ignore
      <IconButton
        style={[styles.toggleButton,
          icon === 'flashlight' ? styles.toggleButtonEnabled
            : styles.toggleButtonDisabled]}
        icon={icon}
        color="white"
        size={30}
        animated
        onPress={onFlashPress}
      />
    );
  }
}
