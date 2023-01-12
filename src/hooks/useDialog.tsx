import useDialogStore from '@/store/useDialogStore';

/** Hook to use dialog cleanly */
export default function useDialog() {
  return useDialogStore.useDialog();
}
