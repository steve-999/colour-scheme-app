
const COLORS_LIST = [
    {
        "group": "blue",
        "hex": "#0000FF",
        "name": "Blue",
        "rgb": "[0, 0, 255]"
    },
    {
        "group": "blue",
        "hex": "#000080",
        "name": "Navy",
        "rgb": "[0, 0, 128]"
    },
    {
        "group": "blue",
        "hex": "#00008B",
        "name": "DarkBlue",
        "rgb": "[0, 0, 139]"
    },
    {
        "group": "blue",
        "hex": "#0000CD",
        "name": "MediumBlue",
        "rgb": "[0, 0, 205]"
    },
    {
        "group": "blue",
        "hex": "#00CED1",
        "name": "DarkTurquoise",
        "rgb": "[0, 206, 209]"
    },
    {
        "group": "blue",
        "hex": "#4169E1",
        "name": "RoyalBlue",
        "rgb": "[65, 105, 225]"
    },
    {
        "group": "blue",
        "hex": "#7B68EE",
        "name": "MediumSlateBlue",
        "rgb": "[123, 104, 238]"
    },
    {
        "group": "blue",
        "hex": "#191970",
        "name": "MidnightBlue",
        "rgb": "[25, 25, 112]"
    },
    {
        "group": "blue",
        "hex": "#6495ED",
        "name": "CornflowerBlue",
        "rgb": "[100, 149, 237]"
    },
    {
        "group": "blue",
        "hex": "#00BFFF",
        "name": "DeepSkyBlue",
        "rgb": "[0, 191, 255]"
    },
    {
        "group": "blue",
        "hex": "#87CEFA",
        "name": "LightSkyBlue",
        "rgb": "[135, 206, 250]"
    },
    {
        "group": "blue",
        "hex": "#87CEEB",
        "name": "SkyBlue",
        "rgb": "[135, 206, 235]"
    },
    {
        "group": "blue",
        "hex": "#ADD8E6",
        "name": "LightBlue",
        "rgb": "[173, 216, 230]"
    },
    {
        "group": "blue",
        "hex": "#B0E0E6",
        "name": "PowderBlue",
        "rgb": "[176, 224, 230]"
    },
    {
        "group": "blue",
        "hex": "#B0C4DE",
        "name": "LightSteelBlue",
        "rgb": "[176, 196, 222]"
    },
    {
        "group": "blue",
        "hex": "#1E90FF",
        "name": "DodgerBlue",
        "rgb": "[30, 144, 255]"
    },
    {
        "group": "blue",
        "hex": "#4682B4",
        "name": "SteelBlue",
        "rgb": "[70, 130, 180]"
    },
    {
        "group": "blue",
        "hex": "#5F9EA0",
        "name": "CadetBlue",
        "rgb": "[95, 158, 160]"
    },
    {
        "group": "blue",
        "hex": "#00FFFF",
        "name": "Aqua",
        "rgb": "[0, 255, 255]"
    },
    {
        "group": "blue",
        "hex": "#00FFFF",
        "name": "Cyan",
        "rgb": "[0, 255, 255]"
    },
    {
        "group": "blue",
        "hex": "#E0FFFF",
        "name": "LightCyan",
        "rgb": "[224, 255, 255]"
    },
    {
        "group": "blue",
        "hex": "#AFEEEE",
        "name": "PaleTurquoise",
        "rgb": "[175, 238, 238]"
    },
    {
        "group": "blue",
        "hex": "#7FFFD4",
        "name": "Aquamarine",
        "rgb": "[127, 255, 212]"
    },
    {
        "group": "blue",
        "hex": "#40E0D0",
        "name": "Turquoise",
        "rgb": "[64, 224, 208]"
    },
    {
        "group": "blue",
        "hex": "#48D1CC",
        "name": "MediumTurquoise",
        "rgb": "[72, 209, 204]"
    },
    {
        "group": "brown",
        "hex": "#BC8F8F",
        "name": "RosyBrown",
        "rgb": "[188, 143, 143]"
    },
    {
        "group": "brown",
        "hex": "#800000",
        "name": "Maroon",
        "rgb": "[128, 0, 0]"
    },
    {
        "group": "brown",
        "hex": "#A52A2A",
        "name": "Brown",
        "rgb": "[165, 42, 42]"
    },
    {
        "group": "brown",
        "hex": "#F4A460",
        "name": "SandyBrown",
        "rgb": "[244, 164, 96]"
    },
    {
        "group": "brown",
        "hex": "#A0522D",
        "name": "Sienna",
        "rgb": "[160, 82, 45]"
    },
    {
        "group": "brown",
        "hex": "#D2691E",
        "name": "Chocolate",
        "rgb": "[210, 105, 30]"
    },
    {
        "group": "brown",
        "hex": "#CD853F",
        "name": "Peru",
        "rgb": "[205, 133, 63]"
    },
    {
        "group": "brown",
        "hex": "#B8860B",
        "name": "DarkGoldenrod",
        "rgb": "[184, 134, 11]"
    },
    {
        "group": "brown",
        "hex": "#FFF8DC",
        "name": "Cornsilk",
        "rgb": "[255, 248, 220]"
    },
    {
        "group": "brown",
        "hex": "#FFEBCD",
        "name": "BlanchedAlmond",
        "rgb": "[255, 235, 205]"
    },
    {
        "group": "brown",
        "hex": "#FFE4C4",
        "name": "Bisque",
        "rgb": "[255, 228, 196]"
    },
    {
        "group": "brown",
        "hex": "#FFDEAD",
        "name": "NavajoWhite",
        "rgb": "[255, 222, 173]"
    },
    {
        "group": "brown",
        "hex": "#DAA520",
        "name": "Goldenrod",
        "rgb": "[218, 165, 32]"
    },
    {
        "group": "brown",
        "hex": "#DEB887",
        "name": "BurlyWood",
        "rgb": "[222, 184, 135]"
    },
    {
        "group": "brown",
        "hex": "#D2B48C",
        "name": "Tan",
        "rgb": "[210, 180, 140]"
    },
    {
        "group": "brown",
        "hex": "#8B4513",
        "name": "SaddleBrown",
        "rgb": "[139, 69, 19]"
    },
    {
        "group": "brown",
        "hex": "#F5DEB3",
        "name": "Wheat",
        "rgb": "[245, 222, 179]"
    },
    {
        "group": "gray",
        "hex": "#2F4F4F",
        "name": "DarkSlateGray",
        "rgb": "[47, 79, 79]"
    },
    {
        "group": "gray",
        "hex": "#000000",
        "name": "Black",
        "rgb": "[0, 0, 0]"
    },
    {
        "group": "gray",
        "hex": "#DCDCDC",
        "name": "Gainsboro",
        "rgb": "[220, 220, 220]"
    },
    {
        "group": "gray",
        "hex": "#D3D3D3",
        "name": "LightGray",
        "rgb": "[211, 211, 211]"
    },
    {
        "group": "gray",
        "hex": "#C0C0C0",
        "name": "Silver",
        "rgb": "[192, 192, 192]"
    },
    {
        "group": "gray",
        "hex": "#A9A9A9",
        "name": "DarkGray",
        "rgb": "[169, 169, 169]"
    },
    {
        "group": "gray",
        "hex": "#808080",
        "name": "Gray",
        "rgb": "[128, 128, 128]"
    },
    {
        "group": "gray",
        "hex": "#696969",
        "name": "DimGray",
        "rgb": "[105, 105, 105]"
    },
    {
        "group": "gray",
        "hex": "#778899",
        "name": "LightSlateGray",
        "rgb": "[119, 136, 153]"
    },
    {
        "group": "gray",
        "hex": "#708090",
        "name": "SlateGray",
        "rgb": "[112, 128, 144]"
    },
    {
        "group": "gray-triples",
        "hex": "#111111",
        "name": "#111",
        "rgb": "[17, 17, 17]"
    },
    {
        "group": "gray-triples",
        "hex": "#222222",
        "name": "#222",
        "rgb": "[34, 34, 34]"
    },
    {
        "group": "gray-triples",
        "hex": "#333333",
        "name": "#333",
        "rgb": "[51, 51, 51]"
    },
    {
        "group": "gray-triples",
        "hex": "#444444",
        "name": "#444",
        "rgb": "[68, 68, 68]"
    },
    {
        "group": "gray-triples",
        "hex": "#555555",
        "name": "#555",
        "rgb": "[85, 85, 85]"
    },
    {
        "group": "gray-triples",
        "hex": "#666666",
        "name": "#666",
        "rgb": "[102, 102, 102]"
    },
    {
        "group": "gray-triples",
        "hex": "#777777",
        "name": "#777",
        "rgb": "[119, 119, 119]"
    },
    {
        "group": "gray-triples",
        "hex": "#888888",
        "name": "#888",
        "rgb": "[136, 136, 136]"
    },
    {
        "group": "gray-triples",
        "hex": "#999999",
        "name": "#999",
        "rgb": "[153, 153, 153]"
    },
    {
        "group": "gray-triples",
        "hex": "#aaaaaa",
        "name": "#aaa",
        "rgb": "[170, 170, 170]"
    },
    {
        "group": "gray-triples",
        "hex": "#bbbbbb",
        "name": "#bbb",
        "rgb": "[187, 187, 187]"
    },
    {
        "group": "gray-triples",
        "hex": "#cccccc",
        "name": "#ccc",
        "rgb": "[204, 204, 204]"
    },
    {
        "group": "gray-triples",
        "hex": "#dddddd",
        "name": "#ddd",
        "rgb": "[221, 221, 221]"
    },
    {
        "group": "gray-triples",
        "hex": "#eeeeee",
        "name": "#eee",
        "rgb": "[238, 238, 238]"
    },
    {
        "group": "green",
        "hex": "#9ACD32",
        "name": "YellowGreen",
        "rgb": "[154, 205, 50]"
    },
    {
        "group": "green",
        "hex": "#6B8E23",
        "name": "OliveDrab",
        "rgb": "[107, 142, 35]"
    },
    {
        "group": "green",
        "hex": "#808000",
        "name": "Olive",
        "rgb": "[128, 128, 0]"
    },
    {
        "group": "green",
        "hex": "#556B2F",
        "name": "DarkOliveGreen",
        "rgb": "[85, 107, 47]"
    },
    {
        "group": "green",
        "hex": "#008B8B",
        "name": "DarkCyan",
        "rgb": "[0, 139, 139]"
    },
    {
        "group": "green",
        "hex": "#8FBC8B",
        "name": "DarkSeaGreen",
        "rgb": "[143, 188, 139]"
    },
    {
        "group": "green",
        "hex": "#006400",
        "name": "DarkGreen",
        "rgb": "[0, 100, 0]"
    },
    {
        "group": "green",
        "hex": "#008080",
        "name": "Teal",
        "rgb": "[0, 128, 128]"
    },
    {
        "group": "green",
        "hex": "#66CDAA",
        "name": "MediumAquamarine",
        "rgb": "[102, 205, 170]"
    },
    {
        "group": "green",
        "hex": "#008000",
        "name": "Green",
        "rgb": "[0, 128, 0]"
    },
    {
        "group": "green",
        "hex": "#20B2AA",
        "name": "LightSeaGreen",
        "rgb": "[32, 178, 170]"
    },
    {
        "group": "green",
        "hex": "#2E8B57",
        "name": "SeaGreen",
        "rgb": "[46, 139, 87]"
    },
    {
        "group": "green",
        "hex": "#228B22",
        "name": "ForestGreen",
        "rgb": "[34, 139, 34]"
    },
    {
        "group": "green",
        "hex": "#ADFF2F",
        "name": "GreenYellow",
        "rgb": "[173, 255, 47]"
    },
    {
        "group": "green",
        "hex": "#7CFC00",
        "name": "LawnGreen",
        "rgb": "[124, 252, 0]"
    },
    {
        "group": "green",
        "hex": "#00FF00",
        "name": "Lime",
        "rgb": "[0, 255, 0]"
    },
    {
        "group": "green",
        "hex": "#32CD32",
        "name": "LimeGreen",
        "rgb": "[50, 205, 50]"
    },
    {
        "group": "green",
        "hex": "#7FFF00",
        "name": "Chartreuse",
        "rgb": "[127, 255, 0]"
    },
    {
        "group": "green",
        "hex": "#90EE90",
        "name": "LightGreen",
        "rgb": "[144, 238, 144]"
    },
    {
        "group": "green",
        "hex": "#00FA9A",
        "name": "MediumSpringGreen",
        "rgb": "[0, 250, 154]"
    },
    {
        "group": "green",
        "hex": "#00FF7F",
        "name": "SpringGreen",
        "rgb": "[0, 255, 127]"
    },
    {
        "group": "green",
        "hex": "#3CB371",
        "name": "MediumSeaGreen",
        "rgb": "[60, 179, 113]"
    },
    {
        "group": "green",
        "hex": "#98FB98",
        "name": "PaleGreen",
        "rgb": "[152, 251, 152]"
    },
    {
        "group": "orange",
        "hex": "#FF8C00",
        "name": "DarkOrange",
        "rgb": "[255, 140, 0]"
    },
    // {
    //     "group": "orange",
    //     "hex": "#FFA07A",
    //     "name": "LightSalmon",
    //     "rgb": "[255, 160, 122]"
    // },
    {
        "group": "orange",
        "hex": "#FF7F50",
        "name": "Coral",
        "rgb": "[255, 127, 80]"
    },
    {
        "group": "orange",
        "hex": "#FF6347",
        "name": "Tomato",
        "rgb": "[255, 99, 71]"
    },
    {
        "group": "orange",
        "hex": "#FF4500",
        "name": "OrangeRed",
        "rgb": "[255, 69, 0]"
    },
    {
        "group": "orange",
        "hex": "#FFA500",
        "name": "Orange",
        "rgb": "[255, 165, 0]"
    },
    {
        "group": "pink",
        "hex": "#FFB6C1",
        "name": "LightPink",
        "rgb": "[255, 182, 193]"
    },
    {
        "group": "pink",
        "hex": "#C71585",
        "name": "MediumVioletRed",
        "rgb": "[199, 21, 133]"
    },
    {
        "group": "pink",
        "hex": "#FFC0CB",
        "name": "Pink",
        "rgb": "[255, 192, 203]"
    },
    {
        "group": "pink",
        "hex": "#DB7093",
        "name": "PaleVioletRed",
        "rgb": "[219, 112, 147]"
    },
    {
        "group": "pink",
        "hex": "#FF1493",
        "name": "DeepPink",
        "rgb": "[255, 20, 147]"
    },
    {
        "group": "pink",
        "hex": "#FF69B4",
        "name": "HotPink",
        "rgb": "[255, 105, 180]"
    },
    {
        "group": "purple",
        "hex": "#FF00FF",
        "name": "Fuchsia",
        "rgb": "[255, 0, 255]"
    },
    // {
    //     "group": "purple",
    //     "hex": "#7B68EE",
    //     "name": "MediumSlateBlue",
    //     "rgb": "[123, 104, 238]"
    // },
    {
        "group": "purple",
        "hex": "#483D8B",
        "name": "DarkSlateBlue",
        "rgb": "[72, 61, 139]"
    },
    {
        "group": "purple",
        "hex": "#6A5ACD",
        "name": "SlateBlue",
        "rgb": "[106, 90, 205]"
    },
    {
        "group": "purple",
        "hex": "#4B0082",
        "name": "Indigo",
        "rgb": "[75, 0, 130]"
    },
    {
        "group": "purple",
        "hex": "#800080",
        "name": "Purple",
        "rgb": "[128, 0, 128]"
    },
    {
        "group": "purple",
        "hex": "#8B008B",
        "name": "DarkMagenta",
        "rgb": "[139, 0, 139]"
    },
    {
        "group": "purple",
        "hex": "#9932CC",
        "name": "DarkOrchid",
        "rgb": "[153, 50, 204]"
    },
    {
        "group": "purple",
        "hex": "#9400D3",
        "name": "DarkViolet",
        "rgb": "[148, 0, 211]"
    },
    {
        "group": "purple",
        "hex": "#8A2BE2",
        "name": "BlueViolet",
        "rgb": "[138, 43, 226]"
    },
    {
        "group": "purple",
        "hex": "#663399",
        "name": "RebeccaPurple",
        "rgb": "[102, 51, 153]"
    },
    {
        "group": "purple",
        "hex": "#9370DB",
        "name": "MediumPurple",
        "rgb": "[147, 112, 219]"
    },
    {
        "group": "purple",
        "hex": "#FF00FF",
        "name": "Magenta",
        "rgb": "[255, 0, 255]"
    },
    {
        "group": "purple",
        "hex": "#DA70D6",
        "name": "Orchid",
        "rgb": "[218, 112, 214]"
    },
    {
        "group": "purple",
        "hex": "#E6E6FA",
        "name": "Lavender",
        "rgb": "[230, 230, 250]"
    },
    {
        "group": "purple",
        "hex": "#D8BFD8",
        "name": "Thistle",
        "rgb": "[216, 191, 216]"
    },
    {
        "group": "purple",
        "hex": "#DDA0DD",
        "name": "Plum",
        "rgb": "[221, 160, 221]"
    },
    {
        "group": "purple",
        "hex": "#EE82EE",
        "name": "Violet",
        "rgb": "[238, 130, 238]"
    },
    {
        "group": "purple",
        "hex": "#BA55D3",
        "name": "MediumOrchid",
        "rgb": "[186, 85, 211]"
    },
    {
        "group": "red",
        "hex": "#FF0000",
        "name": "Red",
        "rgb": "[255, 0, 0]"
    },
    {
        "group": "red",
        "hex": "#DC143C",
        "name": "Crimson",
        "rgb": "[220, 20, 60]"
    },
    {
        "group": "red",
        "hex": "#FFA07A",
        "name": "LightSalmon",
        "rgb": "[255, 160, 122]"
    },
    {
        "group": "red",
        "hex": "#E9967A",
        "name": "DarkSalmon",
        "rgb": "[233, 150, 122]"
    },
    {
        "group": "red",
        "hex": "#FA8072",
        "name": "Salmon",
        "rgb": "[250, 128, 114]"
    },
    {
        "group": "red",
        "hex": "#F08080",
        "name": "LightCoral",
        "rgb": "[240, 128, 128]"
    },
    {
        "group": "red",
        "hex": "#B22222",
        "name": "FireBrick",
        "rgb": "[178, 34, 34]"
    },
    {
        "group": "red",
        "hex": "#8B0000",
        "name": "DarkRed",
        "rgb": "[139, 0, 0]"
    },
    {
        "group": "red",
        "hex": "#CD5C5C",
        "name": "IndianRed",
        "rgb": "[205, 92, 92]"
    },
    {
        "group": "white",
        "hex": "#FFFFF0",
        "name": "Ivory",
        "rgb": "[255, 255, 240]"
    },
    {
        "group": "white",
        "hex": "#FFE4E1",
        "name": "MistyRose",
        "rgb": "[255, 228, 225]"
    },
    {
        "group": "white",
        "hex": "#FFF0F5",
        "name": "LavenderBlush",
        "rgb": "[255, 240, 245]"
    },
    {
        "group": "white",
        "hex": "#FAF0E6",
        "name": "Linen",
        "rgb": "[250, 240, 230]"
    },
    {
        "group": "white",
        "hex": "#FAEBD7",
        "name": "AntiqueWhite",
        "rgb": "[250, 235, 215]"
    },
    {
        "group": "white",
        "hex": "#FFFAF0",
        "name": "FloralWhite",
        "rgb": "[255, 250, 240]"
    },
    {
        "group": "white",
        "hex": "#FDF5E6",
        "name": "OldLace",
        "rgb": "[253, 245, 230]"
    },
    {
        "group": "white",
        "hex": "#FFF5EE",
        "name": "SeaShell",
        "rgb": "[255, 245, 238]"
    },
    {
        "group": "white",
        "hex": "#F5F5DC",
        "name": "Beige",
        "rgb": "[245, 245, 220]"
    },
    {
        "group": "white",
        "hex": "#F8F8FF",
        "name": "GhostWhite",
        "rgb": "[248, 248, 255]"
    },
    {
        "group": "white",
        "hex": "#F0F8FF",
        "name": "AliceBlue",
        "rgb": "[240, 248, 255]"
    },
    {
        "group": "white",
        "hex": "#F0FFFF",
        "name": "Azure",
        "rgb": "[240, 255, 255]"
    },
    {
        "group": "white",
        "hex": "#F5FFFA",
        "name": "MintCream",
        "rgb": "[245, 255, 250]"
    },
    {
        "group": "white",
        "hex": "#F0FFF0",
        "name": "HoneyDew",
        "rgb": "[240, 255, 240]"
    },
    {
        "group": "white",
        "hex": "#FFFAFA",
        "name": "Snow",
        "rgb": "[255, 250, 250]"
    },
    {
        "group": "white",
        "hex": "#FFFFFF",
        "name": "White",
        "rgb": "[255, 255, 255]"
    },
    {
        "group": "white",
        "hex": "#F5F5F5",
        "name": "WhiteSmoke",
        "rgb": "[245, 245, 245]"
    },
    {
        "group": "yellow",
        "hex": "#EEE8AA",
        "name": "PaleGoldenrod",
        "rgb": "[238, 232, 170]"
    },
    {
        "group": "yellow",
        "hex": "#BDB76B",
        "name": "DarkKhaki",
        "rgb": "[189, 183, 107]"
    },
    {
        "group": "yellow",
        "hex": "#F0E68C",
        "name": "Khaki",
        "rgb": "[240, 230, 140]"
    },
    {
        "group": "yellow",
        "hex": "#FFDAB9",
        "name": "PeachPuff",
        "rgb": "[255, 218, 185]"
    },
    {
        "group": "yellow",
        "hex": "#FFFFE0",
        "name": "LightYellow",
        "rgb": "[255, 255, 224]"
    },
    {
        "group": "yellow",
        "hex": "#FFEFD5",
        "name": "PapayaWhip",
        "rgb": "[255, 239, 213]"
    },
    {
        "group": "yellow",
        "hex": "#FAFAD2",
        "name": "LightGoldenrodYellow",
        "rgb": "[250, 250, 210]"
    },
    {
        "group": "yellow",
        "hex": "#FFFACD",
        "name": "LemonChiffon",
        "rgb": "[255, 250, 205]"
    },
    {
        "group": "yellow",
        "hex": "#FFD700",
        "name": "Gold",
        "rgb": "[255, 215, 0]"
    },
    {
        "group": "yellow",
        "hex": "#FFE4B5",
        "name": "Moccasin",
        "rgb": "[255, 228, 181]"
    },
    {
        "group": "yellow",
        "hex": "#FFFF00",
        "name": "Yellow",
        "rgb": "[255, 255, 0]"
    }
];

export default COLORS_LIST;