import React, { PureComponent } from 'react';
import {
  Button, Card, Paragraph, TextInput,
} from 'react-native-paper';
import styles from './styles';

type NoteCardProps = {
  content: {
    id: string,
    message: string,
    date: Date,
  },
  onDelete: (id: string) => void,
  onSave: (message: string, id: string) => void,
}

type NoteCardState = {
  isEditing: boolean,
  currentMessage: string
}

export default class NoteCard extends PureComponent<NoteCardProps, NoteCardState> {
  constructor(props: NoteCardProps) {
    super(props);

    this.state = {
      isEditing: false,
      currentMessage: props.content.message,
    };
  }

  formatDate = (date: Date) => {
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    return `${day}/${month}/${date.getFullYear().toString().substring(2)}`;
  }

  //  Salva o texto digitado no state;
  handleTextChange = (text: string) => this.setState({ currentMessage: text })

  //  Habilita a edição da nota;
  openEditor = () => this.setState({ isEditing: true });

  //  Executa o método on delete com o id da nota como parâmetro
  handleDelete = () => {
    const { content, onDelete } = this.props;
    onDelete(content.id);
  }

  handleSave = () => {
    const { currentMessage } = this.state;
    const { content, onSave } = this.props;

    //  Cancela a edição caso não tenha alteração;
    if (currentMessage !== content.message) {
      onSave(currentMessage, content.id);
      this.setState({
        isEditing: false,
      });
    }
  }

  handleCancel = () => {
    const { content } = this.props;

    //  Desabilita a edição da nota e redefine o texto digitado;
    this.setState({
      isEditing: false,
      currentMessage: content.message,
    });
  }

  render() {
    const { isEditing, currentMessage } = this.state;
    const { content } = this.props;

    //  O módulo moment.js é utilizado para formatar as datas das notas;
    return (
      //  @ts-ignore
      <Card style={styles.card}>
        {/*  @ts-ignore */}
        <Card.Title
          title={content.id}
          subtitle={this.formatDate(content.date)}
        />
        <Card.Content>
          {!isEditing ? (<Paragraph>{content.message}</Paragraph>)
            : (
              //  @ts-ignore
              <TextInput
                value={currentMessage}
                onChangeText={this.handleTextChange}
                mode="flat"
                multiline
              />
            )}
        </Card.Content>
        <Card.Actions>
          {!isEditing ? (
            <>
              {/*  @ts-ignore */}
              <Button
                icon="pencil"
                color="#fecd1a"
                onPress={this.openEditor}
                mode="contained"
              >
                Edit
              </Button>
              {/*  @ts-ignore */}
              <Button
                icon="delete"
                color="#f05454"
                style={styles.deleteButton}
                onPress={this.handleDelete}
                mode="contained"
              >
                Delete
              </Button>
            </>
          ) : (
            <>
              {/*  @ts-ignore */}
              <Button
                icon="content-save"
                color="#4caf50"
                onPress={this.handleSave}
                mode="contained"
              >
                Save
              </Button>
              {/*  @ts-ignore */}
              <Button
                icon="close"
                color="#f05454"
                style={styles.deleteButton}
                onPress={this.handleCancel}
                mode="contained"
              >
                Cancel
              </Button>
            </>
          )}
        </Card.Actions>
      </Card>
    );
  }
}
