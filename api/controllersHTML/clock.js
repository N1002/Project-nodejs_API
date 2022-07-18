<!DOCTYPE html>
<html lang="vi">
<title>Thời Gian Hiện Tại</title>
<body>
<script>
setInterval(() => {
let date = new Date();
document.body.innerHTML = "<h1>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
"</h1>"
});
</script>
<body>
