import React from 'react'

const AuthorList =({authors})=>{

    const renderAuthors=()=>{
        const rendered= authors.map(author =>{
            return(<tr key={author.id}>
                <td>{author.id}</td> 
                <td> {author.name} </td> 
                <td>{author.last_name} </td>
            </tr>)
        })
        return rendered;
    }
    console.log(renderAuthors().length)

    return (
      
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody className={
          renderAuthors().length === 0 ? "ui center active inline loader" : ""
        }>
          {renderAuthors()}
          </tbody>
        </table>

        
      </div>
    );
}

export default AuthorList;