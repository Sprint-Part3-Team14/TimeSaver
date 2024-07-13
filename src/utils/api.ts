import {
  CardListSearch,
  CardSearch,
  ColumnsListSearch,
  CommentsListSearch,
  CreateCard,
  CreateColumns,
  CreateComments,
  CreateDashboard,
  DashboardInvitation,
  DashboardSearch,
  FetchMethod,
  FixCard,
  FixColumns,
  FixCommnets as FixComments,
  FixDashboard,
  InviteDashboard,
  MembersSearch,
  ResponseInvitation,
  UploadProfile,
} from "./apiType";
import { convertQuery } from "./querySetting";

// 기본 url
export const BASE_URL = "https://sp-taskify-api.vercel.app/4-14";

async function fetchWithToken(url: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers as HeadersInit);
  // 쿠키 사용 전까지 임의 주석처리
  // const accessToken = getCookie("accessToken");

  // if (accessToken) {
  //   headers.append("Authorization", `Bearer ${accessToken}`);
  // }

  headers.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzA3MSwidGVhbUlkIjoiNC0xNCIsImlhdCI6MTcyMDg2MTUyMCwiaXNzIjoic3AtdGFza2lmeSJ9.XzcoQtYf0_G-6yRobXrCBBFazSvD8rIWYBSjqCKZupE"
  );

  if (!headers.has("Content-Type") && options.body) {
    headers.append("Content-Type", "application/json");
  }

  const mergedOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, mergedOptions);

  if (!response.ok) {
    const errorResponse = await response.json();
    console.error(errorResponse.message);
    return;
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
 * Auth 관련 부분은 쿠키 로직 작성 후 작성 예정
 */

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
export function getCardInformation(query: CardSearch) {
  const q = convertQuery(query);
  return fetcher(`/cards/${q}`, "GET");
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
// export function getDashboards (query : DashboardListSearch) {
//     const q = convertQuery(query);
//     return fetcher (`/dashboards/${q}`, "GET");
// }

// 대시보드 상세 조회
export function getDashboardDetails(query: DashboardSearch) {
  const q = convertQuery(query);
  return fetcher(`/dashboards/${q}`, "GET");
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
// export function getInvitations (query : InvitationsListSearch) {
//     const q = convertQuery(query);
//     return fetcher (`/invitations/${q}`, "GET");
// }

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
