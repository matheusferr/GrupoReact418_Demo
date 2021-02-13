import React, { PureComponent } from 'react';
import { StatusBar, GestureResponderEvent, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import Header from './components/Header';
import ContactList from './components/ContactList';

type ContactObject = {
  id: string,
  name: string,
  numbers: string
}

type HomeState = {
  searchText: string,
  contacts: Array<ContactObject>,
  refreshing: boolean,
}

export default class Home extends PureComponent<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      searchText: '',
      contacts: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.requestPermission();
  }

  private requestPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
      .then((status) => {
        if (status === 'denied') this.requestPermission();
        else this.loadContacts();
      });
  }

  private formatContacts = (contacts: Contacts.Contact[]) => {
    const contactStore: Array<ContactObject> = [];
    contacts.forEach(({ recordID, givenName, phoneNumbers }) => {
      const numbers = phoneNumbers.map(({ number }) => number).join(', ');
      contactStore.push({
        id: recordID,
        name: givenName.toLowerCase(),
        numbers,
      });
    });
    return contactStore.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  private loadContacts = (callback?: () => void) => {
    Contacts.getAllWithoutPhotos().then((contactList) => {
      const { contacts } = this.state;
      if (!contacts.length) {
        this.setState({ contacts: this.formatContacts(contactList) });
      } else {
        const isEqual = contactList.every(({ givenName, phoneNumbers }) => contacts.some(
          ({ name, numbers }) => {
            const tempNumber = phoneNumbers.map(({ number }) => number).join(', ');
            return name === givenName && numbers === tempNumber;
          },
        ));
        if (!isEqual) {
          this.setState({ contacts: this.formatContacts(contactList) });
        }
      }
    // eslint-disable-next-line no-console
    }).catch((e) => console.log(e))
      .finally(() => {
        if (callback) callback();
      });
  }

  private handleTextChange = (text: string | GestureResponderEvent) => {
    this.setState({
      searchText: typeof text === 'string' ? text.toLowerCase() : '',
    });
  }

  private filterContacts = () => {
    const { searchText, contacts } = this.state;
    return contacts.filter(
      ({ name, numbers }) => name.startsWith(searchText)
        || numbers.includes(searchText),
    ).sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  private handleRefresh = () => {
    this.setState({ refreshing: true });
    this.loadContacts(() => this.setState({ refreshing: false }));
  }

  render() {
    const { searchText, contacts, refreshing } = this.state;
    return (
      <>
        <StatusBar animated barStyle="light-content" backgroundColor="#1A73E9" />
        <Header
          text={searchText}
          onChangeText={this.handleTextChange}
          onClearPress={this.handleTextChange}
        />
        <ContactList
          contacts={searchText === '' ? contacts : this.filterContacts()}
          onRefresh={this.handleRefresh}
          refreshing={refreshing}
        />
      </>
    );
  }
}
