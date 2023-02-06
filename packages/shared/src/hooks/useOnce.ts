import { useEffect, EffectCallback } from 'react'

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useOnce = (effect: EffectCallback) => useEffect(effect, emptyDeps)

const emptyDeps: any[] = []
