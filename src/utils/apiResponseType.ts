import { DetailCard } from "./apiType";

// 대시보드 멤버 조회하기
export interface GetMembersResponse {
  members: MembersData[];
  totalCount: number;
}

export interface MembersData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

// 카드 리스트 조회
export interface ColumnDataType {
  cards: DetailCard[];
  totalCount: number;
  cursorId: null;
}

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

// 내가 받은 초대 목록 조회
export interface MyInvitationListResponse {
  cursorId: number | null;
  invitations: MyInvitationResponse[];
}

export interface MyInvitationResponse {
  id: number;
  inviter: InviterResponse;
}

export interface InviterResponse {
  nickname: string;
  email: string;
  id: number;
}

// 초대 내역 조회
export interface InvitationRecordResponse {
  invitations: InvitationType[];
  totalCount: number;
}

export interface InvitationType {
  id: number;
  inviter: InviterResponse;
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

// 프로필 이미지 업로드
export interface ProfileImageUploadResponse {
  profileImageUrl: string;
}

// 로그인
export interface LoginResponse {
  accessToken: string;
  user: MyProfileResponse;
}

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
