import React, { PureComponent } from 'react';
import { Snackbar, Subheading } from 'react-native-paper';
import styles from './styles';

type NotificationProps = {
    visible: boolean,
    onDismiss: () => void,
}

export default class Notification extends PureComponent<NotificationProps> {
  render() {
    const { visible, onDismiss } = this.props;

    return (
    // @ts-ignore
      <Snackbar
        visible={visible}
        style={styles.container}
        onDismiss={onDismiss}
        action={{
          label: 'Fechar',
          onPress: onDismiss,
        }}
      >
        <Subheading>
          Esta versão utiliza o banco offline AsyncStorage!
        </Subheading>
      </Snackbar>
    );
  }
}
