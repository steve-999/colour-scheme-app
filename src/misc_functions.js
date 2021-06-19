
export function sorted_unique(arr) {
    const set_var = new Set();
    arr.map(x => set_var.add(x));
    return [...set_var].sort();
}


export function rgb_to_brightness(rgb) {
    /* returns a number between 0 to 255, 
    where a lower figure = lower brightness & vice versa
    Input: rgb = array 
    https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
    */
   if(typeof rgb === 'string') {
       rgb = JSON.parse(rgb);
   }
    return parseInt(Math.sqrt(
        rgb[0] * rgb[0] * .299 + 
        rgb[1] * rgb[1] * .587 + 
        rgb[2] * rgb[2] * .114));
}


export function sort_LOD_by_key(arr, key, reverse=false) {
    const arr2 = [...arr];
    arr2.sort(function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    });
    if (reverse === true) 
        arr2.reverse();
    return arr2;
}


export function capitalize_string(s) {
    if (typeof s !== 'string') 
        return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function get_windows10_fonts() {
    return  [
        'Arial',
        'Arial Black',
        'Bahnschrift',
        'Calibri',
        'Cambria',
        'Cambria Math',
        'Candara',
        'Comic Sans MS',
        'Consolas',
        'Constantia',
        'Corbel',
        'Courier New',
        'Ebrima',
        'Franklin Gothic Medium',
        'Gabriola',
        'Gadugi',
        'Georgia',
        'HoloLens MDL2 Assets',
        'Impact',
        'Ink Free',
        'Javanese Text',
        'Leelawadee UI',
        'Lucida Console',
        'Lucida Sans Unicode',
        'Malgun Gothic',
        'Marlett',
        'Microsoft Himalaya',
        'Microsoft JhengHei',
        'Microsoft New Tai Lue',
        'Microsoft PhagsPa',
        'Microsoft Sans Serif',
        'Microsoft Tai Le',
        'Microsoft YaHei',
        'Microsoft Yi Baiti',
        'MingLiU-ExtB',
        'Mongolian Baiti',
        'MS Gothic',
        'MV Boli',
        'Myanmar Text',
        'Nirmala UI',
        'Palatino Linotype',
        'Segoe MDL2 Assets',
        'Segoe Print',
        'Segoe Script',
        'Segoe UI',
        'Segoe UI Historic',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'SimSun',
        'Sitka',
        'Sylfaen',
        'Symbol',
        'Tahoma',
        'Times New Roman',
        'Trebuchet MS',
        'Verdana',
        'Webdings',
        'Wingdings',
        'Yu Gothic',
    ];
}


export function get_google_fonts() {
    return  [
        'Source Sans Pro',
        'Open Sans',
        'Raleway',
        'Roboto',
        'Lato',
        'Montserrat',
        'Noto Serif',
        'Noto Sans JP',
        'Rubik',
        'Permanent marker',
        'Nunito',
        'Cabin',
        'Ubuntu',
    ];
}


export function get_windows10_and_google_fonts() {
    const windows_fonts = get_windows10_fonts();
    const google_fonts = get_google_fonts();
    return windows_fonts.concat(google_fonts).sort();
}





