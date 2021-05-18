import { Article, HeaderBox, Header } from "../../styles/components/NavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import P from "./P";

function NavBar() {
  const state = useSelector((state) => state.data);
  return (
    <Article>
      <HeaderBox>
        <Header>
          <Button type="Minus">-</Button>
          <P type="Reset">
            <Link to="/">
              {state.todayMonthName} {state.todayFullDate}
            </Link>
          </P>
          <Button type="Add">+</Button>
        </Header>
      </HeaderBox>
    </Article>
  );
}

export default NavBar;
