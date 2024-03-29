import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/swiper.css';
// import 'swiper/css/navigation.css';
// import 'swiper/css/pagination.css';
// import SwiperCore, { Navigation, Pagination } from 'swiper';

import palette from "../styles/palette";

import banner1 from '../assets/BannerImg/banner1.jpg';
import banner2 from '../assets/BannerImg/banner2.jpg';
import banner3 from '../assets/BannerImg/banner3.jpg';
import banner4 from '../assets/BannerImg/banner4.jpg';
import ArrowBtn from '../assets/ic_ArrowBtn.svg';

const AdBanner = () => {
const [swiper, setSwiper] = useState(null);
const [page, setPage] = useState(1);

// SwiperCore.use([Navigation, Pagination]);

const BannerClick = (direction) => {
    if (direction === 'left' && page > 1)
        setPage(page - 1);
    if (direction === 'right' && page < 4)
        setPage(page + 1);
}

const swiperParams = {
    navigation: true,
    onSwiper: setSwiper,
    onSlideChange: (e) => setPage(e.activeIndex),
}
    return (
        <Container>
            <Swiper
                {...swiperParams}
                ref={setSwiper}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{draggable: false}}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 2000}}>
                <SwiperSlide>
                    <SlideImg src={banner1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideImg src={banner4}/>
                </SwiperSlide>
            </Swiper>
            <LeftBtn 
                src={ArrowBtn}
                onClick={() => BannerClick('left')}
            />
            <RighttBtn 
                src={ArrowBtn}
                onClick={() => BannerClick('right')}
            />
            <SequenceArea>
                {page} / 4
            </SequenceArea>
        </Container>
    )
}
const Container = styled.div`
    box-sizing: content-box;
    position: relative;
    height: 370px;
    width: 100%;
    margin: 0px auto 40px;
    overflow: hidden;
    list-style: none;
    padding: 0;
    touch-action: pan-y;
`;
const SlideImg = styled.img`
    width: 100%;
    height: 370px;
    object-fit: cover;
    cursor: pointer;
`;
const LeftBtn = styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 50%;
    margin: auto 590px auto 0px;
    z-index: 10;
    width: 52px;
    height: 52px;
    transition: all 0.5s ease 0s;
    opacity: 1;
    transform: rotate(180deg);
    cursor: pointer;
`;
const RighttBtn = styled.img`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 50%;
    margin: auto 0px auto 590px;
    z-index: 10;
    width: 52px;
    height: 52px;
    transition: all 0.5s ease 0s;
    opacity: 1;
    transform: rotate(0deg);
    cursor: pointer;
`;
const SequenceArea = styled.div`
    position: absolute;
    color: ${palette.white};
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 23px;
    right: 330px;
    bottom: 20px;
    line-height: 23px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 12px;
`;
export default AdBanner;