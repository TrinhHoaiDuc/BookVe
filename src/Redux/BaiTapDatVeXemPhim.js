const stateDefault = {
    danhSachGheDangDat :[
        //{soGhe:1,gia:1000}
    ]
};

const BapTapVeReducer = (state = stateDefault, action) => {
    switch(action.type){
        case'Dat_Ghe':{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index !== -1){ // xoa ghe trung
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else{// them ghe
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // cap nhat lai state
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case'Huy_Ghe':{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe)
            if(index !== -1){ // xoa ghe trung
                danhSachGheDangDatUpdate.splice(index,1)
            }
            // cap nhat lai state
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
      default:return {...state}
    }
}
export default BapTapVeReducer;