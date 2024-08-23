import { SidePageLayout, SidePageHeader } from "src/components/SidePage/SidePage";
import CreateCard from "../../CreateCard/CreateCard";
import type { CurrentIdListType } from "../../Card/Card";

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
