
const EmployeeCard = ({ employee }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded p-6 m-4">
      <h2 className="text-lg font-semibold mb-4">{employee.name}</h2>
      <div className="text-gray-700">
        <p>Age: {employee.age}</p>
        <p>Address: {employee.address}</p>
        <p>Salary: {employee.salary}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
