import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  wallet: {
    connected: false,
    address: "",
    network: "",
    correctNetwork: false,
    balance: "",
  },
  papers: {
    data: [],
  },
  // funders: {
  //   data: [],
  // },
  contract: {},
  web3: {},
};

// export const getAllPapers = createAsyncThunk(
//   "paper/getAllPapers",
//   async (props) => {
//     // axios call to get all papers
//   }
// );

// export const getfunders = createAsyncThunk(
//   "paper/getfunders",
//   async (props) => {
//     // axios call to get all funders
//   }
// );

const paperSlice = createSlice({
  name: "paper",
  initialState,
  reducers: {
    setWallet: (state, { payload }) => {
      state.wallet.connected = payload.connected;
      state.wallet.address = payload.address;
      state.wallet.network = payload.network;
      state.wallet.correctNetwork = payload.correctNetwork;
      state.wallet.balance = payload.balance;
    },
    setContract: (state, { payload }) => {
      state.contract = payload;
    },
    setWeb3: (state, { payload }) => {
      state.web3 = payload;
    },
    setCorrectNetwork: (state, { payload }) => {
      state.wallet.correctNetwork = payload;
    },
    setPapers: (state, { payload }) => {
      state.papers.data.push( payload);
    },
  },
  // extraReducers: {
  //   [getAllPapers.pending]: (state) => {},
  //   [getAllPapers.fulfilled]: (state, { payload }) => {
  //     state.papers.data = payload;
  //   },
  //   [getfunders.pending]: (state) => {},
  //   [getfunders.fulfilled]: (state, { payload }) => {
  //     state.funders.data = payload;
  //   },
  // },
});

export const { setWallet, setWeb3, setContract, setCorrectNetwork ,setPapers} =
  paperSlice.actions;
export default paperSlice.reducer;
