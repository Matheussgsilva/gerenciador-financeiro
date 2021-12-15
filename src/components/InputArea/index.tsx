import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}

export function InputArea({onAdd}: Props) {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 1, 15),
            category: 'food',
            title: 'Item teste',
            value: 250.25
        };
        onAdd(newItem);
    };

    return (
        <C.Container>
            <button onClick={handleAddEvent} >Adicionar</button> 
        </C.Container>
    );
}