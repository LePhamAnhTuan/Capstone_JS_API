function layIdSanPham(id) {
  console.log("id: ", id);
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });
  promise.then(function (result) {
    result.data.content;
    console.log("result.data.content: ", result.data.content);
  });
}
