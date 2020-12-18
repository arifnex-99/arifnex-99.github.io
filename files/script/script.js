function myfunction() {
    let min = 1024; 
    let max = 9999; 

    let  deg = Math.floor(Math.random() * (min-max)) + max;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
    let element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function() {
        element.classList.add('animate');
    }, 5000); 
}