import { useState } from "react";
import { Redirect } from "react-router-dom";
import { TextDesign } from "../TextDesign";
import { Buttons } from "../Buttons";
import {
  Article,
  SideBar,
  TextPanel,
  Description,
  Header,
  UserHeader,
  Style,
  Card,
} from "../../../styles/views/Details.Style";

function Details({ match }) {
  const [state, setState] = useState({ description: "", color: "" });
  const { id } = match.params;

  const { apiDataView, typeColor, colors, typeText } = TextDesign(id);
  const { SetColor, handleSubmit, DeletePost } = Buttons(id, setState, state);

  return apiDataView ? (
    <Article>
      <Header
        userSelection={apiDataView.colorType}
        Fake={typeColor ? typeColor : state.color}
      ></Header>
      <UserHeader>
        <h1> {apiDataView.filter.text}</h1>
      </UserHeader>
      <Card>
        <span>Colors</span>
        <div>
          {colors.map((item) => (
            <Style key={item} color={item} onClick={() => SetColor(item)} />
          ))}
        </div>
        <div>
          <Description>
            <h3>description</h3>
          </Description>
          <TextPanel>
            <form onSubmit={handleSubmit}>
              <textarea
                value={state.description}
                name="description"
                type="text"
                onChange={(e) =>
                  setState({
                    ...state,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              <button type="submit">Submit</button>
            </form>
            <div>{typeText && typeText}</div>
          </TextPanel>
        </div>
      </Card>
      <SideBar>
        <button onClick={() => DeletePost(apiDataView._id)}>Delete</button>
      </SideBar>
    </Article>
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { referrer: "/" },
      }}
    />
  );
}

export default Details;
