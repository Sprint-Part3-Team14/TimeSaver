// fetch 요청 타입
export type FetchMethod = "DELETE" | "GET" | "POST" | "PUT" | "PATCH";

/**
 Auth 로그인
 */
//
export interface SignIn {
  email: string;
  password: string;
}

export interface ChangePassword {
  password: string;
  newPassword: string;
}

/**
 Cards 카드 타입
 */

// 카드 목록 조회 쿼리 타입
export interface CardListSearch {
  size: number;
  // cursorId: number;
  [key: string]: number;
}

// 카드 상세 조회 쿼리 타입
export interface CardSearch {
  [key: string]: number;
}

/**
 Columns 칼럼 타입
 */

// 컬럼 목록 조회
export interface ColumnsListSearch {
  [key: string]: number;
}

/**
 Comments 댓글 타입
 */
export interface CommentsListSearch {
  size: number;
  [key: string]: number;
}

/**
 Dashboards 대시보드 타입
 */

export type NavigationMethod = "infiniteScroll" | "pagination";

// 대시보드 목록 조회
export interface DashboardListSearch {
  navigationMethod: NavigationMethod;
  cursorId?: number;
  page?: number;
  size?: number;
}

// 대시보드 상세 조회
// dashboardId : number;

// 대시보드 초대 불러오기
export interface DashboardInvitation {
  [key: string]: number;
  page: number;
  size: number;
}

/**
 * Invitations 초대 타입
 */

// 내가 받은 초대 목록 조회
export interface InvitationsListSearch {
  size?: number;
  cursorId?: number;
  title?: string;
}

// 대시보드 멤버 목록 조회
export interface MembersSearch {
  [key: string]: number | undefined;
  page: number;
  size?: number;
  dashboardId: number;
}

/**
 * Body
 * 동사가 앞에 있기에 Body가 맞습니다.
 */
// 카드 상세 조회
export interface DetailCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    id: number;
    nickname: string;
    profileImageUrl: string;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}

// 카드 생성
export interface CreateCard {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string;
}

// 카드 수정
export type FixCard = Omit<CreateCard, "dashboardId">;

// 칼럼 생성
export interface CreateColumns {
  title: string;
  dashboardId: number;
}

// 칼럼 수정
export interface FixColumns {
  title: string;
}

// 댓글 조회
export interface GetComments {
  cursorId: number;
  comments: Comment[];
}

// 댓글
export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}

// 댓글 생성
export interface CreateComments {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

// 댓글 수정
export interface FixComments {
  content: string;
}

// 대시보드 생성
export interface CreateDashboard {
  title: string;
  color: string;
}

// 대시보드 수정
export interface FixDashboard {
  title: string;
  color: string;
}

// 대시보드 초대하기
export interface InviteDashboard {
  email: string;
}

// 초대 응답
export interface ResponseInvitation {
  inviteAccepted: boolean;
}

// 회원가입
export interface SignUp {
  terms: any;
  email: string;
  nickname: string;
  password: string;
}

//q 비밀번호 변경
export interface ChangePassword {
  password: string;
  newPassword: string;
}

// 내 정보 수정
export interface FixProfile {
  nickname: string;
  profileImageUrl: string | null;
}

// 프로필 이미지 업로드
export interface UploadProfile {
  image: string;
}

// 내 정보 조회
export interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

//
export interface DashboardSearch {
  id: number;
}
