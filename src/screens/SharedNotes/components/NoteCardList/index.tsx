/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import NoteCard from './components/NoteCard';
import noteService from '../../services/note.service';
import styles from './styles';

type Note = {
  id: string,
  message: string,
  date: Date,
}

type NoteCardListProps = {
  list: Note[],
  refresh: (callback?: () => void) => void
}

type NoteCardListState = {
  refreshing: boolean
}

class NoteCardList extends PureComponent<NoteCardListProps, NoteCardListState> {
  constructor(props: NoteCardListProps) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  onRefresh = () => {
    const { refresh } = this.props;
    //  Alterna o estado de atualização;
    this.setState({ refreshing: true });
    //  Atualiza a lista e redefine o estado de atualização;
    refresh(() => { this.setState({ refreshing: false }); });
  }

  onHandleSave = (message: string, id: string) => {
    const { list, refresh } = this.props;
    console.log(`saving item: ${id}`);
    noteService.updateNote(list, message, id).then(() => refresh());
  }

  onHandleDelete = (id: string) => {
    const { list, refresh } = this.props;
    console.log(`deleting item: ${id}`);
    noteService.deleteNote(list, id).then(() => refresh());
  }

  //  Extrai as chaves dos items;
  keyExtractor = ({ id }: Note) => id

  //  Componente a ser renderizado por item;
  renderItem = ({ item }: {item: Note}) => (
    <NoteCard
      key={item.id}
      onSave={this.onHandleSave}
      onDelete={this.onHandleDelete}
      content={item}
    />
  )

  render() {
    const { refreshing } = this.state;
    const { list } = this.props;
    return (
      <FlatList
        style={{ flex: 1 }}
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        contentContainerStyle={list.length === 0 ? styles.emptyList : null}
        ListEmptyComponent={(
          //  @ts-ignore
          <Text style={styles.emptyListText}>Banco de notas vazio!</Text>
          )}
        onRefresh={this.onRefresh}
        refreshing={refreshing}
        removeClippedSubviews={false}
      />
    );
  }
}

export default NoteCardList;
