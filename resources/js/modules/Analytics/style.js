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
    .formgent-analytics-pro-cta{
        position: relative;
        height: calc(100vh - 260px);
        overflow: hidden;
        &:before{
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: var(--formgent-color-gray-300);
            opacity: 0.5;
        }
        img{
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }
    .formgent-analytics-pro-cta__content{
        border-radius: 16px;
        background: #FFF;
        box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
        width: 560px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .formgent-analytics-pro-cta__icon{
        width: 56px;
        height: 56px;
        border-radius: 10px;
        background: var(--formgent-color-primary-50);
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 24px;
            height: 24px;
            path{
                fill: var(--formgent-color-primary);
            }
        }
    }
    .formgent-analytics-pro-cta__title{
        font-size: 22px;
        font-weight: 600;
        color: var(--formgent-color-dark);
        margin-bottom: 12px;
    }
    .formgent-analytics-pro-cta__description{
        font-size: 16px;
        font-weight: 400;
        color: var(--formgent-color-gray-600);
        margin: 0 0 20px;
    }
    .formgent-analytics-pro-cta__btn{
        padding: 12px 20px;
        border-radius: 8px;
        background: #5E53F9;
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        &:hover{
            background: var(--formgent-color-primary);
        }
    }
    .formgent-analytics-chart{
        width: 100%;
        margin-top: 56px;
    }
    .formgent-analytics-chart__header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
        h2{
            margin: 0;
        }
    }
    .recharts-responsive-container{
        width: 100%;
        min-height: 250px;
    }
    .formgent-analytics-chart__datepicker{
        .ant-picker{
            padding-top: 9px;
            padding-bottom: 9px;
        }
    }
    .formgent-analytics-chart__not-found{
        font-size: 16px;
        text-align: center;
        background: #f6f6f6;
        padding: 35px 0;
        border-radius: 10px;
    }
`;

export { AnalyticsStyle };
