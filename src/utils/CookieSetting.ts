import Cookies from "js-cookie";

// 쿠키를 가져오는 함수
export function getCookie(name: string): string | undefined {
  const cookie = Cookies.get(name);
  console.log(`Get Cookie [${name}]:`, cookie); // 로그 추가
  return cookie;
}

// accessToken을 쿠키로 저장하는 함수
export function setAccessTokenCookie(accessTokenValue: string): void {
  Cookies.set("accessToken", accessTokenValue, {
    expires: 1 / 48, // 30분
    path: "/",
    // secure: true, // 로컬에서는 주석처리
    sameSite: "strict",
  });
  console.log("AccessToken set in cookie:", accessTokenValue); // 로그 추가
}

// refreshToken을 쿠키로 저장하는 함수
export function setRefreshTokenCookie(refreshTokenValue: string): void {
  Cookies.set("refreshToken", refreshTokenValue, {
    expires: 5, // 5일
    path: "/",
    // secure: true, // 로컬에서는 주석처리
    sameSite: "strict",
  });
  console.log("RefreshToken set in cookie:", refreshTokenValue); // 로그 추가
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
