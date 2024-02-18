import UseMemo_example from "./UseMemo_example";
const UserCard = ({ data }) => {
    return (
        <li>
            {data.name}
        </li>
    );
}
export default UserCard;    