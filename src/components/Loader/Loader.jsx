import { DNA } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
export default Loader;
