import * as ActionTypes from './actionTypes';
import { getColorsData } from '../misc_app_specific_fns';
import { get_windows10_and_google_fonts } from '../misc_functions';


export const loadColorsDataAC = () => {
    return {
        type: ActionTypes.LOAD_COLORS_DATA,
        payload: getColorsData()
    };
}

export const loadFontFamiliesAC = () => {
    return {
        type: ActionTypes.LOAD_FONT_FAMILIES,
        payload: get_windows10_and_google_fonts()
    };
}

export const updateCssPropertyValueAC = (id_prop, value) => {
    return {
        type: ActionTypes.UPDATE_CSS_PROPERTY_VALUE,
        payload: {
            id_prop: id_prop,
            value: value
        }
    };
}

export const setIdPropSelectedAC = (id_prop) => {
    return {
        type: ActionTypes.SET_ID_PROP_SELECTED,
        payload: id_prop
    };
}

export const setPropertyTypeAC = (prop_type) => {
    return {
        type: ActionTypes.SET_PROPERTY_TYPE,
        payload: prop_type
    };
}

export const setMainColumnsHeightAC = (height) => {
    return {
        type: ActionTypes.SET_MAIN_COLUMNS_HEIGHT,
        payload: height
    };
}






