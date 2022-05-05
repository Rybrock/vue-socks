var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        altText: 'An image of some comfy socks',
        onSale: true,
        details: ["80% Cotton", "20% Polyester", "Unisex"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpeg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpeg',
                variantQuantity: 0
            }
        ],
        sizes: ['4', '5', '6' ],
        cart: 0,
        onSale: true
        // description: 'Confortable and affordable hats for your feet!'
    },
    methods: {
        // annon function call
        addToCart: function () {
            this.cart += 1
        },
        // removeFromCart: function () {
        //     this.cart -= 1
        // },
        // es6 shorthand for functions. Not globally supported by all browsers
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
              return this.brand + ' ' + this.product + ' are on sale!'
            } 
              return  this.brand + ' ' + this.product + ' are not on sale'
          }
    }
})