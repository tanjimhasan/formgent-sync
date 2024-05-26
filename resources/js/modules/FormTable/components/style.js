import Styled from 'styled-components';

const TitleBoxStyle = Styled.div`
display: flex;
align-items: center;
gap: 20px;
.newform-titleBox__editor{
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
        transition: var(--newform-transition);
        &:active,
        &:focus{
            border: 0 none;
            border-bottom: 1px solid var(--newform-color-dark);
            outline: 0;
            box-shadow: none;
        }
    }
    span{
        font-size: 13px;
        color: var(--newform-color-danger);
        display: block;
        margin-top: 10px;
    }
}
.newform-titleBox__actions{
    display: flex;
    align-items: center;
    gap: 5px;
}

.newform-titleBox-action-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer ;
    border-radius: 50%;
    transition: var(--newform-transition);
    &.newform-titleBox__actions-yes{
        background-color: var(--newform-color-success);
        border: 1px solid var(--newform-color-success);
    }
    &.newform-titleBox__actions-cancel{
        background-color: var(--newform-color-danger);
        border: 1px solid var(--newform-color-danger);
    }
    svg{
        width: 10px;
        height: 10px;
        path{
            fill: #fff;
            transition: var(--newform-transition);
        }
    }
    .newform-circle-loader {
        border-color: #fff;
        border-bottom-color: transparent;
        transition: var(--newform-transition);
    }
    &:hover{
        background: none;
        svg{
            path{
                fill: var(--newform-color-dark);
            }
        }
        .newform-circle-loader {
            border-color: var(--newform-primary-color);
            border-bottom-color: transparent;
        }
    }
}
.newform-titleBox__content{
    display: flex;
    align-items: center;
    gap: 12px;
    .newform-titleBox-media__form{
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
.newform-titleBox-media{
    flex: none;
}
.newform-titleBox-text{
    text-align: left;
    position: relative;
    transition: var(--newform-transition);
    a{
        text-decoration: none;
    }
    .newform-title{
        font-size: 15px;
        font-weight: 600;
        color: var(--newform-color-dark);
        transition: var(--newform-transition);
    }
}
.newform-titleBox-meta{
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 10px 0 0;
    transition: var(--newform-transition);
    .newform-titleBox-meta__id{
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
        color: var(--newform-color-light-gray);
        margin: 0;
    }
}
.newform-form-action{
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
    transition: var(--newform-transition);
    .newform-btn{
        color: var(--newform-color-dark);
        &:hover{
            background: var(--newform-color-primary);
            border-color: var(--newform-color-primary);
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
                color: var(--newform-color-light-gray);
            }
        }
    }
    .ant-table-tbody{
        tr{
            background-color: var(--newform-color-white);
            td{
                &:first-child{
                    position: relative;
                    border-left: 2px solid transparent;
                    padding-right: 0;
                    transition: var(--newform-transition);
                }
                &:last-child{
                    padding-right: 21px;
                }
            }
        }
    }
`;

export { TitleBoxStyle, TableStyle };
