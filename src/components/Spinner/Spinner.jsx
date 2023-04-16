import React, { Component } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
import {SPINNER_SPREADSHEET_ID,SPINNER_SHEET_ID,SPINNER_CLIENT_EMAIL,SPINNER_PRIVATE_KEY} from './spinner_credentials'
import './Spinner.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import money from '../../images/money.png'

const SPREADSHEET_ID = SPINNER_SPREADSHEET_ID;
const SHEET_ID = SPINNER_SHEET_ID;
const CLIENT_EMAIL = SPINNER_CLIENT_EMAIL;
const PRIVATE_KEY = SPINNER_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export class Spinner extends Component {

    state={
        spinnerState:"circle",
        showModal: false,
        resultOfWheel:""
      }
        handleClose = () => this.setState({showModal:false});
        handleShow = (text) => {
            this.setState({resultOfWheel:text})
            this.setState({showModal:true})
        };

      //Function to Rotate and Stop the spinner
      RotateSpinner = ()=>{
        this.setState({spinnerState:"circle start-rotating"});
        setTimeout(()=>{
          this.setState({spinnerState:"circle start-rotating stop-rotating"});
          const res = this.checkValue();
          console.log(res)
          let device = "web-pwa"
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            device = "mobile-pwa"
           }
          // this.handleShow(res);
        },Math.floor(Math.random()*10000+1))
      }

      //Function to Check Value overlapping the pin
      checkValue = ()=>{
        const elements = document.querySelectorAll(".circle-section")
        let max = 0;
        let element = undefined;
        elements.forEach(function(elem) {
        if(elem.getBoundingClientRect().left>max){
          max = elem.getBoundingClientRect().left
          element = elem.childNodes[0].textContent;
        }
        });
        return element
      }

      //Function to append data to google spreadsheet
       appendSpreadsheet = async (row) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
          });
          await doc.loadInfo();
          const sheet = doc.sheetsById[SHEET_ID];
          const result = await sheet.addRow(row);
        } catch (e) {
          console.error('Error: ', e);
        }
      };

    render() {
        return (
            <>
                <div className="arrow"></div>
                <div className="button-container"><span></span></div>
                <ul className={this.state.spinnerState}>
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
                        <input type="text" placeholder="شماره همراه خود را وارد کنید"/>
                    </div>
                    <div className="start-button-container">
                        <button  className="start-button" onClick={this.RotateSpinner} disabled={this.state.spinnerState==="circle start-rotating"}>شانست رو امتحان کن</button>
                    </div>
                </div>

                <Modal show={this.state.showModal} onHide={this.handleClose} animation={true} centered>
                    <Modal.Body>
                        {
                            this.state.resultOfWheel === "پــــوچ" ?
                                (
                                    <div className='d-flex justify-content-center'>
                                        <div>پــــوچ</div>
                                    </div>
                                ):(
                                    <div className='d-flex justify-content-center'>
                                        <div>{this.state.resultOfWheel}</div>
                                    </div>
                                )
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Spinner