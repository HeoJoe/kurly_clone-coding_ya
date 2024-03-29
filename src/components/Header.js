import { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

import titleImg from '../assets/img_TitleImg.svg'
import searchBtn1 from '../assets/ic_SearchBtn1.svg'
import searchBtn2 from '../assets/ic_SearchBtn2.svg'
import cancelBtn from '../assets/ic_CancelBtn.svg';
import deliveryBtn from '../assets/ic_DeliveryBtn.svg';
import keepBtn from '../assets/ic_KeepBtn.svg';
import cartBtn from '../assets/ic_CartBtn.svg';
import downBtn from '../assets/ic_DownBtn.png';
import searchImg from '../assets/img_SearchImg.png'
import CategoryImg from '../assets/ic_CategoryImg.svg';
import CategoryList from './CategoryList';

const Header = () => {
    const [isHoverMenu, setIsHoverMenu] = useState(false);
    const [isHoverDelivery, setIsHoverDelivery] = useState(false);
    const [isHoverCategory, setIsHoverCategory] = useState(false);
    const [isHoverSearch, setIsHoverSearch] = useState(false);
    const [search, setSearch] = useState('');
    const [scroll, setScroll] = useState(false);

    const MoreMenuTitle = ['공지사항', '자주하는 질문', '1:1 문의', '대량주문 문의'];
    const ProductMenuTitle = ['신상품', '베스트', '알뜰쇼핑', '특가/혜택'];

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if(window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const onClickRemoveBtn = () => {
        setSearch('');
    };

    const handleClick = () => {
        setIsHoverSearch(true);
    }

    const handleMouseOver = ( name ) => {
        if (name === 'menu') 
            setIsHoverMenu(true);
        if (name === 'deli') 
            setIsHoverDelivery(true);
        if (name === 'cate') 
            setIsHoverCategory(true);
    };

    const handleMouseOut = ( name ) => {
        if (name === 'menu') 
            setIsHoverMenu(false);
        if (name === 'deli') 
            setIsHoverDelivery(false);
        if (name === 'cate') 
            setIsHoverCategory(false);
        if (name === 'search')
            setIsHoverSearch(false);
    };

    return (
        <Container>
            {scroll ? (
                <ScrollHeaderContainer>
                    <HeaderSubBottom>
                        <CategoryContainer
                            onMouseOver={() => handleMouseOver('cate')}
                            onMouseOut={() => handleMouseOut('cate')}>
                            <CateImg src={CategoryImg}/>
                            <CateText> 카테고리 </CateText>
                            {isHoverCategory && <CategoryList/>}
                        </CategoryContainer>
                        <ProductMenuList 
                            scroll={scroll}>
                            {ProductMenuTitle.map((item) => (
                                <ProductMenuItem 
                                scroll={scroll}>
                                    <ProductMenuText> {item} </ProductMenuText>
                                </ProductMenuItem>
                            ))}
                        </ProductMenuList>
                        <ScrollSearchContainer
                            onClick={() => handleClick('search')}
                            onMouseOverCapture={() => handleMouseOut('search')}
                            click={isHoverSearch}>
                            <InputBox
                                type='text'
                                value={search}
                                scroll={scroll}
                                click={isHoverSearch}
                                placeholder='검색어를 입력해주세요'
                                onChange={onChange}/>
                            <CancelBtn 
                                src={cancelBtn}
                                className={search ? 'open' : 'hide'}
                                onClick={onClickRemoveBtn}
                                scroll={scroll}/>
                            <SearchBtn src={searchBtn2}/>
                        </ScrollSearchContainer>
                        <IconContainer
                            scroll={scroll}>
                            <DeliveryKeepIcon 
                                src={deliveryBtn}
                                onMouseMove={() => handleMouseOver('deli')}
                                onMouseOut={() => handleMouseOut('deli')}
                            />
                            <DeliveryMenu 
                                className={isHoverDelivery ? 'open' : 'close'}
                                onMouseOver={() => handleMouseOver('deli')}
                                onMouseOut={() => handleMouseOut('deli')}
                                close={isHoverDelivery}>
                                <DeliveryArea> 
                                    <DeliverySubArea>
                                        <DeliveryTextArea>
                                            <DeliveryFirstText> 배송지를 등록</DeliveryFirstText>
                                            하고
                                            <br/>
                                            <DeliverySecText> 구매 가능한 상품을 확인하세요! </DeliverySecText>
                                        </DeliveryTextArea>
                                        <DeliveryBtnArea>
                                            <DeliveryLoginBtn> 로그인 </DeliveryLoginBtn>
                                            <DeliveryAddressBtn> 
                                                <AddressImg src={searchImg}/>
                                                주소 검색 
                                            </DeliveryAddressBtn>
                                        </DeliveryBtnArea>
                                    </DeliverySubArea>
                                </DeliveryArea>
                            </DeliveryMenu>
                            <DeliveryKeepIcon src={keepBtn}/>
                            <CartIcon src={cartBtn}/>
                        </IconContainer>
                    </HeaderSubBottom>
                </ScrollHeaderContainer>
            ) : (
                <>
                    <SubContainer>
                        <HeaderTop>
                            <SubMenu style={{ color: `${palette.main}` }}> 회원가입 </SubMenu>
                            <GrayLine/>
                            <SubMenu> 로그인 </SubMenu>
                            <GrayLine/>
                            <CustomerService>
                                <SubMenu> 고객센터 </SubMenu>
                                <MoreBtn 
                                    onMouseOver={() => handleMouseOver('menu')}
                                    onMouseOut={() => handleMouseOut('menu')}
                                    src={downBtn}/>
                                <MoreMenuList 
                                    className={isHoverMenu ? 'open' : 'close'}
                                    close={isHoverMenu}>
                                    {MoreMenuTitle.map((item) => (
                                        <MoreMenu> {item} </MoreMenu>
                                    ))}
                                </MoreMenuList>
                            </CustomerService>
                        </HeaderTop>
                        <HeaderMid>
                            <SubHeaderMid>
                                <TitleImg src={titleImg}/>
                                <TitleText> 마켓컬리 </TitleText>
                            </SubHeaderMid>
                            <SearchContainer>
                                <InputBox
                                    type='text'
                                    value={search}
                                    placeholder='검색어를 입력해주세요'
                                    onChange={onChange}
                                />
                                <CancelBtn 
                                    src={cancelBtn}
                                    className={search ? 'open' : 'hide'}
                                    onClick={onClickRemoveBtn}
                                />
                                <SearchBtn src={searchBtn1}/>
                            </SearchContainer>
                            <IconContainer>
                                <DeliveryKeepIcon 
                                    src={deliveryBtn}
                                    onMouseMove={() => handleMouseOver('deli')}
                                    onMouseOut={() => handleMouseOut('deli')}
                                />
                                <DeliveryMenu 
                                    className={isHoverDelivery ? 'open' : 'close'}
                                    onMouseOver={() => handleMouseOver('deli')}
                                    onMouseOut={() => handleMouseOut('deli')}
                                    close={isHoverDelivery}>
                                        <DeliveryArea> 
                                            <DeliverySubArea>
                                                <DeliveryTextArea>
                                                    <DeliveryFirstText> 배송지를 등록</DeliveryFirstText>
                                                    하고
                                                    <br/>
                                                    <DeliverySecText> 구매 가능한 상품을 확인하세요! </DeliverySecText>
                                                </DeliveryTextArea>
                                                <DeliveryBtnArea>
                                                    <DeliveryLoginBtn> 로그인 </DeliveryLoginBtn>
                                                    <DeliveryAddressBtn> 
                                                        <AddressImg src={searchImg}/>
                                                        주소 검색 
                                                    </DeliveryAddressBtn>
                                                </DeliveryBtnArea>
                                            </DeliverySubArea>
                                        </DeliveryArea>
                                </DeliveryMenu>
                                <DeliveryKeepIcon src={keepBtn}/>
                                <CartIcon src={cartBtn}/>
                            </IconContainer>
                        </HeaderMid>
                    </SubContainer>
                    <HeaderBottom>
                        <HeaderSubBottom>
                            <CategoryContainer
                                onMouseOver={() => handleMouseOver('cate')}
                                onMouseOut={() => handleMouseOut('cate')}>
                                <CateImg src={CategoryImg}/>
                                <CateText> 카테고리 </CateText>
                                {isHoverCategory && <CategoryList/>}
                            </CategoryContainer>
                            <ProductMenuList>
                                {ProductMenuTitle.map((item) => (
                                    <ProductMenuItem>
                                        <ProductMenuText> {item} </ProductMenuText>
                                    </ProductMenuItem>
                                ))}
                            </ProductMenuList>
                            <DeliveryNotice>
                                <NoticeText> 샛별・하루 </NoticeText> &nbsp; 배송안내
                            </DeliveryNotice>
                        </HeaderSubBottom>
                    </HeaderBottom>
                </>
            )}
        </Container>
    )
}
const Container = styled.div`
    position: sticky;
    top: 0px;
    z-index: 999;
    box-sizing: border-box;
    margin: 0;
    background-color: ${palette.white};
`;
const SubContainer = styled.div`
    position: relative;
    max-width: 1050px;
    width: 100%;
    height: 100px;
    margin: 0px auto;
    letter-spacing: -0.3px;
`;
// 헤더 최상단
const HeaderTop = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    align-items: center;
    font-size: 12.5px;
    z-index: 320;
`;
// 회원가입-로그인-고객센터
const SubMenu = styled.div`
    color: ${palette.sub};
    display: block;
    cursor: pointer;
`;
const GrayLine = styled.div`
    width: 1px;
    height: 13px;
    margin: 0px 12px;
    background-color: rgb(217, 217, 217);
`;
const CustomerService = styled.div`
    line-height: 35px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MoreBtn = styled.img`
    width: 8px;
    height: 5px;
    background-size: cover;
    background-position: center center;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 1px;
    cursor: pointer;
`;
const MoreMenuList = styled.div`
    display: ${(props) => (props.className === 'open' ? 'block' : 'none')};
    position: absolute;
    width: 130px;
    top: 34px;
    right: 0px;
    padding: 3px 9px;
    border: 1.5px solid #D9D9D9;
    background-color: ${palette.white};
    z-index: 100;
`;
const MoreMenu = styled.div`
    display: block;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
`;
// 헤더 중간 부분
const HeaderMid = styled.div`
    height: 100px;
    padding-top: 36px;
`;
const SubHeaderMid = styled.div`
    display: flex;
    align-items: center;
    height: 63px;
`;
const TitleImg = styled.img`
    flex: 0 0 82px;
`;
const TitleText = styled.p`
    font-weight: 500;
    color: ${palette.main};

    flex-shrink: 0;
    margin-left: 20px;
    font-size: 19px;
    line-height: 1.33;
    cursor: pointer;
`;
// 검색창
const SearchContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    top: 45px;
    left: 325px;
    width: 400px;
    height: 48px;
    padding-left: 14px;
    border: 1.5px solid ${palette.main};
    border-radius: 6px;
    background-color: ${palette.white};
    box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
`;
const InputBox = styled.input`
    width: 200px;
    border: none;
    outline: none;      // 파란선 없애기
    margin-top: 2px;
    background-color: ${(props) => (
        props.click ? '${palette.white}' :
        (props.scroll ? 'rgb(247, 247, 247)' : 'none')
    )};
    font-size: ${(props) => props.scroll ? '15px' : '17px'};
    letter-spacing: -0.33px;
`;
const CancelBtn = styled.img`
    position: absolute;
    display: ${(props) => (props.className === 'open' ? 'block' : 'none')};
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    right: 47px;
    margin-left: 20px;
    margin-right: ${(props) => props.scroll ? '155px' : 'none'};
    cursor: pointer;
`;
const SearchBtn = styled.img`
    position: relative;
    margin-left: -30px;
    background: 0px 0px no-repeat;
    cursor: pointer;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: -6px;
    top: ${(props) => props.scroll ? '10px' : '49px'};
`;
const DeliveryKeepIcon = styled.img`
    width: 36px;
    height: 36px;
    margin-right: 20px;
    background: 50% 50% no-repeat;
    cursor: pointer;
`;
const DeliveryMenu = styled.div`
    display: ${(props) => (props.className === 'open' ? 'block' : 'none')};
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    transform: translate3d(18px, 36px, 0px);
    z-index: 400;
`;
const DeliveryArea = styled.div`
    opacity: 1;
    transition: opacity 1ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const DeliverySubArea = styled.div`
    position: absolute;
    right: -124px;
    top: 14px;
    /* width: 267px; */
    width: 232px;
    padding: 18px 17px 17px;
    border: 1px solid rgb(221, 221, 221);
    background-color: ${palette.white};

    ::before {
        content: "";
        position: absolute;
        left: 125px;
        top: -20px;
        width: 36px;
        height: 36px;
    }
`;
const DeliveryTextArea = styled.strong`
    font-weight: 500;
    font-size: 16px;
    /* color: rgb(51, 51, 51); */
    line-height: 24px;
    letter-spacing: 0.32px;
`;
const DeliveryFirstText = styled.strong`
    font-weight: 400;
    color: ${palette.main};
`;
const DeliverySecText = styled.div``;
const DeliveryBtnArea = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 11px;
`;
const DeliveryLoginBtn = styled.button`
    white-space: nowrap;
    display: block;
    padding: 0px 10px;
    padding-bottom: 1px;
    text-align: center;
    overflow: hidden;
    /* width: 110px; */
    width: 80px;
    height: 36px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: ${palette.white};
    border: 1px solid ${palette.main};
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
`;
const DeliveryAddressBtn = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 145px;
    height: 36px;
    border-radius: 3px;
    color: ${palette.white};
    background-color: ${palette.main};
    border: 0px none;
    font-weight: 500;
    font-size: 12px;
`;
const AddressImg = styled.img`
    width: 20px;
    height: 20px;
    margin-left: -9px;
    vertical-align: -5px;
    cursor: pointer;
`;
const CartIcon = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;
`;
// 헤더 최하단
const HeaderBottom = styled.div`
    min-width: 1050px;
    width: 100%;
    letter-spacing: -0.3px;
    background-color: ${palette.white};
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
    z-index: 300;
`;
const HeaderSubBottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1050px;
    height: 56px;
    margin: 0px auto;
`;
const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;
const CateImg = styled.img`
    width: 20px;
    height: 14px;
    margin-bottom: 3px;
    margin-right: 14px;
`;
const CateText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
`;
const ProductMenuList = styled.ul`
    display: flex;
    margin: 0 auto;
    margin-left: ${(props) => props.scroll ? '-10px' : 'none'};
`;
const ProductMenuItem = styled.li`
    display: flex;
    justify-content: center;
    width: 150px;
    height: 55px;
    line-height: 20px;
    text-align: center;
    margin-right: ${(props) => props.scroll ? '-25px' : 'none'};
`;
const ProductMenuText = styled.p`
    height: fit-content;
    font-size: 18px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    cursor: pointer;
`;
const DeliveryNotice = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    padding: 1px 14px 0 14px;
    border-radius: 18px;
    border: 1.5px solid rgb(238, 238, 238);
    color: rgb(102, 102, 102);
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.32px;
`;
const NoticeText = styled.p`
    font-weight: 500;
    color: ${palette.main};
`;
// 스크롤 시 헤더 상태
const ScrollHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0px auto;
    letter-spacing: -0.3px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;
`;
const ScrollSearchContainer = styled.div`
    display: flex;
    /* position: absolute; */
    align-items: center;
    justify-content: space-between;
    width: 220px;
    height: 35px;
    margin-right: 160px;
    padding-left: 14px;
    /* border: 1.5px solid rgb(247, 247, 247); */
    border-radius: 6px;
    background-color: ${(props) => props.click ? '${palette.white}' : 'rgb(247, 247, 247)'};
    box-shadow: rgb(247, 247, 247) 0px 0px 0px 1px inset;
`;
export default Header;