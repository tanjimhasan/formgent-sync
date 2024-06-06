import Styled from 'styled-components';

const InserterStyle = Styled.div`
    width: 320px;
    height: calc(100vh - 100px);
    border-radius: 10px;
    background-color: var(--formgent-color-white);
    .formgent-editor-inserter__group{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const DropableBoxStyle = Styled.div`
    flex: 1;
    margin: 0 15px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow-y: auto;
    background-color: var(--formgent-color-white);
    .formgent-dropable-field-empty-placeholder{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        min-height: 50px;
        border: 1px dashed var(--formgent-color-bg-gray);
        span{
            display: inline-flex;
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
        align-items: center;
        justify-content: center;
        font-size: 14px;
        padding: 12px 15px;
        min-height: 80px;
        text-align: center;
        transition: all .05s;
        min-width: 90px;
        margin: 10px;
        border: 1px solid var(--formgent-color-border);
        background-color: var(--formgent-color-bg-light);
    }
    .formgent-dropable-field{
        position: relative;
        // padding: 30px;
        &:hover{
            .formgent-dropable-field__actions{
                visibility: visible;
                opacity: 1;
            }
        } 
    }
    .formgent-droppable-field-overlay{
        .formgent-dropable-field__actions{
            visibility: visible;
            opacity: 1;
        }
    }
    
    .formgent-dropable-field__actions{
        background-color: #4b4c4d;
        border-radius: 6px;
        overflow: hidden;
        visibility: hidden;
        opacity: .3;
        position: absolute;
        right: 14px;
        top: 8px;
        z-index: 10;
        .formgent-icon{
            color: #fff;
            cursor: pointer;
            padding: 10px;
        }
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

export { CreateFormStyle, DropableBoxStyle, EditorContentStyle, InserterStyle };
