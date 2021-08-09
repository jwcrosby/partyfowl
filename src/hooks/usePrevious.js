import {useRef, useEffect} from 'react'

export const usePrevious = (prev) => {
    const ref = useRef()
    useEffect(() => {
        ref.current = prev
    },[prev])
    return ref.current
}