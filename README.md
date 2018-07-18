# movieql
Movie API with Graphql

## 3. Creating the first Query and Resolver
* query는 내가 정보를 받을때 마다 쓰인다.
* mutation은 내가 정보를 바꿀때 서버, database, 메모리 어디든 변형하는것을 말함.
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

