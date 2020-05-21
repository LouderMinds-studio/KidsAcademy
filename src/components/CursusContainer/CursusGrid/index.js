import React from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';

const CursusGrid = () => {
    const data = useStaticQuery(graphql`
        query names {
            allContentfulCursus {
                edges {
                    node {
                        titel
                        fotoVanDeCursus {
                            file {
                                url
                            }
                        }
                        cursusPoints {
                            json
                        }
                    }
                }
            }
        }
    `);

    return (
        <Container>
            {data.allContentfulCursus.edges.map(({ node }, j) => {
                const { titel, cursusPoints, fotoVanDeCursus } = node;
                console.log(cursusPoints);
                return (
                    <CursusBlock
                        key={j}
                        name={titel}
                        description={cursusPoints}
                        image={fotoVanDeCursus}
                    />
                );
            })}
        </Container>
    );
};

export default CursusGrid;
