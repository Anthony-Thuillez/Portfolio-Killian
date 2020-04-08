import React from "react"
import Img from "gatsby-image"
import SkullVideo from "../../images/skull.mp4"

export default function Project2({images}) {
    return (
        <>
            <div className="info-content">
                <div>
                <p>Client :</p>
                <span>Personal project</span>
                </div>
                <div>
                <p>Year :</p>
                <span>2020</span>
                </div>
            </div>
            <div
                className="video-content"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <div className="video">
                    <video controls>
                        <source src={SkullVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                className="text-content"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <p>
                    Goal create a full 3D horror sequence.
                    <br />
                    A small project in 3 days using redshift for rendering
                </p>
            </div>
            <div className="image-content">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="image"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-delay="50"
                        data-sal-easing="ease-out-cubic"
                    >
                        <Img fluid={image.childImageSharp.fluid} />
                    </div>
                ))}
            </div>
        </>
    )
}