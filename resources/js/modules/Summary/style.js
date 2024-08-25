import Styled from 'styled-components';

const SummaryStyle = Styled.div`
    padding: 0 12px;
    .formgent-summary-content{
        background: #fff;
        border-radius: 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        padding: 32px;
    }
    .formgent-summary-item{
        width: 672px;
        background: #fff;
        border-radius: 16px;
        border: 1px solid var(--formgent-color-gray-200);
    }
    .formgent-summary-item__top{
        padding: 20px 24px;
        background: var(--formgent-color-gray-50);
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid var(--formgent-color-gray-200);
        border-radius: 16px 16px 0 0;
    }
    .formgent-summary-item__icon{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: var(--formgent-color-primary-100);
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 20px;
            height: 20px;
            path{
                stroke: var(--formgent-color-primary);
            }
        }
    }
    .formgent-summary-item--email,
    .formgent-summary-item--text{
        .formgent-summary-item__icon{
            svg path{
                stroke: none;
                fill: var(--formgent-color-primary);
            }
        }
    }
    .formgent-summary-item__title{
        h4{
            color: var(--formgent-color-dark);
            font-size: 16px;
            font-weight: 600;
            margin: 0 0 6px;
        }
        span{
            display: block;
            color: var(--formgent-color-gray-500);
            font-size: 12px;
            font-weight: 400;
        }
    }
    .formgent-summary-item__content{
        padding: 20px 24px;
    }
`;

export { SummaryStyle };
