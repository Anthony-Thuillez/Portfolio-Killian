import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function SocialsNetworks() {

    return (
        <Social>
            <a
                href="https://www.instagram.com/ma.killian/"
                className="instagram social"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/killian-boucher-326b2219a/"
                className="linkedin social"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </Social>
    )
}

const Social = styled.div`
    position: fixed;
    z-index: 10;
    right: 24px;
    bottom: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        font-size: 10px;
        color: #fff;
        opacity: 0.3;
        transition: opacity 0.3s ease-in-out;
        &:hover {
            opacity: 1;
        }
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
`