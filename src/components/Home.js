import React, { Component } from 'react';
import CssForm from './CssForm';
import Display from './Display';
import Colors from './Colors';
import FontsList from './FontsList';
import InputContainer from './InputContainer';
import { connect } from 'react-redux';
import { loadColorsDataAC, loadFontFamiliesAC, updateCssPropertyValueAC, setMainColumnsHeightAC } from '../redux/actionCreators';
import '../css/Home.css';

const RESHAPE_WIDTH = 590;

const mapStateToProps = (state) => {
    return {
        colors: state.colors_list,
        colorsDOL: state.colorsDOL,
        colorNamesList: state.colorNamesList,
        fontFamilies: state.fontFamilies,
        cssProperties: state.cssProperties,
        property_type: state.property_type,
        id_prop_selected: state.id_prop_selected,
        mainColumnsHeight: state.mainColumnsHeight,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadColorsData: () =>  dispatch(loadColorsDataAC()),
        loadFontFamilies: () =>  dispatch(loadFontFamiliesAC()),
        updateCssPropertyValue: (id_prop, value) => dispatch(updateCssPropertyValueAC(id_prop, value)),
        setMainColumnsHeight: height => dispatch(setMainColumnsHeightAC(height)),

    };
}

function debounce(fn, ms) {
    let timer; 
    return () => { 
        clearTimeout(timer); 
        timer = setTimeout(() => { 
            timer = null;  
            fn.apply(this, arguments);  
        }, ms); 
    }; 
}


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    componentDidMount() {
        this.props.loadColorsData();
        this.props.loadFontFamilies();
        this.handleResize();
        window.addEventListener('resize', debounce(this.handleResize, 500));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', debounce(this.handleResize, 500));
    }

    handleResize = () => {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth            
        });
        const cssFormHeight = document.querySelector('.css-form-container form').clientHeight;
        const columnHeight = document.body.clientWidth > RESHAPE_WIDTH ? window.innerHeight - 90 : cssFormHeight;
        const header = document.querySelector('.app-header');
        if (document.body.clientWidth < RESHAPE_WIDTH) {
            header.style.display = 'none';
        }
        else {
            header.style.display = 'block';
        }
        this.props.setMainColumnsHeight(`${columnHeight}px`);
    }

    getPropertiesComponent() {
        switch(this.props.property_type) {
            case 'colors':
                return <Colors />;
            case 'fontsList':
                return <FontsList />;
            case 'otherInput':
                return <InputContainer />;
            default:
                return null;
        }
    }

    getDisplayColumnHeight() {
        const cssForm = document.querySelector('.css-form-container');
        if (!cssForm)
            return 0;
        const cssFormHeight = cssForm.clientHeight;
        const windowHeight = window.innerHeight;
        return document.body.clientWidth > RESHAPE_WIDTH ? this.props.mainColumnsHeight : windowHeight - cssFormHeight - 30;
    }

    render() {
        return (
            <div className="home-columns-container">
                <div id="main-CssForm-container" style={{height: this.props.mainColumnsHeight}}>
                    <CssForm /> 
                </div>
                <div id="main-Display-container" style={{height: this.getDisplayColumnHeight()}}>
                    <Display />
                </div>
                <div id="main-Inputs-container" style={{height: this.props.mainColumnsHeight}}>
                    { this.getPropertiesComponent() }
                </div>
            </div>            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);