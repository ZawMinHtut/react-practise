import React from 'react';

const ToDoList = ({lists}) => {
	return(
		lists.map((list, i) => {
				return (
					<tr key={i}>
						<th>{list.id}</th>
						<td>{list.listName}</td>
					</tr>
				)
			}
		)
	)
}

export default ToDoList;