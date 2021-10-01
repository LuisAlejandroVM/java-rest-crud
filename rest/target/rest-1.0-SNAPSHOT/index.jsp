<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<h1><%= "Hello World!" %>
</h1>
<br/>
    <a href="hello-servlet">Hello Servlet</a>

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script>
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/rest_war_exploded/employee'
        }).done(function(res){
            console.log(res);
        });
    </script>
</body>
</html>