import Styled from 'styled-components';

const DropdownStyle = Styled.div`
    .ant-dropdown{
        .ant-dropdown-menu{

        }
    }
`;

const InputStyle = Styled.div`
    .ant-input{
        padding: var(--ant-input-padding-block) var(--ant-input-padding-inline);
        color: var(--ant-color-text);
        line-height: var(--ant-line-height);
        border-radius: var(--ant-border-radius);
        background: var(--ant-color-bg-container);
        &.ant-input-lg{
            padding: var(--ant-input-padding-block-lg) var(--ant-input-padding-inline-lg);
        }
        &.ant-input-outlined{
            border-color: var(--ant-color-border);
            border-width: var(--ant-line-width);
            &:focus{
                outline: 0;
                border-color: var(--formgent-color-dark);
                box-shadow: 0 0;
            }
        }
    }
`;

const ButtonStyle = Styled.div`
    .ant-btn-dark{
        color: var(--formgent-color-white);
        background-color: var(--formgent-color-dark);
    }
    .ant-btn-white{
        background-color: var(--formgent-color-white);
    }
`;

const ModalAlertStyle = Styled.div`
    padding: 84px 0 0;
    .formgent-modal-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
        background-color: var(--formgent-color-bg-light);
        .formgent-btn{
            margin: 0 5px;
        }
        &.formgent-modal-filter-action{
            .formgent-modal-action__cancel{
                background: transparent;
                border: 0 none;
                padding: 0;
                color: var(--formgent-color-light-gray);
                &:hover{
                    color: var(--formgent-color-dark);
                }
            }
        }
        &.formgent-delete-alert-modal-action,
        &.formgent-conversation-delete-action,
        &.formgent-form-delete-alert-action,
        &.formgent-response-delete-alert-action,
        &.formgent-delete-tag-alert-action{
            justify-content: flex-end;
            .formgent-btn{
                border-radius: 10px;
                min-height: 40px;
            }
        }
    }

    //filter modal
    .formgent-modal-filter-inner{
        padding: 0 30px 30px;
        .formgent-modal-filter__tags-label{
            font-size: 16px;
            font-weight: 600;
            color: var(--formgent-color-dark);
            margin-bottom: 20px;
            display: block;
        }
        .formgent-modal-filter__tags-list{
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            max-height: 170px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .formgent-modal-filter__tags-item{
            flex: 0 0 50%;
            margin-bottom: 18px;
            .formgent-checkbox{
                display: flex;
                gap: 12px;
                label{
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--formgent-color-gray);
                    svg{
                        inset-inline-start: -25px;
                    }
                }
            }
        }
        .formgent-show-more{
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--formgent-color-dark);
            margin-top: 0;
            text-decoration: underline;
            cursor: pointer;
            &--active{
                margin-top: 18px;
            }
        }
    }
    .formgent-modal-action{}

    .formgent-session-expired__content{
        margin-top: -84px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px;
        h2{
            margin: 30px 0 20px;
            font-size: 24px;
            font-weight: 500;
            color: var(--formgent-color-dark);
        }
        p{
            margin: 0 0 50px;
        }
    }
`;

export { DropdownStyle, InputStyle, ButtonStyle, ModalAlertStyle };
