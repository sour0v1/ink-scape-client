import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const MyArtCrafts = () => {
    const {user} = useContext(AuthContext);
        // console.log(user.loggedUser)
    const crafts = useLoaderData();
    console.log(crafts)
   const myAddedCrafts = user && crafts.filter(craft => craft.email === user.email);
   console.log(myAddedCrafts);
    // console.log(myAddedCrafts);

};

export default MyArtCrafts;