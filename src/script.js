// async function getProduct(quantity) {
//     let response
//     let json = ref([])

//     try {
//         response = await fetch(`https://dummyjson.com/products/categories`)
//         json = await response.json();
//     }
//     // ?limit=${quantity}
//     catch (error) { console.error('Ошибка при получении данных:', error) }; // Обрабатываем возможные ошибки
//     console.log(json);
//     return json
// }
import { defineStore } from "pinia";
import { ref } from "vue";

export const scroll_div = defineStore("scroller", {
  state: () => ({ name: "default" }),
  actions: {
    story() {
      this.name = "story";
    },
    mission() {
      this.name = "mission";
    },
    team() {
      this.name = "team";
    },
    faq() {
      this.name = "faq";
    },
    privacy() {
      this.name = "privacy";
    },
    service() {
      this.name = "service";
    },
    dflt() {
      this.name = "default";
    },
  },
});

export const compareProducts = defineStore("compare", {
  state: () => ({ store: ref([]), totalCompareQuantity: ref(0) }),
  actions: {
    addToCompare(data) {
      if (this.store.length >= 3) {
        alert("Too many items");
      } else {
        if (this.store.includes(data)) {
          return 0;
        } else {
          this.store.push(data);
          console.log(this.store);
        }
      }
      this.totalCompareQuantity = this.store.length;
    },
    deleteFromCompare(index) {
      this.store.splice(index, 1);
      this.totalCompareQuantity = this.store.length;
    },
  },
});
export const addToCart = defineStore("cart", {
  state: () => ({
    store: ref([]),
    totalprice: ref(0),
    storeQuantity: ref(0),
  }),

  actions: {
    addToCart(data) {
      const existingItem = this.store.find((item) => item.id === data.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
        this.totalprice += existingItem.price;
      } else {
        this.store.push({ ...data, quantity: 1, total: data.price });
        this.totalprice = this.totalprice + parseInt(data.price);
      }
      this.storeQuantity = this.store.length;
    },
    deleteFromCart(data) {
      const existingItem = this.store.find((item) => item.id === data.id);
      console.log(existingItem.quantity);
      this.store.splice(this.store.indexOf(data), 1);
      this.calcTotal();
      this.storeQuantity = this.store.length;
    },
    changeQuanity(data, value) {
      const existingItem = this.store.find((item) => item.id === data.id);
      console.log(value);
      if (value >= 1) {
        existingItem.quantity += value;
        existingItem.total = existingItem.price * existingItem.quantity;
        this.calcTotal();
      } else if (value <= -1) {
        if (existingItem.quantity == 1) {
          this.deleteFromCart(data);
        } else {
          data.quantity -= Math.abs(value);
          existingItem.total -= existingItem.price * Math.abs(value);
          this.calcTotal();
        }
      }
    },
    calcTotal() {
      this.totalprice = 0;
      console.log(this.totalprice);
      this.store.forEach((data) => {
        this.totalprice += data.price * data.quantity;
      });
    },
    orderProducts() {
      this.store = ref([]);
      this.totalprice = ref(0);
      let open = openWindow();
      open.isOpenCart = false;
      alert("Successful");
      this.storeQuantity = ref(0);
    },
  },
});

export const openWindow = defineStore("open", {
  state: () => ({ isOpenCart: ref(false), isOpenCompare: ref(false) }),
  actions: {
    toggleHeightCart() {
      console.log(this.isOpenCart);
      this.isOpenCart = !this.isOpenCart;
    },
    toggleHeightCompare() {
      this.isOpenCompare = !this.isOpenCompare;
    },
  },
});
