const API = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8001";

export async function postJSON(path: string, data: unknown) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}
