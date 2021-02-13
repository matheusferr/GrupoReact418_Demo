import React, { PureComponent } from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

type ActionBarProps = {
  addNote: () => void,
  deleteAll: () => void
}

export default class ActionBar extends PureComponent<ActionBarProps> {
  render() {
    const { addNote, deleteAll } = this.props;
    return (
      //  @ts-ignore
      <Appbar style={styles.bottom}>
        {/*  @ts-ignore */}
        <Appbar.Action
          icon="plus"
          onPress={addNote}
        />
        {/*  @ts-ignore */}
        <Appbar.Action
          icon="delete"
          onPress={deleteAll}
        />
      </Appbar>
    );
  }
}
