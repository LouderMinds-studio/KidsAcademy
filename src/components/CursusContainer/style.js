import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    position: relative;

    .content {
        padding-top: 5%;
        h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 0;
        }
        p:last-child {
            margin-bottom: 0;
        }
    }
    hr {
        width: 100%;
        max-width: 350px;
        height: 3px;
        background: #37375c;
        margin-top: 0;
        margin-bottom: 1.6em;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop}
            ${layout.padding.width.desktop};
    }
`;
