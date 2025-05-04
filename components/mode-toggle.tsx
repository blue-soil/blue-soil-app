import React from "react"

export function ModeToggle() {
  const [mode, setMode] = React.useState<"light" | "dark">(() =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  )

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark")
  }, [mode])

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc", background: "none", cursor: "pointer" }}
    >
      {mode === "dark" ? "🌙" : "☀️"}
    </button>
  )
}
