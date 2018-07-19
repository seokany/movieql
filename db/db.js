export const people = [
    {   id: "1",
        name: "이석환",
        age: 23,
        gender: "male"    
    },
    {   id: "2",
        name: "김경진",
        age: 23,
        gender: "female"
    },
    {   id: "3",
        name: "강희승",
        age: 22,
        gender: "none"
    },
    {   id: "4",
        name: "김대유",
        age: 23,
        gender: "bigyou"
    }
]

export const getbyId = id => {
    const filteredPeople = peeple.filter(person => id === people.id);
    return filteredPeople[0];
}