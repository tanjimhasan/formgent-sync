import Styled from 'styled-components';

const TableStyle = Styled.div`
    .ant-table{
        background-color: transparent;
        table{
            border-spacing: 0 10px;
            tr{
                th,
                td{
                    &:first-child{
                        border-radius: 12px 0 0 12px;
                        padding-inline-start: 15px;
                    }
                    &:last-child{
                        border-radius: 0 12px 12px 0;
                        text-align: end;
                    }
                    .formgent-form-wrap {
                        display: flex;
                        justify-content: space-between;
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
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                padding: 15px 15px;
                text-align: start;
                color: var(--formgent-color-light-gray);
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
    justify-content: space-between;
`;

const TableActionStyle = Styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    justify-content: end;
    .formgent-table-header__search {
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
        border: 1px solid var(--formgent-color-bg-gray) !important;
        border-radius: 8px;
        &:hover {
            background: var(--formgent-color-bg-light) !important;
        }
    }
    
`;

const TableTabStyle = Styled.div`
    .ant-tabs-nav {
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

export {
	FormDeleteAlertStyle,
	TableActionStyle,
	TableHeaderStyle,
	TableSelectionStyle,
	TableStyle,
	TableTabStyle,
};
