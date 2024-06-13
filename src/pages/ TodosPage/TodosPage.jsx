import React from 'react';
import Todo from "../../ components/Todo/Todo";
import styles from "./todospage.module.css"

function TodosPage(props) {
    const arr =  ["todo 1", "todo 2", "todo 3"
    ]
    return (
        <div className={styles.pageBlock}>
            {arr.map(item =>(
                <Todo info={item}/>
            ))}
        </div>
    );
}

export default TodosPage;