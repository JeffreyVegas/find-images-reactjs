import React from 'react'


const Error = ({mensaje}) => {
    return ( 
       // <div className="container">
            <p className="my-3 p-4 text-center alert alert-danger">{mensaje}</p>
        //</div>
     );
}
 
export default Error;