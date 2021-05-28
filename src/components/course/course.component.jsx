import React  from 'react';
import  ModalForm  from '../modal/modal.component';
import './course.styles.css';

export const Course = (props) => {
    return props.courses.map(course=>
         ( <tr key={course.id}> 
                <td>{course.id}</td>
                <td><ModalForm id={course.id} description={course.description}
                url={course.url} types={course.types} topics={course.topics} levels={course.levels}/></td>
                <td>{course.description}</td>
                <td><a href={course.url}>Link to the course</a></td>
                <td>{course.types.join(", ")}</td>
                <td>{course.topics.join(", ")}</td>
                <td>{course.levels.join(", ")}</td>      
           </tr>))
   
}

