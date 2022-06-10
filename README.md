### Linter 설정

= Format On Save 해제해야 됩니다.
= Default Formatter 제거해야 됩니다.

### Auth

- Auth는 GraphQL이라고 다른 것은 없습니다.
- apollo.js의 isLoggedInVar에 대해서 useReactiveVar() 사용하면, 현재 로그인 여부를 잘 받아옵니다.

### API 호출 방법

- GraphQL API의 메소드는 크게 Mutation, Query로 구성되어 있으며, Mutation은 POST, Query는 GET 느낌입니다.

1. useMutation : Mutation연산에 대해서 사용합니다.
   - https://react-query.tanstack.com/reference/useMutation
2. useQuery : Query연산에 대해서 사용하고, 쿼리문을 작성한 페이지에서 무조건 API호출합니다.
   - https://react-query.tanstack.com/reference/useQuery
3. useLazyQuery : Query연산에 대해서 사용하고, 선택적으로 API를 호출합니다.
4. local에서 서버를 열면 오른쪽에 docs가 있는데, 거기에 GraphQL의 각 타입이 정의되어 있습니다.


### API쓰시기 전에 모르겠다 싶으시면 연락주십쇼!