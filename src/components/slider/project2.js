import React from "react"
import Img from "gatsby-image"
import SkullVideo from "../../images/skull.mp4"

export default function Project2({images, lang}) {
    return (
        <>
            <div className="info-content">
                <div>
                <p>Client :</p>
                <span>{(lang.pageContext.langKey === 'en' ? 'Personal project' : 'Projet personnel')}</span>
                </div>
                <div>
                <p>{(lang.pageContext.langKey === 'en' ? 'Year :' : 'Année :')}</p>
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
                    {(lang.pageContext.langKey === 'en' ?
                            'Goal create a full 3D horror sequence.'
                        :
                            'But : créer une séquence d’horreur en full 3D'
                    )}
                    <br />
                    {(lang.pageContext.langKey === 'en' ?
                            'A small project in 3 days using redshift for rendering'
                        :
                            'Un petit projet en 3 jours utilisant le moteur de rendu redshift'
                    )}
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