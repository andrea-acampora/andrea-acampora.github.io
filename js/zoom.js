$(document).ready(function(){

    const figure1 = $("figure > embed.figure1");
    const figure2 = $("figure > embed.figure2");
    const paragraph_about = $("div.about");

    figure1.hover(function(){
        figure1.css({"max-width":"70%","max-height":"70%"});
    }, function(){
        figure1.css({"max-width":"60%","max-height":"60%"});
    });

    figure2.hover(function(){
        figure2.css({"max-width":"70%","max-height":"70%"});
    }, function(){
        figure2.css({"max-width":"60%","max-height":"60%"});
    });

    paragraph_about.hover(function(){
        console.log("here");
        paragraph_about.css({"width":"130%","height":"130%","font-size":"25px"});
    }, function(){
        paragraph_about.css({"width":"100%","height":"100%","font-size":"20px"});
    });
});