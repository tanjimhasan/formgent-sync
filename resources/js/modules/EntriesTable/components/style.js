import Styled from 'styled-components';

const TitleBoxStyle = Styled.div`
display: flex;
align-items: center;
gap: 20px;
.formgent-titleBox__editor{
    display: flex;
    align-items: center;
    gap: 20px;
    input{
        border-top: 0px none;
        border-inline-end: 0px none;
        border-bottom: 1px solid #ededed;
        border-inline-start: 0px none;
        border-image: initial;
        background-color: transparent;
        border-radius: 0px;
        padding: 4px 0;
        line-height: 2;
        min-height: 30px;
        color: #2c3338;
        transition: var(--formgent-transition);
        &:active,
        &:focus{
            border: 0 none;
            border-bottom: 1px solid var(--formgent-color-dark);
            outline: 0;
            box-shadow: none;
        }
    }
    span{
        font-size: 13px;
        color: var(--formgent-color-danger);
        display: block;
        margin-top: 10px;
    }
}
.formgent-titleBox__actions{
    display: flex;
    align-items: center;
    gap: 5px;
}

span.formgent-titleBox-action-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer ;
    border-radius: 50%;
    transition: var(--formgent-transition);
    &.formgent-titleBox__actions-yes{
        background-color: var(--formgent-color-success);
        border: 1px solid var(--formgent-color-success);
    }
    &.formgent-titleBox__actions-cancel{
        background-color: var(--formgent-color-danger);
        border: 1px solid var(--formgent-color-danger);
    }
    svg{
        width: 10px;
        height: 10px;
        path{
            fill: #fff;
            transition: var(--formgent-transition);
        }
    }
    .formgent-circle-loader {
        border-color: #fff;
        border-bottom-color: transparent;
        transition: var(--formgent-transition);
    }
    &:hover{
        background: none;
        svg{
            path{
                fill: var(--formgent-color-dark);
            }
        }
        .formgent-circle-loader {
            border-color: var(--formgent-primary-color);
            border-bottom-color: transparent;
        }
    }
}
.formgent-titleBox__content{
    display: flex;
    align-items: center;
    gap: 12px;
    .formgent-titleBox-media__form{
        width: 44px;
        height: 44px;
        border-radius: 10px;
        display: block;
    }
    img{
        width: 38px;
        height: 38px;
        object-fit: cover;
        border-radius: 8px;
    }
}
.formgent-titleBox-media{
    flex: none;
}
.formgent-titleBox-text{
    text-align: left;
    position: relative;
    transition: var(--formgent-transition);
    a{
        text-decoration: none;
    }
    .formgent-title{
        font-size: 15px;
        font-weight: 600;
        color: var(--formgent-color-dark);
        transition: var(--formgent-transition);
    }
}
.formgent-titleBox-meta{
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 10px 0 0;
    transition: var(--formgent-transition);
    .formgent-titleBox-meta__id{
        position: relative;
        &::after{
            content: '';
            width: 2px;
            height: 2px;
            background: #6e6e6e;
            border-radius: 50%;
            display: block;
            position: absolute;
            inset-inline-end: -7px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    li{
        font-size: 12px;
        font-weight: 500;
        color: var(--formgent-color-light-gray);
        margin: 0;
    }
}
.formgent-form-action{
    display: flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    white-space: nowrap;
    left: 0;
    bottom: -8px;
    margin: 0;
    visibility: hidden;
    opacity: 0;
    transition: var(--formgent-transition);
    .formgent-btn{
        color: var(--formgent-color-dark);
        &:hover{
            background: var(--formgent-color-primary);
            border-color: var(--formgent-color-primary);
            color: #fff;
        }
    }
    li{
        margin: 0;
    }
}
`;

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
const HeaderStyle = Styled.div`
    .formgent-header-top__content{
        align-items: center;
    }
`;

const TablkSelectionStyle = Styled.div`
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

export {
	TitleBoxStyle,
	TableStyle,
	HeaderStyle,
	TablkSelectionStyle,
	FormDeleteAlertStyle,
};
