<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    HttpSession sess = request.getSession(false);
    String key = request.getParameter("key");
    if(sess.getAttribute("log_key").equals(key)){
        sess.invalidate();
        out.print("<script>location.reload(true);</script>");
    }else{
        out.print("Invalid Attempt");
    }

%>
