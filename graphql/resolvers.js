import { people, getbyId } from "../db/db";

const resolvers = {
    Query: {
        people: () => people,
        person: () => getbyId()
    }
}

export default resolvers;