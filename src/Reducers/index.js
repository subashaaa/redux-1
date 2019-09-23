import { INC_NUMBER, DEC_NUMBER } from '../Actions';

export default function performAction(state = { num: 0 }, action) {
    switch (action.type) {
        case INC_NUMBER:
            var num;
            num = state.num + 1;
            return { num };
        case DEC_NUMBER:
            num = state.num - 1;
            return { num };
        default:
            return state;
    }
}