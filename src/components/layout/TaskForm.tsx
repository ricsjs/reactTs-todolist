import * as React from 'react';

export interface Props {
    btnText: string
}

export default class TaskForm extends React.Component<Props> {
    public render() {
        return (
            <form>
                <div>
                    <label htmlFor='title'>Título:</label>
                    <input name='title' type='text' placeholder='Título da tarefa' />
                </div>

                <div>
                    <label htmlFor='difficulty'>Dificuldade:</label>
                    <input name='difficulty' type='text' placeholder='Dificuldade da tarefa' />
                </div>

                <input type='submit' value={this.props.btnText}/>
            </form>
        );
    }
}
