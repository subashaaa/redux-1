import { INC_NUMBER } from '../Actions';

export default function performAction(state, action) {
    switch (action.type) {
        case INC_NUMBER:
            console.log('Action performed from the reducer');
            console.log(state, action);
            let num = 0;
            return { num };
        default:
            num = 0;
            return num;
    }
}