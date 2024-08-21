import { SidePage, SidePageHeader } from "src/components/SidePage/SidePage";
import CreateCard from "../../CreateCard/CreateCard";

const CreateCardWidth = `
  width : 40%;
`;

const CreateCardPage = ({
  handleClose,
  dashboardId,
  columnId,
}: {
  handleClose: () => void;
  dashboardId: number;
  columnId: number;
}) => {
  return (
    <SidePage handleClose={handleClose} addStyle={CreateCardWidth}>
      <SidePageHeader handleClosing={handleClose} />
      <CreateCard dashboardId={dashboardId} columnId={columnId} handleClosePage={handleClose} />
    </SidePage>
  );
};

export default CreateCardPage;
