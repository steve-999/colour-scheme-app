export const LOAD_COLORS_DATA = 'LOAD_COLORS_DATA';
export const LOAD_FONT_FAMILIES = 'LOAD_FONT_FAMILIES';
export const UPDATE_CSS_PROPERTY_VALUE = 'UPDATE_CSS_PROPERTY_VALUE';
export const SET_ID_PROP_SELECTED = 'SET_ID_PROP_SELECTED';
export const SET_PROPERTY_TYPE = 'SET_PROPERTY_TYPE';
export const SET_MAIN_COLUMNS_HEIGHT = 'SET_MAIN_COLUMNS_HEIGHT';

export const initState = {
    colors_list: [],
    colorsDOL: {},
    colorNamesList: [],
    color_groups_unique: [],
    fontFamilies: [],
    selectedColor: undefined,
    selectedFont: undefined,
    cssProperties: {
        navbar_backgroundColor: 'DarkViolet',
        logo_text: 'Colours App',
        logo_fontFamily: 'Raleway',
        logo_fontSize: '26px',
        logo_fontWeight: '800',
        logo_color: 'Pink',
        logo_padding: '3px 3px',
        logo_margin: '3px 10px',
        title_fontFamily: 'Raleway',
        title_fontSize: '21px',
        title_fontWeight: '700',
        title_color: 'Navy',
        title_padding: '0px 0px',
        title_margin: '10px 3px',
        p_fontFamily: 'Montserrat',
        p_fontSize: '14px',
        p_fontWeight: '500',
        p_color: 'Black',
        p_padding: '3px 3px',
        p_margin: '0px 0px',
        p_lineHeight: '1.5',
    },
    property_type: undefined,
    id_prop_selected: undefined,
    mainColumnsHeight: undefined,
}


