<script language="JavaScript" type="text/javascript">

var s = document.createElement("link");
s.rel = "stylesheet";
s.href = "https://imfromouter.space/style.fix.css";
$("head").append(s);

$(function(){
   document.getElementById("header-logo").firstChild.removeAttribute("target");

  $(window).off("resize");
  $(window).off("orientationchange");
  $("#app").removeAttr("style");
});
</script>