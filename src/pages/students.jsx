import { useState, useEffect } from "react";
import axiosClient from "../services/axiosClient";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", course: "", year: "" });

  useEffect(() => { fetchStudents(); }, []);

const fetchStudents = async () => {
  try {
    const result = await axiosClient.get("/students.php"); // ✅ GET only
    setStudents(result.data); // ✅ actually save the data to state
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/students.php", formData);
      setFormData({ name: "", course: "", year: "" });
      fetchStudents();
    } catch (error) { console.error("Insert error:", error); }
  };

  return (
    <div>
      <h4 className="mb-3">Student List</h4>

        <form className="row g-3 mb-4" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange}/>
          </div>
          <div className="col-md-4">
            <input type="text" name="course" className="form-control" placeholder="Course" value={formData.course} onChange={handleChange}/>
          </div>
          <div className="col-md-2">
            <input type="text" name="year" className="form-control" placeholder="Year" value={formData.year} onChange={handleChange}/>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-secondary w-100">Add</button>
          </div>
        </form>

      <table className="table table-bordered">
        <thead className="table-secondary">
          <tr><th>ID</th><th>Name</th><th>Course</th><th>Year</th></tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr><td colSpan="4" className="text-center">No students found</td></tr>
          ) : (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};