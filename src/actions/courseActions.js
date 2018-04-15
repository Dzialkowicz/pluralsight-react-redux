import * as types from './ActionTypes';
export function createCourse (course){
    //debugger;
    return {type: types.CREATE_COURSE, course};
}