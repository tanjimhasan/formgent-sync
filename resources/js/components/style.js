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
            background-color: var(--formgent-color-dark)
        }
`;

export { DropdownStyle, InputStyle, ButtonStyle };
