const claims = [{ name: "isLogin", value: false }];

function getDefaultState() {
  return {
    claims,
    isLogin: false,
    isClient: true,
    isWorker: false
  };
}

const state = getDefaultState();

const emulateACLoading = async (log, pass) => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (log === "admin" && pass === "admin") {
    return [
      { name: "isLogin", value: true },
      { name: "isWorker", value: true },
      { name: "CanEditEverithing", value: true },
      { name: "ProfileAccess", value: true },
    ];
  } else if (log === "client" && pass === "client") {
    return [
      { name: "isLogin", value: true },
      { name: "isClient", value: true },
      { name: "CanEdit", value: false },
      { name: "ProfileAccess", value: true },
    ];
  } else {
    return getDefaultState().claims;
  }
};

const actions = {
  resetState({ commit }) {
    commit("mResetState");
  },
  async login({ commit }, log, pass) {
    // let payload = await superfetch('/api/v1/login');
    let result = await emulateACLoading(log, pass);

    if (result.error) console.error(result.error);

    commit("setAC", result);
  },
};

const mutations = {
  resetClientState(state) {
    Object.assign(state, getDefaultState());
  },
  setAC(state, payload) {
    state.claims = payload;
    state.isLogin = state.claims.includes((x) => x.name === "isLogin" && x.value);
    state.isClient =
      !state.isLogin || state.claims.includes((x) => x.name === "isClient" && x.Value);
    state.isWorker =
      state.isLogin &&
      !state.isClient &&
      state.claims.includes((x) => x.name === "isWorker" && x.value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
