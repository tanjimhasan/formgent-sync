import Styled from 'styled-components';

const CreatePopupStyle = Styled.div`
    width: fit-content;
    margin: 0 auto;
    @media only screen and (max-width: 575px){
        width: 100%;
    }
    .newform-createPopup{
        text-align: center;
        margin: 50px 0;
        .newform-toggle-inline{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .newform-toggle__label{
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 500;
                color: var(--newform-color-dark);
                cursor: pointer;
            }
        }
    }

    .newform-select__option{
        display: flex;
        .newform-checkbox{
            margin-right: 10px;
        }
    }

    .newform-createPopup__header{
        h4{
            font-size: 30px;
            font-weight: 600;
            margin: 0 0 15px;
            line-height: 1.27;
            color: var(--newform-color-dark);
        }
        p{
            font-size: 16px;
            font-weight: 400;
            margin: 0;
        }
    }

    .newform-createPopup__actions{
        display: flex;
        align-items: center;
        margin-top: 32px;
        @media only screen and (max-width: 400px){
            flex-wrap: wrap;
        }
    }

    .newform-createPopup__action{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        border-radius: 20px;
        padding: 40px 52px;
        text-decoration: none;
        cursor: pointer;
        background-color: var(--newform-color-bg-light);
        transition: var(--newform-transition);
        &:hover{
            background-color: var(--newform-color-bg-deep);
        }
        @media only screen and (max-width: 480px){
            width: 50%;
            padding: 20px 0;
        }
        @media only screen and (max-width: 400px){
            width: 100%;
        }
    }

    .newform-createPopup__action-icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background-color: var(--newform-color-white);
        svg{
            fill: var(--newform-color-primary);
        }
    }

    .newform-createPopup__action-text{
        display: block;
        font-size: 16px;
        font-weight: 500;
        max-width: 96px;
        margin-top: 20px;
        line-height: 1.38;
        color: var(--newform-color-dark);
    }

    .newform-validate-danger{
        display: block;
    }

    .newform-form-group{
        flex-direction: column;
        &__element{
            font-size: 16px;
            min-height: 50px;
            padding-inline-start: 20px;
            padding-inline-end: 20px;
            border-radius: 12px;
        }
    }

    .newform-btn {
        min-height: 50px;
    }
`;

const ElementPreparationStyle = Styled.div`
    width: 100%;
    min-width: 320px;
    .newform-import-attachment__title{
        font-size: 18px;
        color: var(--newform-color-dark);
    }
    .newform-import-attachment__progress{
        display: flex;
        align-items: center;
    }
    .newform-import-attachment__percentage{
        margin-left: 15px;
    }
`;

const CreateFormStyleWrap = Styled.div`
    text-align: start;
    margin-top: 50px;
    .newform-form-group{
        width: 450px;
        @media only screen and (max-width: 575px){
            width: 100%;
        }
    }
    .newform-btn-block{
        margin-top: 30px;
    }
    .newform-tooltip-toggle{
        position: relative;
        top: 1px;
        display: inline-block;
        margin-inline-start: 10px;
        line-height: .85;
        cursor: pointer;
    }
    .newform-form__element,
    .newform-form__element-inline{
        border-radius: 12px;
        background-color: var(--newform-color-bg-light);
    }
    .newform-form__element{
        &::placeholder{
            color: #3C3C3C;
        }
    }
    .newform-form__element-inline{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .newform-form__label{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 600;
        color: var(--newform-color-dark);
    }
    .newform-select {
        margin-top: 12px;
        &__control{
            background-color: var(--newform-color-bg-light);
        }
    }
`;

export { CreatePopupStyle, ElementPreparationStyle, CreateFormStyleWrap };
