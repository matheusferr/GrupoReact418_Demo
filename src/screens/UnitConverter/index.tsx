import React, { PureComponent } from 'react';
import { Pressable, Keyboard } from 'react-native';
import Section from './components/Section';
import styles from './styles';

type UnitConverterState = {
  primaryValue: string | number,
  secondaryValue: string | number,
  input: string,
  result: string,
}

export default class UnitConverter extends PureComponent<{}, UnitConverterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      primaryValue: '',
      secondaryValue: '',
      input: '',
      result: '',
    };
  }

  /*
    Não é necessário "bindar" o this ao utilizar métodos como arrow
      functions, pois as mesmas preservam o escopo;
    Pode quebrar o módulo ESlint caso não utilize o parser @babel/eslint-parser;
  */

 handlePickerChange = (picker: string, itemValue: string | number) => {
   const { input } = this.state;
   const { primaryValue, secondaryValue } = this.state;

   if (input && (primaryValue !== null || secondaryValue !== null)) {
     if (itemValue !== null) {
       // @ts-ignore
       this.setState({
         [`${picker}Value`]: itemValue,
       }, this.calculate);
     } else {
       // @ts-ignore
       this.setState({
         [`${picker}Value`]: itemValue,
         result: '',
       });
     }
   } else {
     // @ts-ignore
     this.setState({
       [`${picker}Value`]: itemValue,
     });
   }
 }

  handleValueChange = (value: string) => {
    if (value) {
      const { primaryValue, secondaryValue } = this.state;
      if (primaryValue !== null && secondaryValue !== null) {
        this.setState({
          input: value,
        }, this.calculate);
      } else {
        this.setState({
          input: value,
        });
      }
    } else {
      this.setState({
        input: value,
        result: '',
      });
    }
  }

  calculate() {
    const { input, primaryValue, secondaryValue } = this.state;
    if (primaryValue && secondaryValue) {
      /* Todos os valores dos items do picker são proporcionais ao metro.
        Ex:
        * Input = 10;
        * Picker primário = 1 (metro);
        * Picker secundário = -1 (centímetro);
        *
        * Diferença = -1 - 1 = -2;
        * Resultado = Input * 10² cm (1000)
      */

      this.setState({
        result: `${Number(input) * 10 ** (Number(primaryValue) - Number(secondaryValue))}`,
      });
    }
  }

  render() {
    const {
      primaryValue, secondaryValue, input, result,
    } = this.state;

    return (
      <Pressable
        style={styles.container}
        onPress={Keyboard.dismiss}
        android_disableSound
      >
        <Section
          title="Unidade de medida a ser convertida:"
          value={primaryValue}
          handlePickerChange={this.handlePickerChange}
          text={input}
          handleValueChange={this.handleValueChange}
          type="input"
        />

        <Section
          title="Unidade de medida para qual o valor será convertido:"
          value={secondaryValue}
          handlePickerChange={this.handlePickerChange}
          result={result}
          type="output"
        />

      </Pressable>
    );
  }
}
