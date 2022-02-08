import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';



const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
 



    const capp = (strin) => {
        return strin.charAt(0).toUpperCase() + strin.slice(1);
    }


    const updatenews = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(url)

        let pdata = await data.json()
        setarticles(pdata.articles)
        settotalResults(pdata.totalResults)
        setloading(false)



    }


    const handlenextbtn = async () => {
       
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(url)

        let pdata = await data.json()
        setarticles(pdata.articles)
        settotalResults(pdata.totalResults)
        setloading(false)
        setpage(page + 1)
    }
    const handleprevbtn = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page-1}&pageSize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(url)

        let pdata = await data.json()
        setarticles(pdata.articles)
        settotalResults(pdata.totalResults)
        setloading(false)

        setpage(page - 1)
        

    }
    useEffect(() => {
        updatenews()
           document.title=`Newsify | ${capp(props.category)}`


    }, []);




    return (
        <div className='container my-3'>
            <h1 className='middle' style={{ textAlign: 'center', margin: '50px' }}> Top Headlines on {capp(props.category)}</h1><br />
            {loading && <Spinner />}

            {!loading && <div className="row ">
                {articles.map((el) => {
                    return <div className="col-md-4" key={el.newsurl}>
                        <h1><NewsItem title={el.title} description={el.description ? el.description.slice(0, 88) : ""}
                            newsimg={el.urlToImage ? el.urlToImage : "https://images.wsj.net/im-479937/social"}
                            newsurl={el.url ? el.url : ""} author={el.author} pdate={el.publishedAt} /></h1>
                    </div>

                })}
                <br /><br /><br />
                <div className="container d-flex justify-content-between mt-500">
                    <button disabled={page <= 1} type="button" className="btn btn-success" onClick={handleprevbtn}>&laquo; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pagesize)} type="button" className="btn btn-success" onClick={handlenextbtn}>Next  &raquo;</button>
                </div><br /><br />





            </div>}


        </div>
    );

}
News.defaultProps = {
    country: 'in',
    pagesize: 5,
    category: 'science'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News;

