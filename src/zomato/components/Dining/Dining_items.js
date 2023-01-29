import React from 'react'

function Dining_items() {

    const items = [
        {
            image: "https://b.zmtcdn.com/data/pictures/2/18815432/1dd962c00a1294fc163b84a5b3d83556_featured_v2.jpg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/3/18746733/224260b0f70197ebabe6c8727db8e650_featured_v2.jpg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/2/19021262/d711c8846af1af63918966c36f07778e_featured_v2.jpg",
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
            image: "https://b.zmtcdn.com/data/pictures/6/18812676/36be5da70101b6677fbb033598199b2e_featured_v2.jpeg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/9/19113289/b97d9e0eb2a532a963bfb7d092fde32a_featured_v2.jpg",
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
            image: "https://b.zmtcdn.com/data/pictures/3/19168863/74e04cddb5ca2bf4b6705c7d30a4a8dd_featured_v2.jpg",
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
            image: "https://b.zmtcdn.com/data/pictures/2/18815432/1dd962c00a1294fc163b84a5b3d83556_featured_v2.jpg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/3/18746733/224260b0f70197ebabe6c8727db8e650_featured_v2.jpg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/2/19021262/d711c8846af1af63918966c36f07778e_featured_v2.jpg",
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
            image: "https://b.zmtcdn.com/data/pictures/6/18812676/36be5da70101b6677fbb033598199b2e_featured_v2.jpeg?output-format=webp",
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
            image: "https://b.zmtcdn.com/data/pictures/9/19113289/b97d9e0eb2a532a963bfb7d092fde32a_featured_v2.jpg",
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
            image: "https://b.zmtcdn.com/data/pictures/3/19168863/74e04cddb5ca2bf4b6705c7d30a4a8dd_featured_v2.jpg",
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
                    <p>Best Dining Restaurants near you in Jabalpur, Madhya Pradesh, India</p>
                    <div className="card">
                        {items.map(render)}
                    </div>
            </div>
        </div>
    )
}

export default Dining_items