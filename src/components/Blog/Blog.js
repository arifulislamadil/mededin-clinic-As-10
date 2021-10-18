import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="container mt-4 mb-4">
            <div className=" text-center">
                <p className="sub-title"><span>----</span>Blog<span>----</span></p>
                <h3 className="fw-bold">Blogs & Events</h3>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img1.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    ---<span>January 12 2019 | By Admin</span>
                    <h5 className="blog-content">Finding meaning in the intersection
                        between marriage and medicine...</h5>
                </div>
                <div className="col-md-3 mt-4">
                    <a href="#" className="blog-btn">READ MORE</a>
                </div>
            </div>


            <div className="row mt-3">
                <div className="col-md-3">
                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img2.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    ---<span>Aprial 12 2020 | By Admin</span>
                    <h5 className="blog-content">Skin care import for young people and child it's given them better feelings and the feel good...</h5>
                </div>
                <div className="col-md-3 mt-4">
                    <a href="#" className="blog-btn">READ MORE</a>
                </div>
            </div>



            <div className="row mt-3">
                <div className="col-md-3">
                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img3.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    ---<span>March 10 2020 | By Admin</span>
                    <h5 className="blog-content">Covid-19 incress lots of tension and lots pressure among to yourng generations and they think....</h5>
                </div>
                <div className="col-md-3 mt-4">
                    <a href="#" className="blog-btn">READ MORE</a>
                </div>
            </div>


            <div className="row mt-3">
                <div className="col-md-3">
                    <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img4.jpg" alt="" />
                </div>
                <div className="col-md-6">
                    ---<span>Februaray 22 2019 | By Admin</span>
                    <h5 className="blog-content">Care your healt when you are getting older.lots of artical published....</h5>
                </div>
                <div className="col-md-3 mt-4">
                    <a href="#" className="blog-btn">READ MORE</a>
                </div>
            </div>

        </div>
    );
};

export default Blog;