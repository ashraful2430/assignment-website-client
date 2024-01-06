import useRecent from "../../../Hooks/useRecent";

const Recent = () => {
  const [recent, isLoading] = useRecent();
  console.log(recent, isLoading);
  return <div>Recent Assignments</div>;
};

export default Recent;
