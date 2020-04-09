import React from "react"
import Img from "gatsby-image"

export default function Project3({images}) {
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
                className="text-content"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <p>
                    Goal : combine several events to create a photo album in one picture.
                    <br />
                    Play with the fusion masks to have consistency between each image
                </p>
            </div>
            <div className="image-content small">
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