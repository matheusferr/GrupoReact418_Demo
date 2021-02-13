import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import Contact from './components/Contact';
import styles from './styles';

type ContactObject = {
  id: string,
  name: string,
  numbers: string
}

type ContactListProps = {
  contacts: ContactObject[],
  onRefresh: () => void,
  refreshing: boolean,
}

export default class ContactList extends PureComponent<ContactListProps> {
  private keyExtractor = ({ id }: ContactObject) => id

  private renderItem = ({ item }: { item: ContactObject }) => (
    <Contact name={item.name} numbers={item.numbers} />
  )

  render() {
    const { contacts, onRefresh, refreshing } = this.props;
    return (
      <FlatList
        style={styles.container}
        data={contacts}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        onRefresh={onRefresh}
        refreshing={refreshing}
        removeClippedSubviews={false}
      />
    );
  }
}
