import Styled from 'styled-components';

const SpacerStyle = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--formgent-color-bg-gray);
    border: 1px dashed var(--formgent-color-bg-deep);
    border-radius: 6px;
    width: 100%;
    height: 125px;
    text-align: center;
    span{
        font-size: 16px;
    }
`;

export { SpacerStyle };
