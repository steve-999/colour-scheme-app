import React, { Component } from 'react';
import { isColorProperty, scrollToElement } from '../misc_app_specific_fns';
import { connect } from 'react-redux';
import { updateCssPropertyValueAC } from '../redux/actionCreators';
import '../css/Colors.css';

const ROW_HEIGHT = 43;

const mapStateToProps = (state) => {
    return {
        colorsDOL: state.colorsDOL,
        color_groups_unique: state.color_groups_unique,
        id_prop_selected: state.id_prop_selected,
        cssProperties: state.cssProperties
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCssPropertyValue: (id_prop, value) => dispatch(updateCssPropertyValueAC(id_prop, value)),
    };
}

class Colors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedColor: undefined,
            prevOffsetTop: undefined
        }
    }

    componentDidMount() {
        if(this.props.cssProperties && isColorProperty(this.props.id_prop_selected))
            this.highlightSelectedColor(this.props.cssProperties[this.props.id_prop_selected]);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (isColorProperty(this.props.id_prop_selected))
                this.highlightSelectedColor(this.props.cssProperties[this.props.id_prop_selected]);
        }
    }

    handleColorClick = (colorName) => {
        if(this.props.id_prop_selected && isColorProperty(this.props.id_prop_selected)) {
            this.props.updateCssPropertyValue(this.props.id_prop_selected, colorName);
            this.highlightSelectedColor(colorName);
        }
    }

    highlightSelectedColor(colorName) {
        const curr_selected_color = this.state.selectedColor;
        if (curr_selected_color) {
            const element = document.querySelector(`[data-color-name='${curr_selected_color}']`);
            element.style.boxShadow = 'none';
        }
        this.setState({
            selectedColor: colorName
        }, () => {
            const element = document.querySelector(`[data-color-name='${colorName}']`);
            element.style.boxShadow = '0 0 4px 4px magenta';
            const prevOffsetTop = scrollToElement(element, '.colors-container', ROW_HEIGHT, this.state.prevOffsetTop);
            this.setState({
                prevOffsetTop: prevOffsetTop
            });
        });
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    colorsForColourGroup = (group_colors) => {
        const color_cells = group_colors.map((x, i) => {
            const bgColor = x['hex'];
            const colorName = x['name']
            const textColor = x['brightness'] < 180 ? 'white' : 'black';
            return (
                <span 
                    key={i} 
                    className="color-div" 
                    data-color-name={colorName}
                    style={{ backgroundColor: bgColor, color: textColor }}
                    onClick={() => this.handleColorClick(colorName)}    
                >
                    { x['name'] }
                </span>
            );
        });
        return color_cells;
    }

    render() {
        const colorsDOL = this.props.colorsDOL;
        const colors_JSX = this.props.color_groups_unique.map(group_name => {
            return (
                <div className="color-group-div" key={group_name}>
                    { this.colorsForColourGroup(colorsDOL[group_name]) }
                </div>
            );
        });        

        return (
            <div className="colors-container">
                <>
                    { colors_JSX }
                </>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);