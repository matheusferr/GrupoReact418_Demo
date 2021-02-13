import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import {
  Button, Paragraph, Dialog, Portal,
} from 'react-native-paper';
import styles from './styles';

type ModalProps = {
  code: string,
  onOpen: () => void,
  onCopy: () => void,
  visible: boolean
}

export default class Modal extends PureComponent<ModalProps> {
  render() {
    const { code, onCopy, onOpen } = this.props;
    return (
      <Portal>
        {
          code ? (
            // @ts-ignore
            <Dialog {...this.props}>
              {/* @ts-ignore */}
              <Dialog.Title>Resultado</Dialog.Title>
              <Dialog.ScrollArea>
                <ScrollView style={styles.scrollView}>
                  <Paragraph>{code}</Paragraph>
                </ScrollView>
              </Dialog.ScrollArea>
              <Dialog.Actions>
                {/* @ts-ignore */}
                <Button onPress={onOpen}>Abrir</Button>
                {/* @ts-ignore */}
                <Button onPress={onCopy}>Copiar</Button>
              </Dialog.Actions>
            </Dialog>
          ) : null
        }
      </Portal>
    );
  }
}
