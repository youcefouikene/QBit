
window.onscroll = function() { 
        if(document.documentElement.scrollTop > 600) {
        document.getElementById("navbarr").style.background = "white"
        document.getElementById("start1").style.color = "black"
        document.getElementById("start2").style.color = "black"
        document.getElementById("start3").style.color = "black"
        document.getElementById("start4").style.color = "black"
        document.getElementById("start6").style.color = "black"
    }

    else{
        document.getElementById("navbarr").style.background = "#1D3A35"
        document.getElementById("start1").style.color = "white"
        document.getElementById("start2").style.color = "white"
        document.getElementById("start3").style.color = "white"
        document.getElementById("start4").style.color = "white"
        document.getElementById("start6").style.color = "white"
    }
}


