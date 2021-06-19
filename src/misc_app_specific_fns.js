import COLORS_LIST from './shared/colors_list';
import { sorted_unique, rgb_to_brightness, sort_LOD_by_key } from './misc_functions';

export const isColorProperty = id_prop_name => id_prop_name && id_prop_name.toLowerCase().endsWith('color');
export const isFontFamilyProperty = id_prop_name => id_prop_name && id_prop_name.endsWith('_fontFamily');

export const getColorsData = () => {
    /*  colors_list = flat list of all colours, unsorted
        colorsDOL = dictionary of colour groups, with colour group name as keys. Each colour group's colours are sorted by brightness
        colorNamesList = flat list of colour names, ordered by group
        color_groups_unique = unique list of colour groups
    */
    const colors_list = COLORS_LIST;
    const colorsDOL = {};
    const groups_list = colors_list.map(x => x['group']);
    const groups_unique = sorted_unique(groups_list);
    groups_unique.forEach(x => colorsDOL[x] = []);
    colors_list.forEach(x => {
        x['brightness'] = rgb_to_brightness(x['rgb']);
        colorsDOL[x['group']].push(x);
    });
    groups_unique.forEach(group_name => {
        colorsDOL[group_name] = sort_LOD_by_key(colorsDOL[group_name], 'brightness', true);
    });
    const colorNamesList = [];
    groups_unique.forEach(group_name => {
        colorsDOL[group_name].forEach(x => colorNamesList.push(x['name']));
    });
    return {
        colors_list: colors_list,
        colorsDOL,
        colorNamesList,
        color_groups_unique: groups_unique
    };
}


export const scrollToElement = (element, containerSelector, rowHeight, prevOffsetTop) => {
    // element.getBoundingClientRect() returns the rect dimensions irrespective of whether the rect is visible or not.
    // When the element is visible the top and/or bottom rect dimensions will be within the container rect's dimensions. 
    // Calculate direction by comparing the element.offsetTop with the previously-stored element.offsetTop value.
    const element_bounding_rect = element.getBoundingClientRect();
    const element_top = element_bounding_rect.top;
    const element_bottom = element_top + element_bounding_rect.height;
    const direction = element.offsetTop - prevOffsetTop;
    const container = document.querySelector(containerSelector);
    const container_bounding_rect = container.getBoundingClientRect();
    const container_top = container_bounding_rect.top;
    const container_height = container_bounding_rect.height;
    const container_bottom = container_top + container_height;       

    if (direction === 0) {
        return element.offsetTop;
    }
    else if (element_top + 0.75 * rowHeight >= container_bottom) {
        element.scrollIntoView(false);  // scroll down
    }
    else if (element_bottom - 0.75 * rowHeight <= container_top) {
        element.scrollIntoView(true);   // scroll up     
    }
    return element.offsetTop;
}