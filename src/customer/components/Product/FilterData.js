export const color =[
    "White",
    "Black",
    "Marun",
    "Pink",
    "Yellow",
    "Green",
];

export const filters =[
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value : "beige", label: "Beige"},
            {value: "black", label: "Black"},
            {value: "green", label: "Green"},
            {value: "yellow", label: "Yellow"},
            {value: "brown", label: "Brown"},
            {value: "pink", label: "Pink"},
        ]
    },
    {
        id: "size",
        name: "Size",
        options:[
            {value: "s", label: "S"},
            {value : "m", label: "M"},
            {value: "l", label: "L"},
        ],
    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"10-20", label:"$10 - $20"},
            {value:"20-30", label:"$20 - $30"},
            {value:"30-40", label:"$30 - $40"},
            {value:"60-70", label:"$60 - $70"},
            {value:"80-90", label:"$80 - $90"},
            {value:"100+", label:"$100 +" },
        ],
    },
    {
        id:"discount",
        name: "Discount Range",
        options:[
            {value:"10", label: "10% And Above"},
            {value:"20", label: "20% And Above"},
            {value:"30", label: "30% And Above"},
            {value:"40", label: "40% And Above"},
            {value:"50", label: "50% And Above"},
            {value:"60", label: "60% And Above"},
        ]
    },
    {
        id:"availability",
        name: "Availability",
        options:[
            {value:"instock", label: "In Stock"},
            {value:"outofstock", label: "Out Of Stock"},
        ]
    }
]

