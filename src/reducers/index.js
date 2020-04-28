import {combineReducers} from 'redux'
import HomeSlideReducer from './HomeSlideReducer'
import HomeBenefitReducer from './HomeBenefitReducer'
import HomeActivityReducer from './HomeActivityReducer'
import HomeDifferenceReducer from './HomeDifferenceReducer'
import HomeFeedbackReducer from './HomeFeedbackReducer'
import HomePopularReducer from './HomePopularReducer'
import HomeRegisterReducer from './HomeRegisterReducer'
export default combineReducers({
    slides: HomeSlideReducer,
    benefits: HomeBenefitReducer,
    activities: HomeActivityReducer,
    differences: HomeDifferenceReducer,
    feedbacks: HomeFeedbackReducer,
    populars: HomePopularReducer,
    registers: HomeRegisterReducer
})