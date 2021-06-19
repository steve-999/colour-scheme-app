import React, { Component } from 'react';
import { isFontFamilyProperty, scrollToElement } from '../misc_app_specific_fns';
import { connect } from 'react-redux';
import { updateCssPropertyValueAC } from '../redux/actionCreators';
import '../css/FontsList.css';

const ROW_HEIGHT = 40;

const mapStateToProps = (state) => {
    return {
        fontFamilies: state.fontFamilies,
        id_prop_selected: state.id_prop_selected,
        cssProperties: state.cssProperties
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCssPropertyValue: (id_prop, value) => dispatch(updateCssPropertyValueAC(id_prop, value)),
    };
}


class FontsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFont: undefined
        };
    }

    componentDidMount() {
        if(this.props.cssProperties && this.props.id_prop_selected && isFontFamilyProperty(this.props.id_prop_selected))
            this.highlightSelectedFont(this.props.cssProperties[this.props.id_prop_selected]);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.id_prop_selected && isFontFamilyProperty(this.props.id_prop_selected))
                this.highlightSelectedFont(this.props.cssProperties[this.props.id_prop_selected]);
        }
    }

    handleFontClick = fontName => {
        if(isFontFamilyProperty(this.props.id_prop_selected)) {
            this.props.updateCssPropertyValue(this.props.id_prop_selected, fontName);
            this.highlightSelectedFont(fontName);
        }
    }

    highlightSelectedFont(fontName, centred) {
        const curr_selected_font = this.state.selectedFont;
        if (curr_selected_font) {
            const element = document.querySelector(`[data-font-name='${curr_selected_font}']`);
            element.style.border = '1px solid lightgrey';
        }

        this.setState({
            selectedFont: fontName
        }, () => {
            const element = document.querySelector(`[data-font-name='${fontName}']`);
            element.style.border = '2px solid magenta';  
            const prevScrollTo = scrollToElement(element, '.fonts-list-outer-container', ROW_HEIGHT, this.state.prevScrollTo);  
            this.setState({
                prevScrollTo
            });   
        })
    }

    calc_container_height = () => {
        const container = document.querySelector('.fonts-list-inner-container');
        const font = document.querySelector('.span-font');
        if (!container || !font) {
            return null;
        }
        const container_width = container.clientWidth;
        const font_width = font.getBoundingClientRect().width;
        const Ncols = Math.floor(container_width / font_width);
        const container_height = (this.props.fontFamilies.length / Ncols) * 36;
        return `${container_height}px`;
    }

    render() { 
        const rows = this.props.fontFamilies.map(font => {
            return (
                <span 
                    key={font} 
                    id={font}
                    className="span-font" 
                    data-font-name={font}
                    style={{ fontFamily: font}} 
                    onClick={() => this.handleFontClick(font)}
                >
                    { font }
                </span>
            );
        });

        return ( 
            <div className="fonts-list-outer-container">
                <div className="fonts-list-inner-container" style={{ height: this.calc_container_height() }}>
                    { rows }
                </div>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FontsList);