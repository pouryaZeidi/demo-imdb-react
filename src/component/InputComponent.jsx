import React from 'react'
import style from '@/styles/Input.module.css'
import Button from '@/component/Button'

const InputComponent = ({btnleft,btnright,placeholder,btnText,leftIcon,rightIcon,btnColor,btnLeftIcon,btnRightIcon,onClick,id}) => {
  return (
    <div className={style.container}>
        {btnleft ? <Button id={id} onClick={onClick} btnInputleft color={btnColor} leftIcon={btnLeftIcon} rightIcon={btnRightIcon}> {btnText} </Button> : null}
        {leftIcon ? <div className={style.searchiconLeft}> {leftIcon} </div> : null}
        <input className={`${style.inputBox} ${btnleft ? style.btnLeft :''} ${btnright ? style.btnRight : ''} `}placeholder={placeholder ? placeholder : 'type your text'} type="text" />
        {btnright ? <Button id={id} onClick={onClick} btnInputright color={btnColor} leftIcon={btnLeftIcon} rightIcon={btnRightIcon}> {btnText} </Button> : null}
        {rightIcon ? <div className={style.searchiconRight}> {rightIcon} </div> : null}
    </div>
  )
}

export default InputComponent