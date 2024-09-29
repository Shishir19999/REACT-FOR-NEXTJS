import React,{useState} from 'react'
import BannerItem from './BannerItem';
import Slider from 'react-slick';

export default function Banner({ }) {
  console.log("props")
  const [sliders,setSliders]  =useState(
   [ {
    title:"react",content:"this is  react content"
},
{
    title:"Angular",content:"this is  Angular content"
},
{
    title:"vue",content:"this is  vue content"
}]
  );


  var bannerSliderSettings = {
    dots: true,
    infinite: true,
    autoPlay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
        <Slider {...bannerSliderSettings}>
        {
            sliders.map(item=>{
                return (
                <BannerItem title={item.title} content={item.content}/>
            )})
                } 
        </Slider>
         
    </div>
  )
}
