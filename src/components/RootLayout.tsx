import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import {Categories} from "./categories/Categories";


// тестовые данные
const categories = [
    {categoryName: "Health", color: "#83ea6d"},
    {categoryName: "Music", color: "#84b2f4"},
    {categoryName: "Lifestyle", color: "#ffd001"},
    {categoryName: "Health", color: "#fa0899"},
    {categoryName: "Technology", color: "#c4c5fe"},
    {categoryName: "Nature", color: "#48dfd4"},
]
export const RootLayout = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__page">
                <Header/>

                <main className="main-content">
                    <div className="main-content__container">
                        <Outlet/>

                        <aside className="main-content__right sidebar">
                            <h2>Side Bar</h2>
                            <Categories categories={categories}/>
                        </aside>


                    </div>
                </main>

                <Footer/>
            </div>
        </div>
    );
};