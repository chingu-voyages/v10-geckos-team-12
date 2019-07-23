import { createStore } from 'redux';
import AppReducer from '../Reducer/AppReducer'

const store = createStore(AppReducer)

console.log(store.getState());

const demoState = {
    trips:[{
        tripName: "Trip to New York",
        travellers:["Will", "Mike", "Lucas", "Dustin"],
        expenses:[{
            expnese:"Flights",
            whoPaid: "Mike",
            forWhom:["Will", "Mike", "Lucas", "Dustin"],
            howMuch:150
        },
        {
            expnese:"Hotels",
            whoPaid: "Lucas",
            forWhom:["Will", "Mike", "Lucas", "Dustin"],
            howMuch: 120
        }   
        ]
    },
    {
        tripName: "Trip to StarCourt mall",
        travellers:["Will", "Mike", "Lucas", "Dustin", "Eleven", "Max"],
        expenses:[{
            expnese:"Movies",
            whoPaid: "Max",
            forWhom:["Will", "Mike", "Lucas", "Dustin", "Eleven", "Max"],
            howMuch: 30
        },
        {
            expnese:"Popcorn",
            whoPaid: "Dustin",
            forWhom:["Lucas", "Dustin", "Eleven", "Max"],
            howMuch: 5
        }
        ]
    }
]
}
