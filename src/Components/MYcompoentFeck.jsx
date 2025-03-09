import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MyComponentFeck = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Skeleton width={50} count="3" duration={2} />
            </td>
          </tr>
        </tbody>
      </table>
      <Skeleton width={200} height={30} />
      <Skeleton width={"100%"} height={100} circle={true} />
      <Skeleton
        count={3}
        width={150}
        height={20}
        style={{ margin: "5px 0" }}
        highlightColor="red"
      />
    </div>
  );
};

export default MyComponentFeck;
