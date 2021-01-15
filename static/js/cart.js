var updatesBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updatesBtns.length; i++){
    updatesBtns[i].addEventListener('click',function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productID', productId, 'Action', action)

        console.log('USER ', user)
        if(user == 'AnonymousUser'){
            addCookieItem(productId,action)
        } else {
            updateUserOrder(productId,action)
        }
    })
}
function addCookieItem(productId, action) {
    console.log('User is not authenticated to add cookies item...')
    if (action == 'add'){
        if (cart[productId] == undefined){
            cart[productId] = {'quantity':1}
        } else {
            cart[productId]['quantity'] += 1
        }
    }

    if(action == 'remove'){
        cart[productId]['quantity'] -= 1
        if (cart[productId]['quantity'] <= 0){
            console.log('Remove Item')
            delete cart[productId]
        }
    }
    console.log('Cart cookiiies !' , cart)
    document.cookie = 'cart=' + JSON.stringify(cart)
    location.reload()
}

function updateUserOrder(productId, action) {
    console.log('User is authenticated, sending data...')

    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        header:{
            'content-type' : 'application/json',
            'charset' : 'utf-8',
            'X-CSTFToken' : csrftoken
        },
        body:JSON.stringify({'productId': productId,'action':action})
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('data :', data)
        location.reload()
    })
}
