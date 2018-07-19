const Seokhwan = {    
    name: "이석환",
    age: 23,
    gender: "male"    
}



const resolvers = {
    Query: {
        person: () => Seokhwan
    }
}

export default resolvers;