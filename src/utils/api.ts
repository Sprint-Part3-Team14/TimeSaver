import { DashboardListResponse, LoginResponse } from "./apiResponseType";
import {
  CardListSearch,
  ChangePassword,
  ColumnsListSearch,
  CommentsListSearch,
  CreateCard,
  CreateColumns,
  CreateComments,
  CreateDashboard,
  DashboardInvitation,
  DashboardListSearch,
  FetchMethod,
  FixCard,
  FixColumns,
  FixComments,
  FixDashboard,
  FixProfile,
  InviteDashboard,
  MembersSearch,
  ResponseInvitation,
  SignIn,
  SignUp,
  UploadProfile,
  UserProfile,
} from "./apiType";
import { getCookie, removeAllTokenCookies, setAccessTokenCookie } from "./CookieSetting";
import { convertQuery } from "./querySetting";

// 기본 url
export const BASE_URL = "https://sp-taskify-api.vercel.app/4-14";

async function fetchWithToken(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers as HeadersInit);
  const accessToken = getCookie("accessToken");

  if (accessToken && !headers.has("Authorization")) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (options.body) {
    headers.append("Content-Type", "application/json");
  }

  const mergedOptions: RequestInit = {
    ...options,
    headers,
    credentials: "same-origin", // credentials 옵션 추가
  };

  const response = await fetch(url, mergedOptions);

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse.message);
    return;
  }

  if (response.status === 204) {
    return response;
  }

  return response.json();
}

async function fetcher(endpoint: string, method: FetchMethod, body?: object) {
  const options: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : undefined,
  };

  return await fetchWithToken(`${BASE_URL}${endpoint}`, options);
}

/**
 * Auth
 * 로그인
 * 로그아웃
 * 회원가입
 * 비밀번호 변경
 */

// 로그인
export async function postAuthLogin({ email, password }: SignIn): Promise<LoginResponse> {
  const response = await fetcher("/auth/login", "POST", { email, password });
  if (response && response.accessToken) {
    setAccessTokenCookie(response.accessToken); // 쿠키 설정
  }
  return response;
}

// 로그아웃 (쿠키 제거 로직)
export async function logout() {
  removeAllTokenCookies();
}

interface ApiResponse {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

// 회원가입
export async function postAuthRegister(body: SignUp): Promise<ApiResponse> {
  return fetcher("/users", "POST", body);
}

// 비밀번호 변경
export async function putAuthUpdatedPassword(body: ChangePassword) {
  return fetcher("/auth/password", "PUT", body);
}

/** Cards
 * 카드 생성
 * 카드 목록 조회
 * 카드 수정
 * 카드 상세 조회
 * 카드 삭제
 */

// 카드 생성
export function postCards(body: CreateCard) {
  return fetcher("/cards", "POST", body);
}

// 카드 목록 조회
export function getCardList(query: CardListSearch) {
  const q = convertQuery(query);
  return fetcher(`/cards${q}`, "GET");
}

// 카드 수정
export function putCard(cardId: number, body: FixCard) {
  return fetcher(`/cards/${cardId}`, "PUT", body);
}

// 카드 상세 조회
export function getCardInformation(cardId: number) {
  return fetcher(`/cards/${cardId}`, "GET");
}

// 카드 삭제
export function deleteCard(cardId: number) {
  return fetcher(`/cards/${cardId}`, "DELETE");
}

/**
 * Columns 칼럼
 */

// 칼럼 생성
export function postColumns(body: CreateColumns) {
  return fetcher("/columns", "POST", body);
}

// 칼럼 목록 조회
export function getColumns(query: ColumnsListSearch) {
  const q = convertQuery(query);
  return fetcher(`/columns${q}`, "GET");
}

// 칼럼 수정
export function putColumns(columnId: number, body: FixColumns) {
  return fetcher(`/columns/${columnId}`, "PUT", body);
}

// 칼럼 삭제
export function deleteColumns(columnId: number) {
  return fetcher(`/columns/${columnId}`, "DELETE");
}

// 카드 이미지 업로드
export async function postCardImageFetch(columnId: number, file: File) {
  const accessToken = getCookie("accessToken");

  const imageFormData = new FormData();
  imageFormData.append("image", file);

  const response = await fetch(`${BASE_URL}/columns/${columnId}/card-image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: imageFormData,
  });
  const result = await response.json();
  return result;
}

export function postCardImage(columnId: number, body: UploadProfile) {
  return fetcher(`/columns/${columnId}`, "POST", body);
}

/** Comments
 * 댓글 생성
 * 댓글 목록 조회
 * 댓글 수정
 * 댓글 삭제
 */

// 댓글 생성
export function postComments(body: CreateComments) {
  return fetcher("/comments", "POST", body);
}

// 댓글 목록 조회
export function getComments(query: CommentsListSearch) {
  const q = convertQuery(query);
  return fetcher(`/comments/${q}`, "GET");
}

// 댓글 수정
export function putComments(commentId: number, body: FixComments) {
  return fetcher(`/comments/${commentId}`, "PUT", body);
}

// 댓글 삭제
export function deleteComments(commentId: number) {
  return fetcher(`/comments/${commentId}`, "DELETE");
}

/** Dashboards 대쉬보드
 * 대시보드 생성
 * 대시보드 목록 조회
 * 대시보드 상세 조회
 * 대시보드 수정
 * 대시보드 삭제
 * 대시보드 초대하기
 * 대시보드 초대 불러오기
 * 대시보드 초대 취소
 */

// 대시보드 생성
export function postDashboards(body: CreateDashboard) {
  return fetcher("/dashboards", "POST", body);
}

// // 대시보드 목록 조회
export function getDashboards(props: DashboardListSearch): Promise<DashboardListResponse> {
  return fetcher(
    `/dashboards?navigationMethod=${props.navigationMethod}&page=${props.page ? props.page : 1}&size=${props.size ? props.size : 10}`,
    "GET"
  );
}

// 대시보드 상세 조회
export function getDashboardDetails(dashboardId: number) {
  return fetcher(`/dashboards/${dashboardId}`, "GET");
}

// 대시보드 수정
export function putDashboardDetails(dashboardId: number, body: FixDashboard) {
  return fetcher(`/dashboards/${dashboardId}`, "PUT", body);
}

// 대시보드 삭제
export function deleteDashboard(dashboardId: number) {
  return fetcher(`/dashboards/${dashboardId}`, "DELETE");
}

// 대시보드 초대하기
export function postInvitations(dashboardId: number, body: InviteDashboard) {
  return fetcher(`/dashboards/${dashboardId}/invitations`, "POST", body);
}

// 대시보드 초대 불러오기
export function getDashboardInvitations(dashboardId: number, query: DashboardInvitation) {
  const q = convertQuery(query);
  return fetcher(`/dashboards/${dashboardId}/invitations/${q}`, "GET");
}

// 대시보드 초대 취소
export function deleteDashboardInvitations(dashboardId: number, invitationId: number) {
  return fetcher(`/dashboards/${dashboardId}/invitations/${invitationId}`, "DELETE");
}

// // 내가 받은 초대 목록 조회
export function getMyInvitations({ size = 10 }: { size?: number }) {
  return fetcher(`/invitations?size=${size}`, "GET");
}

// 초대 응답
export function putInvitations(invitationId: number, body: ResponseInvitation) {
  return fetcher(`/invitations/${invitationId}`, "PUT", body);
}

// 대시보드 멤버 목록 조회
export function getMembers(query: MembersSearch) {
  const q = convertQuery(query);
  return fetcher(`/members${q}`, "GET");
}

// 대시보드 멤버 삭제
export function deleteMembers(memberId: number) {
  return fetcher(`/members/${memberId}`, "DELETE");
}

/** Users
 * 회원가입
 * 내 정보 조회
 * 내 정보 수정
 * 프로필 이미지 업로드
 */

// 내 정보 조회
export function getMyProfile() {
  return fetcher("/users/me", "GET");
}

// 내 정보 수정
export function putMyProfile(body: FixProfile) {
  return fetcher("/users/me", "PUT", body);
}

// 프로필 이미지 업로드
export async function postMyProfile(file: File) {
  const accessToken = getCookie("accessToken");

  const imageFormData = new FormData();
  imageFormData.append("image", file);

  const response = await fetch(`${BASE_URL}/users/me/image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: imageFormData,
  });
  const result = await response.json();
  return result;
}

export async function getUserProfile(): Promise<UserProfile> {
  return fetcher("/users/me", "GET");
}
