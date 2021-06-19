import * as ActionTypes from './actionTypes';

const initState = ActionTypes.initState;

const rootReducer = (state=initState, action) => {
    switch(action.type) {
        case ActionTypes.LOAD_COLORS_DATA:
            return {
                ...state,
                colors_list: action.payload.colors_list,
                colorsDOL: action.payload.colorsDOL,
                colorNamesList: action.payload.colorNamesList,
                color_groups_unique: action.payload.color_groups_unique,
            };

        case ActionTypes.LOAD_FONT_FAMILIES:
            return { ...state, fontFamilies: action.payload };

        case ActionTypes.UPDATE_CSS_PROPERTY_VALUE:
            const cssProperties = {...state.cssProperties, [action.payload.id_prop]: action.payload.value };
            return { ...state, cssProperties: cssProperties };

        case ActionTypes.SET_ID_PROP_SELECTED:
            return { ...state, id_prop_selected: action.payload };

        case ActionTypes.SET_PROPERTY_TYPE:
            return { ...state, property_type: action.payload };

        case ActionTypes.SET_MAIN_COLUMNS_HEIGHT:
            return { ...state, mainColumnsHeight: action.payload};

        default:
            return state;
    }
    
}

export default rootReducer;