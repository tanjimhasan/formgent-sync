import Styled from 'styled-components';

const EditorHeaderStyle = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 0;
    margin-bottom: 20px;
    background-color: var(--formgent-color-white);
    position: sticky;
    top: 32px;
    min-height: 60px;
    z-index: 98;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
`;

const InserterStyle = Styled.div`
    width: 340px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    .formgent-editor-inserter__group{

        .ant-row{
            margin: -7.5px 0;
        }
        .ant-col{
            margin: 7.5px 0;
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
    .formgent-editor-inserter__field{
        border-radius: 8px;
        color: #1e1f21;
        cursor: move;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 12px 10px;
        min-height: 80px;
        text-align: center;
        transition: all .05s;
        border: 1px solid var(--formgent-color-border);
        background-color: var(--formgent-color-bg-light);
    }
    .formgent-editor-inserter__field--icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 6px;
        margin-bottom: 10px;
        background-color: var(--formgent-color-white);
        svg{
            width: 14px;
            height: 14px;
        }
    }
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
    width: 340px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--formgent-color-white);
`;

export {
	EditorHeaderStyle,
	InserterStyle,
	DropableBoxStyle,
	EditorContentStyle,
	CreateFormStyle,
	FieldCustomizerStyle,
};
