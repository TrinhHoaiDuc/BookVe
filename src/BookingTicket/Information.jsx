import React, { Component } from "react";
import { connect } from "react-redux";
class Information extends Component {
  render() {
    return (
      <div>
        <div className="text-light text-left mt-5" style={{ fontSize: "30px" }}>
          <button className="gheDuocChon "></button>Ghế đã chọn
          <br></br>
          <button className="gheDangChon "></button>Ghế đang chọn
          <br></br>
          <button className="ghe" style={{ marginLeft: "0" }}></button>Ghế chưa
          chọn
        </div>
        <div className="mt-5">
          <table className="table " border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế </th>
                <th>Giá </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-light" style={{ fontSize: "25px" }}>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.huyGhe(gheDangDat);
                        }}
                      >
                        Huy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td>Tổng Tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                    return tongTien+=gheDangDat.gia;
                  },0).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BapTapVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (ghe) => {
      dispatch({
        type: "Huy_Ghe",
        ghe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Information);
