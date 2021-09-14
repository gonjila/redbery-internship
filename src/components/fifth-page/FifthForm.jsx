import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiOutlineLeft } from 'react-icons/ai';

import styled from 'styled-components';

function FifthForm() {
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const onSubmit = data => {
        console.log(data);
        // history.push('/sixth-page');
    };

    const onPrevBtnClick = () => {
        history.push('/forth-page');
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <p>
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები
                ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
                კი — ჩვენთან გადმოსვლის.
                <br />
                <br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
                გაიშვიათდა.
            </p>

            <p>
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ
                ჩაერთვება?*
            </p>

            <label>
                <input value='კვირაში ორჯერ' type='radio' {...register('question1', { required: true })} />
                კვირაში ორჯერ
            </label>

            <label>
                <input value='კვირაში ერთხელ' type='radio' {...register('question1', { required: true })} />
                კვირაში ერთხელ
            </label>

            <label>
                <input value='ორ კვირაში ერთხელ' type='radio' {...register('question1', { required: true })} />
                ორ კვირაში ერთხელ
            </label>

            <label>
                <input value='თვეში ერთხელ' type='radio' {...register('question1', { required: true })} />
                თვეში ერთხელ
            </label>

            <p>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</p>

            <label>
                <input value='0' type='radio' {...register('question2', { required: true })} />0
            </label>

            <label>
                <input value='1' type='radio' {...register('question2', { required: true })} />1
            </label>

            <label>
                <input value='2' type='radio' {...register('question2', { required: true })} />2
            </label>

            <label>
                <input value='3' type='radio' {...register('question2', { required: true })} />3
            </label>

            <label>
                <input value='4' type='radio' {...register('question2', { required: true })} />4
            </label>

            <label>
                <input value='5' type='radio' {...register('question2', { required: true })} />5
            </label>

            <p>რას ფიქრობ ფიზიკურ შეკრებებზე?</p>

            <textarea cols='30' rows='10' {...register('question3')} />

            <p>
                რას ფიქრობ არსებულ გარემოზე:
                <br /> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
            </p>

            <textarea cols='30' rows='10' {...register('question4')} />

            <button type='button' className='prevPage' onClick={onPrevBtnClick}>
                <AiOutlineLeft style={{ width: '100%', height: '100%' }} />
            </button>
            <button type='submit' className='nextPage'>
                დასრულება
            </button>
        </Container>
    );
}

export default FifthForm;

const Container = styled.form`
    display: flex;
    flex-direction: column;

    p {
        font-family: Helvetica Neue LT GEO;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px;
        text-align: left;

        width: 622px;
        height: 83px;
        margin: 30px 0 15px;

        &:first-of-type {
            font-family: Helvetica Neue LT GEO;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 27px;
            letter-spacing: 0em;
            text-align: left;

            width: 606px;
            height: 251px;
            margin: 0;
        }
        &:nth-of-type(4),
        &:nth-of-type(3) {
            height: 31px;
        }
        &:nth-of-type(5) {
            height: 60px;
            margin-top: 47px;
        }
    }

    label {
        font-family: Helvetica Neue LT GEO;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        width: 50%;
        margin-bottom: 18px;
        cursor: pointer;

        display: inline-flex;
        align-items: center;
    }

    input[type='radio'] {
        accent-color: #232323;
        -webkit-accent-color: #232323;
        width: 23px;
        height: 23px;
        margin: 0 22px;
    }

    textarea {
        display: block;
        font-size: 20px;
        word-wrap: break-word;
        height: 184px;
        width: 622px;
        border: 0.8px solid #232323;
        box-sizing: border-box;
        background-color: transparent;
        resize: none;
    }

    button {
        width: 25px;
        height: 35px;
        border: 0;
        background-color: transparent;
        position: absolute;
        cursor: pointer;
        z-index: 5;

        &.prevPage {
            left: 887px;
            top: 1876px;
            right: 1019px;
            bottom: 104px;
        }
        &.nextPage {
            font-family: TBC Contractica CAPS;
            color: #ffffff;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;

            width: 180px;
            height: 56px;
            left: 643px;
            top: 1746px;
            border-radius: 42px;
            padding: 17px, 29px;
            background: #208298;
        }
    }
`;
