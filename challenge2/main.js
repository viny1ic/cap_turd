var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-3c7yzrtukm8ypzh6-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
  .then(response => response.text())
  .then(result => {var paragraph = document.getElementById("price")
        var text = document.createTextNode(`The gold price as of today is: Rs. ${JSON.parse(result)['price']}`)
        paragraph.appendChild(text)})
  .catch(error => console.log('error', error))



var Form = document.getElementById('hehe')
Form.addEventListener('submit',(event)=>{
    var ans = Form.elements['secret'].value
    if(md5(ans) == "85055fecaf363bb738a8fb7689e1f846")
        document.write(`BingPot!! the flag is cap_turd{secret}`)
    else
        document.write(`Whew. my secret is still safe.`)
})