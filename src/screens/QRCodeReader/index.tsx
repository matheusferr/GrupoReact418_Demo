import React, { PureComponent } from 'react';
import { PermissionsAndroid, Linking } from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-simple-toast';
import Camera from './components/Camera';
import Modal from './components/Modal';
import FlashButton from './components/FlashButton';

type QRCodeReaderState = {
  data: string
  flashEnabled: boolean
  isCameraVisible: boolean
}

export default class QRCodeReader extends PureComponent<{}, QRCodeReaderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: '',
      flashEnabled: false,
      isCameraVisible: false,
    };
  }

  componentDidMount() {
    //  Executa o método requestPermission assim que o componente for criado;
    this.requestPermission();
  }

  requestPermission = () => {
    //  Solicita a permissão CAMERA
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      .then((status) => {
        //  Caso seja negada, solicita novamente (recursão)
        if (status === 'denied') this.requestPermission();
        //  Caso seja concedida, monta Camera e FlashButton;
        else this.setState({ isCameraVisible: true });
      });
  }

  onBarCodeRead = ({ data }: {data: string}) => {
    //  Salva o valor do código lido;
    this.setState({ data });
  }

  toggleFlashMode = () => {
    const { flashEnabled } = this.state;

    //  Alterna o estado do flash;
    this.setState({ flashEnabled: !flashEnabled });
  }

  handleCopy = () => {
    const { data } = this.state;

    //  Salva o código lido na área de transferência;
    Clipboard.setString(data);
    //  Notifica o usuário;
    Toast.show('Copiado para a área de transferência');
    //  Redefine o valor do código;
    this.setState({ data: '' });
  }

  handleOpen = () => {
    const { data } = this.state;
    //  Verifica se o código é um Deep Link válido;
    if (data.includes(':')) {
      //  Tenta abrir um aplicativo vinculado ao Link;
      Linking.openURL(data).catch(() => {
        //  Notifica o usuário em caso de erro;
        Toast.show('Não há apps instalados para abrir esse tipo de link');
      });
      //  Caso não seja válido, faz uma pesquisa no Google com o conteúdo do código;
    } else Linking.openURL(`https://www.google.com/search?q=${encodeURI(data)}`);
    //  Redefine o valor do código;
    this.setState({ data: '' });
  }

  render() {
    const { isCameraVisible, flashEnabled, data } = this.state;
    return (
      <>
        <Camera
          flashEnabled={flashEnabled}
          canRead={data === ''}
          onBarCodeRead={this.onBarCodeRead}
          isCameraVisible={isCameraVisible}

        />

        <FlashButton
          icon={flashEnabled ? 'flashlight' : 'flashlight-off'}
          onFlashPress={this.toggleFlashMode}
          disabled={!isCameraVisible}
        />

        <Modal
          visible={data !== ''}
          onOpen={this.handleOpen}
          onCopy={this.handleCopy}
          code={data}
        />
      </>
    );
  }
}
