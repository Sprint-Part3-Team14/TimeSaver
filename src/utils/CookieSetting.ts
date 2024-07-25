import Cookies from "js-cookie";

// 쿠키를 가져오는 함수
export function getCookie(name: string): string | undefined {
  return Cookies.get(name);
}

// accessToken을 쿠키로 저장하는 함수
export function setAccessTokenCookie(accessTokenValue: string): void {
  Cookies.set("accessToken", accessTokenValue, {
    expires: 1 / 24, // 수명: 1시간 (1/24일)
    path: "/",
    secure: true,
    sameSite: "strict",
  });
}

// refreshToken을 쿠키로 저장하는 함수
export function setRefreshTokenCookie(refreshTokenValue: string): void {
  Cookies.set("refreshToken", refreshTokenValue, {
    expires: 7, // 수명: 1주일
    path: "/",
    secure: true,
    sameSite: "strict",
  });
}

// 생성한 모든 쿠키 삭제하는 함수 (accessToken, refreshToken)
export function removeAllTokenCookies(): void {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}

// 쿠키 삭제 함수
export function deleteCookie(name: string): void {
  Cookies.remove(name, { path: "/" });
}
