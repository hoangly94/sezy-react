import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppState } from '@/store/index'

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default useAppSelector
