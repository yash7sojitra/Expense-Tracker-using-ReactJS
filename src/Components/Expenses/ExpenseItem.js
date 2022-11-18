import React from 'react';

import './ExpenseItem.css';
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // return <h2>Expense Item</h2>
    // const expenseDate = new Date(2022,9,4);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 352.4;

    // const [title,setTitle] = useState(props.title)

    //  const clickHandler = ()=>{
    //     setTitle('Updated!!')
    //     console.log(title)
    // }
    
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price ">${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;
