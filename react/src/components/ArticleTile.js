import React from 'react';
import { Link } from 'react-router';



const ArticleTile = ({id, title, body}) => {
  return(
    <div className="article-tile">
      <hr/>
      <p>< Link to ={`/articles/${id}`}>{title}</Link></p>

    </div>
  )
}

export default ArticleTile;
