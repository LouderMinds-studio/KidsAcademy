import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { colors } from '../../../util/styling_vars';
import Img from 'gatsby-image';
import Language from '../../LanguageSwitcher';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

import './styles.scss';

const Navigation = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus(sort: { fields: positie, order: ASC }) {
                edges {
                    node {
                        titel
                        node_locale
                        contentful_id
                    }
                    next {
                        titel
                        node_locale
                        contentful_id
                    }
                }
            }
            file(relativePath: { eq: "logo-wit.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `);

    const courseLinks = () => {
        if (intl.locale === 'nl') {
            return data.allContentfulCursus.edges.map(({ node }, j) => {
                let coursename, linkname;
                if (node.node_locale === 'nl') {
                    coursename = node.titel;
                    linkname = node.titel;
                    return (
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="dropdown-item"
                            key={`${coursename}`}
                            to={`/${intl.locale}/${linkname.toLowerCase().replace(/\s/g, '-')}/`}
                        >
                            {coursename}
                        </AniLink>
                    );
                }
            });
        } else {
            return data.allContentfulCursus.edges.map(({ node, next }, j) => {
                let name = 'a';
                let link = 'a';
                if (next !== null) {
                    if (node.contentful_id === next.contentful_id) {
                        name = next.titel;
                        link = node.titel;
                        return (
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                key={`${name}`}
                                to={`/${intl.locale}/${link.toLowerCase().replace(/\s/g, '-')}/`}
                            >
                                {name}
                            </AniLink>
                        );
                    } else {
                        return;
                    }
                }
            });
        }
    };
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="nav">
            <AniLink
                cover
                bg={`${colors.turqouise}`}
                className="navbar-brand"
                to={`/${intl.locale}/`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" id="Laag_1" viewBox="0 0 898.04 378.76">
                    <path
                        class="cls-1"
                        d="M446.76,231.24l-3.27-.08c.07.94-.25,1.66-.18,2.6h-3.23a2.07,2.07,0,0,0,.41,1.4c1.6,1.85,3.34,1.85,5.1,3.54a1.56,1.56,0,0,1,.59,1.53c0,.35-.08,1.77-.15,2.22,0,.2-.42,0-.61-.11-1.66-.77-3.11-2.54-4.9-2.16a7.46,7.46,0,0,0-2.34,1c-2.07,1.63-2.48,1.68-4.55,3.31-.27.21-1.79,1.29-2.21.67a5,5,0,0,1,.53-2.61c.89-1.28,1.34-.85,2.23-2.13a29,29,0,0,1-7.11,2.92c0-2,.63-2.16,1.68-3.06-1.39.09-2.28.95-3.93,1.31-.08-3.17,1.86-2.79,2.59-3.21a10.76,10.76,0,0,1,3.34-1.39c1.87-.32,2.56-.67,4.43-1a32.76,32.76,0,0,1,.12-3.43l-3.88-.87c.34-.78.21-1.67.55-2.46a1,1,0,0,0,.12-.62.94.94,0,0,0-.43-.47l-4-2.8a12.45,12.45,0,0,0-2.7,2.47c-2.63-4.92-3.76-8.86-5.4-13.45a38.1,38.1,0,0,1-1.68-8.18q-.66-5.6-.94-11.24a21.79,21.79,0,0,1,.61-7.67c.54-1.72,2.31-7.4,3.24-9,1.73-2.87,4-4.16,4.39-6.48.7-4-.38-10.62.24-14.68.69-4.47,1.6-6.23,1.83-10.74a54.52,54.52,0,0,1,.35-5.71c.23-1.43.45-4.6,1.47-5.77.64-.73,2.43-.08,3.19-.07a13.55,13.55,0,0,1,3.3,4.94,3.28,3.28,0,0,0,1.28,1.78c.41.29,10.26,1,10.26,1a72.39,72.39,0,0,0,8.06-.67c.5,0,1.78.16,2.19-.14a3.28,3.28,0,0,0,1.28-1.78,13.51,13.51,0,0,1,3.3-4.93c1.08-.16,2.55-.67,3.19.07,1,1.16,1.24,4.34,1.47,5.77a54.33,54.33,0,0,1,.35,5.7c.23,4.52,1.14,6.27,1.83,10.74.62,4.06-.45,10.64.24,14.69.4,2.31,2.66,3.6,4.39,6.47.93,1.55,2.7,7.24,3.25,9a22.06,22.06,0,0,1,.6,7.68q-.27,5.63-.94,11.23a37.51,37.51,0,0,1-1.68,8.18c-1.64,4.59-2.77,8.53-5.4,13.45a12.45,12.45,0,0,0-2.7-2.47l-4,2.8a1,1,0,0,0-.43.47.91.91,0,0,0,.12.62c.34.79.21,1.68.55,2.46l-3.88.87a32.76,32.76,0,0,1,.12,3.43c1.88.32,2.56.66,4.43,1a10.71,10.71,0,0,1,3.35,1.39c.72.43,2.66,0,2.58,3.21-1.65-.35-2.54-1.22-3.93-1.3,1.05.89,1.72,1,1.68,3.05a29,29,0,0,1-7.11-2.92c.89,1.28,1.34.85,2.23,2.13a5,5,0,0,1,.53,2.61c-.42.62-1.94-.45-2.21-.66-2.07-1.63-2.48-1.69-4.55-3.32a7.14,7.14,0,0,0-2.34-1c-1.83-.4-3.31,1.46-5,2.2a.38.38,0,0,1-.53-.34c-.06-.6-.1-1.54-.11-1.81a1.56,1.56,0,0,1,.59-1.53c1.76-1.7,3.5-1.7,5.1-3.55a2.09,2.09,0,0,0,.41-1.39c-.88.05-1.81.05-3.23,0,.08-.94-.25-1.65-.18-2.6l-3.27.08"
                    />
                    <g class="cls-2">
                        <text class="cls-3" transform="translate(272.13 178.65)">
                            KIDS{' '}
                        </text>
                        <text class="cls-4" transform="translate(136.52 244.67)">
                            A
                        </text>
                        <text class="cls-3" transform="translate(171.36 244.67)">
                            C
                        </text>
                        <text class="cls-3" transform="translate(207.49 244.67)">
                            ADEM
                            <tspan class="cls-5" x="161.97" y="0">
                                Y
                            </tspan>
                        </text>
                    </g>
                    <path
                        class="cls-6"
                        d="M541.34,131.81a1,1,0,0,1-.62,1.29c-1.23.29-2.46.65-3.69,1a98.34,98.34,0,0,0-14.49,5.68c-2.7,7.83-7,15.5-13.07,21.19-2.63,2.47-5.68,4.89-9.24,5.82-1.37.37-3.17.55-4.36-.56a4.66,4.66,0,0,1-1-3.56c.14-5.51,4.66-10.06,8.62-13.45a82.4,82.4,0,0,1,17.35-10.87,51.15,51.15,0,0,0,1.63-6.17,55.12,55.12,0,0,0,1.06-11.71,47.48,47.48,0,0,0-1.23-10.38c-1.14-4.8-3.33-9.61-7.21-12.57a14.19,14.19,0,0,0-5.18-2.45,15.73,15.73,0,0,0-6,0,19.62,19.62,0,0,0-3.08.9,20.81,20.81,0,0,0-3,1.45,24.05,24.05,0,0,0-4.61,3.15c-.29,3.09-.58,6.11-.87,9.19q-1.4,14.2-2.57,28.4c-.73,9.32-1.39,18.56-1.83,27.86a1,1,0,0,1-1.2.84,1,1,0,0,1-.78-1.13q.35-7.77.89-15.53c.64-9.53,1.43-19,2.28-28.45.64-6.39,1.21-12.7,1.85-19.08a49.89,49.89,0,0,0-10.22,15.57c-.49,1.22-2.35.36-1.8-.86a52.78,52.78,0,0,1,2.39-5,45.88,45.88,0,0,1,9.92-12.84q.22-2.83.47-5.67c.13-1.27,2.17-.91,2,.35s-.26,2.39-.33,3.51c.07,0,.14-.08.2-.15,3.86-2.83,8.67-5,13.56-4.85A15.92,15.92,0,0,1,519,98.46c3.92,4.56,5.57,10.72,6.22,16.54a57.38,57.38,0,0,1-1.85,22.14,90.4,90.4,0,0,1,16.7-5.95A1,1,0,0,1,541.34,131.81Zm-21.43,9.25c-.41.23-.75.39-1.15.63-5.8,3-11.64,6.6-16.29,11.22a22.24,22.24,0,0,0-4.63,6.09,9.38,9.38,0,0,0-.85,3,4.8,4.8,0,0,0,.17,2.64c.08.2.15.27.44.32a3,3,0,0,0,.56.1,7,7,0,0,0,2.07-.34,16.43,16.43,0,0,0,4.25-2.23,37.54,37.54,0,0,0,8.19-8.12A53.33,53.33,0,0,0,519.91,141.06Z"
                    />
                    <path
                        class="cls-6"
                        d="M562,131.1a45.88,45.88,0,0,1-4.79,6.86,31.75,31.75,0,0,1-6,5.48,9.47,9.47,0,0,1-6.43,1.87,5.79,5.79,0,0,1-4.91-3.72,15.16,15.16,0,0,1-.55-7.5,20.49,20.49,0,0,1,2.33-7c1.07-1.81,2.7-3.59,4.92-3.73a3.52,3.52,0,0,1,2.85,1c1,.92.83,2,.42,3.25a15.2,15.2,0,0,1-8.7,8.86l.06,1c0,1.74.26,4,1.87,5.11,3.21,2.3,7.2-.68,9.57-2.85a38.58,38.58,0,0,0,7.48-9.54C560.78,129,562.65,130,562,131.1Zm-20.58,3a13.68,13.68,0,0,0,3.86-2.83,13.53,13.53,0,0,0,1.66-2.34,7.35,7.35,0,0,0,1.15-2.65c.17-.71-.76-1-1.31-1a3.08,3.08,0,0,0-2,1,12.07,12.07,0,0,0-2.62,4.84A19.2,19.2,0,0,0,541.45,134.1Z"
                    />
                    <path
                        class="cls-6"
                        d="M587.23,128.23a1.08,1.08,0,0,1,.09,1.46,58.91,58.91,0,0,1-8.68,10.25c-1.25,1.19-2.9,2.55-4.75,2a3.6,3.6,0,0,1-2.52-3.39,15,15,0,0,1,.57-5.27c.21-1,.49-2,.78-3,.23-.78.65-1.86.25-2.67-.82-1.83-2.81.88-3.39,1.54-1.23,1.48-2.39,3-3.47,4.55a114,114,0,0,0-6,10.07,1,1,0,0,1-1.92-.57c.94-6.06,1.88-12,2.81-18.1.2-1.26,2.18-.9,2,.36l-1.92,12.47c1.26-2.18,2.58-4.28,4-6.32a55.82,55.82,0,0,1,3.61-4.49c1.17-1.33,2.88-2.9,4.76-1.91,1.73.87,1.93,3,1.49,4.72-.5,2-1.07,4-1.43,6-.14,1.06-.56,3.32.61,4,1.37.74,3.24-1.54,4-2.35a61.18,61.18,0,0,0,7.63-9.21A1,1,0,0,1,587.23,128.23Z"
                    />
                    <path
                        class="cls-6"
                        d="M610.35,127.65A11.71,11.71,0,0,1,608,133a12,12,0,0,1-8.83,4.68,12.2,12.2,0,0,1-9.37-3.65c-.06,0-.07-.07-.07-.07a69.41,69.41,0,0,0-2.34,9.21c-.2,1.13-2,1.11-2-.07,0-1.33,0-2.66,0-4,.08-5.16.31-10.34.68-15.45-1,.9-2,1.8-3,2.64s-2.15-.84-1.16-1.67c.8-.68,1.52-1.29,2.25-2s1.44-1.41,2.16-2.09c.41-4.56.88-9,1.5-13.55.78-5.28,1.69-10.56,2.75-15.79a66.9,66.9,0,0,1,4-13.78A27,27,0,0,1,598,71.35c1.22-1.61,3.3-2.79,5.14-1.37,1.46,1.09,1.94,3.08,2.12,4.81.14,2.08.13,4.24.06,6.34a62.42,62.42,0,0,1-6.41,25,60.52,60.52,0,0,1-10.66,15.32c-.29,4.2-.58,8.4-.72,12.6.63-2,1.41-3.93,2.2-5.86a76.27,76.27,0,0,1,3.39-6.84c1.07-1.81,2.86-4.37,5.35-3.62a1,1,0,0,1,.82.92,17.25,17.25,0,0,1-7.14,14.75,10.07,10.07,0,0,0,9.32,1.84,10.24,10.24,0,0,0,6.88-7.9A1,1,0,0,1,610.35,127.65Zm-21.13-15.23c-.22,1.9-.45,3.79-.61,5.61a61.92,61.92,0,0,0,9.56-15.11,59.19,59.19,0,0,0,5.17-23.61,22.1,22.1,0,0,0-.29-5.63c-.29-1.24-1.25-3.13-2.71-1.92a11.47,11.47,0,0,0-1.86,2.49c-.56.94-1.06,1.88-1.55,2.89a40.23,40.23,0,0,0-2.38,6.36,115.94,115.94,0,0,0-3.09,13.86C590.53,102.37,589.81,107.43,589.22,112.42Zm1.13,19.65a14.92,14.92,0,0,0,6.94-12.43,3.51,3.51,0,0,0-1.46,1.27,17.57,17.57,0,0,0-1.63,2.76,57.05,57.05,0,0,0-3,6.18C591,130.64,590.65,131.36,590.35,132.07Z"
                    />
                    <path
                        class="cls-6"
                        d="M630.51,126.7a45.82,45.82,0,0,1-4.78,6.86,31.81,31.81,0,0,1-6,5.48,9.5,9.5,0,0,1-6.43,1.88,5.83,5.83,0,0,1-4.91-3.73,15.4,15.4,0,0,1-.55-7.5,20.72,20.72,0,0,1,2.34-7c1.07-1.81,2.7-3.59,4.92-3.73a3.52,3.52,0,0,1,2.85,1c1,.92.83,2,.42,3.25a15.18,15.18,0,0,1-8.71,8.86l.07,1c0,1.74.26,4,1.87,5.11,3.21,2.3,7.2-.68,9.57-2.85a38.3,38.3,0,0,0,7.47-9.54C629.26,124.62,631.14,125.55,630.51,126.7Zm-20.58,3a13.54,13.54,0,0,0,3.86-2.83,13.35,13.35,0,0,0,1.67-2.33,7.66,7.66,0,0,0,1.15-2.66c.17-.71-.76-1-1.31-1a3.06,3.06,0,0,0-2,1,12,12,0,0,0-2.62,4.84A20.43,20.43,0,0,0,609.93,129.7Z"
                    />
                    <path
                        class="cls-6"
                        d="M655.71,123.83a1.08,1.08,0,0,1,.1,1.46,58.54,58.54,0,0,1-8.69,10.25c-1.24,1.19-2.9,2.55-4.74,2a3.58,3.58,0,0,1-2.52-3.39,15,15,0,0,1,.57-5.27c.21-1,.49-2,.78-3,.22-.78.64-1.86.25-2.67-.82-1.83-2.81.88-3.39,1.54-1.23,1.48-2.39,3-3.48,4.55a113.86,113.86,0,0,0-6,10.07,1,1,0,0,1-1.92-.57c.93-6.06,1.88-12,2.81-18.1.2-1.26,2.17-.9,2,.36l-1.92,12.47c1.26-2.17,2.58-4.28,4-6.32a55.82,55.82,0,0,1,3.61-4.49c1.17-1.33,2.88-2.9,4.76-1.91s1.93,3,1.48,4.72c-.5,2-1.06,4-1.42,6-.14,1.06-.56,3.32.6,4,1.37.74,3.25-1.54,4-2.35a61.18,61.18,0,0,0,7.63-9.21A1,1,0,0,1,655.71,123.83Z"
                    />
                    <path
                        class="cls-6"
                        d="M640.55,195.14a1,1,0,0,1-.61,1.3c-1.23.3-2.46.66-3.69,1a99.33,99.33,0,0,0-14.45,5.76c-2.65,7.85-6.93,15.55-12.94,21.27-2.62,2.49-5.65,4.93-9.21,5.88-1.37.37-3.17.57-4.36-.53a4.63,4.63,0,0,1-1-3.56c.1-5.51,4.6-10.08,8.53-13.5a82.48,82.48,0,0,1,17.29-11,48.81,48.81,0,0,0,1.59-6.18,54.46,54.46,0,0,0,1-11.71,47.4,47.4,0,0,0-1.29-10.37c-1.17-4.8-3.39-9.59-7.29-12.53a14.25,14.25,0,0,0-5.19-2.42,15.93,15.93,0,0,0-6,0,19.69,19.69,0,0,0-3.08.91,22.39,22.39,0,0,0-3,1.47,23.63,23.63,0,0,0-4.59,3.19c-.27,3.08-.55,6.1-.81,9.19q-1.3,14.2-2.4,28.41c-.67,9.32-1.28,18.57-1.67,27.87a1,1,0,1,1-2-.28q.3-7.76.79-15.53c.59-9.53,1.32-19,2.11-28.47.6-6.38,1.14-12.7,1.73-19.09a50,50,0,0,0-10.12,15.64c-.48,1.22-2.35.38-1.81-.85q1.08-2.58,2.37-5a45.75,45.75,0,0,1,9.83-12.89c.15-1.89.29-3.79.44-5.68.12-1.27,2.17-.92,2,.34s-.24,2.39-.31,3.51c.07,0,.14-.08.2-.15,3.85-2.85,8.65-5,13.53-4.93A15.92,15.92,0,0,1,618,161.93c4,4.54,5.63,10.7,6.32,16.5a57.43,57.43,0,0,1-1.72,22.16,90.61,90.61,0,0,1,16.66-6.05A1,1,0,0,1,640.55,195.14Zm-21.38,9.39c-.4.24-.74.4-1.14.64-5.78,3.05-11.6,6.67-16.22,11.32a21.85,21.85,0,0,0-4.59,6.11,9.22,9.22,0,0,0-.83,3,4.76,4.76,0,0,0,.18,2.63c.08.21.16.27.44.32a3.18,3.18,0,0,0,.57.1,6.89,6.89,0,0,0,2.06-.35,16.57,16.57,0,0,0,4.24-2.25,37.59,37.59,0,0,0,8.14-8.18A53.29,53.29,0,0,0,619.17,204.53Z"
                    />
                    <path
                        class="cls-6"
                        d="M664.14,194a57.72,57.72,0,0,1-4.69,7.59,37.05,37.05,0,0,1-2.37,3.09,8.51,8.51,0,0,1-2.62,2.42c-2.29,1.14-4.63-.37-5.35-2.69a12.55,12.55,0,0,1-.27-4c.11-1.4.22-2.81.33-4.14.08-.84.24-1.62.32-2.39-.4,1.14-.88,2.29-1.29,3.51-1.06,2.72-2.05,5.44-3.11,8.16a2.64,2.64,0,0,1-2.38,2,2.82,2.82,0,0,1-2.57-1.92,12.55,12.55,0,0,1-.7-3.92c-.16-1.38-.26-2.77-.29-4.17a48.49,48.49,0,0,1,.73-8.41,1,1,0,1,1,2,.34,47,47,0,0,0-.62,9,37.23,37.23,0,0,0,.27,3.88c.13.83.11,2.57.91,3.07.37.26.49,0,.68-.32a11.88,11.88,0,0,0,.58-1.65c.47-1.22,1-2.51,1.47-3.8.94-2.5,2-5.09,3-7.67.58-1.64,1.48-5.68,4.07-4.61a1,1,0,0,1,.56,1.08,53.06,53.06,0,0,0-1.52,8.06c-.13,1.19-.25,2.39-.3,3.57a11.2,11.2,0,0,0,.09,3.42,2.22,2.22,0,0,0,1.46,1.91c.93.22,1.78-.54,2.36-1.21a42.62,42.62,0,0,0,4-5.23c1.27-1.9,2.45-3.87,3.5-5.83C663,192,664.76,192.88,664.14,194Zm-12.74-4.75"
                    />
                    <path
                        class="cls-6"
                        d="M688,192.37A92.84,92.84,0,0,1,681.8,201c-1,1.4-2.18,2.73-3.34,4.07a18.18,18.18,0,0,1-3.32,3.3,5,5,0,0,1-3.78.83,6.68,6.68,0,0,1-1-.49,2,2,0,0,1-.44-1.23,7.81,7.81,0,0,1,0-2.16c.35-3,2.18-5.66,2.25-8.66a4.24,4.24,0,0,0-1-3.07,3.17,3.17,0,0,0-3.05-.76,5.8,5.8,0,0,1-3.92-.21,4.86,4.86,0,0,1-2.28-2.63,13,13,0,0,1-.11-7.45c.55-2.2,2.12-5.59,4.83-5.64a2.55,2.55,0,0,1,2.47,2.33,9.6,9.6,0,0,1-.57,3.81,32,32,0,0,1-3.43,7.77c.94.42,2.1.06,3.21,0a5,5,0,0,1,4.28,1.3,6.27,6.27,0,0,1,1.69,4.13,15.42,15.42,0,0,1-1.29,5.6c-.57,1.72-1.28,3.51-1,5.37,1.28.33,2.66-.88,3.51-1.71a54.42,54.42,0,0,0,3.73-4.44,95.44,95.44,0,0,0,7-9.63,1,1,0,1,1,1.81.92Zm-24.29-3.24a32,32,0,0,0,2.13-4.41c.35-.93.63-1.93.91-2.92.16-.71.57-1.79.24-2.46-.5-1.29-2.27,1.28-2.52,1.78a11.06,11.06,0,0,0-1.13,4.75A10.32,10.32,0,0,0,663.67,189.13Z"
                    />
                    <path
                        class="cls-6"
                        d="M711.37,191a14.62,14.62,0,0,1-5.21,4.27,6.05,6.05,0,0,1-6.21-1.09,9.25,9.25,0,0,1-3-5.65c-.63,1.92-1.19,3.85-1.82,5.77-.52,1.64-1,3.28-1.47,4.92s-.95,3.34-1.54,4.92a4.7,4.7,0,0,1-2.52,2.76,2.46,2.46,0,0,1-2.91-1.75,13.2,13.2,0,0,1-.52-4.36,41.17,41.17,0,0,1-.08-5.08,67.84,67.84,0,0,1,.9-10.11,1,1,0,0,1,2,.34,79.51,79.51,0,0,0-1,10c0,1.46,0,2.93.1,4.45a18.73,18.73,0,0,0,.35,3.95c.35,1.09,1,.35,1.44-.31a21.42,21.42,0,0,0,1.26-3.85c1.83-5.78,3.58-11.62,5.41-17.4a1,1,0,0,1,1.06-.84c.41,0,1,.42,1,.91-.06,3.07-.13,7,2.2,9.4a4,4,0,0,0,4.75,1.06,13,13,0,0,0,4.21-3.58C710.72,188.68,712.28,190,711.37,191Z"
                    />
                    <path
                        class="cls-6"
                        d="M732.05,189.34a46.86,46.86,0,0,1-4.74,6.89,32.08,32.08,0,0,1-6,5.51,9.45,9.45,0,0,1-6.42,1.91A5.79,5.79,0,0,1,710,200a15.24,15.24,0,0,1-.6-7.49,20.62,20.62,0,0,1,2.29-7.06c1.06-1.82,2.68-3.61,4.9-3.76a3.54,3.54,0,0,1,2.86,1c1,.91.84,2,.44,3.25a15.21,15.21,0,0,1-8.66,8.91l.08,1c.05,1.74.28,4,1.9,5.09,3.22,2.29,7.2-.71,9.55-2.9a38.3,38.3,0,0,0,7.42-9.59C730.79,187.26,732.67,188.18,732.05,189.34Zm-20.56,3.12a13.57,13.57,0,0,0,3.84-2.85,14,14,0,0,0,1.66-2.35,7.51,7.51,0,0,0,1.13-2.66c.16-.71-.77-1-1.32-.95a3.1,3.1,0,0,0-2,1,12,12,0,0,0-2.59,4.86A19.31,19.31,0,0,0,711.49,192.46Z"
                    />
                    <path
                        class="cls-6"
                        d="M757.23,186.31a1.08,1.08,0,0,1,.11,1.46,58.9,58.9,0,0,1-8.62,10.3c-1.24,1.2-2.89,2.57-4.74,2.07a3.59,3.59,0,0,1-2.54-3.38,14.94,14.94,0,0,1,.54-5.26c.2-1.06.48-2.06.76-3.05.22-.79.64-1.86.23-2.67-.82-1.83-2.8.89-3.37,1.56-1.23,1.48-2.37,3-3.45,4.57A110.15,110.15,0,0,0,730.24,202a1,1,0,0,1-1.93-.56c.9-6.07,1.81-12.06,2.7-18.12.19-1.27,2.17-.92,2,.35q-.91,6.24-1.84,12.48c1.24-2.18,2.55-4.3,4-6.35a57.57,57.57,0,0,1,3.58-4.51c1.17-1.33,2.87-2.92,4.75-1.94s2,3,1.52,4.71c-.49,2-1.05,4-1.39,6-.14,1-.54,3.31.63,4,1.37.74,3.23-1.56,4-2.38a60.06,60.06,0,0,0,7.58-9.25A1,1,0,0,1,757.23,186.31Z"
                    />
                    <path
                        class="cls-6"
                        d="M587.76,268.34a1,1,0,0,1-.57,1.32c-1.22.33-2.44.74-3.66,1.14A99.82,99.82,0,0,0,569.27,277c-2.41,7.94-6.43,15.76-12.27,21.67-2.53,2.57-5.49,5.11-9,6.17-1.36.41-3.15.67-4.38-.4a4.64,4.64,0,0,1-1.13-3.52c-.07-5.51,4.28-10.22,8.11-13.76a82.42,82.42,0,0,1,16.93-11.52,49,49,0,0,0,1.39-6.22,55.25,55.25,0,0,0,.63-11.75,47.9,47.9,0,0,0-1.62-10.32c-1.32-4.76-3.69-9.48-7.68-12.29a14.48,14.48,0,0,0-5.27-2.26,15.69,15.69,0,0,0-6,.19,18.76,18.76,0,0,0-3.05,1,20.48,20.48,0,0,0-3,1.57,23.31,23.31,0,0,0-4.49,3.32c-.18,3.09-.36,6.12-.53,9.21q-.85,14.25-1.5,28.48c-.38,9.34-.69,18.6-.79,27.91a1,1,0,0,1-1.16.89,1,1,0,0,1-.82-1.11c0-5.18.13-10.36.31-15.55.28-9.54.71-19,1.21-28.52.4-6.4.73-12.73,1.13-19.13A49.69,49.69,0,0,0,526.68,257c-.44,1.23-2.34.44-1.83-.8.66-1.74,1.4-3.42,2.2-5.05A46,46,0,0,1,536.48,238c.08-1.9.17-3.8.26-5.7.08-1.26,2.13-1,2,.28s-.17,2.4-.2,3.52a.37.37,0,0,0,.2-.16c3.75-3,8.48-5.27,13.37-5.35a15.87,15.87,0,0,1,12,5.28c4.09,4.41,6,10.51,6.84,16.29a57.39,57.39,0,0,1-1,22.2,89.86,89.86,0,0,1,16.46-6.57A1,1,0,0,1,587.76,268.34ZM566.69,278.4c-.4.24-.73.42-1.13.67-5.68,3.23-11.38,7-15.85,11.83a22.06,22.06,0,0,0-4.4,6.25,9.49,9.49,0,0,0-.74,3,4.85,4.85,0,0,0,.27,2.63c.09.2.16.26.45.3a3.4,3.4,0,0,0,.57.09,7.11,7.11,0,0,0,2-.42,16.6,16.6,0,0,0,4.17-2.39A38,38,0,0,0,560,292,53.59,53.59,0,0,0,566.69,278.4Z"
                    />
                    <path
                        class="cls-6"
                        d="M609.68,267a13.62,13.62,0,0,1-10,1.94,11,11,0,0,1-2.17-.69,18.74,18.74,0,0,1,.51,4.35,19.34,19.34,0,0,1-2.57,9.77,8.13,8.13,0,0,1-3.69,3.53,4.17,4.17,0,0,1-4.79-1,9.51,9.51,0,0,1-1.92-4.42,21,21,0,0,1-.42-5.48,21.41,21.41,0,0,1,3.29-10.27,1,1,0,0,1,1.45-.15,1,1,0,0,1,.14,1.39,19.52,19.52,0,0,0-2.9,9.94,20.59,20.59,0,0,0,.54,4.56,5.52,5.52,0,0,0,1.74,3.39c1.14.86,2.53.09,3.42-.77a11,11,0,0,0,2.29-3.59A16.93,16.93,0,0,0,595,267c-1.51-1.11-2.57-2.61-2.14-4.54a1,1,0,0,1,1.84-.47,26.21,26.21,0,0,1,2,3.64c0,.07.07.07.15.13a10.67,10.67,0,0,0,3.77,1.29,11.38,11.38,0,0,0,7.88-1.64C609.58,264.72,610.8,266.34,609.68,267Z"
                    />
                    <path
                        class="cls-6"
                        d="M630.49,264.61a46.48,46.48,0,0,1-4.52,7,32.15,32.15,0,0,1-5.79,5.69,9.41,9.41,0,0,1-6.35,2.12,5.81,5.81,0,0,1-5.05-3.54,15.35,15.35,0,0,1-.83-7.47,20.34,20.34,0,0,1,2.07-7.13c1-1.85,2.56-3.69,4.78-3.92a3.56,3.56,0,0,1,2.88.9c1,.87.91,2,.54,3.23a15.15,15.15,0,0,1-8.36,9.17l.1,1c.11,1.74.41,4,2.06,5,3.3,2.18,7.17-.95,9.46-3.21a38.51,38.51,0,0,0,7.11-9.81C629.17,262.58,631.07,263.43,630.49,264.61ZM610,268.38a14,14,0,0,0,3.75-3,13.82,13.82,0,0,0,1.58-2.4,7.79,7.79,0,0,0,1-2.7c.14-.71-.8-1-1.35-.91a3.15,3.15,0,0,0-2,1,12.07,12.07,0,0,0-2.44,4.94A21,21,0,0,0,610,268.38Z"
                    />
                    <path
                        class="cls-6"
                        d="M655.57,260.79a1.07,1.07,0,0,1,.14,1.46,58.11,58.11,0,0,1-8.29,10.56c-1.2,1.24-2.8,2.67-4.66,2.23a3.6,3.6,0,0,1-2.65-3.3,15.2,15.2,0,0,1,.37-5.28c.17-1.07.42-2.07.67-3.08a4,4,0,0,0,.15-2.67c-.89-1.8-2.77,1-3.33,1.67-1.18,1.52-2.27,3.1-3.3,4.67a110.21,110.21,0,0,0-5.59,10.29,1,1,0,0,1-1.94-.5c.7-6.09,1.42-12.1,2.13-18.19.14-1.27,2.13-1,2,.29q-.72,6.26-1.45,12.52c1.18-2.21,2.42-4.37,3.75-6.46,1.1-1.58,2.2-3.16,3.44-4.62s2.77-3,4.68-2.09,2.05,2.94,1.67,4.66c-.43,2-.92,4-1.2,6.07-.1,1.06-.43,3.33.76,4,1.39.69,3.18-1.66,3.94-2.5a61.82,61.82,0,0,0,7.28-9.49A1,1,0,0,1,655.57,260.79Z"
                    />
                </svg>
            </AniLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <Language />
                    <li className="nav-item active">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/`}
                        >
                            Home
                        </AniLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FormattedMessage id="cursussen_nav" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-left"
                            aria-labelledby="navbarDropdown"
                        >
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/cursussen/`}
                            >
                                <FormattedMessage id="alle-cursussen" />
                            </AniLink>
                            {courseLinks()}
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FormattedMessage id="over-ons_nav" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-left"
                            aria-labelledby="navbarDropdown"
                        >
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons/`}
                            >
                                <FormattedMessage id="over-ons_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons#ervaringen`}
                            >
                                <FormattedMessage id="ervaringen_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/over-ons#solliciteren`}
                            >
                                <FormattedMessage id="solliciteren_nav" />
                            </AniLink>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/scholen`}
                        >
                            Voor scholen
                        </AniLink>
                    </li> */}
                    <li className="nav-item">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/blog`}
                        >
                            Blog
                        </AniLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <FormattedMessage id="contact_nav" />
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="navbarDropdown"
                        >
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/contact/`}
                            >
                                <FormattedMessage id="kennismakingsgesprek_nav" />
                            </AniLink>
                            <AniLink
                                cover
                                bg={`${colors.turqouise}`}
                                className="dropdown-item"
                                to={`/${intl.locale}/inschrijven/`}
                            >
                                <FormattedMessage id="inschrijven_nav" />
                            </AniLink>
                        </div>
                    </li>
                    <li className="nav-item" id="navcta">
                        <AniLink
                            cover
                            bg={`${colors.turqouise}`}
                            className="nav-link"
                            to={`/${intl.locale}/inschrijven/`}
                        >
                            <FormattedMessage id="inschrijven_nav" />
                        </AniLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default injectIntl(Navigation);
