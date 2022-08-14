<script>
import { toRefs, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    threshold: {
      type: Number,
      required: true,
    },
    cartTotal: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const store = useStore();

    const { threshold, cartTotal } = toRefs(props);

    const totalAmount = ref(cartTotal.value);
    const percent = ref(0);
    const message = ref("");

    const updateCart = async () => {
      const response = await store.dispatch("cart/getCart", {});
      totalAmount.value = response.total_price;
    };

    const getPercent = function () {
      return (totalAmount.value * 100) / threshold.value > 100
        ? "100%"
        : (totalAmount.value * 100) / threshold.value + "%";
    };
    const getMessage = function () {
      const percent = (totalAmount.value * 100) / threshold.value;
      if (percent >= 100) {
        return "You get free shipping";
      } else {
        return `You are $${
          (threshold.value - totalAmount.value) / 100
        } away from free shipping`;
      }
    };
    document.addEventListener("cartUpdate", updateCart);

    return () =>
      slots.default({
        getPercent,
        getMessage,
      });
  },
};
</script>
