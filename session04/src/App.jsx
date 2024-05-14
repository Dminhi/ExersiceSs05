import "./App.css";

import FormStudents from "./components/FormStudents";
import NarBar from "./components/NarBar";
import StudentList from "./components/StudentList";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const [dateView, setDataView] = useState({});

  const [checkView, setCheckView] = useState(false);

  const [editButton, setEditButton] = useState("Add")

  const [studentInfo, setStudentInfo] = useState({
    studentCode: "",
    studentName: "",
    age: "",
    sex: "",
    dob: "",
    homeTown: "",
    address: "",
  });

  const handleEdit = (studentCode) => {
    setCheckView(false);
    let student = students.filter((s) => s.studentCode === studentCode);
    console.log(student[0]);
    setStudentInfo(student[0]);
  };

  const handleView = (studentCode) => {
    setCheckView(true);
    let student = students.filter((s) => s.studentCode === studentCode);
    console.log(student[0]);
    setStudentInfo(student[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleDelete = (index) => {
    const newStudent = [...students];
    newStudent.splice(index, 1);
    setStudents(newStudent);

    // setStudents({...students,student=""});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý dữ liệu ở đây, ví dụ: gửi dữ liệu đến server
    console.log(studentInfo);
    setStudents([...students, studentInfo]);
    setStudentInfo({
      studentCode: "",
      studentName: "",
      age: "",
      sex: "",
      dob: "",
      homeTown: "",
      address: "",
    });
    setEditButton('Update')
  };
  return (
    <>
      <div className="container">
        <div>
          <NarBar />
          <StudentList
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleView={handleView}
            students={students}
          />
        </div>
        <div>
          <FormStudents
            editButton = {editButton}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            studentInfo={studentInfo}
            checkView={checkView}
          />
        </div>
      </div>
    </>
  );
}

export default App;
