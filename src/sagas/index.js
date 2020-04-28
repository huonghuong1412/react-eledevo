import {all} from 'redux-saga/effects'
import {HomeSlideSaga} from './HomeSlideSaga'
import {HomeBenefitSaga} from './HomeBenefitSaga'
import {HomeActivitySaga} from './HomeActivitySaga'
import {HomeDifferenceSaga} from './HomeDifferenceSaga'
import {HomeFeedbackSaga} from './HomeFeedbackSaga'
import {HomePopularSaga} from './HomePopularSaga'
import {HomeRegisterSaga} from './HomeRegisterSaga'
function* rootSaga(){
    yield all([
        ...HomeSlideSaga,
        ...HomeBenefitSaga,
        ...HomeActivitySaga,
        ...HomeDifferenceSaga,
        ...HomeFeedbackSaga,
        ...HomePopularSaga,
        ...HomeRegisterSaga
    ])
}

export default rootSaga;