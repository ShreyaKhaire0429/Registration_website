// File: src/components/About/About.js
import React from 'react';
import './Home.scss';
import heroGalleryOne from '../../assets/Hero-Gallery/img-1.jpg';
import heroGalleryTwo from '../../assets/Hero-Gallery/img-2.jpg';
import heroGalleryThree from '../../assets/Hero-Gallery/img-3.jpg';
import heroGalleryFour from '../../assets/Hero-Gallery/img-4.jpg';
import heroGalleryFive from '../../assets/Hero-Gallery/img-5.jpg';
import heroGallerySix from '../../assets/Hero-Gallery/img-6.jpg';
import heroGallerySeven from '../../assets/Hero-Gallery/img-7.jpg';
import heroGalleryEight from '../../assets/Hero-Gallery/img-8.jpg';
import heroGalleryNine from '../../assets/Hero-Gallery/img-9.jpg';
import heroGalleryTen from '../../assets/Hero-Gallery/img-10.jpg';
import heroGalleryEleven from '../../assets/Hero-Gallery/img-11.jpg';
import heroGalleryTwelve from '../../assets/Hero-Gallery/img-12.jpg';
import heroGalleryThirteen from '../../assets/Hero-Gallery/img-13.jpg';
import heroGalleryFourteen from '../../assets/Hero-Gallery/img-14.jpg';
import heroGalleryfifteen from '../../assets/Hero-Gallery/img-15.jpg';
import heroGallerySixteen from '../../assets/Hero-Gallery/img-16.jpg';
import heroGalleryseventeen from '../../assets/Hero-Gallery/img-17.jpg';



const HeroGallery = () => {
    return (
        <div className="container">
            <section class="msm-hero">
            <div class="wrap-content">
                    <h1 class="display-6 fw-normal text-dark">Discover the Beauty of Every Moment</h1>
                    <p class=" text-dark fw-normal">Explore a gallery filled with energy, creativity, and breathtaking compositions.</p>
                    <a class="btn-primary mb-5" href="/gallery">View Gallery</a>
                </div>
                <div class="wrap-images">
                    <div class="row-images">
                        <img src={heroGalleryOne} loading="lazy" />
                        <img src={heroGalleryTwo} loading="lazy" />
                        <img src={heroGalleryThree} loading="lazy" />
                        <img src={heroGalleryFour} loading="lazy" />
                        <img src={heroGalleryFive} loading="lazy" />
                        <img src={heroGallerySix} loading="lazy" />
                        <img src={heroGallerySeven} loading="lazy" />
                        <img src={heroGalleryEight} loading="lazy" />
                        <img src={heroGalleryNine} loading="lazy" />
                        <img src={heroGalleryTen} loading="lazy" />
                        <img src={heroGalleryEleven} loading="lazy" />
                        <img src={heroGalleryTwelve} loading="lazy" />
                        <img src={heroGalleryThirteen} loading="lazy" />
                        <img src={heroGalleryFourteen} loading="lazy" />
                        <img src={heroGalleryfifteen} loading="lazy" />
                        <img src={heroGallerySixteen} loading="lazy" />
                        <img src={heroGalleryseventeen} loading="lazy" />

                    </div>
                    <div class="row-images">
                        <img src={heroGalleryOne} loading="lazy" />
                        <img src={heroGalleryTwo} loading="lazy" />
                        <img src={heroGalleryThree} loading="lazy" />
                        <img src={heroGalleryFour} loading="lazy" />
                        <img src={heroGalleryFive} loading="lazy" />
                        <img src={heroGallerySix} loading="lazy" />
                        <img src={heroGallerySeven} loading="lazy" />
                        <img src={heroGalleryEight} loading="lazy" />
                        <img src={heroGalleryNine} loading="lazy" />
                        <img src={heroGalleryTen} loading="lazy" />
                        <img src={heroGalleryEleven} loading="lazy" />
                        <img src={heroGalleryTwelve} loading="lazy" />
                        <img src={heroGalleryThirteen} loading="lazy" />
                        <img src={heroGalleryFourteen} loading="lazy" />
                        <img src={heroGalleryfifteen} loading="lazy" />
                        <img src={heroGallerySixteen} loading="lazy" />
                        <img src={heroGalleryseventeen} loading="lazy" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HeroGallery;
