<script>
import { toRefs, ref } from "vue";
import { useStore } from "vuex";

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

    document.addEventListener("cartUpdate", updateCart);
    document.addEventListener("cartInitialLoad", cartInitialLoad);

    return () =>
      slots.default({
        cartData: cartData.value,
        formatMoney,
        updateItem,
      });
  },
};
</script>
