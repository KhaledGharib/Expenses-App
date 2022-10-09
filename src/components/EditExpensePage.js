import React from "react";
import { useLocation, useParams } from 'react-router-dom';         // import this hook
 
const EditExpensePage = () => {
    let location = useLocation();
    const {id} = useParams();            // define the Hook here
  console.log(location)


 
    return (
        <div>
            Editing the expense with id of {id}.
        </div>
    )
}
 
export default EditExpensePage