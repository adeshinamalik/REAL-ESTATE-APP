import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Location from './Location'
import '../Style/HomePage.css'
import Popular from './Popular';
import Featured from './Feature';
import Nav from './Nav';
import myImages from './Images';

const HomePage = () => {
    return (
        <div>
            <div class="homePage">
                <Nav />
                <div className='firstchild'>
                    <div className="homePageText" style={{ fontFamily: 'Averta Demo, sans-serif' }}>
                        <div className="homePageText1">Find Your <span>Dream Home</span> <br /> With <span>HomeList</span></div>
                        <p>Discover the Perfect Property for You with HomeList: Your Gateway to Dream Living</p>
                    </div>
                    <div className="homeImage">
                        <img src={myImages.HomePageImage} alt='' />
                    </div>
                </div>
                <div className='proptype'>
                    <div className='propselect'>Buy</div>
                    <div>Rent</div>
                    <div>Short Let</div>
                </div>
                <div className="search-box">
                    <div className="search-location">
                        <label>Location</label>
                        <input type="text" placeholder="e.g Victoria island" />
                    </div>
                    <div className="search-type">
                        <label>Type of Property</label>
                        <input type="text" placeholder="Find a Home" />
                    </div>
                    <div className="search-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.125 7.875H1.875C1.57663 7.875 1.29048 7.75647 1.0795 7.5455C0.868526 7.33452 0.75 7.04837 0.75 6.75C0.75 6.45163 0.868526 6.16548 1.0795 5.9545C1.29048 5.74353 1.57663 5.625 1.875 5.625H22.125C22.4234 5.625 22.7095 5.74353 22.9205 5.9545C23.1315 6.16548 23.25 6.45163 23.25 6.75C23.25 7.04837 23.1315 7.33452 22.9205 7.5455C22.7095 7.75647 22.4234 7.875 22.125 7.875ZM18.375 13.125H5.625C5.32663 13.125 5.04048 13.0065 4.8295 12.7955C4.61853 12.5845 4.5 12.2984 4.5 12C4.5 11.7016 4.61853 11.4155 4.8295 11.2045C5.04048 10.9935 5.32663 10.875 5.625 10.875H18.375C18.6734 10.875 18.9595 10.9935 19.1705 11.2045C19.3815 11.4155 19.5 11.7016 19.5 12C19.5 12.2984 19.3815 12.5845 19.1705 12.7955C18.9595 13.0065 18.6734 13.125 18.375 13.125ZM13.875 18.375H10.125C9.82663 18.375 9.54048 18.2565 9.3295 18.0455C9.11853 17.8345 9 17.5484 9 17.25C9 16.9516 9.11853 16.6655 9.3295 16.4545C9.54048 16.2435 9.82663 16.125 10.125 16.125H13.875C14.1734 16.125 14.4595 16.2435 14.6705 16.4545C14.8815 16.6655 15 16.9516 15 17.25C15 17.5484 14.8815 17.8345 14.6705 18.0455C14.4595 18.2565 14.1734 18.375 13.875 18.375Z" fill="#1E1E1E" />
                        </svg>
                    </div>
                    <div className="search-search">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18.125 17.2413L13.405 12.5213C14.5392 11.1596 15.1048 9.41303 14.9842 7.64495C14.8635 5.87687 14.0658 4.22338 12.757 3.02846C11.4483 1.83354 9.72921 1.18918 7.95747 1.22944C6.18573 1.2697 4.49772 1.99147 3.24458 3.2446C1.99145 4.49773 1.26968 6.18574 1.22942 7.95748C1.18917 9.72922 1.83352 11.4483 3.02844 12.757C4.22337 14.0658 5.87685 14.8635 7.64494 14.9842C9.41302 15.1049 11.1596 14.5393 12.5212 13.405L17.2412 18.125L18.125 17.2413ZM2.5 8.12501C2.5 7.01249 2.8299 5.92496 3.44798 4.99993C4.06606 4.0749 4.94457 3.35393 5.9724 2.92819C7.00024 2.50245 8.13124 2.39105 9.22238 2.60809C10.3135 2.82514 11.3158 3.36087 12.1025 4.14754C12.8891 4.93421 13.4249 5.93649 13.6419 7.02763C13.859 8.11877 13.7476 9.24977 13.3218 10.2776C12.8961 11.3054 12.1751 12.1839 11.2501 12.802C10.3251 13.4201 9.23752 13.75 8.125 13.75C6.63366 13.7484 5.20388 13.1552 4.14935 12.1007C3.09481 11.0461 2.50165 9.61635 2.5 8.12501Z" fill="white" />
                            </svg>
                        </div>
                        <div className='search-text'>Search</div>
                    </div>
                </div>

                <Featured />
                <Location />
                <Popular />
            </div>
            <div className='houseHead'>Explore Cities</div>
            <div className='houseSubHead'>Find Your Neighborhood</div>
        </div>

    )
}


export default HomePage
