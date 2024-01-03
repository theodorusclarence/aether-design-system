import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { DialogOptions } from '@/components/dialog/BaseDialog';

type DialogStoreType = {
  awaitingPromise: {
    resolve?: () => void;
    reject?: () => void;
  };
  open: boolean;
  state: DialogOptions;
  dialog: (options: Partial<DialogOptions>) => Promise<void>;
  handleClose: () => void;
  handleSubmit: () => void;
};

const useDialogStoreBase = create<DialogStoreType>((set) => ({
  awaitingPromise: {},
  open: false,
  state: {
    title: 'Title',
    description: 'Description',
    submitText: 'Yes',
    variant: 'warning',
    catchOnCancel: false,
    listenForLoadingToast: false,
  },
  dialog: (options) => {
    set(
      produce<DialogStoreType>((state) => {
        state.open = true;
        state.state = { ...state.state, ...options };
      }),
    );
    return new Promise<void>((resolve, reject) => {
      set(
        produce<DialogStoreType>((state) => {
          state.awaitingPromise = { resolve, reject };
        }),
      );
    });
  },
  handleClose: () => {
    set(
      produce<DialogStoreType>((state) => {
        state.state.catchOnCancel && state.awaitingPromise?.reject?.();
        state.open = false;
      }),
    );
  },
  handleSubmit: () => {
    set(
      produce<DialogStoreType>((state) => {
        state.awaitingPromise?.resolve?.();
        state.open = false;
      }),
    );
  },
}));

const useDialogStore = createSelectorHooks(useDialogStoreBase);

export default useDialogStore;
