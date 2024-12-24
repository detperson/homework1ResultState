import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux";
import { Dispatch } from "redux";
import { ProjectActions } from "./actions";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";


//В этом файле обертки над хуками, что бы использовать их внути проекта с правильными типами

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, ProjectActions>>
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>