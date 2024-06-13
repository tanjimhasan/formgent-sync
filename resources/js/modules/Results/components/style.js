import Styled from 'styled-components';

const ResultsHeaderStyle = Styled.div`
    .formgent-results-header__nav {
        display: flex;
        justify-content: center;
        .formgent-results-header__nav__link {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 15px;
            margin: 0 !important;
            color: var(--formgent-color-dark);
            background-color: var(--formgent-color-white);
            text-decoration: none;
            border: none;
            box-shadow: none;
            outline: none;
            transition: all ease .3s;
            &:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
            }
            &:last-child {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }
            &.active {
                color: var(--formgent-color-white);
                background-color: var(--formgent-color-dark);
            }
        }
    }
`;

export { ResultsHeaderStyle };
