import React from "react";

export default function StudentList(props) {
  const { handleEdit, handleView, students, handleDelete } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Số thứ tự</th>
          <th>Mã sinh viên</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Giới tính</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map((studentInfo, index) => (
          <tr key={studentInfo.studentCode}>
            <td>{index + 1}</td>
            <td>{studentInfo.studentCode}</td>
            <td>{studentInfo.studentName}</td>
            <td>{studentInfo.age}</td>
            <td>{studentInfo.sex}</td>
            <td>
              <button onClick={() => handleView(studentInfo.studentCode)}>
                Xem
              </button>
              <button onClick={() => handleEdit(studentInfo.studentCode)}>
                Sửa
              </button>
              <button onClick={() => handleDelete(index)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
