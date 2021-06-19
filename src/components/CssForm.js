import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCssPropertyValueAC, setIdPropSelectedAC, setPropertyTypeAC } from '../redux/actionCreators';
import { isColorProperty, isFontFamilyProperty } from '../misc_app_specific_fns';
import '../css/CssForm.css';


const mapStateToProps = (state) => {
    return {
        cssProperties: state.cssProperties,
        id_prop_selected: state.id_prop_selected,
        fontFamilies: state.fontFamilies,
        colorNamesList: state.colorNamesList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCssPropertyValue: (id_prop, value) => dispatch(updateCssPropertyValueAC(id_prop, value)),
        setIdPropSelected: id_prop => dispatch(setIdPropSelectedAC(id_prop)),
        setPropertyType: property_type => dispatch(setPropertyTypeAC(property_type)),
    };
}

class CssForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_prop_name: undefined,
        }
    }

    handleCssFocusChange = (e) => { 
        this.change_selected_cells_styles(e.target.name);
        const id_prop_name = e.target.name;

        let property_type;
        if (isColorProperty(id_prop_name)) {
            property_type = 'colors';
        } 
        else if (isFontFamilyProperty(id_prop_name)) {
            property_type = 'fontsList';
        }
        else {
            property_type = 'otherInput';
        }
        this.props.setPropertyType(property_type);
        this.props.setIdPropSelected(id_prop_name);
    }

    handleCssKeyDown = e => {
        const keyValue = e.key;
        function get_next_value(arr, text, keyValue) {
            const currIndex = arr.map(x => x.toLowerCase()).indexOf(text.toLowerCase());
            let newVal;
            if(keyValue === 'ArrowUp') {
                newVal = currIndex - 1 >= 0 ? arr[currIndex - 1] : arr[0];
            }
            else if (keyValue === 'ArrowDown') {
                newVal = currIndex + 1 < arr.length ? arr[currIndex + 1] : arr[arr.length-1];
            }
            return newVal;
        }
        const currPropText = this.props.cssProperties[this.props.id_prop_selected];
        
        if (keyValue === 'ArrowUp' || keyValue === 'ArrowDown') {
            if(isColorProperty(this.props.id_prop_selected)) {
                const colorNamesList = this.props.colorNamesList;
                const newColor = get_next_value(colorNamesList, currPropText, keyValue);
                this.props.updateCssPropertyValue(this.props.id_prop_selected, newColor);
            }
            else if (isFontFamilyProperty(this.props.id_prop_selected)) {
                const fontFamilies = this.props.fontFamilies;
                const newFont = get_next_value(fontFamilies, currPropText, keyValue);               
                this.props.updateCssPropertyValue(this.props.id_prop_selected, newFont);
            }
            else if(this.props.id_prop_selected.endsWith('fontSize')) {
                let currFontSize = parseInt(currPropText.replace('px', ''));
                if (!Number.isInteger(currFontSize)) {
                    currFontSize = 1;
                }
                let newFontSize = keyValue === 'ArrowUp' ? currFontSize + 1 : currFontSize - 1;
                if (newFontSize < 0) {
                    newFontSize = 0;
                }
                else if (newFontSize > 50) {
                    newFontSize = 50;
                }
                const newFontSizeText = `${newFontSize}px`;
                this.props.updateCssPropertyValue(this.props.id_prop_selected, newFontSizeText);
            }
            else if(this.props.id_prop_selected.endsWith('fontWeight')) {
                const currFontWeight = parseInt(currPropText);
                const FONT_WEIGHT_MIN = 100;
                const FONT_WEIGHT_MAX = 900;
                const step_size = 100;
                let newFontWeight
                if (keyValue === 'ArrowUp') {
                    newFontWeight = currFontWeight + step_size <= FONT_WEIGHT_MAX ? currFontWeight + step_size : FONT_WEIGHT_MAX;
                }
                else if (keyValue === 'ArrowDown') {
                    newFontWeight = currFontWeight - step_size >= FONT_WEIGHT_MIN ? currFontWeight - step_size : FONT_WEIGHT_MIN;
                } 
                this.props.updateCssPropertyValue(this.props.id_prop_selected, newFontWeight);        
            }
            else if(this.props.id_prop_selected.endsWith('lineHeight')) {
                const currLineHeight = Number(parseFloat(currPropText).toFixed(2));
                const LINE_HEIGHT_MIN = 0.5;
                const LINE_HEIGHT_MAX = 3.0;
                const step_size = 0.1;
                let newLineHeight;
                if (keyValue === 'ArrowUp') {
                    newLineHeight = currLineHeight + step_size <= LINE_HEIGHT_MAX ? currLineHeight + step_size : LINE_HEIGHT_MAX;
                }
                else if (keyValue === 'ArrowDown') {
                    newLineHeight = currLineHeight - step_size >= LINE_HEIGHT_MIN ? currLineHeight - step_size : LINE_HEIGHT_MIN;
                } 
                this.props.updateCssPropertyValue(this.props.id_prop_selected, newLineHeight.toFixed(2));        
            }
        }
        else {
            this.props.updateCssPropertyValue(this.props.id_prop_selected, currPropText); 
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////

    change_selected_cells_styles(curr_selected_id_prop) {
        Object.keys(this.props.cssProperties).forEach(id_prop => {
            const el = document.getElementById(id_prop);
            if (el !== null) {
                el.style.border = 'none';
                el.style.backgroundColor = 'white';
            }
        });
        const curr_selected = document.getElementById(curr_selected_id_prop);
        if (document.activeElement === curr_selected) {
            curr_selected.style.border = '2px solid magenta';
            curr_selected.style.backgroundColor = 'azure';
        }
    }

    create_input_css_property_rows() {
        const css_properties_list = Object.keys(this.props.cssProperties);
        const rows = css_properties_list.map(id_prop => {
            const element_property = id_prop.split('_');
            return (
                <tr key={id_prop}>
                    <td className="td_col1">
                        { element_property[0] }
                    </td>
                    <td className="td_col2">
                        { element_property[1] }
                    </td>
                    <td className="td_col3">
                        <input 
                            type="text"
                            name={id_prop} 
                            id={id_prop} 
                            className="id_prop_input"
                            onKeyDown={this.handleCssKeyDown}
                            onFocus={this.handleCssFocusChange} 
                            value={this.props.cssProperties[id_prop]} 
                            autoComplete="off"
                            spellCheck="false" 
                            readOnly
                        /> 
                    </td>
                </tr>
            )
        });
        return rows;
    }

    render() { 
        return (
            <div className="css-form-container">
                <form>
                    <table>
                        <tbody>{ this.create_input_css_property_rows() }</tbody>
                    </table>
                </form>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CssForm);