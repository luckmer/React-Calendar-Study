import DataCreator from "./DataCreator/DataCreator";
import {
  Button,
  Form,
  Article,
  ButtonPanel,
} from "../../styles/views/CreateNewData.Style";

const CreateNewData = ({ setOpen, open }) => {
  const { handleSubmit, state, handleChange } = DataCreator(setOpen, open);

  return (
    <Article>
      <Form onSubmit={handleSubmit}>
        {state ? state : ""}
        <input type="text" name="text" onChange={handleChange} />{" "}
        <ButtonPanel>
          <Button type="submit"> Submit </Button>
          <Button onClick={() => setOpen(!open)}> X </Button>
        </ButtonPanel>
      </Form>
    </Article>
  );
};

export default CreateNewData;
