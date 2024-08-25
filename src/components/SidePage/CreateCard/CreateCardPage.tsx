import { SidePageLayout, SidePageHeader } from "src/components/SidePage/SidePage";
import CreateCard from "src/pages/Dashboard/components/CreateCard/CreateCard";
import type { CurrentIdListType } from "src/pages/Dashboard/components/Card/Card";

const CreateCardWidth = `
  width : 40%;
`;

const CreateCardPage = ({
  handleClose,
  currentIdList,
}: {
  handleClose: () => void;
  currentIdList: CurrentIdListType;
}) => {
  return (
    <SidePageLayout handleClose={handleClose} addStyle={CreateCardWidth}>
      <SidePageHeader handleClosing={handleClose} />
      <CreateCard currentIdList={currentIdList} handleClosePage={handleClose} />
    </SidePageLayout>
  );
};

export default CreateCardPage;
