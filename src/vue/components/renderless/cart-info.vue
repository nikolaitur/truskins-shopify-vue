<script>
import { ref } from "vue";

export default {
  setup(props, { slots }) {
    const cartSize = ref(0);

    const updateCart = (event) => {
      console.log({ event });
      const cart = event.detail;
      const itemCount = cart ? cart : 0;
      cartSize.value = itemCount;
    };
    document.addEventListener("cartCountUpdate", updateCart);

    return () =>
      slots.default({
        cartSize: cartSize.value,
      });
  },
};
</script>
