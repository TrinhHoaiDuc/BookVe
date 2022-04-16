import React, { Component } from 'react';
import './CssBooking.css'
import Information from './Information';
import DanhSachGhe from '../Data/danhSachGhe.json'
import Chair from './Chair';
export default class HomeTicket extends Component {
  renderHangGhe = () => {
    return DanhSachGhe.map((hangGhe,index) =>{
      return <div className="" key={index}>
        <Chair chair={hangGhe}  soHangGhe={index}/>
      </div>
    });
  }
  render() {
    return (
      <div style={{backgroundImage:"url('./Img/Booking/bgmovie.jpg')",backgroundSize:"100%",width:"100%",height:"100%",position:"fixed"}}>
          <div style={{backgroundColor:"rgba(0,0,0,0.8)",width:"100%",height:"100%",position:"fixed"}}></div>
          <div className="row">
              <div className="col-8 text-center">
                  <div className="text-light display-4 ">Đặt vé xem phim cyberlearn.vn</div>
                  <div className="text-center text-light" style={{fontSize:"20px"}}>Màn Hình</div>
                  <div className="d-flex flex-row justify-content-center">
                    <div className="screen"></div>
                  </div>
                  {this.renderHangGhe()}
              </div>
              <div className="col-4 text-left">
                <div className="text-light mt-2" style={{fontSize:"30px"}}>
                  Danh sách ghế đã chọn
                </div>
                <Information/>
              </div>
          </div>
      </div>
    )
  }
}
