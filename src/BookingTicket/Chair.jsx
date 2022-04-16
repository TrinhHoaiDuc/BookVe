import React, { Component } from "react";
import {connect} from 'react-redux'
class Chair extends Component {
  renderGhe = () => {
    return this.props.chair.danhSachGhe.map((ghe, index) => {
      let gheDaDat = "";
      let dissable = false;
      // ghe da bi ng khac dat roi
      if (ghe.daDat) {
        gheDaDat = "gheDuocChon";
        dissable = true;
      }
      // xet trang thai dang dat
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1){
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe)
          }}
          className={`ghe ${gheDaDat} ${cssGheDangDat}`}
          key={index}
          disabled={dissable}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHangGhe = () => {
    return this.props.chair.danhSachGhe.map((hangGhe,index)=>{
      return <button key={index} className="rowNumber">{hangGhe.soGhe}</button>
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div className="ml-4">
        {this.props.chair.hang} {this.renderSoHangGhe()}
      </div>
    } else {
      return (
        <div>
          {this.props.chair.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-3"
        style={{ fontSize: "25px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    danhSachGheDangDat: state.BapTapVeReducer.danhSachGheDangDat
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    datGhe: (ghe) =>{
      dispatch({
        type:'Dat_Ghe',
        ghe
      })
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(Chair);