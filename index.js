function accessor(column){
  return function (d){
    return d[column];
  };
}
export default accessor;
