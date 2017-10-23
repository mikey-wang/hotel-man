
import {
    START_LOADING,
    FINISH_LOADING,
    ROUTER_NAME,
    CITY_TABLETYPE,
    HOTEL_TABLETYPE,
    ROOM_TABLETYPE,
    CITY_CHECK_LIST,
    HOTEL_CHECK_LIST,
    ROOM_CHECK_LIST
}
from './mutation-type';
const  mutations={
    //loading开始
    [START_LOADING](state){
        state.asyncLoading = true;
    },
    //loading结束
    [FINISH_LOADING](state){
        state.asyncLoading = false;
    },
    //主导航状态同步
    [ROUTER_NAME](state,data) {
        state.routerName = data;
    },
    //tableType
    [CITY_TABLETYPE](state,data){
        state.cityTableType = data;
    },
    [HOTEL_TABLETYPE](state,data){
        state.hotelTableType = data;
    },
    [ROOM_TABLETYPE](state,data){
        state.roomTableType = data;
    },
    //城市审核列表
    [CITY_CHECK_LIST](state,data){
        state.cityCheckList = data;
    },
    //酒店审核列表
    [HOTEL_CHECK_LIST](state,data){
        state.hotelCheckList = data;
    },
    //房型审核列表
    [ROOM_CHECK_LIST](state,data){
        state.roomCheckList = data;
    }
};
export default mutations;
