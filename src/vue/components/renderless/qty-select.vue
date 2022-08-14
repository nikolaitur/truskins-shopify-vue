<script>
import { toRefs, ref } from "vue";

export default {
  props: {
    qty: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    console.log(props.qty);
    const { qty } = toRefs(props);
    const updatedQty = ref(qty.value);

    return () =>
      slots.default({
        increase: () => {
          updatedQty.value++;
        },

        decrease: () => {
          updatedQty.value > 2 ? updatedQty.value-- : updatedQty.value;
        },

        updatedQty: updatedQty.value,
      });
  },
};
</script>
