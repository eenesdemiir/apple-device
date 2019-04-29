const $ = (className) => document.getElementsByClassName(className)[0]
let devices = ['iphone', 'mini', 'ipad', 'macbook', 'imac']
let loop = {
    'left': () => devices.unshift(devices.pop()),
    'right': () => devices.push(devices.shift())
}

Array.from($('buttons').children).forEach(element => 
    element.addEventListener('click', function(e) {
        loop[e.target.className]()
        $('device').className = 'device ' + devices[0]
    })
)

var password;
  var pass1="enes123";
  password=prompt('Sayfayi görebilmek icin lütfen sifreyi giriniz','');
  if (password==pass1){alert('Sifreyi dogru girdiniz !!');}
  else{window.location="";}