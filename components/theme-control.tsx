'use client'

import { useEffect, useState } from 'react'
import { isThemePreference, THEME_STORAGE_KEY, type ThemePreference } from '@/lib/theme'

export function ThemeControl() {
  const [preference, setPreference] = useState<ThemePreference>('system')

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => {
      const saved = document.documentElement.dataset.themePreference
      const next = isThemePreference(saved) ? saved : 'system'
      setPreference(next)
      document.documentElement.dataset.theme = next === 'system' ? (media.matches ? 'dark' : 'light') : next
    }
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return
      document.documentElement.dataset.themePreference = isThemePreference(event.newValue) ? event.newValue : 'system'
      update()
    }
    update()
    media.addEventListener('change', update)
    window.addEventListener('storage', syncStorage)
    return () => {
      media.removeEventListener('change', update)
      window.removeEventListener('storage', syncStorage)
    }
  }, [])

  const changeTheme = (next: ThemePreference) => {
    setPreference(next)
    document.documentElement.dataset.themePreference = next
    document.documentElement.dataset.theme = next === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : next
    try { localStorage.setItem(THEME_STORAGE_KEY, next) } catch {}
  }

  return (
    <select
      aria-label="화면 테마"
      title="화면 테마"
      value={preference}
      onChange={(event) => {
        if (isThemePreference(event.target.value)) changeTheme(event.target.value)
      }}
      className="theme-control"
    >
      <option value="system">자동</option>
      <option value="light">라이트</option>
      <option value="dark">다크</option>
    </select>
  )
}
