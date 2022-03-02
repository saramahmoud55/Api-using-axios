import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {

    const [Loading, setLoading] = useState(false);
    const [ListOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        setLoading(true);
        const data = async () => {
            try {
                const usersList = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(usersList.data);
                setLoading(false);
            }
            catch (error) {
                setListOfUsers([]);
            }
    
        };
        data();
      
    }, [])
    const User = ({ user }) => {
        const { name, email } = user;
        return (
          <div>
               <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{email}</p></div>
            </div>
        );
      };
    return Loading ?(
    <div>
        ....Loading
    </div>):(
        <div className='col-md-4 my-3 '>
            {ListOfUsers.map((user,key)=>( 
                <User user={user} key={key}/>
        
        ))}
        </div>
    )
}
