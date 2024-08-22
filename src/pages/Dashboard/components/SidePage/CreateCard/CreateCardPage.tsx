import { SidePage, SidePageHeader } from "src/components/SidePage/SidePage";
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
    <SidePage handleClose={handleClose} addStyle={CreateCardWidth}>
      <SidePageHeader handleClosing={handleClose} />
      <CreateCard currentIdList={currentIdList} handleClosePage={handleClose} />
    </SidePage>
  );
};

export default CreateCardPage;
