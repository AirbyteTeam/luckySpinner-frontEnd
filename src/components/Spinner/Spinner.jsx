import React, {Component, useState} from 'react'
import './Spinner.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import gift from "../../images/gift.gif"

import * as yup from "yup";
import {BiArrowBack} from "react-icons/bi";
import {FiArrowLeft} from "react-icons/fi";

const Spinner = () => {

    const [spinnerState,setSpinnerState] = useState("circle")
    const [showModal,setShowModal] = useState(false)
    const [resultOfWheel,setResultOfWheel] = useState("")
    const [errors, setErrors] = useState([])
    const [number, setNumber] = useState("")
    const handleInput = (value) => {
        setNumber(value.target.value)
    }
    const handleClose = () => {
        setShowModal(false)
    };

    const handleShow = (text) => {
        setResultOfWheel(text)
        setShowModal(true)
    };

    const validation = async () => {
        const numberReg = /^(98|0)9\d{9}$/
        const schema = yup.object().shape({
            number: yup.string().required("این فیلد الزامی است").matches(numberReg, "شماره موبایل نادرست است")
        })
        try {
            return await schema.validate({number}, {abortEarly: true})
        } catch (error) {
            setErrors(error.errors)
        }
    }

      //Function to Rotate and Stop the spinner
      const RotateSpinner = async ()=>{

          const result = await validation()
          if (result !== undefined) {
              setErrors([])
              setSpinnerState("circle start-rotating")
              setTimeout(()=>{setSpinnerState("circle start-rotating stop-rotating")
                  const res = checkValue();
                  let device = "web-pwa"
                  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                      device = "mobile-pwa"
                  }
                  handleShow(res);
              },Math.floor(Math.random()*10000+1))
          }
      }

      //Function to Check Value overlapping the pin
      const checkValue = ()=>{
        let width = window.innerWidth;
        let height  = window.innerHeight;
        let elem = document.elementFromPoint(width/2,height/3)
        return elem.childNodes[0].textContent
      }





        return (
            <>
                <div className="arrow"></div>
                <div className="button-container"><span></span></div>
                <ul className={spinnerState}>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="1">پــــوچ</span>
                        </div>
                      </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="2">میگ میگ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="3">پــــوچ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="4">پـــریفما</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span " id="5">پــــوچ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span " id="6">ایــزایــن</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="7">پــــوچ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                      <span className="circle-span" id="8">تخفیف خرید عینک</span>
                    </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="9">پــــوچ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="10">تخفیف تابلو فرش</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="11">پــــوچ</span>
                      </div>
                    </li>
                    <li>
                      <div className="circle-section">
                        <span className="circle-span" id="12">آموزش تعمیرات</span>
                    </div>
                    </li>
                </ul>
                <div className="form-container">
                    <div className="phoneNumberInput">
                        <input type="text" placeholder="شماره همراه خود را وارد کنید" onChange={(value)=>{handleInput(value)}}/>
                    </div>
                    {
                        errors.map((error, index) =>
                            <div className={"errorField"}>
                                <span key={index}>{error}</span>
                            </div>
                        )
                    }
                    <div className="start-button-container">
                        <button  className="start-button" onClick={RotateSpinner} disabled={spinnerState==="circle start-rotating"}>شانست رو امتحان کن</button>
                    </div>
                </div>

                <Modal show={showModal} onHide={handleClose} animation={true} centered>
                    <Modal.Body>
                        {
                            resultOfWheel === "پــــوچ" ?
                                (
                                    <div className='d-flex justify-content-center modal-container'>
                                        <div>پــــوچ</div>
                                    </div>
                                ):(
                                    <div className='d-flex flex-col justify-content-center modal-container'>
                                        <div className="gif-container"><img src={gift} alt="gif"/></div>
                                        <div className="text-container">
                                            <h3>{resultOfWheel}</h3>
                                            <div className="discount">
                                                <span className="discount-code">migmig1452</span>
                                                <span> : کد تخفیف</span>
                                            </div>
                                            <div className="website"><a href="#" target="_blank">  ورود به سایت<span>{resultOfWheel}</span><BiArrowBack/></a></div>
                                        </div>
                                    </div>
                                )
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            بستن
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )

}
export default Spinner