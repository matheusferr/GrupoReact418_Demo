import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import styles from './styles';

type ContactProps = {
  name: string,
  numbers: string
}

export default class Contact extends PureComponent<ContactProps> {
  colors: string[];

  constructor(props:ContactProps) {
    super(props);

    this.colors = ['#ED6C03', '#9C28B1', '#BB86FC', '#EA1E63', '#09A056'];
  }

  randomColor = () => {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  render() {
    const { name, numbers } = this.props;
    return (
      <View style={styles.container}>
        {/* @ts-ignore */}
        <Avatar.Text
          style={{ backgroundColor: this.randomColor() }}
          label={name[0].toUpperCase()}
          size={50}
        />
        <View style={styles.infoContainer}>
          {/* @ts-ignore */}
          <Text style={[styles.baseText, styles.name]}>
            {name}
          </Text>
          {/* @ts-ignore */}
          <Text style={[styles.baseText, styles.number]}>
            {numbers}
          </Text>
        </View>
      </View>
    );
  }
}
