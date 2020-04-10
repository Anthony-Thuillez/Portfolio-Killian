import React from "react"
import Img from "gatsby-image"
import Video from "../video"

import CassetteImg from "../../images/cassette.jpg"

export default function Project1({images, lang}) {

    return (
        <>
            <div className="info-content">
                <div>
                <p>Client :</p>
                <span>Tilhon</span>
                </div>
                <div>
                <p>{(lang.pageContext.langKey === 'en' ? 'Year :' : 'Année :')}</p>
                <span>2019</span>
                </div>
            </div>
            <div
                className="video-content"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <Video
                    videoSrcURL="https://www.youtube.com/embed/GPYyd8nQBfw"
                    videoTitle="My Life"
                />
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
                            'I worked on the visual effects of this clip, several processes have been carried out as tracking, transitions, lights effect, rotoscopy, Pan/Crop, particles, flickers, shakes etc...'
                        :
                            'J\'ai travaillé sur les effets visuels de ce clip. Plusieurs procédés ont été utilisés comme le tracking, les transitions, les effets de lumière, la rotoscopie, pan/crop, les particules flickers, et shakes etc...'
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
            <div
                className="text-content"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <p>
                    {(lang.pageContext.langKey === 'en' ?
                            'I also worked on the creation of a cassette in the image of his new song Several stages of construction : Modeling, Texturing, Render, compositing'
                        :
                            'J\'ai aussi travaillé sur la création d’une cassette pour un clip vidéo musical. Plusieurs étapes de constructions : modeling, texturing et compositing.'
                    )}
                </p>
            </div>
            <div className="image-content">
                <div
                    className="image"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-delay="50"
                    data-sal-easing="ease-out-cubic"
                >
                    <img src={CassetteImg} alt="Couverture de l'album" />
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
                            'I thank Illicit Epiphany and Braga Ferreira to have solicited me for the realisation of this project !'
                        :
                            'Je remercie Illicit Epiphany ainsi que Braga Ferreira pour m\'avoir sollicité pour la réalisation de ce projet !'
                    )}
                </p>
            </div>
        </>
    )
}