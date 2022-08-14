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

    const getPercent = function () {
      return (cartTotal.value * 100) / threshold.value > 100
        ? "100%"
        : (cartTotal.value * 100) / threshold.value + "%";
    };
    const getMessage = function () {
      const percent = (cartTotal.value * 100) / threshold.value;
      if (percent >= 100) {
        return "You get free shipping";
      } else {
        return `You are $${
          (threshold.value - cartTotal.value) / 100
        } away from free shipping`;
      }
    };

    return () =>
      slots.default({
        getPercent,
        getMessage,
      });
  },
};
</script>
