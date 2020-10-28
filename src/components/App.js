import React, { useEffect, useState } from 'react';
import InputAuthor from './InputAhtor'
import AuthorList from './AuthorList'
import axios from 'axios'

const App =()=>{

    const [authors, setAuthors] = useState([]);
    const [newAuthor, setNewAuthor] = useState({});
    
    useEffect(()=>{
        axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
        .then(({data})=>{
            setAuthors(data)
        })
    },[newAuthor])
    
    const handleInformation=(info)=>{
       let age = parseInt(info.age);
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/',{
            name: info.name,
            last_name: info.lastName,
            nacionalidad: info.nationality,
            biography: info.biography,
            gender: info.gender,
            age: age

        }).then(({data, status, statusText}) =>{
            setNewAuthor(data);
            if(status>200 &&status<300){
                console.log(data)
                alert(`id: ${data.id} ${statusText} ` )
            }
        }).catch(err =>{
            console.log(err);
        })
    }

    return (
        <div className="ui container">
            <InputAuthor newAuthor={handleInformation}/>
            <hr/>
            <AuthorList authors ={authors}/>
        </div>
    )

}

export default App;