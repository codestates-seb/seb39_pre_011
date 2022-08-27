axios({
  method: "get",
  url: "www.naver.com",
}).then((response) => {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});

axios({
  method: "get", // 통신 방식
  url: "www.naver.com", // 서버
  headers: { "X-Requested-With": "XMLHttpRequest" }, // 요청 헤더 설정
  params: { api_key: "1234", langualge: "en" }, // ?파라미터를 전달
  responseType: "json", // default

  maxContentLength: 2000, // http 응답 내용의 max 사이즈
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  }, // HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정
  proxy: {
    host: "127.0.0.1",
    port: 9000,
    auth: {
      username: "mikeymike",
      password: "rapunz3l",
    },
  }, // proxy서버의 hostname과 port를 정의
  maxRedirects: 5, // node.js에서 사용되는 리다이렉트 최대치를 지정
  httpsAgent: new https.Agent({ keepAlive: true }), // node.js에서 https를 요청을 할때 사용자 정의 agent를 정의
}).then(function (response) {
  // response Action
});
