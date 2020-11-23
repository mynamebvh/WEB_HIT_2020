const axios = require('axios');

axios.get('https://tailieudoc.vn/tai-lieu/13709/dvh-chu-de-02-he-thuc-doc-lap-voi-thoi-gian-16-trang.html')
  .then(data => console.log(data))
  .catch(err => console.log(err));