export const restaurants = [
    {
        id: 1,
        name: "Every Day Restaurant", 
        dishes: [
            {id: "A1", name: "Jollof Rice", status: "Active", price: 800, imageLink: '/assets/images/jollof_rice.png'},
            {id: "A2", name: "Fried Rice", status: "Active", price: 800, imageLink: '/assets/images/fried_rice.png'},
            {id: "A3", name: "Fried Yam", status: "Active", price: 800, imageLink: '/assets/images/fried_yam.jpeg'}
        ],
        addOn: [
            {id: "A4", name: "Onion Sauce", status: "Active", price: 0, amount: 1, imageLink: ''},
            {id: "A5", name: "Chicken", status: "Active", price: 1500, amount: 1, imageLink: '/assets/images/fried_chicken.jpeg'},
            {id: "A6", name: "Plantain", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/fried_plantain.jpeg'},
            {id: "A7", name: "Boiled Eggs", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/boiled_eggs.jpeg'},
            {id: "A8", name: "Fried Eggs", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/fried_egg.jpeg'},
            {id: "A9", name: "Liver Sauce", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/liver_sauce.jpeg'},
            {id: "A10", name: "Beaf", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/cooked_beaf.jpeg'}
        ],
        drinks: [
            {id: "A11", name: "Bottle water", status: "Active", price: 150, amount: 1, imageLink: ''},
            {id: "A12", name: "Coke 75cl", status: "Active", price: 250, amount: 1, imageLink: ''},
            {id: "A13", name: "Fanta 75cl", status: "Active", price: 250, amount: 1, imageLink: ''},
            {id: "A14", name: "Sprite 75cl", status: "Active", price: 250, amount: 1, imageLink: ''},
            {id: "A15", name: "Five alive 100cl", status: "Active", price: 300, amount: 1, imageLink: ''},
            {id: "A16", name: "Maltina can", status: "Active", price: 300, amount: 1, imageLink: ''},
        ]
    },
    {
        id: 2,
        name: "Dine Restaurant",
        dishes: [
            {id: "B1", name: "Matched Beans", otherName: 'Ewa Agoyin', status: "Active", price: 800, imageLink: ''},
            {id: "B2", name: "Pounded Yam", status: "Active", price: 800, imageLink: ''}
        ],
        addOn: [
            {id: "B3", name: "Chicken", status: "Active", price: 1500, amount: 1, imageLink: '/assets/images/fried_chicken.jpeg'},
            {id: "B4", name: "Plantain", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/fried_plantain.jpeg'},
            {id: "B5", name: "Boiled Eggs", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/boiled_eggs.jpeg'},
            {id: "B6", name: "Fried Eggs", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/fried_egg.jpeg'},
            {id: "B7", name: "Beaf", status: "Active", price: 200, amount: 1, imageLink: '/assets/images/cooked_beaf.jpeg'}
        ]
    },
]

export const riders = [
    {id: "R1", name: "Mr.Abdul-Mujeeb", phoneNumber: 2348160786928, status: "Active"},
    {id: "R2", name: "Mr.Abdul-Mujeeb", phoneNumber: 2348160786928, status: "Active"},
    {id: "R3", name: "Mr.Abdul-Mujeeb", phoneNumber: 2348160786928, status: "Active"},
]