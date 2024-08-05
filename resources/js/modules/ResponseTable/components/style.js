import Styled from 'styled-components';

const TableStyle = Styled.div`
    .ant-table{
        background-color: transparent;
        .ant-table-content {
            overflow-x: auto;
        }
        table{
            border-spacing: 0 10px;
            tr{
                th,
                td{
                    min-width: 250px;
                    &:first-child{
                        min-width: auto;
                        border-radius: 12px 0 0 12px;
                        padding-inline-start: 15px;
                    }
                    &:last-child{
                        border-radius: 0 12px 12px 0;
                    }
                    .formgent-form-wrap {
                        display: flex;
                        justify-content: space-between;
                    }
                    .formgent-form-table-item-wrap {
                        display: flex;
                        gap: 6px;
                        align-items: center;
                        .starred {
                            path {
                                fill: var(--formgent-color-warning);
                                stroke: var(--formgent-color-warning);
                            }
                        }
                    }
                }
            }
        }
    }
    .ant-checkbox {
        .ant-checkbox-inner:after{
            display: block;
            width: 4.5px;
            height: 8px;
        }
    }
    .ant-table-thead{
        tr{
            th{
                font-size: 13px;
                line-height: 1;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                padding: 15px 15px;
                text-align: start;
                color: var(--formgent-color-light-gray);
                background-color: var(--formgent-color-bg-light);
                &:before {
                    height: 100% !important;
                    background-color: var(--formgent-color-extra-light) !important;
                }
                a {
                    color: var(--formgent-color-light-gray);
                }
            }
        }
    }
    .ant-table-tbody{
        tr{
            background-color: var(--formgent-color-white);
            td{
                &:first-child{
                    position: relative;
                    border-left: 2px solid transparent;
                    padding-right: 0;
                    transition: var(--formgent-transition);
                }
                &:last-child{ 
                    padding-right: 21px;
                }
            }
        }
    }
    
    .formgent-column-action {
        display: flex;
        justify-content: space-between;
        svg {
            width: 14px;
            height: 14px;
        }

        .formgent-column-action__title {
            display: flex;
            gap: 5px;
            align-items: center;
            font-size: 14px;
            text-transform: capitalize;
        }

        &.formgent-column-action__id {
            justify-content: flex-end;
        }
    }

    .formgent-form-date {
        &:hover {
            .response-table__drawer__open {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .response-table__drawer__open {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        padding: 5px 10px;
        height: 30px;
        margin: 0;
        color: var(--formgent-color-white);
        background: var(--formgent-color-gray);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all ease .3s;
    }
`;

const FormDeleteAlertStyle = Styled.div`
    padding: 0 30px 25px;
    .formgent-conversation-delete__label{
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        color: var(--formgent-color-dark);
        padding: 0;
    }
`;

const TableSelectionStyle = Styled.div`
    &.formgent-bulk-selection{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 8px 15px;
        border-radius: 12px;
        background-color: #efd9c1;
    }
    .formgent-btn-bulk-delete{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 16px;
        font-weight:; 500;
        margin: 0 12px;
        color: var(--formgent-color-dark);
        &:hover{
            
            background-color: var(--formgent-color-primary);
            span{
                color: var(--formgent-color-white);
            }
            svg{
                path{
                    fill: var(--formgent-color-white);
                }
            }
        }
        svg{
            margin-right: 5px;
        }
    }
    .formgent-clear-bulk{
        font-size: 13px;
        font-weight: 600;
        display: inline-block;
        margin-left: 20px;
        color: #C96C00;
    }
`;

const TableHeaderStyle = Styled.div`
    display: flex;
    gap: 10px;
`;

const TableActionStyle = Styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    &:last-child { 
        justify-content: end;
    }
    .formgent-table-header__selection {
        display: flex;
        gap: 10px;
        align-items: center;
        .formgent-table-header__selection__text {
            display: flex;
            align-items: center;
            gap: 6px;
            height: 35px;
            padding: 0 15px;
            border-radius: 10px;
            font-size: 12px;
            color: var(--formgent-color-white);
            background: var(--formgent-color-light-gray);
        }
        .formgent-table-header__selection__all {
            display: flex;
            align-items: center;
            gap: 6px;
            height: 35px;
            padding: 0 15px;
            border: none;
            border-radius: 10px;
            font-size: 12px;
            color: var(--formgent-color-dark);
            background: var(--formgent-color-bg-light);
            cursor: pointer;
            transition: background ease .3s;
            &:hover {
                background: var(--formgent-color-bg-deep);
            }
        }
        .formgent-table-header__selection__clear {
            padding: 0;
            margin: 0;
            border: none;
            outline: none;
            box-shadow: none;
            line-height: 1;
            color: var(--formgent-color-white);
            background: transparent;
            cursor: pointer;
            transition: color ease .3s;
            &:hover {
                color: var(--formgent-color-warning);
            }
        }
    }
    .formgent-table-header__search {
        width: 275px;
        height: 40px;
        padding: 0 20px;
        box-shadow: none;
        outline: none;
        border-radius: 8px;
        background: transparent;
        border: 1px solid var(--formgent-color-bg-gray);
        .ant-input {
            outline: none;
            border: none;
        }
    }
    .ant-btn {
        background: transparent;
        color: var(--formgent-font-color) !important;
        border: 1px solid var(--formgent-color-bg-light) !important;
        border-radius: 8px;
        &:hover {
            color: var(--formgent-color-white) !important;
            background: var(--formgent-color-light-gray) !important;
            border-color: var(--formgent-color-light-gray) !important;
        }
        &.formgent-table-header__delete {
            &:hover {
                color: var(--formgent-color-dark) !important;
                background: var(--formgent-color-warning-light) !important;
                border-color: transparent !important;
            }
        }
    }

    .formgent-table-header__dropdown {
        position: relative;
        .formgent-table-header__dropdown__title {
            font-size: 14px;
            font-weight: 600;
            color: var(--formgent-color-dark);  
            padding: 15px;
            margin: 0 0 8px;
            background: var(--formgent-color-bg-light);
        }
        .formgent-table-header__dropdown__toggle {
            display: flex;
            align-items: center;
            gap: 6px;
            height: 40px;
            padding: 0 15px;
            border-radius: 6px;
            color: var(--formgent-font-color);
            background: var(--formgent-color-bg-white);
            border: 1px solid var(--formgent-color-border-light);
            cursor: pointer;
            span {
                display: flex;
                align-items: center;
                gap: 6px;
            }
        }
        .formgent-table-header__dropdown__content {
            display: flex;
            gap: 6px;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            width: 200px;
            padding: 0 0 15px;
            border-radius: 6px;
            background: var(--formgent-color-bg-white);
            border: 1px solid var(--formgent-color-border-light);
            z-index: 1;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all ease .3s;
        }
        &:hover {
            .formgent-table-header__dropdown__content {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
    }
    .ant-checkbox-wrapper {
        padding: 0 15px;
        .ant-checkbox-inner {
            border-radius: 100%;
        }
    }
    
`;

const TableTabStyle = Styled.div`
    .ant-tabs-nav {
        margin: 0;
        &:before {
            display: none;
        }
    }
    .ant-tabs-nav-list {
        border-radius: 8px;
        overflow: hidden;
    }
    .ant-tabs-tab {
        font-size: 14px;
        font-weight: 600;
        padding: 10px 15px;
        margin: 0 !important;
        background-color: var(--formgent-color-bg-gray);
        text-decoration: none;
        border: none;
        box-shadow: none;
        outline: none;
        transition: all ease .3s;
        .ant-tabs-tab-btn {
            color: var(--formgent-color-dark);
        }
        ~ .ant-tabs-ink-bar {
            display: none;
        }
        &.ant-tabs-tab-active {
            background-color: var(--formgent-color-dark);
            .ant-tabs-tab-btn {
                color: var(--formgent-color-white);
            }
        }
    }
`;
const TableDrawerStyle = Styled.div`
    width: 500px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -15px;
    z-index: 1;
    background: #fff;
    overflow-y: auto;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    .response-table__drawer__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid var(--formgent-color-border-light);
    }
    .response-table__drawer__header__response {
        display: flex;
        gap: 10px;
        align-items: center;
        .response-table__drawer__header__response__btns {
            display: flex;
            gap: 10px;
            align-items: center;
            .response-table__drawer__header__response__btn {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                width: 40px;
                font-size: 14px;
                font-weight: 600;
                padding: 0 10px;
                margin: 0;
                background-color: transparent;
                color: var(--formgent-color-dark);
                border: 1px solid var(--formgent-color-border-light);
                border-radius: 8px;
                box-shadow: none;
                outline: none;
                cursor: pointer;
                transition: all ease .3s;
                &:hover {
                    color: var(--formgent-color-white);
                    background: var(--formgent-color-dark);
                    border-color: var(--formgent-color-light-gray);
                }
            }
        }
    }
    .response-table__drawer__header__action {
        display: flex;
        gap: 10px;
        align-items: center;
        .response-table__drawer__header__action__btn {
            height: 40px;
            font-size: 14px;
            font-weight: 600;
            padding: 0 10px;
            margin: 0;
            background-color: transparent;
            color: var(--formgent-color-dark);
            border: 1px solid var(--formgent-color-border-light);
            border-radius: 8px;
            box-shadow: none;
            outline: none;
            cursor: pointer;
            transition: all ease .3s;
            &:hover {
                color: var(--formgent-color-white);
                background: var(--formgent-color-light-gray);
                border-color: var(--formgent-color-light-gray);
            }
        }
        .response-table__drawer__close {
            height: 40px;
            padding: 0 10px;
            background: var(--formgent-color-bg-general);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all ease .3s;
            &:hover {
                color: var(--formgent-color-white);
                background: var(--formgent-color-danger);
            }
        }
    }
    .response-table__drawer__content {
        padding: 20px;
    }
    .response-table__drawer__tab__content {
        padding: 30px 0 0;
    }
    .response-table__drawer__tab {
        .response-table__drawer__tab__nav {
            display: flex;
            gap: 0;
        }
        .ant-tabs-nav {
            margin: 0;
            &:before {
                display: none;
            }
        }
        .ant-tabs-ink-bar {
            display: none;
        }
        .ant-tabs-nav-list {
            overflow: hidden;
            border-radius: 8px;
        }
        .ant-tabs-tab {
            padding: 0;
            margin: 0;
            .ant-tabs-tab-btn {
                font-size: 14px;
                font-weight: 600;
                padding: 15px 20px;
                margin: 0;
                background-color: var(--formgent-color-bg-light);
                color: var(--formgent-color-dark);
                border: none;
                border-radius: 0;
                box-shadow: none;
                outline: none;
                cursor: pointer;
                transition: all ease .3s;
            }
            
            &.ant-tabs-tab-active,
            &:hover {
                .ant-tabs-tab-btn {
                    color: var(--formgent-color-white);
                    background-color: var(--formgent-color-dark);
                }
            }
        }
    }
    .response-table__drawer__tab__wrapper {
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: flex-start;
    }

    .response-table__drawer__tab__item {
        display: flex;
        gap: 10px;
        padding: 20px 0;
        &.response-table__drawer__tab__item--tag {
            .response-table__drawer__tab__item__title {
                height: 40px;
            }
        }
        .response-table__drawer__tab__item__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 40px;
            min-width: 40px;
            border-radius: 8px;
            background-color: var(--formgent-color-bg-light);
        }
        .response-table__drawer__tab__item__content {
            display: flex;
            gap: 10px;
            flex-direction: column;
        }
        .response-table__drawer__tab__item__title {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            color: var(--formgent-color-dark);
            margin: 0;
        }
        .response-table__drawer__tab__item__desc {
            font-size: 14px;
            color: var(--formgent-color-light-gray);
            margin: 0;
        }
        .response-table__drawer__tab__item__add {
            display: flex;
            align-items: center;
            background: transparent;
            border: none;
            margin: 0;
            padding: 0;
            cursor: pointer;
            &:hover {
                color: var(--formgent-color-primary);
            }
        }
        .response-table__drawer__tab__item__btns {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            .response-table__drawer__tab__item__btn {
                font-size: 12px;
                padding: 5px 10px;
                margin: 0;
                background: var(--formgent-color-bg-light);
                border: 1px solid var(--formgent-color-bg-light);
                border-radius: 8px;
                cursor: pointer;
                transition: all ease .3s;
                &:hover {
                    color: var(--formgent-color-white);
                    background: var(--formgent-color-light-gray);
                    border-color: var(--formgent-color-light-gray);
                }
            }
        }
    }
    .response-table__drawer__tab__tag {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
        margin: 0;
        .response-table__drawer__tab__tag__item {
            display: flex;
            gap: 5px;
            align-items: center;
            padding: 5px 10px;
            margin: 0;
            border-radius: 8px;
            box-sizing: border-box;
            background-color: var(--formgent-color-bg-light);
            .response-table__drawer__tab__tag__item__single__close {
                display: flex;
                align-items: center;
                font-size: 12px;
                color: var(--formgent-color-dark);
                background: transparent;
                border: none;
                cursor: pointer;
                transition: all ease .3s;
                &:hover {
                    color: var(--formgent-color-danger);
                }
            }
        }
    }

    .response-table__drawer__tab__submission {
        display: flex;
        gap: 20px;
        flex-direction: column;
        .response-table__drawer__tab__submission__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .response-table__drawer__tab__submission__title {
            font-size: 14px;
            font-weight: 600;
            color: var(--formgent-color-dark);
            margin: 0;
        }
        .response-table__drawer__tab__submission__add {
            display: flex;
            gap: 6px;
            align-items: center;
            font-size: 12px;
            padding: 8px 15px;
            margin: 0;
            color: var(--formgent-color-white);
            background: var(--formgent-color-gray);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: all ease .3s;
            &:hover {
                background: var(--formgent-color-dark);
            }
        }
        .response-table__drawer__tab__submission__content {
            display: flex;
            gap: 20px;
            flex-direction: column;
            .response-table__drawer__tab__submission__content__single {
                display: flex;
                gap: 10px;
                .response-table__drawer__tab__submission__content__single__wrapper {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                }
                .response-table__drawer__tab__submission__content__btn {
                    font-size: 12px;
                    padding: 0;
                    margin: 0;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    transition: all ease .3s;
                }
                
                .response-table__drawer__tab__submission__content__published-date {
                    font-size: 12px;
                }
                .response-table__drawer__tab__submission__content__text {
                    font-size: 12px;
                    margin: 0;
                }
            }
        }
        .response-table__drawer__tab__submission__note {
            .response-table__drawer__tab__submission__input {
                width: 100%;
                height: 200px;
                padding: 15px;
                border-radius: 10px;
            }
            .response-table__drawer__tab__submission__save {
                font-size: 12px;
                padding: 5px 10px;
                margin: 10px 0 0;
                color: var(--formgent-color-white);
                background: var(--formgent-color-gray);
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all ease .3s;
                &:hover {
                    background: var(--formgent-color-dark);
                }
            }
        }
    }

    .response-table__drawer__tab__info {
        display: flex;
        gap: 15px;
        flex-direction: column;
        .response-table__drawer__tab__info__single {
            display: flex;
            gap: 10px;
            .response-table__drawer__tab__info__title {
                font-size: 14px;
                font-weight: 600;
                color: var(--formgent-color-dark);
                margin: 0;
                width: 200px;
                min-width: 200px;
            }
            .response-table__drawer__tab__info__value {
                display: flex;
                gap: 5px;
                font-size: 14px;
                color: var(--formgent-color-light-gray);
                margin: 0;
            }
        }

        .response-table__drawer__tab__info__tag {
            display: flex;
            gap: 6px;
            margin: 0;
            padding: 3px 5px;
            border-radius: 6px;
            color: var(--formgent-color-dark);
            background-color: var(--formgent-color-bg-light);
            &.completed {
                color: var(--formgent-color-primary);
                background-color: var(--formgent-primary-light-button-bg);
            }
        }
    }
`;

export {
	FormDeleteAlertStyle,
	TableActionStyle,
	TableDrawerStyle,
	TableHeaderStyle,
	TableSelectionStyle,
	TableStyle,
	TableTabStyle,
};
