import React, { useEffect, useState } from 'react'
import Header from './Heading';
import Loader from './Loader';

function Card() {


    const [newsData, setNewsData] =  useState([]);
    const [category, setCategory] = useState("fifa");
    const [isLoading, setIsLoading] = useState(false);

    const getApiData = async (cat) => {
        setIsLoading(true); 
        try{
            cat = cat.toLowerCase();
            // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&${cat}&apiKey=0a46e54f3a794d1d80f9828f9922228b`);
            const response = await fetch(`https://newsapi.org/v2/everything?q=${cat}&from=2023-01-23&to=2023-01-23&sortBy=popularity&apiKey=0a46e54f3a794d1d80f9828f9922228b`);
            const data = await response.json();
            setNewsData(data.articles);
            // console.log(data.articles)
        }catch(e){
            console.log(e)
        }
        setIsLoading(false)
    }

    useEffect(() =>{
        getApiData(category);
    },[category]);

    // const newsData = [
    //     {
    //         img: "https://images.hindustantimes.com/img/2023/01/23/148x111/PTI12-28-2022-000290B-0_1674462088439_1674462088439_1674462108440_1674462108440.jpg",
    //         source: "The Verge",
    //         title: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         des: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit 'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         cat: "Politics",
    //     },
    //     {
    //         img: "https://images.hindustantimes.com/img/2023/01/23/148x111/PTI12-28-2022-000290B-0_1674462088439_1674462088439_1674462108440_1674462108440.jpg",
    //         source: "The sport",
    //         title: "'1 Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         des: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit 'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         cat: "Sports",
    //     },
    //     {
    //         img: "https://images.hindustantimes.com/img/2023/01/23/148x111/PTI12-28-2022-000290B-0_1674462088439_1674462088439_1674462108440_1674462108440.jpg",
    //         source: "The Technology",
    //         title: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         des: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit 'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         cat: "Technology",
    //     },
    //     {
    //         img: "https://images.hindustantimes.com/img/2023/01/23/148x111/PTI12-28-2022-000290B-0_1674462088439_1674462088439_1674462108440_1674462108440.jpg",
    //         source: "The Science",
    //         title: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         des: "'Will never forget people's love': Maharashtra governor Koshyari offers to quit 'Will never forget people's love': Maharashtra governor Koshyari offers to quit",
    //         cat: "Science",
    //     },
    // ]

    const renderCard = (props, index) => {
        return (
            
            <div className="card" key={index}>
                
                {props.cat}
                <div className="card-image">
                    <img src={props.urlToImage} alt="something went wrong" />
                </div>
                <div className='details'>
                    <p>{props.author}</p>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    {/* <a href={props.url} target="_blank">Read More -{'>'}</a> */}
                    <button onClick={() => window.open(props.url)}>Read More -{'>'}</button>
                </div>
               
            </div>
        )
    }

    function updateCategory(cat) {
        setCategory(cat);
    }

    function searchCall(val){
        setCategory(val);
    }

    return (
        <>

            <Header name={updateCategory} searchCall={searchCall} />
            
            <div className='card-container'>
                {isLoading ? <Loader /> : newsData.map(renderCard)}
                
                {/* {isLoading ? <Loader /> : newsData.filter(function (news) {
                    // console.log("under"+news.cat);
                    return news.cat === category;
                }).map(renderCard)
                } */}
            </div>
        </>
    )
}

export default Card