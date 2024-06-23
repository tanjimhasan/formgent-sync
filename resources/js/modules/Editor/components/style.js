import Styled from 'styled-components';

const InserterStyle = Styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 340px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    transition: width var(--formgent-transition);
    .formgent-editor-inserter__group{

        .ant-row{
            margin: -7.5px 0;
        }
        .ant-col{
            margin: 7.5px 0;
        }
    }
    .formgent-sidebar-collapse {
        inset-inline-start: calc(100% + 25px);
    }

    &.formgent-content-collapsed {
        width: 0;
        .formgent-editor-sider {
            opacity: 0;
            visibility: hidden;
            width: 0;
        }
    }
`;

const DropableBoxStyle = Styled.div`
    flex: 1;
    margin: 60px 25px;
    border-radius: 10px;
    padding: 40px 15px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--formgent-color-white);
    .formgent-dropable-field-empty-placeholder{
        position: relative;
        border-radius: 8px;
        min-height: 50px;
        padding: 40px 0;
        background-color: var(--formgent-color-bg-gray);
        border: 1px dashed var(--formgent-color-bg-deep);
        .formgent-dropable-field-add{
            position: absolute;
            left: 50%;
            bottom: -12px;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: var(--formgent-color-dark);
            font-size: 24px;
            color: var(--formgent-color-white);
        }
    }
`;

const EditorContentStyle = Styled.div`
    padding: 0 15px;
    .formgent-dropable-field{
        position: relative;
        padding: 15px 30px;
        border-radius: 10px;
        border: 2px solid transparent;
        &:hover{
            border-color: var(--formgent-color-dark);
            .formgent-dropable-field__actions{
                visibility: visible;
                opacity: 1;
            }
            .formgent-dropable-field__sorting{
                opacity: 1;
                visibility: visible;
            }
            .formgent-fieldlist-popover-trigger{
                opacity: 1;
                visibility: visible;
            }
        }
        &.formgent-active{
            border-color: var(--formgent-color-dark);
            .formgent-dropable-field__sorting{
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .formgent-dropable-field__sorting{
        position: absolute;
        left: 15px;
        top: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateX(-50%);
        svg{
            width: 16px;
            hwight: 16px;
        }
    }
    .formgent-submit-button{
        padding: 15px 30px;
        border-radius: 10px;
        border: 2px solid transparent;
        &:hover, 
        &.formgent-active{
            border-color: var(--formgent-color-dark);
        }
    }
    .formgent-droppable-field-overlay{
        position: relative;
        padding: 15px 30px;
        border-radius: 10px;
        background-color: var(--formgent-color-white);
        border: 2px solid var(--formgent-color-dark);
    }
    
    .formgent-dropable-field__actions{
        border-radius: 6px;
        overflow: hidden;
        visibility: hidden;
        opacity: .3;
        position: absolute;
        right: 14px;
        top: -18px;
        z-index: 10;
        .formgent-icon{
            color: #fff;
            cursor: pointer;
            padding: 10px;
            display: inline-flex;
            align-items: center;
            background-color: #4b4c4d;
            &:hover{
                background-color: var(--formgent-color-primary);
            }
            svg{
                width: 16px;
                height: 16px;
            }
            &.formgent-disabled{
                cursor: unset;
            }
        }
    }
    .formgent-editor-sider__nav{
        margin: 0;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        border-bottom: 1px solid var(--formgent-color-border-light);
        li{
            width: 50%;
            margin: 0;
            text-align: center;
        }
        a{
            font-size: 14px;
            display: inline-block;
            padding: 10px 0;
            width: 100%;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            &:focus{
                outline: 0;
                box-shadow: 0 0;
            }
            &.formgent-active{
                border-color: var(--formgent-color-dark);
            }
        }
    }
    .formgent-editor-sider__content{
        padding: 0 15px;
    }
`;

const CreateFormStyle = Styled.div`
    text-align: center;
    padding: 50px 0;
    .formgent-create-modal__content{
       max-width: 340px;
       margin: 0 auto;
    }
`;

const FieldCustomizerStyle = Styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 340px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    transition: width var(--formgent-transition);
    .formgent-editor-sider {
        width: 100%;
    }
    .formgent-sidebar-collapse {
        inset-inline-start: unset;
        inset-inline-end: calc(100% + 25px);
    }

    &.formgent-content-collapsed {
        width: 0;
        .formgent-editor-sider {
            opacity: 0;
            visibility: hidden;
            width: 0;
        }
    }
`;

const SidebarToggleStyle = Styled.button`
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: var(--formgent-color-bg-deep) !important;
`;

const FieldListPopoverStyle = Styled.div`
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    background-color: var(--formgent-color-dark);
    >div{
        line-height: 1;
    }
    svg{
        position: relative;
        top: 1px;
        width: 16px;
        height: 16px;
        path{
            stroke: var(--formgent-color-white);
        }
    }
    &.formgent-active{
        opacity: 1;
        visibility: visible;
    }
`;

export {
	CreateFormStyle,
	DropableBoxStyle,
	EditorContentStyle,
	FieldCustomizerStyle,
	InserterStyle,
	SidebarToggleStyle,
	FieldListPopoverStyle,
};
