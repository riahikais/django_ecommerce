var updatesBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updatesBtns.length; i++){
    updatesBtns[i].addEventListener('click',function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productID', productId, 'Action', action)

        console.log('USER ', user)
        if(user == 'AnonymousUser'){
            console.log('User is not authenticated')
        } else {
            console.log('User is authenticated, sending data...')
        }
    })
}
