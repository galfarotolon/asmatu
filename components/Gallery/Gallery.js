'use client'
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { photos } from "./photos";

export default function Gallery() {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(index) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: index + 1 // increment index by 1 to match slide numbering
        });
    }

    return (
        <>
            <div className="fn_cs_gallery_grid fn_cs_lightgallery">
                <div className="inner">
                    <ul>
                        {photos.map((data, index) => (
                            <li key={index
                            }>
                                <div className="item lightbox" onClick={() => openLightboxOnSlide(index)}>
                                    <div className="abs_img" style={{ backgroundImage: `url(${data.src})` }} />
                                    <img src={data.src} style={{ 'maxHeight': '155px' }} alt="" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={photos.map((data) => data.src)}
                slide={lightboxController.slide}
            />
        </>
    )
}
