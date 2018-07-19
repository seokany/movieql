export const people = [
    {   id: "0",
        name: "이석환",
        age: 23,
        gender: "male"    
    },
    {   id: "1",
        name: "김경진",
        age: 23,
        gender: "female"
    },
    {   id: "2",
        name: "강희승",
        age: 22,
        gender: "none"
    },
    {   id: "3",
        name: "김대유",
        age: 23,
        gender: "bigyou"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]; 
}