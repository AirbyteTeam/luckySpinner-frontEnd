import React, {Component, useEffect, useState} from 'react'
import './Spinner.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import gift from "../../images/gift.gif"
import * as yup from "yup";
import {BiArrowBack} from "react-icons/bi";
import {FiArrowLeft} from "react-icons/fi";
import api from "../../api/api";
import axios from "axios";
const Spinner = () => {

    const [spinnerState,setSpinnerState] = useState("circle")
    const [showModal,setShowModal] = useState(false)
    const [resultOfWheel,setResultOfWheel] = useState({})
    const [errors, setErrors] = useState([])
    const [number, setNumber] = useState("")
    const [companyNames,setCompanyNames] = useState([]);
    const [sliceSize,setSliceSize] = useState(0);
    const getData = async ()=> {

    }
    useEffect( ()=>{
        async function getData() {
            try {
                let res = await axios({
                    method: 'GET',
                    url: "http://localhost:8010/api/v1/discount/companyNames",
                });
                let data = res.data;
                setCompanyNames([...data])
                const size = Math.ceil(360 / data.length)
                setSliceSize(size)
            }catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    const handleInput = (value) => {
        setNumber(value.target.value)
    }
    const handleClose = () => {
        setShowModal(false)
    };

    const sendSms = async (companyName) =>{
        try {
            let res = await axios({
                method: 'post',
                url: 'http://localhost:8010/api/v1/discount/sendSms',
                data: {
                    companyName: companyName,
                    phoneNumber: number
                }
            });
            let data = res.data;
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    const handleShow = async (companyName) => {
        const res = await sendSms(companyName)
        if(res){
            console.log(res)
            setResultOfWheel(res)
        }
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
                  setTimeout(()=>{handleShow(res)},1000)
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
      const goToWebsite = (website) =>{
          window.location.replace(website)
      }
        return (
            <>
                <div className={"title-container"}></div>
                <div className="arrow"></div>
                <div className="button-container"><span></span></div>
                <div className={"d-flex justify-content-center"}>
                    <ul className={spinnerState}>
                        {

                            companyNames.map((companyName,index)=>(
                                <li style={{transform:`rotate(${(index * sliceSize)}deg) skewY(-60deg)`,zIndex:`${index*5}`}}>
                                    <div className="circle-section">
                                        <span className="circle-span" id="1">{companyName}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
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
                            resultOfWheel.companyName === "پوچ" ?
                                (
                                    <div className='d-flex justify-content-center modal-container'>
                                        <div>پــــوچ</div>
                                    </div>
                                ):(
                                    <div className='d-flex flex-col justify-content-center modal-container'>
                                        <div className="gif-container"><img src={gift} alt="gif"/></div>
                                        <div className="text-container">
                                            <h3>{resultOfWheel.companyName}</h3>
                                            <h5>{resultOfWheel.productName}</h5>
                                            <div className="discount">
                                                <span className="discount-code">{resultOfWheel.discountCode}</span>
                                                <span> : کد تخفیف</span>
                                            </div>
                                            <div className="website"><button onClick={()=> goToWebsite(resultOfWheel.companyWebsite)}>  ورود به سایت <span>{resultOfWheel.companyName}</span><BiArrowBack/></button></div>
                                        </div>
                                    </div>
                                )
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" className="bg-red-600 hover:bg-red-500" onClick={handleClose}>
                            بستن
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )

}
export default Spinner