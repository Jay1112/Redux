import Navbar from "../components/nav-bar";

function withAppLayout(Component) {
  return function () {
    return (
      <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
        <Navbar />
        <div className="mx-auto w-full md:max-w-7xl">
          <Component />
        </div>
      </div>
    );
  };
}

export default withAppLayout;
