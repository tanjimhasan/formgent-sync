import Styled from 'styled-components';

const EditorHeaderStyle = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 0;
    margin-bottom: 20px;
    background-color: var(--formgent-color-white);
    position: sticky;
    top: 32px;
    min-height: 60px;
    z-index: 98;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    .formgent-editor-header__info {
        flex: 1;
        display: flex;
        gap: 15px;
        align-items: center;
        svg {
            width: 14px;
            height: 14px;
            path {
                fill: var(--formgent-font-color);
                transition: fill ease .3s;
            }
        }
        .formgent-editor-header__info__redirect {
            display: flex;
            align-items: center;
            border-right: 1px solid var(--formgent-color-border-light);
            button {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 0 15px;
                font-size: 14px;
                font-weight: 600;
                color: var(--formgent-color-dark);
                background-color: transparent;
                border: none;
                cursor: pointer;
                transition: color ease .3s;
                svg path {
                    fill: var(--formgent-color-dark);
                    transition: fill ease .3s;
                }
                &:hover {
                    color: var(--formgent-color-primary);
                    svg path {
                        fill: var(--formgent-color-primary);
                    }
                }
            }
        }
        
        .formgent-editor-header__info__logo {
            width: 60px;
            height: 60px;
            display: flex;
            gap: 6px;
            align-items: center;
            justify-content: center;
            background-color: var(--formgent-color-bg-deep);
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .formgent-editor-header__info__wrap {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .formgent-editor-header__info__title {
            display: flex;
            gap: 6px;
            align-items: center;
            svg {
                &:hover {
                    cursor: pointer;
                    path {
                        fill: var(--formgent-color-primary);
                    }
                }
            }
            input {
                border-color: var(--formgent-color-border);
                box-shadow: none;
                outline: none;
                &:hover,
                &:focus {
                    border-color: var(--formgent-color-primary);
                }
            }
            span {
                font-size: 12px;
                font-weight: 600;
                color: var(--formgent-color-dark);
            }
        }
        .formgent-editor-header__info__status {
            display: flex;
            align-items: center;
            gap: 6px;
            opacity: .6;
            font-size: 12px;
            font-weight: 400;
        }
    }
    .formgent-editor-header__nav {
        display: flex;
        gap: 15px;
        flex: 1;
        justify-content: center;
        a {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 15px;
            border-radius: 8px;
            color: var(--formgent-font-color);
            text-decoration: none;
            transition: all ease .3s;
            &.active,
            &:hover {
                color: var(--formgent-color-primary);
                background-color: var(--formgent-primary-light-button-bg);
            }
        }
    }

    .formgent-editor-header__actions {
        display: flex;
        gap: 15px;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        button {
            height: 38px;
            font-size: 14px;
            font-weight: 600;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--formgent-font-color);
            text-decoration: none;
            cursor: pointer;
            svg {
                width: 16px;
                height: 16px;
                path {
                    fill: var(--formgent-font-color);
                }
            }
            &:hover {
                color: var(--formgent-color-primary);
                svg {
                    path {
                        fill: var(--formgent-color-primary);
                    }
                }
            }
        }
        .formgent-editor-header__actions__button {
            font-size: 14px;
            font-weight: 600;
            padding: 10px 15px;
            border-radius: 8px;
            color: var(--formgent-color-dark);
            background-color: var(--formgent-color-bg-light);
            text-decoration: none;
            transition: all ease .3s;
            &.active,
            &:hover {
                color: var(--formgent-color-primary);
                background-color: var(--formgent-primary-light-button-bg);
            }
        }
        .formgent-editor-header__actions__modify {
            display: flex;
            gap: 10px;
        }
        .formgent-editor-header__actions__status {
            display: flex;
            gap: 10px;
        }
        .formgent-editor-header__actions__dropdown {
            position: relative;
            .formgent-dropdown__button {
                font-size: 18px;
            }

        }
    }
`;

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

export {
	CreateFormStyle,
	DropableBoxStyle,
	EditorContentStyle,
	EditorHeaderStyle,
	InserterStyle,
};
