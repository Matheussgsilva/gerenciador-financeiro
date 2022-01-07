import { Item } from '../types/Item'

export const items: Item[] = [
    {
        date: new Date(2021, 11, 1),
        category: 'food',
        title: 'McDonalds',
        value: 32.15
    },
    {
        date: new Date(2021, 11, 15),
        category: 'food',
        title: 'Burger King',
        value: 28.90
    },
    {
        date: new Date(2021, 11, 17),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 2300
    },
    {
        date: new Date(2022, 0, 10),
        category: 'salary',
        title: 'Salário',
        value: 4500
    }
]