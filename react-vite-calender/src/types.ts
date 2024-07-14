import { ReactNode, Dispatch, SetStateAction } from "react";

export type Props = {
  children: ReactNode;
};

export type Value = {
  user: String;
  setUser: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
