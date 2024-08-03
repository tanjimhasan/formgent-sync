import Styled from 'styled-components';

const CreatePopupStyle = Styled.div`
    width: fit-content;
    margin: 0 auto;
    @media only screen and (max-width: 575px){
        width: 100%;
    }
    .formgent-createPopup{
        text-align: center;
        margin: 50px 0;
        .formgent-toggle-inline{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .formgent-toggle__label{
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 500;
                color: var(--formgent-color-dark);
                cursor: pointer;
            }
        }
    }

    .formgent-select__option{
        display: flex;
        .formgent-checkbox{
            margin-right: 10px;
        }
    }

    .formgent-createPopup__header{
        h4{
            font-size: 30px;
            font-weight: 600;
            margin: 0 0 15px;
            line-height: 1.27;
            color: var(--formgent-color-dark);
        }
        p{
            font-size: 16px;
            font-weight: 400;
            margin: 0;
        }
    }

    .formgent-createPopup__actions{
        display: flex;
        align-items: center;
        margin-top: 32px;
        @media only screen and (max-width: 400px){
            flex-wrap: wrap;
        }
    }

    .formgent-createPopup__action{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        border-radius: 20px;
        padding: 30px;
        text-decoration: none;
        cursor: pointer;
        max-width: 180px;
        text-align: center;
        background-color: var(--formgent-color-bg-light);
        transition: var(--formgent-transition);
        &:hover{
            background-color: var(--formgent-color-bg-deep);
        }
        @media only screen and (max-width: 480px){
            width: 50%;
            padding: 20px 0;
        }
        @media only screen and (max-width: 400px){
            width: 100%;
        }
    }

    .formgent-createPopup__action-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background-color: var(--formgent-color-white);
        svg{
            fill: var(--formgent-color-primary);
        }
    }

    .formgent-createPopup__action-label{
        display: block;
        font-size: 16px;
        font-weight: 500;
        margin-top: 20px;
        line-height: 1.38;
        color: var(--formgent-color-dark);
    }

    .formgent-validate-danger{
        display: block;
    }

    .formgent-form-group{
        flex-direction: column;
        &__element{
            font-size: 16px;
            min-height: 50px;
            padding-inline-start: 20px;
            padding-inline-end: 20px;
            border-radius: 12px;
        }
    }

    .formgent-btn {
        min-height: 50px;
    }
`;

const ElementPreparationStyle = Styled.div`
    width: 100%;
    min-width: 320px;
    .formgent-import-attachment__title{
        font-size: 18px;
        color: var(--formgent-color-dark);
    }
    .formgent-import-attachment__progress{
        display: flex;
        align-items: center;
    }
    .formgent-import-attachment__percentage{
        margin-left: 15px;
    }
`;

const CreateFormStyleWrap = Styled.div`
    text-align: start;
    margin-top: 50px;
    .formgent-form-group{
        width: 450px;
        @media only screen and (max-width: 575px){
            width: 100%;
        }
    }
    .formgent-btn-block{
        margin-top: 30px;
    }
    .formgent-tooltip-toggle{
        position: relative;
        top: 1px;
        display: inline-block;
        margin-inline-start: 10px;
        line-height: .85;
        cursor: pointer;
    }
    .formgent-form__element,
    .formgent-form__element-inline{
        border-radius: 12px;
        background-color: var(--formgent-color-bg-light);
    }
    .formgent-form__element{
        &::placeholder{
            color: #3C3C3C;
        }
    }
    .formgent-form__element-inline{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .formgent-form__label{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: var(--formgent-color-dark);
    }
    .formgent-select {
        margin-top: 12px;
        &__control{
            background-color: var(--formgent-color-bg-light);
        }
    }
`;

export { CreatePopupStyle, ElementPreparationStyle, CreateFormStyleWrap };
