import styled from "styled-components";
import palette from "../styles/palette";

import cartImg from '../assets/ic_CartBtn.svg';
import reviewImg from '../assets/ic_ReviewImg.svg';

const ProductItem = ({ img, title, costPrice, discountRate, review }) => {
    const AddComma = (price) => {
        const returnPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return returnPrice;
    }

    const FormattPrice = () => {
        const salesPrice = costPrice * (1 - discountRate / 100);
        const returnPrice = Math.floor(salesPrice / 100) * 100;
        return returnPrice;
    }

    return (
        <Container>
            <ProductImg src={img}/>
            <KeepBtnContainer>
                <CartImg src={cartImg}/>
                담기
            </KeepBtnContainer>
            <ProductInfoContainer>
                <ProductTitleText> {title} </ProductTitleText>
                {discountRate != 0 ? (
                    <ProductPriceContainer>
                    <CostPriceInfo> {AddComma(costPrice)}원 </CostPriceInfo>
                    <DiscountInfo>
                        <DiscountRate> {discountRate}% </DiscountRate>
                        <SalesPrice> {AddComma(FormattPrice())}원 </SalesPrice>
                    </DiscountInfo>
                    </ProductPriceContainer>
                ) : (
                    <SalesPrice> {AddComma(FormattPrice())}원 </SalesPrice>
                )}
                <ProductReviewContainer>
                    <ReviewIcon src={reviewImg}/>
                    <ReviewInfo> {review} </ReviewInfo>
                </ProductReviewContainer>
            </ProductInfoContainer>
        </Container>
    );
};
const Container = styled.div`
    width: 249px;
    margin-right: 18px;
    display: block;
    color: rgb(51, 51, 51);
    cursor: pointer;
`;
const ProductImg = styled.img`
    width: 249px;
    height: 320px;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    opacity: 1;
    border: 0px;
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    /* position: absolute; */
    inset: 0px;
`;
const KeepBtnContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    margin-top: 6px;
    padding-bottom: 1px;
    font-size: 16px;
    line-height: 29px;
    background-color: ${palette.white};
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;
    cursor: pointer;
`;
const CartImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`;
const ProductInfoContainer = styled.div`
    position: relative;
    padding: 8px 10px 0px 0px;
`;
const ProductTitleText = styled.h3`
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    letter-spacing: normal;
    word-break: break-word;
    overflow-wrap: break-word;
`;
const ProductPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
`;
const CostPriceInfo = styled.div`
    display: block;
    padding-top: 2px;
    color: rgb(181, 181, 181);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-decoration: line-through;
`;
const DiscountInfo = styled.div`
    display: flex;
    flex-direction: row;
`;
const DiscountRate = styled.div`
    margin-right: 7px;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
    color: rgb(250, 98, 47);
`;
const SalesPrice = styled.div`
    font-size: 16px;
    font-weight: 800;
    line-height: 1.5;
    white-space: nowrap;
`;
const ProductReviewContainer = styled.div`
    padding-top: 8px;
    font-size: 13px;
    line-height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const ReviewIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: -2px;
`;
const ReviewInfo = styled.div`
    padding-left: 2px;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    color: rgb(153, 153, 153);
`;
export default ProductItem;