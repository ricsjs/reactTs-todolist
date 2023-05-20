import * as React from 'react';
import './TaskForm.css'

export interface Props {
    btnText: string
}

export default class TaskForm extends React.Component<Props> {
    public render() {
        return (
            <form className='form'>
                <div className='input-container'>
                    <label htmlFor='title'>Título:</label>
                    <input name='title' type='text' placeholder='Título da tarefa' />
                </div>

                <div className='input-container'>
                    <label htmlFor='difficulty'>Dificuldade:</label>
                    <input name='difficulty' type='text' placeholder='Dificuldade da tarefa' />
                </div>

                <input type='submit' value={this.props.btnText}/>
            </form>
        );
    }
}
