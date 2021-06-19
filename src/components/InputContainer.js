import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCssPropertyValueAC } from '../redux/actionCreators';
import '../css/InputContainer.css';

const MAX_FONT_SIZE = 50;
const MAX_FONT_WEIGHT = 900;
const MAX_LINE_HEIGHT = 3;
const MAX_PADDING_MARGIN_SIZE = 100;

const InputContainer = () => {
    const [stateVal, setState] = useState();
    const id_prop_selected = useSelector(state => state.id_prop_selected);
    const cssProperties = useSelector(state => state.cssProperties);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cssProperties[id_prop_selected]) {
            setState(cssProperties[id_prop_selected]);
        }
    }, [cssProperties, id_prop_selected]);

    const handleInputChange = (e) => {
        let val = e.target.value;
        if (id_prop_selected.endsWith('_fontSize')) {
            val = `${val}px`;
        }
        if (id_prop_selected.endsWith('_text') && !val.match(/^[a-zA-Z0-9_ ]*$/)) {
            console.log('verification failed > val', val);
            return;
        }
        dispatch(updateCssPropertyValueAC(id_prop_selected, val));
    }

    const handlePaddingMarginChange = () => {     
        const top_bottom_element = document.querySelector('.padding-margin-top-bottom');   
        const left_right_element = document.querySelector('.padding-margin-left-right');   
        const padding_margin_string = `${top_bottom_element.value}px ${left_right_element.value}px`;
        dispatch(updateCssPropertyValueAC(id_prop_selected, padding_margin_string));
    }

    //////////////////////////////////////////////////////////////////////////////////////////

    const get_padding_margin_JSX = () => {
        if (!stateVal || typeof stateVal !== 'string' || !stateVal.includes('px')) {
            return null;
        }
        let px_array = stateVal.match(/\d{1,3}px/g);
        if (!px_array) {
            return null;
        }
        px_array = px_array.map(x => Number(x.replace('px', '')));
        const class_names = ['Top-Bottom', 'Left-Right']
        return (
            <>
                {
                    px_array.map((px_string, i) => {
                        const name = `padding-margin-${class_names[i].toLowerCase()}`;
                        return (
                            <div key={i}>
                                <h4>{class_names[i]}</h4>
                                <input 
                                    type="range" 
                                    name={name}
                                    className={name}
                                    value={px_string}
                                    min="0"
                                    max={MAX_PADDING_MARGIN_SIZE}
                                    step="1"
                                    onChange={handlePaddingMarginChange}
                                />
                            </div>
                        )
                    })
                }
            </>
        );
    } 

    const get_input_JSX = () => {
        if (!stateVal) {
            return null;
        }
        if (id_prop_selected.endsWith('_fontSize') && typeof stateVal === "string" && stateVal.includes('px')) {
            return (
                <input 
                    type="range" 
                    name="font-size-input"
                    className="font-size-input"
                    value={stateVal.replace('px', '')}  
                    min="0"
                    max={MAX_FONT_SIZE}
                    step="1"
                    onChange={handleInputChange}
                />
            );
        } 
        else if (id_prop_selected.endsWith('_fontWeight')) {
            return (
                <input 
                    type="range" 
                    name="font-weight-input"
                    className="font-weight-input"
                    value={stateVal}
                    min="100"
                    max={MAX_FONT_WEIGHT}
                    step="100"
                    onChange={handleInputChange}
                />
            );
        } 
        else if (id_prop_selected.endsWith('_padding') || id_prop_selected.endsWith('_margin')) {
            return get_padding_margin_JSX();
        }
        else if (id_prop_selected.endsWith('_lineHeight')) {
            return (
                <input 
                    type="range" 
                    name="line-height-input"
                    className="line-height-input"
                    value={stateVal}
                    min="0.5"
                    max={MAX_LINE_HEIGHT}
                    step="0.1"
                    onChange={handleInputChange}
                />
            );
        } 
        else if (id_prop_selected.endsWith('_text')) {
            return (
                <input 
                type="text" 
                name="text-input" 
                className="text-input"
                value={stateVal}
                onChange={handleInputChange}
              /> 
            );
        }
    }

    const get_value_text = () => {
        if (id_prop_selected.endsWith('_text')) {
            return <div className="bottom-container-invisible"></div>;
        }
        else if (id_prop_selected.endsWith('_fontSize')) {
            return <div className="bottom-container">{ stateVal }</div>;
        }
        else if (id_prop_selected.endsWith('_fontWeight')) {
            return <div className="bottom-container">{ stateVal }</div>;
        } 
        else if (id_prop_selected.endsWith('_padding') || id_prop_selected.endsWith('_margin') || id_prop_selected.endsWith('_lineHeight')) 
        {
            return <div className="bottom-container">{ cssProperties[id_prop_selected] }</div>;
        }
    }

    const get_container_class_name = () => {
        if (id_prop_selected.includes('padding') || id_prop_selected.includes('margin')) {
            return 'padding-margin-container';
        }
        else {
            return `${id_prop_selected.split('_')[1]}-container`;
        }  
    }

    return (  
        <div className={`input-container ${get_container_class_name()}`}>
            <h3>{ id_prop_selected.replace('_', ' ') }</h3>
            <div className="top-container">{ get_input_JSX() }</div>
            { get_value_text() }
        </div>
    );
}
 
export default InputContainer;