import Styled from 'styled-components';

const AnalyticsStyle = Styled.div`
    padding: 0 12px;
    border-radius: 12px;
    .formgent-analytics-container{
        background: #fff;
        border-radius: 12px;
        padding: 32px;
    }
    .formgent-analytics-stats__list{
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .formgent-analytics-stats__item{
        flex: 1;
        background: var(--formgent-color-primary-50);
        padding: 24px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .formgent-analytics-stats__icon{
        width: 48px;
        height: 48px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--formgent-color-primary);
        svg{
            width: 24px;
            height: 24px;
            path{
                fill: #fff;
            }
        }
    }
    .formgent-analytics-stats__content{
        display: flex;
        flex-direction: column;
        gap: 8px;
        span{
            font-size: 14px;
            font-weight: 400;
            color: var(--formgent-color-gray-600);
            display: block;
        }
        strong {
            font-size: 22px;
            font-weight: 600;
            color: var(--formgent-color-dark);
            display: block;
        }
    }
`;

export { AnalyticsStyle };
