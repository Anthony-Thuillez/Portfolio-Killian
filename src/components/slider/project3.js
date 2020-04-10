import React from "react"
import Img from "gatsby-image"

export default function Project3({images, lang}) {
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
                className="text-content"
                data-sal="slide-left"
                data-sal-duration="1000"
                data-sal-delay="50"
                data-sal-easing="ease-out-cubic"
            >
                <p>
                    {(lang.pageContext.langKey === 'en' ?
                            'Goal : combine several events to create a photo album in one picture.'
                        :
                            'But : combiner plusieurs photos pour en créer une seule.'
                    )}
                    <br />
                    {(lang.pageContext.langKey === 'en' ?
                            'Play with the fusion masks to have consistency between each image'
                        :
                            'Jouer avec les masques de fusions pour avoir de la cohérence entre chaque image.'
                    )}
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