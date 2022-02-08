import React from 'react';

const NewsItem =(props)=>{
 
   

    
    let {title,description,newsimg,newsurl,author,pdate}=props;
    let formatteddate=new Date(pdate);
    formatteddate=formatteddate.toUTCString();
    // newsimg means img url
    return (
        <>
        <div className="card">
        <img src={newsimg} width={'100px'} height={'200px'} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{color:'green'}}>{title}</h5>
            <p className="card-text" style={{fontSize:'25px'}}>{description}....</p>
            <p className="card-text" style={{fontSize:'20px'}}><small className="text-muted">{author?`By ${author}` :'Unknown '}on {formatteddate}</small></p>
            <div className="text-center">
            <a href={newsurl} target="blank" className="btn btn-primary btn-sm">View</a>
            </div>
            
        </div>
        
        </div>
        </>
    );
  
}

export default NewsItem;
