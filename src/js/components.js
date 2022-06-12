$(".sidebar-toggler, .header-toggler").click(function () {
    if ($(".sidebar").hasClass("sidebar-narrow-unfoldable")) {
        $(".sidebar .nav-item, .sidebar .nav-group").css("padding", "0")
        $(".sidebar .nav-link, .sidebar .nav-group").css("border-radius", "0")
    } else {
        $(".sidebar .nav-item, .sidebar .nav-group").css("padding", "0 1rem")
        $(".sidebar .nav-item, .sidebar .nav-group").css("border-radius", "6px")
    }
})
