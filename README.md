# movieql
Movie API with Graphql

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
## Settings
- mkdir movieql
- cd movieql
- yarn init
- git > create repository => movieql
- git remote add origin URL
- git pull origin master
- yarn add graphql-yoga

