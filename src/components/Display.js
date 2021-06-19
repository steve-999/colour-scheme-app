import React from 'react'
import { connect } from 'react-redux';
import '../css/Display.css';

const mapStateToProps = (state) => {
    return {
        cssProperties: state.cssProperties,
    };
}


function Display(props) {
    let logo_styles = {};
    let navbar_styles = {};
    let title_styles = {};
    let p_styles = {};
    if (props.cssProperties !== undefined) { 
        logo_styles = {
            fontFamily: props.cssProperties.logo_fontFamily,
            fontSize: props.cssProperties.logo_fontSize,
            fontWeight: props.cssProperties.logo_fontWeight,
            color: props.cssProperties.logo_color,
            padding: props.cssProperties.logo_padding,
            margin: props.cssProperties.logo_margin, 
        };

        navbar_styles = {
            backgroundColor: props.cssProperties.navbar_backgroundColor,
        };

        title_styles = {
            fontFamily: props.cssProperties.title_fontFamily,
            fontSize: props.cssProperties.title_fontSize,
            fontWeight: props.cssProperties.title_fontWeight,
            color: props.cssProperties.title_color,
            padding: props.cssProperties.title_padding,
            margin: props.cssProperties.title_margin,
        }

        p_styles = {
            fontFamily: props.cssProperties.p_fontFamily,
            fontSize: props.cssProperties.p_fontSize,
            fontWeight: props.cssProperties.p_fontWeight,
            color: props.cssProperties.p_color,
            padding: props.cssProperties.p_padding,
            margin: props.cssProperties.p_margin,
            lineHeight: props.cssProperties.p_lineHeight,
        }
    }

    return (
        <div className="display-container">
            <div id="container">
                <div id="navbar" style={navbar_styles}>
                        <h1 id="logo" style={logo_styles}>
                            { props.cssProperties?.logo_text }
                        </h1>
                    </div>
                    <div>
                        <article id="article">
                            <h3 id="h3" style={title_styles}>Random title</h3>
                            <p id="p1" style={p_styles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat pulvinar purus, vitae porttitor mauris pretium luctus. Donec vel turpis quis ante dapibus vulputate sit amet quis sapien. Nulla hendrerit iaculis pellentesque. Pellentesque vel sem tellus. Vestibulum consequat accumsan leo. Aliquam congue ornare sapien, nec tempus tortor tristique vitae. Aliquam ultricies nibh in dolor tempus interdum sed ut nisi. Cras nec ligula congue, viverra purus eget, auctor justo. Fusce ut turpis luctus, luctus erat et, suscipit felis. Aenean eget orci odio. Vivamus consectetur non odio vel placerat.</p>
                            <h4 id="h4" style={title_styles}>Another title</h4>
                            <p id="p2" style={p_styles}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat pulvinar purus, vitae porttitor mauris pretium luctus. Donec vel turpis quis ante dapibus vulputate sit amet quis sapien. Nulla hendrerit iaculis pellentesque. Pellentesque vel sem tellus. Vestibulum consequat accumsan leo. Aliquam congue ornare sapien, nec tempus tortor tristique vitae. Aliquam ultricies nibh in dolor.</p>
                        </article>
                    </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Display);