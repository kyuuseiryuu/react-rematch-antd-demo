import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { notification } from "antd";

export const count = createModel<RootModel>()({
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload: number) {
      return state + payload;
    },
    setNewCount(_, newCount: number) {
      return newCount;
    }
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {
      console.log("This is current root state", state);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async restoreCount() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const savedValue = localStorage.getItem('count');
      dispatch.count.setNewCount(+(savedValue ?? 0));
      notification.success({
        description: 'OK',
        message: 'Count value has restored!'
      });
    },
    async saveCount(payload: number, state) {
      console.log("Root state", state);
      console.log("Save", payload);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem('count', payload.toString());
      notification.success({
        description: 'OK',
        message: 'Count value saved!'
      });
    }
  }),
});