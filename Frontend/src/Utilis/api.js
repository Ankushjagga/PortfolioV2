import Cookies from "js-cookie";

export const getToken = () => Cookies.get("token");

export const getRole = () => Cookies.get("role");

/** True only when we hold a token AND it was issued to an admin. */
export const isAdmin = () => Boolean(getToken()) && getRole() === "admin";

/**
 * Spread into a fetch `headers` object on any request the API guards.
 * Returns nothing when logged out so the request still goes out (and comes
 * back as a clean 401) instead of sending `Bearer undefined`.
 */
export const authHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const clearSession = () => {
  Object.keys(Cookies.get()).forEach((name) => Cookies.remove(name));
};

/**
 * The server rejected our token (expired, revoked, or the user was demoted).
 * Drop the stale session and send the browser back to the login screen.
 */
export const handleUnauthorized = (status) => {
  if (status !== 401 && status !== 403) return false;
  clearSession();
  if (window.location.pathname !== "/login") {
    window.location.replace("/login");
  }
  return true;
};

/**
 * Reads `exp` out of the JWT payload so we can log out on the client before
 * bothering the server. A token we can't parse is treated as expired.
 */
export const isTokenExpired = (token = getToken()) => {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (!payload.exp) return false;
    return payload.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
};
