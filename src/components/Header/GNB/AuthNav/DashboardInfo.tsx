import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";
import Members, { MembersProps } from "./Members";

import * as S from "./DashboardInfoStyled";

interface DashboardInfoProps {
  createdByMe?: boolean;
  memberList?: MembersProps;
  dashboardId: number;
}

const DashboardInfo = ({ createdByMe = false, memberList, dashboardId }: DashboardInfoProps) => {
  return (
    <S.DashboardInfoContainer>
      {createdByMe && (
        <Link to={`/dashboard/${dashboardId}/edit`}>
          <Button styleVariant="default" size="normal" fontSize="small">
            관리
          </Button>
        </Link>
      )}
      {memberList && <Members members={memberList.members} totalCount={memberList.totalCount} />}
    </S.DashboardInfoContainer>
  );
};

export default DashboardInfo;
