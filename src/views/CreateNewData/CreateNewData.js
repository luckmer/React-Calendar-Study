import { Button, Form, Article } from "../../styles/views/CreateNewData.Style";
import DataCreator from "./DataCreator/DataCreator";

const CreateNewData = ({ setOpen, open }) => {
  const { handleSubmit, state, handleChange } = DataCreator(setOpen, open);

  return (
    <Article>
      <Form onSubmit={handleSubmit}>
        {state ? state : ""}
        <input type="text" name="text" onChange={handleChange} />{" "}
        <Button type="submit"> Submit </Button>
      </Form>
      <Button onClick={() => setOpen(!open)}> X </Button>
    </Article>
  );
};

export default CreateNewData;
