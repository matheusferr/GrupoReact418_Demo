import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Picker from './components/Picker';
import styles from './styles';

type SectionProps = {
  title: string,
  type: string,
  value: string | number,
  handlePickerChange: (picker: string, value: string | number) => void,
  handleValueChange?: (newText: string) => void
  text?: string,
  result?: string,
}

class Section extends PureComponent<SectionProps> {
 // eslint-disable-next-line consistent-return
 validateInput = (newText: string) => {
   const { handleValueChange } = this.props;

   if (handleValueChange) {
     if (Number.isNaN(newText)) return handleValueChange('');
     return handleValueChange(newText);
   }
 }

 render() {
   const {
     title, type, value, handlePickerChange,
     text, result,
   } = this.props;
   return (
     <>
       {/* @ts-ignore */}
       <Text style={styles.title}>
         {title}
       </Text>
       <View style={styles.pickerContainer}>
         <Picker
           name={type === 'input' ? 'primary' : 'secondary'}
           selectedValue={value}
           onValueChange={handlePickerChange}
         />
         {
             type === 'input' ? (
               // @ts-ignore
               <TextInput
                 style={styles.measure}
                 dense
                 mode="flat"
                 keyboardType="numeric"
                 value={text}
                 onChangeText={this.validateInput}
               />
             ) : (
             // @ts-ignore
               <Text style={styles.measure}>{result}</Text>
             )
             }
       </View>
     </>
   );
 }
}

export default Section;
