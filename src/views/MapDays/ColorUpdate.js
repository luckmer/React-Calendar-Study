import { Link } from "react-router-dom";
import { UpdateColor } from "../../styles/views/MapDays.Style";

export function ColorUpdate(
  result,
  TestMonth,
  TestYear,
  item,
  id,
  NoteDragStart
) {
  return result && TestMonth && TestYear && item.id === id - 1 ? (
    <UpdateColor
      key={item._id}
      ColorType={item.colorType}
      draggable
      id={id - 1}
      onDragStart={(e) => NoteDragStart(e, item._id)}
    >
      <Link to={`/${item._id}?proxy=${id - 1}`} id="block">
        <p id="block">- {item.filter.text}</p>
        <span id="block">{item.description ? "✓" : ""}</span>
      </Link>
    </UpdateColor>
  ) : (
    ""
  );
}
