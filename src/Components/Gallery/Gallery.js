import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import "./Gallery.scss";

// random image call in gallery block
const imageList = Array.from({ length: 29 }, (_, i) => `/img/img-${i + 1}.jpg`);

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);

  // call random image
  // Manually list all images
  const images = [
    require('../../assets/gallery/image1.jpg'),
    require('../../assets/gallery/image2.jpg'),
    require('../../assets/gallery/image3.jpg'),
    require('../../assets/gallery/image4.jpg'),
    require('../../assets/gallery/image5.jpg'),
    require('../../assets/gallery/image6.jpg')
  ];
  // Select a random image on reload
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  // call random image--------------

  //  image preview dialog
  const openDialog = (index) => {
    setCurrentImage(index);
    document.getElementById("dialog").showModal();
  };

  const closeDialog = () => {
    document.getElementById("dialog").close();
    setCurrentImage(null);
  };

  const changeImage = (step) => {
    setCurrentImage((prev) => (prev + step + imageList.length) % imageList.length);
  };
  //  image preview dialog -----------------
  return (
    <section className='msm-mt-5'>
      {/* hero section */}
      <div className="msm-gallery-hero-section" style={{ backgroundImage: `url(${randomImage})` }}>
        <div className="container">
          {/* content */}
          <h1 className="display-5 fw-bold mb-3 text-white">Capturing Moments, <br />Creating Memories</h1>
          <p className="lead msm-text-secondary fs-6">
            Dive into a world of breathtaking photography, <br />
            where every frame tells a unique story.
          </p>
          {/* /content */}
        </div>
      </div>

      {/* hero section */}

      {/* image preview content */}
      <div className="msm-photo-gallery-block-container">
        <main className="container">
          <h1 className="display-6 fw-normal mb-5 text-dark"><span className="msm-text-success">Me</span>
            <span className="msm-text-danger">Tta</span> - A Visual Journey</h1>
          <div className="msm-image-conatiner">

            {/* random image call */}
            {imageList.map((src, index) => (
              <div className="">

                {/* card image */}
                <button key={index} onClick={() => openDialog(index)} className='w-100'>
                  <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" className="msm-photo-gallery-img " />
                </button>
                {/* /card image */}

              </div>
            ))}
            {/* /random image call */}
          </div>
          {/* dialog */}
          <dialog id="dialog" className="dialog">
            {currentImage !== null && (
              <div className="dialogContainer">
                
                {/* random image */}
                <img src={imageList[currentImage]} alt="Preview" className="msm-dialog-img" />

                {/* left to right btn */}
                <div className="controls">

                  {/* Left btn */}
                  <button className="controls-btn preview" onClick={() => changeImage(-1)}>
                    <FontAwesomeIcon icon={faLeftLong} />
                  </button>

                  {/* right btn */}
                  <button className="controls-btn next" onClick={() => changeImage(1)}>
                    <FontAwesomeIcon icon={faRightLong} />
                  </button>
                </div>
                {/* /left to right btn */}

                {/* close button */}
                <button className="closeDialog" onClick={closeDialog}>✖</button>
              </div>
            )}
          </dialog>
          {/* /dialog */}
        </main>
      </div>
      {/* /image preview content */}
    </section>

  );
};

export default Gallery;