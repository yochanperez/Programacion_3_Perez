// src/lib/urls.ts
export function profileImageUrl(filename?: string | null) {
  if (!filename) return undefined
  return `${import.meta.env.VITE_API_BASE_URL}/profile/${filename}`
}

// src/lib/urls.ts (agregar)
export function googleAuthUrl(state?: string) {
  const base = `${import.meta.env.VITE_API_BASE_URL}/auth/google`
  return state ? `${base}?state=${encodeURIComponent(state)}` : base
}

// src/lib/urls.ts (agregar)
// use a lightweight local shape to avoid tight coupling to the project's User type
export function avatarSrc(user?: { avatarUrl?: string | null; profile?: string | null } | null) {
  if (!user) return undefined
  return user.avatarUrl ?? profileImageUrl(user.profile)
}