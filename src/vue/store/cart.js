/**
 * state
 */
const state = {
  items: [],
};

/**
 * getters
 */
const getters = {};

/**
 * mutations
 */
const mutations = {};

/**
 * actions
 */
const actions = {
  addToCart: async (_, { variantId }) => {
    const cartData = {
      items: [
        {
          id: variantId,
          quantity: 1,
        },
      ],
    };

    let isAdded = true;
    try {
      const response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
      const json = await response.json();
      console.log({ json });
    } catch (error) {
      console.error(error);
      isAdded = false;
    }

    return isAdded;
  },

  getCart: async () => {
    let cartItems = {};
    try {
      const response = await fetch("/cart.js", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log({ json });
      cartItems = json;
    } catch (error) {
      console.error(error);
    }

    return cartItems;
  },
};

/**
 * export
 */
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
