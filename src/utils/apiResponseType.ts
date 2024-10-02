import { DetailCard } from "./apiType";

/**
 회원 관련
 */
//

// 유저 정보
export interface InviterResponse {
  nickname: string;
  email: string;
  id: number;
}

// 프로필 이미지 업로드
export interface ProfileImageUploadResponse {
  profileImageUrl: string;
}

// 로그인
export interface LoginResponse {
  accessToken: string;
  user: MyProfileResponse;
}

// 내 정보 조회
export interface MyProfileResponse {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

/**
 Cards 카드 타입
 */

// 카드 리스트 조회
export interface ColumnDataType {
  cards: DetailCard[];
  totalCount: number;
  cursorId: null;
}

/**
 Columns 칼럼 타입
 */

// 컬럼 리스트
export interface ColumnListResponse {
  result: string;
  data: ColumnResponse[];
}

export interface ColumnResponse {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

/**
 Comments 댓글 타입
 */

/**
 Dashboards 대시보드 타입
 */

// 대시보드 목록 조회
export interface DashboardListResponse {
  dashboards: DashboardInfoData[];
  totalCount: number;
  cursorId: null | number;
}

export interface DashboardInfoData {
  color: string;
  createdAt: string;
  createdByMe: boolean;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

// 대시보드 멤버 조회하기
export interface GetMembersResponse {
  members: MembersData[];
  totalCount: number;
}

export interface MembersData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

// 대시보드 초대 내역 조회
export interface InvitationRecordResponse {
  invitations: InvitationType[];
  totalCount: number;
}

export interface InvitationType {
  createdAt: string;
  dashboard: { id: number; title: string };
  id: number;
  inviteAccepted: null;
  invitee: InviteeType;
  inviter: InviteeType;
  teamId: string;
  updatedAt: string;
}

export interface InviteeType {
  id: number;
  email: string;
  nickname: string;
}

/**
 * Invitations 초대 타입
 */

// 내가 받은 초대 목록 조회
export interface MyInvitationListResponse {
  cursorId: number | null;
  invitations: MyInvitationResponse[];
}

export interface MyInvitationResponse {
  id: number;
  inviter: InviterResponse;
}
