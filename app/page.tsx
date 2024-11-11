import Helloclient from "./helloclient";

export default function Home() {
  console.log("Server component")
  return (
    <>
      <div className="test-3xl">Welcome to next js</div>
      <Helloclient />
    </>

  );
}
