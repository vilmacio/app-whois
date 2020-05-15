import { takeLatest, put, all } from 'redux-saga/effects'

function* asyncSaveHistory(action){
    yield put({type:'SAVE_HISTORY', history:action.history})
}

export default function* root(){
    yield all([
        takeLatest('ASYNC_SAVE_HISTORY', asyncSaveHistory)
    ]);
}