<template>
  <div class="notifiable no-mobile" @click="isVisibleCart = true">
    <label for="menu-cart-toggle">
      <img src="img/cart.svg" alt="cart">
    </label>
    <div class="event_notification">{{ cartItems }}</div>
    <input type="checkbox" id="menu-cart-toggle" hidden="true">
    <div class="main_menu--cart" v-if="isVisibleCart">
      <h3>Корзина</h3>
      <ul class='cart-list'>
        <li v-for="element in cartContent">{{productNameByID(element.good)}}
          <div class="good-data">
            <div><button @click="$emit('decrement', element.good)">-</button></div>
            <div>{{element.count}}</div>
            <div><button @click="$emit('increment', element.good)">+</button></div>
            <div>{{element.count * priceByID(element.good)}}</div>
          </div>
        </li>
      </ul>
      <hr>
      Стоимость покупки: {{totalCartPrice}}
    </div>
  </div>
</template>

<script>
export default {
  name: "cd-cart",
  data() {
    return {
      isVisibleCart: false, // признак видимости корзины
    }
  },
  mounted() {
  },
  props: {
    apiUrl: {
      type: String,
      default: null,
    },
    cartContent: {
      type: Array,
      default: [],
    },
    goodsList: {
      type: Array,
      default: []
    }
  },
  computed: {
    totalCartPrice: function() {
      let price = 0;

      this.cartContent.forEach((element) => {
        let good = this.goodsList.find(good => good.id_product === element.good);
        price += good.price * element.count;
      });

      return price;
    },
    cartItems: function() {
      let count = 0;

      this.cartContent.forEach(element => count += element.count);

      return count;
    },
  },
  methods: {
    priceByID(id) {
      console.log(this.goodsList);

      let idx = this.goodsList.findIndex(element => id === element.id_product);

      if (-1 !== idx) {
        return this.goodsList[idx].price;
      }
      else console.error("Product price not found by ID " + id);
    },
    productNameByID(id) {
      let idx = this.goodsList.findIndex(element => id === element.id_product);

      if (-1 !== idx) {
        return this.goodsList[idx].product_name;
      }
      else console.error("Product name not found by ID " + id);
    },
  }
}
</script>

<style scoped>

</style>