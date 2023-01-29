import React from 'react'
import './delivery.css';
function Delivery_items() {

    const items = [
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/8/19655898/bc47a4ee2300af6746f72566966d83e9_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/3/18746753/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/3/18746753/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/8/19655898/bc47a4ee2300af6746f72566966d83e9_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/8/19655898/bc47a4ee2300af6746f72566966d83e9_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/3/18746753/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/3/18746753/c708fcdb888abd4f493c0fdc67ac766e_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg",
            title: "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "3.7",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
        {
            image: "https://b.zmtcdn.com/data/pictures/8/19655898/bc47a4ee2300af6746f72566966d83e9_o2_featured_v2.jpg?output-format=webp",
            title: "Pizza Hut",
            food_type: "Pizza, Fast Food, Desser Pizza , Fast",
            price: "150 for one",
            rating: "3.9",
            other_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "50% OFF uo to 100",
        },
    ]

    function render(props){


        return (
            <div className='card-item'>
                
                <div className="image">
                    <p className='offer pos'>{props.offer}</p>
                    <p className='time pos'>{props.time}</p>
                    <img src={props.image} alt="" />
                </div>
                <div className="card-details">
                    <p className='title'>{props.title}</p>
                    <p className='rating'>{props.rating} &#9733;</p>
                    <p className="des">{props.food_type.slice(0, 23)}...</p>
                    <p className="price">&#8377;{props.price}</p>
                </div>
                <hr />
                <div className="other">
                    <img src={props.other_img} alt="" />
                    <p>{props.other_text.slice(0, 50)}</p>
                    <img src={props.other_hike_logo} alt="" />
                </div>

            </div>
        )
    }


    return (
        <div>
            <div className="top-food-head mt5">
                    <p>Delivery Restaurants in Jabalpur, Madhya Pradesh, India</p>
                    <div className="card">
                        {items.map(render)}
                    </div>
            </div>
        </div>
    )
}

export default Delivery_items