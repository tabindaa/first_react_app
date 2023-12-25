const Shimmer = () => {
  return (
    <div className="restaurant-list">
      <div className="shimmer-container"></div>
      {Array(10)
        .fill("a")
        .map((i, j) => {
          return <div key={j} className="shimmer-container"></div>;
        })}
    </div>
  );
};
export default Shimmer;
