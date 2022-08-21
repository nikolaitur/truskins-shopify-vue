<script>
import { toRefs, ref } from "vue";
import { useStore } from "vuex";
import cart from "@/vue/store/cart";

export default {
  setup(props, { slots }) {
    const store = useStore();

    const cartData = ref({});

    const cartInitialLoad = async () => {
      const response = await store.dispatch("cart/getCart", {});
      cartData.value = response;
      console.log(cartData);
    };

    const updateCart = (event) => {
      cartData.value = event.detail;
    };

    const formatMoney = (money) => {
      return `$${money / 100}`;
    };

    const updateItem = async (index, qty) => {
      const response = await store.dispatch("cart/changeCart", {
        lineId: index + 1,
        qty: qty,
      });
      cartData.value = response.cartItems;

      document.dispatchEvent(
        new CustomEvent("cartCountUpdate", {
          detail: response.cartItems.item_count,
        })
      );
    };

    const reChargeProcessCart = () => {
      let token = "";
      function get_cookie(name) {
        return (document.cookie.match("(^|; )" + name + "=([^;]*)") || 0)[2];
      }
      do {
        token = get_cookie("cart");
      } while (token == undefined);
      try {
        var ga_linker = ga.getAll()[0].get("linkerParam");
      } catch (err) {
        var ga_linker = "";
      }
      return `https://checkout.rechargeapps.com/r/checkout?myshopify_domain=${myshopify_domain}&cart_token=${token}&${ga_linker}`;
    };

    const getCheckoutUrl = () => {
      for (let index in cartData.value.items) {
        if (
          cartData.value.items[index].properties &&
          cartData.value.items[index].properties.shipping_interval_frequency
        ) {
          return reChargeProcessCart();
        }
      }

      return "/checkout";
    };

    document.addEventListener("cartUpdate", updateCart);
    document.addEventListener("cartInitialLoad", cartInitialLoad);

    return () =>
      slots.default({
        cartData: cartData.value,
        formatMoney,
        updateItem,
        getCheckoutUrl,
      });
  },
};
</script>
