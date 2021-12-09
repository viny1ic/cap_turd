var Form = document.getElementById('tree')
Form.addEventListener('submit',(event)=>{
    var ans = Form.elements['pass'].value
    if(md5(ans) == "47b7bfb65fa83ac9a71dcb0f6296bb6e")
        document.write(`Super top secret secret: cap_turd{password}`)
    else
        document.write(`Whew. my secret is still safe.`)
})