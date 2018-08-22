# movieql
Movie API with Graphql

## 8. Delete Mutation
// 새로 추가한 addMovie 가 삭제가 안됨 수정필요.
* add const resolvers > deleteMovie: (_, {id}) => deleteMovie(id)
* * add export const addMovie = (name, score)
* add type Mutation => schema.graphql
```js
    deleteMovie(id: Int!): Boolean!
```

## 7. Defining Mutations & Creating frist Mutation
* change of state
- schema.graphql => type Mutation
```js
    type Mutation {
        addMovie(name:String!, score: Int!): Movie!
    }
```
- resolvers.js =>
```js
    Mutation: {
        addMovie: {_. {name, score}} =>
    }
```
- db.js =>
```js
    export const addMovie = (name, score) => {
        const newMovies = {
            id: `${movies,length + 1}`,
            name,
            score
        };
        movies.push(newMovie);
        return newMovie;
    }
```

## 6. Creating Queries with Arguments
* 나의 data가 어떻게 보일지 정의하고 (Schema.graphql), 정의에 대한 것을 resolvers.js에서 작동할 함수를 정의하여 정의한것을 작동하게 하여 내가 원하는 종류의 backend를 가질 수 있다.
* resolvers는 어떤한 것도 될 수 있다. API에 다가 갈 수도 Database에 갈 수도
* resolvers는 기본적으로 View 에 해당한다.
* Schema는 URLs 같은 거다. 어디로 갈지 정해주니까.
- db.js =>
```js
    export const getById = id => {
        const filterdPeople = people.filter(person => person.id === String(id));
        return filteredPeople[0];
    }
```
- resolvers =>
```js
    const resolvers = {
        Query: {
            people: () => people,
            person: (_, { id }) => getById(id)
        }
    };
```

## 5. Extending the Schema 2
* 좀더 복잡한 Query를 다뤄보자.
* Resolver => database에 가서 무엇을 관찰하고 무엇을 린턴할지 등등 생각해보기.

- resolvers.js => people 배열 만들기, query에 people 할당하기
- schema.graphql => type Person > name, age, gender
- schema.graphql => type Query > people:[Person]!, person(id:Int): Person
- db.js => resolvers.js안의 people배열을 옮기고 export시키자.
- db.js => id에 관해 수정 , schema.graphql => type Person > id: Int!
- db.js => export const getbyId
- resolvers.js => Query > person:()  => getbyId

## 4. Extending the Schema
- resolvers.js => const Seokhwan
- resolvers.js => const resolvers
- schema.graphql => type Seokhwan
- schema.graphql => type query


## 3. Creating the first Query and Resolver
* query는 내가 정보를 받을때 마다 쓰인다.
* mutation은 내가 정보를 바꿀때 서버, database, 메모리 어디든 변형하는것을 말함.
* no Schema undefined => 내가 받거나 줄 정보에 관한 서술. just scription
* 혹시나 playground를 돌리는중 갑자기 events.js:165 throw er;// Unhandled 'error' event를 봤다면 컴퓨터 리셋해보세요. 
- first query
    - 여기에 사용자에게 정보를 주는 모든것들을 query로 넣을 것이다.
    - schema.graphql =>
```js
    type Query{
        name: String!
        //이름 : 답변 !필수(isRequired)
    }
```
- type definition
```js
    const server = new GraphQLServer({
        typeDefs: "graphql/schema.graphql",
        resolvers
    });
    // err: no schema definition
    // Resolve 마무리가 필요함!
    server.start(() => conosole.log("Graphql Server Running"));
```
- resolvers.js
```js
    const resolvers ={
        Query: {
            name: () => "seokhwan!"
        }
    }
    export default resolvers;
```


## 2. Creating a GraphQL Server with GraphQL Yoga

- yarn global add nodemon => 내가 파일을 수정할 때마다 서버를 재시작해줌.
- package.json => add
```js
    "scripts": {
        "start": "nodemon"
    } 
```
- 환경설정 => [GitHub](https://github.com/prismagraphql/graphql-yoga) => Quickstart
- yarn global add babel-cli
=> babel은 코드를 더 좋게 작성해줌.
- yarn global add babel-cli --ignore-engines
- package.json => correct "script"
```js
    "scripts": {
        "start": "nodemon --exec babel-node index.js"
    }
```
- new => babelrc
```js
    {
        "presets": ["env", "stage-3"]
    }
    // node.js를 위함.
```
- yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
```js
    // console.log(""); 실행 확인.

    const server = new GraphQLServer({
        // 환경설정!
    });

    server.start(() => console.log("Graphql Server Running"));
```



## 1. Problem solved by GraphQL
### * Over-fetching
내가 원하는 정보보다 더 많은 정보를 서버에서 받는 방식.
ex) users.name만 필요하지만 다른 object들을 다 받음.
### * Under-fetching
앱을 시작하면 필요한 요청에 의해 필요한 요청 만큼 오고 간 후 앱이 시작.
REST에서 하나를 완성하려고 많은 소스를 요청함.
### GraphQL
GraphQL은 URL이 존재 하지 않는다. 
오직 하나의 종점만 있을뿐.
필요한 정보만 입력해서 하나의 query만 거들뿐.
ex) 
```js
{
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}
{
    feed: [
        {
            comments:1,
            likeNumber: 20
        }
    ],
    notifications: [
        {
            isRead: true
        },
        {
            isRead: false
        }
    ],
    user: {
        username: "seokany"
        profile: "http"
    }
}
```
## Settings
- mkdir movieql
- cd movieql
- yarn init
- git > create repository => movieql
- git remote add origin URL
- git pull origin master
- yarn add graphql-yoga

