function l(){
    var a = document.getElementById('a').value;
    var t = document.getElementById('t').value;

    l = a*t/2

    document.getElementById('l').innerHTML = l;
}

function k(){
    var sisi1 = +document.getElementById('sisi1').value;
    var sisi2 = +document.getElementById('sisi2').value;
    var sisi3 = +document.getElementById('sisi3').value;

    k = sisi1+sisi2+sisi3

    document.getElementById('k').innerHTML = k;
}

function reset() {
    document.getElementById('a').value = '';
    document.getElementById('t').value = '';
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';

    document.getElementById('l').innerHTML = '0';
    document.getElementById('k').innerHTML = '0';
}

