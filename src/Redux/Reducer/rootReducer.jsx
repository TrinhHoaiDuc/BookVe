import {combineReducers} from 'redux'
import BapTapVeReducer from "../BaiTapDatVeXemPhim"

//store tong ung dung
const rootReducer = combineReducers({
    // noi se chua cac reducer cho nghiep vu (store con)
    BapTapVeReducer
})

export default rootReducer;