$(document).ready(function(){
    $("#chile").click(function(){
        $("#flag-chile").addClass("active-country");
        $("#chile").addClass("active-flags");

        $("#flag-uruguai").removeClass("active-country");
        $("#uruguai").removeClass("active-flags");

        $("#flag-peru").removeClass("active-country");
        $("#peru").removeClass("active-flags");

        $("#flag-mexico").removeClass("active-country");
        $("#mexico").removeClass("active-flags");
    });
    $("#uruguai").click(function(){
        $("#flag-uruguai").addClass("active-country");
        $("#uruguai").addClass("active-flags");

        $("#flag-chile").removeClass("active-country");
        $("#chile").removeClass("active-flags");

        $("#flag-peru").removeClass("active-country");
        $("#peru").removeClass("active-flags");

        $("#flag-mexico").removeClass("active-country");
        $("#mexico").removeClass("active-flags");
    });
    $("#peru").click(function(){
        $("#flag-peru").addClass("active-country");
        $("#peru").addClass("active-flags");

        $("#flag-chile").removeClass("active-country");
        $("#chile").removeClass("active-flags");

        $("#flag-uruguai").removeClass("active-country");
        $("#uruguai").removeClass("active-flags");

        $("#flag-mexico").removeClass("active-country");
        $("#mexico").removeClass("active-flags");
    });
    $("#mexico").click(function(){
        $("#flag-mexico").addClass("active-country");
        $("#mexico").addClass("active-flags");

        $("#flag-chile").removeClass("active-country");
        $("#chile").removeClass("active-flags");

        $("#flag-peru").removeClass("active-country");
        $("#peru").removeClass("active-flags");

        $("#flag-uruguai").removeClass("active-country");
        $("#uruguai").removeClass("active-flags");
    });
});