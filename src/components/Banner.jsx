import { useState } from 'react';
import BannerItem from './BannerItem';
import SlickModule from 'react-slick';

// react-slick is CommonJS (`exports.default`); Vite 8/Rolldown may hand back the namespace object.
const Slider = SlickModule.default ?? SlickModule;

export default function Banner() {
  const [sliders] = useState([
    {
      title: 'react',
      content: 'this is  react content',
    },
    {
      title: 'Angular',
      content: 'this is  Angular content',
    },
    {
      title: 'vue',
      content: 'this is  vue content',
    },
    {
      title: 'react',
      content: 'this is  react content',
    },
    {
      title: 'Angular',
      content: 'this is  Angular content',
    },
    {
      title: 'vue',
      content: 'this is  vue content',
    },
  ]);

  var bannerSliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...bannerSliderSettings}>
        {sliders.map((item, index) => {
          return <BannerItem key={index} title={item.title} content={item.content} />;
        })}
      </Slider>
    </div>
  );
}
