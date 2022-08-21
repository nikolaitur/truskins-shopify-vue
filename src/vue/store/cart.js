/**
 * state
 */
const state = {
  items: [],
  minicartVisible: false,
};

/**
 * getters
 */
const getters = {};

/**
 * mutations
 */
const mutations = {
  MINICART_TOGGLE(state) {
    state.minicartVisible = !state.minicartVisible;
  },

  MINICART_SHOW(state) {
    state.minicartVisible = true;
  },

  MINICART_HIDE(state) {
    state.minicartVisible = false;
  },
};

/**
 * actions
 */
const actions = {
  addToCart: async (_, { variantId, qty, properties }) => {
    const cartData = {
      items: [
        {
          id: variantId,
          quantity: qty,
          properties: properties,
        },
      ],
    };

    let isAdded = true;
    let cartItems = {};
    try {
      const response = await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
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
    } catch (error) {
      console.error(error);
      isAdded = false;
    }

    return { isAdded: isAdded, cartItems: cartItems };
  },

  changeCart: async (_, { lineId, qty }) => {
    const cartData = {
      line: lineId,
      quantity: qty,
    };

    let cartItems = {};

    try {
      const response = await fetch(`/cart/change.js`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
      try {
        const response = await fetch("/cart.js", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        cartItems = json;
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }

    return { cartItems: cartItems };
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

  minicartToggle({ commit }) {
    commit("MINICART_TOGGLE");
  },

  minicartShow({ commit }) {
    commit("MINICART_SHOW");
  },

  minicartHide({ commit }) {
    commit("MINICART_HIDE");
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
