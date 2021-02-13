import React, { PureComponent } from 'react';
import { Picker as RNPicker } from '@react-native-community/picker';
import styles from './styles';

type PickerProps = {
  name: string,
  selectedValue: string | number | undefined,
  onValueChange: (picker: string, value: string | number) => void,
}

class Picker extends PureComponent<PickerProps> {
  onValueChange = (value: string | number | null) => {
    const { name, onValueChange } = this.props;

    onValueChange(name, value as number | string);
  }

  render() {
    const { selectedValue = '' } = this.props;
    return (
      <RNPicker
        selectedValue={selectedValue}
        style={styles.picker}
        mode="dropdown"
        onValueChange={this.onValueChange}
      >
        <RNPicker.Item
          label="Selecione aqui"
          value=""
        />
        <RNPicker.Item
          label="Metros"
          value={1}
        />
        <RNPicker.Item
          label="Centímetros"
          value={-1}
        />
        <RNPicker.Item
          label="Milímetros"
          value={-2}
        />
      </RNPicker>
    );
  }
}

export default Picker;
