<script>
import { toRefs, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup(props, { slots }) {
    const store = useStore();
    const isLoading = ref(false);

    return () =>
      slots.default({
        isLoading: isLoading.value,
        addToCart: async (event) => {
          console.log(event);
          const form = event.target;
          isLoading.value = true;
          const variantId = form.querySelector('[name="id"]').value;
          const qty = form.querySelector('[name="quantity"]').value;
          const response = await store.dispatch("cart/addToCart", {
            variantId: variantId,
            qty: qty,
          });
          if (response.isAdded) {
            document.dispatchEvent(
              new CustomEvent("cartUpdate", {
                detail: response.cartItems,
              })
            );

            document.dispatchEvent(
              new CustomEvent("cartCountUpdate", {
                detail: response.cartItems.item_count,
              })
            );
          }
          isLoading.value = false;
          store.dispatch("cart/minicartShow");
        },
      });
  },
};
</script>
